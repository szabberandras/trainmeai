export interface WorkoutSet {
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
export const REFERENCE_WORKOUTS: Record<string, TrainingPlan> = {
  "best-workouts-for-men": {
    id: "best-workouts-for-men",
    name: "Best Workouts For Men",
    summary: "This workout is designed to effectively promote muscle growth and general fitness progression. The exercises are chosen based on generalized preferences, ensuring they meet common goals while acknowledging individual variations. Reps and weights are modified relative to an average individual of 5'10\", 180 lbs, and 35 years of age, although adjustments may be required to suit individual capabilities.",
    workouts: [{
      id: "workout-1",
      name: "Workout 1", 
      focus: ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
      exercises: [
        {
          exercise_id: "back-squat",
          name: "Back Squat",
          sets: [
            { set: 1, reps: 5, weight: 110, unit: "lbs" },
            { set: 2, reps: 5, weight: 110, unit: "lbs" },
            { set: 3, reps: 5, weight: 110, unit: "lbs" }
          ]
        },
        {
          exercise_id: "barbell-bench-press",
          name: "Barbell Bench Press",
          sets: [
            { set: 1, reps: 10, weight: 90, unit: "lbs" },
            { set: 2, reps: 10, weight: 90, unit: "lbs" },
            { set: 3, reps: 10, weight: 90, unit: "lbs" }
          ]
        },
        {
          exercise_id: "cable-row",
          name: "Cable Row",
          sets: [
            { set: 1, reps: 8, weight: 75, unit: "lbs" },
            { set: 2, reps: 8, weight: 75, unit: "lbs" },
            { set: 3, reps: 8, weight: 75, unit: "lbs" }
          ]
        },
        {
          exercise_id: "barbell-curl",
          name: "Barbell Curl",
          sets: [
            { set: 1, reps: 10, weight: 35, unit: "lbs" },
            { set: 2, reps: 10, weight: 35, unit: "lbs" },
            { set: 3, reps: 10, weight: 35, unit: "lbs" }
          ]
        },
        {
          exercise_id: "dip",
          name: "Dip",
          sets: [
            { set: 1, reps: 8 },
            { set: 2, reps: 8 },
            { set: 3, reps: 8 }
          ]
        },
        {
          exercise_id: "bicycle-crunch",
          name: "Bicycle Crunch",
          sets: [
            { set: 1, reps: 10 },
            { set: 2, reps: 10 },
            { set: 3, reps: 10 },
            { set: 4, reps: 10 }
          ]
        }
      ]
    }]
  },

  "best-workouts-for-quads": {
    id: "best-workouts-for-quads",
    name: "Best Workouts For Quadriceps",
    summary: "The quadriceps are a group of muscles located on the front part of the thigh, playing a primary role in knee extension and assisting in hip flexion. Exercises targeting the quadriceps focus on these functional movements, contributing to improved strength and mobility.",
    workouts: [
      {
        id: "quads-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps"],
        exercises: [
          {
            exercise_id: "back-squat",
            name: "Back Squat",
            sets: [
              { set: 1, reps: 5, weight: 110, unit: "lbs" },
              { set: 2, reps: 5, weight: 110, unit: "lbs" },
              { set: 3, reps: 5, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "burpee",
            name: "Burpee",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "dumbbell-lunge",
            name: "Dumbbell Lunge",
            sets: [
              { set: 1, reps: 4, weight: 30, unit: "lbs" },
              { set: 2, reps: 4, weight: 30, unit: "lbs" },
              { set: 3, reps: 4, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "leg-press",
            name: "Leg Press",
            sets: [
              { set: 1, reps: 10, weight: 120, unit: "lbs" },
              { set: 2, reps: 10, weight: 120, unit: "lbs" },
              { set: 3, reps: 10, weight: 120, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-lunge",
            name: "Barbell Lunge",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hack-squat",
            name: "Hack Squat",
            sets: [
              { set: 1, reps: 10, weight: 110, unit: "lbs" },
              { set: 2, reps: 10, weight: 110, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "quads-workout-2",
        name: "Workout 2",
        focus: ["Quadriceps"],
        exercises: [
          {
            exercise_id: "front-squat",
            name: "Front Squat",
            sets: [
              { set: 1, reps: 4, weight: 90, unit: "lbs" },
              { set: 2, reps: 4, weight: 90, unit: "lbs" },
              { set: 3, reps: 4, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-step-up",
            name: "Barbell Step Up",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bulgarian-split-squat",
            name: "Bulgarian Split Squat",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-squat",
            name: "Dumbbell Squat",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "leg-extension",
            name: "Leg Extension",
            sets: [
              { set: 1, reps: 9, weight: 75, unit: "lbs" },
              { set: 2, reps: 9, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lunge",
            name: "Lunge",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "quads-workout-3",
        name: "Workout 3",
        focus: ["Quadriceps"],
        exercises: [
          {
            exercise_id: "pulse-back-squat",
            name: "Pulse Back Squat",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-squat-to-shoulder-press",
            name: "Dumbbell Squat To Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" },
              { set: 3, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dual-kettlebell-front-squat",
            name: "Dual Kettlebell Front Squat",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "air-squats",
            name: "Air Squats",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 },
              { set: 5, reps: 8 }
            ]
          },
          {
            exercise_id: "balance-trainer-squat",
            name: "Balance Trainer Squat",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "jump-squat",
            name: "Jump Squat",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-lower-back": {
    id: "best-workouts-for-lower-back",
    name: "Best Workouts For Lower Back",
    summary: "These workouts are designed to strengthen the lower back, which is crucial for overall stability and injury prevention. The exercises target the muscles of the lumbar spine and surrounding areas like the glutes and hamstrings.",
    workouts: [
      {
        id: "lower-back-workout-1",
        name: "Workout 1",
        focus: ["Lower Back"],
        exercises: [
          {
            exercise_id: "back-extensions",
            name: "Back Extensions",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "stiff-legged-barbell-good-morning",
            name: "Stiff-Legged Barbell Good Morning",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "superman",
            name: "Superman",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "reverse-hyperextension",
            name: "Reverse Hyperextension",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "seated-back-extension",
            name: "Seated Back Extension",
            sets: [
              { set: 1, reps: 10, weight: 100, unit: "lbs" },
              { set: 2, reps: 10, weight: 100, unit: "lbs" },
              { set: 3, reps: 10, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "superman-hold",
            name: "Superman Hold",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-trapezius": {
    id: "best-workouts-for-trapezius",
    name: "Best Workouts For Trapezius",
    summary: "The trapezius muscles, often referred to as traps, are located in the upper portion of the back between the shoulders. Incorporating targeted exercises such as shrugs can effectively isolate and strengthen this muscle group, contributing to improved posture and back muscularity.",
    workouts: [
      {
        id: "trapezius-workout-1",
        name: "Workout 1",
        focus: ["Trapezius"],
        exercises: [
          {
            exercise_id: "cable-upright-row",
            name: "Cable Upright Row",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "upright-row",
            name: "Upright Row",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" },
              { set: 3, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-shrug",
            name: "Barbell Shrug",
            sets: [
              { set: 1, reps: 9, weight: 90, unit: "lbs" },
              { set: 2, reps: 9, weight: 90, unit: "lbs" },
              { set: 3, reps: 9, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shrug",
            name: "Dumbbell Shrug",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-hamstrings": {
    id: "best-workouts-for-hamstrings",
    name: "Best Workouts For Hamstrings",
    summary: "The hamstrings are a group of muscles on the back of the leg located between the hip and knee. They play a key role in knee flexion and hip extension, essential in various lower body movements.",
    workouts: [
      {
        id: "hamstrings-workout-1",
        name: "Workout 1",
        focus: ["Hamstrings"],
        exercises: [
          {
            exercise_id: "deadlift",
            name: "Deadlift",
            sets: [
              { set: 1, reps: 6, weight: 120, unit: "lbs" },
              { set: 2, reps: 6, weight: 120, unit: "lbs" },
              { set: 3, reps: 6, weight: 120, unit: "lbs" }
            ]
          },
          {
            exercise_id: "romanian-deadlift",
            name: "Romanian Deadlift",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "good-morning",
            name: "Good Morning",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" },
              { set: 3, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lying-hamstrings-curl",
            name: "Lying Hamstrings Curl",
            sets: [
              { set: 1, reps: 8, weight: 55, unit: "lbs" },
              { set: 2, reps: 8, weight: 55, unit: "lbs" },
              { set: 3, reps: 8, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-leg-curl",
            name: "Seated Leg Curl",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "kettlebell-sumo-squat",
            name: "Kettlebell Sumo Squat",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-chest-triceps": {
    id: "best-workouts-for-chest-triceps",
    name: "Best Workouts For Chest & Triceps",
    summary: "This workout is designed to target the pectoral muscles, commonly referred to as the chest, which are located on the front of your torso between the shoulders. Chest exercises primarily involve horizontal presses, emphasizing effective movements to develop this muscle group. Additionally, the triceps located on the back of the upper arms act as synergistic muscles during pushing exercises, making chest and tricep workouts highly complementary. Repetition counts and weight recommendations are based on average values for individuals 5'10\", 180lbs, and 35 years old, adjusted to individual capabilities. This approach encourages overall strength building and muscle development tailored to general preferences and physiology.",
    workouts: [
      {
        id: "chest-triceps-workout-1",
        name: "Workout 1",
        focus: ["Chest", "Triceps"],
        exercises: [
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 4, weight: 110, unit: "lbs" },
              { set: 2, reps: 4, weight: 110, unit: "lbs" },
              { set: 3, reps: 4, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "close-grip-bench-press",
            name: "Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-fly",
            name: "Dumbbell Fly",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-skullcrusher",
            name: "Dumbbell Skullcrusher",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "chest-triceps-workout-2",
        name: "Workout 2",
        focus: ["Chest", "Triceps"],
        exercises: [
          {
            exercise_id: "barbell-incline-bench-press",
            name: "Barbell Incline Bench Press",
            sets: [
              { set: 1, reps: 6, weight: 90, unit: "lbs" },
              { set: 2, reps: 6, weight: 90, unit: "lbs" },
              { set: 3, reps: 6, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-rope-tricep-extension",
            name: "Cable Rope Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "skullcrusher",
            name: "Skullcrusher",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-up",
            name: "Push Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "tricep-push-up",
            name: "Tricep Push Up",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "seated-tricep-press",
            name: "Seated Tricep Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "chest-triceps-workout-3",
        name: "Workout 3",
        focus: ["Chest", "Triceps"],
        exercises: [
          {
            exercise_id: "pause-barbell-decline-bench-press",
            name: "Pause Barbell Decline Bench Press",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-overhead-tricep-extension",
            name: "EZ-Bar Overhead Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bench-dip",
            name: "Bench Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "barbell-decline-bench-press",
            name: "Barbell Decline Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 75, unit: "lbs" },
              { set: 2, reps: 10, weight: 75, unit: "lbs" },
              { set: 3, reps: 10, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-crossover-fly",
            name: "Cable Crossover Fly",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-kickbacks",
            name: "Dumbbell Kickbacks",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-legs": {
    id: "best-workouts-for-legs",
    name: "Best Workouts for Legs",
    summary: "This workout is structured to effectively target the major muscle groups of the lower body, including the glutes, quadriceps, hamstrings, calves, and adductor/abductor groups. The exercises selected, such as squats, deadlifts, and lunges, are compound movements that engage multiple muscles simultaneously, facilitating balanced development. Repetition schemes and weight loads are adjusted based on a generalized profile (height: 5'10\", weight: 180 lbs, age: 35 years), though personal capacities and modifications may differ. This approach ensures adherence to preferences while maximizing progress towards fitness goals.",
    workouts: [
      {
        id: "legs-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps", "Hamstrings", "Glutes", "Calves", "Abductors", "Adductors"],
        exercises: [
          {
            exercise_id: "back-squat",
            name: "Back Squat",
            sets: [
              { set: 1, reps: 5, weight: 110, unit: "lbs" },
              { set: 2, reps: 5, weight: 110, unit: "lbs" },
              { set: 3, reps: 5, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "deadlift",
            name: "Deadlift",
            sets: [
              { set: 1, reps: 9, weight: 110, unit: "lbs" },
              { set: 2, reps: 9, weight: 110, unit: "lbs" },
              { set: 3, reps: 9, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-hip-thrust",
            name: "Barbell Hip Thrust",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-machine-calf-press",
            name: "Seated Machine Calf Press",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "clam",
            name: "Clam",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "machine-hip-adductor",
            name: "Machine Hip Adductor",
            sets: [
              { set: 1, reps: 11, weight: 75, unit: "lbs" },
              { set: 2, reps: 11, weight: 75, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "legs-workout-2",
        name: "Workout 2",
        focus: ["Quadriceps", "Hamstrings", "Glutes", "Calves", "Abductors", "Adductors"],
        exercises: [
          {
            exercise_id: "front-squat",
            name: "Front Squat",
            sets: [
              { set: 1, reps: 4, weight: 90, unit: "lbs" },
              { set: 2, reps: 4, weight: 90, unit: "lbs" },
              { set: 3, reps: 4, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "romanian-deadlift",
            name: "Romanian Deadlift",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "glute-kickback-machine",
            name: "Glute Kickback Machine",
            sets: [
              { set: 1, reps: 6, weight: 55, unit: "lbs" },
              { set: 2, reps: 6, weight: 55, unit: "lbs" },
              { set: 3, reps: 6, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "standing-barbell-calf-raise",
            name: "Standing Barbell Calf Raise",
            sets: [
              { set: 1, reps: 8, weight: 100, unit: "lbs" },
              { set: 2, reps: 8, weight: 100, unit: "lbs" },
              { set: 3, reps: 8, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-hip-abductor",
            name: "Machine Hip Abductor",
            sets: [
              { set: 1, reps: 10, weight: 90, unit: "lbs" },
              { set: 2, reps: 10, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-hip-adduction",
            name: "Cable Hip Adduction",
            sets: [
              { set: 1, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 22.5, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "legs-workout-3",
        name: "Workout 3",
        focus: ["Quadriceps", "Hamstrings", "Glutes", "Calves", "Abductors", "Adductors"],
        exercises: [
          {
            exercise_id: "pulse-back-squat",
            name: "Pulse Back Squat",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "good-morning",
            name: "Good Morning",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" },
              { set: 3, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-hip-extension",
            name: "Cable Hip Extension",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-leg-standing-calf-raise",
            name: "Single Leg Standing Calf Raise",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 },
              { set: 5, reps: 6 }
            ]
          },
          {
            exercise_id: "cable-hip-abduction",
            name: "Cable Hip Abduction",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lateral-bound",
            name: "Lateral Bound",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-upper-body": {
    id: "best-workouts-for-upper-body",
    name: "Best Workouts for Upper Body",
    summary: "This workout focuses on targeting the upper body muscle groups comprehensively. The upper body comprises the chest, back, shoulders, biceps, triceps, trapezius, abs, lower back, neck, and forearms. Exercises included are key compound movements such as bench press, lat pull down, shoulder press, and rows, complemented with isolation exercises for individual muscles. Reps and weights are tailored to average metrics (5'10\", 180 lbs, 35 years old men) while acknowledging individual capability variations. It's designed to align with common preferences while ensuring effectiveness towards strength and physique goals.",
    workouts: [
      {
        id: "upper-body-workout-1",
        name: "Workout 1",
        focus: ["Chest", "Back", "Biceps", "Triceps", "Shoulders", "Abs"],
        exercises: [
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 4, weight: 110, unit: "lbs" },
              { set: 2, reps: 4, weight: 110, unit: "lbs" },
              { set: 3, reps: 4, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-row",
            name: "Dumbbell Row",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "close-grip-bench-press",
            name: "Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "upper-body-workout-2",
        name: "Workout 2",
        focus: ["Chest", "Back", "Biceps", "Triceps", "Shoulders", "Abs"],
        exercises: [
          {
            exercise_id: "barbell-incline-bench-press",
            name: "Barbell Incline Bench Press",
            sets: [
              { set: 1, reps: 6, weight: 90, unit: "lbs" },
              { set: 2, reps: 6, weight: 90, unit: "lbs" },
              { set: 3, reps: 6, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lat-pulldown",
            name: "Lat Pulldown",
            sets: [
              { set: 1, reps: 9, weight: 75, unit: "lbs" },
              { set: 2, reps: 9, weight: 75, unit: "lbs" },
              { set: 3, reps: 9, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 8, weight: 30, unit: "lbs" },
              { set: 2, reps: 8, weight: 30, unit: "lbs" },
              { set: 3, reps: 8, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "crunches",
            name: "Crunches",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "upper-body-workout-3",
        name: "Workout 3",
        focus: ["Back", "Chest", "Triceps", "Shoulders", "Biceps", "Abs"],
        exercises: [
          {
            exercise_id: "pull-up",
            name: "Pull Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-skullcrusher",
            name: "Dumbbell Skullcrusher",
            sets: [
              { set: 1, reps: 8, weight: 15, unit: "lbs" },
              { set: 2, reps: 8, weight: 15, unit: "lbs" },
              { set: 3, reps: 8, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-lateral-raise",
            name: "Cable Lateral Raise",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "exercise-ball-crunch",
            name: "Exercise Ball Crunch",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-arms": {
    id: "best-workouts-for-arms",
    name: "Best Workouts for Arms",
    summary: "This workout plan is designed to strengthen and define the arm muscles effectively. It focuses on the primary arm muscle groups: the shoulders, biceps, triceps, and forearms, targeting them collectively for balanced development. Exercise recommendations consider generalized preferences and are optimized for males with average metrics (5'10\", 180 lbs, 35 years old), though they may need tailoring to individual capabilities and goals. By adhering to a structured regimen and appropriate resistance, this routine supports significant progress in arm strength and aesthetic goals.",
    workouts: [
      {
        id: "arms-workout-1",
        name: "Workout 1",
        focus: ["Shoulders", "Biceps", "Triceps", "Forearms"],
        exercises: [
          {
            exercise_id: "barbell-shoulder-press",
            name: "Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 7, weight: 55, unit: "lbs" },
              { set: 2, reps: 7, weight: 55, unit: "lbs" },
              { set: 3, reps: 7, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "close-grip-bench-press",
            name: "Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 9, weight: 65, unit: "lbs" },
              { set: 2, reps: 9, weight: 65, unit: "lbs" },
              { set: 3, reps: 9, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "handle-band-reverse-curl",
            name: "Handle Band Reverse Curl",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          }
        ]
      },
      {
        id: "arms-workout-2",
        name: "Workout 2",
        focus: ["Biceps", "Triceps", "Shoulders", "Forearms"],
        exercises: [
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 5, weight: 30, unit: "lbs" },
              { set: 2, reps: 5, weight: 30, unit: "lbs" },
              { set: 3, reps: 5, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-rope-tricep-extension",
            name: "Cable Rope Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 8, weight: 10, unit: "lbs" },
              { set: 2, reps: 8, weight: 10, unit: "lbs" },
              { set: 3, reps: 8, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-lateral-raise",
            name: "Cable Lateral Raise",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-skullcrusher",
            name: "Dumbbell Skullcrusher",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "palms-down-barbell-wrist-curl",
            name: "Palms-Down Barbell Wrist Curl",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "arms-workout-3",
        name: "Workout 3",
        focus: ["Triceps", "Shoulders", "Biceps", "Forearms"],
        exercises: [
          {
            exercise_id: "skullcrusher",
            name: "Skullcrusher",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-front-raise",
            name: "Dumbbell Front Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" },
              { set: 3, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammer-curls",
            name: "Hammer Curls",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shoulder-press",
            name: "Dumbbell Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "palms-down-dumbbell-wrist-curl",
            name: "Palms-Down Dumbbell Wrist Curl",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-core": {
    id: "best-workouts-for-core",
    name: "Best Workouts for Core",
    summary: "Men typically share generalized preferences in workout routines, and this program acknowledges and adapts to such tendencies. The exercises focus on enhancing the core, comprising the abdominal and lower back regions, pivotal for maintaining torso stabilization and overall strength. Movements include sit-ups, planks, twists, and back extensions, offering a comprehensive engagement of these muscle groups. Rep and weight recommendations are tailored considering an average male of 5'10\", 180 lbs, and aged 35, while individual capabilities may warrant adjustments. Incorporating these targeted exercises effectively supports core fortification and stability improvement. Developing a strong core aids in achieving better posture and enhanced physical performance.",
    workouts: [
      {
        id: "core-workout-1",
        name: "Workout 1",
        focus: ["Abs", "Lower Back"],
        exercises: [
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 },
              { set: 5, reps: 8 }
            ]
          },
          {
            exercise_id: "back-extensions",
            name: "Back Extensions",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "stiff-legged-barbell-good-morning",
            name: "Stiff-Legged Barbell Good Morning",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "crunches",
            name: "Crunches",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 },
              { set: 5, reps: 8 }
            ]
          },
          {
            exercise_id: "exercise-ball-crunch",
            name: "Exercise Ball Crunch",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "leg-pull-in",
            name: "Leg Pull-In",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "core-workout-2",
        name: "Workout 2",
        focus: ["Abs", "Lower Back"],
        exercises: [
          {
            exercise_id: "leg-raise",
            name: "Leg Raise",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "superman",
            name: "Superman",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "reverse-hyperextension",
            name: "Reverse Hyperextension",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "plank",
            name: "Plank",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "russian-twist",
            name: "Russian Twist",
            sets: [
              { set: 1, reps: 15, weight: 25, unit: "lbs" },
              { set: 2, reps: 15, weight: 25, unit: "lbs" },
              { set: 3, reps: 15, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "scissor-crossover-kick",
            name: "Scissor Crossover Kick",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "core-workout-3",
        name: "Workout 3",
        focus: ["Abs", "Lower Back"],
        exercises: [
          {
            exercise_id: "scissor-kick",
            name: "Scissor Kick",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 },
              { set: 5, reps: 8 }
            ]
          },
          {
            exercise_id: "seated-back-extension",
            name: "Seated Back Extension",
            sets: [
              { set: 1, reps: 10, weight: 100, unit: "lbs" },
              { set: 2, reps: 10, weight: 100, unit: "lbs" },
              { set: 3, reps: 10, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "superman-hold",
            name: "Superman Hold",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "sit-up",
            name: "Sit Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 },
              { set: 5, reps: 8 }
            ]
          },
          {
            exercise_id: "vertical-knee-raise",
            name: "Vertical Knee Raise",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "cable-crunch",
            name: "Cable Crunch",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-full-body": {
    id: "best-workouts-for-full-body",
    name: "Best Workouts for Full Body",
    summary: "This workout encompasses a variety of compound movements designed to target all major muscle groups effectively in a single session. It utilizes exercises preferred for individuals approximately 5'10\" tall, 180 lbs in weight, and around 35 years old, with adjustments for individual capabilities due to variation in fitness levels. Primary training focuses on diverse movement patterns to optimize overall muscle engagement and thorough development. By adhering to observed preferences and tailored adjustments, significant progress toward fitness goals can be achieved through this plan.",
    workouts: [
      {
        id: "full-body-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
        exercises: [
          {
            exercise_id: "back-squat",
            name: "Back Squat",
            sets: [
              { set: 1, reps: 5, weight: 110, unit: "lbs" },
              { set: 2, reps: 5, weight: 110, unit: "lbs" },
              { set: 3, reps: 5, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 90, unit: "lbs" },
              { set: 2, reps: 10, weight: 90, unit: "lbs" },
              { set: 3, reps: 10, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "full-body-workout-2",
        name: "Workout 2",
        focus: ["Chest", "Quadriceps", "Biceps", "Back", "Glutes", "Abs"],
        exercises: [
          {
            exercise_id: "barbell-incline-bench-press",
            name: "Barbell Incline Bench Press",
            sets: [
              { set: 1, reps: 6, weight: 90, unit: "lbs" },
              { set: 2, reps: 6, weight: 90, unit: "lbs" },
              { set: 3, reps: 6, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "burpee",
            name: "Burpee",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 8, weight: 30, unit: "lbs" },
              { set: 2, reps: 8, weight: 30, unit: "lbs" },
              { set: 3, reps: 8, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bent-over-barbell-row",
            name: "Bent Over Barbell Row",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "stability-ball-hip-bridge",
            name: "Stability Ball Hip Bridge",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "crunches",
            name: "Crunches",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "full-body-workout-3",
        name: "Workout 3",
        focus: ["Hamstrings", "Chest", "Biceps", "Shoulders", "Triceps", "Abs"],
        exercises: [
          {
            exercise_id: "deadlift",
            name: "Deadlift",
            sets: [
              { set: 1, reps: 6, weight: 120, unit: "lbs" },
              { set: 2, reps: 6, weight: 120, unit: "lbs" },
              { set: 3, reps: 6, weight: 120, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" },
              { set: 3, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-skullcrusher",
            name: "Dumbbell Skullcrusher",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "exercise-ball-crunch",
            name: "Exercise Ball Crunch",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-pull-day": {
    id: "best-workouts-for-pull-day",
    name: "Best Workouts for Pull Day",
    summary: "This workout is designed to focus on pull day exercises, emphasizing the horizontal and vertical pull movement patterns. These exercises target key muscle groups such as the back and biceps, utilizing a combination of compound movements like pull-ups and bends-over rows, along with isolation exercises. The repetitions and weights are calibrated using averages based on individuals measuring 5'10\", weighing 180 lbs, and aged 35 years, although personal capability and requirements may vary. This pull workout, suitable within a PPL (Push Pull Legs) routine, aligns with the preference trends observed among male participants. Incorporate these practices to enhance strength and structural development.",
    workouts: [
      {
        id: "pull-day-workout-1",
        name: "Workout 1",
        focus: ["Back", "Biceps"],
        exercises: [
          {
            exercise_id: "dumbbell-row",
            name: "Dumbbell Row",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 8, weight: 30, unit: "lbs" },
              { set: 2, reps: 8, weight: 30, unit: "lbs" },
              { set: 3, reps: 8, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-high-row",
            name: "Hammerstrength High Row",
            sets: [
              { set: 1, reps: 10, weight: 55, unit: "lbs" },
              { set: 2, reps: 10, weight: 55, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "pull-day-workout-2",
        name: "Workout 2",
        focus: ["Back", "Biceps"],
        exercises: [
          {
            exercise_id: "lat-pulldown",
            name: "Lat Pulldown",
            sets: [
              { set: 1, reps: 5, weight: 90, unit: "lbs" },
              { set: 2, reps: 5, weight: 90, unit: "lbs" },
              { set: 3, reps: 5, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "preacher-curl",
            name: "Preacher Curl",
            sets: [
              { set: 1, reps: 15, weight: 30, unit: "lbs" },
              { set: 2, reps: 15, weight: 30, unit: "lbs" },
              { set: 3, reps: 15, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammer-curls",
            name: "Hammer Curls",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bent-over-barbell-row",
            name: "Bent Over Barbell Row",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-iso-row",
            name: "Hammerstrength Iso Row",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-barbell-curl",
            name: "Reverse Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "pull-day-workout-3",
        name: "Workout 3",
        focus: ["Back", "Biceps"],
        exercises: [
          {
            exercise_id: "pull-up",
            name: "Pull Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "seated-dumbbell-curl",
            name: "Seated Dumbbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "incline-ez-bar-curl",
            name: "Incline EZ-Bar Curl",
            sets: [
              { set: 1, reps: 8, weight: 25, unit: "lbs" },
              { set: 2, reps: 8, weight: 25, unit: "lbs" },
              { set: 3, reps: 8, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-row",
            name: "Machine Row",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" },
              { set: 3, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "smith-machine-bent-over-row",
            name: "Smith Machine Bent Over Row",
            sets: [
              { set: 1, reps: 7, weight: 65, unit: "lbs" },
              { set: 2, reps: 7, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cross-body-hammer-curls",
            name: "Cross Body Hammer Curls",
            sets: [
              { set: 1, reps: 10, weight: 5, unit: "lbs" },
              { set: 2, reps: 10, weight: 5, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  // Chest-focused training plans
  "best-workouts-for-chest": {
    id: "best-workouts-for-chest",
    name: "Best Workouts for Chest",
    summary: "Chest workouts are designed to strengthen and define the pectoral muscles, which are located in the front torso between the shoulders. These exercises predominantly involve movements like horizontal presses and shoulder adduction. The recommended repetitions and weights are tailored for averages such as 5'10\" height, 180 lbs weight, and 35 years age, ensuring they cater to the performance levels of men while acknowledging individual variations.",
    workouts: [
      {
        id: "chest-workout-1",
        name: "Workout 1",
        focus: ["Chest"],
        exercises: [
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 4, weight: 110, unit: "lbs" },
              { set: 2, reps: 4, weight: 110, unit: "lbs" },
              { set: 3, reps: 4, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-incline-bench-press",
            name: "Barbell Incline Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 75, unit: "lbs" },
              { set: 2, reps: 10, weight: 75, unit: "lbs" },
              { set: 3, reps: 10, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-fly",
            name: "Dumbbell Fly",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" },
              { set: 3, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-up",
            name: "Push Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "tricep-push-up",
            name: "Tricep Push Up",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "chest-workout-2",
        name: "Workout 2",
        focus: ["Chest"],
        exercises: [
          {
            exercise_id: "barbell-decline-bench-press",
            name: "Barbell Decline Bench Press",
            sets: [
              { set: 1, reps: 6, weight: 90, unit: "lbs" },
              { set: 2, reps: 6, weight: 90, unit: "lbs" },
              { set: 3, reps: 6, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-incline-bench-press",
            name: "Dumbbell Incline Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-crossover-fly",
            name: "Cable Crossover Fly",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "decline-push-up",
            name: "Decline Push Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "floor-press",
            name: "Floor Press",
            sets: [
              { set: 1, reps: 8, weight: 65, unit: "lbs" },
              { set: 2, reps: 8, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-chest-press",
            name: "Hammerstrength Chest Press",
            sets: [
              { set: 1, reps: 8, weight: 65, unit: "lbs" },
              { set: 2, reps: 8, weight: 65, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "chest-workout-3",
        name: "Workout 3",
        focus: ["Chest"],
        exercises: [
          {
            exercise_id: "hand-release-push-up",
            name: "Hand Release Push Up",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 },
              { set: 5, reps: 6 }
            ]
          },
          {
            exercise_id: "single-arm-cable-press",
            name: "Single Arm Cable Press",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-decline-chest-press",
            name: "Hammerstrength Decline Chest Press",
            sets: [
              { set: 1, reps: 6, weight: 75, unit: "lbs" },
              { set: 2, reps: 6, weight: 75, unit: "lbs" },
              { set: 3, reps: 6, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-incline-chest-press",
            name: "Hammerstrength Incline Chest Press",
            sets: [
              { set: 1, reps: 7, weight: 55, unit: "lbs" },
              { set: 2, reps: 7, weight: 55, unit: "lbs" },
              { set: 3, reps: 7, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "smith-machine-bench-press",
            name: "Smith Machine Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 75, unit: "lbs" },
              { set: 2, reps: 10, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "smith-machine-incline-bench-press",
            name: "Smith Machine Incline Bench Press",
            sets: [
              { set: 1, reps: 12, weight: 65, unit: "lbs" },
              { set: 2, reps: 12, weight: 65, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  // Push Day training plans
  "best-workouts-for-push-day": {
    id: "best-workouts-for-push-day",
    name: "Best Workouts for Push Day",
    summary: "Push exercises focus on horizontal and vertical pushing movements, heavily relying on muscles like the chest, shoulders, and triceps. These workouts integrate compound and isolation exercises to ensure balanced and effective muscle engagement. For men, the reps and weights are tailored based on general averages (5'10\", 180 lbs, 35 years old), acknowledging individual variations in ability.",
    workouts: [
      {
        id: "push-day-workout-1",
        name: "Workout 1",
        focus: ["Chest", "Triceps", "Shoulders"],
        exercises: [
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 4, weight: 110, unit: "lbs" },
              { set: 2, reps: 4, weight: 110, unit: "lbs" },
              { set: 3, reps: 4, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "close-grip-bench-press",
            name: "Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 8, weight: 17.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 17.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 17.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" },
              { set: 3, reps: 10, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-fly",
            name: "Dumbbell Fly",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "push-day-workout-2",
        name: "Workout 2",
        focus: ["Chest", "Triceps", "Shoulders"],
        exercises: [
          {
            exercise_id: "barbell-incline-bench-press",
            name: "Barbell Incline Bench Press",
            sets: [
              { set: 1, reps: 6, weight: 90, unit: "lbs" },
              { set: 2, reps: 6, weight: 90, unit: "lbs" },
              { set: 3, reps: 6, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-rope-tricep-extension",
            name: "Cable Rope Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-lateral-raise",
            name: "Cable Lateral Raise",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-front-raise",
            name: "Dumbbell Front Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" },
              { set: 3, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-up",
            name: "Push Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "dumbbell-skullcrusher",
            name: "Dumbbell Skullcrusher",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "push-day-workout-3",
        name: "Workout 3",
        focus: ["Shoulders", "Chest", "Triceps"],
        exercises: [
          {
            exercise_id: "barbell-shoulder-press",
            name: "Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 7, weight: 55, unit: "lbs" },
              { set: 2, reps: 7, weight: 55, unit: "lbs" },
              { set: 3, reps: 7, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "skullcrusher",
            name: "Skullcrusher",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-tricep-press",
            name: "Seated Tricep Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "tricep-push-up",
            name: "Tricep Push Up",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "dumbbell-shoulder-press",
            name: "Dumbbell Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      }
    ]
,

  // Best Workouts for Glutes
  "best-workouts-for-glutes": {
    id: "best-workouts-for-glutes",
    name: "Best Workouts for Glutes",
    summary: "This workout focuses on enhancing the development and strength of the glute muscles, which are essential for lower body power and stability. The glutes, situated around the hips, contribute to various movements like squatting, lifting, and thrusting actions.",
    workouts: [
      {
        id: "glutes-workout-1",
        name: "Workout 1",
        focus: ["Glutes"],
        exercises: [
          {
            exercise_id: "barbell-hip-thrust",
            name: "Barbell Hip Thrust",
            sets: [
              { set: 1, reps: 4, weight: 90, unit: "lbs" },
              { set: 2, reps: 4, weight: 90, unit: "lbs" },
              { set: 3, reps: 4, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "glute-kickback-machine",
            name: "Glute Kickback Machine",
            sets: [
              { set: 1, reps: 12, weight: 45, unit: "lbs" },
              { set: 2, reps: 12, weight: 45, unit: "lbs" },
              { set: 3, reps: 12, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-hip-extension",
            name: "Cable Hip Extension",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-leg-glute-bridge",
            name: "Single Leg Glute Bridge",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "stability-ball-hip-bridge",
            name: "Stability Ball Hip Bridge",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "step-up",
            name: "Step Up",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "glutes-workout-2",
        name: "Workout 2",
        focus: ["Glutes"],
        exercises: [
          {
            exercise_id: "single-leg-hip-thrust",
            name: "Single Leg Hip Thrust",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "elevated-hip-bridge",
            name: "Elevated Hip Bridge",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "hip-thrust",
            name: "Hip Thrust",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "kneeling-squat",
            name: "Kneeling Squat",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-leg-stability-ball-hip-thrust",
            name: "Single-Leg Stability Ball Hip Thrust",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "kettlebell-swing-american",
            name: "Kettlebell Swing American",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "glutes-workout-3",
        name: "Workout 3",
        focus: ["Glutes"],
        exercises: [
          {
            exercise_id: "single-leg-kickback",
            name: "Single Leg Kickback",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "cable-pull-through",
            name: "Cable Pull Through",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "trx-glute-bridge",
            name: "TRX Glute Bridge",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "forward-lunge-with-twist",
            name: "Forward Lunge with Twist",
            sets: [
              { set: 1, reps: 15, weight: 25, unit: "lbs" },
              { set: 2, reps: 15, weight: 25, unit: "lbs" },
              { set: 3, reps: 15, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-glute-bridge",
            name: "Dumbbell Glute Bridge",
            sets: [
              { set: 1, weight: 20, unit: "lbs", duration: "0:15" },
              { set: 2, weight: 20, unit: "lbs", duration: "0:15" },
              { set: 3, weight: 20, unit: "lbs", duration: "0:15" }
            ]
          },
          {
            exercise_id: "dumbbell-hip-thrust",
            name: "Dumbbell Hip Thrust",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Biceps
  "best-workouts-for-biceps": {
    id: "best-workouts-for-biceps",
    name: "Best Workouts for Biceps",
    summary: "The exercises presented target the biceps muscles, located on the front of the upper arm between the shoulder and elbow, and responsible for elbow flexion and arm curls. While the "best" workout techniques are universally suitable, some aspects have been tailored based on typical metrics for males, such as 5'10" in height, 180lbs in weight, and around 35 years of age.",
    workouts: [
      {
        id: "biceps-workout-1",
        name: "Workout 1",
        focus: ["Biceps"],
        exercises: [
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" },
              { set: 3, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammer-curls",
            name: "Hammer Curls",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-barbell-curl",
            name: "Reverse Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "incline-ez-bar-curl",
            name: "Incline EZ-Bar Curl",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "biceps-workout-2",
        name: "Workout 2",
        focus: ["Biceps"],
        exercises: [
          {
            exercise_id: "preacher-curl",
            name: "Preacher Curl",
            sets: [
              { set: 1, reps: 7, weight: 40, unit: "lbs" },
              { set: 2, reps: 7, weight: 40, unit: "lbs" },
              { set: 3, reps: 7, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-dumbbell-curl",
            name: "Seated Dumbbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cross-body-hammer-curls",
            name: "Cross Body Hammer Curls",
            sets: [
              { set: 1, reps: 8, weight: 5, unit: "lbs" },
              { set: 2, reps: 8, weight: 5, unit: "lbs" },
              { set: 3, reps: 8, weight: 5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-bicep-drag-curl",
            name: "Barbell Bicep Drag Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-preacher-curl",
            name: "Cable Preacher Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "concentration-curl",
            name: "Concentration Curl",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "biceps-workout-3",
        name: "Workout 3",
        focus: ["Biceps"],
        exercises: [
          {
            exercise_id: "reverse-dumbbell-curl",
            name: "Reverse Dumbbell Curl",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-pause-curl",
            name: "Barbell Pause Curl",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "incline-dumbbell-curl",
            name: "Incline Dumbbell Curl",
            sets: [
              { set: 1, reps: 8, weight: 25, unit: "lbs" },
              { set: 2, reps: 8, weight: 25, unit: "lbs" },
              { set: 3, reps: 8, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "incline-hammer-curl",
            name: "Incline Hammer Curl",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" },
              { set: 3, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-bicep-curl",
            name: "Machine Bicep Curl",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-preacher-curl",
            name: "Machine Preacher Curl",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Triceps
  "best-workouts-for-triceps": {
    id: "best-workouts-for-triceps",
    name: "Best Workouts for Triceps",
    summary: "Triceps are an essential muscle group located on the back of the arm, responsible for extending the elbow and contributing to pushing movements. This workout incorporates a selection of exercises that effectively isolate and strengthen the triceps, including Tricep Extensions, Skull Crushers, and Close Grip presses.",
    workouts: [
      {
        id: "triceps-workout-1",
        name: "Workout 1",
        focus: ["Triceps"],
        exercises: [
          {
            exercise_id: "close-grip-bench-press",
            name: "Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 5, weight: 75, unit: "lbs" },
              { set: 2, reps: 5, weight: 75, unit: "lbs" },
              { set: 3, reps: 5, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-rope-tricep-extension",
            name: "Cable Rope Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "dumbbell-skullcrusher",
            name: "Dumbbell Skullcrusher",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" },
              { set: 3, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-tricep-press",
            name: "Seated Tricep Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bench-dip",
            name: "Bench Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "triceps-workout-2",
        name: "Workout 2",
        focus: ["Triceps"],
        exercises: [
          {
            exercise_id: "skullcrusher",
            name: "Skullcrusher",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-overhead-tricep-extension",
            name: "EZ-Bar Overhead Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-kickbacks",
            name: "Dumbbell Kickbacks",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-tricep-dip",
            name: "Machine Tricep Dip",
            sets: [
              { set: 1, reps: 9, weight: 100, unit: "lbs" },
              { set: 2, reps: 9, weight: 100, unit: "lbs" },
              { set: 3, reps: 9, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-tricep-extension",
            name: "Machine Tricep Extension",
            sets: [
              { set: 1, reps: 10, weight: 55, unit: "lbs" },
              { set: 2, reps: 10, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ring-dip",
            name: "Ring Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "triceps-workout-3",
        name: "Workout 3",
        focus: ["Triceps"],
        exercises: [
          {
            exercise_id: "cable-one-arm-underhand-tricep-extension",
            name: "Cable One Arm Underhand Tricep Extension",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-one-arm-tricep-side-extension",
            name: "Cable One Arm Tricep Side Extension",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "smith-machine-close-grip-bench-press",
            name: "Smith Machine Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "tricep-overhead-extension-with-rope",
            name: "Tricep Overhead Extension with Rope",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-tricep-pushdown",
            name: "Cable Tricep Pushdown",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "handle-band-tricep-extension",
            name: "Handle Band Tricep Extension",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Shoulders
  "best-workouts-for-shoulders": {
    id: "best-workouts-for-shoulders",
    name: "Best Workouts for Shoulders",
    summary: "The shoulders, encompassing the deltoids and related muscles, are crucial for numerous upper body movements underlining stability and functionality. This workout focuses on exercises tailored for men (averaging 5'10", 180lbs, and 35 years old), including targeted overhead presses and straight arm raises.",
    workouts: [
      {
        id: "shoulders-workout-1",
        name: "Workout 1",
        focus: ["Shoulders"],
        exercises: [
          {
            exercise_id: "barbell-shoulder-press",
            name: "Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 7, weight: 55, unit: "lbs" },
              { set: 2, reps: 7, weight: 55, unit: "lbs" },
              { set: 3, reps: 7, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-front-raise",
            name: "Dumbbell Front Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" },
              { set: 3, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 8, weight: 17.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 17.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 17.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" },
              { set: 3, reps: 10, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-lateral-raise",
            name: "Cable Lateral Raise",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shoulder-press",
            name: "Dumbbell Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "shoulders-workout-2",
        name: "Workout 2",
        focus: ["Shoulders"],
        exercises: [
          {
            exercise_id: "dumbbell-shoulder-raise",
            name: "Dumbbell Shoulder Raise",
            sets: [
              { set: 1, reps: 5, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 5, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 5, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-barbell-shoulder-press",
            name: "Seated Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 8, weight: 55, unit: "lbs" },
              { set: 2, reps: 8, weight: 55, unit: "lbs" },
              { set: 3, reps: 8, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-face-pull",
            name: "Cable Face Pull",
            sets: [
              { set: 1, reps: 8, weight: 40, unit: "lbs" },
              { set: 2, reps: 8, weight: 40, unit: "lbs" },
              { set: 3, reps: 8, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-press",
            name: "Push Press",
            sets: [
              { set: 1, reps: 12, weight: 45, unit: "lbs" },
              { set: 2, reps: 12, weight: 45, unit: "lbs" },
              { set: 3, reps: 12, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "turkish-get-up",
            name: "Turkish Get Up",
            sets: [
              { set: 1, reps: 5, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 5, weight: 22.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "pike-push-up",
            name: "Pike Push Up",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "shoulders-workout-3",
        name: "Workout 3",
        focus: ["Shoulders"],
        exercises: [
          {
            exercise_id: "barbell-front-raise",
            name: "Barbell Front Raise",
            sets: [
              { set: 1, reps: 5, weight: 40, unit: "lbs" },
              { set: 2, reps: 5, weight: 40, unit: "lbs" },
              { set: 3, reps: 5, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "battle-ropes",
            name: "Battle Ropes",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "handstand-hold",
            name: "Handstand Hold",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "standing-dumbbell-shoulder-press",
            name: "Standing Dumbbell Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 20, unit: "lbs" },
              { set: 2, reps: 10, weight: 20, unit: "lbs" },
              { set: 3, reps: 10, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "arnold-dumbbell-press",
            name: "Arnold Dumbbell Press",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-rear-delt-fly",
            name: "Cable Rear Delt Fly",
            sets: [
              { set: 1, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 22.5, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Biceps and Shoulders
  "best-workouts-for-biceps-and-shoulders": {
    id: "best-workouts-for-biceps-and-shoulders",
    name: "Best Workouts for Biceps and Shoulders",
    summary: "This workout is designed to target the biceps and shoulders effectively, focusing on developing strength and muscle definition in these areas. For shoulders, exercises such as overhead presses and straight arm raises are prominent, engaging the deltoids to control shoulder movement.",
    workouts: [
      {
        id: "shoulders-biceps-workout-1",
        name: "Workout 1",
        focus: ["Shoulders", "Biceps"],
        exercises: [
          {
            exercise_id: "barbell-shoulder-press",
            name: "Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 7, weight: 55, unit: "lbs" },
              { set: 2, reps: 7, weight: 55, unit: "lbs" },
              { set: 3, reps: 7, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 8, weight: 30, unit: "lbs" },
              { set: 2, reps: 8, weight: 30, unit: "lbs" },
              { set: 3, reps: 8, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 10, weight: 15, unit: "lbs" },
              { set: 2, reps: 10, weight: 15, unit: "lbs" },
              { set: 3, reps: 10, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "shoulders-biceps-workout-2",
        name: "Workout 2",
        focus: ["Shoulders", "Biceps"],
        exercises: [
          {
            exercise_id: "dumbbell-front-raise",
            name: "Dumbbell Front Raise",
            sets: [
              { set: 1, reps: 5, weight: 20, unit: "lbs" },
              { set: 2, reps: 5, weight: 20, unit: "lbs" },
              { set: 3, reps: 5, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "preacher-curl",
            name: "Preacher Curl",
            sets: [
              { set: 1, reps: 15, weight: 30, unit: "lbs" },
              { set: 2, reps: 15, weight: 30, unit: "lbs" },
              { set: 3, reps: 15, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammer-curls",
            name: "Hammer Curls",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-lateral-raise",
            name: "Cable Lateral Raise",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shoulder-press",
            name: "Dumbbell Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-barbell-curl",
            name: "Reverse Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "shoulders-biceps-workout-3",
        name: "Workout 3",
        focus: ["Shoulders", "Biceps"],
        exercises: [
          {
            exercise_id: "dumbbell-shoulder-raise",
            name: "Dumbbell Shoulder Raise",
            sets: [
              { set: 1, reps: 5, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 5, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 5, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-dumbbell-curl",
            name: "Seated Dumbbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "incline-ez-bar-curl",
            name: "Incline EZ-Bar Curl",
            sets: [
              { set: 1, reps: 8, weight: 25, unit: "lbs" },
              { set: 2, reps: 8, weight: 25, unit: "lbs" },
              { set: 3, reps: 8, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-face-pull",
            name: "Cable Face Pull",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "turkish-get-up",
            name: "Turkish Get Up",
            sets: [
              { set: 1, reps: 5, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 5, weight: 22.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cross-body-hammer-curls",
            name: "Cross Body Hammer Curls",
            sets: [
              { set: 1, reps: 10, weight: 5, unit: "lbs" },
              { set: 2, reps: 10, weight: 5, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Back
  "best-workouts-for-back": {
    id: "best-workouts-for-back",
    name: "Best Workouts for Back",
    summary: "This workout targets the back, specifically the upper posterior torso muscles, responsible for pulling movements and contributing to various shoulder actions. Exercises such as rows, pull-ups, and lat pulldowns are included to effectively engage this area.",
    workouts: [
      {
        id: "back-workout-1",
        name: "Workout 1",
        focus: ["Back", "Trapezius", "Lower Back"],
        exercises: [
          {
            exercise_id: "dumbbell-row",
            name: "Dumbbell Row",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lat-pulldown",
            name: "Lat Pulldown",
            sets: [
              { set: 1, reps: 9, weight: 75, unit: "lbs" },
              { set: 2, reps: 9, weight: 75, unit: "lbs" },
              { set: 3, reps: 9, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 8, weight: 75, unit: "lbs" },
              { set: 2, reps: 8, weight: 75, unit: "lbs" },
              { set: 3, reps: 8, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "upright-row",
            name: "Upright Row",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" },
              { set: 3, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-shrug",
            name: "Barbell Shrug",
            sets: [
              { set: 1, reps: 10, weight: 90, unit: "lbs" },
              { set: 2, reps: 10, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "back-extensions",
            name: "Back Extensions",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      },
      {
        id: "back-workout-2",
        name: "Workout 2",
        focus: ["Back", "Trapezius", "Lower Back"],
        exercises: [
          {
            exercise_id: "pull-up",
            name: "Pull Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "bent-over-barbell-row",
            name: "Bent Over Barbell Row",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-high-row",
            name: "Hammerstrength High Row",
            sets: [
              { set: 1, reps: 9, weight: 55, unit: "lbs" },
              { set: 2, reps: 9, weight: 55, unit: "lbs" },
              { set: 3, reps: 9, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shrug",
            name: "Dumbbell Shrug",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-shrug",
            name: "Hammerstrength Shrug",
            sets: [
              { set: 1, reps: 10, weight: 110, unit: "lbs" },
              { set: 2, reps: 10, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "stiff-legged-barbell-good-morning",
            name: "Stiff-Legged Barbell Good Morning",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "back-workout-3",
        name: "Workout 3",
        focus: ["Back", "Trapezius", "Lower Back"],
        exercises: [
          {
            exercise_id: "chin-up",
            name: "Chin Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "shotgun-row",
            name: "Shotgun Row",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hammerstrength-iso-row",
            name: "Hammerstrength Iso Row",
            sets: [
              { set: 1, reps: 8, weight: 65, unit: "lbs" },
              { set: 2, reps: 8, weight: 65, unit: "lbs" },
              { set: 3, reps: 8, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-shoulder-shrug",
            name: "Machine Shoulder Shrug",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-shrugs",
            name: "Cable Shrugs",
            sets: [
              { set: 1, reps: 11, weight: 55, unit: "lbs" },
              { set: 2, reps: 11, weight: 55, unit: "lbs" }
            ]
          },
          {
            exercise_id: "superman",
            name: "Superman",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Abs
  "best-workouts-for-abs": {
    id: "best-workouts-for-abs",
    name: "Best Workouts for Abs",
    summary: "The abdominal muscles are crucial for core stability and overall strength. These exercises target the rectus abdominis, obliques, and transverse abdominis, providing comprehensive core development. The rep ranges and intensities are calibrated for the average male profile.",
    workouts: [
      {
        id: "abs-workout-1",
        name: "Workout 1",
        focus: ["Abs", "Core"],
        exercises: [
          {
            exercise_id: "bicycle-crunches",
            name: "Bicycle Crunches",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          },
          {
            exercise_id: "russian-twist",
            name: "Russian Twist",
            sets: [
              { set: 1, reps: 8, weight: 25, unit: "lbs" },
              { set: 2, reps: 8, weight: 25, unit: "lbs" },
              { set: 3, reps: 8, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "plank",
            name: "Plank",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "hanging-knee-raise",
            name: "Hanging Knee Raise",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "ab-wheel-rollout",
            name: "Ab Wheel Rollout",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 }
            ]
          },
          {
            exercise_id: "mountain-climber",
            name: "Mountain Climber",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          }
        ]
      },
      {
        id: "abs-workout-2",
        name: "Workout 2",
        focus: ["Abs", "Core"],
        exercises: [
          {
            exercise_id: "dead-bug",
            name: "Dead Bug",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "side-plank",
            name: "Side Plank",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "hollow-body-hold",
            name: "Hollow Body Hold",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" },
              { set: 3, duration: "0:45" }
            ]
          },
          {
            exercise_id: "leg-raise",
            name: "Leg Raise",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 }
            ]
          },
          {
            exercise_id: "cable-crunch",
            name: "Cable Crunch",
            sets: [
              { set: 1, reps: 12, weight: 45, unit: "lbs" },
              { set: 2, reps: 12, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-crunch",
            name: "Reverse Crunch",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          }
        ]
      },
      {
        id: "abs-workout-3",
        name: "Workout 3",
        focus: ["Abs", "Core"],
        exercises: [
          {
            exercise_id: "v-up",
            name: "V-Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          },
          {
            exercise_id: "wood-chopper",
            name: "Wood Chopper",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" },
              { set: 3, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "tuck-crunch",
            name: "Tuck Crunch",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "pallof-press",
            name: "Pallof Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "flutter-kick",
            name: "Flutter Kick",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          },
          {
            exercise_id: "dragon-flag",
            name: "Dragon Flag",
            sets: [
              { set: 1, reps: 3 },
              { set: 2, reps: 3 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Calves
  "best-workouts-for-calves": {
    id: "best-workouts-for-calves",
    name: "Best Workouts for Calves",
    summary: "Calf muscles are essential for lower leg strength and athletic performance. These exercises target both the gastrocnemius and soleus muscles through various angles and resistance patterns. The workout is designed for optimal calf development and functional strength.",
    workouts: [
      {
        id: "calves-workout-1",
        name: "Workout 1",
        focus: ["Calves"],
        exercises: [
          {
            exercise_id: "standing-calf-raise",
            name: "Standing Calf Raise",
            sets: [
              { set: 1, reps: 12, weight: 90, unit: "lbs" },
              { set: 2, reps: 12, weight: 90, unit: "lbs" },
              { set: 3, reps: 12, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "seated-calf-raise",
            name: "Seated Calf Raise",
            sets: [
              { set: 1, reps: 15, weight: 45, unit: "lbs" },
              { set: 2, reps: 15, weight: 45, unit: "lbs" },
              { set: 3, reps: 15, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-leg-calf-raise",
            name: "Single Leg Calf Raise",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 }
            ]
          },
          {
            exercise_id: "donkey-calf-raise",
            name: "Donkey Calf Raise",
            sets: [
              { set: 1, reps: 12, weight: 45, unit: "lbs" },
              { set: 2, reps: 12, weight: 45, unit: "lbs" },
              { set: 3, reps: 12, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "calf-press-on-leg-press",
            name: "Calf Press on Leg Press",
            sets: [
              { set: 1, reps: 15, weight: 180, unit: "lbs" },
              { set: 2, reps: 15, weight: 180, unit: "lbs" }
            ]
          },
          {
            exercise_id: "jump-rope",
            name: "Jump Rope",
            sets: [
              { set: 1, duration: "2:00" },
              { set: 2, duration: "2:00" }
            ]
          }
        ]
      },
      {
        id: "calves-workout-2",
        name: "Workout 2",
        focus: ["Calves"],
        exercises: [
          {
            exercise_id: "dumbbell-calf-raise",
            name: "Dumbbell Calf Raise",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "smith-machine-calf-raise",
            name: "Smith Machine Calf Raise",
            sets: [
              { set: 1, reps: 15, weight: 90, unit: "lbs" },
              { set: 2, reps: 15, weight: 90, unit: "lbs" },
              { set: 3, reps: 15, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "toe-walk",
            name: "Toe Walk",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "box-jump",
            name: "Box Jump",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "pogo-jump",
            name: "Pogo Jump",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 }
            ]
          },
          {
            exercise_id: "calf-stretch",
            name: "Calf Stretch",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          }
        ]
      },
      {
        id: "calves-workout-3",
        name: "Workout 3",
        focus: ["Calves"],
        exercises: [
          {
            exercise_id: "barbell-calf-raise",
            name: "Barbell Calf Raise",
            sets: [
              { set: 1, reps: 8, weight: 135, unit: "lbs" },
              { set: 2, reps: 8, weight: 135, unit: "lbs" },
              { set: 3, reps: 8, weight: 135, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-calf-raise",
            name: "Reverse Calf Raise",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "single-leg-donkey-calf-raise",
            name: "Single Leg Donkey Calf Raise",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 }
            ]
          },
          {
            exercise_id: "farmer-walk-on-toes",
            name: "Farmer Walk on Toes",
            sets: [
              { set: 1, weight: 50, unit: "lbs", duration: "0:30" },
              { set: 2, weight: 50, unit: "lbs", duration: "0:30" },
              { set: 3, weight: 50, unit: "lbs", duration: "0:30" }
            ]
          },
          {
            exercise_id: "calf-raise-hold",
            name: "Calf Raise Hold",
            sets: [
              { set: 1, weight: 90, unit: "lbs", duration: "0:15" },
              { set: 2, weight: 90, unit: "lbs", duration: "0:15" }
            ]
          },
          {
            exercise_id: "ankle-bounce",
            name: "Ankle Bounce",
            sets: [
              { set: 1, reps: 25 },
              { set: 2, reps: 25 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Forearms
  "best-workouts-for-forearms": {
    id: "best-workouts-for-forearms",
    name: "Best Workouts for Forearms",
    summary: "Forearm strength is crucial for grip strength and overall upper body performance. These exercises target the flexors, extensors, and stabilizing muscles of the forearms through various gripping patterns and wrist movements.",
    workouts: [
      {
        id: "forearms-workout-1",
        name: "Workout 1",
        focus: ["Forearms"],
        exercises: [
          {
            exercise_id: "wrist-curl",
            name: "Wrist Curl",
            sets: [
              { set: 1, reps: 15, weight: 25, unit: "lbs" },
              { set: 2, reps: 15, weight: 25, unit: "lbs" },
              { set: 3, reps: 15, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-wrist-curl",
            name: "Reverse Wrist Curl",
            sets: [
              { set: 1, reps: 12, weight: 20, unit: "lbs" },
              { set: 2, reps: 12, weight: 20, unit: "lbs" },
              { set: 3, reps: 12, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "farmer-walk",
            name: "Farmer Walk",
            sets: [
              { set: 1, weight: 60, unit: "lbs", duration: "1:00" },
              { set: 2, weight: 60, unit: "lbs", duration: "1:00" },
              { set: 3, weight: 60, unit: "lbs", duration: "1:00" }
            ]
          },
          {
            exercise_id: "dead-hang",
            name: "Dead Hang",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" },
              { set: 4, duration: "0:30" }
            ]
          },
          {
            exercise_id: "plate-pinch",
            name: "Plate Pinch",
            sets: [
              { set: 1, weight: 25, unit: "lbs", duration: "0:20" },
              { set: 2, weight: 25, unit: "lbs", duration: "0:20" }
            ]
          },
          {
            exercise_id: "grip-crush",
            name: "Grip Crush",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "forearms-workout-2",
        name: "Workout 2",
        focus: ["Forearms"],
        exercises: [
          {
            exercise_id: "hammer-curl",
            name: "Hammer Curl",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-barbell-curl",
            name: "Reverse Barbell Curl",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "wrist-roller",
            name: "Wrist Roller",
            sets: [
              { set: 1, reps: 3, weight: 15, unit: "lbs" },
              { set: 2, reps: 3, weight: 15, unit: "lbs" },
              { set: 3, reps: 3, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "towel-pull-up",
            name: "Towel Pull Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 }
            ]
          },
          {
            exercise_id: "cable-wrist-curl",
            name: "Cable Wrist Curl",
            sets: [
              { set: 1, reps: 15, weight: 20, unit: "lbs" },
              { set: 2, reps: 15, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "finger-extension",
            name: "Finger Extension",
            sets: [
              { set: 1, reps: 15 },
              { set: 2, reps: 15 }
            ]
          }
        ]
      },
      {
        id: "forearms-workout-3",
        name: "Workout 3",
        focus: ["Forearms"],
        exercises: [
          {
            exercise_id: "zottman-curl",
            name: "Zottman Curl",
            sets: [
              { set: 1, reps: 8, weight: 25, unit: "lbs" },
              { set: 2, reps: 8, weight: 25, unit: "lbs" },
              { set: 3, reps: 8, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "fat-grip-barbell-curl",
            name: "Fat Grip Barbell Curl",
            sets: [
              { set: 1, reps: 6, weight: 35, unit: "lbs" },
              { set: 2, reps: 6, weight: 35, unit: "lbs" },
              { set: 3, reps: 6, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-arm-dead-hang",
            name: "Single Arm Dead Hang",
            sets: [
              { set: 1, duration: "0:15" },
              { set: 2, duration: "0:15" },
              { set: 3, duration: "0:15" }
            ]
          },
          {
            exercise_id: "fingertip-push-up",
            name: "Fingertip Push Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 }
            ]
          },
          {
            exercise_id: "rice-bucket-exercise",
            name: "Rice Bucket Exercise",
            sets: [
              { set: 1, duration: "2:00" },
              { set: 2, duration: "2:00" }
            ]
          },
          {
            exercise_id: "stress-ball-squeeze",
            name: "Stress Ball Squeeze",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Cardio
  "best-workouts-for-cardio": {
    id: "best-workouts-for-cardio",
    name: "Best Workouts for Cardio",
    summary: "Cardiovascular training is essential for heart health, endurance, and overall fitness. These workouts incorporate various modalities including steady-state cardio, high-intensity intervals, and circuit training to improve cardiovascular capacity and metabolic efficiency.",
    workouts: [
      {
        id: "cardio-workout-1",
        name: "Workout 1 - HIIT",
        focus: ["Cardio", "Endurance"],
        exercises: [
          {
            exercise_id: "burpee",
            name: "Burpee",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          },
          {
            exercise_id: "mountain-climber",
            name: "Mountain Climber",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" },
              { set: 4, duration: "0:30" }
            ]
          },
          {
            exercise_id: "jump-squat",
            name: "Jump Squat",
            sets: [
              { set: 1, reps: 15 },
              { set: 2, reps: 15 },
              { set: 3, reps: 15 }
            ]
          },
          {
            exercise_id: "high-knees",
            name: "High Knees",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "jumping-jacks",
            name: "Jumping Jacks",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 },
              { set: 3, reps: 20 }
            ]
          },
          {
            exercise_id: "sprint-interval",
            name: "Sprint Interval",
            sets: [
              { set: 1, duration: "0:20" },
              { set: 2, duration: "0:20" },
              { set: 3, duration: "0:20" }
            ]
          }
        ]
      },
      {
        id: "cardio-workout-2",
        name: "Workout 2 - Steady State",
        focus: ["Cardio", "Endurance"],
        exercises: [
          {
            exercise_id: "treadmill-run",
            name: "Treadmill Run",
            sets: [
              { set: 1, duration: "20:00" }
            ]
          },
          {
            exercise_id: "stationary-bike",
            name: "Stationary Bike",
            sets: [
              { set: 1, duration: "15:00" }
            ]
          },
          {
            exercise_id: "elliptical",
            name: "Elliptical",
            sets: [
              { set: 1, duration: "15:00" }
            ]
          },
          {
            exercise_id: "rowing-machine",
            name: "Rowing Machine",
            sets: [
              { set: 1, duration: "10:00" }
            ]
          },
          {
            exercise_id: "stair-climber",
            name: "Stair Climber",
            sets: [
              { set: 1, duration: "10:00" }
            ]
          },
          {
            exercise_id: "walking-incline",
            name: "Walking Incline",
            sets: [
              { set: 1, duration: "15:00" }
            ]
          }
        ]
      },
      {
        id: "cardio-workout-3",
        name: "Workout 3 - Circuit Training",
        focus: ["Cardio", "Endurance", "Strength"],
        exercises: [
          {
            exercise_id: "kettlebell-swing",
            name: "Kettlebell Swing",
            sets: [
              { set: 1, reps: 15, weight: 35, unit: "lbs" },
              { set: 2, reps: 15, weight: 35, unit: "lbs" },
              { set: 3, reps: 15, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "battle-ropes",
            name: "Battle Ropes",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "box-jump",
            name: "Box Jump",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 }
            ]
          },
          {
            exercise_id: "medicine-ball-slam",
            name: "Medicine Ball Slam",
            sets: [
              { set: 1, reps: 12, weight: 20, unit: "lbs" },
              { set: 2, reps: 12, weight: 20, unit: "lbs" },
              { set: 3, reps: 12, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bear-crawl",
            name: "Bear Crawl",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          },
          {
            exercise_id: "plank-to-push-up",
            name: "Plank to Push Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Flexibility
  "best-workouts-for-flexibility": {
    id: "best-workouts-for-flexibility",
    name: "Best Workouts for Flexibility",
    summary: "Flexibility training is essential for maintaining range of motion, preventing injury, and improving overall movement quality. These workouts combine static stretching, dynamic movements, and mobility exercises to enhance flexibility across all major muscle groups.",
    workouts: [
      {
        id: "flexibility-workout-1",
        name: "Workout 1 - Full Body Stretch",
        focus: ["Flexibility", "Mobility"],
        exercises: [
          {
            exercise_id: "forward-fold",
            name: "Forward Fold",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "pigeon-pose",
            name: "Pigeon Pose",
            sets: [
              { set: 1, duration: "1:30" },
              { set: 2, duration: "1:30" }
            ]
          },
          {
            exercise_id: "cat-cow-stretch",
            name: "Cat Cow Stretch",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 }
            ]
          },
          {
            exercise_id: "hip-flexor-stretch",
            name: "Hip Flexor Stretch",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" },
              { set: 3, duration: "0:45" }
            ]
          },
          {
            exercise_id: "shoulder-stretch",
            name: "Shoulder Stretch",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "spinal-twist",
            name: "Spinal Twist",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" }
            ]
          }
        ]
      },
      {
        id: "flexibility-workout-2",
        name: "Workout 2 - Dynamic Mobility",
        focus: ["Flexibility", "Mobility"],
        exercises: [
          {
            exercise_id: "leg-swing",
            name: "Leg Swing",
            sets: [
              { set: 1, reps: 15 },
              { set: 2, reps: 15 },
              { set: 3, reps: 15 }
            ]
          },
          {
            exercise_id: "arm-circle",
            name: "Arm Circle",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 },
              { set: 3, reps: 20 }
            ]
          },
          {
            exercise_id: "walking-lunge",
            name: "Walking Lunge",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          },
          {
            exercise_id: "high-knee-march",
            name: "High Knee March",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 },
              { set: 3, reps: 20 }
            ]
          },
          {
            exercise_id: "butt-kick",
            name: "Butt Kick",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 }
            ]
          },
          {
            exercise_id: "world-greatest-stretch",
            name: "World Greatest Stretch",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 }
            ]
          }
        ]
      },
      {
        id: "flexibility-workout-3",
        name: "Workout 3 - Yoga Flow",
        focus: ["Flexibility", "Mobility", "Balance"],
        exercises: [
          {
            exercise_id: "downward-dog",
            name: "Downward Dog",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "warrior-pose",
            name: "Warrior Pose",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" },
              { set: 3, duration: "0:45" }
            ]
          },
          {
            exercise_id: "child-pose",
            name: "Child Pose",
            sets: [
              { set: 1, duration: "1:30" },
              { set: 2, duration: "1:30" }
            ]
          },
          {
            exercise_id: "cobra-pose",
            name: "Cobra Pose",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "triangle-pose",
            name: "Triangle Pose",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" }
            ]
          },
          {
            exercise_id: "tree-pose",
            name: "Tree Pose",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Traps
  "best-workouts-for-traps": {
    id: "best-workouts-for-traps",
    name: "Best Workouts for Traps",
    summary: "The trapezius muscles are essential for shoulder blade movement and neck stability. These exercises target the upper, middle, and lower portions of the traps through various pulling and shrugging movements for complete trapezius development.",
    workouts: [
      {
        id: "traps-workout-1",
        name: "Workout 1",
        focus: ["Trapezius"],
        exercises: [
          {
            exercise_id: "barbell-shrug",
            name: "Barbell Shrug",
            sets: [
              { set: 1, reps: 8, weight: 135, unit: "lbs" },
              { set: 2, reps: 8, weight: 135, unit: "lbs" },
              { set: 3, reps: 8, weight: 135, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shrug",
            name: "Dumbbell Shrug",
            sets: [
              { set: 1, reps: 12, weight: 50, unit: "lbs" },
              { set: 2, reps: 12, weight: 50, unit: "lbs" },
              { set: 3, reps: 12, weight: 50, unit: "lbs" }
            ]
          },
          {
            exercise_id: "upright-row",
            name: "Upright Row",
            sets: [
              { set: 1, reps: 10, weight: 65, unit: "lbs" },
              { set: 2, reps: 10, weight: 65, unit: "lbs" },
              { set: 3, reps: 10, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "face-pull",
            name: "Face Pull",
            sets: [
              { set: 1, reps: 15, weight: 40, unit: "lbs" },
              { set: 2, reps: 15, weight: 40, unit: "lbs" },
              { set: 3, reps: 15, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "power-clean",
            name: "Power Clean",
            sets: [
              { set: 1, reps: 5, weight: 95, unit: "lbs" },
              { set: 2, reps: 5, weight: 95, unit: "lbs" }
            ]
          },
          {
            exercise_id: "high-pull",
            name: "High Pull",
            sets: [
              { set: 1, reps: 6, weight: 85, unit: "lbs" },
              { set: 2, reps: 6, weight: 85, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "traps-workout-2",
        name: "Workout 2",
        focus: ["Trapezius"],
        exercises: [
          {
            exercise_id: "cable-shrug",
            name: "Cable Shrug",
            sets: [
              { set: 1, reps: 12, weight: 100, unit: "lbs" },
              { set: 2, reps: 12, weight: 100, unit: "lbs" },
              { set: 3, reps: 12, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "trap-bar-shrug",
            name: "Trap Bar Shrug",
            sets: [
              { set: 1, reps: 8, weight: 185, unit: "lbs" },
              { set: 2, reps: 8, weight: 185, unit: "lbs" },
              { set: 3, reps: 8, weight: 185, unit: "lbs" }
            ]
          },
          {
            exercise_id: "snatch-grip-high-pull",
            name: "Snatch Grip High Pull",
            sets: [
              { set: 1, reps: 6, weight: 75, unit: "lbs" },
              { set: 2, reps: 6, weight: 75, unit: "lbs" },
              { set: 3, reps: 6, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "behind-the-back-shrug",
            name: "Behind the Back Shrug",
            sets: [
              { set: 1, reps: 10, weight: 95, unit: "lbs" },
              { set: 2, reps: 10, weight: 95, unit: "lbs" },
              { set: 3, reps: 10, weight: 95, unit: "lbs" }
            ]
          },
          {
            exercise_id: "prone-y-raise",
            name: "Prone Y Raise",
            sets: [
              { set: 1, reps: 12, weight: 10, unit: "lbs" },
              { set: 2, reps: 12, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "prone-t-raise",
            name: "Prone T Raise",
            sets: [
              { set: 1, reps: 12, weight: 10, unit: "lbs" },
              { set: 2, reps: 12, weight: 10, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "traps-workout-3",
        name: "Workout 3",
        focus: ["Trapezius"],
        exercises: [
          {
            exercise_id: "farmer-walk",
            name: "Farmer Walk",
            sets: [
              { set: 1, weight: 80, unit: "lbs", duration: "1:00" },
              { set: 2, weight: 80, unit: "lbs", duration: "1:00" },
              { set: 3, weight: 80, unit: "lbs", duration: "1:00" }
            ]
          },
          {
            exercise_id: "kelso-shrug",
            name: "Kelso Shrug",
            sets: [
              { set: 1, reps: 15, weight: 25, unit: "lbs" },
              { set: 2, reps: 15, weight: 25, unit: "lbs" },
              { set: 3, reps: 15, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-upright-row",
            name: "Cable Upright Row",
            sets: [
              { set: 1, reps: 12, weight: 60, unit: "lbs" },
              { set: 2, reps: 12, weight: 60, unit: "lbs" },
              { set: 3, reps: 12, weight: 60, unit: "lbs" }
            ]
          },
          {
            exercise_id: "overhead-carry",
            name: "Overhead Carry",
            sets: [
              { set: 1, weight: 40, unit: "lbs", duration: "0:30" },
              { set: 2, weight: 40, unit: "lbs", duration: "0:30" },
              { set: 3, weight: 40, unit: "lbs", duration: "0:30" }
            ]
          },
          {
            exercise_id: "band-pull-apart",
            name: "Band Pull Apart",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 }
            ]
          },
          {
            exercise_id: "reverse-fly",
            name: "Reverse Fly",
            sets: [
              { set: 1, reps: 15, weight: 15, unit: "lbs" },
              { set: 2, reps: 15, weight: 15, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Lats
  "best-workouts-for-lats": {
    id: "best-workouts-for-lats",
    name: "Best Workouts for Lats",
    summary: "The latissimus dorsi are the largest muscles of the back, responsible for pulling movements and creating the V-shaped torso. These exercises focus on lat development through various pulling angles and grip positions for maximum back width and strength.",
    workouts: [
      {
        id: "lats-workout-1",
        name: "Workout 1",
        focus: ["Lats", "Back"],
        exercises: [
          {
            exercise_id: "pull-up",
            name: "Pull Up",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "lat-pulldown",
            name: "Lat Pulldown",
            sets: [
              { set: 1, reps: 10, weight: 120, unit: "lbs" },
              { set: 2, reps: 10, weight: 120, unit: "lbs" },
              { set: 3, reps: 10, weight: 120, unit: "lbs" }
            ]
          },
          {
            exercise_id: "wide-grip-pull-up",
            name: "Wide Grip Pull Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 }
            ]
          },
          {
            exercise_id: "single-arm-dumbbell-row",
            name: "Single Arm Dumbbell Row",
            sets: [
              { set: 1, reps: 8, weight: 60, unit: "lbs" },
              { set: 2, reps: 8, weight: 60, unit: "lbs" },
              { set: 3, reps: 8, weight: 60, unit: "lbs" }
            ]
          },
          {
            exercise_id: "straight-arm-pulldown",
            name: "Straight Arm Pulldown",
            sets: [
              { set: 1, reps: 12, weight: 50, unit: "lbs" },
              { set: 2, reps: 12, weight: 50, unit: "lbs" }
            ]
          },
          {
            exercise_id: "chest-supported-row",
            name: "Chest Supported Row",
            sets: [
              { set: 1, reps: 10, weight: 90, unit: "lbs" },
              { set: 2, reps: 10, weight: 90, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "lats-workout-2",
        name: "Workout 2",
        focus: ["Lats", "Back"],
        exercises: [
          {
            exercise_id: "chin-up",
            name: "Chin Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 }
            ]
          },
          {
            exercise_id: "reverse-grip-lat-pulldown",
            name: "Reverse Grip Lat Pulldown",
            sets: [
              { set: 1, reps: 10, weight: 100, unit: "lbs" },
              { set: 2, reps: 10, weight: 100, unit: "lbs" },
              { set: 3, reps: 10, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "t-bar-row",
            name: "T-Bar Row",
            sets: [
              { set: 1, reps: 8, weight: 90, unit: "lbs" },
              { set: 2, reps: 8, weight: 90, unit: "lbs" },
              { set: 3, reps: 8, weight: 90, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 12, weight: 100, unit: "lbs" },
              { set: 2, reps: 12, weight: 100, unit: "lbs" },
              { set: 3, reps: 12, weight: 100, unit: "lbs" }
            ]
          },
          {
            exercise_id: "pullover",
            name: "Pullover",
            sets: [
              { set: 1, reps: 12, weight: 45, unit: "lbs" },
              { set: 2, reps: 12, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "inverted-row",
            name: "Inverted Row",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "lats-workout-3",
        name: "Workout 3",
        focus: ["Lats", "Back"],
        exercises: [
          {
            exercise_id: "weighted-pull-up",
            name: "Weighted Pull Up",
            sets: [
              { set: 1, reps: 5, weight: 25, unit: "lbs" },
              { set: 2, reps: 5, weight: 25, unit: "lbs" },
              { set: 3, reps: 5, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "wide-grip-lat-pulldown",
            name: "Wide Grip Lat Pulldown",
            sets: [
              { set: 1, reps: 8, weight: 110, unit: "lbs" },
              { set: 2, reps: 8, weight: 110, unit: "lbs" },
              { set: 3, reps: 8, weight: 110, unit: "lbs" }
            ]
          },
          {
            exercise_id: "landmine-row",
            name: "Landmine Row",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" },
              { set: 3, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "meadows-row",
            name: "Meadows Row",
            sets: [
              { set: 1, reps: 8, weight: 45, unit: "lbs" },
              { set: 2, reps: 8, weight: 45, unit: "lbs" },
              { set: 3, reps: 8, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "machine-pullover",
            name: "Machine Pullover",
            sets: [
              { set: 1, reps: 12, weight: 80, unit: "lbs" },
              { set: 2, reps: 12, weight: 80, unit: "lbs" }
            ]
          },
          {
            exercise_id: "archer-pull-up",
            name: "Archer Pull Up",
            sets: [
              { set: 1, reps: 3 },
              { set: 2, reps: 3 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Conditioning
  "best-workouts-for-conditioning": {
    id: "best-workouts-for-conditioning",
    name: "Best Workouts for Conditioning",
    summary: "Conditioning workouts focus on improving cardiovascular fitness, muscular endurance, and overall work capacity. These high-intensity sessions combine strength and cardio elements to maximize caloric burn and athletic performance enhancement.",
    workouts: [
      {
        id: "conditioning-workout-1",
        name: "Workout 1 - Metabolic Circuit",
        focus: ["Conditioning", "Cardio", "Endurance"],
        exercises: [
          {
            exercise_id: "burpee",
            name: "Burpee",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 }
            ]
          },
          {
            exercise_id: "kettlebell-swing",
            name: "Kettlebell Swing",
            sets: [
              { set: 1, reps: 20, weight: 50, unit: "lbs" },
              { set: 2, reps: 20, weight: 50, unit: "lbs" },
              { set: 3, reps: 20, weight: 50, unit: "lbs" }
            ]
          },
          {
            exercise_id: "mountain-climber",
            name: "Mountain Climber",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" },
              { set: 3, duration: "0:45" }
            ]
          },
          {
            exercise_id: "thrusters",
            name: "Thrusters",
            sets: [
              { set: 1, reps: 12, weight: 65, unit: "lbs" },
              { set: 2, reps: 12, weight: 65, unit: "lbs" },
              { set: 3, reps: 12, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "battle-ropes",
            name: "Battle Ropes",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          },
          {
            exercise_id: "box-jump",
            name: "Box Jump",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "conditioning-workout-2",
        name: "Workout 2 - Strength Endurance",
        focus: ["Conditioning", "Strength", "Endurance"],
        exercises: [
          {
            exercise_id: "goblet-squat",
            name: "Goblet Squat",
            sets: [
              { set: 1, reps: 15, weight: 50, unit: "lbs" },
              { set: 2, reps: 15, weight: 50, unit: "lbs" },
              { set: 3, reps: 15, weight: 50, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-up",
            name: "Push Up",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 },
              { set: 4, reps: 12 }
            ]
          },
          {
            exercise_id: "walking-lunge",
            name: "Walking Lunge",
            sets: [
              { set: 1, reps: 20 },
              { set: 2, reps: 20 },
              { set: 3, reps: 20 }
            ]
          },
          {
            exercise_id: "plank",
            name: "Plank",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "jumping-jacks",
            name: "Jumping Jacks",
            sets: [
              { set: 1, reps: 30 },
              { set: 2, reps: 30 }
            ]
          },
          {
            exercise_id: "bear-crawl",
            name: "Bear Crawl",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          }
        ]
      },
      {
        id: "conditioning-workout-3",
        name: "Workout 3 - HIIT Power",
        focus: ["Conditioning", "Power", "Cardio"],
        exercises: [
          {
            exercise_id: "squat-jump",
            name: "Squat Jump",
            sets: [
              { set: 1, reps: 15 },
              { set: 2, reps: 15 },
              { set: 3, reps: 15 },
              { set: 4, reps: 15 }
            ]
          },
          {
            exercise_id: "medicine-ball-slam",
            name: "Medicine Ball Slam",
            sets: [
              { set: 1, reps: 10, weight: 25, unit: "lbs" },
              { set: 2, reps: 10, weight: 25, unit: "lbs" },
              { set: 3, reps: 10, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "high-knees",
            name: "High Knees",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "burpee-box-jump",
            name: "Burpee Box Jump",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "sprint-interval",
            name: "Sprint Interval",
            sets: [
              { set: 1, duration: "0:20" },
              { set: 2, duration: "0:20" }
            ]
          },
          {
            exercise_id: "lateral-bound",
            name: "Lateral Bound",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Functional Fitness
  "best-workouts-for-functional-fitness": {
    id: "best-workouts-for-functional-fitness",
    name: "Best Workouts for Functional Fitness",
    summary: "Functional fitness workouts focus on movements that translate to real-world activities and athletic performance. These exercises emphasize multi-joint movements, stability, and coordination to improve overall movement quality and daily function.",
    workouts: [
      {
        id: "functional-workout-1",
        name: "Workout 1 - Movement Patterns",
        focus: ["Functional", "Mobility", "Stability"],
        exercises: [
          {
            exercise_id: "turkish-get-up",
            name: "Turkish Get Up",
            sets: [
              { set: 1, reps: 3, weight: 25, unit: "lbs" },
              { set: 2, reps: 3, weight: 25, unit: "lbs" },
              { set: 3, reps: 3, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "farmer-walk",
            name: "Farmer Walk",
            sets: [
              { set: 1, weight: 70, unit: "lbs", duration: "1:00" },
              { set: 2, weight: 70, unit: "lbs", duration: "1:00" },
              { set: 3, weight: 70, unit: "lbs", duration: "1:00" }
            ]
          },
          {
            exercise_id: "single-leg-deadlift",
            name: "Single Leg Deadlift",
            sets: [
              { set: 1, reps: 8, weight: 30, unit: "lbs" },
              { set: 2, reps: 8, weight: 30, unit: "lbs" },
              { set: 3, reps: 8, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "overhead-squat",
            name: "Overhead Squat",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" },
              { set: 3, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bear-crawl",
            name: "Bear Crawl",
            sets: [
              { set: 1, duration: "0:45" },
              { set: 2, duration: "0:45" }
            ]
          },
          {
            exercise_id: "crab-walk",
            name: "Crab Walk",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          }
        ]
      },
      {
        id: "functional-workout-2",
        name: "Workout 2 - Athletic Performance",
        focus: ["Functional", "Power", "Agility"],
        exercises: [
          {
            exercise_id: "clean-and-press",
            name: "Clean and Press",
            sets: [
              { set: 1, reps: 5, weight: 95, unit: "lbs" },
              { set: 2, reps: 5, weight: 95, unit: "lbs" },
              { set: 3, reps: 5, weight: 95, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lateral-lunge",
            name: "Lateral Lunge",
            sets: [
              { set: 1, reps: 12, weight: 25, unit: "lbs" },
              { set: 2, reps: 12, weight: 25, unit: "lbs" },
              { set: 3, reps: 12, weight: 25, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-arm-overhead-press",
            name: "Single Arm Overhead Press",
            sets: [
              { set: 1, reps: 8, weight: 35, unit: "lbs" },
              { set: 2, reps: 8, weight: 35, unit: "lbs" },
              { set: 3, reps: 8, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "reverse-lunge-with-rotation",
            name: "Reverse Lunge with Rotation",
            sets: [
              { set: 1, reps: 10, weight: 20, unit: "lbs" },
              { set: 2, reps: 10, weight: 20, unit: "lbs" },
              { set: 3, reps: 10, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "suitcase-carry",
            name: "Suitcase Carry",
            sets: [
              { set: 1, weight: 60, unit: "lbs", duration: "0:45" },
              { set: 2, weight: 60, unit: "lbs", duration: "0:45" }
            ]
          },
          {
            exercise_id: "step-up-with-knee-drive",
            name: "Step Up with Knee Drive",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 }
            ]
          }
        ]
      },
      {
        id: "functional-workout-3",
        name: "Workout 3 - Core Integration",
        focus: ["Functional", "Core", "Stability"],
        exercises: [
          {
            exercise_id: "deadbug",
            name: "Dead Bug",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          },
          {
            exercise_id: "pallof-press",
            name: "Pallof Press",
            sets: [
              { set: 1, reps: 12, weight: 40, unit: "lbs" },
              { set: 2, reps: 12, weight: 40, unit: "lbs" },
              { set: 3, reps: 12, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bird-dog",
            name: "Bird Dog",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "single-arm-farmer-walk",
            name: "Single Arm Farmer Walk",
            sets: [
              { set: 1, weight: 60, unit: "lbs", duration: "0:30" },
              { set: 2, weight: 60, unit: "lbs", duration: "0:30" },
              { set: 3, weight: 60, unit: "lbs", duration: "0:30" }
            ]
          },
          {
            exercise_id: "plank-up-down",
            name: "Plank Up Down",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 }
            ]
          },
          {
            exercise_id: "side-plank-rotation",
            name: "Side Plank Rotation",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 }
            ]
          }
        ]
      }
    ]
  }
,

  // Best Workouts for Power
  "best-workouts-for-power": {
    id: "best-workouts-for-power",
    name: "Best Workouts for Power",
    summary: "Power training focuses on the ability to generate force quickly, combining strength and speed for explosive movement. These workouts incorporate Olympic lifts, plyometrics, and ballistic exercises to develop athletic power and performance.",
    workouts: [
      {
        id: "power-workout-1",
        name: "Workout 1 - Olympic Lifts",
        focus: ["Power", "Explosive", "Strength"],
        exercises: [
          {
            exercise_id: "power-clean",
            name: "Power Clean",
            sets: [
              { set: 1, reps: 3, weight: 115, unit: "lbs" },
              { set: 2, reps: 3, weight: 115, unit: "lbs" },
              { set: 3, reps: 3, weight: 115, unit: "lbs" }
            ]
          },
          {
            exercise_id: "power-snatch",
            name: "Power Snatch",
            sets: [
              { set: 1, reps: 3, weight: 85, unit: "lbs" },
              { set: 2, reps: 3, weight: 85, unit: "lbs" },
              { set: 3, reps: 3, weight: 85, unit: "lbs" }
            ]
          },
          {
            exercise_id: "clean-and-jerk",
            name: "Clean and Jerk",
            sets: [
              { set: 1, reps: 2, weight: 135, unit: "lbs" },
              { set: 2, reps: 2, weight: 135, unit: "lbs" },
              { set: 3, reps: 2, weight: 135, unit: "lbs" }
            ]
          },
          {
            exercise_id: "hang-clean",
            name: "Hang Clean",
            sets: [
              { set: 1, reps: 5, weight: 95, unit: "lbs" },
              { set: 2, reps: 5, weight: 95, unit: "lbs" },
              { set: 3, reps: 5, weight: 95, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-press",
            name: "Push Press",
            sets: [
              { set: 1, reps: 5, weight: 115, unit: "lbs" },
              { set: 2, reps: 5, weight: 115, unit: "lbs" }
            ]
          },
          {
            exercise_id: "jump-shrug",
            name: "Jump Shrug",
            sets: [
              { set: 1, reps: 6, weight: 135, unit: "lbs" },
              { set: 2, reps: 6, weight: 135, unit: "lbs" }
            ]
          }
        ]
      },
      {
        id: "power-workout-2",
        name: "Workout 2 - Plyometrics",
        focus: ["Power", "Plyometric", "Explosive"],
        exercises: [
          {
            exercise_id: "depth-jump",
            name: "Depth Jump",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 }
            ]
          },
          {
            exercise_id: "box-jump",
            name: "Box Jump",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "broad-jump",
            name: "Broad Jump",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 }
            ]
          },
          {
            exercise_id: "medicine-ball-throw",
            name: "Medicine Ball Throw",
            sets: [
              { set: 1, reps: 8, weight: 20, unit: "lbs" },
              { set: 2, reps: 8, weight: 20, unit: "lbs" },
              { set: 3, reps: 8, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "clapping-push-up",
            name: "Clapping Push Up",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 }
            ]
          },
          {
            exercise_id: "lateral-bound",
            name: "Lateral Bound",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 }
            ]
          }
        ]
      },
      {
        id: "power-workout-3",
        name: "Workout 3 - Ballistic Training",
        focus: ["Power", "Speed", "Explosive"],
        exercises: [
          {
            exercise_id: "kettlebell-swing",
            name: "Kettlebell Swing",
            sets: [
              { set: 1, reps: 15, weight: 70, unit: "lbs" },
              { set: 2, reps: 15, weight: 70, unit: "lbs" },
              { set: 3, reps: 15, weight: 70, unit: "lbs" }
            ]
          },
          {
            exercise_id: "medicine-ball-slam",
            name: "Medicine Ball Slam",
            sets: [
              { set: 1, reps: 10, weight: 30, unit: "lbs" },
              { set: 2, reps: 10, weight: 30, unit: "lbs" },
              { set: 3, reps: 10, weight: 30, unit: "lbs" }
            ]
          },
          {
            exercise_id: "speed-squat",
            name: "Speed Squat",
            sets: [
              { set: 1, reps: 8, weight: 135, unit: "lbs" },
              { set: 2, reps: 8, weight: 135, unit: "lbs" },
              { set: 3, reps: 8, weight: 135, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dynamic-effort-bench",
            name: "Dynamic Effort Bench",
            sets: [
              { set: 1, reps: 8, weight: 135, unit: "lbs" },
              { set: 2, reps: 8, weight: 135, unit: "lbs" },
              { set: 3, reps: 8, weight: 135, unit: "lbs" }
            ]
          },
          {
            exercise_id: "battle-ropes",
            name: "Battle Ropes",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" }
            ]
          },
          {
            exercise_id: "explosive-push-up",
            name: "Explosive Push Up",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 }
            ]
          }
        ]
      }
    ]
  }
  }
};

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
  
  return Array.from(muscleGroups);,

  "best-workouts-for-women": {
    id: "best-workouts-for-women",
    name: "Best Workouts for Women",
    summary: "This workout is designed to address generalized preferences while focusing on achieving the desired adaptations effectively and efficiently. Exercises selected have been tailored to adhere to observed tendencies and aim to contribute to noticeable progress toward fitness goals. For women, repetitions and weights have been adjusted considering average values of 5'5", 140lbs, and 34 years old, though individual capabilities and conditions may vary widely. In every session, modifications should be made in alignment with personal strength and endurance levels to ensure both safety and progress.",
    workouts: [
      {
        id: "women-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
        exercises: [
          {
            exercise_id: "back-squat",
            name: "Back Squat",
            sets: [
              { set: 1, reps: 4, weight: 65, unit: "lbs" },
              { set: 2, reps: 4, weight: 65, unit: "lbs" },
              { set: 3, reps: 4, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 9, weight: 45, unit: "lbs" },
              { set: 2, reps: 9, weight: 45, unit: "lbs" },
              { set: 3, reps: 9, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 22.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-push-day-women": {
    id: "best-workouts-for-push-day-women",
    name: "Best Workouts for Push Day (Women)",
    summary: "Push exercises encompass movements such as horizontal pushes, including the bench press, and vertical pushes, such as the shoulder press. These workouts emphasize muscle groups like the chest, shoulders, and triceps, employing a mix of compound and isolation movements. For women, the exercises are adapted to averages of 5'5", 140lbs, and 34 years old, while appreciating individual variation in ability. Incorporating balanced push routines within a PPL (Push-Pull-Leg) framework supports comprehensive physical development.",
    workouts: [
      {
        id: "push-day-women-workout-1",
        name: "Workout 1",
        focus: ["Chest", "Triceps", "Shoulders"],
        exercises: [
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "close-grip-bench-press",
            name: "Close-Grip Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" },
              { set: 3, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" },
              { set: 3, reps: 10, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-fly",
            name: "Dumbbell Fly",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-glutes-women": {
    id: "best-workouts-for-glutes-women",
    name: "Best Workouts for Glutes (Women)",
    summary: "This workout is designed to target the primary muscles on the posterior of your hips, known as the Glutes. These critical muscles facilitate hip and leg movements essential for various functional activities. The exercises included, such as squats, deadlifts, and hip thrusts, are tailored to enhance strength and definition in this area. For women, the routines consider averages of 5'5" in height, 140lbs in weight, and an age of 34 years, though personal capabilities may vary. With a focus on comprehensive glute engagement, this program ensures effective workout sessions for achieving desired outcomes.",
    workouts: [
      {
        id: "glutes-women-workout-1",
        name: "Workout 1",
        focus: ["Glutes"],
        exercises: [
          {
            exercise_id: "barbell-hip-thrust",
            name: "Barbell Hip Thrust",
            sets: [
              { set: 1, reps: 7, weight: 45, unit: "lbs" },
              { set: 2, reps: 7, weight: 45, unit: "lbs" },
              { set: 3, reps: 7, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "glute-kickback-machine",
            name: "Glute Kickback Machine",
            sets: [
              { set: 1, reps: 12, weight: 45, unit: "lbs" },
              { set: 2, reps: 12, weight: 45, unit: "lbs" },
              { set: 3, reps: 12, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-hip-extension",
            name: "Cable Hip Extension",
            sets: [
              { set: 1, reps: 8, weight: 15, unit: "lbs" },
              { set: 2, reps: 8, weight: 15, unit: "lbs" },
              { set: 3, reps: 8, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "single-leg-glute-bridge",
            name: "Single Leg Glute Bridge",
            sets: [
              { set: 1, duration: "0:30" },
              { set: 2, duration: "0:30" },
              { set: 3, duration: "0:30" }
            ]
          },
          {
            exercise_id: "stability-ball-hip-bridge",
            name: "Stability Ball Hip Bridge",
            sets: [
              { set: 1, duration: "1:00" },
              { set: 2, duration: "1:00" },
              { set: 3, duration: "1:00" }
            ]
          },
          {
            exercise_id: "step-up",
            name: "Step Up",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-chest-women": {
    id: "best-workouts-for-chest-women",
    name: "Best Workouts for Chest (Women)",
    summary: "The chest is the muscle group located on the front of the torso, between the shoulders and above the abdomen. To strengthen and develop this area, focus on exercises involving horizontal presses and shoulder adduction. For women, the required repetitions and weight can be adjusted based on averages (5'5", 140lbs, 34 years old), considering variations in individual capabilities. Chest workouts typically include presses and flys, effectively targeting the pectoral muscles.",
    workouts: [
      {
        id: "chest-women-workout-1",
        name: "Workout 1",
        focus: ["Chest"],
        exercises: [
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 5, weight: 45, unit: "lbs" },
              { set: 2, reps: 5, weight: 45, unit: "lbs" },
              { set: 3, reps: 5, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-incline-bench-press",
            name: "Barbell Incline Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" },
              { set: 3, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-fly",
            name: "Dumbbell Fly",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "push-up",
            name: "Push Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "tricep-push-up",
            name: "Tricep Push Up",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 },
              { set: 4, reps: 10 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-shoulders-women": {
    id: "best-workouts-for-shoulders-women",
    name: "Best Workouts for Shoulders (Women)",
    summary: "This workout focuses on strengthening and sculpting the shoulder muscles, a crucial area involved in numerous upper body movements. Targeting muscles such as the deltoids through exercises like overhead presses and straight arm raises is essential for balanced training. Adjustments in repetitions and weights are tailored to an average individual female (5'5", 140 lbs, 34 years old), ensuring effective progress while acknowledging personalized requirements.",
    workouts: [
      {
        id: "shoulders-women-workout-1",
        name: "Workout 1",
        focus: ["Shoulders"],
        exercises: [
          {
            exercise_id: "barbell-shoulder-press",
            name: "Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 5, weight: 35, unit: "lbs" },
              { set: 2, reps: 5, weight: 35, unit: "lbs" },
              { set: 3, reps: 5, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-front-raise",
            name: "Dumbbell Front Raise",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" },
              { set: 3, reps: 10, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-lateral-raise",
            name: "Cable Lateral Raise",
            sets: [
              { set: 1, reps: 10, weight: 7.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 7.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-shoulder-press",
            name: "Dumbbell Shoulder Press",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-biceps-and-shoulders-women": {
    id: "best-workouts-for-biceps-and-shoulders-women",
    name: "Best Workouts for Biceps and Shoulders (Women)",
    summary: "The biceps and shoulders are integral components of the upper body musculature, comprising the biceps along the front of the arm and the shoulder group, primarily the deltoids at the top. Each muscle group contributes to frequent pushing and pulling exercises and supports overall mobility. Effective engagement often involves overhead presses, targeting the shoulders, and curling motions emphasizing the biceps. For women averaging 5'5", 140 pounds, and 34 years old, repetitions and weights are tailored to accommodate general strength structures, though individual differences may influence specific adjustments.",
    workouts: [
      {
        id: "shoulders-biceps-women-workout-1",
        name: "Workout 1",
        focus: ["Shoulders", "Biceps"],
        exercises: [
          {
            exercise_id: "barbell-shoulder-press",
            name: "Barbell Shoulder Press",
            sets: [
              { set: 1, reps: 5, weight: 35, unit: "lbs" },
              { set: 2, reps: 5, weight: 35, unit: "lbs" },
              { set: 3, reps: 5, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 22.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-rear-delt-raise",
            name: "Dumbbell Rear Delt Raise",
            sets: [
              { set: 1, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "ez-bar-curl",
            name: "EZ-Bar Curl",
            sets: [
              { set: 1, reps: 10, weight: 20, unit: "lbs" },
              { set: 2, reps: 10, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-back-fly",
            name: "Dumbbell Back Fly",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-back-women": {
    id: "best-workouts-for-back-women",
    name: "Best Workouts for Back (Women)",
    summary: "This workout focuses on targeting the back—a pivotal muscle group spanning the upper posterior torso instrumental in pulling and shoulder-related motions. Commonly utilized exercises include rows, pull-ups, and lat pull-downs, emphasizing comprehensive development. When tailored for women, the approach accounts for generalized preferences and adaptations, utilizing reps and weights adjusted to an average individual profile of 5'5", 140 lbs, 34 years, noting variability due to personal capability and fitness levels.",
    workouts: [
      {
        id: "back-women-workout-1",
        name: "Workout 1",
        focus: ["Back", "Trapezius", "Lower Back"],
        exercises: [
          {
            exercise_id: "dumbbell-row",
            name: "Dumbbell Row",
            sets: [
              { set: 1, reps: 5, weight: 15, unit: "lbs" },
              { set: 2, reps: 5, weight: 15, unit: "lbs" },
              { set: 3, reps: 5, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lat-pulldown",
            name: "Lat Pulldown",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" },
              { set: 3, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 9, weight: 45, unit: "lbs" },
              { set: 2, reps: 9, weight: 45, unit: "lbs" },
              { set: 3, reps: 9, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "upright-row",
            name: "Upright Row",
            sets: [
              { set: 1, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 22.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-shrug",
            name: "Barbell Shrug",
            sets: [
              { set: 1, reps: 10, weight: 35, unit: "lbs" },
              { set: 2, reps: 10, weight: 35, unit: "lbs" }
            ]
          },
          {
            exercise_id: "back-extensions",
            name: "Back Extensions",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-beginners-women": {
    id: "best-workouts-for-beginners-women",
    name: "Best Workouts for Beginners (Women)",
    summary: "This workout focuses on exercises designed for those with less than one year of fitness experience, utilizing straightforward equipment and movements with reduced risk of injury. While tailored to average metrics for women (5'5", 140lbs, 34 years old), repetitions and weights are adaptable to suit individual fitness levels. Movements selected prioritize efficient adaptation while considering preferred approaches, ensuring steady progress and safety in achieving fitness objectives.",
    workouts: [
      {
        id: "beginner-women-workout-1",
        name: "Workout 1",
        focus: ["Back", "Chest", "Quadriceps", "Hamstrings", "Triceps", "Abs"],
        exercises: [
          {
            exercise_id: "dumbbell-row",
            name: "Dumbbell Row",
            sets: [
              { set: 1, reps: 5, weight: 10, unit: "lbs" },
              { set: 2, reps: 5, weight: 10, unit: "lbs" },
              { set: 3, reps: 5, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 10, unit: "lbs" },
              { set: 2, reps: 10, weight: 10, unit: "lbs" },
              { set: 3, reps: 10, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-lunge",
            name: "Dumbbell Lunge",
            sets: [
              { set: 1, reps: 4, weight: 10, unit: "lbs" },
              { set: 2, reps: 4, weight: 10, unit: "lbs" },
              { set: 3, reps: 4, weight: 10, unit: "lbs" }
            ]
          },
          {
            exercise_id: "lying-hamstrings-curl",
            name: "Lying Hamstrings Curl",
            sets: [
              { set: 1, reps: 10, weight: 20, unit: "lbs" },
              { set: 2, reps: 10, weight: 20, unit: "lbs" },
              { set: 3, reps: 10, weight: 20, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 }
            ]
          },
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-get-lean-women": {
    id: "best-workouts-for-get-lean-women",
    name: "Best Workouts for Getting Lean and Burning Fat (Women)",
    summary: "This workout is designed to focus on toning the body and getting lean while burning fat effectively. It incorporates exercises that maintain an elevated heart rate throughout the session, combined with resistance training to retain muscle mass. The approach generally employs lower weights and higher repetitions tailored to individuals with an average profile of 5'5" and 140 lbs at 34 years of age, while recognizing personal variations in capacity.",
    workouts: [
      {
        id: "get-lean-women-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps", "Chest", "Biceps", "Back", "Triceps", "Abs", "Lower Back"],
        exercises: [
          {
            exercise_id: "air-squats",
            name: "Air Squats",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 },
              { set: 4, reps: 8 },
              { set: 5, reps: 8 }
            ]
          },
          {
            exercise_id: "decline-push-up",
            name: "Decline Push Up",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "dumbbell-bicep-curl",
            name: "Dumbbell Bicep Curl",
            sets: [
              { set: 1, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 2, reps: 8, weight: 12.5, unit: "lbs" },
              { set: 3, reps: 8, weight: 12.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 10, weight: 40, unit: "lbs" },
              { set: 2, reps: 10, weight: 40, unit: "lbs" },
              { set: 3, reps: 10, weight: 40, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bench-dip",
            name: "Bench Dip",
            sets: [
              { set: 1, reps: 8 },
              { set: 2, reps: 8 },
              { set: 3, reps: 8 }
            ]
          },
          {
            exercise_id: "ab-rollout",
            name: "Ab Rollout",
            sets: [
              { set: 1, reps: 6 },
              { set: 2, reps: 6 },
              { set: 3, reps: 6 },
              { set: 4, reps: 6 }
            ]
          },
          {
            exercise_id: "back-extensions",
            name: "Back Extensions",
            sets: [
              { set: 1, reps: 5 },
              { set: 2, reps: 5 },
              { set: 3, reps: 5 },
              { set: 4, reps: 5 },
              { set: 5, reps: 5 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-advanced-women": {
    id: "best-workouts-for-advanced-women",
    name: "Best Workouts for Advanced (Women)",
    summary: "This workout incorporates advanced exercises designed for individuals with more than four years of weightlifting experience, involving complex movements such as Olympic lifts and exercise combinations. These activities are tailored to address generalized preferences associated with women, with suggested repetitions and weight based on averages for a 34-year-old individual measuring 5'5" and weighing 140 pounds. Actual capabilities will vary among different individuals.",
    workouts: [
      {
        id: "advanced-women-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps", "Chest", "Back", "Biceps", "Triceps", "Abs"],
        exercises: [
          {
            exercise_id: "back-squat",
            name: "Back Squat",
            sets: [
              { set: 1, reps: 6, weight: 75, unit: "lbs" },
              { set: 2, reps: 6, weight: 75, unit: "lbs" },
              { set: 3, reps: 6, weight: 75, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-bench-press",
            name: "Barbell Bench Press",
            sets: [
              { set: 1, reps: 10, weight: 45, unit: "lbs" },
              { set: 2, reps: 10, weight: 45, unit: "lbs" },
              { set: 3, reps: 10, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "cable-row",
            name: "Cable Row",
            sets: [
              { set: 1, reps: 8, weight: 45, unit: "lbs" },
              { set: 2, reps: 8, weight: 45, unit: "lbs" },
              { set: 3, reps: 8, weight: 45, unit: "lbs" }
            ]
          },
          {
            exercise_id: "barbell-curl",
            name: "Barbell Curl",
            sets: [
              { set: 1, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 2, reps: 10, weight: 22.5, unit: "lbs" },
              { set: 3, reps: 10, weight: 22.5, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dip",
            name: "Dip",
            sets: [
              { set: 1, reps: 10 },
              { set: 2, reps: 10 },
              { set: 3, reps: 10 }
            ]
          },
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 },
              { set: 4, reps: 12 }
            ]
          }
        ]
      }
    ]
  },

  "best-workouts-for-power-lifting-women": {
    id: "best-workouts-for-power-lifting-women",
    name: "Best Workouts for Power Lifting (Women)",
    summary: "Power lifting emphasizes the development of maximum strength through three primary exercises: the bench press, back squat, and deadlift. These workouts are designed to target these specific movements, enhancing overall strength and performance. While the foundational principles of exercise selection do not vary between sexes, generalized variations in preferences and approaches are considered. For women, repetitions and weight loads are tailored around typical averages—5'5" in height, weighing 140 pounds, and aged 34 years—while acknowledging individual capability varies significantly.",
    workouts: [
      {
        id: "power-lifting-women-workout-1",
        name: "Workout 1",
        focus: ["Quadriceps", "Chest", "Back", "Abs"],
        exercises: [
          {
            exercise_id: "back-squat",
            name: "Back Squat",
            sets: [
              { set: 1, reps: 5, weight: 65, unit: "lbs" },
              { set: 2, reps: 5, weight: 65, unit: "lbs" },
              { set: 3, reps: 5, weight: 65, unit: "lbs" },
              { set: 4, reps: 5, weight: 65, unit: "lbs" },
              { set: 5, reps: 5, weight: 65, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-bench-press",
            name: "Dumbbell Bench Press",
            sets: [
              { set: 1, reps: 5, weight: 15, unit: "lbs" },
              { set: 2, reps: 5, weight: 15, unit: "lbs" },
              { set: 3, reps: 5, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "dumbbell-row",
            name: "Dumbbell Row",
            sets: [
              { set: 1, reps: 6, weight: 15, unit: "lbs" },
              { set: 2, reps: 6, weight: 15, unit: "lbs" },
              { set: 3, reps: 6, weight: 15, unit: "lbs" },
              { set: 4, reps: 6, weight: 15, unit: "lbs" }
            ]
          },
          {
            exercise_id: "bicycle-crunch",
            name: "Bicycle Crunch",
            sets: [
              { set: 1, reps: 12 },
              { set: 2, reps: 12 },
              { set: 3, reps: 12 }
            ]
          }
        ]
      }
    ]
  },
,
  "best-workouts-for-women": {
    "id": "best-workouts-for-women",
    "name": "Best Workouts for Women",
    "summary": "This workout is designed to address generalized preferences while focusing on achieving the desired adaptations effectively and efficiently. Exercises selected have been tailored to adhere to observed tendencies and aim to contribute to noticeable progress toward fitness goals. For women, repetitions and weights have been adjusted considering average values of 5'5", 140lbs, and 34 years old, though individual capabilities and conditions may vary widely.",
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
    "summary": "Calf workouts focus on developing the muscles located between the ankle and the knee, primarily responsible for toe-pointing movements. Including lower-body exercises targeting this muscle group can improve strength and definition. For women, suggested exercises and resistance intensity are often adapted based on averaged metrics: 5'5" height, 140 lbs weight, and 34 years of age, although individual capabilities can vary significantly.",
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
  }
,
  "best-workouts-for-chest-triceps-women": {
    "id": "best-workouts-for-chest-triceps-women",
    "name": "Best Workouts for Chest & Triceps (Women)",
    "summary": "This workout focuses on challenging and strengthening the chest and tricep muscle groups, tailored for women of average height of 5'5", weighing 140 pounds, and aged 34 years.",
    "workouts": [
      {
        "id": "chest-triceps-women-workout-1",
        "name": "Workout 1",
        "focus": ["Chest", "Triceps"],
        "exercises": [
          { "exercise_id": "barbell-bench-press", "name": "Barbell Bench Press", "sets": [{ "set": 1, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "close-grip-bench-press", "name": "Close-Grip Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }] },
          { "exercise_id": "dip", "name": "Dip", "sets": [{ "set": 1, "reps": 6 }, { "set": 2, "reps": 6 }, { "set": 3, "reps": 6 }, { "set": 4, "reps": 6 }] },
          { "exercise_id": "dumbbell-bench-press", "name": "Dumbbell Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-fly", "name": "Dumbbell Fly", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-skullcrusher", "name": "Dumbbell Skullcrusher", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }] }
        ]
      }
    ]
  },
  "best-workouts-for-chest-and-back-women": {
    "id": "best-workouts-for-chest-and-back-women",
    "name": "Best Workouts for Chest & Back (Women)",
    "summary": "The chest, located on the front of the torso between the shoulders, primarily engages in horizontal pressing and shoulder adduction movements. The back, positioned on the upper rear torso, is responsible for pulling movements and participates in shoulder actions.",
    "workouts": [
      {
        "id": "chest-back-women-workout-1",
        "name": "Workout 1",
        "focus": ["Chest", "Back"],
        "exercises": [
          { "exercise_id": "barbell-bench-press", "name": "Barbell Bench Press", "sets": [{ "set": 1, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-row", "name": "Dumbbell Row", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "cable-row", "name": "Cable Row", "sets": [{ "set": 1, "reps": 9, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 9, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 9, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-bench-press", "name": "Dumbbell Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-fly", "name": "Dumbbell Fly", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "hammerstrength-high-row", "name": "Hammerstrength High Row", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }] }
        ]
      }
    ]
  },
  "best-workouts-for-hamstrings-women": {
    "id": "best-workouts-for-hamstrings-women",
    "name": "Best Workouts for Hamstrings (Women)",
    "summary": "This workout is designed to enhance the strength and flexibility of the hamstrings, the key muscles located at the back of the thigh responsible for knee flexion and hip extension.",
    "workouts": [
      {
        "id": "hamstrings-women-workout-1",
        "name": "Workout 1",
        "focus": ["Hamstrings"],
        "exercises": [
          { "exercise_id": "deadlift", "name": "Deadlift", "sets": [{ "set": 1, "reps": 6, "weight": 55, "unit": "lbs" }, { "set": 2, "reps": 6, "weight": 55, "unit": "lbs" }, { "set": 3, "reps": 6, "weight": 55, "unit": "lbs" }] },
          { "exercise_id": "romanian-deadlift", "name": "Romanian Deadlift", "sets": [{ "set": 1, "reps": 10, "weight": 40, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 40, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 40, "unit": "lbs" }] },
          { "exercise_id": "good-morning", "name": "Good Morning", "sets": [{ "set": 1, "reps": 8, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "lying-hamstrings-curl", "name": "Lying Hamstrings Curl", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "seated-leg-curl", "name": "Seated Leg Curl", "sets": [{ "set": 1, "reps": 12, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 12, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "kettlebell-sumo-squat", "name": "Kettlebell Sumo Squat", "sets": [{ "set": 1, "reps": 10, "weight": 15, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 15, "unit": "lbs" }] }
        ]
      }
    ]
  },
  "best-workouts-for-legs-women": {
    "id": "best-workouts-for-legs-women",
    "name": "Best Workouts for Legs (Women)",
    "summary": "This workout is tailored to target the six primary muscle groups of the legs: glutes, quadriceps, hamstrings, calves, adductors, and abductors.",
    "workouts": [
      {
        "id": "legs-women-workout-1",
        "name": "Workout 1",
        "focus": ["Quadriceps", "Hamstrings", "Glutes", "Calves", "Abductors", "Adductors"],
        "exercises": [
          { "exercise_id": "back-squat", "name": "Back Squat", "sets": [{ "set": 1, "reps": 4, "weight": 65, "unit": "lbs" }, { "set": 2, "reps": 4, "weight": 65, "unit": "lbs" }, { "set": 3, "reps": 4, "weight": 65, "unit": "lbs" }] },
          { "exercise_id": "deadlift", "name": "Deadlift", "sets": [{ "set": 1, "reps": 12, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 12, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 12, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "barbell-hip-thrust", "name": "Barbell Hip Thrust", "sets": [{ "set": 1, "reps": 8, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "seated-machine-calf-press", "name": "Seated Machine Calf Press", "sets": [{ "set": 1, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 30, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 30, "unit": "lbs" }] },
          { "exercise_id": "clam", "name": "Clam", "sets": [{ "set": 1, "reps": 12 }, { "set": 2, "reps": 12 }, { "set": 3, "reps": 12 }] },
          { "exercise_id": "machine-hip-adductor", "name": "Machine Hip Adductor", "sets": [{ "set": 1, "reps": 11, "weight": 55, "unit": "lbs" }, { "set": 2, "reps": 11, "weight": 55, "unit": "lbs" }] }
        ]
      }
    ]
  },
  "best-workouts-for-upper-body-women": {
    "id": "best-workouts-for-upper-body-women",
    "name": "Best Workouts for Upper Body (Women)",
    "summary": "This workout is designed to effectively target and strengthen the upper body, addressing specific muscle groups such as the chest, back, shoulders, biceps, triceps, trapezius, abs, lower back, neck, and forearms.",
    "workouts": [
      {
        "id": "upper-body-women-workout-1",
        "name": "Workout 1",
        "focus": ["Chest", "Back", "Biceps", "Triceps", "Shoulders", "Abs"],
        "exercises": [
          { "exercise_id": "barbell-bench-press", "name": "Barbell Bench Press", "sets": [{ "set": 1, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 2, "reps": 5, "weight": 45, "unit": "lbs" }, { "set": 3, "reps": 5, "weight": 45, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-row", "name": "Dumbbell Row", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "barbell-curl", "name": "Barbell Curl", "sets": [{ "set": 1, "reps": 8, "weight": 25, "unit": "lbs" }, { "set": 2, "reps": 8, "weight": 25, "unit": "lbs" }, { "set": 3, "reps": 8, "weight": 25, "unit": "lbs" }] },
          { "exercise_id": "close-grip-bench-press", "name": "Close-Grip Bench Press", "sets": [{ "set": 1, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 35, "unit": "lbs" }, { "set": 3, "reps": 10, "weight": 35, "unit": "lbs" }] },
          { "exercise_id": "dumbbell-rear-delt-raise", "name": "Dumbbell Rear Delt Raise", "sets": [{ "set": 1, "reps": 10, "weight": 12.5, "unit": "lbs" }, { "set": 2, "reps": 10, "weight": 12.5, "unit": "lbs" }] },
          { "exercise_id": "bicycle-crunch", "name": "Bicycle Crunch", "sets": [{ "set": 1, "reps": 10 }, { "set": 2, "reps": 10 }, { "set": 3, "reps": 10 }, { "set": 4, "reps": 10 }] }
        ]
      }
    ]
  }
,
  "best-workouts-for-arms-women": {
    "id": "best-workouts-for-arms-women",
    "name": "Best Workouts for Arms (Women)",
    "summary": "This workout is designed to strengthen and tone the arms, focusing on the biceps and triceps. The exercises and weights are calibrated for women of average height 5'5", weight 140 lbs, and age 34 years.",
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
  }
};