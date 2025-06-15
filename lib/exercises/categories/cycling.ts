import { Exercise } from '../types';

export const CYCLING_EXERCISES: Record<string, Exercise> = {
  'bike-cornering-drills': {
    id: 'bike-cornering-drills',
    name: 'Bike Cornering Drills',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['core', 'legs', 'balance'],
    difficulty: 3,
    instructions: [
      'Find safe area with gentle turns or set up cone course.',
      'Approach turn at moderate speed.',
      'Look through the turn to exit point.',
      'Shift weight to outside pedal in bottom position.',
      'Lean bike while keeping body more upright.',
      'Maintain steady pressure on outside pedal.',
      'Accelerate smoothly out of turn.',
      'Practice both left and right turns equally.'
    ],
    safetyNotes: [
      'Practice in traffic-free environment.',
      'Start with wide, gentle turns before tighter ones.',
      'Wear appropriate safety gear.',
      'Be aware of road surface conditions.'
    ],
    modifications: {
      beginner: 'Practice on very gentle turns at low speed. Focus on body position first.',
      advanced: 'Practice at race speeds. Add emergency cornering scenarios.'
    },
    equipment_alternatives: ['cones'],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'corner repetitions each direction'
    },
    coaching: {
      setup: ['Safe practice area', 'Moderate approach speed'],
      execution: ['Look through turn', 'Weight outside pedal', 'Lean bike, not body'],
      common_mistakes: ['Looking at ground instead of exit', 'Leaning body too much', 'Braking in the turn'],
      breathing: 'Breathe normally, don\'t hold breath through turns.'
    }
  },

  'bike-cadence-drills': {
    id: 'bike-cadence-drills',
    name: 'Bike Cadence Drills',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'cardiovascular', 'neuromuscular'],
    difficulty: 2,
    instructions: [
      'Set target cadence ranges for different intervals.',
      'Practice maintaining 90-95 RPM for endurance pace.',
      'Include intervals at 100-110 RPM for efficiency.',
      'Practice low cadence (70-80 RPM) strength intervals.',
      'Use gearing to maintain target cadence at different speeds.',
      'Focus on smooth, round pedal stroke at all cadences.',
      'Monitor with cadence sensor or count for 15 seconds x 4.'
    ],
    safetyNotes: [
      'Don\'t sacrifice smoothness for specific numbers.',
      'Adjust gearing appropriately for terrain.',
      'Build up high cadence work gradually.'
    ],
    modifications: {
      beginner: 'Focus on maintaining any consistent cadence. Use easier gears.',
      advanced: 'Practice rapid cadence changes. Include variable terrain.'
    },
    equipment_alternatives: ['cadence_monitor'],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes of cadence work'
    },
    coaching: {
      setup: ['Flat or trainer setup', 'Appropriate gearing available'],
      execution: ['Count or monitor cadence', 'Adjust gears to maintain RPM', 'Focus on smoothness'],
      common_mistakes: ['Choosing wrong gear for target cadence', 'Sacrificing smoothness for speed', 'Ignoring terrain changes'],
      breathing: 'Coordinate breathing with pedal rhythm at lower cadences.'
    }
  },

  'bike-standing-climbing': {
    id: 'bike-standing-climbing',
    name: 'Bike Standing Climbing Drill',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'core', 'glutes', 'arms'],
    difficulty: 3,
    instructions: [
      'Find moderate grade hill or increase trainer resistance.',
      'Shift to appropriate gear before standing.',
      'Rise smoothly from saddle, hands on brake hoods.',
      'Keep bike relatively stable beneath body.',
      'Rock bike slightly side to side with pedal stroke.',
      'Maintain steady rhythm and cadence.',
      'Practice transitioning smoothly between sitting and standing.',
      'Focus on efficiency rather than power.'
    ],
    safetyNotes: [
      'Practice gear selection before standing.',
      'Maintain control of bike at all times.',
      'Don\'t stand in highest gears initially.'
    ],
    modifications: {
      beginner: 'Practice on gentle grades. Keep standing periods short (30-60 seconds).',
      advanced: 'Practice on steeper grades. Include out-of-saddle sprints.'
    },
    equipment_alternatives: ['trainer'],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 90,
      unit: 'seconds standing'
    },
    coaching: {
      setup: ['Appropriate gear selection', 'Hands on brake hoods'],
      execution: ['Smooth rise from saddle', 'Slight bike sway with pedal stroke', 'Maintain cadence'],
      common_mistakes: ['Standing in too hard a gear', 'Excessive bike movement', 'Poor transition timing'],
      breathing: 'Increase breathing rate naturally with increased effort.'
    }
  },

  'bike-endurance-ride': {
    id: 'bike-endurance-ride',
    name: 'Bike Endurance Ride',
    category: 'cycling',
    equipment: ['bike', 'hydration', 'nutrition'],
    muscleGroups: ['legs', 'cardiovascular', 'core', 'endurance'],
    difficulty: 3,
    instructions: [
      'Ride at sustainable aerobic pace for extended duration.',
      'Practice fueling every 45-60 minutes on longer rides.',
      'Maintain steady power output or heart rate zone.',
      'Include variety in terrain when possible.',
      'Focus on efficiency and comfort over speed.',
      'Practice race-day equipment and clothing.',
      'Build mental toughness and confidence.',
      'Plan rest stops and fuel stations for very long rides.'
    ],
    safetyNotes: [
      'Inform others of route and expected return time.',
      'Carry emergency repair kit and first aid supplies.',
      'Plan routes with food/water resupply options.'
    ],
    modifications: {
      beginner: '2-3 hours. Focus on comfortable sustainable pace.',
      advanced: '4-7+ hours. Include race simulation and varied terrain.'
    },
    equipment_alternatives: [],
    progressionRate: 0.08,
    metrics: {
      type: 'time',
      defaultValue: 180,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Plan detailed route', 'Prepare nutrition strategy'],
      execution: ['Sustainable aerobic effort', 'Regular fueling', 'Efficient riding position'],
      common_mistakes: ['Starting too hard', 'Poor nutrition timing', 'Inadequate preparation'],
      breathing: 'Steady, controlled breathing throughout long duration.'
    }
  },

  'bike-tempo-intervals': {
    id: 'bike-tempo-intervals',
    name: 'Bike Tempo Intervals',
    category: 'cycling',
    equipment: ['bike', 'power-meter'],
    muscleGroups: ['legs', 'cardiovascular', 'core'],
    difficulty: 3,
    instructions: [
      'Warm up with 15-20 minutes progressive spinning.',
      'Ride intervals at tempo pace (steady, comfortably hard).',
      'Target about 85-90% of threshold power or heart rate.',
      'Intervals typically 8-20 minutes in length.',
      'Take 2-5 minutes easy spinning recovery between intervals.',
      'Maintain consistent power/effort throughout each interval.',
      'Focus on smooth, efficient pedaling technique.',
      'Cool down with easy spinning.'
    ],
    safetyNotes: [
      'Build up interval duration gradually over time.',
      'Monitor power/heart rate to avoid going too hard.',
      'Ensure adequate recovery between intervals.'
    ],
    modifications: {
      beginner: 'Start with 2-3 x 8-10 minutes. Longer recovery periods.',
      advanced: '3-4 x 15-20 minutes. Shorter recovery between efforts.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'sets',
      defaultValue: 3,
      unit: 'tempo intervals'
    },
    coaching: {
      setup: ['Power meter calibrated', 'Flat to rolling course'],
      execution: ['Consistent tempo effort', 'Smooth pedaling', 'Controlled intensity'],
      common_mistakes: ['Going too hard early', 'Inconsistent pacing', 'Inadequate warm-up'],
      breathing: 'Elevated but controlled breathing during intervals.'
    }
  },

  'bike-pyramid-intervals': {
    id: 'bike-pyramid-intervals',
    name: 'Bike Pyramid Intervals',
    category: 'cycling',
    equipment: ['bike', 'timer', 'power-meter'],
    muscleGroups: ['legs', 'cardiovascular', 'power'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly with progressive efforts.',
      'Structure intervals in pyramid format: build up then down.',
      'Example: 1-2-3-4-3-2-1 minutes or 2-4-6-4-2 minutes.',
      'Intensity typically threshold to VO2 max effort.',
      'Take recovery equal to 50-100% of interval time.',
      'Maintain target power/heart rate for each interval.',
      'Focus on consistency across similar length intervals.',
      'Cool down with easy spinning.'
    ],
    safetyNotes: [
      'Requires good fitness base before attempting.',
      'Monitor fatigue levels as workout progresses.',
      'Adjust intensity if unable to complete pyramid.'
    ],
    modifications: {
      beginner: 'Shorter pyramid (1-2-3-2-1 min). Lower intensity zones.',
      advanced: 'Longer pyramid or multiple sets. Higher intensity efforts.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'sets',
      defaultValue: 1,
      unit: 'pyramid sequence'
    },
    coaching: {
      setup: ['Plan pyramid structure', 'Target power zones'],
      execution: ['Progressive then regressive intervals', 'Consistent effort', 'Active recovery'],
      common_mistakes: ['Going too hard on early intervals', 'Not adjusting for fatigue', 'Poor pacing strategy'],
      breathing: 'Variable breathing intensity matching interval progression.'
    }
  },

  'bike-recovery-ride': {
    id: 'bike-recovery-ride',
    name: 'Bike Recovery Ride',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'active-recovery'],
    difficulty: 1,
    instructions: [
      'Ride at very easy, comfortable pace.',
      'Focus on active recovery and blood flow promotion.',
      'Maintain high cadence (90-100+ RPM) with low resistance.',
      'Duration typically 30-60 minutes.',
      'Should feel refreshed, not tired after completion.',
      'Perfect opportunity to work on pedaling technique.',
      'Keep heart rate in easy aerobic zone.',
      'Include gentle spinning in small chainring.'
    ],
    safetyNotes: [
      'No pressure to maintain any specific pace or power.',
      'Skip if feeling overly fatigued.',
      'Focus on enjoyment and gentle movement.'
    ],
    modifications: {
      beginner: '20-30 minutes very easy spinning.',
      advanced: 'Can be longer but always at recovery intensity.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Day after hard training', 'Easy gear selection'],
      execution: ['Very gentle effort', 'High cadence', 'Focus on technique'],
      common_mistakes: ['Riding too hard', 'Making it a workout', 'Low cadence grinding'],
      breathing: 'Easy, natural breathing throughout.'
    }
  },

  'road-cycling-group-ride': {
    id: 'road-cycling-group-ride',
    name: 'Road Cycling Group Ride',
    category: 'cycling',
    equipment: ['bike', 'safety-gear', 'communication'],
    muscleGroups: ['legs', 'cardiovascular', 'core'],
    difficulty: 3,
    instructions: [
      'Join organized group ride appropriate for your fitness level.',
      'Practice drafting and paceline skills safely.',
      'Communicate with hand signals and verbal calls.',
      'Share pulling duties at front of group.',
      'Maintain consistent spacing from other riders.',
      'Follow group etiquette and safety protocols.',
      'Practice bike handling skills in group setting.',
      'Adapt effort to group pace and dynamics.'
    ],
    safetyNotes: [
      'Start with beginner-friendly groups.',
      'Always wear helmet and follow traffic laws.',
      'Communicate clearly with other riders.',
      'Be predictable in movements and positioning.'
    ],
    modifications: {
      beginner: 'Join no-drop or beginner groups. Focus on safety and skills.',
      advanced: 'Join competitive groups. Practice race tactics and high-intensity efforts.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 120,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Choose appropriate group level', 'Review group riding skills'],
      execution: ['Safe group positioning', 'Smooth paceline work', 'Clear communication'],
      common_mistakes: ['Riding above fitness level', 'Poor communication', 'Unsafe positioning'],
      breathing: 'Variable breathing matching group pace changes.'
    }
  },

  'indoor-cycling-endurance': {
    id: 'indoor-cycling-endurance',
    name: 'Indoor Cycling Endurance',
    category: 'cycling',
    equipment: ['indoor-trainer', 'bike', 'fan', 'entertainment'],
    muscleGroups: ['legs', 'cardiovascular', 'core'],
    difficulty: 2,
    instructions: [
      'Set up trainer in well-ventilated area with fan.',
      'Maintain steady, moderate effort throughout session.',
      'Use entertainment or structured workout to maintain focus.',
      'Practice different cadences and positions.',
      'Include some standing and position changes.',
      'Focus on smooth pedal stroke and efficiency.',
      'Stay well hydrated due to limited air circulation.',
      'Can simulate outdoor routes with apps/videos.'
    ],
    safetyNotes: [
      'Ensure adequate ventilation and cooling.',
      'Stay well hydrated throughout session.',
      'Take breaks if overheating occurs.'
    ],
    modifications: {
      beginner: 'Start with 30-45 minutes. Include frequent breaks.',
      advanced: '90+ minutes. Include varied intensities and position changes.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 75,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper trainer setup', 'Adequate cooling'],
      execution: ['Consistent moderate effort', 'Hydration focus', 'Position variety'],
      common_mistakes: ['Inadequate cooling', 'Poor hydration', 'Monotonous positioning'],
      breathing: 'Steady breathing with emphasis on cooling.'
    }
  },

  'bike-brick-workout': {
    id: 'bike-brick-workout',
    name: 'Bike-Run Brick Workout',
    category: 'cycling',
    equipment: ['bike', 'running-shoes', 'transition-area'],
    muscleGroups: ['full-body', 'transition-adaptation'],
    difficulty: 4,
    instructions: [
      'Complete bike segment at race pace intensity.',
      'Immediately transition to running without extended rest.',
      'Practice efficient bike-to-run transition procedures.',
      'Run at target race pace despite heavy legs.',
      'Include various bike and run durations.',
      'Practice nutrition and hydration timing.',
      'Focus on mental preparation for discomfort.',
      'Build adaptation to bike-run muscle transition.'
    ],
    safetyNotes: [
      'Start with shorter durations and build gradually.',
      'Be prepared for initial run discomfort and adaptation.',
      'Practice transitions in safe environment.'
    ],
    modifications: {
      beginner: 'Short bike (20-30 min) + short run (10-15 min).',
      advanced: 'Race simulation distances and intensities.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 90,
      unit: 'minutes total (bike + run)'
    },
    coaching: {
      setup: ['Race pace planning', 'Transition practice'],
      execution: ['Consistent bike effort', 'Quick transition', 'Adapt to run feeling'],
      common_mistakes: ['Too hard bike effort', 'Slow transitions', 'Poor run adaptation'],
      breathing: 'Manage breathing through intensity and transition changes.'
    }
  },

  'bike-cadence-work': {
    id: 'bike-cadence-work',
    name: 'Bike Cadence Training',
    category: 'cycling',
    equipment: ['bike', 'cadence-monitor'],
    muscleGroups: ['legs', 'neuromuscular', 'efficiency'],
    difficulty: 2,
    instructions: [
      'Practice different cadence ranges systematically.',
      'Include low cadence (60-70 RPM) strength work.',
      'Practice high cadence (100-120+ RPM) spin-ups.',
      'Work on optimal cadence (85-95 RPM) efficiency.',
      'Use different gears to achieve target cadences.',
      'Focus on smooth, round pedal stroke at all cadences.',
      'Include cadence changes within rides.',
      'Monitor power output at different cadences.'
    ],
    safetyNotes: [
      'Build high cadence work gradually.',
      'Don\'t sacrifice smoothness for specific numbers.',
      'Listen to body for optimal cadence range.'
    ],
    modifications: {
      beginner: 'Focus on finding comfortable natural cadence (80-90 RPM).',
      advanced: 'Include complex cadence protocols and efficiency testing.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes cadence work'
    },
    coaching: {
      setup: ['Cadence monitor available', 'Various gear options'],
      execution: ['Target specific cadences', 'Maintain smooth pedaling', 'Monitor efficiency'],
      common_mistakes: ['Forcing unnatural cadences', 'Poor gear selection', 'Sacrificing smoothness'],
      breathing: 'Coordinate breathing with different cadence rhythms.'
    }
  },

  'bike-power-intervals': {
    id: 'bike-power-intervals',
    name: 'Bike Power Intervals',
    category: 'cycling',
    equipment: ['bike', 'power-meter'],
    muscleGroups: ['legs', 'power', 'neuromuscular'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly including progressive efforts.',
      'Perform short, high-intensity power intervals.',
      'Target 120-150%+ of threshold power.',
      'Intervals typically 15 seconds to 2 minutes.',
      'Take long recovery between intervals (1:3-1:5 ratio).',
      'Focus on explosive power and neuromuscular recruitment.',
      'Include both seated and standing power efforts.',
      'Cool down with extended easy spinning.'
    ],
    safetyNotes: [
      'Requires excellent warm-up and recovery ability.',
      'Very high intensity - limit frequency of sessions.',
      'Monitor fatigue levels carefully.'
    ],
    modifications: {
      beginner: 'Shorter intervals (15-30 sec). Longer recovery periods.',
      advanced: 'Longer intervals or complex sets. Sport-specific power work.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'sets',
      defaultValue: 8,
      unit: 'power intervals'
    },
    coaching: {
      setup: ['Excellent warm-up', 'Power targets clear'],
      execution: ['Explosive efforts', 'Full recovery', 'Neuromuscular focus'],
      common_mistakes: ['Inadequate warm-up', 'Insufficient recovery', 'Too many intervals'],
      breathing: 'Very hard breathing during efforts. Complete recovery between.'
    }
  },

  'bike-recovery-spin': {
    id: 'bike-recovery-spin',
    name: 'Bike Recovery Spin',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'active-recovery'],
    difficulty: 1,
    instructions: [
      'Ride at very easy, comfortable intensity.',
      'Focus on gentle movement and blood flow promotion.',
      'Maintain high cadence (90-100+ RPM) with minimal resistance.',
      'Duration typically 30-75 minutes.',
      'Should feel refreshed and loosened up after ride.',
      'Perfect opportunity for technique and position work.',
      'Include gentle spinning in small chainring only.',
      'No power or heart rate targets - just feel good.'
    ],
    safetyNotes: [
      'No pressure to maintain pace or power.',
      'Skip if feeling overly fatigued.',
      'Focus on enjoyment and gentle movement.'
    ],
    modifications: {
      beginner: '20-30 minutes very easy spinning.',
      advanced: 'Can be longer but always at recovery intensity.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Day after hard training', 'Easy gear only'],
      execution: ['Very gentle effort', 'High cadence', 'Focus on feel'],
      common_mistakes: ['Riding too hard', 'Making it a workout', 'Low cadence grinding'],
      breathing: 'Easy, natural breathing throughout.'
    }
  },

  'bike-group-ride': {
    id: 'bike-group-ride',
    name: 'Bike Group Ride',
    category: 'cycling',
    equipment: ['bike', 'safety-gear'],
    muscleGroups: ['legs', 'cardiovascular', 'skills'],
    difficulty: 3,
    instructions: [
      'Join group ride appropriate for fitness level.',
      'Practice safe group riding skills and etiquette.',
      'Learn drafting techniques and paceline rotation.',
      'Communicate clearly with hand signals and calls.',
      'Share workload at front of group appropriately.',
      'Practice bike handling in close proximity to others.',
      'Adapt to group pace and dynamics.',
      'Include social and competitive elements.'
    ],
    safetyNotes: [
      'Always prioritize safety over performance.',
      'Follow group rules and local traffic laws.',
      'Communicate clearly and predictably.',
      'Start with beginner-friendly groups.'
    ],
    modifications: {
      beginner: 'No-drop groups, focus on safety and basic skills.',
      advanced: 'Competitive groups, race simulation, advanced tactics.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 120,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Choose appropriate group', 'Review safety protocols'],
      execution: ['Safe positioning', 'Clear communication', 'Share workload'],
      common_mistakes: ['Poor communication', 'Unsafe positioning', 'Not sharing work'],
      breathing: 'Variable breathing matching group pace changes.'
    }
  },

  'bike-aerobic-base': {
    id: 'bike-aerobic-base',
    name: 'Bike Aerobic Base Building',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'cardiovascular', 'endurance'],
    difficulty: 2,
    instructions: [
      'Ride at sustainable aerobic intensity (Zone 2).',
      'Maintain conversational effort level throughout.',
      'Focus on building aerobic engine and fat burning capacity.',
      'Include variety in terrain and duration.',
      'Ride 3-6 hours depending on fitness and goals.',
      'Practice nutrition and hydration strategies.',
      'Build weekly volume gradually over time.',
      'Focus on enjoyment and consistency.'
    ],
    safetyNotes: [
      'Monitor effort to stay in aerobic zone.',
      'Build volume gradually to prevent overuse.',
      'Ensure adequate nutrition for longer rides.'
    ],
    modifications: {
      beginner: 'Start with 1-2 hours. Focus on comfort and bike handling.',
      advanced: '4-6+ hours. Include varied terrain and conditions.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 180,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Plan sustainable pace', 'Prepare nutrition'],
      execution: ['Conversational effort', 'Consistent power', 'Efficient pedaling'],
      common_mistakes: ['Riding too hard', 'Poor nutrition planning', 'Inconsistent effort'],
      breathing: 'Easy, conversational breathing throughout.'
    }
  },

  'bike-threshold-intervals': {
    id: 'bike-threshold-intervals',
    name: 'Bike Threshold Intervals',
    category: 'cycling',
    equipment: ['bike', 'power-meter'],
    muscleGroups: ['legs', 'cardiovascular', 'lactate-system'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly with progressive efforts.',
      'Ride intervals at functional threshold power/pace.',
      'Target sustainable hard effort (can maintain for ~1 hour).',
      'Common intervals: 2x20min, 3x15min, 4x10min.',
      'Take 2-5 minutes easy recovery between intervals.',
      'Monitor power/heart rate to stay in threshold zone.',
      'Focus on smooth, efficient pedaling at intensity.',
      'Cool down with easy spinning.'
    ],
    safetyNotes: [
      'Requires good fitness base before attempting.',
      'Monitor effort closely to avoid going anaerobic.',
      'Build threshold volume gradually.'
    ],
    modifications: {
      beginner: 'Start with 2x10-12 minutes. Build duration gradually.',
      advanced: 'Longer intervals or multiple sets. Include over/under work.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 40,
      unit: 'minutes at threshold'
    },
    coaching: {
      setup: ['Know threshold power/pace', 'Proper warm-up'],
      execution: ['Sustainable hard effort', 'Consistent power', 'Smooth pedaling'],
      common_mistakes: ['Going too hard early', 'Poor pacing', 'Inadequate warm-up'],
      breathing: 'Hard but controlled breathing. Should be sustainable.'
    }
  },

  'bike-VO2-max-intervals': {
    id: 'bike-VO2-max-intervals',
    name: 'Bike VO2 Max Intervals',
    category: 'cycling',
    equipment: ['bike', 'power-meter'],
    muscleGroups: ['legs', 'cardiovascular', 'power'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly including some higher intensity efforts.',
      'Ride intervals at VO2 max power (105-120% of threshold).',
      'Intervals typically 3-8 minutes in length.',
      'Take recovery equal to or longer than interval time.',
      'Focus on smooth power delivery at high intensity.',
      'Common sets: 5x5min, 6x4min, 8x3min.',
      'Monitor power to stay in VO2 max zone.',
      'Cool down with extended easy spinning.'
    ],
    safetyNotes: [
      'Requires excellent fitness base and recovery ability.',
      'High intensity - allow adequate recovery between sessions.',
      'Stop if unable to maintain target power.'
    ],
    modifications: {
      beginner: 'Shorter intervals (3-4 min). Longer recovery periods.',
      advanced: 'Longer intervals or complex sets. Shorter recovery ratios.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'sets',
      defaultValue: 5,
      unit: 'VO2 intervals'
    },
    coaching: {
      setup: ['Know VO2 max power', 'Excellent warm-up'],
      execution: ['High intensity effort', 'Smooth power delivery', 'Full recovery'],
      common_mistakes: ['Inadequate warm-up', 'Going too hard too early', 'Poor recovery'],
      breathing: 'Very hard breathing during intervals. Full recovery between.'
    }
  },

  'bike-climbing-repeats': {
    id: 'bike-climbing-repeats',
    name: 'Bike Climbing Repeats',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'glutes', 'core', 'power'],
    difficulty: 4,
    instructions: [
      'Find hill with 5-10% grade, 3-8 minutes long.',
      'Warm up thoroughly before climbing efforts.',
      'Climb at threshold to VO2 max intensity.',
      'Practice both seated and standing climbing.',
      'Focus on consistent power output and cadence.',
      'Recover with easy spinning down hill or flat.',
      'Include varied climbing intensities and durations.',
      'Cool down with easy spinning.'
    ],
    safetyNotes: [
      'Check traffic conditions for road climbing.',
      'Build climbing volume gradually.',
      'Monitor heart rate to avoid overexertion.'
    ],
    modifications: {
      beginner: 'Moderate grades (4-6%). Shorter climbs (2-4 min).',
      advanced: 'Steeper grades (8-12%+). Longer climbs (8-15 min).'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 6,
      unit: 'climbing repeats'
    },
    coaching: {
      setup: ['Appropriate hill selection', 'Climbing position practice'],
      execution: ['Consistent power output', 'Efficient climbing technique', 'Controlled breathing'],
      common_mistakes: ['Poor gear selection', 'Inconsistent effort', 'Inadequate recovery'],
      breathing: 'Hard climbing breathing. Control rhythm with pedal stroke.'
    }
  },

  'bike-time-trial-pace': {
    id: 'bike-time-trial-pace',
    name: 'Bike Time Trial Pace',
    category: 'cycling',
    equipment: ['bike'],
    muscleGroups: ['legs', 'core', 'aerobic-power'],
    difficulty: 4,
    instructions: [
      'Practice riding at sustainable time trial intensity.',
      'Target pace slightly below threshold (95-100% of FTP).',
      'Focus on aerodynamic position and efficiency.',
      'Practice even pacing and power distribution.',
      'Include race simulation with nutrition practice.',
      'Work on mental focus and concentration.',
      'Practice different TT distances and strategies.',
      'Monitor power, heart rate, and perceived effort.'
    ],
    safetyNotes: [
      'Ensure aerodynamic position doesn\'t compromise safety.',
      'Build TT position comfort gradually.',
      'Practice in safe, controlled environment.'
    ],
    modifications: {
      beginner: 'Start with shorter TT efforts (10-20 min). Focus on pacing.',
      advanced: 'Longer TT simulations (40-180 min). Perfect race strategy.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes at TT pace'
    },
    coaching: {
      setup: ['Aerodynamic position', 'Power/pace targets'],
      execution: ['Consistent sustainable effort', 'Efficient position', 'Even pacing'],
      common_mistakes: ['Starting too hard', 'Poor position', 'Inconsistent effort'],
      breathing: 'Controlled breathing that supports aerodynamic position.'
    }
  }
};

export default CYCLING_EXERCISES;
