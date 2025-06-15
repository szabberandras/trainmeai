import { Exercise } from '../types';

// CrossFit Exercise Database - Based on Official CrossFit Methodology
// "Constantly varied functional movement executed at high intensity"
// Focused on the Nine Foundational Movements and classic CrossFit exercises

export const CROSSFIT_EXERCISES: Record<string, Exercise> = {
  
  // === THE NINE FOUNDATIONAL MOVEMENTS ===
  // These form the core of CrossFit methodology
  
  'air-squats': {
    id: 'air-squats',
    name: 'Air Squats',
    category: 'crossfit',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart, toes slightly out',
      'Keep chest up and core engaged',
      'Lower by pushing hips back and down',
      'Descend until hip crease is below top of knee (below parallel)',
      'Drive through heels to return to standing',
      'Maintain lumbar curve throughout movement'
    ],
    safetyNotes: [
      'Keep knees tracking over toes',
      'Maintain neutral spine',
      'Weight should remain in heels/midfoot'
    ],
    modifications: {
      beginner: 'Squat to box or medicine ball to control depth',
      advanced: 'Jump squats or pistol squats',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width', 'Chest up', 'Core tight'],
      execution: ['Hips back first', 'Full depth', 'Drive through heels'],
      common_mistakes: ['Knees caving in', 'Forward lean', 'Not full depth', 'Initiating with knees instead of hips'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'front-squat': {
    id: 'front-squat',
    name: 'Front Squat',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['quadriceps', 'glutes', 'core', 'upper-back'],
    difficulty: 3,
    instructions: [
      'Set up barbell in front rack position on shoulders',
      'Hands in loose, fingertip grip outside shoulders',
      'Keep elbows high, upper arms parallel to ground',
      'Perform squat maintaining upright torso',
      'Descend until hip crease below knee',
      'Drive up through heels maintaining elbow position'
    ],
    safetyNotes: [
      'Bar should rest on shoulders, not hands/wrists',
      'Maintain high elbows throughout movement',
      'Keep torso as upright as possible'
    ],
    modifications: {
      beginner: 'Goblet squat with dumbbell or kettlebell',
      advanced: 'Pause front squats or overhead squats',
      equipment_alternatives: {
        'barbell': 'Dumbbells (goblet squat) or kettlebells'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 40,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: ['Front rack position', 'Elbows high', 'Loose grip'],
      execution: ['Chest proud', 'Elbows up throughout', 'Drive through heels'],
      common_mistakes: ['Elbows dropping', 'Over-gripping bar', 'Forward lean'],
      breathing: 'Big breath at top, exhale through sticking point'
    }
  },

  'overhead-squat': {
    id: 'overhead-squat',
    name: 'Overhead Squat',
    category: 'crossfit',
    equipment: ['barbell', 'pvc-pipe'],
    muscleGroups: ['full-body', 'shoulders', 'core', 'quadriceps', 'glutes'],
    difficulty: 4,
    instructions: [
      'Start with wide grip on barbell overhead',
      'Arms locked out, active shoulders pushing up',
      'Armpits face forward (external rotation)',
      'Perform squat keeping bar over midfoot throughout',
      'Maintain vertical torso as much as possible',
      'Return to standing with bar still overhead'
    ],
    safetyNotes: [
      'Start with PVC pipe to learn movement pattern',
      'Requires excellent shoulder and ankle mobility',
      'Bar must stay over base of support'
    ],
    modifications: {
      beginner: 'Start with PVC pipe, progress slowly',
      advanced: 'Overhead squat from snatch receive position',
      equipment_alternatives: {
        'barbell': 'PVC pipe or broomstick'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 1.25,
      unit: 'kg'
    },
    coaching: {
      setup: ['Wide grip', 'Active shoulders', 'Armpits forward'],
      execution: ['Push bar to ceiling', 'Chest up', 'Bar over midfoot'],
      common_mistakes: ['Bar drifting forward/back', 'Bending elbows', 'Excessive forward lean'],
      breathing: 'Controlled breathing, brace core'
    }
  },

  'shoulder-press': {
    id: 'shoulder-press',
    name: 'Shoulder Press (Strict Press)',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['shoulders', 'triceps', 'core'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart',
      'Grip bar just outside shoulders',
      'Bar starts at shoulder level, elbows slightly forward',
      'Keep torso and legs completely static',
      'Press bar straight up over midfoot',
      'Achieve full lockout with active shoulders'
    ],
    safetyNotes: [
      'No leg drive or body movement',
      'Keep core tight to protect lower back',
      'Press bar around face, not forward'
    ],
    modifications: {
      beginner: 'Reduce weight or use dumbbells',
      advanced: 'Behind-the-neck press (if mobility allows)',
      equipment_alternatives: {
        'barbell': 'Dumbbells or kettlebells'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 30,
      progressionRate: 1.25,
      unit: 'kg'
    },
    coaching: {
      setup: ['Hip-width stance', 'Tight core', 'Elbows forward'],
      execution: ['Straight up', 'Tuck chin then push head through', 'Active shoulders'],
      common_mistakes: ['Using legs', 'Excessive back arch', 'Pressing forward'],
      breathing: 'Inhale at bottom, exhale through press'
    }
  },

  'push-press': {
    id: 'push-press',
    name: 'Push Press',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['shoulders', 'legs', 'core'],
    difficulty: 3,
    instructions: [
      'Start in same position as shoulder press',
      'Dip: shallow bend of knees and hips, torso vertical',
      'Drive: explosive extension of hips and legs',
      'Press: arms press after full hip/leg extension',
      'Keep heels down until drive is complete'
    ],
    safetyNotes: [
      'Dip must be vertical, no forward lean',
      'Complete hip extension before pressing',
      'Land with feet in same position'
    ],
    modifications: {
      beginner: 'Practice dip and drive without pressing',
      advanced: 'Push jerk or split jerk',
      equipment_alternatives: {
        'barbell': 'Dumbbells or kettlebells'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 40,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: ['Same as strict press', 'Ready for dip'],
      execution: ['Dip straight down', 'Jump and press', 'Fast transition'],
      common_mistakes: ['Forward lean in dip', 'Pressing before hip extension', 'Pausing in dip'],
      breathing: 'Inhale on dip, exhale on drive'
    }
  },

  'push-jerk': {
    id: 'push-jerk',
    name: 'Push Jerk',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['shoulders', 'legs', 'core'],
    difficulty: 4,
    instructions: [
      'Same dip and drive as push press',
      'After drive, aggressively press under the bar',
      'Catch bar in partial squat with arms locked out',
      'Feet may move to wider, more stable position',
      'Stand to full extension to complete lift'
    ],
    safetyNotes: [
      'Focus on speed under the bar',
      'Catch with arms fully locked out',
      'Ensure stable receiving position'
    ],
    modifications: {
      beginner: 'Master push press first, practice with PVC',
      advanced: 'Split jerk for heavier loads',
      equipment_alternatives: {
        'barbell': 'Dumbbells (single-arm variations)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 45,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: ['Same as push press'],
      execution: ['Dip, drive, dip, stand', 'Fast under bar', 'Stable catch'],
      common_mistakes: ['Pressing up instead of under', 'Slow transition', 'Catching on toes'],
      breathing: 'Controlled breathing, exhale on drive'
    }
  },
  'burpee': {
    id: 'burpee',
    name: 'Burpee',
    category: 'crossfit',
    equipment: [],
    muscleGroups: ['full-body', 'cardiovascular'],
    difficulty: 4,
    instructions: [
      'Start standing, feet shoulder-width apart',
      'Squat down and place hands on floor',
      'Jump feet back to plank position',
      'Perform push-up (optional)',
      'Jump feet back to squat position',
      'Explode up with arms overhead'
    ],
    safetyNotes: [
      'Land softly on jumps',
      'Keep core tight throughout',
      'Pace yourself to maintain form'
    ],
    modifications: {
      beginner: 'Step back instead of jumping, omit push-up',
      advanced: 'Add push-up, tuck jump, or single-arm burpee',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 15,
      unit: 'reps'
    },
    coaching: {
      setup: ['Start tall', 'Engage core'],
      execution: ['Smooth transitions', 'Land softly', 'Full extension at top'],
      common_mistakes: ['Sloppy form when tired', 'Hard landings', 'Incomplete range'],
      breathing: 'Breathe rhythmically throughout'
    }
  },

  'burpee-broad-jumps': {
    id: 'burpee-broad-jumps',
    name: 'Burpee Broad Jumps',
    category: 'crossfit',
    equipment: [],
    muscleGroups: ['full-body'],
    difficulty: 5,
    instructions: [
      'Perform standard burpee with chest to ground',
      'Jump feet to hands in squat position',
      'Explode forward into broad jump',
      'Land softly, immediately drop into next burpee',
      'Continue for prescribed distance'
    ],
    safetyNotes: [
      'Land softly on jumps',
      'Keep core tight',
      'Pace yourself for distance'
    ],
    modifications: {
      beginner: 'Step back burpees, smaller jumps',
      advanced: 'Add push-up, maximize jump distance',
      equipment_alternatives: {
        'none': 'Burpee box jump-overs'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Mark starting point', 'Prepare for continuous movement'],
      execution: ['Chest touches ground', 'Maximum forward jump'],
      common_mistakes: ['Not jumping forward enough', 'Poor burpee form'],
      breathing: 'Breathe continuously throughout'
    }
  },

  'wall-balls': {
    id: 'wall-balls',
    name: 'Wall Balls',
    category: 'crossfit',
    equipment: ['medicine-ball'],
    muscleGroups: ['quadriceps', 'glutes', 'shoulders', 'core'],
    difficulty: 3,
    instructions: [
      'Stand arm\'s length from wall, hold ball at chest',
      'Squat down, keeping ball at chest level',
      'Drive up explosively from squat',
      'Throw ball to target height (10ft men, 9ft women)',
      'Catch ball and immediately descend into next rep'
    ],
    safetyNotes: [
      'Keep eyes on ball',
      'Catch with soft hands',
      'Stand appropriate distance from wall'
    ],
    modifications: {
      beginner: 'Lower target, lighter ball',
      advanced: 'Heavier ball, higher target',
      equipment_alternatives: {
        'medicine-ball': 'Thrusters with dumbbells'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width', 'Ball at chest'],
      execution: ['Full squat depth', 'Explosive hip drive'],
      common_mistakes: ['Not hitting target', 'Poor catch position'],
      breathing: 'Exhale on throw, inhale on catch'
    }
  },

  'deadlift': {
    id: 'deadlift',
    name: 'Deadlift',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Quads', 'Traps', 'Forearms'],
    difficulty: 4,
    instructions: [
      'Stand with your mid-foot under the barbell. Your shins should be close to the bar.',
      'Bend at your knees and hips to grasp the barbell with an overhand or mixed grip, hands just outside your shins.',
      'Lower your hips, flatten your back, and ensure your chest is up and shoulders are slightly in front of the bar.',
      'Take a deep breath, brace your core, and lift the weight by extending your hips and knees simultaneously, keeping the bar close to your body.',
      'Stand tall at the top, squeezing your glutes, then slowly lower the bar back to the floor with control, reversing the movement.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire lift; rounding your back can lead to serious injury.',
      'Keep the bar as close to your body as possible to maintain leverage.',
      'Always start with light weight to master form before increasing load.'
    ],
    modifications: {
      beginner: 'Perform with lighter weight, or focus on Romanian Deadlifts or Hip Hinges to build foundational strength.',
      advanced: 'Increase the weight, perform deficit deadlifts (standing on a plate), or pause deadlifts.',
      equipment_alternatives: {
        'barbell': 'Trap Bar Deadlift',
        'dumbbells': 'Dumbbell Romanian Deadlift'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 40,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Mid-foot under bar, shins close.',
        'Grip bar, lower hips, chest up, flat back.',
        'Shoulders slightly in front of bar.'
      ],
      execution: [
        'Lift with hips and knees simultaneously, not just back.',
        'Keep bar path vertical and close to body.',
        'Squeeze glutes at the top, avoid hyperextension.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Squatting the weight up (hips rising too fast).',
        'Letting the bar drift away from the body.'
      ],
      breathing: 'Deep breath and brace before lifting, exhale at the top or during the concentric phase.'
    }
  },

  'kettlebell-swing': {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing (Russian)',
    category: 'crossfit',
    equipment: ['kettlebells'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Core', 'Shoulders'],
    difficulty: 3,
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart, kettlebell on the floor in front of you.',
      'Hinge at your hips and grasp the kettlebell with both hands, palms facing you, maintaining a straight back.',
      'Hike the kettlebell back between your legs, loading your glutes and hamstrings.',
      'Explosively drive your hips forward, squeezing your glutes, to swing the kettlebell up to chest or eye level.',
      'Allow the kettlebell to naturally swing back down, hinging at your hips as it descends, and repeat the explosive hip drive.'
    ],
    safetyNotes: [
      'The movement is a hip hinge, not a squat; focus on pushing your hips back, not bending your knees excessively.',
      'Maintain a straight back throughout the entire movement; avoid rounding your spine.',
      'Control the kettlebell; do not let it pull you forward or lose control at the top of the swing.'
    ],
    modifications: {
      beginner: 'Use a lighter kettlebell and focus on mastering the hip hinge movement. Perform Deadlifts or Romanian Deadlifts first.',
      advanced: 'Increase the weight, perform single-arm kettlebell swings, or incorporate a higher swing (American Kettlebell Swing).',
      equipment_alternatives: {
        'kettlebells': 'Dumbbell Swing (less common)',
        'barbell': 'Barbell Romanian Deadlift (less explosive)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet slightly wider than shoulder-width, kettlebell in front.',
        'Hinge at hips, flat back, grip kettlebell.',
        'Shoulders back and down, gaze forward.'
      ],
      execution: [
        'Hike kettlebell back, then explosively drive hips forward.',
        'Squeeze glutes hard at the top of the swing.',
        'Allow kettlebell to swing naturally, control descent.'
      ],
      common_mistakes: [
        'Squatting instead of hinging.',
        'Rounding the back.',
        'Using arms to lift the kettlebell instead of hip drive.'
      ],
      breathing: 'Inhale on the backswing, exhale powerfully as you drive hips forward.'
    }
  },

  'box-jump': {
    id: 'box-jump',
    name: 'Box Jump',
    category: 'crossfit',
    equipment: ['Plyo Box'],
    muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand in front of a plyo box, feet shoulder-width apart.',
      'Lower into a quarter-squat position, swinging your arms back.',
      'Explosively jump up onto the box, swinging your arms forward to generate momentum.',
      'The jump should be powerful, aiming to land softly on the center of the box.',
      'Land in a partial squat position to absorb the impact.',
      'Stand up tall on the box.',
      'Step down one foot at a time. Do not jump down.',
      'Reset and repeat.'
    ],
    safetyNotes: [
      'Start with a low box and master the landing mechanics before increasing the height.',
      'The goal is to jump high, not just to clear a high box with tucked knees. Focus on hip extension.',
      'Always step down. Jumping down significantly increases injury risk.',
      'Ensure the box is stable and on a non-slip surface.'
    ],
    modifications: {
      beginner: 'Use a very low box or a stack of weight plates. Perform box step-ups.',
      advanced: 'Increase the height of the box. Add a tuck jump or perform from a seated position on a bench.',
      equipment_alternatives: {
        'Plyo Box': 'A stable bench, stack of weight plates, or sturdy ledge.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand facing a stable box.',
        'Feet shoulder-width apart.'
      ],
      execution: [
        'Load by dipping into a quarter-squat, arms back.',
        'Explode up, driving arms forward.',
        'Land softly on the box in a squat.',
        'Stand tall, then step down.'
      ],
      common_mistakes: [
        'Jumping down from the box.',
        'Landing with stiff legs.',
        'Tucking knees excessively instead of extending hips.'
      ],
      breathing: 'Exhale forcefully on the jump.'
    }
  },

  'thrusters': {
    id: 'thrusters',
    name: 'Thrusters',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['quadriceps', 'glutes', 'shoulders', 'core'],
    difficulty: 4,
    instructions: [
      'Start with barbell in front rack position, elbows up',
      'Feet shoulder-width apart, core engaged',
      'Squat down until thighs are parallel to floor',
      'Drive up explosively through heels',
      'As you stand, press the bar overhead in one fluid motion',
      'Lower bar back to front rack and repeat'
    ],
    safetyNotes: [
      'Keep elbows up in front rack position',
      'Maintain upright torso during squat',
      'Press bar directly overhead, not forward'
    ],
    modifications: {
      beginner: 'Use lighter weight or dumbbells',
      advanced: 'Increase weight or add pause at bottom',
      equipment_alternatives: {
        'barbell': 'Dumbbells or kettlebells'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: ['Front rack position', 'Elbows high', 'Core tight'],
      execution: ['Full squat depth', 'Explosive drive up', 'Press overhead at top'],
      common_mistakes: ['Elbows dropping', 'Pressing too early', 'Not full depth'],
      breathing: 'Inhale down, exhale on press'
    }
  },

  'pull-ups': {
    id: 'pull-ups',
    name: 'Pull-ups',
    category: 'crossfit',
    equipment: ['pull-up-bar'],
    muscleGroups: ['lats', 'rhomboids', 'biceps', 'core'],
    difficulty: 4,
    instructions: [
      'Hang from pull-up bar with overhand grip, hands shoulder-width apart',
      'Start from dead hang with arms fully extended',
      'Pull yourself up until chin clears the bar',
      'Lower yourself with control back to dead hang',
      'Maintain hollow body position throughout'
    ],
    safetyNotes: [
      'Avoid kipping until strict pull-ups are mastered',
      'Control the descent to prevent injury',
      'Ensure secure grip on bar'
    ],
    modifications: {
      beginner: 'Assisted pull-ups with band or machine',
      advanced: 'Weighted pull-ups or muscle-ups',
      equipment_alternatives: {
        'pull-up-bar': 'Resistance bands or lat pulldown machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 1,
      unit: 'reps'
    },
    coaching: {
      setup: ['Dead hang start', 'Overhand grip', 'Hollow body'],
      execution: ['Pull to chin over bar', 'Control descent', 'Full range of motion'],
      common_mistakes: ['Not reaching full extension', 'Using momentum', 'Partial range'],
      breathing: 'Exhale on pull up, inhale on descent'
    }
  },



  'double-unders': {
    id: 'double-unders',
    name: 'Double Unders',
    category: 'crossfit',
    equipment: ['jump-rope'],
    muscleGroups: ['calves', 'shoulders', 'core', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Hold jump rope handles with relaxed grip',
      'Keep elbows close to sides, rotate from wrists',
      'Jump slightly higher than single unders',
      'Spin rope twice under feet in one jump',
      'Land softly on balls of feet'
    ],
    safetyNotes: [
      'Start with single unders to master timing',
      'Land softly to protect joints',
      'Maintain good posture throughout'
    ],
    modifications: {
      beginner: 'Practice single unders first, then attempt doubles',
      advanced: 'Triple unders or criss-cross doubles',
      equipment_alternatives: {
        'jump-rope': 'High knees or jumping jacks'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Rope at heels', 'Elbows in', 'Wrist rotation'],
      execution: ['Jump higher', 'Fast wrist spin', 'Soft landing'],
      common_mistakes: ['Jumping too high', 'Arm movement', 'Inconsistent timing'],
      breathing: 'Rhythmic breathing with jumps'
    }
  },

  // === ADDITIONAL FOUNDATIONAL MOVEMENTS ===
  // Based on CrossFit's Nine Foundational Movements

  'medicine-ball-clean': {
    id: 'medicine-ball-clean',
    name: 'Medicine Ball Clean',
    category: 'crossfit',
    equipment: ['medicine-ball'],
    muscleGroups: ['hamstrings', 'glutes', 'quadriceps', 'traps', 'core'],
    difficulty: 3,
    instructions: [
      'Start with feet shoulder-width apart, with the medicine ball between your feet',
      'Squat down to grab the ball with a flat back',
      'Violently extend your hips and legs, jumping upward',
      'At the top of the extension, shrug your shoulders',
      'As the ball becomes weightless, pull your body under the ball',
      'Receive the ball in a full front squat',
      'Stand to full extension to complete the rep'
    ],
    safetyNotes: [
      'This is a clean, not an upward toss - elevate the ball and drop under it',
      'Avoid curling the ball with your arms',
      'Ensure you receive the ball in a stable, full squat'
    ],
    modifications: {
      beginner: 'Use a lighter ball. Practice progression: Med Ball Deadlift, Med Ball Deadlift + Shrug, Full Med Ball Clean',
      advanced: 'Use a heavier ball. Perform for high reps as part of Wall Ball shots',
      equipment_alternatives: {
        'medicine-ball': 'Dumbbell or kettlebell clean variations'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Start in low squat with ball between feet', 'Flat back'],
      execution: ['Jump and shrug to elevate ball', 'Quickly drop under into full squat to catch', 'Stand up'],
      common_mistakes: ['Cutting the pull short (not getting full hip extension)', 'Tossing ball up and catching high', 'Curling ball with arms'],
      breathing: 'Exhale during explosive upward phase'
    }
  },

  'sumo-deadlift-high-pull': {
    id: 'sumo-deadlift-high-pull',
    name: 'Sumo Deadlift High Pull',
    category: 'crossfit',
    equipment: ['barbell'],
    muscleGroups: ['hamstrings', 'glutes', 'traps', 'shoulders', 'core'],
    difficulty: 4,
    instructions: [
      'Take a wide sumo stance with feet outside shoulders, toes pointed out',
      'Take a narrow grip on the bar, inside your legs',
      'Perform the first part like a sumo deadlift: extend hips and legs rapidly',
      'Once the hips are fully open, shrug your shoulders',
      'Immediately follow the shrug by pulling with arms, keeping elbows high and outside',
      'Pull the bar up to just below your chin',
      'Return the bar to the floor in reverse sequence'
    ],
    safetyNotes: [
      'Movement must be violent explosion from hips - do not pull with arms until hips are fully extended',
      'Keep elbows higher than hands at all times',
      'This is a speed and power movement - too much weight ruins mechanics'
    ],
    modifications: {
      beginner: 'Use a kettlebell for easier control. Break down: 1. Sumo Deadlift, 2. Sumo Deadlift + Shrug, 3. Full SDHP',
      advanced: 'Increase weight while maintaining explosive technique. Cycle reps quickly for metabolic conditioning',
      equipment_alternatives: {
        'barbell': 'Kettlebell (preferred for beginners)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Wide stance, narrow grip', 'Back flat, chest up'],
      execution: ['Explode with hips, then shrug, then pull with arms', 'Keep bar close and elbows high'],
      common_mistakes: ['Pulling with arms too early', 'Not reaching full hip extension', 'Elbows dropping below hands (curling the bar)'],
      breathing: 'Exhale forcefully during explosive pull'
    }
  }
};

export default CROSSFIT_EXERCISES;
