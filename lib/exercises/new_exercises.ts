// Remaining new exercises to be added to the database

export const NEW_EXERCISES = {
  // Remaining Cycling Advanced Exercises
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

  // Running Advanced Exercises
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

  'run-fartlek-training': {
    id: 'run-fartlek-training',
    name: 'Run Fartlek Training',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'cardiovascular', 'adaptation'],
    difficulty: 2,
    instructions: [
      'Run with spontaneous speed changes based on feel.',
      'Include surges of various intensities and durations.',
      'Use landmarks for surge targets (trees, poles, hills).',
      'Vary efforts from moderate to hard intensity.',
      'Return to easy pace for recovery between surges.',
      'Make it playful and unstructured.',
      'Include different terrains and conditions.',
      'Total workout time includes warm-up and cool-down.'
    ],
    safetyNotes: [
      'Listen to body for surge timing and intensity.',
      'Don\'t force efforts if feeling overly fatigued.',
      'Be aware of terrain and footing.'
    ],
    modifications: {
      beginner: 'Shorter, gentler surges. More recovery time.',
      advanced: 'Longer surges, higher intensity, less recovery.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes total'
    },
    coaching: {
      setup: ['Varied terrain ideal', 'No rigid structure'],
      execution: ['Play with speed changes', 'Mix effort levels', 'Enjoy the variety'],
      common_mistakes: ['Making it too structured', 'All surges same intensity', 'Poor recovery'],
      breathing: 'Variable breathing matching effort changes.'
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

  'run-track-workout': {
    id: 'run-track-workout',
    name: 'Run Track Workout',
    category: 'running',
    equipment: ['running-shoes', 'track'],
    muscleGroups: ['legs', 'cardiovascular', 'speed'],
    difficulty: 4,
    instructions: [
      'Warm up with easy jogging and dynamic drills.',
      'Run precise distances at specific target paces.',
      'Use track markings for accurate distance measurement.',
      'Include variety: 200m, 400m, 800m, 1200m, 1600m.',
      'Take measured recovery between repetitions.',
      'Practice race tactics and positioning.',
      'Focus on consistent splits and pacing.',
      'Cool down with easy jogging and stretching.'
    ],
    safetyNotes: [
      'Share track courteously with other users.',
      'Adequate warm-up essential for speed work.',
      'Follow track etiquette and direction rules.'
    ],
    modifications: {
      beginner: 'Shorter distances, longer recovery, moderate paces.',
      advanced: 'Complex sets, shorter recovery, race-specific paces.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'sets',
      defaultValue: 6,
      unit: 'track intervals'
    },
    coaching: {
      setup: ['Track availability', 'Clear workout plan'],
      execution: ['Precise pacing', 'Use track markings', 'Consistent splits'],
      common_mistakes: ['Poor pacing strategy', 'Inadequate warm-up', 'Ignoring track etiquette'],
      breathing: 'Hard breathing during fast intervals. Full recovery between.'
    }
  },

  'run-progression-run': {
    id: 'run-progression-run',
    name: 'Run Progression Run',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'cardiovascular', 'pacing'],
    difficulty: 3,
    instructions: [
      'Start at easy, comfortable pace.',
      'Gradually increase pace throughout the run.',
      'Divide run into segments with progressively faster paces.',
      'Final segments should reach tempo to threshold effort.',
      'Focus on smooth transitions between pace changes.',
      'Maintain good form as pace increases.',
      'Can structure as thirds: easy, moderate, moderately hard.',
      'Practice negative splitting and pacing discipline.'
    ],
    safetyNotes: [
      'Don\'t increase pace too dramatically early.',
      'Build progression gradually over several weeks.',
      'Monitor effort to avoid going anaerobic too soon.'
    ],
    modifications: {
      beginner: 'Gentle progression from easy to moderate pace.',
      advanced: 'More dramatic pace changes, longer duration.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 50,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Plan pace progression', 'Start conservatively'],
      execution: ['Gradual pace increases', 'Smooth transitions', 'Strong finish'],
      common_mistakes: ['Progressing too quickly', 'Starting too fast', 'Poor pacing discipline'],
      breathing: 'Progressive breathing intensity matching pace increases.'
    }
  },

  'run-negative-split-run': {
    id: 'run-negative-split-run',
    name: 'Run Negative Split',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'cardiovascular', 'pacing'],
    difficulty: 3,
    instructions: [
      'Run first half at controlled, slightly conservative pace.',
      'Run second half faster than first half.',
      'Practice disciplined pacing and energy management.',
      'Focus on even effort rather than even pace.',
      'Build confidence in finishing strong.',
      'Can apply to any distance from 5K to marathon pace.',
      'Monitor splits to ensure negative splitting.',
      'Practice race-day pacing strategies.'
    ],
    safetyNotes: [
      'Requires discipline to hold back early.',
      'Don\'t go out too conservatively in first half.',
      'Build negative splitting gradually.'
    ],
    modifications: {
      beginner: 'Small negative split (10-20 seconds difference).',
      advanced: 'Larger negative splits, longer distances.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 40,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Plan conservative start', 'Know target splits'],
      execution: ['Disciplined early pace', 'Progressive second half', 'Strong finish'],
      common_mistakes: ['Going out too fast', 'Too conservative start', 'Poor energy management'],
      breathing: 'Controlled early breathing, build to harder effort.'
    }
  },

  'run-brick-workout': {
    id: 'run-brick-workout',
    name: 'Run Brick Workout',
    category: 'running',
    equipment: ['running-shoes', 'bike'],
    muscleGroups: ['legs', 'transition-adaptation'],
    difficulty: 4,
    instructions: [
      'Complete bike segment immediately before running.',
      'Transition quickly from bike to run without extended rest.',
      'Run despite initial heavy leg feeling from cycling.',
      'Practice race pace running on fatigued legs.',
      'Include various bike and run durations.',
      'Focus on efficient transition procedures.',
      'Build adaptation to neuromuscular transition.',
      'Practice nutrition timing across sports.'
    ],
    safetyNotes: [
      'Start with shorter durations and build gradually.',
      'Expect initial discomfort and adaptation period.',
      'Practice transitions safely.'
    ],
    modifications: {
      beginner: 'Short bike (20-30 min) + short run (10-15 min).',
      advanced: 'Race simulation distances and intensities.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes running (after bike)'
    },
    coaching: {
      setup: ['Plan bike effort', 'Quick transition setup'],
      execution: ['Efficient transition', 'Adapt to leg feeling', 'Target race pace'],
      common_mistakes: ['Too hard bike effort', 'Slow transition', 'Poor adaptation'],
      breathing: 'Manage breathing through transition and adaptation.'
    }
  },

  'run-race-pace-practice': {
    id: 'run-race-pace-practice',
    name: 'Run Race Pace Practice',
    category: 'running',
    equipment: ['running-shoes'],
    muscleGroups: ['legs', 'cardiovascular', 'race-specificity'],
    difficulty: 3,
    instructions: [
      'Run at planned race pace for specific distances.',
      'Practice pacing, fueling, and race strategies.',
      'Include race pace segments within longer runs.',
      'Build confidence and familiarity with target pace.',
      'Practice race-day clothing and equipment.',
      'Include variety in race pace durations.',
      'Focus on maintaining pace under fatigue.',
      'Simulate race conditions when possible.'
    ],
    safetyNotes: [
      'Don\'t overdo race pace volume in training.',
      'Allow adequate recovery after race pace sessions.',
      'Build race pace distance gradually.'
    ],
    modifications: {
      beginner: 'Shorter race pace segments (5-15 minutes).',
      advanced: 'Longer race pace runs, complex race simulations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes at race pace'
    },
    coaching: {
      setup: ['Know exact race pace', 'Practice conditions'],
      execution: ['Precise pace control', 'Practice race tactics', 'Build confidence'],
      common_mistakes: ['Running faster than race pace', 'Too much race pace volume', 'Poor pacing'],
      breathing: 'Race-specific breathing patterns and rhythm.'
    }
  },

  // Triathlon Specific Exercises
  'transition-practice-T1': {
    id: 'transition-practice-T1',
    name: 'Swim-to-Bike Transition (T1)',
    category: 'triathlon',
    equipment: ['wetsuit', 'bike', 'helmet', 'shoes', 'transition-setup'],
    muscleGroups: ['full-body', 'transition-skills'],
    difficulty: 3,
    instructions: [
      'Practice complete swim exit and transition sequence.',
      'Remove wetsuit efficiently while moving.',
      'Put on helmet, sunglasses, and bike shoes quickly.',
      'Mount bike smoothly and begin cycling.',
      'Practice various wetsuit removal techniques.',
      'Include nutrition and hydration pickup if needed.',
      'Time transitions and work on efficiency.',
      'Practice in race-day clothing and conditions.'
    ],
    safetyNotes: [
      'Practice in safe, controlled environment.',
      'Ensure helmet is properly secured before mounting bike.',
      'Be aware of other athletes during practice.'
    ],
    modifications: {
      beginner: 'Focus on each step individually, then combine.',
      advanced: 'Race simulation with time pressure and multiple transitions.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 90,
      unit: 'seconds transition time'
    },
    coaching: {
      setup: ['Organized transition area', 'All equipment ready'],
      execution: ['Smooth, efficient movements', 'No wasted motion', 'Safety first'],
      common_mistakes: ['Poor organization', 'Rushing and making errors', 'Forgetting helmet'],
      breathing: 'Stay calm and controlled during transition stress.'
    }
  },

  'transition-practice-T2': {
    id: 'transition-practice-T2',
    name: 'Bike-to-Run Transition (T2)',
    category: 'triathlon',
    equipment: ['bike', 'running-shoes', 'hat', 'transition-setup'],
    muscleGroups: ['legs', 'transition-skills'],
    difficulty: 2,
    instructions: [
      'Practice dismounting bike smoothly and safely.',
      'Rack bike quickly and efficiently.',
      'Change from bike shoes to running shoes rapidly.',
      'Put on running hat/visor and grab nutrition if needed.',
      'Begin running despite initial leg heaviness.',
      'Practice running on legs immediately after cycling.',
      'Include elastic laces or other time-saving devices.',
      'Work on smooth, efficient movements.'
    ],
    safetyNotes: [
      'Practice safe bike dismounting.',
      'Don\'t rush to the point of making errors.',
      'Be aware of other athletes in transition area.'
    ],
    modifications: {
      beginner: 'Focus on smooth, safe transitions over speed.',
      advanced: 'Race simulation with time goals and pressure.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'seconds transition time'
    },
    coaching: {
      setup: ['Organized transition setup', 'Efficient layout'],
      execution: ['Quick bike racking', 'Fast shoe change', 'Smooth exit to run'],
      common_mistakes: ['Poor bike racking', 'Slow shoe change', 'Forgetting race items'],
      breathing: 'Stay calm and efficient during transition.'
    }
  },

  'swim-to-bike-transition': {
    id: 'swim-to-bike-transition',
    name: 'Swim to Bike Transition Practice',
    category: 'triathlon',
    equipment: ['pool', 'bike', 'wetsuit', 'full-gear'],
    muscleGroups: ['full-body', 'adaptation'],
    difficulty: 3,
    instructions: [
      'Complete swim portion at race effort.',
      'Practice swim exit and wetsuit removal.',
      'Transition immediately to bike without extended rest.',
      'Begin cycling with appropriate effort level.',
      'Practice the neurological adaptation between sports.',
      'Include various swim distances before transition.',
      'Work on minimizing transition time.',
      'Practice race-day timing and nutrition.'
    ],
    safetyNotes: [
      'Practice in safe, controlled environment.',
      'Ensure proper safety gear for both sports.',
      'Start with shorter distances and build up.'
    ],
    modifications: {
      beginner: 'Shorter swim (400-800m) + short bike (10-20 min).',
      advanced: 'Race distance simulation with full race effort.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'minutes total (swim + transition + bike)'
    },
    coaching: {
      setup: ['Complete race setup', 'Safety measures in place'],
      execution: ['Race effort swim', 'Efficient transition', 'Smooth bike start'],
      common_mistakes: ['Too hard swim effort', 'Slow transition', 'Poor bike pacing'],
      breathing: 'Manage breathing through sport transition and adaptation.'
    }
  },

  'bike-to-run-transition': {
    id: 'bike-to-run-transition',
    name: 'Bike to Run Transition Practice',
    category: 'triathlon',
    equipment: ['bike', 'running-shoes', 'transition-setup'],
    muscleGroups: ['legs', 'adaptation'],
    difficulty: 3,
    instructions: [
      'Complete bike portion at race effort and cadence.',
      'Practice efficient bike-to-run transition.',
      'Begin running immediately despite heavy leg sensation.',
      'Adapt to running biomechanics after cycling.',
      'Practice various bike intensities before running.',
      'Work on quick, efficient transition skills.',
      'Include race pace running on fatigued legs.',
      'Build tolerance for the bike-run sensation.'
    ],
    safetyNotes: [
      'Expect initial discomfort and adaptation period.',
      'Practice safe bike dismounting and racking.',
      'Build brick training gradually.'
    ],
    modifications: {
      beginner: 'Short bike (20-30 min) + short run (10-15 min).',
      advanced: 'Long bike + race pace run simulation.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 75,
      unit: 'minutes total (bike + transition + run)'
    },
    coaching: {
      setup: ['Race effort bike plan', 'Efficient transition setup'],
      execution: ['Consistent bike effort', 'Quick transition', 'Adapt to run quickly'],
      common_mistakes: ['Too hard bike effort', 'Slow transition', 'Poor run adaptation'],
      breathing: 'Control breathing through transition and neuromuscular adaptation.'
    }
  },

  'open-water-swim-practice': {
    id: 'open-water-swim-practice',
    name: 'Open Water Swimming Practice',
    category: 'triathlon',
    equipment: ['open-water', 'wetsuit', 'safety-equipment'],
    muscleGroups: ['full-body', 'navigation', 'confidence'],
    difficulty: 4,
    instructions: [
      'Practice swimming in race-like open water conditions.',
      'Work on sighting, navigation, and straight-line swimming.',
      'Practice mass start simulations with other swimmers.',
      'Include various weather and water conditions.',
      'Practice wetsuit swimming and removal.',
      'Work on drafting techniques and positioning.',
      'Include race pace efforts in open water.',
      'Build comfort and confidence in open water environment.'
    ],
    safetyNotes: [
      'Never swim alone - use buddy system or guided sessions.',
      'Be aware of water conditions, currents, and hazards.',
      'Use proper safety equipment and protocols.',
      'Check local regulations and conditions.'
    ],
    modifications: {
      beginner: 'Calm conditions, close to shore, guided sessions.',
      advanced: 'Varied conditions, longer distances, race simulations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes open water'
    },
    coaching: {
      setup: ['Safety first - proper supervision', 'Check conditions'],
      execution: ['Regular sighting', 'Straight line swimming', 'Build confidence'],
      common_mistakes: ['Poor sighting technique', 'Swimming off course', 'Inadequate safety'],
      breathing: 'Bilateral breathing for navigation, adapt to conditions.'
    }
  },

  'triathlon-simulation': {
    id: 'triathlon-simulation',
    name: 'Full Triathlon Simulation',
    category: 'triathlon',
    equipment: ['full-race-equipment'],
    muscleGroups: ['full-body', 'race-preparation'],
    difficulty: 4,
    instructions: [
      'Complete swim, bike, run in sequence at race intensities.',
      'Practice all transitions and race-day procedures.',
      'Include race-day nutrition and hydration strategies.',
      'Wear race-day clothing and equipment.',
      'Practice pacing strategies for each discipline.',
      'Include mental preparation and race tactics.',
      'Simulate race-day timing and logistics.',
      'Build confidence for race-day execution.'
    ],
    safetyNotes: [
      'Requires excellent fitness base and recovery ability.',
      'Allow adequate recovery after simulation sessions.',
      'Practice in safe, controlled environments.'
    ],
    modifications: {
      beginner: 'Shorter distances, focus on completion over time.',
      advanced: 'Full race distances at race intensities.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'time',
      defaultValue: 180,
      unit: 'minutes total race time'
    },
    coaching: {
      setup: ['Complete race day preparation', 'All systems tested'],
      execution: ['Race-day strategies', 'Proper pacing', 'Efficient transitions'],
      common_mistakes: ['Going too hard early', 'Poor transitions', 'Inadequate fueling'],
      breathing: 'Race-specific breathing patterns for each discipline.'
    }
  },

  'sprint-distance-practice': {
    id: 'sprint-distance-practice',
    name: 'Sprint Distance Practice',
    category: 'triathlon',
    equipment: ['full-triathlon-gear'],
    muscleGroups: ['full-body', 'power', 'speed'],
    difficulty: 3,
    instructions: [
      'Practice 750m swim, 20K bike, 5K run sequence.',
      'Focus on high intensity and quick transitions.',
      'Work on sprint-specific pacing strategies.',
      'Practice race starts and positioning.',
      'Include anaerobic efforts and speed work.',
      'Perfect transition efficiency for short race.',
      'Practice mental preparation for high intensity.',
      'Work on race-specific nutrition timing.'
    ],
    safetyNotes: [
      'High intensity requires excellent warm-up and recovery.',
      'Build sprint intensity gradually.',
      'Allow adequate recovery between sessions.'
    ],
    modifications: {
      beginner: 'Focus on completion, moderate intensities.',
      advanced: 'Race simulation, competitive intensities.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 90,
      unit: 'minutes total time'
    },
    coaching: {
      setup: ['High intensity preparation', 'Quick transition setup'],
      execution: ['Fast pace all disciplines', 'Minimal transition time', 'Mental toughness'],
      common_mistakes: ['Poor swim start', 'Slow transitions', 'Inadequate intensity'],
      breathing: 'High intensity breathing management throughout.'
    }
  },

  'olympic-distance-practice': {
    id: 'olympic-distance-practice',
    name: 'Olympic Distance Practice',
    category: 'triathlon',
    equipment: ['full-triathlon-gear'],
    muscleGroups: ['full-body', 'endurance', 'power'],
    difficulty: 4,
    instructions: [
      'Practice 1.5K swim, 40K bike, 10K run sequence.',
      'Work on sustained effort and pacing strategies.',
      'Practice race-day nutrition and hydration.',
      'Include race-pace efforts in each discipline.',
      'Focus on consistent energy management.',
      'Practice mental strategies for longer effort.',
      'Include transition practice at race intensity.',
      'Build confidence for race-day execution.'
    ],
    safetyNotes: [
      'Requires solid endurance base and recovery ability.',
      'Monitor hydration and nutrition carefully.',
      'Allow adequate recovery after practice sessions.'
    ],
    modifications: {
      beginner: 'Reduced distances (75% of Olympic), focus on completion.',
      advanced: 'Full distance at race pace with race tactics.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'time',
      defaultValue: 180,
      unit: 'minutes total time'
    },
    coaching: {
      setup: ['Endurance preparation', 'Nutrition strategy'],
      execution: ['Sustained race pace', 'Energy management', 'Consistent effort'],
      common_mistakes: ['Poor pacing', 'Inadequate nutrition', 'Mental fatigue'],
      breathing: 'Sustainable breathing patterns for extended effort.'
    }
  },

  'half-ironman-practice': {
    id: 'half-ironman-practice',
    name: 'Half Ironman Practice',
    category: 'triathlon',
    equipment: ['full-triathlon-gear', 'extended-nutrition'],
    muscleGroups: ['full-body', 'endurance', 'mental-toughness'],
    difficulty: 4,
    instructions: [
      'Practice 1.9K swim, 90K bike, 21.1K run sequence.',
      'Focus on conservative pacing and energy management.',
      'Practice extensive nutrition and hydration strategies.',
      'Include mental preparation for long effort.',
      'Work on maintaining form and efficiency over time.',
      'Practice race-day logistics and timing.',
      'Include varied terrain and conditions.',
      'Build confidence for extended racing.'
    ],
    safetyNotes: [
      'Requires extensive endurance base and experience.',
      'Monitor nutrition, hydration, and heat management.',
      'Allow significant recovery after practice sessions.'
    ],
    modifications: {
      beginner: 'Reduced distances (60-75% of half IM), focus on completion.',
      advanced: 'Full distance race simulation with all logistics.'
    },
    equipment_alternatives: [],
    progressionRate: 0.005,
    metrics: {
      type: 'time',
      defaultValue: 360,
      unit: 'minutes total time'
    },
    coaching: {
      setup: ['Extensive preparation', 'Complete nutrition plan'],
      execution: ['Conservative early pacing', 'Consistent nutrition', 'Mental endurance'],
      common_mistakes: ['Going too hard early', 'Poor nutrition execution', 'Mental breakdown'],
      breathing: 'Efficient breathing patterns for very long effort.'
    }
  },

  'ironman-distance-practice': {
    id: 'ironman-distance-practice',
    name: 'Ironman Distance Practice',
    category: 'triathlon',
    equipment: ['full-triathlon-gear', 'comprehensive-nutrition'],
    muscleGroups: ['full-body', 'ultra-endurance', 'mental-fortitude'],
    difficulty: 4,
    instructions: [
      'Practice 3.8K swim, 180K bike, 42.2K run sequence.',
      'Focus on ultra-conservative pacing and energy conservation.',
      'Practice comprehensive nutrition and hydration strategies.',
      'Include extensive mental preparation and coping strategies.',
      'Work on maintaining efficiency over very long durations.',
      'Practice race-day logistics, timing, and contingencies.',
      'Include night training and varied conditions.',
      'Build mental and physical resilience for extreme distance.'
    ],
    safetyNotes: [
      'Requires years of endurance base and extensive experience.',
      'Comprehensive support and safety measures essential.',
      'Allow weeks of recovery after full distance practice.'
    ],
    modifications: {
      beginner: 'Individual sport focus, build toward partial simulations.',
      advanced: 'Full distance race simulation with complete race-day protocols.'
    },
    equipment_alternatives: [],
    progressionRate: 0.002,
    metrics: {
      type: 'time',
      defaultValue: 720,
      unit: 'minutes total time'
    },
    coaching: {
      setup: ['Complete race-day preparation', 'Comprehensive support'],
      execution: ['Ultra-conservative pacing', 'Systematic nutrition', 'Mental resilience'],
      common_mistakes: ['Any early aggression', 'Nutrition failures', 'Mental breakdowns'],
      breathing: 'Ultra-efficient breathing for extreme duration.'
    }
  }
}; 