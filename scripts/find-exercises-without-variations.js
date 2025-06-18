const fs = require('fs');
const path = require('path');

function findExercisesWithoutVariations() {
  try {
    // Read exercise variations service
    const variationsPath = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
    const variationsContent = fs.readFileSync(variationsPath, 'utf8');
    
    // Extract exercises that have variations
    const exercisesWithVariations = new Set();
    const variationMatches = variationsContent.match(/'([^']+)':\s*\[/g);
    if (variationMatches) {
      variationMatches.forEach(match => {
        const exerciseId = match.match(/'([^']+)':/)[1];
        exercisesWithVariations.add(exerciseId);
      });
    }

    console.log(`✅ Found ${exercisesWithVariations.size} exercises with variations`);

    // Read all exercise database files
    const exerciseCategories = [
      'agility_speed', 'balance', 'bodyweight', 'cardio', 'core', 'crossfit',
      'cycling', 'endurance', 'flexibility', 'hyrox', 'kettlebell', 'lunge',
      'mobility', 'none', 'plyometric', 'recovery_warm_up', 'running',
      'stability', 'strength', 'swimming', 'technique', 'triathlon'
    ];

    const allExercises = new Map(); // exerciseId -> { name, category, equipment, muscleGroups }
    const exercisesPath = path.join(__dirname, '..', 'lib', 'exercises', 'categories');

    // Read each category file
    for (const category of exerciseCategories) {
      const categoryPath = path.join(exercisesPath, `${category}.ts`);
      
      if (fs.existsSync(categoryPath)) {
        const content = fs.readFileSync(categoryPath, 'utf8');
        
        // Extract exercises from the file
        const exerciseMatches = content.match(/{\s*id:\s*['"`]([^'"`]+)['"`],\s*name:\s*['"`]([^'"`]+)['"`]/g);
        
        if (exerciseMatches) {
          exerciseMatches.forEach(match => {
            const idMatch = match.match(/id:\s*['"`]([^'"`]+)['"`]/);
            const nameMatch = match.match(/name:\s*['"`]([^'"`]+)['"`]/);
            
            if (idMatch && nameMatch) {
              const exerciseId = idMatch[1];
              const exerciseName = nameMatch[1];
              
              // Extract additional info if possible
              const exerciseBlock = content.substring(
                content.indexOf(match) - 100,
                content.indexOf(match) + 500
              );
              
              let equipment = [];
              let muscleGroups = [];
              
              const equipmentMatch = exerciseBlock.match(/equipment:\s*\[([^\]]*)\]/);
              if (equipmentMatch) {
                equipment = equipmentMatch[1].split(',').map(e => e.trim().replace(/['"]/g, '')).filter(e => e);
              }
              
              const muscleMatch = exerciseBlock.match(/muscleGroups:\s*\[([^\]]*)\]/);
              if (muscleMatch) {
                muscleGroups = muscleMatch[1].split(',').map(m => m.trim().replace(/['"]/g, '')).filter(m => m);
              }
              
              allExercises.set(exerciseId, {
                name: exerciseName,
                category: category.replace('_', ' '),
                equipment,
                muscleGroups
              });
            }
          });
        }
      }
    }

    console.log(`✅ Found ${allExercises.size} total exercises in database`);

    // Find exercises without variations
    const exercisesWithoutVariations = [];
    
    allExercises.forEach((exerciseData, exerciseId) => {
      if (!exercisesWithVariations.has(exerciseId)) {
        exercisesWithoutVariations.push({
          id: exerciseId,
          ...exerciseData
        });
      }
    });

    console.log(`\n📊 EXERCISE VARIATION ANALYSIS`);
    console.log(`═══════════════════════════════`);
    console.log(`Total exercises: ${allExercises.size}`);
    console.log(`Exercises with variations: ${exercisesWithVariations.size}`);
    console.log(`Exercises without variations: ${exercisesWithoutVariations.length}`);
    console.log(`Coverage: ${((exercisesWithVariations.size / allExercises.size) * 100).toFixed(1)}%`);

    // Group exercises without variations by category
    const byCategory = {};
    exercisesWithoutVariations.forEach(exercise => {
      if (!byCategory[exercise.category]) {
        byCategory[exercise.category] = [];
      }
      byCategory[exercise.category].push(exercise);
    });

    console.log(`\n📋 EXERCISES WITHOUT VARIATIONS BY CATEGORY`);
    console.log(`═══════════════════════════════════════════`);

    // Sort categories by number of exercises
    const sortedCategories = Object.keys(byCategory).sort((a, b) => byCategory[b].length - byCategory[a].length);

    sortedCategories.forEach(category => {
      const exercises = byCategory[category];
      console.log(`\n🏷️  ${category.toUpperCase()} (${exercises.length} exercises)`);
      console.log(`${'─'.repeat(50)}`);
      
      exercises.slice(0, 20).forEach(exercise => { // Show first 20 per category
        const equipmentStr = exercise.equipment.length > 0 ? ` [${exercise.equipment.join(', ')}]` : ' [bodyweight]';
        const muscleStr = exercise.muscleGroups.length > 0 ? ` → ${exercise.muscleGroups.slice(0, 3).join(', ')}` : '';
        console.log(`   • ${exercise.name}${equipmentStr}${muscleStr}`);
      });
      
      if (exercises.length > 20) {
        console.log(`   ... and ${exercises.length - 20} more exercises`);
      }
    });

    // Identify high-priority exercises for variations
    console.log(`\n🎯 HIGH-PRIORITY EXERCISES FOR VARIATIONS`);
    console.log(`═════════════════════════════════════════`);

    const highPriorityKeywords = [
      'squat', 'deadlift', 'press', 'row', 'curl', 'lunge', 'pull', 'push',
      'bench', 'overhead', 'lateral', 'fly', 'raise', 'extension', 'crunch',
      'plank', 'burpee', 'jump', 'step', 'dip', 'chin'
    ];

    const highPriorityExercises = exercisesWithoutVariations.filter(exercise => {
      const name = exercise.name.toLowerCase();
      return highPriorityKeywords.some(keyword => name.includes(keyword));
    });

    console.log(`Found ${highPriorityExercises.length} high-priority exercises:`);
    
    // Group by equipment type
    const byEquipment = {
      bodyweight: [],
      dumbbell: [],
      barbell: [],
      cable: [],
      machine: [],
      other: []
    };

    highPriorityExercises.forEach(exercise => {
      const equipment = exercise.equipment.join(' ').toLowerCase();
      if (equipment === '' || equipment.includes('bodyweight')) {
        byEquipment.bodyweight.push(exercise);
      } else if (equipment.includes('dumbbell')) {
        byEquipment.dumbbell.push(exercise);
      } else if (equipment.includes('barbell')) {
        byEquipment.barbell.push(exercise);
      } else if (equipment.includes('cable')) {
        byEquipment.cable.push(exercise);
      } else if (equipment.includes('machine') || equipment.includes('smith')) {
        byEquipment.machine.push(exercise);
      } else {
        byEquipment.other.push(exercise);
      }
    });

    Object.keys(byEquipment).forEach(equipmentType => {
      const exercises = byEquipment[equipmentType];
      if (exercises.length > 0) {
        console.log(`\n💪 ${equipmentType.toUpperCase()} EXERCISES (${exercises.length})`);
        exercises.slice(0, 15).forEach(exercise => {
          const muscleStr = exercise.muscleGroups.length > 0 ? ` → ${exercise.muscleGroups.slice(0, 2).join(', ')}` : '';
          console.log(`   • ${exercise.name}${muscleStr}`);
        });
        if (exercises.length > 15) {
          console.log(`   ... and ${exercises.length - 15} more`);
        }
      }
    });

    // Save detailed results to file
    const resultsPath = path.join(__dirname, 'exercises-without-variations-analysis.json');
    const results = {
      summary: {
        totalExercises: allExercises.size,
        exercisesWithVariations: exercisesWithVariations.size,
        exercisesWithoutVariations: exercisesWithoutVariations.length,
        coveragePercentage: ((exercisesWithVariations.size / allExercises.size) * 100).toFixed(1)
      },
      exercisesWithVariations: Array.from(exercisesWithVariations),
      exercisesWithoutVariations: exercisesWithoutVariations,
      highPriorityExercises: highPriorityExercises,
      byCategory: byCategory,
      byEquipment: byEquipment
    };

    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n💾 Detailed analysis saved to: ${resultsPath}`);

    return results;
  } catch (error) {
    console.error('❌ Error analyzing exercises:', error);
    return null;
  }
}

// Run the function
if (require.main === module) {
  findExercisesWithoutVariations();
}

module.exports = { findExercisesWithoutVariations }; 