const fs = require('fs');
const path = require('path');

// All remaining women's training plans data
const remainingWomenPlans = {
  "best-workouts-for-adductors": {
    "id": "best-workouts-for-adductors",
    "name": "Best Workouts for Adductors",
    "summary": "The adductors, a crucial muscle group located around the hips, play a significant role in movements that bring the thighs towards the body. This workout incorporates exercises like Hip Adduction Machines, lateral lunges, and leg raises, all tailored to engage and strengthen the adductors effectively. While men and women both benefit from these exercises, the methodology is adapted based on general preferences and averages specific to women of 5'5\" height, 140 lbs weight, and 34 years age.",
    "workouts": [
      {
        "id": "adductors-workout-1",
        "name": "Workout 1",
        "focus": ["Adductors"],
        "exercises": [
          { "exercise_id": "machine-hip-adductor", "name": "Machine Hip Adductor", "sets": [{ "set": 1, "reps": 5, "weight": 65, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 65, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 65, "unit": "lbs" }] },
          { "exercise_id": "cable-hip-adduction", "name": "Cable Hip Adduction", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "lateral-bound", "name": "Lateral Bound", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }, { "set": 3, "reps": 10 }, { "set": 4, "reps": 10 }] },
          { "exercise_id": "lateral-box-jump", "name": "Lateral Box Jump", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }, { "set": 4, "reps": 8 }, { "set": 5, "reps": 8 }] },
          { "exercise_id": "lateral-cone-hop", "name": "Lateral Cone Hop", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] },
          { "exercise_id": "loop-band-standing-hip-adduction", "name": "Loop Band Standing Hip Adduction", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] }
        ]
      }
    ]
  },
  "best-workouts-for-lower-back-women": {
    "id": "best-workouts-for-lower-back-women",
    "name": "Best Workouts for Lower Back (Women)",
    "summary": "The Lower Back plays a key role in supporting the torso and is part of the core, central to many movements. To effectively target this muscle group, exercises like back extensions and stabilizing postures are typically recommended. For women, training plans are tailored to physiological characteristics based on averages (height: 5'5\", weight: 140lbs, age: 34), while respecting individual capability and goals.",
    "workouts": [
      {
        "id": "lower-back-women-workout-1",
        "name": "Workout 1",
        "focus": ["Lower Back"],
        "exercises": [
          { "exercise_id": "back-extensions", "name": "Back Extensions", "sets": [{ "set": 1, "reps": 5 }, { "set": 2, "reps": 5 }, { "set": 3, "reps": 5 }, { "set": 4, "reps": 5 }, { "set": 5, "reps": 5 }] },
          { "exercise_id": "stiff-legged-barbell-good-morning", "name": "Stiff-Legged Barbell Good Morning", "sets": [{ "set": 1, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }] },
          { "exercise_id": "superman", "name": "Superman", "sets": [{ "set": 1, "reps": 6 }, { "set": 2, "reps": 6 }, { "set": 3, "reps": 6 }, { "set": 4, "reps": 6 }] },
          { "exercise_id": "reverse-hyperextension", "name": "Reverse Hyperextension", "sets": [{ "set": 1, "reps": 5 }, { "set": 2, "reps": 5 }, { "set": 3, "reps": 5 }, { "set": 4, "reps": 5 }, { "set": 5, "reps": 5 }] },
          { "exercise_id": "seated-back-extension", "name": "Seated Back Extension", "sets": [{ "set": 1, "reps": 11, "weight": 65, "unit": "lbs" }, { "set": 2, "reps": 11, "weight": 65, "unit": "lbs" }, { "set": 3, "reps": 11, "weight": 65, "unit": "lbs" }] },
          { "exercise_id": "superman-hold", "name": "Superman Hold", "sets": [{ "set": 1, "duration": "1:00" }, { "set": 2, "duration": "1:00" }, { "set": 3, "duration": "1:00" }] }
        ]
      },
      {
        "id": "lower-back-women-workout-2",
        "name": "Workout 2",
        "focus": ["Lower Back"],
        "exercises": [
          { "exercise_id": "superman-with-scaption", "name": "Superman with Scaption", "sets": [{ "set": 1, "reps": 5 }, { "set": 2, "reps": 5 }, { "set": 3, "reps": 5 }, { "set": 4, "reps": 5 }, { "set": 5, "reps": 5 }] },
          { "exercise_id": "alternating-superman", "name": "Alternating Superman", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] },
          { "exercise_id": "dumbbell-superman", "name": "Dumbbell Superman", "sets": [{ "set": 1, "reps": 10, "weight": 5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 5, "unit": "lbs" }] },
          { "exercise_id": "stability-ball-back-extension", "name": "Stability Ball Back Extension", "sets": [{ "set": 1, "reps": 5 }, { "set": 2, "reps": 5 }, { "set": 3, "reps": 5 }, { "set": 4, "reps": 5 }, { "set": 5, "reps": 5 }] },
          { "exercise_id": "medicine-ball-superman", "name": "Medicine Ball Superman", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "rack-pulls", "name": "Rack Pulls", "sets": [{ "set": 1, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 45, "unit": "lbs" }] }
        ]
      },
      {
        "id": "lower-back-women-workout-3",
        "name": "Workout 3",
        "focus": ["Lower Back"],
        "exercises": [
          { "exercise_id": "stability-ball-hyperextension", "name": "Stability Ball Hyperextension", "sets": [{ "set": 1, "reps": 5 }, { "set": 2, "reps": 5 }, { "set": 3, "reps": 5 }, { "set": 4, "reps": 5 }, { "set": 5, "reps": 5 }] },
          { "exercise_id": "weighted-ball-hyperextension", "name": "Weighted Ball Hyperextension", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "incline-back-extension", "name": "Incline Back Extension", "sets": [{ "set": 1, "reps": 6 }, { "set": 2, "reps": 6 }, { "set": 3, "reps": 6 }, { "set": 4, "reps": 6 }] },
          { "exercise_id": "bridge-side-to-side", "name": "Bridge Side to Side", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }, { "set": 4, "reps": 8 }, { "set": 5, "reps": 8 }] },
          { "exercise_id": "bridge-up-up-down-down", "name": "Bridge Up Up Down Down", "sets": [{ "set": 1, "reps": 9 }, { "set": 2, "reps": 9 }, { "set": 3, "reps": 9 }] },
          { "exercise_id": "loop-band-superman-press", "name": "Loop Band Superman Press", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] }
        ]
      }
    ]
  },
  "best-workouts-for-trapezius-women": {
    "id": "best-workouts-for-trapezius-women",
    "name": "Best Workouts for Trapezius (Women)",
    "summary": "This workout is tailored for effectively developing the trapezius muscles, located at the upper part of the back between the shoulders. While the exercises themselves remain consistent across genders, considerations for average measures, such as 5'10\", 180 lbs, 35 years old for men and 5'5\", 140 lbs, 34 years old for women, are taken into account to guide reps and weight recommendations.",
    "workouts": [
      {
        "id": "trapezius-women-workout-1",
        "name": "Workout 1",
        "focus": ["Trapezius"],
        "exercises": [
          { "exercise_id": "cable-upright-row", "name": "Cable Upright Row", "sets": [{ "set": 1, "reps": 5, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "upright-row", "name": "Upright Row", "sets": [{ "set": 1, "reps": 10, "weight": 22.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 22.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 22.5, "unit": "lbs" }] },
          { "exercise_id": "barbell-shrug", "name": "Barbell Shrug", "sets": [{ "set": 1, "reps": 8, "weight": 40, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 40, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 40, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-shrug", "name": "Dumbbell Shrug", "sets": [{ "set": 1, "reps": 10, "weight": 15, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 15, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 15, "unit": "lbs" }] },
          { "exercise_id": "hammerstrength-shrug", "name": "Hammerstrength Shrug", "sets": [{ "set": 1, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "machine-shoulder-shrug", "name": "Machine Shoulder Shrug", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }] }
        ]
      }
    ]
  }
};

function integrateAllRemainingWomenPlans() {
  try {
    const referenceWorkoutsPath = path.join(__dirname, '..', 'lib', 'data', 'reference-workouts.ts');
    
    if (!fs.existsSync(referenceWorkoutsPath)) {
      console.error('❌ reference-workouts.ts file not found');
      return;
    }

    let content = fs.readFileSync(referenceWorkoutsPath, 'utf8');
    
    // Convert plans to string format
    let newPlansString = '';
    for (const [planId, planData] of Object.entries(remainingWomenPlans)) {
      newPlansString += `,\n  "${planId}": ${JSON.stringify(planData, null, 2).replace(/^/gm, '  ')}`;
    }

    // Find the end of the REFERENCE_WORKOUTS object
    const objectEndIndex = content.lastIndexOf('};');
    
    if (objectEndIndex === -1) {
      console.error('❌ Could not find end of REFERENCE_WORKOUTS object');
      return;
    }

    // Insert the new plans before the closing brace
    content = content.slice(0, objectEndIndex) + newPlansString + '\n' + content.slice(objectEndIndex);

    fs.writeFileSync(referenceWorkoutsPath, content);
    
    console.log('✅ Successfully integrated all remaining women\'s training plans');
    console.log(`📊 Added ${Object.keys(remainingWomenPlans).length} new training plan categories`);
    
    // Count total workouts added
    const totalWorkouts = Object.values(remainingWomenPlans).reduce((sum, plan) => sum + plan.workouts.length, 0);
    console.log(`🏋️‍♀️ Added ${totalWorkouts} individual workouts`);
    
    // Calculate file size increase
    const newFileSize = fs.statSync(referenceWorkoutsPath).size;
    console.log(`📈 File size: ${Math.round(newFileSize / 1024)} KB`);
    
    return true;
  } catch (error) {
    console.error('❌ Error integrating remaining women\'s plans:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  integrateAllRemainingWomenPlans();
}

module.exports = { integrateAllRemainingWomenPlans }; 