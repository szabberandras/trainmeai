const fs = require('fs');

// Women training plans to add
const newWomenPlans = `
  "best-workouts-for-women": {
    id: "best-workouts-for-women",
    name: "Best Workouts for Women",
    summary: "This workout is designed to address generalized preferences while focusing on achieving the desired adaptations effectively and efficiently. Exercises selected have been tailored to adhere to observed tendencies and aim to contribute to noticeable progress toward fitness goals. For women, repetitions and weights have been adjusted considering average values of 5'5\", 140lbs, and 34 years old, though individual capabilities and conditions may vary widely. In every session, modifications should be made in alignment with personal strength and endurance levels to ensure both safety and progress.",
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
    summary: "Push exercises encompass movements such as horizontal pushes, including the bench press, and vertical pushes, such as the shoulder press. These workouts emphasize muscle groups like the chest, shoulders, and triceps, employing a mix of compound and isolation movements. For women, the exercises are adapted to averages of 5'5\", 140lbs, and 34 years old, while appreciating individual variation in ability. Incorporating balanced push routines within a PPL (Push-Pull-Leg) framework supports comprehensive physical development.",
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
    summary: "This workout is designed to target the primary muscles on the posterior of your hips, known as the Glutes. These critical muscles facilitate hip and leg movements essential for various functional activities. The exercises included, such as squats, deadlifts, and hip thrusts, are tailored to enhance strength and definition in this area. For women, the routines consider averages of 5'5\" in height, 140lbs in weight, and an age of 34 years, though personal capabilities may vary. With a focus on comprehensive glute engagement, this program ensures effective workout sessions for achieving desired outcomes.",
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
    summary: "The chest is the muscle group located on the front of the torso, between the shoulders and above the abdomen. To strengthen and develop this area, focus on exercises involving horizontal presses and shoulder adduction. For women, the required repetitions and weight can be adjusted based on averages (5'5\", 140lbs, 34 years old), considering variations in individual capabilities. Chest workouts typically include presses and flys, effectively targeting the pectoral muscles.",
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
    summary: "This workout focuses on strengthening and sculpting the shoulder muscles, a crucial area involved in numerous upper body movements. Targeting muscles such as the deltoids through exercises like overhead presses and straight arm raises is essential for balanced training. Adjustments in repetitions and weights are tailored to an average individual female (5'5\", 140 lbs, 34 years old), ensuring effective progress while acknowledging personalized requirements.",
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
    summary: "The biceps and shoulders are integral components of the upper body musculature, comprising the biceps along the front of the arm and the shoulder group, primarily the deltoids at the top. Each muscle group contributes to frequent pushing and pulling exercises and supports overall mobility. Effective engagement often involves overhead presses, targeting the shoulders, and curling motions emphasizing the biceps. For women averaging 5'5\", 140 pounds, and 34 years old, repetitions and weights are tailored to accommodate general strength structures, though individual differences may influence specific adjustments.",
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
    summary: "This workout focuses on targeting the back—a pivotal muscle group spanning the upper posterior torso instrumental in pulling and shoulder-related motions. Commonly utilized exercises include rows, pull-ups, and lat pull-downs, emphasizing comprehensive development. When tailored for women, the approach accounts for generalized preferences and adaptations, utilizing reps and weights adjusted to an average individual profile of 5'5\", 140 lbs, 34 years, noting variability due to personal capability and fitness levels.",
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
    summary: "This workout focuses on exercises designed for those with less than one year of fitness experience, utilizing straightforward equipment and movements with reduced risk of injury. While tailored to average metrics for women (5'5\", 140lbs, 34 years old), repetitions and weights are adaptable to suit individual fitness levels. Movements selected prioritize efficient adaptation while considering preferred approaches, ensuring steady progress and safety in achieving fitness objectives.",
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
    summary: "This workout is designed to focus on toning the body and getting lean while burning fat effectively. It incorporates exercises that maintain an elevated heart rate throughout the session, combined with resistance training to retain muscle mass. The approach generally employs lower weights and higher repetitions tailored to individuals with an average profile of 5'5\" and 140 lbs at 34 years of age, while recognizing personal variations in capacity.",
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
    summary: "This workout incorporates advanced exercises designed for individuals with more than four years of weightlifting experience, involving complex movements such as Olympic lifts and exercise combinations. These activities are tailored to address generalized preferences associated with women, with suggested repetitions and weight based on averages for a 34-year-old individual measuring 5'5\" and weighing 140 pounds. Actual capabilities will vary among different individuals.",
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
    summary: "Power lifting emphasizes the development of maximum strength through three primary exercises: the bench press, back squat, and deadlift. These workouts are designed to target these specific movements, enhancing overall strength and performance. While the foundational principles of exercise selection do not vary between sexes, generalized variations in preferences and approaches are considered. For women, repetitions and weight loads are tailored around typical averages—5'5\" in height, weighing 140 pounds, and aged 34 years—while acknowledging individual capability varies significantly.",
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
  },`;

function addWomenTrainingPlans() {
  const referenceWorkoutsPath = './lib/data/reference-workouts.ts';
  
  try {
    let fileContent = fs.readFileSync(referenceWorkoutsPath, 'utf8');
    
    // Find the position to insert new plans (before the closing brace of REFERENCE_WORKOUTS)
    const insertionPoint = fileContent.lastIndexOf('};');
    if (insertionPoint === -1) {
      console.error('Could not find insertion point in reference-workouts.ts');
      return false;
    }
    
    // Insert the new women training plans
    const beforeInsertion = fileContent.substring(0, insertionPoint - 1); // -1 to remove the last comma if needed
    const afterInsertion = fileContent.substring(insertionPoint);
    
    const newFileContent = beforeInsertion + ',\n' + newWomenPlans + '\n' + afterInsertion;
    
    // Write updated content
    fs.writeFileSync(referenceWorkoutsPath, newFileContent);
    
    console.log('✅ Successfully added women-specific training plans to reference-workouts.ts');
    console.log('🆕 Added 12 new women training plans:');
    console.log('   • Best Workouts for Women');
    console.log('   • Best Workouts for Push Day (Women)');
    console.log('   • Best Workouts for Glutes (Women)');
    console.log('   • Best Workouts for Chest (Women)');
    console.log('   • Best Workouts for Shoulders (Women)');
    console.log('   • Best Workouts for Biceps and Shoulders (Women)');
    console.log('   • Best Workouts for Back (Women)');
    console.log('   • Best Workouts for Beginners (Women)');
    console.log('   • Best Workouts for Getting Lean and Burning Fat (Women)');
    console.log('   • Best Workouts for Advanced (Women)');
    console.log('   • Best Workouts for Power Lifting (Women)');
    
    return true;
  } catch (error) {
    console.error('Error adding women training plans:', error);
    return false;
  }
}

// Run the update
if (addWomenTrainingPlans()) {
  console.log('\n🎯 Women training plans integration completed successfully!');
  console.log('📈 This expands your MyPace Fitness App with comprehensive gender-specific training options');
  console.log('💪 Training plans are calibrated for average women: 5\'5", 140lbs, 34 years old');
  console.log('🔧 AI coach will adjust based on individual user capabilities and preferences');
} else {
  console.log('\n❌ Failed to integrate women training plans');
  process.exit(1);
} 