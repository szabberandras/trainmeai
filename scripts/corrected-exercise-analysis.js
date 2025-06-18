const fs = require('fs');
const path = require('path');

// Function to read TypeScript files and extract exercise IDs more comprehensively
function extractExerciseIds(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const exerciseIds = [];
  
  // Extract exercise IDs from the file - multiple patterns
  const patterns = [
    /id:\s*['"`]([^'"`]+)['"`]/g,
    /'([^']+)':\s*{[^}]*id:\s*['"`]\1['"`]/g,
    /["']([^"']+)["']:\s*{[^}]*id:\s*["']\1["']/g
  ];
  
  patterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      exerciseIds.push(match[1]);
    }
  });
  
  return [...new Set(exerciseIds)];
}

// Function to get all exercises from all category files
function getAllExercisesFromDatabase() {
  const categoriesDir = path.join(__dirname, '..', 'lib', 'exercises', 'categories');
  const allExercises = new Set();
  
  // List of category files
  const categoryFiles = [
    'agility_speed.ts',
    'balance.ts', 
    'bodyweight.ts',
    'cardio.ts',
    'core.ts',
    'crossfit.ts',
    'cycling.ts',
    'endurance.ts',
    'flexibility.ts',
    'kettlebell.ts',
    'lunge.ts',
    'mobility.ts',
    'plyometric.ts',
    'recovery_warm_up.ts',
    'running.ts',
    'stability.ts',
    'strength.ts',
    'swimming.ts',
    'technique.ts',
    'triathlon.ts',
    'hyrox.ts'
  ];
  
  categoryFiles.forEach(file => {
    const filePath = path.join(categoriesDir, file);
    const exerciseIds = extractExerciseIds(filePath);
    exerciseIds.forEach(id => allExercises.add(id));
  });
  
  return Array.from(allExercises);
}

// Function to get exercises with variations from variations service
function getExercisesWithVariations() {
  const variationsFile = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
  
  if (!fs.existsSync(variationsFile)) {
    console.log('❌ Exercise variations service not found');
    return [];
  }
  
  const content = fs.readFileSync(variationsFile, 'utf8');
  const exercisesWithVariations = [];
  
  // Extract exercise IDs that have variations
  const variationMatches = content.match(/'([^']+)':\s*\[/g);
  if (variationMatches) {
    variationMatches.forEach(match => {
      const exerciseId = match.match(/'([^']+)':/)[1];
      exercisesWithVariations.push(exerciseId);
    });
  }
  
  return exercisesWithVariations;
}

// Updated essential exercises with correct naming from database
const ESSENTIAL_EXERCISES_CORRECTED = {
  // These exist with correct names
  'pull-ups': 'EXISTS',
  'mountain-climber': 'EXISTS', 
  'dumbbell-curl': 'EXISTS (as dumbbell-curl)',
  'bent-over-barbell-row': 'EXISTS',
  'running': 'EXISTS (in running category)',
  'cycling': 'EXISTS (in cycling category)',
  'rowing': 'EXISTS (as rowing-erg)',
  'plank': 'EXISTS',
  'burpee': 'EXISTS',
  'squat': 'EXISTS',
  'lunge': 'EXISTS',
  'deadlift': 'EXISTS',
  'kettlebell-swing': 'EXISTS (as kettlebell-swings)',
  
  // These might be missing or named differently
  'sit-up': 'MISSING',
  'crunch': 'MISSING',
  'tricep-dip': 'MISSING (exists as dips)',
  'leg-press': 'MISSING',
  'jumping-rope': 'MISSING',
  'leg-raises': 'MISSING (exists as leg-raise)',
  'hollow-hold': 'MISSING',
  'child-pose': 'MISSING (exists as childs-pose)',
  'downward-dog': 'MISSING',
  'hamstring-stretch': 'MISSING',
  'turkish-get-up': 'MISSING (exists as kettlebell-turkish-get-up)',
  'farmer-walk': 'MISSING (exists as farmers-carry)',
  'wall-sit': 'MISSING',
  'calf-raise': 'MISSING (exists as calf-raises)'
};

// Function to check if exercise exists with variations of naming
function findExerciseVariations(exerciseName, allExercises) {
  const variations = [
    exerciseName,
    exerciseName.replace('-', ''),
    exerciseName.replace(/-/g, ''),
    exerciseName + 's',
    exerciseName.slice(0, -1), // remove 's' if present
    exerciseName.replace('bicep-curl', 'dumbbell-curl'),
    exerciseName.replace('tricep-dip', 'dips'),
    exerciseName.replace('leg-raises', 'leg-raise'),
    exerciseName.replace('jumping-rope', 'jump-rope'),
    exerciseName.replace('mountain-climbers', 'mountain-climber'),
    exerciseName.replace('pull-up', 'pull-ups'),
    exerciseName.replace('farmer-walk', 'farmers-carry'),
    exerciseName.replace('calf-raise', 'calf-raises'),
    exerciseName.replace('turkish-get-up', 'kettlebell-turkish-get-up'),
    exerciseName.replace('child-pose', 'childs-pose')
  ];
  
  const found = variations.filter(variation => allExercises.includes(variation));
  return found.length > 0 ? found : null;
}

// Function to analyze exercise gaps with corrected naming
function analyzeCorrectedExerciseGaps() {
  console.log('🔍 Corrected Exercise Database Analysis...\n');
  
  // Get current database state
  const currentExercises = getAllExercisesFromDatabase();
  const exercisesWithVariations = getExercisesWithVariations();
  
  console.log(`📊 Database Statistics:`);
  console.log(`   Total Exercises in Database: ${currentExercises.length}`);
  console.log(`   Exercises with Variations: ${exercisesWithVariations.length}`);
  console.log(`   Variation Coverage: ${((exercisesWithVariations.length / currentExercises.length) * 100).toFixed(1)}%\n`);
  
  // Check essential exercises with corrected naming
  console.log(`✅ Essential Exercises Status:`);
  const essentialList = [
    'pull-up', 'mountain-climbers', 'sit-up', 'crunch', 'barbell-row', 'bicep-curl', 
    'tricep-dip', 'leg-press', 'running', 'cycling', 'rowing', 'jumping-rope',
    'leg-raises', 'hollow-hold', 'child-pose', 'downward-dog', 'hamstring-stretch',
    'turkish-get-up', 'farmer-walk', 'wall-sit', 'calf-raise'
  ];
  
  const missingEssentials = [];
  const foundEssentials = [];
  
  essentialList.forEach(exercise => {
    const found = findExerciseVariations(exercise, currentExercises);
    if (found) {
      foundEssentials.push(`${exercise} → ${found.join(', ')}`);
    } else {
      missingEssentials.push(exercise);
    }
  });
  
  console.log(`   Found (${foundEssentials.length}):`);
  foundEssentials.forEach(exercise => {
    console.log(`     ✅ ${exercise}`);
  });
  
  console.log(`\n   Missing (${missingEssentials.length}):`);
  missingEssentials.forEach(exercise => {
    console.log(`     ❌ ${exercise}`);
  });
  
  // Check exercises without variations/substitutes
  const exercisesWithoutVariations = currentExercises.filter(exercise => 
    !exercisesWithVariations.includes(exercise)
  );
  
  console.log(`\n⚠️  Exercises Without Variations/Substitutes: ${exercisesWithoutVariations.length} out of ${currentExercises.length}`);
  console.log(`   Coverage: ${((exercisesWithVariations.length / currentExercises.length) * 100).toFixed(1)}%`);
  
  // Show sample exercises without variations by category
  const sampleWithoutVariations = exercisesWithoutVariations.slice(0, 20);
  console.log(`\n   Sample exercises without variations:`);
  sampleWithoutVariations.forEach(exercise => {
    console.log(`     - ${exercise}`);
  });
  
  if (exercisesWithoutVariations.length > 20) {
    console.log(`     ... and ${exercisesWithoutVariations.length - 20} more`);
  }
  
  // Show exercises that DO have variations
  console.log(`\n✅ Exercises WITH Variations (${exercisesWithVariations.length}):`);
  exercisesWithVariations.forEach(exercise => {
    console.log(`     - ${exercise}`);
  });
  
  // Priority recommendations
  console.log(`\n🎯 Priority Recommendations:\n`);
  
  if (missingEssentials.length > 0) {
    console.log(`1. ADD TRULY MISSING ESSENTIAL EXERCISES (${missingEssentials.length}):`);
    missingEssentials.forEach(exercise => {
      console.log(`   - ${exercise}`);
    });
    console.log();
  }
  
  console.log(`2. EXPAND VARIATIONS SYSTEM (CRITICAL):`);
  console.log(`   - Only ${exercisesWithVariations.length} out of ${currentExercises.length} exercises have variations`);
  console.log(`   - This means ${((exercisesWithoutVariations.length / currentExercises.length) * 100).toFixed(1)}% of exercises lack substitutes/progressions`);
  console.log(`   - Users cannot get equipment alternatives or difficulty modifications`);
  console.log();
  
  console.log(`3. HIGH-PRIORITY EXERCISES NEEDING VARIATIONS:`);
  const highPriorityForVariations = exercisesWithoutVariations.filter(exercise =>
    exercise.includes('squat') || 
    exercise.includes('push') || 
    exercise.includes('pull') || 
    exercise.includes('press') ||
    exercise.includes('curl') ||
    exercise.includes('row') ||
    exercise.includes('deadlift') ||
    exercise.includes('bench') ||
    exercise.includes('lunge')
  );
  
  console.log(`   Found ${highPriorityForVariations.length} high-priority exercises without variations:`);
  highPriorityForVariations.slice(0, 15).forEach(exercise => {
    console.log(`   - ${exercise}`);
  });
  
  if (highPriorityForVariations.length > 15) {
    console.log(`   ... and ${highPriorityForVariations.length - 15} more`);
  }
  
  // Summary
  console.log(`\n📋 CORRECTED SUMMARY:`);
  console.log(`   Essential Exercise Coverage: ${((foundEssentials.length / essentialList.length) * 100).toFixed(1)}%`);
  console.log(`   Variation System Coverage: ${((exercisesWithVariations.length / currentExercises.length) * 100).toFixed(1)}%`);
  console.log(`   Main Issue: Lack of exercise variations, not missing exercises`);
  
  console.log(`\n🚀 Recommended Actions:`);
  console.log(`   1. Focus on expanding the Exercise Variations System`);
  console.log(`   2. Add variations for the ${highPriorityForVariations.length} high-priority exercises`);
  if (missingEssentials.length > 0) {
    console.log(`   3. Add the ${missingEssentials.length} truly missing essential exercises`);
  }
  console.log(`   4. Gradually add variations for all ${exercisesWithoutVariations.length} exercises without variations`);
}

// Run the corrected analysis
analyzeCorrectedExerciseGaps(); 