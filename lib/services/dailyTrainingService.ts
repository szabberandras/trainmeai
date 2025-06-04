// lib/services/dailyTrainingService.ts - Daily training progression service

import { db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { DailyProgression, Workout, Program, NutritionGuidance, WorkoutFeedback } from '@/types/index';
import { canGenerateTrainingDay, incrementDaysUsed } from '@/app/components/auth/userProfileService';

export interface GenerateNextDayRequest {
  userId: string;
  programId: string;
  skipDays?: number[]; // Days to skip (e.g., [1, 2] means skip day 1 and 2)
  makeupDays?: number; // Number of makeup days needed
  customRequest?: string; // Custom user request for the day
}

export interface GenerateNextDayResponse {
  success: boolean;
  dayGenerated?: number;
  workout?: Workout;
  nutritionGuidance?: NutritionGuidance;
  daysRemaining?: number;
  error?: string;
}

export class DailyTrainingService {
  
  /**
   * Generate the next training day for a user's program
   */
  async generateNextDay(request: GenerateNextDayRequest): Promise<GenerateNextDayResponse> {
    try {
      // Check if user can generate more days
      const eligibility = await canGenerateTrainingDay(request.userId);
      if (!eligibility.canGenerate) {
        return {
          success: false,
          error: eligibility.reason || 'Cannot generate more training days',
          daysRemaining: eligibility.daysRemaining
        };
      }

      // Get current program state
      const program = await this.getUserProgram(request.userId, request.programId);
      if (!program) {
        return { success: false, error: 'Program not found' };
      }

      // Determine next day to generate
      const nextDay = this.calculateNextDay(program, request.skipDays);
      
      // Generate workout for the day
      const workout = await this.generateWorkoutForDay(
        program, 
        nextDay, 
        request.makeupDays || 0,
        request.customRequest
      );

      // Generate nutrition guidance
      const nutritionGuidance = this.generateNutritionGuidance(workout, program);

      // Create daily progression entry
      const dailyProgression: DailyProgression = {
        day: nextDay,
        date: new Date(),
        workout,
        completed: false,
        skipped: false,
        nutritionGuidance,
        generatedAt: new Date()
      };

      // Update program with new day
      await this.updateProgramWithNewDay(request.userId, request.programId, dailyProgression);

      // Increment user's days used (for freemium tracking)
      await incrementDaysUsed(request.userId);

      return {
        success: true,
        dayGenerated: nextDay,
        workout,
        nutritionGuidance,
        daysRemaining: eligibility.daysRemaining - 1
      };

    } catch (error) {
      console.error('Error generating next training day:', error);
      return { success: false, error: 'Failed to generate training day' };
    }
  }

  /**
   * Mark a day as completed with optional feedback
   */
  async completeDay(
    userId: string, 
    programId: string, 
    day: number, 
    feedback?: {
      exercises: Array<{
        exerciseId: string;
        completed: boolean;
        actualSets?: number;
        actualReps?: number | string;
        actualWeight?: number;
        rpe?: number;
        notes?: string;
      }>;
      overallRating: number;
      difficulty: number;
      enjoyment: number;
      notes?: string;
    }
  ): Promise<boolean> {
    try {
      const programRef = doc(db, 'users', userId, 'programs', programId);
      const programDoc = await getDoc(programRef);
      
      if (!programDoc.exists()) return false;
      
      const program = programDoc.data() as Program;
      const dayIndex = program.dailyProgression.findIndex(d => d.day === day);
      
      if (dayIndex === -1) return false;
      
      // Update the specific day
      program.dailyProgression[dayIndex].completed = true;
      
      // Create proper WorkoutFeedback object
      if (feedback) {
        const workoutFeedback: WorkoutFeedback = {
          rating: Math.min(5, Math.max(1, Math.round(feedback.overallRating))) as 1 | 2 | 3 | 4 | 5,
          difficulty: Math.min(5, Math.max(1, Math.round(feedback.difficulty))) as 1 | 2 | 3 | 4 | 5,
          notes: feedback.notes,
          timestamp: new Date()
        };
        program.dailyProgression[dayIndex].feedback = workoutFeedback;
      }
      
      program.dailyProgression[dayIndex].modifiedAt = new Date();
      
      // Update workout exercises with actual performance
      if (feedback?.exercises && program.dailyProgression[dayIndex].workout) {
        feedback.exercises.forEach(exerciseFeedback => {
          const exercise = program.dailyProgression[dayIndex].workout!.exercises.find(
            e => e.id === exerciseFeedback.exerciseId
          );
          if (exercise) {
            exercise.completed = exerciseFeedback.completed;
            exercise.actualSets = exerciseFeedback.actualSets;
            exercise.actualReps = exerciseFeedback.actualReps;
            exercise.actualWeight = exerciseFeedback.actualWeight;
            exercise.rpe = exerciseFeedback.rpe;
            exercise.notes = exerciseFeedback.notes;
            
            // Add to progression history
            if (!exercise.progressionHistory) exercise.progressionHistory = [];
            exercise.progressionHistory.push({
              date: new Date(),
              sets: exerciseFeedback.actualSets || exercise.sets || 0,
              reps: exerciseFeedback.actualReps || exercise.reps || 0,
              weight: exerciseFeedback.actualWeight,
              rpe: exerciseFeedback.rpe,
              notes: exerciseFeedback.notes
            });
          }
        });
      }
      
      // Update program
      await setDoc(programRef, program);
      return true;
      
    } catch (error) {
      console.error('Error completing day:', error);
      return false;
    }
  }

  /**
   * Skip a day with reason
   */
  async skipDay(userId: string, programId: string, day: number, reason?: string): Promise<boolean> {
    try {
      const programRef = doc(db, 'users', userId, 'programs', programId);
      const programDoc = await getDoc(programRef);
      
      if (!programDoc.exists()) return false;
      
      const program = programDoc.data() as Program;
      const dayIndex = program.dailyProgression.findIndex(d => d.day === day);
      
      if (dayIndex === -1) return false;
      
      program.dailyProgression[dayIndex].skipped = true;
      
      // Create proper WorkoutFeedback for skipped day
      const skipFeedback: WorkoutFeedback = {
        rating: 1, // Default low rating for skipped
        difficulty: 1, // Not applicable for skipped
        notes: reason || 'Day skipped',
        timestamp: new Date()
      };
      program.dailyProgression[dayIndex].feedback = skipFeedback;
      program.dailyProgression[dayIndex].modifiedAt = new Date();
      
      await setDoc(programRef, program);
      return true;
      
    } catch (error) {
      console.error('Error skipping day:', error);
      return false;
    }
  }

  /**
   * Replace/modify a workout for a specific day
   */
  async modifyWorkout(
    userId: string, 
    programId: string, 
    day: number, 
    modifications: {
      replaceExercise?: { oldExerciseId: string; newExerciseId: string; reason: string };
      adjustIntensity?: number; // percentage change
      swapWithDay?: number; // swap with another day
      customRequest?: string; // AI-generated modification
    }
  ): Promise<boolean> {
    try {
      const programRef = doc(db, 'users', userId, 'programs', programId);
      const programDoc = await getDoc(programRef);
      
      if (!programDoc.exists()) return false;
      
      const program = programDoc.data() as Program;
      const dayIndex = program.dailyProgression.findIndex(d => d.day === day);
      
      if (dayIndex === -1) return false;
      
      const dailyProgression = program.dailyProgression[dayIndex];
      
      if (modifications.replaceExercise && dailyProgression.workout) {
        // Replace specific exercise
        const exerciseIndex = dailyProgression.workout.exercises.findIndex(
          e => e.id === modifications.replaceExercise!.oldExerciseId
        );
        
        if (exerciseIndex !== -1) {
          // Store substitution record
          if (!dailyProgression.workout.substitutions) {
            dailyProgression.workout.substitutions = [];
          }
          dailyProgression.workout.substitutions.push({
            originalExerciseId: modifications.replaceExercise.oldExerciseId,
            newExerciseId: modifications.replaceExercise.newExerciseId,
            reason: modifications.replaceExercise.reason,
            date: new Date()
          });
          
          // TODO: Replace with actual exercise from database
          // For now, just update the ID
          dailyProgression.workout.exercises[exerciseIndex].id = modifications.replaceExercise.newExerciseId;
        }
      }
      
      if (modifications.swapWithDay) {
        // Swap workouts between days
        const otherDayIndex = program.dailyProgression.findIndex(d => d.day === modifications.swapWithDay);
        if (otherDayIndex !== -1) {
          const tempWorkout = program.dailyProgression[dayIndex].workout;
          program.dailyProgression[dayIndex].workout = program.dailyProgression[otherDayIndex].workout;
          program.dailyProgression[otherDayIndex].workout = tempWorkout;
        }
      }
      
      dailyProgression.modifiedAt = new Date();
      await setDoc(programRef, program);
      return true;
      
    } catch (error) {
      console.error('Error modifying workout:', error);
      return false;
    }
  }

  /**
   * Get user's current program
   */
  private async getUserProgram(userId: string, programId: string): Promise<Program | null> {
    try {
      const programRef = doc(db, 'users', userId, 'programs', programId);
      const programDoc = await getDoc(programRef);
      
      if (!programDoc.exists()) return null;
      
      return programDoc.data() as Program;
    } catch (error) {
      console.error('Error getting user program:', error);
      return null;
    }
  }

  /**
   * Calculate the next day to generate based on current progress and skips
   */
  private calculateNextDay(program: Program, skipDays?: number[]): number {
    const lastGeneratedDay = program.lastGeneratedDay || 0;
    let nextDay = lastGeneratedDay + 1;
    
    // Skip specified days
    while (skipDays && skipDays.includes(nextDay)) {
      nextDay++;
    }
    
    return nextDay;
  }

  /**
   * Generate workout for a specific day using AI
   */
  private async generateWorkoutForDay(
    program: Program, 
    day: number, 
    makeupDays: number,
    customRequest?: string
  ): Promise<Workout> {
    // Import exercise database
    const { EXERCISE_DATABASE, getExercisesByCategory, getExercisesByEquipment } = await import('@/lib/exercises/database');
    
    const isRestDay = day % 7 === 0; // Every 7th day is rest
    
    if (isRestDay) {
      // Generate active recovery workout
      const recoveryExercises = [
        {
          id: 'cat-cow',
          name: 'Cat-Cow Stretch',
          type: 'flexibility' as const,
          sets: 1,
          reps: '10 flows',
          duration: 60,
          instructions: EXERCISE_DATABASE['cat-cow']?.instructions || [],
          targetMuscles: ['spine', 'core'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'child-pose',
          name: 'Child\'s Pose',
          type: 'flexibility' as const,
          sets: 1,
          duration: 60,
          instructions: EXERCISE_DATABASE['child-pose']?.instructions || [],
          targetMuscles: ['hips', 'spine', 'shoulders'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'hip-flexor-stretch',
          name: 'Hip Flexor Stretch',
          type: 'flexibility' as const,
          sets: 1,
          duration: 30,
          reps: '30 seconds each side',
          instructions: EXERCISE_DATABASE['hip-flexor-stretch']?.instructions || [],
          targetMuscles: ['hip-flexors', 'quadriceps'],
          equipment: [],
          isEditable: true,
          completed: false
        }
      ];

      return {
        id: `${program.id}-day-${day}`,
        day: `Day ${day}`,
        type: 'recovery',
        title: 'Active Recovery & Mobility',
        description: 'Gentle movement and stretching to promote recovery and maintain mobility',
        duration: 20,
        intensity: 'low',
        exercises: recoveryExercises,
        isEditable: true,
        completed: false,
        restDay: true,
        crossTraining: false
      };
    }

    // Generate training workout based on program type and day
    let exercises: any[] = [];
    let workoutTitle = '';
    let workoutDescription = '';
    let duration = 45;
    let intensity: 'low' | 'moderate' | 'high' = 'moderate';

    // Determine workout focus based on day and program type
    const dayInWeek = ((day - 1) % 7) + 1; // 1-7
    
    if (program.type === 'strength') {
      if (dayInWeek === 1 || dayInWeek === 4) {
        // Upper body focus
        workoutTitle = 'Upper Body Strength';
        workoutDescription = 'Focus on chest, back, shoulders, and arms';
        exercises = [
          {
            id: 'push-up',
            name: 'Push-ups',
            type: 'strength' as const,
            sets: 3,
            reps: '8-12',
            restTime: 60,
            instructions: EXERCISE_DATABASE['push-up']?.instructions || [],
            targetMuscles: ['chest', 'shoulders', 'triceps'],
            equipment: [],
            isEditable: true,
            completed: false
          },
          {
            id: 'dumbbell-row',
            name: 'Dumbbell Row',
            type: 'strength' as const,
            sets: 3,
            reps: '8-10',
            weight: 8,
            restTime: 90,
            instructions: EXERCISE_DATABASE['dumbbell-row']?.instructions || [],
            targetMuscles: ['lats', 'rhomboids', 'biceps'],
            equipment: ['dumbbells'],
            isEditable: true,
            completed: false
          },
          {
            id: 'resistance-band-pull-apart',
            name: 'Band Pull Aparts',
            type: 'strength' as const,
            sets: 2,
            reps: '15-20',
            restTime: 45,
            instructions: EXERCISE_DATABASE['resistance-band-pull-apart']?.instructions || [],
            targetMuscles: ['rear-delts', 'rhomboids'],
            equipment: ['resistance-bands'],
            isEditable: true,
            completed: false
          }
        ];
      } else if (dayInWeek === 2 || dayInWeek === 5) {
        // Lower body focus
        workoutTitle = 'Lower Body Strength';
        workoutDescription = 'Focus on legs and glutes';
        exercises = [
          {
            id: 'squat',
            name: 'Bodyweight Squats',
            type: 'strength' as const,
            sets: 3,
            reps: '12-15',
            restTime: 60,
            instructions: EXERCISE_DATABASE['squat']?.instructions || [],
            targetMuscles: ['quadriceps', 'glutes', 'hamstrings'],
            equipment: [],
            isEditable: true,
            completed: false
          },
          {
            id: 'lunge',
            name: 'Forward Lunges',
            type: 'strength' as const,
            sets: 3,
            reps: '10 each leg',
            restTime: 60,
            instructions: EXERCISE_DATABASE['lunge']?.instructions || [],
            targetMuscles: ['quadriceps', 'glutes', 'hamstrings'],
            equipment: [],
            isEditable: true,
            completed: false
          },
          {
            id: 'kettlebell-swing',
            name: 'Kettlebell Swings',
            type: 'strength' as const,
            sets: 3,
            reps: '15-20',
            restTime: 90,
            instructions: EXERCISE_DATABASE['kettlebell-swing']?.instructions || [],
            targetMuscles: ['glutes', 'hamstrings', 'core'],
            equipment: ['kettlebells'],
            isEditable: true,
            completed: false
          }
        ];
      } else if (dayInWeek === 3 || dayInWeek === 6) {
        // Full body or core focus
        workoutTitle = 'Full Body & Core';
        workoutDescription = 'Compound movements and core strengthening';
        exercises = [
          {
            id: 'burpee',
            name: 'Burpees',
            type: 'plyometric' as const,
            sets: 3,
            reps: '5-8',
            restTime: 90,
            instructions: EXERCISE_DATABASE['burpee']?.instructions || [],
            targetMuscles: ['full-body'],
            equipment: [],
            isEditable: true,
            completed: false
          },
          {
            id: 'plank',
            name: 'Plank Hold',
            type: 'core' as const,
            sets: 3,
            duration: 30,
            restTime: 60,
            instructions: EXERCISE_DATABASE['plank']?.instructions || [],
            targetMuscles: ['core', 'shoulders'],
            equipment: [],
            isEditable: true,
            completed: false
          },
          {
            id: 'dead-bug',
            name: 'Dead Bug',
            type: 'core' as const,
            sets: 2,
            reps: '8 each side',
            restTime: 45,
            instructions: EXERCISE_DATABASE['dead-bug']?.instructions || [],
            targetMuscles: ['core', 'hip-flexors'],
            equipment: [],
            isEditable: true,
            completed: false
          }
        ];
      }
    } else if (program.type === 'cardio') {
      workoutTitle = 'Cardio Training';
      workoutDescription = 'Cardiovascular conditioning and endurance';
      intensity = 'high';
      duration = 30;
      
      exercises = [
        {
          id: 'jumping-jacks',
          name: 'Jumping Jacks',
          type: 'cardio' as const,
          sets: 3,
          duration: 45,
          restTime: 15,
          instructions: EXERCISE_DATABASE['jumping-jacks']?.instructions || [],
          targetMuscles: ['full-body', 'cardiovascular'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'high-knees',
          name: 'High Knees',
          type: 'cardio' as const,
          sets: 3,
          duration: 30,
          restTime: 30,
          instructions: EXERCISE_DATABASE['high-knees']?.instructions || [],
          targetMuscles: ['legs', 'core'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'mountain-climbers',
          name: 'Mountain Climbers',
          type: 'cardio' as const,
          sets: 3,
          duration: 30,
          restTime: 30,
          instructions: EXERCISE_DATABASE['mountain-climbers']?.instructions || [],
          targetMuscles: ['core', 'shoulders', 'legs'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'butt-kicks',
          name: 'Butt Kicks',
          type: 'cardio' as const,
          sets: 3,
          duration: 30,
          restTime: 30,
          instructions: EXERCISE_DATABASE['butt-kicks']?.instructions || [],
          targetMuscles: ['hamstrings', 'glutes'],
          equipment: [],
          isEditable: true,
          completed: false
        }
      ];
    } else {
      // Hybrid program
      workoutTitle = 'Hybrid Training';
      workoutDescription = 'Combination of strength and cardio';
      
      exercises = [
        {
          id: 'squat',
          name: 'Bodyweight Squats',
          type: 'strength' as const,
          sets: 3,
          reps: '12-15',
          restTime: 45,
          instructions: EXERCISE_DATABASE['squat']?.instructions || [],
          targetMuscles: ['quadriceps', 'glutes'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'push-up',
          name: 'Push-ups',
          type: 'strength' as const,
          sets: 3,
          reps: '8-12',
          restTime: 45,
          instructions: EXERCISE_DATABASE['push-up']?.instructions || [],
          targetMuscles: ['chest', 'shoulders', 'triceps'],
          equipment: [],
          isEditable: true,
          completed: false
        },
        {
          id: 'mountain-climbers',
          name: 'Mountain Climbers',
          type: 'cardio' as const,
          sets: 2,
          duration: 30,
          restTime: 60,
          instructions: EXERCISE_DATABASE['mountain-climbers']?.instructions || [],
          targetMuscles: ['core', 'cardiovascular'],
          equipment: [],
          isEditable: true,
          completed: false
        }
      ];
    }

    // Add custom request modifications if provided
    if (customRequest) {
      workoutDescription += ` | Custom: ${customRequest}`;
    }

    // Add makeup day modifications
    if (makeupDays > 0) {
      workoutTitle += ` (Makeup Day)`;
      workoutDescription += ` | Making up for ${makeupDays} missed day(s)`;
      // Could add extra exercises or intensity here
    }

    return {
      id: `${program.id}-day-${day}`,
      day: `Day ${day}`,
      type: program.type === 'cardio' ? 'cardio' : 'strength',
      title: workoutTitle,
      description: workoutDescription,
      duration,
      intensity,
      exercises,
      isEditable: true,
      completed: false,
      restDay: false,
      crossTraining: false
    };
  }

  /**
   * Generate nutrition guidance for the workout
   */
  private generateNutritionGuidance(workout: Workout, program: Program): NutritionGuidance {
    if (workout.restDay) {
      return {
        preWorkout: 'Light snack if needed, focus on hydration',
        postWorkout: 'Balanced meal with anti-inflammatory foods',
        dailyFocus: 'Recovery nutrition with adequate protein and healthy fats',
        hydration: '2-3 liters throughout the day',
        supplements: ['Magnesium for recovery']
      };
    }
    
    return {
      preWorkout: 'Carbohydrate-rich snack 30-60 minutes before training',
      postWorkout: 'Protein and carbs within 30 minutes post-workout',
      dailyFocus: 'Support training adaptations with balanced macronutrients',
      hydration: '500ml before, during as needed, 150% of fluid lost after',
      supplements: ['Protein powder if needed', 'Creatine for strength training']
    };
  }

  /**
   * Update program with new daily progression
   */
  private async updateProgramWithNewDay(
    userId: string, 
    programId: string, 
    dailyProgression: DailyProgression
  ): Promise<void> {
    const programRef = doc(db, 'users', userId, 'programs', programId);
    const programDoc = await getDoc(programRef);
    
    if (!programDoc.exists()) throw new Error('Program not found');
    
    const program = programDoc.data() as Program;
    
    // Add new day to progression
    program.dailyProgression.push(dailyProgression);
    program.lastGeneratedDay = dailyProgression.day;
    program.currentDay = dailyProgression.day;
    program.canGenerateNext = false; // User must interact with current day first
    
    await setDoc(programRef, program);
  }
}

// Export singleton instance
export const dailyTrainingService = new DailyTrainingService(); 