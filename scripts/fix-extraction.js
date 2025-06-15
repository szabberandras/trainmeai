#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Exercise Database Extraction...\n');

// Read the backup database file
const backupPath = path.join(__dirname, '../lib/exercises/database.backup.ts');
const backupContent = fs.readFileSync(backupPath, 'utf8');

console.log('📖 Reading backup database.ts file...');

// Extract the EXERCISE_DATABASE object
const exerciseDbMatch = backupContent.match(/export const EXERCISE_DATABASE: Record<string, Exercise> = \{([\s\S]*?)\n\};/);
if (!exerciseDbMatch) {
  console.error('❌ Could not find EXERCISE_DATABASE in backup');
  process.exit(1);
}

const exerciseDbContent = exerciseDbMatch[1];
console.log('✅ Found EXERCISE_DATABASE object');

// Parse exercises by finding each exercise object
const exercises = {};
let totalExercises = 0;

// More robust regex to capture complete exercise objects
const exercisePattern = /'([^']+)':\s*\{([\s\S]*?)\n  \}(?=,\n\n|,\n\s*\/\/|\n\n|$)/g;
let match;

console.log('🔍 Extracting exercises by category...');

while ((match = exercisePattern.exec(exerciseDbContent)) !== null) {
  const exerciseId = match[1];
  const exerciseContent = match[2];
  
  // Extract category from exercise content
  const categoryMatch = exerciseContent.match(/category:\s*'([^']+)'/);
  if (categoryMatch) {
    const category = categoryMatch[1];
    
    if (!exercises[category]) {
      exercises[category] = [];
    }
    
    exercises[category].push({
      id: exerciseId,
      content: `  '${exerciseId}': {${exerciseContent}\n  }`
    });
    
    totalExercises++;
  } else {
    console.warn(`⚠️  No category found for exercise: ${exerciseId}`);
  }
}

console.log(`\n📊 Exercise Distribution (${totalExercises} total exercises):`);
Object.entries(exercises)
  .sort(([,a], [,b]) => b.length - a.length)
  .forEach(([category, exerciseList]) => {
    console.log(`  ${category.padEnd(15)}: ${exerciseList.length.toString().padStart(3)} exercises`);
  });

// Generate category files
const categoriesDir = path.join(__dirname, '../lib/exercises/categories');

console.log('\n📝 Regenerating category files...');

Object.entries(exercises).forEach(([category, exerciseList]) => {
  const categoryFile = path.join(categoriesDir, `${category}.ts`);
  
  // Create the category file content
  const categoryContent = `import { Exercise } from '../types';

export const ${category.toUpperCase()}_EXERCISES: Record<string, Exercise> = {
${exerciseList.map(ex => ex.content).join(',\n\n')}
};

export default ${category.toUpperCase()}_EXERCISES;
`;

  // Write the category file
  fs.writeFileSync(categoryFile, categoryContent);
  console.log(`  ✅ ${category}.ts (${exerciseList.length} exercises)`);
});

// Update the categories index file
const indexPath = path.join(categoriesDir, 'index.ts');
const categoryNames = Object.keys(exercises).sort();

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

console.log(`\n🎉 Successfully extracted all ${totalExercises} exercises into ${categoryNames.length} categories!`); 