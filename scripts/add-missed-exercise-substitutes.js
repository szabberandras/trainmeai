const fs = require('fs');
const path = require('path');

function addMissedExerciseSubstitutes() {
  try {
    const variationsPath = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
    
    if (!fs.existsSync(variationsPath)) {
      console.error('❌ Exercise variations service file not found');
      return;
    }

    let content = fs.readFileSync(variationsPath, 'utf8');
    
    // The 6 missed exercises from user's original list
    const missedSubstitutes = `
  // KETTLEBELL ALTERNATING ROW VARIATIONS
  'kettlebell-alternating-row': [
    {
      id: 'dumbbell-alternating-row-kb',
      name: 'Dumbbell Alternating Row',
      parentExerciseId: 'kettlebell-alternating-row',
      parentExerciseName: 'Kettlebell Alternating Row',
      category: 'equipment',
      difficulty: 3,
      equipment: ['dumbbells'],
      muscleGroups: ['lats', 'rhomboids', 'rear-delts', 'core'],
      description: 'Alternating dumbbell rows instead of kettlebell',
      instructions: ['Hold dumbbells in bent-over position', 'Row one arm at a time', 'Alternate sides'],
      safetyNotes: ['Keep hips square', 'Control the non-working arm']
    },
    {
      id: 'renegade-row-kb',
      name: 'Renegade Row',
      parentExerciseId: 'kettlebell-alternating-row',
      parentExerciseName: 'Kettlebell Alternating Row',
      category: 'progression',
      difficulty: 4,
      equipment: ['dumbbells'],
      muscleGroups: ['lats', 'rhomboids', 'core', 'shoulders'],
      description: 'Plank position alternating rows for added core challenge',
      instructions: ['Start in plank with dumbbells', 'Row one dumbbell at a time', 'Maintain plank position'],
      safetyNotes: ['Keep hips stable', 'Don\\'t rotate torso']
    }
  ],

  // BIRD-DOG ROWS VARIATIONS
  'bird-dog-rows': [
    {
      id: 'plank-with-dumbbell-row-bird',
      name: 'Plank with Dumbbell Row',
      parentExerciseId: 'bird-dog-rows',
      parentExerciseName: 'Bird-Dog Rows',
      category: 'stability',
      difficulty: 4,
      equipment: ['dumbbells'],
      muscleGroups: ['lats', 'core', 'shoulders'],
      description: 'Plank position with single-arm row',
      instructions: ['Start in plank with dumbbells', 'Row one dumbbell', 'Maintain plank stability'],
      safetyNotes: ['Keep core tight', 'Don\\'t let hips sag']
    },
    {
      id: 'quadruped-dumbbell-row-bird',
      name: 'Quadruped Dumbbell Row',
      parentExerciseId: 'bird-dog-rows',
      parentExerciseName: 'Bird-Dog Rows',
      category: 'stability',
      difficulty: 3,
      equipment: ['dumbbells'],
      muscleGroups: ['lats', 'core', 'glutes'],
      description: 'Hands and knees position with dumbbell row',
      instructions: ['Start on hands and knees', 'Row dumbbell with one arm', 'Keep spine neutral'],
      safetyNotes: ['Don\\'t rotate spine', 'Keep hips level']
    }
  ],

  // LEG RAISE WITH DUMBBELL PULL-OVER VARIATIONS
  'leg-raise-with-dumbbell-pull-over': [
    {
      id: 'leg-raise-separate-pullover',
      name: 'Leg Raise (Separate)',
      parentExerciseId: 'leg-raise-with-dumbbell-pull-over',
      parentExerciseName: 'Leg Raise with Dumbbell Pull-Over',
      category: 'range',
      difficulty: 3,
      equipment: [],
      muscleGroups: ['abs', 'hip-flexors'],
      description: 'Leg raises performed separately from pull-overs',
      instructions: ['Lie on back', 'Raise legs to 90 degrees', 'Lower with control'],
      safetyNotes: ['Keep lower back pressed down', 'Control the movement']
    },
    {
      id: 'dumbbell-pullover-separate-leg',
      name: 'Dumbbell Pull-Over (Separate)',
      parentExerciseId: 'leg-raise-with-dumbbell-pull-over',
      parentExerciseName: 'Leg Raise with Dumbbell Pull-Over',
      category: 'range',
      difficulty: 3,
      equipment: ['dumbbell', 'bench'],
      muscleGroups: ['lats', 'chest', 'triceps'],
      description: 'Dumbbell pull-overs performed separately from leg raises',
      instructions: ['Lie on bench with dumbbell', 'Lower weight behind head', 'Pull back over chest'],
      safetyNotes: ['Control the stretch', 'Don\\'t go too deep']
    }
  ],

  // BARBELL BICEP DRAG CURL VARIATIONS
  'barbell-bicep-drag-curl': [
    {
      id: 'cable-drag-curls-barbell',
      name: 'Cable Drag Curls',
      parentExerciseId: 'barbell-bicep-drag-curl',
      parentExerciseName: 'Barbell Bicep Drag Curl',
      category: 'equipment',
      difficulty: 3,
      equipment: ['cable-machine'],
      muscleGroups: ['biceps'],
      description: 'Drag curl movement using cable machine',
      instructions: ['Set cable low', 'Drag handle up body', 'Keep elbows back'],
      safetyNotes: ['Control the movement', 'Focus on form']
    },
    {
      id: 'standing-dumbbell-curl-drag',
      name: 'Standing Dumbbell Curl',
      parentExerciseId: 'barbell-bicep-drag-curl',
      parentExerciseName: 'Barbell Bicep Drag Curl',
      category: 'equipment',
      difficulty: 2,
      equipment: ['dumbbells'],
      muscleGroups: ['biceps'],
      description: 'Standard dumbbell curls as alternative',
      instructions: ['Hold dumbbells at sides', 'Curl with controlled motion', 'Keep elbows stable'],
      safetyNotes: ['Don\\'t swing weights', 'Full range of motion']
    }
  ],

  // LATERAL WRIST CURLS WITH DUMBBELLS VARIATIONS
  'lateral-wrist-curls-with-dumbbells': [
    {
      id: 'dumbbell-wrist-curls-lateral',
      name: 'Dumbbell Wrist Curls',
      parentExerciseId: 'lateral-wrist-curls-with-dumbbells',
      parentExerciseName: 'Lateral Wrist Curls with Dumbbells',
      category: 'angle',
      difficulty: 1,
      equipment: ['dumbbells'],
      muscleGroups: ['forearms'],
      description: 'Standard wrist curls with dumbbells',
      instructions: ['Rest forearms on bench', 'Curl wrists up and down', 'Control the movement'],
      safetyNotes: ['Use light weight', 'Full range of motion']
    },
    {
      id: 'barbell-wrist-curls-lateral',
      name: 'Barbell Wrist Curls',
      parentExerciseId: 'lateral-wrist-curls-with-dumbbells',
      parentExerciseName: 'Lateral Wrist Curls with Dumbbells',
      category: 'equipment',
      difficulty: 2,
      equipment: ['barbell'],
      muscleGroups: ['forearms'],
      description: 'Wrist curls using barbell instead of dumbbells',
      instructions: ['Rest forearms on bench', 'Curl barbell with wrists', 'Control both directions'],
      safetyNotes: ['Use very light weight', 'Smooth movement']
    }
  ],

  // SANDBAG LUNGES 100M VARIATIONS
  'sandbag-lunges-100m': [
    {
      id: 'farmers-walk-with-dumbbells-100m',
      name: 'Farmer\'s Walk with Dumbbells',
      parentExerciseId: 'sandbag-lunges-100m',
      parentExerciseName: 'Sandbag Lunges (100m)',
      category: 'equipment',
      difficulty: 3,
      equipment: ['dumbbells'],
      muscleGroups: ['traps', 'forearms', 'core', 'legs'],
      description: 'Loaded carry using dumbbells for distance',
      instructions: ['Hold heavy dumbbells at sides', 'Walk for 100m distance', 'Maintain upright posture'],
      safetyNotes: ['Keep shoulders back', 'Don\\'t let weights pull you forward']
    },
    {
      id: 'walking-lunges-with-dumbbells-100m',
      name: 'Walking Lunges with Dumbbells',
      parentExerciseId: 'sandbag-lunges-100m',
      parentExerciseName: 'Sandbag Lunges (100m)',
      category: 'equipment',
      difficulty: 3,
      equipment: ['dumbbells'],
      muscleGroups: ['quadriceps', 'glutes', 'hamstrings'],
      description: 'Walking lunges with dumbbells for 100m distance',
      instructions: ['Hold dumbbells at sides', 'Lunge forward alternating legs', 'Continue for 100m'],
      safetyNotes: ['Control each lunge', 'Keep torso upright']
    }
  ]`;

    // Find the end of the EXERCISE_VARIATIONS object
    const variationsStart = content.indexOf('export const EXERCISE_VARIATIONS');
    if (variationsStart === -1) {
      console.error('❌ Could not find EXERCISE_VARIATIONS object');
      return;
    }

    // Find the closing brace of the EXERCISE_VARIATIONS object
    let braceCount = 0;
    let variationsEnd = -1;
    let inObject = false;
    
    for (let i = variationsStart; i < content.length; i++) {
      if (content[i] === '{') {
        if (!inObject) inObject = true;
        braceCount++;
      } else if (content[i] === '}') {
        braceCount--;
        if (braceCount === 0 && inObject) {
          variationsEnd = i;
          break;
        }
      }
    }

    if (variationsEnd === -1) {
      console.error('❌ Could not find end of EXERCISE_VARIATIONS object');
      return;
    }

    // Insert new substitutes before the closing brace
    content = content.slice(0, variationsEnd) + ',' + missedSubstitutes + '\n' + content.slice(variationsEnd);

    fs.writeFileSync(variationsPath, content);
    
    console.log('✅ Successfully added all 6 missed exercise substitutes');
    console.log('📊 Added 6 new exercise categories with 12 total variations');
    
    // Calculate coverage improvement
    const totalExercises = 433; // Known total from previous analysis
    const previousVariations = 48; // Previous coverage
    const newVariations = 6; // New exercises with variations
    const newCoverage = previousVariations + newVariations;
    const coveragePercentage = ((newCoverage / totalExercises) * 100).toFixed(1);
    
    console.log(`🎯 Exercise Variation Coverage: ${newCoverage}/${totalExercises} (${coveragePercentage}%)`);
    console.log(`📈 Improvement: +${newVariations} exercises (+${(newVariations/totalExercises*100).toFixed(1)}%)`);
    
    // Category breakdown
    console.log('\n📋 Missed Substitutes Now Added:');
    console.log('   • Kettlebell Alternating Row → Dumbbell Alternating Row, Renegade Row');
    console.log('   • Bird-Dog Rows → Plank with Dumbbell Row, Quadruped Dumbbell Row');
    console.log('   • Leg Raise with Dumbbell Pull-Over → Leg Raise (Separate), Dumbbell Pull-Over (Separate)');
    console.log('   • Barbell Bicep Drag Curl → Cable Drag Curls, Standing Dumbbell Curl');
    console.log('   • Lateral Wrist Curls with Dumbbells → Dumbbell Wrist Curls, Barbell Wrist Curls');
    console.log('   • Sandbag Lunges (100m) → Farmer\'s Walk, Walking Lunges with Dumbbells');
    
    return true;
  } catch (error) {
    console.error('❌ Error adding missed exercise substitutes:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  addMissedExerciseSubstitutes();
}

module.exports = { addMissedExerciseSubstitutes }; 