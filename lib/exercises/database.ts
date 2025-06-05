// lib/exercises/database.ts - Comprehensive exercise database

import { Exercise } from '@/types/templates';

// ===== HYROX TRAINING DATA FOR AI LANGUAGE TRAINING =====
export const HYROX_TRAINING_DATA = {
  "hyrox_workouts": [
    {
      "name": "HYROX Simulation",
      "type": "race_prep",
      "stations": [
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "skierg", "distance": 1000, "unit": "meters"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "sled-push", "distance": 50, "weight": "bodyweight+50kg"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "sled-pull", "distance": 50, "weight": "bodyweight+50kg"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "burpee-broad-jumps", "distance": 80, "unit": "meters"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "rowing", "distance": 1000, "unit": "meters"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "farmers-carry", "distance": 200, "unit": "meters"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "sandbag-lunges", "distance": 100, "unit": "meters"},
        {"exercise": "running", "distance": 1000, "unit": "meters"},
        {"exercise": "wall-balls", "reps": "75 or 100"}
      ],
      "total_time": "60-90 minutes",
      "difficulty": "advanced"
    }
  ],
  "hyrox_progressions": [
    {
      "week": 1,
      "focus": "base_building",
      "workouts": [
        {"day": "monday", "type": "running", "volume": "5km easy"},
        {"day": "wednesday", "type": "strength", "exercises": ["sled-push", "farmers-carry"]},
        {"day": "friday", "type": "mixed", "format": "station_work"}
      ]
    }
  ],
  "hyrox_standards": {
    "beginner": {"total_time": "90-120min", "run_pace": "6:00-7:00/km"},
    "intermediate": {"total_time": "75-90min", "run_pace": "5:00-6:00/km"},
    "advanced": {"total_time": "60-75min", "run_pace": "4:30-5:00/km"},
    "average": {"total_time": "92 minutes"}
  },
  "hyrox_alternatives": {
    "skierg": ["rope_slams", "lat_pulldowns", "battle_ropes"],
    "sled_push": ["prowler_push", "car_push", "wall_sits"],
    "farmers_carry": ["dumbbell_carry", "kettlebell_carry", "suitcase_carry", "zercher_carry", "overhead_carry"],
    "deadlifts": ["romanian_deadlifts", "sumo_deadlifts", "good_mornings"],
    "wall_balls": ["dumbbell_thrusters", "barbell_thrusters", "medicine_ball_slams"],
    "headcutters": ["kettlebell_swings", "dumbbell_overhead_extension"],
    "goblet_squat": ["dumbbell_front_squat", "kettlebell_front_squat", "sumo_squat"],
    "db_bench_press": ["barbell_bench_press", "push_ups", "floor_press"],
    "chin_ups": ["lat_pulldowns", "assisted_pull_ups", "inverted_rows"],
    "bike_sprint": ["assault_bike", "spin_bike", "recumbent_bike"],
    "bulgarian_split_squats": ["dumbbell_lunges", "step_ups", "single_leg_romanian_deadlifts"],
    "db_shoulder_press": ["barbell_overhead_press", "dumbbell_push_press", "arnold_press"],
    "db_curls": ["barbell_curls", "hammer_curls", "resistance_band_curls"],
    "alt_db_snatch": ["kettlebell_snatch", "barbell_power_snatch", "single_arm_dumbbell_clean"],
    "db_thruster": ["barbell_thruster", "kettlebell_thruster", "medicine_ball_thruster"],
    "burpee_broad_jump": ["burpee_box_jump", "long_jumps", "burpee_tuck_jump"],
    "rowing": ["air_bike", "elliptical"],
    "back_squats": ["front_squats", "leg_press", "goblet_squat"],
    "kbs_kettlebell_swings": ["dumbbell_swings", "plate_swings", "sumo_deadlift_high_pull"],
    "db_hang_clean": ["barbell_hang_clean", "kettlebell_clean", "medicine_ball_clean"],
    "db_push_press": ["barbell_push_press", "kettlebell_push_press", "strict_overhead_press"],
    "db_front_squat": ["barbell_front_squat", "zercher_squat"],
    "barbell_rdl": ["dumbbell_rdl", "good_mornings", "glute_bridge"],
    "db_split_squat_jump": ["jump_lunges", "box_step_ups_with_jump", "alternating_jump_lunges"],
    "sled_sprint": ["hill_sprints", "resistance_band_sprints"],
    "hr_push_ups": ["decline_push_ups", "weighted_push_ups", "incline_push_ups"],
    "wall_walks": ["pike_push_ups", "handstand_holds", "bear_crawls"],
    "sandbag_lunge": ["barbell_lunge", "dumbbell_lunge", "kettlebell_lunge"],
    "devils_press": ["burpee_to_dumbbell_snatch", "burpee_to_overhead_dumbbell_carry"],
    "burpee_box_jump_over": ["burpee_over_object", "lateral_burpee_over_dumbbell", "box_jumps_plus_burpee"]
  },
  "hyrox_records": {
    "men_fastest_time": {
      "athlete": "Hunter Mcintyre",
      "time": "53 minutes and 22 seconds",
      "event": "Stockholm 2023"
    },
    "women_fastest_time": {
      "athlete": "Lauren Weeks",
      "time": "58 minutes and 3 seconds",
      "event": "Vienna 2024"
    }
  }
};

// ===== MARATHON TRAINING PROGRAMS FOR AI LANGUAGE TRAINING =====
export const MARATHON_TRAINING_DATA = {
  "marathon_training_programs": [
    {
      "program_name": "Novice 1 Marathon Program",
      "target_audience": "First-time marathoners, beginners, or experienced runners seeking a gentle approach.",
      "duration_weeks": 18,
      "weekly_mileage_buildup": "Gradually increases, with stepback weeks every third week.",
      "key_workouts": {
        "long_runs": {
          "day": "Saturdays",
          "starting_mileage": "6 miles (Week 1)",
          "peak_mileage": "20 miles (Week 15)",
          "pace_guidance": "Comfortable, conversational pace; 'no such thing as too slow' as long as distance is covered.",
          "notes": "Do not skip; every third week is a 'stepback' week for recovery."
        },
        "midweek_training": {
          "days": ["Tuesdays", "Wednesdays", "Thursdays"],
          "pace_guidance": "Comparatively easy pace; Wednesdays include 'Sorta-Long Runs' building from 3 to 10 miles.",
          "notes": "Weekday mileage roughly equals weekend long run mileage."
        },
        "cross_training": {
          "day": "Sundays",
          "definition": "Any aerobic exercise using slightly different muscles for recovery.",
          "recommended_activities": ["swimming", "cycling", "walking"],
          "avoid_activities": "Activities requiring sudden or sideways movements."
        },
        "rest_days": ["Mondays", "Fridays"],
        "strength_training_advice": "Not recommended for beginners. If already strength training, Tuesdays and Thursdays after short runs are suitable."
      },
      "race_recommendation": {
        "event": "Half Marathon",
        "week": "Week 8",
        "purpose": "Introduce to racing experience, predict marathon pace using calculators."
      },
      "walking_breaks_strategy": "Encouraged at aid stations for easier hydration and rest during training and race."
    },
    {
      "program_name": "Novice 2 Marathon Program",
      "target_audience": "Runners with some background, able to comfortably run 3-6 miles, training 3-5 days/week (15-25 miles/week), with occasional 5-K or half marathon experience.",
      "duration_weeks": 18,
      "similarities_to_novice_1": "Nearly identical to Novice 1.",
      "key_differences_from_novice_1": [
        "Pace runs on Wednesdays.",
        "Somewhat higher mileage."
      ],
      "key_workouts": {
        "long_runs": {
          "day": "Saturdays",
          "starting_mileage": "8 miles (Week 1)",
          "peak_mileage": "20 miles (Week 15)",
          "pace_guidance": "Comfortable, conversational pace at beginning; better to run too slow than too fast.",
          "notes": "Higher mileage buildup than Novice 1; includes additional run over 15 miles. Every third week is a 'stepback' week."
        },
        "midweek_training": {
          "days": ["Tuesdays", "Wednesdays", "Thursdays"],
          "pace_guidance": "Tuesdays/Thursdays at comparatively easy pace; Wednesdays build from 3 to 8 miles, many at race pace.",
          "notes": "Weekday mileage roughly equals weekend long run mileage."
        },
        "cross_training": {
          "day": "Sundays",
          "duration": "1 hour",
          "definition": "Any other form of aerobic exercise that allows you to use slightly different muscles for recovery.",
          "recommended_activities": ["swimming", "cycling", "walking"],
          "avoid_activities": "Activities requiring sideways movements (e.g., tennis, basketball) as mileage builds due to injury risk."
        },
        "rest_days": ["Two days each week (unspecified exact days, but typically Mondays and Fridays as in Novice 1, implied by schedule)."],
        "strength_training_advice": "Not recommended for beginners. Experienced 'gym rats' can continue, but consider cutting back on weights as long run mileage increases. Tuesdays and Thursdays after runs are suitable."
      },
      "race_recommendation": "Implied half marathon in Week 9 (as per schedule, similar to Novice 1's half marathon recommendation).",
      "walking_breaks_strategy": "Encouraged at aid stations for easier hydration and to avoid blocking other runners; can be used in training."
    },
    {
      "program_name": "Intermediate 1 Marathon Program",
      "target_audience": "Runners who have completed Novice programs (1 or 2), seeking to increase mileage and run some workouts faster.",
      "duration_weeks": 18,
      "key_differences_from_novice_programs": [
        "Starts with 8-mile long run instead of 6 miles.",
        "Two 20-milers (Week 13 and Week 15).",
        "Second run of 5-8 miles on weekends (often at marathon race pace) instead of cross-training.",
        "Cross-training moved to Mondays."
      ],
      "key_workouts": {
        "long_runs": {
          "day": "Sundays",
          "starting_mileage": "8 miles (Week 1)",
          "peak_mileage": "20 miles (twice, Weeks 13 and 15)",
          "pace_guidance": "30 to 90+ seconds per mile slower than marathon pace; comfortable, conversational pace. Avoid running too fast to preserve physiological benefits.",
          "notes": "Consistency is most important. Every third week is a 'stepback' week. Experienced runners can try '3/1 Training' (first 3/4 easy, final 1/4 faster, not race pace) no more than once every three weekends."
        },
        "midweek_training": {
          "days": ["Tuesdays", "Wednesdays", "Thursdays"],
          "pace_guidance": "Mostly comparatively easy pace; Wednesdays build from 5 to 8 miles.",
          "notes": "Weekday mileage roughly equals weekend long run mileage."
        },
        "cross_training": {
          "day": "Mondays",
          "duration": "30-60 minutes",
          "definition": "Any aerobic exercise using slightly different muscles for recovery.",
          "recommended_activities": ["swimming", "cycling", "walking"],
          "avoid_activities": "Activities requiring sideways movements (e.g., tennis, basketball) as mileage builds due to injury risk."
        },
        "rest_days": ["Fridays"],
        "strength_training_advice": "Not explicitly scheduled. If runners already strength train, Tuesdays and Thursdays after runs are suitable. No speedwork is involved in this program."
      },
      "race_recommendation": "Implied half marathon in Week 9 (as per schedule).",
      "walking_breaks_strategy": "Acceptable strategy; advised at aid stations for easier hydration."
    },
    {
      "program_name": "Advanced 1 Marathon Program",
      "target_audience": "Experienced runners who have run multiple marathons and aim to improve times, achieve PRs, or qualify for Boston Marathon. Requires familiarity with speedwork.",
      "duration_weeks": 18,
      "key_differences_from_intermediate_programs": [
        "Starts with 10-mile long run.",
        "Peaks with three 20-milers (Weeks 11, 13, 15).",
        "More training at marathon pace (usually Saturdays).",
        "Includes dedicated speed sessions (hill repeats, interval training, tempo runs)."
      ],
      "key_workouts": {
        "long_runs": {
          "day": "Sundays",
          "starting_mileage": "10 miles (Week 1)",
          "peak_mileage": "20 miles (three times: Weeks 11, 13, 15)",
          "pace_guidance": "30 to 90+ seconds per mile slower than marathon pace; conversational pace. Avoid running too fast due to concurrent speedwork during the week.",
          "notes": "Every third week is a 'stepback' week. '3/1 Training' (first 3/4 easy, final 1/4 faster) advised for experienced runners, no more than once every three weekends."
        },
        "speed_sessions": {
          "days": "Thursdays",
          "types": {
            "hill_training": "Every third Thursday. Select a hill ~0.25 miles long, run hard uphill, jog back down. Can substitute for intervals or do over hilly courses. For downhill races (e.g., Boston), include downhill repeats (start 3/1 ratio uphill/downhill).",
            "interval_training": "Every third week. Long repeats (800m) at faster-than-marathon pace, jog/walk 400m rest. Can be done as 'Yasso Repeats' (800m time in minutes equals marathon time in hours and minutes).",
            "tempo_runs": "Every third Thursday. Continuous run (30-40 min) with gradual buildup to near 10-K race pace in the middle (peak for 3-6 min). Should finish refreshed."
          }
        },
        "midweek_training": {
          "days": ["Mondays", "Wednesdays"],
          "pace_guidance": "Comparatively easy pace; semi-rest days. Weekday mileage builds with weekend long runs.",
          "notes": "Weekday mileage slightly more than weekend long runs."
        },
        "cross_training": "Not formally scheduled. Can be substituted for Monday or Wednesday easy runs (same duration, similar stress level, resist temptation to make it a hard workout). Not recommended on Fridays.",
        "rest_days": ["Fridays"],
        "strength_training_advice": "Not explicitly mentioned for Advanced 1, but general advice is to continue if already doing it, potentially cutting back on weights as mileage increases. Tuesdays and Thursdays after runs are suitable for strength training."
      },
      "race_recommendation": {
        "event": "Half Marathon",
        "week": "Week 9",
        "purpose": "Assess fitness level; can be modified to suit schedule."
      },
      "walking_breaks_strategy": "Not explicitly detailed for Advanced 1, but the principles of walking at aid stations from other programs are generally applicable.",
      "additional_notes": "Not for first-time marathoners or those new to speedwork. Consistency is paramount. Over-training leads to performance decline."
    },
    {
      "program_name": "Personal Best Marathon Program",
      "target_audience": "Experienced runners (2-3+ marathons) aiming for peak performance, PRs, or Boston Marathon qualifying times (BQ). Combines Intermediate Base Training with Intermediate 1 Marathon Training.",
      "duration_weeks": 30,
      "components": [
        "12-week Intermediate Base Training Program",
        "18-week Intermediate 1 Marathon Training Program"
      ],
      "key_workouts_overview": {
        "base_training_phase_weeks_1_12": {
          "includes": ["hill training", "tempo runs", "fartlek runs", "short races (5K, 8K, 10K)"],
          "example_week_1": {
            "mon": "3 mi run", "tue": "3 mi run", "wed": "3 x hill", "thu": "3 mi run", "fri": "Rest", "sat": "30 min tempo", "sun": "6 mi run"
          },
          "example_week_6": {
            "mon": "3 mi run", "tue": "5 mi run", "wed": "5 x hill", "thu": "3 mi run", "fri": "Rest", "sat": "Rest", "sun": "5-K Race"
          },
          "example_week_12": {
            "mon": "3 mi run", "tue": "6 mi run", "wed": "8 x 400", "thu": "3 mi run", "fri": "Rest", "sat": "Rest", "sun": "10-K Race"
          }
        },
        "intermediate_1_marathon_phase_weeks_13_30": {
          "long_runs_build_up": "From 8 miles (Week 13) to 20 miles (Weeks 25, 27)",
          "cross_training": "Mondays",
          "rest_day": "Fridays",
          "race_recommendation": "Half Marathon Race (Week 24)",
          "example_week_13": {
            "mon": "Cross", "tue": "3 mi run", "wed": "5 mi run", "thu": "3 mi run", "fri": "Rest", "sat": "5 mi pace", "sun": "8 mi run"
          },
          "example_week_30": {
            "mon": "Cross", "tue": "4 mi run", "wed": "4 mi run", "thu": "Rest", "fri": "Rest", "sat": "2 mi run", "sun": "Marathon"
          }
        }
      },
      "training_philosophy": "Hard work and discipline, but also fun. Recommended to run with friends or a group.",
      "notes": "Users can access individual programs or interactive versions via TrainingPeaks."
    }
  ]
};

// Comprehensive exercise database - covering all major movement patterns and equipment
export const EXERCISE_DATABASE: Record<string, Exercise> = {
  // ===== BODYWEIGHT STRENGTH EXERCISES =====
  'push-up': {
    id: 'push-up',
    name: 'Push-up',
    category: 'strength',
    equipment: [],
    muscleGroups: ['chest', 'shoulders', 'triceps', 'core'],
    difficulty: 2,
    instructions: [
      'Start in plank position with hands slightly wider than shoulders',
      'Lower body until chest nearly touches floor',
      'Push back up to starting position',
      'Keep body in straight line throughout movement'
    ],
    safetyNotes: ['Avoid sagging hips', 'Don\'t let elbows flare too wide'],
    modifications: {
      beginner: 'Knee push-ups or incline push-ups against wall/bench',
      advanced: 'Diamond push-ups, archer push-ups, or single-arm push-ups',
      equipment_alternatives: {
        'resistance-bands': 'Resistance band chest press',
        'dumbbells': 'Dumbbell chest press',
        'barbell': 'Bench press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Hands under shoulders', 'Straight line from head to heels'],
      execution: ['Control the descent', 'Full range of motion', 'Squeeze chest at top'],
      common_mistakes: ['Sagging hips', 'Partial range of motion', 'Too fast tempo'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'diamond-push-up': {
    id: 'diamond-push-up',
    name: 'Diamond Push-up',
    category: 'strength',
    equipment: [],
    muscleGroups: ['triceps', 'chest', 'shoulders', 'core'],
    difficulty: 4,
    instructions: [
      'Start in plank position with hands forming diamond shape under chest',
      'Lower body until chest touches hands',
      'Push back up to starting position',
      'Keep elbows close to body'
    ],
    safetyNotes: ['May strain wrists - use push-up handles if needed'],
    modifications: {
      beginner: 'Knee diamond push-ups or incline diamond push-ups',
      advanced: 'Single-arm diamond push-ups',
      equipment_alternatives: {
        'dumbbells': 'Close-grip dumbbell press',
        'barbell': 'Close-grip bench press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 15,
      unit: 'reps'
    },
    coaching: {
      setup: ['Diamond hand position', 'Tight core'],
      execution: ['Elbows close to body', 'Full range of motion'],
      common_mistakes: ['Elbows flaring out', 'Incomplete range'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'squat': {
    id: 'squat',
    name: 'Bodyweight Squat',
    category: 'strength',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'core'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower hips back and down as if sitting in chair',
      'Keep chest up and knees tracking over toes',
      'Lower until thighs parallel to floor',
      'Drive through heels to return to standing'
    ],
    modifications: {
      beginner: 'Chair-assisted squats or partial range of motion',
      advanced: 'Jump squats, pistol squats, or single-leg squats',
      equipment_alternatives: {
        'dumbbells': 'Goblet squats',
        'kettlebells': 'Kettlebell squats',
        'barbell': 'Back squats',
        'resistance-bands': 'Banded squats'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 15,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width apart', 'Toes slightly turned out'],
      execution: ['Hips back first', 'Knees track over toes', 'Full depth'],
      common_mistakes: ['Knees caving in', 'Forward lean', 'Not going deep enough'],
      breathing: 'Inhale down, exhale up'
    }
  },

  'jump-squat': {
    id: 'jump-squat',
    name: 'Jump Squat',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'calves', 'core'],
    difficulty: 3,
    instructions: [
      'Start in squat position',
      'Lower into squat',
      'Explode up jumping as high as possible',
      'Land softly back into squat position',
      'Immediately repeat'
    ],
    safetyNotes: ['Land softly to protect knees', 'Avoid on hard surfaces'],
    modifications: {
      beginner: 'Squat to calf raise (no jump)',
      advanced: 'Single-leg jump squats',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell jump squats',
        'kettlebells': 'Kettlebell swing'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 20,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width apart', 'Arms ready to swing'],
      execution: ['Explosive jump', 'Soft landing', 'Immediate transition'],
      common_mistakes: ['Hard landing', 'Pausing between reps'],
      breathing: 'Exhale on jump, inhale on landing'
    }
  },

  'lunge': {
    id: 'lunge',
    name: 'Forward Lunge',
    category: 'strength',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'hamstrings', 'calves'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart',
      'Step forward with one leg',
      'Lower hips until both knees bent at 90 degrees',
      'Push back to starting position',
      'Alternate legs or complete one side first'
    ],
    modifications: {
      beginner: 'Reverse lunges or assisted lunges',
      advanced: 'Jump lunges or walking lunges',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell lunges',
        'kettlebells': 'Kettlebell lunges',
        'barbell': 'Barbell lunges'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 15,
      unit: 'reps per leg'
    },
    coaching: {
      setup: ['Upright posture', 'Core engaged'],
      execution: ['90-degree angles', 'Front knee over ankle', 'Back knee toward floor'],
      common_mistakes: ['Knee over toe', 'Leaning forward', 'Short steps'],
      breathing: 'Inhale down, exhale up'
    }
  },

  // ===== COMPREHENSIVE CORE EXERCISES =====
  'plank': {
    id: 'plank',
    name: 'Plank',
    category: 'core',
    equipment: [],
    muscleGroups: ['core', 'shoulders', 'glutes'],
    difficulty: 2,
    instructions: [
      'Start in push-up position',
      'Lower to forearms, elbows under shoulders',
      'Hold straight line from head to heels',
      'Engage core and glutes throughout'
    ],
    modifications: {
      beginner: 'Knee plank or incline plank',
      advanced: 'Single-arm plank, plank with leg lifts',
      equipment_alternatives: {
        'stability-ball': 'Stability ball plank'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 20,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Elbows under shoulders', 'Straight line body position'],
      execution: ['Breathe normally', 'Squeeze glutes', 'Don\'t let hips sag'],
      common_mistakes: ['Sagging hips', 'Raised hips', 'Holding breath'],
      breathing: 'Breathe normally throughout hold'
    }
  },

  'crunches': {
    id: 'crunches',
    name: 'Crunches',
    category: 'core',
    equipment: [],
    muscleGroups: ['Abdominals (Rectus Abdominis)'],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent and feet flat on the floor, hip-width apart.',
      'Place your hands lightly behind your head or across your chest.',
      'Engage your core and slowly lift your head, neck, and shoulders off the floor, curling your torso towards your knees.',
      'Focus on contracting your abdominal muscles, not pulling with your neck.',
      'Slowly lower back down to the starting position with control.'
    ],
    safetyNotes: [
      'Avoid pulling on your neck with your hands; use your core to lift.',
      'Do not lift your entire back off the floor; only your shoulder blades should lift.',
      'Maintain a natural curve in your lower back; do not press it flat into the floor excessively.'
    ],
    modifications: {
      beginner: 'Perform with arms extended forward to reduce leverage, or reduce the range of motion.',
      advanced: 'Perform with feet elevated (e.g., on a bench), or add a weight to your chest.',
      equipment_alternatives: {
        'Ab Crunch Machine': 'Machine crunches'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat, knees bent, feet flat.',
        'Hands gently behind head or crossed on chest.',
        'Gaze towards the ceiling, neutral neck.'
      ],
      execution: [
        'Initiate the movement by contracting your abs, not by pulling your head.',
        'Lift shoulder blades off the floor, keeping lower back down.',
        'Exhale as you crunch up, squeeze at the top.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Using momentum to lift the torso.',
        'Lifting too much of the back off the floor.'
      ],
      breathing: 'Exhale as you crunch up, inhale as you lower down.'
    }
  },

  'russian-twist': {
    id: 'russian-twist',
    name: 'Russian Twist',
    category: 'core',
    equipment: [],
    muscleGroups: ['Obliques', 'Abdominals (Rectus Abdominis)'],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your knees bent and feet flat, leaning back slightly to engage your core.',
      'Lift your feet off the floor, balancing on your sit bones.',
      'Clasp your hands together or hold a light weight in front of your chest.',
      'Twist your torso to one side, bringing your hands towards the floor next to your hip.',
      'Twist to the opposite side, bringing your hands to the other hip, alternating sides with control.'
    ],
    safetyNotes: [
      'Maintain a straight back; avoid rounding your spine.',
      'Control the twisting motion; do not jerk or use excessive momentum.',
      'If you feel lower back pain, keep your feet on the floor.'
    ],
    modifications: {
      beginner: 'Keep your feet on the floor for more stability.',
      advanced: 'Hold a weight (dumbbell, medicine ball) or perform with straight legs for increased difficulty.',
      equipment_alternatives: {
        'Cable Machine': 'Cable Wood Chop',
        'medicine-ball': 'Medicine ball Russian twist'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Balance on sit bones, feet lifted (or on floor).',
        'Lean back slightly, core engaged.',
        'Hands clasped or holding light weight at chest.'
      ],
      execution: [
        'Twist from your core, not just your arms.',
        'Touch hands to the floor on each side (or as far as comfortable).',
        'Keep shoulders down and back.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum instead of core control.',
        'Not twisting enough from the torso.'
      ],
      breathing: 'Breathe naturally, or exhale with each twist.'
    }
  },

  'leg-raise': {
    id: 'leg-raise',
    name: 'Leg Raise',
    category: 'core',
    equipment: [],
    muscleGroups: ['Lower Abdominals', 'Hip Flexors'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your legs straight and hands placed under your lower back for support (optional).',
      'Keep your lower back pressed into the floor throughout the movement.',
      'Slowly raise your legs towards the ceiling until they are perpendicular to the floor or as high as you can without arching your back.',
      'Pause briefly at the top, then slowly lower your legs back down towards the floor.',
      'Stop just before your heels touch the floor to maintain tension on your abs, then raise them again.'
    ],
    safetyNotes: [
      'Ensure your lower back remains pressed into the floor; do not let it arch.',
      'Control the descent of your legs; do not let them drop quickly.',
      'If you feel lower back pain, reduce the range of motion or bend your knees slightly.'
    ],
    modifications: {
      beginner: 'Perform with knees bent (Bent Knee Leg Raise), or only lower legs halfway down.',
      advanced: 'Perform with a slower eccentric (lowering) phase, or add ankle weights.',
      equipment_alternatives: {
        'Pull-up Bar': 'Hanging Leg Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat, lower back pressed into floor.',
        'Hands under lower back (optional) or by sides.',
        'Legs straight or slightly bent at knees.'
      ],
      execution: [
        'Raise legs slowly and with control.',
        'Focus on using lower abs, not hip flexors predominantly.',
        'Control the lowering phase, stopping just before touching floor.'
      ],
      common_mistakes: [
        'Arching the lower back off the floor.',
        'Lowering legs too quickly.',
        'Using momentum to swing legs up.'
      ],
      breathing: 'Exhale as you raise your legs, inhale as you lower them.'
    }
  },

  'bicycle-crunch': {
    id: 'bicycle-crunch',
    name: 'Bicycle Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: ['Abdominals (Rectus Abdominis)', 'Obliques', 'Hip Flexors'],
    difficulty: 3,
    instructions: [
      'Lie on your back with your hands lightly behind your head, elbows wide.',
      'Lift your head, neck, and shoulders off the floor, engaging your core.',
      'Bring one knee towards your chest while simultaneously twisting your torso to bring the opposite elbow towards that knee.',
      'Extend the other leg straight out, hovering it above the floor.',
      'Alternate sides in a continuous, cycling motion, bringing the opposite knee and elbow together while extending the other leg.'
    ],
    safetyNotes: [
      'Avoid pulling on your neck; keep your core engaged to lift your upper body.',
      'Maintain control throughout the movement; do not rush or use momentum.',
      'Keep your lower back pressed into the floor as much as possible.'
    ],
    modifications: {
      beginner: 'Perform with feet on the floor, alternating knee to elbow without extending the other leg fully. Reduce the speed.',
      advanced: 'Perform slower for increased time under tension, or add ankle weights.',
      equipment_alternatives: {
        'Standing': 'Standing Bicycle Crunch'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on back, hands behind head, elbows wide.',
        'Lift head/shoulders slightly off floor, engage core.',
        'Legs bent, feet off floor.'
      ],
      execution: [
        'Twist torso, bringing opposite elbow to knee.',
        'Extend other leg fully, hovering it.',
        'Maintain controlled, fluid cycling motion.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Rushing the movement, losing control.',
        'Allowing lower back to arch off the floor.'
      ],
      breathing: 'Exhale as elbow meets knee, inhale as you switch sides.'
    }
  },

  'dead-bug': {
    id: 'dead-bug',
    name: 'Dead Bug',
    category: 'core',
    equipment: [],
    muscleGroups: ['Deep Core Stabilizers (Transverse Abdominis)', 'Abdominals', 'Hip Flexors'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your arms extended straight up towards the ceiling and your knees bent at a 90-degree angle, directly over your hips.',
      'Press your lower back firmly into the floor throughout the entire exercise.',
      'Slowly extend your right arm straight back overhead towards the floor while simultaneously extending your left leg straight out towards the floor.',
      'Keep both the extended arm and leg hovering just above the floor.',
      'Slowly return your right arm and left leg to the starting position, then repeat on the opposite side (left arm, right leg).'
    ],
    safetyNotes: [
      'The most crucial safety note is to keep your lower back pressed into the floor. If it arches, reduce the range of motion.',
      'Perform slowly and with control; this is not a fast or explosive movement.',
      'Stop if you feel any discomfort in your lower back.'
    ],
    modifications: {
      beginner: 'Perform with only leg extensions (keeping arms up), or only arm extensions (keeping legs still). Keep knees more bent.',
      advanced: 'Add light ankle or wrist weights, or perform with a resistance band around your feet.',
      equipment_alternatives: {
        'Hands and Knees': 'Bird-Dog'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie flat, lower back pressed into floor.',
        'Arms up, knees over hips, shins parallel to floor.',
        'Engage core before starting movement.'
      ],
      execution: [
        'Extend opposite arm and leg slowly and simultaneously.',
        'Focus on maintaining lower back contact with the floor.',
        'Return to start with control before switching sides.'
      ],
      common_mistakes: [
        'Arching the lower back off the floor.',
        'Moving too quickly and losing control.',
        'Not fully extending arm and leg.'
      ],
      breathing: 'Exhale as you extend arm and leg, inhale as you return to the start.'
    }
  },

  'reverse-crunch': {
    id: 'reverse-crunch',
    name: 'Reverse Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: ['Lower Abdominals'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your knees bent at a 90-degree angle and feet off the floor.',
      'Place your hands by your sides, palms down, or lightly behind your head.',
      'Engage your lower abdominals and slowly lift your hips off the floor, bringing your knees towards your chest.',
      'Focus on curling your pelvis upwards, using your abs, not just swinging your legs.',
      'Slowly lower your hips back down to the starting position with control, avoiding letting your feet touch the floor.'
    ],
    safetyNotes: [
      'Avoid swinging your legs to generate momentum; focus on controlled abdominal contraction.',
      'Keep your lower back pressed into the floor throughout the movement.',
      'If you feel lower back pain, reduce the range of motion.'
    ],
    modifications: {
      beginner: 'Perform with feet lightly touching the floor between reps, or reduce the height of the hip lift.',
      advanced: 'Add a medicine ball between your knees, or perform on a decline bench.',
      equipment_alternatives: {
        'Focus on lowering': 'Leg Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie flat, knees bent at 90 degrees, feet off floor.',
        'Hands by sides or lightly behind head.',
        'Engage lower abs before lifting.'
      ],
      execution: [
        'Lift hips by curling pelvis towards chest.',
        'Squeeze lower abs at the top.',
        'Lower hips slowly and with control.'
      ],
      common_mistakes: [
        'Swinging legs to generate momentum.',
        'Arching the lower back.',
        'Not fully engaging the lower abs to lift hips.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'oblique-crunch': {
    id: 'oblique-crunch',
    name: 'Oblique Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: ['Obliques'],
    difficulty: 2,
    instructions: [
      'Lie on your back with your knees bent and feet flat on the floor, hip-width apart.',
      'Place your hands lightly behind your head, elbows wide.',
      'Cross one ankle over the opposite knee (e.g., right ankle over left knee).',
      'Engage your core and slowly lift your head, neck, and shoulders off the floor, twisting your torso to bring the opposite elbow towards the elevated knee (e.g., left elbow to right knee).',
      'Focus on contracting your oblique muscles, not pulling with your neck.',
      'Slowly lower back down to the starting position with control, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Avoid pulling on your neck with your hands; use your core to lift and twist.',
      'Do not lift your entire back off the floor; only your shoulder blades should lift.',
      'Maintain a natural curve in your lower back; do not press it flat into the floor excessively.'
    ],
    modifications: {
      beginner: 'Keep both feet flat on the floor and simply twist the torso without crossing legs. Reduce the range of motion.',
      advanced: 'Perform with feet elevated (e.g., on a bench), or add a light weight to your chest.',
      equipment_alternatives: {
        'Cable Machine': 'Cable Wood Chop'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie flat, knees bent, feet flat, one ankle crossed over opposite knee.',
        'Hands gently behind head, elbows wide.',
        'Gaze towards the ceiling, neutral neck.'
      ],
      execution: [
        'Initiate the movement by contracting your obliques to twist.',
        'Lift shoulder blades off the floor, bringing opposite elbow towards knee.',
        'Exhale as you crunch and twist, squeeze at the top.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Using momentum to lift and twist.',
        'Not fully engaging the obliques.'
      ],
      breathing: 'Exhale as you crunch and twist, inhale as you lower down.'
    }
  },

  // CARDIO EXERCISES
  'jumping-jacks': {
    id: 'jumping-jacks',
    name: 'Jumping Jacks',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['full-body', 'cardiovascular'],
    difficulty: 1,
    instructions: [
      'Start standing with feet together, arms at sides',
      'Jump feet apart while raising arms overhead',
      'Jump back to starting position',
      'Maintain steady rhythm'
    ],
    modifications: {
      beginner: 'Step-touch with arm raises (low impact)',
      advanced: 'Star jumps or cross-body jacks',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 25,
      unit: 'reps'
    },
    coaching: {
      setup: ['Light on feet', 'Soft landing'],
      execution: ['Full range of motion', 'Steady rhythm', 'Land softly'],
      common_mistakes: ['Heavy landing', 'Incomplete arm movement'],
      breathing: 'Breathe rhythmically with movement'
    }
  },

  'burpee': {
    id: 'burpee',
    name: 'Burpee',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['full-body', 'cardiovascular'],
    difficulty: 4,
    instructions: [
      'Start standing, feet shoulder-width apart',
      'Squat down and place hands on floor',
      'Jump feet back to plank position',
      'Perform push-up (optional)',
      'Jump feet back to squat position',
      'Explode up with arms overhead'
    ],
    modifications: {
      beginner: 'Step back instead of jumping, omit push-up',
      advanced: 'Add push-up, tuck jump, or single-arm burpee',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 15,
      unit: 'reps'
    },
    coaching: {
      setup: ['Start tall', 'Engage core'],
      execution: ['Smooth transitions', 'Land softly', 'Full extension at top'],
      common_mistakes: ['Sloppy form when tired', 'Hard landings', 'Incomplete range'],
      breathing: 'Breathe rhythmically throughout'
    }
  },

  'mountain-climber': {
    id: 'mountain-climber',
    name: 'Mountain Climber',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['core', 'shoulders', 'hip-flexors', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Start in plank position',
      'Bring one knee toward chest',
      'Quickly switch legs, bringing other knee to chest',
      'Continue alternating legs rapidly',
      'Maintain plank position throughout'
    ],
    modifications: {
      beginner: 'Slow mountain climbers or incline mountain climbers',
      advanced: 'Cross-body mountain climbers',
      equipment_alternatives: {}
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 20,
      unit: 'reps per leg'
    },
    coaching: {
      setup: ['Strong plank position', 'Hands under shoulders'],
      execution: ['Quick leg switches', 'Maintain plank', 'Drive knees to chest'],
      common_mistakes: ['Hips too high', 'Hands moving', 'Slow tempo'],
      breathing: 'Quick, rhythmic breathing'
    }
  },

  // ===== BACK EXERCISES =====
  'lat-pulldown': {
    id: 'lat-pulldown',
    name: 'Lat Pulldown',
    category: 'strength',
    equipment: ['Lat Pulldown Machine'],
    muscleGroups: ['Back (Latissimus Dorsi)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Sit on the lat pulldown machine, adjusting the knee pad to secure your thighs under it.',
      'Grasp the bar with a wide, overhand grip, hands slightly wider than shoulder-width apart.',
      'Lean back slightly (about 10-20 degrees), keeping your chest up and core engaged.',
      'Pull the bar down towards your upper chest, squeezing your shoulder blades together and driving your elbows down towards your hips.',
      'Slowly release the bar back up to the starting position, controlling the eccentric phase and allowing a full stretch in your lats.'
    ],
    safetyNotes: [
      'Do not lean back excessively or use momentum to pull the weight down.',
      'Maintain a controlled movement; do not let the weight stack slam down.',
      'Avoid shrugging your shoulders up towards your ears; keep them depressed.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Focus on feeling the lats work.',
      advanced: 'Increase the weight, or incorporate a pause at the bottom contraction. Use different grip attachments (e.g., close grip, neutral grip).',
      equipment_alternatives: {
        'Lat Pulldown Machine': 'Pull Up (bodyweight)',
        'dumbbells': 'Dumbbell Pullover'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 15,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Secure knees under pad, grasp bar wide overhand.',
        'Lean back slightly, chest up, core braced.',
        'Shoulders depressed, ready to pull.'
      ],
      execution: [
        'Drive elbows down, squeezing shoulder blades together.',
        'Pull bar to upper chest, feeling lats contract.',
        'Control the ascent, allowing full lat stretch.'
      ],
      common_mistakes: [
        'Using too much momentum or body swing.',
        'Shrugging shoulders instead of depressing them.',
        'Not getting a full stretch at the top.'
      ],
      breathing: 'Exhale as you pull the bar down, inhale as you release it up.'
    }
  },

  'dumbbell-row': {
    id: 'dumbbell-row',
    name: 'Dumbbell Row',
    category: 'strength',
    equipment: ['dumbbells', 'bench'],
    muscleGroups: ['Back (Latissimus Dorsi)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Place a dumbbell on one side of a flat bench. Place your opposite knee and hand on the bench for support, keeping your back flat.',
      'Grasp the dumbbell with an overhand grip, allowing it to hang straight down towards the floor, arm fully extended.',
      'Keeping your back straight and core engaged, pull the dumbbell upwards towards your hip, driving your elbow towards the ceiling.',
      'Squeeze your back muscles at the top of the movement.',
      'Slowly lower the dumbbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Do not twist your torso excessively; focus on pulling with your back muscles.',
      'Use a weight you can control; avoid jerking the dumbbell up.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbell and focus on feeling the back muscles work. Perform with both feet on the floor for more stability.',
      advanced: 'Increase the weight, or perform with a slower eccentric phase and a pause at the top contraction.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Row',
        'cable-machine': 'Cable Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Knee and hand on bench, back flat, core braced.',
        'Dumbbell hanging straight down, arm extended.',
        'Shoulder of working arm relaxed, ready to pull.'
      ],
      execution: [
        'Pull dumbbell to hip, driving elbow up and back.',
        'Squeeze shoulder blade and lat at the top.',
        'Control the descent, feeling the stretch in the lat.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Twisting the torso too much.',
        'Using momentum instead of muscle control.'
      ],
      breathing: 'Exhale as you pull the dumbbell up, inhale as you lower it down.'
    }
  },

  'cable-row': {
    id: 'cable-row',
    name: 'Cable Row',
    category: 'strength',
    equipment: ['cable-machine'],
    muscleGroups: ['Back (Rhomboids, Trapezius, Latissimus Dorsi)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Sit on the bench of a cable row machine, placing your feet firmly on the footplate.',
      'Grasp the handle attachment (e.g., V-bar) with both hands, arms extended, leaning slightly forward.',
      'Keep your back straight and chest up. Pull the handle towards your lower abdomen/upper waist, squeezing your shoulder blades together.',
      'Drive your elbows back and keep them close to your body.',
      'Slowly release the handle back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Avoid rounding your lower back; maintain a slight arch or neutral spine.',
      'Do not lean back excessively or use momentum to pull the weight.',
      'Control the eccentric phase; do not let the weight stack pull you forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on feeling the back muscles contract. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction. Use different grip attachments to vary muscle emphasis.',
      equipment_alternatives: {
        'cable-machine': 'Dumbbell Row',
        'barbell': 'Barbell Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 15,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit tall, feet on footplate, grip handle.',
        'Back straight, chest up, slight forward lean.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull handle to lower abs, squeezing shoulder blades together.',
        'Drive elbows back, keeping them close to torso.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using too much body swing or momentum.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handle, inhale as you release it.'
    }
  },

  'dumbbell-bent-over-row': {
    id: 'dumbbell-bent-over-row',
    name: 'Dumbbell Bent Over Row',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand, palms facing each other (neutral grip).',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor.',
      'Allow the dumbbells to hang straight down towards the floor, with a slight bend in your elbows.',
      'Keeping your back straight, pull the dumbbells upwards towards your chest, driving your elbows towards the ceiling and squeezing your shoulder blades together.',
      'Slowly lower the dumbbells back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine, especially in the lower back.',
      'Use a weight you can control; avoid jerking the dumbbells up or using momentum.',
      'Keep your core engaged to protect your spine.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on mastering the hip hinge and feeling the back muscles work. Perform one arm at a time with bench support (Dumbbell Row).',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform with a pronated grip to target different back muscles.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Bent Over Row',
        'machine': 'Machine Row'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Dumbbells hanging, neutral grip, slight elbow bend.',
        'Gaze down to maintain neutral neck.'
      ],
      execution: [
        'Pull dumbbells to chest, driving elbows up and back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum to swing the weights.',
        'Not keeping the torso stable.'
      ],
      breathing: 'Exhale as you pull the dumbbells up, inhale as you lower them.'
    }
  },

  'bent-over-barbell-row': {
    id: 'bent-over-barbell-row',
    name: 'Bent Over Barbell Row',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Forearms'],
    difficulty: 3,
    instructions: [
      'Stand with feet hip-width apart, holding a barbell with an overhand grip, hands slightly wider than shoulder-width.',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor.',
      'Allow the barbell to hang straight down towards the floor, with a slight bend in your knees.',
      'Keeping your back straight, pull the barbell upwards towards your upper abdomen, driving your elbows towards the ceiling and squeezing your shoulder blades together.',
      'Slowly lower the barbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; rounding your spine can lead to serious injury.',
      'Use a weight you can control; avoid jerking the barbell up or using momentum.',
      'Keep your core engaged to protect your spine.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Bent Over Row) to master the hip hinge and back contraction.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Use a supinated (underhand) grip to emphasize biceps and lower lats.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'cable-machine': 'Cable Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Barbell hanging, overhand grip, slight knee bend.',
        'Gaze down to maintain neutral neck.'
      ],
      execution: [
        'Pull barbell to upper abdomen, driving elbows up and back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum to swing the weight.',
        'Not keeping the torso stable.'
      ],
      breathing: 'Exhale as you pull the barbell up, inhale as you lower it down.'
    }
  },

  'kettlebell-row': {
    id: 'kettlebell-row',
    name: 'Kettlebell Row',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart, holding a kettlebell in one hand, palms facing your body (neutral grip).',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor, allowing the kettlebell to hang straight down.',
      'Place your non-working hand on a bench or your knee for support (optional).',
      'Keeping your back straight, pull the kettlebell upwards towards your hip, driving your elbow towards the ceiling and squeezing your shoulder blade.',
      'Slowly lower the kettlebell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine, especially in the lower back.',
      'Use a weight you can control; avoid jerking the kettlebell up or using momentum.',
      'Keep your core engaged to protect your spine.'
    ],
    modifications: {
      beginner: 'Use lighter kettlebell and focus on feeling the back muscles work. Perform with both feet on the floor and both hands on a bench for support.',
      advanced: 'Increase the weight, or incorporate a slower eccentric phase and a pause at the top contraction. Perform without additional support.',
      equipment_alternatives: {
        'kettlebells': 'Dumbbell Row',
        'cable-machine': 'Cable Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Kettlebell hanging straight down, neutral grip.',
        'Non-working hand on support (optional), ready to pull.'
      ],
      execution: [
        'Pull kettlebell to hip, driving elbow up and back.',
        'Squeeze shoulder blade and lat at the top.',
        'Control the descent, feeling the stretch in the lat.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Twisting the torso too much.',
        'Using momentum instead of muscle control.'
      ],
      breathing: 'Exhale as you pull the kettlebell up, inhale as you lower it down.'
    }
  },

  'landmine-row': {
    id: 'landmine-row',
    name: 'Landmine Row',
    category: 'strength',
    equipment: ['barbell', 'landmine-attachment'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Insert one end of a barbell into a landmine attachment or securely wedge it into a corner of a wall.',
      'Stand straddling the barbell, facing the anchored end, with feet hip-width apart and knees slightly bent.',
      'Hinge forward at your hips, keeping your back straight, and grasp the free end of the barbell with one or both hands (V-bar attachment can be used).',
      'Pull the barbell upwards towards your chest/abdomen, driving your elbows back and squeezing your shoulder blades together.',
      'Slowly lower the barbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Ensure the barbell is securely anchored to prevent it from slipping.',
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Use a weight you can control; avoid jerking the barbell up or using momentum.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on feeling the back muscles work. Perform with both hands for more stability.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-arm landmine rows for unilateral focus.',
      equipment_alternatives: {
        'landmine-attachment': 'Dumbbell Row',
        'cable-machine': 'Cable Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell anchored, straddle it, feet hip-width, knees bent.',
        'Hinge at hips, flat back, grip barbell end.',
        'Core braced, ready to pull.'
      ],
      execution: [
        'Pull barbell to chest/abdomen, driving elbows back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Using momentum to swing the weight.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the barbell up, inhale as you lower it down.'
    }
  },

  'machine-row': {
    id: 'machine-row',
    name: 'Machine Row',
    category: 'strength',
    equipment: ['row-machine'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps'],
    difficulty: 1,
    instructions: [
      'Adjust the seat height and chest pad (if applicable) so you are comfortably positioned with your chest against the pad and feet on the footplate.',
      'Grasp the handles with a neutral grip (palms facing each other) or overhand grip, arms extended.',
      'Keep your back straight and chest up. Pull the handles towards your lower abdomen/upper waist, squeezing your shoulder blades together.',
      'Drive your elbows back and keep them close to your body.',
      'Slowly release the handles back to the starting position, controlling the weight stack and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your back flat against the pad; avoid rounding or excessive arching.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Use different grip attachments to vary muscle emphasis.',
      equipment_alternatives: {
        'row-machine': 'Cable Row',
        'dumbbells': 'Dumbbell Row'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, chest against pad (if applicable).',
        'Grip handles, arms extended, back straight, chest up.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull handles to lower abs, squeezing shoulder blades together.',
        'Drive elbows back, keeping them close to torso.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Using too much weight and pulling with arms only.',
        'Rounding the back or shrugging shoulders.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handles, inhale as you release them.'
    }
  },

  'hammerstrength-high-row': {
    id: 'hammerstrength-high-row',
    name: 'Hammerstrength High Row',
    category: 'strength',
    equipment: ['hammerstrength-machine'],
    muscleGroups: ['Back (Upper Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps'],
    difficulty: 2,
    instructions: [
      'Adjust the seat height so the handles are at chest height or slightly above when seated.',
      'Sit firmly against the back pad, grasping the handles with a neutral grip (palms facing each other) or overhand grip.',
      'Keep your chest up and core engaged. Pull the handles downwards and towards your upper chest/face, driving your elbows back and wide.',
      'Squeeze your upper back and lats at the peak contraction.',
      'Slowly return the handles to the starting position, controlling the weight stack and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your back flat against the pad; avoid rounding or excessive arching.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Use a single arm for unilateral focus.',
      equipment_alternatives: {
        'hammerstrength-machine': 'Lat Pulldown',
        'cable-machine': 'Cable Face Pull'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, chest up.',
        'Grip handles, arms extended, back straight.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull handles towards upper chest, driving elbows back and wide.',
        'Squeeze upper back and lats forcefully.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Using too much weight and pulling with arms only.',
        'Rounding the back or shrugging shoulders.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handles, inhale as you release them.'
    }
  },

  'hammerstrength-iso-row': {
    id: 'hammerstrength-iso-row',
    name: 'Hammerstrength Iso Row',
    category: 'strength',
    equipment: ['hammerstrength-machine'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps'],
    difficulty: 2,
    instructions: [
      'Adjust the seat height so the handles are at mid-chest level when seated.',
      'Sit firmly against the back pad, grasping one handle with a neutral grip (palms facing each other) or overhand grip, arm extended.',
      'Keep your chest up and core engaged. Pull the handle towards your hip/lower abdomen, driving your elbow back.',
      'Squeeze your back muscles and shoulder blade at the peak contraction.',
      'Slowly return the handle to the starting position, controlling the weight stack and allowing a full stretch in your back, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your back flat against the pad; avoid rounding or excessive arching.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if necessary.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Perform with a different grip variation.',
      equipment_alternatives: {
        'hammerstrength-machine': 'Dumbbell Row',
        'cable-machine': 'Cable Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, chest up.',
        'Grip one handle, arm extended, back straight.',
        'Shoulder relaxed, ready to pull.'
      ],
      execution: [
        'Pull handle to hip/lower abdomen, driving elbow back.',
        'Squeeze shoulder blade and lat forcefully.',
        'Control the return, feeling the stretch in the back.'
      ],
      common_mistakes: [
        'Using too much weight and pulling with arm only.',
        'Rounding the back or shrugging shoulder.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handle, inhale as you release it.'
    }
  },

  'incline-dumbbell-row': {
    id: 'incline-dumbbell-row',
    name: 'Incline Dumbbell Row',
    category: 'strength',
    equipment: ['dumbbells', 'incline-bench'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Shoulders (Rear Deltoids)'],
    difficulty: 2,
    instructions: [
      'Set an adjustable bench to a low incline (e.g., 30-45 degrees).',
      'Lie face down on the bench with a dumbbell in each hand, palms facing each other (neutral grip), arms hanging straight down towards the floor.',
      'Keep your chest pressed against the bench and your core engaged.',
      'Pull the dumbbells upwards towards your chest/hips, driving your elbows towards the ceiling and squeezing your shoulder blades together.',
      'Slowly lower the dumbbells back to the starting position, controlling the eccentric phase and allowing a full stretch in your back.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid jerking the dumbbells up or using momentum.',
      'Keep your chest pressed against the bench to prevent lower back strain.',
      'Control the movement; do not let the dumbbells drop quickly.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on feeling the back muscles work. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform with a pronated grip to target different back muscles.',
      equipment_alternatives: {
        'dumbbells': 'Cable Row (seated)',
        'machine': 'Machine Row'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie prone on incline bench, dumbbells hanging, neutral grip.',
        'Chest pressed against bench, core braced.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull dumbbells to chest/hips, driving elbows up and back.',
        'Squeeze shoulder blades together and feel back contract.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Lifting chest off the bench.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the dumbbells up, inhale as you lower them.'
    }
  },

  'shotgun-row': {
    id: 'shotgun-row',
    name: 'Shotgun Row',
    category: 'strength',
    equipment: ['cable-machine', 'd-handle'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids)', 'Biceps'],
    difficulty: 2,
    instructions: [
      'Attach a D-handle to a low pulley on a cable machine.',
      'Stand facing the machine at a slight angle, with one foot forward for stability, and grasp the handle with one hand.',
      'Lean back slightly from your hips, keeping your back straight and core engaged.',
      'Pull the handle towards your chest, rotating your wrist so your palm faces your body at the end of the movement, squeezing your shoulder blade.',
      'Slowly release the handle back to the starting position, controlling the eccentric phase and allowing a full stretch in your back, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid jerking the handle or using excessive momentum.',
      'Maintain a stable torso; avoid excessive leaning or twisting.',
      'Control the eccentric phase; do not let the cable pull you forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on feeling the back muscles work. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Use a higher pulley setting to change the angle of pull.',
      equipment_alternatives: {
        'cable-machine': 'Dumbbell Row (single arm)',
        'resistance-bands': 'Resistance Band Row (single arm)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Stand at slight angle, one foot forward, grip handle.',
        'Slight lean back from hips, back straight, core braced.',
        'Shoulder relaxed, ready to pull.'
      ],
      execution: [
        'Pull handle to chest, rotating wrist, squeezing shoulder blade.',
        'Focus on back contraction, not just arm pull.',
        'Control the return, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the body.',
        'Rounding the back.',
        'Not getting a full stretch or contraction.'
      ],
      breathing: 'Exhale as you pull the handle, inhale as you release it.'
    }
  },

  'kettlebell-alternating-row': {
    id: 'kettlebell-alternating-row',
    name: 'Kettlebell Alternating Row',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['Back (Latissimus Dorsi, Rhomboids, Trapezius)', 'Biceps', 'Core (stabilizer)'],
    difficulty: 3,
    instructions: [
      'Place two kettlebells on the floor in front of you, shoulder-width apart.',
      'Hinge forward at your hips, keeping your back straight and core engaged, grasping both kettlebells with a neutral grip (palms facing each other).',
      'Maintain a stable torso and pull one kettlebell upwards towards your hip, driving your elbow towards the ceiling and squeezing your shoulder blade.',
      'Slowly lower that kettlebell back to the floor, then immediately pull the other kettlebell upwards, alternating sides in a controlled manner.',
      'Keep your hips and torso as still as possible throughout the alternating movement.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Use a weight you can control; avoid jerking the kettlebells up or using momentum.',
      'Keep your core strongly engaged to prevent torso rotation and lower back strain.'
    ],
    modifications: {
      beginner: 'Use lighter kettlebells. Perform one arm at a time, resting the non-working hand on a bench for support (Kettlebell Row).',
      advanced: 'Increase the weight, or perform with a slower eccentric phase and a pause at the top contraction.',
      equipment_alternatives: {
        'kettlebells': 'Dumbbells (Alternating Dumbbell Row)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per arm'
    },
    coaching: {
      setup: [
        'Kettlebells on floor, hinge at hips, flat back, grip both.',
        'Core braced, gaze down, neutral neck.',
        'Shoulders relaxed, ready to pull.'
      ],
      execution: [
        'Pull one kettlebell to hip, driving elbow up and back.',
        'Squeeze shoulder blade and lat at the top.',
        'Control the descent, then immediately pull the other side.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Excessive torso rotation or swinging.',
        'Using momentum instead of muscle control.'
      ],
      breathing: 'Exhale with each pull, inhale as you lower.'
    }
  },

  // ===== HAMSTRING EXERCISES =====
  'seated-leg-curl': {
    id: 'seated-leg-curl',
    name: 'Seated Leg Curl',
    category: 'strength',
    equipment: ['seated-leg-curl-machine'],
    muscleGroups: ['Hamstrings'],
    difficulty: 1,
    instructions: [
      'Adjust the machine so your knees are aligned with the pivot point and the shin pad rests comfortably above your ankles.',
      'Sit firmly in the seat, gripping the handles for stability.',
      'Engage your hamstrings to curl your heels towards your glutes, pulling the shin pad down.',
      'Squeeze your hamstrings at the peak contraction.',
      'Slowly return the weight to the starting position, controlling the eccentric movement and allowing a full stretch in your hamstrings.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on hamstring isolation.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your hips firmly on the seat; avoid lifting them during the curl.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'seated-leg-curl-machine': 'Lying Hamstring Curl Machine',
        'stability-ball': 'Stability Ball Hamstring Curl'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Align knees with pivot, shin pad above ankles.',
        'Sit firmly, grip handles, back pressed against pad.',
        'Ensure a full range of motion is possible.'
      ],
      execution: [
        'Focus on curling heels towards glutes using hamstrings.',
        'Squeeze hamstrings forcefully at the bottom.',
        'Control the return, resisting the weight stack.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the legs.',
        'Lifting hips off the seat.',
        'Not allowing a full stretch at the top.'
      ],
      breathing: 'Exhale as you curl, inhale as you return to the start.'
    }
  },

  'dumbbell-romanian-deadlift': {
    id: 'dumbbell-romanian-deadlift',
    name: 'Dumbbell Romanian Deadlift',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart, holding a dumbbell in each hand in front of your thighs, palms facing your body.',
      'Keep a slight bend in your knees throughout the entire movement.',
      'Hinge at your hips, pushing your glutes back as the dumbbells descend along your shins, keeping your back straight.',
      'Lower the dumbbells until you feel a strong stretch in your hamstrings, typically just below your knees or mid-shin.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a straight back; avoid rounding your spine, especially in the lower back.',
      'Do not go lower than your flexibility allows; stop when you feel a strong hamstring stretch.',
      'Keep the dumbbells close to your body throughout the movement.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on mastering the hip hinge movement pattern. Reduce the range of motion.',
      advanced: 'Increase the weight, or perform on one leg (Single Leg Romanian Deadlift) for increased stability challenge.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Romanian Deadlift',
        'kettlebells': 'Kettlebell Romanian Deadlift'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 5,
      unit: 'kg per dumbbell'
    },
    coaching: {
      setup: [
        'Feet hip-width, slight knee bend.',
        'Dumbbells in front of thighs, shoulders back and down.',
        'Brace core, maintain neutral spine.'
      ],
      execution: [
        'Initiate by pushing hips back, not bending knees forward.',
        'Keep dumbbells close to legs as they descend.',
        'Feel stretch in hamstrings, squeeze glutes to stand up.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Squatting down instead of hinging at hips.',
        'Letting dumbbells drift away from the body.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'romanian-deadlift': {
    id: 'romanian-deadlift',
    name: 'Romanian Deadlift (Barbell)',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 3,
    instructions: [
      'Stand with your feet hip-width apart, holding a barbell in front of your thighs with an overhand grip, hands slightly wider than shoulder-width.',
      'Keep a slight bend in your knees throughout the entire movement, but do not squat down.',
      'Hinge at your hips, pushing your glutes back as the barbell descends along your thighs, keeping your back straight.',
      'Lower the barbell until you feel a strong stretch in your hamstrings, typically just below your knees or mid-shin.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; rounding your back can lead to injury.',
      'Do not go lower than your flexibility allows; stop when you feel a strong hamstring stretch.',
      'Keep the barbell close to your body throughout the movement.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Romanian Deadlift) to master the hip hinge.',
      advanced: 'Increase the weight, or perform with a pause at the bottom of the movement.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'kettlebells': 'Kettlebell'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Feet hip-width, slight knee bend.',
        'Barbell in front of thighs, shoulders back and down.',
        'Brace core, maintain neutral spine.'
      ],
      execution: [
        'Initiate by pushing hips back, not bending knees forward.',
        'Keep barbell close to legs as it descends.',
        'Feel stretch in hamstrings, squeeze glutes to stand up.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Squatting down instead of hinging at hips.',
        'Letting the barbell drift away from the body.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'lying-hamstrings-curl': {
    id: 'lying-hamstrings-curl',
    name: 'Lying Hamstrings Curl',
    category: 'strength',
    equipment: ['lying-leg-curl-machine'],
    muscleGroups: ['Hamstrings'],
    difficulty: 1,
    instructions: [
      'Lie face down on the machine, positioning your Achilles tendons just below the padded lever.',
      'Adjust the machine so your knees are just off the edge of the bench, aligned with the pivot point.',
      'Grasp the handles for stability.',
      'Engage your hamstrings to curl your heels towards your glutes, pulling the shin pad upwards.',
      'Squeeze your hamstrings at the peak contraction.',
      'Slowly return the weight to the starting position, controlling the eccentric movement and allowing a full stretch in your hamstrings.'
    ],
    safetyNotes: [
      'Do not use excessive weight that causes your hips to lift off the bench.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Ensure your knees are properly aligned with the machine\'s pivot point.'
    ],
    modifications: {
      beginner: 'Use lighter weight to focus on mastering the form and mind-muscle connection.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'lying-leg-curl-machine': 'Seated Leg Curl Machine',
        'stability-ball': 'Stability Ball Hamstring Curl'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Lie prone, Achilles tendons under pad, knees off bench.',
        'Align knees with pivot, grip handles.',
        'Ensure full stretch at start.'
      ],
      execution: [
        'Curl heels to glutes using hamstrings, not lower back.',
        'Squeeze hamstrings forcefully at the top.',
        'Control the return, resisting the weight stack.'
      ],
      common_mistakes: [
        'Lifting hips off the bench.',
        'Using momentum to swing the legs.',
        'Not allowing a full stretch at the top.'
      ],
      breathing: 'Exhale as you curl, inhale as you return to the start.'
    }
  },

  'single-leg-romanian-deadlift': {
    id: 'single-leg-romanian-deadlift',
    name: 'Single Leg Romanian Deadlift',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back', 'Core (stabilizer)'],
    difficulty: 3,
    instructions: [
      'Stand tall with feet hip-width apart, holding a dumbbell in one hand (opposite to the standing leg) or no weight.',
      'Shift your weight onto one leg, keeping a slight bend in that knee.',
      'Hinge at your hip, extending the non-standing leg straight back behind you for balance, while lowering your torso and the dumbbell towards the floor.',
      'Keep your back straight and core engaged throughout the movement, forming a straight line from your head to the extended heel.',
      'Engage your glute and hamstring of the standing leg to pull your torso back up to the starting position, squeezing your glute at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; avoid rounding your spine.',
      'Focus on balance and control; it\'s better to use no weight or light weight and maintain good form.',
      'Stop the descent when you feel a strong stretch in the hamstring of the standing leg, or before your back rounds.'
    ],
    modifications: {
      beginner: 'Perform without weight, or hold onto a stable support (wall, chair) for balance.',
      advanced: 'Increase the weight, or perform with a barbell for increased challenge.',
      equipment_alternatives: {
        'dumbbells': 'Kettlebell',
        'bodyweight': 'Bodyweight (no weight)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Shift weight to one leg, slight knee bend.',
        'Shoulders back and down, core braced.',
        'Gaze forward, neutral neck.'
      ],
      execution: [
        'Hinge at hip, extending opposite leg back for counterbalance.',
        'Keep back flat, lower torso and weight with control.',
        'Squeeze glute and hamstring of standing leg to return to start.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Losing balance and falling over.',
        'Bending the standing knee too much, turning it into a squat.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  'good-morning': {
    id: 'good-morning',
    name: 'Good Morning',
    category: 'strength',
    equipment: ['barbell', 'squat-rack'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 3,
    instructions: [
      'Place a barbell on your upper back, similar to a high-bar squat position, in a squat rack (optional).',
      'Stand with feet hip-width apart, knees slightly bent (micro-bend).',
      'Keeping your back straight and core engaged, slowly hinge forward at your hips, pushing your glutes back.',
      'Lower your torso until it is nearly parallel to the floor, or until you feel a strong stretch in your hamstrings.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; rounding your back can lead to serious injury.',
      'Use light weight, especially when learning, as this exercise places significant stress on the lower back.',
      'Do not go lower than your hamstring flexibility allows; stop when you feel a strong stretch.'
    ],
    modifications: {
      beginner: 'Perform with a broomstick or PVC pipe to master the hip hinge, or use a very light barbell. Perform Dumbbell Romanian Deadlifts first.',
      advanced: 'Increase the weight, or perform with a pause at the bottom of the movement.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'resistance-bands': 'Resistance Band (around neck and under feet)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell on upper back, feet hip-width, slight knee bend.',
        'Shoulders back and down, chest up.',
        'Brace core firmly.'
      ],
      execution: [
        'Initiate by pushing hips back, keeping back flat.',
        'Lower torso with control, feeling hamstring stretch.',
        'Squeeze glutes and hamstrings to return to upright position.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Bending knees excessively, turning it into a squat.',
        'Going too low and losing back integrity.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },

  // ===== GLUTES EXERCISES =====
  'deadlift': {
    id: 'deadlift',
    name: 'Deadlift',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Quads', 'Traps', 'Forearms'],
    difficulty: 4,
    instructions: [
      'Stand with your mid-foot under the barbell. Your shins should be close to the bar.',
      'Bend at your knees and hips to grasp the barbell with an overhand or mixed grip, hands just outside your shins.',
      'Lower your hips, flatten your back, and ensure your chest is up and shoulders are slightly in front of the bar.',
      'Take a deep breath, brace your core, and lift the weight by extending your hips and knees simultaneously, keeping the bar close to your body.',
      'Stand tall at the top, squeezing your glutes, then slowly lower the bar back to the floor with control, reversing the movement.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire lift; rounding your back can lead to serious injury.',
      'Keep the bar as close to your body as possible to maintain leverage.',
      'Always start with light weight to master form before increasing load.'
    ],
    modifications: {
      beginner: 'Perform with lighter weight, or focus on Romanian Deadlifts or Hip Hinges to build foundational strength.',
      advanced: 'Increase the weight, perform deficit deadlifts (standing on a plate), or pause deadlifts.',
      equipment_alternatives: {
        'barbell': 'Trap Bar Deadlift',
        'dumbbells': 'Dumbbell Romanian Deadlift'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 40,
      progressionRate: 2.5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Mid-foot under bar, shins close.',
        'Grip bar, lower hips, chest up, flat back.',
        'Shoulders slightly in front of bar.'
      ],
      execution: [
        'Lift with hips and knees simultaneously, not just back.',
        'Keep bar path vertical and close to body.',
        'Squeeze glutes at the top, avoid hyperextension.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Squatting the weight up (hips rising too fast).',
        'Letting the bar drift away from the body.'
      ],
      breathing: 'Deep breath and brace before lifting, exhale at the top or during the concentric phase.'
    }
  },

  'kettlebell-swing': {
    id: 'kettlebell-swing',
    name: 'Kettlebell Swing (Russian)',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Core', 'Shoulders'],
    difficulty: 3,
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart, kettlebell on the floor in front of you.',
      'Hinge at your hips and grasp the kettlebell with both hands, palms facing you, maintaining a straight back.',
      'Hike the kettlebell back between your legs, loading your glutes and hamstrings.',
      'Explosively drive your hips forward, squeezing your glutes, to swing the kettlebell up to chest or eye level.',
      'Allow the kettlebell to naturally swing back down, hinging at your hips as it descends, and repeat the explosive hip drive.'
    ],
    safetyNotes: [
      'The movement is a hip hinge, not a squat; focus on pushing your hips back, not bending your knees excessively.',
      'Maintain a straight back throughout the entire movement; avoid rounding your spine.',
      'Control the kettlebell; do not let it pull you forward or lose control at the top of the swing.'
    ],
    modifications: {
      beginner: 'Use a lighter kettlebell and focus on mastering the hip hinge movement. Perform Deadlifts or Romanian Deadlifts first.',
      advanced: 'Increase the weight, perform single-arm kettlebell swings, or incorporate a higher swing (American Kettlebell Swing).',
      equipment_alternatives: {
        'kettlebells': 'Dumbbell Swing (less common)',
        'barbell': 'Barbell Romanian Deadlift (less explosive)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet slightly wider than shoulder-width, kettlebell in front.',
        'Hinge at hips, flat back, grip kettlebell.',
        'Shoulders back and down, gaze forward.'
      ],
      execution: [
        'Hike kettlebell back, then explosively drive hips forward.',
        'Squeeze glutes hard at the top of the swing.',
        'Allow kettlebell to swing naturally, control descent.'
      ],
      common_mistakes: [
        'Squatting instead of hinging.',
        'Rounding the back.',
        'Using arms to lift the kettlebell instead of hip drive.'
      ],
      breathing: 'Inhale on the backswing, exhale powerfully as you drive hips forward.'
    }
  },

  'hip-thrust': {
    id: 'hip-thrust',
    name: 'Hip Thrust (Bodyweight)',
    category: 'strength',
    equipment: ['bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Place your arms by your sides on the floor, palms down, for stability.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Control the movement; avoid pushing off the floor too aggressively.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion if needed. Perform with your back on the floor (Glute Bridge).',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance (Dumbbell Hip Thrust/Barbell Hip Thrust). Perform single-leg hip thrusts.',
      equipment_alternatives: {
        'bench': 'Floor (Glute Bridge)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Arms by sides, palms down, core braced.',
        'Gaze forward, ready to lift hips.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'barbell-hip-thrust': {
    id: 'barbell-hip-thrust',
    name: 'Barbell Hip Thrust',
    category: 'strength',
    equipment: ['barbell', 'bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 3,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Roll a padded barbell over your hips, positioning it just below your hip bones.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip. Use a spotter for heavy loads.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Use a pad on the barbell to prevent discomfort on your hips.'
    ],
    modifications: {
      beginner: 'Perform without a barbell (Bodyweight Hip Thrust) or with a dumbbell (Dumbbell Hip Thrust). Use lighter weight to master form.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-leg barbell hip thrusts.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'medicine-ball': 'Medicine Ball'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Padded barbell across hips, hands holding.',
        'Gaze forward, core braced.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'glute-bridge': {
    id: 'glute-bridge',
    name: 'Glute Bridge',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Lie on your back on the floor, with your knees bent and feet flat on the floor, hip-width apart.',
      'Place your arms by your sides, palms down, for stability.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Control the movement; avoid pushing off the floor too aggressively.',
      'Keep your feet flat on the floor throughout the movement.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion if needed. Hold the top position for shorter duration.',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance. Perform single-leg glute bridges.',
      equipment_alternatives: {
        'bodyweight': 'Hip Thrust (with bench)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, knees bent, feet flat hip-width apart.',
        'Arms by sides, palms down, core braced.',
        'Gaze up, ready to lift hips.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'single-leg-glute-bridge': {
    id: 'single-leg-glute-bridge',
    name: 'Single Leg Glute Bridge',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings', 'Core (stabilizer)'],
    difficulty: 2,
    instructions: [
      'Lie on your back on the floor, with your knees bent and feet flat on the floor, hip-width apart.',
      'Extend one leg straight up towards the ceiling, or keep it bent with the foot hovering just above the floor.',
      'Place your arms by your sides, palms down, for stability.',
      'Engage your glute of the planted foot and drive through that heel to lift your hips off the floor until your body forms a straight line from your shoulders to your knee.',
      'Squeeze your glute hard at the top of the movement.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor, then repeat for desired reps before switching legs.'
    ],
    safetyNotes: [
      'Maintain a neutral spine; avoid excessive arching of the lower back at the top.',
      'Control the movement; avoid pushing off the floor too aggressively or letting hips drop quickly.',
      'Keep your hips level; avoid tilting or rotating as you lift.'
    ],
    modifications: {
      beginner: 'Perform a standard Glute Bridge with both feet on the floor. Reduce the range of motion if needed.',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance. Perform with your planted foot elevated on a bench.',
      equipment_alternatives: {
        'bodyweight': 'Dumbbell Romanian Deadlift (single leg)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Lie on back, one knee bent, foot flat, other leg extended/hovering.',
        'Arms by sides, palms down, core braced.',
        'Gaze up, ready to lift hips.'
      ],
      execution: [
        'Drive through planted heel, lift hips by squeezing glute.',
        'Form straight line from shoulders to knee of planted leg at top.',
        'Squeeze glute hard, control descent, keep hips level.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Letting hips drop or tilt to one side.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'side-leg-raises': {
    id: 'side-leg-raises',
    name: 'Side Leg Raises (Side-Lying Hip Abduction)',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Hip Abductors (Gluteus Medius, Minimus)', 'Glutes'],
    difficulty: 1,
    instructions: [
      'Lie on your side with your body in a straight line, supporting your head with your bottom arm or hand.',
      'Place your top hand on the floor in front of your chest for stability (optional).',
      'Keep your top leg straight and slowly lift it directly upwards towards the ceiling, leading with your heel, engaging your outer thigh and glute.',
      'Continue lifting until you feel a strong contraction in your gluteus medius, typically around 45-60 degrees.',
      'Slowly lower the leg back to the starting position, controlling the eccentric phase, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a straight body line; avoid rocking your torso forward or backward.',
      'Control the movement; avoid swinging the leg or using momentum.',
      'Do not lift the leg excessively high if it causes lower back discomfort or hip pinching.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Keep the bottom leg slightly bent for more stability.',
      advanced: 'Add an ankle weight or a loop band around your thighs for increased resistance. Incorporate a pulse at the top.',
      equipment_alternatives: {
        'bodyweight': 'Machine Hip Abductor',
        'cable-machine': 'Cable Hip Abduction'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Lie on side, body straight, head supported.',
        'Top leg straight, bottom leg slightly bent (optional).',
        'Core engaged, ready to lift.'
      ],
      execution: [
        'Lift top leg straight up, leading with heel, using outer glute.',
        'Squeeze gluteus medius at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Rocking the torso forward or backward.',
        'Using momentum to swing the leg.',
        'Not isolating the outer thigh/glute.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower it.'
    }
  },

  // ===== BICEPS EXERCISES =====
  'barbell-curl': {
    id: 'barbell-curl',
    name: 'Barbell Curl',
    category: 'strength',
    equipment: ['barbell'],
    muscleGroups: ['Biceps (Biceps Brachii)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet shoulder-width apart, holding a barbell with an underhand (supinated) grip, hands shoulder-width apart, arms extended in front of your thighs.',
      'Keep your elbows tucked close to your body and your upper arms stationary.',
      'Curl the barbell upwards towards your shoulders, focusing on contracting your biceps.',
      'Squeeze your biceps hard at the top of the movement.',
      'Slowly lower the barbell back down to the starting position, controlling the eccentric phase, until your arms are fully extended.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid swinging your body or using momentum.',
      'Keep your elbows tucked in; avoid flaring them out.',
      'Maintain a stable core; avoid leaning back excessively.'
    ],
    modifications: {
      beginner: 'Use lighter weight or an EZ-bar for wrist comfort. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'barbell': 'Dumbbells',
        'cable-machine': 'Cable Machine (straight bar)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width, barbell with underhand grip.',
        'Elbows tucked close to body, upper arms stationary.',
        'Shoulders back and down, core braced.'
      ],
      execution: [
        'Curl barbell up, focusing on bicep contraction.',
        'Squeeze biceps at the top.',
        'Control the lowering phase, resisting the weight.'
      ],
      common_mistakes: [
        'Swinging the weight or using momentum.',
        'Flaring elbows out.',
        'Not fully extending arms at the bottom.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'dumbbell-curl': {
    id: 'dumbbell-curl',
    name: 'Dumbbell Curl',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Biceps (Biceps Brachii)', 'Forearms'],
    difficulty: 1,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing forward, arms extended by your sides.',
      'Keep your elbows tucked close to your body and your upper arms stationary.',
      'Curl the dumbbells upwards towards your shoulders, focusing on contracting your biceps.',
      'Squeeze your biceps hard at the top of the movement.',
      'Slowly lower the dumbbells back down to the starting position, controlling the eccentric phase, until your arms are fully extended.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid swinging the dumbbells.',
      'Keep your elbows tucked in; avoid flaring them out.',
      'Maintain a stable core throughout the exercise.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on strict form. Perform one arm at a time for better control.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Curl',
        'cable-machine': 'Cable Bicep Curl'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells by sides, palms forward.',
        'Elbows tucked close to body, upper arms stationary.',
        'Shoulders back and down, core braced.'
      ],
      execution: [
        'Curl dumbbells up, focusing on bicep contraction.',
        'Squeeze biceps at the top.',
        'Control the lowering phase, resisting the weight.'
      ],
      common_mistakes: [
        'Swinging the weights or using momentum.',
        'Flaring elbows out.',
        'Not fully extending arms at the bottom.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'hammer-curl': {
    id: 'hammer-curl',
    name: 'Hammer Curl',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Biceps (Brachialis, Brachioradialis)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing each other (neutral grip), arms extended by your sides.',
      'Keep your elbows tucked close to your body and your upper arms stationary.',
      'Curl the dumbbells upwards towards your shoulders, maintaining the neutral grip.',
      'Squeeze your biceps and forearms at the top of the movement.',
      'Slowly lower the dumbbells back down to the starting position, controlling the eccentric phase, until your arms are fully extended.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid swinging the dumbbells.',
      'Keep your upper arms stationary; do not let them swing forward.',
      'Maintain a stable core throughout the exercise.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on strict form. Perform seated to reduce body sway.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Hammer Curl',
        'resistance-bands': 'Resistance Band Hammer Curl'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells in neutral grip by sides.',
        'Elbows tucked close to body, upper arms stationary.',
        'Shoulders back and down, core braced.'
      ],
      execution: [
        'Curl dumbbells up, maintaining neutral grip.',
        'Focus on contracting biceps and forearms.',
        'Control the lowering phase, maintaining tension.'
      ],
      common_mistakes: [
        'Swinging the weights or using momentum.',
        'Letting elbows move forward.',
        'Not fully extending arms at the bottom.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  'preacher-curl': {
    id: 'preacher-curl',
    name: 'Preacher Curl',
    category: 'strength',
    equipment: ['preacher-bench', 'ez-bar'],
    muscleGroups: ['Biceps (Biceps Brachii)', 'Forearms'],
    difficulty: 2,
    instructions: [
      'Adjust the preacher curl bench so your armpits are at the top of the pad when seated, and your upper arms are flat against the pad.',
      'Grasp an EZ bar (or barbell) with an underhand grip, hands shoulder-width apart, arms extended down the pad.',
      'Keeping your upper arms stationary against the pad, curl the bar upwards towards your shoulders, focusing on contracting your biceps.',
      'Squeeze your biceps hard at the top of the movement.',
      'Slowly lower the bar back down to the starting position, controlling the eccentric phase and allowing a full stretch in your biceps.'
    ],
    safetyNotes: [
      'Do not hyperextend your elbows at the bottom of the movement; maintain a slight bend.',
      'Use a weight you can control; avoid jerking the weight up or letting it drop quickly.',
      'Ensure your upper arms remain flat against the pad throughout the exercise.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Preacher Curl) for more independent limb movement.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Perform single-arm preacher curls.',
      equipment_alternatives: {
        'ez-bar': 'Dumbbells',
        'cable-machine': 'Cable Machine (low pulley with straight bar)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust bench, armpits at top of pad, upper arms flat.',
        'Grip EZ bar underhand, arms extended down pad.',
        'Shoulders relaxed, ready to curl.'
      ],
      execution: [
        'Curl bar up using only biceps, keeping upper arms still.',
        'Squeeze biceps forcefully at the top.',
        'Control the return, stretching biceps fully but not hyperextending.'
      ],
      common_mistakes: [
        'Hyperextending elbows at the bottom.',
        'Lifting upper arms off the pad.',
        'Using momentum to lift the weight.'
      ],
      breathing: 'Exhale as you curl up, inhale as you lower down.'
    }
  },

  // ===== CARDIO & AGILITY EXERCISES =====
  'a-skips': {
    id: 'a-skips',
    name: 'A-Skips',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hip-flexors', 'calves', 'core'],
    difficulty: 2,
    instructions: [
      'Start with marching, lifting knees high',
      'Add a skip on the support leg',
      'Drive knee up to hip height',
      'Keep opposite arm driving forward',
      'Land on ball of foot'
    ],
    safetyNotes: [
      'Start slowly to get rhythm',
      'Keep posture upright',
      'Land softly'
    ],
    modifications: {
      beginner: 'High knee marching',
      advanced: 'Power skips or add speed',
      equipment_alternatives: {
        'none': 'High knees'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Tall posture', 'Arms at 90 degrees'],
      execution: ['Drive knee up', 'Quick ground contact'],
      common_mistakes: ['Leaning back', 'Not driving knee high enough'],
      breathing: 'Breathe rhythmically'
    }
  },

  'b-skips': {
    id: 'b-skips',
    name: 'B-Skips',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hamstrings', 'hip-flexors', 'calves'],
    difficulty: 3,
    instructions: [
      'Start like A-skip, drive knee up',
      'Extend leg forward after knee drive',
      'Pull leg down and back in pawing motion',
      'Skip on support leg during movement',
      'Maintain rhythm and posture'
    ],
    safetyNotes: [
      'Master A-skips first',
      'Don\'t overreach with leg',
      'Keep movements controlled'
    ],
    modifications: {
      beginner: 'A-skips or high knee pulls',
      advanced: 'Faster tempo or longer distance',
      equipment_alternatives: {
        'none': 'Butt kicks'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Start with good A-skip form', 'Prepare for dynamic movement'],
      execution: ['Extend then pull', 'Keep skip rhythm'],
      common_mistakes: ['Losing posture', 'Overreaching'],
      breathing: 'Breathe rhythmically'
    }
  },

  'carioca': {
    id: 'carioca',
    name: 'Carioca',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hips', 'core', 'legs'],
    difficulty: 2,
    instructions: [
      'Stand sideways to direction of travel',
      'Cross trailing leg in front of leading leg',
      'Step out with leading leg',
      'Cross trailing leg behind leading leg',
      'Continue alternating front and back crosses'
    ],
    safetyNotes: [
      'Start slowly to get coordination',
      'Keep hips facing forward',
      'Watch for obstacles'
    ],
    modifications: {
      beginner: 'Slow grapevines without arm swing',
      advanced: 'Increase speed or add arm movements',
      equipment_alternatives: {
        'none': 'Lateral shuffles'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Stay on balls of feet', 'Arms out for balance'],
      execution: ['Rotate hips', 'Keep shoulders square'],
      common_mistakes: ['Turning whole body', 'Crossing feet too much'],
      breathing: 'Breathe naturally'
    }
  },

  'step-ups': {
    id: 'step-ups',
    name: 'Step-Ups',
    category: 'cardio',
    equipment: ['box', 'bench'],
    muscleGroups: ['quadriceps', 'glutes', 'calves'],
    difficulty: 2,
    instructions: [
      'Stand facing box or bench',
      'Place one foot fully on box',
      'Push through heel to step up',
      'Bring other foot up to standing',
      'Step down with control, same leg leads'
    ],
    safetyNotes: [
      'Ensure box is stable',
      'Keep knee aligned over foot',
      'Control the descent'
    ],
    modifications: {
      beginner: 'Lower box height',
      advanced: 'Add weight or increase speed',
      equipment_alternatives: {
        'box': 'Stairs or sturdy chair',
        'none': 'High knee marching'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Full foot on box', 'Stand close to box'],
      execution: ['Drive through heel', 'Stand tall at top'],
      common_mistakes: ['Pushing off back leg', 'Knee caving in'],
      breathing: 'Exhale on step up, inhale on step down'
    }
  },

  'marching-in-place': {
    id: 'marching-in-place',
    name: 'Marching in Place',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['hip-flexors', 'core', 'calves'],
    difficulty: 1,
    instructions: [
      'Stand with feet hip-width apart',
      'Lift one knee up to hip height',
      'Lower foot back down',
      'Alternate legs in marching motion',
      'Swing arms naturally'
    ],
    safetyNotes: [
      'Keep core engaged',
      'Land softly',
      'Maintain upright posture'
    ],
    modifications: {
      beginner: 'Lower knee height',
      advanced: 'High knees or add arm movements',
      equipment_alternatives: {
        'none': 'Seated marching'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Stand tall', 'Arms at sides'],
      execution: ['Lift knees high', 'Land softly'],
      common_mistakes: ['Leaning back', 'Not lifting knees enough'],
      breathing: 'Breathe naturally'
    }
  },

  // ===== MOBILITY EXERCISES =====
  'arm-circles': {
    id: 'arm-circles',
    name: 'Arm Circles',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['shoulders', 'upper-back'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart',
      'Extend arms out to sides at shoulder height',
      'Make small circles forward',
      'Gradually increase circle size',
      'Reverse direction after prescribed time'
    ],
    safetyNotes: [
      'Keep shoulders down',
      'Don\'t force range of motion',
      'Stop if shoulders hurt'
    ],
    modifications: {
      beginner: 'Smaller circles or one arm at a time',
      advanced: 'Add light weights or resistance bands',
      equipment_alternatives: {
        'none': 'Shoulder rolls'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Arms parallel to floor', 'Core engaged'],
      execution: ['Control the movement', 'Keep arms straight'],
      common_mistakes: ['Shrugging shoulders', 'Moving too fast'],
      breathing: 'Breathe naturally throughout'
    }
  },

  // ===== HYROX EXERCISES =====
  'skierg': {
    id: 'skierg',
    name: 'SkiErg',
    category: 'cardio',
    equipment: ['skierg'],
    muscleGroups: ['lats', 'core', 'triceps', 'shoulders'],
    difficulty: 3,
    instructions: [
      'Stand arm\'s length from handles, feet hip-width apart',
      'Reach up, grab handles with arms extended',
      'Drive handles down by hinging at hips and pulling with lats',
      'Finish with hands by thighs, core engaged',
      'Return to start with control'
    ],
    safetyNotes: [
      'Don\'t round back excessively',
      'Keep core engaged throughout',
      'Avoid yanking handles'
    ],
    modifications: {
      beginner: 'Reduce damper setting, focus on technique',
      advanced: 'Increase damper, add intervals or longer distances',
      equipment_alternatives: {
        'skierg': 'Rope slams or banded lat pulldowns'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 500,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Slight knee bend', 'Arms fully extended at top'],
      execution: ['Aggressive hip hinge', 'Pull to pockets'],
      common_mistakes: ['Using only arms', 'Standing too upright'],
      breathing: 'Exhale on pull, inhale on recovery'
    }
  },

  'sled-push': {
    id: 'sled-push',
    name: 'Sled Push',
    category: 'strength',
    equipment: ['sled'],
    muscleGroups: ['quadriceps', 'glutes', 'calves', 'core'],
    difficulty: 4,
    instructions: [
      'Position hands on sled handles, arms extended',
      'Lean forward at 45-degree angle',
      'Drive one foot back, pushing through forefoot',
      'Maintain low position and constant pressure',
      'Take short, powerful steps'
    ],
    safetyNotes: [
      'Keep back straight, not rounded',
      'Ensure clear path ahead',
      'Start with lighter weight'
    ],
    modifications: {
      beginner: 'Reduce weight, shorter distance',
      advanced: 'Add more weight, increase speed',
      equipment_alternatives: {
        'sled': 'Prowler push, car push, or partner resistance'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 25,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Low body position', 'Head neutral'],
      execution: ['Drive through toes', 'Maintain forward lean'],
      common_mistakes: ['Standing too upright', 'Long strides'],
      breathing: 'Breathe continuously, no breath holding'
    }
  },

  'sled-pull': {
    id: 'sled-pull',
    name: 'Sled Pull',
    category: 'strength',
    equipment: ['sled', 'rope'],
    muscleGroups: ['back', 'biceps', 'core', 'legs'],
    difficulty: 4,
    instructions: [
      'Face sled, grab rope with both hands',
      'Sit back into squat position',
      'Pull rope hand-over-hand',
      'Use legs to maintain position',
      'Keep constant tension on rope'
    ],
    safetyNotes: [
      'Keep back straight',
      'Don\'t jerk the rope',
      'Check rope condition before use'
    ],
    modifications: {
      beginner: 'Lighter weight, use seated position',
      advanced: 'Heavier weight, faster pulls',
      equipment_alternatives: {
        'sled': 'Rope pulls with band resistance'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 25,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Wide stance', 'Rope taut before pulling'],
      execution: ['Pull to chest', 'Use whole body'],
      common_mistakes: ['Only using arms', 'Standing too tall'],
      breathing: 'Exhale on pull, inhale on reach'
    }
  },

  'burpee-broad-jumps': {
    id: 'burpee-broad-jumps',
    name: 'Burpee Broad Jumps',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['full-body'],
    difficulty: 5,
    instructions: [
      'Perform standard burpee with chest to ground',
      'Jump feet to hands in squat position',
      'Explode forward into broad jump',
      'Land softly, immediately drop into next burpee',
      'Continue for prescribed distance'
    ],
    safetyNotes: [
      'Land softly on jumps',
      'Keep core tight',
      'Pace yourself for distance'
    ],
    modifications: {
      beginner: 'Step back burpees, smaller jumps',
      advanced: 'Add push-up, maximize jump distance',
      equipment_alternatives: {
        'none': 'Burpee box jump-overs'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Mark starting point', 'Prepare for continuous movement'],
      execution: ['Chest touches ground', 'Maximum forward jump'],
      common_mistakes: ['Not jumping forward enough', 'Poor burpee form'],
      breathing: 'Breathe continuously throughout'
    }
  },

  'rowing-erg': {
    id: 'rowing-erg',
    name: 'Rowing Erg',
    category: 'cardio',
    equipment: ['rowing-machine'],
    muscleGroups: ['back', 'legs', 'core', 'arms'],
    difficulty: 3,
    instructions: [
      'Secure feet, grab handle with overhand grip',
      'Start at catch: shins vertical, arms extended',
      'Drive with legs first, then lean back slightly',
      'Pull handle to lower ribs, squeeze shoulder blades',
      'Reverse sequence to return: arms, body, legs'
    ],
    safetyNotes: [
      'Keep back straight throughout',
      'Don\'t pull with arms too early',
      'Set damper appropriately (4-6)'
    ],
    modifications: {
      beginner: 'Lower damper, focus on technique',
      advanced: 'Higher intensity intervals, longer distances',
      equipment_alternatives: {
        'rowing-machine': 'Bent-over rows with resistance band'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 500,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['1:1:1 ratio of drive phases', 'Relaxed grip'],
      execution: ['Legs-body-arms, arms-body-legs', 'Maintain rhythm'],
      common_mistakes: ['Pulling arms first', 'Overreaching at catch'],
      breathing: 'Exhale on drive, inhale on recovery'
    }
  },

  'farmers-carry': {
    id: 'farmers-carry',
    name: 'Farmers Carry',
    category: 'strength',
    equipment: ['kettlebells'],
    muscleGroups: ['grip', 'traps', 'core', 'legs'],
    difficulty: 3,
    instructions: [
      'Stand between weights, feet hip-width apart',
      'Squat down, grab handles with firm grip',
      'Stand up tall, shoulders back and down',
      'Walk with controlled steps, weights at sides',
      'Keep core tight, avoid leaning'
    ],
    safetyNotes: [
      'Don\'t let weights swing',
      'Keep shoulders level',
      'Use chalk for grip if needed'
    ],
    modifications: {
      beginner: 'Lighter weights, shorter distance',
      advanced: 'Heavier weights, uneven loads',
      equipment_alternatives: {
        'kettlebells': 'Dumbbells, sandbags, or water jugs'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 100,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Shoulders back', 'Firm grip before lifting'],
      execution: ['Small quick steps', 'Eyes forward'],
      common_mistakes: ['Leaning forward', 'Death gripping handles'],
      breathing: 'Breathe normally, don\'t hold breath'
    }
  },

  'sandbag-lunges': {
    id: 'sandbag-lunges',
    name: 'Sandbag Lunges',
    category: 'strength',
    equipment: ['sandbag'],
    muscleGroups: ['quadriceps', 'glutes', 'core', 'shoulders'],
    difficulty: 4,
    instructions: [
      'Place sandbag across shoulders/upper back',
      'Step forward into lunge position',
      'Lower until both knees at 90 degrees',
      'Drive through front heel to stand',
      'Continue walking forward, alternating legs'
    ],
    safetyNotes: [
      'Keep sandbag secure on shoulders',
      'Don\'t let knee collapse inward',
      'Maintain upright torso'
    ],
    modifications: {
      beginner: 'Lighter sandbag or front carry position',
      advanced: 'Heavier sandbag, add pause at bottom',
      equipment_alternatives: {
        'sandbag': 'Barbell, dumbbells, or weighted vest'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 50,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Sandbag centered on shoulders', 'Core braced'],
      execution: ['Vertical torso', 'Full depth each rep'],
      common_mistakes: ['Leaning forward', 'Short steps'],
      breathing: 'Inhale on descent, exhale on rise'
    }
  },

  'wall-balls': {
    id: 'wall-balls',
    name: 'Wall Balls',
    category: 'plyometric',
    equipment: ['medicine-ball'],
    muscleGroups: ['quadriceps', 'glutes', 'shoulders', 'core'],
    difficulty: 3,
    instructions: [
      'Stand arm\'s length from wall, hold ball at chest',
      'Squat down, keeping ball at chest level',
      'Drive up explosively from squat',
      'Throw ball to target height (10ft men, 9ft women)',
      'Catch ball and immediately descend into next rep'
    ],
    safetyNotes: [
      'Keep eyes on ball',
      'Catch with soft hands',
      'Stand appropriate distance from wall'
    ],
    modifications: {
      beginner: 'Lower target, lighter ball',
      advanced: 'Heavier ball, higher target',
      equipment_alternatives: {
        'medicine-ball': 'Thrusters with dumbbells'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'reps'
    },
    coaching: {
      setup: ['Feet shoulder-width', 'Ball at chest'],
      execution: ['Full squat depth', 'Explosive hip drive'],
      common_mistakes: ['Not hitting target', 'Poor catch position'],
      breathing: 'Exhale on throw, inhale on catch'
    }
  },

  'compromised-running': {
    id: 'compromised-running',
    name: 'Compromised Running',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular', 'mental'],
    difficulty: 4,
    instructions: [
      'Perform strength exercise to pre-fatigue',
      'Immediately transition to running',
      'Maintain target pace despite fatigue',
      'Focus on form when tired',
      'Complete prescribed distance'
    ],
    safetyNotes: [
      'Start conservatively',
      'Monitor form breakdown',
      'Have bailout option'
    ],
    modifications: {
      beginner: 'Shorter run segments, more rest',
      advanced: 'Longer runs, less transition time',
      equipment_alternatives: {
        'none': 'Bike or row if no running space'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 400,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Know target paces', 'Quick transitions'],
      execution: ['Maintain form', 'Push through fatigue'],
      common_mistakes: ['Starting too fast', 'Form breakdown'],
      breathing: 'Find rhythm quickly'
    }
  },

  'station-transitions': {
    id: 'station-transitions',
    name: 'Station Transitions',
    category: 'cardio',
    equipment: ['various'],
    muscleGroups: ['full-body', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Set up two stations 10m apart',
      'Complete reps at station 1',
      'Run to station 2',
      'Complete reps at station 2',
      'Continue for prescribed rounds'
    ],
    safetyNotes: [
      'Clear path between stations',
      'Secure all equipment',
      'Practice smooth transitions'
    ],
    modifications: {
      beginner: 'Fewer stations, more rest',
      advanced: 'Add more stations, reduce transition time',
      equipment_alternatives: {
        'various': 'Bodyweight movements if limited equipment'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 300,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Equipment ready', 'Know the sequence'],
      execution: ['Smooth transitions', 'No wasted movement'],
      common_mistakes: ['Rushing setup', 'Poor organization'],
      breathing: 'Control breathing between stations'
    }
  },

  'running-sandwich': {
    id: 'running-sandwich',
    name: 'Running Sandwich',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 4,
    instructions: [
      'Run prescribed distance at race pace',
      'Perform strength/functional exercise',
      'Run same distance again',
      'Compare split times',
      'Rest and repeat for sets'
    ],
    safetyNotes: [
      'Warm up thoroughly',
      'Monitor pace decline',
      'Stay hydrated'
    ],
    modifications: {
      beginner: 'Shorter runs, longer rest',
      advanced: 'Longer runs, multiple exercises',
      equipment_alternatives: {
        'none': 'Bike/row sandwich format'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 1000,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Know target splits', 'Prepare mentally'],
      execution: ['Consistent pacing', 'Quick transitions'],
      common_mistakes: ['First run too fast', 'Long transitions'],
      breathing: 'Settle into rhythm quickly'
    }
  },

  'mock-hyrox': {
    id: 'mock-hyrox',
    name: 'Mock HYROX',
    category: 'cardio',
    equipment: ['full-gym'],
    muscleGroups: ['full-body'],
    difficulty: 5,
    instructions: [
      'Set up all 8 stations if possible',
      'Complete 1km run',
      'Perform each station at race distance/reps',
      'Run 1km between each station',
      'Time entire workout'
    ],
    safetyNotes: [
      'Have spotter/timer',
      'Ensure proper hydration',
      'Scale if needed'
    ],
    modifications: {
      beginner: 'Half distances/reps',
      advanced: 'Add weight or reduce rest',
      equipment_alternatives: {
        'full-gym': 'Substitute similar movement patterns'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 4800,
      progressionRate: 5,
      unit: 'seconds'
    },
    coaching: {
      setup: ['All equipment ready', 'Nutrition planned'],
      execution: ['Race pace practice', 'Smooth transitions'],
      common_mistakes: ['Starting too fast', 'Poor pacing'],
      breathing: 'Find sustainable rhythm'
    }
  },

  'grip-endurance-circuit': {
    id: 'grip-endurance-circuit',
    name: 'Grip Endurance Circuit',
    category: 'strength',
    equipment: ['kettlebells', 'pull-up-bar'],
    muscleGroups: ['grip', 'forearms', 'core'],
    difficulty: 3,
    instructions: [
      'Dead hang from bar for time',
      'Farmers carry for distance',
      'Plate pinch hold for time',
      'Sled rope pull',
      'Minimal rest between exercises'
    ],
    safetyNotes: [
      'Use chalk if needed',
      'Don\'t drop weights',
      'Stop if sharp pain'
    ],
    modifications: {
      beginner: 'Shorter times/distances',
      advanced: 'Add weight, longer holds',
      equipment_alternatives: {
        'kettlebells': 'Any heavy objects with handles'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Chalk hands', 'Mental preparation'],
      execution: ['Relax unnecessary muscles', 'Breathe normally'],
      common_mistakes: ['Death grip', 'Holding breath'],
      breathing: 'Keep breathing steady'
    }
  },

  'sled-conditioning': {
    id: 'sled-conditioning',
    name: 'Sled Conditioning',
    category: 'strength',
    equipment: ['sled'],
    muscleGroups: ['full-body'],
    difficulty: 4,
    instructions: [
      'Alternate between sled push and pull',
      'Push sled 25m',
      'Immediately pull sled back 25m',
      'Rest briefly',
      'Repeat for prescribed rounds'
    ],
    safetyNotes: [
      'Start with manageable weight',
      'Keep good form when tired',
      'Clear path both ways'
    ],
    modifications: {
      beginner: 'Longer rest, lighter sled',
      advanced: 'Heavier sled, no rest',
      equipment_alternatives: {
        'sled': 'Tire drags or partner resistance'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 200,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Low position for push', 'Strong stance for pull'],
      execution: ['Maintain technique', 'Consistent effort'],
      common_mistakes: ['Form breakdown', 'Uneven pacing'],
      breathing: 'Continuous breathing'
    }
  },

  'zone-2-recovery-run': {
    id: 'zone-2-recovery-run',
    name: 'Zone 2 Recovery Run',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 2,
    instructions: [
      'Run at conversational pace',
      'Heart rate in Zone 2 (60-70% max)',
      'Focus on easy breathing',
      'Maintain for prescribed duration',
      'Should feel easy throughout'
    ],
    safetyNotes: [
      'Don\'t push pace',
      'Stop if pain occurs',
      'Stay hydrated'
    ],
    modifications: {
      beginner: 'Run/walk intervals',
      advanced: 'Longer duration',
      equipment_alternatives: {
        'none': 'Bike or elliptical at same heart rate'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'minutes'
    },
    coaching: {
      setup: ['Start very easy', 'Have heart rate monitor'],
      execution: ['Nasal breathing if possible', 'Relaxed form'],
      common_mistakes: ['Running too fast', 'Ignoring heart rate'],
      breathing: 'Easy, rhythmic breathing'
    }
  },

  'hyrox-pace-runs': {
    id: 'hyrox-pace-runs',
    name: 'HYROX Pace Runs',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['legs', 'cardiovascular'],
    difficulty: 3,
    instructions: [
      'Calculate target HYROX run pace',
      'Run 8 x 1km at this pace',
      'Rest 2-3 minutes between',
      'Practice holding pace when tired',
      'Track split consistency'
    ],
    safetyNotes: [
      'Proper warm-up essential',
      'Adjust pace if needed',
      'Cool down properly'
    ],
    modifications: {
      beginner: '4-6 x 1km repeats',
      advanced: 'Reduce rest to 90 seconds',
      equipment_alternatives: {
        'none': 'Treadmill for precise pacing'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 8000,
      progressionRate: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Know exact pace needed', 'GPS watch ready'],
      execution: ['Consistent splits', 'Relaxed running'],
      common_mistakes: ['Starting too fast', 'Pace variance'],
      breathing: 'Find sustainable rhythm'
    }
  },

  // ===== SHOULDER EXERCISES =====
  'cable-lateral-raise': {
    id: 'cable-lateral-raise',
    name: 'Cable Lateral Raise',
    category: 'strength',
    equipment: ['cable-machine', 'ankle-strap'],
    muscleGroups: ['Shoulders (Lateral Deltoid)'],
    difficulty: 2,
    instructions: [
      'Attach an ankle strap or D-handle to a low pulley on a cable machine.',
      'Stand sideways to the machine, grasping the handle with the hand farthest from the machine, or attach the ankle strap to your ankle closest to the machine.',
      'Keep a slight bend in your elbow (if using handle) or knee (if using ankle strap), and your torso upright.',
      'Slowly raise your arm (or leg) out to the side in a controlled arc, leading with your elbow, until it is parallel to the floor.',
      'Squeeze your lateral deltoid at the top, then slowly lower the arm (or leg) back to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weight; focus on isolating the lateral deltoid, not swinging the weight.',
      'Maintain an upright torso; avoid leaning away from the machine excessively.',
      'Control the movement; do not let the cable pull your arm/leg down quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on the mind-muscle connection. Perform with a shorter range of motion.',
      advanced: 'Increase the weight, or incorporate a pause at the top of the movement for increased intensity.',
      equipment_alternatives: {
        'cable-machine': 'Dumbbell Lateral Raise',
        'resistance-bands': 'Resistance Band Lateral Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand sideways to machine, handle in outer hand or strap on inner ankle.',
        'Slight elbow/knee bend, upright torso, core braced.',
        'Shoulders depressed, ready to lift.'
      ],
      execution: [
        'Raise arm/leg out to side, leading with elbow, not hand.',
        'Focus on lateral deltoid contraction, not shrugging.',
        'Control the descent, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the body.',
        'Shrugging shoulders up towards ears.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you raise, inhale as you lower.'
    }
  },

  'dumbbell-rear-delt-raise': {
    id: 'dumbbell-rear-delt-raise',
    name: 'Dumbbell Rear Delt Raise',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Rear Deltoids)', 'Upper Back (Rhomboids, Trapezius)'],
    difficulty: 2,
    instructions: [
      'Stand with feet shoulder-width apart, holding a dumbbell in each hand, palms facing each other (neutral grip).',
      'Hinge forward at your hips, keeping your back straight and core engaged, until your torso is nearly parallel to the floor.',
      'Allow the dumbbells to hang straight down, with a slight bend in your elbows.',
      'Engage your rear deltoids and upper back to raise the dumbbells out to the sides in a wide arc, until your arms are parallel to the floor.',
      'Squeeze your shoulder blades together at the top, then slowly lower the dumbbells back to the starting position with control.'
    ],
    safetyNotes: [
      'Use light weights to ensure proper form and target the rear deltoids, not just swinging the arms.',
      'Maintain a flat back throughout the movement; avoid rounding your spine.',
      'Avoid shrugging your shoulders towards your ears; keep them depressed.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on the mind-muscle connection. Perform seated and bent over to reduce lower back strain.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Face Pull',
        'machine': 'Reverse Pec Deck Machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hinge at hips, flat back, core braced.',
        'Dumbbells hanging, neutral grip, slight elbow bend.',
        'Gaze down to maintain neutral neck.'
      ],
      execution: [
        'Raise dumbbells out to sides, leading with elbows, not wrists.',
        'Focus on squeezing rear deltoids and shoulder blades.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Rounding the back.',
        'Shrugging shoulders up.'
      ],
      breathing: 'Exhale as you raise the dumbbells, inhale as you lower them.'
    }
  },

  'dumbbell-lateral-raise': {
    id: 'dumbbell-lateral-raise',
    name: 'Dumbbell Lateral Raise',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Lateral Deltoid)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing your body, arms extended by your sides.',
      'Keep a slight bend in your elbows throughout the movement.',
      'Engage your lateral deltoids to raise the dumbbells out to the sides in a controlled arc, leading with your elbows, until your arms are parallel to the floor.',
      'Squeeze your lateral deltoids at the top, then slowly lower the dumbbells back to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weights to ensure proper form and target the lateral deltoids, not just swinging the arms.',
      'Avoid shrugging your shoulders towards your ears; keep them depressed.',
      'Maintain a stable core; avoid leaning back or forward.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on the mind-muscle connection. Perform seated to reduce body sway.',
      advanced: 'Increase the weight, or incorporate a pause at the top of the movement for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Lateral Raise',
        'machine': 'Machine Lateral Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells by sides, palms facing body.',
        'Slight elbow bend, shoulders depressed.',
        'Core braced, ready to lift.'
      ],
      execution: [
        'Raise dumbbells out to sides, leading with elbows, not wrists.',
        'Focus on lateral deltoid contraction, not shrugging.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Shrugging shoulders up towards ears.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you raise the dumbbells, inhale as you lower them.'
    }
  },

  'dumbbell-shoulder-press': {
    id: 'dumbbell-shoulder-press',
    name: 'Dumbbell Shoulder Press',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Deltoids)', 'Triceps'],
    difficulty: 2,
    instructions: [
      'Sit on a bench with back support (or stand tall), holding a dumbbell in each hand at shoulder height, palms facing forward, elbows pointing slightly out and forward.',
      'Press the dumbbells straight overhead until your arms are fully extended, but not locked out.',
      'Squeeze your shoulders and triceps at the top of the movement.',
      'Slowly lower the dumbbells back to the starting position at shoulder height with control.'
    ],
    safetyNotes: [
      'Use a weight you can control; avoid jerking the weights or using excessive momentum.',
      'Maintain a neutral spine; avoid excessive arching of the lower back.',
      'Control the descent to prevent injury to shoulders or wrists.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on mastering the movement pattern. Perform seated with back support for increased stability.',
      advanced: 'Increase the weight, or incorporate a pause at the top or bottom of the movement. Perform standing for more core engagement.',
      equipment_alternatives: {
        'dumbbells': 'Barbell Shoulder Press',
        'machine': 'Machine Shoulder Press'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Dumbbells at shoulder height, palms forward, elbows slightly forward.',
        'Core braced, shoulders down and back.',
        'Feet flat on floor (if seated) or hip-width (if standing).'
      ],
      execution: [
        'Press straight overhead, driving through shoulders and triceps.',
        'Squeeze shoulders at the top.',
        'Control the descent, keeping dumbbells in line with shoulders.'
      ],
      common_mistakes: [
        'Using too much weight and jerking the weights up.',
        'Excessive lower back arching.',
        'Not fully extending arms at the top.'
      ],
      breathing: 'Exhale as you press up, inhale as you lower down.'
    }
  },

  'dumbbell-front-raise': {
    id: 'dumbbell-front-raise',
    name: 'Dumbbell Front Raise',
    category: 'strength',
    equipment: ['dumbbells'],
    muscleGroups: ['Shoulders (Anterior Deltoid)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, palms facing your body, arms extended in front of your thighs.',
      'Keep a slight bend in your elbows throughout the movement.',
      'Engage your anterior deltoids to raise the dumbbells straight forward and upwards, until your arms are parallel to the floor (shoulder height).',
      'Squeeze your anterior deltoids at the top, then slowly lower the dumbbells back to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weights to ensure proper form and target the anterior deltoids, not just swinging the arms.',
      'Avoid shrugging your shoulders towards your ears; keep them depressed.',
      'Maintain a stable core; avoid leaning back excessively.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells and focus on the mind-muscle connection. Perform one arm at a time for better control.',
      advanced: 'Increase the weight, or incorporate a pause at the top of the movement for increased intensity.',
      equipment_alternatives: {
        'dumbbells': 'Cable Front Raise',
        'plate': 'Plate Front Raise'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells in front of thighs, palms facing body.',
        'Slight elbow bend, shoulders depressed.',
        'Core braced, ready to lift.'
      ],
      execution: [
        'Raise dumbbells straight forward, leading with shoulders.',
        'Focus on anterior deltoid contraction, avoid shrugging.',
        'Control the descent, resisting gravity.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the arms.',
        'Shrugging shoulders up towards ears.',
        'Leaning back to lift the weights.'
      ],
      breathing: 'Exhale as you raise the dumbbells, inhale as you lower them.'
    }
  },

  // ===== ADDITIONAL GLUTE EXERCISES =====
  'straight-leg-kickback': {
    id: 'straight-leg-kickback',
    name: 'Straight Leg Kickback',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Start on your hands and knees, hands directly under your shoulders, knees under your hips.',
      'Keep your back flat and core engaged.',
      'Extend one leg straight back behind you, keeping it parallel to the floor, foot flexed.',
      'Engage your glute to lift the extended leg a few inches higher, squeezing at the top.',
      'Slowly lower the leg back to parallel with the floor, controlling the eccentric phase, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the movement; avoid arching or rounding your spine.',
      'Control the movement; avoid swinging the leg or using momentum.',
      'Keep your hips stable and level; avoid tilting your pelvis.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Focus on simply extending the leg without lifting it higher.',
      advanced: 'Add an ankle weight or a loop band around your thighs for increased resistance. Incorporate a pulse at the top.',
      equipment_alternatives: {
        'bodyweight': 'Cable Glute Kickback',
        'machine': 'Glute Kickback Machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 10,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Hands under shoulders, knees under hips, flat back.',
        'Core engaged, gaze down, neutral neck.',
        'Extend one leg straight back, parallel to floor.'
      ],
      execution: [
        'Lift leg higher using glute contraction, not back arching.',
        'Squeeze glute hard at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Arching the lower back excessively.',
        'Swinging the leg or using momentum.',
        'Not keeping hips level.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower it.'
    }
  },

  'medicine-ball-curtsy-lunge': {
    id: 'medicine-ball-curtsy-lunge',
    name: 'Medicine Ball Curtsy Lunge',
    category: 'strength',
    equipment: ['medicine-ball'],
    muscleGroups: ['Glutes (Gluteus Medius, Gluteus Maximus)', 'Quads', 'Hamstrings', 'Adductors'],
    difficulty: 3,
    instructions: [
      'Stand tall with feet hip-width apart, holding a medicine ball at your chest with both hands.',
      'Step your right leg back and across behind your left leg, as if doing a curtsy, lowering your hips until your left thigh is parallel to the floor.',
      'Ensure your front knee tracks over your ankle, and your torso remains upright.',
      'Push through your front heel to return to the starting position, squeezing your glutes.',
      'Alternate legs, performing the curtsy lunge on the other side.'
    ],
    safetyNotes: [
      'Maintain balance and control throughout the movement; avoid rushing.',
      'Ensure your front knee does not collapse inward; keep it aligned with your toes.',
      'Use a medicine ball weight that allows for good form; start light.'
    ],
    modifications: {
      beginner: 'Perform without a medicine ball (Bodyweight Curtsy Lunge). Reduce the depth of the lunge.',
      advanced: 'Use a heavier medicine ball, or perform with dumbbells for increased resistance.',
      equipment_alternatives: {
        'medicine-ball': 'Dumbbells',
        'kettlebells': 'Kettlebell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width, medicine ball at chest.',
        'Shoulders back and down, core braced.',
        'Gaze forward, ready to step back.'
      ],
      execution: [
        'Step back and across, lowering hips, keeping front knee aligned.',
        'Push through front heel to return, squeeze glutes.',
        'Maintain upright torso, control balance.'
      ],
      common_mistakes: [
        'Losing balance and wobbling.',
        'Front knee collapsing inward.',
        'Rounding the back or leaning too far forward.'
      ],
      breathing: 'Inhale as you lower into the lunge, exhale as you push back up.'
    }
  },

  'medicine-ball-hip-thrusts': {
    id: 'medicine-ball-hip-thrusts',
    name: 'Medicine Ball Hip Thrusts',
    category: 'strength',
    equipment: ['medicine-ball', 'bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings', 'Core'],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Place a medicine ball directly on your hips, holding it in place with your hands (optional).',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Use a medicine ball weight that allows for good form and full range of motion.'
    ],
    modifications: {
      beginner: 'Perform without a medicine ball (Bodyweight Hip Thrust). Reduce the range of motion if needed.',
      advanced: 'Use a heavier medicine ball, or progress to Barbell Hip Thrusts for increased resistance.',
      equipment_alternatives: {
        'medicine-ball': 'Dumbbell',
        'barbell': 'Barbell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Medicine ball on hips, hands holding (optional).',
        'Gaze forward, core braced.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'single-leg-kickback': {
    id: 'single-leg-kickback',
    name: 'Single Leg Kickback',
    category: 'strength',
    equipment: ['cable-machine', 'ankle-strap'],
    muscleGroups: ['Glutes (Gluteus Maximus)'],
    difficulty: 2,
    instructions: [
      'Attach an ankle strap to a low pulley on a cable machine and secure it around one ankle.',
      'Stand facing the machine, holding onto the frame for support, with a slight forward lean.',
      'Keep your standing leg slightly bent and your core engaged.',
      'Slowly extend the leg with the ankle strap straight back behind you, engaging your glute.',
      'Squeeze your glute at the peak contraction, then slowly return the leg to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weight; focus on glute isolation, not swinging the leg or arching the back.',
      'Maintain a stable torso; avoid excessive leaning or rocking.',
      'Control the movement; do not let the cable pull your leg forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on the mind-muscle connection. Reduce the range of motion.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'cable-machine': 'Resistance Band Glute Kickback',
        'machine': 'Glute Kickback Machine'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Ankle strap on, hold frame for support, slight forward lean.',
        'Standing leg slightly bent, core braced.',
        'Shoulders down, ready to kick back.'
      ],
      execution: [
        'Extend leg straight back, squeezing glute.',
        'Focus on glute contraction, not lower back arching.',
        'Control the return, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the leg.',
        'Arching the lower back excessively.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you kick back, inhale as you return to the start.'
    }
  },

  'elevated-hip-bridge': {
    id: 'elevated-hip-bridge',
    name: 'Elevated Hip Bridge',
    category: 'strength',
    equipment: ['bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Lie on your back on the floor, with your feet elevated on a bench, box, or chair, knees bent at a 90-degree angle.',
      'Place your arms by your sides, palms down, for stability.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the elevated surface is stable and will not slide.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Control the movement; avoid pushing off the elevated surface too aggressively.'
    ],
    modifications: {
      beginner: 'Perform a standard Hip Bridge with feet on the floor. Reduce the height of the elevated surface.',
      advanced: 'Place a dumbbell or weight plate on your hips for added resistance. Perform single-leg elevated hip bridges.',
      equipment_alternatives: {
        'bench': 'Stability Ball',
        'bodyweight': 'Bodyweight Hip Bridge'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, feet on elevated surface, knees bent 90 degrees.',
        'Arms by sides, palms down, core braced.',
        'Gaze up, ready to lift hips.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you lift hips, inhale as you lower them.'
    }
  },

  'dumbbell-hip-thrust': {
    id: 'dumbbell-hip-thrust',
    name: 'Dumbbell Hip Thrust',
    category: 'strength',
    equipment: ['dumbbells', 'bench'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your upper back against a sturdy bench, knees bent, feet flat on the floor, hip-width apart.',
      'Place a dumbbell across your hips, just below your hip bones, holding it in place with your hands.',
      'Engage your glutes and drive through your heels to lift your hips off the floor until your body forms a straight line from your shoulders to your knees.',
      'Squeeze your glutes hard at the top of the movement, ensuring full hip extension.',
      'Slowly lower your hips back to the starting position, controlling the eccentric phase, just before touching the floor.'
    ],
    safetyNotes: [
      'Ensure the bench is stable and will not slide or tip.',
      'Do not hyperextend your lower back at the top; focus on glute contraction, not spinal arch.',
      'Use a dumbbell weight that allows for good form and full range of motion.'
    ],
    modifications: {
      beginner: 'Perform without a dumbbell (Bodyweight Hip Thrust). Reduce the range of motion if needed.',
      advanced: 'Use a heavier dumbbell, or progress to Barbell Hip Thrusts for increased resistance.',
      equipment_alternatives: {
        'dumbbells': 'Medicine Ball',
        'barbell': 'Barbell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Upper back against bench, feet flat, knees bent.',
        'Dumbbell across hips, hands holding.',
        'Gaze forward, core braced.'
      ],
      execution: [
        'Drive through heels, lift hips by squeezing glutes.',
        'Form straight line from shoulders to knees at top.',
        'Squeeze glutes hard, control descent.'
      ],
      common_mistakes: [
        'Hyperextending lower back at the top.',
        'Not fully extending hips.',
        'Using momentum to lift the hips.'
      ],
      breathing: 'Exhale as you thrust hips up, inhale as you lower them.'
    }
  },

  'glute-kickback-machine': {
    id: 'glute-kickback-machine',
    name: 'Glute Kickback Machine',
    category: 'strength',
    equipment: ['glute-kickback-machine'],
    muscleGroups: ['Glutes (Gluteus Maximus)'],
    difficulty: 1,
    instructions: [
      'Adjust the machine so the pad rests comfortably against the sole of your foot or lower calf.',
      'Stand facing the machine, holding onto the handles for support, with a slight forward lean.',
      'Keep your standing leg slightly bent and your core engaged.',
      'Engage your glute to push the pad straight back and slightly upwards, extending your hip.',
      'Squeeze your glute hard at the peak contraction, then slowly return the leg to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Do not use excessive weight that causes your lower back to arch excessively.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Keep your standing leg slightly bent to avoid locking out the knee.'
    ],
    modifications: {
      beginner: 'Use lighter weight to focus on the mind-muscle connection and glute isolation. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'glute-kickback-machine': 'Cable Glute Kickback',
        'resistance-bands': 'Resistance Band Glute Kickback'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 5,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Pad against foot/calf, hold handles for support, slight forward lean.',
        'Standing leg slightly bent, core braced.',
        'Shoulders down, ready to kick back.'
      ],
      execution: [
        'Push pad straight back, squeezing glute forcefully.',
        'Avoid arching lower back; keep movement initiated from glute.',
        'Control the return, resisting the weight stack.'
      ],
      common_mistakes: [
        'Using too much weight and arching the lower back.',
        'Swinging the leg or using momentum.',
        'Not fully extending the hip.'
      ],
      breathing: 'Exhale as you kick back, inhale as you return to the start.'
    }
  },
  'side-leg-kick': {
    id: 'side-leg-kick',
    name: 'Side Leg Kick (Side-Lying)',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Glutes (Gluteus Medius/Minimus)', 'Hip Abductors'],
    difficulty: 1,
    instructions: [
      'Lie on your side with your body in a straight line, supporting your head with your bottom arm or hand.',
      'Place your top hand on the floor in front of your chest for stability (optional).',
      'Keep your top leg straight and slowly lift it directly upwards towards the ceiling, leading with your heel, engaging your outer thigh and glute.',
      'Continue lifting until you feel a strong contraction in your gluteus medius.',
      'Slowly lower the leg back to the starting position, controlling the eccentric phase, then repeat for desired reps before switching sides.'
    ],
    safetyNotes: [
      'Maintain a straight body line; avoid rocking your torso forward or backward.',
      'Control the movement; avoid swinging the leg or using momentum.',
      'Do not lift the leg excessively high if it causes lower back discomfort.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Keep the bottom leg slightly bent for more stability.',
      advanced: 'Add an ankle weight or a loop band around your thighs for increased resistance. Incorporate a pulse at the top.',
      equipment_alternatives: {
        'Bodyweight': 'Machine Hip Abductor',
        'No Equipment': 'Cable Hip Abduction'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.10,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Lie on side, body straight, head supported.',
        'Top leg straight, bottom leg slightly bent (optional).',
        'Core engaged, ready to lift.'
      ],
      execution: [
        'Lift top leg straight up, leading with heel, using outer glute.',
        'Squeeze gluteus medius at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Rocking the torso forward or backward.',
        'Using momentum to swing the leg.',
        'Not isolating the outer thigh/glute.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower it.'
    }
  },
  'cable-hip-extension': {
    id: 'cable-hip-extension',
    name: 'Cable Hip Extension',
    category: 'strength',
    equipment: ['Cable Machine', 'Ankle Strap'],
    muscleGroups: ['Glutes (Gluteus Maximus)', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Attach an ankle strap to a low pulley on a cable machine and secure it around one ankle.',
      'Stand facing the machine, holding onto the frame for support, with a slight forward lean at your hips.',
      'Keep your standing leg slightly bent and your core engaged.',
      'Slowly extend the leg with the ankle strap straight back behind you, focusing on extending from your hip and engaging your glute.',
      'Squeeze your glute hard at the peak of the extension, then slowly return the leg to the starting position, controlling the eccentric phase.'
    ],
    safetyNotes: [
      'Use light weight; focus on glute and hamstring isolation, not swinging the leg or arching the back.',
      'Maintain a stable torso; avoid excessive leaning or rocking.',
      'Control the movement; do not let the cable pull your leg forward quickly.'
    ],
    modifications: {
      beginner: 'Use lighter weight and focus on the mind-muscle connection. Reduce the range of motion.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity.',
      equipment_alternatives: {
        'Cable Machine': 'Resistance Band Hip Extension',
        'Machine': 'Glute Kickback Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 2.5,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Ankle strap on, hold frame for support, slight forward hip hinge.',
        'Standing leg slightly bent, core braced.',
        'Shoulders down, ready to extend hip.'
      ],
      execution: [
        'Extend leg straight back, focusing on hip extension and glute squeeze.',
        'Avoid arching lower back; keep movement initiated from hip.',
        'Control the return, resisting the cable\'s pull.'
      ],
      common_mistakes: [
        'Using too much weight and swinging the leg.',
        'Arching the lower back excessively instead of hip extension.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you extend hip, inhale as you return to the start.'
    }
  },
  'kettlebell-swing-american': {
    id: 'kettlebell-swing-american',
    name: 'Kettlebell Swing (American)',
    category: 'strength',
    equipment: ['Kettlebell'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Lower Back', 'Shoulders (Deltoids)', 'Core'],
    difficulty: 4,
    instructions: [
      'Stand with feet slightly wider than shoulder-width apart, kettlebell on the floor in front of you.',
      'Hinge at your hips and grasp the kettlebell with both hands, palms facing you, maintaining a straight back.',
      'Hike the kettlebell back between your legs, loading your glutes and hamstrings.',
      'Explosively drive your hips forward, squeezing your glutes, to swing the kettlebell all the way overhead, arms extended.',
      'Allow the kettlebell to naturally swing back down, hinging at your hips as it descends, and repeat the explosive hip drive.'
    ],
    safetyNotes: [
      'The movement is a hip hinge, not a squat; focus on pushing your hips back, not bending your knees excessively.',
      'Maintain a straight back throughout the entire movement; avoid rounding your spine.',
      'Control the kettlebell at the top of the swing; avoid letting it pull your shoulders into an unsafe position.'
    ],
    modifications: {
      beginner: 'Perform Russian Kettlebell Swings (to chest height) to master the hip hinge and explosive drive before going overhead.',
      advanced: 'Increase the weight, or perform single-arm American Kettlebell Swings for increased core challenge.',
      equipment_alternatives: {
        'Kettlebell': 'Dumbbell Swing (less common)',
        'Olympic Barbell': 'Barbell Clean and Jerk (more complex Olympic lift)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet slightly wider than shoulder-width, kettlebell in front.',
        'Hinge at hips, flat back, grip kettlebell.',
        'Shoulders back and down, gaze forward.'
      ],
      execution: [
        'Hike kettlebell back, then explosively drive hips forward to swing overhead.',
        'Squeeze glutes hard at the top, arms extended overhead.',
        'Allow kettlebell to swing naturally, control descent back to hinge.'
      ],
      common_mistakes: [
        'Squatting instead of hinging.',
        'Rounding the back.',
        'Using arms to lift the kettlebell overhead instead of hip drive.',
        'Lack of control at the top, letting kettlebell pull shoulders forward.'
      ],
      breathing: 'Inhale on the backswing, exhale powerfully as you drive hips forward and overhead.'
    }
  },
  'superman': {
    id: 'superman',
    name: 'Superman',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Upper Back (Trapezius)'],
    difficulty: 1,
    instructions: [
      'Lie face down on the floor with your arms extended straight out in front of you and your legs extended straight behind you.',
      'Keep your head in a neutral position, looking down at the floor.',
      'Engage your lower back, glutes, and upper back to simultaneously lift your arms, chest, and legs off the floor a few inches.',
      'Hold the top position briefly, feeling the contraction in your posterior chain.',
      'Slowly lower your arms and legs back down to the starting position with control.'
    ],
    safetyNotes: [
      'Avoid hyperextending your lower back; lift only as high as you can maintain a comfortable, controlled contraction.',
      'Perform slowly and with control; avoid jerking movements.',
      'If you feel lower back pain, reduce the range of motion or perform one limb at a time (Alternating Superman).'
    ],
    modifications: {
      beginner: 'Lift only arms or only legs. Reduce the height of the lift. Perform with arms bent (hands under chin).',
      advanced: 'Hold the top position for a longer duration. Add light ankle or wrist weights (very light).',
      equipment_alternatives: {
        'Bodyweight': 'Back Extension (on hyperextension bench)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie prone, arms extended forward, legs extended back.',
        'Head neutral, gaze down.',
        'Core engaged, ready to lift.'
      ],
      execution: [
        'Lift arms, chest, and legs simultaneously using lower back and glutes.',
        'Squeeze glutes and lower back at the top.',
        'Control the lowering phase, resisting gravity.'
      ],
      common_mistakes: [
        'Hyperextending the lower back.',
        'Jerking movements instead of controlled lift.',
        'Not engaging glutes.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },
  'barbell-shrug': {
    id: 'barbell-shrug',
    name: 'Barbell Shrug',
    category: 'strength',
    equipment: ['Barbell', 'Weight Plates'],
    muscleGroups: ['Trapezius (Upper Traps)'],
    difficulty: 2,
    instructions: [
      'Stand tall with feet hip-width apart, holding a barbell in front of your thighs with an overhand grip, hands slightly wider than shoulder-width.',
      'Keep your arms straight and your shoulders relaxed, allowing the barbell to hang freely.',
      'Engage your upper traps to shrug your shoulders straight up towards your ears, as high as possible.',
      'Squeeze your traps hard at the top of the movement.',
      'Slowly lower the barbell back to the starting position, controlling the eccentric phase and allowing a full stretch in your traps.'
    ],
    safetyNotes: [
      'Do not roll your shoulders forward or backward; shrug straight up and down.',
      'Use a weight you can control; avoid jerking the barbell up or using momentum.',
      'Maintain a stable core and neutral spine throughout the movement.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Dumbbell Shrug). Reduce the range of motion if needed.',
      advanced: 'Increase the weight. Incorporate a pause at the top contraction for increased intensity. Use a trap bar for a more natural grip.',
      equipment_alternatives: {
        'Barbell': 'Dumbbells',
        'Weight Bar': 'Trap Bar'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, barbell in front, overhand grip, arms straight.',
        'Shoulders relaxed, ready to shrug.',
        'Core braced, neutral spine.'
      ],
      execution: [
        'Shrug shoulders straight up towards ears, squeezing traps.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch.'
      ],
      common_mistakes: [
        'Rolling shoulders forward or backward.',
        'Using momentum to lift the weight.',
        'Not getting a full range of motion.'
      ],
      breathing: 'Exhale as you shrug up, inhale as you lower down.'
    }
  },
  'seated-back-extension': {
    id: 'seated-back-extension',
    name: 'Seated Back Extension (Machine)',
    category: 'strength',
    equipment: ['Seated Back Extension Machine'],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Adjust the machine so your lower back is comfortably positioned against the back pad and your feet are secured.',
      'Sit firmly in the seat, grasping the handles for stability.',
      'Allow your torso to lean forward slightly, feeling a stretch in your lower back.',
      'Engage your lower back muscles to extend your torso backward, pushing against the pad until your back is straight or slightly hyperextended.',
      'Squeeze your lower back and glutes at the peak contraction.',
      'Slowly return to the starting position, controlling the weight stack and allowing a full stretch in your lower back.'
    ],
    safetyNotes: [
      'Do not use excessive weight that compromises form; focus on lower back muscle contraction.',
      'Maintain a controlled movement throughout the entire range of motion; do not let the weight stack slam.',
      'Avoid excessive hyperextension; stop when your back is straight or slightly beyond.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the peak contraction for increased intensity. Perform with a slower eccentric phase.',
      equipment_alternatives: {
        'Seated Back Extension Machine': 'Back Extension (Hyperextension Bench)',
        'Machine': 'Superman (bodyweight)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Adjust machine, sit firmly, feet secured.',
        'Back against pad, slight forward lean at start.',
        'Core braced.'
      ],
      execution: [
        'Extend torso backward using lower back, not jerking.',
        'Squeeze lower back and glutes at the top.',
        'Control the return, feeling the stretch in lower back.'
      ],
      common_mistakes: [
        'Using too much weight and jerking the movement.',
        'Excessive hyperextension of the lower back.',
        'Not controlling the eccentric phase.'
      ],
      breathing: 'Exhale as you extend backward, inhale as you return forward.'
    }
  },
  'back-extensions': {
    id: 'back-extensions',
    name: 'Back Extensions (Hyperextension Bench)',
    category: 'strength',
    equipment: ['Hyperextension Bench'],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Adjust the hyperextension bench so the top of the pad is just below your hip crease, allowing you to hinge freely at your hips.',
      'Hook your heels securely under the foot pads, crossing your arms over your chest or placing hands lightly behind your head.',
      'Allow your torso to bend forward at the hips, keeping your back straight, until you feel a stretch in your hamstrings and lower back.',
      'Engage your lower back and glutes to extend your torso upwards until your body forms a straight line from your head to your heels.',
      'Squeeze your lower back and glutes at the peak contraction, then slowly lower back down with control.'
    ],
    safetyNotes: [
      'Avoid rounding your back; maintain a straight spine throughout the movement.',
      'Do not hyperextend excessively at the top; stop when your body is in a straight line.',
      'Control the movement; avoid jerking or using momentum.'
    ],
    modifications: {
      beginner: 'Perform without added weight. Reduce the range of motion if needed.',
      advanced: 'Hold a weight plate or dumbbell to your chest for added resistance. Perform with a slower eccentric phase.',
      equipment_alternatives: {
        'Hyperextension Bench': 'Superman (bodyweight)',
        'Bench': 'Good Morning (barbell)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Adjust pad to hip crease, heels hooked securely.',
        'Arms crossed or hands behind head, back straight.',
        'Core braced, ready to hinge.'
      ],
      execution: [
        'Hinge at hips, extend torso up using lower back and glutes.',
        'Squeeze glutes and lower back at the top.',
        'Control the descent, feeling the stretch.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Hyperextending excessively at the top.',
        'Using momentum to lift the torso.'
      ],
      breathing: 'Exhale as you extend up, inhale as you lower down.'
    }
  },
  'alternating-superman': {
    id: 'alternating-superman',
    name: 'Alternating Superman',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Core (stabilizer)'],
    difficulty: 2,
    instructions: [
      'Lie face down on the floor with your arms extended straight out in front of you and your legs extended straight behind you.',
      'Keep your head in a neutral position, looking down at the floor.',
      'Engage your core and slowly lift your right arm and left leg simultaneously off the floor a few inches.',
      'Hold the top position briefly, feeling the contraction in your lower back and glute.',
      'Slowly lower your right arm and left leg back down to the starting position, then immediately lift your left arm and right leg, alternating sides with control.'
    ],
    safetyNotes: [
      'Avoid hyperextending your lower back; lift only as high as you can maintain a comfortable, controlled contraction.',
      'Perform slowly and with control; avoid jerking movements.',
      'Maintain a stable torso; avoid rocking side-to-side.'
    ],
    modifications: {
      beginner: 'Reduce the height of the lift. Perform with only arm lifts or only leg lifts.',
      advanced: 'Hold the top position for a longer duration. Add light ankle or wrist weights (very light).',
      equipment_alternatives: {
        'Bodyweight': 'Bird-Dog (on hands and knees)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.10,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie prone, arms extended forward, legs extended back.',
        'Head neutral, gaze down.',
        'Core engaged, ready to lift opposite limbs.'
      ],
      execution: [
        'Lift opposite arm and leg simultaneously using lower back and glutes.',
        'Squeeze glute and lower back at the top.',
        'Control the lowering phase, then switch sides smoothly.'
      ],
      common_mistakes: [
        'Hyperextending the lower back.',
        'Jerking movements instead of controlled lift.',
        'Rocking torso side-to-side.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower and switch.'
    }
  },
  'high-knees': {
    id: 'high-knees',
    name: 'High Knees',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Quads', 'Hip Flexors', 'Core', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet hip-width apart, looking straight ahead.',
      'Begin to run in place, driving one knee up towards your chest as high as possible.',
      'As one knee comes down, immediately drive the other knee up.',
      'Pump your arms rhythmically with your legs, as if running.',
      'Focus on quick, light foot strikes and maintaining an upright posture.'
    ],
    safetyNotes: [
      'Land softly on the balls of your feet to minimize impact on your joints.',
      'Maintain an upright posture; avoid hunching over or leaning back.',
      'Start slowly to master coordination before increasing speed.'
    ],
    modifications: {
      beginner: 'Perform walking high knees, focusing on bringing the knee up slowly and with control. Reduce the height of the knee lift.',
      advanced: 'Increase the speed and explosiveness of the knee drive. Incorporate a slight forward movement (running high knees).',
      equipment_alternatives: {
        'Bodyweight': 'Stair Climbing',
        'No Equipment': 'Jumping Rope'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width, chest up.',
        'Arms bent at 90 degrees, ready to pump.',
        'Gaze forward, light on feet.'
      ],
      execution: [
        'Drive knees high towards chest, alternating rapidly.',
        'Pump arms actively with leg movement.',
        'Maintain quick ground contact, minimal bounce.'
      ],
      common_mistakes: [
        'Leaning back excessively.',
        'Landing heavily on heels.',
        'Not engaging core, leading to hip sway.'
      ],
      breathing: 'Breathe rhythmically and deeply with the movement.'
    }
  },
  'walking-lunges': {
    id: 'walking-lunges',
    name: 'Walking Lunges',
    category: 'strength',
    equipment: ['Dumbbells (optional)'],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet hip-width apart, holding dumbbells by your sides (optional).',
      'Step forward with one leg, lowering your hips until both knees are bent at approximately a 90-degree angle.',
      'Ensure your front knee is directly over your ankle and your back knee hovers just above the floor.',
      'Push off your back foot and drive through your front heel to bring your back leg forward into the next lunge step.',
      'Continue alternating legs, maintaining balance and control throughout the movement.'
    ],
    safetyNotes: [
      'Ensure your front knee does not collapse inward or extend past your toes.',
      'Maintain an upright torso; avoid leaning too far forward or arching your back.',
      'Control the descent; do not drop into the lunge rapidly.'
    ],
    modifications: {
      beginner: 'Perform stationary lunges (Reverse Lunges or Forward Lunges in place) to master form before adding movement. Use bodyweight only.',
      advanced: 'Increase the weight of the dumbbells. Perform with a barbell on your back. Add a pulse at the bottom of each lunge.',
      equipment_alternatives: {
        'Dumbbells': 'Kettlebells',
        'Barbell': 'Barbell'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, chest up, shoulders back.',
        'Core braced, gaze forward.',
        'Dumbbells held securely (optional).'
      ],
      execution: [
        'Step forward, lower hips, 90-degree bend in both knees.',
        'Front knee over ankle, back knee hovers.',
        'Drive through front heel, step into next lunge.'
      ],
      common_mistakes: [
        'Front knee caving inward or going past toes.',
        'Rounding the back or leaning too far forward.',
        'Losing balance due to uncontrolled movement.'
      ],
      breathing: 'Inhale as you lunge down, exhale as you push up and step forward.'
    }
  },
  'bird-dog': {
    id: 'bird-dog',
    name: 'Bird-Dog',
    category: 'core',
    equipment: [],
    muscleGroups: ['Core (Transverse Abdominis, Obliques, Erector Spinae)', 'Glutes'],
    difficulty: 1,
    instructions: [
      'Start on your hands and knees, with your hands directly under your shoulders and your knees directly under your hips.',
      'Keep your back flat and core engaged, maintaining a neutral spine (imagine balancing a cup of water on your lower back).',
      'Slowly extend your right arm straight forward while simultaneously extending your left leg straight back, keeping them parallel to the floor.',
      'Focus on keeping your hips and shoulders level, avoiding any rotation or arching in your lower back.',
      'Slowly return your arm and leg to the starting position, then repeat on the opposite side (left arm, right leg).'
    ],
    safetyNotes: [
      'Maintain a neutral spine throughout the movement; avoid arching or rounding your lower back.',
      'Perform slowly and with control; this is an exercise for stability, not speed.',
      'Keep your core tightly braced to prevent any unwanted movement in your torso.'
    ],
    modifications: {
      beginner: 'Perform only arm extensions or only leg extensions. Reduce the length of the extension.',
      advanced: 'Hold the extended position for a longer duration. Place a light weight (e.g., small dumbbell, water bottle) on your lower back to provide feedback on stability.',
      equipment_alternatives: {
        'Bodyweight': 'Dead Bug (supine position)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hands under shoulders, knees under hips, flat back.',
        'Core engaged, gaze down, neutral neck.',
        'Imagine balancing a cup of water on your lower back.'
      ],
      execution: [
        'Extend opposite arm and leg slowly and simultaneously.',
        'Keep hips and shoulders level, avoid rotation.',
        'Return to start with control before switching sides.'
      ],
      common_mistakes: [
        'Arching or rounding the lower back excessively.',
        'Rocking hips side-to-side.',
        'Moving too quickly and losing control.'
      ],
      breathing: 'Breathe naturally and deeply throughout the movement.'
    }
  },
  'standing-calf-stretch': {
    id: 'standing-calf-stretch',
    name: 'Standing Calf Stretch (Gastrocnemius)',
    category: 'flexibility',
    equipment: ['Wall', 'Sturdy Object'],
    muscleGroups: ['Calves (Gastrocnemius)', 'Achilles Tendon'],
    difficulty: 1,
    instructions: [
      'Stand facing a wall or sturdy object, placing your hands on it for support at shoulder height.',
      'Step one leg back, keeping it straight with your heel on the floor and toes pointing forward.',
      'Keep your front knee slightly bent.',
      'Lean forward into the wall, keeping the back leg straight and heel down, until you feel a stretch in the calf of your back leg.',
      'Hold the stretch for 20-30 seconds, breathing deeply, then switch legs.'
    ],
    safetyNotes: [
      'Do not bounce into the stretch; apply gentle, sustained pressure.',
      'Keep your back leg straight and heel on the floor to target the gastrocnemius.',
      'Stop if you feel any sharp pain in your calf or Achilles tendon.'
    ],
    modifications: {
      beginner: 'Reduce the distance you step back to lessen the intensity of the stretch.',
      advanced: 'Increase the distance you step back. Perform the stretch with the ball of your foot on an elevated surface (e.g., step) to increase the stretch.',
      equipment_alternatives: {
        'Wall': 'Strap or Towel (for seated calf stretch)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Face wall, hands on wall, one leg back, straight.',
        'Front knee bent, back heel down, toes forward.',
        'Ready to lean into stretch.'
      ],
      execution: [
        'Lean forward, keeping back leg straight and heel down.',
        'Feel stretch in calf, not knee.',
        'Hold and breathe deeply, relax into stretch.'
      ],
      common_mistakes: [
        'Bouncing into the stretch.',
        'Lifting the back heel off the floor.',
        'Rounding the back instead of leaning from hips.'
      ],
      breathing: 'Breathe deeply and slowly throughout the stretch.'
    }
  },
  'box-step-ups': {
    id: 'box-step-ups',
    name: 'Box Step-Ups',
    category: 'strength',
    equipment: ['Plyo Box', 'Bench', 'Sturdy Step'],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand facing a plyo box or sturdy elevated surface, about a foot away.',
      'Place one entire foot flat on the center of the box, ensuring your knee is directly over your ankle.',
      'Drive through the heel of your elevated foot, pushing yourself up until your standing leg is straight on the box.',
      'Bring your trailing leg up to meet the standing leg on the box, or keep it hovering for continuous reps.',
      'Slowly lower the trailing leg back to the floor, then the lead leg, controlling the descent. Alternate lead legs with each rep or after a set number of reps.'
    ],
    safetyNotes: [
      'Use a box height that allows you to maintain good form without excessive knee strain or leaning.',
      'Ensure the box is stable and will not slide or tip over.',
      'Step up with your whole foot; do not push off your toes from the floor.'
    ],
    modifications: {
      beginner: 'Use a lower box height. Perform without dumbbells. Focus on slow, controlled movements.',
      advanced: 'Use a higher box height. Hold dumbbells or a barbell for added resistance. Perform plyometric step-ups (explosive step-up).',
      equipment_alternatives: {
        'Plyo Box': 'Stairs',
        'Bench': 'Bench'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand facing box, one foot flat on box, knee over ankle.',
        'Chest up, shoulders back, core braced.',
        'Gaze forward, ready to drive up.'
      ],
      execution: [
        'Drive through elevated heel, push up powerfully.',
        'Keep torso upright, avoid leaning forward excessively.',
        'Control the descent, don\'t just drop down.'
      ],
      common_mistakes: [
        'Using momentum to step up.',
        'Pushing off the floor with the trailing leg.',
        'Knee caving inward on the elevated leg.'
      ],
      breathing: 'Exhale as you step up, inhale as you lower down.'
    }
  },
  'calf-press': {
    id: 'calf-press',
    name: 'Calf Press (Leg Press Machine)',
    category: 'strength',
    equipment: ['Leg Press Machine'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 2,
    instructions: [
      'Sit on the leg press machine with your back firmly against the pad.',
      'Place the balls of your feet on the lower edge of the footplate, with your heels hanging off.',
      'Release the safety catches and extend your knees slightly, but do not lock them out.',
      'Keeping your knees slightly bent, push the footplate away by extending your ankles, pressing through the balls of your feet and squeezing your calves.',
      'Slowly return the footplate by flexing your ankles, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Do not lock out your knees at any point during the exercise.',
      'Control the movement; do not let the weight stack slam down or bounce.',
      'Ensure your feet are securely placed on the footplate.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-leg calf presses.',
      equipment_alternatives: {
        'Leg Press Machine': 'Standing Calf Raise Machine',
        'Machine': 'Seated Calf Raise Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit on machine, back firm, balls of feet on lower edge of footplate.',
        'Knees slightly bent, ready to press.',
        'Core braced.'
      ],
      execution: [
        'Push footplate by extending ankles, squeezing calves hard.',
        'Control the return, allowing full calf stretch.',
        'Keep knees slightly bent throughout.'
      ],
      common_mistakes: [
        'Locking out knees.',
        'Bouncing the weight.',
        'Not getting a full range of motion.'
      ],
      breathing: 'Exhale as you press, inhale as you return.'
    }
  },
  'standing-dumbbell-calf-raise': {
    id: 'standing-dumbbell-calf-raise',
    name: 'Standing Dumbbell Calf Raise',
    category: 'strength',
    equipment: ['Dumbbells', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a dumbbell in each hand, arms extended by your sides, palms facing your body.',
      'For increased range of motion, stand with the balls of your feet on an elevated surface (e.g., step, weight plate), with your heels hanging off.',
      'Keep your knees straight but not locked out.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Maintain balance throughout the movement; hold onto a stable support if needed.',
      'Do not bounce at the bottom; control the eccentric phase.',
      'Keep your knees straight but avoid locking them out to prevent strain.'
    ],
    modifications: {
      beginner: 'Perform without dumbbells (Bodyweight Calf Raise). Hold onto a wall or sturdy object for balance.',
      advanced: 'Increase the weight of the dumbbells. Perform single-leg standing dumbbell calf raises.',
      equipment_alternatives: {
        'Dumbbells': 'Barbell (Standing Barbell Calf Raise)',
        'Weights': 'Calf Raise Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, dumbbells by sides, balls of feet on elevated surface (optional).',
        'Knees straight but not locked, core braced.',
        'Gaze forward, ready to lift.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing at the bottom.',
        'Not getting a full range of motion (stretch and contraction).',
        'Using momentum instead of calf strength.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'seated-machine-calf-press': {
    id: 'seated-machine-calf-press',
    name: 'Seated Machine Calf Press',
    category: 'strength',
    equipment: ['Seated Calf Raise Machine'],
    muscleGroups: ['Calves (Soleus, Gastrocnemius)'],
    difficulty: 1,
    instructions: [
      'Sit on the seated calf raise machine, placing the balls of your feet on the footplate, with your heels hanging off.',
      'Adjust the knee pad so it rests firmly across your thighs, just above your knees.',
      'Release the safety catch and allow your heels to drop down, feeling a stretch in your calves.',
      'Push the footplate upwards by extending your ankles, pressing through the balls of your feet and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Do not bounce at the bottom; control the eccentric phase.',
      'Ensure the knee pad is securely positioned to prevent it from slipping.',
      'Maintain a controlled movement throughout the entire range of motion.'
    ],
    modifications: {
      beginner: 'Use lighter weight to master the form and mind-muscle connection. Reduce the range of motion if needed.',
      advanced: 'Increase the weight, or incorporate a pause at the top contraction for increased intensity. Perform single-leg seated calf presses.',
      equipment_alternatives: {
        'Seated Calf Raise Machine': 'Standing Calf Raise Machine',
        'Machine': 'Dumbbell Seated Calf Raise'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit on machine, balls of feet on footplate, heels off.',
        'Knee pad secured, ready to lift.',
        'Allow full stretch at the bottom.'
      ],
      execution: [
        'Push up powerfully through balls of feet, squeezing calves.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing the weight.',
        'Not getting a full range of motion.',
        'Using hip flexors to lift the weight instead of calves.'
      ],
      breathing: 'Exhale as you press up, inhale as you lower down.'
    }
  },
  'seated-dumbbell-calf-raise': {
    id: 'seated-dumbbell-calf-raise',
    name: 'Seated Dumbbell Calf Raise',
    category: 'strength',
    equipment: ['Dumbbells', 'Bench', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Soleus)'],
    difficulty: 1,
    instructions: [
      'Sit on a flat bench or chair with your feet flat on the floor.',
      'Place a dumbbell on top of each thigh, just above your knees, holding them in place with your hands.',
      'For increased range of motion, place the balls of your feet on an elevated surface (e.g., weight plate) with your heels hanging off.',
      'Allow your heels to drop down, feeling a stretch in your calves.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Ensure the dumbbells are securely placed and do not slide off your thighs.',
      'Control the movement; do not bounce at the bottom.',
      'Maintain an upright posture; avoid rounding your back.'
    ],
    modifications: {
      beginner: 'Use lighter dumbbells or perform without weight. Reduce the range of motion if needed.',
      advanced: 'Increase the weight of the dumbbells. Perform single-leg seated dumbbell calf raises.',
      equipment_alternatives: {
        'Dumbbells': 'Seated Calf Raise Machine',
        'Weights': 'Barbell (for seated calf raise)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 5,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Sit on bench, dumbbells on thighs, balls of feet on elevated surface (optional).',
        'Heels down, ready to lift.',
        'Maintain upright posture.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing the weights.',
        'Not getting a full range of motion.',
        'Allowing dumbbells to slide off thighs.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'standing-barbell-calf-raise': {
    id: 'standing-barbell-calf-raise',
    name: 'Standing Barbell Calf Raise',
    category: 'strength',
    equipment: ['Barbell', 'Weight Plates', 'Squat Rack (optional)', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 3,
    instructions: [
      'Load a barbell and place it on your upper back, similar to a high-bar squat position, in a squat rack (optional).',
      'Stand with the balls of your feet on an elevated surface (e.g., step, weight plate), with your heels hanging off, feet hip-width apart.',
      'Keep your knees straight but not locked out, and maintain an upright torso.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Maintain balance throughout the movement; use a squat rack for safety if lifting heavy.',
      'Do not bounce at the bottom; control the eccentric phase.',
      'Keep your knees straight but avoid locking them out to prevent strain.'
    ],
    modifications: {
      beginner: 'Use lighter weight or perform with dumbbells (Standing Dumbbell Calf Raise). Focus on bodyweight calf raises first.',
      advanced: 'Increase the weight. Perform single-leg standing barbell calf raises (advanced and requires significant balance).',
      equipment_alternatives: {
        'Barbell': 'Dumbbells',
        'Weights': 'Calf Raise Machine'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 20,
      progressionRate: 0.025,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell on upper back, balls of feet on elevated surface, heels off.',
        'Knees straight but not locked, core braced.',
        'Gaze forward, ready to lift.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing at the bottom.',
        'Not getting a full range of motion (stretch and contraction).',
        'Losing balance or shifting weight excessively.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'standing-kettlebell-calf-raise': {
    id: 'standing-kettlebell-calf-raise',
    name: 'Standing Kettlebell Calf Raise',
    category: 'strength',
    equipment: ['Kettlebells (1 or 2)', 'Elevated Surface (optional)'],
    muscleGroups: ['Calves (Gastrocnemius, Soleus)'],
    difficulty: 2,
    instructions: [
      'Stand tall with a kettlebell in one or both hands, arms extended by your sides.',
      'For increased range of motion, stand with the balls of your feet on an elevated surface (e.g., step, weight plate), with your heels hanging off.',
      'Keep your knees straight but not locked out.',
      'Slowly raise yourself up onto the balls of your feet, pushing through your toes and squeezing your calves hard at the top.',
      'Slowly lower your heels back down, allowing a full stretch in your calves, then repeat.'
    ],
    safetyNotes: [
      'Maintain balance throughout the movement; hold onto a stable support if needed.',
      'Do not bounce at the bottom; control the eccentric phase.',
      'Keep your knees straight but avoid locking them out to prevent strain.'
    ],
    modifications: {
      beginner: 'Use lighter kettlebell or perform without weight (Bodyweight Calf Raise). Hold onto a wall or sturdy object for balance.',
      advanced: 'Increase the weight of the kettlebell(s). Perform single-leg standing kettlebell calf raises.',
      equipment_alternatives: {
        'Kettlebells': 'Dumbbells',
        'Weights': 'Barbell'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 8,
      progressionRate: 0.05,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Stand tall, kettlebell(s) by sides, balls of feet on elevated surface (optional).',
        'Knees straight but not locked, core braced.',
        'Gaze forward, ready to lift.'
      ],
      execution: [
        'Raise up onto balls of feet, squeezing calves hard.',
        'Hold peak contraction briefly.',
        'Control the descent, feeling the stretch in calves.'
      ],
      common_mistakes: [
        'Bouncing at the bottom.',
        'Not getting a full range of motion (stretch and contraction).',
        'Using momentum instead of calf strength.'
      ],
      breathing: 'Exhale as you raise up, inhale as you lower down.'
    }
  },
  'stiff-legged-barbell-good-morning': {
    id: 'stiff-legged-barbell-good-morning',
    name: 'Stiff-Legged Barbell Good Morning',
    category: 'strength',
    equipment: ['Barbell', 'Weight Plates', 'Squat Rack (optional)'],
    muscleGroups: ['Hamstrings', 'Glutes', 'Lower Back'],
    difficulty: 3,
    instructions: [
      'Place a barbell on your upper back, similar to a high-bar squat position, in a squat rack (optional).',
      'Stand with feet hip-width apart, knees almost completely straight (micro-bend, do not lock out).',
      'Keeping your back straight and core engaged, slowly hinge forward at your hips, pushing your glutes back.',
      'Lower your torso until it is nearly parallel to the floor, or until you feel a strong stretch in your hamstrings.',
      'Engage your glutes and hamstrings to pull your torso back up to the starting position, squeezing your glutes at the top.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout the entire movement; rounding your back can lead to serious injury.',
      'Use light weight, especially when learning, as this exercise places significant stress on the lower back.',
      'Do not go lower than your hamstring flexibility allows; stop when you feel a strong stretch.'
    ],
    modifications: {
      beginner: 'Perform with a broomstick or PVC pipe to master the hip hinge, or use a very light barbell. Perform Dumbbell Stiff Legged Deadlifts first.',
      advanced: 'Increase the weight, or incorporate a pause at the bottom of the movement.',
      equipment_alternatives: {
        'Barbell': 'Dumbbells (Dumbbell Stiff Legged Deadlift)',
        'Weights': 'Resistance Band (around neck and under feet)'
      }
    },
    metrics: {
      type: 'weight',
      defaultValue: 10,
      progressionRate: 0.025,
      unit: 'kg'
    },
    coaching: {
      setup: [
        'Barbell on upper back, feet hip-width, knees almost straight.',
        'Shoulders back and down, chest up.',
        'Brace core firmly.'
      ],
      execution: [
        'Initiate by pushing hips back, keeping back flat and legs almost straight.',
        'Lower torso with control, feeling hamstring stretch.',
        'Squeeze glutes and hamstrings to return to upright position.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Bending knees excessively, turning it into a squat.',
        'Going too low and losing back integrity.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },
  'incline-back-extension': {
    id: 'incline-back-extension',
    name: 'Incline Back Extension',
    category: 'strength',
    equipment: ['Incline Hyperextension Bench'],
    muscleGroups: ['Lower Back (Erector Spinae)', 'Glutes', 'Hamstrings'],
    difficulty: 2,
    instructions: [
      'Adjust the incline hyperextension bench so the top of the pad is just below your hip crease, allowing you to hinge freely at your hips.',
      'Hook your heels securely under the foot pads, crossing your arms over your chest or placing hands lightly behind your head.',
      'Allow your torso to bend forward at the hips, keeping your back straight, until you feel a stretch in your hamstrings and lower back.',
      'Engage your lower back and glutes to extend your torso upwards until your body forms a straight line from your head to your heels.',
      'Squeeze your lower back and glutes at the peak contraction, then slowly lower back down with control.'
    ],
    safetyNotes: [
      'Avoid rounding your back; maintain a straight spine throughout the movement.',
      'Do not hyperextend excessively at the top; stop when your body is in a straight line.',
      'Control the movement; avoid jerking or using momentum.'
    ],
    modifications: {
      beginner: 'Perform without added weight. Reduce the range of motion if needed.',
      advanced: 'Hold a weight plate or dumbbell to your chest for added resistance. Perform with a slower eccentric phase.',
      equipment_alternatives: {
        'Incline Hyperextension Bench': 'Back Extension (horizontal bench)',
        'Machine': 'Superman (bodyweight)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Adjust pad to hip crease, heels hooked securely.',
        'Arms crossed or hands behind head, back straight.',
        'Core braced, ready to hinge.'
      ],
      execution: [
        'Hinge at hips, extend torso up using lower back and glutes.',
        'Squeeze glutes and lower back at the top.',
        'Control the descent, feeling the stretch.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Hyperextending excessively at the top.',
        'Using momentum to lift the torso.'
      ],
      breathing: 'Exhale as you extend up, inhale as you lower down.'
    }
  },
  'foam-roll-hip-abductors': {
    id: 'foam-roll-hip-abductors',
    name: 'Foam Roll Hip Abductors',
    category: 'flexibility',
    equipment: ['Foam Roller'],
    muscleGroups: ['Hip Abductors (Gluteus Medius, TFL)'],
    difficulty: 1,
    instructions: [
      'Lie on your side with the foam roller positioned under your outer thigh/hip area.',
      'Support your body with your forearms and the leg that is not on the roller (bent knee on the floor for stability).',
      'Slowly roll your body up and down, allowing the foam roller to move along the side of your thigh, from just below your hip to just above your knee.',
      'Pause on any tender spots and apply sustained pressure until the discomfort lessens.',
      'Continue rolling for 30-60 seconds on each side.'
    ],
    safetyNotes: [
      'Avoid rolling directly over bony prominences or joints.',
      'Control the pressure; it should be uncomfortable but not painful.',
      'Stop if you feel any sharp pain.'
    ],
    modifications: {
      beginner: 'Reduce the amount of body weight on the roller by using more support from your arms and non-rolling leg.',
      advanced: 'Increase the pressure by stacking your legs or using less support from your arms.',
      equipment_alternatives: {
        'Foam Roller': 'Massage Ball',
        'Equipment': 'Manual Massage'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie on side, foam roller under outer thigh/hip.',
        'Support with forearms and non-rolling leg.',
        'Relax muscles being rolled.'
      ],
      execution: [
        'Slowly roll up and down, covering entire outer thigh.',
        'Pause on tender spots, breathe deeply.',
        'Control the movement, avoid jerky motions.'
      ],
      common_mistakes: [
        'Rolling too quickly.',
        'Applying too much pressure too soon.',
        'Holding breath due to discomfort.'
      ],
      breathing: 'Breathe deeply and slowly throughout the rolling process.'
    }
  },
};

// Exercise categories for easy filtering
export const EXERCISE_CATEGORIES = {
  strength: ['push-up', 'diamond-push-up', 'squat', 'lunge', 'lat-pulldown', 'dumbbell-row', 'cable-row', 'dumbbell-bent-over-row', 'bent-over-barbell-row', 'kettlebell-row', 'landmine-row', 'seated-leg-curl', 'dumbbell-romanian-deadlift', 'romanian-deadlift', 'lying-hamstrings-curl', 'single-leg-romanian-deadlift', 'good-morning', 'deadlift', 'kettlebell-swing', 'hip-thrust', 'barbell-hip-thrust', 'glute-bridge', 'single-leg-glute-bridge', 'side-leg-raises', 'barbell-curl', 'dumbbell-curl', 'hammer-curl', 'preacher-curl', 'sled-push', 'sled-pull', 'farmers-carry', 'sandbag-lunges', 'grip-endurance-circuit', 'sled-conditioning', 'machine-row', 'hammerstrength-high-row', 'hammerstrength-iso-row', 'incline-dumbbell-row', 'shotgun-row', 'kettlebell-alternating-row', 'cable-lateral-raise', 'dumbbell-rear-delt-raise', 'dumbbell-lateral-raise', 'dumbbell-shoulder-press', 'dumbbell-front-raise', 'straight-leg-kickback', 'medicine-ball-curtsy-lunge', 'medicine-ball-hip-thrusts', 'single-leg-kickback', 'elevated-hip-bridge', 'dumbbell-hip-thrust', 'glute-kickback-machine', 'walking-lunges', 'box-step-ups', 'calf-press', 'standing-dumbbell-calf-raise', 'seated-machine-calf-press', 'seated-dumbbell-calf-raise', 'standing-barbell-calf-raise', 'standing-kettlebell-calf-raise', 'stiff-legged-barbell-good-morning', 'incline-back-extension'],
  core: ['plank', 'crunches', 'russian-twist', 'leg-raise', 'bicycle-crunch', 'dead-bug', 'reverse-crunch', 'oblique-crunch', 'bird-dog'],
  cardio: ['jumping-jacks', 'mountain-climber', 'a-skips', 'b-skips', 'carioca', 'step-ups', 'marching-in-place', 'skierg', 'rowing-erg', 'compromised-running', 'station-transitions', 'running-sandwich', 'mock-hyrox', 'zone-2-recovery-run', 'hyrox-pace-runs', 'high-knees'],
  plyometric: ['burpee', 'jump-squat', 'burpee-broad-jumps', 'wall-balls'],
  mobility: ['arm-circles'],
  flexibility: ['standing-calf-stretch', 'foam-roll-hip-abductors'],
  none: ['push-up', 'diamond-push-up', 'squat', 'jump-squat', 'lunge', 'plank', 'crunches', 'russian-twist', 'leg-raise', 'bicycle-crunch', 'dead-bug', 'reverse-crunch', 'oblique-crunch', 'jumping-jacks', 'burpee', 'mountain-climber', 'lat-pulldown', 'dumbbell-row', 'cable-row', 'dumbbell-bent-over-row', 'bent-over-barbell-row', 'kettlebell-row', 'landmine-row', 'seated-leg-curl', 'dumbbell-romanian-deadlift', 'romanian-deadlift', 'lying-hamstrings-curl', 'single-leg-romanian-deadlift', 'good-morning', 'deadlift', 'kettlebell-swing', 'hip-thrust', 'barbell-hip-thrust', 'glute-bridge', 'single-leg-glute-bridge', 'side-leg-raises', 'barbell-curl', 'dumbbell-curl', 'hammer-curl', 'preacher-curl', 'a-skips', 'b-skips', 'carioca', 'step-ups', 'marching-in-place', 'arm-circles', 'skierg', 'sled-push', 'sled-pull', 'burpee-broad-jumps', 'rowing-erg', 'farmers-carry', 'sandbag-lunges', 'wall-balls', 'compromised-running', 'station-transitions', 'running-sandwich', 'mock-hyrox', 'grip-endurance-circuit', 'sled-conditioning', 'zone-2-recovery-run', 'hyrox-pace-runs', 'machine-row', 'hammerstrength-high-row', 'hammerstrength-iso-row', 'incline-dumbbell-row', 'shotgun-row', 'kettlebell-alternating-row', 'cable-lateral-raise', 'dumbbell-rear-delt-raise', 'dumbbell-lateral-raise', 'dumbbell-shoulder-press', 'dumbbell-front-raise', 'straight-leg-kickback', 'medicine-ball-curtsy-lunge', 'medicine-ball-hip-thrusts', 'single-leg-kickback', 'elevated-hip-bridge', 'dumbbell-hip-thrust', 'glute-kickback-machine', 'high-knees', 'walking-lunges', 'bird-dog', 'standing-calf-stretch', 'box-step-ups', 'calf-press', 'standing-dumbbell-calf-raise', 'seated-machine-calf-press', 'seated-dumbbell-calf-raise', 'standing-barbell-calf-raise', 'standing-kettlebell-calf-raise', 'stiff-legged-barbell-good-morning', 'incline-back-extension', 'foam-roll-hip-abductors']
};

// Helper functions
export function getExercisesByCategory(category: string): Exercise[] {
  return EXERCISE_CATEGORIES[category as keyof typeof EXERCISE_CATEGORIES]?.map(id => EXERCISE_DATABASE[id]).filter(Boolean) || [];
}

export function getExercisesByEquipment(equipment: string[]): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => 
    equipment.length === 0 || exercise.equipment.some(eq => equipment.includes(eq))
  );
}

export function getExercisesByDifficulty(difficulty: number): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => exercise.difficulty <= difficulty);
}

export function getExercisesByMuscleGroup(muscleGroup: string): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => 
    exercise.muscleGroups.some(mg => mg.toLowerCase().includes(muscleGroup.toLowerCase()))
  );
}

// ===== HYROX TRAINING DATA HELPER FUNCTIONS =====

/**
 * Get HYROX exercise alternatives for a given exercise
 */
export function getHyroxAlternatives(exerciseName: string): string[] {
  const alternatives = HYROX_TRAINING_DATA.hyrox_alternatives[exerciseName as keyof typeof HYROX_TRAINING_DATA.hyrox_alternatives];
  return alternatives || [];
}

/**
 * Get HYROX performance standards by level
 */
export function getHyroxStandards(level: 'beginner' | 'intermediate' | 'advanced' | 'average') {
  return HYROX_TRAINING_DATA.hyrox_standards[level];
}

/**
 * Get full HYROX simulation workout
 */
export function getHyroxSimulationWorkout() {
  return HYROX_TRAINING_DATA.hyrox_workouts[0];
}

/**
 * Get HYROX world records
 */
export function getHyroxRecords() {
  return HYROX_TRAINING_DATA.hyrox_records;
}

/**
 * Check if an exercise has HYROX alternatives
 */
export function hasHyroxAlternatives(exerciseName: string): boolean {
  return exerciseName in HYROX_TRAINING_DATA.hyrox_alternatives;
}

/**
 * Get all HYROX-specific exercises from the database
 */
export function getHyroxExercises(): Exercise[] {
  const hyroxExerciseIds = [
    'skierg', 'sled-push', 'sled-pull', 'burpee-broad-jumps', 
    'rowing-erg', 'farmers-carry', 'sandbag-lunges', 'wall-balls',
    'compromised-running', 'station-transitions', 'running-sandwich',
    'mock-hyrox', 'grip-endurance-circuit', 'sled-conditioning',
    'zone-2-recovery-run', 'hyrox-pace-runs'
  ];
  
  return hyroxExerciseIds
    .map(id => EXERCISE_DATABASE[id])
    .filter(Boolean);
}

/**
 * Generate HYROX training suggestions based on user level
 */
export function generateHyroxTrainingSuggestions(level: 'beginner' | 'intermediate' | 'advanced') {
  const standards = getHyroxStandards(level);
  const hyroxExercises = getHyroxExercises();
  
  const suggestions = {
    target_standards: standards,
    recommended_exercises: hyroxExercises.slice(0, level === 'beginner' ? 4 : level === 'intermediate' ? 8 : 12),
    weekly_structure: {
      running_volume: level === 'beginner' ? '15-20km' : level === 'intermediate' ? '25-35km' : '35-50km',
      strength_sessions: level === 'beginner' ? 2 : level === 'intermediate' ? 3 : 4,
      hyrox_specific_sessions: level === 'beginner' ? 1 : 2
    }
  };
  
  return suggestions;
}

/**
 * Get exercise alternatives for equipment substitution
 */
export function getEquipmentAlternatives(originalExercise: string, availableEquipment: string[]): string[] {
  const exercise = EXERCISE_DATABASE[originalExercise];
  if (!exercise) return [];
  
  // Check if user has required equipment
  const hasRequiredEquipment = exercise.equipment.every(eq => 
    availableEquipment.includes(eq) || eq === '' // empty string means bodyweight
  );
  
  if (hasRequiredEquipment) {
    return [originalExercise]; // No substitution needed
  }
  
  // Look for alternatives in HYROX alternatives first
  const hyroxAlts = getHyroxAlternatives(originalExercise);
  if (hyroxAlts.length > 0) {
    // Filter alternatives based on available equipment
    return hyroxAlts.filter(alt => {
      const altExercise = Object.values(EXERCISE_DATABASE).find(ex => 
        ex.name.toLowerCase().includes(alt.toLowerCase()) || 
        ex.id.includes(alt.replace(/[^a-z0-9]/gi, '-').toLowerCase())
      );
      
      if (!altExercise) return false;
      
      return altExercise.equipment.every(eq => 
        availableEquipment.includes(eq) || eq === ''
      );
    });
  }
  
  // Fallback to exercises targeting same muscle groups
  return Object.values(EXERCISE_DATABASE)
    .filter(ex => {
      // Same muscle groups
      const hasCommonMuscles = ex.muscleGroups.some(mg => 
        exercise.muscleGroups.includes(mg)
      );
      
      // Compatible equipment
      const hasCompatibleEquipment = ex.equipment.every(eq => 
        availableEquipment.includes(eq) || eq === ''
      );
      
      return hasCommonMuscles && hasCompatibleEquipment;
    })
    .slice(0, 3)
    .map(ex => ex.id);
}

// ===== MARATHON TRAINING DATA HELPER FUNCTIONS =====

/**
 * Get marathon training program by name
 */
export function getMarathonProgram(programName: string) {
  return MARATHON_TRAINING_DATA.marathon_training_programs.find(
    program => program.program_name.toLowerCase().includes(programName.toLowerCase())
  );
}

/**
 * Get all marathon training programs
 */
export function getAllMarathonPrograms() {
  return MARATHON_TRAINING_DATA.marathon_training_programs;
}

/**
 * Get marathon program recommendation based on experience level
 */
export function getMarathonProgramRecommendation(experienceLevel: 'beginner' | 'novice' | 'intermediate' | 'advanced' | 'elite') {
  const programMap = {
    'beginner': 'Novice 1 Marathon Program',
    'novice': 'Novice 2 Marathon Program',
    'intermediate': 'Intermediate 1 Marathon Program',
    'advanced': 'Advanced 1 Marathon Program',
    'elite': 'Personal Best Marathon Program'
  };
  
  const programName = programMap[experienceLevel];
  return getMarathonProgram(programName);
}

/**
 * Calculate weekly mileage progression for marathon training
 */
export function calculateMarathonMileageProgression(
  program: string, 
  currentWeek: number, 
  baseWeeklyMileage: number = 20
) {
  const marathonProgram = getMarathonProgram(program);
  if (!marathonProgram) return null;
  
  // Basic progression formula with stepback weeks every 3rd week
  const isStepbackWeek = currentWeek % 3 === 0;
  const progressionFactor = isStepbackWeek ? 0.75 : 1 + (currentWeek * 0.1);
  
  const weeklyMileage = Math.round(baseWeeklyMileage * progressionFactor);
  
  return {
    week: currentWeek,
    total_weekly_mileage: weeklyMileage,
    long_run_mileage: Math.round(weeklyMileage * 0.4), // ~40% of weekly mileage
    is_stepback_week: isStepbackWeek,
    program_name: marathonProgram.program_name
  };
}

/**
 * Get marathon pace zones and training paces
 */
export function getMarathonPaceZones(marathonGoalTime: string) {
  // Convert goal time to minutes per mile
  const [hours, minutes] = marathonGoalTime.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  const marathonPacePerMile = totalMinutes / 26.2;
  
  return {
    marathon_pace: `${Math.floor(marathonPacePerMile)}:${String(Math.round((marathonPacePerMile % 1) * 60)).padStart(2, '0')}`,
    easy_pace: `${Math.floor(marathonPacePerMile + 1)}:${String(Math.round(((marathonPacePerMile + 1) % 1) * 60)).padStart(2, '0')}`,
    long_run_pace: `${Math.floor(marathonPacePerMile + 0.5)}:${String(Math.round(((marathonPacePerMile + 0.5) % 1) * 60)).padStart(2, '0')}`,
    tempo_pace: `${Math.floor(marathonPacePerMile - 0.5)}:${String(Math.round(((marathonPacePerMile - 0.5) % 1) * 60)).padStart(2, '0')}`,
    interval_pace: `${Math.floor(marathonPacePerMile - 1)}:${String(Math.round(((marathonPacePerMile - 1) % 1) * 60)).padStart(2, '0')}`
  };
}

/**
 * Generate weekly marathon training schedule
 */
export function generateMarathonWeeklySchedule(
  programName: string, 
  week: number, 
  goalTime?: string
) {
  const program = getMarathonProgram(programName);
  if (!program) return null;
  
  const mileageData = calculateMarathonMileageProgression(programName, week);
  const paceZones = goalTime ? getMarathonPaceZones(goalTime) : null;
  
  // Base schedule template
  const schedule = {
    program: program.program_name,
    week: week,
    total_mileage: mileageData?.total_weekly_mileage || 0,
    workouts: {
      monday: program.key_workouts?.rest_days?.includes('Mondays') ? 'Rest' : 'Easy Run 3-5 miles',
      tuesday: 'Easy Run 3-6 miles',
      wednesday: program.program_name.includes('Novice') ? 'Sorta-Long Run' : 'Tempo/Pace Run',
      thursday: 'Easy Run 3-6 miles',
      friday: 'Rest',
      saturday: program.program_name.includes('Intermediate') ? 'Marathon Pace Run' : 'Easy Run',
      sunday: `Long Run ${mileageData?.long_run_mileage || 8} miles`
    },
    pace_guidance: paceZones,
    notes: mileageData?.is_stepback_week ? 'Stepback week for recovery' : 'Build week'
  };
  
  return schedule;
}

/**
 * Get marathon training tips based on program level
 */
export function getMarathonTrainingTips(programLevel: string) {
  const tips = {
    'novice': [
      'Focus on completing the distance, not speed',
      'Walk breaks are encouraged, especially at aid stations',
      'Listen to your body and don\'t skip rest days',
      'Gradually build mileage with stepback weeks every third week'
    ],
    'intermediate': [
      'Introduce some marathon pace running on weekends',
      'Maintain conversational pace for long runs',
      'Add cross-training for recovery and injury prevention',
      'Practice race day nutrition and hydration'
    ],
    'advanced': [
      'Incorporate speedwork: hills, intervals, and tempo runs',
      'Practice negative splits in long runs',
      'Focus on consistency over intensity',
      'Simulate race conditions in training'
    ],
    'elite': [
      'Combine base building with specific marathon training',
      'Include race-specific workouts and pacing',
      'Monitor training load and recovery metrics',
      'Peak for goal race with strategic training phases'
    ]
  };
  
  const level = programLevel.toLowerCase();
  if (level.includes('novice')) return tips.novice;
  if (level.includes('intermediate')) return tips.intermediate;
  if (level.includes('advanced')) return tips.advanced;
  if (level.includes('personal best')) return tips.elite;
  
  return tips.novice; // Default fallback
}

/**
 * Check if runner is ready for marathon training
 */
export function assessMarathonReadiness(
  weeklyMileage: number, 
  longestRun: number, 
  runningExperience: number
) {
  const readiness = {
    ready: false,
    recommended_program: '',
    preparation_needed: [] as string[]
  };
  
  if (weeklyMileage >= 25 && longestRun >= 10 && runningExperience >= 12) {
    readiness.ready = true;
    readiness.recommended_program = runningExperience >= 24 ? 'Intermediate 1' : 'Novice 2';
  } else if (weeklyMileage >= 15 && longestRun >= 6 && runningExperience >= 6) {
    readiness.ready = true;
    readiness.recommended_program = 'Novice 1';
  } else {
    if (weeklyMileage < 15) readiness.preparation_needed.push('Build base to 15+ miles per week');
    if (longestRun < 6) readiness.preparation_needed.push('Complete 6+ mile long runs consistently');
    if (runningExperience < 6) readiness.preparation_needed.push('Gain more running experience (6+ months)');
  }
  
  return readiness;
}

// Distance conversion utilities
export function milesToKilometers(miles: number): number {
  return miles * 1.60934;
}

export function kilometersToMiles(kilometers: number): number {
  return kilometers / 1.60934;
}

export function convertPaceMinPerMileToMinPerKm(paceMinPerMile: string): string {
  // Convert pace from min/mile to min/km (e.g., "7:30" -> "4:39")
  const [minutes, seconds] = paceMinPerMile.split(':').map(Number);
  const totalMinutes = minutes + seconds / 60;
  const kmPace = totalMinutes / 1.60934;
  const kmMinutes = Math.floor(kmPace);
  const kmSeconds = Math.round((kmPace - kmMinutes) * 60);
  return `${kmMinutes}:${kmSeconds.toString().padStart(2, '0')}`;
}

export function convertPaceMinPerKmToMinPerMile(paceMinPerKm: string): string {
  // Convert pace from min/km to min/mile (e.g., "4:39" -> "7:30")
  const [minutes, seconds] = paceMinPerKm.split(':').map(Number);
  const totalMinutes = minutes + seconds / 60;
  const milePace = totalMinutes * 1.60934;
  const mileMinutes = Math.floor(milePace);
  const mileSeconds = Math.round((milePace - mileMinutes) * 60);
  return `${mileMinutes}:${mileSeconds.toString().padStart(2, '0')}`;
}

export function formatDistance(distance: number, unit: 'miles' | 'km' = 'miles', precision: number = 2): string {
  return `${distance.toFixed(precision)} ${unit}`;
}

export function convertDistance(distance: number, fromUnit: 'miles' | 'km', toUnit: 'miles' | 'km'): number {
  if (fromUnit === toUnit) return distance;
  return fromUnit === 'miles' ? milesToKilometers(distance) : kilometersToMiles(distance);
} 