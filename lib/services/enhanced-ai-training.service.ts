import { ExerciseVariationsService, ExerciseVariation } from './exercise-variations.service';
import { EXERCISE_DATABASE } from '../exercises/categories';
import { Exercise } from '../exercises/types';
import { WorkoutExercise, Workout, TrainingPlan } from '@/lib/data/reference-workouts';

export interface EnhancedWorkoutRequest {
  userId: string;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  availableEquipment: string[];
  targetMuscleGroups?: string[];
  workoutDuration?: number; // minutes
  injuries?: string[];
  preferences?: {
    avoidExercises?: string[];
    preferredExercises?: string[];
    intensityPreference?: 'low' | 'moderate' | 'high';
    varietyPreference?: 'consistent' | 'varied';
  };
  goals?: string[];
  // Gender-specific parameters
  gender?: 'male' | 'female' | 'non-binary';
  age?: number;
  menstrualCyclePhase?: 'follicular' | 'ovulatory' | 'luteal' | 'menstrual';
  contraceptiveUse?: boolean;
  pregnancyStatus?: 'not-pregnant' | 'pregnant' | 'postpartum';
  menopauseStatus?: 'premenopausal' | 'perimenopausal' | 'postmenopausal';
  ironStatus?: 'deficient' | 'low' | 'normal' | 'unknown';
}

export interface EnhancedWorkoutResponse {
  workout: {
    id: string;
    name: string;
    duration: number;
    difficulty: number;
    exercises: EnhancedExercise[];
  };
  variations: {
    [exerciseId: string]: ExerciseVariation[];
  };
  substitutions: {
    [exerciseId: string]: {
      reason: string;
      alternatives: ExerciseVariation[];
    };
  };
  aiRecommendations: {
    progressionTips: string[];
    formCues: string[];
    modificationSuggestions: string[];
  };
}

export interface EnhancedExercise extends WorkoutExercise {
  aiCoaching: {
    setupTips: string[];
    executionCues: string[];
    commonMistakes: string[];
    breathing: string;
    genderSpecificTips?: string[];
  };
  progressionOptions: {
    easier: string[];
    harder: string[];
    equipment_alternatives: string[];
  };
  safetyConsiderations: string[];
  // Gender-specific modifications
  genderOptimizations?: {
    male?: {
      intensityRecommendations: string[];
      recoveryConsiderations: string[];
    };
    female?: {
      cyclePhaseModifications: {
        follicular?: string[];
        ovulatory?: string[];
        luteal?: string[];
        menstrual?: string[];
      };
      injuryPreventionFocus: string[];
      nutritionalConsiderations: string[];
    };
  };
}

export interface GenderSpecificTrainingProfile {
  gender: 'male' | 'female' | 'non-binary';
  physiologicalConsiderations: {
    hormonalProfile: string;
    muscleFiberComposition: string;
    cardiovascularCharacteristics: string;
    recoveryPatterns: string;
    boneDensity: string;
  };
  trainingAdaptations: {
    strength: string;
    endurance: string;
    power: string;
  };
  injuryRisks: string[];
  nutritionalNeeds: {
    macronutrients: string;
    micronutrients: string[];
    hydration: string;
  };
  psychologicalFactors: {
    coachingPreferences: string;
    goalPriorities: string[];
    motivationDrivers: string[];
  };
}

/**
 * Enhanced AI Training Service with Gender-Specific Optimization
 * Implements 2023-2025 research on gender-specific training protocols
 */
export class EnhancedAITrainingService {
  
  /**
   * Generate an enhanced workout with AI coaching and exercise variations
   */
  public static async generateEnhancedWorkout(
    request: EnhancedWorkoutRequest
  ): Promise<EnhancedWorkout> {
    // Get available exercises based on request criteria
    const availableExercises = this.getFilteredExercises(request);
    
    // Select exercises for the workout
    const selectedExercises = this.selectExercisesForWorkout(availableExercises, request);
    
    // Enhance exercises with AI coaching and variations
    const enhancedExercises = await this.enhanceExercisesWithAI(selectedExercises, request);
    
    // Generate workout structure
    const workout: EnhancedWorkout = {
      id: `workout-${Date.now()}`,
      name: this.generateWorkoutName(request),
      duration: request.workoutDuration || this.estimateWorkoutDuration(enhancedExercises),
      difficulty: this.calculateWorkoutDifficulty(enhancedExercises),
      exercises: enhancedExercises,
      warmupSuggestions: this.generateWarmupSuggestions(request),
      cooldownSuggestions: this.generateCooldownSuggestions(request),
      modificationSuggestions: this.generateModificationSuggestions(request),
      progressionPlan: this.generateProgressionPlan(request),
      genderOptimizations: this.generateGenderOptimizations(request)
    };
    
    return workout;
  }

  /**
   * Filter exercises based on request criteria
   */
  private static getFilteredExercises(request: EnhancedWorkoutRequest): Exercise[] {
    let availableExercises = Object.values(EXERCISE_DATABASE);
    
    // Filter by available equipment
    if (request.availableEquipment.length > 0) {
      availableExercises = availableExercises.filter(exercise =>
        exercise.equipment.length === 0 || // bodyweight exercises
        exercise.equipment.every(eq => request.availableEquipment.includes(eq))
      );
    }
    
    // Filter by fitness level
    availableExercises = availableExercises.filter(exercise => {
      switch (request.fitnessLevel) {
        case 'beginner':
          return exercise.difficulty <= 3;
        case 'intermediate':
          return exercise.difficulty >= 2 && exercise.difficulty <= 4;
        case 'advanced':
          return exercise.difficulty >= 3;
        default:
          return true;
      }
    });
    
    // Filter by target muscle groups if specified
    if (request.targetMuscleGroups && request.targetMuscleGroups.length > 0) {
      availableExercises = availableExercises.filter(exercise =>
        exercise.muscleGroups.some(mg => 
          request.targetMuscleGroups!.some(target => 
            mg.toLowerCase().includes(target.toLowerCase())
          )
        )
      );
    }
    
    // Remove exercises user wants to avoid
    if (request.preferences?.avoidExercises) {
      availableExercises = availableExercises.filter(exercise =>
        !request.preferences!.avoidExercises!.includes(exercise.id)
      );
    }
    
    // Prioritize preferred exercises
    if (request.preferences?.preferredExercises) {
      const preferredExercises = availableExercises.filter(exercise =>
        request.preferences!.preferredExercises!.includes(exercise.id)
      );
      const otherExercises = availableExercises.filter(exercise =>
        !request.preferences!.preferredExercises!.includes(exercise.id)
      );
      availableExercises = [...preferredExercises, ...otherExercises];
    }
    
    return availableExercises;
  }

  /**
   * Select exercises for the workout
   */
  private static selectExercisesForWorkout(
    availableExercises: Exercise[],
    request: EnhancedWorkoutRequest
  ): Exercise[] {
    // Select 4-8 exercises for a balanced workout
    const targetExerciseCount = request.workoutDuration 
      ? Math.floor(request.workoutDuration / 8) // ~8 minutes per exercise
      : 6;
    
    const selectedExercises: Exercise[] = [];
    const usedMuscleGroups: string[] = [];
    
    // Prioritize compound movements
    const compoundExercises = availableExercises.filter(ex => ex.muscleGroups.length > 2);
    const isolationExercises = availableExercises.filter(ex => ex.muscleGroups.length <= 2);
    
    // Select exercises ensuring muscle group variety
    for (const exercise of [...compoundExercises, ...isolationExercises]) {
      if (selectedExercises.length >= targetExerciseCount) break;
      
      // Check if this exercise targets new muscle groups or complements existing ones
      const hasNewMuscleGroup = exercise.muscleGroups.some(mg => 
        !usedMuscleGroups.some(used => used.toLowerCase() === mg.toLowerCase())
      );
      
      if (hasNewMuscleGroup || selectedExercises.length < 3) {
        selectedExercises.push(exercise);
        usedMuscleGroups.push(...exercise.muscleGroups);
      }
    }
    
    return selectedExercises;
  }

  /**
   * Enhance exercises with AI coaching and variations
   */
  private static async enhanceExercisesWithAI(
    exercises: Exercise[],
    request: EnhancedWorkoutRequest
  ): Promise<EnhancedExercise[]> {
    return exercises.map(exercise => {
      // Get exercise variations
      const variations = ExerciseVariationsService.getVariationsForEquipment(
        exercise.id, 
        request.availableEquipment
      );
      
      // Generate AI coaching
      const aiCoaching = this.generateAICoaching(exercise, request);
      
      // Determine sets, reps, and other parameters
      const { sets, reps, duration, weight, restTime } = this.calculateExerciseParameters(exercise, request);
      
      return {
        id: exercise.id,
        name: exercise.name,
        sets,
        reps,
        duration,
        weight,
        restTime,
        instructions: exercise.instructions,
        safetyNotes: exercise.safetyNotes || [],
        variations,
        aiCoaching
      };
    });
  }

  /**
   * Generate AI coaching cues for an exercise
   */
  private static generateAICoaching(
    exercise: Exercise, 
    request: EnhancedWorkoutRequest
  ): EnhancedExercise['aiCoaching'] {
    const baseCoaching = exercise.coaching || {
      setup: [],
      execution: [],
      common_mistakes: [],
      breathing: 'Breathe naturally throughout the movement'
    };

    // Enhance coaching based on user's fitness level
    const setupTips = [...baseCoaching.setup];
    const executionCues = [...baseCoaching.execution];
    const commonMistakes = [...baseCoaching.common_mistakes];

    // Add beginner-specific tips
    if (request.fitnessLevel === 'beginner') {
      setupTips.push('Take your time to set up properly');
      setupTips.push('Start with bodyweight or light resistance');
      executionCues.push('Focus on form over speed');
      executionCues.push('Control the movement throughout');
    }

    // Add advanced tips
    if (request.fitnessLevel === 'advanced') {
      executionCues.push('Focus on mind-muscle connection');
      executionCues.push('Consider tempo variations');
    }

    // Add injury-specific modifications
    if (request.injuries && request.injuries.length > 0) {
      setupTips.push('Modify range of motion if experiencing discomfort');
      commonMistakes.push('Pushing through pain - stop if you feel discomfort');
    }

    // Add gender-specific tips
    const genderSpecificTips: string[] = [];
    if (request.gender === 'female') {
      genderSpecificTips.push('Focus on higher volume, moderate intensity for optimal strength gains');
      if (request.menstrualCyclePhase) {
        genderSpecificTips.push(...this.getMenstrualCycleModifications(request.menstrualCyclePhase, exercise));
      }
    } else if (request.gender === 'male') {
      genderSpecificTips.push('Your higher testosterone levels support strength and power development');
      genderSpecificTips.push('Allow adequate recovery between high-intensity sessions');
    }

    return {
      setupTips,
      executionCues,
      commonMistakes,
      breathing: baseCoaching.breathing || 'Breathe naturally throughout the movement',
      genderSpecificTips
    };
  }

  /**
   * Generate menstrual cycle-specific training modifications
   */
  private static getMenstrualCycleModifications(
    phase: string,
    exercise: Exercise
  ): string[] {
    const modifications: string[] = [];
    
    switch (phase) {
      case 'follicular':
        modifications.push(
          "Optimal phase for strength and power training - aim for 80-95% 1RM intensities",
          "Rising estrogen creates anabolic environment - focus on progressive overload"
        );
        break;
        
      case 'ovulatory':
        modifications.push(
          "Highest injury risk due to ligament laxity - emphasize movement mechanics",
          "Focus on controlled movements and proper form over intensity"
        );
        break;
        
      case 'luteal':
        modifications.push(
          "Elevated progesterone favors endurance training at moderate intensities (65-80% 1RM)",
          "Good phase for building aerobic capacity and muscular endurance"
        );
        break;
        
      case 'menstrual':
        modifications.push(
          "Low hormone levels - focus on technique refinement and recovery",
          "Listen to your body - reduce intensity if experiencing discomfort"
        );
        break;
    }
    
    return modifications;
  }

  /**
   * Calculate exercise parameters based on goals and fitness level
   */
  private static calculateExerciseParameters(
    exercise: Exercise,
    request: EnhancedWorkoutRequest
  ): {
    sets: number;
    reps?: number;
    duration?: string;
    weight?: number;
    restTime: number;
  } {
    let sets = 3;
    let reps: number | undefined;
    let duration: string | undefined;
    let weight: number | undefined;
    let restTime = 60; // seconds

    // Adjust based on fitness level and goals
    if (request.fitnessLevel === 'beginner') {
      sets = 2;
      reps = 8;
      restTime = 90;
    } else if (request.fitnessLevel === 'intermediate') {
      sets = 3;
      reps = 10;
      restTime = 75;
    } else {
      sets = 4;
      reps = 12;
      restTime = 60;
    }

    // Adjust for exercise type
    if (exercise.metrics?.type === 'time') {
      duration = `${30 + (request.fitnessLevel === 'advanced' ? 30 : 0)}s`;
      reps = undefined;
    }

    // Gender-specific adjustments
    if (request.gender === 'female') {
      // Women respond well to higher volume, moderate intensity
      reps = reps ? reps + 2 : undefined;
      restTime = Math.max(60, restTime - 15);
    } else if (request.gender === 'male') {
      // Men can handle higher intensity with longer rest
      restTime = restTime + 15;
    }

    return { sets, reps, duration, weight, restTime };
  }

  /**
   * Generate workout name based on request
   */
  private static generateWorkoutName(request: EnhancedWorkoutRequest): string {
    const level = request.fitnessLevel.charAt(0).toUpperCase() + request.fitnessLevel.slice(1);
    const equipment = request.availableEquipment.length === 0 ? 'Bodyweight' : 'Equipment';
    const focus = request.targetMuscleGroups?.length ? 
      request.targetMuscleGroups.join(' & ') : 'Full Body';
    
    return `${level} ${equipment} ${focus} Workout`;
  }

  /**
   * Estimate workout duration
   */
  private static estimateWorkoutDuration(exercises: EnhancedExercise[]): number {
    return exercises.reduce((total, exercise) => {
      const exerciseTime = exercise.duration ? 
        parseInt(exercise.duration) * exercise.sets / 60 : // convert seconds to minutes
        (exercise.reps || 10) * exercise.sets * 3 / 60; // ~3 seconds per rep
      
      return total + exerciseTime + (exercise.restTime * exercise.sets / 60);
    }, 0);
  }

  /**
   * Calculate workout difficulty
   */
  private static calculateWorkoutDifficulty(exercises: EnhancedExercise[]): number {
    const exerciseFromDb = (id: string) => EXERCISE_DATABASE[id];
    const avgDifficulty = exercises.reduce((sum, ex) => {
      const dbExercise = exerciseFromDb(ex.id);
      return sum + (dbExercise?.difficulty || 3);
    }, 0) / exercises.length;
    
    return Math.round(avgDifficulty * 2); // Scale to 1-10
  }

  /**
   * Generate warmup suggestions
   */
  private static generateWarmupSuggestions(request: EnhancedWorkoutRequest): string[] {
    const suggestions = [
      '5-10 minutes of light cardio (walking, marching in place)',
      'Dynamic stretching focusing on major muscle groups',
      'Joint mobility exercises (arm circles, leg swings)'
    ];

    if (request.availableEquipment.length === 0) {
      suggestions.push('Bodyweight movements like arm swings and gentle squats');
    }

    return suggestions;
  }

  /**
   * Generate cooldown suggestions
   */
  private static generateCooldownSuggestions(request: EnhancedWorkoutRequest): string[] {
    return [
      '5-10 minutes of light walking or gentle movement',
      'Static stretching for all major muscle groups worked',
      'Deep breathing exercises for recovery',
      'Foam rolling if available'
    ];
  }

  /**
   * Generate modification suggestions
   */
  private static generateModificationSuggestions(request: EnhancedWorkoutRequest): string[] {
    const suggestions: string[] = [];

    if (request.fitnessLevel === 'beginner') {
      suggestions.push('Start with shorter durations and build up gradually');
      suggestions.push('Focus on proper form over speed or weight');
    }

    if (request.availableEquipment.length === 0) {
      suggestions.push('Bodyweight exercises can be just as effective as weighted ones');
      suggestions.push('Use household items as makeshift weights if needed');
    }

    if (request.injuries && request.injuries.length > 0) {
      suggestions.push('Always listen to your body and stop if you feel pain');
      suggestions.push('Consider consulting a healthcare provider for injury-specific modifications');
    }

    return suggestions;
  }

  /**
   * Generate progression plan
   */
  private static generateProgressionPlan(request: EnhancedWorkoutRequest): string[] {
    return [
      'Week 1-2: Focus on learning proper form and technique',
      'Week 3-4: Gradually increase intensity or duration by 10%',
      'Week 5-6: Add complexity or new exercise variations',
      'Week 7-8: Reassess and adjust based on progress'
    ];
  }

  /**
   * Generate gender-specific optimizations
   */
  private static generateGenderOptimizations(request: EnhancedWorkoutRequest): EnhancedWorkout['genderOptimizations'] {
    if (request.gender === 'male') {
      return {
        male: {
          intensityRecommendations: [
            "Focus on 85-95% 1RM for strength gains",
            "Allow 48-72 hours recovery between intense sessions",
            "Progressive overload with heavier weights"
          ],
          recoveryConsiderations: [
            "Higher inflammation response requires longer recovery",
            "Monitor for overuse injuries with aggressive progression",
            "Emphasize mobility work to counteract muscle tightness"
          ]
        }
      };
    } else if (request.gender === 'female') {
      const cycleModifications: any = {};
      
      if (request.menstrualCyclePhase) {
        cycleModifications[request.menstrualCyclePhase] = this.getMenstrualCycleModifications(
          request.menstrualCyclePhase, 
          {} as Exercise
        );
      }

      return {
        female: {
          cyclePhaseModifications: cycleModifications,
          injuryPreventionFocus: [
            "ACL injury prevention through hamstring strengthening",
            "Landing mechanics training",
            "Hip stability exercises for Q-angle compensation"
          ],
          nutritionalConsiderations: [
            "Monitor iron status - up to 60% of female athletes are deficient",
            "Ensure adequate calcium (1000-1300mg daily) for bone health",
            "Higher caloric needs during luteal phase of menstrual cycle"
          ]
        }
      };
    }

    return undefined;
  }

  // Additional utility methods...
  
  /**
   * Get exercises missing variations/substitutes
   */
  public static getMissingExerciseVariations(): string[] {
    return ExerciseVariationsService.getMissingExercises();
  }
}