export interface TrainingProgram {
  id: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  goal: 'fat_loss' | 'hypertrophy' | 'functional_strength' | 'general_fitness';
  duration_weeks: number;
  frequency_per_week: number;
  equipment_required: string[];
  description: string;
  plan: TrainingDay[];
  progression: ProgressionGuidelines;
  coaching_notes: string[];
}

export interface TrainingDay {
  day: string;
  focus: string;
  intensity: 'low' | 'moderate' | 'high' | 'max_effort';
  estimated_duration: string;
  exercises: Exercise[];
  rounds?: number;
  rest_between_rounds?: string;
  coaching_focus: string[];
}

export interface Exercise {
  exercise: string;
  sets?: number;
  reps?: number | string;
  duration?: string;
  distance?: string;
  load?: string;
  tempo?: string;
  rest?: string;
  notes?: string;
}

export interface ProgressionGuidelines {
  week_1_2?: string;
  week_3_4?: string;
  week_5_6?: string;
  week_7_8?: string;
  week_1_3?: string;
  week_4_6?: string;
  week_7_9?: string;
  week_10_12?: string;
  deload_week?: string;
  progression_metrics: string[];
  when_to_advance: string;
}

// ===== BEGINNER PROGRAMS =====

export const BEGINNER_FAT_LOSS: TrainingProgram = {
  id: 'beginner-fat-loss',
  level: 'beginner',
  goal: 'fat_loss',
  duration_weeks: 8,
  frequency_per_week: 3,
  equipment_required: ['dumbbells', 'yoga-mat', 'optional-kettlebell'],
  description: 'A beginner-friendly fat loss program combining strength training with metabolic conditioning. Perfect for building fitness while burning calories.',
  plan: [
    {
      day: 'monday',
      focus: 'full_body_strength',
      intensity: 'moderate',
      estimated_duration: '35-45 minutes',
      exercises: [
        {
          exercise: 'goblet-squat',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Focus on depth and control'
        },
        {
          exercise: 'push-ups',
          sets: 3,
          reps: 'max',
          rest: '60s',
          notes: 'Modify on knees if needed'
        },
        {
          exercise: 'bent-over-dumbbell-row',
          sets: 3,
          reps: 10,
          rest: '60s',
          notes: 'Keep core tight, squeeze shoulder blades'
        },
        {
          exercise: 'plank',
          sets: 3,
          duration: '30s',
          rest: '45s',
          notes: 'Maintain straight line from head to heels'
        },
        {
          exercise: 'glute-bridges',
          sets: 3,
          reps: 15,
          rest: '45s',
          notes: 'Squeeze glutes at the top'
        }
      ],
      coaching_focus: [
        'Perfect form over speed',
        'Control the movement',
        'Build confidence with each exercise'
      ]
    },
    {
      day: 'wednesday',
      focus: 'cardio_plus_core',
      intensity: 'moderate',
      estimated_duration: '30-40 minutes',
      exercises: [
        {
          exercise: 'brisk-walking',
          duration: '20-30min',
          notes: 'Maintain conversational pace'
        },
        {
          exercise: 'russian-twists',
          sets: 3,
          reps: 20,
          rest: '45s',
          notes: 'Control the rotation'
        },
        {
          exercise: 'leg-raises',
          sets: 3,
          reps: 12,
          rest: '45s',
          notes: 'Lower legs slowly'
        },
        {
          exercise: 'dead-bug',
          sets: 3,
          reps: '10 each side',
          rest: '45s',
          notes: 'Keep lower back pressed to floor'
        }
      ],
      coaching_focus: [
        'Steady-state cardio for fat burning',
        'Core stability and strength',
        'Active recovery mindset'
      ]
    },
    {
      day: 'friday',
      focus: 'metabolic_circuit',
      intensity: 'high',
      estimated_duration: '25-35 minutes',
      exercises: [
        {
          exercise: 'air-squats',
          reps: 15,
          notes: 'Full depth, explosive up'
        },
        {
          exercise: 'modified-burpees',
          reps: 8,
          notes: 'Step back instead of jumping if needed'
        },
        {
          exercise: 'mountain-climbers',
          reps: 20,
          notes: 'Keep hips level'
        },
        {
          exercise: 'kettlebell-swings',
          reps: 12,
          notes: 'Hip hinge movement, not squat'
        },
        {
          exercise: 'high-knees',
          duration: '30s',
          notes: 'Drive knees up, pump arms'
        }
      ],
      rounds: 3,
      rest_between_rounds: '90-120s',
      coaching_focus: [
        'Work at 80% effort',
        'Focus on movement quality even when tired',
        'This builds your metabolic engine'
      ]
    }
  ],
  progression: {
    week_1_2: 'Focus on learning movements, use lighter weights',
    week_3_4: 'Increase weights by 5-10%, add 2-3 reps where possible',
    week_5_6: 'Increase circuit rounds or reduce rest periods',
    week_7_8: 'Peak intensity, prepare for next program level',
    progression_metrics: [
      'Increase push-up reps',
      'Longer plank holds',
      'Heavier goblet squats',
      'Faster circuit completion'
    ],
    when_to_advance: 'When you can complete all workouts with good form and feel ready for more challenge'
  },
  coaching_notes: [
    'Consistency over intensity for beginners',
    'Focus on building habits and movement patterns',
    'Celebrate small wins and progress',
    'Listen to your body and rest when needed'
  ]
};

export const BEGINNER_GENERAL_FITNESS: TrainingProgram = {
  id: 'beginner-general-fitness',
  level: 'beginner',
  goal: 'general_fitness',
  duration_weeks: 6,
  frequency_per_week: 3,
  equipment_required: ['dumbbells', 'yoga-mat'],
  description: 'A well-rounded program for building overall fitness, strength, and confidence. Perfect for establishing a sustainable exercise routine.',
  plan: [
    {
      day: 'monday',
      focus: 'upper_body_strength',
      intensity: 'moderate',
      estimated_duration: '30-40 minutes',
      exercises: [
        {
          exercise: 'wall-push-ups',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Progress to incline push-ups when ready'
        },
        {
          exercise: 'seated-dumbbell-press',
          sets: 3,
          reps: 10,
          rest: '60s',
          notes: 'Start light, focus on control'
        },
        {
          exercise: 'bent-over-dumbbell-row',
          sets: 3,
          reps: 10,
          rest: '60s',
          notes: 'Hinge at hips, keep back straight'
        },
        {
          exercise: 'tricep-dips-chair',
          sets: 3,
          reps: 8,
          rest: '60s',
          notes: 'Use chair or bench, keep close to surface'
        }
      ],
      coaching_focus: [
        'Build upper body foundation',
        'Perfect pushing and pulling patterns',
        'Develop shoulder stability'
      ]
    },
    {
      day: 'wednesday',
      focus: 'lower_body_strength',
      intensity: 'moderate',
      estimated_duration: '30-40 minutes',
      exercises: [
        {
          exercise: 'chair-assisted-squats',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Lightly touch chair, don\'t sit'
        },
        {
          exercise: 'stationary-lunges',
          sets: 3,
          reps: '8 each leg',
          rest: '60s',
          notes: 'Step back into lunge position'
        },
        {
          exercise: 'glute-bridges',
          sets: 3,
          reps: 15,
          rest: '45s',
          notes: 'Squeeze glutes, pause at top'
        },
        {
          exercise: 'calf-raises',
          sets: 3,
          reps: 15,
          rest: '45s',
          notes: 'Rise up on toes, control the descent'
        }
      ],
      coaching_focus: [
        'Build leg strength and stability',
        'Master fundamental movement patterns',
        'Develop balance and coordination'
      ]
    },
    {
      day: 'friday',
      focus: 'full_body_movement',
      intensity: 'moderate',
      estimated_duration: '35-45 minutes',
      exercises: [
        {
          exercise: 'bodyweight-squats',
          sets: 3,
          reps: 10,
          rest: '60s',
          notes: 'Progress from chair squats'
        },
        {
          exercise: 'incline-push-ups',
          sets: 3,
          reps: 8,
          rest: '60s',
          notes: 'Use bench or stairs'
        },
        {
          exercise: 'standing-marches',
          sets: 3,
          reps: '10 each leg',
          rest: '45s',
          notes: 'Lift knee to hip height'
        },
        {
          exercise: 'plank',
          sets: 3,
          duration: '20-30s',
          rest: '60s',
          notes: 'Build up duration gradually'
        },
        {
          exercise: 'arm-circles',
          sets: 2,
          reps: '10 each direction',
          rest: '30s',
          notes: 'Warm-up and mobility'
        }
      ],
      coaching_focus: [
        'Integrate upper and lower body',
        'Build core stability',
        'Improve overall coordination'
      ]
    }
  ],
  progression: {
    week_1_2: 'Learn movements, establish routine',
    week_3_4: 'Increase reps by 2-3, longer plank holds',
    week_5_6: 'Progress to harder exercise variations',
    progression_metrics: [
      'Wall push-ups → Incline push-ups',
      'Chair squats → Bodyweight squats',
      'Longer plank holds',
      'Better movement quality'
    ],
    when_to_advance: 'When exercises feel comfortable and you want more challenge'
  },
  coaching_notes: [
    'This is about building a foundation for life',
    'Every workout makes you stronger',
    'Focus on how you feel, not just what you lift',
    'Consistency creates lasting change'
  ]
};

// ===== INTERMEDIATE PROGRAMS =====

export const INTERMEDIATE_HYPERTROPHY: TrainingProgram = {
  id: 'intermediate-hypertrophy',
  level: 'intermediate',
  goal: 'hypertrophy',
  duration_weeks: 8,
  frequency_per_week: 4,
  equipment_required: ['barbell', 'dumbbells', 'bench', 'pull-up-bar', 'cable-machine'],
  description: 'Push/Pull/Legs split designed for muscle growth. Focuses on progressive overload and time under tension for maximum hypertrophy.',
  plan: [
    {
      day: 'monday',
      focus: 'push_chest_shoulders_triceps',
      intensity: 'high',
      estimated_duration: '60-75 minutes',
      exercises: [
        {
          exercise: 'barbell-bench-press',
          sets: 4,
          reps: 8,
          rest: '2-3min',
          load: '75-80% 1RM',
          notes: 'Control the descent, explosive press'
        },
        {
          exercise: 'dumbbell-shoulder-press',
          sets: 3,
          reps: 10,
          rest: '90s',
          tempo: '2-1-2-1',
          notes: 'Full range of motion'
        },
        {
          exercise: 'incline-dumbbell-press',
          sets: 3,
          reps: 12,
          rest: '90s',
          notes: '30-45 degree incline'
        },
        {
          exercise: 'lateral-raises',
          sets: 4,
          reps: 15,
          rest: '60s',
          notes: 'Control the negative'
        },
        {
          exercise: 'tricep-dips',
          sets: 3,
          reps: 12,
          rest: '90s',
          notes: 'Add weight if bodyweight is easy'
        },
        {
          exercise: 'overhead-tricep-extension',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Keep elbows stationary'
        }
      ],
      coaching_focus: [
        'Progressive overload is key',
        'Feel the muscle working',
        'Control the eccentric phase'
      ]
    },
    {
      day: 'tuesday',
      focus: 'pull_back_biceps',
      intensity: 'high',
      estimated_duration: '60-75 minutes',
      exercises: [
        {
          exercise: 'deadlift',
          sets: 4,
          reps: 6,
          rest: '3min',
          load: '80-85% 1RM',
          notes: 'Focus on form, hip hinge pattern'
        },
        {
          exercise: 'lat-pulldown',
          sets: 3,
          reps: 10,
          rest: '90s',
          notes: 'Pull to upper chest, squeeze lats'
        },
        {
          exercise: 'barbell-rows',
          sets: 3,
          reps: 10,
          rest: '90s',
          notes: 'Pull to lower chest/upper abdomen'
        },
        {
          exercise: 'face-pulls',
          sets: 4,
          reps: 15,
          rest: '60s',
          notes: 'High elbows, external rotation'
        },
        {
          exercise: 'barbell-curls',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Control the negative'
        },
        {
          exercise: 'hammer-curls',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Neutral grip, target brachialis'
        }
      ],
      coaching_focus: [
        'Pull with your back, not just arms',
        'Retract shoulder blades',
        'Mind-muscle connection'
      ]
    },
    {
      day: 'thursday',
      focus: 'legs_glutes',
      intensity: 'high',
      estimated_duration: '60-75 minutes',
      exercises: [
        {
          exercise: 'back-squat',
          sets: 4,
          reps: 8,
          rest: '3min',
          load: '75-80% 1RM',
          notes: 'Depth below parallel, drive through heels'
        },
        {
          exercise: 'romanian-deadlift',
          sets: 3,
          reps: 10,
          rest: '2min',
          notes: 'Hip hinge, feel hamstring stretch'
        },
        {
          exercise: 'walking-lunges',
          sets: 3,
          reps: 20,
          rest: '90s',
          notes: '10 each leg, control the descent'
        },
        {
          exercise: 'leg-press',
          sets: 3,
          reps: 15,
          rest: '90s',
          notes: 'Full range of motion'
        },
        {
          exercise: 'leg-curls',
          sets: 3,
          reps: 12,
          rest: '60s',
          notes: 'Squeeze hamstrings at top'
        },
        {
          exercise: 'calf-raises',
          sets: 4,
          reps: 20,
          rest: '60s',
          notes: 'Full stretch and contraction'
        }
      ],
      coaching_focus: [
        'Leg day builds your foundation',
        'Don\'t skip the hard exercises',
        'Feel the burn, embrace it'
      ]
    },
    {
      day: 'saturday',
      focus: 'arms_shoulders_optional',
      intensity: 'moderate',
      estimated_duration: '45-60 minutes',
      exercises: [
        {
          exercise: 'close-grip-bench-press',
          sets: 3,
          reps: 10,
          rest: '2min',
          notes: 'Hands shoulder-width apart'
        },
        {
          exercise: 'preacher-curls',
          sets: 3,
          reps: 12,
          rest: '90s',
          notes: 'Full range of motion'
        },
        {
          exercise: 'arnold-press',
          sets: 3,
          reps: 12,
          rest: '90s',
          notes: 'Rotate palms during press'
        },
        {
          exercise: 'cable-tricep-pushdowns',
          sets: 3,
          reps: 15,
          rest: '60s',
          notes: 'Keep elbows at sides'
        },
        {
          exercise: 'cable-curls',
          sets: 3,
          reps: 15,
          rest: '60s',
          notes: 'Constant tension'
        },
        {
          exercise: 'bike-or-walk',
          duration: '20-30min',
          notes: 'Light cardio for recovery'
        }
      ],
      coaching_focus: [
        'Focus on the pump',
        'Higher volume, moderate intensity',
        'Active recovery'
      ]
    }
  ],
  progression: {
    week_1_2: 'Establish baseline weights, focus on form',
    week_3_4: 'Increase weight by 2.5-5kg on main lifts',
    week_5_6: 'Add extra sets or reps to accessories',
    week_7_8: 'Peak intensity, test new rep maxes',
    deload_week: 'Week 9: Reduce volume by 40%, maintain intensity',
    progression_metrics: [
      'Increase weight on main lifts',
      'Add reps to accessory exercises',
      'Improve muscle definition',
      'Better mind-muscle connection'
    ],
    when_to_advance: 'When you can complete all sets with 2-3 reps in reserve'
  },
  coaching_notes: [
    'Hypertrophy requires consistency and progressive overload',
    'Focus on time under tension',
    'Nutrition and sleep are crucial for muscle growth',
    'Track your workouts and celebrate strength gains'
  ]
};

// ===== ADVANCED PROGRAMS =====

export const ADVANCED_FUNCTIONAL_STRENGTH: TrainingProgram = {
  id: 'advanced-functional-strength',
  level: 'advanced',
  goal: 'functional_strength',
  duration_weeks: 12,
  frequency_per_week: 5,
  equipment_required: ['barbell', 'dumbbells', 'kettlebells', 'pull-up-bar', 'box', 'sled', 'bands'],
  description: 'Elite-level functional strength program combining max effort training, dynamic movements, and conditioning. Builds real-world strength and power.',
  plan: [
    {
      day: 'monday',
      focus: 'max_effort_upper',
      intensity: 'max_effort',
      estimated_duration: '75-90 minutes',
      exercises: [
        {
          exercise: 'weighted-pull-ups',
          sets: 4,
          reps: 5,
          rest: '3-4min',
          load: '85-95% 1RM',
          notes: 'Work up to heavy 5RM'
        },
        {
          exercise: 'barbell-overhead-press',
          sets: 4,
          reps: 6,
          rest: '3min',
          load: '80-90% 1RM',
          notes: 'Strict press, no leg drive'
        },
        {
          exercise: 'ring-rows',
          sets: 3,
          reps: 12,
          rest: '90s',
          notes: 'Body horizontal, full range'
        },
        {
          exercise: 'single-arm-dumbbell-press',
          sets: 3,
          reps: '8 each arm',
          rest: '90s',
          notes: 'Anti-rotation core challenge'
        },
        {
          exercise: 'band-pull-aparts',
          sets: 3,
          reps: 20,
          rest: '60s',
          notes: 'Rear delt activation'
        }
      ],
      coaching_focus: [
        'Max effort means 90-100% intensity',
        'Perfect technique under heavy load',
        'Build absolute strength'
      ]
    },
    {
      day: 'tuesday',
      focus: 'dynamic_lower_power',
      intensity: 'high',
      estimated_duration: '60-75 minutes',
      exercises: [
        {
          exercise: 'box-jumps',
          sets: 5,
          reps: 3,
          rest: '2-3min',
          notes: '24-30 inch box, focus on landing'
        },
        {
          exercise: 'front-squat',
          sets: 5,
          reps: 3,
          rest: '3min',
          load: '85-90% 1RM',
          tempo: 'explosive up',
          notes: 'Speed and power focus'
        },
        {
          exercise: 'sled-push',
          sets: 4,
          distance: '20m',
          rest: '2min',
          notes: 'Heavy load, drive through legs'
        },
        {
          exercise: 'kettlebell-swings',
          sets: 3,
          reps: 20,
          rest: '90s',
          notes: 'Explosive hip extension'
        },
        {
          exercise: 'single-leg-rdl',
          sets: 3,
          reps: '8 each leg',
          rest: '90s',
          notes: 'Balance and unilateral strength'
        }
      ],
      coaching_focus: [
        'Explosive power development',
        'Rate of force development',
        'Athletic movement patterns'
      ]
    },
    {
      day: 'wednesday',
      focus: 'conditioning_recovery',
      intensity: 'moderate',
      estimated_duration: '45-60 minutes',
      exercises: [
        {
          exercise: 'bike-intervals',
          sets: 8,
          duration: '30s on / 90s off',
          notes: 'High intensity intervals'
        },
        {
          exercise: 'turkish-get-ups',
          sets: 3,
          reps: '5 each side',
          rest: '90s',
          notes: 'Slow and controlled'
        },
        {
          exercise: 'farmer-walks',
          sets: 3,
          distance: '40m',
          rest: '90s',
          notes: 'Heavy load, maintain posture'
        },
        {
          exercise: 'yoga-flow',
          duration: '15min',
          notes: 'Mobility and flexibility'
        }
      ],
      coaching_focus: [
        'Active recovery',
        'Maintain movement quality',
        'Build work capacity'
      ]
    },
    {
      day: 'thursday',
      focus: 'max_effort_lower',
      intensity: 'max_effort',
      estimated_duration: '75-90 minutes',
      exercises: [
        {
          exercise: 'deadlift',
          sets: 5,
          reps: 3,
          rest: '4-5min',
          load: '85-95% 1RM',
          notes: 'Work up to heavy 3RM'
        },
        {
          exercise: 'bulgarian-split-squats',
          sets: 4,
          reps: '8 each leg',
          rest: '2min',
          notes: 'Rear foot elevated'
        },
        {
          exercise: 'reverse-hypers',
          sets: 4,
          reps: 12,
          rest: '90s',
          notes: 'Posterior chain strength'
        },
        {
          exercise: 'walking-lunges',
          sets: 3,
          reps: 20,
          rest: '90s',
          notes: 'Add weight for challenge'
        },
        {
          exercise: 'plank-variations',
          sets: 3,
          duration: '45s',
          rest: '60s',
          notes: 'Side planks, front planks'
        }
      ],
      coaching_focus: [
        'Posterior chain dominance',
        'Hip hinge mastery',
        'Core stability under load'
      ]
    },
    {
      day: 'friday',
      focus: 'dynamic_upper_conditioning',
      intensity: 'high',
      estimated_duration: '60-75 minutes',
      exercises: [
        {
          exercise: 'speed-bench-press',
          sets: 6,
          reps: 3,
          rest: '2min',
          load: '60-70% 1RM',
          tempo: 'explosive',
          notes: 'Focus on bar speed'
        },
        {
          exercise: 'medicine-ball-throws',
          sets: 4,
          reps: 8,
          rest: '90s',
          notes: 'Explosive chest pass'
        },
        {
          exercise: 'battle-ropes',
          sets: 4,
          duration: '30s',
          rest: '90s',
          notes: 'High intensity waves'
        },
        {
          exercise: 'band-face-pulls',
          sets: 3,
          reps: 20,
          rest: '60s',
          notes: 'Rear delt and external rotation'
        },
        {
          exercise: 'prowler-sprints',
          sets: 4,
          distance: '20m',
          rest: '2min',
          notes: 'All-out effort'
        }
      ],
      coaching_focus: [
        'Speed and power endurance',
        'Metabolic conditioning',
        'Finish strong'
      ]
    }
  ],
  progression: {
    week_1_3: 'Establish max effort baselines, build work capacity',
    week_4_6: 'Increase loads on max effort days, improve conditioning',
    week_7_9: 'Peak strength phase, test new maxes',
    week_10_12: 'Consolidation phase, prepare for next cycle',
    deload_week: 'Every 4th week: Reduce volume by 50%, maintain intensity',
    progression_metrics: [
      'Increase 1RM on main lifts',
      'Improve power output metrics',
      'Better conditioning times',
      'Enhanced movement quality'
    ],
    when_to_advance: 'When strength gains plateau or after 12-week cycle completion'
  },
  coaching_notes: [
    'This is elite-level training - respect the intensity',
    'Recovery is as important as training',
    'Track all metrics for objective progress',
    'Periodization prevents overtraining and plateaus'
  ]
};

// Program Selection Logic
export const selectProgram = (
  level: 'beginner' | 'intermediate' | 'advanced',
  goal: 'fat_loss' | 'hypertrophy' | 'functional_strength' | 'general_fitness',
  equipment: string[]
): TrainingProgram | null => {
  
  const programs = [
    BEGINNER_FAT_LOSS,
    INTERMEDIATE_HYPERTROPHY,
    ADVANCED_FUNCTIONAL_STRENGTH
  ];

  const matchingPrograms = programs.filter(program => 
    program.level === level && 
    program.goal === goal &&
    program.equipment_required.every(eq => equipment.includes(eq) || eq.startsWith('optional'))
  );

  return matchingPrograms[0] || null;
};

// AI Training Data Export
export const STRUCTURED_TRAINING_PROGRAMS = {
  BEGINNER_FAT_LOSS,
  INTERMEDIATE_HYPERTROPHY,
  ADVANCED_FUNCTIONAL_STRENGTH,
  selectProgram
}; 