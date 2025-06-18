const fs = require('fs');
const path = require('path');

function addKeyExerciseSubstitutes() {
  try {
    const variationsPath = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
    
    if (!fs.existsSync(variationsPath)) {
      console.error('❌ Exercise variations service file not found');
      return;
    }

    let content = fs.readFileSync(variationsPath, 'utf8');
    
    // Key exercise substitutes in proper ExerciseVariation format
    const keySubstitutes = `
  // PUSH-UP ON KNEES VARIATIONS
  'push-up-on-knees': [
    {
      id: 'wall-push-ups',
      name: 'Wall Push-ups',
      parentExerciseId: 'push-up-on-knees',
      parentExerciseName: 'Push-up on Knees',
      category: 'regression',
      difficulty: 1,
      equipment: [],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Easiest push-up variation performed against a wall',
      instructions: ['Stand arm\\'s length from wall', 'Place hands on wall at shoulder height', 'Push body away from wall and return'],
      safetyNotes: ['Great for beginners', 'Focus on proper form']
    },
    {
      id: 'incline-push-ups',
      name: 'Incline Push-ups',
      parentExerciseId: 'push-up-on-knees',
      parentExerciseName: 'Push-up on Knees',
      category: 'progression',
      difficulty: 2,
      equipment: ['bench', 'box'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Push-ups with hands elevated on bench or box',
      instructions: ['Place hands on elevated surface', 'Maintain straight body line', 'Lower chest to surface and push up'],
      safetyNotes: ['Higher surface = easier', 'Keep core engaged']
    }
  ],

  // BARBELL DECLINE BENCH PRESS VARIATIONS
  'barbell-decline-bench-press': [
    {
      id: 'decline-dumbbell-press',
      name: 'Decline Dumbbell Press',
      parentExerciseId: 'barbell-decline-bench-press',
      parentExerciseName: 'Barbell Decline Bench Press',
      category: 'equipment',
      difficulty: 3,
      equipment: ['dumbbells', 'decline-bench'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Dumbbell version of decline bench press',
      instructions: ['Set bench to decline angle', 'Hold dumbbells with neutral grip', 'Press up and slightly back'],
      safetyNotes: ['Control the weight', 'Use spotter if needed']
    },
    {
      id: 'flat-bench-press',
      name: 'Flat Bench Press',
      parentExerciseId: 'barbell-decline-bench-press',
      parentExerciseName: 'Barbell Decline Bench Press',
      category: 'angle',
      difficulty: 3,
      equipment: ['barbell', 'bench'],
      muscleGroups: ['chest', 'shoulders', 'triceps'],
      description: 'Standard flat bench press as alternative to decline',
      instructions: ['Lie flat on bench', 'Grip barbell slightly wider than shoulders', 'Lower to chest and press up'],
      safetyNotes: ['Use proper form', 'Have spotter for heavy weights']
    }
  ],

  // HAMMERSTRENGTH HIGH ROW VARIATIONS
  'hammerstrength-high-row': [
    {
      id: 'high-cable-row',
      name: 'High Cable Row',
      parentExerciseId: 'hammerstrength-high-row',
      parentExerciseName: 'Hammerstrength High Row',
      category: 'equipment',
      difficulty: 3,
      equipment: ['cable-machine'],
      muscleGroups: ['lats', 'rhomboids', 'rear-delts'],
      description: 'Cable machine alternative to hammer strength high row',
      instructions: ['Set cable to high position', 'Pull handles to upper chest', 'Squeeze shoulder blades together'],
      safetyNotes: ['Control the weight', 'Don\\'t use momentum']
    },
    {
      id: 'face-pulls',
      name: 'Face Pulls',
      parentExerciseId: 'hammerstrength-high-row',
      parentExerciseName: 'Hammerstrength High Row',
      category: 'equipment',
      difficulty: 2,
      equipment: ['cable-machine', 'rope'],
      muscleGroups: ['rear-delts', 'rhomboids', 'traps'],
      description: 'Cable face pulls targeting similar muscles',
      instructions: ['Set cable to face height', 'Pull rope to face', 'Focus on rear delt contraction'],
      safetyNotes: ['Use light weight initially', 'Pull to face level']
    }
  ],

  // CONCENTRATION CURL VARIATIONS
  'concentration-curl': [
    {
      id: 'spider-curls',
      name: 'Spider Curls',
      parentExerciseId: 'concentration-curl',
      parentExerciseName: 'Concentration Curl',
      category: 'equipment',
      difficulty: 3,
      equipment: ['barbell', 'incline-bench'],
      muscleGroups: ['biceps'],
      description: 'Isolation curl performed on incline bench',
      instructions: ['Lie face down on incline bench', 'Let arms hang straight', 'Curl weight up without swinging'],
      safetyNotes: ['Use strict form', 'Don\\'t swing the weight']
    },
    {
      id: 'preacher-curls',
      name: 'Preacher Curls',
      parentExerciseId: 'concentration-curl',
      parentExerciseName: 'Concentration Curl',
      category: 'equipment',
      difficulty: 3,
      equipment: ['barbell', 'preacher-bench'],
      muscleGroups: ['biceps'],
      description: 'Isolation curl using preacher bench',
      instructions: ['Sit at preacher bench', 'Rest arms on pad', 'Curl weight with controlled motion'],
      safetyNotes: ['Don\\'t fully extend arms', 'Control the negative']
    }
  ],

  // DUMBBELL PULL-OVER VARIATIONS
  'dumbbell-pull-over': [
    {
      id: 'straight-arm-lat-pulldown',
      name: 'Straight-Arm Lat Pulldown',
      parentExerciseId: 'dumbbell-pull-over',
      parentExerciseName: 'Dumbbell Pull-over',
      category: 'equipment',
      difficulty: 2,
      equipment: ['cable-machine'],
      muscleGroups: ['lats', 'serratus'],
      description: 'Cable alternative targeting similar muscles',
      instructions: ['Stand at cable machine', 'Pull bar down with straight arms', 'Focus on lat contraction'],
      safetyNotes: ['Keep arms straight', 'Don\\'t use too much weight']
    },
    {
      id: 'lat-pulldowns',
      name: 'Lat Pulldowns',
      parentExerciseId: 'dumbbell-pull-over',
      parentExerciseName: 'Dumbbell Pull-over',
      category: 'equipment',
      difficulty: 2,
      equipment: ['lat-pulldown-machine'],
      muscleGroups: ['lats', 'rhomboids', 'biceps'],
      description: 'Machine alternative for lat development',
      instructions: ['Sit at lat pulldown machine', 'Pull bar to upper chest', 'Squeeze lats at bottom'],
      safetyNotes: ['Don\\'t pull behind neck', 'Control the weight']
    }
  ],`;

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
    content = content.slice(0, variationsEnd) + ',' + keySubstitutes + '\n' + content.slice(variationsEnd);

    fs.writeFileSync(variationsPath, content);
    
    console.log('✅ Successfully added key exercise substitutes');
    console.log('📊 Added 5 new exercise categories with multiple variations each');
    
    // Calculate coverage improvement
    const totalExercises = 433; // Known total from previous analysis
    const previousVariations = 26; // Previous coverage
    const newVariations = 5; // New exercises with variations
    const newCoverage = previousVariations + newVariations;
    const coveragePercentage = ((newCoverage / totalExercises) * 100).toFixed(1);
    
    console.log(`🎯 Exercise Variation Coverage: ${newCoverage}/${totalExercises} (${coveragePercentage}%)`);
    console.log(`📈 Improvement: +${newVariations} exercises (+${(newVariations/totalExercises*100).toFixed(1)}%)`);
    
    // Category breakdown
    console.log('\n📋 Key Substitutes Added:');
    console.log('   • Push-up on Knees → Wall Push-ups, Incline Push-ups');
    console.log('   • Barbell Decline Bench Press → Decline Dumbbell Press, Flat Bench Press');
    console.log('   • Hammerstrength High Row → High Cable Row, Face Pulls');
    console.log('   • Concentration Curl → Spider Curls, Preacher Curls');
    console.log('   • Dumbbell Pull-over → Straight-Arm Lat Pulldown, Lat Pulldowns');
    
    return true;
  } catch (error) {
    console.error('❌ Error adding key exercise substitutes:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  addKeyExerciseSubstitutes();
}

module.exports = { addKeyExerciseSubstitutes }; 