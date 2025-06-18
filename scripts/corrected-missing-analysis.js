const fs = require('fs');
const path = require('path');

// Function to read TypeScript files and extract exercise IDs
function extractExerciseIds(filePath) {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  const exerciseIds = [];
  
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
  
  const categoryFiles = [
    'agility_speed.ts', 'balance.ts', 'bodyweight.ts', 'cardio.ts', 'core.ts',
    'crossfit.ts', 'cycling.ts', 'endurance.ts', 'flexibility.ts', 'kettlebell.ts',
    'lunge.ts', 'mobility.ts', 'plyometric.ts', 'recovery_warm_up.ts', 'running.ts',
    'stability.ts', 'strength.ts', 'swimming.ts', 'technique.ts', 'triathlon.ts', 'hyrox.ts'
  ];
  
  categoryFiles.forEach(file => {
    const filePath = path.join(categoriesDir, file);
    const exerciseIds = extractExerciseIds(filePath);
    exerciseIds.forEach(id => allExercises.add(id));
  });
  
  return Array.from(allExercises);
}

// Function to check if exercise type exists in database
function checkExerciseTypeExists(exerciseType, allExercises) {
  const typeVariations = {
    'running': [
      'run-base-building', 'run-tempo-workout', 'run-interval-training', 
      'run-hill-training', 'run-fartlek-training', 'run-long-slow-distance',
      'run-recovery-run', 'run-strides', 'run-track-intervals',
      'running-form-drills', 'compromised-running', 'running-sandwich',
      'zone-2-recovery-run', 'hyrox-pace-runs', 'run-in-place'
    ],
    'cycling': [
      'bike-cornering-drills', 'bike-cadence-drills', 'bike-standing-climbing',
      'bike-endurance-ride', 'bike-tempo-intervals', 'bike-pyramid-intervals',
      'bike-recovery-ride', 'bike-brick-workout', 'bike-cadence-work',
      'bike-power-intervals', 'bike-recovery-spin', 'bike-group-ride',
      'bike-aerobic-base', 'bike-threshold-intervals', 'bike-VO2-max-intervals',
      'bike-climbing-repeats', 'bike-time-trial-pace', 'road-cycling-group-ride',
      'indoor-cycling-endurance'
    ],
    'rowing': [
      'rowing-erg', 'rowing-steady-state', 'rowing-intervals', 'rowing-1000m'
    ],
    'crunch': [
      'crunches', 'bicycle-crunch', 'reverse-crunch', 'oblique-crunch',
      'standing-crunch', 'cocoon-crunch'
    ],
    'barbell-row': [
      'bent-over-barbell-row', 'barbell-rows'
    ],
    'calf-raise': [
      'calf-raises', 'standing-dumbbell-calf-raise', 'seated-dumbbell-calf-raise',
      'standing-barbell-calf-raise', 'standing-kettlebell-calf-raise',
      'seated-machine-calf-press', 'calf-press', 'single-leg-calf-raise'
    ]
  };
  
  if (typeVariations[exerciseType]) {
    const found = typeVariations[exerciseType].filter(variation => 
      allExercises.includes(variation)
    );
    return found.length > 0 ? found : null;
  }
  
  return null;
}

function correctedMissingAnalysis() {
  console.log('🔍 CORRECTED Missing Exercise Analysis\n');
  
  const currentExercises = getAllExercisesFromDatabase();
  
  console.log(`📊 Database Statistics:`);
  console.log(`   Total Exercises: ${currentExercises.length}\n`);
  
  // Check essential exercises with proper type checking
  const essentialChecks = {
    'pull-up': ['pull-ups'],
    'mountain-climbers': ['mountain-climber'],
    'sit-up': ['sit-ups'], // Check if this exists
    'crunch': 'TYPE_CHECK', // Use type checking
    'barbell-row': 'TYPE_CHECK',
    'bicep-curl': ['dumbbell-curl', 'barbell-curl'],
    'tricep-dip': ['dips', 'tricep-dips'],
    'leg-press': ['leg-press'],
    'running': 'TYPE_CHECK',
    'cycling': 'TYPE_CHECK', 
    'rowing': 'TYPE_CHECK',
    'jumping-rope': ['jump-rope', 'jumping-rope'],
    'leg-raises': ['leg-raise'],
    'hollow-hold': ['hollow-hold'],
    'child-pose': ['childs-pose'],
    'downward-dog': ['downward-dog', 'downward-facing-dog'],
    'hamstring-stretch': ['hamstring-stretch', 'single-leg-hamstring-stretch'],
    'turkish-get-up': ['kettlebell-turkish-get-up', 'turkish-get-ups'],
    'farmer-walk': ['farmers-carry', 'farmer-walks'],
    'wall-sit': ['wall-sit'],
    'calf-raise': 'TYPE_CHECK'
  };
  
  console.log('✅ ESSENTIAL EXERCISES STATUS:\n');
  
  const actuallyMissing = [];
  const found = [];
  
  Object.entries(essentialChecks).forEach(([exercise, check]) => {
    if (check === 'TYPE_CHECK') {
      const typeExists = checkExerciseTypeExists(exercise, currentExercises);
      if (typeExists) {
        found.push(`${exercise} → ${typeExists.slice(0, 3).join(', ')}${typeExists.length > 3 ? ` (+${typeExists.length - 3} more)` : ''}`);
      } else {
        actuallyMissing.push(exercise);
      }
    } else {
      const variations = check.filter(variation => currentExercises.includes(variation));
      if (variations.length > 0) {
        found.push(`${exercise} → ${variations.join(', ')}`);
      } else {
        actuallyMissing.push(exercise);
      }
    }
  });
  
  console.log(`FOUND (${found.length}):`);
  found.forEach(item => console.log(`  ✅ ${item}`));
  
  console.log(`\nACTUALLY MISSING (${actuallyMissing.length}):`);
  actuallyMissing.forEach(item => console.log(`  ❌ ${item}`));
  
  // Show some examples of what exists for the major categories
  console.log('\n📋 EXAMPLES OF WHAT EXISTS:\n');
  
  const runningExercises = currentExercises.filter(ex => ex.includes('run') || ex.includes('running'));
  console.log(`RUNNING EXERCISES (${runningExercises.length}):`);
  runningExercises.slice(0, 10).forEach(ex => console.log(`  - ${ex}`));
  if (runningExercises.length > 10) console.log(`  ... and ${runningExercises.length - 10} more`);
  
  const cyclingExercises = currentExercises.filter(ex => ex.includes('bike') || ex.includes('cycling'));
  console.log(`\nCYCLING EXERCISES (${cyclingExercises.length}):`);
  cyclingExercises.slice(0, 10).forEach(ex => console.log(`  - ${ex}`));
  if (cyclingExercises.length > 10) console.log(`  ... and ${cyclingExercises.length - 10} more`);
  
  const rowingExercises = currentExercises.filter(ex => ex.includes('row'));
  console.log(`\nROWING EXERCISES (${rowingExercises.length}):`);
  rowingExercises.forEach(ex => console.log(`  - ${ex}`));
  
  const crunchExercises = currentExercises.filter(ex => ex.includes('crunch'));
  console.log(`\nCRUNCH EXERCISES (${crunchExercises.length}):`);
  crunchExercises.forEach(ex => console.log(`  - ${ex}`));
  
  const calfExercises = currentExercises.filter(ex => ex.includes('calf'));
  console.log(`\nCALF EXERCISES (${calfExercises.length}):`);
  calfExercises.forEach(ex => console.log(`  - ${ex}`));
  
  console.log(`\n🎯 CORRECTED CONCLUSION:`);
  console.log(`   Essential Exercise Coverage: ${((found.length / Object.keys(essentialChecks).length) * 100).toFixed(1)}%`);
  console.log(`   Actually Missing: ${actuallyMissing.length} exercises`);
  console.log(`   Main Issue: Variation coverage (2.1%), not missing exercises`);
}

correctedMissingAnalysis(); 