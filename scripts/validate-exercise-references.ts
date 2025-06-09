#!/usr/bin/env ts-node

/**
 * Comprehensive Exercise Reference Validation Script
 * 
 * This script analyzes all training program files and identifies:
 * 1. Missing exercises referenced in training programs
 * 2. Naming inconsistencies (singular vs plural, etc.)
 * 3. Potential matches for missing exercises
 * 4. Generates a report with recommended fixes
 */

import fs from 'fs';
import path from 'path';

const EXERCISES_DIR = path.join(__dirname, '../lib/exercises');
const DATABASE_PATH = path.join(EXERCISES_DIR, 'database.ts');

interface ValidationResult {
  missingExercises: string[];
  potentialMatches: Record<string, string[]>;
  exactMatches: string[];
  trainingProgramReferences: Record<string, string[]>;
  databaseExercises: string[];
  statistics: {
    totalReferences: number;
    uniqueReferences: number;
    missingCount: number;
    matchedCount: number;
  };
}

async function extractDatabaseExercises(): Promise<string[]> {
  console.log('📖 Reading exercise database...');
  
  const content = fs.readFileSync(DATABASE_PATH, 'utf-8');
  
  // Extract exercise IDs from the database
  const exerciseMatches = content.match(/'([^']+)':\s*{/g) || [];
  const exercises = exerciseMatches
    .map(match => match.match(/'([^']+)':/)?.[1])
    .filter(Boolean) as string[];
  
  console.log(`✅ Found ${exercises.length} exercises in database`);
  return exercises.sort();
}

async function extractTrainingProgramReferences(): Promise<Record<string, string[]>> {
  console.log('🔍 Scanning training program files...');
  
  const trainingFiles = [
    'structured-training-programs.ts',
    'crossfit-training.ts',
    'progressive-strength-training.ts',
    'hyrox-programs.ts',
    'cycling-training.ts',
    'half-marathon-plans.ts'
  ];
  
  const references: Record<string, string[]> = {};
  
  for (const filename of trainingFiles) {
    const filepath = path.join(EXERCISES_DIR, filename);
    
    if (!fs.existsSync(filepath)) {
      console.log(`⚠️  File not found: ${filename}`);
      continue;
    }
    
    const content = fs.readFileSync(filepath, 'utf-8');
    
    // Extract exercise references - looking for various patterns
    const patterns = [
      // Direct exercise references in quotes
      /'([a-z][a-z0-9-]*[a-z0-9])'/g,
      // Exercise references in exercise arrays
      /exercise:\s*'([a-z][a-z0-9-]*[a-z0-9])'/g,
      // Exercise references in workout objects
      /name:\s*'([a-z][a-z0-9-]*[a-z0-9])'/g,
    ];
    
    const fileReferences = new Set<string>();
    
    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const exerciseName = match[1];
        // Filter out non-exercise strings (too short, contains uppercase, etc.)
        if (exerciseName.length > 3 && 
            exerciseName.includes('-') && 
            !exerciseName.includes('_') &&
            exerciseName === exerciseName.toLowerCase()) {
          fileReferences.add(exerciseName);
        }
      }
    }
    
    references[filename] = Array.from(fileReferences).sort();
    console.log(`📋 ${filename}: ${references[filename].length} exercise references`);
  }
  
  return references;
}

function findPotentialMatches(missing: string, available: string[]): string[] {
  const matches: string[] = [];
  
  // Exact match (shouldn't happen, but just in case)
  if (available.includes(missing)) {
    return [missing];
  }
  
  // Common transformations
  const variations = [
    // Singular/plural
    missing.endsWith('s') ? missing.slice(0, -1) : missing + 's',
    // Add/remove common prefixes
    `barbell-${missing}`,
    `dumbbell-${missing}`,
    `cable-${missing}`,
    missing.replace(/^barbell-/, ''),
    missing.replace(/^dumbbell-/, ''),
    missing.replace(/^cable-/, ''),
    // Common word replacements
    missing.replace('-curls', '-curl'),
    missing.replace('-curl', '-curls'),
    missing.replace('-rows', '-row'),
    missing.replace('-row', '-rows'),
    missing.replace('-squats', '-squat'),
    missing.replace('-squat', '-squats'),
    missing.replace('-presses', '-press'),
    missing.replace('-press', '-presses'),
    // Specific common cases
    missing.replace('back-squat', 'barbell-back-squat'),
    missing.replace('front-squat', 'barbell-front-squat'),
    missing.replace('push-ups', 'push-up'),
    missing.replace('pull-ups', 'pull-up'),
    missing.replace('chin-ups', 'chin-up'),
  ];
  
  // Find exact matches in variations
  for (const variation of variations) {
    if (available.includes(variation)) {
      matches.push(variation);
    }
  }
  
  // Find partial matches (contains the missing exercise name)
  const partialMatches = available.filter(exercise => 
    exercise.includes(missing) || missing.includes(exercise)
  );
  
  matches.push(...partialMatches);
  
  // Remove duplicates and return
  return [...new Set(matches)];
}

async function validateExerciseReferences(): Promise<ValidationResult> {
  console.log('🔍 Starting comprehensive exercise validation...\n');
  
  const databaseExercises = await extractDatabaseExercises();
  const trainingReferences = await extractTrainingProgramReferences();
  
  // Collect all unique references
  const allReferences = new Set<string>();
  let totalReferences = 0;
  
  for (const [file, refs] of Object.entries(trainingReferences)) {
    totalReferences += refs.length;
    refs.forEach(ref => allReferences.add(ref));
  }
  
  const uniqueReferences = Array.from(allReferences).sort();
  
  console.log('\n📊 Analysis Results:');
  console.log(`Total references across all files: ${totalReferences}`);
  console.log(`Unique exercise references: ${uniqueReferences.length}`);
  console.log(`Database exercises: ${databaseExercises.length}`);
  
  // Find missing exercises
  const missingExercises = uniqueReferences.filter(ref => 
    !databaseExercises.includes(ref)
  );
  
  const exactMatches = uniqueReferences.filter(ref => 
    databaseExercises.includes(ref)
  );
  
  console.log(`Missing exercises: ${missingExercises.length}`);
  console.log(`Exact matches: ${exactMatches.length}`);
  
  // Find potential matches for missing exercises
  const potentialMatches: Record<string, string[]> = {};
  for (const missing of missingExercises) {
    const matches = findPotentialMatches(missing, databaseExercises);
    if (matches.length > 0) {
      potentialMatches[missing] = matches;
    }
  }
  
  return {
    missingExercises,
    potentialMatches,
    exactMatches,
    trainingProgramReferences: trainingReferences,
    databaseExercises,
    statistics: {
      totalReferences,
      uniqueReferences: uniqueReferences.length,
      missingCount: missingExercises.length,
      matchedCount: exactMatches.length
    }
  };
}

async function generateValidationReport(result: ValidationResult): Promise<void> {
  console.log('\n📋 Generating validation report...');
  
  const report = `# Exercise Reference Validation Report

Generated: ${new Date().toISOString()}

## Summary Statistics

- **Total References**: ${result.statistics.totalReferences}
- **Unique References**: ${result.statistics.uniqueReferences}
- **Database Exercises**: ${result.databaseExercises.length}
- **Exact Matches**: ${result.statistics.matchedCount}
- **Missing Exercises**: ${result.statistics.missingCount}
- **Potential Matches Found**: ${Object.keys(result.potentialMatches).length}

## Missing Exercises

### Exercises with Potential Matches
${Object.entries(result.potentialMatches).map(([missing, matches]) => 
  `- **${missing}** → Potential matches: ${matches.join(', ')}`
).join('\n')}

### Exercises with No Matches
${result.missingExercises.filter(ex => !result.potentialMatches[ex]).map(ex => 
  `- **${ex}** → No potential matches found`
).join('\n')}

## Training Program References

${Object.entries(result.trainingProgramReferences).map(([file, refs]) => 
  `### ${file}
- **Total References**: ${refs.length}
- **Missing**: ${refs.filter(ref => result.missingExercises.includes(ref)).length}
- **Matched**: ${refs.filter(ref => result.exactMatches.includes(ref)).length}

#### Missing Exercises in this file:
${refs.filter(ref => result.missingExercises.includes(ref)).map(ref => `- ${ref}`).join('\n') || 'None'}
`
).join('\n')}

## Recommended Actions

### 1. Add Missing Exercises
The following exercises should be added to the database:
${result.missingExercises.filter(ex => !result.potentialMatches[ex]).map(ex => 
  `- ${ex}`
).join('\n')}

### 2. Fix Naming Inconsistencies
Update training program files to use correct exercise names:
${Object.entries(result.potentialMatches).map(([missing, matches]) => 
  `- Replace "${missing}" with "${matches[0]}" (best match)`
).join('\n')}

### 3. Validation System
Consider implementing:
- Automated validation in CI/CD
- TypeScript types for exercise references
- Linting rules for exercise name consistency

## Next Steps

1. Review this report
2. Add genuinely missing exercises to database
3. Update training program files with correct names
4. Implement validation system to prevent future issues
`;

  const reportPath = path.join(__dirname, '../EXERCISE_VALIDATION_REPORT.md');
  fs.writeFileSync(reportPath, report);
  
  console.log(`✅ Report saved to: ${reportPath}`);
}

async function main(): Promise<void> {
  try {
    const result = await validateExerciseReferences();
    await generateValidationReport(result);
    
    console.log('\n🎉 Validation complete!');
    console.log('📖 Check EXERCISE_VALIDATION_REPORT.md for detailed findings');
    
    // Quick summary
    console.log('\n📊 Quick Summary:');
    console.log(`Missing exercises: ${result.statistics.missingCount}`);
    console.log(`Potential matches: ${Object.keys(result.potentialMatches).length}`);
    console.log(`Genuinely missing: ${result.missingExercises.filter(ex => !result.potentialMatches[ex]).length}`);
    
  } catch (error) {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

export { validateExerciseReferences, extractDatabaseExercises, extractTrainingProgramReferences }; 