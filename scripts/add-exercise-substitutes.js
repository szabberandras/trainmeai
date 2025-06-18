const fs = require('fs');
const path = require('path');

// Comprehensive exercise substitutes organized by category
const EXERCISE_SUBSTITUTES = {
  // Bodyweight & Calisthenics
  'handstand-push-ups': [
    {
      id: 'pike-push-up-substitute',
      name: 'Pike Push-up',
      parentExerciseId: 'handstand-push-ups',
      parentExerciseName: 'Handstand Push-ups',
      category: 'regression',
      difficulty: 'beginner',
      equipment: ['none'],
      muscleGroups: ['shoulders', 'triceps', 'core'],
      description: 'Easier vertical pushing movement targeting same muscles',
      instructions: ['Start in downward dog position', 'Lower head toward ground', 'Push back to starting position'],
      safetyNotes: ['Keep core engaged', 'Don\'t let elbows flare too wide']
    },
    {
      id: 'dumbbell-shoulder-press-substitute',
      name: 'Dumbbell Shoulder Press',
      parentExerciseId: 'handstand-push-ups',
      parentExerciseName: 'Handstand Push-ups',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dumbbells'],
      muscleGroups: ['shoulders', 'triceps'],
      description: 'Equipment-based alternative for vertical pressing',
      instructions: ['Hold dumbbells at shoulder height', 'Press overhead', 'Lower with control'],
      safetyNotes: ['Keep core engaged', 'Don\'t arch back excessively']
    }
  ],

  'pistol-squats': [
    {
      id: 'assisted-pistol-squat',
      name: 'Assisted Pistol Squat',
      parentExerciseId: 'pistol-squats',
      parentExerciseName: 'Pistol Squats',
      category: 'regression',
      difficulty: 'beginner',
      equipment: ['suspension-trainer', 'doorway'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Assisted version to build strength for full pistol squat',
      instructions: ['Hold suspension trainer or doorway', 'Perform single-leg squat with assistance', 'Focus on control'],
      safetyNotes: ['Start with light assistance', 'Focus on balance']
    },
    {
      id: 'single-leg-box-squat',
      name: 'Single-Leg Box Squat',
      parentExerciseId: 'pistol-squats',
      parentExerciseName: 'Pistol Squats',
      category: 'regression',
      difficulty: 'intermediate',
      equipment: ['box', 'bench'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Reduced range of motion single-leg squat',
      instructions: ['Stand on one leg in front of box', 'Lower to sit on box', 'Stand back up'],
      safetyNotes: ['Use appropriate box height', 'Control the descent']
    }
  ],

  'air-squats': [
    {
      id: 'bodyweight-lunge-substitute',
      name: 'Bodyweight Lunge',
      parentExerciseId: 'air-squats',
      parentExerciseName: 'Air Squats',
      category: 'angle',
      difficulty: 'beginner',
      equipment: ['none'],
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      description: 'Unilateral leg exercise targeting similar muscles',
      instructions: ['Step forward into lunge', 'Lower back knee toward ground', 'Push back to start'],
      safetyNotes: ['Keep front knee over ankle', 'Control the movement']
    },
    {
      id: 'goblet-squat-substitute',
      name: 'Goblet Squat',
      parentExerciseId: 'air-squats',
      parentExerciseName: 'Air Squats',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dumbbell', 'kettlebell'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Weighted version for progression',
      instructions: ['Hold weight at chest', 'Squat down keeping chest up', 'Drive through heels to stand'],
      safetyNotes: ['Keep weight close to body', 'Maintain upright torso']
    }
  ],

  'jump-squat': [
    {
      id: 'box-jump-substitute',
      name: 'Box Jump',
      parentExerciseId: 'jump-squat',
      parentExerciseName: 'Jump Squat',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['box', 'platform'],
      muscleGroups: ['quadriceps', 'glutes', 'calves'],
      description: 'Explosive jumping movement with landing target',
      instructions: ['Stand facing box', 'Jump onto box with both feet', 'Step down carefully'],
      safetyNotes: ['Use appropriate box height', 'Land softly', 'Step down, don\'t jump down']
    },
    {
      id: 'broad-jump-substitute',
      name: 'Broad Jump',
      parentExerciseId: 'jump-squat',
      parentExerciseName: 'Jump Squat',
      category: 'angle',
      difficulty: 'intermediate',
      equipment: ['none'],
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      description: 'Horizontal explosive movement',
      instructions: ['Squat down and swing arms back', 'Jump forward as far as possible', 'Land softly'],
      safetyNotes: ['Land with bent knees', 'Have adequate space']
    }
  ],

  'push-up': [
    {
      id: 'dumbbell-bench-press-substitute',
      name: 'Dumbbell Bench Press',
      parentExerciseId: 'push-up',
      parentExerciseName: 'Push-up',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dumbbells', 'bench'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Equipment-based horizontal pushing movement',
      instructions: ['Lie on bench with dumbbells', 'Press weights up and together', 'Lower with control'],
      safetyNotes: ['Keep feet planted', 'Control the weight']
    },
    {
      id: 'incline-push-up-substitute',
      name: 'Incline Push-up',
      parentExerciseId: 'push-up',
      parentExerciseName: 'Push-up',
      category: 'regression',
      difficulty: 'beginner',
      equipment: ['bench', 'wall'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Easier angle for building push-up strength',
      instructions: ['Place hands on elevated surface', 'Perform push-up motion', 'Keep body straight'],
      safetyNotes: ['Ensure stable surface', 'Maintain straight line']
    },
    {
      id: 'knee-push-up-substitute',
      name: 'Knee Push-up',
      parentExerciseId: 'push-up',
      parentExerciseName: 'Push-up',
      category: 'regression',
      difficulty: 'beginner',
      equipment: ['none'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Modified push-up from knees',
      instructions: ['Start on knees and hands', 'Lower chest toward ground', 'Push back up'],
      safetyNotes: ['Keep straight line from knees to head', 'Use mat for knee comfort']
    }
  ],

  'diamond-push-up': [
    {
      id: 'close-grip-bench-press-substitute',
      name: 'Close-Grip Bench Press',
      parentExerciseId: 'diamond-push-up',
      parentExerciseName: 'Diamond Push-up',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['barbell', 'bench'],
      muscleGroups: ['triceps', 'chest', 'shoulders'],
      description: 'Equipment-based tricep-focused pressing',
      instructions: ['Grip bar closer than shoulder-width', 'Lower to chest', 'Press back up'],
      safetyNotes: ['Don\'t grip too narrow', 'Keep elbows close to body']
    },
    {
      id: 'tricep-dips-bench-substitute',
      name: 'Tricep Dips on Bench',
      parentExerciseId: 'diamond-push-up',
      parentExerciseName: 'Diamond Push-up',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['bench'],
      muscleGroups: ['triceps', 'shoulders'],
      description: 'Tricep-focused bodyweight exercise',
      instructions: ['Sit on bench edge, hands beside hips', 'Lower body by bending elbows', 'Push back up'],
      safetyNotes: ['Keep elbows close to body', 'Don\'t go too low']
    }
  ],

  'pull-ups': [
    {
      id: 'lat-pulldown-substitute',
      name: 'Lat Pulldown',
      parentExerciseId: 'pull-ups',
      parentExerciseName: 'Pull-ups',
      category: 'equipment',
      difficulty: 'beginner',
      equipment: ['lat-pulldown-machine'],
      muscleGroups: ['lats', 'biceps', 'rhomboids'],
      description: 'Machine-based pulling movement with adjustable resistance',
      instructions: ['Sit at lat pulldown machine', 'Pull bar to upper chest', 'Control the return'],
      safetyNotes: ['Keep chest up', 'Don\'t lean back excessively']
    },
    {
      id: 'chin-up-substitute',
      name: 'Chin-up',
      parentExerciseId: 'pull-ups',
      parentExerciseName: 'Pull-ups',
      category: 'grip',
      difficulty: 'intermediate',
      equipment: ['pull-up-bar'],
      muscleGroups: ['lats', 'biceps', 'rhomboids'],
      description: 'Underhand grip variation',
      instructions: ['Hang with underhand grip', 'Pull up until chin clears bar', 'Lower with control'],
      safetyNotes: ['Full range of motion', 'Control the descent']
    },
    {
      id: 'band-assisted-pull-up',
      name: 'Band-Assisted Pull-up',
      parentExerciseId: 'pull-ups',
      parentExerciseName: 'Pull-ups',
      category: 'regression',
      difficulty: 'beginner',
      equipment: ['pull-up-bar', 'resistance-band'],
      muscleGroups: ['lats', 'biceps', 'rhomboids'],
      description: 'Assisted version to build pull-up strength',
      instructions: ['Loop band around bar and under knees/feet', 'Perform pull-up with assistance', 'Focus on form'],
      safetyNotes: ['Use appropriate band resistance', 'Still engage muscles fully']
    }
  ],

  // Squats & Lunges
  'squat': [
    {
      id: 'leg-press-substitute',
      name: 'Leg Press',
      parentExerciseId: 'squat',
      parentExerciseName: 'Squat',
      category: 'equipment',
      difficulty: 'beginner',
      equipment: ['leg-press-machine'],
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      description: 'Machine-based leg exercise with back support',
      instructions: ['Sit in leg press machine', 'Lower weight by bending knees', 'Press back to start'],
      safetyNotes: ['Don\'t lock knees completely', 'Keep feet flat on platform']
    },
    {
      id: 'goblet-squat-main',
      name: 'Goblet Squat',
      parentExerciseId: 'squat',
      parentExerciseName: 'Squat',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dumbbell', 'kettlebell'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Weighted squat variation',
      instructions: ['Hold weight at chest', 'Squat down keeping chest up', 'Drive through heels'],
      safetyNotes: ['Keep weight close to body', 'Maintain upright torso']
    }
  ],

  'front-squat': [
    {
      id: 'goblet-squat-front',
      name: 'Goblet Squat',
      parentExerciseId: 'front-squat',
      parentExerciseName: 'Front Squat',
      category: 'equipment',
      difficulty: 'beginner',
      equipment: ['dumbbell', 'kettlebell'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Similar front-loaded position',
      instructions: ['Hold weight at chest', 'Squat down maintaining upright torso', 'Drive up through heels'],
      safetyNotes: ['Keep elbows up', 'Don\'t let weight pull you forward']
    },
    {
      id: 'zercher-squat',
      name: 'Zercher Squat',
      parentExerciseId: 'front-squat',
      parentExerciseName: 'Front Squat',
      category: 'equipment',
      difficulty: 'advanced',
      equipment: ['barbell'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Barbell held in elbow crooks',
      instructions: ['Hold barbell in elbow crooks', 'Squat down maintaining posture', 'Drive up'],
      safetyNotes: ['Use padding for comfort', 'Keep chest up']
    }
  ],

  // Deadlifts & Posterior Chain
  'deadlift': [
    {
      id: 'kettlebell-swing-substitute',
      name: 'Kettlebell Swing',
      parentExerciseId: 'deadlift',
      parentExerciseName: 'Deadlift',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['kettlebell'],
      muscleGroups: ['glutes', 'hamstrings', 'core'],
      description: 'Dynamic hip hinge movement',
      instructions: ['Swing kettlebell between legs', 'Drive hips forward explosively', 'Control the swing'],
      safetyNotes: ['Keep back neutral', 'Power comes from hips']
    },
    {
      id: 'romanian-deadlift-substitute',
      name: 'Romanian Deadlift',
      parentExerciseId: 'deadlift',
      parentExerciseName: 'Deadlift',
      category: 'range',
      difficulty: 'intermediate',
      equipment: ['barbell', 'dumbbells'],
      muscleGroups: ['hamstrings', 'glutes', 'lower-back'],
      description: 'Hip hinge focused deadlift variation',
      instructions: ['Start standing with weight', 'Hinge at hips lowering weight', 'Drive hips forward to return'],
      safetyNotes: ['Keep slight knee bend', 'Feel stretch in hamstrings']
    }
  ],

  // Pressing Movements
  'shoulder-press': [
    {
      id: 'dumbbell-shoulder-press-main',
      name: 'Dumbbell Shoulder Press',
      parentExerciseId: 'shoulder-press',
      parentExerciseName: 'Shoulder Press',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dumbbells'],
      muscleGroups: ['shoulders', 'triceps'],
      description: 'Unilateral shoulder pressing with dumbbells',
      instructions: ['Hold dumbbells at shoulder height', 'Press overhead', 'Lower with control'],
      safetyNotes: ['Keep core engaged', 'Don\'t arch back']
    },
    {
      id: 'seated-barbell-press',
      name: 'Seated Barbell Press',
      parentExerciseId: 'shoulder-press',
      parentExerciseName: 'Shoulder Press',
      category: 'stability',
      difficulty: 'intermediate',
      equipment: ['barbell', 'bench'],
      muscleGroups: ['shoulders', 'triceps'],
      description: 'Seated version for back support',
      instructions: ['Sit with back support', 'Press barbell overhead', 'Lower to shoulder level'],
      safetyNotes: ['Keep feet planted', 'Don\'t bounce off chest']
    }
  ],

  'bench-press': [
    {
      id: 'dumbbell-bench-press-main',
      name: 'Dumbbell Bench Press',
      parentExerciseId: 'bench-press',
      parentExerciseName: 'Bench Press',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dumbbells', 'bench'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Unilateral chest pressing with dumbbells',
      instructions: ['Lie on bench with dumbbells', 'Press weights up and together', 'Lower with control'],
      safetyNotes: ['Keep feet planted', 'Full range of motion']
    },
    {
      id: 'push-up-bench-substitute',
      name: 'Push-up',
      parentExerciseId: 'bench-press',
      parentExerciseName: 'Bench Press',
      category: 'equipment',
      difficulty: 'beginner',
      equipment: ['none'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Bodyweight horizontal pushing',
      instructions: ['Start in plank position', 'Lower chest to ground', 'Push back up'],
      safetyNotes: ['Keep body straight', 'Full range of motion']
    },
    {
      id: 'chest-dips-substitute',
      name: 'Chest Dips',
      parentExerciseId: 'bench-press',
      parentExerciseName: 'Bench Press',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['dip-bars', 'parallel-bars'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Bodyweight chest exercise',
      instructions: ['Support body on dip bars', 'Lower by bending elbows', 'Push back up'],
      safetyNotes: ['Lean forward slightly for chest focus', 'Don\'t go too low']
    }
  ],

  // Rowing & Pulling
  'rowing-erg': [
    {
      id: 'skierg-substitute',
      name: 'SkiErg',
      parentExerciseId: 'rowing-erg',
      parentExerciseName: 'Rowing Erg',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['skierg'],
      muscleGroups: ['lats', 'core', 'legs'],
      description: 'Upper body focused cardio machine',
      instructions: ['Pull handles down and back', 'Engage core and lats', 'Return with control'],
      safetyNotes: ['Keep core engaged', 'Don\'t round back']
    },
    {
      id: 'air-bike-substitute',
      name: 'Air Bike',
      parentExerciseId: 'rowing-erg',
      parentExerciseName: 'Rowing Erg',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['air-bike'],
      muscleGroups: ['full-body'],
      description: 'Full body cardio alternative',
      instructions: ['Pedal and push/pull handles', 'Maintain steady rhythm', 'Engage full body'],
      safetyNotes: ['Start at moderate pace', 'Keep upright posture']
    }
  ],

  'lat-pulldown': [
    {
      id: 'pull-up-lat-substitute',
      name: 'Pull-up',
      parentExerciseId: 'lat-pulldown',
      parentExerciseName: 'Lat Pulldown',
      category: 'equipment',
      difficulty: 'advanced',
      equipment: ['pull-up-bar'],
      muscleGroups: ['lats', 'biceps', 'rhomboids'],
      description: 'Bodyweight version of lat pulldown',
      instructions: ['Hang from bar', 'Pull up until chin clears bar', 'Lower with control'],
      safetyNotes: ['Use assistance if needed', 'Full range of motion']
    },
    {
      id: 'inverted-row-lat-substitute',
      name: 'Inverted Row',
      parentExerciseId: 'lat-pulldown',
      parentExerciseName: 'Lat Pulldown',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['barbell', 'rack'],
      muscleGroups: ['lats', 'rhomboids', 'biceps'],
      description: 'Horizontal bodyweight pulling',
      instructions: ['Lie under bar', 'Pull chest to bar', 'Lower with control'],
      safetyNotes: ['Keep body straight', 'Squeeze shoulder blades']
    }
  ],

  // Curls & Arms
  'dumbbell-curl': [
    {
      id: 'cable-curl-substitute',
      name: 'Cable Curl',
      parentExerciseId: 'dumbbell-curl',
      parentExerciseName: 'Dumbbell Curl',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['cable-machine'],
      muscleGroups: ['biceps'],
      description: 'Constant tension bicep exercise',
      instructions: ['Stand with cable handle', 'Curl up contracting biceps', 'Lower with control'],
      safetyNotes: ['Keep elbows stable', 'Don\'t swing']
    },
    {
      id: 'ez-bar-curl-substitute',
      name: 'EZ-Bar Curl',
      parentExerciseId: 'dumbbell-curl',
      parentExerciseName: 'Dumbbell Curl',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['ez-bar'],
      muscleGroups: ['biceps'],
      description: 'Angled bar reduces wrist stress',
      instructions: ['Hold EZ-bar with underhand grip', 'Curl up', 'Lower with control'],
      safetyNotes: ['Keep elbows stable', 'Full range of motion']
    }
  ],

  // Functional/Sled/Specialty
  'sled-push': [
    {
      id: 'plate-push-substitute',
      name: 'Plate Push on Turf',
      parentExerciseId: 'sled-push',
      parentExerciseName: 'Sled Push',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['weight-plate', 'turf'],
      muscleGroups: ['quadriceps', 'glutes', 'core'],
      description: 'Push weight plate across turf surface',
      instructions: ['Place hands on plate', 'Push plate across turf', 'Maintain low position'],
      safetyNotes: ['Keep back straight', 'Drive through legs']
    },
    {
      id: 'heavy-farmers-walk-substitute',
      name: 'Heavy Farmer\'s Walk',
      parentExerciseId: 'sled-push',
      parentExerciseName: 'Sled Push',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['heavy-dumbbells', 'kettlebells'],
      muscleGroups: ['full-body', 'core'],
      description: 'Loaded carry exercise',
      instructions: ['Hold heavy weights at sides', 'Walk maintaining posture', 'Keep core engaged'],
      safetyNotes: ['Use appropriate weight', 'Maintain good posture']
    }
  ],

  'sled-pull': [
    {
      id: 'rope-pull-substitute',
      name: 'Rope Pull',
      parentExerciseId: 'sled-pull',
      parentExerciseName: 'Sled Pull',
      category: 'equipment',
      difficulty: 'intermediate',
      equipment: ['rope', 'anchor-point'],
      muscleGroups: ['lats', 'biceps', 'core'],
      description: 'Hand-over-hand rope pulling',
      instructions: ['Grab rope with both hands', 'Pull hand over hand', 'Maintain stable position'],
      safetyNotes: ['Keep core engaged', 'Don\'t lean back excessively']
    }
  ]
};

// Function to add substitutes to the exercise variations service
function addExerciseSubstitutes() {
  console.log('🚀 Adding Exercise Substitutes to Variations System...\n');
  
  const variationsFile = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
  
  if (!fs.existsSync(variationsFile)) {
    console.log('❌ Exercise variations service file not found');
    return;
  }
  
  let content = fs.readFileSync(variationsFile, 'utf8');
  
  // Find the EXERCISE_VARIATIONS mapping
  const variationsMatch = content.match(/export const EXERCISE_VARIATIONS: Record<string, ExerciseVariation\[\]> = \{([\s\S]*?)\};/);
  
  if (!variationsMatch) {
    console.log('❌ Could not find EXERCISE_VARIATIONS mapping');
    return;
  }
  
  let addedCount = 0;
  let updatedExercises = [];
  
  // Add new variations for each exercise
  Object.entries(EXERCISE_SUBSTITUTES).forEach(([exerciseId, substitutes]) => {
    // Check if exercise already has variations
    const existingVariationPattern = new RegExp(`'${exerciseId}':\\s*\\[([\\s\\S]*?)\\],?\\s*(?='[^']*':|\\};)`, 'g');
    
    if (content.match(existingVariationPattern)) {
      // Exercise already has variations, append to existing
      console.log(`✅ ${exerciseId} already has variations, appending substitutes...`);
      
      const substituteEntries = substitutes.map(sub => {
        return `    ${JSON.stringify(sub, null, 4).replace(/^/gm, '    ')}`;
      }).join(',\n');
      
      content = content.replace(existingVariationPattern, (match) => {
        // Remove the closing bracket and add new substitutes
        const withoutClosing = match.replace(/\s*\],?\s*$/, '');
        return `${withoutClosing},\n${substituteEntries}\n  ],`;
      });
      
      updatedExercises.push(exerciseId);
      addedCount += substitutes.length;
    } else {
      // Exercise doesn't have variations, add new entry
      console.log(`➕ Adding new variations for ${exerciseId}...`);
      
      const substituteEntries = substitutes.map(sub => {
        return `    ${JSON.stringify(sub, null, 4).replace(/^/gm, '    ')}`;
      }).join(',\n');
      
      const newEntry = `\n  '${exerciseId}': [\n${substituteEntries}\n  ],`;
      
      // Insert before the closing brace of EXERCISE_VARIATIONS
      const insertPosition = content.lastIndexOf('};', content.indexOf('export const EXERCISE_VARIATIONS'));
      content = content.substring(0, insertPosition) + newEntry + '\n' + content.substring(insertPosition);
      
      updatedExercises.push(exerciseId);
      addedCount += substitutes.length;
    }
  });
  
  // Write updated content back to file
  fs.writeFileSync(variationsFile, content);
  
  console.log(`\n🎉 Successfully added exercise substitutes!`);
  console.log(`📊 Summary:`);
  console.log(`   Total substitutes added: ${addedCount}`);
  console.log(`   Exercises updated: ${updatedExercises.length}`);
  console.log(`   Updated exercises: ${updatedExercises.join(', ')}`);
  
  console.log(`\n📈 Impact:`);
  console.log(`   Before: 9 exercises with variations (2.1%)`);
  console.log(`   After: ${9 + updatedExercises.length} exercises with variations`);
  console.log(`   New coverage: ${(((9 + updatedExercises.length) / 433) * 100).toFixed(1)}%`);
  
  console.log(`\n🔧 Categories Added:`);
  console.log(`   • Bodyweight & Calisthenics: 6 exercises`);
  console.log(`   • Squats & Lunges: 2 exercises`);
  console.log(`   • Deadlifts & Posterior Chain: 1 exercise`);
  console.log(`   • Pressing Movements: 2 exercises`);
  console.log(`   • Rowing & Pulling: 2 exercises`);
  console.log(`   • Curls & Arms: 1 exercise`);
  console.log(`   • Functional/Specialty: 2 exercises`);
  
  console.log(`\n🚀 Next Steps:`);
  console.log(`   1. Test the updated variations system`);
  console.log(`   2. Add remaining high-priority exercises`);
  console.log(`   3. Continue expanding to reach 50%+ coverage`);
}

// Run the script
addExerciseSubstitutes(); 