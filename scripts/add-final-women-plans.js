const fs = require('fs');
const path = require('path');

function addFinalWomenPlans() {
  try {
    const referenceWorkoutsPath = path.join(__dirname, '..', 'lib', 'data', 'reference-workouts.ts');
    
    if (!fs.existsSync(referenceWorkoutsPath)) {
      console.error('❌ reference-workouts.ts file not found');
      return;
    }

    let content = fs.readFileSync(referenceWorkoutsPath, 'utf8');
    
    // Define the additional plans to add (sample of the key ones)
    const additionalPlans = `
  "best-workouts-for-women": {
    "id": "best-workouts-for-women",
    "name": "Best Workouts for Women",
    "summary": "This workout is designed to address generalized preferences while focusing on achieving the desired adaptations effectively and efficiently. Exercises selected have been tailored to adhere to observed tendencies and aim to contribute to noticeable progress toward fitness goals. For women, repetitions and weights have been adjusted considering average values of 5'5\", 140lbs, and 34 years old, though individual capabilities and conditions may vary widely.",
    "workouts": [
      {
        "id": "women-workout-1",
        "name": "Workout 1",
        "focus": ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
        "exercises": [
          { "exercise_id": "back-squat", "name": "Back Squat", "sets": [{ "set": 1, "reps": 4, "weight": 65, "unit": "lbs" }, { "set": 2, "reps": 4, "weight": 65, "unit": "lbs" }, { "set": 3, "reps": 4, "weight": 65, "unit": "lbs" }] },
          { "exercise_id": "barbell-bench-press", "name": "Barbell Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }] },
          { "exercise_id": "cable-row", "name": "Cable Row", "sets": [{ "set": 1, "reps": 9, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 9, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 9, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "barbell-curl", "name": "Barbell Curl", "sets": [{ "set": 1, "reps": 10, "weight": 22.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 22.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 22.5, "unit": "lbs" }] },
          { "exercise_id": "dip", "name": "Dip", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] },
          { "exercise_id": "bicycle-crunch", "name": "Bicycle Crunch", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }, { "set": 3, "reps": 10 }, { "set": 4, "reps": 10 }] }
        ]
      },
      {
        "id": "women-workout-2",
        "name": "Workout 2",
        "focus": ["Chest", "Quadriceps", "Biceps", "Back", "Glutes", "Abs"],
        "exercises": [
          { "exercise_id": "barbell-incline-bench-press", "name": "Barbell Incline Bench Press", "sets": [{ "set": 1, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "burpee", "name": "Burpee", "sets": [{ "set": 1, "reps": 8 }, { "set": 2, "reps": 8 }, { "set": 3, "reps": 8 }] },
          { "exercise_id": "dumbbell-bicep-curl", "name": "Dumbbell Bicep Curl", "sets": [{ "set": 1, "reps": 8, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "bent-over-barbell-row", "name": "Bent Over Barbell Row", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "stability-ball-hip-bridge", "name": "Stability Ball Hip Bridge", "sets": [{ "set": 1, "duration": "1:00" }, { "set": 2, "duration": "1:00" }, { "set": 3, "duration": "1:00" }] },
          { "exercise_id": "crunches", "name": "Crunches", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }, { "set": 3, "reps": 10 }, { "set": 4, "reps": 10 }] }
        ]
      },
      {
        "id": "women-workout-3",
        "name": "Workout 3",
        "focus": ["Hamstrings", "Chest", "Biceps", "Shoulders", "Triceps", "Abs"],
        "exercises": [
          { "exercise_id": "deadlift", "name": "Deadlift", "sets": [{ "set": 1, "reps": 6, "weight": 55, "unit": "lbs" }, { "set": 2, "reps": 6, "weight": 55, "unit": "lbs" }, { "set": 3, "reps": 6, "weight": 55, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-bench-press", "name": "Dumbbell Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "ez-bar-curl", "name": "EZ-Bar Curl", "sets": [{ "set": 1, "reps": 8, "weight": 20, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 20, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 20, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-rear-delt-raise", "name": "Dumbbell Rear Delt Raise", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-skullcrusher", "name": "Dumbbell Skullcrusher", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "exercise-ball-crunch", "name": "Exercise Ball Crunch", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }, { "set": 3, "reps": 10 }, { "set": 4, "reps": 10 }] }
        ]
      }
    ]
  },
  "best-workouts-for-calves": {
    "id": "best-workouts-for-calves",
    "name": "Best Workouts for Calves",
    "summary": "Calf workouts focus on developing the muscles located between the ankle and the knee, primarily responsible for toe-pointing movements. Including lower-body exercises targeting this muscle group can improve strength and definition. For women, suggested exercises and resistance intensity are often adapted based on averaged metrics: 5'5\" height, 140 lbs weight, and 34 years of age, although individual capabilities can vary significantly.",
    "workouts": [
      {
        "id": "calves-workout-1",
        "name": "Workout 1",
        "focus": ["Calves"],
        "exercises": [
          { "exercise_id": "dumbbell-calf-raise-to-high-pull", "name": "Dumbbell Calf Raise to High Pull", "sets": [{ "set": 1, "reps": 5, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "seated-machine-calf-press", "name": "Seated Machine Calf Press", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "standing-barbell-calf-raise", "name": "Standing Barbell Calf Raise", "sets": [{ "set": 1, "reps": 8, "weight": 40, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 40, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 40, "unit": "lbs" }] },
          { "exercise_id": "single-leg-standing-calf-raise", "name": "Single Leg Standing Calf Raise", "sets": [{ "set": 1, "reps": 6 }, { "set": 2, "reps": 6 }, { "set": 3, "reps": 6 }, { "set": 4, "reps": 6 }, { "set": 5, "reps": 6 }] },
          { "exercise_id": "calf-press", "name": "Calf Press", "sets": [{ "set": 1, "reps": 8, "weight": 90, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 90, "unit": "lbs" }] },
          { "exercise_id": "standing-machine-calf-press", "name": "Standing Machine Calf Press", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }] }
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
    content = content.slice(0, objectEndIndex) + ',' + additionalPlans + '\n' + content.slice(objectEndIndex);

    fs.writeFileSync(referenceWorkoutsPath, content);
    
    console.log('✅ Successfully added additional women\'s training plans');
    console.log('📊 Added 2 new training plan categories as a sample');
    console.log('🏋️‍♀️ These include general women\'s workouts and calf-specific training');
    
    return true;
  } catch (error) {
    console.error('❌ Error adding final women\'s plans:', error);
    return false;
  }
}

// Run the function
if (require.main === module) {
  addFinalWomenPlans();
}

module.exports = { addFinalWomenPlans }; 