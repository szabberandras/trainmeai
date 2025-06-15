interface Exercise {
  id: string;
  name: string;
  category: string;
  muscleGroups: string[];
  equipment: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  movement: string;
  alternatives?: string[];
}

interface SubstitutionRequest {
  originalExercise: string;
  availableEquipment?: string[];
  injuryLimitations?: string[];
  difficultyPreference?: 'easier' | 'same' | 'harder';
  muscleGroupFocus?: string[];
}

export class ExerciseSubstitutionService {
  private static exerciseDatabase: Exercise[] = [
    // Push Exercises
    {
      id: 'push-up',
      name: 'Push-up',
      category: 'push',
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      equipment: ['bodyweight'],
      difficulty: 'beginner',
      movement: 'horizontal-push',
      alternatives: ['incline-push-up', 'knee-push-up', 'wall-push-up', 'diamond-push-up']
    },
    {
      id: 'bench-press',
      name: 'Bench Press',
      category: 'push',
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      equipment: ['barbell', 'bench'],
      difficulty: 'intermediate',
      movement: 'horizontal-push',
      alternatives: ['dumbbell-press', 'push-up', 'chest-fly']
    },
    {
      id: 'dumbbell-press',
      name: 'Dumbbell Chest Press',
      category: 'push',
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      equipment: ['dumbbells', 'bench'],
      difficulty: 'intermediate',
      movement: 'horizontal-push',
      alternatives: ['bench-press', 'push-up', 'resistance-band-press']
    },
    {
      id: 'overhead-press',
      name: 'Overhead Press',
      category: 'push',
      muscleGroups: ['shoulders', 'triceps', 'core'],
      equipment: ['barbell'],
      difficulty: 'intermediate',
      movement: 'vertical-push',
      alternatives: ['dumbbell-shoulder-press', 'pike-push-up', 'handstand-push-up']
    },

    // Pull Exercises
    {
      id: 'pull-up',
      name: 'Pull-up',
      category: 'pull',
      muscleGroups: ['lats', 'biceps', 'rhomboids'],
      equipment: ['pull-up-bar'],
      difficulty: 'intermediate',
      movement: 'vertical-pull',
      alternatives: ['assisted-pull-up', 'lat-pulldown', 'inverted-row']
    },
    {
      id: 'lat-pulldown',
      name: 'Lat Pulldown',
      category: 'pull',
      muscleGroups: ['lats', 'biceps', 'rhomboids'],
      equipment: ['cable-machine'],
      difficulty: 'beginner',
      movement: 'vertical-pull',
      alternatives: ['pull-up', 'resistance-band-pulldown', 'inverted-row']
    },
    {
      id: 'bent-over-row',
      name: 'Bent-over Row',
      category: 'pull',
      muscleGroups: ['lats', 'rhomboids', 'biceps'],
      equipment: ['barbell'],
      difficulty: 'intermediate',
      movement: 'horizontal-pull',
      alternatives: ['dumbbell-row', 'inverted-row', 'resistance-band-row']
    },

    // Leg Exercises
    {
      id: 'squat',
      name: 'Squat',
      category: 'legs',
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      equipment: ['bodyweight'],
      difficulty: 'beginner',
      movement: 'squat-pattern',
      alternatives: ['goblet-squat', 'wall-sit', 'chair-squat']
    },
    {
      id: 'barbell-squat',
      name: 'Barbell Back Squat',
      category: 'legs',
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      equipment: ['barbell', 'squat-rack'],
      difficulty: 'intermediate',
      movement: 'squat-pattern',
      alternatives: ['goblet-squat', 'front-squat', 'leg-press']
    },
    {
      id: 'deadlift',
      name: 'Deadlift',
      category: 'legs',
      muscleGroups: ['hamstrings', 'glutes', 'erector-spinae'],
      equipment: ['barbell'],
      difficulty: 'intermediate',
      movement: 'hip-hinge',
      alternatives: ['romanian-deadlift', 'kettlebell-deadlift', 'good-morning']
    },
    {
      id: 'lunge',
      name: 'Lunge',
      category: 'legs',
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      equipment: ['bodyweight'],
      difficulty: 'beginner',
      movement: 'lunge-pattern',
      alternatives: ['reverse-lunge', 'walking-lunge', 'step-up']
    },

    // Core Exercises
    {
      id: 'plank',
      name: 'Plank',
      category: 'core',
      muscleGroups: ['core', 'shoulders'],
      equipment: ['bodyweight'],
      difficulty: 'beginner',
      movement: 'isometric',
      alternatives: ['modified-plank', 'wall-plank', 'side-plank']
    },
    {
      id: 'crunch',
      name: 'Crunch',
      category: 'core',
      muscleGroups: ['abs'],
      equipment: ['bodyweight'],
      difficulty: 'beginner',
      movement: 'spinal-flexion',
      alternatives: ['dead-bug', 'bicycle-crunch', 'reverse-crunch']
    },

    // Cardio Exercises
    {
      id: 'jumping-jacks',
      name: 'Jumping Jacks',
      category: 'cardio',
      muscleGroups: ['full-body'],
      equipment: ['bodyweight'],
      difficulty: 'beginner',
      movement: 'plyometric',
      alternatives: ['step-touch', 'arm-circles', 'marching-in-place']
    },
    {
      id: 'burpees',
      name: 'Burpees',
      category: 'cardio',
      muscleGroups: ['full-body'],
      equipment: ['bodyweight'],
      difficulty: 'advanced',
      movement: 'compound',
      alternatives: ['modified-burpee', 'squat-thrust', 'mountain-climbers']
    }
  ];

  /**
   * Find exercise substitutions based on constraints
   */
  static findSubstitutions(request: SubstitutionRequest): Exercise[] {
    const originalExercise = this.exerciseDatabase.find(ex => 
      ex.id === request.originalExercise || ex.name.toLowerCase() === request.originalExercise.toLowerCase()
    );

    if (!originalExercise) {
      return [];
    }

    // Find exercises with similar movement patterns and muscle groups
    let candidates = this.exerciseDatabase.filter(exercise => {
      if (exercise.id === originalExercise.id) return false;

      // Must target at least one of the same muscle groups
      const sharedMuscles = exercise.muscleGroups.some(muscle => 
        originalExercise.muscleGroups.includes(muscle)
      );

      return sharedMuscles;
    });

    // Filter by available equipment
    if (request.availableEquipment) {
      candidates = candidates.filter(exercise =>
        exercise.equipment.every(eq => 
          request.availableEquipment!.includes(eq) || eq === 'bodyweight'
        )
      );
    }

    return candidates.slice(0, 5);
  }

  /**
   * Get exercise alternatives for equipment limitations
   */
  static getEquipmentAlternatives(exerciseId: string, availableEquipment: string[]): Exercise[] {
    return this.findSubstitutions({
      originalExercise: exerciseId,
      availableEquipment
    });
  }

  /**
   * Get easier alternatives for beginners or injury recovery
   */
  static getEasierAlternatives(exerciseId: string): Exercise[] {
    return this.findSubstitutions({
      originalExercise: exerciseId,
      difficultyPreference: 'easier'
    });
  }

  /**
   * Get harder alternatives for progression
   */
  static getProgressionAlternatives(exerciseId: string): Exercise[] {
    return this.findSubstitutions({
      originalExercise: exerciseId,
      difficultyPreference: 'harder'
    });
  }

  /**
   * Get injury-safe alternatives
   */
  static getInjurySafeAlternatives(exerciseId: string, injuryLimitations: string[]): Exercise[] {
    return this.findSubstitutions({
      originalExercise: exerciseId,
      injuryLimitations,
      difficultyPreference: 'easier'
    });
  }

  /**
   * Get all exercises by category
   */
  static getExercisesByCategory(category: string): Exercise[] {
    return this.exerciseDatabase.filter(exercise => exercise.category === category);
  }

  /**
   * Get all exercises by muscle group
   */
  static getExercisesByMuscleGroup(muscleGroup: string): Exercise[] {
    return this.exerciseDatabase.filter(exercise => 
      exercise.muscleGroups.includes(muscleGroup)
    );
  }

  /**
   * Get all exercises that can be done with specific equipment
   */
  static getExercisesByEquipment(equipment: string[]): Exercise[] {
    return this.exerciseDatabase.filter(exercise =>
      exercise.equipment.every(eq => equipment.includes(eq) || eq === 'bodyweight')
    );
  }

  /**
   * Search exercises by name
   */
  static searchExercises(query: string): Exercise[] {
    const lowercaseQuery = query.toLowerCase();
    return this.exerciseDatabase.filter(exercise =>
      exercise.name.toLowerCase().includes(lowercaseQuery) ||
      exercise.muscleGroups.some(muscle => muscle.toLowerCase().includes(lowercaseQuery)) ||
      exercise.category.toLowerCase().includes(lowercaseQuery)
    );
  }

  /**
   * Get exercise details by ID
   */
  static getExerciseById(id: string): Exercise | null {
    return this.exerciseDatabase.find(exercise => exercise.id === id) || null;
  }

  /**
   * Helper methods
   */
  private static getDifficultyLevel(difficulty: string): number {
    switch (difficulty) {
      case 'beginner': return 1;
      case 'intermediate': return 2;
      case 'advanced': return 3;
      default: return 2;
    }
  }

  private static hasInjuryConflict(exercise: Exercise, injuryLimitations: string[]): boolean {
    // Define injury-exercise conflicts
    const injuryConflicts: Record<string, string[]> = {
      'lower-back': ['deadlift', 'bent-over-row', 'good-morning'],
      'knee': ['squat', 'lunge', 'jumping-jacks', 'burpees'],
      'shoulder': ['overhead-press', 'pull-up', 'handstand-push-up'],
      'wrist': ['push-up', 'plank', 'handstand-push-up'],
      'neck': ['overhead-press', 'pull-up'],
      'ankle': ['jumping-jacks', 'burpees', 'lunge']
    };

    return injuryLimitations.some(injury => {
      const conflictingExercises = injuryConflicts[injury] || [];
      return conflictingExercises.includes(exercise.id) || 
             conflictingExercises.some(conflict => exercise.name.toLowerCase().includes(conflict));
    });
  }

  /**
   * Get recommended equipment for a workout program
   */
  static getRecommendedEquipment(exercises: string[]): string[] {
    const allEquipment = new Set<string>();
    
    exercises.forEach(exerciseId => {
      const exercise = this.getExerciseById(exerciseId);
      if (exercise) {
        exercise.equipment.forEach(eq => {
          if (eq !== 'bodyweight') {
            allEquipment.add(eq);
          }
        });
      }
    });

    return Array.from(allEquipment);
  }

  /**
   * Suggest equipment-free alternatives for a workout
   */
  static createBodyweightWorkout(originalExercises: string[]): Exercise[] {
    const bodyweightAlternatives: Exercise[] = [];

    originalExercises.forEach(exerciseId => {
      const alternatives = this.getEquipmentAlternatives(exerciseId, ['bodyweight']);
      if (alternatives.length > 0) {
        bodyweightAlternatives.push(alternatives[0]);
      } else {
        // If no direct alternative, find bodyweight exercise for same muscle group
        const originalExercise = this.getExerciseById(exerciseId);
        if (originalExercise) {
          const bodyweightOptions = this.exerciseDatabase.filter(ex => 
            ex.equipment.includes('bodyweight') &&
            ex.muscleGroups.some(muscle => originalExercise.muscleGroups.includes(muscle))
          );
          if (bodyweightOptions.length > 0) {
            bodyweightAlternatives.push(bodyweightOptions[0]);
          }
        }
      }
    });

    return bodyweightAlternatives;
  }
} 