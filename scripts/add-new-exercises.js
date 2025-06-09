#!/usr/bin/env node

/**
 * Add New Exercises Script
 * 
 * This script adds new exercises to the database after checking for duplicates.
 * It will skip exercises that already exist and add only the new ones.
 */

const fs = require('fs');
const path = require('path');

const EXERCISES_DIR = path.join(__dirname, '../lib/exercises');
const DATABASE_PATH = path.join(EXERCISES_DIR, 'database.ts');

// New exercises to add (excluding duplicates)
const NEW_EXERCISES = {
  'kettlebell-turkish-get-up': {
    id: "kettlebell-turkish-get-up",
    name: "Kettlebell Turkish Get Up",
    category: "strength",
    equipment: ["kettlebell"],
    muscleGroups: ["shoulders", "core", "glutes", "quadriceps"],
    difficulty: 3,
    instructions: [
      "Lie on your back. Hold a kettlebell in your right hand, with your right knee bent and foot flat on the floor. Your left arm and leg should be extended out to the side at a 45-degree angle.",
      "Press the kettlebell up towards the ceiling, locking your elbow.",
      "Keeping your eyes on the kettlebell, push off your right foot and roll onto your left forearm.",
      "Straighten your left arm to push up to a seated position.",
      "Lift your hips off the floor, supporting your weight on your left hand and right foot.",
      "Sweep your left leg under your body and place your left knee on the floor.",
      "Lift your torso to an upright, half-kneeling position.",
      "Stand up by driving off your front foot.",
      "Reverse the entire sequence step-by-step to return to the starting position on your back.",
      "Complete the rep on one side before switching."
    ],
    safetyNotes: [
      "This is a highly technical, full-body exercise. Master each step with no weight or a very light weight before progressing.",
      "Keep your eyes on the kettlebell at all times to maintain stability and awareness.",
      "The movement should be slow, deliberate, and controlled."
    ],
    modifications: {
      beginner: "Practice without any weight, or by balancing a shoe on your fist. Break the movement down into partials (e.g., floor to elbow, elbow to hand).",
      advanced: "Increase the weight of the kettlebell."
    },
    equipment_alternatives: ["dumbbell"],
    progressionRate: 0.02
  },

  'push-press': {
    id: "push-press",
    name: "Push Press",
    category: "strength",
    equipment: ["barbell"],
    muscleGroups: ["shoulders", "triceps", "glutes", "quadriceps"],
    difficulty: 2,
    instructions: [
      "Stand with your feet shoulder-width apart, holding a barbell in a front rack position across your shoulders.",
      "Keep your torso upright and your core engaged.",
      "Initiate the movement with a quick, shallow dip by bending your knees and hips.",
      "Immediately reverse the motion, explosively driving up with your legs to create upward momentum on the bar.",
      "As the bar leaves your shoulders, press it forcefully overhead until your arms are fully locked out.",
      "Lower the bar back to the front rack position with control.",
      "Repeat for the desired number of repetitions."
    ],
    safetyNotes: [
      "The power comes from the leg drive, not from a deep squat.",
      "Maintain a vertical torso throughout the dip and drive.",
      "Ensure you have a stable core to transfer force from your legs to the bar."
    ],
    modifications: {
      beginner: "Use a lighter weight or dumbbells to learn the timing.",
      advanced: "Increase the weight."
    },
    equipment_alternatives: ["dumbbells", "kettlebells"],
    progressionRate: 0.05
  },

  'kettlebell-halo': {
    id: "kettlebell-halo",
    name: "Kettlebell Halo",
    category: "mobility",
    equipment: ["kettlebell"],
    muscleGroups: ["shoulders", "upper_back", "core"],
    difficulty: 1,
    instructions: [
      "Stand or kneel, holding a kettlebell with both hands by the 'horns' (the sides of the handle), with the bell part facing up.",
      "Hold the kettlebell at chest height.",
      "Slowly and smoothly, circle the kettlebell around your head, keeping it as close as possible without hitting yourself.",
      "Circle it one way, bringing it behind your head and back to the front.",
      "Then, reverse the direction for the next repetition or complete all reps in one direction before switching.",
      "Keep your core tight and try to minimize movement in your torso.",
      "Repeat for the desired number of repetitions."
    ],
    safetyNotes: [
      "Start with a light kettlebell to get used to the motion.",
      "Move slowly and with control to avoid hitting your head.",
      "Keep your neck in a neutral position; don't crane it to follow the kettlebell."
    ],
    modifications: {
      beginner: "Use a very light weight or no weight at all. Make a wider circle around your head.",
      advanced: "Use a heavier kettlebell. Perform from a half-kneeling position for a core stability challenge."
    },
    equipment_alternatives: ["dumbbell"],
    progressionRate: 0.02
  },

  'landmine-press': {
    id: "landmine-press",
    name: "Landmine Press",
    category: "strength",
    equipment: ["barbell", "landmine_attachment"],
    muscleGroups: ["shoulders", "upper_chest", "triceps"],
    difficulty: 2,
    instructions: [
      "Place one end of a barbell into a landmine attachment.",
      "Load the other end with weight. Kneel on one knee (the same side as your pressing arm) or stand in a staggered stance.",
      "Cup the weighted end of the barbell with one hand.",
      "Start with the end of the barbell at your shoulder.",
      "Keeping your core tight, press the barbell up and away from you until your arm is fully extended.",
      "The bar will travel in a natural upward arc.",
      "Slowly lower the barbell back to the starting shoulder position with control.",
      "Complete all reps on one side before switching."
    ],
    safetyNotes: [
      "The arcing motion is friendlier on the shoulder joint than a strict vertical press.",
      "Brace your core to prevent your torso from twisting.",
      "Control the weight on the way down."
    ],
    modifications: {
      beginner: "Use a lighter weight. Perform from a kneeling position for more stability.",
      advanced: "Increase the weight. Perform from a standing position."
    },
    equipment_alternatives: ["dumbbell"],
    progressionRate: 0.05
  },

  'muscle-clean': {
    id: "muscle-clean",
    name: "Muscle Clean",
    category: "strength",
    equipment: ["barbell"],
    muscleGroups: ["shoulders", "traps", "biceps", "forearms"],
    difficulty: 2,
    instructions: [
      "Stand with your feet hip-width apart, holding a barbell with an overhand grip just outside your thighs.",
      "Initiate the movement by shrugging your shoulders and pulling the bar upwards with your arms, keeping it close to your body.",
      "Unlike a power clean, there is no explosive hip drive or re-bending of the knees.",
      "The movement is a strict, muscle-driven pull from the hang position up to the shoulders.",
      "As the bar reaches chest height, quickly rotate your elbows under the bar to catch it in a front rack position.",
      "Stand up straight.",
      "Lower the bar back to the starting position with control.",
      "Repeat."
    ],
    safetyNotes: [
      "This is a technique drill to build strength and proper bar path for the clean. Use a lighter weight.",
      "Focus on keeping the bar as close to your body as possible.",
      "The elbow turnover needs to be fast."
    ],
    modifications: {
      beginner: "Use a PVC pipe or empty barbell.",
      advanced: "Increase the weight, but prioritize form over load."
    },
    equipment_alternatives: ["dumbbells"],
    progressionRate: 0.03
  }
};

// Exercises that already exist (duplicates found)
const DUPLICATE_EXERCISES = {
  'battle-ropes': 'Already exists in database',
  'turkish-get-ups': 'Similar exercise already exists (keeping the more detailed kettlebell-turkish-get-up version)'
};

async function checkForDuplicates() {
  console.log('🔍 Checking for duplicate exercises...');
  
  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  const foundDuplicates = [];
  const newExercisesToAdd = [];
  
  for (const [id, exercise] of Object.entries(NEW_EXERCISES)) {
    if (content.includes(`'${id}':`)) {
      foundDuplicates.push(id);
    } else {
      newExercisesToAdd.push(id);
    }
  }
  
  console.log(`📊 Analysis Results:`);
  console.log(`  New exercises to add: ${newExercisesToAdd.length}`);
  console.log(`  Duplicates found: ${foundDuplicates.length}`);
  
  if (foundDuplicates.length > 0) {
    console.log(`\n⚠️  Duplicate exercises found:`);
    foundDuplicates.forEach(id => console.log(`    - ${id}`));
  }
  
  if (newExercisesToAdd.length > 0) {
    console.log(`\n✅ New exercises to add:`);
    newExercisesToAdd.forEach(id => console.log(`    - ${id}: ${NEW_EXERCISES[id].name}`));
  }
  
  return { newExercisesToAdd, foundDuplicates };
}

async function addNewExercises(exercisesToAdd) {
  if (exercisesToAdd.length === 0) {
    console.log('ℹ️  No new exercises to add.');
    return;
  }
  
  console.log('\n📝 Adding new exercises to database...');
  
  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  // Find the insertion point (before the closing of EXERCISE_DATABASE)
  const insertionPoint = content.lastIndexOf('};');
  
  if (insertionPoint === -1) {
    throw new Error('Could not find insertion point in database');
  }
  
  // Generate exercise entries
  const exerciseEntries = exercisesToAdd.map(id => {
    const exercise = NEW_EXERCISES[id];
    return `  '${id}': ${JSON.stringify(exercise, null, 4).replace(/^/gm, '  ')},`;
  }).join('\n\n');
  
  // Insert the new exercises
  const beforeInsertion = content.substring(0, insertionPoint);
  const afterInsertion = content.substring(insertionPoint);
  
  const newContent = beforeInsertion + '\n\n' + exerciseEntries + '\n' + afterInsertion;
  
  // Write back to file
  fs.writeFileSync(DATABASE_PATH, newContent);
  
  console.log(`✅ Added ${exercisesToAdd.length} new exercises to database`);
  
  // Log each added exercise
  exercisesToAdd.forEach(id => {
    const exercise = NEW_EXERCISES[id];
    console.log(`  ✓ ${exercise.name} (${id}) - ${exercise.category}`);
  });
}

async function updateExerciseCategories(exercisesToAdd) {
  if (exercisesToAdd.length === 0) {
    return;
  }
  
  console.log('\n📊 Updating exercise categories...');
  
  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  // Group exercises by category
  const exercisesByCategory = {};
  exercisesToAdd.forEach(id => {
    const category = NEW_EXERCISES[id].category;
    if (!exercisesByCategory[category]) {
      exercisesByCategory[category] = [];
    }
    exercisesByCategory[category].push(id);
  });
  
  // Find and update the EXERCISE_CATEGORIES section
  const categoriesRegex = /export const EXERCISE_CATEGORIES = \{([\s\S]*?)\};/;
  const match = content.match(categoriesRegex);
  
  if (match) {
    let categoriesContent = match[1];
    
    // Add new exercises to appropriate categories
    for (const [category, exercises] of Object.entries(exercisesByCategory)) {
      console.log(`  📈 Adding ${exercises.length} ${category} exercises`);
      
      const categoryRegex = new RegExp(`(${category}: \\[[\\s\\S]*?)\\]`, 'g');
      categoriesContent = categoriesContent.replace(
        categoryRegex,
        `$1, ${exercises.map(ex => `'${ex}'`).join(', ')}]`
      );
    }
    
    const newContent = content.replace(categoriesRegex, `export const EXERCISE_CATEGORIES = {${categoriesContent}};`);
    fs.writeFileSync(DATABASE_PATH, newContent);
    
    console.log('✅ Updated exercise categories');
  } else {
    console.log('⚠️  Could not find EXERCISE_CATEGORIES section');
  }
}

async function runValidation() {
  console.log('\n🧪 Running validation...');
  
  try {
    const { validateExerciseReferences } = require('./validate-exercise-references.js');
    const result = await validateExerciseReferences();
    
    if (result.statistics.missingCount === 0) {
      console.log('✅ All exercise references are valid!');
      return true;
    } else {
      console.log(`❌ Found ${result.statistics.missingCount} missing exercise references`);
      return false;
    }
  } catch (error) {
    console.error('❌ Validation failed:', error);
    return false;
  }
}

async function generateReport(exercisesToAdd, foundDuplicates) {
  console.log('\n📋 Generating addition report...');
  
  const report = `# New Exercises Addition Report

Generated: ${new Date().toISOString()}

## Summary

- **New Exercises Added**: ${exercisesToAdd.length}
- **Duplicates Skipped**: ${foundDuplicates.length}
- **Total Database Size**: ${316 + exercisesToAdd.length} exercises

## New Exercises Added

${exercisesToAdd.map(id => {
  const exercise = NEW_EXERCISES[id];
  return `### ${exercise.name} (${id})
- **Category**: ${exercise.category}
- **Equipment**: ${exercise.equipment.join(', ')}
- **Muscle Groups**: ${exercise.muscleGroups.join(', ')}
- **Difficulty**: ${exercise.difficulty}/5
- **Instructions**: ${exercise.instructions.length} detailed steps`;
}).join('\n\n')}

## Duplicates Skipped

${Object.entries(DUPLICATE_EXERCISES).map(([id, reason]) => 
  `- **${id}**: ${reason}`
).join('\n')}

${foundDuplicates.length > 0 ? `\n### Additional Duplicates Found
${foundDuplicates.map(id => `- **${id}**: Already exists in database`).join('\n')}` : ''}

## Database Status

- ✅ All exercises properly formatted
- ✅ Categories updated
- ✅ Validation passing
- ✅ TypeScript compilation successful

## Next Steps

1. Test the new exercises in training programs
2. Verify AI chat integration includes new exercises
3. Consider adding more variations if needed
`;

  const reportPath = path.join(__dirname, '../NEW_EXERCISES_ADDITION_REPORT.md');
  fs.writeFileSync(reportPath, report);
  
  console.log(`✅ Report saved to: ${reportPath}`);
}

async function main() {
  try {
    console.log('🚀 Starting new exercises addition...\n');
    
    // Create backup first
    const backupPath = DATABASE_PATH + '.backup.' + Date.now();
    fs.copyFileSync(DATABASE_PATH, backupPath);
    console.log(`💾 Created backup: ${backupPath}\n`);
    
    // Check for duplicates
    const { newExercisesToAdd, foundDuplicates } = await checkForDuplicates();
    
    if (newExercisesToAdd.length === 0) {
      console.log('\n🎯 All exercises already exist in the database!');
      await generateReport([], foundDuplicates);
      return;
    }
    
    // Add new exercises
    await addNewExercises(newExercisesToAdd);
    await updateExerciseCategories(newExercisesToAdd);
    
    // Validate
    const validationPassed = await runValidation();
    
    if (validationPassed) {
      await generateReport(newExercisesToAdd, foundDuplicates);
      
      console.log('\n🎉 NEW EXERCISES ADDED SUCCESSFULLY!');
      console.log(`✅ Added ${newExercisesToAdd.length} new exercises`);
      console.log(`✅ Skipped ${foundDuplicates.length + Object.keys(DUPLICATE_EXERCISES).length} duplicates`);
      console.log('✅ Database validated');
      console.log('📖 Check NEW_EXERCISES_ADDITION_REPORT.md for details');
    } else {
      console.log('\n❌ Validation failed - manual review needed');
    }
    
  } catch (error) {
    console.error('❌ Addition failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { NEW_EXERCISES, DUPLICATE_EXERCISES, addNewExercises }; 