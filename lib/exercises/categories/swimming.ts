import { Exercise } from '../types';

export const SWIMMING_EXERCISES: Record<string, Exercise> = {
  'catch-up-drill': {
    id: 'catch-up-drill',
    name: 'Catch-Up Drill',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['shoulders', 'arms', 'core'],
    difficulty: 2,
    instructions: [
      'Start with both arms extended in front in streamlined position.',
      'Pull with one arm while keeping the other extended.',
      'Complete full stroke cycle with one arm.',
      'Touch hands together in front before starting next stroke.',
      'Alternate arms, maintaining catch-up timing.',
      'Focus on high elbow catch and complete follow-through.',
      'Maintain steady kick throughout drill.'
    ],
    safetyNotes: [
      'Don\'t rush the timing.',
      'Maintain proper shoulder mobility.',
      'Stop if experiencing shoulder discomfort.'
    ],
    modifications: {
      beginner: 'Use kickboard between hands for support. Take extra pause between strokes.',
      advanced: 'Increase stroke rate while maintaining technique. Add breathing pattern variations.'
    },
    equipment_alternatives: ['kickboard'],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 100,
      unit: 'meters'
    },
    coaching: {
      setup: ['Start in streamlined position', 'Both arms extended forward'],
      execution: ['One arm pulls completely while other waits', 'Touch hands before next stroke', 'Focus on catch and pull technique'],
      common_mistakes: ['Starting next stroke too early', 'Poor catch position', 'Dropping elbow during pull'],
      breathing: 'Breathe during the stroking arm\'s recovery phase.'
    }
  },

  'fingertip-drag-drill': {
    id: 'fingertip-drag-drill',
    name: 'Fingertip Drag Drill',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['shoulders', 'arms', 'core'],
    difficulty: 2,
    instructions: [
      'Swim freestyle with normal underwater pull.',
      'During recovery phase, drag fingertips along water surface.',
      'Keep elbow high while fingertips trail in water.',
      'Focus on proper elbow position and rotation.',
      'Maintain normal kick and breathing pattern.',
      'Ensure hand enters water fingertips first.',
      'Practice with both arms maintaining drill technique.'
    ],
    safetyNotes: [
      'Keep elbow relaxed to avoid strain.',
      'Don\'t force the fingertip drag if causing discomfort.',
      'Maintain natural stroke rhythm.'
    ],
    modifications: {
      beginner: 'Practice with one arm at a time. Use kickboard for support.',
      advanced: 'Combine with bilateral breathing patterns. Increase stroke rate while maintaining form.'
    },
    equipment_alternatives: ['kickboard'],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 50,
      unit: 'meters'
    },
    coaching: {
      setup: ['Normal freestyle starting position', 'Focus on recovery phase'],
      execution: ['High elbow recovery', 'Fingertips lightly touch water surface', 'Smooth entry after drag'],
      common_mistakes: ['Low elbow during recovery', 'Forcing fingertips too deep', 'Disrupting stroke rhythm'],
      breathing: 'Maintain normal breathing pattern throughout the drill.'
    }
  },

  'high-elbow-catch-drill': {
    id: 'high-elbow-catch-drill',
    name: 'High Elbow Catch Drill',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['shoulders', 'lats', 'arms', 'core'],
    difficulty: 3,
    instructions: [
      'Start with arm extended in front of body underwater.',
      'Begin catch by bending elbow while keeping it high.',
      'Feel water pressure against palm and forearm.',
      'Pull with high elbow position through to hip.',
      'Focus on vertical forearm position during pull.',
      'Practice one arm at a time initially.',
      'Integrate into full stroke when technique is solid.'
    ],
    safetyNotes: [
      'Build up gradually to avoid shoulder strain.',
      'Don\'t force the high elbow if causing pain.',
      'Focus on feeling water pressure, not force.'
    ],
    modifications: {
      beginner: 'Practice stationary in pool holding wall. Use pullbuoy for leg support.',
      advanced: 'Add paddle resistance. Combine with sprint intervals.'
    },
    equipment_alternatives: ['pullbuoy', 'paddles'],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 20,
      unit: 'catch repetitions per arm'
    },
    coaching: {
      setup: ['Arm extended underwater', 'Hand slightly below surface'],
      execution: ['Elbow stays high during catch', 'Feel water pressure on palm and forearm', 'Pull straight back toward hip'],
      common_mistakes: ['Dropping elbow during catch', 'Pulling with straight arm', 'Rushing the catch phase'],
      breathing: 'Focus on technique over breathing initially, add breathing as drill improves.'
    }
  },

  'bilateral-breathing-drill': {
    id: 'bilateral-breathing-drill',
    name: 'Bilateral Breathing Drill',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['core', 'neck', 'full_body'],
    difficulty: 2,
    instructions: [
      'Swim freestyle breathing every 3 strokes (left-right-left pattern).',
      'Maintain same stroke technique on both sides.',
      'Rotate head and body as one unit when breathing.',
      'Keep one goggle in water during breath.',
      'Practice 5-stroke breathing for longer intervals.',
      'Focus on symmetrical stroke development.',
      'Gradually increase distance while maintaining pattern.'
    ],
    safetyNotes: [
      'Don\'t hold breath underwater between breathing strokes.',
      'Start with shorter intervals if getting winded.',
      'Maintain stroke rhythm even when learning new pattern.'
    ],
    modifications: {
      beginner: 'Start with breathing every 2 strokes on alternating sides. Use kickboard for support.',
      advanced: 'Practice 5, 7, or 9 stroke breathing patterns. Add hypoxic training sets.'
    },
    equipment_alternatives: ['kickboard'],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 200,
      unit: 'meters'
    },
    coaching: {
      setup: ['Start with comfortable freestyle stroke', 'Plan breathing pattern in advance'],
      execution: ['Breathe alternating sides every 3 strokes', 'Maintain stroke symmetry', 'Smooth head rotation'],
      common_mistakes: ['Favoring one side over the other', 'Lifting head too high', 'Disrupting stroke rhythm when changing sides'],
      breathing: 'Exhale continuously underwater, quick inhale during rotation. Alternate breathing sides consistently.'
    }
  },

  'streamline-drill': {
    id: 'streamline-drill',
    name: 'Streamline Drill',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['core', 'shoulders', 'full_body'],
    difficulty: 1,
    instructions: [
      'Push off wall with arms overhead, one hand over the other.',
      'Squeeze arms against head, covering ears.',
      'Keep head neutral, looking down.',
      'Engage core to maintain straight body line.',
      'Hold position as long as comfortable underwater.',
      'Glide without kicking to feel water resistance.',
      'Practice push-offs from different depths.'
    ],
    safetyNotes: [
      'Don\'t hold breath longer than comfortable.',
      'Push off feet first, not head first.',
      'Be aware of pool depth and other swimmers.'
    ],
    modifications: {
      beginner: 'Practice position standing in shallow water first. Shorter glide distances.',
      advanced: 'Add kicks while maintaining streamline. Practice from diving blocks.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 10,
      unit: 'meters glide distance'
    },
    coaching: {
      setup: ['Position at pool wall', 'Arms overhead, hands stacked'],
      execution: ['Strong push off from wall', 'Maintain tight body position', 'Head neutral between arms'],
      common_mistakes: ['Arms too wide', 'Head position too high or low', 'Loose core engagement'],
      breathing: 'Take deep breath before push off, surface when needed.'
    }
  },

  'flip-turn-practice': {
    id: 'flip-turn-practice',
    name: 'Flip Turn Practice',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['core', 'legs', 'full_body'],
    difficulty: 3,
    instructions: [
      'Approach wall at normal swimming speed.',
      'Begin somersault when arm reaches toward wall.',
      'Tuck chin to chest and roll forward.',
      'Plant feet on wall in streamlined position.',
      'Push off explosively in streamlined position.',
      'Begin swimming stroke after gliding underwater.',
      'Practice timing and positioning repeatedly.'
    ],
    safetyNotes: [
      'Practice in deep enough water to avoid hitting bottom.',
      'Don\'t attempt if experiencing dizziness.',
      'Be aware of other swimmers when practicing.'
    ],
    modifications: {
      beginner: 'Practice somersaults in open water first. Use hand touch turns initially.',
      advanced: 'Focus on speed and efficiency. Practice with different approach speeds.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'flip turns'
    },
    coaching: {
      setup: ['Approach wall at steady pace', 'Time the flip as hand reaches forward'],
      execution: ['Quick somersault with tight tuck', 'Feet plant firmly on wall', 'Explosive push off in streamline'],
      common_mistakes: ['Flipping too early or too late', 'Loose tuck during somersault', 'Poor streamline off the wall'],
      breathing: 'Take breath before turn, hold through flip and push off.'
    }
  },

  'open-turn-practice': {
    id: 'open-turn-practice',
    name: 'Open Turn Practice',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['arms', 'core', 'legs'],
    difficulty: 2,
    instructions: [
      'Approach wall with normal stroke pattern.',
      'Touch wall with fingertips of lead hand.',
      'Immediately begin turning body toward breathing side.',
      'Bring knees toward chest while turning.',
      'Plant feet on wall beneath body.',
      'Push off in streamlined position.',
      'Surface and begin next stroke cycle.'
    ],
    safetyNotes: [
      'Ensure solid wall touch before turning.',
      'Don\'t push off too deep to avoid hitting pool bottom.',
      'Control turning speed to avoid injury.'
    ],
    modifications: {
      beginner: 'Practice wall touches first. Take extra time to set up push off.',
      advanced: 'Focus on minimizing turn time. Practice with sprint pace approaches.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'open turns'
    },
    coaching: {
      setup: ['Approach wall with normal stroke', 'Prepare for solid wall touch'],
      execution: ['Quick hand touch', 'Fast body rotation', 'Efficient push off position'],
      common_mistakes: ['Weak wall touch', 'Slow body rotation', 'Poor push off angle'],
      breathing: 'Breathe during approach, hold breath through turn and push off.'
    }
  },

  'swim-distance-set': {
    id: 'swim-distance-set',
    name: 'Swim Distance Set',
    category: 'swimming',
    equipment: ['pool', 'kickboard', 'pullbuoy'],
    muscleGroups: ['full-body', 'cardiovascular', 'endurance'],
    difficulty: 3,
    instructions: [
      'Warm up with easy swimming and technique drills.',
      'Swim continuous distance at sustainable pace.',
      'Focus on consistent stroke rate and technique.',
      'Common distances: 800m, 1500m, 3000m+.',
      'Practice bilateral breathing and sighting skills.',
      'Mental focus on rhythm and relaxation.',
      'Can break into smaller sets with brief rest.',
      'Cool down with easy swimming and stretching.'
    ],
    safetyNotes: [
      'Build distance gradually over time.',
      'Monitor stroke technique for efficiency.',
      'Take breaks if experiencing shoulder fatigue.'
    ],
    modifications: {
      beginner: 'Start with 400-800m continuous. Include rest as needed.',
      advanced: '1500m+ continuous. Practice race pace and tactics.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'distance',
      defaultValue: 1000,
      unit: 'meters'
    },
    coaching: {
      setup: ['Plan distance and pace', 'Focus on technique'],
      execution: ['Sustainable pace', 'Consistent technique', 'Mental focus'],
      common_mistakes: ['Starting too fast', 'Technique deterioration', 'Poor pacing'],
      breathing: 'Consistent breathing pattern throughout distance.'
    }
  },

  'swim-tempo-set': {
    id: 'swim-tempo-set',
    name: 'Swim Tempo Set',
    category: 'swimming',
    equipment: ['pool', 'tempo-trainer', 'pace-clock'],
    muscleGroups: ['full-body', 'cardiovascular', 'technique'],
    difficulty: 3,
    instructions: [
      'Warm up with technique-focused swimming.',
      'Set tempo trainer to target stroke rate.',
      'Swim at moderately hard pace (tempo effort).',
      'Focus on stroke efficiency at prescribed rate.',
      'Maintain consistent distance per stroke.',
      'Common set: 6 x 200m or 4 x 400m at tempo.',
      'Take moderate rest between repeats (15-30 seconds).',
      'Cool down with easy swimming.'
    ],
    safetyNotes: [
      'Don\'t sacrifice technique for tempo.',
      'Build up tempo training gradually.',
      'Monitor stroke efficiency throughout set.'
    ],
    modifications: {
      beginner: 'Lower stroke rate, shorter distances. Focus on consistency.',
      advanced: 'Higher stroke rates, longer distances. Minimal rest.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'sets',
      defaultValue: 5,
      unit: 'tempo repeats'
    },
    coaching: {
      setup: ['Set appropriate stroke rate', 'Plan distance and rest'],
      execution: ['Consistent stroke rate', 'Maintain efficiency', 'Controlled effort'],
      common_mistakes: ['Tempo too high for fitness', 'Efficiency loss', 'Poor distance per stroke'],
      breathing: 'Consistent breathing pattern matching stroke tempo.'
    }
  },

  'swim-pyramid-set': {
    id: 'swim-pyramid-set',
    name: 'Swim Pyramid Set',
    category: 'swimming',
    equipment: ['pool', 'pace-clock'],
    muscleGroups: ['full-body', 'cardiovascular', 'power'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly with progressive swimming.',
      'Structure swim distances in pyramid format.',
      'Example: 100-200-300-400-300-200-100m.',
      'Descend time as distance increases (negative split).',
      'Take rest proportional to swim distance.',
      'Focus on building speed through the pyramid.',
      'Maintain technique as intensity increases.',
      'Cool down with easy swimming.'
    ],
    safetyNotes: [
      'Requires good swimming fitness base.',
      'Monitor technique as fatigue increases.',
      'Adjust pace if unable to complete pyramid.'
    ],
    modifications: {
      beginner: 'Smaller pyramid (50-100-150-100-50m). Longer rest.',
      advanced: 'Larger pyramid or multiple sets. Faster paces.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'sets',
      defaultValue: 1,
      unit: 'pyramid sequence'
    },
    coaching: {
      setup: ['Plan pyramid structure', 'Set pace targets'],
      execution: ['Progressive effort increase', 'Maintain technique', 'Consistent improvement'],
      common_mistakes: ['Going too fast early', 'Poor pacing strategy', 'Technique breakdown'],
      breathing: 'Controlled breathing adjusting to increasing intensity.'
    }
  },

  'open-water-swim': {
    id: 'open-water-swim',
    name: 'Open Water Swim',
    category: 'swimming',
    equipment: ['wetsuit', 'goggles', 'safety-equipment'],
    muscleGroups: ['full-body', 'navigation', 'balance'],
    difficulty: 4,
    instructions: [
      'Enter water gradually to acclimate to temperature.',
      'Practice sighting every 6-10 strokes initially.',
      'Swim straight lines using landmarks for navigation.',
      'Adjust stroke for waves and current conditions.',
      'Practice drafting behind other swimmers when appropriate.',
      'Focus on rhythm and relaxation in variable conditions.',
      'Include practice exits and entries from water.',
      'Build confidence in open water environment.'
    ],
    safetyNotes: [
      'Never swim alone - use buddy system or supervised sessions.',
      'Be aware of water conditions, currents, and marine life.',
      'Wear bright swim cap and consider safety buoy.',
      'Check local regulations and hazards.'
    ],
    modifications: {
      beginner: 'Stay close to shore, calm conditions. Use guided sessions.',
      advanced: 'Longer distances, varied conditions. Practice race scenarios.'
    },
    equipment_alternatives: [],
    progressionRate: 0.06,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Safety first - buddy system', 'Check conditions'],
      execution: ['Regular sighting', 'Adapt to conditions', 'Relaxed swimming'],
      common_mistakes: ['Poor sighting frequency', 'Fighting conditions', 'Inadequate safety measures'],
      breathing: 'Bilateral breathing for navigation. Adapt to wave patterns.'
    }
  },

  'pool-swim-continuous': {
    id: 'pool-swim-continuous',
    name: 'Pool Swim Continuous',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['full-body', 'cardiovascular', 'endurance'],
    difficulty: 2,
    instructions: [
      'Warm up with easy swimming and drills.',
      'Swim continuously at sustainable aerobic pace.',
      'Focus on stroke efficiency and technique.',
      'Maintain consistent stroke rate throughout.',
      'Practice breathing patterns and rhythm.',
      'Mental focus on relaxation and flow.',
      'Can vary strokes for active recovery.',
      'Build duration gradually over time.'
    ],
    safetyNotes: [
      'Monitor stroke technique for efficiency.',
      'Take rest if experiencing unusual fatigue.',
      'Build distance gradually to prevent overuse.'
    ],
    modifications: {
      beginner: 'Start with 10-20 minutes continuous. Include rest as needed.',
      advanced: '45+ minutes continuous. Include pace changes.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Sustainable pace planned', 'Focus on technique'],
      execution: ['Consistent rhythm', 'Efficient technique', 'Relaxed effort'],
      common_mistakes: ['Swimming too fast', 'Technique deterioration', 'Mental fatigue'],
      breathing: 'Consistent, relaxed breathing pattern throughout.'
    }
  },

  'swim-recovery-swim': {
    id: 'swim-recovery-swim',
    name: 'Swim Recovery Swim',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['full-body', 'active-recovery'],
    difficulty: 1,
    instructions: [
      'Swim at very easy, comfortable pace.',
      'Focus on technique and form over intensity.',
      'Include variety of strokes for active recovery.',
      'Practice drills at slow, controlled pace.',
      'Duration typically 20-40 minutes.',
      'Should feel refreshed after completion.',
      'Perfect time to work on weak technique areas.',
      'Include gentle stretching in water.'
    ],
    safetyNotes: [
      'No pressure to maintain pace or distance.',
      'Stop if feeling overly fatigued.',
      'Focus on enjoyment and gentle movement.'
    ],
    modifications: {
      beginner: '15-20 minutes very easy swimming.',
      advanced: 'Can be longer but always at recovery intensity.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Day after hard training', 'No intensity pressure'],
      execution: ['Very gentle effort', 'Focus on technique', 'Variety of movements'],
      common_mistakes: ['Swimming too hard', 'Making it a workout', 'Ignoring fatigue signals'],
      breathing: 'Easy, natural breathing throughout.'
    }
  },

  'aqua-jogging': {
    id: 'aqua-jogging',
    name: 'Aqua Jogging',
    category: 'swimming',
    equipment: ['pool', 'flotation-belt'],
    muscleGroups: ['legs', 'core', 'cardiovascular'],
    difficulty: 2,
    instructions: [
      'Wear flotation belt in deep water section.',
      'Mimic running motion while suspended in water.',
      'Maintain upright posture with slight forward lean.',
      'Drive knees up and push back with legs.',
      'Use arms in opposition like normal running.',
      'Can include intervals and easy recovery periods.',
      'Focus on cadence similar to land running.',
      'Excellent for injury recovery or cross-training.'
    ],
    safetyNotes: [
      'Ensure flotation belt fits properly.',
      'Stay in designated deep water areas.',
      'Monitor intensity - can be more challenging than expected.'
    ],
    modifications: {
      beginner: 'Shorter sessions, focus on movement pattern. Use pool edge if needed.',
      advanced: 'Longer sessions, include interval training and varied movements.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Proper flotation belt fit', 'Deep water area'],
      execution: ['Running motion in water', 'Upright posture', 'Natural cadence'],
      common_mistakes: ['Leaning too far forward', 'Arms moving incorrectly', 'Too fast cadence'],
      breathing: 'Natural breathing, adjust for water resistance.'
    }
  },

  'swim-distance-freestyle': {
    id: 'swim-distance-freestyle',
    name: 'Distance Freestyle Swimming',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['full-body', 'cardiovascular', 'endurance'],
    difficulty: 3,
    instructions: [
      'Warm up with easy swimming and technique drills.',
      'Swim continuous freestyle at aerobic pace.',
      'Focus on efficient stroke technique and breathing.',
      'Maintain consistent stroke rate throughout distance.',
      'Practice bilateral breathing every 3-5 strokes.',
      'Build distance gradually over training cycles.',
      'Mental focus on rhythm and relaxation.',
      'Cool down with easy swimming and stretching.'
    ],
    safetyNotes: [
      'Build distance gradually to prevent overuse injuries.',
      'Monitor stroke technique for efficiency.',
      'Take rest breaks if experiencing unusual fatigue.'
    ],
    modifications: {
      beginner: 'Start with 400-800m continuous. Include rest as needed.',
      advanced: '1500m+ continuous. Practice negative splitting and pace control.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'distance',
      defaultValue: 1000,
      unit: 'meters'
    },
    coaching: {
      setup: ['Plan target distance', 'Focus on sustainable pace'],
      execution: ['Consistent technique', 'Rhythmic breathing', 'Steady effort'],
      common_mistakes: ['Starting too fast', 'Stroke technique deterioration', 'Poor breathing rhythm'],
      breathing: 'Bilateral breathing pattern every 3-5 strokes for balance.'
    }
  },

  'swim-interval-freestyle': {
    id: 'swim-interval-freestyle',
    name: 'Freestyle Interval Training',
    category: 'swimming',
    equipment: ['pool', 'pace-clock'],
    muscleGroups: ['full-body', 'cardiovascular', 'speed'],
    difficulty: 4,
    instructions: [
      'Warm up thoroughly with easy swimming and build sets.',
      'Swim freestyle intervals at prescribed pace (85-95% effort).',
      'Common sets: 8x100m, 5x200m, 4x400m on specific send-offs.',
      'Focus on consistent splits across all intervals.',
      'Maintain stroke technique even when fatigued.',
      'Take prescribed rest between intervals (10-60 seconds).',
      'Use pace clock to monitor send-off times.',
      'Cool down with easy swimming.'
    ],
    safetyNotes: [
      'Ensure adequate warm-up before high intensity.',
      'Monitor stroke technique to prevent shoulder strain.',
      'Adjust intervals if unable to maintain target times.'
    ],
    modifications: {
      beginner: 'Longer rest intervals, moderate pace targets.',
      advanced: 'Shorter rest, faster pace targets, longer intervals.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'sets',
      defaultValue: 8,
      unit: 'intervals'
    },
    coaching: {
      setup: ['Clear pace targets', 'Understand send-off times'],
      execution: ['Consistent pacing', 'Maintain technique', 'Hit target times'],
      common_mistakes: ['Going out too fast', 'Poor pacing strategy', 'Technique breakdown'],
      breathing: 'Controlled breathing pattern, adjust for intensity.'
    }
  },

  'swim-tempo-freestyle': {
    id: 'swim-tempo-freestyle',
    name: 'Freestyle Tempo Training',
    category: 'swimming',
    equipment: ['pool', 'tempo-trainer'],
    muscleGroups: ['full-body', 'technique', 'endurance'],
    difficulty: 3,
    instructions: [
      'Set tempo trainer to target stroke rate (strokes per minute).',
      'Swim freestyle maintaining prescribed stroke rate.',
      'Focus on distance per stroke while hitting tempo.',
      'Common tempo ranges: 60-80 strokes per minute.',
      'Practice different tempos for various race distances.',
      'Maintain efficient catch and pull at all stroke rates.',
      'Build ability to change tempo during swims.',
      'Monitor stroke count per length.'
    ],
    safetyNotes: [
      'Don\'t sacrifice technique for tempo.',
      'Build tempo training gradually.',
      'Stop if experiencing shoulder discomfort.'
    ],
    modifications: {
      beginner: 'Start with lower stroke rates (60-65 SPM). Focus on consistency.',
      advanced: 'Higher stroke rates (75-80+ SPM). Include tempo changes within sets.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes at tempo'
    },
    coaching: {
      setup: ['Set appropriate stroke rate', 'Understand tempo trainer'],
      execution: ['Consistent stroke rate', 'Maintain efficiency', 'Monitor distance per stroke'],
      common_mistakes: ['Tempo too high for technique', 'Losing distance per stroke', 'Poor rhythm'],
      breathing: 'Breathing pattern that supports stroke rate rhythm.'
    }
  },

  'swim-backstroke-technique': {
    id: 'swim-backstroke-technique',
    name: 'Backstroke Technique Training',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['back', 'shoulders', 'core', 'legs'],
    difficulty: 3,
    instructions: [
      'Start in streamlined position on back.',
      'Initiate catch with high elbow and fingertip entry.',
      'Rotate body with each stroke, driven from core.',
      'Maintain steady flutter kick with pointed toes.',
      'Keep head stable, eyes looking up.',
      'Practice backstroke starts and turns.',
      'Focus on continuous arm stroke rhythm.',
      'Use backstroke flags for turn timing.'
    ],
    safetyNotes: [
      'Be aware of pool walls and other swimmers.',
      'Don\'t strain neck by lifting head.',
      'Practice open turns before attempting flip turns.'
    ],
    modifications: {
      beginner: 'Focus on body position and basic stroke. Use kickboard on back.',
      advanced: 'Perfect turn technique and underwater dolphin kick.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'distance',
      defaultValue: 400,
      unit: 'meters technique focus'
    },
    coaching: {
      setup: ['Clear pool lane', 'Understand backstroke flags'],
      execution: ['High elbow catch', 'Body rotation', 'Steady head position'],
      common_mistakes: ['Lifting head', 'Poor body rotation', 'Inconsistent kick'],
      breathing: 'Breathe freely since face is above water.'
    }
  },

  'swim-breaststroke-technique': {
    id: 'swim-breaststroke-technique',
    name: 'Breaststroke Technique Training',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['chest', 'arms', 'legs', 'core'],
    difficulty: 3,
    instructions: [
      'Start in streamlined position.',
      'Execute pull with hands sweeping out and back.',
      'Lift head and shoulders for breathing during pull.',
      'Perform frog kick with heels to glutes, then snap together.',
      'Glide in streamlined position between strokes.',
      'Coordinate timing: pull, breathe, kick, glide.',
      'Practice legal breaststroke turns (two-hand touch).',
      'Focus on powerful kick for forward propulsion.'
    ],
    safetyNotes: [
      'Learn proper kick technique to avoid knee strain.',
      'Don\'t hold breath underwater during glide phase.',
      'Build intensity gradually to prevent muscle strain.'
    ],
    modifications: {
      beginner: 'Practice kick and pull separately. Focus on timing coordination.',
      advanced: 'Work on underwater pullouts and race pace timing.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'distance',
      defaultValue: 300,
      unit: 'meters technique focus'
    },
    coaching: {
      setup: ['Focus on stroke timing', 'Practice individual components'],
      execution: ['Coordinated pull-breathe-kick-glide', 'Powerful kick', 'Streamlined glide'],
      common_mistakes: ['Poor timing', 'Weak kick', 'Lifting head too high'],
      breathing: 'Breathe during every stroke cycle, head forward.'
    }
  },

  'swim-butterfly-technique': {
    id: 'swim-butterfly-technique',
    name: 'Butterfly Technique Training',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['shoulders', 'core', 'full-body', 'power'],
    difficulty: 4,
    instructions: [
      'Start with dolphin kick body wave motion.',
      'Execute simultaneous arm stroke with high elbow catch.',
      'Coordinate two kicks per arm cycle (down-up pattern).',
      'Breathe forward during arm recovery, head down during catch.',
      'Maintain undulating body motion throughout stroke.',
      'Practice butterfly turns with two-hand wall touch.',
      'Focus on rhythm and timing over speed initially.',
      'Build endurance gradually due to high energy demands.'
    ],
    safetyNotes: [
      'High intensity stroke - build gradually.',
      'Stop if experiencing shoulder pain.',
      'Requires good shoulder flexibility and strength.'
    ],
    modifications: {
      beginner: 'Practice dolphin kick and arm stroke separately. Use fins for assistance.',
      advanced: 'Focus on sprint butterfly and underwaters.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 200,
      unit: 'meters technique focus'
    },
    coaching: {
      setup: ['Master dolphin kick first', 'Focus on rhythm'],
      execution: ['Body wave motion', 'Simultaneous arm stroke', 'Coordinated breathing'],
      common_mistakes: ['Poor kick timing', 'Lifting head too high', 'Arm stroke timing off'],
      breathing: 'Breathe every stroke or every other stroke cycle.'
    }
  },

  'swim-individual-medley': {
    id: 'swim-individual-medley',
    name: 'Individual Medley Training',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['full-body', 'cardiovascular', 'technique'],
    difficulty: 4,
    instructions: [
      'Swim all four strokes in order: butterfly, backstroke, breaststroke, freestyle.',
      'Practice proper stroke transitions and turns.',
      'Maintain stroke technique across all four strokes.',
      'Work on pacing strategy for each stroke segment.',
      'Practice IM starts and stroke-specific turns.',
      'Build endurance for longer IM distances.',
      'Focus on stroke efficiency in fatigue states.',
      'Include IM-specific drill sets.'
    ],
    safetyNotes: [
      'Requires proficiency in all four competitive strokes.',
      'High physical and mental demands.',
      'Build IM distance gradually.'
    ],
    modifications: {
      beginner: 'Short IM (100m). Focus on legal stroke technique and transitions.',
      advanced: 'Longer IM distances (400m+). Race pace and strategy work.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 200,
      unit: 'meters IM'
    },
    coaching: {
      setup: ['Master all four strokes', 'Understand IM rules'],
      execution: ['Legal stroke techniques', 'Smooth transitions', 'Consistent pacing'],
      common_mistakes: ['Stroke violations', 'Poor transitions', 'Uneven pacing'],
      breathing: 'Stroke-specific breathing patterns for each segment.'
    }
  },

  'swim-pull-sets': {
    id: 'swim-pull-sets',
    name: 'Swimming Pull Sets',
    category: 'swimming',
    equipment: ['pool', 'pull-buoy', 'paddles'],
    muscleGroups: ['arms', 'shoulders', 'back', 'core'],
    difficulty: 3,
    instructions: [
      'Use pull buoy between legs to isolate upper body.',
      'Focus on catch, pull, and recovery arm movements.',
      'Maintain body position and rotation without kick.',
      'Practice high elbow catch and powerful pull-through.',
      'Add paddles for increased resistance (advanced).',
      'Include various stroke rates and intensities.',
      'Focus on distance per stroke efficiency.',
      'Cool down with easy swimming without equipment.'
    ],
    safetyNotes: [
      'Build pull set volume gradually.',
      'Monitor shoulder fatigue and stop if pain occurs.',
      'Don\'t rely solely on pull sets - maintain full stroke training.'
    ],
    modifications: {
      beginner: 'Shorter pull sets (200-400m). Focus on technique over intensity.',
      advanced: 'Longer sets (800m+). Add paddles and varied intensities.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'distance',
      defaultValue: 600,
      unit: 'meters pulling'
    },
    coaching: {
      setup: ['Proper pull buoy placement', 'Focus on upper body'],
      execution: ['High elbow catch', 'Powerful pull-through', 'Maintain body position'],
      common_mistakes: ['Poor body position', 'Rushing stroke rate', 'Inadequate catch'],
      breathing: 'Maintain normal breathing pattern without kick interference.'
    }
  },

  'swim-kick-sets': {
    id: 'swim-kick-sets',
    name: 'Swimming Kick Sets',
    category: 'swimming',
    equipment: ['pool', 'kickboard', 'fins'],
    muscleGroups: ['legs', 'core', 'hip-flexors'],
    difficulty: 3,
    instructions: [
      'Use kickboard to isolate leg movement.',
      'Practice freestyle flutter kick with straight legs.',
      'Kick from hips, not knees, with relaxed ankles.',
      'Maintain consistent kick rate and depth.',
      'Include other stroke kicks: backstroke, breaststroke, butterfly.',
      'Add fins for increased resistance and speed (advanced).',
      'Focus on kick efficiency and propulsion.',
      'Include vertical kicking for core strength.'
    ],
    safetyNotes: [
      'Build kick set intensity gradually.',
      'Stop if experiencing hip flexor or ankle cramping.',
      'Maintain proper body position throughout.'
    ],
    modifications: {
      beginner: 'Shorter kick sets (100-200m). Focus on technique over speed.',
      advanced: 'Longer sets (400m+). Add fins and vertical kicking.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'distance',
      defaultValue: 400,
      unit: 'meters kicking'
    },
    coaching: {
      setup: ['Proper kickboard position', 'Focus on leg movement'],
      execution: ['Kick from hips', 'Straight legs', 'Consistent rate'],
      common_mistakes: ['Kicking from knees', 'Too deep kick', 'Irregular rhythm'],
      breathing: 'Natural breathing, head can rest comfortably on arms.'
    }
  },

  'swim-bilateral-breathing': {
    id: 'swim-bilateral-breathing',
    name: 'Bilateral Breathing Training',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['core', 'neck', 'symmetry'],
    difficulty: 2,
    instructions: [
      'Practice breathing to both left and right sides equally.',
      'Start with breathing every 3 strokes (left-right-left pattern).',
      'Focus on symmetrical stroke technique on both sides.',
      'Rotate head and body as one unit during breathing.',
      'Practice 5-stroke and 7-stroke breathing patterns.',
      'Include hypoxic training sets gradually.',
      'Work on sighting while maintaining bilateral breathing.',
      'Build comfort and efficiency with both-sided breathing.'
    ],
    safetyNotes: [
      'Build hypoxic training gradually.',
      'Don\'t hold breath excessively underwater.',
      'Stop if feeling dizzy or overly winded.'
    ],
    modifications: {
      beginner: 'Start with every 2 strokes alternating sides. Build to 3-stroke pattern.',
      advanced: 'Include 5, 7, 9 stroke patterns. Add hypoxic training.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 500,
      unit: 'meters bilateral breathing'
    },
    coaching: {
      setup: ['Start with comfortable pace', 'Focus on symmetry'],
      execution: ['Equal breathing both sides', 'Maintain stroke technique', 'Smooth head rotation'],
      common_mistakes: ['Favoring one side', 'Disrupting stroke rhythm', 'Lifting head too high'],
      breathing: 'Exhale continuously underwater, quick inhale alternating sides.'
    }
  },

  'swim-sighting-practice': {
    id: 'swim-sighting-practice',
    name: 'Swimming Sighting Practice',
    category: 'swimming',
    equipment: ['pool', 'visual-targets'],
    muscleGroups: ['neck', 'core', 'navigation'],
    difficulty: 3,
    instructions: [
      'Set visual targets at far end of pool for sighting practice.',
      'Swim with eyes closed for 6-10 strokes between sights.',
      'Practice lifting head minimally during stroke for quick look.',
      'Integrate sighting with normal breathing pattern when possible.',
      'Vary sighting frequency based on conditions (every 6-12 strokes).',
      'Practice alligator eyes technique - minimal head lift.',
      'Include navigation around obstacles or lane changes.',
      'Build confidence in directional swimming.'
    ],
    safetyNotes: [
      'Practice in controlled pool environment first.',
      'Don\'t strain neck with excessive head lifting.',
      'Be aware of other swimmers when changing direction.'
    ],
    modifications: {
      beginner: 'Frequent sighting (every 4-6 strokes). Use larger targets.',
      advanced: 'Less frequent sighting. Practice in varied light conditions.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 400,
      unit: 'meters with sighting'
    },
    coaching: {
      setup: ['Clear visual targets', 'Practice minimal head lift'],
      execution: ['Quick sighting glances', 'Maintain stroke rhythm', 'Navigate effectively'],
      common_mistakes: ['Lifting head too high', 'Sighting too frequently', 'Disrupting stroke'],
      breathing: 'Coordinate sighting with breathing when possible.'
    }
  },

  'swim-wetsuit-practice': {
    id: 'swim-wetsuit-practice',
    name: 'Wetsuit Swimming Practice',
    category: 'swimming',
    equipment: ['pool', 'wetsuit', 'anti-chafe-cream'],
    muscleGroups: ['full-body', 'adaptation'],
    difficulty: 3,
    instructions: [
      'Apply anti-chafe cream to neck, arms, and ankles.',
      'Enter water gradually to allow wetsuit to flood and warm.',
      'Practice swimming technique with altered buoyancy.',
      'Adjust stroke rate for increased buoyancy and restriction.',
      'Practice wetsuit removal techniques for transitions.',
      'Include sighting practice while wearing wetsuit.',
      'Build comfort with different body position in water.',
      'Practice various swimming intensities in wetsuit.'
    ],
    safetyNotes: [
      'Ensure proper wetsuit fit to avoid restriction.',
      'Practice removal techniques to avoid panic in race.',
      'Be aware of overheating in warm conditions.'
    ],
    modifications: {
      beginner: 'Short sessions (15-20 min). Focus on comfort and basic technique.',
      advanced: 'Longer sessions. Practice race pace and transition techniques.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'minutes in wetsuit'
    },
    coaching: {
      setup: ['Proper wetsuit fit', 'Anti-chafe application'],
      execution: ['Adapt stroke to buoyancy', 'Practice transitions', 'Maintain comfort'],
      common_mistakes: ['Poor wetsuit fit', 'Not practicing removal', 'Overheating'],
      breathing: 'May need to adjust breathing pattern due to chest restriction.'
    }
  },

  'swim-mass-start-practice': {
    id: 'swim-mass-start-practice',
    name: 'Mass Start Swimming Practice',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['full-body', 'mental-toughness'],
    difficulty: 4,
    instructions: [
      'Practice swimming in crowded conditions with other swimmers.',
      'Start multiple swimmers simultaneously to simulate race start.',
      'Practice dealing with contact and being bumped.',
      'Work on finding clear water and positioning.',
      'Practice different start positions (front, side, back).',
      'Include drafting practice behind other swimmers.',
      'Build mental toughness for chaotic race conditions.',
      'Practice staying calm and focused in crowds.'
    ],
    safetyNotes: [
      'Ensure all participants understand contact may occur.',
      'Practice with experienced swimmers in controlled environment.',
      'Have safety personnel present for group training.'
    ],
    modifications: {
      beginner: 'Start with 2-3 swimmers. Focus on comfort with contact.',
      advanced: 'Larger groups. Practice race-specific tactics and positioning.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 6,
      unit: 'mass start simulations'
    },
    coaching: {
      setup: ['Multiple swimmers', 'Controlled environment'],
      execution: ['Stay calm in crowds', 'Find clear water', 'Practice positioning'],
      common_mistakes: ['Panic in contact', 'Poor positioning', 'Fighting instead of adapting'],
      breathing: 'Stay calm and maintain breathing rhythm despite chaos.'
    }
  },

  'swim-exit-practice': {
    id: 'swim-exit-practice',
    name: 'Swimming Exit Practice',
    category: 'swimming',
    equipment: ['pool'],
    muscleGroups: ['legs', 'balance', 'transition'],
    difficulty: 2,
    instructions: [
      'Practice exiting water smoothly and efficiently.',
      'For beach exits: time final strokes to catch waves.',
      'Stand up when water is chest-deep, not before.',
      'Run through shallow water with high knees.',
      'Practice running on unstable surfaces (sand, rocks).',
      'Include wetsuit removal while moving.',
      'Practice orientation after swimming (may feel dizzy).',
      'Build leg strength for efficient water-to-land transition.'
    ],
    safetyNotes: [
      'Be aware of waves, currents, and bottom conditions.',
      'Practice in safe, supervised environments.',
      'Don\'t attempt to stand in waves that might knock you down.'
    ],
    modifications: {
      beginner: 'Practice in calm conditions. Focus on basic exit technique.',
      advanced: 'Practice in various conditions including waves and currents.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'exit practices'
    },
    coaching: {
      setup: ['Safe exit area', 'Various conditions'],
      execution: ['Time standing correctly', 'High knee running', 'Smooth transition'],
      common_mistakes: ['Standing too early', 'Poor balance on exit', 'Slow transition'],
      breathing: 'Maintain controlled breathing during disorientation of exit.'
    }
  },

  'swim-catch-up-drill': {
    id: 'swim-catch-up-drill',
    name: 'Catch-Up Drill',
    category: 'swimming',
    equipment: ['Pool', 'Optional: kickboard'],
    muscleGroups: ['Shoulders', 'Core', 'Technique', 'Timing'],
    difficulty: 2,
    instructions: [
      'Start swimming freestyle.',
      'Extend both arms forward.',
      'One arm stays extended while other strokes.',
      'Wait for stroking arm to return before starting next stroke.',
      'Focus on full extension and catch.',
      'Maintain body position and rotation.',
      'Breathe to both sides.',
      'Emphasize stroke timing and technique.'
    ],
    safetyNotes: [
      'Start in shallow end if needed.',
      'Focus on technique over speed.',
      'Rest between lengths as needed.'
    ],
    modifications: {
      beginner: 'Use kickboard for support, shorter distances.',
      advanced: 'Longer distances, focus on perfect technique.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 200,
      unit: 'meters'
    },
    coaching: {
      setup: ['Pool access', 'Focus on technique'],
      execution: ['Full arm extension', 'Patient timing', 'Body rotation'],
      common_mistakes: ['Rushing strokes', 'Poor extension', 'Loss of body position'],
      breathing: 'Bilateral breathing, controlled rhythm.'
    }
  },

  'swim-fingertip-drag': {
    id: 'swim-fingertip-drag',
    name: 'Fingertip Drag Drill',
    category: 'swimming',
    equipment: ['Pool'],
    muscleGroups: ['Shoulders', 'Technique', 'High elbow', 'Recovery'],
    difficulty: 2,
    instructions: [
      'Swim freestyle with normal stroke.',
      'During recovery phase, drag fingertips along water surface.',
      'Keep elbow high during recovery.',
      'Focus on relaxed recovery arm.',
      'Maintain normal catch and pull underwater.',
      'Emphasize high elbow position.',
      'Keep stroke rhythm smooth.',
      'Practice bilateral breathing.'
    ],
    safetyNotes: [
      'Focus on technique over speed.',
      'Don\'t force the movement.',
      'Rest as needed between lengths.'
    ],
    modifications: {
      beginner: 'Shorter distances, focus on one arm at a time.',
      advanced: 'Longer sets, combine with other drills.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 150,
      unit: 'meters'
    },
    coaching: {
      setup: ['Pool access', 'Focus on recovery phase'],
      execution: ['High elbow recovery', 'Fingertips drag water', 'Relaxed arm'],
      common_mistakes: ['Low elbow', 'Tense recovery', 'Disrupted rhythm'],
      breathing: 'Normal breathing pattern, stay relaxed.'
    }
  },

  'swim-single-arm-drill': {
    id: 'swim-single-arm-drill',
    name: 'Single Arm Drill',
    category: 'swimming',
    equipment: ['Pool', 'Optional: kickboard'],
    muscleGroups: ['Unilateral strength', 'Technique', 'Body position', 'Rotation'],
    difficulty: 3,
    instructions: [
      'Hold kickboard with one arm extended.',
      'Stroke with free arm only.',
      'Focus on full stroke cycle.',
      'Emphasize catch, pull, and recovery.',
      'Maintain body rotation.',
      'Keep head in neutral position.',
      'Complete set distance before switching arms.',
      'Focus on stroke quality over speed.'
    ],
    safetyNotes: [
      'Start with shorter distances.',
      'Focus on technique over power.',
      'Rest between arms as needed.'
    ],
    modifications: {
      beginner: 'Use kickboard for support, very short distances.',
      advanced: 'No kickboard, longer distances.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 100,
      unit: 'meters each arm'
    },
    coaching: {
      setup: ['Kickboard if needed', 'Focus on single arm'],
      execution: ['Full stroke cycle', 'Body rotation', 'Quality technique'],
      common_mistakes: ['Poor body position', 'Incomplete stroke', 'No rotation'],
      breathing: 'Breathe to stroking side, controlled rhythm.'
    }
  },

  'swim-sculling': {
    id: 'swim-sculling',
    name: 'Sculling Drill',
    category: 'swimming',
    equipment: ['Pool'],
    muscleGroups: ['Feel for water', 'Forearms', 'Catch technique', 'Propulsion'],
    difficulty: 3,
    instructions: [
      'Float on back or front.',
      'Extend arms in front (front scull) or at sides (back scull).',
      'Move hands in figure-8 pattern.',
      'Keep elbows relatively still.',
      'Feel pressure on palms and forearms.',
      'Use sculling motion to move through water.',
      'Focus on water feel and catch.',
      'Practice different sculling positions.'
    ],
    safetyNotes: [
      'Start in shallow water if needed.',
      'Focus on feel over speed.',
      'Rest as needed.'
    ],
    modifications: {
      beginner: 'Start with back sculling, shorter durations.',
      advanced: 'Front sculling, vertical sculling.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Comfortable water depth', 'Relaxed body position'],
      execution: ['Figure-8 hand pattern', 'Feel water pressure', 'Still elbows'],
      common_mistakes: ['Moving elbows too much', 'Poor water feel', 'Tense arms'],
      breathing: 'Relaxed breathing, focus on feel.'
    }
  },

  'swim-kick-on-side': {
    id: 'swim-kick-on-side',
    name: 'Kick on Side Drill',
    category: 'swimming',
    equipment: ['Pool', 'Optional: kickboard'],
    muscleGroups: ['Core', 'Kick technique', 'Body position', 'Rotation'],
    difficulty: 3,
    instructions: [
      'Lie on side in water.',
      'Bottom arm extended forward.',
      'Top arm at side or on hip.',
      'Kick with flutter kick motion.',
      'Maintain side body position.',
      'Keep head in line with spine.',
      'Practice on both sides.',
      'Focus on body rotation and kick.'
    ],
    safetyNotes: [
      'Start with shorter distances.',
      'Focus on body position.',
      'Breathe regularly.'
    ],
    modifications: {
      beginner: 'Use kickboard for support, shorter distances.',
      advanced: 'No support, longer distances, 6-kick switch.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 100,
      unit: 'meters each side'
    },
    coaching: {
      setup: ['Side body position', 'Proper arm placement'],
      execution: ['Maintain side position', 'Effective kick', 'Body alignment'],
      common_mistakes: ['Rolling to front/back', 'Poor kick', 'Head position'],
      breathing: 'Regular breathing, maintain position.'
    }
  }
};

export default SWIMMING_EXERCISES;
