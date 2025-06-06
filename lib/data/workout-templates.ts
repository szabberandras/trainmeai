import { WorkoutTemplate, ExerciseTemplate } from '../services/dynamic-training.service';

// ===== STRENGTH TRAINING TEMPLATES =====

const STRENGTH_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'upper-body-strength',
    name: 'Upper Body Strength',
    discipline: 'strength',
    type: 'strength',
    duration: 60,
    difficulty: 3,
    equipment: ['barbell', 'dumbbells', 'pull-up bar'],
    description: 'Focus on building upper body strength with compound movements',
    exercises: [
      {
        exerciseId: 'barbell-bench-press',
        sets: 4,
        reps: 6,
        weight: 135,
        restTime: 180
      },
      {
        exerciseId: 'pull-ups',
        sets: 3,
        reps: 8,
        restTime: 120
      },
      {
        exerciseId: 'barbell-overhead-press',
        sets: 3,
        reps: 8,
        weight: 95,
        restTime: 150
      }
    ]
  },
  {
    id: 'lower-body-strength',
    name: 'Lower Body Strength',
    discipline: 'strength',
    type: 'strength',
    duration: 60,
    difficulty: 3,
    equipment: ['barbell', 'dumbbells'],
    description: 'Build powerful legs and glutes with heavy compound movements',
    exercises: [
      {
        exerciseId: 'barbell-back-squat',
        sets: 4,
        reps: 6,
        weight: 185,
        restTime: 180
      },
      {
        exerciseId: 'barbell-deadlift',
        sets: 3,
        reps: 5,
        weight: 225,
        restTime: 180
      },
      {
        exerciseId: 'lunges',
        sets: 3,
        reps: 12,
        restTime: 90
      },
      {
        exerciseId: 'single-leg-calf-raise',
        sets: 3,
        reps: 15,
        restTime: 60
      }
    ]
  },
  {
    id: 'full-body-strength',
    name: 'Full Body Strength',
    discipline: 'strength',
    type: 'strength',
    duration: 75,
    difficulty: 4,
    equipment: ['barbell', 'dumbbells'],
    description: 'Complete body strength workout hitting all major muscle groups',
    exercises: [
      {
        exerciseId: 'barbell-back-squat',
        sets: 3,
        reps: 8,
        weight: 155,
        restTime: 150
      },
      {
        exerciseId: 'barbell-bench-press',
        sets: 3,
        reps: 8,
        weight: 115,
        restTime: 150
      },
      {
        exerciseId: 'barbell-deadlift',
        sets: 3,
        reps: 6,
        weight: 185,
        restTime: 180
      },
      {
        exerciseId: 'barbell-overhead-press',
        sets: 3,
        reps: 10,
        weight: 75,
        restTime: 120
      },
      {
        exerciseId: 'pull-ups',
        sets: 3,
        reps: 6,
        restTime: 120
      }
    ]
  }
];

// ===== CARDIO TRAINING TEMPLATES =====

const CARDIO_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'hiit-cardio',
    name: 'HIIT Cardio Blast',
    discipline: 'cardio',
    type: 'cardio',
    duration: 30,
    difficulty: 4,
    equipment: [],
    description: 'High-intensity interval training for maximum calorie burn',
    exercises: [
      {
        exerciseId: 'high-knees',
        sets: 8,
        duration: 30,
        restTime: 30,
        intensity: 9
      },
      {
        exerciseId: 'butt-kicks',
        sets: 8,
        duration: 30,
        restTime: 30,
        intensity: 9
      },
      {
        exerciseId: 'jump-rope',
        sets: 6,
        duration: 45,
        restTime: 45,
        intensity: 8
      },
      {
        exerciseId: 'burpees',
        sets: 4,
        reps: 10,
        restTime: 60,
        intensity: 10
      }
    ]
  },
  {
    id: 'steady-state-cardio',
    name: 'Steady State Endurance',
    discipline: 'cardio',
    type: 'cardio',
    duration: 45,
    difficulty: 2,
    equipment: [],
    description: 'Moderate intensity cardio for building aerobic base',
    exercises: [
      {
        exerciseId: 'running',
        sets: 1,
        duration: 2400, // 40 minutes
        intensity: 6
      },
      {
        exerciseId: 'cool-down-general',
        sets: 1,
        duration: 300, // 5 minutes
        intensity: 3
      }
    ]
  },
  {
    id: 'cardio-circuit',
    name: 'Cardio Circuit Training',
    discipline: 'cardio',
    type: 'cardio',
    duration: 35,
    difficulty: 3,
    equipment: [],
    description: 'Circuit-style cardio mixing different movement patterns',
    exercises: [
      {
        exerciseId: 'jumping-jacks',
        sets: 5,
        duration: 45,
        restTime: 15,
        intensity: 7
      },
      {
        exerciseId: 'mountain-climbers',
        sets: 5,
        duration: 30,
        restTime: 30,
        intensity: 8
      },
      {
        exerciseId: 'squat-jumps',
        sets: 5,
        reps: 15,
        restTime: 45,
        intensity: 8
      },
      {
        exerciseId: 'push-ups',
        sets: 5,
        reps: 10,
        restTime: 30,
        intensity: 6
      }
    ]
  }
];

// ===== MARATHON TRAINING TEMPLATES =====

const MARATHON_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'long-run',
    name: 'Long Run',
    discipline: 'marathon',
    type: 'cardio',
    duration: 120,
    difficulty: 3,
    equipment: [],
    description: 'Build aerobic endurance with conversational pace running',
    exercises: [
      {
        exerciseId: 'warm-up-general',
        sets: 1,
        duration: 600, // 10 minutes
        intensity: 4
      },
      {
        exerciseId: 'long-run',
        sets: 1,
        duration: 5400, // 90 minutes
        intensity: 6
      },
      {
        exerciseId: 'cool-down-general',
        sets: 1,
        duration: 600, // 10 minutes
        intensity: 3
      },
      {
        exerciseId: 'foam-rolling',
        sets: 1,
        duration: 600, // 10 minutes
        intensity: 2
      }
    ]
  },
  {
    id: 'tempo-run',
    name: 'Tempo Run',
    discipline: 'marathon',
    type: 'cardio',
    duration: 60,
    difficulty: 4,
    equipment: [],
    description: 'Comfortably hard pace to improve lactate threshold',
    exercises: [
      {
        exerciseId: 'warm-up-general',
        sets: 1,
        duration: 900, // 15 minutes
        intensity: 4
      },
      {
        exerciseId: 'tempo-run',
        sets: 1,
        duration: 1800, // 30 minutes
        intensity: 8
      },
      {
        exerciseId: 'cool-down-general',
        sets: 1,
        duration: 900, // 15 minutes
        intensity: 3
      }
    ]
  },
  {
    id: 'interval-training',
    name: 'Speed Intervals',
    discipline: 'marathon',
    type: 'cardio',
    duration: 75,
    difficulty: 5,
    equipment: [],
    description: 'High-intensity intervals to improve VO2 max',
    exercises: [
      {
        exerciseId: 'warm-up-general',
        sets: 1,
        duration: 1200, // 20 minutes
        intensity: 4
      },
      {
        exerciseId: 'running-intervals',
        sets: 6,
        duration: 300, // 5 minutes each
        restTime: 180, // 3 minutes recovery
        intensity: 9
      },
      {
        exerciseId: 'cool-down-general',
        sets: 1,
        duration: 900, // 15 minutes
        intensity: 3
      }
    ]
  },
  {
    id: 'recovery-run',
    name: 'Recovery Run',
    discipline: 'marathon',
    type: 'recovery',
    duration: 45,
    difficulty: 1,
    equipment: [],
    description: 'Easy pace run for active recovery',
    exercises: [
      {
        exerciseId: 'easy-run',
        sets: 1,
        duration: 2400, // 40 minutes
        intensity: 4
      },
      {
        exerciseId: 'stretching-routine',
        sets: 1,
        duration: 300, // 5 minutes
        intensity: 2
      }
    ]
  }
];

// ===== FLEXIBILITY & MOBILITY TEMPLATES =====

const FLEXIBILITY_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'full-body-stretch',
    name: 'Full Body Flexibility',
    discipline: 'flexibility',
    type: 'flexibility',
    duration: 45,
    difficulty: 2,
    equipment: ['yoga mat'],
    description: 'Comprehensive stretching routine for all major muscle groups',
    exercises: [
      {
        exerciseId: 'warm-up-general',
        sets: 1,
        duration: 300, // 5 minutes
        intensity: 3
      },
      {
        exerciseId: 'hip-flexor-stretch',
        sets: 2,
        duration: 60,
        restTime: 30
      },
      {
        exerciseId: 'hamstring-stretch',
        sets: 2,
        duration: 60,
        restTime: 30
      },
      {
        exerciseId: 'quad-stretch',
        sets: 2,
        duration: 60,
        restTime: 30
      },
      {
        exerciseId: 'shoulder-stretch',
        sets: 2,
        duration: 45,
        restTime: 15
      },
      {
        exerciseId: 'spinal-twist',
        sets: 2,
        duration: 45,
        restTime: 15
      },
      {
        exerciseId: 'pigeon-pose',
        sets: 2,
        duration: 90,
        restTime: 30
      }
    ]
  },
  {
    id: 'morning-mobility',
    name: 'Morning Mobility Flow',
    discipline: 'flexibility',
    type: 'flexibility',
    duration: 20,
    difficulty: 1,
    equipment: [],
    description: 'Gentle morning routine to wake up the body',
    exercises: [
      {
        exerciseId: 'cat-cow-stretch',
        sets: 1,
        reps: 10,
        restTime: 30
      },
      {
        exerciseId: 'world-greatest-stretch',
        sets: 2,
        duration: 45,
        restTime: 15
      },
      {
        exerciseId: 'ankle-circles',
        sets: 2,
        reps: 10,
        restTime: 15
      },
      {
        exerciseId: 'arm-circles',
        sets: 2,
        reps: 10,
        restTime: 15
      },
      {
        exerciseId: 'leg-swings',
        sets: 2,
        reps: 10,
        restTime: 15
      }
    ]
  },
  {
    id: 'deep-stretch-session',
    name: 'Deep Stretch & Recovery',
    discipline: 'flexibility',
    type: 'recovery',
    duration: 60,
    difficulty: 3,
    equipment: ['yoga mat', 'foam roller'],
    description: 'Intensive stretching and self-massage for recovery',
    exercises: [
      {
        exerciseId: 'foam-rolling',
        sets: 1,
        duration: 900, // 15 minutes
        intensity: 4
      },
      {
        exerciseId: 'deep-hip-stretch',
        sets: 3,
        duration: 90,
        restTime: 30
      },
      {
        exerciseId: 'thoracic-spine-mobility',
        sets: 3,
        duration: 60,
        restTime: 30
      },
      {
        exerciseId: 'calf-stretch',
        sets: 3,
        duration: 60,
        restTime: 30
      },
      {
        exerciseId: 'meditation-breathing',
        sets: 1,
        duration: 600, // 10 minutes
        intensity: 1
      }
    ]
  }
];

// ===== WEIGHT LOSS TEMPLATES =====

const WEIGHT_LOSS_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'metabolic-circuit',
    name: 'Metabolic Circuit Training',
    discipline: 'weight-loss',
    type: 'hybrid',
    duration: 45,
    difficulty: 4,
    equipment: ['dumbbells'],
    description: 'High-intensity circuit combining strength and cardio',
    exercises: [
      {
        exerciseId: 'burpees',
        sets: 4,
        reps: 12,
        restTime: 30,
        intensity: 9
      },
      {
        exerciseId: 'dumbbell-thrusters',
        sets: 4,
        reps: 15,
        weight: 20,
        restTime: 30,
        intensity: 8
      },
      {
        exerciseId: 'mountain-climbers',
        sets: 4,
        duration: 45,
        restTime: 30,
        intensity: 8
      },
      {
        exerciseId: 'dumbbell-rows',
        sets: 4,
        reps: 12,
        weight: 25,
        restTime: 30,
        intensity: 7
      },
      {
        exerciseId: 'jump-squats',
        sets: 4,
        reps: 15,
        restTime: 30,
        intensity: 8
      }
    ]
  },
  {
    id: 'cardio-strength-combo',
    name: 'Cardio-Strength Combination',
    discipline: 'weight-loss',
    type: 'hybrid',
    duration: 50,
    difficulty: 3,
    equipment: ['dumbbells'],
    description: 'Alternating cardio and strength for maximum calorie burn',
    exercises: [
      {
        exerciseId: 'jumping-jacks',
        sets: 3,
        duration: 60,
        restTime: 30,
        intensity: 7
      },
      {
        exerciseId: 'push-ups',
        sets: 3,
        reps: 12,
        restTime: 45,
        intensity: 6
      },
      {
        exerciseId: 'high-knees',
        sets: 3,
        duration: 45,
        restTime: 30,
        intensity: 8
      },
      {
        exerciseId: 'lunges',
        sets: 3,
        reps: 16,
        restTime: 45,
        intensity: 6
      },
      {
        exerciseId: 'butt-kicks',
        sets: 3,
        duration: 45,
        restTime: 30,
        intensity: 7
      },
      {
        exerciseId: 'dumbbell-squats',
        sets: 3,
        reps: 15,
        weight: 20,
        restTime: 45,
        intensity: 6
      }
    ]
  }
];

// ===== GENERAL FITNESS TEMPLATES =====

const GENERAL_FITNESS_TEMPLATES: WorkoutTemplate[] = [
  {
    id: 'total-body-workout',
    name: 'Total Body Fitness',
    discipline: 'general-fitness',
    type: 'hybrid',
    duration: 50,
    difficulty: 3,
    equipment: ['dumbbells'],
    description: 'Balanced workout combining strength, cardio, and flexibility',
    exercises: [
      {
        exerciseId: 'warm-up-general',
        sets: 1,
        duration: 300, // 5 minutes
        intensity: 4
      },
      {
        exerciseId: 'push-ups',
        sets: 3,
        reps: 10,
        restTime: 60,
        intensity: 6
      },
      {
        exerciseId: 'barbell-back-squat',
        sets: 3,
        reps: 12,
        weight: 95,
        restTime: 90,
        intensity: 6
      },
      {
        exerciseId: 'dumbbell-rows',
        sets: 3,
        reps: 12,
        weight: 25,
        restTime: 60,
        intensity: 6
      },
      {
        exerciseId: 'lunges',
        sets: 3,
        reps: 12,
        restTime: 60,
        intensity: 6
      },
      {
        exerciseId: 'plank',
        sets: 3,
        duration: 45,
        restTime: 60,
        intensity: 6
      },
      {
        exerciseId: 'jumping-jacks',
        sets: 3,
        duration: 60,
        restTime: 30,
        intensity: 7
      },
      {
        exerciseId: 'cool-down-general',
        sets: 1,
        duration: 600, // 10 minutes
        intensity: 3
      }
    ]
  },
  {
    id: 'beginner-friendly',
    name: 'Beginner-Friendly Workout',
    discipline: 'general-fitness',
    type: 'strength',
    duration: 35,
    difficulty: 1,
    equipment: [],
    description: 'Perfect introduction to fitness with bodyweight exercises',
    exercises: [
      {
        exerciseId: 'warm-up-general',
        sets: 1,
        duration: 300, // 5 minutes
        intensity: 3
      },
      {
        exerciseId: 'wall-push-ups',
        sets: 2,
        reps: 8,
        restTime: 60,
        intensity: 4
      },
      {
        exerciseId: 'bodyweight-squats',
        sets: 2,
        reps: 10,
        restTime: 60,
        intensity: 4
      },
      {
        exerciseId: 'modified-plank',
        sets: 2,
        duration: 20,
        restTime: 60,
        intensity: 4
      },
      {
        exerciseId: 'marching-in-place',
        sets: 2,
        duration: 60,
        restTime: 30,
        intensity: 5
      },
      {
        exerciseId: 'cool-down-general',
        sets: 1,
        duration: 600, // 10 minutes
        intensity: 2
      }
    ]
  }
];

// ===== EXPORT ALL TEMPLATES =====

export const WORKOUT_TEMPLATES: Record<string, WorkoutTemplate[]> = {
  'strength': STRENGTH_TEMPLATES,
  'cardio': CARDIO_TEMPLATES,
  'marathon': MARATHON_TEMPLATES,
  'flexibility': FLEXIBILITY_TEMPLATES,
  'weight-loss': WEIGHT_LOSS_TEMPLATES,
  'general-fitness': GENERAL_FITNESS_TEMPLATES
};

export const ALL_TEMPLATES: WorkoutTemplate[] = [
  ...STRENGTH_TEMPLATES,
  ...CARDIO_TEMPLATES,
  ...MARATHON_TEMPLATES,
  ...FLEXIBILITY_TEMPLATES,
  ...WEIGHT_LOSS_TEMPLATES,
  ...GENERAL_FITNESS_TEMPLATES
];

// Helper functions
export function getTemplatesByDiscipline(discipline: string): WorkoutTemplate[] {
  return WORKOUT_TEMPLATES[discipline] || [];
}

export function getTemplateById(id: string): WorkoutTemplate | undefined {
  return ALL_TEMPLATES.find(template => template.id === id);
}

export function getTemplatesByDifficulty(difficulty: number): WorkoutTemplate[] {
  return ALL_TEMPLATES.filter(template => template.difficulty === difficulty);
}

export function getTemplatesByEquipment(equipment: string[]): WorkoutTemplate[] {
  return ALL_TEMPLATES.filter(template => 
    template.equipment.every(item => equipment.includes(item))
  );
} 