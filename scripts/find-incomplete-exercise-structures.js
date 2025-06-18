const fs = require('fs');
const path = require('path');

function findIncompleteExerciseStructures() {
  try {
    console.log('🔍 ANALYZING EXERCISE JSON STRUCTURES');
    console.log('═══════════════════════════════════════');

    // Read all exercise database files
    const exerciseCategories = [
      'agility_speed', 'balance', 'bodyweight', 'cardio', 'core', 'crossfit',
      'cycling', 'endurance', 'flexibility', 'hyrox', 'kettlebell', 'lunge',
      'mobility', 'none', 'plyometric', 'recovery_warm_up', 'running',
      'stability', 'strength', 'swimming', 'technique', 'triathlon'
    ];

    const exercisesPath = path.join(__dirname, '..', 'lib', 'exercises', 'categories');
    
    const incompleteExercises = [];
    const completeExercises = [];
    const missingFields = {
      instructions: [],
      safetyNotes: [],
      coachingTips: [],
      description: [],
      difficulty: [],
      duration: [],
      sets: [],
      reps: [],
      rest: []
    };

    let totalExercises = 0;

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
          totalExercises++;
          const exerciseBlock = match[0];
          const exerciseId = match[1];
          
          // Extract exercise name
          const nameMatch = exerciseBlock.match(/name:\s*['"`]([^'"`]+)['"`]/);
          const exerciseName = nameMatch ? nameMatch[1] : 'Unknown';
          
          // Check for required fields
          const hasInstructions = /instructions:\s*\[/.test(exerciseBlock);
          const hasSafetyNotes = /safetyNotes:\s*\[/.test(exerciseBlock);
          const hasCoachingTips = /coachingTips:\s*\[/.test(exerciseBlock);
          const hasDescription = /description:\s*['"`]/.test(exerciseBlock);
          const hasDifficulty = /difficulty:\s*\d/.test(exerciseBlock);
          const hasDuration = /duration:\s*\d/.test(exerciseBlock);
          const hasSets = /sets:\s*\d/.test(exerciseBlock);
          const hasReps = /reps:\s*\d/.test(exerciseBlock);
          const hasRest = /rest:\s*\d/.test(exerciseBlock);
          
          const exercise = {
            id: exerciseId,
            name: exerciseName,
            category: category,
            hasInstructions,
            hasSafetyNotes,
            hasCoachingTips,
            hasDescription,
            hasDifficulty,
            hasDuration,
            hasSets,
            hasReps,
            hasRest
          };

          // Track missing fields
          if (!hasInstructions) missingFields.instructions.push(exercise);
          if (!hasSafetyNotes) missingFields.safetyNotes.push(exercise);
          if (!hasCoachingTips) missingFields.coachingTips.push(exercise);
          if (!hasDescription) missingFields.description.push(exercise);
          if (!hasDifficulty) missingFields.difficulty.push(exercise);
          if (!hasDuration) missingFields.duration.push(exercise);
          if (!hasSets) missingFields.sets.push(exercise);
          if (!hasReps) missingFields.reps.push(exercise);
          if (!hasRest) missingFields.rest.push(exercise);

          // Determine if exercise is complete
          const isComplete = hasInstructions && hasSafetyNotes && hasDescription && hasDifficulty;
          
          if (isComplete) {
            completeExercises.push(exercise);
          } else {
            incompleteExercises.push(exercise);
          }
        });
        
        console.log(`   Found ${matches.length} exercises`);
      }
    }

    console.log(`\n📊 EXERCISE STRUCTURE ANALYSIS RESULTS`);
    console.log(`═══════════════════════════════════════`);
    console.log(`Total exercises analyzed: ${totalExercises}`);
    console.log(`Complete exercises: ${completeExercises.length} (${((completeExercises.length/totalExercises)*100).toFixed(1)}%)`);
    console.log(`Incomplete exercises: ${incompleteExercises.length} (${((incompleteExercises.length/totalExercises)*100).toFixed(1)}%)`);

    console.log(`\n🚨 MISSING FIELDS SUMMARY`);
    console.log(`═══════════════════════════`);
    Object.keys(missingFields).forEach(field => {
      const count = missingFields[field].length;
      const percentage = ((count/totalExercises)*100).toFixed(1);
      console.log(`${field.padEnd(15)}: ${count.toString().padStart(3)} exercises missing (${percentage}%)`);
    });

    console.log(`\n📋 EXERCISES MISSING CRITICAL FIELDS`);
    console.log(`════════════════════════════════════`);
    
    // Group incomplete exercises by what they're missing
    const criticallyIncomplete = incompleteExercises.filter(ex => 
      !ex.hasInstructions || !ex.hasSafetyNotes || !ex.hasDescription
    );

    console.log(`\n🔴 CRITICALLY INCOMPLETE (${criticallyIncomplete.length} exercises)`);
    console.log(`Missing instructions, safety notes, or description:`);
    
    // Group by category
    const byCategory = {};
    criticallyIncomplete.forEach(ex => {
      if (!byCategory[ex.category]) byCategory[ex.category] = [];
      byCategory[ex.category].push(ex);
    });

    Object.keys(byCategory).sort((a,b) => byCategory[b].length - byCategory[a].length).forEach(category => {
      const exercises = byCategory[category];
      console.log(`\n🏷️  ${category.toUpperCase()} (${exercises.length} exercises)`);
      exercises.slice(0, 10).forEach(ex => {
        const missing = [];
        if (!ex.hasInstructions) missing.push('instructions');
        if (!ex.hasSafetyNotes) missing.push('safety');
        if (!ex.hasDescription) missing.push('description');
        if (!ex.hasDifficulty) missing.push('difficulty');
        console.log(`   • ${ex.name} [missing: ${missing.join(', ')}]`);
      });
      if (exercises.length > 10) {
        console.log(`   ... and ${exercises.length - 10} more exercises`);
      }
    });

    // Check if I missed any exercises from the original list
    console.log(`\n🔍 CHECKING FOR MISSED EXERCISES FROM ORIGINAL LIST`);
    console.log(`══════════════════════════════════════════════════`);
    
    // Read the variations file to see what we added
    const variationsPath = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
    const variationsContent = fs.readFileSync(variationsPath, 'utf8');
    
    // Original 29 exercises from user's list
    const originalExercises = [
      'push-up-on-knees',
      'barbell-decline-bench-press', 
      'hammerstrength-high-row',
      'concentration-curl',
      'dumbbell-pull-over',
      'alternating-step-and-squat',
      'squat-rock',
      'medicine-ball-curtsy-lunge',
      'reverse-lunge-knee-drive',
      'diagonal-lunge',
      '90-degree-squats',
      'sandbag-lunges',
      'single-leg-deadlift-to-hop',
      'landmine-single-leg-rdl',
      'deadlift-to-calf-raise',
      'hammerstrength-iso-row',
      'incline-dumbbell-row',
      'shotgun-row',
      'kettlebell-alternating-row',
      'bird-dog-rows',
      'leg-raise-with-dumbbell-pull-over',
      'incline-ez-bar-curl',
      'wide-grip-barbell-curl',
      'barbell-bicep-drag-curl',
      'waiter-curls',
      'lateral-wrist-curls-with-dumbbells',
      'plank-calf-press',
      'sandbag-lunges-100m'
    ];

    const addedExercises = [];
    const missedExercises = [];

    originalExercises.forEach(exerciseId => {
      const pattern = new RegExp(`'${exerciseId}':\\s*\\[`, 'g');
      if (pattern.test(variationsContent)) {
        addedExercises.push(exerciseId);
      } else {
        missedExercises.push(exerciseId);
      }
    });

    console.log(`✅ Added exercises: ${addedExercises.length}/${originalExercises.length}`);
    if (missedExercises.length > 0) {
      console.log(`❌ Missed exercises: ${missedExercises.length}`);
      missedExercises.forEach(id => console.log(`   • ${id}`));
    } else {
      console.log(`🎉 All original exercises were successfully added!`);
    }

    // Save detailed results
    const results = {
      summary: {
        totalExercises,
        completeExercises: completeExercises.length,
        incompleteExercises: incompleteExercises.length,
        criticallyIncomplete: criticallyIncomplete.length
      },
      missingFields,
      incompleteExercises,
      criticallyIncomplete,
      originalExercisesCheck: {
        total: originalExercises.length,
        added: addedExercises.length,
        missed: missedExercises.length,
        missedList: missedExercises
      }
    };

    const resultsPath = path.join(__dirname, 'incomplete-exercise-structures-analysis.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`\n💾 Detailed analysis saved to: ${resultsPath}`);

    return results;
  } catch (error) {
    console.error('❌ Error analyzing exercise structures:', error);
    return null;
  }
}

// Run the function
if (require.main === module) {
  findIncompleteExerciseStructures();
}

module.exports = { findIncompleteExerciseStructures }; 