#!/usr/bin/env node

/**
 * IMPORTANT: EXERCISE ADDITION WORKFLOW
 * 
 * This script should be run EVERY TIME new exercises are added to the system.
 * 
 * WHEN TO USE THIS SCRIPT:
 * - When adding new exercises from JSON data
 * - When importing exercises from external sources
 * - When creating new exercise variations
 * - After validating that exercises don't already exist as duplicates
 * 
 * WORKFLOW:
 * 1. First, check for duplicates using duplicate detection
 * 2. Filter out existing exercises to avoid duplicates
 * 3. Run this script to add only the new, unique exercises
 * 4. Verify exercises were added correctly to their category files
 * 5. Test that the AI can access the new exercises
 * 
 * CATEGORY MAPPING:
 * - Strength exercises → lib/exercises/categories/strength.ts
 * - Core exercises → lib/exercises/categories/core.ts  
 * - Flexibility exercises → lib/exercises/categories/flexibility.ts
 * - Cardio exercises → lib/exercises/categories/cardio.ts
 * - Plyometric exercises → lib/exercises/categories/plyometric.ts
 * 
 * NOTE: This ensures the exercise database stays consistent and the AI
 * has immediate access to new exercises for workout recommendations.
 */

const fs = require('fs');
const path = require('path');

// New exercises to add
const newExercises = {
  strength: {
    'towel-pull-ups': {
      id: 'towel-pull-ups',
      name: 'Towel Pull-ups',
      category: 'strength',
      equipment: ['Pull-up Bar', 'Towel'],
      muscleGroups: ['Grip', 'Forearms', 'Lats', 'Biceps', 'Upper Back'],
      difficulty: 4,
      instructions: [
        'Drape one or two towels over a sturdy pull-up bar.',
        'Grip the ends of the towels firmly with a neutral grip (palms facing each other).',
        'Hang from the towels with your arms fully extended, engaging your shoulders.',
        'Pull your chest up towards your hands by driving your elbows down and back.',
        'Pause at the top of the movement.',
        'Lower yourself back to the starting position with control.'
      ],
      safetyNotes: [
        'Ensure the pull-up bar is secure and can support your weight.',
        'This is a very demanding grip exercise; stop if your grip fails to avoid falling.',
        'Keep your shoulders engaged and avoid shrugging them towards your ears.'
      ],
      modifications: {
        beginner: 'Start with towel dead hangs to build initial grip strength. Use a resistance band for assistance during the pull-up.',
        advanced: 'Use a thicker towel to increase the grip challenge. Progress to one-arm hangs or add a weight vest.',
        equipment_alternatives: {
          'resistance-bands': 'Assisted towel pull-ups with bands',
          'pull-up-bar': 'Standard pull-ups'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 5,
        progressionRate: 10,
        unit: 'repetitions'
      },
      coaching: {
        setup: ['Drape a towel over a pull-up bar and grip it tightly with both hands.'],
        execution: ['Pull your chest towards the bar, squeezing your back and biceps.', 'Focus on keeping your body stable and avoid swinging.', 'Lower down slowly over 2-3 seconds.'],
        common_mistakes: ['Not achieving full range of motion.', 'Using momentum (kipping).', 'Losing grip tension at the top or bottom.'],
        breathing: 'Exhale as you pull up, inhale as you lower down.'
      }
    },
    'plate-pinches': {
      id: 'plate-pinches',
      name: 'Plate Pinches',
      category: 'strength',
      equipment: ['Weight Plates'],
      muscleGroups: ['Grip', 'Forearms', 'Thumbs'],
      difficulty: 2,
      instructions: [
        'Place two weight plates together with the smooth sides facing out.',
        'Grip the plates with your fingertips and thumb, using a pinching grip.',
        'Lift the plates off the floor and hold them at your side with your arm extended.',
        'Hold for the prescribed time, maintaining constant pressure.',
        'Carefully lower the plates back to the floor.'
      ],
      safetyNotes: [
        'Be prepared to drop the plates; perform this exercise in an area where the floor will not be damaged.',
        'Keep your feet clear of the drop zone.',
        'Start with a light weight to master the technique.'
      ],
      modifications: {
        beginner: 'Start with two 5lb or 10lb plates. Hold for a shorter duration.',
        advanced: 'Increase the weight of the plates (e.g., two 25lb plates). Try to walk a short distance while holding the plates.',
        equipment_alternatives: {
          'dumbbells': 'Dumbbell farmer walks',
          'kettlebells': 'Kettlebell farmer walks'
        }
      },
      metrics: {
        type: 'time',
        defaultValue: 20,
        progressionRate: 5,
        unit: 'seconds per hand'
      },
      coaching: {
        setup: ['Place two plates smooth-side out.', 'Grip them firmly with only your fingers and thumb.'],
        execution: ['Lift and hold, keeping your arm straight and shoulder packed.', 'Squeeze the plates together as hard as possible throughout the hold.'],
        common_mistakes: ['Letting the plates rest against your body.', 'Using plates with a prominent lip that makes it easier.', 'Not maintaining consistent pressure.'],
        breathing: 'Breathe normally and steadily throughout the hold.'
      }
    },
    'wrist-roller': {
      id: 'wrist-roller',
      name: 'Wrist Roller',
      category: 'strength',
      equipment: ['Wrist Roller', 'Weight Plate'],
      muscleGroups: ['Forearms (Flexors & Extensors)'],
      difficulty: 3,
      instructions: [
        'Stand holding the wrist roller with both hands, arms extended straight out in front of you at shoulder height.',
        'The weight should be hanging from the rope at its full length near the floor.',
        'Rotate your wrists one at a time to roll the rope up around the handle, lifting the weight.',
        'Continue until the weight has reached the handle.',
        'With control, reverse the motion to unroll the rope and lower the weight back to the start.'
      ],
      safetyNotes: [
        'Avoid using your shoulders to lift the weight; isolate the movement to your wrists and forearms.',
        'Control the eccentric (lowering) phase to avoid the weight dropping suddenly.'
      ],
      modifications: {
        beginner: 'Use a lighter weight. Perform the exercise with elbows bent and closer to the body.',
        advanced: 'Increase the weight. Keep arms fully extended for the entire set.',
        equipment_alternatives: {
          'resistance-bands': 'Wrist curls with resistance bands',
          'dumbbells': 'Wrist curls with dumbbells'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 2,
        progressionRate: 5,
        unit: 'complete cycles'
      },
      coaching: {
        setup: ['Stand with feet shoulder-width apart, holding the roller with an overhand grip, arms extended.'],
        execution: ['Roll the weight up by alternating wrist flexion and extension.', 'Once at the top, slowly reverse the motion to unroll the weight down.'],
        common_mistakes: ['Using body momentum.', 'Bending the arms to make it easier.', 'Letting the weight drop during the eccentric phase.'],
        breathing: 'Breathe continuously throughout the set.'
      }
    },
    'cable-woodchoppers': {
      id: 'cable-woodchoppers',
      name: 'Cable Woodchoppers',
      category: 'strength',
      equipment: ['Cable Machine'],
      muscleGroups: ['Core (Obliques)', 'Shoulders', 'Hips'],
      difficulty: 3,
      instructions: [
        'Set a cable pulley to a high position (for high-to-low chop) or low position (for low-to-high chop).',
        'Stand sideways to the machine, gripping the handle with both hands.',
        'With arms relatively straight, pull the handle across your body in a downward (or upward) diagonal motion, rotating your torso and pivoting on your back foot.',
        'Control the handle as you return to the starting position.',
        'Complete all reps on one side before switching.'
      ],
      safetyNotes: [
        'Keep your core tight to protect your spine.',
        'Control the weight; do not let it pull you back to the start.',
        'The movement should be driven by torso rotation, not just your arms.'
      ],
      modifications: {
        beginner: 'Use a lighter weight. Perform the exercise in a half-kneeling position to increase stability.',
        advanced: 'Increase the weight. Perform the concentric (pulling) phase explosively.',
        equipment_alternatives: {
          'resistance-bands': 'Resistance band woodchoppers',
          'medicine-ball': 'Medicine ball woodchoppers'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 12,
        progressionRate: 10,
        unit: 'repetitions per side'
      },
      coaching: {
        setup: ['Stand with a wide stance, gripping the handle with both hands and arms extended.'],
        execution: ['Rotate your torso and hips to pull the cable across your body.', 'Keep your arms straight and chest up.', 'Pivot on your back foot as you rotate.'],
        common_mistakes: ['Bending the arms and pulling with the shoulders.', 'Failing to rotate the torso.', 'Using too much weight, which compromises form.'],
        breathing: 'Exhale as you chop, inhale as you return to the start.'
      }
    },
    'landmine-rotations': {
      id: 'landmine-rotations',
      name: 'Landmine Rotations',
      category: 'strength',
      equipment: ['Barbell', 'Landmine Attachment'],
      muscleGroups: ['Core (Obliques)', 'Shoulders'],
      difficulty: 3,
      instructions: [
        'Place one end of a barbell into a landmine attachment or securely in a corner.',
        'Stand facing the attachment and hold the other end of the barbell with both hands at chest height.',
        'Keeping your arms extended, rotate your torso to lower the barbell towards one hip.',
        'Explosively reverse the motion, bringing the barbell in an arc up and over to the other hip.',
        'Keep your feet planted and allow your hips to rotate with the movement.'
      ],
      safetyNotes: [
        'Ensure the base of the barbell is secure.',
        'Control the eccentric (lowering) phase; don\'t just let the weight drop.',
        'The rotation should come from your core, not by twisting your lower back.'
      ],
      modifications: {
        beginner: 'Use an empty barbell. Reduce the range of motion.',
        advanced: 'Add weight to the barbell. Increase the speed of the concentric (lifting) phase.',
        equipment_alternatives: {
          'medicine-ball': 'Medicine ball slams',
          'cable': 'Cable rotations'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 10,
        progressionRate: 10,
        unit: 'repetitions per side'
      },
      coaching: {
        setup: ['Stand holding the end of the barbell at your chest with both hands.'],
        execution: ['Rotate from your core to move the barbell from one hip to the other in a wide arc.', 'Follow the bar with your eyes.', 'Keep your arms extended.'],
        common_mistakes: ['Bending the arms.', 'Moving too fast without control.', 'Not engaging the core, leading to stress on the spine.'],
        breathing: 'Exhale as you press the bar away and across, inhale as you bring it back to center.'
      }
    },
    '90-90-external-rotations': {
      id: '90-90-external-rotations',
      name: '90/90 External Rotations',
      category: 'strength',
      equipment: ['Resistance Band'],
      muscleGroups: ['Shoulders (Rotator Cuff)'],
      difficulty: 1,
      instructions: [
        'Stand holding a light resistance band with both hands.',
        'Raise your arms so that your elbows are at shoulder height and bent at 90 degrees (the \'goal post\' position).',
        'Keeping your elbows stationary, rotate your shoulders to pull the band apart, moving your hands backward.',
        'Pause when your forearms are perpendicular to the floor.',
        'Return to the starting position with control.'
      ],
      safetyNotes: [
        'Use a very light resistance band.',
        'Keep your shoulder blades pulled back and down.',
        'The movement should be small and controlled; do not force it.'
      ],
      modifications: {
        beginner: 'Perform the movement with no band to master the motion.',
        advanced: 'Use a slightly stronger resistance band. Pause for 2-3 seconds at the end range of motion.',
        equipment_alternatives: {
          'dumbbells': 'Light dumbbell external rotations',
          'cable': 'Cable external rotations'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 15,
        progressionRate: 10,
        unit: 'repetitions'
      },
      coaching: {
        setup: ['Hold a band with elbows bent to 90 degrees and raised to shoulder height.'],
        execution: ['Keeping elbows fixed in place, rotate your hands backward against the band\'s resistance.', 'Focus on the rotation coming from the shoulder joint.'],
        common_mistakes: ['Dropping the elbows.', 'Arching the lower back.', 'Using a band that is too heavy.'],
        breathing: 'Exhale as you rotate back, inhale as you return.'
      }
    }
  },
  plyometric: {
    'medicine-ball-rotational-slams': {
      id: 'medicine-ball-rotational-slams',
      name: 'Medicine Ball Rotational Slams',
      category: 'plyometric',
      equipment: ['Medicine Ball'],
      muscleGroups: ['Core (Obliques)', 'Hips', 'Lats', 'Shoulders'],
      difficulty: 3,
      instructions: [
        'Stand in an athletic stance with feet shoulder-width apart, holding the medicine ball at one hip.',
        'Explosively rotate your torso, bringing the ball up and across your body in a diagonal path.',
        'Slam the ball forcefully into the ground just outside your opposite foot.',
        'Catch the ball on the rebound (if using a bounceable ball) or pick it up, and repeat for reps before switching sides.'
      ],
      safetyNotes: [
        'Use a slam ball designed for high-impact throws if possible.',
        'Ensure the area is clear of people and objects.',
        'Generate power from your hips and core, not your lower back.'
      ],
      modifications: {
        beginner: 'Start from a half-kneeling position to better isolate the torso. Use a lighter ball and perform the motion without a forceful slam.',
        advanced: 'Use a heavier ball. Increase the speed and intensity of the slam.',
        equipment_alternatives: {
          'slam-ball': 'Slam ball rotational throws',
          'kettlebell': 'Kettlebell swings'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 8,
        progressionRate: 10,
        unit: 'repetitions per side'
      },
      coaching: {
        setup: ['Hold the ball at your back hip, feet grounded, core engaged.'],
        execution: ['Drive through your back hip to initiate rotation.', 'Bring the ball across your body in a powerful, high-to-low arc.', 'Slam the ball with maximal force.'],
        common_mistakes: ['Rotating only with the arms and shoulders.', 'Having a narrow stance.', 'Failing to engage the hips.'],
        breathing: 'Inhale as you wind up, exhale forcefully on the slam.'
      }
    },
    'hexagon-drill': {
      id: 'hexagon-drill',
      name: 'Hexagon Drill',
      category: 'plyometric',
      equipment: ['Tape or Cones'],
      muscleGroups: ['Full Body', 'Calves', 'Quads'],
      difficulty: 3,
      instructions: [
        'Create a hexagon shape on the floor with tape, with each side being about 2 feet long.',
        'Stand in the middle of the hexagon.',
        'Keeping your feet together, jump with both feet over one side of the hexagon and immediately back to the center.',
        'Proceed to the next side of the hexagon and repeat the in-and-out jump.',
        'Continue this pattern, moving clockwise or counter-clockwise until you have completed all six sides.',
        'This constitutes one cycle.'
      ],
      safetyNotes: [
        'Stay on the balls of your feet to remain quick and light.',
        'Focus on quick ground contact time.',
        'Ensure the surface is not slippery.'
      ],
      modifications: {
        beginner: 'Perform the drill by stepping in and out instead of jumping. Perform at a slower tempo.',
        advanced: 'Increase the speed of the jumps. Perform the drill on a single leg.',
        equipment_alternatives: {
          'agility-ladder': 'Agility ladder drills',
          'cones': 'Cone agility drills'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 3,
        progressionRate: 5,
        unit: 'complete cycles'
      },
      coaching: {
        setup: ['Stand in the center of a marked hexagon.'],
        execution: ['Jump out and back in over each line consecutively.', 'Maintain a consistent rhythm and speed.', 'Keep your upper body relaxed.'],
        common_mistakes: ['Long ground contact time.', 'Looking down at your feet instead of ahead.', 'Sloppy footwork, touching the lines.'],
        breathing: 'Maintain a rhythmic breathing pattern; try to exhale on each jump out.'
      }
    },
    '5-10-5-drill': {
      id: '5-10-5-drill',
      name: '5-10-5 Drill (Pro Agility)',
      category: 'plyometric',
      equipment: ['Cones'],
      muscleGroups: ['Full Body'],
      difficulty: 4,
      instructions: [
        'Set up three cones in a straight line, each 5 yards apart.',
        'Start at the center cone in a three-point stance.',
        'On \'go\', sprint 5 yards to the right cone and touch the line/cone with your right hand.',
        'Immediately change direction and sprint 10 yards to the far left cone, touching the line/cone with your left hand.',
        'Change direction again and sprint 5 yards back through the starting cone.'
      ],
      safetyNotes: [
        'Ensure a proper warm-up before performing this high-intensity drill.',
        'Focus on lowering your center of gravity when changing direction to stay balanced and avoid slipping.',
        'Plant your foot firmly when touching the line to drive into the next sprint.'
      ],
      modifications: {
        beginner: 'Perform the drill at 75% speed to focus on the mechanics of changing direction. Walk through the pattern first.',
        advanced: 'Compete against time. A partner can give a reactive start command.',
        equipment_alternatives: {
          'markers': 'Any markers or lines can be used instead of cones'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 3,
        progressionRate: 5,
        unit: 'repetitions'
      },
      coaching: {
        setup: ['Start at the middle cone in an athletic stance.'],
        execution: ['Explode out for the first 5 yards.', 'Stay low as you touch the line and change direction.', 'Drive hard for the 10-yard sprint.', 'Finish by accelerating through the final cone.'],
        common_mistakes: ['Standing up too tall when changing direction.', 'Rounding the turns instead of making sharp plants.', 'Slowing down before the finish line.'],
        breathing: 'Breathe as needed, but a powerful exhale on each change of direction can help with force production.'
      }
    },
    'single-leg-box-jumps': {
      id: 'single-leg-box-jumps',
      name: 'Single Leg Box Jumps',
      category: 'plyometric',
      equipment: ['Plyo Box'],
      muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves'],
      difficulty: 4,
      instructions: [
        'Stand facing a plyometric box on one leg.',
        'Lower into a slight single-leg squat to load the jumping leg.',
        'Explode upwards, jumping onto the box and landing on the same single leg.',
        'Land softly and with control on the box.',
        'Step down carefully (do not jump down). Complete all reps on one leg before switching.'
      ],
      safetyNotes: [
        'Master double-leg box jumps before attempting this.',
        'Start with a very low box (6-12 inches).',
        'Focus on a stable landing. If you cannot stick the landing, the box is too high.'
      ],
      modifications: {
        beginner: 'Use a very low box or step. Practice single-leg hops on the ground first.',
        advanced: 'Gradually increase the height of the box.',
        equipment_alternatives: {
          'step': 'Single leg step-ups',
          'bench': 'Single leg bench jumps'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 5,
        progressionRate: 10,
        unit: 'repetitions per leg'
      },
      coaching: {
        setup: ['Stand on one leg in front of a low box.'],
        execution: ['Load your hip and knee, then jump forcefully onto the box.', 'Use your arms to help propel you upwards.', 'Land softly in the center of the box on the same foot.'],
        common_mistakes: ['Landing hard or off-balance.', 'Using a box that is too high, leading to poor landing mechanics.', 'Jumping down from the box.'],
        breathing: 'Exhale as you jump.'
      }
    },
    'burpee-intervals': {
      id: 'burpee-intervals',
      name: 'Burpee Intervals',
      category: 'plyometric',
      equipment: ['Bodyweight'],
      muscleGroups: ['Full Body'],
      difficulty: 4,
      instructions: [
        'Stand with your feet shoulder-width apart.',
        'Lower your body into a squat and place your hands on the floor in front of you.',
        'Kick your feet back into a high plank position.',
        'Optional: Perform a push-up.',
        'Jump your feet back towards your hands.',
        'Explosively jump up into the air with your arms overhead.'
      ],
      safetyNotes: [
        'Maintain core tension to avoid your lower back sagging in the plank position.',
        'Land softly from the jump to protect your joints.',
        'Pace yourself to maintain form throughout all intervals.'
      ],
      modifications: {
        beginner: 'Step your feet back and forward instead of jumping. Omit the push-up and the final jump.',
        advanced: 'Add a tuck jump at the end. Increase the number of burpees per interval or the work time.',
        equipment_alternatives: {
          'none': 'Standard burpees without intervals'
        }
      },
      metrics: {
        type: 'time',
        defaultValue: 30,
        progressionRate: 10,
        unit: 'seconds work / 30 seconds rest'
      },
      coaching: {
        setup: ['Stand ready to move.'],
        execution: ['Flow through the sequence smoothly: squat, plank, push-up (optional), squat, jump.', 'Find a sustainable rhythm.'],
        common_mistakes: ['Sagging hips in the plank.', 'Not getting full hip extension on the jump.', 'Losing form as fatigue sets in.'],
        breathing: 'Exhale as you jump your feet back and as you jump up.'
      }
    }
  },
  cardio: {
    '400m-repeats': {
      id: '400m-repeats',
      name: '400m Repeats',
      category: 'cardio',
      equipment: ['Running Track'],
      muscleGroups: ['Full Body', 'Cardiovascular System'],
      difficulty: 4,
      instructions: [
        'Warm up thoroughly with 10-15 minutes of light jogging and dynamic stretches.',
        'Run 400 meters (one lap of a standard track) at a hard, sustainable effort (85-90%).',
        'Record your time for the lap.',
        'Rest for a predetermined period (e.g., 2-3 minutes).',
        'Repeat for the prescribed number of sets, aiming for consistent lap times.',
        'Cool down with 10 minutes of easy jogging.'
      ],
      safetyNotes: [
        'Proper warm-up and cool-down are essential to prevent injury.',
        'Do not perform this workout if you are not accustomed to high-intensity running.',
        'Listen to your body; stop if you feel sharp pain.'
      ],
      modifications: {
        beginner: 'Run at a lower intensity (e.g., 80%). Increase the rest time between intervals. Reduce the number of repetitions.',
        advanced: 'Decrease the rest time (e.g., a 1:1 or 1:2 work-to-rest ratio). Increase the number of repetitions.',
        equipment_alternatives: {
          'treadmill': 'Treadmill 400m intervals',
          'road': 'Road running intervals'
        }
      },
      metrics: {
        type: 'reps',
        defaultValue: 4,
        progressionRate: 5,
        unit: 'repetitions'
      },
      coaching: {
        setup: ['Complete a thorough warm-up.'],
        execution: ['Find a strong, consistent pace for the 400m.', 'Focus on efficient running form: stay tall, relax your upper body, and maintain a quick cadence.', 'Use the rest period to actively recover (walk or jog slowly).'],
        common_mistakes: ['Starting the first interval too fast and fading.', 'Inconsistent pacing across reps.', 'Poor running form due to fatigue.'],
        breathing: 'Develop a deep, rhythmic breathing pattern that matches your cadence.'
      }
    }
  }
};

function addExercisesToFile(filePath, exercises) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the closing brace of the exercises object
    const lastBraceIndex = content.lastIndexOf('};');
    if (lastBraceIndex === -1) {
      console.error(`Could not find closing brace in ${filePath}`);
      return false;
    }
    
    // Build the new exercises string
    let newExercisesStr = '';
    for (const [key, exercise] of Object.entries(exercises)) {
      newExercisesStr += `,\n\n  '${key}': ${JSON.stringify(exercise, null, 4).replace(/"/g, "'").replace(/'/g, "'")}\n`;
    }
    
    // Insert the new exercises before the closing brace
    const beforeClosing = content.substring(0, lastBraceIndex);
    const afterClosing = content.substring(lastBraceIndex);
    
    const newContent = beforeClosing + newExercisesStr + afterClosing;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Added ${Object.keys(exercises).length} exercises to ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error adding exercises to ${filePath}:`, error);
    return false;
  }
}

// Add exercises to their respective files
const basePath = path.join(__dirname, '..', 'lib', 'exercises', 'categories');

console.log('Adding new exercises to database...');

// Add strength exercises
if (newExercises.strength) {
  addExercisesToFile(path.join(basePath, 'strength.ts'), newExercises.strength);
}

// Add plyometric exercises
if (newExercises.plyometric) {
  addExercisesToFile(path.join(basePath, 'plyometric.ts'), newExercises.plyometric);
}

// Add cardio exercises
if (newExercises.cardio) {
  addExercisesToFile(path.join(basePath, 'cardio.ts'), newExercises.cardio);
}

console.log('Finished adding new exercises!'); 