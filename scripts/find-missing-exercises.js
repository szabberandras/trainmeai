#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Finding the Missing 11 Exercises...\n');

// Read the backup database file
const backupPath = path.join(__dirname, '../lib/exercises/database.backup.ts');
const backupContent = fs.readFileSync(backupPath, 'utf8');

// Extract ALL exercise IDs from the backup database
console.log('📖 Extracting all exercise IDs from backup database...');

const allExerciseIds = new Set();

// Find all exercise IDs using multiple patterns
const patterns = [
  /'([^']+)':\s*\{[^}]*id:\s*'([^']+)'/g,  // Pattern 1: 'id': { id: 'same-id'
  /'([^']+)':\s*\{[^}]*category:/g,         // Pattern 2: 'id': { category: ...
];

patterns.forEach((pattern, index) => {
  console.log(`\n🔍 Using pattern ${index + 1}...`);
  let match;
  let count = 0;
  
  while ((match = pattern.exec(backupContent)) !== null) {
    const exerciseId = match[1];
    if (exerciseId && !allExerciseIds.has(exerciseId)) {
      allExerciseIds.add(exerciseId);
      count++;
    }
  }
  
  console.log(`  Found ${count} unique exercises with pattern ${index + 1}`);
});

console.log(`\n📊 Total unique exercise IDs found in backup: ${allExerciseIds.size}`);

// Now read all our extracted exercises
console.log('\n📖 Reading extracted exercises from category files...');

const categoriesDir = path.join(__dirname, '../lib/exercises/categories');
const extractedExerciseIds = new Set();

const categoryFiles = fs.readdirSync(categoriesDir).filter(file => 
  file.endsWith('.ts') && file !== 'index.ts'
);

categoryFiles.forEach(filename => {
  const filePath = path.join(categoriesDir, filename);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract exercise IDs from category files
  const idMatches = content.match(/'([^']+)':\s*\{/g);
  if (idMatches) {
    idMatches.forEach(match => {
      const id = match.match(/'([^']+)':/)[1];
      extractedExerciseIds.add(id);
    });
  }
});

console.log(`📊 Total extracted exercise IDs: ${extractedExerciseIds.size}`);

// Find the missing exercises
const missingExercises = [];
allExerciseIds.forEach(id => {
  if (!extractedExerciseIds.has(id)) {
    missingExercises.push(id);
  }
});

console.log(`\n🚨 Missing ${missingExercises.length} exercises:`);
missingExercises.forEach((id, index) => {
  console.log(`  ${index + 1}. ${id}`);
});

// Find where these missing exercises are defined in the backup
console.log('\n🔍 Locating missing exercises in backup database...');

missingExercises.forEach(id => {
  const regex = new RegExp(`'${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}':\\s*\\{([\\s\\S]*?)\\n  \\}`, 'g');
  const match = regex.exec(backupContent);
  
  if (match) {
    const exerciseContent = match[1];
    const categoryMatch = exerciseContent.match(/category:\s*'([^']+)'/);
    const category = categoryMatch ? categoryMatch[1] : 'unknown';
    
    console.log(`\n📍 Found '${id}' in category '${category}':`);
    console.log(`   Content preview: ${exerciseContent.substring(0, 100)}...`);
  } else {
    console.log(`\n❌ Could not locate '${id}' in backup database`);
  }
});

// Check if any collections were missed
console.log('\n🔍 Checking for missed collections...');

const collectionPattern = /const\s+([A-Z_]+)\s*=\s*\{[\s\S]*?\n\};/g;
let collectionMatch;
const foundCollections = [];

while ((collectionMatch = collectionPattern.exec(backupContent)) !== null) {
  const collectionName = collectionMatch[1];
  if (collectionName.includes('EXERCISE') || collectionName.includes('STRENGTH') || 
      collectionName.includes('CARDIO') || collectionName.includes('MOVEMENT')) {
    foundCollections.push(collectionName);
  }
}

console.log(`\n📦 Found ${foundCollections.length} exercise collections:`);
foundCollections.forEach(name => console.log(`  - ${name}`));

console.log('\n🎯 Analysis complete!'); 