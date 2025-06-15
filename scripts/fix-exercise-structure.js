#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Exercise Structure...\n');

const categoriesDir = path.join(__dirname, '../lib/exercises/categories');
const categoryFiles = fs.readdirSync(categoriesDir).filter(file => 
  file.endsWith('.ts') && file !== 'index.ts'
);

console.log(`📁 Found ${categoryFiles.length} category files to fix`);

categoryFiles.forEach(filename => {
  const filePath = path.join(categoriesDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  console.log(`\n🔧 Fixing ${filename}...`);
  
  // Fix equipment_alternatives placement (move from top level to modifications)
  content = content.replace(
    /(\s+)equipment_alternatives: (\[[^\]]+\]),\n(\s+)progressionRate: ([^,\n]+),\n(\s+)metrics: \{([^}]+)\}/g,
    (match, indent1, equipmentAlts, indent2, progressionRate, indent3, metricsContent) => {
      return `${indent3}metrics: {${metricsContent}, progressionRate: ${progressionRate}}`;
    }
  );
  
  // Fix modifications to include equipment_alternatives
  content = content.replace(
    /(modifications: \{[^}]+)\}/g,
    (match, modificationsContent) => {
      // Extract equipment_alternatives from the same exercise
      const exerciseMatch = content.match(new RegExp(
        modificationsContent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + 
        '\\},\\s+equipment_alternatives: (\\[[^\\]]+\\])'
      ));
      
      if (exerciseMatch) {
        return `${modificationsContent}, equipment_alternatives: ${exerciseMatch[1]}}`;
      }
      return match;
    }
  );
  
  // Remove standalone equipment_alternatives and progressionRate
  content = content.replace(/,?\s+equipment_alternatives: \[[^\]]+\],?\n/g, '\n');
  content = content.replace(/,?\s+progressionRate: [^,\n]+,?\n/g, '\n');
  
  // Clean up any double commas or trailing commas
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/,(\s*\})/g, '$1');
  
  fs.writeFileSync(filePath, content);
  console.log(`  ✅ Fixed structure in ${filename}`);
});

console.log('\n🎉 All exercise structures fixed!'); 