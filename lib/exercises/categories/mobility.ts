import { Exercise } from '../types';

export const MOBILITY_EXERCISES: Record<string, Exercise> = {
  'arm-circles': {
    id: 'arm-circles',
    name: 'Arm Circles',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['shoulders', 'upper-back'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Extend arms out to sides at shoulder height',
      'Make small circles forward',
      'Gradually increase circle size',
      'Reverse direction after prescribed time'
    ],
    safetyNotes: [
      'Keep shoulders down',
      'Don\'t force range of motion',
      'Stop if shoulders hurt'
    ],
    modifications: {
      beginner: 'Smaller circles or one arm at a time',
      advanced: 'Add light weights or resistance bands',
      equipment_alternatives: {
        'none': 'Shoulder rolls'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Arms parallel to floor', 'Core engaged'],
      execution: ['Control the movement', 'Keep arms straight'],
      common_mistakes: ['Shrugging shoulders', 'Moving too fast'],
      breathing: 'Breathe naturally throughout'
    }
  },

  'dynamic-star': {
    id: 'dynamic-star',
    name: 'Dynamic Star',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['core', 'obliques', 'hamstrings', 'shoulders'],
    difficulty: 2,
    instructions: [
      'Stand with your feet wide apart, arms extended out to the sides at shoulder height, forming a "star" shape.',
      'Keeping your back straight and legs relatively straight, hinge at your hips.',
      'Rotate your torso and reach your right hand towards your left foot.',
      'Return to the starting star position with control.',
      'Repeat on the other side, reaching your left hand towards your right foot.',
      'Continue alternating sides in a fluid, dynamic motion.'
    ],
    safetyNotes: [
      'Maintain a flat back; avoid rounding your spine to reach further.',
      'Keep a slight bend in your knees to protect them.',
      'Control the movement; avoid using jerky momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion; reach for your knee or shin instead of your foot. Widen your stance for more stability.',
      advanced: 'Increase the speed of the movement while maintaining control. Touch the floor outside of your foot.',
      equipment_alternatives: {
        'none': 'Windmill Stretch (static)'
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
        'Stand in a wide star pose, feet wide, arms out.',
        'Core engaged, back straight.'
      ],
      execution: [
        'Hinge at the hips, rotate torso.',
        'Reach opposite hand to opposite foot.',
        'Keep legs straight and back flat.',
        'Return to start and alternate smoothly.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Bending the knees too much.',
        'Losing balance by moving too quickly.'
      ],
      breathing: 'Exhale as you reach down, inhale as you return to the star position.'
    }
  },

  'alternating-step-and-squat': {
    id: 'alternating-step-and-squat',
    name: 'Alternating Step & Squat',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'adductors', 'abductors'],
    difficulty: 2,
    instructions: [
      'Start standing with your feet together.',
      'Step your right foot out to the side, wider than shoulder-width.',
      'Immediately lower your hips into a squat position, keeping your chest up and back straight.',
      'Push off your right foot to return to the starting position with feet together.',
      'Repeat the movement, this time stepping out with your left foot.',
      'Continue alternating sides in a fluid motion.'
    ],
    safetyNotes: [
      'Ensure your knee tracks over your toes when you squat.',
      'Keep your chest lifted and avoid rounding your back.',
      'Control the movement; do not just fall into the squat.'
    ],
    modifications: {
      beginner: 'Reduce the depth of the squat. Step out less wide.',
      advanced: 'Increase the speed. Add a pulse at the bottom of the squat. Hold a light weight at your chest.',
      equipment_alternatives: {
        'none': 'Standard bodyweight squats'
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
        'Stand tall, feet together.',
        'Core engaged, chest up.'
      ],
      execution: [
        'Step out to the side.',
        'Sink hips back and down into a squat.',
        'Keep weight in your heels.',
        'Push off to return to center and switch sides.'
      ],
      common_mistakes: [
        'Knees caving inward.',
        'Leaning too far forward.',
        'Not controlling the descent.'
      ],
      breathing: 'Exhale as you step out and squat, inhale as you return to center.'
    }
  },

  'pelvic-tilts': {
    id: 'pelvic-tilts',
    name: 'Pelvic Tilts',
    category: 'mobility',
    equipment: ['mat'],
    muscleGroups: ['core', 'lower-abs', 'lower-back'],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent, feet flat on the floor hip-width apart, and your spine in a neutral position.',
      'Place your hands on your hips to feel the movement.',
      'Exhale and gently engage your lower abs to press your lower back flat against the floor (posterior tilt). Imagine bringing your pubic bone towards your navel.',
      'Inhale and release the contraction, allowing your lower back to arch slightly away from the floor, creating a small space (anterior tilt). Imagine tilting your pelvis forward.',
      'Continue rocking your pelvis back and forth in this small, controlled motion.',
      'This is a subtle movement focused on awareness and control.'
    ],
    safetyNotes: [
      'Keep the movement small and controlled; do not use your glutes or legs to force it.',
      'The movement should be comfortable and pain-free.',
      'Avoid lifting your hips off the floor.'
    ],
    modifications: {
      beginner: 'Perform an even smaller range of motion. Focus purely on the sensation.',
      advanced: 'Perform the movement while in a glute bridge position for added stability challenge.',
      equipment_alternatives: {
        'none': 'Can be done standing against a wall'
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
        'Lie on back, knees bent, feet flat.',
        'Find a neutral spine position.',
        'Hands on hips to guide the movement.'
      ],
      execution: [
        'Exhale, flatten your low back to the floor.',
        'Inhale, create a small arch in your low back.',
        'Isolate the movement to the pelvis.',
        'Keep upper body relaxed.'
      ],
      common_mistakes: [
        'Using glutes to lift the hips.',
        'Making the movement too large.',
        'Holding breath.'
      ],
      breathing: 'Exhale to flatten the back (posterior tilt), inhale to arch (anterior tilt).'
    }
  },

  'upper-back-rotations': {
    id: 'upper-back-rotations',
    name: 'Upper Back Rotations',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Thoracic Spine',
      'Obliques',
      'Shoulders'
    ],
    difficulty: 2,
    instructions: [
      'Start on all fours (quadruped position) with your hands under your shoulders and knees under your hips.',
      'Place your right hand behind your head, elbow pointing out to the side.',
      'Keeping your hips stable, rotate your upper back to bring your right elbow down towards your left wrist.',
      'Reverse the motion, rotating your chest open to the right side and pointing your right elbow up towards the ceiling.',
      'Follow your elbow with your gaze to encourage the twist through your upper spine.',
      'Complete all repetitions on one side before switching to the other.'
    ],
    safetyNotes: [
      'Initiate the rotation from your upper/mid-back, not your lower back or hips.',
      'Keep your supporting arm straight and strong.',
      'Move slowly and with control; avoid using momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Do not place hand behind head; instead, just reach the arm up.',
      advanced: 'Hold the open position for 2-3 seconds at the top of each rep. Add a \'thread the needle\' stretch between reps.',
      equipment_alternatives: {
        'None': 'Seated torso twists.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Start in a stable tabletop position.',
        'Place one hand behind your head, elbow out.',
        'Keep hips level and core engaged.'
      ],
      execution: [
        'Rotate elbow down towards opposite wrist.',
        'Rotate up, opening chest and pointing elbow to ceiling.',
        'Follow elbow with your eyes.',
        'Isolate the twist in your upper back.'
      ],
      common_mistakes: [
        'Shifting hips side-to-side.',
        'Bending the supporting arm.',
        'Twisting from the lower back.'
      ],
      breathing: 'Exhale as you rotate down, inhale as you rotate open towards the ceiling.'
    }
  },

  'kneeling-pelvic-tilts': {
    id: 'kneeling-pelvic-tilts',
    name: 'Kneeling Pelvic Tilts',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Core',
      'Lower Abs',
      'Lower Back'
    ],
    difficulty: 1,
    instructions: [
      'Start in a tall kneeling position with your knees hip-width apart and your torso upright.',
      'Place your hands on your hips to feel the movement.',
      'Exhale and perform a posterior tilt by tucking your tailbone under and engaging your glutes and lower abs. Imagine bringing your pubic bone up towards your navel.',
      'Inhale and release, performing an anterior tilt by arching your lower back slightly and sticking your tailbone out.',
      'Focus on isolating the movement to the pelvis, keeping your upper body still.',
      'Repeat the movement in a slow, controlled rhythm.'
    ],
    safetyNotes: [
      'The movement should be small and focused, not a large body sway.',
      'Avoid excessive arching in the anterior tilt.',
      'Use a mat or cushion under your knees for comfort.'
    ],
    modifications: {
      beginner: 'Perform the movement with an even smaller range of motion. Can also be done lying on your back.',
      advanced: 'Perform the tilts while holding a light weight at your chest to challenge core stability.',
      equipment_alternatives: {
        'None': 'Can be done standing or lying on the back.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Kneel tall, knees hip-width.',
        'Hands on hips, spine neutral.'
      ],
      execution: [
        'Exhale, tuck your tailbone under (posterior tilt).',
        'Inhale, untuck and slightly arch (anterior tilt).',
        'Keep shoulders and chest still.',
        'Isolate the movement to the pelvis.'
      ],
      common_mistakes: [
        'Moving the whole torso.',
        'Arching the back too much.',
        'Rushing the movement.'
      ],
      breathing: 'Exhale on the posterior tuck, inhale on the anterior arch.'
    }
  },

  'froggers': {
    id: 'froggers',
    name: 'Froggers',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Groin',
      'Core',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Start in a high plank position with your hands directly under your shoulders.',
      'Engage your core and keep your back flat.',
      'In one explosive movement, jump both feet forward to the outside of your hands, landing in a deep squat position.',
      'Try to land softly with your heels on the ground.',
      'Pause for a moment in the deep squat.',
      'Jump your feet back to the starting high plank position. This is one repetition.'
    ],
    safetyNotes: [
      'Keep your core engaged throughout to protect your lower back.',
      'Land softly to minimize impact on your joints.',
      'If you cannot get your heels down in the squat, that\'s okay; work within your mobility range.'
    ],
    modifications: {
      beginner: 'Instead of jumping, step one foot forward at a time, then step back one at a time.',
      advanced: 'Increase the speed. Add a small hop or a full jump squat from the deep squat position.',
      equipment_alternatives: {
        'None': 'Deep squat hold.'
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
        'Start in a strong high plank.',
        'Core tight, back flat.'
      ],
      execution: [
        'Jump feet to the outside of your hands.',
        'Land in a low squat, chest up.',
        'Jump back to plank with control.',
        'Maintain a fluid motion.'
      ],
      common_mistakes: [
        'Letting hips sag in the plank.',
        'Rounding the back in the squat.',
        'Landing heavily.'
      ],
      breathing: 'Exhale as you jump forward, inhale as you jump back.'
    }
  },

  'bench-t-spine-stretch': {
    id: 'bench-t-spine-stretch',
    name: 'Bench T-Spine Stretch',
    category: 'mobility',
    equipment: ['Bench'],
    muscleGroups: ['Thoracic Spine (Upper Back)', 'Lats', 'Shoulders'],
    difficulty: 1,
    instructions: [
      'Kneel on the floor in front of a flat bench.',
      'Place your elbows on the edge of the bench, about shoulder-width apart.',
      'You can clasp your hands together or hold a small stick.',
      'Slowly lower your head and chest towards the floor, allowing your upper back to extend and your chest to open.',
      'Sit your hips back towards your heels to deepen the stretch.',
      'You should feel a deep stretch in your lats, triceps, and especially your upper/mid-back.',
      'Hold the stretch, breathing deeply.',
      'To come out, gently walk your knees forward.'
    ],
    safetyNotes: ['The movement should be gentle. Do not force your chest to the floor.', 'Avoid arching excessively in the lower back; focus the extension on the upper back.'],
    modifications: {
      beginner: 'Use a higher surface if a bench is too low. Don\'t sink as deep into the stretch.',
      advanced: 'Hold a light weight or PVC pipe to add a gentle pull into the stretch.',
      equipment_alternatives: {
        'Bench': 'Chair or Couch'
      }
    },
    metrics: { type: 'time', defaultValue: 60, progressionRate: 15, unit: 'seconds' },
    coaching: {
      setup: ['Kneel in front of a bench.', 'Place your elbows on the edge.'],
      execution: ['Drop your chest and head towards the floor.', 'Sit your hips back to your heels.', 'Breathe into your upper back and feel it open up.', 'Relax into the stretch.'],
      common_mistakes: ['Arching the low back instead of the upper back.', 'Holding your breath.', 'Being too tense.'],
      breathing: 'Breathe deeply and slowly to help the muscles release.'
    }
  },

  'sole-lifts-seated': {
    id: 'sole-lifts-seated',
    name: 'Sole Lifts (Seated)',
    category: 'mobility',
    equipment: ['Chair'],
    muscleGroups: ['Tibialis Anterior (Shin Muscle)'],
    difficulty: 1,
    instructions: [
      'Sit upright in a chair with your feet flat on the floor and your knees bent at a 90-degree angle.',
      'Keeping your heels on the ground, lift the front of both your feet (your toes and soles) towards your shins.',
      'You should feel a contraction in the muscles at the front of your lower legs (shins).',
      'Hold the peak contraction for a moment.',
      'Slowly lower your feet back to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'Perform the movement in a slow, controlled manner.',
      'Avoid rocking your body to lift your feet; the movement should be isolated to your ankles.',
      'Ensure your chair is stable and on a flat surface.'
    ],
    modifications: {
      beginner: 'Perform the movement with a smaller range of motion.',
      advanced: 'Add a resistance band around the front of your feet, anchored under your heels, to increase resistance.',
      equipment_alternatives: {
        'None': 'Can be performed while seated anywhere.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Sit tall in a chair, feet flat on the floor.'
      ],
      execution: [
        'Keep heels down.',
        'Lift your toes and the front of your foot up.',
        'Squeeze the muscle at the front of your shin.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Lifting the heels off the ground.',
        'Using momentum or rocking the body.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'kneecap-jiggle-seated': {
    id: 'kneecap-jiggle-seated',
    name: 'Kneecap Jiggle (Seated)',
    category: 'mobility',
    equipment: ['Chair'],
    muscleGroups: ['Knee Joint'],
    difficulty: 1,
    instructions: [
      'Sit on a chair or the floor with your leg extended straight out in front of you.',
      'Completely relax your quadriceps (thigh) muscle. The kneecap cannot move if the quad is tense.',
      'Place your thumb and index finger on either side of your kneecap (patella).',
      'Gently and passively move the kneecap from side to side.',
      'The movement should be small, easy, and pain-free, like a gentle \'jiggle\'.',
      'Continue for the desired duration, then switch legs.'
    ],
    safetyNotes: [
      'This must be a completely passive and gentle movement. Do not force the kneecap to move.',
      'If you feel any pain, stop immediately.',
      'Ensure your thigh muscle is fully relaxed before starting.'
    ],
    modifications: {
      beginner: 'Start with very small movements. You can also try moving the kneecap up and down.',
      advanced: 'This is a passive mobility drill; advancement is not the goal. Consistency is key.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere you can extend your leg.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit with one leg extended.',
        'Completely relax your thigh muscle.'
      ],
      execution: [
        'Gently grasp the sides of your kneecap.',
        'Wiggle it gently from side to side.',
        'The movement should feel loose and easy.',
        'Keep the thigh relaxed at all times.'
      ],
      common_mistakes: [
        'Tensing the quadriceps muscle.',
        'Trying to force the kneecap to move too far.',
        'Performing the movement too aggressively.'
      ],
      breathing: 'Breathe normally and stay relaxed.'
    }
  },

  'ankle-gliding': {
    id: 'ankle-gliding',
    name: 'Ankle Gliding',
    category: 'mobility',
    equipment: ['Wall', 'Ball (optional)'],
    muscleGroups: ['Ankle Joint', 'Calves'],
    difficulty: 1,
    instructions: [
      'Stand facing a wall with your hands on the wall for support.',
      'Step one foot forward and the other back.',
      'Keeping the heel of your front foot on the ground, slowly bend your front knee and lean forward, bringing your knee towards the wall.',
      'You should feel a stretch in your ankle and calf.',
      'Go as far as you can without your heel lifting off the floor.',
      'Hold for a moment at the end range, then return to the start.',
      'A ball can be placed under the arch of the foot for added feedback.'
    ],
    safetyNotes: [
      'The movement should be slow and controlled.',
      'Do not allow the heel to lift off the floor.',
      'Stop if you feel any sharp pain in the front of the ankle (impingement).'
    ],
    modifications: {
      beginner: 'Do not lean as far forward; work within a smaller range of motion.',
      advanced: 'Place a weight or kettlebell on the front knee to apply gentle overpressure.',
      equipment_alternatives: {
        'None': 'Can be performed without wall support.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'repetitions per side'
    },
    coaching: {
      setup: [
        'Stand facing a wall in a staggered stance.',
        'Keep front heel planted firmly on the ground.'
      ],
      execution: [
        'Drive your knee forward over your toes.',
        'Feel the stretch in your ankle and calf.',
        'Push the range of motion gently.',
        'Return to the start with control.'
      ],
      common_mistakes: [
        'Lifting the heel.',
        'Allowing the knee to collapse inward.',
        'Moving too quickly.'
      ],
      breathing: 'Exhale as you lean forward, inhale as you return.'
    }
  },

  'single-leg-ankle-circle': {
    id: 'single-leg-ankle-circle',
    name: 'Single-Leg Ankle Circle',
    category: 'mobility',
    equipment: ['Chair (optional, for balance)'],
    muscleGroups: ['Ankle Joint'],
    difficulty: 1,
    instructions: [
      'Stand on one leg, holding onto a chair or wall for balance if needed.',
      'Lift your other foot off the ground.',
      'Slowly and with control, draw large circles with your lifted foot, initiating the movement from the ankle.',
      'Perform the desired number of circles in one direction, then reverse.',
      'Keep the rest of your leg still; the movement should be isolated to the ankle.',
      'Switch legs and repeat.'
    ],
    safetyNotes: [
      'Focus on slow, deliberate movements, not speed.',
      'Use support for balance to allow for better ankle isolation.'
    ],
    modifications: {
      beginner: 'Perform while seated in a chair. Make smaller circles.',
      advanced: 'Perform without any support for a greater balance challenge. Try to draw letters of the alphabet with your foot.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere with balance support.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'circles in each direction per side'
    },
    coaching: {
      setup: [
        'Stand on one leg, using support if needed.',
        'Lift the other foot off the floor.'
      ],
      execution: [
        'Draw a large, slow circle with your ankle.',
        'Isolate the movement to the ankle joint.',
        'Reverse the direction.',
        'Keep your balance and posture tall.'
      ],
      common_mistakes: [
        'Moving the entire leg instead of just the ankle.',
        'Rushing the movement.',
        'Losing balance.'
      ],
      breathing: 'Breathe steadily and continuously.'
    }
  },

  'lower-leg-sequence': {
    id: 'lower-leg-sequence',
    name: 'Lower Leg Sequence',
    category: 'mobility',
    equipment: ['Chair'],
    muscleGroups: ['Calves', 'Shins', 'Ankles'],
    difficulty: 1,
    instructions: [
      'This is a combination of movements to mobilize the lower leg and ankle.',
      'Part 1 (Calf Stretch): Sit on a chair and extend one leg. Place the other foot over the top of the extended foot\'s toes. Gently press down to stretch the calf.',
      'Part 2 (Shin Stretch): From the same position, hook your top foot under the extended foot and gently pull up to stretch the shin muscles.',
      'Part 3 (Ankle Rotations): Sit or stand and perform slow, controlled ankle circles in both directions.',
      'Part 4 (Point and Flex): Repeatedly point your toes away from you (plantarflexion) and then pull them back towards your shin (dorsiflexion).'
    ],
    safetyNotes: [
      'All movements should be gentle and pain-free.',
      'Do not apply excessive pressure during the stretches.'
    ],
    modifications: {
      beginner: 'Perform each movement with less intensity and for a shorter duration.',
      advanced: 'Increase the duration of holds and the number of repetitions.',
      equipment_alternatives: {
        'None': 'Can be performed on the floor without a chair.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 90,
      progressionRate: 10,
      unit: 'seconds per side for the entire sequence'
    },
    coaching: {
      setup: [
        'Sit comfortably in a chair to begin the sequence.'
      ],
      execution: [
        'Flow smoothly between the calf stretch, shin stretch, ankle rotations, and point/flex movements.',
        'Focus on feeling the stretch and activation in the target muscles.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Forcing a stretch.',
        'Not isolating ankle movements.'
      ],
      breathing: 'Breathe deeply and continuously throughout the sequence.'
    }
  },

  'squat-rock': {
    id: 'squat-rock',
    name: 'Squat Rock',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['Hips', 'Ankles', 'Groin'],
    difficulty: 1,
    instructions: [
      'Start in a deep squat position, with your feet as close together as your mobility allows.',
      'Keep your heels on the ground if possible.',
      'Place your elbows on the inside of your knees.',
      'Gently and slowly, shift your weight from one foot to the other.',
      'This \'rocking\' motion helps to mobilize the ankles and hips in the deep squat position.',
      'Continue rocking side-to-side for the desired duration.'
    ],
    safetyNotes: [
      'Only go as deep into the squat as you can while maintaining good form and keeping heels down.',
      'If you cannot keep your heels down, elevate them on a small book or plate.',
      'The rocking motion should be gentle.'
    ],
    modifications: {
      beginner: 'Hold onto a stable object for support. Don\'t squat as deeply.',
      advanced: 'Try to bring your feet closer together. Press your elbows into your knees to open the hips.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere with adequate space.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 5,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Get into a deep squat position.',
        'Keep your chest up and heels down.'
      ],
      execution: [
        'Slowly shift your weight from left to right.',
        'Feel the stretch alternate in your ankles and hips.',
        'Use your elbows to gently press your knees outward.'
      ],
      common_mistakes: [
        'Lifting the heels.',
        'Rounding the back excessively.',
        'Rocking too fast.'
      ],
      breathing: 'Breathe deeply and continuously.'
    }
  }
};

export default MOBILITY_EXERCISES;
