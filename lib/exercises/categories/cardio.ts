import { Exercise } from '../types';

export const CARDIO_EXERCISES: Record<string, Exercise> = {
  'jumping-jacks': {
    id: 'jumping-jacks',
    name: 'Jumping Jacks',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['full-body', 'cardiovascular'],
    difficulty: 1,
    instructions: [
      'Start standing with feet together, arms at sides',
      'Jump feet apart while raising arms overhead',
      'Jump back to starting position',
      'Maintain steady rhythm'
    ],
    modifications: {
      beginner: 'Step-touch with arm raises (low impact)',
      advanced: 'Star jumps or cross-body jacks',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 25,
      unit: 'reps'
    },
    coaching: {
      setup: ['Light on feet', 'Soft landing'],
      execution: ['Full range of motion', 'Steady rhythm', 'Land softly'],
      common_mistakes: ['Heavy landing', 'Incomplete arm movement'],
      breathing: 'Breathe rhythmically with movement'
    }
  },

  'mountain-climber': {
    id: 'mountain-climber',
    name: 'Mountain Climber',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['core', 'shoulders', 'hip-flexors', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Start in plank position',
      'Bring one knee toward chest',
      'Quickly switch legs, bringing other knee to chest',
      'Continue alternating legs rapidly',
      'Maintain plank position throughout'
    ],
    modifications: {
      beginner: 'Slow mountain climbers or incline mountain climbers',
      advanced: 'Cross-body mountain climbers',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 20,
      unit: 'reps per leg'
    },
    coaching: {
      setup: ['Strong plank position', 'Hands under shoulders'],
      execution: ['Quick leg switches', 'Maintain plank', 'Drive knees to chest'],
      common_mistakes: ['Hips too high', 'Hands moving', 'Slow tempo'],
      breathing: 'Quick, rhythmic breathing'
    }
  },

  'a-skips': {
    id: 'a-skips',
    name: 'A-Skips',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hip-flexors', 'calves', 'core'],
    difficulty: 2,
    instructions: [
      'Start with marching, lifting knees high',
      'Add a skip on the support leg',
      'Drive knee up to hip height',
      'Keep opposite arm driving forward',
      'Land on ball of foot'
    ],
    safetyNotes: [
      'Start slowly to get rhythm',
      'Keep posture upright',
      'Land softly'
    ],
    modifications: {
      beginner: 'High knee marching',
      advanced: 'Power skips or add speed',
      equipment_alternatives: {
        'none': 'High knees'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Tall posture', 'Arms at 90 degrees'],
      execution: ['Drive knee up', 'Quick ground contact'],
      common_mistakes: ['Leaning back', 'Not driving knee high enough'],
      breathing: 'Breathe rhythmically'
    }
  },

  'b-skips': {
    id: 'b-skips',
    name: 'B-Skips',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hamstrings', 'hip-flexors', 'calves'],
    difficulty: 3,
    instructions: [
      'Start like A-skip, drive knee up',
      'Extend leg forward after knee drive',
      'Pull leg down and back in pawing motion',
      'Skip on support leg during movement',
      'Maintain rhythm and posture'
    ],
    safetyNotes: [
      'Master A-skips first',
      'Don\'t overreach with leg',
      'Keep movements controlled'
    ],
    modifications: {
      beginner: 'A-skips or high knee pulls',
      advanced: 'Faster tempo or longer distance',
      equipment_alternatives: {
        'none': 'Butt kicks'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Start with good A-skip form', 'Prepare for dynamic movement'],
      execution: ['Extend then pull', 'Keep skip rhythm'],
      common_mistakes: ['Losing posture', 'Overreaching'],
      breathing: 'Breathe rhythmically'
    }
  },

  'carioca': {
    id: 'carioca',
    name: 'Carioca',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hips', 'core', 'legs'],
    difficulty: 2,
    instructions: [
      'Stand sideways to direction of travel',
      'Cross trailing leg in front of leading leg',
      'Step out with leading leg',
      'Cross trailing leg behind leading leg',
      'Continue alternating front and back crosses'
    ],
    safetyNotes: [
      'Start slowly to get coordination',
      'Keep hips facing forward',
      'Watch for obstacles'
    ],
    modifications: {
      beginner: 'Slow grapevines without arm swing',
      advanced: 'Increase speed or add arm movements',
      equipment_alternatives: {
        'none': 'Lateral shuffles'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Stay on balls of feet', 'Arms out for balance'],
      execution: ['Rotate hips', 'Keep shoulders square'],
      common_mistakes: ['Turning whole body', 'Crossing feet too much'],
      breathing: 'Breathe naturally'
    }
  },

  'step-ups': {
    id: 'step-ups',
    name: 'Step-Ups',
    category: 'cardio',
    equipment: ['box', 'bench'],
    muscleGroups: ['quadriceps', 'glutes', 'calves'],
    difficulty: 2,
    instructions: [
      'Stand facing box or bench',
      'Place one foot fully on box',
      'Push through heel to step up',
      'Bring other foot up to standing',
      'Step down with control, same leg leads'
    ],
    safetyNotes: [
      'Ensure box is stable',
      'Keep knee aligned over foot',
      'Control the descent'
    ],
    modifications: {
      beginner: 'Lower box height',
      advanced: 'Add weight or increase speed',
      equipment_alternatives: {
        'box': 'Stairs or sturdy chair',
        'none': 'High knee marching'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Full foot on box', 'Stand close to box'],
      execution: ['Drive through heel', 'Stand tall at top'],
      common_mistakes: ['Pushing off back leg', 'Knee caving in'],
      breathing: 'Exhale on step up, inhale on step down'
    }
  },

  'marching-in-place': {
    id: 'marching-in-place',
    name: 'Marching in Place',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hip-flexors', 'core', 'calves'],
    difficulty: 1,
    instructions: [
      'Stand with feet hip-width apart',
      'Lift one knee up to hip height',
      'Lower foot back down',
      'Alternate legs in marching motion',
      'Swing arms naturally'
    ],
    safetyNotes: [
      'Keep core engaged',
      'Land softly',
      'Maintain upright posture'
    ],
    modifications: {
      beginner: 'Lower knee height',
      advanced: 'High knees or add arm movements',
      equipment_alternatives: {
        'none': 'Seated marching'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Stand tall', 'Arms at sides'],
      execution: ['Lift knees high', 'Land softly'],
      common_mistakes: ['Leaning back', 'Not lifting knees enough'],
      breathing: 'Breathe naturally'
    }
  },

  'skierg': {
    id: 'skierg',
    name: 'SkiErg',
    category: 'cardio',
    equipment: ['skierg'],
    muscleGroups: ['lats', 'core', 'triceps', 'shoulders'],
    difficulty: 3,
    instructions: [
      'Stand arm\'s length from handles, feet hip-width apart',
      'Reach up, grab handles with arms extended',
      'Drive handles down by hinging at hips and pulling with lats',
      'Finish with hands by thighs, core engaged',
      'Return to start with control'
    ],
    safetyNotes: [
      'Don\'t round back excessively',
      'Keep core engaged throughout',
      'Avoid yanking handles'
    ],
    modifications: {
      beginner: 'Reduce damper setting, focus on technique',
      advanced: 'Increase damper, add intervals or longer distances',
      equipment_alternatives: {
        'skierg': 'Rope slams or banded lat pulldowns'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 500,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Slight knee bend', 'Arms fully extended at top'],
      execution: ['Aggressive hip hinge', 'Pull to pockets'],
      common_mistakes: ['Using only arms', 'Standing too upright'],
      breathing: 'Exhale on pull, inhale on recovery'
    }
  },

  'rowing-erg': {
    id: 'rowing-erg',
    name: 'Rowing Erg',
    category: 'cardio',
    equipment: ['rowing-machine'],
    muscleGroups: ['back', 'legs', 'core', 'arms'],
    difficulty: 3,
    instructions: [
      'Secure feet, grab handle with overhand grip',
      'Start at catch: shins vertical, arms extended',
      'Drive with legs first, then lean back slightly',
      'Pull handle to lower ribs, squeeze shoulder blades',
      'Reverse sequence to return: arms, body, legs'
    ],
    safetyNotes: [
      'Keep back straight throughout',
      'Don\'t pull with arms too early',
      'Set damper appropriately (4-6)'
    ],
    modifications: {
      beginner: 'Lower damper, focus on technique',
      advanced: 'Higher intensity intervals, longer distances',
      equipment_alternatives: {
        'rowing-machine': 'Bent-over rows with resistance band'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 500,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['1:1:1 ratio of drive phases', 'Relaxed grip'],
      execution: ['Legs-body-arms, arms-body-legs', 'Maintain rhythm'],
      common_mistakes: ['Pulling arms first', 'Overreaching at catch'],
      breathing: 'Exhale on drive, inhale on recovery'
    }
  },

  'compromised-running': {
    id: 'compromised-running',
    name: 'Compromised Running',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular', 'mental'],
    difficulty: 4,
    instructions: [
      'Perform strength exercise to pre-fatigue',
      'Immediately transition to running',
      'Maintain target pace despite fatigue',
      'Focus on form when tired',
      'Complete prescribed distance'
    ],
    safetyNotes: [
      'Start conservatively',
      'Monitor form breakdown',
      'Have bailout option'
    ],
    modifications: {
      beginner: 'Shorter run segments, more rest',
      advanced: 'Longer runs, less transition time',
      equipment_alternatives: {
        'none': 'Bike or row if no running space'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 400,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Know target paces', 'Quick transitions'],
      execution: ['Maintain form', 'Push through fatigue'],
      common_mistakes: ['Starting too fast', 'Form breakdown'],
      breathing: 'Find rhythm quickly'
    }
  },

  'station-transitions': {
    id: 'station-transitions',
    name: 'Station Transitions',
    category: 'cardio',
    equipment: ['various'],
    muscleGroups: ['full-body', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Set up two stations 10m apart',
      'Complete reps at station 1',
      'Run to station 2',
      'Complete reps at station 2',
      'Continue for prescribed rounds'
    ],
    safetyNotes: [
      'Clear path between stations',
      'Secure all equipment',
      'Practice smooth transitions'
    ],
    modifications: {
      beginner: 'Fewer stations, more rest',
      advanced: 'Add more stations, reduce transition time',
      equipment_alternatives: {
        'various': 'Bodyweight movements if limited equipment'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 300,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Equipment ready', 'Know the sequence'],
      execution: ['Smooth transitions', 'No wasted movement'],
      common_mistakes: ['Rushing setup', 'Poor organization'],
      breathing: 'Control breathing between stations'
    }
  },

  'running-sandwich': {
    id: 'running-sandwich',
    name: 'Running Sandwich',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 4,
    instructions: [
      'Run prescribed distance at race pace',
      'Perform strength/functional exercise',
      'Run same distance again',
      'Compare split times',
      'Rest and repeat for sets'
    ],
    safetyNotes: [
      'Warm up thoroughly',
      'Monitor pace decline',
      'Stay hydrated'
    ],
    modifications: {
      beginner: 'Shorter runs, longer rest',
      advanced: 'Longer runs, multiple exercises',
      equipment_alternatives: {
        'none': 'Bike/row sandwich format'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 1000,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Know target splits', 'Prepare mentally'],
      execution: ['Consistent pacing', 'Quick transitions'],
      common_mistakes: ['First run too fast', 'Long transitions'],
      breathing: 'Settle into rhythm quickly'
    }
  },

  'mock-hyrox': {
    id: 'mock-hyrox',
    name: 'Mock HYROX',
    category: 'cardio',
    equipment: ['full-gym'],
    muscleGroups: ['full-body'],
    difficulty: 5,
    instructions: [
      'Set up all 8 stations if possible',
      'Complete 1km run',
      'Perform each station at race distance/reps',
      'Run 1km between each station',
      'Time entire workout'
    ],
    safetyNotes: [
      'Have spotter/timer',
      'Ensure proper hydration',
      'Scale if needed'
    ],
    modifications: {
      beginner: 'Half distances/reps',
      advanced: 'Add weight or reduce rest',
      equipment_alternatives: {
        'full-gym': 'Substitute similar movement patterns'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 4800,
      progressionRate: 5,
      unit: 'seconds'
    },
    coaching: {
      setup: ['All equipment ready', 'Nutrition planned'],
      execution: ['Race pace practice', 'Smooth transitions'],
      common_mistakes: ['Starting too fast', 'Poor pacing'],
      breathing: 'Find sustainable rhythm'
    }
  },

  'zone-2-recovery-run': {
    id: 'zone-2-recovery-run',
    name: 'Zone 2 Recovery Run',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 2,
    instructions: [
      'Run at conversational pace',
      'Heart rate in Zone 2 (60-70% max)',
      'Focus on easy breathing',
      'Maintain for prescribed duration',
      'Should feel easy throughout'
    ],
    safetyNotes: [
      'Don\'t push pace',
      'Stop if pain occurs',
      'Stay hydrated'
    ],
    modifications: {
      beginner: 'Run/walk intervals',
      advanced: 'Longer duration',
      equipment_alternatives: {
        'none': 'Bike or elliptical at same heart rate'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Start very easy', 'Have heart rate monitor'],
      execution: ['Nasal breathing if possible', 'Relaxed form'],
      common_mistakes: ['Running too fast', 'Ignoring heart rate'],
      breathing: 'Easy, rhythmic breathing'
    }
  },

  'hyrox-pace-runs': {
    id: 'hyrox-pace-runs',
    name: 'HYROX Pace Runs',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Calculate target HYROX run pace',
      'Run 8 x 1km at this pace',
      'Rest 2-3 minutes between',
      'Practice holding pace when tired',
      'Track split consistency'
    ],
    safetyNotes: [
      'Proper warm-up essential',
      'Adjust pace if needed',
      'Cool down properly'
    ],
    modifications: {
      beginner: '4-6 x 1km repeats',
      advanced: 'Reduce rest to 90 seconds',
      equipment_alternatives: {
        'none': 'Treadmill for precise pacing'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 8000,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Know exact pace needed', 'GPS watch ready'],
      execution: ['Consistent splits', 'Relaxed running'],
      common_mistakes: ['Starting too fast', 'Pace variance'],
      breathing: 'Find sustainable rhythm'
    }
  },

  'a-skip': {
    id: 'a-skip',
    name: 'A-Skip',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Hip Flexors', 'Hamstrings', 'Glutes', 'Calves'],
    difficulty: 2,
    instructions: [
      'Start by marching in place.',
      'Begin moving forward. As your right knee drives up, your left arm should drive forward.',
      'The right knee should come up to hip height, forming a 90-degree angle.',
      'Simultaneously, perform a small hop on your supporting (left) leg.',
      'Quickly switch legs, driving the left knee up as you hop on your right leg.',
      'The motion is a rhythmic "up-up-down, up-up-down". Focus on driving the knee up and the foot down directly under your center of mass.',
      'Maintain a tall, proud posture.'
    ],
    safetyNotes: [
      'Land on the ball of your foot.',
      'Keep the ankle of the driving leg flexed (dorsiflexion).',
      'The movement should be quick and cyclical, not a slow, high march.'
    ],
    modifications: {
      beginner: 'Perform as a march without the hop to learn the coordination.',
      advanced: 'Increase the speed and cadence of the skip. Cover more ground.',
      equipment_alternatives: {
        'None': 'High Knees.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Drive knee up to 90 degrees.',
        'Opposite arm drives forward.',
        'Small hop on the stance leg.',
        'Quickly cycle the legs.',
        'Think "punch the knee, stomp the foot".'
      ],
      common_mistakes: [
        'Leaning back.',
        'Swinging the leg forward instead of driving it down (casting).',
        'Not coordinating arms and legs.'
      ],
      breathing: 'Maintain a quick, rhythmic breathing pattern.'
    }
  },

  'b-skip': {
    id: 'b-skip',
    name: 'B-Skip',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Hamstrings', 'Hip Flexors', 'Glutes'],
    difficulty: 3,
    instructions: [
      'Start by performing an A-Skip: drive your right knee up to hip height.',
      'At the peak of the knee drive, extend your lower leg forward, kicking your foot out.',
      'Immediately and forcefully, snap the extended leg down and back, pawing at the ground.',
      'As your right leg is snapping down, your left leg begins its A-Skip motion to drive up.',
      'The rhythm is a continuous, cyclical "whip and claw" motion.',
      'Maintain a tall posture and use your arms for coordination and balance.'
    ],
    safetyNotes: [
      'This is an advanced drill. Master the A-Skip first.',
      'The focus is on the downward "pawing" motion, which actively engages the hamstring.',
      'Keep the ground contact brief and directly under your hips.'
    ],
    modifications: {
      beginner: 'Perform the motion while standing still, one leg at a time, holding onto a wall for balance.',
      advanced: 'Increase the speed and fluidity of the drill.',
      equipment_alternatives: {
        'None': 'Butt kicks with a focus on pulling the leg through.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Drive knee up (A-Skip).',
        'Kick lower leg forward.',
        'Forcefully snap the leg down and back.',
        'Claw the ground under you.',
        'Cycle immediately to the other leg.'
      ],
      common_mistakes: [
        'Swinging the leg in a passive circle.',
        'Not actively pulling the leg down.',
        'Leaning too far forward or backward.'
      ],
      breathing: 'Exhale sharply on each downward snap.'
    }
  },

  'rowing-steady-state': {
    id: 'rowing-steady-state',
    name: 'Rowing Steady State',
    category: 'cardio',
    equipment: ['rowing-machine'],
    muscleGroups: ['full-body', 'legs', 'back', 'arms'],
    difficulty: 2,
    instructions: [
      'Set up proper rowing technique and posture.',
      'Row at sustainable, moderate intensity.',
      'Focus on consistent stroke rate (18-22 strokes/min).',
      'Maintain proper sequence: legs, back, arms.',
      'Keep consistent split time throughout workout.',
      'Focus on long, powerful strokes.',
      'Breathe rhythmically with stroke pattern.',
      'Build duration gradually over time.'
    ],
    safetyNotes: [
      'Learn proper rowing technique to prevent injury.',
      'Don\'t rush the stroke rate initially.',
      'Monitor back position throughout workout.'
    ],
    modifications: {
      beginner: 'Start with 15-20 minutes. Focus on technique over intensity.',
      advanced: '45+ minutes. Include negative splits and pace variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper machine setup', 'Review technique'],
      execution: ['Consistent stroke rate', 'Full body engagement', 'Smooth rhythm'],
      common_mistakes: ['Rushing the stroke', 'Poor posture', 'Arms-only rowing'],
      breathing: 'Exhale on drive, inhale on recovery.'
    }
  },

  'rowing-intervals': {
    id: 'rowing-intervals',
    name: 'Rowing Intervals',
    category: 'cardio',
    equipment: ['rowing-machine'],
    muscleGroups: ['full-body', 'power', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Warm up with 10 minutes easy rowing.',
      'Row intervals at high intensity (85-95% effort).',
      'Common intervals: 250m, 500m, 1000m, 2000m.',
      'Take active recovery rowing between intervals.',
      'Focus on powerful, consistent strokes.',
      'Monitor split time and stroke rate.',
      'Maintain technique even when fatigued.',
      'Cool down with easy rowing.'
    ],
    safetyNotes: [
      'Ensure proper warm-up before high intensity.',
      'Monitor technique to prevent injury.',
      'Allow adequate recovery between intervals.'
    ],
    modifications: {
      beginner: 'Shorter intervals (250-500m). Longer recovery periods.',
      advanced: 'Longer intervals or shorter recovery. Higher stroke rates.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'sets',
      defaultValue: 6,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Proper technique established', 'Interval plan clear'],
      execution: ['High intensity effort', 'Maintain technique', 'Consistent pacing'],
      common_mistakes: ['Poor pacing strategy', 'Technique breakdown', 'Inadequate recovery'],
      breathing: 'Hard breathing during intervals, recover during rest.'
    }
  },

  'elliptical-steady': {
    id: 'elliptical-steady',
    name: 'Elliptical Steady State',
    category: 'cardio',
    equipment: ['elliptical-machine'],
    muscleGroups: ['full-body', 'legs', 'arms', 'cardiovascular'],
    difficulty: 2,
    instructions: [
      'Set up machine with appropriate resistance level.',
      'Maintain steady, moderate effort throughout workout.',
      'Use both arms and legs in coordinated motion.',
      'Keep consistent cadence (60-80 strides/min).',
      'Maintain upright posture throughout.',
      'Can vary resistance to simulate hills.',
      'Focus on smooth, controlled movements.',
      'Build duration gradually over time.'
    ],
    safetyNotes: [
      'Start with lower resistance to learn movement pattern.',
      'Don\'t lean heavily on handrails.',
      'Stop if experiencing unusual joint discomfort.'
    ],
    modifications: {
      beginner: 'Start with 15-20 minutes. Lower resistance levels.',
      advanced: '45+ minutes. Include resistance and incline variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 35,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Appropriate resistance setting', 'Good posture'],
      execution: ['Consistent moderate effort', 'Full body engagement', 'Smooth motion'],
      common_mistakes: ['Leaning on handrails', 'Poor posture', 'Inconsistent effort'],
      breathing: 'Steady, rhythmic breathing throughout.'
    }
  },

  'elliptical-intervals': {
    id: 'elliptical-intervals',
    name: 'Elliptical Intervals',
    category: 'cardio',
    equipment: ['elliptical-machine'],
    muscleGroups: ['full-body', 'cardiovascular', 'power'],
    difficulty: 3,
    instructions: [
      'Warm up with 10 minutes easy effort.',
      'Alternate between high intensity and recovery periods.',
      'High intensity: increase resistance and/or cadence.',
      'Common pattern: 2-4 minutes hard, 1-2 minutes easy.',
      'Maintain good form throughout intervals.',
      'Use both resistance and incline variations.',
      'Monitor heart rate or perceived effort.',
      'Cool down with easy effort.'
    ],
    safetyNotes: [
      'Build up interval intensity gradually.',
      'Don\'t sacrifice form for intensity.',
      'Allow adequate recovery between hard efforts.'
    ],
    modifications: {
      beginner: 'Shorter intervals (1-2 min). Longer recovery periods.',
      advanced: 'Longer intervals or shorter recovery. Higher resistance levels.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'sets',
      defaultValue: 6,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Plan interval structure', 'Resistance settings ready'],
      execution: ['High intensity efforts', 'Active recovery', 'Maintain form'],
      common_mistakes: ['Going too hard too early', 'Poor recovery efforts', 'Form breakdown'],
      breathing: 'Hard breathing during intervals, controlled during recovery.'
    }
  },

  'stair-climbing-steady': {
    id: 'stair-climbing-steady',
    name: 'Stair Climbing Steady',
    category: 'cardio',
    equipment: ['stairs'],
    muscleGroups: ['legs', 'glutes', 'cardiovascular', 'core'],
    difficulty: 3,
    instructions: [
      'Set consistent, sustainable pace on stairs.',
      'Use proper form: whole foot on step, upright posture.',
      'Maintain steady rhythm throughout workout.',
      'Use handrails for balance, not support.',
      'Focus on pushing through legs and glutes.',
      'Take consistent step depth and height.',
      'Build duration gradually over time.',
      'Cool down with easy walking.'
    ],
    safetyNotes: [
      'Use handrails for balance only, not weight support.',
      'Be aware of foot placement on each step.',
      'Start with shorter durations to avoid overuse.'
    ],
    modifications: {
      beginner: 'Start with 10-15 minutes. Use lighter, slower pace.',
      advanced: '30+ minutes. Include two-at-a-time or lateral movements.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 20,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper stair safety', 'Consistent starting pace'],
      execution: ['Steady climbing rhythm', 'Full foot placement', 'Upright posture'],
      common_mistakes: ['Leaning on handrails', 'Inconsistent step pattern', 'Going too fast initially'],
      breathing: 'Controlled breathing matching step rhythm.'
    }
  },

  'stair-climbing-intervals': {
    id: 'stair-climbing-intervals',
    name: 'Stair Climbing Intervals',
    category: 'cardio',
    equipment: ['stairs'],
    muscleGroups: ['legs', 'glutes', 'power', 'cardiovascular'],
    difficulty: 4,
    instructions: [
      'Warm up with easy climbing for 5-10 minutes.',
      'Alternate between high intensity and recovery climbing.',
      'High intensity: faster pace, two steps at a time, or lateral movements.',
      'Recovery: slow, controlled climbing or walking.',
      'Maintain proper form even during high intensity.',
      'Common pattern: 1-3 minutes hard, 1-2 minutes easy.',
      'Focus on power and control during hard efforts.',
      'Cool down with easy walking.'
    ],
    safetyNotes: [
      'Ensure secure footing during high intensity efforts.',
      'Don\'t sacrifice safety for speed.',
      'Build intensity gradually over several sessions.'
    ],
    modifications: {
      beginner: 'Single step focus, shorter intervals. Longer recovery.',
      advanced: 'Complex movement patterns, longer intervals, higher intensity.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'sets',
      defaultValue: 8,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Safe stair environment', 'Interval plan ready'],
      execution: ['Controlled high intensity', 'Secure foot placement', 'Active recovery'],
      common_mistakes: ['Poor foot placement', 'Too aggressive early intervals', 'Inadequate recovery'],
      breathing: 'Variable breathing matching interval intensity.'
    }
  },

  'treadmill-incline-walk': {
    id: 'treadmill-incline-walk',
    name: 'Treadmill Incline Walk',
    category: 'cardio',
    equipment: ['treadmill'],
    muscleGroups: ['legs', 'glutes', 'cardiovascular', 'core'],
    difficulty: 2,
    instructions: [
      'Set treadmill to walking pace (3-4.5 mph).',
      'Gradually increase incline to challenging but sustainable level.',
      'Maintain natural walking stride and arm swing.',
      'Keep upright posture, avoid leaning on handrails.',
      'Focus on pushing through glutes and legs.',
      'Can vary incline throughout workout.',
      'Build duration and incline gradually.',
      'Cool down with flat walking.'
    ],
    safetyNotes: [
      'Don\'t hold onto handrails for support.',
      'Start with moderate inclines and build gradually.',
      'Stop if experiencing unusual joint discomfort.'
    ],
    modifications: {
      beginner: 'Start with 5-8% incline. Shorter durations (15-20 min).',
      advanced: 'Higher inclines (12-15%+). Longer durations or intervals.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Start with gradual incline increase', 'Natural walking pace'],
      execution: ['Upright posture', 'Natural arm swing', 'Consistent effort'],
      common_mistakes: ['Holding handrails', 'Leaning forward', 'Starting incline too high'],
      breathing: 'Elevated but controlled breathing throughout.'
    }
  },

  'outdoor-hiking': {
    id: 'outdoor-hiking',
    name: 'Outdoor Hiking',
    category: 'cardio',
    equipment: ['hiking-boots', 'backpack', 'navigation', 'water'],
    muscleGroups: ['legs', 'core', 'cardiovascular', 'full-body'],
    difficulty: 3,
    instructions: [
      'Choose trail appropriate for fitness level and experience.',
      'Pack essential safety gear and sufficient water/food.',
      'Maintain steady, sustainable pace for terrain.',
      'Use trekking poles if available for stability and power.',
      'Take shorter steps on steep uphill sections.',
      'Control descent with bent knees and careful foot placement.',
      'Take breaks as needed for rest and hydration.',
      'Be aware of weather and environmental conditions.'
    ],
    safetyNotes: [
      'Inform others of hiking plans and expected return.',
      'Carry emergency supplies and first aid kit.',
      'Check weather conditions and trail status.',
      'Stay on marked trails and follow Leave No Trace principles.'
    ],
    modifications: {
      beginner: 'Choose well-marked, shorter trails with moderate elevation.',
      advanced: 'Longer distances, higher elevation gain, technical terrain.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'time',
      defaultValue: 120,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper trail selection', 'Essential gear packed'],
      execution: ['Sustainable pace', 'Careful foot placement', 'Regular hydration'],
      common_mistakes: ['Inadequate preparation', 'Poor pacing', 'Ignoring weather conditions'],
      breathing: 'Variable breathing adjusting to terrain demands.'
    }
  },

  'cross-country-skiing': {
    id: 'cross-country-skiing',
    name: 'Cross Country Skiing',
    category: 'cardio',
    equipment: ['skis', 'boots', 'poles', 'weather-appropriate-clothing'],
    muscleGroups: ['full-body', 'core', 'legs', 'arms'],
    difficulty: 3,
    instructions: [
      'Learn proper classic or skate skiing technique.',
      'Start on groomed, relatively flat terrain.',
      'Focus on coordinated arm and leg movements.',
      'Maintain forward momentum through efficient technique.',
      'Use poles for propulsion and balance.',
      'Dress in layers for temperature regulation.',
      'Practice on varied terrain as skills develop.',
      'Build endurance gradually with longer sessions.'
    ],
    safetyNotes: [
      'Learn basic techniques before venturing onto trails.',
      'Be aware of weather conditions and avalanche risk.',
      'Carry emergency supplies for backcountry skiing.',
      'Ski with others, especially in remote areas.'
    ],
    modifications: {
      beginner: 'Start with lessons on groomed tracks. Focus on technique.',
      advanced: 'Longer distances, varied terrain, racing techniques.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper equipment fit', 'Appropriate terrain selection'],
      execution: ['Coordinated movement', 'Efficient technique', 'Consistent rhythm'],
      common_mistakes: ['Poor timing of arm/leg coordination', 'Inadequate clothing', 'Starting on terrain too difficult'],
      breathing: 'Rhythmic breathing coordinated with skiing movement.'
    }
  },

  'snowshoeing': {
    id: 'snowshoeing',
    name: 'Snowshoeing',
    category: 'cardio',
    equipment: ['snowshoes', 'boots', 'poles', 'winter-clothing'],
    muscleGroups: ['legs', 'core', 'cardiovascular'],
    difficulty: 2,
    instructions: [
      'Attach snowshoes properly to boots.',
      'Take wider stance than normal walking to accommodate snowshoes.',
      'Lift feet slightly higher to avoid catching snowshoe edges.',
      'Use trekking poles for balance and additional propulsion.',
      'Maintain steady pace appropriate for snow conditions.',
      'Take frequent breaks for hydration and energy.',
      'Choose route based on snow conditions and avalanche risk.',
      'Practice techniques on easier terrain first.'
    ],
    safetyNotes: [
      'Check avalanche conditions in mountainous areas.',
      'Dress appropriately for cold weather conditions.',
      'Carry emergency supplies and communication device.',
      'Start with shorter distances to build fitness.'
    ],
    modifications: {
      beginner: 'Flat to gentle terrain. Shorter distances (30-60 min).',
      advanced: 'Steeper terrain, longer distances, varied snow conditions.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 75,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper snowshoe fit', 'Appropriate clothing layers'],
      execution: ['Wider stance', 'Higher foot lift', 'Use poles for balance'],
      common_mistakes: ['Stepping on snowshoe edges', 'Poor clothing choices', 'Inadequate hydration'],
      breathing: 'Adjust breathing for cold air and increased effort.'
    }
  },

  'kayaking-distance': {
    id: 'kayaking-distance',
    name: 'Kayaking Distance',
    category: 'cardio',
    equipment: ['kayak', 'paddle', 'pfd', 'safety-gear'],
    muscleGroups: ['arms', 'core', 'back', 'shoulders'],
    difficulty: 3,
    instructions: [
      'Launch kayak safely and adjust seating position.',
      'Paddle at sustainable pace for extended duration.',
      'Use proper paddling technique: torso rotation, not just arms.',
      'Maintain consistent stroke rate and rhythm.',
      'Practice efficient forward stroke and steering.',
      'Take breaks as needed for hydration and rest.',
      'Be aware of weather, water conditions, and traffic.',
      'Plan route with safe landing spots.'
    ],
    safetyNotes: [
      'Always wear properly fitted personal flotation device.',
      'Check weather and water conditions before launching.',
      'Inform others of paddling plans and expected return.',
      'Stay within skill level and close to shore if inexperienced.'
    ],
    modifications: {
      beginner: 'Calm water, shorter distances. Focus on technique.',
      advanced: 'Longer distances, varied conditions, open water.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 90,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper safety gear', 'Route planning'],
      execution: ['Efficient paddle technique', 'Steady pace', 'Torso rotation'],
      common_mistakes: ['Poor paddling technique', 'Inadequate safety preparation', 'Overestimating abilities'],
      breathing: 'Rhythmic breathing coordinated with paddle strokes.'
    }
  },

  'stand-up-paddleboarding': {
    id: 'stand-up-paddleboarding',
    name: 'Stand Up Paddleboarding',
    category: 'cardio',
    equipment: ['sup-board', 'paddle', 'pfd', 'leash'],
    muscleGroups: ['core', 'balance', 'arms', 'legs'],
    difficulty: 3,
    instructions: [
      'Start on knees in center of board, then slowly stand.',
      'Keep knees slightly bent and core engaged for balance.',
      'Paddle on alternating sides to maintain straight direction.',
      'Use core rotation for power, not just arms.',
      'Look ahead, not down at board or water.',
      'Practice falling and remounting board safely.',
      'Build balance and endurance gradually.',
      'Stay aware of wind, current, and water conditions.'
    ],
    safetyNotes: [
      'Always wear leash to stay connected to board.',
      'Start in calm, shallow water conditions.',
      'Learn to fall safely away from board.',
      'Be aware of other water users and obstacles.'
    ],
    modifications: {
      beginner: 'Start on knees, calm water. Focus on balance and basic paddling.',
      advanced: 'Standing paddle, varied conditions, longer distances.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Calm water conditions', 'Proper safety equipment'],
      execution: ['Balanced stance', 'Core engagement', 'Efficient paddling'],
      common_mistakes: ['Looking down', 'Poor paddle technique', 'Inadequate safety preparation'],
      breathing: 'Steady breathing while maintaining balance and paddling rhythm.'
    }
  }
,

  '400m-repeats': {
    'id': '400m-repeats',
    'name': '400m Repeats',
    'category': 'cardio',
    'equipment': [
        'Running Track'
    ],
    'muscleGroups': [
        'Full Body',
        'Cardiovascular System'
    ],
    'difficulty': 4,
    'instructions': [
        'Warm up thoroughly with 10-15 minutes of light jogging and dynamic stretches.',
        'Run 400 meters (one lap of a standard track) at a hard, sustainable effort (85-90%).',
        'Record your time for the lap.',
        'Rest for a predetermined period (e.g., 2-3 minutes).',
        'Repeat for the prescribed number of sets, aiming for consistent lap times.',
        'Cool down with 10 minutes of easy jogging.'
    ],
    'safetyNotes': [
        'Proper warm-up and cool-down are essential to prevent injury.',
        'Do not perform this workout if you are not accustomed to high-intensity running.',
        'Listen to your body; stop if you feel sharp pain.'
    ],
    'modifications': {
        'beginner': 'Run at a lower intensity (e.g., 80%). Increase the rest time between intervals. Reduce the number of repetitions.',
        'advanced': 'Decrease the rest time (e.g., a 1:1 or 1:2 work-to-rest ratio). Increase the number of repetitions.',
        'equipment_alternatives': {
            'treadmill': 'Treadmill 400m intervals',
            'road': 'Road running intervals'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 4,
        'progressionRate': 5,
        'unit': 'repetitions'
    },
    'coaching': {
        'setup': [
            'Complete a thorough warm-up.'
        ],
        'execution': [
            'Find a strong, consistent pace for the 400m.',
            'Focus on efficient running form: stay tall, relax your upper body, and maintain a quick cadence.',
            'Use the rest period to actively recover (walk or jog slowly).'
        ],
        'common_mistakes': [
            'Starting the first interval too fast and fading.',
            'Inconsistent pacing across reps.',
            'Poor running form due to fatigue.'
        ],
        'breathing': 'Develop a deep, rhythmic breathing pattern that matches your cadence.'
    }
}
};

export default CARDIO_EXERCISES;
