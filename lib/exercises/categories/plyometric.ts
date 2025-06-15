import { Exercise } from '../types';

export const PLYOMETRIC_EXERCISES: Record<string, Exercise> = {
  'jump-squat': {
    id: 'jump-squat',
    name: 'Jump Squat',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'calves', 'core'],
    difficulty: 3,
    instructions: [
      'Start in squat position',
      'Lower into squat',
      'Explode up jumping as high as possible',
      'Land softly back into squat position',
      'Immediately repeat'
    ],
    safetyNotes: ['Land softly to protect knees', 'Avoid on hard surfaces'],
    modifications: {
      beginner: 'Squat to calf raise (no jump)',
      advanced: 'Single-leg jump squats',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell jump squats',
        'kettlebells': 'Kettlebell swing'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 20,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width apart', 'Arms ready to swing'],
      execution: ['Explosive jump', 'Soft landing', 'Immediate transition'],
      common_mistakes: ['Hard landing', 'Pausing between reps'],
      breathing: 'Exhale on jump, inhale on landing'
    }
  },

  'burpee': {
    id: 'burpee',
    name: 'Burpee',
    category: 'plyometric',
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
    category: 'plyometric',
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
    category: 'plyometric',
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

  'box-jump': {
    id: 'box-jump',
    name: 'Box Jump',
    category: 'plyometric',
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

  'depth-jump': {
    id: 'depth-jump',
    name: 'Depth Jump',
    category: 'plyometric',
    equipment: ['Plyo Box'],
    muscleGroups: ['Full Body', 'Glutes', 'Quads', 'Calves'],
    difficulty: 3,
    instructions: [
      'Stand on top of a plyo box (start with a low height, 6-12 inches).',
      'Step off the box (do not jump off). Land on both feet simultaneously.',
      'As soon as your feet touch the ground, immediately explode into a maximal vertical jump.',
      'The goal is to minimize ground contact time and convert the landing force into upward power.',
      'Land softly from the vertical jump, absorbing the impact through your legs.',
      'Reset and repeat.'
    ],
    safetyNotes: [
      'This is an advanced plyometric exercise. Ensure you have a strong strength and landing base.',
      'Start with a very low box height.',
      'Focus on a quick, reactive jump. The ground is "hot lava".'
    ],
    modifications: {
      beginner: 'Do not perform this exercise. Instead, focus on box jumps and proper landing mechanics.',
      advanced: 'Increase the height of the box slightly. Jump onto another, higher box after the ground contact.',
      equipment_alternatives: {
        'Plyo Box': 'A sturdy bench or step.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 4,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand on a low box.'
      ],
      execution: [
        'Step off, do not jump off.',
        'Land on both feet.',
        'As soon as you touch, explode straight up.',
        'Minimize ground contact time.',
        'Land softly from the second jump.'
      ],
      common_mistakes: [
        'Spending too long on the ground after landing.',
        'Jumping off the box instead of stepping.',
        'Landing with stiff legs.'
      ],
      breathing: 'Hold breath briefly on landing, exhale forcefully on the upward jump.'
    }
  },

  'standing-broad-jump': {
    id: 'standing-broad-jump',
    name: 'Standing Broad Jump',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart.',
      'Lower into a quarter-squat position and swing your arms back behind you.',
      'Explode forward, jumping as far as you can.',
      'Use your arms to propel you forward by swinging them powerfully in front of you.',
      'Aim to land on both feet simultaneously.',
      'Absorb the landing by bending your knees and hips, finishing in a squat position.',
      'Hold the landing for a second to demonstrate control. Reset and repeat.'
    ],
    safetyNotes: [
      'Ensure you have plenty of clear space in front of you.',
      'Land softly to absorb impact.',
      'Focus on sticking the landing without taking extra steps.'
    ],
    modifications: {
      beginner: 'Focus on shorter, more controlled jumps.',
      advanced: 'Perform multiple jumps in a row without pausing (serial broad jumps).',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight power exercise.'
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
        'Stand with feet shoulder-width apart.'
      ],
      execution: [
        'Load by squatting and swinging arms back.',
        'Explode forward, driving with legs and arms.',
        'Land softly in a squat position.',
        'Stick the landing.'
      ],
      common_mistakes: [
        'Landing with stiff legs.',
        'Losing balance and stumbling forward.',
        'Not using arms effectively.'
      ],
      breathing: 'Exhale forcefully as you jump.'
    }
  },

  'bounding': {
    id: 'bounding',
    name: 'Bounding',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['Glutes', 'Hamstrings', 'Quads'],
    difficulty: 3,
    instructions: [
      'Start with a light jog to build momentum.',
      'Begin to take exaggerated, powerful strides, aiming for maximum horizontal distance with each step.',
      'Drive off your back leg with force, extending your hip, knee, and ankle (triple extension).',
      'Simultaneously, drive your front knee up and your opposite arm forward.',
      'Spend as much time in the air as possible.',
      'The movement should look like a slow-motion, powerful run.',
      'Continue for a set distance.'
    ],
    safetyNotes: [
      'This is a high-impact, advanced drill. Ensure you are thoroughly warmed up and have a good fitness base.',
      'Focus on good form and power, not just speed.',
      'Perform on a soft surface like grass if possible.'
    ],
    modifications: {
      beginner: 'Perform power skips, focusing on height before trying for distance.',
      advanced: 'Increase the distance of each bound. Perform single-leg bounds for a set distance.',
      equipment_alternatives: {
        'None': 'High skips.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Begin with a few steps of a jog.'
      ],
      execution: [
        'Explode off your back leg.',
        'Drive front knee and opposite arm forward.',
        'Aim for maximum distance on each stride.',
        'Think "running in slow motion through the air".'
      ],
      common_mistakes: [
        'Taking short, choppy steps.',
        'Focusing on speed instead of power and distance.',
        'Poor arm coordination.'
      ],
      breathing: 'Exhale powerfully on each push-off.'
    }
  },

  'hurdle-hops': {
    id: 'hurdle-hops',
    name: 'Hurdle Hops',
    category: 'plyometric',
    equipment: ['Hurdles (low)'],
    muscleGroups: ['Glutes', 'Quads', 'Calves', 'Core'],
    difficulty: 2,
    instructions: [
      'Set up a series of 5-6 low hurdles or cones in a straight line, about 2-3 feet apart.',
      'Stand in front of the first hurdle with your feet together.',
      'Keeping your feet together, perform a two-footed jump over the first hurdle.',
      'As soon as you land, immediately rebound and jump over the next hurdle.',
      'The goal is to be springy and reactive, spending minimal time on the ground.',
      'Use your arms to help generate height.',
      'Continue until you have cleared all the hurdles.'
    ],
    safetyNotes: [
      'Start with very low hurdles or even just lines on the ground.',
      'Focus on a quick ground contact and a springy response.',
      'Land softly to absorb impact.'
    ],
    modifications: {
      beginner: 'Use lines on the ground or very low cones. Pause between each jump to reset.',
      advanced: 'Increase the height of the hurdles. Perform single-leg hops over the hurdles.',
      equipment_alternatives: {
        'Hurdles': 'Low cones, shoes, water bottles, or any small object to jump over.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 3,
      progressionRate: 0.1,
      unit: 'sets of 5-6 hurdles'
    },
    coaching: {
      setup: [
        'Stand facing a line of low hurdles.'
      ],
      execution: [
        'Jump over each hurdle with both feet.',
        'As soon as you land, jump again.',
        'Be quick and springy off the ground.',
        'Use your arms.'
      ],
      common_mistakes: [
        'Pausing too long between hurdles.',
        'Landing heavily.',
        'Not using arms to help.'
      ],
      breathing: 'Exhale on each jump.'
    }
  },

  'medicine-ball-slam': {
    id: 'medicine-ball-slam',
    name: 'Medicine Ball Slam',
    category: 'plyometric',
    equipment: ['Medicine Ball (non-bouncing)'],
    muscleGroups: ['Lats', 'Core', 'Shoulders', 'Glutes'],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, holding a medicine ball with both hands.',
      'Raise the ball straight overhead, fully extending your body. You can rise up onto your toes for extra height.',
      'Engage your core and powerfully slam the ball down onto the floor directly in front of you.',
      'Use your entire body, hinging at the hips and following through with your arms.',
      'Squat down to pick up the ball and immediately go into the next repetition.',
      'The movement should be explosive and continuous.'
    ],
    safetyNotes: [
      'Use a "slam ball" or non-bouncing medicine ball to prevent it from rebounding into your face.',
      'Use your legs and hips to lower down to pick up the ball; do not round your lower back.',
      'Ensure your surroundings are clear.'
    ],
    modifications: {
      beginner: 'Use a lighter ball. Perform the movement more slowly to master the mechanics.',
      advanced: 'Use a heavier ball. Increase the speed and explosiveness of the slam.',
      equipment_alternatives: {
        'Medicine Ball': 'Can be mimicked with a sandbag, but a slam ball is ideal.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, holding slam ball.'
      ],
      execution: [
        'Raise ball high overhead, extending body.',
        'Slam the ball down with force.',
        'Hinge at the hips as you slam.',
        'Squat to pick it up and repeat.'
      ],
      common_mistakes: [
        'Using only the arms and not the whole body.',
        'Rounding the back to pick up the ball.',
        'Using a bouncy ball.'
      ],
      breathing: 'Inhale as you lift the ball, exhale forcefully as you slam.'
    }
  },

  'star-jump': {
    id: 'star-jump',
    name: 'Star Jump',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['Quadriceps', 'Glutes', 'Calves', 'Core'],
    difficulty: 1,
    instructions: [
      'Stand with your feet together and your knees slightly bent.',
      'Squat down slightly to load the jump.',
      'Explosively jump straight up.',
      'As you jump, extend your arms and legs out to the sides, forming a \'star\' or \'X\' shape with your body in mid-air.',
      'As you descend, bring your arms and legs back in.',
      'Land softly with your knees bent to absorb the impact, returning to the starting position.',
      'Immediately go into the next jump.',
      'Repeat for the desired duration or number of repetitions.'
    ],
    safetyNotes: ['Focus on a soft landing to protect your joints.', 'Ensure you have enough overhead and side clearance.', 'Keep your core engaged.'],
    modifications: {
      beginner: 'Perform a standard jumping jack.',
      advanced: 'Increase the speed and height of the jumps.',
      equipment_alternatives: {}
    },
    metrics: { type: 'time', defaultValue: 30, progressionRate: 15, unit: 'seconds' },
    coaching: {
      setup: ['Stand with feet together, knees slightly bent.'],
      execution: ['Jump up explosively.', 'Spread your arms and legs out into a star shape at the peak.', 'Bring limbs back in before landing.', 'Land softly and quietly.'],
      common_mistakes: ['Landing with stiff legs.', 'Not extending fully into the star shape.', 'Losing control and balance.'],
      breathing: 'Exhale as you jump, inhale as you land.'
    }
  },

  'depth-jump-to-box': {
    id: 'depth-jump-to-box',
    name: 'Depth Jump to Box',
    category: 'plyometric',
    equipment: ['plyo box'],
    muscleGroups: ['glutes', 'quads', 'hamstrings', 'calves'],
    difficulty: 4,
    instructions: [
      'Start standing on a low platform or box',
      'Step off and land with knees bent',
      'Immediately jump vertically onto a higher box',
      'Stand fully at the top to complete rep'
    ],
    safetyNotes: ['Ensure soft landing; avoid hard surfaces'],
    modifications: {
      beginner: 'Use low box and eliminate depth drop',
      advanced: 'Add weight vest or increase box height',
      equipment_alternatives: {
        'no box': 'Depth jump to vertical jump'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 1,
      unit: 'reps'
    },
    coaching: {
      setup: ['Platform and landing box positioned safely'],
      execution: ['Land softly', 'Explode immediately'],
      common_mistakes: ['No pause between landing and jump', 'Knees caving in'],
      breathing: 'Inhale before drop, exhale as you jump'
    }
  },

  'lateral-bounds': {
    id: 'lateral-bounds',
    name: 'Lateral Bounds',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['glutes', 'quads', 'hamstrings', 'calves'],
    difficulty: 3,
    instructions: [
      'Start in athletic stance',
      'Jump laterally off one foot, landing softly on the opposite foot',
      'Maintain balance and repeat side-to-side',
      'Focus on distance and control'
    ],
    safetyNotes: ['Avoid hard landings', 'Progress gradually'],
    modifications: {
      beginner: 'Smaller hops, both feet land',
      advanced: 'Add pause on landing or increase distance'
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Athletic stance', 'Engaged core'],
      execution: ['Explosive push', 'Land softly on single leg'],
      common_mistakes: ['Stiff landings', 'Knee collapsing inward'],
      breathing: 'Exhale on jump'
    }
  },

  'tuck-jump': {
    id: 'tuck-jump',
    name: 'Tuck Jump',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['quads', 'glutes', 'core', 'calves'],
    difficulty: 4,
    instructions: [
      'Stand tall, arms at sides',
      'Jump straight up, driving knees toward chest',
      'Land softly with knees bent',
      'Reset between each jump'
    ],
    safetyNotes: ['High impact — avoid on injured knees'],
    modifications: {
      beginner: 'Jump squats',
      advanced: 'Continuous tuck jumps with time goal'
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet hip-width', 'Arms ready to swing'],
      execution: ['Explode up, pull knees high', 'Land soft'],
      common_mistakes: ['Stomping down', 'Not jumping high enough'],
      breathing: 'Exhale on jump'
    }
  },

  'ankle-hops': {
    id: 'ankle-hops',
    name: 'Ankle Hops',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['calves', 'ankles', 'feet'],
    difficulty: 2,
    instructions: [
      'Stand tall with feet under hips',
      'Bounce off ground using only ankles (minimal knee bend)',
      'Keep rhythm fast and light',
      'Land softly with quick recoil'
    ],
    safetyNotes: ['Avoid if active Achilles injury', 'Focus on foot control'],
    modifications: {
      beginner: 'Standing calf raises',
      advanced: 'Add lateral hops or rope'
    },
    metrics: {
      type: 'duration',
      defaultValue: 20,
      progressionRate: 5,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Neutral posture', 'Core engaged'],
      execution: ['Use spring from ankles', 'Stay upright'],
      common_mistakes: ['Excessive knee bend', 'Slapping feet'],
      breathing: 'Light rhythmic breathing'
    }
  },

  'box-jumps': {
    id: 'box-jumps',
    name: 'Box Jumps',
    category: 'plyometric',
    equipment: ['Plyometric box or platform'],
    muscleGroups: ['Legs', 'Glutes', 'Power', 'Coordination'],
    difficulty: 3,
    instructions: [
      'Stand facing box at arm\'s length distance.',
      'Squat down and swing arms back.',
      'Explosively jump up onto box.',
      'Land softly with both feet on box.',
      'Stand up completely on top of box.',
      'Step down carefully, don\'t jump down.',
      'Reset and repeat for next jump.',
      'Focus on landing mechanics and safety.'
    ],
    safetyNotes: [
      'Start with lower box height.',
      'Always step down, never jump down.',
      'Ensure box is stable and appropriate height.'
    ],
    modifications: {
      beginner: 'Lower box height, focus on landing technique.',
      advanced: 'Higher box, single leg variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Appropriate box height', 'Safe distance', 'Stable platform'],
      execution: ['Explosive jump', 'Soft landing', 'Step down safely'],
      common_mistakes: ['Box too high', 'Jumping down', 'Poor landing'],
      breathing: 'Exhale during jump, controlled breathing on box.'
    }
  },

  'burpee-box-jumps': {
    id: 'burpee-box-jumps',
    name: 'Burpee Box Jumps',
    category: 'plyometric',
    equipment: ['Plyometric box', 'Floor space'],
    muscleGroups: ['Full Body', 'Power', 'Cardio'],
    difficulty: 4,
    instructions: [
      'Start standing in front of box.',
      'Perform complete burpee (squat, plank, push-up, squat).',
      'Instead of jumping up, jump onto box.',
      'Land softly on box with both feet.',
      'Stand completely upright on box.',
      'Step down from box safely.',
      'Immediately begin next burpee.',
      'Maintain form throughout complex movement.'
    ],
    safetyNotes: [
      'Ensure box is stable and appropriate height.',
      'Step down from box, don\'t jump.',
      'Very high intensity - monitor fatigue carefully.'
    ],
    modifications: {
      beginner: 'Lower box, omit push-up from burpee.',
      advanced: 'Higher box, faster pace.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 6,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Stable box', 'Adequate space', 'Safety first'],
      execution: ['Complete burpee', 'Explosive box jump', 'Safe step down'],
      common_mistakes: ['Poor burpee form', 'Unsafe box jump', 'Jumping down'],
      breathing: 'Controlled breathing through complex movement sequence.'
    }
  },

  'broad-jump': {
    id: 'broad-jump',
    name: 'Broad Jump',
    category: 'plyometric',
    equipment: ['Floor space'],
    muscleGroups: ['Legs', 'Glutes', 'Power', 'Core'],
    difficulty: 3,
    instructions: [
      'Start with feet shoulder-width apart.',
      'Squat down and swing arms back.',
      'Explosively jump forward for maximum distance.',
      'Extend hips, knees, and ankles fully.',
      'Swing arms forward during jump.',
      'Land softly with bent knees.',
      'Measure distance from start to back of heels.',
      'Reset and repeat for multiple jumps.'
    ],
    safetyNotes: [
      'Ensure adequate landing space.',
      'Focus on soft landing mechanics.',
      'Start with submaximal efforts to warm up.'
    ],
    modifications: {
      beginner: 'Focus on technique over distance.',
      advanced: 'Multiple broad jumps in sequence.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 5,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Adequate space', 'Proper starting position'],
      execution: ['Explosive forward jump', 'Full extension', 'Soft landing'],
      common_mistakes: ['Poor takeoff angle', 'Hard landing', 'Insufficient arm swing'],
      breathing: 'Exhale during explosive jump phase.'
    }
  },

  'depth-jumps': {
    id: 'depth-jumps',
    name: 'Depth Jumps',
    category: 'plyometric',
    equipment: ['Elevated platform', 'Landing area'],
    muscleGroups: ['Legs', 'Reactive strength', 'Power', 'Coordination'],
    difficulty: 4,
    instructions: [
      'Stand on edge of platform (12-18 inches high).',
      'Step off platform (don\'t jump off).',
      'Land on both feet simultaneously.',
      'Immediately jump up as high as possible.',
      'Focus on minimal ground contact time.',
      'Land softly from the rebound jump.',
      'Reset and repeat.',
      'Emphasize reactive strength development.'
    ],
    safetyNotes: [
      'Start with lower platform heights.',
      'Ensure safe landing surface.',
      'Advanced exercise - requires good strength base.'
    ],
    modifications: {
      beginner: 'Lower platform (6-8 inches), focus on landing.',
      advanced: 'Higher platform, faster reactive jumps.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 5,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Appropriate platform height', 'Safe landing area'],
      execution: ['Step off platform', 'Quick ground contact', 'Explosive rebound'],
      common_mistakes: ['Jumping off platform', 'Too much ground contact', 'Poor landing'],
      breathing: 'Quick exhale during rebound jump.'
    }
  },

  'single-leg-hops': {
    id: 'single-leg-hops',
    name: 'Single Leg Hops',
    category: 'plyometric',
    equipment: ['Floor space'],
    muscleGroups: ['Single leg strength', 'Balance', 'Power', 'Stability'],
    difficulty: 3,
    instructions: [
      'Stand on one leg with slight knee bend.',
      'Hop forward on same leg.',
      'Land softly on same leg.',
      'Immediately hop again.',
      'Maintain balance and control.',
      'Complete set on one leg before switching.',
      'Focus on consistent hop distance.',
      'Keep core engaged for stability.'
    ],
    safetyNotes: [
      'Start with shorter hops.',
      'Focus on landing control over distance.',
      'Build single leg strength gradually.'
    ],
    modifications: {
      beginner: 'Shorter hops, pause between reps.',
      advanced: 'Longer hops, lateral and backward variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 6,
      unit: 'repetitions each leg'
    },
    coaching: {
      setup: ['Single leg balance', 'Slight knee bend'],
      execution: ['Controlled hopping', 'Soft landings', 'Maintain balance'],
      common_mistakes: ['Hard landings', 'Loss of balance', 'Inconsistent distance'],
      breathing: 'Rhythmic breathing with hop pattern.'
    }
  },

  'tuck-jumps': {
    id: 'tuck-jumps',
    name: 'Tuck Jumps',
    category: 'plyometric',
    equipment: ['Floor space'],
    muscleGroups: ['Legs', 'Core', 'Hip flexors', 'Power'],
    difficulty: 4,
    instructions: [
      'Start in athletic position.',
      'Jump up explosively.',
      'Bring knees up toward chest.',
      'Grab knees briefly at top of jump.',
      'Release and extend legs for landing.',
      'Land softly with bent knees.',
      'Immediately prepare for next jump.',
      'Focus on maximum height and knee lift.'
    ],
    safetyNotes: [
      'High intensity exercise.',
      'Focus on soft landings.',
      'Monitor fatigue carefully.'
    ],
    modifications: {
      beginner: 'Lower knee lift, pause between reps.',
      advanced: 'Higher jumps, faster tempo.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Athletic starting position', 'Adequate ceiling height'],
      execution: ['Explosive jump', 'High knee lift', 'Soft landing'],
      common_mistakes: ['Insufficient knee lift', 'Hard landings', 'Poor timing'],
      breathing: 'Exhale during explosive jump phase.'
    }
  }
,

  'medicine-ball-rotational-slams': {
    'id': 'medicine-ball-rotational-slams',
    'name': 'Medicine Ball Rotational Slams',
    'category': 'plyometric',
    'equipment': [
        'Medicine Ball'
    ],
    'muscleGroups': [
        'Core (Obliques)',
        'Hips',
        'Lats',
        'Shoulders'
    ],
    'difficulty': 3,
    'instructions': [
        'Stand in an athletic stance with feet shoulder-width apart, holding the medicine ball at one hip.',
        'Explosively rotate your torso, bringing the ball up and across your body in a diagonal path.',
        'Slam the ball forcefully into the ground just outside your opposite foot.',
        'Catch the ball on the rebound (if using a bounceable ball) or pick it up, and repeat for reps before switching sides.'
    ],
    'safetyNotes': [
        'Use a slam ball designed for high-impact throws if possible.',
        'Ensure the area is clear of people and objects.',
        'Generate power from your hips and core, not your lower back.'
    ],
    'modifications': {
        'beginner': 'Start from a half-kneeling position to better isolate the torso. Use a lighter ball and perform the motion without a forceful slam.',
        'advanced': 'Use a heavier ball. Increase the speed and intensity of the slam.',
        'equipment_alternatives': {
            'slam-ball': 'Slam ball rotational throws',
            'kettlebell': 'Kettlebell swings'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 8,
        'progressionRate': 10,
        'unit': 'repetitions per side'
    },
    'coaching': {
        'setup': [
            'Hold the ball at your back hip, feet grounded, core engaged.'
        ],
        'execution': [
            'Drive through your back hip to initiate rotation.',
            'Bring the ball across your body in a powerful, high-to-low arc.',
            'Slam the ball with maximal force.'
        ],
        'common_mistakes': [
            'Rotating only with the arms and shoulders.',
            'Having a narrow stance.',
            'Failing to engage the hips.'
        ],
        'breathing': 'Inhale as you wind up, exhale forcefully on the slam.'
    }
}
,

  'hexagon-drill': {
    'id': 'hexagon-drill',
    'name': 'Hexagon Drill',
    'category': 'plyometric',
    'equipment': [
        'Tape or Cones'
    ],
    'muscleGroups': [
        'Full Body',
        'Calves',
        'Quads'
    ],
    'difficulty': 3,
    'instructions': [
        'Create a hexagon shape on the floor with tape, with each side being about 2 feet long.',
        'Stand in the middle of the hexagon.',
        'Keeping your feet together, jump with both feet over one side of the hexagon and immediately back to the center.',
        'Proceed to the next side of the hexagon and repeat the in-and-out jump.',
        'Continue this pattern, moving clockwise or counter-clockwise until you have completed all six sides.',
        'This constitutes one cycle.'
    ],
    'safetyNotes': [
        'Stay on the balls of your feet to remain quick and light.',
        'Focus on quick ground contact time.',
        'Ensure the surface is not slippery.'
    ],
    'modifications': {
        'beginner': 'Perform the drill by stepping in and out instead of jumping. Perform at a slower tempo.',
        'advanced': 'Increase the speed of the jumps. Perform the drill on a single leg.',
        'equipment_alternatives': {
            'agility-ladder': 'Agility ladder drills',
            'cones': 'Cone agility drills'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 3,
        'progressionRate': 5,
        'unit': 'complete cycles'
    },
    'coaching': {
        'setup': [
            'Stand in the center of a marked hexagon.'
        ],
        'execution': [
            'Jump out and back in over each line consecutively.',
            'Maintain a consistent rhythm and speed.',
            'Keep your upper body relaxed.'
        ],
        'common_mistakes': [
            'Long ground contact time.',
            'Looking down at your feet instead of ahead.',
            'Sloppy footwork, touching the lines.'
        ],
        'breathing': 'Maintain a rhythmic breathing pattern; try to exhale on each jump out.'
    }
}
,

  '5-10-5-drill': {
    'id': '5-10-5-drill',
    'name': '5-10-5 Drill (Pro Agility)',
    'category': 'plyometric',
    'equipment': [
        'Cones'
    ],
    'muscleGroups': [
        'Full Body'
    ],
    'difficulty': 4,
    'instructions': [
        'Set up three cones in a straight line, each 5 yards apart.',
        'Start at the center cone in a three-point stance.',
        'On "go", sprint 5 yards to the right cone and touch the line/cone with your right hand.',
        'Immediately change direction and sprint 10 yards to the far left cone, touching the line/cone with your left hand.',
        'Change direction again and sprint 5 yards back through the starting cone.'
    ],
    'safetyNotes': [
        'Ensure a proper warm-up before performing this high-intensity drill.',
        'Focus on lowering your center of gravity when changing direction to stay balanced and avoid slipping.',
        'Plant your foot firmly when touching the line to drive into the next sprint.'
    ],
    'modifications': {
        'beginner': 'Perform the drill at 75% speed to focus on the mechanics of changing direction. Walk through the pattern first.',
        'advanced': 'Compete against time. A partner can give a reactive start command.',
        'equipment_alternatives': {
            'markers': 'Any markers or lines can be used instead of cones'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 3,
        'progressionRate': 5,
        'unit': 'repetitions'
    },
    'coaching': {
        'setup': [
            'Start at the middle cone in an athletic stance.'
        ],
        'execution': [
            'Explode out for the first 5 yards.',
            'Stay low as you touch the line and change direction.',
            'Drive hard for the 10-yard sprint.',
            'Finish by accelerating through the final cone.'
        ],
        'common_mistakes': [
            'Standing up too tall when changing direction.',
            'Rounding the turns instead of making sharp plants.',
            'Slowing down before the finish line.'
        ],
        'breathing': 'Breathe as needed, but a powerful exhale on each change of direction can help with force production.'
    }
}
,

  'single-leg-box-jumps': {
    'id': 'single-leg-box-jumps',
    'name': 'Single Leg Box Jumps',
    'category': 'plyometric',
    'equipment': [
        'Plyo Box'
    ],
    'muscleGroups': [
        'Glutes',
        'Quads',
        'Hamstrings',
        'Calves'
    ],
    'difficulty': 4,
    'instructions': [
        'Stand facing a plyometric box on one leg.',
        'Lower into a slight single-leg squat to load the jumping leg.',
        'Explode upwards, jumping onto the box and landing on the same single leg.',
        'Land softly and with control on the box.',
        'Step down carefully (do not jump down). Complete all reps on one leg before switching.'
    ],
    'safetyNotes': [
        'Master double-leg box jumps before attempting this.',
        'Start with a very low box (6-12 inches).',
        'Focus on a stable landing. If you cannot stick the landing, the box is too high.'
    ],
    'modifications': {
        'beginner': 'Use a very low box or step. Practice single-leg hops on the ground first.',
        'advanced': 'Gradually increase the height of the box.',
        'equipment_alternatives': {
            'step': 'Single leg step-ups',
            'bench': 'Single leg bench jumps'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 5,
        'progressionRate': 10,
        'unit': 'repetitions per leg'
    },
    'coaching': {
        'setup': [
            'Stand on one leg in front of a low box.'
        ],
        'execution': [
            'Load your hip and knee, then jump forcefully onto the box.',
            'Use your arms to help propel you upwards.',
            'Land softly in the center of the box on the same foot.'
        ],
        'common_mistakes': [
            'Landing hard or off-balance.',
            'Using a box that is too high, leading to poor landing mechanics.',
            'Jumping down from the box.'
        ],
        'breathing': 'Exhale as you jump.'
    }
}
,

  'burpee-intervals': {
    'id': 'burpee-intervals',
    'name': 'Burpee Intervals',
    'category': 'plyometric',
    'equipment': [
        'Bodyweight'
    ],
    'muscleGroups': [
        'Full Body'
    ],
    'difficulty': 4,
    'instructions': [
        'Stand with your feet shoulder-width apart.',
        'Lower your body into a squat and place your hands on the floor in front of you.',
        'Kick your feet back into a high plank position.',
        'Optional: Perform a push-up.',
        'Jump your feet back towards your hands.',
        'Explosively jump up into the air with your arms overhead.'
    ],
    'safetyNotes': [
        'Maintain core tension to avoid your lower back sagging in the plank position.',
        'Land softly from the jump to protect your joints.',
        'Pace yourself to maintain form throughout all intervals.'
    ],
    'modifications': {
        'beginner': 'Step your feet back and forward instead of jumping. Omit the push-up and the final jump.',
        'advanced': 'Add a tuck jump at the end. Increase the number of burpees per interval or the work time.',
        'equipment_alternatives': {
            'none': 'Standard burpees without intervals'
        }
    },
    'metrics': {
        'type': 'time',
        'defaultValue': 30,
        'progressionRate': 10,
        'unit': 'seconds work / 30 seconds rest'
    },
    'coaching': {
        'setup': [
            'Stand ready to move.'
        ],
        'execution': [
            'Flow through the sequence smoothly: squat, plank, push-up (optional), squat, jump.',
            'Find a sustainable rhythm.'
        ],
        'common_mistakes': [
            'Sagging hips in the plank.',
            'Not getting full hip extension on the jump.',
            'Losing form as fatigue sets in.'
        ],
        'breathing': 'Exhale as you jump your feet back and as you jump up.'
    }
}
};

export default PLYOMETRIC_EXERCISES;
