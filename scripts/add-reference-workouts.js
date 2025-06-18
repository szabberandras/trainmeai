const fs = require('fs');
const path = require('path');

// All the training plans from the user
const referenceWorkouts = {
  "best-workouts-for-men": {
    "id": "best-workouts-for-men",
    "name": "Best Workouts For Men",
    "summary": "This workout is designed to effectively promote muscle growth and general fitness progression. The exercises are chosen based on generalized preferences, ensuring they meet common goals while acknowledging individual variations. Reps and weights are modified relative to an average individual of 5'10\", 180 lbs, and 35 years of age, although adjustments may be required to suit individual capabilities. Adopting these guidelines supports a personalized and efficient fitness regimen.",
    "workouts": [
      {
        "id": "workout-1",
        "name": "Workout 1",
        "focus": ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
        "exercises": [
          {
            "exercise_id": "back-squat",
            "name": "Back Squat",
            "sets": [
              { "set": 1, "reps": 5, "weight": 110, "unit": "lbs" },
              { "set": 2, "reps": 5, "weight": 110, "unit": "lbs" },
              { "set": 3, "reps": 5, "weight": 110, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "barbell-bench-press",
            "name": "Barbell Bench Press",
            "sets": [
              { "set": 1, "reps": 10, "weight": 90, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 90, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 90, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "cable-row",
            "name": "Cable Row",
            "sets": [
              { "set": 1, "reps": 8, "weight": 75, "unit": "lbs" },
              { "set": 2, "reps": 8, "weight": 75, "unit": "lbs" },
              { "set": 3, "reps": 8, "weight": 75, "unit": "lbs" }
            ]
          },
          {
            "exercise_id": "barbell-curl",
            "name": "Barbell Curl",
            "sets": [
              { "set": 1, "reps": 10, "weight": 35, "unit": "lbs" },
              { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" },
              { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }
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
      }
    ]
  }
};

// Create the TypeScript file content
const fileContent = `export interface WorkoutSet {
  set: number;
  reps?: number;
  weight?: number;
  unit?: string;
  duration?: string;
}

export interface WorkoutExercise {
  exercise_id: string;
  name: string;
  sets: WorkoutSet[];
}

export interface Workout {
  id: string;
  name: string;
  focus: string[];
  exercises: WorkoutExercise[];
}

export interface TrainingPlan {
  id: string;
  name: string;
  summary: string;
  workouts: Workout[];
}

/**
 * Reference workouts for AI coach to use as templates and examples
 * Weights calibrated for average male: 5'10", 180 lbs, 35 years old
 * AI should adjust based on individual user capabilities and preferences
 */
export const REFERENCE_WORKOUTS: Record<string, TrainingPlan> = ${JSON.stringify(referenceWorkouts, null, 2)};

/**
 * Helper functions for the AI coach to use these reference workouts
 */
export const getWorkoutsByMuscleGroup = (muscleGroup: string): Workout[] => {
  const allWorkouts: Workout[] = [];
  
  Object.values(REFERENCE_WORKOUTS).forEach(plan => {
    plan.workouts.forEach(workout => {
      if (workout.focus.some(focus => 
        focus.toLowerCase().includes(muscleGroup.toLowerCase())
      )) {
        allWorkouts.push(workout);
      }
    });
  });
  
  return allWorkouts;
};

export const getTrainingPlanById = (id: string): TrainingPlan | undefined => {
  return REFERENCE_WORKOUTS[id];
};

export const getAllMuscleGroups = (): string[] => {
  const muscleGroups = new Set<string>();
  
  Object.values(REFERENCE_WORKOUTS).forEach(plan => {
    plan.workouts.forEach(workout => {
      workout.focus.forEach(focus => muscleGroups.add(focus));
    });
  });
  
  return Array.from(muscleGroups);
};
`;

// Write to file
const filePath = path.join(__dirname, '..', 'lib', 'data', 'reference-workouts.ts');
fs.writeFileSync(filePath, fileContent, 'utf8');

console.log('✅ Reference workouts file created successfully!');
console.log('📁 File location:', filePath);
console.log('📊 Added 1 training plan with comprehensive workout data'); 