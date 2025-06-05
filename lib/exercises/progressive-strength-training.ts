export interface ProgressiveExercise {
  id: string;
  name: string;
  aspirationalName: string; // What it feels like, not what it is
  category: 'strength' | 'power' | 'endurance';
  progressionLevel: 1 | 2 | 3 | 4 | 5; // 1 = complete beginner, 5 = advanced
  equipment: string[];
  muscleGroups: string[];
  difficulty: number;
  instructions: string[];
  safetyNotes: string[];
  aspirationalBenefits: string[]; // Focus on outcomes, not mechanics
  realWorldApplications: string[]; // How this helps in daily life
  progressionPath?: {
    previousExercise?: string;
    nextExercise?: string;
    whenToProgress: string;
  };
  modifications: {
    beginner: string;
    advanced: string;
    equipment_alternatives: Record<string, string>;
  };
  metrics: {
    type: 'reps' | 'weight' | 'time';
    defaultValue: number;
    progressionRate: number;
    unit: string;
  };
  coaching: {
    setup: string[];
    execution: string[];
    common_mistakes: string[];
    breathing: string;
    motivationalCues: string[]; // Aspirational coaching cues
  };
}

// Progressive Strength Training: From "Feeling Strong" to Advanced Movements
export const PROGRESSIVE_STRENGTH_EXERCISES: Record<string, ProgressiveExercise> = {
  
  // ===== LEVEL 1: FOUNDATION - "I Want to Feel Strong" =====
  
  'wall-push': {
    id: 'wall-push',
    name: 'Wall Push-Up',
    aspirationalName: 'Building Your Foundation of Strength',
    category: 'strength',
    progressionLevel: 1,
    equipment: [],
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 1,
    instructions: [
      'Stand arm\'s length from a wall',
      'Place palms flat against the wall at shoulder height',
      'Lean forward and push back to starting position',
      'Feel your chest and arms working together'
    ],
    safetyNotes: [
      'Start close to the wall for easier movement',
      'Keep your body in a straight line',
      'Move slowly and controlled'
    ],
    aspirationalBenefits: [
      'Builds confidence in your upper body strength',
      'Creates the foundation for pushing movements',
      'Develops mind-muscle connection',
      'Prepares you for more challenging exercises'
    ],
    realWorldApplications: [
      'Pushing open heavy doors with ease',
      'Getting up from the floor more easily',
      'Feeling stable when carrying things'
    ],
    progressionPath: {
      nextExercise: 'incline-push-up',
      whenToProgress: 'When you can do 15 wall push-ups with perfect form'
    },
    modifications: {
      beginner: 'Stand closer to the wall',
      advanced: 'Step further from the wall',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Stand tall', 'Arms at shoulder height', 'Feel grounded'],
      execution: ['Push the wall away from you', 'Feel your strength building', 'Control the movement'],
      common_mistakes: ['Rushing the movement', 'Not engaging core'],
      breathing: 'Exhale as you push, inhale as you lean in',
      motivationalCues: [
        'You\'re building real strength right now',
        'Every rep makes you stronger',
        'Feel your power growing'
      ]
    }
  },

  'chair-squat': {
    id: 'chair-squat',
    name: 'Chair-Assisted Squat',
    aspirationalName: 'Mastering Your Foundation Movement',
    category: 'strength',
    progressionLevel: 1,
    equipment: ['chair'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 1,
    instructions: [
      'Stand in front of a sturdy chair',
      'Lower yourself until you lightly touch the chair',
      'Stand back up using your leg strength',
      'Feel your legs getting stronger with each rep'
    ],
    safetyNotes: [
      'Use the chair as a guide, not support',
      'Keep your chest up and core engaged',
      'Don\'t plop down onto the chair'
    ],
    aspirationalBenefits: [
      'Builds the strength to get up from any chair effortlessly',
      'Develops powerful leg muscles',
      'Improves balance and stability',
      'Creates confidence in your lower body'
    ],
    realWorldApplications: [
      'Getting up from low chairs without using your hands',
      'Climbing stairs with energy to spare',
      'Playing with kids or grandkids on the floor'
    ],
    progressionPath: {
      nextExercise: 'bodyweight-squat',
      whenToProgress: 'When you can do 12 chair squats without touching the chair'
    },
    modifications: {
      beginner: 'Use a higher chair or add a cushion',
      advanced: 'Hover above the chair without touching',
      equipment_alternatives: {
        'chair': 'Couch or bed edge'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Stand tall', 'Feet hip-width apart', 'Chair behind you'],
      execution: ['Sit back like you\'re sitting down', 'Drive through your heels to stand', 'Feel your legs working'],
      common_mistakes: ['Knees caving inward', 'Leaning too far forward'],
      breathing: 'Inhale as you lower, exhale as you stand',
      motivationalCues: [
        'You\'re building the strength to handle anything',
        'Feel your legs getting more powerful',
        'This is how champions start'
      ]
    }
  },

  // ===== LEVEL 2: BUILDING CONFIDENCE =====

  'incline-push-up': {
    id: 'incline-push-up',
    name: 'Incline Push-Up',
    aspirationalName: 'Elevating Your Strength Game',
    category: 'strength',
    progressionLevel: 2,
    equipment: ['bench', 'couch'],
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 2,
    instructions: [
      'Place hands on a bench or couch edge',
      'Walk your feet back to create an incline',
      'Lower your chest toward the surface',
      'Push back up with control and power'
    ],
    safetyNotes: [
      'Ensure the surface is stable',
      'Keep your body in a straight line',
      'Don\'t let your hips sag'
    ],
    aspirationalBenefits: [
      'Builds serious upper body strength',
      'Develops the power for real push-ups',
      'Creates visible muscle definition',
      'Boosts confidence in your abilities'
    ],
    realWorldApplications: [
      'Pushing heavy shopping carts with ease',
      'Moving furniture when needed',
      'Feeling strong and capable in daily tasks'
    ],
    progressionPath: {
      previousExercise: 'wall-push',
      nextExercise: 'knee-push-up',
      whenToProgress: 'When you can do 12 incline push-ups with perfect form'
    },
    modifications: {
      beginner: 'Use a higher surface like a kitchen counter',
      advanced: 'Use a lower surface or add a pause at the bottom',
      equipment_alternatives: {
        'bench': 'Stairs, couch, or sturdy table'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Hands shoulder-width apart', 'Body in straight line', 'Core engaged'],
      execution: ['Lower with control', 'Push the surface away', 'Feel your strength'],
      common_mistakes: ['Sagging hips', 'Partial range of motion'],
      breathing: 'Inhale down, exhale up with power',
      motivationalCues: [
        'You\'re getting stronger every day',
        'Feel that power building',
        'You\'re becoming unstoppable'
      ]
    }
  },

  'bodyweight-squat': {
    id: 'bodyweight-squat',
    name: 'Bodyweight Squat',
    aspirationalName: 'Unleashing Your Lower Body Power',
    category: 'strength',
    progressionLevel: 2,
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart',
      'Lower down as if sitting in an invisible chair',
      'Keep your chest up and weight in your heels',
      'Drive through your heels to stand up strong'
    ],
    safetyNotes: [
      'Don\'t let knees cave inward',
      'Keep your chest up throughout',
      'Go only as low as comfortable'
    ],
    aspirationalBenefits: [
      'Builds incredible leg strength and power',
      'Develops the glutes for a strong, stable body',
      'Improves mobility and flexibility',
      'Creates the foundation for all lower body strength'
    ],
    realWorldApplications: [
      'Getting up from the floor effortlessly',
      'Carrying heavy groceries up stairs',
      'Playing sports with power and confidence'
    ],
    progressionPath: {
      previousExercise: 'chair-squat',
      nextExercise: 'goblet-squat',
      whenToProgress: 'When you can do 15 perfect bodyweight squats'
    },
    modifications: {
      beginner: 'Hold onto a doorframe for balance',
      advanced: 'Add a pause at the bottom or single-leg squats',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet hip-width', 'Chest up', 'Core braced'],
      execution: ['Sit back and down', 'Drive through heels', 'Stand up with power'],
      common_mistakes: ['Knees caving in', 'Leaning too far forward'],
      breathing: 'Inhale down, exhale up with force',
      motivationalCues: [
        'Feel your legs getting more powerful',
        'You\'re building real strength',
        'This is how athletes train'
      ]
    }
  },

  // ===== LEVEL 3: GAINING MOMENTUM =====

  'goblet-squat': {
    id: 'goblet-squat',
    name: 'Goblet Squat',
    aspirationalName: 'Adding Weight to Your Power',
    category: 'strength',
    progressionLevel: 3,
    equipment: ['dumbbell', 'kettlebell'],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core', 'upper-back'],
    difficulty: 3,
    instructions: [
      'Hold a dumbbell or kettlebell at chest level',
      'Squat down while keeping the weight close to your body',
      'Feel the added challenge making you stronger',
      'Stand up with power, driving through your heels'
    ],
    safetyNotes: [
      'Start with a light weight',
      'Keep the weight close to your chest',
      'Maintain good squat form'
    ],
    aspirationalBenefits: [
      'Builds serious functional strength',
      'Develops core stability under load',
      'Prepares you for advanced strength training',
      'Creates the confidence to handle heavier weights'
    ],
    realWorldApplications: [
      'Lifting and carrying children with ease',
      'Moving boxes and heavy items safely',
      'Feeling strong and capable in any situation'
    ],
    progressionPath: {
      previousExercise: 'bodyweight-squat',
      nextExercise: 'dumbbell-romanian-deadlift',
      whenToProgress: 'When you can do 12 goblet squats with 15-20 lbs'
    },
    modifications: {
      beginner: 'Use a lighter weight or water bottle',
      advanced: 'Increase weight or add a pause',
      equipment_alternatives: {
        'dumbbell': 'Kettlebell, medicine ball, or heavy book'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 8,
      progressionRate: 2,
      unit: 'kg'
    },
    coaching: {
      setup: ['Weight at chest', 'Elbows down', 'Core tight'],
      execution: ['Squat with the weight', 'Feel your strength', 'Power up'],
      common_mistakes: ['Weight drifting away from body', 'Losing squat form'],
      breathing: 'Inhale down, exhale up powerfully',
      motivationalCues: [
        'You\'re handling real weight now',
        'Feel how strong you\'ve become',
        'This is serious strength training'
      ]
    }
  },

  // ===== LEVEL 4: SERIOUS STRENGTH =====

  'dumbbell-romanian-deadlift': {
    id: 'dumbbell-romanian-deadlift',
    name: 'Dumbbell Romanian Deadlift',
    aspirationalName: 'Mastering the Hip Hinge - Your Power Movement',
    category: 'strength',
    progressionLevel: 4,
    equipment: ['dumbbells'],
    muscleGroups: ['hamstrings', 'glutes', 'lower-back', 'core'],
    difficulty: 3,
    instructions: [
      'Hold dumbbells in front of your thighs',
      'Hinge at your hips, pushing them back',
      'Feel the stretch in your hamstrings',
      'Drive your hips forward to return to standing'
    ],
    safetyNotes: [
      'Keep the weights close to your body',
      'Maintain a flat back throughout',
      'Don\'t go lower than your flexibility allows'
    ],
    aspirationalBenefits: [
      'Builds incredible posterior chain strength',
      'Develops the hip hinge pattern for real-world power',
      'Strengthens your back and core for daily activities',
      'Prepares you for the ultimate strength exercise'
    ],
    realWorldApplications: [
      'Picking up anything from the floor safely',
      'Lifting luggage into overhead compartments',
      'Having a strong, pain-free back for life'
    ],
    progressionPath: {
      previousExercise: 'goblet-squat',
      nextExercise: 'barbell-deadlift',
      whenToProgress: 'When you can do 10 RDLs with 20-25 lbs per hand'
    },
    modifications: {
      beginner: 'Use lighter weights or just bodyweight',
      advanced: 'Increase weight or try single-leg version',
      equipment_alternatives: {
        'dumbbells': 'Kettlebells, resistance bands, or water jugs'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 2.5,
      unit: 'kg per dumbbell'
    },
    coaching: {
      setup: ['Weights in front', 'Slight knee bend', 'Chest up'],
      execution: ['Push hips back', 'Feel the stretch', 'Drive hips forward'],
      common_mistakes: ['Squatting instead of hinging', 'Rounding the back'],
      breathing: 'Inhale as you lower, exhale as you stand',
      motivationalCues: [
        'You\'re learning the most important movement pattern',
        'Feel your posterior chain getting stronger',
        'This is how you build real-world strength'
      ]
    }
  },

  // ===== LEVEL 5: ELITE STRENGTH =====

  'barbell-deadlift': {
    id: 'barbell-deadlift',
    name: 'Barbell Deadlift',
    aspirationalName: 'The Ultimate Expression of Your Strength Journey',
    category: 'strength',
    progressionLevel: 5,
    equipment: ['barbell', 'weight-plates'],
    muscleGroups: ['glutes', 'hamstrings', 'lower-back', 'quads', 'traps', 'forearms', 'core'],
    difficulty: 4,
    instructions: [
      'Stand with the bar over your mid-foot',
      'Grip the bar just outside your shins',
      'Keep your back flat and chest up',
      'Drive through your heels and extend your hips to lift the bar',
      'Stand tall and proud - you\'ve earned this moment'
    ],
    safetyNotes: [
      'Master the hip hinge pattern first',
      'Start with light weight to perfect form',
      'Keep the bar close to your body throughout'
    ],
    aspirationalBenefits: [
      'Represents the pinnacle of functional strength',
      'Builds total-body power and confidence',
      'Develops the strength to handle any physical challenge',
      'Creates an unshakeable sense of personal power'
    ],
    realWorldApplications: [
      'Lifting anything heavy with perfect technique',
      'Having the strength and confidence for any physical task',
      'Feeling unstoppable in your daily life',
      'Being the person others turn to when strength is needed'
    ],
    progressionPath: {
      previousExercise: 'dumbbell-romanian-deadlift',
      whenToProgress: 'You\'ve reached the pinnacle - now focus on progressive overload'
    },
    modifications: {
      beginner: 'Use a trap bar or lighter barbell',
      advanced: 'Increase weight, try deficit deadlifts, or pause deadlifts',
      equipment_alternatives: {
        'barbell': 'Trap bar, heavy dumbbells, or resistance bands'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 40,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: ['Bar over mid-foot', 'Grip outside shins', 'Flat back'],
      execution: ['Drive through heels', 'Extend hips and knees together', 'Stand tall with pride'],
      common_mistakes: ['Bar drifting away', 'Rounding back', 'Hyperextending at top'],
      breathing: 'Big breath before lift, exhale at top or during lift',
      motivationalCues: [
        'This is the culmination of your strength journey',
        'Feel the power you\'ve built over months of training',
        'You\'re now capable of incredible things',
        'This is what real strength feels like'
      ]
    }
  }
};

/**
 * ASPIRATIONAL FRAMING APPROACH
 * 
 * The Problem: Beginners select "Feel Strong & Powerful" but get intimidated 
 * by seeing "Deadlift" and "Incline Cycling" immediately.
 * 
 * The Solution: Show them the END RESULT first, then gradually introduce 
 * the path to get there.
 * 
 * Example Journey:
 * Week 1: "Building Your Foundation of Strength" (Wall push-ups, Chair squats)
 * Week 4: "Developing Real Strength" (Incline push-ups, Bodyweight squats)  
 * Week 8: "Gaining Serious Momentum" (Goblet squats, Dumbbell exercises)
 * Week 12: "Mastering Advanced Strength" (Romanian deadlifts, Loaded movements)
 * Week 16: "The Ultimate Expression of Your Strength Journey" (Barbell deadlift)
 * 
 * Key Principles:
 * 1. Aspirational naming: "Building Your Foundation" not "Beginner Exercises"
 * 2. Outcome focus: "Carrying groceries with ease" not "Quadriceps strengthening"
 * 3. Progressive revelation: Show the journey, not the destination
 * 4. Confidence building: Every level feels like an achievement
 * 5. Real-world connection: Always tie back to daily life benefits
 */

// Training Program Generator based on Aspirational Goals
export const generateProgressiveProgram = (
  goal: 'strength' | 'confidence' | 'daily-life',
  currentLevel: 1 | 2 | 3 | 4 | 5,
  timeAvailable: number // minutes
) => {
  const exercises = Object.values(PROGRESSIVE_STRENGTH_EXERCISES)
    .filter(ex => ex.progressionLevel <= currentLevel + 1) // Include next level for progression
    .sort((a, b) => a.progressionLevel - b.progressionLevel);

  const program = {
    title: getAspirationalProgramTitle(goal, currentLevel),
    description: getAspirationalDescription(goal, currentLevel),
    exercises: exercises.slice(0, timeAvailable >= 45 ? 4 : 3),
    progressionMessage: getProgressionMessage(currentLevel),
    nextMilestone: getNextMilestone(currentLevel)
  };

  return program;
};

const getAspirationalProgramTitle = (goal: string, level: number): string => {
  const titles: Record<string, string[]> = {
    strength: [
      'Building Your Foundation of Power',
      'Developing Real Strength',
      'Gaining Serious Momentum', 
      'Mastering Advanced Strength',
      'Unleashing Elite Power'
    ],
    confidence: [
      'Building Unshakeable Confidence',
      'Developing Physical Confidence',
      'Growing Your Self-Assurance',
      'Mastering Your Capabilities',
      'Becoming Unstoppable'
    ],
    'daily-life': [
      'Strength for Everyday Life',
      'Power for Daily Activities',
      'Mastering Life\'s Physical Demands',
      'Advanced Functional Strength',
      'Elite Real-World Capability'
    ]
  };
  
  return titles[goal]?.[level - 1] || 'Your Strength Journey';
};

const getAspirationalDescription = (goal: string, level: number): string => {
  if (level === 1) {
    return 'Every champion started exactly where you are now. These foundational movements will build the strength and confidence you\'re looking for.';
  } else if (level === 5) {
    return 'You\'ve built incredible strength and capability. These advanced movements represent the pinnacle of functional fitness.';
  } else {
    return 'You\'re building real strength and seeing amazing progress. Each workout makes you more capable and confident.';
  }
};

const getProgressionMessage = (level: number): string => {
  const messages = [
    'Focus on perfect form and building confidence. Strength will follow.',
    'You\'re getting stronger! Feel the difference in your daily activities.',
    'Real strength is developing. You\'re becoming more capable every day.',
    'You\'re handling serious weight now. This is advanced strength training.',
    'You\'ve reached elite strength levels. Continue challenging yourself!'
  ];
  
  return messages[level - 1];
};

const getNextMilestone = (level: number): string => {
  const milestones = [
    'Goal: Complete all foundation exercises with perfect form',
    'Goal: Add weight to your movements and feel the power',
    'Goal: Master loaded movements and build serious strength',
    'Goal: Perfect the hip hinge and prepare for the deadlift',
    'Goal: Continue progressive overload and maintain your strength'
  ];
  
  return milestones[level - 1];
}; 