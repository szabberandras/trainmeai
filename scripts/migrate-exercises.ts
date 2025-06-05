#!/usr/bin/env ts-node

/**
 * Migration script to extract exercises from the main database.ts file
 * and organize them into category-specific files.
 * 
 * This script helps with the refactoring process by:
 * 1. Reading the main database file
 * 2. Extracting exercises by category
 * 3. Generating category-specific files
 * 4. Creating backup of original database
 */

import fs from 'fs';
import path from 'path';

const DATABASE_PATH = path.join(__dirname, '../lib/exercises/database.ts');
const CATEGORIES_DIR = path.join(__dirname, '../lib/exercises/categories');
const BACKUP_PATH = path.join(__dirname, '../lib/exercises/database.backup.ts');

interface ExerciseExtraction {
  category: string;
  exercises: string[];
}

async function extractExercisesByCategory(): Promise<ExerciseExtraction[]> {
  console.log('🔍 Reading main database file...');
  
  if (!fs.existsSync(DATABASE_PATH)) {
    throw new Error(`Database file not found at ${DATABASE_PATH}`);
  }

  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  // Create backup
  console.log('💾 Creating backup of original database...');
  fs.copyFileSync(DATABASE_PATH, BACKUP_PATH);
  
  const categories = [
    'strength', 'core', 'cardio', 'mobility', 
    'flexibility', 'plyometric', 'technique', 'endurance'
  ];
  
  const extractions: ExerciseExtraction[] = [];
  
  for (const category of categories) {
    console.log(`📋 Extracting ${category} exercises...`);
    
    // Use regex to find exercises with specific category
    const categoryRegex = new RegExp(`'([^']+)':\\s*{[^}]*category:\\s*'${category}'[^}]*}`, 'gs');
    const matches = content.match(categoryRegex) || [];
    
    const exerciseIds = matches.map(match => {
      const idMatch = match.match(/'([^']+)':/);
      return idMatch ? idMatch[1] : null;
    }).filter(Boolean) as string[];
    
    extractions.push({
      category,
      exercises: exerciseIds
    });
    
    console.log(`✅ Found ${exerciseIds.length} ${category} exercises`);
  }
  
  return extractions;
}

async function generateCategoryFiles(extractions: ExerciseExtraction[]): Promise<void> {
  console.log('📁 Generating category files...');
  
  // Ensure categories directory exists
  if (!fs.existsSync(CATEGORIES_DIR)) {
    fs.mkdirSync(CATEGORIES_DIR, { recursive: true });
  }
  
  for (const extraction of extractions) {
    const { category, exercises } = extraction;
    const filename = `${category}.ts`;
    const filepath = path.join(CATEGORIES_DIR, filename);
    
    console.log(`📝 Generating ${filename} with ${exercises.length} exercises...`);
    
    // This would be expanded to actually extract the full exercise objects
    // For now, we're creating the structure
    const content = `import { Exercise } from '../types';

export const ${category.toUpperCase()}_EXERCISES: Record<string, Exercise> = {
  // TODO: Extract ${exercises.length} ${category} exercises from main database
  // Exercise IDs: ${exercises.slice(0, 5).join(', ')}${exercises.length > 5 ? '...' : ''}
};

export default ${category.toUpperCase()}_EXERCISES;
`;
    
    fs.writeFileSync(filepath, content);
  }
}

async function generateSummaryReport(extractions: ExerciseExtraction[]): Promise<void> {
  console.log('📊 Generating migration summary...');
  
  const totalExercises = extractions.reduce((sum, ext) => sum + ext.exercises.length, 0);
  
  const report = `
# Exercise Database Migration Summary

## Overview
- **Total Exercises**: ${totalExercises}
- **Categories**: ${extractions.length}
- **Backup Created**: ${BACKUP_PATH}

## Category Breakdown
${extractions.map(ext => 
  `- **${ext.category}**: ${ext.exercises.length} exercises`
).join('\n')}

## Next Steps
1. ✅ Category structure created
2. ⏳ Extract full exercise objects (manual step required)
3. ⏳ Update imports in existing files
4. ⏳ Test new structure
5. ⏳ Remove old database file

## Files Created
${extractions.map(ext => 
  `- lib/exercises/categories/${ext.category}.ts`
).join('\n')}
- lib/exercises/categories/index.ts
- lib/exercises/types.ts

## Manual Steps Required
Due to the complexity of the exercise objects, manual extraction is recommended:
1. Copy exercise objects from database.ts to respective category files
2. Update all imports throughout the codebase
3. Test functionality with new structure
`;

  fs.writeFileSync(path.join(__dirname, '../MIGRATION_REPORT.md'), report);
  console.log('📋 Migration report saved to MIGRATION_REPORT.md');
}

async function main(): Promise<void> {
  try {
    console.log('🚀 Starting exercise database migration...\n');
    
    const extractions = await extractExercisesByCategory();
    await generateCategoryFiles(extractions);
    await generateSummaryReport(extractions);
    
    console.log('\n✅ Migration preparation complete!');
    console.log('📖 Check MIGRATION_REPORT.md for next steps');
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { extractExercisesByCategory, generateCategoryFiles }; 