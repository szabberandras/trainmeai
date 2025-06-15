import { Exercise } from '../types';

export const RUNNING_EXERCISES: Record<string, Exercise> = {
  'running-form-drills': {
    id: 'running-form-drills',
    name: 'Running Form Drills',
    category: 'running',
    equipment: [],
    muscleGroups: ['full_body', 'core', 'legs'],
    difficulty: 2,
    instructions: [
      'Include variety of movement patterns.',
      'Practice high knees for hip flexor activation.',
      'Include butt kicks for hamstring engagement.',
      'Add skipping patterns for coordination.',
      'Practice leg swings for dynamic flexibility.',
      'Focus on posture and arm swing.',
      'Perform each drill for 20-30 meters.',
      'Complete 2-3 rounds of the full sequence.'
    ],
    safetyNotes: [
      'Start with gentle intensity.',
      'Focus on quality over speed.',
      'Stop if experiencing unusual fatigue.'
    ],
    modifications: {
      beginner: 'Slower pace, shorter distances. Focus on one drill at a time.',
      advanced: 'Increase intensity and distance. Add sport-specific variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 15,
      unit: 'minutes total drill time'
    },
    coaching: {
      setup: ['Clear running area', 'Light warm-up completed'],
      execution: ['Focus on specific movement patterns', 'Maintain good posture', 'Coordinate arms and legs'],
      common_mistakes: ['Rushing through movements', 'Poor posture', 'Neglecting arm movement'],
      breathing: 'Light, natural breathing throughout drill sequence.'
    }
  },

  'high-knees-drill': {
    id: 'high-knees-drill',
    name: 'High Knees Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['hip_flexors', 'core', 'calves'],
    difficulty: 2,
    instructions: [
      'Start in standing position with good posture.',
      'Lift knees toward chest alternately.',
      'Aim for 90-degree angle at hip and knee.',
      'Stay light on balls of feet.',
      'Pump arms in opposition to legs.',
      'Maintain upright torso throughout.',
      'Focus on quick, light contacts with ground.',
      'Perform in place or with forward movement.'
    ],
    safetyNotes: [
      'Start with moderate intensity.',
      'Don\'t overextend if hip flexors are tight.',
      'Land softly on balls of feet.'
    ],
    modifications: {
      beginner: 'Lower knee lift, slower pace. Perform in place only.',
      advanced: 'Higher knee lift, faster pace. Add forward movement.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Good posture', 'Start with slow rhythm'],
      execution: ['Lift knees toward chest', 'Light foot contacts', 'Coordinated arm swing'],
      common_mistakes: ['Leaning backward', 'Heavy foot strikes', 'Arms not coordinated'],
      breathing: 'Quick, light breathing matching the drill rhythm.'
    }
  },

  'butt-kicks-drill': {
    id: 'butt-kicks-drill',
    name: 'Butt Kicks Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['hamstrings', 'glutes', 'calves'],
    difficulty: 2,
    instructions: [
      'Start jogging in place or with slight forward movement.',
      'Kick heels up toward glutes alternately.',
      'Focus on pulling heel to glute, not just kicking back.',
      'Maintain upright posture and engaged core.',
      'Keep knees pointing down toward ground.',
      'Use quick, light rhythm.',
      'Coordinate arm swing with leg movement.',
      'Land softly on balls of feet.'
    ],
    safetyNotes: [
      'Don\'t force heel to touch glute if flexibility limited.',
      'Start with moderate intensity.',
      'Maintain balance throughout movement.'
    ],
    modifications: {
      beginner: 'Lower heel lift, slower pace. Focus on form over height.',
      advanced: 'Higher heel lift, faster pace. Add forward movement.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Light jogging starting position', 'Upright posture'],
      execution: ['Pull heels toward glutes', 'Quick, light rhythm', 'Coordinated arm movement'],
      common_mistakes: ['Kicking back instead of pulling up', 'Leaning forward', 'Knees coming up too high'],
      breathing: 'Light, rhythmic breathing matching drill pace.'
    }
  },

  'A-skip-drill': {
    id: 'A-skip-drill',
    name: 'A-Skip Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['hip_flexors', 'calves', 'core', 'coordination'],
    difficulty: 3,
    instructions: [
      'Start with gentle skipping motion.',
      'Lift knee to 90 degrees while hopping on opposite foot.',
      'Land on ball of foot with slight pawing motion.',
      'Maintain upright posture with slight forward lean.',
      'Coordinate opposite arm and leg movement.',
      'Focus on rhythm and coordination over speed.',
      'Take small forward movement with each skip.',
      'Keep ground contact time minimal.'
    ],
    safetyNotes: [
      'Start slowly to develop coordination.',
      'Focus on form before increasing pace.',
      'Land softly to protect joints.'
    ],
    modifications: {
      beginner: 'Practice marching in place first. Slower rhythm, lower knee lift.',
      advanced: 'Increase pace and distance. Add emphasis on forward movement.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 30,
      unit: 'meters'
    },
    coaching: {
      setup: ['Start with slow skipping rhythm', 'Focus on coordination'],
      execution: ['High knee lift with skip', 'Light ground contacts', 'Opposite arm coordination'],
      common_mistakes: ['Too much vertical movement', 'Poor arm coordination', 'Heavy landings'],
      breathing: 'Rhythmic breathing coordinated with skipping pattern.'
    }
  },

  'B-skip-drill': {
    id: 'B-skip-drill',
    name: 'B-Skip Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['hamstrings', 'hip_flexors', 'core', 'coordination'],
    difficulty: 4,
    instructions: [
      'Start with A-skip position (knee at 90 degrees).',
      'Extend leg forward from knee while hopping on support leg.',
      'Pull extended leg back down with pawing motion.',
      'Land on ball of foot directly under body.',
      'Maintain upright posture throughout.',
      'Coordinate opposite arm and leg movement.',
      'Focus on hamstring engagement during pull-down.',
      'Take minimal forward movement with each rep.'
    ],
    safetyNotes: [
      'Master A-skip before progressing to B-skip.',
      'Start with slow, controlled movements.',
      'Don\'t overextend leg forward.'
    ],
    modifications: {
      beginner: 'Practice leg extension without skipping first. Very slow pace.',
      advanced: 'Increase pace while maintaining form. Add more forward movement.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'distance',
      defaultValue: 30,
      unit: 'meters'
    },
    coaching: {
      setup: ['Master A-skip first', 'Start with slow, controlled movement'],
      execution: ['Extend leg then pull down', 'Pawing motion on ground contact', 'Minimal forward movement'],
      common_mistakes: ['Overextending leg forward', 'Not engaging hamstrings on pull-down', 'Too much forward movement'],
      breathing: 'Controlled breathing, don\'t hold breath during complex coordination.'
    }
  },

  'carioca-drill': {
    id: 'carioca-drill',
    name: 'Carioca Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['hips', 'core', 'legs', 'coordination'],
    difficulty: 3,
    instructions: [
      'Start standing sideways to direction of travel.',
      'Cross trailing leg in front of lead leg.',
      'Step out with lead leg to side.',
      'Cross trailing leg behind lead leg.',
      'Continue pattern: front cross, side step, back cross.',
      'Maintain upright posture and engaged core.',
      'Keep arms relaxed and moving naturally.',
      'Practice equal distance in both directions.'
    ],
    safetyNotes: [
      'Start slowly to develop coordination.',
      'Be aware of foot placement to avoid tripping.',
      'Practice on flat, clear surface.'
    ],
    modifications: {
      beginner: 'Very slow pace, focus on stepping pattern. Use arm guidance.',
      advanced: 'Increase pace, add rhythm variations, include in sport-specific patterns.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 20,
      unit: 'meters each direction'
    },
    coaching: {
      setup: ['Sideways starting position', 'Clear pathway'],
      execution: ['Cross front, step side, cross back', 'Maintain upright posture', 'Smooth rhythm'],
      common_mistakes: ['Crossing feet too close together', 'Looking down at feet', 'Losing rhythm'],
      breathing: 'Natural breathing, coordinate with movement rhythm.'
    }
  },

  'straight-leg-bounds': {
    id: 'straight-leg-bounds',
    name: 'Straight Leg Bounds',
    category: 'running',
    equipment: [],
    muscleGroups: ['hamstrings', 'glutes', 'calves', 'core'],
    difficulty: 3,
    instructions: [
      'Start with light jogging forward momentum.',
      'Extend one leg straight out in front with flexed foot.',
      'Land on heel and immediately push off with same leg.',
      'Bound forward while switching to opposite leg.',
      'Keep legs relatively straight throughout movement.',
      'Maintain upright posture with slight forward lean.',
      'Focus on covering distance with each bound.',
      'Land with pawing motion, not reaching.'
    ],
    safetyNotes: [
      'Adequate warm-up essential for hamstring safety.',
      'Start with moderate intensity.',
      'Focus on form over distance initially.'
    ],
    modifications: {
      beginner: 'Shorter bounds, less leg extension. Focus on rhythm.',
      advanced: 'Longer bounds, emphasis on distance. Add speed component.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 30,
      unit: 'meters'
    },
    coaching: {
      setup: ['Light forward momentum', 'Adequate hamstring warm-up'],
      execution: ['Straight leg extension', 'Pawing ground contact', 'Bound forward with opposite leg'],
      common_mistakes: ['Reaching too far forward', 'Bending legs during extension', 'Poor ground contact'],
      breathing: 'Rhythmic breathing matching bounding pattern.'
    }
  },

  'heel-walk-drill': {
    id: 'heel-walk-drill',
    name: 'Heel Walk Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['shins', 'ankles', 'calves'],
    difficulty: 1,
    instructions: [
      'Start standing with good posture.',
      'Lift toes up as high as possible.',
      'Walk forward landing only on heels.',
      'Keep toes pulled up toward shins throughout.',
      'Maintain normal arm swing.',
      'Take normal length steps.',
      'Focus on controlled heel strikes.',
      'Keep core engaged for balance.'
    ],
    safetyNotes: [
      'Start with short distances to avoid shin fatigue.',
      'Walk on flat, even surface.',
      'Stop if experiencing excessive shin discomfort.'
    ],
    modifications: {
      beginner: 'Shorter distances, slower pace. Focus on toe position.',
      advanced: 'Longer distances, add slight incline or speed.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'distance',
      defaultValue: 20,
      unit: 'meters'
    },
    coaching: {
      setup: ['Good upright posture', 'Flat walking surface'],
      execution: ['Toes pulled up high', 'Land only on heels', 'Normal step length'],
      common_mistakes: ['Letting toes drop', 'Taking too short steps', 'Leaning backward'],
      breathing: 'Natural breathing, don\'t hold breath.'
    }
  },

  'toe-walk-drill': {
    id: 'toe-walk-drill',
    name: 'Toe Walk Drill',
    category: 'running',
    equipment: [],
    muscleGroups: ['calves', 'ankles', 'core'],
    difficulty: 2,
    instructions: [
      'Start standing on balls of feet (toes).',
      'Walk forward staying up on toes throughout.',
      'Take small, controlled steps.',
      'Maintain tall, upright posture.',
      'Keep core engaged for balance.',
      'Don\'t let heels touch ground.',
      'Use arms naturally for balance.',
      'Focus on control rather than speed.'
    ],
    safetyNotes: [
      'Start with short distances to avoid calf cramping.',
      'Don\'t force heel height if causing pain.',
      'Practice near support if balance is challenging.'
    ],
    modifications: {
      beginner: 'Shorter distances, allow brief heel touches if needed.',
      advanced: 'Longer distances, higher heel lift, add direction changes.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 20,
      unit: 'meters'
    },
    coaching: {
      setup: ['Start on balls of feet', 'Tall posture'],
      execution: ['Stay high on toes', 'Small, controlled steps', 'No heel contact'],
      common_mistakes: ['Letting heels drop', 'Leaning forward', 'Taking steps too large'],
      breathing: 'Light, natural breathing throughout.'
    }
  },

  'run-base-building': {
    id: 'run-base-building',
    name: 'Run Base Building',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'cardiovascular', 'endurance'],
    difficulty: 2,
    instructions: [
      'Run at easy, conversational pace for aerobic development.',
      'Focus on time rather than pace or distance.',
      'Build weekly mileage gradually (10% rule).',
      'Include variety in routes and terrain.',
      'Emphasize consistency over intensity.',
      'Run 6-7 days per week with easy effort.',
      'Include one longer run per week.',
      'Focus on building aerobic engine and running economy.'
    ],
    safetyNotes: [
      'Build volume very gradually to prevent injury.',
      'Listen to body and take rest days when needed.',
      'Don\'t rush the base building phase.'
    ],
    modifications: {
      beginner: 'Start with 3-4 runs per week. Build slowly.',
      advanced: 'Higher weekly mileage. Include varied terrain.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'minutes per run'
    },
    coaching: {
      setup: ['Plan gradual progression', 'Focus on consistency'],
      execution: ['Easy conversational effort', 'Consistent frequency', 'Gradual progression'],
      common_mistakes: ['Building too quickly', 'Running too hard', 'Skipping rest days'],
      breathing: 'Easy, conversational breathing throughout.'
    }
  },

  'run-tempo-workout': {
    id: 'run-tempo-workout',
    name: 'Run Tempo Workout',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'cardiovascular', 'lactate-system'],
    difficulty: 3,
    instructions: [
      'Warm up with 15-20 minutes easy running.',
      'Run tempo segment at comfortably hard pace.',
      'Target about 85-90% effort or 15K-half marathon pace.',
      'Should feel challenging but sustainable.',
      'Common tempo runs: 20-40 minutes continuous.',
      'Can be broken into intervals with brief recovery.',
      'Focus on rhythm and relaxation at intensity.',
      'Cool down with easy running.'
    ],
    safetyNotes: [
      'Adequate warm-up essential before tempo effort.',
      'Monitor effort level - should not be anaerobic.',
      'Build tempo duration gradually.'
    ],
    modifications: {
      beginner: 'Start with 15-20 minutes tempo. Can break into intervals.',
      advanced: '30-60+ minutes continuous tempo. Include variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 25,
      unit: 'minutes at tempo pace'
    },
    coaching: {
      setup: ['Thorough warm-up', 'Know tempo pace'],
      execution: ['Comfortably hard effort', 'Consistent pace', 'Relaxed form'],
      common_mistakes: ['Starting too fast', 'Inadequate warm-up', 'Going anaerobic'],
      breathing: 'Controlled but elevated breathing throughout.'
    }
  },

  'run-interval-training': {
    id: 'run-interval-training',
    name: 'Run Interval Training',
    category: 'running',
    equipment: ['running-shoes', 'track'],
    muscleGroups: ['legs', 'cardiovascular', 'speed'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly including dynamic drills and strides.',
      'Run intervals at 3K-5K race pace effort.',
      'Common intervals: 400m, 800m, 1200m, 1600m.',
      'Take recovery jog between intervals (1:1 to 1:2 ratio).',
      'Focus on consistent splits across all intervals.',
      'Maintain good running form at speed.',
      'Build interval training volume gradually.',
      'Cool down with easy jogging.'
    ],
    safetyNotes: [
      'Requires thorough warm-up including strides.',
      'Monitor pace to avoid going out too fast.',
      'Allow adequate recovery between hard sessions.'
    ],
    modifications: {
      beginner: 'Shorter intervals (200-400m). Longer recovery periods.',
      advanced: 'Longer intervals or complex sets. Shorter recovery.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'sets',
      defaultValue: 6,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Excellent warm-up', 'Know target paces'],
      execution: ['Consistent pacing', 'Good form', 'Adequate recovery'],
      common_mistakes: ['Going out too fast', 'Poor pacing strategy', 'Inadequate warm-up'],
      breathing: 'Hard breathing during intervals. Recover during rest.'
    }
  },

  'run-hill-training': {
    id: 'run-hill-training',
    name: 'Run Hill Training',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'glutes', 'power', 'strength'],
    difficulty: 3,
    instructions: [
      'Find hill with 4-8% grade, appropriate length for workout.',
      'Warm up thoroughly with easy running on flat ground.',
      'Run uphill at 5K to 10K effort, focus on form.',
      'Pump arms, lean slightly forward, maintain cadence.',
      'Recover with easy jog or walk down the hill.',
      'Include various hill lengths and intensities.',
      'Practice both short power hills and longer climbs.',
      'Cool down with easy running on flat ground.'
    ],
    safetyNotes: [
      'Start with fewer repetitions and build gradually.',
      'Focus on effort level rather than pace.',
      'Be cautious on descent to avoid injury.'
    ],
    modifications: {
      beginner: 'Moderate grades, shorter hills (30-60 seconds).',
      advanced: 'Steeper grades, longer hills (2-5+ minutes).'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'hill repeats'
    },
    coaching: {
      setup: ['Appropriate hill selection', 'Thorough warm-up'],
      execution: ['Maintain form uphill', 'Controlled effort', 'Active recovery'],
      common_mistakes: ['Going too hard early', 'Poor uphill form', 'Inadequate recovery'],
      breathing: 'Hard but controlled breathing uphill. Recover on descent.'
    }
  },

  'run-fartlek-training': {
    id: 'run-fartlek-training',
    name: 'Fartlek Training',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['cardiovascular', 'legs', 'speed-endurance'],
    difficulty: 3,
    instructions: [
      'Begin with 10-15 minute warm-up at easy pace.',
      'Run at varying intensities based on feel or landmarks.',
      'Mix fast segments (30 seconds to 5 minutes) with recovery.',
      'Use natural terrain features as guides for pace changes.',
      'No strict structure - run by feel and intuition.',
      'Include surges, steady efforts, and recovery periods.',
      'Cool down with easy running for 10-15 minutes.',
      'Focus on speed and endurance combination.'
    ],
    safetyNotes: [
      'Listen to your body for intensity changes.',
      'Ensure adequate recovery between hard efforts.',
      'Be aware of terrain changes and safety.'
    ],
    modifications: {
      beginner: 'Shorter fast segments, more recovery time.',
      advanced: 'Longer fast segments, less recovery, varied terrain.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 35,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Varied terrain', 'Flexible mindset'],
      execution: ['Intuitive pacing', 'Natural speed changes', 'Terrain adaptation'],
      common_mistakes: ['Too structured approach', 'Inadequate recovery', 'Ignoring terrain'],
      breathing: 'Adaptive breathing matching effort changes.'
    }
  },

  'run-long-slow-distance': {
    id: 'run-long-slow-distance',
    name: 'Long Slow Distance',
    category: 'running',
    equipment: ['running-shoes', 'hydration', 'nutrition'],
    muscleGroups: ['cardiovascular', 'endurance', 'mental-resilience'],
    difficulty: 3,
    instructions: [
      'Start at conversational pace - should be able to talk.',
      'Maintain steady, comfortable effort throughout run.',
      'Focus on time on feet rather than speed.',
      'Stay relaxed and efficient in running form.',
      'Hydrate regularly, especially on longer runs.',
      'Consider nutrition for runs over 90 minutes.',
      'Build distance gradually week by week.',
      'Finish feeling like you could continue running.'
    ],
    safetyNotes: [
      'Build distance gradually (follow 10% rule).',
      'Carry identification and emergency contact.',
      'Plan route with water/bathroom access.',
      'Consider weather conditions and dress appropriately.'
    ],
    modifications: {
      beginner: 'Start with 30-45 minutes, walk breaks as needed.',
      advanced: 'Extend to 2+ hours, practice race nutrition.'
    },
    equipment_alternatives: [],
    progressionRate: 0.1,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Comfortable pace', 'Proper hydration plan'],
      execution: ['Steady effort', 'Relaxed form', 'Mental engagement'],
      common_mistakes: ['Starting too fast', 'Inadequate fueling', 'Poor pacing'],
      breathing: 'Comfortable, conversational breathing rate.'
    }
  },

  'run-recovery-run': {
    id: 'run-recovery-run',
    name: 'Recovery Run',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['active-recovery', 'blood-flow', 'movement-quality'],
    difficulty: 1,
    instructions: [
      'Run at very easy, comfortable pace.',
      'Should feel effortless and relaxed throughout.',
      'Focus on form and movement quality over speed.',
      'Keep duration short to moderate.',
      'Use as active recovery between harder training sessions.',
      'Listen to body - skip if feeling overly fatigued.',
      'Maintain conversational pace throughout entire run.',
      'End feeling refreshed, not tired.'
    ],
    safetyNotes: [
      'Truly easy effort - err on side of too slow.',
      'Skip if experiencing pain or excessive fatigue.',
      'Focus on recovery, not fitness gains.'
    ],
    modifications: {
      beginner: '15-20 minutes, walk breaks if needed.',
      advanced: '30-45 minutes, maintain easy effort.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 25,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Very easy effort', 'Recovery mindset'],
      execution: ['Effortless pace', 'Form focus', 'Relaxed breathing'],
      common_mistakes: ['Running too fast', 'Ignoring fatigue signals', 'Too long duration'],
      breathing: 'Easy, natural breathing pattern.'
    }
  },

  'run-strides': {
    id: 'run-strides',
    name: 'Strides',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['speed', 'form', 'neuromuscular'],
    difficulty: 2,
    instructions: [
      'After easy run, find flat 80-100m stretch.',
      'Gradually accelerate to 85-90% effort over first 20m.',
      'Maintain fast pace for middle 60m.',
      'Gradually decelerate over final 20m.',
      'Focus on form: quick turnover, relaxed shoulders.',
      'Walk back to start for full recovery.',
      'Repeat 4-8 times depending on fitness level.',
      'Should feel smooth and controlled, not all-out.'
    ],
    safetyNotes: [
      'Ensure adequate warm-up before strides.',
      'Focus on form over pure speed.',
      'Allow full recovery between repetitions.'
    ],
    modifications: {
      beginner: '4 strides, focus on form over speed.',
      advanced: '6-8 strides, maintain excellent form at higher speeds.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 6,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Proper warm-up', 'Flat surface', 'Relaxed mindset'],
      execution: ['Gradual acceleration', 'Form focus', 'Controlled effort'],
      common_mistakes: ['Too fast too early', 'Tense running', 'Insufficient recovery'],
      breathing: 'Controlled breathing, avoid holding breath.'
    }
  },

  'run-track-intervals': {
    id: 'run-track-intervals',
    name: 'Track Intervals',
    category: 'running',
    equipment: ['running-shoes', 'track'],
    muscleGroups: ['speed', 'vo2-max', 'lactate-threshold'],
    difficulty: 4,
    instructions: [
      'Warm up with 15-20 minutes easy running.',
      'Run specified distance at target pace.',
      'Common intervals: 400m, 800m, 1200m, 1600m.',
      'Take prescribed recovery between intervals.',
      'Maintain consistent pace across all intervals.',
      'Focus on even pacing and good form.',
      'Cool down with easy running for 10-15 minutes.',
      'Track times for progression monitoring.'
    ],
    safetyNotes: [
      'Adequate warm-up essential for speed work.',
      'Start conservatively with pacing.',
      'Allow proper recovery between intervals.',
      'Be aware of other track users.'
    ],
    modifications: {
      beginner: 'Shorter intervals, longer recovery, focus on completion.',
      advanced: 'Longer intervals, shorter recovery, precise pace targets.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper warm-up', 'Pace targets', 'Recovery plan'],
      execution: ['Even pacing', 'Form maintenance', 'Controlled effort'],
      common_mistakes: ['Starting too fast', 'Inadequate warm-up', 'Poor pacing strategy'],
      breathing: 'Rhythmic breathing matching pace intensity.'
    }
  }
};

export default RUNNING_EXERCISES;
