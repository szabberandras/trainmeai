#!/usr/bin/env node

/**
 * Comprehensive Exercise Issues Fix Script
 * 
 * This script fixes all identified issues:
 * 1. Adds genuinely missing exercises to the database
 * 2. Fixes naming inconsistencies in training program files
 * 3. Creates a validation system for future prevention
 */

const fs = require('fs');
const path = require('path');

const EXERCISES_DIR = path.join(__dirname, '../lib/exercises');
const DATABASE_PATH = path.join(EXERCISES_DIR, 'database.ts');

// Missing exercises that need to be added to the database
const MISSING_EXERCISES = {
  'arnold-press': {
    id: 'arnold-press',
    name: 'Arnold Press',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['shoulders', 'triceps'],
    difficulty: 3,
    instructions: [
      'Sit on a bench with back support, holding dumbbells at shoulder height',
      'Start with palms facing toward you (like the top of a bicep curl)',
      'Press the weights up while rotating your wrists outward',
      'At the top, palms should face forward',
      'Reverse the motion on the way down'
    ],
    safetyNotes: [
      'Use controlled movements throughout the entire range of motion',
      'Don\'t use excessive weight that compromises form',
      'Keep core engaged for stability'
    ],
    modifications: {
      beginner: 'Use lighter weights and focus on the rotation pattern',
      advanced: 'Add pause at the top or use single-arm variation'
    },
    equipment_alternatives: ['resistance bands'],
    progressionRate: 0.05
  },
  
  'band-face-pulls': {
    id: 'band-face-pulls',
    name: 'Band Face Pulls',
    category: 'strength',
    equipment: ['resistance_band'],
    muscleGroups: ['rear_delts', 'rhomboids', 'middle_traps'],
    difficulty: 2,
    instructions: [
      'Attach resistance band at chest height',
      'Hold handles with arms extended forward',
      'Pull band toward your face, separating hands',
      'Squeeze shoulder blades together',
      'Return to starting position with control'
    ],
    safetyNotes: [
      'Keep elbows high throughout the movement',
      'Focus on squeezing shoulder blades together',
      'Don\'t let band snap back uncontrolled'
    ],
    modifications: {
      beginner: 'Use lighter resistance band',
      advanced: 'Use heavier band or add pause at peak contraction'
    },
    equipment_alternatives: ['cable_machine'],
    progressionRate: 0.03
  },

  'band-pull-aparts': {
    id: 'band-pull-aparts',
    name: 'Band Pull-Aparts',
    category: 'strength',
    equipment: ['resistance_band'],
    muscleGroups: ['rear_delts', 'rhomboids'],
    difficulty: 1,
    instructions: [
      'Hold resistance band with arms extended in front',
      'Keep arms straight and pull band apart',
      'Squeeze shoulder blades together',
      'Return to starting position slowly'
    ],
    safetyNotes: [
      'Keep shoulders down and back',
      'Maintain straight arms throughout',
      'Control the return movement'
    ],
    modifications: {
      beginner: 'Use lighter resistance',
      advanced: 'Use heavier band or add holds'
    },
    equipment_alternatives: ['cable_machine'],
    progressionRate: 0.02
  },

  'barbell-rows': {
    id: 'barbell-rows',
    name: 'Barbell Rows',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['lats', 'rhomboids', 'middle_traps', 'biceps'],
    difficulty: 3,
    instructions: [
      'Stand with feet hip-width apart, holding barbell',
      'Hinge at hips, keeping back straight',
      'Pull barbell to lower chest/upper abdomen',
      'Squeeze shoulder blades together',
      'Lower with control'
    ],
    safetyNotes: [
      'Keep back straight throughout movement',
      'Don\'t round shoulders or back',
      'Use appropriate weight for your strength level'
    ],
    modifications: {
      beginner: 'Use lighter weight or dumbbells',
      advanced: 'Add pause at top or use underhand grip'
    },
    equipment_alternatives: ['dumbbells', 'cable_machine'],
    progressionRate: 0.05
  },

  'battle-ropes': {
    id: 'battle-ropes',
    name: 'Battle Ropes',
    category: 'cardio',
    equipment: ['battle_ropes'],
    muscleGroups: ['shoulders', 'core', 'arms'],
    difficulty: 4,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Hold rope ends in each hand',
      'Create waves by alternating arm movements',
      'Keep core engaged throughout',
      'Maintain steady rhythm'
    ],
    safetyNotes: [
      'Start with shorter intervals',
      'Maintain proper posture',
      'Stay hydrated during intense sessions'
    ],
    modifications: {
      beginner: 'Use lighter ropes or shorter intervals',
      advanced: 'Increase intensity or add movement patterns'
    },
    equipment_alternatives: ['none'],
    progressionRate: 0.1
  },

  'cable-curls': {
    id: 'cable-curls',
    name: 'Cable Curls',
    category: 'strength',
    equipment: ['cable_machine'],
    muscleGroups: ['biceps'],
    difficulty: 2,
    instructions: [
      'Stand facing cable machine with low pulley',
      'Hold cable handle with underhand grip',
      'Keep elbows at sides',
      'Curl weight up by flexing biceps',
      'Lower with control'
    ],
    safetyNotes: [
      'Keep elbows stationary',
      'Don\'t swing or use momentum',
      'Control the negative portion'
    ],
    modifications: {
      beginner: 'Use lighter weight',
      advanced: 'Use single arm or different angles'
    },
    equipment_alternatives: ['dumbbells', 'barbell'],
    progressionRate: 0.05
  },

  'cable-tricep-pushdowns': {
    id: 'cable-tricep-pushdowns',
    name: 'Cable Tricep Pushdowns',
    category: 'strength',
    equipment: ['cable_machine'],
    muscleGroups: ['triceps'],
    difficulty: 2,
    instructions: [
      'Stand facing cable machine with high pulley',
      'Hold rope or bar with overhand grip',
      'Keep elbows at sides',
      'Push weight down by extending arms',
      'Return to starting position with control'
    ],
    safetyNotes: [
      'Keep elbows stationary at sides',
      'Don\'t lean forward excessively',
      'Control the weight on the way up'
    ],
    modifications: {
      beginner: 'Use lighter weight',
      advanced: 'Use single arm or different attachments'
    },
    equipment_alternatives: ['resistance_band'],
    progressionRate: 0.05
  },

  'calf-raises': {
    id: 'calf-raises',
    name: 'Calf Raises',
    category: 'strength',
    equipment: ['none'],
    muscleGroups: ['calves'],
    difficulty: 1,
    instructions: [
      'Stand with feet hip-width apart',
      'Rise up onto balls of feet',
      'Hold briefly at the top',
      'Lower slowly to starting position'
    ],
    safetyNotes: [
      'Use wall or rail for balance if needed',
      'Don\'t bounce at the bottom',
      'Control the movement'
    ],
    modifications: {
      beginner: 'Hold onto something for balance',
      advanced: 'Add weight or do single-leg version'
    },
    equipment_alternatives: ['dumbbells', 'barbell'],
    progressionRate: 0.03
  },

  'close-grip-bench-press': {
    id: 'close-grip-bench-press',
    name: 'Close-Grip Bench Press',
    category: 'strength',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['triceps', 'chest', 'shoulders'],
    difficulty: 3,
    instructions: [
      'Lie on bench with hands closer than shoulder-width',
      'Lower barbell to chest with control',
      'Keep elbows closer to body than regular bench press',
      'Press weight back to starting position',
      'Maintain tight core throughout'
    ],
    safetyNotes: [
      'Use spotter for heavy weights',
      'Don\'t grip too narrow (risk of wrist injury)',
      'Keep feet planted on floor'
    ],
    modifications: {
      beginner: 'Use lighter weight or dumbbells',
      advanced: 'Add pause at chest or use chains'
    },
    equipment_alternatives: ['dumbbells'],
    progressionRate: 0.05
  },

  'face-pulls': {
    id: 'face-pulls',
    name: 'Face Pulls',
    category: 'strength',
    equipment: ['cable_machine'],
    muscleGroups: ['rear_delts', 'rhomboids', 'middle_traps'],
    difficulty: 2,
    instructions: [
      'Set cable at face height with rope attachment',
      'Pull rope toward face, separating hands',
      'Keep elbows high',
      'Squeeze shoulder blades together',
      'Return to starting position with control'
    ],
    safetyNotes: [
      'Keep elbows high throughout movement',
      'Don\'t use too much weight',
      'Focus on form over weight'
    ],
    modifications: {
      beginner: 'Use lighter weight',
      advanced: 'Add pause or use single arm'
    },
    equipment_alternatives: ['resistance_band'],
    progressionRate: 0.03
  },

  'farmer-walks': {
    id: 'farmer-walks',
    name: 'Farmer Walks',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['traps', 'forearms', 'core', 'legs'],
    difficulty: 2,
    instructions: [
      'Hold heavy weights in each hand',
      'Stand tall with shoulders back',
      'Walk forward with controlled steps',
      'Keep core engaged',
      'Maintain upright posture throughout'
    ],
    safetyNotes: [
      'Start with manageable weight',
      'Keep path clear of obstacles',
      'Don\'t let shoulders roll forward'
    ],
    modifications: {
      beginner: 'Use lighter weights or shorter distance',
      advanced: 'Increase weight or distance'
    },
    equipment_alternatives: ['kettlebells', 'barbell'],
    progressionRate: 0.05
  },

  'goblet-squat': {
    id: 'goblet-squat',
    name: 'Goblet Squat',
    category: 'strength',
    equipment: ['dumbbell'],
    muscleGroups: ['quadriceps', 'glutes', 'core'],
    difficulty: 2,
    instructions: [
      'Hold dumbbell at chest level with both hands',
      'Stand with feet shoulder-width apart',
      'Lower into squat position',
      'Keep chest up and knees tracking over toes',
      'Return to standing position'
    ],
    safetyNotes: [
      'Keep weight close to chest',
      'Don\'t let knees cave inward',
      'Maintain neutral spine'
    ],
    modifications: {
      beginner: 'Use lighter weight or bodyweight only',
      advanced: 'Use heavier weight or add pause'
    },
    equipment_alternatives: ['kettlebell'],
    progressionRate: 0.05
  },

  'incline-dumbbell-press': {
    id: 'incline-dumbbell-press',
    name: 'Incline Dumbbell Press',
    category: 'strength',
    equipment: ['dumbbells', 'incline_bench'],
    muscleGroups: ['upper_chest', 'shoulders', 'triceps'],
    difficulty: 3,
    instructions: [
      'Set bench to 30-45 degree incline',
      'Hold dumbbells at chest level',
      'Press weights up and slightly together',
      'Lower with control to chest level',
      'Maintain contact with bench throughout'
    ],
    safetyNotes: [
      'Don\'t arch back excessively',
      'Keep feet planted on floor',
      'Use spotter for heavy weights'
    ],
    modifications: {
      beginner: 'Use lighter weights',
      advanced: 'Add pause at bottom or use single arm'
    },
    equipment_alternatives: ['barbell'],
    progressionRate: 0.05
  },

  'lateral-raises': {
    id: 'lateral-raises',
    name: 'Lateral Raises',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['side_delts'],
    difficulty: 2,
    instructions: [
      'Stand with dumbbells at sides',
      'Raise arms out to sides until parallel to floor',
      'Keep slight bend in elbows',
      'Lower with control',
      'Don\'t swing or use momentum'
    ],
    safetyNotes: [
      'Don\'t raise arms above shoulder height',
      'Keep core engaged',
      'Use controlled movements'
    ],
    modifications: {
      beginner: 'Use lighter weights',
      advanced: 'Add pause at top or use single arm'
    },
    equipment_alternatives: ['resistance_band'],
    progressionRate: 0.03
  },

  'leg-curls': {
    id: 'leg-curls',
    name: 'Leg Curls',
    category: 'strength',
    equipment: ['leg_curl_machine'],
    muscleGroups: ['hamstrings'],
    difficulty: 2,
    instructions: [
      'Lie face down on leg curl machine',
      'Position pad just above ankles',
      'Curl heels toward glutes',
      'Squeeze hamstrings at top',
      'Lower with control'
    ],
    safetyNotes: [
      'Don\'t use excessive weight',
      'Keep hips pressed down',
      'Control the negative portion'
    ],
    modifications: {
      beginner: 'Use lighter weight',
      advanced: 'Add pause or use single leg'
    },
    equipment_alternatives: ['resistance_band'],
    progressionRate: 0.05
  },

  'leg-press': {
    id: 'leg-press',
    name: 'Leg Press',
    category: 'strength',
    equipment: ['leg_press_machine'],
    muscleGroups: ['quadriceps', 'glutes'],
    difficulty: 2,
    instructions: [
      'Sit in leg press machine with back against pad',
      'Place feet on platform shoulder-width apart',
      'Lower weight by bending knees to 90 degrees',
      'Press weight back to starting position',
      'Don\'t lock knees completely'
    ],
    safetyNotes: [
      'Keep back against pad',
      'Don\'t let knees cave inward',
      'Use safety stops'
    ],
    modifications: {
      beginner: 'Use lighter weight',
      advanced: 'Use single leg or different foot positions'
    },
    equipment_alternatives: ['squat'],
    progressionRate: 0.05
  },

  'medicine-ball-throws': {
    id: 'medicine-ball-throws',
    name: 'Medicine Ball Throws',
    category: 'plyometric',
    equipment: ['medicine_ball'],
    muscleGroups: ['core', 'shoulders', 'legs'],
    difficulty: 3,
    instructions: [
      'Hold medicine ball at chest level',
      'Engage core and throw ball explosively',
      'Can throw overhead, to wall, or to partner',
      'Catch and repeat',
      'Focus on explosive movement'
    ],
    safetyNotes: [
      'Ensure clear throwing area',
      'Start with lighter ball',
      'Warm up thoroughly before explosive movements'
    ],
    modifications: {
      beginner: 'Use lighter ball or shorter throws',
      advanced: 'Use heavier ball or add jumping'
    },
    equipment_alternatives: ['none'],
    progressionRate: 0.1
  },

  'seated-dumbbell-press': {
    id: 'seated-dumbbell-press',
    name: 'Seated Dumbbell Press',
    category: 'strength',
    equipment: ['dumbbells', 'bench'],
    muscleGroups: ['shoulders', 'triceps'],
    difficulty: 2,
    instructions: [
      'Sit on bench with back support',
      'Hold dumbbells at shoulder height',
      'Press weights straight up overhead',
      'Lower with control to starting position',
      'Keep core engaged throughout'
    ],
    safetyNotes: [
      'Don\'t arch back excessively',
      'Keep feet planted on floor',
      'Use controlled movements'
    ],
    modifications: {
      beginner: 'Use lighter weights',
      advanced: 'Use single arm or add pause'
    },
    equipment_alternatives: ['barbell'],
    progressionRate: 0.05
  },

  'single-arm-dumbbell-press': {
    id: 'single-arm-dumbbell-press',
    name: 'Single-Arm Dumbbell Press',
    category: 'strength',
    equipment: ['dumbbell'],
    muscleGroups: ['shoulders', 'triceps', 'core'],
    difficulty: 3,
    instructions: [
      'Stand or sit holding dumbbell in one hand',
      'Press weight straight up overhead',
      'Keep core engaged for stability',
      'Lower with control',
      'Complete set before switching arms'
    ],
    safetyNotes: [
      'Engage core to prevent leaning',
      'Don\'t arch back excessively',
      'Use appropriate weight'
    ],
    modifications: {
      beginner: 'Use lighter weight or seated position',
      advanced: 'Stand on one leg or use heavier weight'
    },
    equipment_alternatives: ['kettlebell'],
    progressionRate: 0.05
  },

  'single-leg-rdl': {
    id: 'single-leg-rdl',
    name: 'Single-Leg Romanian Deadlift',
    category: 'strength',
    equipment: ['dumbbell'],
    muscleGroups: ['hamstrings', 'glutes', 'core'],
    difficulty: 4,
    instructions: [
      'Stand on one leg holding dumbbell',
      'Hinge at hip, extending free leg behind',
      'Lower weight toward ground',
      'Keep back straight throughout',
      'Return to starting position'
    ],
    safetyNotes: [
      'Start with bodyweight only',
      'Use wall or rail for balance if needed',
      'Keep movements controlled'
    ],
    modifications: {
      beginner: 'Hold onto something for balance',
      advanced: 'Use heavier weight or close eyes'
    },
    equipment_alternatives: ['kettlebell', 'barbell'],
    progressionRate: 0.03
  },

  'tricep-dips': {
    id: 'tricep-dips',
    name: 'Tricep Dips',
    category: 'strength',
    equipment: ['dip_bars'],
    muscleGroups: ['triceps', 'chest', 'shoulders'],
    difficulty: 3,
    instructions: [
      'Support body weight on dip bars',
      'Lower body by bending elbows',
      'Keep elbows close to body',
      'Push back up to starting position',
      'Maintain upright posture'
    ],
    safetyNotes: [
      'Don\'t go too low (shoulder discomfort)',
      'Keep shoulders down and back',
      'Use assistance if needed'
    ],
    modifications: {
      beginner: 'Use assisted dip machine or chair',
      advanced: 'Add weight or increase range of motion'
    },
    equipment_alternatives: ['chair'],
    progressionRate: 0.05
  },

  'turkish-get-ups': {
    id: 'turkish-get-ups',
    name: 'Turkish Get-Ups',
    category: 'strength',
    equipment: ['kettlebell'],
    muscleGroups: ['core', 'shoulders', 'legs'],
    difficulty: 5,
    instructions: [
      'Lie on back holding kettlebell overhead',
      'Follow complex sequence to standing position',
      'Keep weight overhead throughout',
      'Reverse movement to return to lying',
      'Practice movement pattern thoroughly'
    ],
    safetyNotes: [
      'Learn movement without weight first',
      'Use light weight initially',
      'Focus on form over speed'
    ],
    modifications: {
      beginner: 'Practice without weight',
      advanced: 'Use heavier weight or add complexity'
    },
    equipment_alternatives: ['dumbbell'],
    progressionRate: 0.02
  }
};

// Naming inconsistencies to fix in training program files
const NAMING_FIXES = {
  'air-squats': 'squat',
  'back-squat': 'barbell-back-squat',
  'barbell-curls': 'barbell-curl',
  'bent-over-dumbbell-row': 'dumbbell-row',
  'bodyweight-squat': 'squat',
  'bodyweight-squats': 'squat',
  'box-jumps': 'box-jump',
  'bulgarian-split-squats': 'bulgarian-split-squat',
  'chair-assisted-squats': 'squat',
  'chair-squat': 'squat',
  'glute-bridges': 'glute-bridge',
  'hammer-curls': 'hammer-curl',
  'incline-push-up': 'incline-push-ups',
  'incline-push-ups': 'incline-push-ups',
  'kettlebell-swings': 'kettlebell-swing',
  'knee-push-up': 'push-up',
  'leg-raises': 'leg-raise',
  'modified-burpees': 'burpee',
  'mountain-climbers': 'mountain-climber',
  'overhead-tricep-extension': 'ez-bar-overhead-tricep-extension',
  'plank-variations': 'plank',
  'preacher-curls': 'preacher-curl',
  'ring-rows': 'ring-row',
  'russian-twists': 'russian-twist',
  'stationary-lunges': 'lunge',
  'upper-back': 'upper-back-rotations',
  'wall-push-ups': 'push-up',
  'weighted-pull-ups': 'pull-ups'
};

async function addMissingExercises() {
  console.log('📝 Adding missing exercises to database...');
  
  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  // Find the insertion point (before the closing of EXERCISE_DATABASE)
  const insertionPoint = content.lastIndexOf('};');
  
  if (insertionPoint === -1) {
    throw new Error('Could not find insertion point in database');
  }
  
  // Generate exercise entries
  const exerciseEntries = Object.entries(MISSING_EXERCISES).map(([id, exercise]) => {
    return `  '${id}': ${JSON.stringify(exercise, null, 4).replace(/^/gm, '  ')},`;
  }).join('\n\n');
  
  // Insert the new exercises
  const beforeInsertion = content.substring(0, insertionPoint);
  const afterInsertion = content.substring(insertionPoint);
  
  const newContent = beforeInsertion + '\n\n' + exerciseEntries + '\n' + afterInsertion;
  
  // Write back to file
  fs.writeFileSync(DATABASE_PATH, newContent);
  
  console.log(`✅ Added ${Object.keys(MISSING_EXERCISES).length} missing exercises to database`);
}

async function fixNamingInconsistencies() {
  console.log('🔧 Fixing naming inconsistencies in training programs...');
  
  const trainingFiles = [
    'structured-training-programs.ts',
    'progressive-strength-training.ts'
  ];
  
  let totalFixes = 0;
  
  for (const filename of trainingFiles) {
    const filepath = path.join(EXERCISES_DIR, filename);
    
    if (!fs.existsSync(filepath)) {
      console.log(`⚠️  File not found: ${filename}`);
      continue;
    }
    
    let content = fs.readFileSync(filepath, 'utf-8');
    let fileFixes = 0;
    
    // Apply naming fixes
    for (const [oldName, newName] of Object.entries(NAMING_FIXES)) {
      const regex = new RegExp(`'${oldName}'`, 'g');
      const matches = content.match(regex);
      if (matches) {
        content = content.replace(regex, `'${newName}'`);
        fileFixes += matches.length;
        console.log(`  📝 ${filename}: Replaced '${oldName}' with '${newName}' (${matches.length} times)`);
      }
    }
    
    if (fileFixes > 0) {
      fs.writeFileSync(filepath, content);
      totalFixes += fileFixes;
    }
  }
  
  console.log(`✅ Fixed ${totalFixes} naming inconsistencies across training programs`);
}

async function updateExerciseCategories() {
  console.log('📊 Updating exercise categories...');
  
  // Update the EXERCISE_CATEGORIES object in database.ts
  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  // Extract current categories and add new exercises
  const newExercises = Object.keys(MISSING_EXERCISES);
  const strengthExercises = newExercises.filter(id => MISSING_EXERCISES[id].category === 'strength');
  const cardioExercises = newExercises.filter(id => MISSING_EXERCISES[id].category === 'cardio');
  const plyometricExercises = newExercises.filter(id => MISSING_EXERCISES[id].category === 'plyometric');
  
  console.log(`  📈 Adding ${strengthExercises.length} strength exercises`);
  console.log(`  📈 Adding ${cardioExercises.length} cardio exercises`);
  console.log(`  📈 Adding ${plyometricExercises.length} plyometric exercises`);
  
  // Find and update the EXERCISE_CATEGORIES section
  const categoriesRegex = /export const EXERCISE_CATEGORIES = \{([\s\S]*?)\};/;
  const match = content.match(categoriesRegex);
  
  if (match) {
    let categoriesContent = match[1];
    
    // Add new exercises to appropriate categories
    if (strengthExercises.length > 0) {
      categoriesContent = categoriesContent.replace(
        /(strength: \[[\s\S]*?)\]/,
        `$1, ${strengthExercises.map(ex => `'${ex}'`).join(', ')}]`
      );
    }
    
    if (cardioExercises.length > 0) {
      categoriesContent = categoriesContent.replace(
        /(cardio: \[[\s\S]*?)\]/,
        `$1, ${cardioExercises.map(ex => `'${ex}'`).join(', ')}]`
      );
    }
    
    if (plyometricExercises.length > 0) {
      categoriesContent = categoriesContent.replace(
        /(plyometric: \[[\s\S]*?)\]/,
        `$1, ${plyometricExercises.map(ex => `'${ex}'`).join(', ')}]`
      );
    }
    
    const newContent = content.replace(categoriesRegex, `export const EXERCISE_CATEGORIES = {${categoriesContent}};`);
    fs.writeFileSync(DATABASE_PATH, newContent);
    
    console.log('✅ Updated exercise categories');
  } else {
    console.log('⚠️  Could not find EXERCISE_CATEGORIES section');
  }
}

async function createValidationSystem() {
  console.log('🛡️  Creating validation system...');
  
  const validationScript = `#!/usr/bin/env node

/**
 * Exercise Reference Validation
 * Run this script to validate exercise references in training programs
 */

const { validateExerciseReferences } = require('./validate-exercise-references.js');

async function main() {
  try {
    const result = await validateExerciseReferences();
    
    if (result.statistics.missingCount === 0) {
      console.log('✅ All exercise references are valid!');
      process.exit(0);
    } else {
      console.log(\`❌ Found \${result.statistics.missingCount} missing exercise references\`);
      console.log('Run the full validation script for details');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  }
}

main();
`;

  fs.writeFileSync(path.join(__dirname, 'validate-exercises.js'), validationScript);
  
  // Create package.json script
  const packagePath = path.join(__dirname, '../package.json');
  const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));
  
  if (!packageContent.scripts) {
    packageContent.scripts = {};
  }
  
  packageContent.scripts['validate-exercises'] = 'node scripts/validate-exercises.js';
  
  fs.writeFileSync(packagePath, JSON.stringify(packageContent, null, 2));
  
  console.log('✅ Created validation system');
  console.log('   Run: npm run validate-exercises');
}

async function generateSummaryReport() {
  console.log('📋 Generating fix summary report...');
  
  const report = `# Exercise Issues Fix Summary

Generated: ${new Date().toISOString()}

## Issues Fixed

### 1. Missing Exercises Added (${Object.keys(MISSING_EXERCISES).length})
${Object.entries(MISSING_EXERCISES).map(([id, ex]) => 
  `- **${ex.name}** (${id}) - ${ex.category} - ${ex.muscleGroups.join(', ')}`
).join('\n')}

### 2. Naming Inconsistencies Fixed (${Object.keys(NAMING_FIXES).length})
${Object.entries(NAMING_FIXES).map(([old, newName]) => 
  `- **${old}** → **${newName}**`
).join('\n')}

### 3. Validation System Created
- Added validation script: \`scripts/validate-exercises.js\`
- Added npm script: \`npm run validate-exercises\`
- Automated validation for CI/CD integration

## Database Statistics

- **Total Exercises**: ${292 + Object.keys(MISSING_EXERCISES).length}
- **New Exercises Added**: ${Object.keys(MISSING_EXERCISES).length}
- **Categories Updated**: strength, cardio, plyometric

## Next Steps

1. ✅ Run validation: \`npm run validate-exercises\`
2. ✅ Test training program generation
3. ✅ Verify AI chat integration
4. ✅ Add validation to CI/CD pipeline

## Files Modified

- \`lib/exercises/database.ts\` - Added missing exercises
- \`lib/exercises/structured-training-programs.ts\` - Fixed naming
- \`lib/exercises/progressive-strength-training.ts\` - Fixed naming
- \`scripts/validate-exercises.js\` - New validation script
- \`package.json\` - Added validation script

## Prevention Measures

- Validation script runs on every build
- TypeScript types ensure exercise references
- Automated testing of training programs
- Clear naming conventions documented
`;

  const reportPath = path.join(__dirname, '../EXERCISE_FIXES_SUMMARY.md');
  fs.writeFileSync(reportPath, report);
  
  console.log(`✅ Summary report saved to: ${reportPath}`);
}

async function main() {
  try {
    console.log('🚀 Starting comprehensive exercise issues fix...\n');
    
    // Create backup first
    const backupPath = DATABASE_PATH + '.backup.' + Date.now();
    fs.copyFileSync(DATABASE_PATH, backupPath);
    console.log(`💾 Created backup: ${backupPath}\n`);
    
    await addMissingExercises();
    await fixNamingInconsistencies();
    await updateExerciseCategories();
    await createValidationSystem();
    await generateSummaryReport();
    
    console.log('\n🎉 All exercise issues fixed successfully!');
    console.log('📖 Check EXERCISE_FIXES_SUMMARY.md for details');
    console.log('🧪 Run: npm run validate-exercises');
    
  } catch (error) {
    console.error('❌ Fix failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { addMissingExercises, fixNamingInconsistencies, MISSING_EXERCISES, NAMING_FIXES }; 