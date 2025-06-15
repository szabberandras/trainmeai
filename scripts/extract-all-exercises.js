#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Extracting ALL Exercises from Backup Database...\n');

// Read the backup database file
const backupPath = path.join(__dirname, '../lib/exercises/database.backup.ts');
let backupContent = fs.readFileSync(backupPath, 'utf8');

console.log('📖 Reading backup database.ts file...');

// Remove TypeScript imports and exports to make it runnable
backupContent = backupContent
  .replace(/import.*from.*;\n/g, '')
  .replace(/export\s+/g, '')
  .replace(/: Record<string, Exercise>/g, '')
  .replace(/: Exercise\[\]/g, '')
  .replace(/: Exercise/g, '');

// Add a simple Exercise interface for the script
const scriptContent = `
// Simple interfaces for extraction
const Exercise = {};

${backupContent}

// Extract all exercises
const allExercises = {};
Object.assign(allExercises, EXERCISE_DATABASE);

// Group by category
const exercisesByCategory = {};
let totalCount = 0;

Object.entries(allExercises).forEach(([id, exercise]) => {
  if (exercise && exercise.category) {
    const category = exercise.category;
    if (!exercisesByCategory[category]) {
      exercisesByCategory[category] = [];
    }
    exercisesByCategory[category].push({ id, exercise });
    totalCount++;
  }
});

console.log('📊 Final Exercise Distribution:');
Object.entries(exercisesByCategory)
  .sort(([,a], [,b]) => b.length - a.length)
  .forEach(([category, exercises]) => {
    console.log(\`  \${category.padEnd(15)}: \${exercises.length.toString().padStart(3)} exercises\`);
  });

console.log(\`\\nTotal: \${totalCount} exercises\\n\`);

// Export the results
if (typeof module !== 'undefined') {
  module.exports = { exercisesByCategory, totalCount };
}
`;

// Write and execute the script
const tempScriptPath = path.join(__dirname, 'temp-extract.js');
fs.writeFileSync(tempScriptPath, scriptContent);

try {
  // Execute the script
  const result = require(tempScriptPath);
  
  // Clean up temp file
  fs.unlinkSync(tempScriptPath);
  
  const { exercisesByCategory, totalCount } = result;
  
  console.log(`🎯 Successfully extracted ${totalCount} exercises!`);
  
  // Now generate the category files
  const categoriesDir = path.join(__dirname, '../lib/exercises/categories');
  
  console.log('\n📝 Generating category files...');
  
  Object.entries(exercisesByCategory).forEach(([category, exercises]) => {
    const categoryFile = path.join(categoriesDir, `${category}.ts`);
    
    const exerciseEntries = exercises.map(({ id, exercise }) => {
      // Convert exercise object back to TypeScript format
      const exerciseStr = JSON.stringify(exercise, null, 2)
        .replace(/"([^"]+)":/g, '$1:') // Remove quotes from keys
        .replace(/"/g, "'"); // Use single quotes
      
      return `  '${id}': ${exerciseStr}`;
    });
    
    const categoryContent = `import { Exercise } from '../types';

export const ${category.toUpperCase()}_EXERCISES: Record<string, Exercise> = {
${exerciseEntries.join(',\n\n')}
};

export default ${category.toUpperCase()}_EXERCISES;
`;
    
    fs.writeFileSync(categoryFile, categoryContent);
    console.log(`  ✅ ${category}.ts (${exercises.length} exercises)`);
  });
  
  // Generate index file
  const indexPath = path.join(categoriesDir, 'index.ts');
  const categoryNames = Object.keys(exercisesByCategory).sort();
  
  const indexContent = `import { Exercise, ExerciseCategory, ExerciseDatabase, CategoryExercises } from '../types';

// Import all category exercises
${categoryNames.map(cat => 
  `import { ${cat.toUpperCase()}_EXERCISES } from './${cat}';`
).join('\n')}

// Combine all category exercises into a single database
export const EXERCISE_DATABASE: ExerciseDatabase = {
${categoryNames.map(cat => 
  `  ...${cat.toUpperCase()}_EXERCISES,`
).join('\n')}
};

// Category mappings
export const EXERCISE_CATEGORIES: CategoryExercises = {
${categoryNames.map(cat => 
  `  ${cat}: Object.keys(${cat.toUpperCase()}_EXERCISES),`
).join('\n')}
};

// Helper functions
export function getExercisesByCategory(category: ExerciseCategory): Exercise[] {
  const exerciseIds = EXERCISE_CATEGORIES[category as keyof typeof EXERCISE_CATEGORIES] || [];
  return exerciseIds.map(id => EXERCISE_DATABASE[id]).filter(Boolean);
}

export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISE_DATABASE[id];
}

export function getExercisesByEquipment(equipment: string[]): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => 
    equipment.length === 0 || exercise.equipment.some(eq => equipment.includes(eq))
  );
}

export function getExercisesByDifficulty(difficulty: number): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => exercise.difficulty <= difficulty);
}

export function getExercisesByMuscleGroup(muscleGroup: string): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => 
    exercise.muscleGroups.some(mg => mg.toLowerCase().includes(muscleGroup.toLowerCase()))
  );
}

export function searchExercises(query: string): Exercise[] {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(EXERCISE_DATABASE).filter(exercise =>
    exercise.name.toLowerCase().includes(lowercaseQuery) ||
    exercise.muscleGroups.some(mg => mg.toLowerCase().includes(lowercaseQuery)) ||
    exercise.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getRandomExercises(count: number, category?: ExerciseCategory): Exercise[] {
  const exercises = category ? getExercisesByCategory(category) : Object.values(EXERCISE_DATABASE);
  const shuffled = exercises.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Statistics
export function getDatabaseStats() {
  const totalExercises = Object.keys(EXERCISE_DATABASE).length;
  const categoryStats = Object.entries(EXERCISE_CATEGORIES).map(([category, exercises]) => ({
    category,
    count: exercises.length,
    percentage: ((exercises.length / totalExercises) * 100).toFixed(1)
  }));

  return {
    totalExercises,
    categories: categoryStats,
    lastUpdated: new Date().toISOString()
  };
}
`;
  
  fs.writeFileSync(indexPath, indexContent);
  console.log(`\n✅ Updated categories/index.ts with ${categoryNames.length} categories`);
  
  console.log(`\n🎉 Successfully extracted all ${totalCount} exercises into ${categoryNames.length} categories!`);
  
} catch (error) {
  console.error('❌ Error during extraction:', error.message);
  // Clean up temp file if it exists
  if (fs.existsSync(tempScriptPath)) {
    fs.unlinkSync(tempScriptPath);
  }
} 