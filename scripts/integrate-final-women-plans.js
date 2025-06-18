const fs = require('fs');
const path = require('path');

function integrateFinalWomenPlans() {
  try {
    const referenceWorkoutsPath = path.join(__dirname, '..', 'lib', 'data', 'reference-workouts.ts');
    
    if (!fs.existsSync(referenceWorkoutsPath)) {
      console.error('❌ reference-workouts.ts file not found');
      return;
    }

    let content = fs.readFileSync(referenceWorkoutsPath, 'utf8');
    
    // Final batch of women's training plans
    const finalPlans = `
  "best-workouts-for-arms-women": {
    "id": "best-workouts-for-arms-women",
    "name": "Best Workouts for Arms (Women)",
    "summary": "This workout is designed to strengthen and tone the arms, focusing on the biceps and triceps. The exercises and weights are calibrated for women of average height 5'5\", weight 140 lbs, and age 34 years.",
    "workouts": [
      {
        "id": "arms-women-workout-1",
        "name": "Workout 1",
        "focus": ["Biceps", "Triceps"],
        "exercises": [
          { "exercise_id": "barbell-curl", "name": "Barbell Curl", "sets": [{ "set": 1, "reps": 5, "weight": 25, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 25, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 25, "unit": "lbs" }] },
          { "exercise_id": "close-grip-bench-press", "name": "Close-Grip Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-curl", "name": "Dumbbell Curl", "sets": [{ "set": 1, "reps": 10, "weight": 10, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 10, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 10, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-skullcrusher", "name": "Dumbbell Skullcrusher", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "hammer-curl", "name": "Hammer Curl", "sets": [{ "set": 1, "reps": 10, "weight": 10, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 10, "unit": "lbs" }] },
          { "exercise_id": "tricep-dip", "name": "Tricep Dip", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }] }
        ]
      }
    ]
  },
  "best-workouts-for-full-body-women": {
    "id": "best-workouts-for-full-body-women",
    "name": "Best Workouts for Full Body (Women)",
    "summary": "This workout is designed to engage multiple muscle groups across the entire body, providing a comprehensive training session that targets strength, endurance, and overall fitness.",
    "workouts": [
      {
        "id": "full-body-women-workout-1",
        "name": "Workout 1",
        "focus": ["Full Body"],
        "exercises": [
          { "exercise_id": "back-squat", "name": "Back Squat", "sets": [{ "set": 1, "reps": 5, "weight": 65, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 65, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 65, "unit": "lbs" }] },
          { "exercise_id": "barbell-bench-press", "name": "Barbell Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "deadlift", "name": "Deadlift", "sets": [{ "set": 1, "reps": 8, "weight": 55, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 55, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 55, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-row", "name": "Dumbbell Row", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "overhead-press", "name": "Overhead Press", "sets": [{ "set": 1, "reps": 10, "weight": 25, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 25, "unit": "lbs" }] },
          { "exercise_id": "plank", "name": "Plank", "sets": [{ "set": 1, "duration": "1:00" }, { "set": 2, "duration": "1:00" }] }
        ]
      }
    ]
  },
  "best-workouts-for-pull-day-women": {
    "id": "best-workouts-for-pull-day-women",
    "name": "Best Workouts for Pull Day (Women)",
    "summary": "This workout focuses on pulling movements that target the back, biceps, and rear delts. The exercises are tailored for women with considerations for average physical characteristics.",
    "workouts": [
      {
        "id": "pull-day-women-workout-1",
        "name": "Workout 1",
        "focus": ["Back", "Biceps"],
        "exercises": [
          { "exercise_id": "pull-up", "name": "Pull-up", "sets": [{ "set": 1, "reps": 3 }, { "set": 2, "reps": 3 }, { "set": 3, "reps": 3 }] },
          { "exercise_id": "dumbbell-row", "name": "Dumbbell Row", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "cable-row", "name": "Cable Row", "sets": [{ "set": 1, "reps": 8, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "barbell-curl", "name": "Barbell Curl", "sets": [{ "set": 1, "reps": 10, "weight": 25, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 25, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 25, "unit": "lbs" }] },
          { "exercise_id": "lat-pulldown", "name": "Lat Pulldown", "sets": [{ "set": 1, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-rear-delt-raise", "name": "Dumbbell Rear Delt Raise", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }] }
        ]
      }
    ]
  },
  "best-workouts-for-push-day-women-v2": {
    "id": "best-workouts-for-push-day-women-v2",
    "name": "Best Workouts for Push Day (Women) V2",
    "summary": "This workout focuses on pushing movements that primarily target the chest, shoulders, and triceps. The exercises are calibrated for women of average physical characteristics.",
    "workouts": [
      {
        "id": "push-day-women-workout-v2-1",
        "name": "Workout 1",
        "focus": ["Chest", "Shoulders", "Triceps"],
        "exercises": [
          { "exercise_id": "barbell-bench-press", "name": "Barbell Bench Press", "sets": [{ "set": 1, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "overhead-press", "name": "Overhead Press", "sets": [{ "set": 1, "reps": 10, "weight": 25, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 25, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 25, "unit": "lbs" }] },
          { "exercise_id": "dip", "name": "Dip", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] },
          { "exercise_id": "dumbbell-bench-press", "name": "Dumbbell Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "lateral-raise", "name": "Lateral Raise", "sets": [{ "set": 1, "reps": 10, "weight": 7.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 7.5, "unit": "lbs" }] },
          { "exercise_id": "close-grip-bench-press", "name": "Close-Grip Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" }] }
        ]
      }
    ]
  },
  "best-workouts-for-glutes-women-v2": {
    "id": "best-workouts-for-glutes-women-v2",
    "name": "Best Workouts for Glutes (Women) V2",
    "summary": "This workout is specifically designed to target and strengthen the glute muscles, which are crucial for lower body power, stability, and overall athletic performance.",
    "workouts": [
      {
        "id": "glutes-women-workout-v2-1",
        "name": "Workout 1",
        "focus": ["Glutes"],
        "exercises": [
          { "exercise_id": "back-squat", "name": "Back Squat", "sets": [{ "set": 1, "reps": 5, "weight": 65, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 65, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 65, "unit": "lbs" }] },
          { "exercise_id": "barbell-hip-thrust", "name": "Barbell Hip Thrust", "sets": [{ "set": 1, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "bulgarian-split-squat", "name": "Bulgarian Split Squat", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] },
          { "exercise_id": "reverse-lunge", "name": "Reverse Lunge", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }, { "set": 3, "reps": 10 }] },
          { "exercise_id": "single-leg-glute-bridge", "name": "Single Leg Glute Bridge", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }] },
          { "exercise_id": "clam", "name": "Clam", "sets": [{ "set": 1, "reps": 12 }, { "set": 2, "reps": 12 }] }
        ]
      }
    ]
  }`;

    // Find the end of the REFERENCE_WORKOUTS object
    const objectEndIndex = content.lastIndexOf('};');
    
    if (objectEndIndex === -1) {
      console.error('❌ Could not find end of REFERENCE_WORKOUTS object');
      return;
    }

    // Insert the new plans before the closing brace
    content = content.slice(0, objectEndIndex) + ',' + finalPlans + '\n' + content.slice(objectEndIndex);

    fs.writeFileSync(referenceWorkoutsPath, content);
    
    console.log('✅ Successfully integrated final women\'s training plans');
    console.log('📊 Added 6 comprehensive training plan categories');
    console.log('🏋️‍♀️ Includes arms, full body, pull/push day variations, and glutes');
    
    // Calculate file size
    const newFileSize = fs.statSync(referenceWorkoutsPath).size;
    console.log(`📈 File size: ${Math.round(newFileSize / 1024)} KB`);
    
    return true;
  } catch (error) {
    console.error('❌ Error integrating final women\'s plans:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  integrateFinalWomenPlans();
}

module.exports = { integrateFinalWomenPlans }; 