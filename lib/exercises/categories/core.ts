import { Exercise } from '../types';

export const CORE_EXERCISES: Record<string, Exercise> = {
  'plank': {
    id: 'plank',
    name: 'Plank',
    category: 'core',
    equipment: [],
    muscleGroups: ['core', 'shoulders', 'glutes'],
    difficulty: 2,
    instructions: [
      'Start in push-up position',
      'Lower to forearms, elbows under shoulders',
      'Hold straight line from head to heels',
      'Engage core and glutes throughout'
    ],
    modifications: {
      beginner: 'Knee plank or incline plank',
      advanced: 'Single-arm plank, plank with leg lifts',
      equipment_alternatives: {
        'stability-ball': 'Stability ball plank'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 20,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Elbows under shoulders', 'Straight line body position'],
      execution: ['Breathe normally', 'Squeeze glutes', 'Don\'t let hips sag'],
      common_mistakes: ['Sagging hips', 'Raised hips', 'Holding breath'],
      breathing: 'Breathe normally throughout hold'
    }
  },

  'crunches': {
    id: 'crunches',
    name: 'Crunches',
    category: 'core',
    equipment: [],
    muscleGroups: ['Abdominals (Rectus Abdominis)'],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent and feet flat on the floor, hip-width apart.',
      'Place your hands lightly behind your head or across your chest.',
      'Engage your core and slowly lift your head, neck, and shoulders off the floor, curling your torso towards your knees.',
      'Focus on contracting your abdominal muscles, not pulling with your neck.',
      'Slowly lower back down to the starting position with control.'
    ],
    safetyNotes: [
      'Avoid pulling on your neck with your hands; use your core to lift.',
      'Do not lift your entire back off the floor; only your shoulder blades should lift.',
      'Maintain a natural curve in your lower back; do not press it flat into the floor excessively.'
    ],
    modifications: {
      beginner: 'Perform with arms extended forward to reduce leverage, or reduce the range of motion.',
      advanced: 'Perform with feet elevated (e.g., on a bench), or add a weight to your chest.',
      equipment_alternatives: {
        'Ab Crunch Machine': 'Machine crunches'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat, knees bent, feet flat.',
        'Hands gently behind head or crossed on chest.',
        'Gaze towards the ceiling, neutral neck.'
      ],
      execution: [
        'Initiate the movement by contracting your abs, not by pulling your head.',
        'Lift shoulder blades off the floor, keeping lower back down.',
        'Exhale as you crunch up, squeeze at the top.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Using momentum to lift the torso.',
        'Lifting too much of the back off the floor.'
      ],
      breathing: 'Exhale as you crunch up, inhale as you lower down.'
    }
  },

  'russian-twist': {
    id: 'russian-twist',
    name: 'Russian Twist',
    category: 'core',
    equipment: [],
    muscleGroups: ['Obliques', 'Abdominals (Rectus Abdominis)'],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your knees bent and feet flat, leaning back slightly to engage your core.',
      'Lift your feet off the floor, balancing on your sit bones.',
      'Clasp your hands together or hold a light weight in front of your chest.',
      'Twist your torso to one side, bringing your hands towards the floor next to your hip.',
      'Twist to the opposite side, bringing your hands to the other hip, alternating sides with control.'
    ],
    safetyNotes: [
      'Maintain a straight back; avoid rounding your spine.',
      'Control the twisting motion; do not jerk or use excessive momentum.',
      'If you feel lower back pain, keep your feet on the floor.'
    ],
    modifications: {
      beginner: 'Keep your feet on the floor for more stability.',
      advanced: 'Hold a weight (dumbbell, medicine ball) or perform with straight legs for increased difficulty.',
      equipment_alternatives: {
        'Cable Machine': 'Cable Wood Chop',
        'medicine-ball': 'Medicine ball Russian twist'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Balance on sit bones, feet lifted (or on floor).',
        'Lean back slightly, core engaged.',
        'Hands clasped or holding light weight at chest.'
      ],
      execution: [
        'Twist from your core, not just your arms.',
        'Touch hands to the floor on each side (or as far as comfortable).',
        'Keep shoulders down and back.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum instead of core control.',
        'Not twisting enough from the torso.'
      ],
      breathing: 'Breathe naturally, or exhale with each twist.'
    }
  },

  'leg-raise': {
    id: 'leg-raise',
    name: 'Leg Raise',
    category: 'core',
    equipment: [],
    muscleGroups: ['Lower Abdominals', 'Hip Flexors'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your legs straight and hands placed under your lower back for support (optional).',
      'Keep your lower back pressed into the floor throughout the movement.',
      'Slowly raise your legs towards the ceiling until they are perpendicular to the floor or as high as you can without arching your back.',
      'Pause briefly at the top, then slowly lower your legs back down towards the floor.',
      'Stop just before your heels touch the floor to maintain tension on your abs, then raise them again.'
    ],
    safetyNotes: [
      'Ensure your lower back remains pressed into the floor; do not let it arch.',
      'Control the descent of your legs; do not let them drop quickly.',
      'If you feel lower back pain, reduce the range of motion or bend your knees slightly.'
    ],
    modifications: {
      beginner: 'Perform with knees bent (Bent Knee Leg Raise), or only lower legs halfway down.',
      advanced: 'Perform with a slower eccentric (lowering) phase, or add ankle weights.',
      equipment_alternatives: {
        'Pull-up Bar': 'Hanging Leg Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat, lower back pressed into floor.',
        'Hands under lower back (optional) or by sides.',
        'Legs straight or slightly bent at knees.'
      ],
      execution: [
        'Raise legs slowly and with control.',
        'Focus on using lower abs, not hip flexors predominantly.',
        'Control the lowering phase, stopping just before touching floor.'
      ],
      common_mistakes: [
        'Arching the lower back off the floor.',
        'Lowering legs too quickly.',
        'Using momentum to swing legs up.'
      ],
      breathing: 'Exhale as you raise your legs, inhale as you lower them.'
    }
  },

  'bicycle-crunch': {
    id: 'bicycle-crunch',
    name: 'Bicycle Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: ['Abdominals (Rectus Abdominis)', 'Obliques', 'Hip Flexors'],
    difficulty: 3,
    instructions: [
      'Lie on your back with your hands lightly behind your head, elbows wide.',
      'Lift your head, neck, and shoulders off the floor, engaging your core.',
      'Bring one knee towards your chest while simultaneously twisting your torso to bring the opposite elbow towards that knee.',
      'Extend the other leg straight out, hovering it above the floor.',
      'Alternate sides in a continuous, cycling motion, bringing the opposite knee and elbow together while extending the other leg.'
    ],
    safetyNotes: [
      'Avoid pulling on your neck; keep your core engaged to lift your upper body.',
      'Maintain control throughout the movement; do not rush or use momentum.',
      'Keep your lower back pressed into the floor as much as possible.'
    ],
    modifications: {
      beginner: 'Perform with feet on the floor, alternating knee to elbow without extending the other leg fully. Reduce the speed.',
      advanced: 'Perform slower for increased time under tension, or add ankle weights.',
      equipment_alternatives: {
        'Standing': 'Standing Bicycle Crunch'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on back, hands behind head, elbows wide.',
        'Lift head/shoulders slightly off floor, engage core.',
        'Legs bent, feet off floor.'
      ],
      execution: [
        'Twist torso, bringing opposite elbow to knee.',
        'Extend other leg fully, hovering it.',
        'Maintain controlled, fluid cycling motion.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Rushing the movement, losing control.',
        'Allowing lower back to arch off the floor.'
      ],
      breathing: 'Exhale as elbow meets knee, inhale as you switch sides.'
    }
  },

  'dead-bug': {
    id: 'dead-bug',
    name: 'Dead Bug',
    category: 'core',
    equipment: [],
    muscleGroups: ['Deep Core Stabilizers (Transverse Abdominis)', 'Abdominals', 'Hip Flexors'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your arms extended straight up towards the ceiling and your knees bent at a 90-degree angle, directly over your hips.',
      'Press your lower back firmly into the floor throughout the entire exercise.',
      'Slowly extend your right arm straight back overhead towards the floor while simultaneously extending your left leg straight out towards the floor.',
      'Keep both the extended arm and leg hovering just above the floor.',
      'Slowly return your right arm and left leg to the starting position, then repeat on the opposite side (left arm, right leg).'
    ],
    safetyNotes: [
      'The most crucial safety note is to keep your lower back pressed into the floor. If it arches, reduce the range of motion.',
      'Perform slowly and with control; this is not a fast or explosive movement.',
      'Stop if you feel any discomfort in your lower back.'
    ],
    modifications: {
      beginner: 'Perform with only leg extensions (keeping arms up), or only arm extensions (keeping legs still). Keep knees more bent.',
      advanced: 'Add light ankle or wrist weights, or perform with a resistance band around your feet.',
      equipment_alternatives: {
        'Hands and Knees': 'Bird-Dog'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie flat, lower back pressed into floor.',
        'Arms up, knees over hips, shins parallel to floor.',
        'Engage core before starting movement.'
      ],
      execution: [
        'Extend opposite arm and leg slowly and simultaneously.',
        'Focus on maintaining lower back contact with the floor.',
        'Return to start with control before switching sides.'
      ],
      common_mistakes: [
        'Arching the lower back off the floor.',
        'Moving too quickly and losing control.',
        'Not fully extending arm and leg.'
      ],
      breathing: 'Exhale as you extend arm and leg, inhale as you return to the start.'
    }
  },

  'reverse-crunch': {
    id: 'reverse-crunch',
    name: 'Reverse Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: ['Lower Abdominals'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your knees bent at a 90-degree angle and feet off the floor.',
      'Place your hands by your sides, palms down, or lightly behind your head.',
      'Engage your lower abdominals and slowly lift your hips off the floor, bringing your knees towards your chest.',
      'Focus on curling your pelvis upwards, using your abs, not just swinging your legs.',
      'Slowly lower your hips back down to the starting position with control, avoiding letting your feet touch the floor.'
    ],
    safetyNotes: [
      'Avoid swinging your legs to generate momentum; focus on controlled abdominal contraction.',
      'Keep your lower back pressed into the floor throughout the movement.',
      'If you feel lower back pain, reduce the range of motion.'
    ],
    modifications: {
      beginner: 'Perform with feet lightly touching the floor between reps, or reduce the height of the hip lift.',
      advanced: 'Add a medicine ball between your knees, or perform on a decline bench.',
      equipment_alternatives: {
        'Focus on lowering': 'Leg Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat, knees bent at 90 degrees, feet off floor.',
        'Hands by sides or lightly behind head.',
        'Engage lower abs before lifting.'
      ],
      execution: [
        'Lift hips by curling pelvis towards chest.',
        'Squeeze lower abs at the top.',
        'Lower hips slowly and with control.'
      ],
      common_mistakes: [
        'Swinging legs to generate momentum.',
        'Arching the lower back.',
        'Not fully engaging the lower abs to lift hips.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'oblique-crunch': {
    id: 'oblique-crunch',
    name: 'Oblique Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: ['Obliques'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your knees bent and feet flat on the floor, hip-width apart.',
      'Place your hands lightly behind your head, elbows wide.',
      'Cross one ankle over the opposite knee (e.g., right ankle over left knee).',
      'Engage your core and slowly lift your head, neck, and shoulders off the floor, twisting your torso to bring the opposite elbow towards the elevated knee (e.g., left elbow to right knee).',
      'Focus on contracting your oblique muscles, not pulling with your neck.',
      'Slowly lower back down to the starting position with control, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Avoid pulling on your neck with your hands; use your core to lift and twist.',
      'Do not lift your entire back off the floor; only your shoulder blades should lift.',
      'Maintain a natural curve in your lower back; do not press it flat into the floor excessively.'
    ],
    modifications: {
      beginner: 'Keep both feet flat on the floor and simply twist the torso without crossing legs. Reduce the range of motion.',
      advanced: 'Perform with feet elevated (e.g., on a bench), or add a light weight to your chest.',
      equipment_alternatives: {
        'Cable Machine': 'Cable Wood Chop'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie flat, knees bent, feet flat, one ankle crossed over opposite knee.',
        'Hands gently behind head, elbows wide.',
        'Gaze towards the ceiling, neutral neck.'
      ],
      execution: [
        'Initiate the movement by contracting your obliques to twist.',
        'Lift shoulder blades off the floor, bringing opposite elbow towards knee.',
        'Exhale as you crunch and twist, squeeze at the top.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Using momentum to lift and twist.',
        'Not fully engaging the obliques.'
      ],
      breathing: 'Exhale as you crunch and twist, inhale as you lower down.'
    }
  },

  'tick-tocks-with-miniband': {
    id: 'tick-tocks-with-miniband',
    name: 'Tick Tocks with a miniband',
    category: 'core',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Obliques',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet hip-width apart, with a miniband looped around your wrists.',
      'Raise your arms straight overhead, pulling the band apart to create tension.',
      'Keeping your arms straight and core tight, slowly bend your torso directly to the right side, as if you are a clock hand.',
      'Go as far as you can without twisting or bending forward. Feel the stretch on your left side and the contraction on your right.',
      'Return to the center with control.',
      'Repeat on the left side. This completes one repetition.'
    ],
    safetyNotes: [
      'The movement should be a pure side-bend; avoid leaning forward or backward.',
      'Keep tension on the band throughout the exercise.',
      'Do not use momentum; the movement should be slow and controlled.'
    ],
    modifications: {
      beginner: 'Perform without a resistance band. Reduce the range of motion.',
      advanced: 'Use a heavier resistance band. Hold a light dumbbell in each hand.',
      equipment_alternatives: {
        'Resistance Band': 'Can be done without a band, focusing on the oblique contraction.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.',
        'Band around wrists, arms overhead.',
        'Create tension in the band, core braced.'
      ],
      execution: [
        'Slowly bend to one side, keeping arms straight.',
        'Feel the oblique crunch and opposite side stretch.',
        'Return to center with control.',
        'Alternate sides.'
      ],
      common_mistakes: [
        'Leaning forward or backward.',
        'Losing tension in the band.',
        'Using momentum to swing.'
      ],
      breathing: 'Inhale at the top, exhale as you bend to the side.'
    }
  },

  'vacuums': {
    id: 'vacuums',
    name: 'Vacuums',
    category: 'core',
    equipment: [],
    muscleGroups: [
      'Transverse Abdominis'
    ],
    difficulty: 2,
    instructions: [
      'Can be performed standing, kneeling on all fours, or seated.',
      'Start by taking a deep breath in.',
      'Forcefully exhale all the air out of your lungs.',
      'As you exhale, pull your navel in as close to your spine as possible. Imagine your belly button trying to touch your backbone.',
      'Hold this \'sucked in\' position for a set amount of time, continuing to breathe shallowly if needed.',
      'Release the contraction and breathe normally. That is one repetition.'
    ],
    safetyNotes: [
      'This is an activation exercise, not a heavy strength move. Focus on the deep core contraction.',
      'Do not perform if you have uncontrolled high blood pressure or hernias.',
      'Do not hold your breath for too long; learn to breathe shallowly while holding the vacuum.'
    ],
    modifications: {
      beginner: 'Perform lying on your back with knees bent. Hold for a shorter duration (5-10 seconds).',
      advanced: 'Hold for a longer duration (30-60 seconds). Perform from a plank or other more challenging position.',
      equipment_alternatives: {
        'None': 'This is a unique bodyweight control exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'seconds per hold'
    },
    coaching: {
      setup: [
        'Assume a stable position (kneeling, standing, etc.).',
        'Relax your belly.'
      ],
      execution: [
        'Exhale all your air out.',
        'Pull your navel in towards your spine as far as possible.',
        'Hold the deep contraction.',
        'Try to breathe shallowly during the hold.'
      ],
      common_mistakes: [
        'Simply sucking in your gut without exhaling first.',
        'Holding your breath and turning red.',
        'Not engaging the deep transverse abdominis.'
      ],
      breathing: 'Exhale fully to initiate, then take small, shallow breaths as you hold the contraction.'
    }
  },

  'flutter-kicks': {
    id: 'flutter-kicks',
    name: 'Flutter Kicks',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Abs',
      'Hip Flexors'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your back with your legs extended straight.',
      'Place your hands under your lower back for support and to keep it pressed into the floor.',
      'Lift your heels a few inches off the floor. Keep your legs straight.',
      'Engage your core and begin making small, quick, alternating up-and-down kicking motions with your legs (like you\'re swimming on your back).',
      'The range of motion for each kick should only be a few inches.',
      'Continue the flutter motion for the desired duration.'
    ],
    safetyNotes: [
      'Keep your lower back pressed into the floor/your hands at all times. If it starts to arch, lift your legs higher.',
      'Avoid letting your head and neck strain; keep them relaxed on the floor.',
      'The smaller and more controlled the kicks, the more effective.'
    ],
    modifications: {
      beginner: 'Lift your legs higher off the floor to make it easier. Perform with bent knees.',
      advanced: 'Lower your legs closer to the floor without letting your back arch. Lift your head and shoulders off the floor.',
      equipment_alternatives: {
        'None': 'Scissor kicks (alternating side-to-side).'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie on back, hands under low back.',
        'Legs straight, lift heels off the floor.',
        'Press low back into hands.'
      ],
      execution: [
        'Small, quick, alternating kicks.',
        'Keep legs straight.',
        'Keep core tight and back flat.',
        'Breathe steadily.'
      ],
      common_mistakes: [
        'Lower back arching off the floor.',
        'Kicks being too large and slow.',
        'Holding your breath.'
      ],
      breathing: 'Breathe steadily and continuously throughout the set.'
    }
  },

  'side-plank': {
    id: 'side-plank',
    name: 'Side Plank',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Obliques',
      'Core',
      'Shoulders'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your right side with your legs straight and stacked.',
      'Place your right forearm on the floor with your elbow directly under your shoulder.',
      'Engage your core and lift your hips off the floor until your body forms a straight line from your head to your feet.',
      'Keep your hips stacked and avoid letting them drop.',
      'You can place your top hand on your hip or extend it towards the ceiling.',
      'Hold for the desired duration, then switch sides.'
    ],
    safetyNotes: [
      'Ensure your supporting elbow is directly under your shoulder to protect the joint.',
      'Do not let your hips sag towards the floor.',
      'Keep your body in one straight plane; avoid twisting forward or backward.'
    ],
    modifications: {
      beginner: 'Perform from your knees by bending your bottom leg for support. Hold for a shorter duration.',
      advanced: 'Lift your top leg off your bottom leg. Add \'hip dips\' by lowering and lifting your hips.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie on side, elbow directly under shoulder.',
        'Legs stacked and straight.'
      ],
      execution: [
        'Lift hips to create a straight line.',
        'Engage bottom oblique.',
        'Keep hips stacked and forward.',
        'Hold.'
      ],
      common_mistakes: [
        'Hips sagging.',
        'Shoulder not aligned with elbow.',
        'Rolling the torso forward or back.'
      ],
      breathing: 'Breathe steadily throughout the hold.'
    }
  },

  'supermans': {
    id: 'supermans',
    name: 'Supermans',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Back',
      'Glutes',
      'Shoulders',
      'Hamstrings'
    ],
    difficulty: 2,
    instructions: [
      'Lie face down on a mat with your arms extended straight out in front of you and your legs straight behind you (like Superman flying).',
      'Keep your head in a neutral position with your gaze towards the floor.',
      'Engage your core, lower back, and glutes to simultaneously lift both your arms and your legs a few inches off the floor.',
      'Focus on creating length from your fingertips to your toes.',
      'Hold the position for a moment at the top.',
      'Slowly lower your arms and legs back to the floor with control.'
    ],
    safetyNotes: [
      'Avoid looking up, as this can strain your neck.',
      'The lift should be controlled and come from your posterior chain, not by arching into a painful position.',
      'If you have lower back pain, stick to the alternating version.'
    ],
    modifications: {
      beginner: 'Perform the \'Alternating Superman\' by lifting opposite arm and leg. Lift only your upper body or only your lower body.',
      advanced: 'Hold the top position for a longer duration. Add small flutter kicks or arm circles while in the hold.',
      equipment_alternatives: {
        'None': 'Bird Dog.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, arms and legs extended.',
        'Gaze down, neck neutral.'
      ],
      execution: [
        'Lift arms and legs off the floor simultaneously.',
        'Squeeze glutes and back muscles.',
        'Focus on length, not height.',
        'Lower with full control.'
      ],
      common_mistakes: [
        'Lifting too high and straining the back.',
        'Cranking the neck upwards.',
        'Dropping without control.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  }
,

  'bird-dog': {
    'id': 'bird-dog',
    'name': 'Bird Dog',
    'category': 'core',
    'equipment': [
        'Bodyweight',
        'Mat'
    ],
    'muscleGroups': [
        'Core',
        'Glutes',
        'Hamstrings'
    ],
    'difficulty': 1,
    'instructions': [
        'Begin on all fours, hands under shoulders and knees under hips. Tighten and hold your core.',
        'Reach opposite arm forward and leg back so that they are straight.',
        'Reach through left heel to engage hamstrings and glutes.',
        'Return to a starting position and repeat on other side. That is one rep.'
    ],
    'safetyNotes': [
        'Move slowly and with control to avoid losing balance.',
        'Keep your hips and shoulders square to the floor.',
        'Avoid arching your lower back when extending your leg.'
    ],
    'modifications': {
        'beginner': 'Practice by extending only one leg at a time, then only one arm at a time, before combining them.',
        'advanced': 'Add a crunch by bringing your elbow and knee together under your torso before extending again.',
        'equipment_alternatives': {
            'none': 'Can be performed without any equipment'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 10,
        'progressionRate': 10,
        'unit': 'repetitions per side'
    },
    'coaching': {
        'setup': [
            'Start on all fours in a tabletop position, with a neutral spine.'
        ],
        'execution': [
            'Simultaneously extend your right arm forward and your left leg backward.',
            'Pause briefly, then return to the start.',
            'Alternate sides.'
        ],
        'common_mistakes': [
            'Lifting arm or leg too high, causing the back to arch.',
            'Shifting weight side-to-side.',
            'Moving too quickly.'
        ],
        'breathing': 'Exhale as you extend your arm and leg, inhale as you return.'
    }
}
};

export default CORE_EXERCISES;
