import { Exercise } from '../types';

// Hyrox Exercise Database - Functional Fitness Racing
// Based on standardized format: 8 x 1km runs + 8 functional workout stations
// Focus on "compromised running" - running under muscular fatigue

export const HYROX_EXERCISES: Record<string, Exercise> = {
  
  // === THE 8 HYROX STATIONS ===
  // Standardized format across all global events
  
  'skierg-1000m': {
    id: 'skierg-1000m',
    name: '1000m SkiErg',
    category: 'hyrox',
    equipment: ['skierg'],
    muscleGroups: ['full-body', 'lats', 'core', 'legs'],
    difficulty: 3,
    instructions: [
      'Set SkiErg to 1000m distance',
      'Start with arms overhead, core engaged',
      'Pull down explosively using lats and core',
      'Drive with legs and hips, not just arms',
      'Maintain rhythmic pace that is sustainable',
      'Focus on technique over pure speed'
    ],
    safetyNotes: [
      'Use legs and hips to generate power, not just arms',
      'Maintain neutral spine throughout movement',
      'Pace to avoid early heart rate spike'
    ],
    modifications: {
      beginner: 'Reduce distance to 500-750m, focus on technique',
      advanced: 'Target sub-4:30 pace for competitive times',
      equipment_alternatives: {
        'skierg': 'Rowing machine or assault bike'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 300,
      progressionRate: -5,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Set distance', 'Engage core', 'Arms overhead start'],
      execution: ['Rhythmic pace', 'Full body power', 'Sustainable effort'],
      common_mistakes: ['All arms, no legs', 'Starting too fast', 'Poor posture'],
      breathing: 'Rhythmic breathing pattern, exhale on pull'
    }
  },

  'sled-push-50m': {
    id: 'sled-push-50m',
    name: '50m Sled Push',
    category: 'hyrox',
    equipment: ['sled', 'weight-plates'],
    muscleGroups: ['quadriceps', 'glutes', 'calves', 'core'],
    difficulty: 4,
    instructions: [
      'Load sled with appropriate weight (Men: 152kg, Women: 103kg)',
      'Position hands on high handles, body at 45-degree angle',
      'Drive with legs, keeping low body position',
      'Take short, powerful steps',
      'Maintain forward lean throughout push',
      'Focus on leg drive, not upper body pushing'
    ],
    safetyNotes: [
      'Keep core tight to protect lower back',
      'Maintain low body angle for maximum power',
      'Drive through legs, not just push with arms'
    ],
    modifications: {
      beginner: 'Reduce weight significantly, focus on technique',
      advanced: 'Practice with competition weight, work on speed',
      equipment_alternatives: {
        'sled': 'Prowler sled or weighted tire push'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 120,
      progressionRate: -2,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Low body angle', 'Hands on high handles', 'Core engaged'],
      execution: ['Drive with legs', 'Short powerful steps', 'Maintain angle'],
      common_mistakes: ['Standing too upright', 'Pushing with arms', 'Steps too long'],
      breathing: 'Powerful exhales with each drive'
    }
  },

  'sled-pull-50m': {
    id: 'sled-pull-50m',
    name: '50m Sled Pull',
    category: 'hyrox',
    equipment: ['sled', 'weight-plates', 'rope'],
    muscleGroups: ['lats', 'rhomboids', 'biceps', 'core', 'legs'],
    difficulty: 4,
    instructions: [
      'Same sled weight as push (Men: 152kg, Women: 103kg)',
      'Use body weight to heave the sled, not just arm strength',
      'Hand-over-hand rope technique',
      'Lean back and use legs to generate power',
      'Keep rope close to body',
      'Maintain steady rhythm'
    ],
    safetyNotes: [
      'Use body weight and legs, not just arms',
      'Keep rope close to avoid shoulder strain',
      'Maintain good posture throughout pull'
    ],
    modifications: {
      beginner: 'Reduce weight, focus on technique',
      advanced: 'Work on speed and efficiency with full weight',
      equipment_alternatives: {
        'sled': 'Heavy rope pulls or resistance band pulls'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 90,
      progressionRate: -2,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Lean back position', 'Rope close to body', 'Legs engaged'],
      execution: ['Hand-over-hand', 'Use body weight', 'Steady rhythm'],
      common_mistakes: ['All arms pulling', 'Rope too far from body', 'Inconsistent rhythm'],
      breathing: 'Exhale on each pull'
    }
  },

  'burpee-broad-jumps-80m': {
    id: 'burpee-broad-jumps-80m',
    name: '80m Burpee Broad Jumps',
    category: 'hyrox',
    equipment: [],
    muscleGroups: ['full-body', 'explosive-power'],
    difficulty: 5,
    instructions: [
      'Perform burpee with chest and thighs touching ground',
      'Jump forward for maximum distance, not height',
      'Land softly and immediately drop into next burpee',
      'Maintain fluid rhythm to conserve energy',
      'Step up from burpee rather than jumping to save energy',
      'Focus on forward distance with each jump'
    ],
    safetyNotes: [
      'Land softly to protect joints',
      'Jump forward, not upward',
      'Pace yourself - this is a notorious energy drain'
    ],
    modifications: {
      beginner: 'Reduce distance, step back instead of jumping back',
      advanced: 'Maximize jump distance, maintain speed',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'time',
      defaultValue: 480,
      progressionRate: -10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Start standing', 'Plan rhythm', 'Focus on distance'],
      execution: ['Chest to ground', 'Jump forward', 'Fluid movement'],
      common_mistakes: ['Jumping up instead of forward', 'Hard landings', 'Breaking rhythm'],
      breathing: 'Rhythmic breathing, one breath per rep'
    }
  },

  'rowing-1000m': {
    id: 'rowing-1000m',
    name: '1000m Rowing',
    category: 'hyrox',
    equipment: ['rowing-machine'],
    muscleGroups: ['full-body', 'lats', 'legs', 'core'],
    difficulty: 3,
    instructions: [
      'Set rower to 1000m distance',
      'Drive with legs first, then lean back, then pull arms',
      'Reverse the sequence on recovery: arms, lean forward, legs',
      'Maintain strong core throughout stroke',
      'Keep consistent stroke rate (24-28 SPM)',
      'Focus on power per stroke over stroke rate'
    ],
    safetyNotes: [
      'Legs drive first, arms pull last',
      'Keep back straight throughout stroke',
      'Control the recovery phase'
    ],
    modifications: {
      beginner: 'Reduce distance, focus on technique',
      advanced: 'Target sub-3:30 split times',
      equipment_alternatives: {
        'rowing-machine': 'SkiErg or assault bike'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 240,
      progressionRate: -5,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Proper seat position', 'Feet secured', 'Handle grip'],
      execution: ['Legs, lean, arms', 'Strong core', 'Controlled recovery'],
      common_mistakes: ['Arms before legs', 'Rushing recovery', 'Poor posture'],
      breathing: 'Exhale on drive, inhale on recovery'
    }
  },

  'farmers-carry-200m': {
    id: 'farmers-carry-200m',
    name: '200m Farmers Carry',
    category: 'hyrox',
    equipment: ['kettlebells', 'dumbbells'],
    muscleGroups: ['grip', 'traps', 'core', 'legs'],
    difficulty: 3,
    instructions: [
      'Carry two weights (Men: 2x24kg KB, Women: 2x16kg KB)',
      'Maintain upright posture throughout carry',
      'Keep shoulders back and down',
      'Take controlled steps, avoid rushing',
      'Grip weights securely but avoid over-gripping',
      'Breathe rhythmically throughout carry'
    ],
    safetyNotes: [
      'Maintain good posture to protect spine',
      'Control grip to prevent early fatigue',
      'Take steady steps to avoid tripping'
    ],
    modifications: {
      beginner: 'Reduce weight or distance',
      advanced: 'Increase pace while maintaining form',
      equipment_alternatives: {
        'kettlebells': 'Dumbbells or farmer walk handles'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 90,
      progressionRate: -2,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Upright posture', 'Secure grip', 'Shoulders back'],
      execution: ['Controlled steps', 'Maintain posture', 'Steady breathing'],
      common_mistakes: ['Leaning forward', 'Over-gripping', 'Rushing steps'],
      breathing: 'Steady, controlled breathing'
    }
  },

  'sandbag-lunges-100m': {
    id: 'sandbag-lunges-100m',
    name: '100m Sandbag Lunges',
    category: 'hyrox',
    equipment: ['sandbag'],
    muscleGroups: ['quadriceps', 'glutes', 'core', 'shoulders'],
    difficulty: 5,
    instructions: [
      'Carry sandbag (Men: 20kg, Women: 10kg) in front rack position',
      'Perform walking lunges for 100m distance',
      'Step forward into lunge, back knee touches ground',
      'Drive through front heel to stand and step forward',
      'Maintain upright torso throughout movement',
      'Keep sandbag secure against chest'
    ],
    safetyNotes: [
      'Control descent to protect knees',
      'Keep torso upright to protect lower back',
      'Ensure back knee touches ground for full range'
    ],
    modifications: {
      beginner: 'Reduce weight or distance, bodyweight lunges',
      advanced: 'Increase pace while maintaining form',
      equipment_alternatives: {
        'sandbag': 'Dumbbell or weight plate held at chest'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 300,
      progressionRate: -5,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Sandbag at chest', 'Upright posture', 'Core engaged'],
      execution: ['Full range lunges', 'Drive through heel', 'Maintain posture'],
      common_mistakes: ['Partial range', 'Forward lean', 'Dropping sandbag'],
      breathing: 'Exhale on drive up, inhale on descent'
    }
  },

  'wall-balls-100': {
    id: 'wall-balls-100',
    name: '100 Wall Balls',
    category: 'hyrox',
    equipment: ['medicine-ball'],
    muscleGroups: ['quadriceps', 'glutes', 'shoulders', 'core'],
    difficulty: 4,
    instructions: [
      'Use medicine ball (Men: 9kg/20lb, Women: 6kg/14lb)',
      'Target height: Men 10ft, Women 9ft',
      'Squat down with ball at chest level',
      'Drive up explosively from squat',
      'Use hip drive to propel ball to target',
      'Catch ball and immediately descend into next rep'
    ],
    safetyNotes: [
      'Use hip drive, not just shoulders',
      'Catch ball with soft hands',
      'Break into manageable sets to avoid burnout'
    ],
    modifications: {
      beginner: 'Lighter ball, lower target, reduce reps',
      advanced: 'Maintain larger unbroken sets',
      equipment_alternatives: {
        'medicine-ball': 'Thrusters with barbell or dumbbells'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 360,
      progressionRate: -10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Ball at chest', 'Full squat depth', 'Target marked'],
      execution: ['Hip drive', 'Hit target', 'Immediate catch'],
      common_mistakes: ['Not hitting target', 'Poor squat depth', 'All shoulders'],
      breathing: 'Exhale on throw, inhale on catch'
    }
  },

  // === COMPROMISED RUNNING PROTOCOLS ===
  // The defining characteristic of Hyrox training
  
  'compromised-running-basic': {
    id: 'compromised-running-basic',
    name: 'Compromised Running - Basic',
    category: 'hyrox',
    equipment: ['sled'],
    muscleGroups: ['cardiovascular', 'legs', 'recovery'],
    difficulty: 3,
    instructions: [
      'Perform 40m sled push at moderate intensity',
      'Immediately transition to 500m run',
      'Focus on finding rhythm while fatigued',
      'Maintain controlled pace, not maximum speed',
      'Practice smooth transition from station to run',
      'Repeat for 3-4 rounds with rest between'
    ],
    safetyNotes: [
      'Start conservatively to learn the feeling',
      'Focus on form over speed when fatigued',
      'Allow adequate recovery between rounds'
    ],
    modifications: {
      beginner: 'Reduce sled weight and run distance',
      advanced: 'Increase intensity and reduce rest',
      equipment_alternatives: {
        'sled': 'Heavy carries or burpees before run'
      }
    },
    metrics: {
      type: 'rounds',
      defaultValue: 3,
      progressionRate: 1,
      unit: 'rounds'
    },
    coaching: {
      setup: ['Moderate sled effort', 'Immediate transition', 'Controlled pace'],
      execution: ['Find rhythm quickly', 'Maintain form', 'Steady effort'],
      common_mistakes: ['Starting run too fast', 'Poor transition', 'Inconsistent pacing'],
      breathing: 'Focus on normalizing breathing during run'
    }
  },

  'hyrox-simulation-half': {
    id: 'hyrox-simulation-half',
    name: 'Hyrox Simulation - Half Race',
    category: 'hyrox',
    equipment: ['multiple-stations'],
    muscleGroups: ['full-body', 'endurance'],
    difficulty: 5,
    instructions: [
      '4 rounds of: 1km Run → Station → repeat',
      'Stations: SkiErg 500m, Sled Push 25m, Sled Pull 25m, Burpee Broad Jumps 40m',
      'Maintain race pace effort throughout',
      'Practice nutrition and hydration strategy',
      'Focus on efficient transitions',
      'Simulate race day conditions'
    ],
    safetyNotes: [
      'Build up to this workout gradually',
      'Have safety spotter for heavy sled work',
      'Stay hydrated throughout session'
    ],
    modifications: {
      beginner: 'Reduce distances and weights significantly',
      advanced: 'Full race simulation with competition weights',
      equipment_alternatives: {
        'multiple-stations': 'Substitute with available equipment'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 2400,
      progressionRate: -30,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Race pace effort', 'Efficient transitions', 'Pacing strategy'],
      execution: ['Consistent effort', 'Station efficiency', 'Mental toughness'],
      common_mistakes: ['Starting too fast', 'Poor pacing', 'Inefficient stations'],
      breathing: 'Race breathing patterns and recovery'
    }
  }
};

export default HYROX_EXERCISES; 