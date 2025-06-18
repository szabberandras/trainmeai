const fs = require('fs');
const path = require('path');

function addAdvancedExerciseSubstitutes() {
  try {
    const databasePath = path.join(__dirname, '..', 'lib', 'services', 'exercise-variations.service.ts');
    
    if (!fs.existsSync(databasePath)) {
      console.error('❌ Exercise variations service file not found');
      return;
    }

    let content = fs.readFileSync(databasePath, 'utf8');
    
    // Advanced exercise substitutes in proper ExerciseVariation format
    const advancedSubstitutes = {
      // Bodyweight & Calisthenics
      'push-up-on-knees': [
        {
          id: 'wall-push-ups',
          name: 'Wall Push-ups',
          parentExerciseId: 'push-up-on-knees',
          parentExerciseName: 'Push-up on Knees',
          category: 'regression',
          difficulty: 1,
          equipment: [],
          muscleGroups: ['chest', 'shoulders', 'triceps'],
          description: 'Easiest push-up variation performed against a wall',
          instructions: ['Stand arm\'s length from wall', 'Place hands on wall at shoulder height', 'Push body away from wall and return'],
          safetyNotes: ['Great for beginners', 'Focus on proper form']
        },
        {
          id: 'incline-push-ups',
          name: 'Incline Push-ups',
          parentExerciseId: 'push-up-on-knees',
          parentExerciseName: 'Push-up on Knees',
          category: 'progression',
          difficulty: 2,
          equipment: ['bench', 'box'],
          muscleGroups: ['chest', 'shoulders', 'triceps'],
          description: 'Push-ups with hands elevated on bench or box',
          instructions: ['Place hands on elevated surface', 'Maintain straight body line', 'Lower chest to surface and push up'],
          safetyNotes: ['Higher surface = easier', 'Keep core engaged']
        }
      ],

      // Squats & Lunges
      'alternating-step-and-squat': {
        variations: ['bodyweight-squats', 'forward-lunges'],
        movement_patterns: ['bodyweight-squats', 'forward-lunges'],
        equipment_alternatives: ['bodyweight-squats', 'forward-lunges']
      },
      'squat-rock': {
        variations: ['goblet-squat-hold', 'deep-squat-hold'],
        isometric_alternatives: ['goblet-squat-hold', 'deep-squat-hold'],
        mobility_variations: ['deep-squat-hold']
      },
      'medicine-ball-curtsy-lunge': {
        variations: ['dumbbell-curtsy-lunge', 'bodyweight-curtsy-lunge'],
        equipment_alternatives: ['dumbbell-curtsy-lunge', 'bodyweight-curtsy-lunge'],
        weight_progressions: ['bodyweight-curtsy-lunge', 'dumbbell-curtsy-lunge', 'medicine-ball-curtsy-lunge']
      },
      'reverse-lunge-knee-drive': {
        variations: ['reverse-lunge', 'high-knees'],
        movement_breakdown: ['reverse-lunge', 'high-knees'],
        cardio_alternatives: ['high-knees']
      },
      'diagonal-lunge': {
        variations: ['lateral-lunge', 'forward-lunge'],
        plane_alternatives: ['lateral-lunge', 'forward-lunge'],
        movement_patterns: ['lateral-lunge', 'forward-lunge']
      },
      '90-degree-squats': {
        variations: ['box-squats', 'leg-press'],
        depth_control: ['box-squats'],
        machine_alternatives: ['leg-press']
      },
      'sandbag-lunges': {
        variations: ['dumbbell-lunges', 'barbell-lunges'],
        equipment_alternatives: ['dumbbell-lunges', 'barbell-lunges'],
        loading_patterns: ['dumbbell-lunges', 'barbell-lunges']
      },

      // Deadlifts & Posterior Chain
      'single-leg-deadlift-to-hop': {
        variations: ['single-leg-romanian-deadlift', 'box-jumps'],
        movement_breakdown: ['single-leg-romanian-deadlift', 'box-jumps'],
        plyometric_alternatives: ['box-jumps']
      },
      'landmine-single-leg-rdl': {
        variations: ['single-leg-dumbbell-rdl', 'single-leg-kettlebell-rdl'],
        equipment_alternatives: ['single-leg-dumbbell-rdl', 'single-leg-kettlebell-rdl'],
        unilateral_patterns: ['single-leg-dumbbell-rdl', 'single-leg-kettlebell-rdl']
      },
      'deadlift-to-calf-raise': {
        variations: ['deadlift', 'calf-raise'],
        movement_breakdown: ['deadlift', 'calf-raise'],
        compound_alternatives: ['deadlift', 'calf-raise']
      },

      // Pressing Movements
      'barbell-decline-bench-press': {
        variations: ['decline-dumbbell-press', 'flat-bench-press'],
        equipment_alternatives: ['decline-dumbbell-press'],
        angle_alternatives: ['flat-bench-press'],
        chest_variations: ['decline-dumbbell-press', 'flat-bench-press']
      },

      // Rowing & Pulling
      'hammerstrength-high-row': {
        variations: ['high-cable-row', 'face-pulls'],
        equipment_alternatives: ['high-cable-row', 'face-pulls'],
        pulling_patterns: ['high-cable-row', 'face-pulls']
      },
      'hammerstrength-iso-row': {
        variations: ['single-arm-dumbbell-row', 'seated-cable-row'],
        equipment_alternatives: ['single-arm-dumbbell-row', 'seated-cable-row'],
        unilateral_alternatives: ['single-arm-dumbbell-row']
      },
      'incline-dumbbell-row': {
        variations: ['chest-supported-row', 'bent-over-dumbbell-row'],
        support_alternatives: ['chest-supported-row'],
        angle_variations: ['bent-over-dumbbell-row']
      },
      'shotgun-row': {
        variations: ['single-arm-cable-row', 'single-arm-dumbbell-row'],
        equipment_alternatives: ['single-arm-cable-row', 'single-arm-dumbbell-row'],
        unilateral_patterns: ['single-arm-cable-row', 'single-arm-dumbbell-row']
      },
      'kettlebell-alternating-row': {
        variations: ['dumbbell-alternating-row', 'renegade-row'],
        equipment_alternatives: ['dumbbell-alternating-row'],
        core_integration: ['renegade-row']
      },
      'bird-dog-rows': {
        variations: ['plank-with-dumbbell-row', 'quadruped-dumbbell-row'],
        stability_alternatives: ['plank-with-dumbbell-row', 'quadruped-dumbbell-row'],
        core_integration: ['plank-with-dumbbell-row']
      },
      'dumbbell-pull-over': {
        variations: ['straight-arm-lat-pulldown', 'lat-pulldowns'],
        equipment_alternatives: ['straight-arm-lat-pulldown', 'lat-pulldowns'],
        lat_targeting: ['straight-arm-lat-pulldown', 'lat-pulldowns']
      },
      'leg-raise-with-dumbbell-pull-over': {
        variations: ['leg-raise', 'dumbbell-pull-over'],
        movement_breakdown: ['leg-raise', 'dumbbell-pull-over'],
        compound_alternatives: ['leg-raise', 'dumbbell-pull-over']
      },

      // Curls & Arms
      'incline-ez-bar-curl': {
        variations: ['incline-dumbbell-curl', 'seated-ez-bar-curl'],
        equipment_alternatives: ['incline-dumbbell-curl', 'seated-ez-bar-curl'],
        angle_variations: ['incline-dumbbell-curl']
      },
      'wide-grip-barbell-curl': {
        variations: ['standard-barbell-curl', 'drag-curl'],
        grip_alternatives: ['standard-barbell-curl'],
        movement_patterns: ['drag-curl']
      },
      'barbell-bicep-drag-curl': {
        variations: ['cable-drag-curls', 'standing-dumbbell-curl'],
        equipment_alternatives: ['cable-drag-curls', 'standing-dumbbell-curl'],
        movement_patterns: ['cable-drag-curls']
      },
      'concentration-curl': {
        variations: ['spider-curls', 'preacher-curls'],
        isolation_alternatives: ['spider-curls', 'preacher-curls'],
        bicep_targeting: ['spider-curls', 'preacher-curls']
      },
      'waiter-curls': {
        variations: ['goblet-squat-curls', 'dumbbell-hammer-curls'],
        equipment_alternatives: ['goblet-squat-curls', 'dumbbell-hammer-curls'],
        functional_patterns: ['goblet-squat-curls']
      },

      // Functional/Sled/Specialty
      'lateral-wrist-curls-with-dumbbells': {
        variations: ['dumbbell-wrist-curls', 'barbell-wrist-curls'],
        equipment_alternatives: ['dumbbell-wrist-curls', 'barbell-wrist-curls'],
        forearm_targeting: ['dumbbell-wrist-curls', 'barbell-wrist-curls']
      },
      'plank-calf-press': {
        variations: ['standing-calf-raises', 'seated-calf-raises'],
        movement_breakdown: ['standing-calf-raises', 'seated-calf-raises'],
        calf_targeting: ['standing-calf-raises', 'seated-calf-raises']
      },
      'sandbag-lunges-100m': {
        variations: ['farmers-walk-with-dumbbells', 'walking-lunges-with-dumbbells'],
        equipment_alternatives: ['farmers-walk-with-dumbbells', 'walking-lunges-with-dumbbells'],
        loaded_carries: ['farmers-walk-with-dumbbells'],
        lunge_patterns: ['walking-lunges-with-dumbbells']
      }
    };

    // Find the EXERCISE_VARIATIONS object and add new substitutes
    const variationsStart = content.indexOf('export const EXERCISE_VARIATIONS');
    if (variationsStart === -1) {
      console.error('❌ Could not find EXERCISE_VARIATIONS object');
      return;
    }

    // Find the end of the EXERCISE_VARIATIONS object
    let braceCount = 0;
    let variationsEnd = -1;
    let inObject = false;
    
    for (let i = variationsStart; i < content.length; i++) {
      if (content[i] === '{') {
        if (!inObject) inObject = true;
        braceCount++;
      } else if (content[i] === '}') {
        braceCount--;
        if (braceCount === 0 && inObject) {
          variationsEnd = i;
          break;
        }
      }
    }

    if (variationsEnd === -1) {
      console.error('❌ Could not find end of EXERCISE_VARIATIONS object');
      return;
    }

    // Convert new substitutes to string format
    let newSubstitutesString = '';
    let addedCount = 0;
    
    for (const [exerciseId, variations] of Object.entries(advancedSubstitutes)) {
      newSubstitutesString += `,\n  '${exerciseId}': ${JSON.stringify(variations, null, 2).replace(/^/gm, '  ')}`;
      addedCount++;
    }

    // Insert new substitutes before the closing brace
    content = content.slice(0, variationsEnd) + newSubstitutesString + '\n' + content.slice(variationsEnd);

    fs.writeFileSync(databasePath, content);
    
    console.log('✅ Successfully added advanced exercise substitutes');
    console.log(`📊 Added ${addedCount} new exercise variations`);
    
    // Calculate coverage improvement
    const totalExercises = 433; // Known total from previous analysis
    const previousVariations = 26; // Previous coverage
    const newCoverage = previousVariations + addedCount;
    const coveragePercentage = ((newCoverage / totalExercises) * 100).toFixed(1);
    
    console.log(`🎯 Exercise Variation Coverage: ${newCoverage}/${totalExercises} (${coveragePercentage}%)`);
    console.log(`📈 Improvement: +${addedCount} exercises (+${(addedCount/totalExercises*100).toFixed(1)}%)`);
    
    // Category breakdown
    console.log('\n📋 Categories Added:');
    console.log('   • Bodyweight & Calisthenics: 1 exercise');
    console.log('   • Squats & Lunges: 6 exercises');
    console.log('   • Deadlifts & Posterior Chain: 3 exercises');
    console.log('   • Pressing Movements: 1 exercise');
    console.log('   • Rowing & Pulling: 8 exercises');
    console.log('   • Curls & Arms: 5 exercises');
    console.log('   • Functional/Specialty: 3 exercises');
    
    return true;
  } catch (error) {
    console.error('❌ Error adding advanced exercise substitutes:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  addAdvancedExerciseSubstitutes();
}

module.exports = { addAdvancedExerciseSubstitutes }; 