import { Exercise } from '../types';

export const ENDURANCE_EXERCISES: Record<string, Exercise> = {
  'long-run': {
    id: 'long-run',
    name: 'Long Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Cardiovascular'],
    difficulty: 3,
    instructions: [
      'Start with a 5-10 minute easy warm-up jog.',
      'Gradually build to your target long run distance.',
      'Maintain a conversational pace throughout - you should be able to talk.',
      'Focus on consistent effort rather than speed.',
      'Add approximately 10% to your longest run each week.',
      'Include a cutback week every 4th week for recovery.',
      'Finish with a 5-minute cool-down walk.'
    ],
    safetyNotes: [
      'Never increase distance by more than 10% per week.',
      'Listen to your body - stop if experiencing pain.',
      'Stay hydrated, especially on longer runs.',
      'Plan your route and inform someone of your running plan.',
      'Wear appropriate running shoes and clothing.'
    ],
    modifications: {
      beginner: 'Start with run/walk intervals. Build from 30 minutes total time.',
      advanced: 'Progress to 2-3 hour runs. Practice race nutrition strategies.',
      equipment_alternatives: {
        'None': 'Treadmill for weather protection or precise pacing.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'km'
    },
    coaching: {
      setup: [
        'Plan your route in advance.',
        'Check weather conditions.',
        'Bring water for runs over 60 minutes.'
      ],
      execution: [
        'Start conservatively - first half should feel easy.',
        'Maintain steady breathing pattern.',
        'Focus on relaxed form and efficient stride.',
        'Practice negative splits occasionally.'
      ],
      common_mistakes: [
        'Starting too fast.',
        'Increasing distance too quickly.',
        'Skipping rest/cutback weeks.',
        'Neglecting hydration and nutrition.'
      ],
      breathing: 'Rhythmic breathing - try 3:2 pattern (3 steps inhale, 2 steps exhale).'
    }
  },

  'tempo-run': {
    id: 'tempo-run',
    name: 'Tempo Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Cardiovascular'],
    difficulty: 4,
    instructions: [
      'Warm up with 10-15 minutes of easy running.',
      'Run at a "comfortably hard" pace for 20-40 minutes.',
      'Pace should be sustainable but challenging - about 10K race pace.',
      'You should be able to speak only a few words at a time.',
      'Maintain consistent effort throughout the tempo portion.',
      'Cool down with 10 minutes of easy running.'
    ],
    safetyNotes: [
      'Ensure proper warm-up before tempo effort.',
      'Don\'t exceed prescribed duration.',
      'Stop if experiencing chest pain or dizziness.'
    ],
    modifications: {
      beginner: 'Start with 2 x 10 minutes at tempo pace with 5-minute recovery.',
      advanced: 'Progress to 60+ minutes at tempo pace.',
      equipment_alternatives: {
        'None': 'Treadmill for precise pace control.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'minutes'
    },
    coaching: {
      setup: [
        'Know your target tempo pace.',
        'Choose a relatively flat route.',
        'Use a GPS watch or app for pacing.'
      ],
      execution: [
        'Build into tempo pace gradually.',
        'Focus on controlled, rhythmic breathing.',
        'Maintain relaxed shoulders and efficient form.',
        'Think "controlled discomfort".'
      ],
      common_mistakes: [
        'Starting tempo portion too fast.',
        'Letting pace drift during the run.',
        'Inadequate warm-up.',
        'Running tempo pace too frequently.'
      ],
      breathing: 'Controlled, deeper breathing - focus on full exhales.'
    }
  },

  'fartlek-run': {
    id: 'fartlek-run',
    name: 'Fartlek (Speed Play)',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Cardiovascular'],
    difficulty: 3,
    instructions: [
      'Warm up with 10-15 minutes of easy running.',
      'Begin "speed play" - vary your pace based on how you feel.',
      'Sprint to a landmark, then jog to recover.',
      'Mix short bursts (30 seconds) with longer efforts (2-3 minutes).',
      'Recovery should be easy jogging, not walking.',
      'Total workout time: 30-60 minutes including warm-up.',
      'Cool down with 10 minutes easy running.'
    ],
    safetyNotes: [
      'Listen to your body - this should be playful, not punishing.',
      'Ensure adequate recovery between efforts.',
      'Choose safe landmarks and routes.'
    ],
    modifications: {
      beginner: 'Start with 20-30 second pickups with 2-minute easy recoveries.',
      advanced: 'Include longer tempo efforts mixed with short sprints.',
      equipment_alternatives: {
        'None': 'Track or treadmill with manual speed adjustments.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'minutes'
    },
    coaching: {
      setup: [
        'Choose a varied route with landmarks.',
        'No strict pace targets - run by feel.',
        'Mental preparation for varied efforts.'
      ],
      execution: [
        'Make it playful and spontaneous.',
        'Vary the length and intensity of efforts.',
        'Focus on smooth transitions between paces.',
        'Use landmarks as natural interval markers.'
      ],
      common_mistakes: [
        'Making it too structured.',
        'Not recovering adequately between efforts.',
        'Always choosing the same effort lengths.',
        'Running too hard on recovery portions.'
      ],
      breathing: 'Adapt breathing to effort level - deeper during hard efforts.'
    }
  },

  'hill-repeats': {
    id: 'hill-repeats',
    name: 'Hill Repeats',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Glutes', 'Cardiovascular'],
    difficulty: 4,
    instructions: [
      'Find a hill approximately 200-400 meters long with 4-8% grade.',
      'Warm up with 15 minutes easy running.',
      'Run hard uphill maintaining good form.',
      'Focus on driving with your arms and lifting your knees.',
      'Jog or walk down for recovery.',
      'Repeat 4-8 times depending on fitness level.',
      'Cool down with 10 minutes easy running.'
    ],
    safetyNotes: [
      'Choose a hill with safe footing.',
      'Don\'t overstride - maintain quick turnover.',
      'Be cautious on the downhill recovery.',
      'Stop if experiencing unusual fatigue.'
    ],
    modifications: {
      beginner: '4 x 30 seconds uphill with full recovery.',
      advanced: '8-12 repeats or longer hill (up to 2 minutes).',
      equipment_alternatives: {
        'Treadmill': 'Set incline to 5-8% for hill simulation.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 0.1,
      unit: 'repeats'
    },
    coaching: {
      setup: [
        'Scout your hill in advance.',
        'Ensure adequate warm-up.',
        'Plan your effort level for all repeats.'
      ],
      execution: [
        'Drive with your arms.',
        'Lean slightly into the hill.',
        'Maintain quick, short steps.',
        'Focus on effort, not speed.'
      ],
      common_mistakes: [
        'Overstriding on the uphill.',
        'Starting too fast on first repeat.',
        'Not using arms effectively.',
        'Inadequate recovery between repeats.'
      ],
      breathing: 'Strong, rhythmic breathing - don\'t hold your breath.'
    }
  },

  'cycling-steady': {
    id: 'cycling-steady',
    name: 'Cycling - Steady State Ride',
    category: 'endurance',
    equipment: ['bike', 'trainer (optional)'],
    muscleGroups: ['quads', 'hamstrings', 'calves', 'glutes', 'heart'],
    difficulty: 2,
    instructions: [
      'Cycle at moderate intensity (Zone 2)',
      'Maintain steady cadence (80–100 RPM)',
      'Target session of 45–90 minutes',
      'Keep effort sustainable and aerobic'
    ],
    safetyNotes: ['Stay hydrated', 'Use proper bike fit'],
    modifications: {
      beginner: '30–45 min with breaks',
      advanced: 'Include cadence drills or climb simulation'
    },
    metrics: {
      type: 'duration',
      defaultValue: 60,
      progressionRate: 10,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Flat route or smart trainer', 'Warm-up first 10 min'],
      execution: ['Steady HR or power zone', 'Smooth pedal stroke'],
      common_mistakes: ['Going too hard', 'Poor position'],
      breathing: 'Deep, relaxed breathing throughout'
    }
  },

  'swim-intervals': {
    id: 'swim-intervals',
    name: 'Swim Intervals',
    category: 'endurance',
    equipment: ['swimming pool', 'goggles', 'kickboard (optional)'],
    muscleGroups: ['shoulders', 'back', 'core', 'legs'],
    difficulty: 3,
    instructions: [
      'Swim 4×100 meters at moderate pace',
      'Rest 20–30 seconds between sets',
      'Repeat for 3–5 rounds depending on fitness',
      'Use freestyle unless otherwise specified'
    ],
    safetyNotes: ['Ensure rest between sets', 'Do not train to exhaustion'],
    modifications: {
      beginner: '4×50 meters, more rest',
      advanced: 'Add pull buoy or reduced rest'
    },
    metrics: {
      type: 'reps',
      defaultValue: 4,
      progressionRate: 2,
      unit: 'sets'
    },
    coaching: {
      setup: ['Good push-off', 'Use pacing clock if available'],
      execution: ['Even stroke tempo', 'Keep core tight'],
      common_mistakes: ['Going all-out too early', 'Poor turns'],
      breathing: 'Inhale every 3 strokes (or athlete-specific)'
    }
  },

  'easy-run': {
    id: 'easy-run',
    name: 'Easy Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 1,
    instructions: [
      'Run at comfortable, conversational pace.',
      'Should feel effortless and sustainable.',
      'Focus on time rather than pace.',
      'Maintain relaxed form and breathing.',
      'This should be majority of weekly running volume.',
      'Use for recovery between harder sessions.',
      'Can include brief walk breaks if needed.',
      'End feeling like you could continue running.'
    ],
    safetyNotes: [
      'Don\'t turn easy runs into tempo efforts.',
      'Listen to body and adjust pace accordingly.',
      'Perfect opportunity to focus on form.'
    ],
    modifications: {
      beginner: 'Include walk breaks as needed. Focus on time rather than distance.',
      advanced: 'Longer durations. Can include strides at the end.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes'
    },
    coaching: {
      setup: ['No pressure on pace', 'Comfortable route'],
      execution: ['Conversational effort', 'Relaxed form', 'Enjoyable pace'],
      common_mistakes: ['Running too fast', 'Competing with others on easy days', 'Ignoring fatigue signals'],
      breathing: 'Easy, natural breathing. Should be able to sing or speak easily.'
    }
  },

  'recovery-run': {
    id: 'recovery-run',
    name: 'Recovery Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 1,
    instructions: [
      'Run at very easy pace, slower than normal easy runs.',
      'Purpose is active recovery, not fitness building.',
      'Keep duration short, typically 20-40 minutes.',
      'Focus on gentle movement and blood flow.',
      'Should feel refreshed, not tired after completion.',
      'Include walking breaks if needed.',
      'Perfect time to focus on running form.',
      'Schedule after hard training days.'
    ],
    safetyNotes: [
      'Skip if feeling overly fatigued or sore.',
      'No pressure to maintain any specific pace.',
      'Listen to body - walk if needed.'
    ],
    modifications: {
      beginner: 'Walk-run combination acceptable. Very short duration.',
      advanced: 'Still very easy pace. Can be used for technique focus.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Day after hard workout', 'No pace pressure'],
      execution: ['Very gentle effort', 'Focus on movement quality', 'Feel good finish'],
      common_mistakes: ['Running too fast', 'Making it a workout', 'Running when should be resting'],
      breathing: 'Very easy, natural breathing. Should be completely comfortable.'
    }
  },

  'progression-run': {
    id: 'progression-run',
    name: 'Progression Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular', 'core'],
    difficulty: 3,
    instructions: [
      'Start at easy, comfortable pace.',
      'Gradually increase pace throughout run.',
      'Divide run into thirds: easy, moderate, moderately hard.',
      'Each segment should feel progressively more challenging.',
      'Final pace should be tempo to threshold effort.',
      'Focus on smooth transitions between paces.',
      'Maintain good form as pace increases.',
      'Can also be structured as negative splits.'
    ],
    safetyNotes: [
      'Don\'t increase pace too quickly early in run.',
      'Build progression gradually over time.',
      'Monitor effort to avoid going anaerobic too early.'
    ],
    modifications: {
      beginner: 'Gentle progression from easy to moderate. Shorter total duration.',
      advanced: 'Longer duration with more dramatic pace changes. Include threshold pace.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 50,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Plan pace progression', 'Start conservatively'],
      execution: ['Gradual pace increases', 'Smooth transitions', 'Strong finish'],
      common_mistakes: ['Progressing too quickly', 'Starting too fast', 'Not building through gears'],
      breathing: 'Progressive breathing intensity matching pace increases.'
    }
  },

  'threshold-run': {
    id: 'threshold-run',
    name: 'Threshold Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular', 'core'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly with 15-20 minutes easy running.',
      'Run at lactate threshold pace - about 15-30K race effort.',
      'Should feel comfortably hard but sustainable.',
      'Breathing should be elevated but controlled.',
      'Can be done as continuous run or broken intervals.',
      'Maintain consistent effort throughout.',
      'Focus on efficiency and relaxation at intensity.',
      'Cool down with easy running.'
    ],
    safetyNotes: [
      'Requires adequate fitness base before attempting.',
      'Monitor effort closely - shouldn\'t be anaerobic.',
      'Build duration gradually over time.'
    ],
    modifications: {
      beginner: 'Start with 10-15 minutes threshold. Break into intervals if needed.',
      advanced: '30-60+ minutes continuous. Include race pace variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 20,
      unit: 'minutes at threshold'
    },
    coaching: {
      setup: ['Adequate warm-up essential', 'Flat to rolling terrain'],
      execution: ['Comfortably hard effort', 'Sustainable intensity', 'Controlled breathing'],
      common_mistakes: ['Going too hard too early', 'Inadequate warm-up', 'Trying to negative split'],
      breathing: 'Elevated but controlled. Should be able to speak short phrases.'
    }
  },

  'interval-run': {
    id: 'interval-run',
    name: 'Interval Run',
    category: 'endurance',
    equipment: ['timer'],
    muscleGroups: ['legs', 'cardiovascular', 'power'],
    difficulty: 4,
    instructions: [
      'Warm up with 15-20 minutes easy running plus strides.',
      'Run intervals at 3K to 5K race pace effort.',
      'Interval length typically 3-8 minutes.',
      'Take active recovery between intervals (easy jogging).',
      'Recovery should be 50-100% of interval time.',
      'Maintain consistent pace across all intervals.',
      'Focus on smooth, efficient form at speed.',
      'Cool down with easy running.'
    ],
    safetyNotes: [
      'Requires thorough warm-up including dynamic movements.',
      'Monitor pace to avoid going out too fast.',
      'Allow adequate recovery between intervals.'
    ],
    modifications: {
      beginner: 'Shorter intervals (2-3 minutes). Longer recovery periods.',
      advanced: 'Longer intervals or shorter recovery. Include pace variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'sets',
      defaultValue: 5,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Thorough warm-up including strides', 'Track or measured course'],
      execution: ['Fast but controlled effort', 'Consistent pacing', 'Active recovery'],
      common_mistakes: ['Going out too fast on first interval', 'Inadequate recovery', 'Poor pacing strategy'],
      breathing: 'Hard breathing during intervals. Recover breathing during rest periods.'
    }
  },

  'long-slow-distance-run': {
    id: 'long-slow-distance-run',
    name: 'Long Slow Distance Run',
    category: 'endurance',
    equipment: ['hydration'],
    muscleGroups: ['legs', 'cardiovascular', 'endurance'],
    difficulty: 2,
    instructions: [
      'Run at very comfortable, sustainable pace.',
      'Focus on building aerobic capacity and endurance.',
      'Pace should be 60-90 seconds slower than marathon pace.',
      'Emphasize time on feet rather than speed.',
      'Practice fueling and hydration strategies.',
      'Build mental toughness and confidence.',
      'Maintain relaxed form throughout.',
      'Can include brief walk breaks on hills or aid stations.'
    ],
    safetyNotes: [
      'Build distance very gradually (10% rule).',
      'Carry identification and emergency contact.',
      'Plan route with facilities for longer runs.'
    ],
    modifications: {
      beginner: 'Start with 60-90 minutes. Include walk breaks as needed.',
      advanced: '2-4+ hours. Practice race simulation conditions.'
    },
    equipment_alternatives: [],
    progressionRate: 0.08,
    metrics: {
      type: 'time',
      defaultValue: 120,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Conservative pace plan', 'Hydration/fuel strategy'],
      execution: ['Very sustainable effort', 'Consistent rhythm', 'Practice race tactics'],
      common_mistakes: ['Running too fast', 'Inadequate fueling', 'Not building distance gradually'],
      breathing: 'Easy, conversational breathing throughout.'
    }
  },

  'trail-running': {
    id: 'trail-running',
    name: 'Trail Running',
    category: 'endurance',
    equipment: ['trail-running-shoes', 'hydration', 'navigation-aids'],
    muscleGroups: ['full-body', 'core', 'balance', 'legs'],
    difficulty: 3,
    instructions: [
      'Adjust pace for terrain - effort-based rather than pace-based.',
      'Use shorter stride on uphills, power hike steep sections.',
      'Focus on foot placement and stability.',
      'Use arms for balance on technical terrain.',
      'Look ahead to plan footing and line choice.',
      'Practice controlled descents with slight forward lean.',
      'Carry water and emergency supplies for longer runs.',
      'Be prepared for weather and terrain changes.'
    ],
    safetyNotes: [
      'Tell someone your route and expected return time.',
      'Carry emergency supplies for remote areas.',
      'Be aware of wildlife and weather conditions.',
      'Start with familiar trails before exploring new areas.'
    ],
    modifications: {
      beginner: 'Start on well-marked, less technical trails. Shorter distances.',
      advanced: 'More technical terrain, longer distances, navigation challenges.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Check trail conditions', 'Plan safety measures'],
      execution: ['Effort-based pacing', 'Focus on foot placement', 'Adapt to terrain'],
      common_mistakes: ['Trying to maintain road pace', 'Poor descending technique', 'Inadequate preparation'],
      breathing: 'Variable breathing matching terrain demands.'
    }
  },

  'track-running-intervals': {
    id: 'track-running-intervals',
    name: 'Track Running Intervals',
    category: 'endurance',
    equipment: ['timer'],
    muscleGroups: ['legs', 'cardiovascular', 'speed'],
    difficulty: 4,
    instructions: [
      'Warm up with easy jogging and dynamic drills.',
      'Run prescribed distance at target pace.',
      'Common distances: 200m, 400m, 800m, 1200m, 1600m.',
      'Take measured recovery between intervals.',
      'Focus on consistent splits across all intervals.',
      'Use track markings for precise distance measurement.',
      'Practice race tactics and positioning.',
      'Cool down with easy jogging and stretching.'
    ],
    safetyNotes: [
      'Share track courteously with other users.',
      'Adequate warm-up essential for speed work.',
      'Monitor fatigue levels throughout session.'
    ],
    modifications: {
      beginner: 'Shorter intervals (200-400m). Longer recovery periods.',
      advanced: 'Longer intervals or complex sets. Shorter recovery ratios.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'sets',
      defaultValue: 6,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Track availability', 'Clear interval plan'],
      execution: ['Consistent pacing', 'Proper lane usage', 'Controlled effort'],
      common_mistakes: ['Going out too fast', 'Poor pacing strategy', 'Inadequate warm-up'],
      breathing: 'Hard breathing during fast intervals. Full recovery between efforts.'
    }
  }
};

export default ENDURANCE_EXERCISES;
