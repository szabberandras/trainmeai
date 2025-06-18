const fs = require('fs');

// Women-specific training plans data
const womenTrainingPlans = {
  "best-workouts-for-women": {
    "id": "best-workouts-for-women",
    "name": "Best Workouts for Women",
    "summary": "This workout is designed to address generalized preferences while focusing on achieving the desired adaptations effectively and efficiently. Exercises selected have been tailored to adhere to observed tendencies and aim to contribute to noticeable progress toward fitness goals. For women, repetitions and weights have been adjusted considering average values of 5'5\", 140lbs, and 34 years old, though individual capabilities and conditions may vary widely. In every session, modifications should be made in alignment with personal strength and endurance levels to ensure both safety and progress.",
    "workouts": [
      {
        "id": "women-workout-1",
        "name": "Workout 1",
        "focus": ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
        "exercises": [
          {
            "exercise_id": "back-squat",
            "name": "Back Squat",
            "sets": [
              { "set": 1, "reps": 4, "weight": 65, "unit": "lbs" },
              { "set": 2, "reps": 4, "weight": 65, "unit": "lbs" },
              { "set": 3, "reps": 4, "weight": 65, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "barbell-bench-press",
            "name": "Barbell Bench Press",
            "sets": [
              { "set": 1, "reps": 10, "weight": 35, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "cable-row",
            "name": "Cable Row",
            "sets": [
              { "set": 1, "reps": 9, "weight": 45, "unit": "lbs" },
              { "set": 2, "reps": 9, "weight": 45, "unit": "lbs" },
              { "set": 3, "reps": 9, "weight": 45, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "barbell-curl",
            "name": "Barbell Curl",
            "sets": [
              { "set": 1, "reps": 10, "weight": 22.5, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 22.5, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 22.5, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "dip",
            "name": "Dip",
            "sets": [
              { "set": 1, "reps": 8 },
              { "set": 2, "reps": 8 },
              { "set": 3, "reps": 8 }
            ]
          },
          {
            "exercise_id": "bicycle-crunch",
            "name": "Bicycle Crunch",
            "sets": [
              { "set": 1, "reps": 10 },
              { "set": 2, "reps": 10 },
              { "set": 3, "reps": 10 },
              { "set": 4, "reps": 10 }
            ]
          }
        ]
      },
      {
        "id": "women-workout-2",
        "name": "Workout 2",
        "focus": ["Chest", "Quadriceps", "Biceps", "Back", "Glutes", "Abs"],
        "exercises": [
          {
            "exercise_id": "barbell-incline-bench-press",
            "name": "Barbell Incline Bench Press",
            "sets": [
              { "set": 1, "reps": 5, "weight": 45, "unit": "lbs" },
              { "set": 2, "reps": 5, "weight": 45, "unit": "lbs" },
              { "set": 3, "reps": 5, "weight": 45, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "burpee",
            "name": "Burpee",
            "sets": [
              { "set": 1, "reps": 8 },
              { "set": 2, "reps": 8 },
              { "set": 3, "reps": 8 }
            ]
          },
          {
            "exercise_id": "dumbbell-bicep-curl",
            "name": "Dumbbell Bicep Curl",
            "sets": [
              { "set": 1, "reps": 8, "weight": 12.5, "unit": "lbs" },
              { "set": 2, "reps": 8, "weight": 12.5, "unit": "lbs" },
              { "set": 3, "reps": 8, "weight": 12.5, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "bent-over-barbell-row",
            "name": "Bent Over Barbell Row",
            "sets": [
              { "set": 1, "reps": 10, "weight": 30, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 30, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "stability-ball-hip-bridge",
            "name": "Stability Ball Hip Bridge",
            "sets": [
              { "set": 1, "duration": "1:00" },
              { "set": 2, "duration": "1:00" },
              { "set": 3, "duration": "1:00" }
            ]
          },
          {
            "exercise_id": "crunches",
            "name": "Crunches",
            "sets": [
              { "set": 1, "reps": 10 },
              { "set": 2, "reps": 10 },
              { "set": 3, "reps": 10 },
              { "set": 4, "reps": 10 }
            ]
          }
        ]
      },
      {
        "id": "women-workout-3",
        "name": "Workout 3",
        "focus": ["Hamstrings", "Chest", "Biceps", "Shoulders", "Triceps", "Abs"],
        "exercises": [
          {
            "exercise_id": "deadlift",
            "name": "Deadlift",
            "sets": [
              { "set": 1, "reps": 6, "weight": 55, "unit": "lbs" },
              { "set": 2, "reps": 6, "weight": 55, "unit": "lbs" },
              { "set": 3, "reps": 6, "weight": 55, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "dumbbell-bench-press",
            "name": "Dumbbell Bench Press",
            "sets": [
              { "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "ez-bar-curl",
            "name": "EZ-Bar Curl",
            "sets": [
              { "set": 1, "reps": 8, "weight": 20, "unit": "lbs" },
              { "set": 2, "reps": 8, "weight": 20, "unit": "lbs" },
              { "set": 3, "reps": 8, "weight": 20, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "dumbbell-rear-delt-raise",
            "name": "Dumbbell Rear Delt Raise",
            "sets": [
              { "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "dumbbell-skullcrusher",
            "name": "Dumbbell Skullcrusher",
            "sets": [
              { "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "exercise-ball-crunch",
            "name": "Exercise Ball Crunch",
            "sets": [
              { "set": 1, "reps": 10 },
              { "set": 2, "reps": 10 },
              { "set": 3, "reps": 10 },
              { "set": 4, "reps": 10 }
            ]
          }
        ]
      }
    ]
  }
  // Additional plans will be added in chunks due to size
};

// Read existing reference workouts
const referenceWorkoutsPath = './lib/data/reference-workouts.ts';
let fileContent = fs.readFileSync(referenceWorkoutsPath, 'utf8');

// Extract existing training plans
const trainingPlansMatch = fileContent.match(/export const trainingPlans = ({[\s\S]*?});/);
if (!trainingPlansMatch) {
  console.error('Could not find trainingPlans export in reference-workouts.ts');
  process.exit(1);
}

let existingPlans;
try {
  // Parse the existing plans (removing 'export const trainingPlans = ' and final ';')
  const plansString = trainingPlansMatch[1];
  existingPlans = eval(`(${plansString})`);
} catch (error) {
  console.error('Error parsing existing training plans:', error);
  process.exit(1);
}

// Add new women training plans
Object.assign(existingPlans, womenTrainingPlans);

// Convert back to string format
const updatedPlansString = JSON.stringify(existingPlans, null, 2);

// Replace in file content
const newFileContent = fileContent.replace(
  /export const trainingPlans = {[\s\S]*?};/,
  `export const trainingPlans = ${updatedPlansString};`
);

// Write updated content
fs.writeFileSync(referenceWorkoutsPath, newFileContent);

console.log('✅ Added women-specific training plans to reference-workouts.ts');
console.log(`📊 Total training plans now: ${Object.keys(existingPlans).length}`); 