const fs = require('fs');
const path = require('path');

function findHighPriorityIncompleteExercises() {
  try {
    console.log('🎯 FINDING HIGH-PRIORITY EXERCISES NEEDING COMPLETE JSON STRUCTURE');
    console.log('═══════════════════════════════════════════════════════════════════');

    // High-priority exercise keywords
    const highPriorityKeywords = [
      'squat', 'deadlift', 'press', 'row', 'curl', 'lunge', 'pull', 'push',
      'bench', 'overhead', 'lateral', 'fly', 'raise', 'extension', 'crunch',
      'plank', 'burpee', 'jump', 'step', 'dip', 'chin', 'shoulder', 'chest',
      'back', 'bicep', 'tricep', 'leg', 'calf', 'hamstring', 'glute'
    ];

    // Read all exercise database files
    const exerciseCategories = [
      'strength', 'cardio', 'core', 'plyometric', 'bodyweight', 'crossfit'
    ]; // Focus on most important categories first

    const exercisesPath = path.join(__dirname, '..', 'lib', 'exercises', 'categories');
    
    const highPriorityIncomplete = [];
    let totalAnalyzed = 0;

    // Read each category file
    for (const category of exerciseCategories) {
      const categoryPath = path.join(exercisesPath, `${category}.ts`);
      
      if (fs.existsSync(categoryPath)) {
        const content = fs.readFileSync(categoryPath, 'utf8');
        console.log(`\n📂 Analyzing ${category}.ts...`);
        
        // Find all exercise objects
        const exercisePattern = /{\s*id:\s*['"`]([^'"`]+)['"`][^}]*}/gs;
        const matches = [...content.matchAll(exercisePattern)];
        
        matches.forEach(match => {
          totalAnalyzed++;
          const exerciseBlock = match[0];
          const exerciseId = match[1];
          
          // Extract exercise name
          const nameMatch = exerciseBlock.match(/name:\s*['"`]([^'"`]+)['"`]/);
          const exerciseName = nameMatch ? nameMatch[1] : 'Unknown';
          
          // Check if it's high priority
          const isHighPriority = highPriorityKeywords.some(keyword => 
            exerciseName.toLowerCase().includes(keyword) || 
            exerciseId.toLowerCase().includes(keyword)
          );
          
          if (isHighPriority) {
            // Check for missing fields
            const hasDescription = /description:\s*['"`]/.test(exerciseBlock);
            const hasCoachingTips = /coachingTips:\s*\[/.test(exerciseBlock);
            const hasSafetyNotes = /safetyNotes:\s*\[/.test(exerciseBlock);
            const hasInstructions = /instructions:\s*\[/.test(exerciseBlock);
            
            if (!hasDescription || !hasCoachingTips) {
              const exercise = {
                id: exerciseId,
                name: exerciseName,
                category: category,
                hasDescription,
                hasCoachingTips,
                hasSafetyNotes,
                hasInstructions,
                missingFields: []
              };
              
              if (!hasDescription) exercise.missingFields.push('description');
              if (!hasCoachingTips) exercise.missingFields.push('coachingTips');
              if (!hasSafetyNotes) exercise.missingFields.push('safetyNotes');
              if (!hasInstructions) exercise.missingFields.push('instructions');
              
              highPriorityIncomplete.push(exercise);
            }
          }
        });
        
        console.log(`   Found ${matches.length} exercises`);
      }
    }

    console.log(`\n📊 HIGH-PRIORITY INCOMPLETE EXERCISES ANALYSIS`);
    console.log(`═══════════════════════════════════════════════`);
    console.log(`Total exercises analyzed: ${totalAnalyzed}`);
    console.log(`High-priority incomplete exercises: ${highPriorityIncomplete.length}`);

    // Group by category
    const byCategory = {};
    highPriorityIncomplete.forEach(ex => {
      if (!byCategory[ex.category]) byCategory[ex.category] = [];
      byCategory[ex.category].push(ex);
    });

    console.log(`\n🔴 HIGH-PRIORITY EXERCISES NEEDING COMPLETE STRUCTURE`);
    console.log(`════════════════════════════════════════════════════`);

    Object.keys(byCategory).sort((a,b) => byCategory[b].length - byCategory[a].length).forEach(category => {
      const exercises = byCategory[category];
      console.log(`\n🏷️  ${category.toUpperCase()} (${exercises.length} exercises)`);
      
      exercises.slice(0, 20).forEach(ex => {
        console.log(`   • ${ex.name} [missing: ${ex.missingFields.join(', ')}]`);
      });
      
      if (exercises.length > 20) {
        console.log(`   ... and ${exercises.length - 20} more exercises`);
      }
    });

    // Create sample complete structure
    console.log(`\n📝 SAMPLE COMPLETE EXERCISE STRUCTURE NEEDED:`);
    console.log(`═══════════════════════════════════════════════`);
    
    const sampleExercise = highPriorityIncomplete[0];
    if (sampleExercise) {
      console.log(`\n{`);
      console.log(`  id: '${sampleExercise.id}',`);
      console.log(`  name: '${sampleExercise.name}',`);
      console.log(`  category: 'strength',`);
      console.log(`  equipment: ['dumbbells'], // or relevant equipment`);
      console.log(`  muscleGroups: ['chest', 'triceps', 'shoulders'],`);
      console.log(`  difficulty: 3, // 1-5 scale`);
      console.log(`  description: 'Detailed description of the exercise and its benefits',`);
      console.log(`  instructions: [`);
      console.log(`    'Step 1: Setup and starting position',`);
      console.log(`    'Step 2: Movement execution',`);
      console.log(`    'Step 3: Return to starting position'`);
      console.log(`  ],`);
      console.log(`  safetyNotes: [`);
      console.log(`    'Keep core engaged throughout movement',`);
      console.log(`    'Control the weight on both concentric and eccentric phases'`);
      console.log(`  ],`);
      console.log(`  coachingTips: [`);
      console.log(`    'Focus on feeling the target muscles working',`);
      console.log(`    'Maintain proper breathing pattern',`);
      console.log(`    'Progress weight gradually'`);
      console.log(`  ]`);
      console.log(`}`);
    }

    // Save results for easy reference
    const results = {
      summary: {
        totalAnalyzed,
        highPriorityIncomplete: highPriorityIncomplete.length
      },
      exercises: highPriorityIncomplete,
      byCategory
    };

    const resultsPath = path.join(__dirname, 'high-priority-incomplete-exercises.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n💾 Detailed results saved to: ${resultsPath}`);

    return results;
  } catch (error) {
    console.error('❌ Error finding high-priority incomplete exercises:', error);
    return null;
  }
}

// Run the function
if (require.main === module) {
  findHighPriorityIncompleteExercises();
}

module.exports = { findHighPriorityIncompleteExercises }; 