import { Exercise } from '../types';

export const STRENGTH_EXERCISES: Record<string, Exercise> = {
  'push-up': {
    id: 'push-up',
    name: 'Push-up',
    category: 'strength',
    equipment: [],
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 2,
    instructions: [
      'Start in plank position with hands slightly wider than shoulders',
      'Lower body until chest nearly touches floor',
      'Push back up to starting position',
      'Keep body in straight line throughout movement'
    ],
    safetyNotes: ['Avoid sagging hips', 'Don\'t let elbows flare too wide'],
    modifications: {
      beginner: 'Knee push-ups or incline push-ups against wall/bench',
      advanced: 'Diamond push-ups, archer push-ups, or single-arm push-ups',
      equipment_alternatives: {
        'resistance-bands': 'Resistance band chest press',
        'dumbbells': 'Dumbbell chest press',
        'barbell': 'Bench press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Hands under shoulders', 'Straight line from head to heels'],
      execution: ['Control the descent', 'Full range of motion', 'Squeeze chest at top'],
      common_mistakes: ['Sagging hips', 'Partial range of motion', 'Too fast tempo'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'diamond-push-up': {
    id: 'diamond-push-up',
    name: 'Diamond Push-up',
    category: 'strength',
    equipment: [],
    muscleGroups: ['triceps', 'chest', 'shoulders', 'core'],
    difficulty: 4,
    instructions: [
      'Start in plank position with hands forming diamond shape under chest',
      'Lower body until chest touches hands',
      'Push back up to starting position',
      'Keep elbows close to body'
    ],
    safetyNotes: ['May strain wrists - use push-up handles if needed'],
    modifications: {
      beginner: 'Knee diamond push-ups or incline diamond push-ups',
      advanced: 'Single-arm diamond push-ups',
      equipment_alternatives: {
        'dumbbells': 'Close-grip dumbbell press',
        'barbell': 'Close-grip bench press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 15,
      unit: 'reps'
    },
    coaching: {
      setup: ['Diamond hand position', 'Tight core'],
      execution: ['Elbows close to body', 'Full range of motion'],
      common_mistakes: ['Elbows flaring out', 'Incomplete range'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'squat': {
    id: 'squat',
    name: 'Bodyweight Squat',
    category: 'strength',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower hips back and down as if sitting in chair',
      'Keep chest up and knees tracking over toes',
      'Lower until thighs parallel to floor',
      'Drive through heels to return to standing'
    ],
    modifications: {
      beginner: 'Chair-assisted squats or partial range of motion',
      advanced: 'Jump squats, pistol squats, or single-leg squats',
      equipment_alternatives: {
        'dumbbells': 'Goblet squats',
        'kettlebells': 'Kettlebell squats',
        'barbell': 'Back squats',
        'resistance-bands': 'Banded squats'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 15,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width apart', 'Toes slightly turned out'],
      execution: ['Hips back first', 'Knees track over toes', 'Full depth'],
      common_mistakes: ['Knees caving in', 'Forward lean', 'Not going deep enough'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'lunge': {
    id: 'lunge',
    name: 'Forward Lunge',
    category: 'strength',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'calves'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart',
      'Step forward with one leg',
      'Lower hips until both knees bent at 90 degrees',
      'Push back to starting position',
      'Alternate legs or complete one side first'
    ],
    modifications: {
      beginner: 'Reverse lunges or assisted lunges',
      advanced: 'Jump lunges or walking lunges',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell lunges',
        'kettlebells': 'Kettlebell lunges',
        'barbell': 'Barbell lunges'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 15,
      unit: 'reps per leg'
    },
    coaching: {
      setup: ['Upright posture', 'Core engaged'],
      execution: ['90-degree angles', 'Front knee over ankle', 'Back knee toward floor'],
      common_mistakes: ['Knee over toe', 'Leaning forward', 'Short steps'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'lat-pulldown': {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    category: 'strength',
    equipment: ['Lat Pulldown Machine'],
    muscleGroups: ['Back (Latissimus Dorsi)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Sit on the lat pulldown machine, adjusting the knee pad to secure your thighs under it.',
      'Grasp the bar with a wide, overhand grip, hands slightly wider than shoulder-width apart.',
      'Lean back slightly (about 10-20 degrees), keeping your chest up and core engaged.',
      'Pull the bar down towards your upper chest, squeezing your shoulder blades together and driving your elbows down towards your hips.',
      'Slowly release the bar back up to the starting position, controlling the eccentric phase and allowing a full stretch in your lats.'
    ],
    safetyNotes: [
      'Do not lean back excessively or use momentum to pull the weight down.',
      'Maintain a controlled movement; do not let the weight stack slam down.',
      'Avoid shrugging your shoulders up towards your ears; keep them depressed.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Focus on feeling the lats work.',
      advanced: 'Increase the weight, or incorporate a pause at the bottom contraction. Use different grip attachments (e.g., close grip, neutral grip).',
      equipment_alternatives: {
        'Lat Pulldown Machine': 'Pull Up (bodyweight)',
        'dumbbells': 'Dumbbell Pullover'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 15,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Secure knees under pad, grasp bar wide overhand.',
        'Lean back slightly, chest up, core braced.',
        'Shoulders depressed, ready to pull.'
      ],
      execution: [
        'Drive elbows down, squeezing shoulder blades together.',
        'Pull bar to upper chest, feeling lats contract.',
        'Control the ascent, allowing full lat stretch.'
      ],
      common_mistakes: [
        'Using too much momentum or body swing.',
        'Shrugging shoulders instead of depressing them.',
        'Not getting a full stretch at the top.'
      ],
      breathing: 'Exhale as you pull the bar down, inhale as you release it up.'
    }
  },

  'dumbbell-row': {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    category: 'strength',
    equipment: ['dumbbells', 'bench'],
    muscleGroups: ['Back (Latissimus Dorsi)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Place a dumbbell on one side of a flat bench. Place your opposite knee and hand on the bench for support, keeping your back flat.',
      'Grasp the dumbbell with an overhand grip, allowing it to hang straight down towards the floor, arm fully extended.',
      'Keeping your back straight and core engaged, pull the dumbbell upwards towards your hip, driving your elbow towards the ceiling.',
      'Squeeze your back muscles at the top of the movement.',
      'Slowly lower the dumbbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Do not twist your torso excessively; focus on pulling with your back muscles.',
      'Use a weight you can control; avoid jerking the dumbbell up.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbell and focus on feeling the back muscles work. Perform with both feet on the floor for more stability.',
      advanced: 'Increase the weight, or perform with a slower eccentric phase and a pause at the top contraction.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Row',
        'cable-machine': 'Cable Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Knee and hand on bench, back flat, core braced.',
        'Dumbbell hanging straight down, arm extended.',
        'Shoulder of working arm relaxed, ready to pull.'
      ],
      execution: [
        'Pull dumbbell to hip, driving elbow up and back.',
        'Squeeze shoulder blade and lat at the top.',
        'Control the descent, feeling the stretch in the lat.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Twisting the torso too much.',
        'Using momentum instead of muscle control.'
      ],
      breathing: 'Exhale as you pull the dumbbell up, inhale as you lower it down.'
    }
  },

  'cable-row': {
    id: 'cable-row',
    name: 'Cable Row',
    category: 'strength',
    equipment: ['cable-machine'],
    muscleGroups: ['Back (Rhomboids, Trapezius, Latissimus Dorsi)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Sit on the bench of a cable row machine, placing your feet firmly on the footplate.',
      'Grasp the handle attachment (e.g., V-bar) with both hands, arms extended, leaning slightly forward.',
      'Keep your back straight and chest up. Pull the handle towards your lower abdomen/upper waist, squeezing your shoulder blades together.',
      'Drive your elbows back and keep them close to your body.',
      'Slowly release the handle back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Avoid rounding your lower back; maintain a slight arch or neutral spine.',
      'Do not lean back excessively or use momentum to pull the weight.',
      'Control the eccentric phase; do not let the weight stack pull you forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on feeling the back muscles contract. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction. Use different grip attachments to vary muscle emphasis.',
      equipment_alternatives: {
        'cable-machine': 'Dumbbell Row',
        'barbell': 'Barbell Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 15,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit tall, feet on footplate, grip handle.',
        'Back straight, chest up, slight forward lean.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull handle to lower abs, squeezing shoulder blades together.',
        'Drive elbows back, keeping them close to torso.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using too much body swing or momentum.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handle, inhale as you release it.'
    }
  },

  'dumbbell-bent-over-row': {
    id: 'dumbbell-bent-over-row',
    name: 'Dumbbell Bent Over Row',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand, palms facing each other (neutral grip).',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor.',
      'Allow the dumbbells to hang straight down towards the floor, with a slight bend in your elbows.',
      'Keeping your back straight, pull the dumbbells upwards towards your chest, driving your elbows towards the ceiling and squeezing your shoulder blades together.',
      'Slowly lower the dumbbells back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine, especially in the lower back.',
      'Use a weight you can control; avoid jerking the dumbbells up or using momentum.',
      'Keep your core engaged to protect your spine.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on mastering the hip hinge and feeling the back muscles work. Perform one arm at a time with bench support (Dumbbell Row).',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform with a pronated grip to target different back muscles.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Bent Over Row',
        'machine': 'Machine Row'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Dumbbells hanging, neutral grip, slight elbow bend.',
        'Gaze down to maintain neutral neck.'
      ],
      execution: [
        'Pull dumbbells to chest, driving elbows up and back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum to swing the weights.',
        'Not keeping the torso stable.'
      ],
      breathing: 'Exhale as you pull the dumbbells up, inhale as you lower them.'
    }
  },

  'bent-over-barbell-row': {
    id: 'bent-over-barbell-row',
    name: 'Bent Over Barbell Row',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Forearms'],
    difficulty: 3,
    instructions: [
      'Stand with feet hip-width apart, holding a barbell with an overhand grip, hands slightly wider than shoulder-width.',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor.',
      'Allow the barbell to hang straight down towards the floor, with a slight bend in your knees.',
      'Keeping your back straight, pull the barbell upwards towards your upper abdomen, driving your elbows towards the ceiling and squeezing your shoulder blades together.',
      'Slowly lower the barbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; rounding your spine can lead to serious injury.',
      'Use a weight you can control; avoid jerking the barbell up or using momentum.',
      'Keep your core engaged to protect your spine.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Bent Over Row) to master the hip hinge and back contraction.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Use a supinated (underhand) grip to emphasize biceps and lower lats.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'cable-machine': 'Cable Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Barbell hanging, overhand grip, slight knee bend.',
        'Gaze down to maintain neutral neck.'
      ],
      execution: [
        'Pull barbell to upper abdomen, driving elbows up and back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum to swing the weight.',
        'Not keeping the torso stable.'
      ],
      breathing: 'Exhale as you pull the barbell up, inhale as you lower it down.'
    }
  },

  'kettlebell-row': {
    id: 'kettlebell-row',
    name: 'Kettlebell Row',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart, holding a kettlebell in one hand, palms facing your body (neutral grip).',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor, allowing the kettlebell to hang straight down.',
      'Place your non-working hand on a bench or your knee for support (optional).',
      'Keeping your back straight, pull the kettlebell upwards towards your hip, driving your elbow towards the ceiling and squeezing your shoulder blade.',
      'Slowly lower the kettlebell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine, especially in the lower back.',
      'Use a weight you can control; avoid jerking the kettlebell up or using momentum.',
      'Keep your core engaged to protect your spine.'
    ],
    modifications: {
      beginner: 'Use lighter kettlebell and focus on feeling the back muscles work. Perform with both feet on the floor and both hands on a bench for support.',
      advanced: 'Increase the weight, or incorporate a slower eccentric phase and a pause at the top contraction. Perform without additional support.',
      equipment_alternatives: {
        'kettlebells': 'Dumbbell Row',
        'cable-machine': 'Cable Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Kettlebell hanging straight down, neutral grip.',
        'Non-working hand on support (optional), ready to pull.'
      ],
      execution: [
        'Pull kettlebell to hip, driving elbow up and back.',
        'Squeeze shoulder blade and lat at the top.',
        'Control the descent, feeling the stretch in the lat.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Twisting the torso too much.',
        'Using momentum instead of muscle control.'
      ],
      breathing: 'Exhale as you pull the kettlebell up, inhale as you lower it down.'
    }
  },

  'landmine-row': {
    id: 'landmine-row',
    name: 'Landmine Row',
    category: 'strength',
    equipment: ['barbell', 'landmine-attachment'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Insert one end of a barbell into a landmine attachment or securely wedge it into a corner of a wall.',
      'Stand straddling the barbell, facing the anchored end, with feet hip-width apart and knees slightly bent.',
      'Hinge forward at your hips, keeping your back straight, and grasp the free end of the barbell with one or both hands (V-bar attachment can be used).',
      'Pull the barbell upwards towards your chest/abdomen, driving your elbows back and squeezing your shoulder blades together.',
      'Slowly lower the barbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Ensure the barbell is securely anchored to prevent it from slipping.',
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Use a weight you can control; avoid jerking the barbell up or using momentum.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on feeling the back muscles work. Perform with both hands for more stability.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-arm landmine rows for unilateral focus.',
      equipment_alternatives: {
        'landmine-attachment': 'Dumbbell Row',
        'cable-machine': 'Cable Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell anchored, straddle it, feet hip-width, knees bent.',
        'Hinge at hips, flat back, grip barbell end.',
        'Core braced, ready to pull.'
      ],
      execution: [
        'Pull barbell to chest/abdomen, driving elbows back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum to swing the weight.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the barbell up, inhale as you lower it down.'
    }
  },

  'machine-row': {
    id: 'machine-row',
    name: 'Machine Row',
    category: 'strength',
    equipment: ['row-machine'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps'],
    difficulty: 1,
    instructions: [
      'Adjust the seat height and chest pad (if applicable) so you are comfortably positioned with your chest against the pad and feet on the footplate.',
      'Grasp the handles with a neutral grip (palms facing each other) or overhand grip, arms extended.',
      'Keep your back straight and chest up. Pull the handles towards your lower abdomen/upper waist, squeezing your shoulder blades together.',
      'Drive your elbows back and keep them close to your body.',
      'Slowly release the handles back to the starting position, controlling the weight stack and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your back flat against the pad; avoid rounding or excessive arching.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Use different grip attachments to vary muscle emphasis.',
      equipment_alternatives: {
        'row-machine': 'Cable Row',
        'dumbbells': 'Dumbbell Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, chest against pad (if applicable).',
        'Grip handles, arms extended, back straight, chest up.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull handles to lower abs, squeezing shoulder blades together.',
        'Drive elbows back, keeping them close to torso.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Using too much weight and pulling with arms only.',
        'Rounding the back or shrugging shoulders.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handles, inhale as you release them.'
    }
  },

  'hammerstrength-high-row': {
    id: 'hammerstrength-high-row',
    name: 'Hammerstrength High Row',
    category: 'strength',
    equipment: ['hammerstrength-machine'],
    muscleGroups: ['Back (Upper Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps'],
    difficulty: 2,
    instructions: [
      'Adjust the seat height so the handles are at chest height or slightly above when seated.',
      'Sit firmly against the back pad, grasping the handles with a neutral grip (palms facing each other) or overhand grip.',
      'Keep your chest up and core engaged. Pull the handles downwards and towards your upper chest/face, driving your elbows back and wide.',
      'Squeeze your upper back and lats at the peak contraction.',
      'Slowly return the handles to the starting position, controlling the weight stack and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your back flat against the pad; avoid rounding or excessive arching.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Use a single arm for unilateral focus.',
      equipment_alternatives: {
        'hammerstrength-machine': 'Lat Pulldown',
        'cable-machine': 'Cable Face Pull'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, chest up.',
        'Grip handles, arms extended, back straight.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull handles towards upper chest, driving elbows back and wide.',
        'Squeeze upper back and lats forcefully.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Using too much weight and pulling with arms only.',
        'Rounding the back or shrugging shoulders.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handles, inhale as you release them.'
    }
  },

  'hammerstrength-iso-row': {
    id: 'hammerstrength-iso-row',
    name: 'Hammerstrength Iso Row',
    category: 'strength',
    equipment: ['hammerstrength-machine'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps'],
    difficulty: 2,
    instructions: [
      'Adjust the seat height so the handles are at mid-chest level when seated.',
      'Sit firmly against the back pad, grasping one handle with a neutral grip (palms facing each other) or overhand grip, arm extended.',
      'Keep your chest up and core engaged. Pull the handle towards your hip/lower abdomen, driving your elbow back.',
      'Squeeze your back muscles and shoulder blade at the peak contraction.',
      'Slowly return the handle to the starting position, controlling the weight stack and allowing a full stretch in your back, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your back flat against the pad; avoid rounding or excessive arching.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Perform with a different grip variation.',
      equipment_alternatives: {
        'hammerstrength-machine': 'Dumbbell Row',
        'cable-machine': 'Cable Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, chest up.',
        'Grip one handle, arm extended, back straight.',
        'Shoulder relaxed, ready to pull.'
      ],
      execution: [
        'Pull handle to hip/lower abdomen, driving elbow back.',
        'Squeeze shoulder blade and lat forcefully.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Using too much weight and pulling with arm only.',
        'Rounding the back or shrugging shoulder.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handle, inhale as you release it.'
    }
  },

  'incline-dumbbell-row': {
    id: 'incline-dumbbell-row',
    name: 'Incline Dumbbell Row',
    category: 'strength',
    equipment: ['dumbbells', 'incline-bench'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Set an adjustable bench to a low incline (e.g., 30-45 degrees).',
      'Lie face down on the bench with a dumbbell in each hand, palms facing each other (neutral grip), arms hanging straight down towards the floor.',
      'Keep your chest pressed against the bench and your core engaged.',
      'Pull the dumbbells upwards towards your chest/hips, driving your elbows towards the ceiling and squeezing your shoulder blades together.',
      'Slowly lower the dumbbells back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid jerking the dumbbells up or using momentum.',
      'Keep your chest pressed against the bench to prevent lower back strain.',
      'Control the movement; do not let the dumbbells drop quickly.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on feeling the back muscles work. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform with a pronated grip to target different back muscles.',
      equipment_alternatives: {
        'dumbbells': 'Cable Row (seated)',
        'machine': 'Machine Row'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie prone on incline bench, dumbbells hanging, neutral grip.',
        'Chest pressed against bench, core braced.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull dumbbells to chest/hips, driving elbows up and back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Lifting chest off the bench.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the dumbbells up, inhale as you lower them.'
    }
  },

  'shotgun-row': {
    id: 'shotgun-row',
    name: 'Shotgun Row',
    category: 'strength',
    equipment: ['cable-machine', 'd-handle'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids)', 'Biceps'],
    difficulty: 2,
    instructions: [
      'Attach a D-handle to a low pulley on a cable machine.',
      'Stand facing the machine at a slight angle, with one foot forward for stability, and grasp the handle with one hand.',
      'Lean back slightly from your hips, keeping your back straight and core engaged.',
      'Pull the handle towards your chest, rotating your wrist so your palm faces your body at the end of the movement, squeezing your shoulder blade.',
      'Slowly release the handle back to the starting position, controlling the eccentric phase and allowing a full stretch in your back, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid jerking the handle or using excessive momentum.',
      'Maintain a stable torso; avoid excessive leaning or twisting.',
      'Control the eccentric phase; do not let the cable pull you forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on feeling the back muscles work. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Use a higher pulley setting to change the angle of pull.',
      equipment_alternatives: {
        'cable-machine': 'Dumbbell Row (single arm)',
        'resistance-bands': 'Resistance Band Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Stand at slight angle, one foot forward, grip handle.',
        'Slight lean back from hips, back straight, core braced.',
        'Shoulder relaxed, ready to pull.'
      ],
      execution: [
        'Pull handle to chest, rotating wrist, squeezing shoulder blade.',
        'Focus on back contraction, not just arm pull.',
        'Control the return, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the body.',
        'Rounding the back.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handle, inhale as you release it.'
    }
  },

  'kettlebell-alternating-row': {
    id: 'kettlebell-alternating-row',
    name: 'Kettlebell Alternating Row',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Core (stabilizer)'],
    difficulty: 3,
    instructions: [
      'Place two kettlebells on the floor in front of you, shoulder-width apart.',
      'Hinge forward at your hips, keeping your back straight and core engaged, grasping both kettlebells with a neutral grip (palms facing each other).',
      'Maintain a stable torso and pull one kettlebell upwards towards your hip, driving your elbow towards the ceiling and squeezing your shoulder blade.',
      'Slowly lower that kettlebell back to the floor, then immediately pull the other kettlebell upwards, alternating sides in a controlled manner.',
      'Keep your hips and torso as still as possible throughout the alternating movement.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Use a weight you can control; avoid jerking the kettlebells up or using momentum.',
      'Keep your core strongly engaged to prevent torso rotation and lower back strain.'
    ],
    modifications: {
      beginner: 'Use lighter kettlebells. Perform one arm at a time, resting the non-working hand on a bench for support (Kettlebell Row).',
      advanced: 'Increase the weight, or perform with a slower eccentric phase and a pause at the top contraction.',
      equipment_alternatives: {
        'kettlebells': 'Dumbbells (Alternating Dumbbell Row)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Kettlebells on floor, hinge at hips, flat back, grip both.',
        'Core braced, gaze down, neutral neck.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull one kettlebell to hip, driving elbow up and back.',
        'Squeeze shoulder blade and lat at the top.',
        'Control the descent, then immediately pull the other side.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Excessive torso rotation or swinging.',
        'Using momentum instead of muscle control.'
      ],
      breathing: 'Exhale with each pull, inhale as you lower.'
    }
  },

  'seated-leg-curl': {
    id: 'seated-leg-curl',
    name: 'Seated Leg Curl',
    category: 'strength',
    equipment: ['seated-leg-curl-machine'],
    muscleGroups: ['Hamstrings'],
    difficulty: 1,
    instructions: [
      'Adjust the machine so your knees are aligned with the pivot point and the shin pad rests comfortably above your ankles.',
      'Sit firmly in the seat, gripping the handles for stability.',
      'Engage your hamstrings to curl your heels towards your glutes, pulling the shin pad down.',
      'Squeeze your hamstrings at the peak contraction.',
      'Slowly return the weight to the starting position, controlling the eccentric movement and allowing a full stretch in your hamstrings.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on hamstring isolation.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your hips firmly on the seat; avoid lifting them during the curl.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'seated-leg-curl-machine': 'Lying Hamstring Curl Machine',
        'stability-ball': 'Stability Ball Hamstring Curl'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Align knees with pivot, shin pad above ankles.',
        'Sit firmly, grip handles, back pressed against pad.',
        'Ensure a full range of motion is possible.'
      ],
      execution: [
        'Focus on curling heels towards glutes using hamstrings.',
        'Squeeze hamstrings forcefully at the bottom.',
        'Control the return, resisting the weight stack.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the legs.',
        'Lifting hips off the seat.',
        'Not allowing a full stretch at the top.'
      ],
      breathing: 'Exhale as you curl, inhale as you return to the start.'
    }
  },

  'dumbbell-romanian-deadlift': {
    id: 'dumbbell-romanian-deadlift',
    name: 'Dumbbell Romanian Deadlift',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand in front of your thighs, palms facing your body.',
      'Keep a slight bend in your knees throughout the entire movement.',
      'Hinge at your hips, pushing your glutes back as the dumbbells descend along your shins, keeping your back straight.',
      'Lower the dumbbells until you feel a strong stretch in your hamstrings, typically just below your knees or mid-shin.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a straight back; avoid rounding your spine, especially in the lower back.',
      'Do not go lower than your flexibility allows; stop when you feel a strong hamstring stretch.',
      'Keep the dumbbells close to your body throughout the movement.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on mastering the hip hinge movement pattern. Reduce the range of motion.',
      advanced: 'Increase the weight, or perform on one leg (Single Leg Romanian Deadlift) for increased stability challenge.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Romanian Deadlift',
        'kettlebells': 'Kettlebell Romanian Deadlift'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 5,
      unit: 'kg per dumbbell'
    },
    coaching: {
      setup: [
        'Feet hip-width, slight knee bend.',
        'Dumbbells in front of thighs, shoulders back and down.',
        'Brace core, maintain neutral spine.'
      ],
      execution: [
        'Initiate by pushing hips back, not bending knees forward.',
        'Keep dumbbells close to legs as they descend.',
        'Feel stretch in hamstrings, squeeze glutes to stand up.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Squatting down instead of hinging at hips.',
        'Letting dumbbells drift away from the body.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'romanian-deadlift': {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift (Barbell)',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 3,
    instructions: [
      'Stand with your feet hip-width apart, holding a barbell in front of your thighs with an overhand grip, hands slightly wider than shoulder-width.',
      'Keep a slight bend in your knees throughout the entire movement, but do not squat down.',
      'Hinge at your hips, pushing your glutes back as the barbell descends along your thighs, keeping your back straight.',
      'Lower the barbell until you feel a strong stretch in your hamstrings, typically just below your knees or mid-shin.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; rounding your back can lead to injury.',
      'Do not go lower than your flexibility allows; stop when you feel a strong hamstring stretch.',
      'Keep the barbell close to your body throughout the movement.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Romanian Deadlift) to master the hip hinge.',
      advanced: 'Increase the weight, or perform with a pause at the bottom of the movement.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'kettlebells': 'Kettlebell'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Feet hip-width, slight knee bend.',
        'Barbell in front of thighs, shoulders back and down.',
        'Brace core, maintain neutral spine.'
      ],
      execution: [
        'Initiate by pushing hips back, not bending knees forward.',
        'Keep barbell close to legs as it descends.',
        'Feel stretch in hamstrings, squeeze glutes to stand up.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Squatting down instead of hinging at hips.',
        'Letting the barbell drift away from the body.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'lying-hamstrings-curl': {
    id: 'lying-hamstrings-curl',
    name: 'Lying Hamstrings Curl',
    category: 'strength',
    equipment: ['lying-leg-curl-machine'],
    muscleGroups: ['Hamstrings'],
    difficulty: 1,
    instructions: [
      'Lie face down on the machine, positioning your Achilles tendons just below the padded lever.',
      'Adjust the machine so your knees are just off the edge of the bench, aligned with the pivot point.',
      'Grasp the handles for stability.',
      'Engage your hamstrings to curl your heels towards your glutes, pulling the shin pad upwards.',
      'Squeeze your hamstrings at the peak contraction.',
      'Slowly return the weight to the starting position, controlling the eccentric movement and allowing a full stretch in your hamstrings.'
    ],
    safetyNotes: [
      'Do not use excessive weight that causes your hips to lift off the bench.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Ensure your knees are properly aligned with the machine\'s pivot point.'
    ],
    modifications: {
      beginner: 'Use lighter weight to focus on mastering the form and mind-muscle connection.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'lying-leg-curl-machine': 'Seated Leg Curl Machine',
        'stability-ball': 'Stability Ball Hamstring Curl'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Lie prone, Achilles tendons under pad, knees off bench.',
        'Align knees with pivot, grip handles.',
        'Ensure full stretch at start.'
      ],
      execution: [
        'Curl heels to glutes using hamstrings, not lower back.',
        'Squeeze hamstrings forcefully at the top.',
        'Control the return, resisting the weight stack.'
      ],
      common_mistakes: [
        'Lifting hips off the bench.',
        'Using momentum to swing the legs.',
        'Not allowing a full stretch at the top.'
      ],
      breathing: 'Exhale as you curl, inhale as you return to the start.'
    }
  },

  'single-leg-romanian-deadlift': {
    id: 'single-leg-romanian-deadlift',
    name: 'Single Leg Romanian Deadlift',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back', 'Core (stabilizer)'],
    difficulty: 3,
    instructions: [
      'Stand tall with feet hip-width apart, holding a dumbbell in one hand (opposite to the standing leg) or no weight.',
      'Shift your weight onto one leg, keeping a slight bend in that knee.',
      'Hinge at your hip, extending the non-standing leg straight back behind you for balance, while lowering your torso and the dumbbell towards the floor.',
      'Keep your back straight and core engaged throughout the movement, forming a straight line from your head to the extended heel.',
      'Engage your glute and hamstring of the standing leg to pull your torso back up to the starting position, squeezing your glute at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; avoid rounding your spine.',
      'Focus on balance and control; it\'s better to use no weight or light weight and maintain good form.',
      'Stop the descent when you feel a strong stretch in the hamstring of the standing leg, or before your back rounds.'
    ],
    modifications: {
      beginner: 'Perform without weight, or hold onto a stable support (wall, chair) for balance.',
      advanced: 'Increase the weight, or perform with a barbell for increased challenge.',
      equipment_alternatives: {
        'dumbbells': 'Kettlebell',
        'bodyweight': 'Bodyweight (no weight)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Shift weight to one leg, slight knee bend.',
        'Shoulders back and down, core braced.',
        'Gaze forward, neutral neck.'
      ],
      execution: [
        'Hinge at hip, extending opposite leg back for counterbalance.',
        'Keep back flat, lower torso and weight with control.',
        'Squeeze glute and hamstring of standing leg to return to start.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Losing balance and falling over.',
        'Bending the standing knee too much, turning it into a squat.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'good-morning': {
    id: 'good-morning',
    name: 'Good Morning',
    category: 'strength',
    equipment: ['barbell', 'squat-rack'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 3,
    instructions: [
      'Place a barbell on your upper back, similar to a high-bar squat position, in a squat rack (optional).',
      'Stand with feet hip-width apart, knees slightly bent (micro-bend).',
      'Keeping your back straight and core engaged, slowly hinge forward at your hips, pushing your glutes back.',
      'Lower your torso until it is nearly parallel to the floor, or until you feel a strong stretch in your hamstrings.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; rounding your back can lead to serious injury.',
      'Use light weight, especially when learning, as this exercise places significant stress on the lower back.',
      'Do not go lower than your hamstring flexibility allows; stop when you feel a strong stretch.'
    ],
    modifications: {
      beginner: 'Perform with a broomstick or PVC pipe to master the hip hinge, or use a very light barbell. Perform Dumbbell Romanian Deadlifts first.',
      advanced: 'Increase the weight, or perform with a pause at the bottom of the movement.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'resistance-bands': 'Resistance Band (around neck and under feet)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell on upper back, feet hip-width, slight knee bend.',
        'Shoulders back and down, chest up.',
        'Brace core firmly.'
      ],
      execution: [
        'Initiate by pushing hips back, keeping back flat.',
        'Lower torso with control, feeling hamstring stretch.',
        'Squeeze glutes and hamstrings to return to upright position.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Bending knees excessively, turning it into a squat.',
        'Going too low and losing back integrity.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'deadlift': {
    id: 'deadlift',
    name: 'Deadlift',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Quads', 'Traps', 'Forearms'],
    difficulty: 4,
    instructions: [
      'Stand with your mid-foot under the barbell. Your shins should be close to the bar.',
      'Bend at your knees and hips to grasp the barbell with an overhand or mixed grip, hands just outside your shins.',
      'Lower your hips, flatten your back, and ensure your chest is up and shoulders are slightly in front of the bar.',
      'Take a deep breath, brace your core, and lift the weight by extending your hips and knees simultaneously, keeping the bar close to your body.',
      'Stand tall at the top, squeezing your glutes, then slowly lower the bar back to the floor with control, reversing the movement.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire lift; rounding your back can lead to serious injury.',
      'Keep the bar as close to your body as possible to maintain leverage.',
      'Always start with light weight to master form before increasing load.'
    ],
    modifications: {
      beginner: 'Perform with lighter weight, or focus on Romanian Deadlifts or Hip Hinges to build foundational strength.',
      advanced: 'Increase the weight, perform deficit deadlifts (standing on a plate), or pause deadlifts.',
      equipment_alternatives: {
        'barbell': 'Trap Bar Deadlift',
        'dumbbells': 'Dumbbell Romanian Deadlift'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 40,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Mid-foot under bar, shins close.',
        'Grip bar, lower hips, chest up, flat back.',
        'Shoulders slightly in front of bar.'
      ],
      execution: [
        'Lift with hips and knees simultaneously, not just back.',
        'Keep bar path vertical and close to body.',
        'Squeeze glutes at the top, avoid hyperextension.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Squatting the weight up (hips rising too fast).',
        'Letting the bar drift away from the body.'
      ],
      breathing: 'Deep breath and brace before lifting, exhale at the top or during the concentric phase.'
    }
  },

  'kettlebell-swing': {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing (Russian)',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Core', 'Shoulders'],
    difficulty: 3,
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart, kettlebell on the floor in front of you.',
      'Hinge at your hips and grasp the kettlebell with both hands, palms facing you, maintaining a straight back.',
      'Hike the kettlebell back between your legs, loading your glutes and hamstrings.',
      'Explosively drive your hips forward, squeezing your glutes, to swing the kettlebell up to chest or eye level.',
      'Allow the kettlebell to naturally swing back down, hinging at your hips as it descends, and repeat the explosive hip drive.'
    ],
    safetyNotes: [
      'The movement is a hip hinge, not a squat; focus on pushing your hips back, not bending your knees excessively.',
      'Maintain a straight back throughout the entire movement; avoid rounding your spine.',
      'Control the kettlebell; do not let it pull you forward or lose control at the top of the swing.'
    ],
    modifications: {
      beginner: 'Use a lighter kettlebell and focus on mastering the hip hinge movement. Perform Deadlifts or Romanian Deadlifts first.',
      advanced: 'Increase the weight, perform single-arm kettlebell swings, or incorporate a higher swing (American Kettlebell Swing).',
      equipment_alternatives: {
        'kettlebells': 'Dumbbell Swing (less common)',
        'barbell': 'Barbell Romanian Deadlift (less explosive)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet slightly wider than shoulder-width, kettlebell in front.',
        'Hinge at hips, flat back, grip kettlebell.',
        'Shoulders back and down, gaze forward.'
      ],
      execution: [
        'Hike kettlebell back, then explosively drive hips forward.',
        'Squeeze glutes hard at the top of the swing.',
        'Allow kettlebell to swing naturally, control descent.'
      ],
      common_mistakes: [
        'Squatting instead of hinging.',
        'Rounding the back.',
        'Using arms to lift the kettlebell instead of hip drive.'
      ],
      breathing: 'Inhale on the backswing, exhale powerfully as you drive hips forward.'
    }
  },

  'hip-thrust': {
    id: 'hip-thrust',
    name: 'Hip Thrust (Bodyweight)',
    category: 'strength',
    equipment: ['bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Place your arms by your sides on the floor, palms down, for stability.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Control the movement; avoid pushing off the floor too aggressively.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion if needed. Perform with your back on the floor (Glute Bridge).',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance (Dumbbell Hip Thrust/Barbell Hip Thrust). Perform single-leg hip thrusts.',
      equipment_alternatives: {
        'bench': 'Floor (Glute Bridge)'
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
        'Upper back against bench, feet flat, knees bent.',
        'Arms by sides, palms down, core braced.',
        'Gaze forward, ready to lift hips.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'barbell-hip-thrust': {
    id: 'barbell-hip-thrust',
    name: 'Barbell Hip Thrust',
    category: 'strength',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 3,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Roll a padded barbell over your hips, positioning it just below your hip bones.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip. Use a spotter for heavy loads.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Use a pad on the barbell to prevent discomfort on your hips.'
    ],
    modifications: {
      beginner: 'Perform without a barbell (Bodyweight Hip Thrust) or with a dumbbell (Dumbbell Hip Thrust). Use lighter weight to master form.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-leg barbell hip thrusts.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'medicine-ball': 'Medicine Ball'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Padded barbell across hips, hands holding.',
        'Gaze forward, core braced.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'glute-bridge': {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Lie on your back on the floor, with your knees bent and feet flat on the floor, hip-width apart.',
      'Place your arms by your sides, palms down, for stability.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Control the movement; avoid pushing off the floor too aggressively.',
      'Keep your feet flat on the floor throughout the movement.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion if needed. Hold the top position for shorter duration.',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance. Perform single-leg glute bridges.',
      equipment_alternatives: {
        'bodyweight': 'Hip Thrust (with bench)'
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
        'Lie on back, knees bent, feet flat hip-width apart.',
        'Arms by sides, palms down, core braced.',
        'Gaze up, ready to lift hips.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'single-leg-glute-bridge': {
    id: 'single-leg-glute-bridge',
    name: 'Single Leg Glute Bridge',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings', 'Core (stabilizer)'],
    difficulty: 2,
    instructions: [
      'Lie on your back on the floor, with your knees bent and feet flat on the floor, hip-width apart.',
      'Extend one leg straight up towards the ceiling, or keep it bent with the foot hovering just above the floor.',
      'Place your arms by your sides, palms down, for stability.',
      'Engage your glute of the planted foot and drive through that heel to lift your hips off the floor until your body forms a straight line from your shoulders to your knee.',
      'Squeeze your glute hard at the top of the movement.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor, then repeat for desired reps before switching legs.'
    ],
    safetyNotes: [
      'Maintain a neutral spine; avoid excessive arching of the lower back at the top.',
      'Control the movement; avoid pushing off the floor too aggressively or letting hips drop quickly.',
      'Keep your hips level; avoid tilting or rotating as you lift.'
    ],
    modifications: {
      beginner: 'Perform a standard Glute Bridge with both feet on the floor. Reduce the range of motion if needed.',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance. Perform with your planted foot elevated on a bench.',
      equipment_alternatives: {
        'bodyweight': 'Dumbbell Romanian Deadlift (single leg)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Lie on back, one knee bent, foot flat, other leg extended/hovering.',
        'Arms by sides, palms down, core braced.',
        'Gaze up, ready to lift hips.'
      ],
      execution: [
        'Drive through planted heel, lift hips by squeezing glute.',
        'Form straight line from shoulders to knee of planted leg at top.',
        'Squeeze glute hard, control descent, keep hips level.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Letting hips drop or tilt to one side.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'side-leg-raises': {
    id: 'side-leg-raises',
    name: 'Side Leg Raises (Side-Lying Hip Abduction)',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Hip Abductors (Gluteus Medius, Minimus)', 'Glutes'],
    difficulty: 1,
    instructions: [
      'Lie on your side with your body in a straight line, supporting your head with your bottom arm or hand.',
      'Place your top hand on the floor in front of your chest for stability (optional).',
      'Keep your top leg straight and slowly lift it directly upwards towards the ceiling, leading with your heel, engaging your outer thigh and glute.',
      'Continue lifting until you feel a strong contraction in your gluteus medius, typically around 45-60 degrees.',
      'Slowly lower the leg back to the starting position, controlling the eccentric phase, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a straight body line; avoid rocking your torso forward or backward.',
      'Control the movement; avoid swinging the leg or using momentum.',
      'Do not lift the leg excessively high if it causes lower back discomfort or hip pinching.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Keep the bottom leg slightly bent for more stability.',
      advanced: 'Add an ankle weight or a loop band around your thighs for increased resistance. Incorporate a pulse at the top.',
      equipment_alternatives: {
        'bodyweight': 'Machine Hip Abductor',
        'cable-machine': 'Cable Hip Abduction'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Lie on side, body straight, head supported.',
        'Top leg straight, bottom leg slightly bent (optional).',
        'Core engaged, ready to lift.'
      ],
      execution: [
        'Lift top leg straight up, leading with heel, using outer glute.',
        'Squeeze gluteus medius at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Rocking the torso forward or backward.',
        'Using momentum to swing the leg.',
        'Not isolating the outer thigh/glute.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower it.'
    }
  },

  'barbell-curl': {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Biceps (Biceps Brachii)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet shoulder-width apart, holding a barbell with an underhand (supinated) grip, hands shoulder-width apart, arms extended in front of your thighs.',
      'Keep your elbows tucked close to your body and your upper arms stationary.',
      'Curl the barbell upwards towards your shoulders, focusing on contracting your biceps.',
      'Squeeze your biceps hard at the top of the movement.',
      'Slowly lower the barbell back down to the starting position, controlling the eccentric phase, until your arms are fully extended.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid swinging your body or using momentum.',
      'Keep your elbows tucked in; avoid flaring them out.',
      'Maintain a stable core; avoid leaning back excessively.'
    ],
    modifications: {
      beginner: 'Use lighter weight or an EZ-bar for wrist comfort. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'cable-machine': 'Cable Machine (straight bar)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width, barbell with underhand grip.',
        'Elbows tucked close to body, upper arms stationary.',
        'Shoulders back and down, core braced.'
      ],
      execution: [
        'Curl barbell up, focusing on bicep contraction.',
        'Squeeze biceps at the top.',
        'Control the lowering phase, resisting the weight.'
      ],
      common_mistakes: [
        'Swinging the weight or using momentum.',
        'Flaring elbows out.',
        'Not fully extending arms at the bottom.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'dumbbell-curl': {
    id: 'dumbbell-curl',
    name: 'Dumbbell Curl',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Biceps (Biceps Brachii)', 'Forearms'],
    difficulty: 1,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing forward, arms extended by your sides.',
      'Keep your elbows tucked close to your body and your upper arms stationary.',
      'Curl the dumbbells upwards towards your shoulders, focusing on contracting your biceps.',
      'Squeeze your biceps hard at the top of the movement.',
      'Slowly lower the dumbbells back down to the starting position, controlling the eccentric phase, until your arms are fully extended.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid swinging the dumbbells.',
      'Keep your elbows tucked in; avoid flaring them out.',
      'Maintain a stable core throughout the exercise.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on strict form. Perform one arm at a time for better control.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Curl',
        'cable-machine': 'Cable Bicep Curl'
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
        'Stand tall, dumbbells by sides, palms forward.',
        'Elbows tucked close to body, upper arms stationary.',
        'Shoulders back and down, core braced.'
      ],
      execution: [
        'Curl dumbbells up, focusing on bicep contraction.',
        'Squeeze biceps at the top.',
        'Control the lowering phase, resisting the weight.'
      ],
      common_mistakes: [
        'Swinging the weights or using momentum.',
        'Flaring elbows out.',
        'Not fully extending arms at the bottom.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'hammer-curl': {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Biceps (Brachialis, Brachioradialis)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing each other (neutral grip), arms extended by your sides.',
      'Keep your elbows tucked close to your body and your upper arms stationary.',
      'Curl the dumbbells upwards towards your shoulders, maintaining the neutral grip.',
      'Squeeze your biceps and forearms at the top of the movement.',
      'Slowly lower the dumbbells back down to the starting position, controlling the eccentric phase, until your arms are fully extended.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid swinging the dumbbells.',
      'Keep your upper arms stationary; do not let them swing forward.',
      'Maintain a stable core throughout the exercise.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on strict form. Perform seated to reduce body sway.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Hammer Curl',
        'resistance-bands': 'Resistance Band Hammer Curl'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells in neutral grip by sides.',
        'Elbows tucked close to body, upper arms stationary.',
        'Shoulders back and down, core braced.'
      ],
      execution: [
        'Curl dumbbells up, maintaining neutral grip.',
        'Focus on contracting biceps and forearms.',
        'Control the lowering phase, maintaining tension.'
      ],
      common_mistakes: [
        'Swinging the weights or using momentum.',
        'Letting elbows move forward.',
        'Not fully extending arms at the bottom.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'preacher-curl': {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    category: 'strength',
    equipment: ['preacher-bench', 'ez-bar'],
    muscleGroups: ['Biceps (Biceps Brachii)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Adjust the preacher curl bench so your armpits are at the top of the pad when seated, and your upper arms are flat against the pad.',
      'Grasp an EZ bar (or barbell) with an underhand grip, hands shoulder-width apart, arms extended down the pad.',
      'Keeping your upper arms stationary against the pad, curl the bar upwards towards your shoulders, focusing on contracting your biceps.',
      'Squeeze your biceps hard at the top of the movement.',
      'Slowly lower the bar back down to the starting position, controlling the eccentric phase and allowing a full stretch in your biceps.'
    ],
    safetyNotes: [
      'Do not hyperextend your elbows at the bottom of the movement; maintain a slight bend.',
      'Use a weight you can control; avoid jerking the weight up or letting it drop quickly.',
      'Ensure your upper arms remain flat against the pad throughout the exercise.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Preacher Curl) for more independent limb movement.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Perform single-arm preacher curls.',
      equipment_alternatives: {
        'ez-bar': 'Dumbbells',
        'cable-machine': 'Cable Machine (low pulley with straight bar)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust bench, armpits at top of pad, upper arms flat.',
        'Grip EZ bar underhand, arms extended down pad.',
        'Shoulders relaxed, ready to curl.'
      ],
      execution: [
        'Curl bar up using only biceps, keeping upper arms still.',
        'Squeeze biceps forcefully at the top.',
        'Control the return, stretching biceps fully but not hyperextending.'
      ],
      common_mistakes: [
        'Hyperextending elbows at the bottom.',
        'Lifting upper arms off the pad.',
        'Using momentum to lift the weight.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'sled-push': {
    id: 'sled-push',
    name: 'Sled Push',
    category: 'strength',
    equipment: ['sled'],
    muscleGroups: ['quadriceps', 'glutes', 'calves', 'core'],
    difficulty: 4,
    instructions: [
      'Position hands on sled handles, arms extended',
      'Lean forward at 45-degree angle',
      'Drive one foot back, pushing through forefoot',
      'Maintain low position and constant pressure',
      'Take short, powerful steps'
    ],
    safetyNotes: [
      'Keep back straight, not rounded',
      'Ensure clear path ahead',
      'Start with lighter weight'
    ],
    modifications: {
      beginner: 'Reduce weight, shorter distance',
      advanced: 'Add more weight, increase speed',
      equipment_alternatives: {
        'sled': 'Prowler push, car push, or partner resistance'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 25,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Low body position', 'Head neutral'],
      execution: ['Drive through toes', 'Maintain forward lean'],
      common_mistakes: ['Standing too upright', 'Long strides'],
      breathing: 'Breathe continuously, no breath holding'
    }
  },

  'sled-pull': {
    id: 'sled-pull',
    name: 'Sled Pull',
    category: 'strength',
    equipment: ['sled', 'rope'],
    muscleGroups: ['back', 'biceps', 'core', 'legs'],
    difficulty: 4,
    instructions: [
      'Face sled, grab rope with both hands',
      'Sit back into squat position',
      'Pull rope hand-over-hand',
      'Use legs to maintain position',
      'Keep constant tension on rope'
    ],
    safetyNotes: [
      'Keep back straight',
      'Don\'t jerk the rope',
      'Check rope condition before use'
    ],
    modifications: {
      beginner: 'Lighter weight, use seated position',
      advanced: 'Heavier weight, faster pulls',
      equipment_alternatives: {
        'sled': 'Rope pulls with band resistance'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 25,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Wide stance', 'Rope taut before pulling'],
      execution: ['Pull to chest', 'Use whole body'],
      common_mistakes: ['Only using arms', 'Standing too tall'],
      breathing: 'Exhale on pull, inhale on reach'
    }
  },

  'farmers-carry': {
    id: 'farmers-carry',
    name: 'Farmers Carry',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['grip', 'traps', 'core', 'legs'],
    difficulty: 3,
    instructions: [
      'Stand between weights, feet hip-width apart',
      'Squat down, grab handles with firm grip',
      'Stand up tall, shoulders back and down',
      'Walk with controlled steps, weights at sides',
      'Keep core tight, avoid leaning'
    ],
    safetyNotes: [
      'Don\'t let weights swing',
      'Keep shoulders level',
      'Use chalk for grip if needed'
    ],
    modifications: {
      beginner: 'Lighter weights, shorter distance',
      advanced: 'Heavier weights, uneven loads',
      equipment_alternatives: {
        'kettlebells': 'Dumbbells, sandbags, or water jugs'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 100,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Shoulders back', 'Firm grip before lifting'],
      execution: ['Small quick steps', 'Eyes forward'],
      common_mistakes: ['Leaning forward', 'Death gripping handles'],
      breathing: 'Breathe normally, don\'t hold breath'
    }
  },

  'sandbag-lunges': {
    id: 'sandbag-lunges',
    name: 'Sandbag Lunges',
    category: 'strength',
    equipment: ['sandbag'],
    muscleGroups: ['quadriceps', 'glutes', 'core', 'shoulders'],
    difficulty: 4,
    instructions: [
      'Place sandbag across shoulders/upper back',
      'Step forward into lunge position',
      'Lower until both knees at 90 degrees',
      'Drive through front heel to stand',
      'Continue walking forward, alternating legs'
    ],
    safetyNotes: [
      'Keep sandbag secure on shoulders',
      'Don\'t let knee collapse inward',
      'Maintain upright torso'
    ],
    modifications: {
      beginner: 'Lighter sandbag or front carry position',
      advanced: 'Heavier sandbag, add pause at bottom',
      equipment_alternatives: {
        'sandbag': 'Barbell, dumbbells, or weighted vest'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 50,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Sandbag centered on shoulders', 'Core braced'],
      execution: ['Vertical torso', 'Full depth each rep'],
      common_mistakes: ['Leaning forward', 'Short steps'],
      breathing: 'Inhale on descent, exhale on rise'
    }
  },

  'grip-endurance-circuit': {
    id: 'grip-endurance-circuit',
    name: 'Grip Endurance Circuit',
    category: 'strength',
    equipment: ['kettlebells', 'pull-up-bar'],
    muscleGroups: ['grip', 'forearms', 'core'],
    difficulty: 3,
    instructions: [
      'Dead hang from bar for time',
      'Farmers carry for distance',
      'Plate pinch hold for time',
      'Sled rope pull',
      'Minimal rest between exercises'
    ],
    safetyNotes: [
      'Use chalk if needed',
      'Don\'t drop weights',
      'Stop if sharp pain'
    ],
    modifications: {
      beginner: 'Shorter times/distances',
      advanced: 'Add weight, longer holds',
      equipment_alternatives: {
        'kettlebells': 'Any heavy objects with handles'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Chalk hands', 'Mental preparation'],
      execution: ['Relax unnecessary muscles', 'Breathe normally'],
      common_mistakes: ['Death grip', 'Holding breath'],
      breathing: 'Keep breathing steady'
    }
  },

  'sled-conditioning': {
    id: 'sled-conditioning',
    name: 'Sled Conditioning',
    category: 'strength',
    equipment: ['sled'],
    muscleGroups: ['full-body'],
    difficulty: 4,
    instructions: [
      'Alternate between sled push and pull',
      'Push sled 25m',
      'Immediately pull sled back 25m',
      'Rest briefly',
      'Repeat for prescribed rounds'
    ],
    safetyNotes: [
      'Start with manageable weight',
      'Keep good form when tired',
      'Clear path both ways'
    ],
    modifications: {
      beginner: 'Longer rest, lighter sled',
      advanced: 'Heavier sled, no rest',
      equipment_alternatives: {
        'sled': 'Tire drags or partner resistance'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 200,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Low position for push', 'Strong stance for pull'],
      execution: ['Maintain technique', 'Consistent effort'],
      common_mistakes: ['Form breakdown', 'Uneven pacing'],
      breathing: 'Continuous breathing'
    }
  },

  'cable-lateral-raise': {
    id: 'cable-lateral-raise',
    name: 'Cable Lateral Raise',
    category: 'strength',
    equipment: ['cable-machine', 'ankle-strap'],
    muscleGroups: ['Shoulders (Lateral Deltoid)'],
    difficulty: 2,
    instructions: [
      'Attach an ankle strap or D-handle to a low pulley on a cable machine.',
      'Stand sideways to the machine, grasping the handle with the hand farthest from the machine, or attach the ankle strap to your ankle closest to the machine.',
      'Keep a slight bend in your elbow (if using handle) or knee (if using ankle strap), and your torso upright.',
      'Slowly raise your arm (or leg) out to the side in a controlled arc, leading with your elbow, until it is parallel to the floor.',
      'Squeeze your lateral deltoid at the top, then slowly lower the arm (or leg) back to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weight; focus on isolating the lateral deltoid, not swinging the weight.',
      'Maintain an upright torso; avoid leaning away from the machine excessively.',
      'Control the movement; do not let the cable pull your arm/leg down quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on the mind-muscle connection. Perform with a shorter range of motion.',
      advanced: 'Increase the weight, or incorporate a pause at the top of the movement for increased intensity.',
      equipment_alternatives: {
        'cable-machine': 'Dumbbell Lateral Raise',
        'resistance-bands': 'Resistance Band Lateral Raise'
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
        'Stand sideways to machine, handle in outer hand or strap on inner ankle.',
        'Slight elbow/knee bend, upright torso, core braced.',
        'Shoulders depressed, ready to lift.'
      ],
      execution: [
        'Raise arm/leg out to side, leading with elbow, not hand.',
        'Focus on lateral deltoid contraction, not shrugging.',
        'Control the descent, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the body.',
        'Shrugging shoulders up towards ears.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you raise, inhale as you lower.'
    }
  },

  'dumbbell-rear-delt-raise': {
    id: 'dumbbell-rear-delt-raise',
    name: 'Dumbbell Rear Delt Raise',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Rear Deltoids)', 'Upper Back (Rhomboids, Trapezius)'],
    difficulty: 2,
    instructions: [
      'Stand with feet shoulder-width apart, holding a dumbbell in each hand, palms facing each other (neutral grip).',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor.',
      'Allow the dumbbells to hang straight down, with a slight bend in your elbows.',
      'Engage your rear deltoids and upper back to raise the dumbbells out to the sides in a wide arc, until your arms are parallel to the floor.',
      'Squeeze your shoulder blades together at the top, then slowly lower the dumbbells back to the starting position with control.'
    ],
    safetyNotes: [
      'Use light weights to ensure proper form and target the rear deltoids, not just swinging the arms.',
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Avoid shrugging your shoulders towards your ears; keep them depressed.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on the mind-muscle connection. Perform seated and bent over to reduce lower back strain.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Face Pull',
        'machine': 'Reverse Pec Deck Machine'
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
        'Hinge at hips, flat back, core braced.',
        'Dumbbells hanging, neutral grip, slight elbow bend.',
        'Gaze down to maintain neutral neck.'
      ],
      execution: [
        'Raise dumbbells out to sides, leading with elbows, not wrists.',
        'Focus on squeezing rear deltoids and shoulder blades.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Rounding the back.',
        'Shrugging shoulders up.'
      ],
      breathing: 'Exhale as you raise the dumbbells, inhale as you lower them.'
    }
  },

  'dumbbell-lateral-raise': {
    id: 'dumbbell-lateral-raise',
    name: 'Dumbbell Lateral Raise',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Lateral Deltoid)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing your body, arms extended by your sides.',
      'Keep a slight bend in your elbows throughout the movement.',
      'Engage your lateral deltoids to raise the dumbbells out to the sides in a controlled arc, leading with your elbows, until your arms are parallel to the floor.',
      'Squeeze your lateral deltoids at the top, then slowly lower the dumbbells back to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weights to ensure proper form and target the lateral deltoids, not just swinging the arms.',
      'Avoid shrugging your shoulders towards your ears; keep them depressed.',
      'Maintain a stable core; avoid leaning back or forward.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on the mind-muscle connection. Perform seated to reduce body sway.',
      advanced: 'Increase the weight, or incorporate a pause at the top of the movement for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Lateral Raise',
        'machine': 'Machine Lateral Raise'
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
        'Stand tall, dumbbells by sides, palms facing body.',
        'Slight elbow bend, shoulders depressed.',
        'Core braced, ready to lift.'
      ],
      execution: [
        'Raise dumbbells out to sides, leading with elbows, not wrists.',
        'Focus on lateral deltoid contraction, not shrugging.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Shrugging shoulders up towards ears.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you raise the dumbbells, inhale as you lower them.'
    }
  },

  'dumbbell-shoulder-press': {
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Deltoids)', 'Triceps'],
    difficulty: 2,
    instructions: [
      'Sit on a bench with back support (or stand tall), holding a dumbbell in each hand at shoulder height, palms facing forward, elbows pointing slightly out and forward.',
      'Press the dumbbells straight overhead until your arms are fully extended, but not locked out.',
      'Squeeze your shoulders and triceps at the top of the movement.',
      'Slowly lower the dumbbells back to the starting position at shoulder height with control.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid jerking the weights or using excessive momentum.',
      'Maintain a neutral spine; avoid excessive arching of the lower back.',
      'Control the descent to prevent injury to shoulders or wrists.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on mastering the movement pattern. Perform seated with back support for increased stability.',
      advanced: 'Increase the weight, or incorporate a pause at the top or bottom of the movement. Perform standing for more core engagement.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Shoulder Press',
        'machine': 'Machine Shoulder Press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Dumbbells at shoulder height, palms forward, elbows slightly forward.',
        'Core braced, shoulders down and back.',
        'Feet flat on floor (if seated) or hip-width (if standing).'
      ],
      execution: [
        'Press straight overhead, driving through shoulders and triceps.',
        'Squeeze shoulders at the top.',
        'Control the descent, keeping dumbbells in line with shoulders.'
      ],
      common_mistakes: [
        'Using too much weight and jerking the weights up.',
        'Excessive lower back arching.',
        'Not fully extending arms at the top.'
      ],
      breathing: 'Exhale as you press up, inhale as you lower down.'
    }
  },

  'dumbbell-front-raise': {
    id: 'dumbbell-front-raise',
    name: 'Dumbbell Front Raise',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Anterior Deltoid)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing your body, arms extended in front of your thighs.',
      'Keep a slight bend in your elbows throughout the movement.',
      'Engage your anterior deltoids to raise the dumbbells straight forward and upwards, until your arms are parallel to the floor (shoulder height).',
      'Squeeze your anterior deltoids at the top, then slowly lower the dumbbells back to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weights to ensure proper form and target the anterior deltoids, not just swinging the arms.',
      'Avoid shrugging your shoulders towards your ears; keep them depressed.',
      'Maintain a stable core; avoid leaning back excessively.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on the mind-muscle connection. Perform one arm at a time for better control.',
      advanced: 'Increase the weight, or incorporate a pause at the top of the movement for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Front Raise',
        'plate': 'Plate Front Raise'
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
        'Stand tall, dumbbells in front of thighs, palms facing body.',
        'Slight elbow bend, shoulders depressed.',
        'Core braced, ready to lift.'
      ],
      execution: [
        'Raise dumbbells straight forward, leading with shoulders.',
        'Focus on anterior deltoid contraction, avoid shrugging.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Shrugging shoulders up towards ears.',
        'Leaning back to lift the weights.'
      ],
      breathing: 'Exhale as you raise the dumbbells, inhale as you lower them.'
    }
  },

  'straight-leg-kickback': {
    id: 'straight-leg-kickback',
    name: 'Straight Leg Kickback',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Start on your hands and knees, hands directly under your shoulders, knees under your hips.',
      'Keep your back flat and core engaged.',
      'Extend one leg straight back behind you, keeping it parallel to the floor, foot flexed.',
      'Engage your glute to lift the extended leg a few inches higher, squeezing at the top.',
      'Slowly lower the leg back to parallel with the floor, controlling the eccentric phase, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid arching or rounding your spine.',
      'Control the movement; avoid swinging the leg or using momentum.',
      'Keep your hips stable and level; avoid tilting your pelvis.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Focus on simply extending the leg without lifting it higher.',
      advanced: 'Add an ankle weight or a loop band around your thighs for increased resistance. Incorporate a pulse at the top.',
      equipment_alternatives: {
        'bodyweight': 'Cable Glute Kickback',
        'machine': 'Glute Kickback Machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Hands under shoulders, knees under hips, flat back.',
        'Core engaged, gaze down, neutral neck.',
        'Extend one leg straight back, parallel to floor.'
      ],
      execution: [
        'Lift leg higher using glute contraction, not back arching.',
        'Squeeze glute hard at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Arching the lower back excessively.',
        'Swinging the leg or using momentum.',
        'Not keeping hips level.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower it.'
    }
  },

  'medicine-ball-curtsy-lunge': {
    id: 'medicine-ball-curtsy-lunge',
    name: 'Medicine Ball Curtsy Lunge',
    category: 'strength',
    equipment: ['medicine-ball'],
    muscleGroups: ['Glutes (Gluteus Medius, Gluteus Maximus)', 'Quads', 'Hamstrings', 'Adductors'],
    difficulty: 3,
    instructions: [
      'Stand tall with feet hip-width apart, holding a medicine ball at your chest with both hands.',
      'Step your right leg back and across behind your left leg, as if doing a curtsy, lowering your hips until your left thigh is parallel to the floor.',
      'Ensure your front knee tracks over your ankle, and your torso remains upright.',
      'Push through your front heel to return to the starting position, squeezing your glutes.',
      'Alternate legs, performing the curtsy lunge on the other side.'
    ],
    safetyNotes: [
      'Maintain balance and control throughout the movement; avoid rushing.',
      'Ensure your front knee does not collapse inward; keep it aligned with your toes.',
      'Use a medicine ball weight that allows for good form; start light.'
    ],
    modifications: {
      beginner: 'Perform without a medicine ball (Bodyweight Curtsy Lunge). Reduce the depth of the lunge.',
      advanced: 'Use a heavier medicine ball, or perform with dumbbells for increased resistance.',
      equipment_alternatives: {
        'medicine-ball': 'Dumbbells',
        'kettlebells': 'Kettlebell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width, medicine ball at chest.',
        'Shoulders back and down, core braced.',
        'Gaze forward, ready to step back.'
      ],
      execution: [
        'Step back and across, lowering hips, keeping front knee aligned.',
        'Push through front heel to return, squeeze glutes.',
        'Maintain upright torso, control balance.'
      ],
      common_mistakes: [
        'Losing balance and wobbling.',
        'Front knee collapsing inward.',
        'Rounding the back or leaning too far forward.'
      ],
      breathing: 'Inhale as you lower into the lunge, exhale as you push back up.'
    }
  },

  'medicine-ball-hip-thrusts': {
    id: 'medicine-ball-hip-thrusts',
    name: 'Medicine Ball Hip Thrusts',
    category: 'strength',
    equipment: ['medicine-ball', 'bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings', 'Core'],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Place a medicine ball directly on your hips, holding it in place with your hands (optional).',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Use a medicine ball weight that allows for good form and full range of motion.'
    ],
    modifications: {
      beginner: 'Perform without a medicine ball (Bodyweight Hip Thrust). Reduce the range of motion if needed.',
      advanced: 'Use a heavier medicine ball, or progress to Barbell Hip Thrusts for increased resistance.',
      equipment_alternatives: {
        'medicine-ball': 'Dumbbell',
        'barbell': 'Barbell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Medicine ball on hips, hands holding (optional).',
        'Gaze forward, core braced.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'single-leg-kickback': {
    id: 'single-leg-kickback',
    name: 'Single Leg Kickback',
    category: 'strength',
    equipment: ['cable-machine', 'ankle-strap'],
    muscleGroups: ['Glutes (Gluteus Maximus)'],
    difficulty: 2,
    instructions: [
      'Attach an ankle strap to a low pulley on a cable machine and secure it around one ankle.',
      'Stand facing the machine, holding onto the frame for support, with a slight forward lean.',
      'Keep your standing leg slightly bent and your core engaged.',
      'Slowly extend the leg with the ankle strap straight back behind you, engaging your glute.',
      'Squeeze your glute at the peak contraction, then slowly return the leg to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weight; focus on glute isolation, not swinging the leg or arching the back.',
      'Maintain a stable torso; avoid excessive leaning or rocking.',
      'Control the movement; do not let the cable pull your leg forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on the mind-muscle connection. Reduce the range of motion.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'cable-machine': 'Resistance Band Glute Kickback',
        'machine': 'Glute Kickback Machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Ankle strap on, hold frame for support, slight forward lean.',
        'Standing leg slightly bent, core braced.',
        'Shoulders down, ready to kick back.'
      ],
      execution: [
        'Extend leg straight back, squeezing glute.',
        'Focus on glute contraction, not lower back arching.',
        'Control the return, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the leg.',
        'Arching the lower back excessively.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you kick back, inhale as you return to the start.'
    }
  },

  'elevated-hip-bridge': {
    id: 'elevated-hip-bridge',
    name: 'Elevated Hip Bridge',
    category: 'strength',
    equipment: ['bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Lie on your back on the floor, with your feet elevated on a bench, box, or chair, knees bent at a 90-degree angle.',
      'Place your arms by your sides, palms down, for stability.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the elevated surface is stable and will not slide.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Control the movement; avoid pushing off the elevated surface too aggressively.'
    ],
    modifications: {
      beginner: 'Perform a standard Hip Bridge with feet on the floor. Reduce the height of the elevated surface.',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance. Perform single-leg elevated hip bridges.',
      equipment_alternatives: {
        'bench': 'Stability Ball',
        'bodyweight': 'Bodyweight Hip Bridge'
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
        'Lie on back, feet on elevated surface, knees bent 90 degrees.',
        'Arms by sides, palms down, core braced.',
        'Gaze up, ready to lift hips.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'dumbbell-hip-thrust': {
    id: 'dumbbell-hip-thrust',
    name: 'Dumbbell Hip Thrust',
    category: 'strength',
    equipment: ['dumbbells', 'bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Place a dumbbell across your hips, just below your hip bones, holding it in place with your hands.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Use a dumbbell weight that allows for good form and full range of motion.'
    ],
    modifications: {
      beginner: 'Perform without a dumbbell (Bodyweight Hip Thrust). Reduce the range of motion if needed.',
      advanced: 'Use a heavier dumbbell, or progress to Barbell Hip Thrusts for increased resistance.',
      equipment_alternatives: {
        'dumbbells': 'Medicine Ball',
        'barbell': 'Barbell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Dumbbell across hips, hands holding.',
        'Gaze forward, core braced.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'glute-kickback-machine': {
    id: 'glute-kickback-machine',
    name: 'Glute Kickback Machine',
    category: 'strength',
    equipment: ['glute-kickback-machine'],
    muscleGroups: ['Glutes (Gluteus Maximus)'],
    difficulty: 1,
    instructions: [
      'Adjust the machine so the pad rests comfortably against the sole of your foot or lower calf.',
      'Stand facing the machine, holding onto the handles for support, with a slight forward lean.',
      'Keep your standing leg slightly bent and your core engaged.',
      'Engage your glute to push the pad straight back and slightly upwards, extending your hip.',
      'Squeeze your glute hard at the peak contraction, then slowly return the leg to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Do not use excessive weight that causes your lower back to arch excessively.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your standing leg slightly bent to avoid locking out the knee.'
    ],
    modifications: {
      beginner: 'Use lighter weight to focus on the mind-muscle connection and glute isolation. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'glute-kickback-machine': 'Cable Glute Kickback',
        'resistance-bands': 'Resistance Band Glute Kickback'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Pad against foot/calf, hold handles for support, slight forward lean.',
        'Standing leg slightly bent, core braced.',
        'Shoulders down, ready to kick back.'
      ],
      execution: [
        'Push pad straight back, squeezing glute forcefully.',
        'Avoid arching lower back; keep movement initiated from glute.',
        'Control the return, resisting the weight stack.'
      ],
      common_mistakes: [
        'Using too much weight and arching the lower back.',
        'Swinging the leg or using momentum.',
        'Not fully extending the hip.'
      ],
      breathing: 'Exhale as you kick back, inhale as you return to the start.'
    }
  },
  'side-leg-kick': {
    id: 'side-leg-kick',
    name: 'Side Leg Kick (Side-Lying)',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Medius/Minimus)', 'Hip Abductors'],
    difficulty: 1,
    instructions: [
      'Lie on your side with your body in a straight line, supporting your head with your bottom arm or hand.',
      'Place your top hand on the floor in front of your chest for stability (optional).',
      'Keep your top leg straight and slowly lift it directly upwards towards the ceiling, leading with your heel, engaging your outer thigh and glute.',
      'Continue lifting until you feel a strong contraction in your gluteus medius.',
      'Slowly lower the leg back to the starting position, controlling the eccentric phase, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a straight body line; avoid rocking your torso forward or backward.',
      'Control the movement; avoid swinging the leg or using momentum.',
      'Do not lift the leg excessively high if it causes lower back discomfort.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Keep the bottom leg slightly bent for more stability.',
      advanced: 'Add an ankle weight or a loop band around your thighs for increased resistance. Incorporate a pulse at the top.',
      equipment_alternatives: {
        'Bodyweight': 'Machine Hip Abductor',
        'No Equipment': 'Cable Hip Abduction'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.10,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Lie on side, body straight, head supported.',
        'Top leg straight, bottom leg slightly bent (optional).',
        'Core engaged, ready to lift.'
      ],
      execution: [
        'Lift top leg straight up, leading with heel, using outer glute.',
        'Squeeze gluteus medius at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Rocking the torso forward or backward.',
        'Using momentum to swing the leg.',
        'Not isolating the outer thigh/glute.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower it.'
    }
  },
  'cable-hip-extension': {
    id: 'cable-hip-extension',
    name: 'Cable Hip Extension',
    category: 'strength',
    equipment: ['Cable Machine', 'Ankle Strap'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Attach an ankle strap to a low pulley on a cable machine and secure it around one ankle.',
      'Stand facing the machine, holding onto the frame for support, with a slight forward lean at your hips.',
      'Keep your standing leg slightly bent and your core engaged.',
      'Slowly extend the leg with the ankle strap straight back behind you, focusing on extending from your hip and engaging your glute.',
      'Squeeze your glute hard at the peak of the extension, then slowly return the leg to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weight; focus on glute and hamstring isolation, not swinging the leg or arching the back.',
      'Maintain a stable torso; avoid excessive leaning or rocking.',
      'Control the movement; do not let the cable pull your leg forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on the mind-muscle connection. Reduce the range of motion.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'Cable Machine': 'Resistance Band Hip Extension',
        'Machine': 'Glute Kickback Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 2.5,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Ankle strap on, hold frame for support, slight forward hip hinge.',
        'Standing leg slightly bent, core braced.',
        'Shoulders down, ready to extend hip.'
      ],
      execution: [
        'Extend leg straight back, focusing on hip extension and glute squeeze.',
        'Avoid arching lower back; keep movement initiated from hip.',
        'Control the return, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the leg.',
        'Arching the lower back excessively instead of hip extension.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you extend hip, inhale as you return to the start.'
    }
  },
  'kettlebell-swing-american': {
    id: 'kettlebell-swing-american',
    name: 'Kettlebell Swing (American)',
    category: 'strength',
    equipment: ['Kettlebell'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Shoulders (Deltoids)', 'Core'],
    difficulty: 4,
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart, kettlebell on the floor in front of you.',
      'Hinge at your hips and grasp the kettlebell with both hands, palms facing you, maintaining a straight back.',
      'Hike the kettlebell back between your legs, loading your glutes and hamstrings.',
      'Explosively drive your hips forward, squeezing your glutes, to swing the kettlebell all the way overhead, arms extended.',
      'Allow the kettlebell to naturally swing back down, hinging at your hips as it descends, and repeat the explosive hip drive.'
    ],
    safetyNotes: [
      'The movement is a hip hinge, not a squat; focus on pushing your hips back, not bending your knees excessively.',
      'Maintain a straight back throughout the entire movement; avoid rounding your spine.',
      'Control the kettlebell at the top of the swing; avoid letting it pull your shoulders into an unsafe position.'
    ],
    modifications: {
      beginner: 'Perform Russian Kettlebell Swings (to chest height) to master the hip hinge and explosive drive before going overhead.',
      advanced: 'Increase the weight, or perform single-arm American Kettlebell Swings for increased core challenge.',
      equipment_alternatives: {
        'Kettlebell': 'Dumbbell Swing (less common)',
        'Olympic Barbell': 'Barbell Clean and Jerk (more complex Olympic lift)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet slightly wider than shoulder-width, kettlebell in front.',
        'Hinge at hips, flat back, grip kettlebell.',
        'Shoulders back and down, gaze forward.'
      ],
      execution: [
        'Hike kettlebell back, then explosively drive hips forward to swing overhead.',
        'Squeeze glutes hard at the top, arms extended overhead.',
        'Allow kettlebell to swing naturally, control descent back to hinge.'
      ],
      common_mistakes: [
        'Squatting instead of hinging.',
        'Rounding the back.',
        'Using arms to lift the kettlebell overhead instead of hip drive.',
        'Lack of control at the top, letting kettlebell pull shoulders forward.'
      ],
      breathing: 'Inhale on the backswing, exhale powerfully as you drive hips forward and overhead.'
    }
  },
  'superman': {
    id: 'superman',
    name: 'Superman',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Upper Back (Trapezius)'],
    difficulty: 1,
    instructions: [
      'Lie face down on the floor with your arms extended straight out in front of you and your legs extended straight behind you.',
      'Keep your head in a neutral position, looking down at the floor.',
      'Engage your lower back, glutes, and upper back to simultaneously lift your arms, chest, and legs off the floor a few inches.',
      'Hold the top position briefly, feeling the contraction in your posterior chain.',
      'Slowly lower your arms and legs back down to the starting position with control.'
    ],
    safetyNotes: [
      'Avoid hyperextending your lower back; lift only as high as you can maintain a comfortable, controlled contraction.',
      'Perform slowly and with control; avoid jerking movements.',
      'If you feel lower back pain, reduce the range of motion or perform one limb at a time (Alternating Superman).'
    ],
    modifications: {
      beginner: 'Lift only arms or only legs. Reduce the height of the lift. Perform with arms bent (hands under chin).',
      advanced: 'Hold the top position for a longer duration. Add light ankle or wrist weights (very light).',
      equipment_alternatives: {
        'Bodyweight': 'Back Extension (on hyperextension bench)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie prone, arms extended forward, legs extended back.',
        'Head neutral, gaze down.',
        'Core engaged, ready to lift.'
      ],
      execution: [
        'Lift arms, chest, and legs simultaneously using lower back and glutes.',
        'Squeeze glutes and lower back at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Hyperextending the lower back.',
        'Jerking movements instead of controlled lift.',
        'Not engaging glutes.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },
  'barbell-shrug': {
    id: 'barbell-shrug',
    name: 'Barbell Shrug',
    category: 'strength',
    equipment: ['Barbell', 'Weight Plates'],
    muscleGroups: ['Trapezius (Upper Traps)'],
    difficulty: 2,
    instructions: [
      'Stand tall with feet hip-width apart, holding a barbell in front of your thighs with an overhand grip, hands slightly wider than shoulder-width.',
      'Keep your arms straight and your shoulders relaxed, allowing the barbell to hang freely.',
      'Engage your upper traps to shrug your shoulders straight up towards your ears, as high as possible.',
      'Squeeze your traps hard at the top of the movement.',
      'Slowly lower the barbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your traps.'
    ],
    safetyNotes: [
      'Do not roll your shoulders forward or backward; shrug straight up and down.',
      'Use a weight you can control; avoid jerking the barbell up or using momentum.',
      'Maintain a stable core and neutral spine throughout the movement.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Shrug). Reduce the range of motion if needed.',
      advanced: 'Increase the weight. Incorporate a pause at the top contraction for increased intensity. Use a trap bar for a more natural grip.',
      equipment_alternatives: {
        'Barbell': 'Dumbbells',
        'Weight Bar': 'Trap Bar'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, barbell in front, overhand grip, arms straight.',
        'Shoulders relaxed, ready to shrug.',
        'Core braced, neutral spine.'
      ],
      execution: [
        'Shrug shoulders straight up towards ears, squeezing traps.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch.'
      ],
      common_mistakes: [
        'Rolling shoulders forward or backward.',
        'Using momentum to lift the weight.',
        'Not getting a full range of motion.'
      ],
      breathing: 'Exhale as you shrug up, inhale as you lower down.'
    }
  },
  'seated-back-extension': {
    id: 'seated-back-extension',
    name: 'Seated Back Extension (Machine)',
    category: 'strength',
    equipment: ['Seated Back Extension Machine'],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Adjust the machine so your lower back is comfortably positioned against the back pad and your feet are secured.',
      'Sit firmly in the seat, grasping the handles for stability.',
      'Allow your torso to lean forward slightly, feeling a stretch in your lower back.',
      'Engage your lower back muscles to extend your torso backward, pushing against the pad until your back is straight or slightly hyperextended.',
      'Squeeze your lower back and glutes at the peak contraction.',
      'Slowly return to the starting position, controlling the weight stack and allowing a full stretch in your lower back.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on lower back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Avoid excessive hyperextension; stop when your back is straight or slightly beyond.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Perform with a slower eccentric phase.',
      equipment_alternatives: {
        'Seated Back Extension Machine': 'Back Extension (Hyperextension Bench)',
        'Machine': 'Superman (bodyweight)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, feet secured.',
        'Back against pad, slight forward lean at start.',
        'Core braced.'
      ],
      execution: [
        'Extend torso backward using lower back, not jerking.',
        'Squeeze lower back and glutes at the top.',
        'Control the return, feeling the stretch in lower back.'
      ],
      common_mistakes: [
        'Using too much weight and jerking the movement.',
        'Excessive hyperextension of the lower back.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you extend backward, inhale as you return forward.'
    }
  },
  'back-extensions': {
    id: 'back-extensions',
    name: 'Back Extensions (Hyperextension Bench)',
    category: 'strength',
    equipment: ['Hyperextension Bench'],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Adjust the hyperextension bench so the top of the pad is just below your hip crease, allowing you to hinge freely at your hips.',
      'Hook your heels securely under the foot pads, crossing your arms over your chest or placing hands lightly behind your head.',
      'Allow your torso to bend forward at the hips, keeping your back straight, until you feel a stretch in your hamstrings and lower back.',
      'Engage your lower back and glutes to extend your torso upwards until your body forms a straight line from your head to your heels.',
      'Squeeze your lower back and glutes at the peak contraction, then slowly lower back down with control.'
    ],
    safetyNotes: [
      'Avoid rounding your back; maintain a straight spine throughout the movement.',
      'Do not hyperextend excessively at the top; stop when your body is in a straight line.',
      'Control the movement; avoid jerking or using momentum.'
    ],
    modifications: {
      beginner: 'Perform without added weight. Reduce the range of motion if needed.',
      advanced: 'Hold a weight plate or dumbbell to your chest for added resistance. Perform with a slower eccentric phase.',
      equipment_alternatives: {
        'Hyperextension Bench': 'Superman (bodyweight)',
        'Bench': 'Good Morning (barbell)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Adjust pad to hip crease, heels hooked securely.',
        'Arms crossed or hands behind head, back straight.',
        'Core braced, ready to hinge.'
      ],
      execution: [
        'Hinge at hips, extend torso up using lower back and glutes.',
        'Squeeze glutes and lower back at the top.',
        'Control the descent, feeling the stretch.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Hyperextending excessively at the top.',
        'Using momentum to lift the torso.'
      ],
      breathing: 'Exhale as you extend up, inhale as you lower down.'
    }
  },
  'alternating-superman': {
    id: 'alternating-superman',
    name: 'Alternating Superman',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Core (stabilizer)'],
    difficulty: 2,
    instructions: [
      'Lie face down on the floor with your arms extended straight out in front of you and your legs extended straight behind you.',
      'Keep your head in a neutral position, looking down at the floor.',
      'Engage your core and slowly lift your right arm and left leg simultaneously off the floor a few inches.',
      'Hold the top position briefly, feeling the contraction in your lower back and glute.',
      'Slowly lower your right arm and left leg back down to the starting position, then immediately lift your left arm and right leg, alternating sides with control.'
    ],
    safetyNotes: [
      'Avoid hyperextending your lower back; lift only as high as you can maintain a comfortable, controlled contraction.',
      'Perform slowly and with control; avoid jerking movements.',
      'Maintain a stable torso; avoid rocking side-to-side.'
    ],
    modifications: {
      beginner: 'Reduce the height of the lift. Perform with only arm lifts or only leg lifts.',
      advanced: 'Hold the top position for a longer duration. Add light ankle or wrist weights (very light).',
      equipment_alternatives: {
        'Bodyweight': 'Bird-Dog (on hands and knees)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.10,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie prone, arms extended forward, legs extended back.',
        'Head neutral, gaze down.',
        'Core engaged, ready to lift opposite limbs.'
      ],
      execution: [
        'Lift opposite arm and leg simultaneously using lower back and glutes.',
        'Squeeze glute and lower back at the top.',
        'Control the lowering phase, then switch sides smoothly.'
      ],
      common_mistakes: [
        'Hyperextending the lower back.',
        'Jerking movements instead of controlled lift.',
        'Rocking torso side-to-side.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower and switch.'
    }
  },
  'high-knees': {
    id: 'high-knees',
    name: 'High Knees',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Quads', 'Hip Flexors', 'Core', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet hip-width apart, looking straight ahead.',
      'Begin to run in place, driving one knee up towards your chest as high as possible.',
      'As one knee comes down, immediately drive the other knee up.',
      'Pump your arms rhythmically with your legs, as if running.',
      'Focus on quick, light foot strikes and maintaining an upright posture.'
    ],
    safetyNotes: [
      'Land softly on the balls of your feet to minimize impact on your joints.',
      'Maintain an upright posture; avoid hunching over or leaning back.',
      'Start slowly to master coordination before increasing speed.'
    ],
    modifications: {
      beginner: 'Perform walking high knees, focusing on bringing the knee up slowly and with control. Reduce the height of the knee lift.',
      advanced: 'Increase the speed and explosiveness of the knee drive. Incorporate a slight forward movement (running high knees).',
      equipment_alternatives: {
        'Bodyweight': 'Stair Climbing',
        'No Equipment': 'Jumping Rope'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width, chest up.',
        'Arms bent at 90 degrees, ready to pump.',
        'Gaze forward, light on feet.'
      ],
      execution: [
        'Drive knees high towards chest, alternating rapidly.',
        'Pump arms actively with leg movement.',
        'Maintain quick ground contact, minimal bounce.'
      ],
      common_mistakes: [
        'Leaning back excessively.',
        'Landing heavily on heels.',
        'Not engaging core, leading to hip sway.'
      ],
      breathing: 'Breathe rhythmically and deeply with the movement.'
    }
  },
  'walking-lunges': {
    id: 'walking-lunges',
    name: 'Walking Lunges',
    category: 'strength',
    equipment: ['Dumbbells (optional)'],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet hip-width apart, holding dumbbells by your sides (optional).',
      'Step forward with one leg, lowering your hips until both knees are bent at approximately a 90-degree angle.',
      'Ensure your front knee is directly over your ankle and your back knee hovers just above the floor.',
      'Push off your back foot and drive through your front heel to bring your back leg forward into the next lunge step.',
      'Continue alternating legs, maintaining balance and control throughout the movement.'
    ],
    safetyNotes: [
      'Ensure your front knee does not collapse inward or extend past your toes.',
      'Maintain an upright torso; avoid leaning too far forward or arching your back.',
      'Control the descent; do not drop into the lunge rapidly.'
    ],
    modifications: {
      beginner: 'Perform stationary lunges (Reverse Lunges or Forward Lunges in place) to master form before adding movement. Use bodyweight only.',
      advanced: 'Increase the weight of the dumbbells. Perform with a barbell on your back. Add a pulse at the bottom of each lunge.',
      equipment_alternatives: {
        'Dumbbells': 'Kettlebells',
        'Barbell': 'Barbell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, chest up, shoulders back.',
        'Core braced, gaze forward.',
        'Dumbbells held securely (optional).'
      ],
      execution: [
        'Step forward, lower hips, 90-degree bend in both knees.',
        'Front knee over ankle, back knee hovers.',
        'Drive through front heel, step into next lunge.'
      ],
      common_mistakes: [
        'Front knee caving inward or going past toes.',
        'Rounding the back or leaning too far forward.',
        'Losing balance due to uncontrolled movement.'
      ],
      breathing: 'Inhale as you lunge down, exhale as you push up and step forward.'
    }
  },
  'bird-dog': {
    id: 'bird-dog',
    name: 'Bird-Dog',
    category: 'core',
    equipment: [],
    muscleGroups: ['Core (Transverse Abdominis, Obliques, Erector Spinae)', 'Glutes'],
    difficulty: 1,
    instructions: [
      'Start on your hands and knees, with your hands directly under your shoulders and your knees directly under your hips.',
      'Keep your back flat and core engaged, maintaining a neutral spine (imagine balancing a cup of water on your lower back).',
      'Slowly extend your right arm straight forward while simultaneously extending your left leg straight back, keeping them parallel to the floor.',
      'Focus on keeping your hips and shoulders level, avoiding any rotation or arching in your lower back.',
      'Slowly return your arm and leg to the starting position, then repeat on the opposite side (left arm, right leg).'
    ],
    safetyNotes: [
      'Maintain a neutral spine throughout the movement; avoid arching or rounding your lower back.',
      'Perform slowly and with control; this is an exercise for stability, not speed.',
      'Keep your core tightly braced to prevent any unwanted movement in your torso.'
    ],
    modifications: {
      beginner: 'Perform only arm extensions or only leg extensions. Reduce the length of the extension.',
      advanced: 'Hold the extended position for a longer duration. Place a light weight (e.g., small dumbbell, water bottle) on your lower back to provide feedback on stability.',
      equipment_alternatives: {
        'Bodyweight': 'Dead Bug (supine position)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hands under shoulders, knees under hips, flat back.',
        'Core engaged, gaze down, neutral neck.',
        'Imagine balancing a cup of water on your lower back.'
      ],
      execution: [
        'Extend opposite arm and leg slowly and simultaneously.',
        'Keep hips and shoulders level, avoid rotation.',
        'Return to start with control before switching sides.'
      ],
      common_mistakes: [
        'Arching or rounding the lower back excessively.',
        'Rocking hips side-to-side.',
        'Moving too quickly and losing control.'
      ],
      breathing: 'Breathe naturally and deeply throughout the movement.'
    }
  },
  'standing-calf-stretch': {
    id: 'standing-calf-stretch',
    name: 'Standing Calf Stretch (Gastrocnemius)',
    category: 'flexibility',
    equipment: ['Wall', 'Sturdy Object'],
    muscleGroups: ['Calves (Gastrocnemius)', 'Achilles Tendon'],
    difficulty: 1,
    instructions: [
      'Stand facing a wall or sturdy object, placing your hands on it for support at shoulder height.',
      'Step one leg back, keeping it straight with your heel on the floor and toes pointing forward.',
      'Keep your front knee slightly bent.',
      'Lean forward into the wall, keeping the back leg straight and heel down, until you feel a stretch in the calf of your back leg.',
      'Hold the stretch for 20-30 seconds, breathing deeply, then switch legs.'
    ],
    safetyNotes: [
      'Do not bounce into the stretch; apply gentle, sustained pressure.',
      'Keep your back leg straight and heel on the floor to target the gastrocnemius.',
      'Stop if you feel any sharp pain in your calf or Achilles tendon.'
    ],
    modifications: {
      beginner: 'Reduce the distance you step back to lessen the intensity of the stretch.',
      advanced: 'Increase the distance you step back. Perform the stretch with the ball of your foot on an elevated surface (e.g., step) to increase the stretch.',
      equipment_alternatives: {
        'Wall': 'Strap or Towel (for seated calf stretch)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Face wall, hands on wall, one leg back, straight.',
        'Front knee bent, back heel down, toes forward.',
        'Ready to lean into stretch.'
      ],
      execution: [
        'Lean forward, keeping back leg straight and heel down.',
        'Feel stretch in calf, not knee.',
        'Hold and breathe deeply, relax into stretch.'
      ],
      common_mistakes: [
        'Bouncing into the stretch.',
        'Lifting the back heel off the floor.',
        'Rounding the back instead of leaning from hips.'
      ],
      breathing: 'Breathe deeply and slowly throughout the stretch.'
    }
  },
  'box-step-ups': {
    id: 'box-step-ups',
    name: 'Box Step-Ups',
    category: 'strength',
    equipment: ['Plyo Box', 'Bench', 'Sturdy Step'],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand facing a plyo box or sturdy elevated surface, about a foot away.',
      'Place one entire foot flat on the center of the box, ensuring your knee is directly over your ankle.',
      'Drive through the heel of your elevated foot, pushing yourself up until your standing leg is straight on the box.',
      'Bring your trailing leg up to meet the standing leg on the box, or keep it hovering for continuous reps.',
      'Slowly lower the trailing leg back to the floor, then the lead leg, controlling the descent. Alternate lead legs with each rep or after a set number of reps.'
    ],
    safetyNotes: [
      'Use a box height that allows you to maintain good form without excessive knee strain or leaning.',
      'Ensure the box is stable and will not slide or tip over.',
      'Step up with your whole foot; do not push off your toes from the floor.'
    ],
    modifications: {
      beginner: 'Use a lower box height. Perform without dumbbells. Focus on slow, controlled movements.',
      advanced: 'Use a higher box height. Hold dumbbells or a barbell for added resistance. Perform plyometric step-ups (explosive step-up).',
      equipment_alternatives: {
        'Plyo Box': 'Stairs',
        'Bench': 'Bench'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand facing box, one foot flat on box, knee over ankle.',
        'Chest up, shoulders back, core braced.',
        'Gaze forward, ready to drive up.'
      ],
      execution: [
        'Drive through elevated heel, push up powerfully.',
        'Keep torso upright, avoid leaning forward excessively.',
        'Control the descent, don\'t just drop down.'
      ],
      common_mistakes: [
        'Using momentum to step up.',
        'Pushing off the floor with the trailing leg.',
        'Knee caving inward on the elevated leg.'
      ],
      breathing: 'Exhale as you step up, inhale as you lower down.'
    }
  },
  'calf-press': {
    id: 'calf-press',
    name: 'Calf Press (Leg Press Machine)',
    category: 'strength',
    equipment: ['Leg Press Machine'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 2,
    instructions: [
      'Sit on the leg press machine with your back firmly against the pad.',
      'Place the balls of your feet on the lower edge of the footplate, with your heels hanging off.',
      'Release the safety catches and extend your knees slightly, but do not lock them out.',
      'Keeping your knees slightly bent, push the footplate away by extending your ankles, pressing through the balls of your feet and squeezing your calves.',
      'Slowly return the footplate by flexing your ankles, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Do not lock out your knees at any point during the exercise.',
      'Control the movement; do not let the weight stack slam down or bounce.',
      'Ensure your feet are securely placed on the footplate.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-leg calf presses.',
      equipment_alternatives: {
        'Leg Press Machine': 'Standing Calf Raise Machine',
        'Machine': 'Seated Calf Raise Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit on machine, back firm, balls of feet on lower edge of footplate.',
        'Knees slightly bent, ready to press.',
        'Core braced.'
      ],
      execution: [
        'Push footplate by extending ankles, squeezing calves hard.',
        'Control the return, allowing full calf stretch.',
        'Keep knees slightly bent throughout.'
      ],
      common_mistakes: [
        'Locking out knees.',
        'Bouncing the weight.',
        'Not getting a full range of motion.'
      ],
      breathing: 'Exhale as you press, inhale as you return.'
    }
  },
  'standing-dumbbell-calf-raise': {
    id: 'standing-dumbbell-calf-raise',
    name: 'Standing Dumbbell Calf Raise',
    category: 'strength',
    equipment: ['Dumbbells', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, arms extended by your sides, palms facing your body.',
      'For increased range of motion, stand with the balls of your feet on an elevated surface (e.g., step, weight plate), with your heels hanging off.',
      'Keep your knees straight but not locked out.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Maintain balance throughout the movement; hold onto a stable support if needed.',
      'Do not bounce at the bottom; control the eccentric phase.',
      'Keep your knees straight but avoid locking them out to prevent strain.'
    ],
    modifications: {
      beginner: 'Perform without dumbbells (Bodyweight Calf Raise). Hold onto a wall or sturdy object for balance.',
      advanced: 'Increase the weight of the dumbbells. Perform single-leg standing dumbbell calf raises.',
      equipment_alternatives: {
        'Dumbbells': 'Barbell (Standing Barbell Calf Raise)',
        'Weights': 'Calf Raise Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells by sides, balls of feet on elevated surface (optional).',
        'Knees straight but not locked, core braced.',
        'Gaze forward, ready to lift.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing at the bottom.',
        'Not getting a full range of motion (stretch and contraction).',
        'Using momentum instead of calf strength.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'seated-machine-calf-press': {
    id: 'seated-machine-calf-press',
    name: 'Seated Machine Calf Press',
    category: 'strength',
    equipment: ['Seated Calf Raise Machine'],
    muscleGroups: ['Calves (Soleus, Gastrocnemius)'],
    difficulty: 1,
    instructions: [
      'Sit on the seated calf raise machine, placing the balls of your feet on the footplate, with your heels hanging off.',
      'Adjust the knee pad so it rests firmly across your thighs, just above your knees.',
      'Release the safety catch and allow your heels to drop down, feeling a stretch in your calves.',
      'Push the footplate upwards by extending your ankles, pressing through the balls of your feet and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Do not bounce at the bottom; control the eccentric phase.',
      'Ensure the knee pad is securely positioned to prevent it from slipping.',
      'Maintain a controlled movement throughout the entire range of motion.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-leg seated calf presses.',
      equipment_alternatives: {
        'Seated Calf Raise Machine': 'Standing Calf Raise Machine',
        'Machine': 'Dumbbell Seated Calf Raise'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit on machine, balls of feet on footplate, heels off.',
        'Knee pad secured, ready to lift.',
        'Allow full stretch at the bottom.'
      ],
      execution: [
        'Push up powerfully through balls of feet, squeezing calves.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing the weight.',
        'Not getting a full range of motion.',
        'Using hip flexors to lift the weight instead of calves.'
      ],
      breathing: 'Exhale as you press up, inhale as you lower down.'
    }
  },
  'seated-dumbbell-calf-raise': {
    id: 'seated-dumbbell-calf-raise',
    name: 'Seated Dumbbell Calf Raise',
    category: 'strength',
    equipment: ['Dumbbells', 'Bench', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Soleus)'],
    difficulty: 1,
    instructions: [
      'Sit on a flat bench or chair with your feet flat on the floor.',
      'Place a dumbbell on top of each thigh, just above your knees, holding them in place with your hands.',
      'For increased range of motion, place the balls of your feet on an elevated surface (e.g., weight plate) with your heels hanging off.',
      'Allow your heels to drop down, feeling a stretch in your calves.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Ensure the dumbbells are securely placed and do not slide off your thighs.',
      'Control the movement; do not bounce at the bottom.',
      'Maintain an upright posture; avoid rounding your back.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells or perform without weight. Reduce the range of motion if needed.',
      advanced: 'Increase the weight of the dumbbells. Perform single-leg seated dumbbell calf raises.',
      equipment_alternatives: {
        'Dumbbells': 'Seated Calf Raise Machine',
        'Weights': 'Barbell (for seated calf raise)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit on bench, dumbbells on thighs, balls of feet on elevated surface (optional).',
        'Heels down, ready to lift.',
        'Maintain upright posture.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing the weights.',
        'Not getting a full range of motion.',
        'Allowing dumbbells to slide off thighs.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'standing-barbell-calf-raise': {
    id: 'standing-barbell-calf-raise',
    name: 'Standing Barbell Calf Raise',
    category: 'strength',
    equipment: ['Barbell', 'Weight Plates', 'Squat Rack (optional)', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 3,
    instructions: [
      'Load a barbell and place it on your upper back, similar to a high-bar squat position, in a squat rack (optional).',
      'Stand with the balls of your feet on an elevated surface (e.g., step, weight plate), with your heels hanging off, feet hip-width apart.',
      'Keep your knees straight but not locked out, and maintain an upright torso.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Maintain balance throughout the movement; use a squat rack for safety if lifting heavy.',
      'Do not bounce at the bottom; control the eccentric phase.',
      'Keep your knees straight but avoid locking them out to prevent strain.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Standing Dumbbell Calf Raise). Focus on bodyweight calf raises first.',
      advanced: 'Increase the weight. Perform single-leg standing barbell calf raises (advanced and requires significant balance).',
      equipment_alternatives: {
        'Barbell': 'Dumbbells',
        'Weights': 'Calf Raise Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 0.025,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell on upper back, balls of feet on elevated surface, heels off.',
        'Knees straight but not locked, core braced.',
        'Gaze forward, ready to lift.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing at the bottom.',
        'Not getting a full range of motion (stretch and contraction).',
        'Losing balance or shifting weight excessively.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'standing-kettlebell-calf-raise': {
    id: 'standing-kettlebell-calf-raise',
    name: 'Standing Kettlebell Calf Raise',
    category: 'strength',
    equipment: ['Kettlebells (1 or 2)', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a kettlebell in one or both hands, arms extended by your sides.',
      'For increased range of motion, stand with the balls of your feet on an elevated surface (e.g., step, weight plate), with your heels hanging off.',
      'Keep your knees straight but not locked out.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Maintain balance throughout the movement; hold onto a stable support if needed.',
      'Do not bounce at the bottom; control the eccentric phase.',
      'Keep your knees straight but avoid locking them out to prevent strain.'
    ],
    modifications: {
      beginner: 'Use lighter kettlebell or perform without weight (Bodyweight Calf Raise). Hold onto a wall or sturdy object for balance.',
      advanced: 'Increase the weight of the kettlebell(s). Perform single-leg standing kettlebell calf raises.',
      equipment_alternatives: {
        'Kettlebells': 'Dumbbells',
        'Weights': 'Barbell'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 8,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, kettlebell(s) by sides, balls of feet on elevated surface (optional).',
        'Knees straight but not locked, core braced.',
        'Gaze forward, ready to lift.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing at the bottom.',
        'Not getting a full range of motion (stretch and contraction).',
        'Using momentum instead of calf strength.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'stiff-legged-barbell-good-morning': {
    id: 'stiff-legged-barbell-good-morning',
    name: 'Stiff-Legged Barbell Good Morning',
    category: 'strength',
    equipment: ['Barbell', 'Weight Plates', 'Squat Rack (optional)'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 3,
    instructions: [
      'Place a barbell on your upper back, similar to a high-bar squat position, in a squat rack (optional).',
      'Stand with feet hip-width apart, knees almost completely straight (micro-bend, do not lock out).',
      'Keeping your back straight and core engaged, slowly hinge forward at your hips, pushing your glutes back.',
      'Lower your torso until it is nearly parallel to the floor, or until you feel a strong stretch in your hamstrings.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; rounding your back can lead to serious injury.',
      'Use light weight, especially when learning, as this exercise places significant stress on the lower back.',
      'Do not go lower than your hamstring flexibility allows; stop when you feel a strong stretch.'
    ],
    modifications: {
      beginner: 'Perform with a broomstick or PVC pipe to master the hip hinge, or use a very light barbell. Perform Dumbbell Stiff Legged Deadlifts first.',
      advanced: 'Increase the weight, or incorporate a pause at the bottom of the movement.',
      equipment_alternatives: {
        'Barbell': 'Dumbbells (Dumbbell Stiff Legged Deadlift)',
        'Weights': 'Resistance Band (around neck and under feet)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 0.025,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell on upper back, feet hip-width, knees almost straight.',
        'Shoulders back and down, chest up.',
        'Brace core firmly.'
      ],
      execution: [
        'Initiate by pushing hips back, keeping back flat and legs almost straight.',
        'Lower torso with control, feeling hamstring stretch.',
        'Squeeze glutes and hamstrings to return to upright position.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Bending knees excessively, turning it into a squat.',
        'Going too low and losing back integrity.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },
  'incline-back-extension': {
    id: 'incline-back-extension',
    name: 'Incline Back Extension',
    category: 'strength',
    equipment: ['Incline Hyperextension Bench'],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Adjust the incline hyperextension bench so the top of the pad is just below your hip crease, allowing you to hinge freely at your hips.',
      'Hook your heels securely under the foot pads, crossing your arms over your chest or placing hands lightly behind your head.',
      'Allow your torso to bend forward at the hips, keeping your back straight, until you feel a stretch in your hamstrings and lower back.',
      'Engage your lower back and glutes to extend your torso upwards until your body forms a straight line from your head to your heels.',
      'Squeeze your lower back and glutes at the peak contraction, then slowly lower back down with control.'
    ],
    safetyNotes: [
      'Avoid rounding your back; maintain a straight spine throughout the movement.',
      'Do not hyperextend excessively at the top; stop when your body is in a straight line.',
      'Control the movement; avoid jerking or using momentum.'
    ],
    modifications: {
      beginner: 'Perform without added weight. Reduce the range of motion if needed.',
      advanced: 'Hold a weight plate or dumbbell to your chest for added resistance. Perform with a slower eccentric phase.',
      equipment_alternatives: {
        'Incline Hyperextension Bench': 'Back Extension (horizontal bench)',
        'Machine': 'Superman (bodyweight)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Adjust pad to hip crease, heels hooked securely.',
        'Arms crossed or hands behind head, back straight.',
        'Core braced, ready to hinge.'
      ],
      execution: [
        'Hinge at hips, extend torso up using lower back and glutes.',
        'Squeeze glutes and lower back at the top.',
        'Control the descent, feeling the stretch.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Hyperextending excessively at the top.',
        'Using momentum to lift the torso.'
      ],
      breathing: 'Exhale as you extend up, inhale as you lower down.'
    }
  },
  'foam-roll-hip-abductors': {
    id: 'foam-roll-hip-abductors',
    name: 'Foam Roll Hip Abductors',
    category: 'flexibility',
    equipment: ['Foam Roller'],
    muscleGroups: ['Hip Abductors (Gluteus Medius, TFL)'],
    difficulty: 1,
    instructions: [
      'Lie on your side with the foam roller positioned under your outer thigh/hip area.',
      'Support your body with your forearms and the leg that is not on the roller (bent knee on the floor for stability).',
      'Slowly roll your body up and down, allowing the foam roller to move along the side of your thigh, from just below your hip to just above your knee.',
      'Pause on any tender spots and apply sustained pressure until the discomfort lessens.',
      'Continue rolling for 30-60 seconds on each side.'
    ],
    safetyNotes: [
      'Avoid rolling directly over bony prominences or joints.',
      'Control the pressure; it should be uncomfortable but not painful.',
      'Stop if you feel any sharp pain.'
    ],
    modifications: {
      beginner: 'Reduce the amount of body weight on the roller by using more support from your arms and non-rolling leg.',
      advanced: 'Increase the pressure by stacking your legs or using less support from your arms.',
      equipment_alternatives: {
        'Foam Roller': 'Massage Ball',
        'Equipment': 'Manual Massage'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie on side, foam roller under outer thigh/hip.',
        'Support with forearms and non-rolling leg.',
        'Relax muscles being rolled.'
      ],
      execution: [
        'Slowly roll up and down, covering entire outer thigh.',
        'Pause on tender spots, breathe deeply.',
        'Control the movement, avoid jerky motions.'
      ],
      common_mistakes: [
        'Rolling too quickly.',
        'Applying too much pressure too soon.',
        'Holding breath due to discomfort.'
      ],
      breathing: 'Breathe deeply and slowly throughout the rolling process.'
    }
  },
  'swim-freestyle-drills': {
    id: 'swim-freestyle-drills',
    name: 'Freestyle Drills (Catch-up, Fingertip Drag, Kickboard)',
    category: 'technique',
    equipment: ['Kickboard', 'Pull Buoy', 'Fins (optional)'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 2,
    instructions: [
      '**Catch-up Drill:** Push off and glide. Take one arm stroke, and hold that arm extended in front until the other arm completes its stroke and meets the first hand. Then, both hands push off together, and the next stroke begins. Focus on extension and rotation.',
      '**Fingertip Drag Drill:** Swim freestyle, but on the recovery phase of each arm stroke, drag your fingertips along the surface of the water, keeping your elbow high. This emphasizes a high elbow catch and proper recovery.',
      '**Kickboard Drill:** Hold a kickboard out in front with both hands, keeping your body streamlined. Focus solely on a strong, consistent kick from your hips, with minimal knee bend. Vary kick speed and intensity.',
      'Combine these drills within your swim sets to focus on different aspects of freestyle technique.'
    ],
    safetyNotes: [
      'Ensure proper pool depth and safety regulations. Stop if you feel any pain, especially in the shoulders.',
      'Hydrate well before and after swimming.',
      'Listen to your body; don\'t push through discomfort that could lead to injury.'
    ],
    modifications: {
      beginner: 'Focus on one drill at a time. Use fins for easier propulsion and to focus on upper body technique during drills.',
      advanced: 'Increase drill distance or intensity. Combine multiple drills within one length. Focus on specific aspects like breathing timing or hip rotation.',
      equipment_alternatives: {
        'Kickboard': 'No equipment (focus on body position and kick)',
        'Fins': 'Ankle weights (advanced, for kick strength without propulsion)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 200,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely.',
        'Select appropriate drill and equipment.',
        'Focus on body position and core engagement.'
      ],
      execution: [
        'Execute drill with focus on technique over speed.',
        'Maintain streamlined body position.',
        'Pay attention to catch, pull, and recovery phases.'
      ],
      common_mistakes: [
        'Rushing the drills and losing focus on technique.',
        'Dropping elbows during the catch-up or fingertip drag.',
        'Kicking from the knees instead of the hips during kickboard drill.'
      ],
      breathing: 'Maintain consistent, relaxed breathing throughout all drills.'
    }
  },
  'bike-single-leg-pedaling': {
    id: 'bike-single-leg-pedaling',
    name: 'Single-Leg Pedaling Drills (Stationary Bike)',
    category: 'technique',
    equipment: ['Stationary Bike (indoor trainer or spin bike)'],
    muscleGroups: ['Quads', 'Hamstrings', 'Glutes', 'Calves'],
    difficulty: 3,
    instructions: [
      'Set up your stationary bike comfortably. Begin pedaling at a moderate cadence with both legs to warm up.',
      'Unclip one foot (or remove from the toe cage) and rest it on a stable surface beside the bike, or simply let it hang freely without touching the ground.',
      'Focus on pedaling smoothly and continuously with the single working leg through the entire pedal stroke (360 degrees). Emphasize pulling up through the top of the stroke and pushing through the bottom.',
      'Maintain a consistent cadence and effort. Avoid jerking or choppy movements.',
      'Perform for a set duration (e.g., 30-60 seconds) per leg, then switch. Alternate legs for several intervals.'
    ],
    safetyNotes: [
      'Ensure your bike is stable and properly adjusted.',
      'Start with a light resistance and gradually increase as your technique improves.',
      'If using clipless pedals, ensure you can safely unclip and re-clip your foot quickly.',
      'Stop if you feel any knee pain or excessive muscle strain.'
    ],
    modifications: {
      beginner: 'Perform for shorter durations (e.g., 15-20 seconds per leg). Use very light resistance. Focus only on the downstroke initially.',
      advanced: 'Increase duration and resistance. Vary cadence during the drill. Perform in and out of the saddle (carefully).',
      equipment_alternatives: {
        'Stationary Bike': 'Road bike on an indoor trainer (with proper setup)',
        'Equipment': 'Outdoor riding (caution and skill required, not recommended for beginners)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.10,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: [
        'Bike set up, moderate resistance.',
        'Warm-up with both legs.',
        'Core engaged, upper body relaxed.'
      ],
      execution: [
        'Unclip one foot, pedal smoothly with single leg.',
        'Focus on 360-degree pedal stroke, pulling up and pushing down.',
        'Maintain consistent cadence and smooth power delivery.'
      ],
      common_mistakes: [
        'Jerking or choppy pedal stroke.',
        'Rocking hips excessively to compensate.',
        'Neglecting the upstroke or pull phase of the pedal.'
      ],
      breathing: 'Maintain steady, rhythmic breathing. Avoid holding your breath.'
    }
  },
  'swim-plyometric-box-jumps': {
    id: 'swim-plyometric-box-jumps',
    name: 'Plyometric Box Jumps (for explosive push-off)',
    category: 'plyometric',
    equipment: ['Plyometric Box (sturdy and stable)'],
    muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves', 'Core'],
    difficulty: 3,
    instructions: [
      'Stand facing a sturdy plyometric box, about an arm\'s length away, with feet hip-width apart.',
      'Initiate the jump by swinging your arms back and bending at your knees and hips into a quarter squat, loading your glutes and hamstrings.',
      'Explosively jump upwards and forwards onto the box, landing softly with both feet simultaneously in a athletic stance (knees slightly bent), core braced.',
      'Stand up fully on the box, extending your hips and knees.',
      'Step or jump back down safely (stepping is recommended for beginners/injury prevention) and immediately prepare for the next jump.'
    ],
    safetyNotes: [
      'Ensure the box is stable and appropriate height; start low and gradually increase.',
      'Land softly with bent knees to absorb impact; avoid landing with locked knees.',
      'Perform on a non-slip surface.',
      'Stop immediately if you feel any knee, ankle, or hip pain.'
    ],
    modifications: {
      beginner: 'Use a lower box or stack plates to a low height. Focus on controlled landing. Perform step-ups instead of jumps.',
      advanced: 'Increase box height. Perform continuous jumps (without stepping down between reps, only for experienced athletes). Add a pause at the landing to ensure stability.',
      equipment_alternatives: {
        'Plyometric Box': 'Sturdy bench or low wall (ensure stability)',
        'Equipment': 'Squat Jumps (bodyweight, no box)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand facing box, arm\'s length away, feet hip-width.',
        'Athletic stance, ready to load and explode.',
        'Core braced, gaze forward.'
      ],
      execution: [
        'Load hips and quads, explode upwards onto box.',
        'Land softly, both feet simultaneously, knees bent.',
        'Stand tall on box, step down safely for next rep.'
      ],
      common_mistakes: [
        'Landing stiff-legged or with knees caving in.',
        'Not fully extending hips at the top of the box.',
        'Using too high a box and sacrificing form for height.'
      ],
      breathing: 'Inhale during the squat, exhale explosively during the jump.'
    }
  },
  'bike-hill-climbs-intervals': {
    id: 'bike-hill-climbs-intervals',
    name: 'Hill Climb Intervals (Outdoor or Indoor)',
    category: 'endurance',
    equipment: ['Bicycle (Road or Mountain)', 'Outdoor Hill or Indoor Trainer with Resistance'],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Calves', 'Core'],
    difficulty: 4,
    instructions: [
      '**Outdoor Hill:** Find a moderate to steep hill that takes 2-5 minutes to climb. Warm up for 10-15 minutes on flat terrain.',
      'Approach the base of the hill and shift into a challenging gear. Begin climbing, maintaining a high effort (e.g., 8/10 on a perceived exertion scale).',
      'Focus on smooth, powerful pedal strokes, staying seated if possible, or standing when necessary for power (e.g., steep sections). Maintain good posture and engage your core.',
      'Once you reach the top, ease off the effort and spin lightly for 3-5 minutes as recovery, then turn around and repeat the climb.',
      '**Indoor Trainer:** Set your trainer to a high resistance or use a virtual climbing simulation. Follow the same interval structure of high-effort climbs followed by low-effort recovery.'
    ],
    safetyNotes: [
      'If outdoors, choose a hill with minimal traffic and a safe shoulder/path. Be aware of your surroundings.',
      'Ensure your bike is in good working order, especially brakes and gears.',
      'Stay hydrated. Stop if you feel dizzy or excessively fatigued.',
      'Indoors, ensure proper ventilation and cool-down protocols.'
    ],
    modifications: {
      beginner: 'Choose shorter, less steep hills. Reduce the intensity or duration of the climb. Increase recovery time.',
      advanced: 'Increase hill steepness, length, or number of repetitions. Decrease recovery time. Incorporate standing efforts more frequently.',
      equipment_alternatives: {
        'Outdoor Hill': 'Indoor trainer with ERG mode (maintains power regardless of cadence)',
        'Equipment': 'Spin class with resistance focus'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 3,
      progressionRate: 0.10,
      unit: 'minutes per climb'
    },
    coaching: {
      setup: [
        'Warm up thoroughly on flat terrain or easy spin.',
        'Select challenging but manageable gear.',
        'Maintain upright posture, core engaged.'
      ],
      execution: [
        'Push consistently with strong pedal strokes.',
        'Manage effort level for sustained climb.',
        'Breathe deeply and rhythmically, avoid shallow breathing.'
      ],
      common_mistakes: [
        'Starting too hard and fading quickly.',
        'Mashing gears instead of smooth pedaling.',
        'Losing form or slumping over the handlebars.'
      ],
      breathing: 'Deep, controlled breathing. Inhale fully, exhale completely to fuel working muscles.'
    }
  },
  'swim-open-water-sighting-drills': {
    id: 'swim-open-water-sighting-drills',
    name: 'Open Water Sighting Drills (Pool Practice)',
    category: 'technique',
    equipment: ['Pool'],
    muscleGroups: ['Neck', 'Shoulders', 'Core'],
    difficulty: 2,
    instructions: [
      'In the pool, swim freestyle normally. Every 6-8 strokes (or a set number of strokes), lift your head just enough to get your eyes out of the water, quickly spot a target at the end of the lane (or a fixed point), and then immediately return your head to the water to breathe and continue swimming.',
      'Avoid lifting your head too high, which causes your hips to sink.',
      'Practice taking quick glances; you don\'t need to hold your head up for a long time.',
      'Vary the frequency of your sighting to simulate different open water conditions.'
    ],
    safetyNotes: [
      'Ensure you are comfortable with basic freestyle technique before attempting sighting drills.',
      'Avoid bumping into other swimmers in the lane.',
      'If you experience neck strain, reduce the frequency or height of your head lift.'
    ],
    modifications: {
      beginner: 'Sight more frequently (every 4-5 strokes). Practice sighting with a kickboard to focus only on head movement.',
      advanced: 'Increase the number of strokes between sightings. Practice bilateral sighting (sighting before breathing to both sides). Incorporate a \'crocodile\' sighting (eyes just above the waterline).',
      equipment_alternatives: {
        'Pool': 'Open water (with a spotter and appropriate safety precautions)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 200,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Swim freestyle normally, establish good rhythm.',
        'Identify a target at the end of the lane.',
        'Core engaged, ready for slight head lift.'
      ],
      execution: [
        'Lift head just enough to sight, eyes out of water.',
        'Quick glance, return head to water immediately.',
        'Breathe to the side after sighting, maintain streamlined body.'
      ],
      common_mistakes: [
        'Lifting head too high, causing hips to sink.',
        'Holding head up for too long, disrupting rhythm.',
        'Looking forward without immediately returning to streamlined position.'
      ],
      breathing: 'Exhale as you lift head for sight, inhale to the side as you return to water.'
    }
  },
  'bike-spin-ups-intervals': {
    id: 'bike-spin-ups-intervals',
    name: 'Spin-Up Intervals (Cadence Drills)',
    category: 'technique',
    equipment: ['Bicycle (Stationary Bike, Indoor Trainer, or Outdoor with safe, flat area)'],
    muscleGroups: ['Legs (Neuromuscular Coordination)'],
    difficulty: 3,
    instructions: [
      'Begin pedaling at a comfortable, moderate cadence (e.g., 80-90 RPM) in an easy to moderate gear.',
      'Over a short period (e.g., 10-15 seconds), gradually increase your cadence as high as possible without bouncing in the saddle or losing control of your pedal stroke. The goal is to reach your maximum smooth cadence.',
      'Hold this high cadence for a few seconds if possible, then return to your starting cadence for a recovery period (e.g., 60-90 seconds).',
      'Focus on staying smooth and relaxed throughout the entire movement. Avoid jerking or mashing the pedals.'
    ],
    safetyNotes: [
      'Perform on a flat, safe surface if outdoors. If indoors, ensure your bike is stable.',
      'Do not push into a cadence where you feel out of control or are bouncing excessively.',
      'Warm up thoroughly before starting spin-ups to prepare your muscles and nervous system.'
    ],
    modifications: {
      beginner: 'Start with shorter spin-up durations (e.g., 5-8 seconds). Focus on smaller increases in cadence. Use a very easy gear.',
      advanced: 'Increase the duration of the high-cadence effort. Incorporate spin-ups into longer rides. Practice single-leg spin-ups (carefully).',
      equipment_alternatives: {
        'Bicycle': 'Spin bike (with cadence display)'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 15,
      progressionRate: 0.05,
      unit: 'seconds per spin-up'
    },
    coaching: {
      setup: [
        'Start with comfortable cadence, easy-moderate gear.',
        'Core engaged, upper body relaxed.',
        'Focus on smooth, circular pedal stroke.'
      ],
      execution: [
        'Gradually increase cadence, staying smooth.',
        'Avoid bouncing in saddle; maintain control.',
        'Return to recovery cadence, relax legs.'
      ],
      common_mistakes: [
        'Bouncing excessively in the saddle.',
        'Losing control of the pedal stroke at high cadences.',
        'Mashing the pedals instead of smooth, circular motion.'
      ],
      breathing: 'Maintain steady breathing; don\'t hold your breath during high-cadence efforts.'
    }
  },

  'warrior-ii': {
    id: 'warrior-ii',
    name: 'Warrior II',
    category: 'strength',
    equipment: ['mat'],
    muscleGroups: ['quadriceps', 'glutes', 'adductors', 'shoulders', 'core'],
    difficulty: 2,
    instructions: [
      'Stand with your feet wide apart, about 3-4 feet.',
      'Turn your right foot out 90 degrees to point forward. Turn your left foot in slightly.',
      'Align your front heel with the arch of your back foot.',
      'On an exhale, bend your right knee over your right ankle, so your shin is perpendicular to the floor.',
      'Extend your arms parallel to the floor, reaching actively out to the sides.',
      'Turn your head to look over your right fingertips.',
      'Hold the pose, keeping your torso upright and your core engaged.'
    ],
    safetyNotes: [
      'Ensure your front knee is stacked directly over your ankle, not past it.',
      'Keep the outer edge of your back foot firmly grounded.',
      'Relax your shoulders away from your ears.'
    ],
    modifications: {
      beginner: 'Lessen the bend in the front knee. Shorten your stance.',
      advanced: 'Deepen the bend in the front knee, bringing the thigh parallel to the floor. Hold for a longer duration.',
      equipment_alternatives: {
        'none': 'Can be practiced with a chair for support under the front thigh'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Wide stance, align heels.',
        'Turn front foot out 90 degrees.',
        'Extend arms parallel to the floor.'
      ],
      execution: [
        'Bend front knee over ankle.',
        'Press into the outer edge of the back foot.',
        'Keep torso centered and shoulders relaxed.',
        'Gaze over front fingertips.'
      ],
      common_mistakes: [
        'Front knee going past the ankle.',
        'Leaning the torso forward.',
        'Shoulders creeping up to ears.'
      ],
      breathing: 'Breathe steadily and deeply while holding the pose.'
    }
  },

  'hip-bridge-lift': {
    id: 'hip-bridge-lift',
    name: 'Hip Bridge Lift',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes',
      'Hamstrings',
      'Core'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent, feet flat on the floor hip-width apart, and heels relatively close to your glutes.',
      'Place your arms by your sides with your palms down.',
      'Engage your core and exhale as you press through your heels to lift your hips off the floor.',
      'Squeeze your glutes and hamstrings at the top. Your body should form a straight line from your shoulders to your knees.',
      'Hold the contraction at the top for a moment.',
      'Inhale and slowly lower your hips back to the starting position with control.'
    ],
    safetyNotes: [
      'Avoid hyperextending your lower back at the top; the work should be in the glutes.',
      'Press through your full foot, especially the heels, not just the toes.',
      'Keep your knees aligned with your hips; don\'t let them splay out or fall in.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Do not lift hips as high.',
      advanced: 'Place a weight plate or dumbbell across your hips. Progress to a single-leg hip bridge.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
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
        'Lie on back, knees bent, feet flat.',
        'Heels close to glutes, arms by sides.'
      ],
      execution: [
        'Drive through heels to lift hips.',
        'Squeeze glutes hard at the top.',
        'Create a straight line from shoulders to knees.',
        'Lower down with control.'
      ],
      common_mistakes: [
        'Arching the lower back instead of using glutes.',
        'Lifting hips too high.',
        'Knees caving in or out.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'lateral-leg-lift': {
    id: 'lateral-leg-lift',
    name: 'Lateral Leg Lift',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Abductors'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your right side with your legs extended and stacked one on top of the other.',
      'You can support your head with your bottom arm.',
      'Engage your core to keep your torso stable and prevent it from rocking.',
      'Keeping your top (left) leg straight and your foot in a neutral position, slowly lift it towards the ceiling.',
      'Lift as high as you can without rocking your torso back. The movement should come from your hip.',
      'Pause at the top, then slowly lower the leg back down with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Avoid swinging the leg; the movement should be slow and deliberate.',
      'Keep your torso still; do not use momentum from your upper body.',
      'Focus on using your outer hip/glute muscles to lift the leg.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Bend the bottom leg for more stability.',
      advanced: 'Add an ankle weight or a resistance band around your ankles/thighs. Add a pause at the top of the lift.',
      equipment_alternatives: {
        'None': 'Standing hip abductions.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on your side, legs stacked and straight.',
        'Core engaged to stabilize torso.'
      ],
      execution: [
        'Slowly lift the top leg towards the ceiling.',
        'Lead with the heel slightly.',
        'Keep the leg straight and torso still.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Swinging the leg or using momentum.',
        'Rocking the torso back and forth.',
        'Bending the knee of the lifted leg.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower.'
    }
  },

  'hamstring-bridge-with-chair': {
    id: 'hamstring-bridge-with-chair',
    name: 'Hamstring Bridge with a chair',
    category: 'strength',
    equipment: [
      'Chair',
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hamstrings',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your back with your heels placed on the edge of a chair seat.',
      'Your knees should be bent at approximately a 90-degree angle.',
      'Place your arms by your sides on the floor.',
      'Engage your core and drive your heels down into the chair to lift your hips off the floor.',
      'Focus on using your hamstrings and glutes to perform the lift.',
      'Raise your hips until your body forms a straight line from your shoulders to your knees.',
      'Lower your hips back down with control.'
    ],
    safetyNotes: [
      'Ensure the chair is stable and will not slide.',
      'Avoid lifting your hips so high that you feel strain in your lower back.',
      'Control the movement, especially the lowering phase.'
    ],
    modifications: {
      beginner: 'Perform a standard glute bridge on the floor. Don\'t lift hips as high.',
      advanced: 'Progress to a single-leg hamstring bridge with one heel on the chair.',
      equipment_alternatives: {
        'Chair': 'A bench, ottoman, or stability ball.'
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
        'Lie on back, heels on the edge of a chair.',
        'Knees at a 90-degree angle.',
        'Core ready.'
      ],
      execution: [
        'Dig heels down into the chair.',
        'Lift hips by contracting hamstrings and glutes.',
        'Form a straight line from shoulders to knees.',
        'Lower down slowly.'
      ],
      common_mistakes: [
        'Hyperextending the lower back.',
        'Chair sliding away.',
        'Not feeling the contraction in the hamstrings.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'frog-pumps': {
    id: 'frog-pumps',
    name: 'Frog Pumps',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Maximus)'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent.',
      'Bring the soles of your feet together and let your knees fall out to the sides, like a butterfly stretch. Pull your heels in close to your body.',
      'Place your arms by your sides.',
      'Keeping the soles of your feet pressed together, drive through the outer edges of your feet to lift your hips off the floor.',
      'Squeeze your glutes powerfully at the top.',
      'Lower your hips back down to the floor.',
      'Perform the repetitions in a quick, pumping motion.'
    ],
    safetyNotes: [
      'The range of motion is smaller than a regular glute bridge.',
      'Focus on a strong glute contraction at the top of each pump.',
      'Keep your upper back on the floor.'
    ],
    modifications: {
      beginner: 'Move more slowly and with a smaller range of motion.',
      advanced: 'Place a dumbbell or weight plate across your hips. Add a resistance band around your thighs.',
      equipment_alternatives: {
        'None': 'Standard glute bridge.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 25,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, soles of feet together, knees out wide.',
        'Heels close to your body.'
      ],
      execution: [
        'Press through the outside of your feet.',
        'Lift hips and squeeze glutes hard.',
        'Perform in a continuous, pumping motion.',
        'Focus on the glute squeeze.'
      ],
      common_mistakes: [
        'Not squeezing the glutes at the top.',
        'Letting feet come apart.',
        'Moving too slowly (it\'s meant to be a pump).'
      ],
      breathing: 'Exhale sharply on each pump up.'
    }
  },

  'supine-abductions-with-miniband': {
    id: 'supine-abductions-with-miniband',
    name: 'Supine Abductions with a miniband',
    category: 'strength',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Abductors'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent, feet flat on the floor, and hip-width apart.',
      'Place a miniband around your thighs, just above your knees.',
      'Engage your core and keep your back in a neutral position.',
      'Slowly press your knees outwards against the resistance of the band.',
      'Go as far as you can while keeping your feet flat on the floor.',
      'Hold the outward press for a moment, feeling the contraction in your outer hips and glutes.',
      'Slowly return your knees to the starting position with control. Do not let them snap back.'
    ],
    safetyNotes: [
      'The movement should be controlled in both directions.',
      'Keep your feet stationary on the floor.',
      'Ensure the resistance is challenging but allows for good form.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Reduce the range of motion.',
      advanced: 'Use a heavier resistance band. Perform the movement from a glute bridge position (banded bridge abductions).',
      equipment_alternatives: {
        'None': 'Side-lying leg lifts.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, knees bent, feet flat.',
        'Band around thighs, just above knees.'
      ],
      execution: [
        'Press knees out against the band.',
        'Feel the outer glutes fire.',
        'Control the return to the start.',
        'Keep feet glued to the floor.'
      ],
      common_mistakes: [
        'Letting the band snap the knees back together.',
        'Lifting the feet off the floor.',
        'Using a band that is too heavy and compromising form.'
      ],
      breathing: 'Exhale as you press out, inhale as you return.'
    }
  },

  'lateral-wrist-curls-with-dumbbells': {
    id: 'lateral-wrist-curls-with-dumbbells',
    name: 'Lateral Wrist Curls with dumbbells',
    category: 'strength',
    equipment: [
      'Dumbbells'
    ],
    muscleGroups: [
      'Forearms (Extensors, Flexors)'
    ],
    difficulty: 1,
    instructions: [
      'Sit on a bench or chair and hold a light dumbbell in each hand with a neutral (hammer) grip.',
      'Rest your forearms on your thighs, with your wrists and hands extending past your knees.',
      'Keeping your forearms stationary, deviate your wrists by tilting your hands upwards so your thumbs move towards the ceiling (radial deviation).',
      'Slowly lower your hands back down, then tilt them downwards so your pinkies move towards the floor (ulnar deviation).',
      'Repeat this up-and-down tilting motion in a slow and controlled manner.'
    ],
    safetyNotes: [
      'Use a very light weight to avoid straining the wrist joint.',
      'Isolate the movement to the wrist; do not use your arms to lift the weight.',
      'Perform the movement slowly and deliberately.'
    ],
    modifications: {
      beginner: 'Perform without any weight, focusing on the range of motion.',
      advanced: 'Use a slightly heavier dumbbell, maintaining strict form.',
      equipment_alternatives: {
        'Dumbbells': 'A resistance band looped under your foot and held in your hand.'
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
        'Sit with forearms resting on thighs.',
        'Hold light dumbbells with a neutral grip.',
        'Wrists are free to move.'
      ],
      execution: [
        'Tilt wrists up (thumb towards ceiling).',
        'Tilt wrists down (pinky towards floor).',
        'Keep forearms still.',
        'Movement is slow and controlled.'
      ],
      common_mistakes: [
        'Using too much weight.',
        'Moving the forearm instead of just the wrist.',
        'Performing the movement too quickly.'
      ],
      breathing: 'Breathe naturally throughout the exercise.'
    }
  },

  'standing-fire-hydrant': {
    id: 'standing-fire-hydrant',
    name: 'Standing Fire Hydrant',
    category: 'strength',
    equipment: [
      'Chair (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Abductors'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet together, holding onto a chair or wall for balance.',
      'Shift your weight to your left leg.',
      'Keeping your right knee bent at a 90-degree angle, lift your right leg out to the side.',
      'Lift as high as you can without tilting your torso. The movement should be isolated to the hip.',
      'Squeeze your outer glute at the top.',
      'Lower the leg back to the starting position with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Avoid leaning your torso to the opposite side to lift the leg higher.',
      'Keep your core engaged to maintain stability.',
      'The movement should be controlled, not a swing.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Use more support from the chair/wall.',
      advanced: 'Add a resistance band around your thighs, just above the knees. Perform without holding on for a balance challenge.',
      equipment_alternatives: {
        'None': 'Clamshells (lying on side).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, holding support.',
        'Shift weight to one leg, core braced.',
        'Keep torso upright.'
      ],
      execution: [
        'Lift bent knee out to the side.',
        'Isolate the movement to the hip.',
        'Squeeze outer glute.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Leaning the torso to compensate.',
        'Swinging the leg.',
        'Arching the back.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'prone-frog-lifts': {
    id: 'prone-frog-lifts',
    name: 'Prone Frog Lifts',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on a mat. Rest your forehead on your hands.',
      'Bend your knees to a 90-degree angle and bring your heels together, allowing your knees to splay outwards (frog leg position).',
      'Engage your core to keep your lower back stable.',
      'Squeezing your glutes, lift your knees and thighs a few inches off the floor.',
      'Keep your heels pressed together throughout the lift.',
      'Hold the contraction at the top for a moment.',
      'Lower your knees back to the floor with control.'
    ],
    safetyNotes: [
      'The range of motion is very small; focus on the glute contraction, not the height of the lift.',
      'Avoid arching your lower back; keep your pubic bone pressed gently into the mat.',
      'Keep your upper body relaxed.'
    ],
    modifications: {
      beginner: 'Focus on just squeezing the glutes without lifting the knees.',
      advanced: 'Add a light ankle weight to each leg.',
      equipment_alternatives: {
        'None': 'Standard prone leg lifts (one leg at a time).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, forehead on hands.',
        'Bend knees, bring heels together, knees wide.'
      ],
      execution: [
        'Squeeze your glutes to lift your thighs off the floor.',
        'Keep heels touching.',
        'Movement is small, focus on the squeeze.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Lifting too high and arching the back.',
        'Using momentum.',
        'Not keeping heels together.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'standing-hamstring-curl': {
    id: 'standing-hamstring-curl',
    name: 'Standing Hamstring Curl',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Hamstrings'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall, holding onto a wall or chair for balance.',
      'Shift your weight to your left leg.',
      'Engage your right hamstring to bend your right knee and pull your heel up towards your glute.',
      'Focus on a strong contraction in the back of your thigh.',
      'Hold the peak contraction for a moment.',
      'Slowly lower your foot back to the starting position with control.',
      'Complete all repetitions on one side before switching.'
    ],
    safetyNotes: [
      'Avoid swinging the leg; the movement should be driven by muscle contraction.',
      'Keep your torso upright and your hips stationary.',
      'Use support for balance to better isolate the hamstring.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion.',
      advanced: 'Add an ankle weight or a resistance band looped under your standing foot and around your working ankle.',
      equipment_alternatives: {
        'None': 'Lying hamstring curls.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, holding support.',
        'Shift weight to standing leg.',
        'Core engaged.'
      ],
      execution: [
        'Flex your knee, bringing your heel to your glute.',
        'Squeeze the hamstring muscle hard.',
        'Keep thighs parallel.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Using momentum to swing the leg.',
        'Arching the back.',
        'Moving the thigh forward.'
      ],
      breathing: 'Exhale as you curl, inhale as you lower.'
    }
  },

  'lateral-walk': {
    id: 'lateral-walk',
    name: 'Lateral Walk',
    category: 'strength',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Place a resistance band around your ankles or just above your knees.',
      'Stand in an athletic, half-squat position with your feet shoulder-width apart to create tension in the band.',
      'Maintain this low stance and take a controlled step to the right with your right foot.',
      'Follow with your left foot, stepping just enough to return to shoulder-width, keeping tension on the band at all times.',
      'Continue taking several steps to the right, then repeat the process stepping to the left.',
      'Stay low throughout the movement.'
    ],
    safetyNotes: [
      'Never let the band lose tension by bringing your feet together.',
      'Keep your toes pointed straight ahead.',
      'Avoid leaning your torso; the movement should come from the hips.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Place the band above the knees instead of ankles.',
      advanced: 'Use a heavier resistance band. Take larger steps while maintaining control.',
      equipment_alternatives: {
        'None': 'Bodyweight side lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'steps per direction'
    },
    coaching: {
      setup: [
        'Band around ankles/knees.',
        'Assume a half-squat athletic stance.',
        'Feet shoulder-width, create tension.'
      ],
      execution: [
        'Stay low.',
        'Take a controlled step sideways.',
        'Trail foot follows, maintaining tension.',
        'Keep chest up and core engaged.'
      ],
      common_mistakes: [
        'Standing up straight.',
        'Bringing feet together.',
        'Waddling or leaning with the torso.'
      ],
      breathing: 'Breathe steadily throughout the movement.'
    }
  },

  'clamshells': {
    id: 'clamshells',
    name: 'Clamshells',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your side with your hips and knees bent at approximately a 45 to 90-degree angle, with your legs stacked.',
      'Rest your head on your bottom arm. Your heels should be in line with your glutes.',
      'Engage your core to keep your hips stacked and prevent your torso from rocking backward.',
      'Keeping your feet together, lift your top knee up towards the ceiling, as if a clam opening its shell.',
      'Lift as high as you can without letting your hips roll back.',
      'Pause at the top to squeeze your glute, then slowly lower the knee back down.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement must be isolated to the hip; do not rock your pelvis or torso.',
      'Keep your feet touching throughout the movement.',
      'The range of motion may be small; focus on the quality of the contraction.'
    ],
    modifications: {
      beginner: 'Perform with a smaller range of motion.',
      advanced: 'Add a resistance band around your thighs, just above the knees. Progress to a \'Clam Shell Hip Lift\'.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on side, knees bent, legs stacked.',
        'Heels in line with glutes.',
        'Core braced, hips stacked vertically.'
      ],
      execution: [
        'Keep feet together.',
        'Lift top knee towards the ceiling.',
        'Squeeze the outer glute.',
        'Don\'t rock your hips back.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Rocking the pelvis backward to get more height.',
        'Letting the feet come apart.',
        'Rushing the movement.'
      ],
      breathing: 'Exhale as you lift the knee, inhale as you lower.'
    }
  },

  'dumbbell-good-morning': {
    id: 'dumbbell-good-morning',
    name: 'Dumbbell Good Morning',
    category: 'strength',
    equipment: [
      'Dumbbells'
    ],
    muscleGroups: [
      'Hamstrings',
      'Glutes',
      'Lower Back'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, holding one dumbbell horizontally against your upper chest, or two dumbbells resting on your shoulders.',
      'Keep a slight bend in your knees throughout the movement.',
      'Engage your core and keep your back perfectly straight.',
      'Hinge at your hips, pushing your glutes straight back, and lower your torso until it is nearly parallel to the floor.',
      'Feel a deep stretch in your hamstrings.',
      'Drive your hips forward and squeeze your glutes to return to the standing position.'
    ],
    safetyNotes: [
      'Maintaining a flat back is crucial to protect your spine. Do not allow it to round.',
      'The movement is a hip hinge, not a squat. Your shins should remain mostly vertical.',
      'Use a light weight until you have mastered the form.'
    ],
    modifications: {
      beginner: 'Perform with just your bodyweight, hands behind your head. Reduce the range of motion.',
      advanced: 'Increase the weight of the dumbbell(s). Slow down the eccentric (lowering) phase.',
      equipment_alternatives: {
        'Dumbbells': 'A barbell across the shoulders, or a resistance band looped under the feet and around the neck.'
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
        'Stand tall, feet shoulder-width.',
        'Hold dumbbell at chest/shoulders.',
        'Soft bend in the knees, flat back.'
      ],
      execution: [
        'Push your hips straight back.',
        'Hinge forward with a flat back.',
        'Feel the stretch in your hamstrings.',
        'Squeeze glutes to return to standing.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Bending the knees too much (turning it into a squat).',
        'Using too much weight.'
      ],
      breathing: 'Inhale as you hinge forward, exhale as you stand up.'
    }
  },

  'squat-to-overhead-press': {
    id: 'squat-to-overhead-press',
    name: 'Squat to Overhead press',
    category: 'strength',
    equipment: [
      'Dumbbells'
    ],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Shoulders',
      'Triceps',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, holding a pair of dumbbells at your shoulders, palms facing forward.',
      'Engage your core and perform a standard squat, lowering your hips back and down.',
      'As you drive up from the bottom of the squat, use the momentum to help press the dumbbells straight overhead.',
      'Fully extend your arms at the top, keeping your core tight to avoid arching your back.',
      'Lower the dumbbells back to the shoulder position with control as you simultaneously descend into the next squat.',
      'Maintain a fluid motion.'
    ],
    safetyNotes: [
      'Keep your core tight, especially at the top of the press, to protect your lower back.',
      'Control the weight; do not let the dumbbells fall back to your shoulders.',
      'Ensure proper squat form, keeping your chest up and knees tracking over toes.'
    ],
    modifications: {
      beginner: 'Use very light dumbbells or no weight. Perform the squat and the press as two separate movements.',
      advanced: 'Increase the weight of the dumbbells. Make the movement more explosive.',
      equipment_alternatives: {
        'Dumbbells': 'Kettlebells, a barbell, or a resistance band.'
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
        'Stand with feet shoulder-width.',
        'Hold dumbbells at shoulder height.',
        'Core braced.'
      ],
      execution: [
        'Squat down to parallel or below.',
        'Drive up explosively from the heels.',
        'Use momentum to press weights overhead.',
        'Lower weights with control into the next squat.'
      ],
      common_mistakes: [
        'Arching the lower back during the press.',
        'Poor squat form (knees caving, chest dropping).',
        'Not controlling the weight on the way down.'
      ],
      breathing: 'Inhale on the squat down, exhale forcefully as you drive up and press.'
    }
  },

  'speed-skater-lunges': {
    id: 'speed-skater-lunges',
    name: 'Speed Skater Lunges',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Abductors',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Start standing with your feet together.',
      'Leap to your right, landing on your right foot with your right knee bent.',
      'As you land, sweep your left leg behind your right leg, and you can touch the left toes to the ground for balance.',
      'Simultaneously, you can swing your left arm forward and your right arm back, mimicking a speed skater.',
      'From this position, push off your right foot and leap to the left, landing on your left foot.',
      'Continue leaping from side to side in a dynamic, fluid motion.'
    ],
    safetyNotes: [
      'Land softly to protect your joints.',
      'Keep your chest up and your back relatively straight as you land.',
      'Start with small leaps and increase the distance as you get comfortable.'
    ],
    modifications: {
      beginner: 'Instead of leaping, take a large step to the side into a curtsy lunge. Keep the back foot on the ground for balance.',
      advanced: 'Increase the speed and distance of the leap. Keep the back foot off the ground entirely. Touch the floor with your opposite hand.',
      equipment_alternatives: {
        'None': 'Side lunges.'
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
        'Stand tall, feet together.',
        'Prepare to leap sideways.'
      ],
      execution: [
        'Leap to one side, landing softly on one foot.',
        'Sweep the other leg behind.',
        'Push off explosively to leap to the other side.',
        'Stay low and athletic.'
      ],
      common_mistakes: [
        'Landing too heavily.',
        'Staying too upright and not getting low.',
        'Losing balance.'
      ],
      breathing: 'Exhale on the push-off to the side.'
    }
  },

  'single-leg-deadlift-to-hop': {
    id: 'single-leg-deadlift-to-hop',
    name: 'Single Leg Deadlift to Hop',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Hamstrings',
      'Calves',
      'Core'
    ],
    difficulty: 3,
    instructions: [
      'Stand on your left leg with a slight bend in the knee.',
      'Perform a single leg deadlift by hinging at your hips, extending your right leg straight back behind you and lowering your torso.',
      'Go as low as you can while maintaining a flat back and balance.',
      'Drive your hips forward to return to the standing position, but instead of placing your right foot down, drive your right knee up powerfully.',
      'Use the upward momentum to perform a small hop on your standing (left) leg.',
      'Land softly on your left leg and immediately go into the next repetition.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'This is an advanced move; master the single leg deadlift first.',
      'Focus on balance and control above all else.',
      'Land softly from the hop to protect your knee and ankle.'
    ],
    modifications: {
      beginner: 'Perform a single leg deadlift to a high knee drive, without the hop.',
      advanced: 'Increase the height of the hop. Hold a light dumbbell in the opposite hand.',
      equipment_alternatives: {
        'None': 'Single leg deadlift.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand on one leg, find your balance.',
        'Core tight.'
      ],
      execution: [
        'Hinge forward into a controlled single leg deadlift.',
        'Drive up, bringing the back knee forward powerfully.',
        'Explode into a hop on the standing leg.',
        'Land softly and repeat.'
      ],
      common_mistakes: [
        'Losing balance.',
        'Rounding the back during the deadlift.',
        'Landing too hard.'
      ],
      breathing: 'Inhale on the deadlift, exhale forcefully on the drive up and hop.'
    }
  },

  'single-leg-calf-raise': {
    id: 'single-leg-calf-raise',
    name: 'Single Leg Calf Raise',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Calves'
    ],
    difficulty: 2,
    instructions: [
      'Stand on one leg, holding onto a wall or chair for balance.',
      'You can perform this on flat ground or with the ball of your foot on the edge of a step for greater range of motion.',
      'Press through the ball of your standing foot to raise your heel as high as possible.',
      'Squeeze your calf muscle at the top of the movement.',
      'Slowly lower your heel back to the starting position with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Use support for balance to focus on the calf contraction.',
      'Avoid using momentum or bouncing at the bottom of the movement.',
      'Control the lowering (eccentric) phase.'
    ],
    modifications: {
      beginner: 'Perform with two legs. Reduce the range of motion.',
      advanced: 'Hold a dumbbell in the hand on the same side as the working leg. Slow down the lowering phase (3-5 seconds).',
      equipment_alternatives: {
        'None': 'Can be done on a step for more range of motion.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand on one leg, hold support.',
        'Ball of foot firmly planted.'
      ],
      execution: [
        'Drive up through the ball of the foot.',
        'Raise heel as high as possible.',
        'Squeeze calf at the top.',
        'Lower slowly and with control.'
      ],
      common_mistakes: [
        'Bouncing.',
        'Losing balance.',
        'Not controlling the descent.'
      ],
      breathing: 'Exhale as you raise your heel, inhale as you lower.'
    }
  },

  'alternating-jump-lunges': {
    id: 'alternating-jump-lunges',
    name: 'Alternating Jump Lunges',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Hamstrings'
    ],
    difficulty: 3,
    instructions: [
      'Start in a lunge position with your right foot forward and left foot back, both knees bent at 90 degrees.',
      'Engage your core and keep your chest up.',
      'Lower slightly, then jump explosively into the air.',
      'While in the air, switch the position of your legs, bringing your left foot forward and your right foot back.',
      'Land softly back in a lunge position with your legs switched.',
      'Immediately descend into the next jump. Continue alternating.'
    ],
    safetyNotes: [
      'This is a high-impact exercise; ensure you have a solid foundation of lunge strength first.',
      'Land as softly as possible to protect your knees and ankles.',
      'Maintain control and balance; do not let your front knee collapse inward.'
    ],
    modifications: {
      beginner: 'Perform alternating forward lunges without the jump. Perform a less explosive jump.',
      advanced: 'Increase the height and speed of the jumps. Hold light dumbbells.',
      equipment_alternatives: {
        'None': 'Alternating forward lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Start in a stable lunge position.',
        'Chest up, core braced.'
      ],
      execution: [
        'Jump vertically with power.',
        'Switch legs in mid-air.',
        'Land softly in the opposite lunge.',
        'Absorb the impact and repeat.'
      ],
      common_mistakes: [
        'Landing too hard.',
        'Front knee going past the toes.',
        'Losing balance and control.'
      ],
      breathing: 'Breathe rhythmically, exhaling on the explosive jump.'
    }
  },
  'side-plank-leg-lift': {
    id: 'side-plank-leg-lift',
    name: 'Side Plank Leg Lift',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Obliques',
      'Glutes (Medius)',
      'Core',
      'Abductors'
    ],
    difficulty: 2,
    instructions: [
      'Assume a strong side plank position on your right forearm, with your elbow under your shoulder and your body in a straight line.',
      'Engage your core and keep your hips lifted and stacked.',
      'Keeping your top (left) leg straight, slowly lift it up towards the ceiling without letting your hips drop.',
      'Focus on using your outer glute and hip to perform the lift.',
      'Pause at the top, then slowly lower the leg back down with control.',
      'Complete all repetitions on one side before switching.'
    ],
    safetyNotes: [
      'Do not let your hips sag towards the floor during the movement.',
      'The leg lift should be controlled; avoid swinging the leg.',
      'If you cannot maintain a stable plank, master the static side plank first.'
    ],
    modifications: {
      beginner: 'Perform the side plank from your knees and then lift the top leg.',
      advanced: 'Add a resistance band around your thighs or ankles.',
      equipment_alternatives: {
        'None': 'Side-lying leg lifts (non-plank version).'
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
        'Establish a solid side plank, elbow under shoulder.',
        'Body in a straight line, hips stacked and lifted.',
        'Core braced.'
      ],
      execution: [
        'Slowly lift the top leg without moving your torso.',
        'Squeeze the outer glute of the lifted leg.',
        'Keep hips high and stable.',
        'Lower the leg with full control.'
      ],
      common_mistakes: [
        'Hips sagging during the leg lift.',
        'Swinging the leg or using momentum.',
        'Torso rotating forward or backward.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower.'
    }
  },
  'ankle-rocks': {
    id: 'ankle-rocks',
    name: 'Ankle Rocks',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Ankles',
      'Calves',
      'Tibialis Anterior'
    ],
    difficulty: 1,
    instructions: [
      'Start in a half-kneeling position with your right foot forward, foot flat on the floor.',
      'Place your hands on your right knee.',
      'Keeping your right heel on the ground, slowly rock your body forward, pushing your knee over your toes to feel a stretch in your ankle and calf.',
      'Hold for a moment at the point of maximum comfortable dorsiflexion.',
      'Rock back to the starting position.',
      'Repeat the rocking motion. Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Keep your front heel glued to the floor throughout the movement.',
      'The movement should be a smooth rock, not a painful jam of the ankle joint.',
      'Do not allow your arch to collapse.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Do not rock as far forward.',
      advanced: 'Hold a light weight or kettlebell on the front knee to increase the stretch. Try to push the knee outside of the foot to mobilize different angles.',
      equipment_alternatives: {
        'None': 'Standing calf stretch against a wall.'
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
        'Half-kneeling position, front foot flat.',
        'Hands on front knee.'
      ],
      execution: [
        'Rock forward, driving knee over toes.',
        'Keep heel on the ground.',
        'Feel stretch in the ankle.',
        'Rock back and repeat smoothly.'
      ],
      common_mistakes: [
        'Lifting the heel off the ground.',
        'Moving too quickly.',
        'Collapsing the arch of the foot.'
      ],
      breathing: 'Inhale as you rock back, exhale as you rock forward into the stretch.'
    }
  },
  'reverse-lunge-knee-drive': {
    id: 'reverse-lunge-knee-drive',
    name: 'Reverse Lunge Knee Drive',
    category: 'cardio',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Hip Flexors',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet hip-width apart.',
      'Step your right foot back into a reverse lunge, lowering both knees to about 90 degrees.',
      'Push off your back (right) foot and drive your right knee up towards your chest in one fluid motion.',
      'Simultaneously come to balance on your standing (left) leg.',
      'Immediately go from the high knee position back into the next reverse lunge.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Maintain an upright torso and engaged core to aid balance.',
      'Control the descent into the lunge; do not let your back knee slam into the floor.',
      'Focus on a powerful but controlled knee drive.'
    ],
    modifications: {
      beginner: 'Perform the reverse lunge and the knee drive as two separate movements. Use a wall for balance.',
      advanced: 'Add a small hop on the standing leg as you drive the knee up.',
      equipment_alternatives: {
        'None': 'Standard alternating reverse lunges.'
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
        'Stand tall, feet hip-width apart.',
        'Core braced, ready to step back.'
      ],
      execution: [
        'Step back into a reverse lunge.',
        'Drive off back foot into a powerful high knee.',
        'Maintain balance on the standing leg.',
        'Flow smoothly between movements.'
      ],
      common_mistakes: [
        'Losing balance.',
        'Leaning too far forward.',
        'Not controlling the lunge.'
      ],
      breathing: 'Inhale on the lunge, exhale forcefully on the knee drive.'
    }
  },
  'squat-to-calf-raise': {
    id: 'squat-to-calf-raise',
    name: 'Squat to Calf Raise',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Calves'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart, toes pointing slightly out.',
      'Lower your hips back and down into a bodyweight squat, keeping your chest up and back straight.',
      'Drive through your heels to return to the standing position.',
      'Once you are fully standing, continue the upward motion by pressing through the balls of your feet to perform a calf raise.',
      'Hold the calf raise for a moment, then lower your heels back to the floor.',
      'That is one repetition. Immediately descend into the next squat.'
    ],
    safetyNotes: [
      'Ensure proper squat form with a straight back and knees tracking over toes.',
      'Control the calf raise; do not rock onto your toes.',
      'Maintain a fluid motion between the two parts of the exercise.'
    ],
    modifications: {
      beginner: 'Perform a squat and a calf raise as two distinct, separate movements.',
      advanced: 'Hold light dumbbells. Add a pause at the bottom of the squat and at the top of the calf raise.',
      equipment_alternatives: {
        'None': 'Bodyweight squats.'
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
        'Stand with feet shoulder-width apart.',
        'Core engaged, chest up.'
      ],
      execution: [
        'Perform a full squat.',
        'Drive up to standing.',
        'Seamlessly transition into a calf raise.',
        'Lower heels and repeat.'
      ],
      common_mistakes: [
        'Poor squat form.',
        'Rushing the movement and losing balance on the calf raise.',
        'Not achieving full height in the calf raise.'
      ],
      breathing: 'Inhale as you squat down, exhale as you stand and perform the calf raise.'
    }
  },
  'single-leg-shin-sequence': {
    id: 'single-leg-shin-sequence',
    name: 'Single Leg Shin Sequence',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Tibialis Anterior',
      'Ankles',
      'Calves'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding onto a wall for balance if needed.',
      'Lift your right foot slightly off the floor in front of you.',
      'Part 1 (Flex/Point): Point your toes down towards the floor, then flex them up towards your shin. Repeat this motion.',
      'Part 2 (Circles): Make slow, controlled circles with your ankle in a clockwise direction, then counter-clockwise.',
      'Part 3 (Alphabet): \'Write\' the letters of the alphabet in the air with your big toe.',
      'This entire sequence activates and mobilizes the shin and ankle. Complete on one side before switching.'
    ],
    safetyNotes: [
      'Isolate the movement to your ankle; try not to move your entire leg.',
      'The movements should be deliberate and controlled, not fast or jerky.',
      'Use support for balance to focus on the quality of the ankle movement.'
    ],
    modifications: {
      beginner: 'Perform the sequence while seated in a chair. Make smaller movements.',
      advanced: 'Perform without any support to challenge your balance.',
      equipment_alternatives: {
        'None': 'Standard ankle circles.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: [
        'Stand on one leg, use support for balance.',
        'Lift the other foot off the floor.'
      ],
      execution: [
        'Perform controlled toe points and flexes.',
        'Transition to smooth ankle circles in both directions.',
        'Finish by drawing the alphabet with your toe.',
        'Focus on ankle articulation.'
      ],
      common_mistakes: [
        'Moving the whole leg instead of just the ankle.',
        'Rushing through the movements.',
        'Losing balance.'
      ],
      breathing: 'Breathe naturally and rhythmically.'
    }
  },
  'standing-fours': {
    id: 'standing-fours',
    name: 'Standing Fours',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Glutes (Piriformis)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding onto a wall or chair for balance.',
      'Cross your right ankle over your left thigh, just above the knee, creating a \'figure four\' shape.',
      'Keeping your back straight, hinge at your hips and sit back as if lowering into a chair.',
      'Lower yourself until you feel a deep stretch in your right glute and hip.',
      'Keep your right foot flexed to protect the knee.',
      'Hold the stretch, or for a dynamic version, gently pulse in and out of the stretch.',
      'Complete on one side before switching.'
    ],
    safetyNotes: [
      'Focus on balance; use support as needed.',
      'Keep your back straight as you hinge; do not round your spine.',
      'Do not force the stretch; only go as deep as your hip mobility allows.'
    ],
    modifications: {
      beginner: 'Do not sit as deep into the stretch. Use more support from the wall/chair.',
      advanced: 'Perform without any support for a greater balance challenge. Sit deeper into the stretch.',
      equipment_alternatives: {
        'None': 'Seated or supine figure four stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'pulses per side'
    },
    coaching: {
      setup: [
        'Stand on one leg, hold support.',
        'Cross other ankle over standing thigh.',
        'Flex the lifted foot.'
      ],
      execution: [
        'Hinge hips and sit back.',
        'Keep back straight, chest up.',
        'Feel stretch in the outer hip/glute.',
        'Pulse gently or hold.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Losing balance.',
        'Not flexing the foot, which can strain the knee.'
      ],
      breathing: 'Exhale as you sit back into the stretch.'
    }
  },
  'kang-squats': {
    id: 'kang-squats',
    name: 'Kang Squats',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Hamstrings',
      'Glutes',
      'Lower Back',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, and place your hands behind your head with elbows wide.',
      'Begin by performing a \'Good Morning\': keeping your back straight and a slight bend in your knees, hinge at your hips and lower your torso until it\'s nearly parallel to the floor.',
      'From this hinged position, drop your hips down and back to transition into the bottom of a deep squat. Your torso will become more upright.',
      'From the bottom of the squat, reverse the motion: first, lift your hips back up to the \'Good Morning\' position.',
      'Finally, drive your hips forward to return to a full standing position.',
      'Maintain a slow and controlled tempo throughout.'
    ],
    safetyNotes: [
      'This is a complex movement. Keeping your back flat is the top priority.',
      'Move slowly and deliberately, especially during the transitions.',
      'Master both the Good Morning and the Squat individually before combining them.'
    ],
    modifications: {
      beginner: 'Perform without hands behind your head (hands on hips or at chest). Reduce the range of motion in both the hinge and the squat.',
      advanced: 'Hold a very light dumbbell or plate behind your head. Pause at each position.',
      equipment_alternatives: {
        'None': 'Perform Good Mornings and Squats as separate exercises.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width.',
        'Hands behind head, elbows wide.',
        'Core braced.'
      ],
      execution: [
        'Hinge into a Good Morning (flat back).',
        'Drop hips into a deep squat.',
        'Lift hips back to the Good Morning position.',
        'Stand up by squeezing glutes.'
      ],
      common_mistakes: [
        'Rounding the back at any point.',
        'Rushing the transitions.',
        'Lifting the chest before the hips from the squat.'
      ],
      breathing: 'Inhale as you hinge and squat, exhale as you lift hips and stand.'
    }
  },
  'dynamic-quad-stretch': {
    id: 'dynamic-quad-stretch',
    name: 'Dynamic Quad Stretch',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Hip Flexors'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall, using a wall for light balance support if needed.',
      'Shift your weight to your left foot.',
      'Bend your right knee and grab your right ankle or foot with your right hand.',
      'Gently pull your heel towards your glute for a brief 1-2 second stretch. Keep your knees aligned.',
      'Release your foot and step forward, then repeat the stretch on the left leg.',
      'Continue alternating legs as you walk forward, creating a dynamic \'walk and pull\' motion.'
    ],
    safetyNotes: [
      'Do not pull forcefully or jerk the leg; the stretch should be brief and gentle.',
      'Maintain an upright posture and avoid arching your back.',
      'Focus on balance.'
    ],
    modifications: {
      beginner: 'Perform the stretch while standing in place, holding onto a wall for full support. Hold the stretch for slightly longer.',
      advanced: 'Perform without any support. Increase the pace of the walk.',
      equipment_alternatives: {
        'None': 'Static quad stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall.',
        'Prepare to walk forward.'
      ],
      execution: [
        'Take a step.',
        'Grab the ankle of the back leg.',
        'Pull heel to glute for a quick stretch.',
        'Release, step, and switch sides.',
        'Keep it moving.'
      ],
      common_mistakes: [
        'Holding the stretch for too long (making it static).',
        'Losing balance.',
        'Arching the back when pulling the leg.'
      ],
      breathing: 'Exhale briefly during each pull.'
    }
  },
  'plank-calf-press': {
    id: 'plank-calf-press',
    name: 'Plank Calf Press',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Core',
      'Calves',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Start in a high plank position (top of a push-up) with your hands under your shoulders and your body in a straight line.',
      'Engage your core to keep your hips stable.',
      'Keeping your body rigid, press forward onto your toes, shifting your shoulders slightly past your wrists.',
      'Then, press your heels back, feeling a stretch in your calves. Your body will rock forward and backward.',
      'Continue this controlled rocking motion, pressing through the ankles.',
      'Maintain a strong plank position throughout.'
    ],
    safetyNotes: [
      'Do not let your hips sag or rise during the rocking motion.',
      'The movement should come from the ankles, not from bending at the waist.',
      'Keep your core tight to protect your lower back.'
    ],
    modifications: {
      beginner: 'Perform from a kneeling plank position. Reduce the range of the rock.',
      advanced: 'Perform from a forearm plank. Perform on one foot at a time.',
      equipment_alternatives: {
        'None': 'Downward dog with \'pedaling\' feet.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'rocks'
    },
    coaching: {
      setup: [
        'Assume a strong high plank position.',
        'Body straight, core braced.'
      ],
      execution: [
        'Rock forward onto your toes.',
        'Press back through your heels.',
        'Feel the calf stretch on the backward press.',
        'Keep your plank form perfect.'
      ],
      common_mistakes: [
        'Hips sagging.',
        'Bouncing.',
        'Losing core engagement.'
      ],
      breathing: 'Breathe steadily throughout the movement.'
    }
  },
  'dynamic-side-body-stretch': {
    id: 'dynamic-side-body-stretch',
    name: 'Dynamic Side Body Stretch',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Lats',
      'Obliques',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet hip-width apart.',
      'Reach your right arm straight up to the ceiling, creating length in your right side.',
      'Gently bend your torso to the left, feeling a stretch all along your right side body. Hold for only 1-2 seconds.',
      'Return to the center and lower your right arm.',
      'Repeat on the other side, reaching your left arm up and bending to the right.',
      'Continue alternating sides in a smooth, flowing motion.'
    ],
    safetyNotes: [
      'The movement should be a pure side-bend; avoid leaning forward or backward.',
      'Keep your core engaged to support your spine.',
      'Do not bounce into the stretch.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Perform with hands on hips.',
      advanced: 'Grasp your wrist with your opposite hand and gently pull to deepen the stretch. Increase the pace of the alternating motion.',
      equipment_alternatives: {
        'None': 'Static side bend.'
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
        'Stand tall, feet hip-width apart.'
      ],
      execution: [
        'Reach one arm up high.',
        'Bend to the opposite side.',
        'Feel a gentle stretch.',
        'Return to center and switch smoothly.'
      ],
      common_mistakes: [
        'Bending forward.',
        'Holding the stretch for too long (making it static).',
        'Not reaching fully overhead.'
      ],
      breathing: 'Inhale as you reach up, exhale as you bend to the side.'
    }
  },
  'shoulder-openers': {
    id: 'shoulder-openers',
    name: 'Shoulder Openers',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Shoulders',
      'Chest',
      'Upper Back'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet shoulder-width apart.',
      'Interlace your fingers behind your lower back, palms facing in.',
      'Straighten your arms and gently pull your shoulder blades together and down.',
      'Lift your hands away from your glutes as far as is comfortable, opening up your chest and the front of your shoulders.',
      'Hold for 2-3 seconds.',
      'Release the bind and bring your arms in front of you. Cross your arms and give yourself a hug, rounding your upper back to stretch the rhomboids.',
      'Alternate between the chest-opening and back-stretching positions.'
    ],
    safetyNotes: [
      'Avoid arching your lower back when opening the chest; keep your core engaged.',
      'Do not force the lift of the arms if you have tight shoulders.',
      'Keep the movements gentle and controlled.'
    ],
    modifications: {
      beginner: 'If you can\'t interlace your fingers, hold a towel or resistance band between your hands.',
      advanced: 'From the chest-opening position, hinge at your hips and fold forward, letting your arms fall overhead for a deeper stretch.',
      equipment_alternatives: {
        'None': 'Doorway chest stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'cycles'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Clasp hands behind your back, open chest.',
        'Lift arms away from body.',
        'Release, hug yourself, and round upper back.',
        'Flow between the two positions.'
      ],
      common_mistakes: [
        'Arching the lower back.',
        'Forcing the arm lift.',
        'Shrugging the shoulders.'
      ],
      breathing: 'Inhale as you open the chest, exhale as you round the back.'
    }
  },
  'standing-crunch': {
    id: 'standing-crunch',
    name: 'Standing Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: [
      'Abs',
      'Obliques',
      'Hip Flexors'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart and place your hands behind your head, elbows wide.',
      'Engage your core and lift your right knee up towards your chest.',
      'Simultaneously, bring your left elbow towards your right knee, performing a standing crunch motion.',
      'The goal is to touch elbow to knee, but only go as far as you can with control.',
      'Return to the starting position.',
      'Repeat on the other side, lifting your left knee to your right elbow.',
      'Continue alternating sides.'
    ],
    safetyNotes: [
      'Do not pull on your head or neck with your hands.',
      'The movement should be a controlled crunch, not a fast, jerky motion.',
      'Focus on using your abs to bring the knee and elbow together.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion; do not try to touch elbow to knee. Use a wall for balance.',
      advanced: 'Increase the speed while maintaining control. Add a pause at the peak contraction.',
      equipment_alternatives: {
        'None': 'High knees.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width.',
        'Hands behind head, elbows out.'
      ],
      execution: [
        'Lift opposite knee to opposite elbow.',
        'Crunch your core.',
        'Maintain balance.',
        'Alternate sides smoothly.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Losing balance.',
        'Rounding the back too much instead of crunching.'
      ],
      breathing: 'Exhale as you bring your knee and elbow together.'
    }
  },
  'lizard-circles': {
    id: 'lizard-circles',
    name: 'Lizard Circles',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Groin',
      'Hip Flexors'
    ],
    difficulty: 2,
    instructions: [
      'Start in a low lunge or \'Lizard Pose\' with your right foot on the outside of your right hand, and your left knee on the ground.',
      'Keep your hands on the floor for support.',
      'Begin to make slow, controlled circles with your hips.',
      'Circle in one direction, shifting your weight forward, to the side, and back to explore the full range of motion of your hip joint.',
      'After several circles in one direction, reverse the direction.',
      'Complete on one side before switching legs.'
    ],
    safetyNotes: [
      'The movement should be slow and deliberate, not fast or jerky.',
      'Keep the movement pain-free. If you feel any pinching, reduce the size of the circles.',
      'Use yoga blocks under your hands if you cannot comfortably reach the floor.'
    ],
    modifications: {
      beginner: 'Make smaller circles. Keep your hands on yoga blocks for more height and less intensity.',
      advanced: 'Lower down onto your forearms for a deeper stretch. Make larger circles.',
      equipment_alternatives: {
        'None': 'Static Lizard Pose or frog stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'circles per direction, per side'
    },
    coaching: {
      setup: [
        'Assume a Lizard Pose, back knee down.',
        'Hands on the floor inside front foot.'
      ],
      execution: [
        'Initiate slow circles with your hips.',
        'Explore the range of motion: forward, side, back.',
        'Keep it smooth and controlled.',
        'Reverse direction.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Forcing the movement into a painful range.',
        'Holding your breath.'
      ],
      breathing: 'Breathe naturally and rhythmically with the circular motion.'
    }
  },
  'run-in-place': {
    id: 'run-in-place',
    name: 'Run in Place',
    category: 'cardio',
    equipment: [],
    muscleGroups: [
      'Full Body'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet hip-width apart.',
      'Begin by lifting one knee towards your chest, then quickly switching to the other, mimicking a running motion.',
      'Land lightly on the balls of your feet.',
      'Coordinate your arms, swinging them in opposition to your legs (right arm forward with left knee up).',
      'Start at a light jog pace and gradually increase the intensity if desired.',
      'Maintain an upright posture.'
    ],
    safetyNotes: [
      'Land softly to minimize impact.',
      'Keep your core engaged to maintain good posture.',
      'Ensure you have adequate space around you.'
    ],
    modifications: {
      beginner: 'March in place without the impact of running.',
      advanced: 'Increase the intensity to \'High Knees\', driving your knees up towards your chest more explosively.',
      equipment_alternatives: {
        'None': 'Jumping jacks.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet ready.'
      ],
      execution: [
        'Lift knees alternately.',
        'Land lightly on the balls of your feet.',
        'Swing arms in coordination.',
        'Keep posture upright.'
      ],
      common_mistakes: [
        'Landing heavily on the heels.',
        'Slouching or leaning forward.',
        'Holding breath.'
      ],
      breathing: 'Breathe naturally and rhythmically.'
    }
  },
  'diagonal-lunge': {
    id: 'diagonal-lunge',
    name: 'Diagonal Lunge',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Adductors',
      'Abductors'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet hip-width apart.',
      'Take a large step forward and out to the right with your right foot, at about a 45-degree angle.',
      'Lower your hips until your right thigh is parallel to the floor, keeping your left leg relatively straight.',
      'Ensure your right knee tracks in line with your right foot.',
      'Keep your chest up and your core engaged.',
      'Push off your right foot to return to the starting position.',
      'Repeat on the left side, stepping diagonally forward and out with your left foot.',
      'Continue alternating sides.'
    ],
    safetyNotes: [
      'Control the movement and maintain balance.',
      'Keep your front knee aligned with your foot; do not let it collapse inward.',
      'Maintain an upright torso.'
    ],
    modifications: {
      beginner: 'Reduce the depth of the lunge. Take a smaller diagonal step.',
      advanced: 'Hold dumbbells in each hand. Add a hop as you return to the start.',
      equipment_alternatives: {
        'None': 'Forward lunges or side lunges.'
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
        'Stand tall, feet hip-width.',
        'Core braced.'
      ],
      execution: [
        'Step forward and out at a 45-degree angle.',
        'Lower into the lunge, keeping chest up.',
        'Push off the front foot to return to start.',
        'Alternate sides.'
      ],
      common_mistakes: [
        'Front knee caving inward.',
        'Leaning too far forward.',
        'Losing balance.'
      ],
      breathing: 'Inhale as you lunge, exhale as you push back to the start.'
    }
  },
  'high-skip': {
    id: 'high-skip',
    name: 'High Skip',
    category: 'plyometric',
    equipment: [],
    muscleGroups: [
      'Hip Flexors',
      'Glutes',
      'Calves',
      'Hamstrings'
    ],
    difficulty: 2,
    instructions: [
      'Begin by skipping forward lightly.',
      'Start to exaggerate the upward motion. On each skip, drive your knee up towards your chest explosively.',
      'Simultaneously, use your opposite arm to drive upward to generate more height.',
      'Focus on getting vertical height with each skip, not just forward distance.',
      'Land softly on the ball of your foot and immediately spring into the next skip.',
      'Maintain a tall, upright posture.'
    ],
    safetyNotes: [
      'Land softly to absorb impact.',
      'This is a high-impact exercise; ensure you are properly warmed up.',
      'Keep your core engaged to maintain stability and posture.'
    ],
    modifications: {
      beginner: 'Perform a high-knee march without the skip to learn the motion. Reduce the height of the skip.',
      advanced: 'Increase the height and explosive power of each skip. Cover more ground with each skip.',
      equipment_alternatives: {
        'None': 'High knees in place.'
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
        'Stand tall, ready to move forward.'
      ],
      execution: [
        'Drive one knee up powerfully.',
        'Explode off the ground for vertical height.',
        'Use opposite arm drive.',
        'Land softly and immediately transition to the other side.'
      ],
      common_mistakes: [
        'Leaning back.',
        'Landing heavily on heels.',
        'Not using arms to generate power.'
      ],
      breathing: 'Exhale forcefully on each upward knee drive.'
    }
  },
  'boot-strappers': {
    id: 'boot-strappers',
    name: 'Boot Strappers',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Hamstrings',
      'Glutes',
      'Hips',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart.',
      'Squat down and place your fingertips under your toes.',
      'Keeping your fingertips under your toes, lift your hips up towards the ceiling, straightening your legs as much as possible to feel a deep hamstring stretch.',
      'Your back will be rounded at the top of this stretch.',
      'Lower your hips back down into the deep squat position, trying to bring your chest up and flatten your back.',
      'Repeat this fluid motion of lifting and lowering the hips.'
    ],
    safetyNotes: [
      'Move slowly and with control; do not jerk your hips up or down.',
      'Only straighten your legs as much as your hamstring flexibility allows.',
      'Keep your fingertips under your toes throughout the movement.'
    ],
    modifications: {
      beginner: 'Place hands on your shins or ankles instead of under your toes. Do not straighten legs as much.',
      advanced: 'Try to flatten your back more at the bottom of the squat. Hold the hamstring stretch for longer.',
      equipment_alternatives: {
        'None': 'Separate deep squats and standing forward folds.'
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
        'Squat down, place fingertips under toes.',
        'Keep heels on the ground if possible.'
      ],
      execution: [
        'Lift hips up, straightening legs for hamstring stretch.',
        'Lower hips back down into a deep squat.',
        'Try to lift your chest at the bottom.',
        'Maintain a continuous flow.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Letting go of the toes.',
        'Forcing the stretch.'
      ],
      breathing: 'Inhale as you lower your hips, exhale as you lift your hips.'
    }
  },
  'standing-hip-open-and-close': {
    id: 'standing-hip-open-and-close',
    name: 'Hip Open & Close',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Hips',
      'Glutes',
      'Abductors',
      'Adductors'
    ],
    difficulty: 2,
    instructions: [
      'Stand tall on your left leg, using a wall for balance if needed.',
      'Lift your right knee up in front of you to a 90-degree angle.',
      'Keeping your knee bent, open your hip by moving your right knee out to the right side, as if stepping over a hurdle.',
      'From the open position, circle the knee back and down to the starting position.',
      'This is one \'open\' repetition. For the \'close\', reverse the motion: lift the knee out to the side, then bring it to the front and lower it.',
      'Complete all repetitions on one side before switching.'
    ],
    safetyNotes: [
      'Keep your torso upright and stable; avoid leaning to compensate.',
      'The movement should be controlled and initiated from the hip joint.',
      'Use support for balance to ensure quality of movement.'
    ],
    modifications: {
      beginner: 'Reduce the height of the knee lift. Make smaller circles. Use a wall for full support.',
      advanced: 'Perform without any support to challenge balance. Increase the height and size of the circle.',
      equipment_alternatives: {
        'None': 'Clamshells or fire hydrants on the floor.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per direction, per side'
    },
    coaching: {
      setup: [
        'Stand tall on one leg, hold support.',
        'Lift opposite knee to hip height.'
      ],
      execution: [
        'Circle the knee out to the side (open).',
        'Circle the knee from the side to the front (close).',
        'Keep hips level and torso still.',
        'Focus on smooth hip rotation.'
      ],
      common_mistakes: [
        'Leaning the torso.',
        'Swinging the leg with momentum.',
        'Losing balance.'
      ],
      breathing: 'Breathe naturally and rhythmically with the movement.'
    }
  },
  'standing-cat-cow': {
    id: 'standing-cat-cow',
    name: 'Standing Cat-Cow',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Spine',
      'Back',
      'Core'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart and your knees slightly bent.',
      'Place your hands on your thighs for support.',
      'Cow Pose: Inhale as you arch your back, dropping your belly, and lifting your chest and gaze forward. Pull your shoulders back.',
      'Cat Pose: Exhale as you round your spine, tucking your chin to your chest and pressing your hands into your thighs to deepen the spinal flexion.',
      'Flow smoothly between the two positions, articulating through your entire spine.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'The movement should be slow and controlled, guided by your breath.',
      'Keep a soft bend in your knees throughout.',
      'Avoid any movement that causes sharp pain.'
    ],
    modifications: {
      beginner: 'Perform with a smaller range of motion.',
      advanced: 'Deepen the arch and the rounding, exploring the full range of your spinal mobility.',
      equipment_alternatives: {
        'None': 'Standard Cat-Cow on hands and knees.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'cycles'
    },
    coaching: {
      setup: [
        'Stand with knees bent, hands on thighs.'
      ],
      execution: [
        'Inhale, arch your back, look forward (Cow).',
        'Exhale, round your spine, tuck chin (Cat).',
        'Let breath guide the movement.',
        'Feel the articulation of each vertebra.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Only moving the neck or lower back.',
        'Holding breath.'
      ],
      breathing: 'Inhale for Cow, exhale for Cat.'
    }
  },
  'balance-and-change-of-support-drill': {
    id: 'balance-and-change-of-support-drill',
    name: 'Balance & Change of Support - Drill',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Core',
      'Ankles',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Start by balancing on your left leg, with your right knee lifted to hip height.',
      'Hold this single-leg balance for 3-5 seconds, staying as still as possible.',
      'Quickly \'change support\' by hopping from your left foot to your right foot, immediately bringing your left knee up to hip height.',
      'Establish your balance on the right leg and hold for 3-5 seconds.',
      'The goal is to minimize time on the ground during the switch and to find stability instantly on the landing foot.',
      'Continue alternating sides.'
    ],
    safetyNotes: [
      'Focus on a soft landing to absorb impact.',
      'Keep your core tight to maintain balance.',
      'If you are unstable, spend more time on the balance portion and less on the quick switch.'
    ],
    modifications: {
      beginner: 'Instead of hopping, quickly step from one foot to the other. Use a wall for support.',
      advanced: 'Increase the speed of the switch. Perform on a slightly unstable surface.',
      equipment_alternatives: {
        'None': 'Single leg balance holds.'
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
        'Balance on one leg, opposite knee high.',
        'Find your stability.'
      ],
      execution: [
        'Hold the balance.',
        'Perform a quick hop to switch feet.',
        'Immediately find and hold the balance on the other side.',
        'Be quick in the air, still on the ground.'
      ],
      common_mistakes: [
        'Wobbling excessively after landing.',
        'Landing heavily.',
        'Not holding the balance portion.'
      ],
      breathing: 'Breathe steadily during the hold, exhale on the switch.'
    }
  },
  'pony-drill': {
    id: 'pony-drill',
    name: 'Pony - Drill',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Calves',
      'Ankles',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet together, posture tall.',
      'This drill mimics a prancing horse.',
      'Perform quick, low-to-the-ground hops, alternating feet.',
      'As you hop on your left foot, your right leg should be slightly in front with the knee bent. As you hop on your right foot, the left leg is in front.',
      'The emphasis is on a stiff ankle and a quick, springy bounce off the ground. The knees do not bend much.',
      'Keep your ground contact time as short as possible. Use a slight arm swing for rhythm.'
    ],
    safetyNotes: [
      'Stay on the balls of your feet.',
      'This is a plyometric drill; ensure you are warmed up.',
      'Focus on ankle stiffness, not high jumping.'
    ],
    modifications: {
      beginner: 'Perform the motion slowly without the \'spring\'. Focus on the footwork.',
      advanced: 'Increase the speed and reactivity. Try to cover a small amount of ground moving forward.',
      equipment_alternatives: {
        'None': 'Pogo hops (two feet).'
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
        'Stand tall, core engaged.'
      ],
      execution: [
        'Quick, alternating hops on the balls of the feet.',
        'Think \'stiff ankles\' and \'springy\'.',
        'Minimize ground contact time.',
        'Keep the hops low.'
      ],
      common_mistakes: [
        'Bending the knees too much.',
        'Spending too much time on the ground.',
        'Landing on the heels.'
      ],
      breathing: 'Maintain a quick, rhythmic breathing pattern.'
    }
  },
  'hopping-drills': {
    id: 'hopping-drills',
    name: 'Hopping - Drills',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Calves',
      'Quads',
      'Glutes',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Balance on your left leg, with your right knee bent and foot off the ground.',
      'Perform a series of continuous, forward-moving hops on your left leg.',
      'Focus on a powerful push-off and a stable, soft landing.',
      'Use your arms to help with balance and momentum.',
      'The goal is to maintain balance while generating forward propulsion.',
      'Hop for a set distance or number of reps, then switch to the right leg.'
    ],
    safetyNotes: [
      'Land softly on the midfoot to absorb impact.',
      'Maintain a slight bend in the knee of your hopping leg upon landing.',
      'If you lose balance, reset before continuing.'
    ],
    modifications: {
      beginner: 'Perform hops in place instead of moving forward. Perform fewer hops in a row.',
      advanced: 'Increase the distance or height of each hop. Try hopping in different directions (side to side, backward).',
      equipment_alternatives: {
        'None': 'Pogo hops (two feet).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'hops per leg'
    },
    coaching: {
      setup: [
        'Balance on one leg.'
      ],
      execution: [
        'Hop continuously forward.',
        'Push off powerfully.',
        'Land softly and with control.',
        'Use arms for balance.'
      ],
      common_mistakes: [
        'Landing heavily on the heel.',
        'Losing balance between hops.',
        'Hopping with a straight, locked knee.'
      ],
      breathing: 'Exhale on each hop.'
    }
  },
  'advanced-jump-drill': {
    id: 'advanced-jump-drill',
    name: 'Advanced Jump - Drill',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Full Body'
    ],
    difficulty: 3,
    instructions: [
      'This drill combines a hop and a bound.',
      'Start by balancing on your left leg.',
      'Perform two forward hops on your left leg.',
      'After the second hop, immediately bound forward, landing on your right leg.',
      'Stick the landing and find your balance on the right leg.',
      'From the right leg, perform two forward hops.',
      'After the second hop, immediately bound forward, landing on your left leg.',
      'Continue this \'hop-hop-bound\' sequence, alternating legs for the bound.'
    ],
    safetyNotes: [
      'This is a high-impact, advanced drill. Ensure you have a strong base of plyometric fitness.',
      'Focus on control and soft landings above all else.',
      'Perform in an area with plenty of clear space.'
    ],
    modifications: {
      beginner: 'Break the drill down. Practice just the single-leg hops. Practice just bounding from one leg to the other.',
      advanced: 'Increase the distance and power of both the hops and the bound.',
      equipment_alternatives: {
        'None': 'Broad jumps.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'sequences per side'
    },
    coaching: {
      setup: [
        'Stand with space in front of you.',
        'Balance on one leg.'
      ],
      execution: [
        'Hop, hop (on same leg).',
        'Bound (land on opposite leg).',
        'Stick the landing, find balance.',
        'Repeat: hop, hop, bound.'
      ],
      common_mistakes: [
        'Losing balance on the landing.',
        'Landing too hard.',
        'Not being explosive enough in the bound.'
      ],
      breathing: 'Exhale on the explosive movements (hops and bound).'
    }
  },
  '90-degree-squats': {
    id: '90-degree-squats',
    name: '90 Degree Squats',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Hamstrings'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart, toes pointing slightly out.',
      'Engage your core and keep your chest up and back straight.',
      'Lower your hips back and down as if sitting in a chair, stopping precisely when your thighs are parallel to the floor (a 90-degree angle at the knees).',
      'Hold for a moment at the bottom to ensure control.',
      'Push through your heels to return to the starting position.',
      'Focus on the controlled descent and stopping at the target depth.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout; do not round.',
      'Ensure your knees track in line with your toes and do not collapse inward.',
      'You can place a chair or box behind you to learn the correct depth.'
    ],
    modifications: {
      beginner: 'Use a chair for support and to gauge depth. Reduce the hold time at the bottom.',
      advanced: 'Add a longer pause at the 90-degree position. Hold a light weight.',
      equipment_alternatives: {
        'None': 'Box squats.'
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
        'Feet shoulder-width, chest up, core braced.'
      ],
      execution: [
        'Hips go back and down.',
        'Stop when thighs are parallel to the floor.',
        'Pause to demonstrate control.',
        'Drive through heels to stand.'
      ],
      common_mistakes: [
        'Going too deep or not deep enough.',
        'Dropping too quickly.',
        'Leaning too far forward.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },
  'forward-fold': {
    id: 'forward-fold',
    name: 'Forward Fold',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Hamstrings',
      'Calves',
      'Lower Back'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet hip-width apart.',
      'Place your hands on your hips and keep a slight bend in your knees.',
      'Exhale and hinge at your hips, leading with your chest to fold your torso over your legs.',
      'Keep your back as straight as possible during the hinge.',
      'Once folded, let your head and neck relax completely. Your hands can rest on your shins, the floor, or grab opposite elbows.',
      'Hold the stretch, breathing deeply into your hamstrings.'
    ],
    safetyNotes: [
      'Keep a micro-bend in your knees to protect them; do not lock them.',
      'If you have lower back issues, bend your knees more generously.',
      'Lead with your chest, not by rounding your back.'
    ],
    modifications: {
      beginner: 'Bend your knees significantly. Rest your hands on your thighs or on yoga blocks.',
      advanced: 'Straighten your legs more. Wrap your hands around the backs of your ankles to gently deepen the fold.',
      equipment_alternatives: {
        'None': 'Seated forward fold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width.',
        'Slight bend in knees.'
      ],
      execution: [
        'Hinge from your hips with a flat back.',
        'Fold torso over legs.',
        'Let your head and neck hang heavy.',
        'Breathe into the hamstring stretch.'
      ],
      common_mistakes: [
        'Rounding the back to reach the floor.',
        'Locking the knees.',
        'Holding tension in the neck and shoulders.'
      ],
      breathing: 'Inhale to find length, exhale to fold deeper.'
    }
  },
  'chest-stretch': {
    id: 'chest-stretch',
    name: 'Chest Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Chest (Pectorals)',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Stand in a doorway or next to a wall.',
      'Place your right forearm on the doorway or wall with your elbow bent at a 90-degree angle and at shoulder height.',
      'Gently step forward with your right foot until you feel a comfortable stretch across your chest and the front of your shoulder.',
      'Keep your core engaged to avoid arching your back.',
      'Hold the stretch, breathing deeply.',
      'Release and repeat on the other side.'
    ],
    safetyNotes: [
      'The stretch should be gentle; do not force it or you may strain the shoulder joint.',
      'Ensure your elbow is not significantly higher or lower than your shoulder.',
      'Keep your shoulder blade pulled back and down.'
    ],
    modifications: {
      beginner: 'Do not step as far into the stretch. Hold for a shorter duration.',
      advanced: 'Gently rotate your torso away from the wall to deepen the stretch.',
      equipment_alternatives: {
        'None': 'Clasping hands behind your back and lifting arms.'
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
        'Stand in a doorway or next to a wall.',
        'Place forearm on the surface, elbow at 90 degrees.'
      ],
      execution: [
        'Gently step forward.',
        'Feel a stretch across your chest.',
        'Keep core tight and posture tall.',
        'Breathe and relax into the stretch.'
      ],
      common_mistakes: [
        'Pushing too hard into the stretch.',
        'Shrugging the shoulder up towards the ear.',
        'Arching the lower back.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'sumo-squat': {
    id: 'sumo-squat',
    name: 'Sumo Squat',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Glutes',
      'Quads'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet much wider than shoulder-width apart.',
      'Turn your toes out to about a 45-degree angle.',
      'Keeping your torso upright and core engaged, lower your hips straight down until your thighs are parallel to the floor or as low as you can comfortably go.',
      'Ensure your knees track in line with your toes and do not collapse inward.',
      'Drive through your heels to return to the starting position, squeezing your glutes and inner thighs at the top.',
      'You can hold your hands at your chest for balance.'
    ],
    safetyNotes: [
      'Keep your chest lifted and your torso as upright as possible.',
      'Do not let your knees cave inward.',
      'Focus on dropping your hips straight down, rather than pushing them back like a regular squat.'
    ],
    modifications: {
      beginner: 'Reduce the depth of the squat. Use a wall for balance support.',
      advanced: 'Hold a single heavy dumbbell or kettlebell with both hands (Goblet Sumo Squat). Add a pause at the bottom.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
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
        'Wide stance, feet turned out at 45 degrees.',
        'Chest up, torso upright.'
      ],
      execution: [
        'Drop hips straight down.',
        'Keep knees tracking over your feet.',
        'Go as low as your mobility allows.',
        'Drive through heels to stand, squeeze glutes.'
      ],
      common_mistakes: [
        'Knees collapsing inward.',
        'Leaning the torso too far forward.',
        'Not keeping feet wide enough.'
      ],
      breathing: 'Inhale as you lower, exhale as you drive up.'
    }
  },
  'chin-tucks': {
    id: 'chin-tucks',
    name: 'Chin Tucks',
    category: 'core',
    equipment: [],
    muscleGroups: [
      'Deep Neck Flexors'
    ],
    difficulty: 1,
    instructions: [
      'Sit or stand tall with your spine straight and your shoulders relaxed.',
      'Without tilting your head up or down, gently pull your chin and head straight back, as if you are trying to make a double chin.',
      'Imagine a string pulling the back of your head straight up and back.',
      'You should feel a stretch at the base of your skull and an engagement in the front of your neck.',
      'Hold the tucked position for a few seconds.',
      'Relax back to the neutral starting position. Repeat.'
    ],
    safetyNotes: [
      'The movement should be gentle and pain-free.',
      'Avoid tilting your chin down to your chest; the movement is a straight backward glide.',
      'Keep your jaw relaxed.'
    ],
    modifications: {
      beginner: 'Perform lying on your back with a small rolled towel under your neck. Gently press your neck into the towel.',
      advanced: 'Perform against a wall, trying to touch the back of your head to the wall without tilting your chin up.',
      equipment_alternatives: {
        'None': 'This is a body-awareness exercise.'
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
        'Sit or stand tall, shoulders relaxed.',
        'Gaze straight ahead.'
      ],
      execution: [
        'Gently glide your chin straight back.',
        'Create a \'double chin\'.',
        'Feel the back of your neck lengthen.',
        'Hold, then release with control.'
      ],
      common_mistakes: [
        'Tilting the chin down instead of gliding back.',
        'Shrugging the shoulders.',
        'Tensing the jaw.'
      ],
      breathing: 'Breathe naturally throughout the exercise.'
    }
  },
  'seated-twist': {
    id: 'seated-twist',
    name: 'Seated Twist',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Spine',
      'Obliques',
      'Lower Back',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor with your legs extended in front of you.',
      'Bend your right knee and place your right foot on the floor outside of your left thigh.',
      'Place your right hand on the floor behind you for support, fingers pointing away.',
      'Inhale to sit up tall, lengthening your spine.',
      'Exhale and twist your torso to the right, hooking your left elbow on the outside of your right knee to gently deepen the twist.',
      'Keep both sit bones grounded. Gaze over your right shoulder.',
      'Hold the stretch, then release and switch sides.'
    ],
    safetyNotes: [
      'Initiate the twist from your waist, not by cranking your neck.',
      'Always lengthen the spine on the inhale before twisting on the exhale.',
      'Do not force the twist; move within a comfortable range.'
    ],
    modifications: {
      beginner: 'Hug your knee with your arm instead of hooking the elbow. Keep the bottom leg bent.',
      advanced: 'Increase the depth of the twist. Bind your arms by wrapping your left arm through the gap in your bent leg and clasping your right hand behind your back.',
      equipment_alternatives: {
        'None': 'Can be performed sitting in a chair.'
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
        'Sit tall, one leg straight, other foot crossed over.',
        'Hand behind you for support.'
      ],
      execution: [
        'Inhale, lengthen your spine.',
        'Exhale, twist towards the bent knee.',
        'Use your arm to gently deepen the twist.',
        'Keep sit bones on the floor.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Lifting one hip off the floor.',
        'Forcing the twist from the neck.'
      ],
      breathing: 'Inhale to lengthen, exhale to twist.'
    }
  },
  'single-leg-hamstring-stretch': {
    id: 'single-leg-hamstring-stretch',
    name: 'Single Leg Hamstring Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)',
      'Yoga Strap'
    ],
    muscleGroups: [
      'Hamstrings',
      'Calves'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with both knees bent and feet flat on the floor.',
      'Extend your right leg up towards the ceiling.',
      'Loop a yoga strap, towel, or resistance band around the ball of your right foot, holding the ends with both hands.',
      'Gently pull on the strap to draw your right leg closer to your torso, keeping the leg as straight as possible.',
      'Stop when you feel a comfortable stretch in your hamstring. Flex your foot to also stretch the calf.',
      'Keep your head and shoulders relaxed on the floor. You can keep your left leg bent or extend it flat on the floor for a deeper stretch.',
      'Hold, then switch sides.'
    ],
    safetyNotes: [
      'Keep the leg as straight as possible, but do not lock the knee.',
      'The stretch should be felt in the belly of the hamstring, not behind the knee.',
      'Avoid lifting your hips off the floor.'
    ],
    modifications: {
      beginner: 'Keep the non-stretching leg bent with the foot on the floor. Do not pull the leg as close.',
      advanced: 'Extend the non-stretching leg flat on the floor. Gently pull the leg closer to your torso.',
      equipment_alternatives: {
        'Yoga Strap': 'A towel, belt, or dog leash.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: [
        'Lie on your back.',
        'Loop strap around one foot and extend that leg up.'
      ],
      execution: [
        'Gently pull on the strap.',
        'Draw the straight leg towards you.',
        'Feel the stretch in the back of your thigh.',
        'Keep hips grounded and shoulders relaxed.'
      ],
      common_mistakes: [
        'Bending the knee too much.',
        'Lifting hips off the floor.',
        'Pulling too aggressively.'
      ],
      breathing: 'Breathe deeply and exhale to relax further into the stretch.'
    }
  },
  'dynamic-baby-cobra': {
    id: 'dynamic-baby-cobra',
    name: 'Dynamic Baby Cobra',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Spine',
      'Back Extensors',
      'Chest'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on your mat with your forehead on the floor.',
      'Place your hands under your shoulders, elbows tucked in close to your body.',
      'Press the tops of your feet into the mat to engage your legs.',
      'Inhale and use your back muscles to lift your head and chest a few inches off the floor. Keep the lift small and your gaze slightly forward and down.',
      'Use minimal pressure from your hands.',
      'Exhale and lower your chest and head back to the floor with control.',
      'Repeat the lift and lower, flowing with your breath.'
    ],
    safetyNotes: [
      'The work should come from your back muscles, not from pushing with your hands.',
      'Keep your neck long; avoid jutting your chin forward.',
      'Keep your glutes engaged to protect your lower back.'
    ],
    modifications: {
      beginner: 'Lift only an inch or two off the floor. Keep more pressure in the hands for support.',
      advanced: 'Hover your hands off the floor to ensure your back muscles are doing all the work.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
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
        'Lie face down, hands under shoulders, elbows in.',
        'Tops of feet on the floor.'
      ],
      execution: [
        'Inhale, peel your chest off the floor.',
        'Use your back muscles, not your hands.',
        'Keep neck long, gaze slightly forward.',
        'Exhale, lower with control.'
      ],
      common_mistakes: [
        'Pushing up with the hands.',
        'Cranking the neck back.',
        'Lifting too high and crunching the low back.'
      ],
      breathing: 'Inhale as you lift, exhale as you lower.'
    }
  },
  'frog-stretch': {
    id: 'frog-stretch',
    name: 'Frog Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Groin',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Start on your hands and knees in a tabletop position.',
      'Slowly walk your knees out wide to the sides, as far as is comfortable.',
      'Keep your shins on the floor and your ankles directly behind your knees, creating a 90-degree angle at the knee joint.',
      'Flex your feet so the inner edges of your feet are on the floor.',
      'Lower down onto your forearms and gently press your hips back.',
      'Hold this deep stretch, breathing into your inner thighs and hips.'
    ],
    safetyNotes: [
      'This is an intense stretch; ease into it slowly and do not force it.',
      'Use a mat or blankets under your knees for cushioning.',
      'If you feel any sharp pain in your knees or hips, back off immediately.'
    ],
    modifications: {
      beginner: 'Do not spread your knees as wide. Stay up on your hands instead of lowering to forearms. Place a cushion under your torso for support.',
      advanced: 'Spread your knees wider. Gently rock your hips forward and backward to mobilize the joint.',
      equipment_alternatives: {
        'None': 'Butterfly stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Start on all fours.',
        'Slide knees out wide.',
        'Keep ankles behind knees, feet flexed.'
      ],
      execution: [
        'Lower to your forearms.',
        'Gently press your hips back.',
        'Breathe deeply and try to relax your inner thighs.',
        'Hold the stretch.'
      ],
      common_mistakes: [
        'Going too deep too quickly.',
        'Letting ankles collapse inward.',
        'Holding breath and tensing up.'
      ],
      breathing: 'Deep, slow breaths are crucial to allow the muscles to release in this pose.'
    }
  },
  'upper-back-stretch': {
    id: 'upper-back-stretch',
    name: 'Upper Back Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Upper Back',
      'Rhomboids',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Sit or stand tall.',
      'Extend your arms straight out in front of you at shoulder height and interlace your fingers, palms facing away from you.',
      'Tuck your chin to your chest and round your upper back, actively pushing your hands away from you.',
      'Feel a deep stretch between your shoulder blades.',
      'Hold this position, breathing into the space between your shoulder blades.',
      'To release, return to a tall posture.'
    ],
    safetyNotes: [
      'Focus the stretch on the upper back, not the lower back.',
      'The movement should be a gentle rounding, not a forceful slump.',
      'Keep your shoulders relaxed away from your ears.'
    ],
    modifications: {
      beginner: 'Do not push hands as far away. Hold for a shorter duration.',
      advanced: 'Add a gentle side-to-side motion with your torso to stretch different fibers of the muscles.',
      equipment_alternatives: {
        'None': 'Eagle Arms or Cat Pose.'
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
        'Sit or stand tall.',
        'Interlace fingers in front of you.'
      ],
      execution: [
        'Push palms away from you.',
        'Round your upper back and tuck your chin.',
        'Breathe into the space between your shoulder blades.',
        'Actively press away to deepen the stretch.'
      ],
      common_mistakes: [
        'Shrugging shoulders up to ears.',
        'Holding breath.',
        'Rounding the low back instead of the upper back.'
      ],
      breathing: 'Breathe deeply throughout the hold.'
    }
  },
  'fire-hydrants': {
    id: 'fire-hydrants',
    name: 'Fire Hydrants',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Start on all fours in a tabletop position with hands under shoulders and knees under hips.',
      'Engage your core to keep your back flat and prevent your torso from twisting.',
      'Keeping your right knee bent at a 90-degree angle, lift your right leg out to the side.',
      'Lift as high as you can while keeping your hips level and without shifting all your weight to the left.',
      'Pause at the top and squeeze your outer glute.',
      'Lower your knee back to the starting position with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement should be isolated to the hip; avoid rotating or tilting your torso.',
      'Keep the 90-degree bend in your knee.',
      'Move with control, not momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion.',
      advanced: 'Add a resistance band around your thighs, just above the knees. Add a pause at the top.',
      equipment_alternatives: {
        'None': 'Standing fire hydrants.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Start in a stable tabletop position.',
        'Core braced, back flat.'
      ],
      execution: [
        'Lift one bent knee out to the side.',
        'Keep hips square to the floor.',
        'Squeeze the outer glute.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Tilting the torso to lift the leg higher.',
        'Arching or rounding the back.',
        'Swinging the leg.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },
  'staff-pose': {
    id: 'staff-pose',
    name: 'Staff Pose',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Core',
      'Back',
      'Hamstrings'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor with your legs extended straight out in front of you.',
      'Sit up as tall as possible, stacking your shoulders directly over your hips.',
      'Place your hands on the floor alongside your hips, with fingers pointing forward, and gently press down to help lift and lengthen your torso.',
      'Flex your feet by pulling your toes back towards you and actively press your thighs into the floor.',
      'Engage your core and imagine a string pulling the crown of your head towards the ceiling.',
      'Hold this active, engaged position.'
    ],
    safetyNotes: [
      'If your hamstrings are tight, sit on the edge of a folded blanket or block to help tilt your pelvis forward.',
      'Avoid rounding your lower back; focus on creating a straight spine.',
      'Keep your shoulders relaxed away from your ears.'
    ],
    modifications: {
      beginner: 'Sit on a cushion or block. Keep a slight bend in your knees.',
      advanced: 'Actively engage every muscle more intensely. Hold for a longer duration.',
      equipment_alternatives: {
        'None': 'This is a fundamental postural exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Sit on floor, legs straight out.',
        'Sit on a block if hamstrings are tight.'
      ],
      execution: [
        'Sit up tall, long spine.',
        'Press hands into floor to help lift.',
        'Flex feet, press thighs down.',
        'Engage your entire body.'
      ],
      common_mistakes: [
        'Slouching or rounding the back.',
        'Not actively engaging the legs.',
        'Shrugging the shoulders.'
      ],
      breathing: 'Breathe steadily and deeply, using the breath to create more length in the spine.'
    }
  },
  'adductor-lifts': {
    id: 'adductor-lifts',
    name: 'Adductor Lifts',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your right side, supporting your head with your right arm.',
      'Bend your top (left) leg and place your left foot on the floor in front of your bottom leg for support.',
      'Keep your bottom (right) leg straight.',
      'Engage your inner thigh to lift your bottom (right) leg off the floor.',
      'Lift as high as you can, focusing on the contraction in your adductor muscle.',
      'Hold for a moment at the top.',
      'Slowly lower the leg back down with control, but try not to let it rest on the floor.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement should be small and controlled.',
      'Avoid using momentum or your hips to lift the leg.',
      'Focus on isolating the inner thigh.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Let the leg rest on the floor between reps.',
      advanced: 'Add a light ankle weight. Add a pause at the top of the lift.',
      equipment_alternatives: {
        'None': 'Sumo squats or plié squats.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on your side, top foot planted in front.',
        'Bottom leg is straight.'
      ],
      execution: [
        'Lift the bottom straight leg off the floor.',
        'Use your inner thigh to initiate the lift.',
        'Movement is small and focused.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Using momentum.',
        'Rocking the torso.',
        'Not feeling the contraction in the inner thigh.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },
  'activated-hip-flexor-stretch-with-block': {
    id: 'activated-hip-flexor-stretch-with-block',
    name: 'Hip Flexor Stretch with a block',
    category: 'mobility',
    equipment: [
      'Yoga Block'
    ],
    muscleGroups: [
      'Hip Flexors',
      'Psoas',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Start in a half-kneeling position with your left knee on a yoga block or cushion and your right foot forward.',
      'Ensure your torso is upright and your hips are square.',
      'Perform a posterior pelvic tilt by tucking your tailbone under and engaging your right glute.',
      'You should feel a deep stretch in the front of your left hip (hip flexor).',
      'Hold this activated position, maintaining the pelvic tuck and glute squeeze.',
      'To increase the stretch, you can gently press your hips forward without losing the pelvic tuck.',
      'Hold, then switch sides.'
    ],
    safetyNotes: [
      'The key to this stretch is the posterior pelvic tilt; do not just lean forward with an arched back.',
      'Keep your core engaged to stabilize your spine.',
      'The block under the knee is for comfort and to allow a better angle for the stretch.'
    ],
    modifications: {
      beginner: 'Perform without the block. Focus solely on mastering the pelvic tilt and glute squeeze.',
      advanced: 'Raise the arm on the same side as the back leg overhead to deepen the stretch along the fascial line.',
      equipment_alternatives: {
        'Yoga Block': 'A firm cushion or folded towel.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Half-kneeling, back knee on a block.',
        'Torso upright, hips square.'
      ],
      execution: [
        'Tuck your tailbone under (posterior tilt).',
        'Squeeze the glute of the back leg.',
        'Feel the stretch in the front of the hip.',
        'Maintain the activation.'
      ],
      common_mistakes: [
        'Arching the lower back instead of tucking the pelvis.',
        'Leaning forward without activation.',
        'Not squeezing the glute.'
      ],
      breathing: 'Breathe deeply throughout the hold to help the psoas release.'
    }
  },
  'half-kneeling-rotation-with-block-and-dumbbell': {
    id: 'half-kneeling-rotation-with-block-and-dumbbell',
    name: 'Half Kneeling Rotation with a block & dumbbell',
    category: 'strength',
    equipment: [
      'Yoga Block',
      'Dumbbells'
    ],
    muscleGroups: [
      'Core',
      'Obliques',
      'Hips',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Assume a half-kneeling position with your left knee on a yoga block and your right foot forward.',
      'Hold a single light dumbbell with both hands, arms extended straight out in front of your chest.',
      'Engage your core and keep your hips stable and facing forward.',
      'Slowly rotate your torso and arms to the right (towards your front leg).',
      'The rotation should come from your upper/mid-back, not from twisting your hips.',
      'Return to the center with control.',
      'Rotate your torso and arms to the left.',
      'Return to center. That is one repetition. Complete all reps, then switch legs.'
    ],
    safetyNotes: [
      'Keep your hips and lower body completely still; the movement is a torso rotation.',
      'Use a light weight; control is more important than load.',
      'Maintain a tall, upright posture.'
    ],
    modifications: {
      beginner: 'Perform without the dumbbell. Reduce the range of rotation.',
      advanced: 'Use a slightly heavier dumbbell. Pause at the end range of each rotation.',
      equipment_alternatives: {
        'Dumbbell': 'A medicine ball or weight plate.'
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
        'Half-kneeling, back knee on block.',
        'Hold dumbbell with straight arms at chest height.',
        'Core braced, hips stable.'
      ],
      execution: [
        'Rotate torso and arms to one side.',
        'Keep hips locked and facing forward.',
        'Return to center with control.',
        'Rotate to the other side.'
      ],
      common_mistakes: [
        'Twisting the hips instead of the torso.',
        'Leaning or losing posture.',
        'Using a weight that is too heavy.'
      ],
      breathing: 'Exhale as you rotate, inhale as you return to center.'
    }
  },
  'skater-squats': {
    id: 'skater-squats',
    name: 'Skater Squats',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Hamstrings',
      'Core'
    ],
    difficulty: 3,
    instructions: [
      'Stand on your left leg, with your right leg bent and foot lifted off the floor behind you.',
      'Extend your arms out in front of you for balance.',
      'Initiate the movement by sending your hips back and bending your left knee, as if performing a single-leg squat.',
      'Lower yourself with control, allowing your back (right) knee to travel towards the floor behind your standing heel.',
      'Go as low as you can, ideally until your back knee lightly taps the floor.',
      'Drive through your left heel to return to the starting standing position.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'This is an advanced single-leg exercise. Master single-leg deadlifts and split squats first.',
      'Keep your standing knee tracking over your foot; do not let it collapse inward.',
      'Control the descent; do not drop into the bottom position.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Place cushions on the floor to tap your knee onto. Hold onto a wall or TRX for support.',
      advanced: 'Hold dumbbells in each hand. Add a pause at the bottom.',
      equipment_alternatives: {
        'None': 'Pistol squats (different mechanics but similar challenge) or assisted single-leg squats.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Balance on one leg.',
        'Arms out front for counterbalance.',
        'Core tight.'
      ],
      execution: [
        'Hinge hips back and bend standing knee.',
        'Lower down with control.',
        'Aim to tap back knee to the floor.',
        'Drive through standing heel to rise.'
      ],
      common_mistakes: [
        'Losing balance.',
        'Standing knee caving in.',
        'Dropping down without control.'
      ],
      breathing: 'Inhale as you lower, exhale as you drive up.'
    }
  },
  'monster-walks-with-miniband': {
    id: 'monster-walks-with-miniband',
    name: 'Monster Walks with a miniband',
    category: 'strength',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Glutes (Medius, Maximus)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Place a miniband around your ankles or just above your knees.',
      'Assume an athletic, half-squat stance with your feet wide enough to create tension on the band.',
      'Begin walking forward by taking diagonal steps. Step forward and out with your right foot, then forward and out with your left foot.',
      'Maintain the wide stance and low squat position throughout the walk.',
      'Keep tension on the band at all times.',
      'After walking forward for a set distance, walk backward in the same diagonal pattern to return to the start.'
    ],
    safetyNotes: [
      'Keep your knees pushed out against the band; do not let them collapse inward.',
      'Maintain a relatively upright chest and a flat back.',
      'The movement should be controlled, not a waddle.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Place the band above the knees.',
      advanced: 'Use a heavier band. Place the band around your feet for maximum glute activation. Stay lower in your squat.',
      equipment_alternatives: {
        'None': 'Bodyweight sumo walks.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'steps forward and back'
    },
    coaching: {
      setup: [
        'Band around ankles/knees.',
        'Assume a low, wide athletic stance.',
        'Create tension.'
      ],
      execution: [
        'Take diagonal steps forward.',
        'Stay low and wide.',
        'Keep knees out.',
        'Walk backward to return.'
      ],
      common_mistakes: [
        'Knees caving in.',
        'Standing up too tall.',
        'Losing tension in the band.'
      ],
      breathing: 'Breathe steadily throughout the movement.'
    }
  },
  'superman-sequence': {
    id: 'superman-sequence',
    name: 'Superman Sequence',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Back',
      'Glutes',
      'Shoulders'
    ],
    difficulty: 2,
    instructions: [
      'Lie face down with your arms extended in front of you.',
      'Lift your right arm and left leg simultaneously (Alternating Superman). Lower them.',
      'Lift your left arm and right leg. Lower them.',
      'Lift just your arms, squeezing your upper back. Lower them.',
      'Lift just your legs, squeezing your glutes. Lower them.',
      'Finally, lift both arms and both legs at the same time (Full Superman). Lower them.',
      'This entire sequence constitutes one repetition.'
    ],
    safetyNotes: [
      'Keep your gaze towards the floor to maintain a neutral neck.',
      'The lifts should be small and controlled, focusing on muscle engagement, not height.',
      'Keep your core engaged to protect your lower back.'
    ],
    modifications: {
      beginner: 'Focus on only one part of the sequence, such as the alternating superman, until you feel stronger.',
      advanced: 'Add a pause at the top of each lift.',
      equipment_alternatives: {
        'None': 'Bird dog sequence.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'sequences'
    },
    coaching: {
      setup: [
        'Lie face down, arms and legs extended.',
        'Neutral neck.'
      ],
      execution: [
        'Opposite arm/leg lift.',
        'Other opposite arm/leg lift.',
        'Arms only lift.',
        'Legs only lift.',
        'Full Superman lift.',
        'Move smoothly through the sequence.'
      ],
      common_mistakes: [
        'Cranking the neck up.',
        'Lifting too high and straining the back.',
        'Using momentum.'
      ],
      breathing: 'Exhale on each lift, inhale as you lower.'
    }
  },
  'wide-dynamic-cobra': {
    id: 'wide-dynamic-cobra',
    name: 'Wide Dynamic Cobra',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Spine',
      'Chest',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on your mat.',
      'Place your hands on the floor wider than your mat, tenting your fingertips.',
      'Keep your elbows pointing up towards the ceiling.',
      'Press the tops of your feet into the mat.',
      'Inhale and press into your fingertips to lift your head and chest off the floor, rolling up through your spine.',
      'Look over your right shoulder, then your left.',
      'Exhale and slowly roll back down to the floor.',
      'Repeat the movement, flowing with your breath.'
    ],
    safetyNotes: [
      'Keep your glutes and core engaged to protect your lower back.',
      'The movement should be fluid; avoid any sharp or jerky motions.',
      'Only lift as high as is comfortable for your back.'
    ],
    modifications: {
      beginner: 'Do not lift as high. Keep hands closer to the body for more support.',
      advanced: 'Lift higher and add a longer pause while looking over each shoulder.',
      equipment_alternatives: {
        'None': 'Standard cobra or baby cobra pose.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, hands wide on fingertips.',
        'Elbows pointing up.'
      ],
      execution: [
        'Inhale, roll your chest up.',
        'Look over one shoulder, then the other.',
        'Exhale, roll back down smoothly.',
        'Keep glutes engaged.'
      ],
      common_mistakes: [
        'Pushing up too high and jamming the low back.',
        'Shrugging shoulders up to ears.',
        'Forgetting to breathe with the movement.'
      ],
      breathing: 'Inhale as you roll up, exhale as you roll down.'
    }
  },
  'leaning-quad-stretch': {
    id: 'leaning-quad-stretch',
    name: 'Leaning Quad Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Hip Flexors'
    ],
    difficulty: 2,
    instructions: [
      'Kneel on the floor with both knees together.',
      'Keep your torso upright and your core engaged.',
      'Slowly and with control, begin to lean your torso straight back.',
      'You can place your hands on the floor behind you for support.',
      'Lean back only as far as you can while feeling a deep stretch in your quads and the front of your hips.',
      'Keep your knees on or close to the floor.',
      'Hold the stretch. To exit, use your hands to press yourself back to the upright kneeling position.'
    ],
    safetyNotes: [
      'This can be an intense stretch on the knees and quads. Do not perform if you have knee injuries.',
      'Avoid arching your lower back; try to maintain a relatively straight line from your knees to your head.',
      'Move into and out of the stretch very slowly.'
    ],
    modifications: {
      beginner: 'Do not lean back as far. Keep hands on heels for support. Perform a standard standing or side-lying quad stretch instead.',
      advanced: 'Lean back further, aiming to rest on your forearms or lie all the way back (Hero Pose).',
      equipment_alternatives: {
        'None': 'Standing quad stretch.'
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
        'Kneel upright, knees together.',
        'Core engaged.'
      ],
      execution: [
        'Slowly lean your torso straight back.',
        'Use hands for support if needed.',
        'Feel a deep stretch in your quads.',
        'Hold and breathe.'
      ],
      common_mistakes: [
        'Arching the back excessively.',
        'Leaning back too quickly.',
        'Forcing the stretch despite knee pain.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'upper-body-around-the-world': {
    id: 'upper-body-around-the-world',
    name: 'Upper Body Around the World',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Shoulders',
      'Chest',
      'Lats',
      'Spine'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart and knees slightly bent.',
      'Interlace your fingers and reach your arms straight up overhead.',
      'Begin to make a large, slow circle with your entire upper body.',
      'Bend to the right, then fold forward, then bend to the left, and finally return to the upright position.',
      'Keep your core engaged and your lower body stable.',
      'After completing a circle in one direction, reverse the direction.',
      'The movement should be fluid and controlled.'
    ],
    safetyNotes: [
      'Keep the movement slow to avoid dizziness.',
      'Only move within a range that feels good for your back and shoulders.',
      'Keep your lower body anchored and stable.'
    ],
    modifications: {
      beginner: 'Make smaller circles. Do not fold as far forward.',
      advanced: 'Make larger, slower circles to deepen the stretch in all positions. Hold a light weight or yoga block.',
      equipment_alternatives: {
        'None': 'Cat-cow and standing side bends.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'circles per direction'
    },
    coaching: {
      setup: [
        'Stand with feet wide, knees soft.',
        'Clasp hands and reach overhead.'
      ],
      execution: [
        'Make a large, slow circle with your torso.',
        'Move through side-bend, forward-fold, other side-bend, and back up.',
        'Keep lower body still.',
        'Reverse direction.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Bending the knees too much.',
        'Not engaging the core.'
      ],
      breathing: 'Inhale as you come up and to the side, exhale as you fold forward.'
    }
  },
  'single-leg-hip-flexor-extension-with-pole': {
    id: 'single-leg-hip-flexor-extension-with-pole',
    name: 'Single Leg Hip Flexor Extension with Pole',
    category: 'mobility',
    equipment: [
      'Pole'
    ],
    muscleGroups: [
      'Hip Flexors',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding a pole (or wall) with your left hand for balance.',
      'Lift your right knee up towards your chest (hip flexion).',
      'From this position, sweep your right leg back behind you, extending your hip as far as you can.',
      'Squeeze your right glute at the end of the extension.',
      'The movement should be a controlled swing from full flexion to full extension.',
      'Keep your torso upright and your core engaged.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Use the pole for balance so you can focus on the hip movement.',
      'Avoid arching your lower back as you extend the leg back; the movement should come from the hip and glute.',
      'Control the swing; do not use wild momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion of the swing.',
      advanced: 'Perform without support to challenge balance. Add a pause at peak flexion and peak extension.',
      equipment_alternatives: {
        'Pole': 'A wall, chair, or sturdy object.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, holding pole for balance.',
        'Balance on one leg.'
      ],
      execution: [
        'Swing other leg from high knee (flexion) to behind you (extension).',
        'Squeeze the glute on the backswing.',
        'Keep torso upright and stable.',
        'Maintain a fluid, controlled swing.'
      ],
      common_mistakes: [
        'Arching the back.',
        'Losing balance.',
        'Swinging with momentum instead of control.'
      ],
      breathing: 'Exhale as you swing back, inhale as you bring the knee forward.'
    }
  },
  'seated-toe-rainbows-with-chair': {
    id: 'seated-toe-rainbows-with-chair',
    name: 'Seated Toe Rainbows with Chair',
    category: 'mobility',
    equipment: [
      'Chair'
    ],
    muscleGroups: [
      'Hips',
      'Core'
    ],
    difficulty: 1,
    instructions: [
      'Sit tall on the edge of a chair with your feet flat on the floor.',
      'Extend your right leg straight out in front of you, with your heel lightly touching the floor.',
      'Keeping your leg straight, lift your right foot a few inches off the floor.',
      'Slowly trace a \'rainbow\' or arc shape with your foot, moving it out to the right side and then back to the center.',
      'The movement should be controlled and initiated from your hip.',
      'Keep your torso and pelvis still.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Sit tall; do not slouch or lean back.',
      'Isolate the movement to the leg and hip; avoid rocking your torso.',
      'Keep the movement small and controlled.'
    ],
    modifications: {
      beginner: 'Make smaller rainbows. Do not lift the leg as high.',
      advanced: 'Make larger rainbows. Add a light ankle weight.',
      equipment_alternatives: {
        'None': 'Supine leg circles.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Sit tall on the edge of a chair.',
        'Extend one leg straight, heel on the floor.'
      ],
      execution: [
        'Lift the straight leg slightly.',
        'Draw an arc or rainbow shape on the floor.',
        'Keep your upper body and hips still.',
        'Control the movement from your hip.'
      ],
      common_mistakes: [
        'Slouching.',
        'Rocking the torso to help move the leg.',
        'Bending the knee.'
      ],
      breathing: 'Breathe naturally throughout the movement.'
    }
  },
  'decline-plank-with-chair': {
    id: 'decline-plank-with-chair',
    name: 'Decline Plank with Chair',
    category: 'core',
    equipment: [
      'Chair'
    ],
    muscleGroups: [
      'Core',
      'Shoulders',
      'Chest'
    ],
    difficulty: 2,
    instructions: [
      'Place your feet on the seat of a stable chair.',
      'Position your hands or forearms on the floor, walking them out until your body is in a straight line.',
      'Your hands/elbows should be directly under your shoulders.',
      'Engage your core, glutes, and quads to maintain a rigid, straight line from your head to your heels.',
      'Do not let your hips sag or rise too high.',
      'Hold this position for the desired duration.'
    ],
    safetyNotes: [
      'Ensure the chair is stable and will not slide.',
      'It is critical to keep your core braced to prevent your lower back from sagging, which can cause injury.',
      'If you feel strain in your lower back, stop the exercise.'
    ],
    modifications: {
      beginner: 'Use a lower surface, like a step, instead of a chair. Hold for a shorter duration.',
      advanced: 'Lift one leg off the chair. Perform plank taps or other movements from this position.',
      equipment_alternatives: {
        'Chair': 'A bench, box, or stability ball.'
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
        'Place feet on a chair.',
        'Hands or forearms on the floor under shoulders.'
      ],
      execution: [
        'Create a straight, rigid line with your body.',
        'Brace your core HARD.',
        'Squeeze glutes and quads.',
        'Hold.'
      ],
      common_mistakes: [
        'Hips sagging.',
        'Hips pushing too high.',
        'Not engaging the core sufficiently.'
      ],
      breathing: 'Breathe steadily throughout the hold.'
    }
  },
  'elevated-pigeon-with-chair': {
    id: 'elevated-pigeon-with-chair',
    name: 'Elevated Pigeon with Chair',
    category: 'flexibility',
    equipment: [
      'Chair'
    ],
    muscleGroups: [
      'Glutes',
      'Piriformis',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Stand in front of a chair or bench.',
      'Lift your right leg and place your shin on the chair seat, with your knee pointing out to the right and your foot towards the left.',
      'Your shin should be as parallel to the front of the chair as is comfortable.',
      'Keep your standing (left) leg straight or slightly bent.',
      'Place your hands on the chair for support.',
      'Keeping your back straight, hinge at your hips and gently lean your torso forward over your shin until you feel a stretch in your right outer hip and glute.',
      'Hold the stretch. Switch sides.'
    ],
    safetyNotes: [
      'Ensure the chair is stable.',
      'Keep your front foot flexed to protect your knee.',
      'Do not force the stretch; ease into it gently.'
    ],
    modifications: {
      beginner: 'Do not lean as far forward. Use a lower surface like a step.',
      advanced: 'Lean further forward. Try to rest your forearms on the chair.',
      equipment_alternatives: {
        'Chair': 'A bench, table, or bed.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Place one shin on a chair in a pigeon-like pose.',
        'Hands on chair for support.'
      ],
      execution: [
        'Keep back straight.',
        'Hinge forward over your shin.',
        'Breathe into the hip stretch.',
        'Keep the front foot flexed.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Forcing the stretch and causing knee pain.',
        'Holding tension in the shoulders.'
      ],
      breathing: 'Breathe deeply to help the hip muscles release.'
    }
  },
  'knee-hug-rock': {
    id: 'knee-hug-rock',
    name: 'Knee Hug Rock',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Back',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back and hug both knees into your chest.',
      'Grasp your shins or the backs of your thighs.',
      'Gently and slowly, begin to rock from side to side.',
      'Use the motion to massage your lower back against the floor.',
      'The movement should be small and controlled.',
      'You can also make small circles with your knees in both directions.'
    ],
    safetyNotes: [
      'Keep the movement gentle; do not rock so far that you lose balance or fall over.',
      'Keep your head and neck relaxed on the floor.',
      'This should feel like a massage, not a strain.'
    ],
    modifications: {
      beginner: 'Make very small rocks and circles.',
      advanced: 'Make larger circles, exploring the full range of motion of your lower back and hips.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie on back, hug knees to chest.'
      ],
      execution: [
        'Gently rock side to side.',
        'Massage the lower back.',
        'Try making small circles with the knees.',
        'Relax and breathe.'
      ],
      common_mistakes: [
        'Rocking too aggressively.',
        'Tensing the neck and shoulders.',
        'Holding breath.'
      ],
      breathing: 'Breathe deeply and naturally.'
    }
  },
  'side-plank-hip-dip': {
    id: 'side-plank-hip-dip',
    name: 'Side Plank Hip Dip',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Obliques',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Start in a strong side plank position on your right forearm, with your elbow under your shoulder and body in a straight line.',
      'Engage your core to keep your hips stacked.',
      'Slowly lower your right hip towards the floor, feeling a stretch in your right oblique.',
      'Tap your hip to the floor lightly or come as close as you can.',
      'Engage your right oblique to lift your hip back up, returning to the starting side plank position and even lifting slightly higher.',
      'Repeat the dipping motion with control. Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement should be controlled in both directions; do not just drop your hip.',
      'Keep your shoulder stable and your elbow directly under it.',
      'Maintain a straight line with your body; do not bend at the waist.'
    ],
    modifications: {
      beginner: 'Perform from your knees instead of your feet. Reduce the range of motion of the dip.',
      advanced: 'Hold a light dumbbell on your top hip.',
      equipment_alternatives: {
        'None': 'Standing side bends.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Establish a strong side plank.',
        'Hips high, core braced.'
      ],
      execution: [
        'Slowly dip your bottom hip towards the floor.',
        'Use your obliques to lift the hip back up.',
        'Control the movement both up and down.',
        'Keep your body straight.'
      ],
      common_mistakes: [
        'Dropping the hip without control.',
        'Twisting the torso.',
        'Shoulder not being over the elbow.'
      ],
      breathing: 'Inhale as you lower your hip, exhale as you lift.'
    }
  },
  'fire-hydrants-with-internal-rotation': {
    id: 'fire-hydrants-with-internal-rotation',
    name: 'Fire Hydrants with Internal Rotation',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius, Minimus)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Start on all fours in a tabletop position with hands under shoulders and knees under hips.',
      'Engage your core to keep your back flat.',
      'Lift your right knee out to the side, as in a standard fire hydrant.',
      'At the top of the movement, internally rotate your hip to lift your right foot up towards the ceiling.',
      'Reverse the motion: lower the foot back down by externally rotating the hip, then lower the knee back to the starting position.',
      'The entire movement should be slow and controlled. Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Avoid tilting your torso or shifting your weight excessively to compensate.',
      'The movement comes from hip rotation, not from arching your back.',
      'Focus on the mind-muscle connection with your glutes.'
    ],
    modifications: {
      beginner: 'Perform standard fire hydrants without the internal rotation. Reduce the range of motion.',
      advanced: 'Add a resistance band around your thighs, just above the knees.',
      equipment_alternatives: {
        'None': 'Standard fire hydrants.'
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
        'Core braced, back flat.'
      ],
      execution: [
        'Lift knee out to the side (abduction).',
        'At the top, rotate hip to lift foot (internal rotation).',
        'Control the reversal of the movement.',
        'Keep hips level.'
      ],
      common_mistakes: [
        'Rocking the torso side-to-side.',
        'Rushing the rotational component.',
        'Losing the 90-degree bend in the knee.'
      ],
      breathing: 'Exhale as you lift and rotate, inhale as you lower.'
    }
  },
  'prone-y-raises': {
    id: 'prone-y-raises',
    name: 'Prone Y Raises',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Upper Back',
      'Shoulders',
      'Lower Trapezius'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on a mat with your arms extended overhead in a \'Y\' shape, thumbs pointing towards the ceiling.',
      'Rest your forehead on the mat to keep your neck neutral.',
      'Engage your core and squeeze your shoulder blades together and down.',
      'Keeping your arms straight, lift them off the floor as high as you can without arching your lower back.',
      'Focus on the contraction in your mid and lower traps.',
      'Hold for a moment at the top.',
      'Slowly lower your arms back to the floor with control.'
    ],
    safetyNotes: [
      'Avoid shrugging your shoulders towards your ears; keep them pulled down.',
      'The movement should be initiated by your back and shoulder muscles, not by momentum.',
      'Do not lift your chest off the floor; isolate the movement to your arms.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Perform without lifting, focusing only on the scapular squeeze.',
      advanced: 'Hold very light dumbbells or weight plates. Add a pause at the top of the lift.',
      equipment_alternatives: {
        'None': 'Can also be performed on an incline bench.'
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
        'Lie face down, arms in a \'Y\' shape.',
        'Thumbs pointing up, forehead on mat.'
      ],
      execution: [
        'Squeeze shoulder blades together and down.',
        'Lift straight arms off the floor.',
        'Feel the contraction in your upper back.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Shrugging shoulders.',
        'Bending the elbows.',
        'Lifting the chest and arching the low back.'
      ],
      breathing: 'Exhale as you lift your arms, inhale as you lower.'
    }
  },
  'standing-chest-stretch': {
    id: 'standing-chest-stretch',
    name: 'Standing Chest Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Chest (Pectorals)',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet hip-width apart.',
      'Interlace your fingers behind your lower back, palms pressing together if possible.',
      'Keeping your arms straight, gently pull your shoulder blades together and down your back.',
      'Lift your hands away from your glutes and lift your chest towards the ceiling.',
      'Feel a stretch across the front of your chest and shoulders.',
      'Hold the stretch, breathing deeply.',
      'To release, unclasp your hands slowly.'
    ],
    safetyNotes: [
      'Avoid arching your lower back; keep your core engaged.',
      'If you cannot interlace your fingers, hold a strap or towel between your hands.',
      'Do not force the arm lift; only go as high as your shoulder mobility comfortably allows.'
    ],
    modifications: {
      beginner: 'Use a strap or towel to allow for a wider grip. Do not lift arms as high.',
      advanced: 'Hinge at the hips and fold forward, allowing your clasped hands to fall overhead for a deeper stretch.',
      equipment_alternatives: {
        'None': 'Doorway chest stretch.'
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
        'Stand tall, interlace fingers behind your back.'
      ],
      execution: [
        'Squeeze shoulder blades together and down.',
        'Lift your chest proudly.',
        'Lift hands away from your body.',
        'Breathe into the chest.'
      ],
      common_mistakes: [
        'Arching the lower back.',
        'Shrugging shoulders up to ears.',
        'Forcing the arm lift.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'hand-and-wrist-sequence': {
    id: 'hand-and-wrist-sequence',
    name: 'Hand & Wrist Sequence',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Forearms',
      'Wrists',
      'Hands'
    ],
    difficulty: 1,
    instructions: [
      'Part 1 (Flexion/Extension): Extend one arm forward, palm up. With your other hand, gently bend the wrist down, pulling fingers towards the floor. Hold. Then, gently bend the wrist up. Hold. Repeat with palm down.',
      'Part 2 (Rotations): Clasp your hands together and make slow, controlled circles with your wrists in both directions.',
      'Part 3 (Finger Spreads): Extend your arms and spread your fingers as wide as possible, then make a tight fist. Repeat this opening and closing motion quickly.',
      'Complete the entire sequence.'
    ],
    safetyNotes: [
      'All movements should be gentle and pain-free.',
      'Do not apply excessive pressure when stretching the wrist.',
      'Keep movements slow and controlled.'
    ],
    modifications: {
      beginner: 'Perform each stretch with less intensity and for a shorter duration.',
      advanced: 'Increase the duration of the holds and the number of repetitions.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight mobility sequence.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds total'
    },
    coaching: {
      setup: [
        'Sit or stand tall.'
      ],
      execution: [
        'Gently perform wrist flexion and extension stretches on both sides.',
        'Perform slow wrist rotations with hands clasped.',
        'Finish with dynamic finger spreads and fists.'
      ],
      common_mistakes: [
        'Pulling too hard on the wrist.',
        'Moving too quickly.',
        'Forgetting to stretch in all directions.'
      ],
      breathing: 'Breathe deeply and continuously throughout the sequence.'
    }
  },
  'cross-body-hamstring-stretch': {
    id: 'cross-body-hamstring-stretch',
    name: 'Cross Body Hamstring Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hamstrings',
      'IT Band',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your back.',
      'Extend your right leg up towards the ceiling and your left leg flat on the floor.',
      'Grasp your right leg with your left hand (on the calf or thigh). You can use a strap for assistance.',
      'Keeping your right shoulder on the floor, gently pull your straight right leg across your body to the left.',
      'Stop when you feel a stretch along the outside of your right leg (IT Band) and hamstring.',
      'Hold the stretch, breathing deeply.',
      'Release slowly and switch sides.'
    ],
    safetyNotes: [
      'Keep the opposite shoulder grounded to maintain the twist and focus the stretch.',
      'Do not pull so hard that it causes pain in your hip or lower back.',
      'Keep the stretching leg as straight as is comfortable.'
    ],
    modifications: {
      beginner: 'Use a strap or towel around your foot. Keep a bend in the knee of the stretching leg.',
      advanced: 'Try to bring the leg closer to the floor on the opposite side while keeping the shoulder down.',
      equipment_alternatives: {
        'None': 'Standing crossover forward fold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie on back, extend one leg up.'
      ],
      execution: [
        'Gently pull the straight leg across your body.',
        'Keep the opposite shoulder on the floor.',
        'Feel the stretch along the outer leg and hamstring.',
        'Hold and breathe.'
      ],
      common_mistakes: [
        'Lifting the shoulder off the floor.',
        'Bending the knee too much.',
        'Forcing the stretch.'
      ],
      breathing: 'Breathe deeply to relax into the stretch.'
    }
  },
  'supine-criss-cross': {
    id: 'supine-criss-cross',
    name: 'Supine Criss Cross',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Glutes',
      'IT Band'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your legs extended straight.',
      'Cross your right ankle over your left ankle.',
      'Engage your glutes and allow your legs to gently rotate so your right hip slightly lifts and your left hip presses down.',
      'This creates a gentle, passive stretch through the outer hip and IT band.',
      'This is a very subtle movement.',
      'Hold for the desired duration.',
      'Uncross your legs and repeat with the left ankle over the right.'
    ],
    safetyNotes: [
      'This is a gentle, passive stretch. Do not force any movement.',
      'Keep your upper body and shoulders relaxed on the floor.',
      'Listen to your body and stop if there is any sharp pain.'
    ],
    modifications: {
      beginner: 'Focus on just crossing the ankles without adding the rotation.',
      advanced: 'Actively press the top leg down slightly to deepen the stretch.',
      equipment_alternatives: {
        'None': 'Standing crossover stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie on your back, legs straight.',
        'Cross one ankle over the other.'
      ],
      execution: [
        'Relax and let gravity create a gentle stretch.',
        'Feel a subtle stretch in the outer hip.',
        'Breathe and hold.'
      ],
      common_mistakes: [
        'Trying to actively force a stretch.',
        'Tensing the body.',
        'Holding breath.'
      ],
      breathing: 'Breathe deeply and allow your body to relax.'
    }
  },
  'toe-grab-calf-stretch': {
    id: 'toe-grab-calf-stretch',
    name: 'Toe Grab Calf Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Calves',
      'Hamstrings',
      'Plantar Fascia'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor with one leg extended straight and the other bent.',
      'Hinge forward from your hips with a straight back and grasp the toes of your extended leg.',
      'Gently pull your toes back towards your shin.',
      'You should feel a stretch along the entire back of your lower leg (calf) and potentially into your hamstring and the arch of your foot.',
      'Hold the stretch.',
      'Release and switch sides.'
    ],
    safetyNotes: [
      'Hinge from your hips; do not round your back to reach your toes.',
      'The pull should be gentle and sustained.',
      'If you cannot reach your toes, use a yoga strap or towel.'
    ],
    modifications: {
      beginner: 'Use a strap or towel. Keep a bend in the knee.',
      advanced: 'Try to keep the leg perfectly straight and pull the toes back further.',
      equipment_alternatives: {
        'None': 'Standing calf stretch against a wall.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit with one leg extended.',
        'Hinge forward to grab the toes.'
      ],
      execution: [
        'Gently pull toes back towards shin.',
        'Keep back straight.',
        'Feel stretch in calf and bottom of foot.',
        'Hold and breathe.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Pulling too aggressively.',
        'Bouncing.'
      ],
      breathing: 'Inhale to lengthen, exhale to deepen the stretch.'
    }
  },
  'half-camel-pose': {
    id: 'half-camel-pose',
    name: 'Half Camel',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Hip Flexors',
      'Chest',
      'Shoulders',
      'Spine'
    ],
    difficulty: 2,
    instructions: [
      'Start in a tall kneeling position with your knees hip-width apart.',
      'Place your hands on your lower back, fingers pointing down, for support.',
      'Inhale and lift your chest up towards the ceiling, beginning to arch your upper back.',
      'Engage your glutes and press your hips forward.',
      'Reach your right hand back to grasp your right heel.',
      'Extend your left arm up towards the ceiling, creating a long line of energy.',
      'Keep your neck in a comfortable position, either looking forward or slightly up.',
      'Hold the pose, then return to start with control and switch sides.'
    ],
    safetyNotes: [
      'This is a deep backbend. Warm up thoroughly first.',
      'Keep your glutes and core engaged throughout to protect your lower back.',
      'If you cannot reach your heel, keep your hand on your lower back or use a yoga block next to your foot.'
    ],
    modifications: {
      beginner: 'Keep both hands on your lower back and focus on just lifting the chest and arching the upper back.',
      advanced: 'Progress to the full Camel Pose by reaching both hands back to both heels simultaneously.',
      equipment_alternatives: {
        'None': 'Standing backbend with hands on lower back.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Kneel tall, hands on low back for support.'
      ],
      execution: [
        'Lift chest, arch upper back.',
        'Press hips forward, squeeze glutes.',
        'Reach one hand back to same-side heel.',
        'Reach other arm up.',
        'Breathe into the front of your body.'
      ],
      common_mistakes: [
        'Crunching the lower back instead of lifting the chest.',
        'Not engaging the glutes.',
        'Letting the head drop back completely.'
      ],
      breathing: 'Breathe deeply and steadily into the chest.'
    }
  },
  'advanced-gate-pose': {
    id: 'advanced-gate-pose',
    name: 'Advanced Gate Pose',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Side Body (Obliques, Lats)',
      'Hamstrings',
      'Adductors'
    ],
    difficulty: 2,
    instructions: [
      'Start in a kneeling position. Extend your right leg straight out to the side, with the sole of your foot on the floor.',
      'Inhale and reach your left arm up overhead.',
      'Exhale and side bend to the right, sliding your right hand down your right leg.',
      'For the advanced variation, aim to bring your right forearm to rest on your right shin or a block, and wrap your top (left) arm behind your back, trying to grasp your right inner thigh.',
      'Roll your top shoulder open and gaze up towards the ceiling.',
      'This creates a deeper side bend and a chest-opening bind.',
      'Hold the pose. Release and switch sides.'
    ],
    safetyNotes: [
      'Keep your chest open and avoid collapsing forward.',
      'Do not force the bind; a standard Gate Pose is sufficient if the bind is not accessible.',
      'Move into and out of the pose slowly.'
    ],
    modifications: {
      beginner: 'Perform a standard Gate Pose without the bind. Rest bottom hand on a yoga block.',
      advanced: 'Work deeper into the bind and side bend.',
      equipment_alternatives: {
        'None': 'Standing side bend.'
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
        'Start in Gate Pose, one leg extended.',
        'Side bend over the straight leg.'
      ],
      execution: [
        'Deepen the side bend, potentially resting forearm on shin.',
        'Wrap top arm behind back for a bind.',
        'Roll top shoulder open.',
        'Breathe into the side body.'
      ],
      common_mistakes: [
        'Collapsing the chest forward.',
        'Forcing the bind.',
        'Lifting the bent knee off the floor.'
      ],
      breathing: 'Breathe deeply to create space in your side ribs.'
    }
  },
  'v-sit': {
    id: 'v-sit',
    name: 'V-Sit',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Abs',
      'Hip Flexors',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your knees bent and feet flat.',
      'Place your hands on the floor slightly behind you for support.',
      'Engage your core and lean your torso back slightly.',
      'Lift your feet off the floor, keeping your shins parallel to the ground (tabletop legs).',
      'This is the starting hold. To advance, begin to straighten your legs and lift your chest to create a \'V\' shape with your body.',
      'You can keep your hands on the floor or extend them forward parallel to the ground for a challenge.',
      'Hold the position, keeping your back straight and your core tight.'
    ],
    safetyNotes: [
      'Keep your back straight; do not let it round or slump.',
      'If you feel strain in your lower back, lower your legs or bend your knees more.',
      'The movement should be controlled; avoid shaking excessively.'
    ],
    modifications: {
      beginner: 'Keep hands on the floor for support. Keep knees bent in a tabletop position.',
      advanced: 'Straighten legs fully. Extend arms forward. Hold for a longer duration.',
      equipment_alternatives: {
        'None': 'Hollow body hold.'
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
        'Sit on floor, knees bent.',
        'Lean back, engage core.'
      ],
      execution: [
        'Lift feet off the floor.',
        'Straighten legs as much as possible.',
        'Lift chest to create a \'V\' shape.',
        'Keep back straight and hold.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Holding breath.',
        'Relying on hands too much.'
      ],
      breathing: 'Breathe steadily and deeply throughout the hold.'
    }
  },
  'center-stretch-static': {
    id: 'center-stretch-static',
    name: 'Center Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Hamstrings',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor in a wide straddle position, with your legs extended out to the sides.',
      'Keep your feet flexed and your spine tall.',
      'Inhale to lengthen your spine.',
      'Exhale and hinge at your hips, walking your hands forward and folding your torso towards the floor between your legs.',
      'Go only as far as your flexibility allows while keeping your back relatively straight.',
      'Rest on your hands, forearms, or a block.',
      'Hold this static stretch, breathing into your inner thighs and hamstrings.'
    ],
    safetyNotes: [
      'Hinge from the hips; do not just round your spine to get lower.',
      'Keep your feet flexed to protect your knees.',
      'If your hamstrings are tight, sit on a cushion to help tilt your pelvis forward.'
    ],
    modifications: {
      beginner: 'Sit on a cushion. Keep knees slightly bent. Do not fold as far forward.',
      advanced: 'Fold deeper, aiming to rest your torso and head on the floor. Hold for a longer duration.',
      equipment_alternatives: {
        'None': 'Standing wide-legged forward fold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Sit in a wide straddle, feet flexed.',
        'Sit up tall on your sit bones.'
      ],
      execution: [
        'Walk hands forward, hinging at the hips.',
        'Keep spine long.',
        'Fold down between your legs.',
        'Hold and breathe into the stretch.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Letting feet roll in.',
        'Forcing the stretch.'
      ],
      breathing: 'Inhale to find length, exhale to deepen the fold.'
    }
  },
  'standing-glute-stretch': {
    id: 'standing-glute-stretch',
    name: 'Standing Glute Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Glutes (Piriformis)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding onto a wall or chair for balance.',
      'Cross your right ankle over your left thigh, just above the knee, creating a \'figure four\' shape.',
      'Keeping your back straight, hinge at your hips and sit back as if lowering into a chair.',
      'Lower yourself until you feel a deep stretch in your right glute and hip.',
      'Keep your right foot flexed to protect the knee.',
      'Hold this static stretch, breathing deeply.',
      'Slowly rise to stand and switch sides.'
    ],
    safetyNotes: [
      'Focus on balance; use support as needed.',
      'Keep your back straight as you hinge; do not round your spine.',
      'Do not force the stretch; only go as deep as your hip mobility allows.'
    ],
    modifications: {
      beginner: 'Do not sit as deep into the stretch. Use more support from the wall/chair.',
      advanced: 'Perform without any support for a greater balance challenge. Sit deeper into the stretch.',
      equipment_alternatives: {
        'None': 'Seated or supine figure four stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Stand on one leg, hold support.',
        'Cross other ankle over standing thigh.',
        'Flex the lifted foot.'
      ],
      execution: [
        'Hinge hips and sit back.',
        'Keep back straight, chest up.',
        'Feel stretch in the outer hip/glute.',
        'Hold the pose and breathe.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Losing balance.',
        'Not flexing the foot, which can strain the knee.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'z-stretch': {
    id: 'z-stretch',
    name: 'Z-Stretch',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Hip Flexors',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your right leg bent in front of you (like pigeon pose) and your left leg bent behind you, with both knees at roughly 90-degree angles, creating a \'Z\' shape.',
      'Try to keep both sit bones on the floor.',
      'Place your hands on the floor for support.',
      'Gently press your back (left) hip forward to feel a stretch in the front of that hip.',
      'For a dynamic version, you can lift your hips and rotate to the other side, or hold statically.',
      'Hold the stretch. To switch sides, you can lean back and swing your legs around, or press up and rearrange.'
    ],
    safetyNotes: [
      'This can be challenging for tight hips. Do not force your knees to the floor.',
      'Use your hands for support to control the intensity.',
      'If you feel any sharp knee pain, adjust your position or choose a different stretch.'
    ],
    modifications: {
      beginner: 'Sit on a cushion to elevate your hips. Do not press the back hip forward as much.',
      advanced: 'Try to lift your torso upright without using your hands for support. Fold forward over the front leg.',
      equipment_alternatives: {
        'None': '90/90 Stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit on floor, legs in a \'Z\' shape.',
        'Hands on floor for balance.'
      ],
      execution: [
        'Keep torso upright.',
        'Gently press the back hip forward.',
        'Feel the stretch in the hip flexor.',
        'Breathe and hold.'
      ],
      common_mistakes: [
        'Slouching or leaning heavily to one side.',
        'Forcing the knees to the floor.',
        'Feeling pain in the knees.'
      ],
      breathing: 'Breathe deeply to relax into the hip stretch.'
    }
  },
  'half-frog-stretch': {
    id: 'half-frog-stretch',
    name: 'Half Frog',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Groin',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Start by lying face down on your mat.',
      'Come up onto your forearms.',
      'Slide your right knee out to the side, in line with your right hip, keeping the knee bent at a 90-degree angle.',
      'Your left leg remains extended straight back.',
      'Flex your right foot.',
      'Gently press your hips down and slightly back to feel a stretch in your right inner thigh and groin.',
      'Hold the stretch. To release, slowly slide your right knee back to the starting position. Switch sides.'
    ],
    safetyNotes: [
      'Ease into the stretch slowly.',
      'If you feel any sharp pain in your knee or hip, back off.',
      'Keep your core engaged to prevent your lower back from sagging.'
    ],
    modifications: {
      beginner: 'Do not bring the knee up as high (not fully in line with the hip). Place a cushion under the bent knee.',
      advanced: 'Try to press your hips further back to deepen the stretch. Progress to the full Frog Stretch.',
      equipment_alternatives: {
        'None': 'Butterfly stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie face down, propped on forearms.',
        'Slide one knee out to the side, bent at 90 degrees.'
      ],
      execution: [
        'Flex the foot of the bent leg.',
        'Gently press hips down and back.',
        'Feel stretch in the inner thigh.',
        'Breathe and hold.'
      ],
      common_mistakes: [
        'Forcing the stretch.',
        'Letting the lower back sag.',
        'Not keeping the foot flexed.'
      ],
      breathing: 'Breathe deeply and slowly to help the muscles release.'
    }
  },
  'knee-hug-to-happy-baby': {
    id: 'knee-hug-to-happy-baby',
    name: 'Knee Hug to Happy Baby',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Groin',
      'Lower Back'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back.',
      'Inhale and hug both knees into your chest, wrapping your arms around your shins.',
      'Hold the knee hug for a breath.',
      'Exhale and transition to Happy Baby pose by grasping the outsides of your feet with your hands and drawing your knees towards your armpits.',
      'Hold Happy Baby for a breath.',
      'Inhale and release your feet to return to the knee hug.',
      'Continue flowing between the two poses.'
    ],
    safetyNotes: [
      'Keep the movements slow and controlled, synced with your breath.',
      'In Happy Baby, keep your lower back on the floor as much as possible.',
      'If you cannot reach your feet, grasp your ankles or shins.'
    ],
    modifications: {
      beginner: 'In Happy Baby, grasp behind your thighs instead of your feet.',
      advanced: 'In Happy Baby, add a gentle rock from side to side.',
      equipment_alternatives: {
        'None': 'This is a sequence of fundamental bodyweight movements.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'cycles'
    },
    coaching: {
      setup: [
        'Lie on your back.'
      ],
      execution: [
        'Inhale, hug knees to chest.',
        'Exhale, open into Happy Baby.',
        'Flow between the two poses.',
        'Keep upper body relaxed.'
      ],
      common_mistakes: [
        'Rushing the movement.',
        'Lifting the head and neck.',
        'Forcing the knees down in Happy Baby.'
      ],
      breathing: 'Inhale on the knee hug, exhale into Happy Baby.'
    }
  },

  'loop-band-standing-tricep-extension': {
    id: 'loop-band-standing-tricep-extension',
    name: 'Loop Band Standing Tricep Extension',
    category: 'strength',
    equipment: ['Loop Band'],
    muscleGroups: ['Triceps'],
    difficulty: 1,
    instructions: [
      'Anchor a loop band securely to a high point, like the top of a door or power rack.',
      'Stand facing the anchor point and grab the bottom of the band with both hands, using an overhand grip.',
      'Step back to create tension in the band. Stagger your feet for stability and hinge slightly at your hips.',
      'Start with your elbows bent and your hands near your chest.',
      'Keeping your elbows pinned to your sides, extend your arms fully downwards, squeezing your triceps at the bottom of the movement.',
      'Slowly return to the starting position with control.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'Ensure the band is securely anchored before beginning.',
      'Keep your elbows stationary; the movement should only come from the forearm.',
      'Control the band on the way up; do not let it snap back.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Stand closer to the anchor point.',
      advanced: 'Use a heavier resistance band. Take a step further back to increase tension.',
      equipment_alternatives: {
        'dumbbells': 'Overhead dumbbell tricep extension',
        'cable-machine': 'Cable tricep pushdowns',
        'bodyweight': 'Diamond push-ups'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Anchor band high. Grab with both hands and step back to create tension.',
        'Keep elbows tucked in at your sides.'
      ],
      execution: [
        'Press the band straight down until your arms are fully extended.',
        'Squeeze your triceps hard at the bottom.',
        'Slowly control the band back to the starting position.'
      ],
      common_mistakes: [
        'Letting the elbows flare out.',
        'Using body momentum to press the band down.',
        'Letting the band snap back up.'
      ],
      breathing: 'Exhale as you press down, inhale as you return.'
    }
  },

  'tate-press': {
    id: 'tate-press',
    name: 'Tate Press',
    category: 'strength',
    equipment: ['Dumbbells', 'Flat Bench'],
    muscleGroups: ['Triceps', 'Chest', 'Shoulders'],
    difficulty: 2,
    instructions: [
      'Lie flat on a bench with your feet firmly on the floor.',
      'Hold a dumbbell in each hand and press them up above your chest, similar to a dumbbell bench press starting position.',
      'Turn the dumbbells so your palms face your feet and the ends of the dumbbells touch.',
      'Keeping your upper arms stationary, bend at the elbows and lower the dumbbells towards the center of your chest.',
      'Your elbows should flare out to the sides.',
      'When the dumbbells are close to your chest, press them back up to the starting position by extending your elbows, squeezing your triceps.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'Use a weight you can control to avoid injury to the elbow joint.',
      'Keep the movement smooth and controlled, avoiding jerky motions.',
      'Ensure your back and hips remain on the bench.'
    ],
    modifications: {
      beginner: 'Use very light dumbbells to master the form.',
      advanced: 'Increase the weight. Add a pause at the bottom of the movement.',
      equipment_alternatives: {
        'cable-machine': 'Cable tricep pushdowns',
        'resistance-bands': 'Loop band tricep extensions',
        'bodyweight': 'Diamond push-ups'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Lie on a bench, dumbbells pressed up over your chest.',
        'Palms face forward, dumbbells touching.'
      ],
      execution: [
        'Bend your elbows, lowering the dumbbells to your mid-chest.',
        'Allow your elbows to point outwards.',
        'Powerfully extend your elbows to press the weight back up.',
        'Focus on the tricep contraction.'
      ],
      common_mistakes: [
        'Moving the upper arms (shoulders).',
        'Lowering the weight too quickly.',
        'Not getting a full range of motion.'
      ],
      breathing: 'Inhale as you lower the dumbbells, exhale as you press up.'
    }
  },

  'machine-tricep-dip': {
    id: 'machine-tricep-dip',
    name: 'Machine Tricep Dip',
    category: 'strength',
    equipment: ['Tricep Dip Machine'],
    muscleGroups: ['Triceps', 'Chest', 'Shoulders'],
    difficulty: 1,
    instructions: [
      'Sit on the tricep dip machine and adjust the seat so the handles are at chest level.',
      'Grasp the handles with a neutral grip (palms facing each other).',
      'Keep your chest up and your back straight against the pad.',
      'Press down on the handles until your arms are fully extended, but not locked out.',
      'Squeeze your triceps at the bottom of the movement.',
      'Slowly allow the handles to rise back to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'Set the weight appropriately. Do not use a weight so heavy that it compromises your form.',
      'Avoid letting your shoulders rise up towards your ears.',
      'Maintain a controlled movement throughout.'
    ],
    modifications: {
      beginner: 'Use a lighter weight.',
      advanced: 'Use a heavier weight. Slow down the eccentric (upward) phase of the movement.',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell tricep extensions',
        'resistance-bands': 'Loop band tricep extensions',
        'bodyweight': 'Diamond push-ups'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Adjust the seat and select your weight.',
        'Sit with your chest up and grab the handles.'
      ],
      execution: [
        'Press down until your arms are straight.',
        'Focus on squeezing the triceps.',
        'Control the weight as you return to the start.',
        'Keep your shoulders down and back.'
      ],
      common_mistakes: [
        'Using momentum.',
        'Shrugging the shoulders.',
        'Performing partial reps.'
      ],
      breathing: 'Exhale as you press down, inhale as you return.'
    }
  },

  'ez-bar-overhead-tricep-extension': {
    id: 'ez-bar-overhead-tricep-extension',
    name: 'EZ-Bar Overhead Tricep Extension',
    category: 'strength',
    equipment: ['EZ Bar', 'Bench (optional)'],
    muscleGroups: ['Triceps'],
    difficulty: 2,
    instructions: [
      'This can be performed standing or seated on a bench with back support.',
      'Grasp an EZ-bar with a close, overhand grip (hands about 6 inches apart).',
      'Lift the bar overhead so your arms are fully extended.',
      'Keeping your upper arms stationary and close to your head, slowly lower the bar behind your head by bending your elbows.',
      'Lower the bar as far as your mobility allows to get a good stretch in the triceps.',
      'Extend your elbows to raise the bar back to the starting position.',
      'Squeeze your triceps at the top.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'Keep your core engaged to prevent your back from arching.',
      'The movement should be controlled, especially when lowering the bar.',
      'Keep your elbows tucked in, not flaring out wide.'
    ],
    modifications: {
      beginner: 'Use a lighter weight. Perform seated with back support.',
      advanced: 'Increase the weight. Perform standing to engage more core stability.',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell overhead tricep extension',
        'cable-machine': 'Cable overhead tricep extension',
        'resistance-bands': 'Loop band tricep extensions'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Grasp the EZ-bar and lift it overhead with arms straight.',
        'Keep upper arms vertical and close to your head.'
      ],
      execution: [
        'Bend only at the elbows, lowering the bar behind your head.',
        'Get a deep stretch in your triceps.',
        'Extend your arms to lift the bar back to the start.',
        'Flex your triceps at the top.'
      ],
      common_mistakes: [
        'Flaring the elbows out too wide.',
        'Arching the lower back.',
        'Moving the upper arms during the lift.'
      ],
      breathing: 'Inhale as you lower the bar, exhale as you extend your arms.'
    }
  },

  'incline-barbell-skull-crusher': {
    id: 'incline-barbell-skull-crusher',
    name: 'Incline Barbell Skull Crusher',
    category: 'strength',
    equipment: ['Incline Bench', 'Barbell or EZ Bar'],
    muscleGroups: ['Triceps'],
    difficulty: 2,
    instructions: [
      'Set a bench to a 30-45 degree incline.',
      'Lie on the incline bench and hold a barbell or EZ-bar with a narrow, overhand grip.',
      'Extend your arms straight up over your chest.',
      'Keeping your upper arms stationary, bend at the elbows and slowly lower the bar towards the top of your forehead.',
      'Lower the bar until you feel a deep stretch in your triceps.',
      'Powerfully extend your elbows to press the bar back to the starting position.',
      'Squeeze your triceps at the top.',
      'Repeat for reps.'
    ],
    safetyNotes: [
      'Use a spotter if you are using a heavy weight.',
      'Control the weight at all times, especially when lowering it towards your head.',
      'Keep your elbows from flaring out too much.'
    ],
    modifications: {
      beginner: 'Use a light weight or an empty bar to learn the movement.',
      advanced: 'Increase the weight. Use a steeper incline for a greater stretch.',
      equipment_alternatives: {
        'dumbbells': 'Incline dumbbell tricep extension',
        'cable-machine': 'Cable tricep pushdowns',
        'resistance-bands': 'Loop band tricep extensions'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Lie on an incline bench, bar extended over your chest.',
        'Keep upper arms perpendicular to the floor.'
      ],
      execution: [
        'Bend only at the elbows, lowering the bar toward your forehead.',
        'Feel a good stretch in the triceps.',
        'Extend your elbows to press the bar back up.',
        'Focus on the tricep contraction.'
      ],
      common_mistakes: [
        'Moving the upper arms.',
        'Flaring elbows excessively.',
        'Lowering the weight too fast.'
      ],
      breathing: 'Inhale as you lower, exhale as you press up.'
    }
  },

  'dumbbell-tricep-extension': {
    id: 'dumbbell-tricep-extension',
    name: 'Dumbbell Tricep Extension',
    category: 'strength',
    equipment: ['Dumbbell', 'Flat Bench'],
    muscleGroups: ['Triceps'],
    difficulty: 2,
    instructions: [
      'This can be performed seated (as pictured) or standing.',
      'Sit on a bench, holding one dumbbell with both hands, gripping the top end of the dumbbell so it hangs vertically (cup the dumbbell head).',
      'Raise the dumbbell overhead so your arms are fully extended.',
      'Keeping your upper arms stationary and close to your head, slowly lower the dumbbell behind your head by bending your elbows.',
      'Lower the dumbbell as far as you can to get a deep stretch in the triceps.',
      'Extend your elbows to raise the dumbbell back to the starting position.',
      'Squeeze your triceps at the top.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'Keep your core engaged to prevent your back from arching.',
      'The movement should be controlled, especially when lowering the dumbbell.',
      'Keep your elbows tucked in, not flaring out wide.'
    ],
    modifications: {
      beginner: 'Use a lighter dumbbell. Perform seated with back support.',
      advanced: 'Increase the weight. Perform with two separate dumbbells.',
      equipment_alternatives: {
        'ez-bar': 'EZ-bar overhead tricep extension',
        'cable-machine': 'Cable overhead tricep extension',
        'resistance-bands': 'Loop band tricep extensions'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'repetitions'
    },
    coaching: {
      setup: [
        'Sit tall, holding one dumbbell overhead with both hands.',
        'Keep upper arms vertical and close to your head.'
      ],
      execution: [
        'Bend your elbows to lower the dumbbell behind your head.',
        'Feel the stretch.',
        'Press up by straightening your arms.',
        'Squeeze triceps at the top.'
      ],
      common_mistakes: [
        'Flaring elbows out.',
        'Arching the lower back.',
        'Not using a full range of motion.'
      ],
      breathing: 'Inhale as you lower, exhale as you press.'
    }
  },

  'dumbbell-squeeze-press': {
    id: 'dumbbell-squeeze-press',
    name: 'Dumbbell Squeeze Press',
    category: 'strength',
    equipment: ['Dumbbells', 'Flat Bench'],
    muscleGroups: ['Chest', 'Triceps'],
    difficulty: 2,
    instructions: [
      'Lie flat on a bench with your feet firmly on the floor.',
      'Hold a dumbbell in each hand with a neutral grip (palms facing each other) and press them together over your chest.',
      'Actively squeeze the dumbbells together throughout the entire movement.',
      'Slowly lower the dumbbells to your chest, keeping them pressed together.',
      'When the dumbbells touch your chest, press them back up to the starting position.',
      'Maintain the inward squeeze on the dumbbells at all times.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Focus on the squeeze to maintain tension; the weight of the dumbbells may be lighter than your standard dumbbell press.', 'Keep the movement controlled.', 'Ensure your back remains flat on the bench.'],
    modifications: {
      beginner: 'Use light dumbbells to master the squeezing motion.',
      advanced: 'Increase the weight. Perform on an incline bench to target the upper chest.',
      equipment_alternatives: {
        'weight-plates': 'Use weight plates pressed together (Svend press variation)',
        'resistance-bands': 'Use resistance bands with inward tension',
        'cable-machine': 'Cable fly with inward squeeze'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Lie on the bench and hold two dumbbells together over your chest.', 'Begin squeezing the dumbbells together.'],
      execution: ['While squeezing, lower the dumbbells to your chest.', 'Press them back up to the start, never releasing the inward pressure.', 'Focus on the chest contraction.'],
      common_mistakes: ['Stopping the squeeze at any point.', 'Letting the dumbbells drift apart.', 'Arching the back excessively.'],
      breathing: 'Inhale as you lower, exhale as you press.'
    }
  },

  'svend-press': {
    id: 'svend-press',
    name: 'Svend Press',
    category: 'strength',
    equipment: ['Weight Plates'],
    muscleGroups: ['Chest'],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet shoulder-width apart.',
      'Hold two small weight plates (e.g., 2.5kg or 5kg) and press them together between your flat palms at chest height.',
      'Your elbows should be bent and tucked in.',
      'Squeeze the plates together as hard as possible to create isometric tension in your chest.',
      'While maintaining the squeeze, press the plates straight out in front of you until your arms are fully extended.',
      'Slowly bring the plates back to your chest, never losing the inward pressure.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['The focus is on tension, not heavy weight. Start with light plates.', 'Keep your shoulders down and back; do not shrug.'],
    modifications: {
      beginner: 'Use just one light plate or even just press your palms together.',
      advanced: 'Use slightly heavier plates. Hold the extended position for a 2-second count.',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell squeeze press',
        'medicine-ball': 'Medicine ball squeeze press',
        'bodyweight': 'Palm press (hands together without weight)'
      }
    },
    metrics: { type: 'reps', defaultValue: 15, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Stand tall, holding two plates between your palms at your chest.', 'Squeeze the plates together forcefully.'],
      execution: ['Press the plates straight out, maintaining the squeeze.', 'Extend your arms fully.', 'Slowly pull the plates back to your chest.', 'The tension in your chest should be constant.'],
      common_mistakes: ['Relaxing the squeeze.', 'Shrugging the shoulders.', 'Using momentum.'],
      breathing: 'Exhale as you press out, inhale as you return.'
    }
  },

  'push-up-on-knees': {
    id: 'push-up-on-knees',
    name: 'Push Up on Knees',
    category: 'strength',
    equipment: ['Mat (optional)'],
    muscleGroups: ['Chest', 'Triceps', 'Shoulders', 'Core'],
    difficulty: 1,
    instructions: [
      'Start on all fours, then walk your hands forward until your body forms a straight line from your head to your knees.',
      'Your hands should be slightly wider than your shoulders.',
      'Engage your core to keep your back flat.',
      'Lower your body by bending your elbows, keeping them at about a 45-degree angle from your body.',
      'Lower until your chest is close to the floor.',
      'Press through your palms to push your body back up to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Do not let your hips sag or pike up; maintain a straight line.', 'Keep your neck in a neutral position by looking slightly ahead on the floor.'],
    modifications: {
      beginner: 'Perform against a wall or an elevated surface like a bench.',
      advanced: 'Progress to a standard push-up on your toes.',
      equipment_alternatives: {
        'resistance-bands': 'Assisted push-ups with bands',
        'trx': 'TRX assisted push-ups',
        'wall': 'Wall push-ups for easier progression'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Get into position with your body straight from head to knees.', 'Hands are placed slightly wider than shoulders.'],
      execution: ['Lower your chest towards the floor.', 'Keep your core tight and back flat.', 'Push back up to the starting position.'],
      common_mistakes: ['Sagging hips.', 'Flaring elbows out too wide.', 'Not achieving full range of motion.'],
      breathing: 'Inhale as you lower, exhale as you push up.'
    }
  },

  'dumbbell-pull-over': {
    id: 'dumbbell-pull-over',
    name: 'Dumbbell Pull Over',
    category: 'strength',
    equipment: ['Dumbbell', 'Flat Bench'],
    muscleGroups: ['Chest', 'Lats (Back)', 'Triceps', 'Serratus Anterior'],
    difficulty: 2,
    instructions: [
      'Lie on a flat bench with your head and upper back supported, and your feet firmly on the floor.',
      'Hold one dumbbell with both hands, cupping the top head of the dumbbell with your palms facing up.',
      'Position the dumbbell over your chest with a slight bend in your elbows.',
      'Keeping the slight bend in your elbows, slowly lower the dumbbell in an arc back behind your head.',
      'Lower it until you feel a good stretch in your chest and lats.',
      'Use your chest and lats to pull the dumbbell back up in the same arc to the starting position over your chest.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Use a weight you can control throughout the entire range of motion.', 'Do not allow your hips to rise off the bench.', 'Keep the bend in your elbows constant to avoid turning the exercise into a tricep extension.'],
    modifications: {
      beginner: 'Use a lighter weight. Reduce the range of motion.',
      advanced: 'Increase the weight. Slow down the eccentric (lowering) phase.',
      equipment_alternatives: {
        'barbell': 'Barbell pull-over',
        'cable-machine': 'Cable pull-over',
        'kettlebell': 'Kettlebell pull-over'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Lie on the bench, cupping one dumbbell over your chest.', 'Maintain a slight bend in your elbows.'],
      execution: ['Lower the dumbbell in an arc behind your head.', 'Feel a deep stretch in your chest and lats.', 'Pull the weight back over your chest using your chest and back muscles.', 'Keep the movement smooth and deliberate.'],
      common_mistakes: ['Bending the elbows too much.', 'Arching the lower back excessively.', 'Using a weight that is too heavy, causing loss of control.'],
      breathing: 'Inhale as you lower the dumbbell, exhale as you pull it over.'
    }
  },

  'leg-raise-with-dumbbell-pull-over': {
    id: 'leg-raise-with-dumbbell-pull-over',
    name: 'Leg Raise With Dumbbell Pull Over',
    category: 'strength',
    equipment: ['Dumbbell', 'Flat Bench'],
    muscleGroups: ['Abs (Core)', 'Chest', 'Lats (Back)'],
    difficulty: 3,
    instructions: [
      'Lie flat on a bench holding a light dumbbell in the pull-over position over your chest. Your legs should be extended straight off the end of the bench.',
      'Simultaneously perform a pull-over and a leg raise.',
      'As you lower the dumbbell in an arc behind your head, raise your straight legs up until they are perpendicular to the floor.',
      'As you pull the dumbbell back over your chest, slowly lower your legs back to the starting position.',
      'The goal is to keep your core engaged and your lower back from arching excessively.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['This is an advanced exercise. Master both movements separately first.', 'Use a light dumbbell.', 'Keep your core braced to protect your lower back. If you feel back strain, bend your knees.'],
    modifications: {
      beginner: 'Perform with bent knees instead of straight legs.',
      advanced: 'Try to keep the dumbbell and your feet from touching the bench/floor to maintain constant tension.',
      equipment_alternatives: {
        'cable-machine': 'Cable pull-over with leg raises',
        'resistance-bands': 'Band pull-over with leg raises',
        'bodyweight': 'Leg raises with arm movements'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Lie on the bench with legs extended, holding a light dumbbell over your chest.'],
      execution: ['Lower the dumbbell behind your head while raising your legs.', 'Pull the dumbbell over your chest while lowering your legs.', 'Keep the movement synchronized and controlled.', 'Brace your core throughout.'],
      common_mistakes: ['Arching the lower back.', 'Using momentum.', 'Losing coordination between the upper and lower body movements.'],
      breathing: 'Exhale as you raise your legs and lower the dumbbell; inhale as you reverse the motion.'
    }
  },

  'barbell-decline-bench-press': {
    id: 'barbell-decline-bench-press',
    name: 'Barbell Decline Bench Press',
    category: 'strength',
    equipment: ['Barbell', 'Decline Bench'],
    muscleGroups: ['Chest (Lower Pectorals)', 'Triceps', 'Shoulders'],
    difficulty: 2,
    instructions: [
      'Lie on a decline bench, securing your legs at the end.',
      'Grasp the barbell with a grip slightly wider than shoulder-width.',
      'Unrack the barbell and hold it straight over your lower chest with your arms locked.',
      'Slowly lower the barbell down to your lower chest, keeping your elbows tucked at about a 45-degree angle.',
      'Lightly touch the bar to your chest.',
      'Press the barbell back up to the starting position, squeezing your chest.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Using a spotter is highly recommended for this exercise.', 'Ensure your legs are securely locked in place to prevent sliding.', 'Control the weight on the descent; do not bounce it off your chest.'],
    modifications: {
      beginner: 'Use lighter weight. Use dumbbells for greater stability.',
      advanced: 'Increase the weight. Add a pause at the chest.',
      equipment_alternatives: {
        'dumbbells': 'Decline dumbbell press',
        'smith-machine': 'Smith machine decline press',
        'cable-machine': 'Decline cable press'
      }
    },
    metrics: { type: 'reps', defaultValue: 8, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Secure your legs on the decline bench.', 'Take a slightly wider than shoulder-width grip on the bar.', 'Unrack the weight over your lower chest.'],
      execution: ['Lower the bar with control to your lower chest.', 'Keep elbows tucked.', 'Drive the bar back up to the starting position.', 'Focus on contracting the lower part of your chest.'],
      common_mistakes: ['Bouncing the bar off the chest.', 'Flaring the elbows too wide.', 'Not controlling the eccentric phase.'],
      breathing: 'Inhale as you lower the bar, exhale as you press.'
    }
  },

  'incline-ez-bar-curl': {
    id: 'incline-ez-bar-curl',
    name: 'Incline EZ-Bar Curl',
    category: 'strength',
    equipment: ['Incline Bench', 'EZ Bar'],
    muscleGroups: ['Biceps (Long Head)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Set a bench to a 45-60 degree incline.',
      'Sit back on the incline bench with an EZ-bar resting on your thighs.',
      'Grasp the bar with an underhand grip, hands about shoulder-width apart.',
      'Allow your arms to hang straight down, perpendicular to the floor. This is your starting position.',
      'Keeping your upper arms stationary, curl the bar upwards towards your shoulders by contracting your biceps.',
      'Squeeze your biceps at the peak of the contraction.',
      'Slowly lower the bar back to the starting position with control.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Ensure your back is firmly pressed against the bench.', 'Avoid using momentum or swinging your body to lift the weight.', 'The incline places a great stretch on the bicep; use a lighter weight than you would for a standard curl to prevent injury.'],
    modifications: {
      beginner: 'Use a lower incline or dumbbells for easier handling.',
      advanced: 'Slow down the eccentric (lowering) phase to 3-4 seconds.',
      equipment_alternatives: {
        'dumbbells': 'Incline dumbbell curls',
        'cable-machine': 'Incline cable curls',
        'resistance-bands': 'Incline resistance band curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Sit back on an incline bench, holding the EZ-bar.', 'Let your arms hang straight down.'],
      execution: ['Keeping upper arms still, curl the weight up.', 'Squeeze the biceps at the top.', 'Lower the bar slowly and with control.', 'Feel the stretch at the bottom.'],
      common_mistakes: ['Lifting the shoulders off the bench.', 'Swinging the elbows forward.', 'Dropping the weight instead of lowering it with control.'],
      breathing: 'Exhale as you curl up, inhale as you lower.'
    }
  },

  'wide-grip-barbell-curl': {
    id: 'wide-grip-barbell-curl',
    name: 'Wide Grip Barbell Curl',
    category: 'strength',
    equipment: ['Barbell'],
    muscleGroups: ['Biceps (Short Head)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet shoulder-width apart, holding a barbell with a wide, underhand grip (hands wider than your shoulders).',
      'Keep your chest up and your shoulders back.',
      'Your arms should be fully extended with the barbell resting against your thighs.',
      'Keeping your upper arms stationary, curl the barbell up towards your shoulders.',
      'Focus on contracting your biceps, particularly the inner part (short head).',
      'Squeeze at the top of the movement.',
      'Slowly lower the barbell back to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Avoid using momentum or leaning back to lift the weight.', 'A wide grip can put more strain on the wrists; use a weight you can manage with good form.', 'Keep the movement strict.'],
    modifications: {
      beginner: 'Use a lighter weight or an empty barbell.',
      advanced: 'Increase the weight. Pause at the peak contraction for 2 seconds.',
      equipment_alternatives: {
        'dumbbells': 'Wide grip dumbbell curls',
        'cable-machine': 'Wide grip cable curls',
        'ez-bar': 'Wide grip EZ-bar curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Stand tall, holding a barbell with a wide underhand grip.'],
      execution: ['Curl the bar up while keeping your elbows pinned to your sides.', 'Focus the contraction on the short head of the bicep.', 'Lower the bar with full control.'],
      common_mistakes: ['Swinging the body.', 'Elbows coming too far forward.', 'Not using a full range of motion.'],
      breathing: 'Exhale as you curl up, inhale as you lower.'
    }
  },

  'barbell-bicep-drag-curl': {
    id: 'barbell-bicep-drag-curl',
    name: 'Barbell Bicep Drag Curl',
    category: 'strength',
    equipment: ['Barbell'],
    muscleGroups: ['Biceps', 'Brachialis'],
    difficulty: 2,
    instructions: [
      'Stand holding a barbell with an underhand, shoulder-width grip.',
      'Instead of curling the bar in an arc, focus on pulling your elbows back as you lift the bar.',
      'Drag the barbell straight up along the front of your torso.',
      'Keep the bar as close to your body as possible throughout the movement.',
      'Lift the bar as high as you can, which will likely be to your lower chest.',
      'Squeeze your biceps at the top.',
      'Slowly lower the bar by reversing the motion, keeping it close to your body.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['This exercise emphasizes peak contraction, so use a lighter weight than a standard barbell curl.', 'Focus on pulling the elbows back, not shrugging the shoulders.', 'The range of motion will be shorter than a standard curl.'],
    modifications: {
      beginner: 'Use an empty barbell to master the unique path of the bar.',
      advanced: 'Hold the peak contraction at the top for 2-3 seconds.',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell drag curls',
        'cable-machine': 'Cable drag curls',
        'smith-machine': 'Smith machine drag curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Stand tall, holding the barbell at your thighs.', 'Keep your chest up.'],
      execution: ['Pull your elbows back and drag the bar up your body.', 'Keep the bar close.', 'Squeeze your biceps hard at the highest point.', 'Lower with the same controlled dragging motion.'],
      common_mistakes: ['Letting the bar drift away from the body.', 'Curling in an arc instead of dragging.', 'Using too much weight.'],
      breathing: 'Exhale as you drag the bar up, inhale as you lower.'
    }
  },

  'spider-curls': {
    id: 'spider-curls',
    name: 'Spider Curls',
    category: 'strength',
    equipment: ['Incline Bench', 'Dumbbells or Barbell'],
    muscleGroups: ['Biceps (Short Head)'],
    difficulty: 2,
    instructions: [
      'Set an incline bench to about 45 degrees.',
      'Lie with your chest and stomach against the incline, with your feet planted firmly on the floor.',
      'Hold a dumbbell in each hand (or a barbell) with your arms hanging straight down, perpendicular to the floor.',
      'This is the starting position.',
      'Keeping your upper arms stationary, curl the weights up towards your shoulders.',
      'Focus on a strong contraction at the top of the movement.',
      'Slowly lower the weights back to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Because your chest is supported, it\'s difficult to cheat. Use a moderate weight.', 'Do not let your shoulders roll forward at the bottom of the movement.', 'Ensure a full range of motion, fully extending your arms at the bottom.'],
    modifications: {
      beginner: 'Use light dumbbells.',
      advanced: 'Alternate arms. Pause at the top for a 2-second squeeze.',
      equipment_alternatives: {
        'preacher-bench': 'Preacher curls',
        'cable-machine': 'Cable spider curls',
        'resistance-bands': 'Resistance band spider curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Lie chest-down on an incline bench.', 'Let your arms hang straight towards the floor holding the weights.'],
      execution: ['Curl the weights up without moving your upper arms.', 'Achieve a strong peak contraction.', 'Lower the weights all the way down until your arms are straight.'],
      common_mistakes: ['Swinging the weights.', 'Not using a full range of motion.', 'Lifting the chest off the bench.'],
      breathing: 'Exhale as you curl, inhale as you lower.'
    }
  },

  'concentration-curl': {
    id: 'concentration-curl',
    name: 'Concentration Curl',
    category: 'strength',
    equipment: ['Dumbbell', 'Bench'],
    muscleGroups: ['Biceps'],
    difficulty: 2,
    instructions: [
      'Sit on the edge of a bench with your feet flat on the floor and your knees wide apart.',
      'Hold a dumbbell in your right hand and lean forward, bracing the back of your right upper arm (tricep) against your right inner thigh.',
      'Your arm should be fully extended towards the floor. This is the starting position.',
      'Slowly curl the dumbbell up towards your shoulder, keeping your upper arm pressed against your thigh.',
      'Squeeze your bicep hard at the top of the curl.',
      'Slowly lower the dumbbell back to the starting position with full control.',
      'Complete all reps on one side before switching to the other.'
    ],
    safetyNotes: ['The braced arm position eliminates momentum, so use a moderate weight.', 'Avoid any swinging or body movement; the work should be done entirely by the bicep.', 'Do not rest your elbow on your thigh, but rather the back of the arm.'],
    modifications: {
      beginner: 'Use a lighter weight to perfect the form and isolation.',
      advanced: 'Add a supination twist as you curl (start with palm neutral, end with palm facing you).',
      equipment_alternatives: {
        'cable-machine': 'Cable concentration curls',
        'resistance-bands': 'Resistance band concentration curls',
        'kettlebell': 'Kettlebell concentration curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 0.1, unit: 'repetitions per side' },
    coaching: {
      setup: ['Sit on a bench, lean forward, and brace your upper arm against your inner thigh.', 'Let the dumbbell hang straight down.'],
      execution: ['Curl the weight up towards your shoulder.', 'Keep your upper arm completely still.', 'Squeeze the bicep at the top.', 'Lower slowly and completely.'],
      common_mistakes: ['Lifting the upper arm off the thigh.', 'Swinging the weight.', 'Not getting a full stretch at the bottom.'],
      breathing: 'Exhale as you curl, inhale as you lower.'
    }
  },

  'zottman-curl': {
    id: 'zottman-curl',
    name: 'Zottman Curl',
    category: 'strength',
    equipment: ['Dumbbells'],
    muscleGroups: ['Biceps', 'Brachialis', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand tall holding a dumbbell in each hand at your sides with an underhand grip (palms facing forward).',
      'Perform a standard bicep curl, bringing the dumbbells up towards your shoulders.',
      'At the top of the curl, pause and rotate your wrists so your palms are now facing forward (overhand grip).',
      'Slowly lower the dumbbells back to the starting position using this overhand grip. This is the eccentric reverse curl portion.',
      'At the bottom, rotate your wrists back to an underhand grip to begin the next rep.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Use a lighter weight than you would for a standard bicep curl, as the eccentric portion is more challenging.', 'Control the rotation at the top and bottom of the movement.', 'Keep elbows tucked to your sides.'],
    modifications: {
      beginner: 'Perform seated to focus on the arm path.',
      advanced: 'Slow down the eccentric (lowering) phase to 4-5 seconds.',
      equipment_alternatives: {
        'cable-machine': 'Cable Zottman curls',
        'resistance-bands': 'Resistance band Zottman curls',
        'barbell': 'Barbell Zottman curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Stand holding dumbbells with palms facing forward.'],
      execution: ['Curl the dumbbells up normally.', 'At the top, rotate your palms to face forward.', 'Lower the dumbbells slowly with the overhand grip.', 'At the bottom, rotate back to the start.'],
      common_mistakes: ['Rushing the rotation.', 'Using momentum.', 'Not controlling the eccentric portion.'],
      breathing: 'Exhale on the curl, inhale during the lowering phase.'
    }
  },

  'waiter-curls': {
    id: 'waiter-curls',
    name: 'Waiter Curls',
    category: 'strength',
    equipment: ['Dumbbell'],
    muscleGroups: ['Biceps'],
    difficulty: 1,
    instructions: [
      'Stand tall holding a single dumbbell horizontally with both hands, placing your palms flat against the underside of the top dumbbell head, as if carrying a tray.',
      'Your elbows should be bent at 90 degrees and kept tight to your sides.',
      'This is the starting position.',
      'Keeping your palms up and elbows stationary, curl the dumbbell up towards your chin.',
      'Focus on squeezing the biceps.',
      'Slowly lower the dumbbell back to the 90-degree starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Use a lighter dumbbell, as the grip is the main challenge.', 'Keep your wrists straight and strong; do not let them bend back.', 'The range of motion is shorter than a standard curl.'],
    modifications: {
      beginner: 'Use a very light dumbbell or even a weight plate.',
      advanced: 'Increase the weight. Pause at the peak contraction.',
      equipment_alternatives: {
        'weight-plate': 'Weight plate waiter curls',
        'kettlebell': 'Kettlebell waiter curls',
        'medicine-ball': 'Medicine ball waiter curls'
      }
    },
    metrics: { type: 'reps', defaultValue: 15, progressionRate: 0.1, unit: 'repetitions' },
    coaching: {
      setup: ['Hold a dumbbell like a tray with both palms flat underneath.', 'Start with elbows at 90 degrees, tucked in.'],
      execution: ['Curl the dumbbell upwards.', 'Keep palms flat and wrists straight.', 'Squeeze the biceps at the top.', 'Lower back to the 90-degree start with control.'],
      common_mistakes: ['Letting the wrists break.', 'Using momentum.', 'Letting elbows drift forward.'],
      breathing: 'Exhale as you curl up, inhale as you lower.'
    }
  },

  'muscle-snatch': {
    id: 'muscle-snatch',
    name: 'Muscle Snatch',
    category: 'strength',
    equipment: ['Barbell'],
    muscleGroups: ['Shoulders', 'Hamstrings', 'Glutes', 'Traps'],
    difficulty: 3,
    instructions: [
      'Stand with your feet hip-width apart and grab a barbell with a wide snatch grip.',
      'Start with the barbell at your hips.',
      'Initiate the movement by explosively extending your hips and knees, shrugging your shoulders powerfully.',
      'As the bar travels upwards, keep it close to your body.',
      'Unlike a power snatch, you do not re-bend the knees to catch the bar. Instead, you pull the bar all the way up into an overhead position with locked arms.',
      'The movement is slower and more controlled than a traditional snatch, focusing on muscular strength rather than explosive power.',
      'Lower the bar back to the starting position with control.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['This is an advanced technical lift. Master the components with a very light weight or PVC pipe first.', 'Maintain a neutral spine.', 'Focus on keeping the bar close to your body.'],
    modifications: {
      beginner: 'Use a PVC pipe or empty barbell. Practice the movement in segments.',
      advanced: 'Increase the weight.',
      equipment_alternatives: {
        'Barbell': 'Dumbbell High Pull'
      }
    },
    metrics: { type: 'reps', defaultValue: 5, progressionRate: 10, unit: 'repetitions' },
    coaching: {
      setup: ['Hold the barbell at your hips with a wide snatch grip.', 'Feet are hip-width apart.'],
      execution: ['Explode through the hips to drive the bar up.', 'Keep the bar close to your torso.', 'Use your arms and shoulders to pull the bar into the final overhead position.', 'Do not drop under the bar to catch it.'],
      common_mistakes: ['Letting the bar drift away from the body.', 'Trying to lift too much with just the arms.', 'Turning it into a reverse curl.'],
      breathing: 'Exhale forcefully as you drive the bar up.'
    }
  },

  'landmine-single-leg-romanian-deadlift': {
    id: 'landmine-single-leg-romanian-deadlift',
    name: 'Landmine Single Leg Romanian Deadlift',
    category: 'strength',
    equipment: ['Barbell', 'Landmine Attachment'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Core'],
    difficulty: 2,
    instructions: [
      'Place one end of a barbell into a landmine attachment. Hold the other end (the sleeve) with the hand on the same side as your standing leg.',
      'Stand on one leg, keeping it slightly bent.',
      'Hinge at your hip, lowering the end of the barbell towards the floor while extending your other leg straight back for balance.',
      'Keep your back straight and your core engaged.',
      'Lower until you feel a good stretch in your standing hamstring.',
      'Drive your hip forward to return to the starting position.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: ['The fixed path of the landmine provides more stability than a dumbbell.', 'Focus on the hip hinge, not on rounding your back.', 'Keep the movement slow and controlled.'],
    modifications: {
      beginner: 'Use just the barbell with no added weight.',
      advanced: 'Add weight to the barbell.',
      equipment_alternatives: {
        'Landmine Attachment': 'Single Leg Romanian Deadlift'
      }
    },
    metrics: { type: 'reps', defaultValue: 8, progressionRate: 15, unit: 'repetitions per side' },
    coaching: {
      setup: ['Stand on one leg, holding the end of the landmine barbell.', 'Maintain a soft knee.'],
      execution: ['Hinge forward, keeping your back flat.', 'Lower the bar along a fixed path.', 'Feel the stretch in the hamstring of your standing leg.', 'Squeeze your glute to return to the start.'],
      common_mistakes: ['Bending the back.', 'Losing balance.', 'Bending the knee too much.'],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'deadlift-to-calf-raise': {
    id: 'deadlift-to-calf-raise',
    name: 'Deadlift to Calf Raise',
    category: 'strength',
    equipment: ['Barbell', 'Dumbbells'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand with your feet hip-width apart, with a loaded barbell on the floor in front of you.',
      'Hinge at your hips and bend your knees to grip the bar with an overhand grip, hands just outside your shins.',
      'Keeping your back straight and chest up, drive through your heels to lift the weight, extending your hips and knees simultaneously.',
      'Once you are standing fully upright, perform a calf raise by rising onto the balls of your feet.',
      'Squeeze your calves at the top.',
      'Lower your heels back to the floor with control.',
      'Reverse the deadlift motion by hinging at your hips to lower the bar back to the floor.',
      'Repeat.'
    ],
    safetyNotes: ['Maintain proper deadlift form at all times to protect your back.', 'The calf raise should be performed only after you are in a stable, upright position.', 'Control the entire movement.'],
    modifications: {
      beginner: 'Use a lighter weight. Practice the deadlift and calf raise separately first.',
      advanced: 'Increase the weight. Hold the peak contraction of the calf raise.',
      equipment_alternatives: {
        'Barbell': 'Dumbbell Romanian Deadlift to Calf Raise'
      }
    },
    metrics: { type: 'reps', defaultValue: 8, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Set up for a conventional deadlift.', 'Back flat, chest up, hips down.'],
      execution: ['Lift the weight by driving through the floor.', 'Once you are standing tall, rise onto your toes.', 'Lower your heels with control.', 'Hinge to lower the weight back to the floor.'],
      common_mistakes: ['Rounding the back during the deadlift.', 'Being unstable during the calf raise.', 'Rushing the movement.'],
      breathing: 'Exhale as you lift, inhale and hold during calf raise, exhale as you lower the weight.'
    }
  },

  'alternating-heel-touch': {
    id: 'alternating-heel-touch',
    name: 'Alternating Heel Touch',
    category: 'strength',
    equipment: ['Mat (optional)'],
    muscleGroups: ['Obliques', 'Abs'],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent and your feet flat on the floor, about hip-width apart.',
      'Place your arms by your sides.',
      'Lift your head and shoulder blades slightly off the floor, engaging your abs.',
      'Reach your right hand to touch your right heel by crunching your right obliques.',
      'Return to the center and then reach your left hand to touch your left heel.',
      'Continue alternating sides in a controlled manner.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Keep your lower back on the floor.', 'The movement is a side-bend, not a twist.', 'Keep your neck in a neutral position; don\'t strain it.'],
    modifications: {
      beginner: 'Place your feet closer to your body to make the reach shorter.',
      advanced: 'Place your feet further away to increase the range of motion and difficulty.',
      equipment_alternatives: {}
    },
    metrics: { type: 'reps', defaultValue: 20, progressionRate: 25, unit: 'repetitions (10 per side)' },
    coaching: {
      setup: ['Lie on your back, knees bent, feet flat.', 'Lift your head and shoulders off the floor.'],
      execution: ['Crunch to the side to touch your right hand to your right heel.', 'Return to center.', 'Crunch to the left side to touch your left heel.', 'Keep your abs engaged throughout.'],
      common_mistakes: ['Pulling with the neck.', 'Lifting the lower back.', 'Rocking the hips.'],
      breathing: 'Exhale as you reach to the side.'
    }
  },

  'side-bridge': {
    id: 'side-bridge',
    name: 'Side Bridge',
    category: 'strength',
    equipment: ['Mat (optional)'],
    muscleGroups: ['Obliques', 'Core'],
    difficulty: 1,
    instructions: [
      'Lie on your side with your knees bent and stacked.',
      'Prop your upper body up on your forearm, ensuring your elbow is directly under your shoulder.',
      'Engage your core and lift your hips off the floor until your body forms a straight line from your head to your knees.',
      'Hold this position, focusing on keeping your hips high and not letting them sag.',
      'Hold for the desired duration, then switch sides.'
    ],
    safetyNotes: ['Keep your elbow directly beneath your shoulder to protect the joint.', 'Don\'t let your hips rotate forward or backward.'],
    modifications: {
      beginner: 'Hold for a shorter duration.',
      advanced: 'Progress to a full Side Plank by straightening your legs instead of bending them.',
      equipment_alternatives: {}
    },
    metrics: { type: 'time', defaultValue: 30, progressionRate: 15, unit: 'seconds per side' },
    coaching: {
      setup: ['Lie on your side, propped on your forearm with knees bent.'],
      execution: ['Lift your hips off the floor.', 'Create a straight line from your head to your knees.', 'Hold the position.', 'Don\'t let your hips drop.'],
      common_mistakes: ['Sagging hips.', 'Shoulder not aligned with elbow.', 'Holding breath.'],
      breathing: 'Breathe steadily throughout the hold.'
    }
  },

  'cocoon-crunch': {
    id: 'cocoon-crunch',
    name: 'Cocoon Crunch',
    category: 'strength',
    equipment: ['Mat (optional)'],
    muscleGroups: ['Abs (Rectus Abdominis)'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your legs extended straight and your arms extended overhead.',
      'This is the starting position.',
      'Simultaneously lift your knees and your upper body, bringing your knees towards your chest and your arms towards your shins, as if curling into a ball.',
      'Focus on contracting your abs to bring everything together.',
      'Slowly lower back to the starting position with control.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['The movement should be driven by your abdominal muscles, not by pulling with your neck or swinging your arms.', 'Control the eccentric (lowering) phase.'],
    modifications: {
      beginner: 'Keep your hands on the floor for support. Reduce the range of motion.',
      advanced: 'Try to touch your toes in a full V-Up or Jackknife Sit-Up.',
      equipment_alternatives: {}
    },
    metrics: { type: 'reps', defaultValue: 15, progressionRate: 20, unit: 'repetitions' },
    coaching: {
      setup: ['Lie on your back with legs and arms extended.', 'Keep your lower back pressed to the floor.'],
      execution: ['Simultaneously lift your knees and upper body.', 'Bring your knees to your chest and arms to your shins.', 'Contract your abs to curl into a ball.', 'Lower back to start with control.'],
      common_mistakes: ['Using momentum instead of muscle control.', 'Pulling with the neck.', 'Not engaging the core properly.'],
      breathing: 'Exhale as you crunch up, inhale as you lower.'
    }
  },

  'inverted-row': {
    id: 'inverted-row',
    name: 'Inverted Row',
    category: 'strength',
    equipment: ['Barbell', 'Power Rack or Smith Machine'],
    muscleGroups: ['Back (Lats, Rhomboids, Traps)', 'Biceps', 'Core'],
    difficulty: 2,
    instructions: [
      'Set a barbell in a power rack or Smith machine at about hip height.',
      'Lie on the floor under the bar. Grab the bar with an overhand grip, slightly wider than your shoulders.',
      'Position your body so it\'s in a straight line from your head to your heels, with your heels on the ground and arms fully extended.',
      'Engage your core and glutes.',
      'Pull your chest up towards the bar by retracting your shoulder blades and bending your elbows.',
      'Pause at the top when your chest touches or is close to the bar.',
      'Slowly lower your body back to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Keep your body rigid like a plank throughout the movement; do not let your hips sag.', 'The higher the bar is set, the easier the exercise will be.'],
    modifications: {
      beginner: 'Set the bar higher to make the angle more vertical. Bend your knees to 90 degrees with feet flat on the floor.',
      advanced: 'Lower the bar to be closer to the ground. Elevate your feet on a bench.',
      equipment_alternatives: {
        'Power Rack': 'TRX Rows',
        'Smith Machine': 'Suspension Trainer Rows'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Position yourself under a fixed bar, grabbing it with an overhand grip.', 'Form a straight line with your body, heels on the floor.'],
      execution: ['Pull your chest towards the bar.', 'Squeeze your shoulder blades together at the top.', 'Lower yourself with full control.', 'Keep your body rigid.'],
      common_mistakes: ['Sagging hips.', 'Not pulling through a full range of motion.', 'Using momentum to jerk the body up.'],
      breathing: 'Exhale as you pull up, inhale as you lower.'
    }
  },

  't-bar-row': {
    id: 't-bar-row',
    name: 'T-Bar Row',
    category: 'strength',
    equipment: ['T-Bar Row Machine or Barbell with Landmine'],
    muscleGroups: ['Back (Lats, Rhomboids)', 'Biceps', 'Lower Back'],
    difficulty: 2,
    instructions: [
      'Load the T-bar with the desired weight.',
      'Stand on the platform with your feet shoulder-width apart, straddling the bar.',
      'Hinge at your hips and bend your knees to grab the handles with a neutral or overhand grip.',
      'Keep your back straight and your chest up. This is the starting position.',
      'Pull the weight up towards your chest by driving your elbows back and squeezing your shoulder blades together.',
      'Keep your torso stationary.',
      'Pause at the peak contraction.',
      'Slowly lower the weight back to the starting position with control.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Maintain a flat back throughout the exercise to protect your spine.', 'Avoid using excessive momentum or jerking the weight up.', 'Start with a lighter weight to ensure proper form.'],
    modifications: {
      beginner: 'Use a lighter weight. Focus on the mind-muscle connection with your back.',
      advanced: 'Increase the weight. Use different handle attachments to vary the grip and muscle emphasis.',
      equipment_alternatives: {
        'T-Bar Row Machine': 'Barbell Bent Over Row',
        'Landmine': 'Dumbbell Bent Over Row'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Straddle the bar, hinge at your hips, and grab the handles with a flat back.'],
      execution: ['Pull the handles towards your chest.', 'Drive your elbows back and squeeze your lats.', 'Keep your chest up and torso still.', 'Lower the weight under full control.'],
      common_mistakes: ['Rounding the back.', 'Standing too upright.', 'Pulling with the arms instead of the back.'],
      breathing: 'Exhale as you row, inhale as you lower.'
    }
  },

  'renegade-row': {
    id: 'renegade-row',
    name: 'Renegade Row',
    category: 'strength',
    equipment: ['Dumbbells (hexagonal preferred)'],
    muscleGroups: ['Back (Lats)', 'Core', 'Shoulders', 'Biceps'],
    difficulty: 3,
    instructions: [
      'Place two dumbbells on the floor, about shoulder-width apart.',
      'Get into a high plank position, gripping the dumbbells with a neutral grip.',
      'Your feet should be wider than usual to create a stable base.',
      'Keeping your core tight and your body stable, row one dumbbell up towards your chest, leading with your elbow.',
      'Minimize rotation in your hips and torso.',
      'Lower the dumbbell back to the floor with control.',
      'Repeat the row on the other side.',
      'Continue alternating sides.'
    ],
    safetyNotes: ['Use hexagonal dumbbells for stability; round dumbbells can roll.', 'The primary challenge is anti-rotation; focus on keeping your torso parallel to the floor.', 'Use a lighter weight than you would for a standard dumbbell row.'],
    modifications: {
      beginner: 'Widen your stance significantly for more stability. Perform without dumbbells, just lifting your hand.',
      advanced: 'Add a push-up between each row.',
      equipment_alternatives: {
        'Dumbbells': 'Kettlebell Renegade Row'
      }
    },
    metrics: { type: 'reps', defaultValue: 16, progressionRate: 20, unit: 'repetitions (8 per side)' },
    coaching: {
      setup: ['Start in a high plank position, holding onto dumbbells.', 'Widen your feet for balance.'],
      execution: ['Row one dumbbell up to your side.', 'Keep your body as still as possible, avoid twisting.', 'Lower the dumbbell with control.', 'Alternate sides.'],
      common_mistakes: ['Twisting the hips and shoulders excessively.', 'Rushing the movement.', 'Using dumbbells that are too heavy, causing a loss of form.'],
      breathing: 'Exhale as you row, inhale as you lower.'
    }
  },

  'prone-ws': {
    id: 'prone-ws',
    name: 'Prone W\'s',
    category: 'strength',
    equipment: ['Mat (optional)'],
    muscleGroups: ['Upper Back (Rhomboids, Lower Traps)', 'Shoulders (Rotator Cuff)'],
    difficulty: 1,
    instructions: [
      'Lie face down on a mat with your forehead resting on the floor or a small towel.',
      'Extend your arms overhead and out to the sides, then bend your elbows to form a \'W\' shape with your arms.',
      'Your palms should be facing down.',
      'Keeping your neck relaxed, engage your upper back muscles to lift your arms off the floor.',
      'Squeeze your shoulder blades together and down.',
      'Hold the contraction for a moment.',
      'Slowly lower your arms back to the floor.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Keep your neck neutral and your forehead on the floor to avoid straining your neck.', 'The movement should be small and controlled, initiated from your back muscles.'],
    modifications: {
      beginner: 'Perform the movement with no hold at the top.',
      advanced: 'Hold the top position for 3-5 seconds. Hold very light weights (e.g., 0.5kg plates).',
      equipment_alternatives: {}
    },
    metrics: { type: 'reps', defaultValue: 15, progressionRate: 20, unit: 'repetitions' },
    coaching: {
      setup: ['Lie face down, arms in a \'W\' shape, palms down.'],
      execution: ['Squeeze your shoulder blades together to lift your arms off the floor.', 'Keep your head and neck relaxed.', 'Hold the squeeze.', 'Lower with control.'],
      common_mistakes: ['Lifting the chest or head.', 'Shrugging the shoulders up towards the ears.', 'Using momentum.'],
      breathing: 'Exhale as you lift your arms, inhale as you lower.'
    }
  },

  'straight-arm-pulldown': {
    id: 'straight-arm-pulldown',
    name: 'Straight-Arm Pulldown',
    category: 'strength',
    equipment: ['Cable Machine', 'Straight Bar or Rope Attachment'],
    muscleGroups: ['Lats (Back)'],
    difficulty: 2,
    instructions: [
      'Attach a straight bar or rope to a high pulley on a cable machine.',
      'Stand facing the machine, a few feet back, and grab the attachment with an overhand grip.',
      'Hinge slightly at your hips with your feet shoulder-width apart. Your arms should be extended in front of you.',
      'Keeping your arms straight with a very slight bend in the elbows, engage your lats to pull the bar down in an arc towards your thighs.',
      'Squeeze your lats at the bottom of the movement.',
      'Slowly return the bar to the starting position with control, feeling a stretch in your lats.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['This is an isolation exercise; keep your arms straight throughout. Do not turn it into a tricep pushdown.', 'The movement should be initiated by your back muscles, not your arms.'],
    modifications: {
      beginner: 'Use a lighter weight to focus on the mind-muscle connection.',
      advanced: 'Hold the peak contraction at the bottom for 2 seconds.',
      equipment_alternatives: {
        'Cable Machine': 'Resistance Band Pulldown'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Grab the bar from a high pulley and step back.', 'Hinge slightly at the hips, arms extended in front of you.'],
      execution: ['With straight arms, pull the bar down to your thighs.', 'Focus on using your lats to create the movement.', 'Squeeze your back at the bottom.', 'Control the bar back to the start.'],
      common_mistakes: ['Bending the elbows.', 'Using body momentum.', 'Standing too upright.'],
      breathing: 'Exhale as you pull down, inhale as you return.'
    }
  },

  'bird-dog-rows': {
    id: 'bird-dog-rows',
    name: 'Bird Dog Rows',
    category: 'strength',
    equipment: ['Dumbbell', 'Flat Bench'],
    muscleGroups: ['Back (Lats)', 'Core', 'Glutes', 'Shoulders'],
    difficulty: 3,
    instructions: [
      'Place your left knee and left hand on a flat bench. Hold a dumbbell in your right hand.',
      'Extend your right leg straight back behind you, keeping it parallel to the floor.',
      'Your torso should also be parallel to the floor, forming a stable \'tabletop\' position. This is the starting position.',
      'Engage your core to maintain balance.',
      'Perform a row by pulling the dumbbell up towards your chest, leading with your elbow.',
      'Keep your back straight and avoid rotation.',
      'Lower the dumbbell with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: ['This is an advanced exercise that requires significant core stability and balance.', 'Start with a very light weight.', 'Focus on keeping your hips and shoulders square to the floor.'],
    modifications: {
      beginner: 'Master the standard Bird Dog and standard Dumbbell Row separately first. Perform without weight to practice the balance.',
      advanced: 'Increase the weight.',
      equipment_alternatives: {
        'Flat Bench': 'Floor Bird Dog Rows'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 15, unit: 'repetitions per side' },
    coaching: {
      setup: ['Get into a Bird Dog position on a bench, one knee and one hand supporting you.', 'Hold a dumbbell in the free hand, and extend the opposite leg back.'],
      execution: ['Row the dumbbell up to your side.', 'Maintain balance and keep your core incredibly tight.', 'Don\'t let your hip or torso twist.', 'Lower with control.'],
      common_mistakes: ['Losing balance.', 'Twisting the torso.', 'Letting the extended leg drop.'],
      breathing: 'Exhale as you row, inhale as you lower.'
    }
  },

  'australian-chin-up': {
    id: 'australian-chin-up',
    name: 'Australian Chin Up',
    category: 'strength',
    equipment: ['Barbell', 'Squat Rack or Smith Machine'],
    muscleGroups: ['Back (Lats)', 'Biceps', 'Shoulders'],
    difficulty: 1,
    instructions: [
      'Set a bar in a squat rack or Smith machine at about waist height.',
      'Lie on the floor underneath the bar.',
      'Grasp the bar with an underhand (supinated) grip, about shoulder-width apart.',
      'Position your body in a straight line from head to heels, with your arms fully extended. Your body will be at an angle to the floor.',
      'Engage your core and glutes to keep your body rigid.',
      'Pull your chest towards the bar by driving your elbows down and back.',
      'Squeeze your biceps and back muscles at the top of the movement.',
      'Slowly lower your body back to the starting position with control.',
      'This is essentially an inverted row with an underhand grip.'
    ],
    safetyNotes: ['Keep your body in a straight line; do not let your hips sag.', 'A lower bar height increases the difficulty.', 'Control the movement, especially the lowering (eccentric) phase.'],
    modifications: {
      beginner: 'Set the bar higher to create a more upright body angle. Bend your knees to 90 degrees.',
      advanced: 'Lower the bar. Elevate your feet on a bench to make your body parallel to the floor.',
      equipment_alternatives: {
        'Squat Rack or Smith Machine': 'TRX Straps or Gymnastic Rings'
      }
    },
    metrics: { type: 'reps', defaultValue: 10, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Position yourself under a fixed bar with an underhand grip.', 'Form a rigid plank with your body.'],
      execution: ['Pull your chest to the bar.', 'Focus on squeezing your biceps and back.', 'Lower with control.', 'Keep your body straight.'],
      common_mistakes: ['Sagging hips.', 'Using momentum.', 'Not achieving a full range of motion.'],
      breathing: 'Exhale as you pull up, inhale as you lower.'
    }
  },

  'chin-up': {
    id: 'chin-up',
    name: 'Chin Up',
    category: 'strength',
    equipment: ['Pull Up Bar'],
    muscleGroups: ['Biceps', 'Back (Lats)'],
    difficulty: 2,
    instructions: [
      'Grasp a pull-up bar with an underhand (supinated) grip, with your hands about shoulder-width apart.',
      'Hang from the bar with your arms fully extended. You can keep your legs straight or bend your knees.',
      'Engage your core and pull your shoulder blades down and back.',
      'Pull your body up by driving your elbows down towards the floor.',
      'Continue until your chin is over the bar.',
      'Focus on a strong contraction in your biceps and lats.',
      'Slowly lower your body back to the fully extended starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Avoid using a kipping or swinging motion unless specifically training for it.', 'Start from a dead hang (full extension) to ensure full range of motion.', 'Control the descent; do not just drop.'],
    modifications: {
      beginner: 'Use an assisted pull-up machine or a loop band for assistance.',
      advanced: 'Add weight using a dip belt or a weighted vest.',
      equipment_alternatives: {
        'Pull Up Bar': 'TRX Straps or Gymnastic Rings'
      }
    },
    metrics: { type: 'reps', defaultValue: 8, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Grab the bar with a shoulder-width, underhand grip.', 'Hang with arms fully extended.'],
      execution: ['Drive your elbows down to pull your chin over the bar.', 'Lead with your chest.', 'Squeeze your biceps at the top.', 'Lower yourself all the way down with control.'],
      common_mistakes: ['Partial reps (not going all the way down).', 'Swinging.', 'Shoulders shrugging up by the ears.'],
      breathing: 'Exhale as you pull up, inhale as you lower.'
    }
  },

  'mixed-grip-pull-up': {
    id: 'mixed-grip-pull-up',
    name: 'Mixed Grip Pull Up',
    category: 'strength',
    equipment: ['Pull Up Bar'],
    muscleGroups: ['Back (Lats)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Grasp a pull-up bar with one hand in an overhand (pronated) grip and the other in an underhand (supinated) grip.',
      'Your hands should be about shoulder-width apart.',
      'Hang from the bar with your arms fully extended.',
      'Engage your core and pull your body upwards until your chin clears the bar.',
      'Slowly lower your body back to the starting position with control.',
      'Switch your grip on the next set to ensure balanced development.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['This grip can challenge the body asymmetrically, so focus on pulling evenly with both arms.', 'Always switch your grip between sets.', 'Avoid swinging or using momentum.'],
    modifications: {
      beginner: 'Use a loop band or an assisted pull-up machine.',
      advanced: 'Add weight with a weighted vest or dip belt.',
      equipment_alternatives: {
        'Pull Up Bar': 'TRX Straps or Gymnastic Rings'
      }
    },
    metrics: { type: 'reps', defaultValue: 6, progressionRate: 15, unit: 'repetitions per grip position' },
    coaching: {
      setup: ['Grab the bar with one palm facing you and one palm facing away.', 'Hang with arms fully extended.'],
      execution: ['Pull up until your chin is over the bar.', 'Try to pull evenly with both sides.', 'Lower yourself with full control.', 'Remember to switch your grip for the next set.'],
      common_mistakes: ['Twisting the body during the pull.', 'Uneven pulling.', 'Not using a full range of motion.'],
      breathing: 'Exhale as you pull, inhale as you lower.'
    }
  },

  'ring-row': {
    id: 'ring-row',
    name: 'Ring Row',
    category: 'strength',
    equipment: ['Gymnastic Rings'],
    muscleGroups: ['Back (Lats, Rhomboids)', 'Biceps', 'Core'],
    difficulty: 2,
    instructions: [
      'Set up gymnastic rings at about waist height.',
      'Grasp the rings and walk your feet forward until your body is at an incline.',
      'Start with your arms fully extended and your body in a straight plank position.',
      'Initiate the movement by pulling your chest towards your hands, retracting your shoulder blades.',
      'You can allow your hands to rotate naturally from a pronated to a neutral grip as you pull.',
      'Squeeze your back muscles at the top.',
      'Slowly lower yourself back to the starting position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['The instability of the rings requires greater core engagement.', 'Keep your body rigid; do not let your hips sag.', 'The more horizontal your body, the harder the exercise.'],
    modifications: {
      beginner: 'Stand more upright to decrease the resistance.',
      advanced: 'Walk your feet further forward to make your body more parallel to the floor. Elevate your feet on a box.',
      equipment_alternatives: {
        'Gymnastic Rings': 'TRX Straps or Suspension Trainer'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Grab the rings and lean back to create an incline.', 'Form a straight line from head to heels.'],
      execution: ['Pull your chest towards the rings.', 'Let your hands rotate naturally.', 'Squeeze your shoulder blades together.', 'Keep your body in a tight plank.', 'Lower with control.'],
      common_mistakes: ['Sagging hips.', 'Using a jerky motion.', 'Not getting a full range of motion.'],
      breathing: 'Exhale on the pull, inhale on the return.'
    }
  },

  'archer-pull-up': {
    id: 'archer-pull-up',
    name: 'Archer Pull Up',
    category: 'strength',
    equipment: ['Pull Up Bar'],
    muscleGroups: ['Back (Lats)', 'Biceps', 'Shoulders'],
    difficulty: 3,
    instructions: [
      'Grasp a pull-up bar with a wide overhand grip.',
      'Initiate a pull-up, but as you pull, focus on moving your body towards one hand.',
      'Pull your body up and over to the right side, aiming to get your chin near your right hand. Your left arm will be mostly straight at the top.',
      'Lower yourself back to the center starting position.',
      'On the next rep, pull up and over to the left side.',
      'Continue alternating sides.',
      'This is an advanced variation that places more load on one arm at a time.'
    ],
    safetyNotes: ['This is an advanced exercise. Ensure you can comfortably perform wide grip pull-ups first.', 'The movement requires significant shoulder stability and strength.', 'Control the movement; avoid jerky motions.'],
    modifications: {
      beginner: 'Practice by pulling slightly off-center during a regular pull-up. Use a resistance band.',
      advanced: 'Try to get your chest to touch your hand at the top. Keep the non-pulling arm as straight as possible.',
      equipment_alternatives: {
        'Pull Up Bar': 'Gymnastic Rings (more challenging due to instability)'
      }
    },
    metrics: { type: 'reps', defaultValue: 6, progressionRate: 15, unit: 'repetitions (3 per side)' },
    coaching: {
      setup: ['Take a wide grip on the pull-up bar.', 'Hang from a dead hang.'],
      execution: ['Pull your body up and towards your right hand.', 'Your left arm should straighten out.', 'Lower to the center.', 'Pull up and towards your left hand.', 'Control the entire movement.'],
      common_mistakes: ['Not achieving full range of motion.', 'Bending the \'assisting\' arm too much.', 'Losing control on the descent.'],
      breathing: 'Exhale as you pull up, inhale as you lower.'
    }
  },

  'front-squat': {
    id: 'front-squat',
    name: 'Front Squat',
    category: 'strength',
    equipment: ['Barbell', 'Squat Rack'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Core', 'Upper Back'],
    difficulty: 3,
    instructions: [
      'Set up a barbell in a squat rack at about shoulder height.',
      'Approach the bar and position it across the front of your shoulders. You can use a \'clean\' grip (fingertips under the bar, elbows high) or a \'bodybuilder\' grip (arms crossed, hands on top of the bar).',
      'Stand up to unrack the bar and take a couple of steps back.',
      'Place your feet shoulder-width apart, with toes pointing slightly out.',
      'Keeping your chest up and your back straight, descend into a squat by bending your knees and hips.',
      'Keep your elbows high throughout the movement.',
      'Go as deep as you can comfortably, ideally until your hips are below your knees.',
      'Drive through your heels to return to the standing position.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['The front rack position requires good mobility. If you have wrist or shoulder pain, work on mobility or use a different squat variation.', 'Focus on keeping your torso upright.', 'Use a weight you can control with perfect form.'],
    modifications: {
      beginner: 'Practice with an empty barbell. Use a goblet squat with a dumbbell as a precursor.',
      advanced: 'Increase the weight. Add a pause at the bottom of the squat.',
      equipment_alternatives: {
        'Barbell': 'Dumbbells (Goblet Squat)',
        'Squat Rack': 'Clean the weight from the floor'
      }
    },
    metrics: { type: 'reps', defaultValue: 8, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Set the bar on the front of your shoulders, elbows high.', 'Unrack the weight and set your stance.'],
      execution: ['Sit your hips straight down.', 'Keep your chest tall and elbows pointed forward.', 'Drive up through your feet.', 'Maintain an upright torso.'],
      common_mistakes: ['Letting the elbows drop, causing the bar to roll forward.', 'Rounding the upper back.', 'Not squatting to full depth.'],
      breathing: 'Inhale as you descend, exhale as you drive up.'
    }
  },

  'hack-squat': {
    id: 'hack-squat',
    name: 'Hack Squat',
    category: 'strength',
    equipment: ['Hack Squat Machine'],
    muscleGroups: ['Quadriceps', 'Glutes'],
    difficulty: 2,
    instructions: [
      'Position yourself in the hack squat machine with your back against the pad and your shoulders under the shoulder pads.',
      'Place your feet on the platform about shoulder-width apart.',
      'Release the safety handles.',
      'Slowly lower the weight by bending your knees until they reach about a 90-degree angle.',
      'Keep your back pressed firmly against the pad.',
      'Push through your heels to extend your legs and return to the starting position.',
      'Do not lock your knees at the top.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Ensure your back remains in contact with the pad throughout the movement.', 'Control the descent; don\'t let the weight drop.', 'Adjust foot position to target different areas (higher for glutes/hams, lower for quads).'],
    modifications: {
      beginner: 'Use light weight or just the sled.',
      advanced: 'Increase the weight. Slow down the eccentric (lowering) phase.',
      equipment_alternatives: {
        'Hack Squat Machine': 'Barbell Hack Squat or Goblet Squat'
      }
    },
    metrics: { type: 'reps', defaultValue: 12, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Position your body in the machine, feet shoulder-width apart on the platform.', 'Release the safety catches.'],
      execution: ['Lower the weight under control until your knees are at 90 degrees.', 'Keep your back flat against the pad.', 'Press the platform away by driving through your feet.', 'Squeeze your quads at the top.'],
      common_mistakes: ['Knees caving inward.', 'Lowering the weight too quickly.', 'Not using a full range of motion.'],
      breathing: 'Inhale as you lower, exhale as you press.'
    }
  },

  'trap-bar-deadlift': {
    id: 'trap-bar-deadlift',
    name: 'Trap Bar Deadlift',
    category: 'strength',
    equipment: ['Trap Bar'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings', 'Lower Back', 'Traps'],
    difficulty: 2,
    instructions: [
      'Stand in the center of a loaded trap bar with your feet hip-width apart.',
      'Hinge at your hips and bend your knees to grip the handles at your sides.',
      'Lower your hips so your back is straight, your chest is up, and your shoulders are over the bar.',
      'Keeping your back straight, drive through your heels and extend your hips and knees to stand up with the weight.',
      'Squeeze your glutes at the top.',
      'Reverse the motion by hinging at your hips first, then bending your knees to lower the bar back to the floor with control.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Maintain a flat back throughout the lift to prevent injury.', 'Keep the weight balanced and centered.', 'The neutral grip and mechanics make this generally safer on the lower back than a conventional deadlift.'],
    modifications: {
      beginner: 'Use a light weight to perfect the form. Use the higher handles if available.',
      advanced: 'Increase the weight. Use the lower handles to increase the range of motion.',
      equipment_alternatives: {
        'Trap Bar': 'Conventional Deadlift or Dumbbell Deadlift'
      }
    },
    metrics: { type: 'reps', defaultValue: 8, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Step inside the trap bar, feet hip-width apart.', 'Hinge and grip the handles, keeping your back flat and chest up.'],
      execution: ['Drive the floor away with your feet.', 'Stand up tall, pulling the weight with you.', 'Squeeze your glutes at the top.', 'Lower the bar with control by pushing your hips back.'],
      common_mistakes: ['Rounding the back.', 'Jerking the weight off the floor.', 'Letting the hips rise faster than the chest.'],
      breathing: 'Take a deep breath and brace at the bottom, exhale near the top of the lift.'
    }
  },

  'barbell-back-squat': {
    id: 'barbell-back-squat',
    name: 'Barbell Back Squat',
    category: 'strength',
    equipment: ['barbell', 'weight plates', 'squat rack (optional)'],
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes', 'calves', 'lower back', 'core'],
    difficulty: 3,
    instructions: [
      'Position the barbell on your upper back (trapezius muscles), not your neck.',
      'Stand with feet shoulder-width apart, toes slightly pointed out.',
      'Keep your chest up, core tight, and eyes forward.',
      'Initiate movement by pushing hips back and bending knees simultaneously.',
      'Lower until thighs are parallel to the ground or as deep as mobility allows.',
      'Drive through heels to return to standing position.'
    ],
    safetyNotes: [
      'Maintain a flat back and engaged core throughout the movement.',
      'Ensure proper form to avoid injury, especially with heavier weights.',
      'Use a spotter or safety bars when lifting heavy.',
      'Avoid hyperextending the back at the top of the movement.'
    ],
    modifications: {
      beginner: 'Goblet Squat (for technique), bodyweight squats, box squats (to learn depth)',
      advanced: 'Pause Squats, Front Squats, higher loads, accommodating resistance (bands/chains)',
      equipment_alternatives: {
        dumbbells: 'Goblet Squat, Dumbbell Squat',
        kettlebells: 'Goblet Squat, Kettlebell Squat',
        bodyweight: 'Bodyweight Squat, Jump Squat'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Bar positioned on upper traps, not neck.',
        'Feet shoulder-width apart, toes slightly out.',
        'Chest up, core tight, eyes forward.'
      ],
      execution: [
        'Initiate movement by pushing hips back and bending knees simultaneously.',
        'Keep knees tracking over toes.',
        'Maintain a stable core and upright torso throughout.',
        'Drive through heels to return to standing.'
      ],
      common_mistakes: [
        'Knees caving inward.',
        'Not reaching sufficient depth (crease below knee).',
        'Relying too much on the lower back.'
      ],
      breathing: 'Inhale on descent, brace core, exhale on ascent.'
    }
  },

  'barbell-deadlift': {
    id: 'barbell-deadlift',
    name: 'Barbell Deadlift',
    category: 'strength',
    equipment: ['barbell', 'weight plates'],
    muscleGroups: ['glutes', 'hamstrings', 'quadriceps', 'lower back', 'upper back', 'traps', 'forearms (grip)'],
    difficulty: 4,
    instructions: [
      'Stand with feet hip-width apart, bar over mid-foot.',
      'Bend at your hips and knees, grasping the bar with an overhand or mixed grip, hands just outside your shins.',
      'Keep your back straight, chest up, and shoulders slightly in front of the bar.',
      'Push through your heels, extending your hips and knees simultaneously to lift the bar off the floor.',
      'Pull the weight to an upright position, with shoulders back and legs straight.',
      'Hinge at your hips again to lower the barbell back to the ground in a controlled manner.'
    ],
    safetyNotes: [
      'Maintain a straight back throughout the lift; avoid rounding.',
      'Focus on feeling the work in your glutes and legs, not primarily your back.',
      'Proper form is crucial to prevent injury.',
      'Use a mixed grip (one hand pronated, one supinated) for better grip on heavier lifts, if preferred.'
    ],
    modifications: {
      beginner: 'Romanian Deadlift (RDL) (to learn hip hinge), Trap Bar Deadlift (easier to maintain neutral spine)',
      advanced: 'Deficit Deadlift, Rack Pull, accommodating resistance (bands/chains)',
      equipment_alternatives: {
        'trap-bar': 'Hex Bar Deadlift',
        dumbbells: 'Dumbbell RDL, Dumbbell Deadlift',
        kettlebells: 'Kettlebell Deadlift, Kettlebell RDL'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet hip-width, bar over mid-foot.',
        'Hips back, chest up, shoulders slightly in front of bar.',
        'Grip bar with straight arms, lats engaged.'
      ],
      execution: [
        'Initiate pull by driving through the heels and extending hips and knees simultaneously.',
        'Keep the bar close to the body throughout the lift.',
        'Finish by standing tall, squeezing glutes, without hyperextending the back.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Bar drifting away from body.',
        'Not engaging lats.',
        'Hyperextending at the top.'
      ],
      breathing: 'Inhale before the pull, brace core, exhale at the top or on descent.'
    }
  },

  'barbell-bench-press': {
    id: 'barbell-bench-press',
    name: 'Barbell Bench Press',
    category: 'strength',
    equipment: ['barbell', 'flat bench', 'squat rack (for spotting)'],
    muscleGroups: ['chest (pectorals)', 'shoulders (deltoids)', 'triceps'],
    difficulty: 3,
    instructions: [
      'Lie flat on a bench with your eyes looking directly up at the barbell.',
      'Feet are flat on the floor, head and buttocks must remain flat on the bench.',
      'Grasp the bar with a grip slightly wider than shoulder-width, fingers closed around the bar.',
      'Unrack the bar to full arm extension, then lower it in a controlled motion to your chest.',
      'Press the bar back to full arm extension without going down, until motionless.'
    ],
    safetyNotes: [
      'Always use a spotter when lifting heavy.',
      'Maintain a stable arch in your lower back, but ensure glutes remain on the bench.',
      'Keep elbows slightly tucked (around 45 degrees) to protect shoulders.'
    ],
    modifications: {
      beginner: 'Dumbbell Bench Press (for stability and range of motion), Push-ups',
      advanced: 'Close Grip Bench Press, Incline Bench Press, Pin Press, Floor Press',
      equipment_alternatives: {
        dumbbells: 'Dumbbell Bench Press',
        'resistance-bands': 'Resistance Band Chest Press',
        bodyweight: 'Push-ups'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat on bench, feet flat on floor, head and glutes on bench.',
        'Grip slightly wider than shoulder-width, bar over chest.',
        'Retract and depress shoulder blades.'
      ],
      execution: [
        'Lower bar to mid-chest in a controlled manner.',
        'Press bar explosively upwards to full lockout.',
        'Keep elbows slightly tucked (not flared wide).'
      ],
      common_mistakes: [
        'Bouncing bar off chest.',
        'Flaring elbows too wide.',
        'Partial range of motion.'
      ],
      breathing: 'Inhale as you lower the bar, exhale as you press up.'
    }
  },

  'pull-ups': {
    id: 'pull-ups',
    name: 'Pull-ups',
    category: 'strength',
    equipment: ['pull-up bar'],
    muscleGroups: ['lats', 'biceps', 'forearms', 'upper back', 'shoulders'],
    difficulty: 3,
    instructions: [
      'Hang from a pull-up bar with an overhand grip, hands slightly wider than shoulder-width.',
      'Engage your lats and pull your body upwards until your chin clears the bar.',
      'Lower your body back down in a controlled manner until your arms are fully extended.'
    ],
    safetyNotes: [
      'Avoid kipping (using momentum) if focusing on strict strength.',
      'Control the descent to prevent injury.',
      'Ensure the pull-up bar is securely mounted.'
    ],
    modifications: {
      beginner: 'Assisted pull-ups (resistance bands, machine), negative pull-ups (jump to top, slowly lower)',
      advanced: 'Weighted pull-ups, one-arm pull-ups, L-sit pull-ups',
      equipment_alternatives: {
        'resistance-bands': 'Banded pull-ups',
        machine: 'Lat Pulldown machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Overhand grip, hands slightly wider than shoulder-width.',
        'Full hang, shoulders depressed (not shrugging).'
      ],
      execution: [
        'Initiate pull with lats, thinking about pulling elbows down.',
        'Keep chest up and core engaged.',
        'Control the eccentric (lowering) phase.'
      ],
      common_mistakes: [
        'Using momentum (kipping).',
        'Not achieving full range of motion.',
        'Shrugging shoulders at bottom.'
      ],
      breathing: 'Exhale as you pull up, inhale as you lower down.'
    }
  },

  'barbell-overhead-press': {
    id: 'barbell-overhead-press',
    name: 'Barbell Overhead Press',
    category: 'strength',
    equipment: ['barbell', 'weight plates'],
    muscleGroups: ['shoulders (deltoids)', 'triceps', 'upper chest', 'upper back', 'core'],
    difficulty: 3,
    instructions: [
      'Stand with feet shoulder-width apart, holding a barbell at shoulder height.',
      'Grip the bar with hands slightly wider than shoulder-width, palms facing forward.',
      'Brace your core and press the barbell directly overhead until arms are fully extended.',
      'Lower the weight back to the starting position in a controlled manner.'
    ],
    safetyNotes: [
      'Maintain a neutral spine; avoid excessive arching of the lower back.',
      'Keep elbows slightly in front of the bar.',
      'Ensure adequate shoulder mobility before attempting heavy overhead presses.'
    ],
    modifications: {
      beginner: 'Dumbbell Shoulder Press, Landmine Shoulder Press, Kneeling Landmine Press',
      advanced: 'Push Press (using leg drive), Z Press',
      equipment_alternatives: {
        dumbbells: 'Dumbbell Shoulder Press',
        kettlebells: 'Kettlebell Overhead Press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Bar at shoulder height, grip slightly wider than shoulders.',
        'Elbows slightly forward, core braced.'
      ],
      execution: [
        'Press straight up, driving head slightly forward at the top.',
        'Lock out elbows fully.',
        'Control the eccentric phase.'
      ],
      common_mistakes: [
        'Excessive lower back arch.',
        'Flaring elbows out too wide.',
        'Not fully locking out at the top.',
        'Using too much leg drive (unless performing a push press).'
      ],
      breathing: 'Inhale before pressing, exhale as you press overhead.'
    }
  },

  'lunges': {
    id: 'lunges',
    name: 'Lunges',
    category: 'strength',
    equipment: ['none', 'dumbbells/kettlebells (optional)'],
    muscleGroups: ['quadriceps', 'hamstrings', 'glutes', 'calves', 'core'],
    difficulty: 2,
    instructions: [
      'Stand upright with feet hip-width apart.',
      'Step forward with one leg, lowering your hips until both knees are bent at about 90 degrees.',
      'Ensure your front knee is directly over your ankle and your torso remains upright.',
      'Push off the front foot to return to the starting position, or step through for walking lunges.',
      'Alternate legs.'
    ],
    safetyNotes: [
      'Keep your front knee aligned with your ankle; avoid letting it go past your toes.',
      'Maintain an upright torso; avoid leaning too far forward.',
      'Control the movement; do not let your knee slam into the ground.'
    ],
    modifications: {
      beginner: 'Reverse Lunges (easier for balance), shorter stride.',
      advanced: 'Walking Lunges, Weighted Lunges (dumbbells, kettlebells, barbell), Plyometric Lunges, Lunge with Rotation',
      equipment_alternatives: {
        dumbbells: 'Dumbbell Walking Lunge',
        kettlebells: 'Kettlebell Lunges',
        barbell: 'Barbell Lunges'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 2,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.',
        'Core engaged, shoulders back.'
      ],
      execution: [
        'Step forward into lunge position.',
        'Lower hips, not forward lean.',
        'Push through front heel to return.',
        'Maintain upright torso throughout.'
      ],
      common_mistakes: [
        'Front knee going past toes.',
        'Leaning forward excessively.',
        'Not going deep enough.',
        'Losing balance.'
      ],
      breathing: 'Inhale on descent, exhale on ascent.'
    }
  },

  'push-ups': {
    id: 'push-ups',
    name: 'Push-ups',
    category: 'strength',
    equipment: ['none'],
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 2,
    instructions: [
      'Start in a plank position with hands slightly wider than shoulder-width apart.',
      'Keep your body in a straight line from head to heels.',
      'Lower your chest towards the floor by bending your elbows.',
      'Push back up to the starting position, fully extending your arms.'
    ],
    safetyNotes: [
      'Maintain a straight body line; avoid sagging hips or piking up.',
      'Keep your core engaged throughout the movement.',
      'Don\'t let your elbows flare out too wide.'
    ],
    modifications: {
      beginner: 'Knee push-ups, incline push-ups (hands on elevated surface like a wall or bench).',
      advanced: 'Diamond push-ups, archer push-ups, single-arm push-ups, plyometric push-ups.',
      equipment_alternatives: {
        'resistance-bands': 'Resistance band chest press',
        dumbbells: 'Dumbbell chest press',
        barbell: 'Bench press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hands slightly wider than shoulders.',
        'Body in straight line from head to heels.',
        'Core engaged, glutes tight.'
      ],
      execution: [
        'Control the descent, keeping tension in the chest and triceps.',
        'Achieve full range of motion (chest to floor or near floor).',
        'Push explosively back up, squeezing chest at the top.'
      ],
      common_mistakes: [
        'Sagging hips.',
        'Flaring elbows too wide.',
        'Partial range of motion.',
        'Not engaging core.'
      ],
      breathing: 'Inhale down, exhale up.'
    }
  },

  'glute-strength-with-miniband': {
    id: 'glute-strength-with-miniband',
    name: 'Glute Strength with Miniband',
    category: 'strength',
    equipment: ['Miniband', 'Chair or Wall (for balance)'],
    muscleGroups: ['Glutes (Gluteus Medius)'],
    difficulty: 2,
    instructions: [
      'Place a miniband around your ankles or just above your knees (above knees is easier).',
      'Stand with your feet hip-width apart, with a slight bend in your knees and hips (athletic stance).',
      'You can hold onto a chair or wall for balance.',
      'Keeping your torso upright, shift your weight to your left leg.',
      'Slowly lift your right leg straight out to the side, leading with your heel.',
      'Go as far as you can without leaning your torso to the opposite side.',
      'Feel the contraction in the glute of the moving leg.',
      'Slowly return your leg to the starting position with control.',
      'This can be performed as a standing abduction (as described) or as lateral walks.'
    ],
    safetyNotes: [
      'Avoid leaning your upper body as you lift your leg; keep your core tight.',
      'The movement should be controlled, especially on the way back down.',
      'Ensure the band is flat and not rolled up.'
    ],
    modifications: {
      beginner: 'Place the band above the knees. Use a lighter resistance band. Use more support for balance.',
      advanced: 'Place the band around the ankles or feet. Use a heavier band. Perform without support for a balance challenge.',
      equipment_alternatives: {
        'None': 'Perform the movement without a band, focusing on activation (Side-Lying Leg Lifts).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'repetitions per side'
    },
    coaching: {
      setup: [
        'Place miniband around ankles or knees.',
        'Adopt a slight athletic stance.'
      ],
      execution: [
        'Shift weight to standing leg.',
        'Lift the other leg out to the side, keeping it straight.',
        'Squeeze the outer glute.',
        'Control the return.',
        'Do not lean your torso.'
      ],
      common_mistakes: [
        'Leaning the torso to the side.',
        'Using momentum instead of muscle control.',
        'Letting the band snap the leg back.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you return.'
    }
  },

  'toe-walks': {
    id: 'toe-walks',
    name: 'Toe Walks',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Calves', 'Feet'],
    difficulty: 1,
    instructions: [
      'Stand up tall.',
      'Rise up onto the balls of your feet, lifting your heels as high as possible.',
      'Keeping your heels lifted, walk forward taking small, controlled steps.',
      'Maintain your balance and keep your core engaged.',
      'Walk for the desired distance or time.'
    ],
    safetyNotes: [
      'Look straight ahead to help with balance.',
      'If you lose balance, lower your heels and reset.',
      'Avoid letting your ankles roll outwards.'
    ],
    modifications: {
      beginner: 'Walk for a shorter distance. Walk next to a wall for support.',
      advanced: 'Walk for a longer distance or hold light dumbbells.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere with adequate space.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 5,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall and rise up onto the balls of your feet.'
      ],
      execution: [
        'Keep heels high.',
        'Take small, deliberate steps forward.',
        'Stay tall and keep your core tight.',
        'Focus on balance.'
      ],
      common_mistakes: [
        'Letting heels drop.',
        'Taking large, unstable steps.',
        'Leaning forward or backward.'
      ],
      breathing: 'Breathe normally throughout the walk.'
    }
  },

  'heel-walks': {
    id: 'heel-walks',
    name: 'Heel Walks',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Tibialis Anterior (Shin Muscle)'],
    difficulty: 1,
    instructions: [
      'Stand up tall.',
      'Lift the front of both feet off the floor, so you are balancing on your heels.',
      'Pull your toes up towards your shins.',
      'Keeping your toes lifted, walk forward taking small, controlled steps on your heels.',
      'Maintain your balance and keep your posture upright.',
      'Walk for the desired distance or time.'
    ],
    safetyNotes: [
      'This can be challenging for balance; walk next to a wall for support if needed.',
      'Take small steps to maintain control.'
    ],
    modifications: {
      beginner: 'Walk for a shorter distance and use a wall for support.',
      advanced: 'Walk for a longer distance.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere with adequate space.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 5,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall and pull your toes up, balancing on your heels.'
      ],
      execution: [
        'Keep toes high.',
        'Take small, deliberate steps forward.',
        'Stay tall and use your arms for balance if needed.'
      ],
      common_mistakes: [
        'Letting toes drop.',
        'Losing balance.',
        'Bending forward at the waist.'
      ],
      breathing: 'Breathe normally throughout the walk.'
    }
  },

  'single-leg-jump': {
    id: 'single-leg-jump',
    name: 'Single-Leg Jump',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Calves', 'Glutes', 'Quadriceps', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Stand on one leg with a slight bend in your knee and hip.',
      'Swing your arms back to load the jump.',
      'Explosively jump straight up, swinging your arms forward for momentum.',
      'Focus on landing softly on the same leg, absorbing the impact by bending your ankle, knee, and hip.',
      'Stabilize yourself for a moment before performing the next jump.',
      'Repeat for reps, then switch legs.'
    ],
    safetyNotes: [
      'Master a two-legged jump before attempting a single-leg jump.',
      'The landing is the most important part; it must be soft and controlled.',
      'Start with small jumps and increase height as you get stronger.'
    ],
    modifications: {
      beginner: 'Start with small \'hops\'. Use a wall for balance.',
      advanced: 'Jump for maximum height. Progress to jumping onto a low, stable box.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere with adequate space and ceiling height.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 1,
      unit: 'repetitions per side'
    },
    coaching: {
      setup: [
        'Balance on one leg, knee bent.',
        'Use your arms to prepare.'
      ],
      execution: [
        'Jump up explosively.',
        'Land on the same leg like a ninja - softly and quietly.',
        'Absorb the force through your entire leg.',
        'Reset your balance before the next jump.'
      ],
      common_mistakes: [
        'Landing with a stiff leg.',
        'Letting the knee collapse inward on takeoff or landing.',
        'Losing balance upon landing.'
      ],
      breathing: 'Exhale on the jump, inhale on the landing.'
    }
  },

  'snatch-pull': {
    id: 'snatch-pull',
    name: 'Snatch Pull',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['hamstrings', 'glutes', 'back', 'traps'],
    difficulty: 5,
    instructions: [
      'Set up with wide grip, barbell on floor',
      'Pull explosively from floor, extending hips/knees',
      'Shrug shoulders at full extension',
      'Do not pull bar overhead'
    ],
    safetyNotes: ['Requires solid hip hinge and mobility'],
    modifications: {
      beginner: 'High pull with PVC',
      advanced: 'Full snatch from blocks'
    },
    metrics: {
      type: 'reps',
      defaultValue: 3,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: ['Wide grip', 'Bar over midfoot'],
      execution: ['Explosive hip drive', 'Keep bar close'],
      common_mistakes: ['Early arm bend', 'No shrug'],
      breathing: 'Inhale setup, exhale after lift'
    }
  },

  'back-squat': {
    id: 'back-squat',
    name: 'Back Squat',
    category: 'strength',
    equipment: ['Barbell', 'Squat rack', 'Weight plates'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core', 'Calves'],
    difficulty: 4,
    instructions: [
      'Set bar in squat rack at chest height.',
      'Position bar on upper back (high bar) or lower on rear delts (low bar).',
      'Step out from rack with feet shoulder-width apart.',
      'Initiate squat by pushing hips back and bending knees.',
      'Descend until hip crease is below knee cap.',
      'Drive through heels to return to standing position.',
      'Keep chest up and knees tracking over toes.',
      'Maintain neutral spine throughout movement.'
    ],
    safetyNotes: [
      'Use safety bars set just below lowest squat position.',
      'Warm up thoroughly with bodyweight squats.',
      'Learn proper depth and form before adding weight.',
      'Consider squat shoes for better ankle mobility.'
    ],
    modifications: {
      beginner: 'Start with bodyweight squats, then empty barbell.',
      advanced: 'Add weight progressively. Include pause squats and tempo variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Bar positioned correctly', 'Feet shoulder-width apart', 'Core engaged'],
      execution: ['Hips back first', 'Knees track over toes', 'Full depth'],
      common_mistakes: ['Knees cave inward', 'Forward lean', 'Insufficient depth'],
      breathing: 'Deep breath at top, hold during descent and ascent, exhale at top.'
    }
  },

  'overhead-squat': {
    id: 'overhead-squat',
    name: 'Overhead Squat',
    category: 'strength',
    equipment: ['Barbell or PVC pipe'],
    muscleGroups: ['Full Body', 'Core', 'Shoulders', 'Mobility'],
    difficulty: 4,
    instructions: [
      'Start with wide grip on barbell overhead.',
      'Press bar overhead with arms locked out.',
      'Keep bar directly over midfoot throughout movement.',
      'Descend into squat while maintaining overhead position.',
      'Keep chest up and arms locked throughout.',
      'Drive through heels to return to standing.',
      'Maintain active shoulders pressing bar up.',
      'Focus on mobility and stability over weight.'
    ],
    safetyNotes: [
      'Start with PVC pipe or empty barbell.',
      'Requires excellent shoulder and hip mobility.',
      'Progress very slowly with weight.',
      'Consider overhead squat as assessment tool first.'
    ],
    modifications: {
      beginner: 'Use PVC pipe. Work on mobility and basic pattern.',
      advanced: 'Add light weight gradually. Focus on perfect form.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Wide grip', 'Bar overhead', 'Active shoulders'],
      execution: ['Bar stays over midfoot', 'Arms locked', 'Full squat depth'],
      common_mistakes: ['Bar drifts forward', 'Elbows bend', 'Poor depth'],
      breathing: 'Controlled breathing while maintaining overhead stability.'
    }
  },

  'bench-press': {
    id: 'bench-press',
    name: 'Bench Press',
    category: 'strength',
    equipment: ['Barbell', 'Bench', 'Weight plates', 'Safety bars/spotter'],
    muscleGroups: ['Chest', 'Shoulders', 'Triceps'],
    difficulty: 3,
    instructions: [
      'Lie on bench with eyes under the bar.',
      'Grip bar slightly wider than shoulder-width.',
      'Plant feet firmly on floor, engage core.',
      'Unrack bar and position over chest.',
      'Lower bar to chest with control.',
      'Press bar back to starting position.',
      'Keep shoulders back and down throughout.',
      'Maintain tight core and stable base.'
    ],
    safetyNotes: [
      'Always use safety bars or have a spotter.',
      'Warm up with lighter weights.',
      'Don\'t bounce bar off chest.',
      'Learn proper unracking and reracking.'
    ],
    modifications: {
      beginner: 'Start with empty bar or dumbbells. Focus on range of motion.',
      advanced: 'Add weight progressively. Include pause bench and variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Eyes under bar', 'Feet planted', 'Shoulders back'],
      execution: ['Controlled descent', 'Full range of motion', 'Stable base'],
      common_mistakes: ['Bouncing off chest', 'Feet off ground', 'Shoulders rolling forward'],
      breathing: 'Deep breath before descent, hold during press, exhale at top.'
    }
  },

  'overhead-press': {
    id: 'overhead-press',
    name: 'Overhead Press',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates'],
    muscleGroups: ['Shoulders', 'Triceps', 'Core', 'Upper Back'],
    difficulty: 3,
    instructions: [
      'Start with bar in front rack position at shoulders.',
      'Stand with feet hip-width apart, core engaged.',
      'Press bar straight up, keeping it close to face.',
      'Lock out arms overhead with bar over midfoot.',
      'Lower bar with control back to starting position.',
      'Keep core tight throughout movement.',
      'Don\'t lean back excessively during press.',
      'Maintain neutral spine alignment.'
    ],
    safetyNotes: [
      'Warm up shoulders thoroughly before pressing.',
      'Start with empty bar to learn movement.',
      'Don\'t press behind neck.',
      'Watch for lower back compensation.'
    ],
    modifications: {
      beginner: 'Start with empty bar or dumbbells. Focus on vertical bar path.',
      advanced: 'Add weight gradually. Include push press variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Front rack position', 'Core engaged', 'Neutral spine'],
      execution: ['Straight bar path', 'Lock out overhead', 'Control descent'],
      common_mistakes: ['Bar drifts forward', 'Excessive back arch', 'Incomplete lockout'],
      breathing: 'Breath at bottom, hold during press, exhale at lockout.'
    }
  },

  'clean': {
    id: 'clean',
    name: 'Clean',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates', 'Olympic lifting platform'],
    muscleGroups: ['Full Body', 'Power', 'Explosive'],
    difficulty: 4,
    instructions: [
      'Start with bar on floor, feet hip-width apart.',
      'Grip bar with hands just outside legs.',
      'First pull: lift bar to knee level keeping back angle constant.',
      'Second pull: explosive hip extension and shoulder shrug.',
      'Pull yourself under the bar as it rises.',
      'Catch bar in front rack position in quarter squat.',
      'Stand up to complete the clean.',
      'Lower bar to floor with control.'
    ],
    safetyNotes: [
      'Learn technique with empty bar or PVC pipe.',
      'Requires coaching for proper form.',
      'Use Olympic lifting platform if available.',
      'Build up weight very gradually.'
    ],
    modifications: {
      beginner: 'Practice power cleans from hang position. Focus on technique.',
      advanced: 'Full squat cleans, add weight progressively.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 3,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Proper deadlift setup', 'Hook grip recommended'],
      execution: ['Two-phase pull', 'Explosive hip extension', 'Quick turnover'],
      common_mistakes: ['Arm pull too early', 'Poor catch position', 'Incomplete hip extension'],
      breathing: 'Deep breath before lift, controlled breathing throughout.'
    }
  },

  'snatch': {
    id: 'snatch',
    name: 'Snatch',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates', 'Olympic lifting platform'],
    muscleGroups: ['Full Body', 'Power', 'Mobility', 'Coordination'],
    difficulty: 4,
    instructions: [
      'Start with wide grip (arms straight when bar at hip crease).',
      'Begin with same deadlift position as clean.',
      'First pull to knee level maintaining back angle.',
      'Second pull with explosive hip extension.',
      'Pull yourself under bar as it rises overhead.',
      'Catch bar overhead in deep squat position.',
      'Stand up with bar locked out overhead.',
      'Lower bar to floor with control.'
    ],
    safetyNotes: [
      'Most technical lift - requires extensive coaching.',
      'Start with overhead squat mobility work.',
      'Use PVC pipe for months before adding weight.',
      'Requires Olympic lifting platform and bumper plates.'
    ],
    modifications: {
      beginner: 'Power snatch from hang, overhead squat work.',
      advanced: 'Full squat snatch, complex training.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'reps',
      defaultValue: 2,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Wide grip', 'Good deadlift position', 'Active shoulders'],
      execution: ['Explosive second pull', 'Quick turnover', 'Stable overhead catch'],
      common_mistakes: ['Grip too narrow', 'Poor overhead position', 'Incomplete hip extension'],
      breathing: 'Deep breath before lift, hold during explosive phase.'
    }
  },

  'clean-and-jerk': {
    id: 'clean-and-jerk',
    name: 'Clean and Jerk',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates', 'Olympic platform'],
    muscleGroups: ['Full Body', 'Power', 'Coordination'],
    difficulty: 4,
    instructions: [
      'Perform clean as described above.',
      'Rest bar in front rack position briefly.',
      'Dip knees slightly keeping torso upright.',
      'Drive explosively through legs to launch bar up.',
      'Split or squat under bar as it rises.',
      'Catch bar locked out overhead.',
      'Recover feet to parallel position.',
      'Lower bar to shoulders, then to floor.'
    ],
    safetyNotes: [
      'Master clean and overhead press first.',
      'Learn split jerk footwork without weight.',
      'Requires extensive technical coaching.',
      'Progress weight very slowly.'
    ],
    modifications: {
      beginner: 'Power clean + push press. Focus on components.',
      advanced: 'Full clean + split jerk, add weight gradually.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'reps',
      defaultValue: 2,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Master individual components', 'Proper timing'],
      execution: ['Clean, then reset', 'Explosive jerk drive', 'Stable overhead catch'],
      common_mistakes: ['Poor front rack position', 'Timing issues', 'Incomplete lockout'],
      breathing: 'Breathe between clean and jerk, hold during jerk.'
    }
  },

  'thrusters': {
    id: 'thrusters',
    name: 'Thrusters',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates'],
    muscleGroups: ['Full Body', 'Legs', 'Shoulders', 'Core'],
    difficulty: 3,
    instructions: [
      'Start with bar in front rack position.',
      'Perform a front squat to full depth.',
      'As you stand up, use leg drive to help press bar overhead.',
      'Lock out arms completely at the top.',
      'Lower bar back to front rack position.',
      'Immediately descend into next squat.',
      'Keep core engaged throughout entire movement.',
      'Use momentum from legs to assist press.'
    ],
    safetyNotes: [
      'Master front squat and overhead press separately first.',
      'Start with lighter weight than either movement alone.',
      'Maintain good front rack position throughout.'
    ],
    modifications: {
      beginner: 'Use empty bar or dumbbells. Break into components if needed.',
      advanced: 'Add weight or increase reps for conditioning.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Good front rack', 'Core engaged', 'Feet shoulder-width'],
      execution: ['Full squat depth', 'Explosive stand', 'Complete lockout'],
      common_mistakes: ['Poor front rack', 'Pressing without leg drive', 'Incomplete lockout'],
      breathing: 'Breathe at top, hold during squat, exhale during press.'
    }
  },

  'push-jerk': {
    id: 'push-jerk',
    name: 'Push Jerk',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates'],
    muscleGroups: ['Shoulders', 'Legs', 'Core', 'Power'],
    difficulty: 4,
    instructions: [
      'Start with bar in front rack position.',
      'Dip knees keeping torso perfectly upright.',
      'Drive explosively through legs to launch bar.',
      'As bar rises, drop into partial squat under it.',
      'Catch bar with arms locked out overhead.',
      'Stand up to complete the movement.',
      'Lower bar to shoulders with control.',
      'Reset for next repetition.'
    ],
    safetyNotes: [
      'Master push press before attempting push jerk.',
      'Practice receiving position without weight.',
      'Requires good timing and coordination.'
    ],
    modifications: {
      beginner: 'Focus on push press, practice overhead squat separately.',
      advanced: 'Progress to split jerk, increase weight gradually.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 4,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Perfect front rack', 'Upright dip position'],
      execution: ['Explosive drive', 'Quick drop under', 'Stable catch'],
      common_mistakes: ['Poor dip position', 'Slow turnover', 'Unstable catch'],
      breathing: 'Breathe before dip, hold during explosive phase.'
    }
  },

  'split-jerk': {
    id: 'split-jerk',
    name: 'Split Jerk',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates'],
    muscleGroups: ['Full Body', 'Power', 'Balance', 'Coordination'],
    difficulty: 4,
    instructions: [
      'Start with bar in front rack position.',
      'Dip knees keeping torso vertical.',
      'Drive explosively through legs.',
      'As bar rises, split feet front and back.',
      'Front foot steps forward, back foot steps back.',
      'Catch bar overhead with arms locked.',
      'Recover by stepping front foot back halfway.',
      'Then step back foot forward to parallel.'
    ],
    safetyNotes: [
      'Practice split position without weight first.',
      'Master push jerk before split jerk.',
      'Requires excellent timing and foot speed.'
    ],
    modifications: {
      beginner: 'Practice split position holds. Use push jerk first.',
      advanced: 'Add weight gradually. Include from blocks.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 3,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Good front rack', 'Know split stance'],
      execution: ['Explosive drive', 'Fast split', 'Stable catch'],
      common_mistakes: ['Poor split timing', 'Uneven split stance', 'Unstable catch'],
      breathing: 'Deep breath before dip, hold during split.'
    }
  },

  'sumo-deadlift': {
    id: 'sumo-deadlift',
    name: 'Sumo Deadlift',
    category: 'strength',
    equipment: ['Barbell', 'Weight plates'],
    muscleGroups: ['Glutes', 'Quadriceps', 'Hamstrings', 'Back'],
    difficulty: 4,
    instructions: [
      'Stand with feet wider than shoulder-width apart.',
      'Toes pointed out at 30-45 degree angle.',
      'Grip bar with hands inside legs, narrow grip.',
      'Keep chest up and back straight.',
      'Drive through heels and extend hips and knees.',
      'Keep bar close to body throughout lift.',
      'Stand tall at the top with shoulders back.',
      'Lower with control maintaining form.'
    ],
    safetyNotes: [
      'Requires good hip mobility for wide stance.',
      'Start with conventional deadlift form first.',
      'Gradually work into wider stance.'
    ],
    modifications: {
      beginner: 'Start with moderate stance width. Focus on form.',
      advanced: 'Optimize stance width. Add deficit or block pulls.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 5,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Wide stance', 'Toes out', 'Narrow grip'],
      execution: ['Drive through heels', 'Bar close to body', 'Chest up'],
      common_mistakes: ['Stance too wide', 'Knees cave in', 'Bar drifts forward'],
      breathing: 'Deep breath at top, hold during lift, exhale at completion.'
    }
  },

  'trx-squat': {
    id: 'trx-squat',
    name: 'TRX Squat',
    category: 'strength',
    equipment: ['TRX'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Adjust the TRX straps to about mid-length.',
      'Stand facing the anchor point, holding the handles with your palms facing each other.',
      'Lean back slightly until there is light tension on the straps, with your arms extended.',
      'Position your feet shoulder-width apart.',
      'Keeping your chest up, lower your hips down and back into a squat.',
      'Use the TRX straps for balance and support.',
      'Go as deep as you comfortably can.',
      'Drive through your heels to return to the starting position, pulling lightly on the straps to assist if needed.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: ['Keep light tension on the straps throughout; do not let them go slack.', 'Maintain a straight back and an upright chest.', 'The TRX provides support, allowing for a deeper and more controlled squat.'],
    modifications: {
      beginner: 'Rely more on the straps for support. Don\'t squat as deep.',
      advanced: 'Progress to a single-leg TRX squat. Use the straps for balance only, not for assistance in pulling yourself up.',
      equipment_alternatives: {
        'TRX': 'Gymnastic Rings or Suspension Trainer'
      }
    },
    metrics: { type: 'reps', defaultValue: 15, progressionRate: 15, unit: 'repetitions' },
    coaching: {
      setup: ['Hold TRX handles and lean back with light tension.', 'Set your feet for a squat.'],
      execution: ['Sit back and down into a deep squat.', 'Keep your chest up and use the straps for balance.', 'Drive through your feet to stand back up.', 'Keep your arms relatively straight.'],
      common_mistakes: ['Pulling too much with the arms.', 'Leaning too far forward.', 'Letting the knees collapse inward.'],
      breathing: 'Inhale as you squat down, exhale as you stand up.'
    }
  },

  'single-leg-squat': {
    id: 'single-leg-squat',
    name: 'Single Leg Squat',
    category: 'strength',
    equipment: ['Bodyweight'],
    muscleGroups: ['Glutes', 'hips', 'hamstrings', 'calves', 'quads'],
    difficulty: 4,
    instructions: [
      'Stand on one foot with your other leg bent at the knee.',
      'Once you\'re balanced on one leg, squat down as low as you can without losing your form (or toppling over).',
      'Don\'t let your standing knee go past the front of your toes while you squat.',
      'Pause at the bottom of the squat for a second, then push back up through your heel, squeezing your glutes as you go.'
    ],
    safetyNotes: [
      'Focus on a single point in front of you to maintain balance.',
      'Perform this exercise next to a wall or sturdy object for support if needed.'
    ],
    modifications: {
      beginner: 'Use a TRX or hold onto a wall for support. Limit the range of motion.',
      advanced: 'Hold the raised leg straight out in front (Pistol Squat). Add a light dumbbell for extra resistance.',
      equipment_alternatives: {
        'trx': 'TRX assisted single-leg squats',
        'wall': 'Wall-assisted single-leg squats'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 10,
      unit: 'repetitions per leg'
    },
    coaching: {
      setup: ['Balance on one leg, keeping your core tight and torso upright.'],
      execution: ['Lower your hips back and down, keeping the standing knee stable.', 'Push through your heel to return to the starting position.'],
      common_mistakes: ['Wobbling excessively.', 'Letting the knee of the standing leg collapse inward.', 'Using momentum instead of controlled strength.'],
      breathing: 'Inhale as you lower, exhale as you push up.'
    }
  }
,

  'single-leg-squat': {
    'id': 'single-leg-squat',
    'name': 'Single Leg Squat',
    'category': 'strength',
    'equipment': [
        'Bodyweight'
    ],
    'muscleGroups': [
        'Glutes',
        'hips',
        'hamstrings',
        'calves',
        'quads'
    ],
    'difficulty': 4,
    'instructions': [
        'Stand on one foot with your other leg bent at the knee.',
        'Once you are balanced on one leg, squat down as low as you can without losing your form (or toppling over).',
        'Do not let your standing knee go past the front of your toes while you squat.',
        'Pause at the bottom of the squat for a second, then push back up through your heel, squeezing your glutes as you go.'
    ],
    'safetyNotes': [
        'Focus on a single point in front of you to maintain balance.',
        'Perform this exercise next to a wall or sturdy object for support if needed.'
    ],
    'modifications': {
        'beginner': 'Use a TRX or hold onto a wall for support. Limit the range of motion.',
        'advanced': 'Hold the raised leg straight out in front (Pistol Squat). Add a light dumbbell for extra resistance.',
        'equipment_alternatives': {
            'trx': 'TRX assisted single-leg squats',
            'wall': 'Wall-assisted single-leg squats'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 8,
        'progressionRate': 10,
        'unit': 'repetitions per leg'
    },
    'coaching': {
        'setup': [
            'Balance on one leg, keeping your core tight and torso upright.'
        ],
        'execution': [
            'Lower your hips back and down, keeping the standing knee stable.',
            'Push through your heel to return to the starting position.'
        ],
        'common_mistakes': [
            'Wobbling excessively.',
            'Letting the knee of the standing leg collapse inward.',
            'Using momentum instead of controlled strength.'
        ],
        'breathing': 'Inhale as you lower, exhale as you push up.'
    }
}
,

  'alternate-lunge': {
    'id': 'alternate-lunge',
    'name': 'Alternate Lunge',
    'category': 'strength',
    'equipment': [
        'Bodyweight',
        'Dumbbells'
    ],
    'muscleGroups': [
        'Glutes',
        'quads'
    ],
    'difficulty': 2,
    'instructions': [
        'Start with your feet about shoulder width apart, standing tall with your core engaged.',
        'Step forward into lunge and lower until you reach approx. 90 degrees at both knees.',
        'Push your body back up to the starting position through your front heel, switch legs and repeat.',
        '1x right and 1x left is one rep.'
    ],
    'safetyNotes': [
        'Ensure your front knee does not travel past your toes.',
        'Keep your torso upright and avoid leaning forward.',
        'Step wide enough to maintain a stable base.'
    ],
    'modifications': {
        'beginner': 'Perform static lunges without alternating. Reduce the depth of the lunge.',
        'advanced': 'Add weight by holding dumbbells. Make the exercise dynamic by adding a jump to switch legs.',
        'equipment_alternatives': {
            'dumbbells': 'Dumbbell alternate lunges',
            'kettlebells': 'Kettlebell alternate lunges'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 10,
        'progressionRate': 15,
        'unit': 'repetitions per leg'
    },
    'coaching': {
        'setup': [
            'Stand tall with feet hip-width apart, core braced.'
        ],
        'execution': [
            'Take a controlled step forward.',
            'Lower your hips until both knees are bent at a 90-degree angle.',
            'Push off the front foot to return to the start.',
            'Alternate legs.'
        ],
        'common_mistakes': [
            'Front knee extending over the ankle.',
            'Pushing off the back foot instead of the front foot.',
            'Losing balance.'
        ],
        'breathing': 'Inhale as you step and lower, exhale as you push back.'
    }
}
,

  'dumbbell-pullover': {
    'id': 'dumbbell-pullover',
    'name': 'Dumbbell Pullover',
    'category': 'strength',
    'equipment': [
        'Dumbbell',
        'Bench'
    ],
    'muscleGroups': [
        'Pectorals',
        'shoulders',
        'triceps',
        'back',
        'serratus anterior'
    ],
    'difficulty': 3,
    'instructions': [
        'Lay face up on a bench, tighten core, hold a dumbbell in both hands with arms extended straight toward the ceiling.',
        'Keep arms straight as you lower the weight in an arc behind your head to the height of the bench.',
        'Slowly raise the dumbbell back to the starting position and repeat.'
    ],
    'safetyNotes': [
        'Use a light weight to begin with to ensure proper form and avoid shoulder strain.',
        'Keep your core engaged and lower back pressed into the bench.',
        'The movement should be slow and controlled.'
    ],
    'modifications': {
        'beginner': 'Use a very light dumbbell or a weight plate. Limit the range of motion.',
        'advanced': 'Increase the weight of the dumbbell.',
        'equipment_alternatives': {
            'barbell': 'Barbell pullover',
            'cable': 'Cable pullover'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 12,
        'progressionRate': 10,
        'unit': 'repetitions'
    },
    'coaching': {
        'setup': [
            'Lie on a bench holding one dumbbell with both hands straight above your chest.'
        ],
        'execution': [
            'Keeping a slight bend in your elbows, lower the dumbbell in an arc behind your head.',
            'Feel the stretch in your chest and lats.',
            'Pull the dumbbell back over your chest.'
        ],
        'common_mistakes': [
            'Bending the elbows too much, turning it into a triceps extension.',
            'Arching the lower back off the bench.'
        ],
        'breathing': 'Inhale as you lower the weight, exhale as you pull it back up.'
    }
}
,

  'renegade-row': {
    'id': 'renegade-row',
    'name': 'Renegade Row',
    'category': 'strength',
    'equipment': [
        'Dumbbells'
    ],
    'muscleGroups': [
        'Abs',
        'Biceps',
        'triceps',
        'back',
        'chest'
    ],
    'difficulty': 4,
    'instructions': [
        'Place 2 dumbbells or kettlebells shoulder width apart on the floor, assume push up position with hands on weight handles.',
        'Push hard into grounded weight whilst pulling the opposite weight to your armpit.',
        'Lower back to starting position, repeat with opposite arm. This is one rep.'
    ],
    'safetyNotes': [
        'Use hexagonal dumbbells for stability.',
        'Keep your feet wide to create a stable base.',
        'Avoid rotating your hips; the goal is to keep your torso parallel to the floor.'
    ],
    'modifications': {
        'beginner': 'Perform the movement from your knees. Use lighter weights.',
        'advanced': 'Increase the weight. Add a push-up between each row.',
        'equipment_alternatives': {
            'kettlebells': 'Kettlebell renegade rows',
            'resistance-bands': 'Resistance band plank rows'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 8,
        'progressionRate': 10,
        'unit': 'repetitions per arm'
    },
    'coaching': {
        'setup': [
            'Assume a high plank position with your hands on dumbbells, feet wide.'
        ],
        'execution': [
            'Brace your core and pull one dumbbell up towards your chest.',
            'Keep your elbow tight to your body.',
            'Lower with control and repeat on the other side.'
        ],
        'common_mistakes': [
            'Twisting the hips and torso.',
            'Using momentum to lift the weight.',
            'Letting the lower back sag.'
        ],
        'breathing': 'Exhale as you row, inhale as you lower the dumbbell.'
    }
}
,

  'towel-pull-ups': {
    'id': 'towel-pull-ups',
    'name': 'Towel Pull-ups',
    'category': 'strength',
    'equipment': [
        'Pull-up Bar',
        'Towel'
    ],
    'muscleGroups': [
        'Grip',
        'Forearms',
        'Lats',
        'Biceps',
        'Upper Back'
    ],
    'difficulty': 4,
    'instructions': [
        'Drape one or two towels over a sturdy pull-up bar.',
        'Grip the ends of the towels firmly with a neutral grip (palms facing each other).',
        'Hang from the towels with your arms fully extended, engaging your shoulders.',
        'Pull your chest up towards your hands by driving your elbows down and back.',
        'Pause at the top of the movement.',
        'Lower yourself back to the starting position with control.'
    ],
    'safetyNotes': [
        'Ensure the pull-up bar is secure and can support your weight.',
        'This is a very demanding grip exercise; stop if your grip fails to avoid falling.',
        'Keep your shoulders engaged and avoid shrugging them towards your ears.'
    ],
    'modifications': {
        'beginner': 'Start with towel dead hangs to build initial grip strength. Use a resistance band for assistance during the pull-up.',
        'advanced': 'Use a thicker towel to increase the grip challenge. Progress to one-arm hangs or add a weight vest.',
        'equipment_alternatives': {
            'resistance-bands': 'Assisted towel pull-ups with bands',
            'pull-up-bar': 'Standard pull-ups'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 5,
        'progressionRate': 10,
        'unit': 'repetitions'
    },
    'coaching': {
        'setup': [
            'Drape a towel over a pull-up bar and grip it tightly with both hands.'
        ],
        'execution': [
            'Pull your chest towards the bar, squeezing your back and biceps.',
            'Focus on keeping your body stable and avoid swinging.',
            'Lower down slowly over 2-3 seconds.'
        ],
        'common_mistakes': [
            'Not achieving full range of motion.',
            'Using momentum (kipping).',
            'Losing grip tension at the top or bottom.'
        ],
        'breathing': 'Exhale as you pull up, inhale as you lower down.'
    }
}
,

  'plate-pinches': {
    'id': 'plate-pinches',
    'name': 'Plate Pinches',
    'category': 'strength',
    'equipment': [
        'Weight Plates'
    ],
    'muscleGroups': [
        'Grip',
        'Forearms',
        'Thumbs'
    ],
    'difficulty': 2,
    'instructions': [
        'Place two weight plates together with the smooth sides facing out.',
        'Grip the plates with your fingertips and thumb, using a pinching grip.',
        'Lift the plates off the floor and hold them at your side with your arm extended.',
        'Hold for the prescribed time, maintaining constant pressure.',
        'Carefully lower the plates back to the floor.'
    ],
    'safetyNotes': [
        'Be prepared to drop the plates; perform this exercise in an area where the floor will not be damaged.',
        'Keep your feet clear of the drop zone.',
        'Start with a light weight to master the technique.'
    ],
    'modifications': {
        'beginner': 'Start with two 5lb or 10lb plates. Hold for a shorter duration.',
        'advanced': 'Increase the weight of the plates (e.g., two 25lb plates). Try to walk a short distance while holding the plates.',
        'equipment_alternatives': {
            'dumbbells': 'Dumbbell farmer walks',
            'kettlebells': 'Kettlebell farmer walks'
        }
    },
    'metrics': {
        'type': 'time',
        'defaultValue': 20,
        'progressionRate': 5,
        'unit': 'seconds per hand'
    },
    'coaching': {
        'setup': [
            'Place two plates smooth-side out.',
            'Grip them firmly with only your fingers and thumb.'
        ],
        'execution': [
            'Lift and hold, keeping your arm straight and shoulder packed.',
            'Squeeze the plates together as hard as possible throughout the hold.'
        ],
        'common_mistakes': [
            'Letting the plates rest against your body.',
            'Using plates with a prominent lip that makes it easier.',
            'Not maintaining consistent pressure.'
        ],
        'breathing': 'Breathe normally and steadily throughout the hold.'
    }
}
,

  'wrist-roller': {
    'id': 'wrist-roller',
    'name': 'Wrist Roller',
    'category': 'strength',
    'equipment': [
        'Wrist Roller',
        'Weight Plate'
    ],
    'muscleGroups': [
        'Forearms (Flexors & Extensors)'
    ],
    'difficulty': 3,
    'instructions': [
        'Stand holding the wrist roller with both hands, arms extended straight out in front of you at shoulder height.',
        'The weight should be hanging from the rope at its full length near the floor.',
        'Rotate your wrists one at a time to roll the rope up around the handle, lifting the weight.',
        'Continue until the weight has reached the handle.',
        'With control, reverse the motion to unroll the rope and lower the weight back to the start.'
    ],
    'safetyNotes': [
        'Avoid using your shoulders to lift the weight; isolate the movement to your wrists and forearms.',
        'Control the eccentric (lowering) phase to avoid the weight dropping suddenly.'
    ],
    'modifications': {
        'beginner': 'Use a lighter weight. Perform the exercise with elbows bent and closer to the body.',
        'advanced': 'Increase the weight. Keep arms fully extended for the entire set.',
        'equipment_alternatives': {
            'resistance-bands': 'Wrist curls with resistance bands',
            'dumbbells': 'Wrist curls with dumbbells'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 2,
        'progressionRate': 5,
        'unit': 'complete cycles'
    },
    'coaching': {
        'setup': [
            'Stand with feet shoulder-width apart, holding the roller with an overhand grip, arms extended.'
        ],
        'execution': [
            'Roll the weight up by alternating wrist flexion and extension.',
            'Once at the top, slowly reverse the motion to unroll the weight down.'
        ],
        'common_mistakes': [
            'Using body momentum.',
            'Bending the arms to make it easier.',
            'Letting the weight drop during the eccentric phase.'
        ],
        'breathing': 'Breathe continuously throughout the set.'
    }
}
,

  'cable-woodchoppers': {
    'id': 'cable-woodchoppers',
    'name': 'Cable Woodchoppers',
    'category': 'strength',
    'equipment': [
        'Cable Machine'
    ],
    'muscleGroups': [
        'Core (Obliques)',
        'Shoulders',
        'Hips'
    ],
    'difficulty': 3,
    'instructions': [
        'Set a cable pulley to a high position (for high-to-low chop) or low position (for low-to-high chop).',
        'Stand sideways to the machine, gripping the handle with both hands.',
        'With arms relatively straight, pull the handle across your body in a downward (or upward) diagonal motion, rotating your torso and pivoting on your back foot.',
        'Control the handle as you return to the starting position.',
        'Complete all reps on one side before switching.'
    ],
    'safetyNotes': [
        'Keep your core tight to protect your spine.',
        'Control the weight; do not let it pull you back to the start.',
        'The movement should be driven by torso rotation, not just your arms.'
    ],
    'modifications': {
        'beginner': 'Use a lighter weight. Perform the exercise in a half-kneeling position to increase stability.',
        'advanced': 'Increase the weight. Perform the concentric (pulling) phase explosively.',
        'equipment_alternatives': {
            'resistance-bands': 'Resistance band woodchoppers',
            'medicine-ball': 'Medicine ball woodchoppers'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 12,
        'progressionRate': 10,
        'unit': 'repetitions per side'
    },
    'coaching': {
        'setup': [
            'Stand with a wide stance, gripping the handle with both hands and arms extended.'
        ],
        'execution': [
            'Rotate your torso and hips to pull the cable across your body.',
            'Keep your arms straight and chest up.',
            'Pivot on your back foot as you rotate.'
        ],
        'common_mistakes': [
            'Bending the arms and pulling with the shoulders.',
            'Failing to rotate the torso.',
            'Using too much weight, which compromises form.'
        ],
        'breathing': 'Exhale as you chop, inhale as you return to the start.'
    }
}
,

  'landmine-rotations': {
    'id': 'landmine-rotations',
    'name': 'Landmine Rotations',
    'category': 'strength',
    'equipment': [
        'Barbell',
        'Landmine Attachment'
    ],
    'muscleGroups': [
        'Core (Obliques)',
        'Shoulders'
    ],
    'difficulty': 3,
    'instructions': [
        'Place one end of a barbell into a landmine attachment or securely in a corner.',
        'Stand facing the attachment and hold the other end of the barbell with both hands at chest height.',
        'Keeping your arms extended, rotate your torso to lower the barbell towards one hip.',
        'Explosively reverse the motion, bringing the barbell in an arc up and over to the other hip.',
        'Keep your feet planted and allow your hips to rotate with the movement.'
    ],
    'safetyNotes': [
        'Ensure the base of the barbell is secure.',
        'Control the eccentric (lowering) phase; do not just let the weight drop.',
        'The rotation should come from your core, not by twisting your lower back.'
    ],
    'modifications': {
        'beginner': 'Use an empty barbell. Reduce the range of motion.',
        'advanced': 'Add weight to the barbell. Increase the speed of the concentric (lifting) phase.',
        'equipment_alternatives': {
            'medicine-ball': 'Medicine ball slams',
            'cable': 'Cable rotations'
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
            'Stand holding the end of the barbell at your chest with both hands.'
        ],
        'execution': [
            'Rotate from your core to move the barbell from one hip to the other in a wide arc.',
            'Follow the bar with your eyes.',
            'Keep your arms extended.'
        ],
        'common_mistakes': [
            'Bending the arms.',
            'Moving too fast without control.',
            'Not engaging the core, leading to stress on the spine.'
        ],
        'breathing': 'Exhale as you press the bar away and across, inhale as you bring it back to center.'
    }
}
,

  '90-90-external-rotations': {
    'id': '90-90-external-rotations',
    'name': '90/90 External Rotations',
    'category': 'strength',
    'equipment': [
        'Resistance Band'
    ],
    'muscleGroups': [
        'Shoulders (Rotator Cuff)'
    ],
    'difficulty': 1,
    'instructions': [
        'Stand holding a light resistance band with both hands.',
        'Raise your arms so that your elbows are at shoulder height and bent at 90 degrees (the "goal post" position).',
        'Keeping your elbows stationary, rotate your shoulders to pull the band apart, moving your hands backward.',
        'Pause when your forearms are perpendicular to the floor.',
        'Return to the starting position with control.'
    ],
    'safetyNotes': [
        'Use a very light resistance band.',
        'Keep your shoulder blades pulled back and down.',
        'The movement should be small and controlled; do not force it.'
    ],
    'modifications': {
        'beginner': 'Perform the movement with no band to master the motion.',
        'advanced': 'Use a slightly stronger resistance band. Pause for 2-3 seconds at the end range of motion.',
        'equipment_alternatives': {
            'dumbbells': 'Light dumbbell external rotations',
            'cable': 'Cable external rotations'
        }
    },
    'metrics': {
        'type': 'reps',
        'defaultValue': 15,
        'progressionRate': 10,
        'unit': 'repetitions'
    },
    'coaching': {
        'setup': [
            'Hold a band with elbows bent to 90 degrees and raised to shoulder height.'
        ],
        'execution': [
            'Keeping elbows fixed in place, rotate your hands backward against the band resistance.',
            'Focus on the rotation coming from the shoulder joint.'
        ],
        'common_mistakes': [
            'Dropping the elbows.',
            'Arching the lower back.',
            'Using a band that is too heavy.'
        ],
        'breathing': 'Exhale as you rotate back, inhale as you return.'
    }
}
};

export default STRENGTH_EXERCISES;
