#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Extracting ALL 427 Exercises (including Object.assign collections)...\n');

// Read the backup database file
const backupPath = path.join(__dirname, '../lib/exercises/database.backup.ts');
const backupContent = fs.readFileSync(backupPath, 'utf8');

console.log('📖 Reading backup database.ts file...');

// Find all exercise collections
const collections = [
  'EXERCISE_DATABASE',
  'SPORT_SPECIFIC_EXERCISES', 
  'ADDITIONAL_STRENGTH_EXERCISES',
  'ADDITIONAL_STRENGTH_EXERCISES_2',
  'OLYMPIC_LIFTING_EXERCISES',
  'STRENGTH_VARIATIONS',
  'DEADLIFT_VARIATIONS',
  'KEY_BODYWEIGHT_EXERCISES',
  'ADDITIONAL_BODYWEIGHT_PLYOMETRIC',
  'FUNCTIONAL_EXERCISES',
  'MORE_PLYOMETRIC_EXERCISES',
  'ADDITIONAL_MOVEMENT_EXERCISES',
  'ADDITIONAL_BODYWEIGHT_STRENGTH'
];

const allExercises = {};
let totalExercises = 0;

console.log('🔍 Extracting exercises from all collections...');

collections.forEach(collectionName => {
  console.log(`\n📦 Processing ${collectionName}...`);
  
  // Find the collection definition
  const collectionRegex = new RegExp(`(?:const|export const)\\s+${collectionName}[^=]*=\\s*\\{([\\s\\S]*?)\\n\\};`, 'g');
  const collectionMatch = collectionRegex.exec(backupContent);
  
  if (!collectionMatch) {
    console.log(`   ⚠️  Collection ${collectionName} not found`);
    return;
  }
  
  const collectionContent = collectionMatch[1];
  let collectionCount = 0;
  
  // Extract exercises from this collection
  const exercisePattern = /'([^']+)':\s*\{([\s\S]*?)\n  \}(?=,\n\n|,\n\s*\/\/|\n\n|$)/g;
  let match;
  
  while ((match = exercisePattern.exec(collectionContent)) !== null) {
    const exerciseId = match[1];
    const exerciseContent = match[2];
    
    // Skip if we already have this exercise
    if (allExercises[exerciseId]) {
      continue;
    }
    
    // Extract category from exercise content
    const categoryMatch = exerciseContent.match(/category:\s*'([^']+)'/);
    if (categoryMatch) {
      const category = categoryMatch[1];
      
      allExercises[exerciseId] = {
        category,
        content: `  '${exerciseId}': {${exerciseContent}\n  }`
      };
      
      collectionCount++;
      totalExercises++;
    }
  }
  
  console.log(`   ✅ Found ${collectionCount} exercises`);
});

// Group by category
const exercisesByCategory = {};
Object.entries(allExercises).forEach(([id, exercise]) => {
  const category = exercise.category;
  if (!exercisesByCategory[category]) {
    exercisesByCategory[category] = [];
  }
  exercisesByCategory[category].push({
    id,
    content: exercise.content
  });
});

console.log(`\n📊 Final Exercise Distribution (${totalExercises} total exercises):`);
Object.entries(exercisesByCategory)
  .sort(([,a], [,b]) => b.length - a.length)
  .forEach(([category, exerciseList]) => {
    console.log(`  ${category.padEnd(20)}: ${exerciseList.length.toString().padStart(3)} exercises`);
  });

// Generate category files for ALL categories
const categoriesDir = path.join(__dirname, '../lib/exercises/categories');

console.log('\n📝 Generating ALL category files...');

Object.entries(exercisesByCategory).forEach(([category, exerciseList]) => {
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

// Update the categories index file with ALL categories
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

console.log(`\n🎉 Successfully extracted all ${totalExercises} exercises into ${categoryNames.length} categories!`);
console.log(`\n📋 Categories created: ${categoryNames.join(', ')}`); 