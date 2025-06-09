#!/usr/bin/env node

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
      console.log(`❌ Found ${result.statistics.missingCount} missing exercise references`);
      console.log('Run the full validation script for details');
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Validation failed:', error);
    process.exit(1);
  }
}

main();
