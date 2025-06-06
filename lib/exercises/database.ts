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

// ===== AI TRAINING GUIDANCE: INJURY PREVENTION & TREATMENT METHODOLOGY =====

/**
 * CORE PHILOSOPHY & METHODOLOGY FOR AI MODEL TRAINING
 * 
 * This section provides the foundational understanding for how to approach
 * running injury prevention and treatment through exercise prescription.
 */

export const INJURY_PREVENTION_METHODOLOGY = {
  core_philosophy: {
    principle: "Most common running injuries are not isolated events but symptoms of muscle imbalances",
    manifestation: "Combination of weakness in crucial stabilizing muscles and tightness in others",
    root_causes: [
      "Repetitive nature of running",
      "Poor biomechanics", 
      "Lifestyle factors (prolonged sitting)",
      "Muscle compensation patterns"
    ],
    intervention_strategy: {
      dual_approach: {
        targeted_strengthening: {
          purpose: "Activating and building strength in underused or weak supporting muscles",
          primary_targets: ["glutes", "core", "feet", "hamstrings", "hip stabilizers"]
        },
        mobility_and_release: {
          purpose: "Stretching and releasing overused, tight, or shortened muscles",
          primary_targets: ["hip flexors", "TFL", "quads", "calves", "piriformis"]
        }
      },
      program_structure: "Multi-week routine combining strengthening and mobility to address root cause, not just symptoms"
    }
  },

  injury_specific_protocols: {
    "low-back-and-sciatic-pain": {
      identified_causes: {
        weakness: ["core", "glutes", "hamstrings", "postural muscles"],
        tightness: ["hip flexors (psoas)", "hamstrings", "piriformis"],
        lifestyle_factors: ["prolonged sitting", "poor posture"]
      },
      solution_profile: {
        strengthen: ["core", "glutes", "postural muscles", "deep stabilizers"],
        stretch_mobilize: ["hip flexors", "hamstrings", "piriformis"],
        goal: "Decompress lumbar spine and sciatic nerve pathway"
      },
      exercise_categories: ["core", "strength", "flexibility", "mobility"],
      key_exercises: [
        "glute-bridge", "bird-dog", "dead-bug", "hip-flexor-stretch", 
        "pigeon-pose", "cat-cow", "standing-cat-cow"
      ]
    },

    "hip-and-knee-pain-it-band": {
      identified_causes: {
        primary_root: "Weak and tight hips/glutes",
        mechanism: "Weak gluteus medius fails to stabilize pelvis and femur",
        compensation: "Strain on knee joint and IT Band"
      },
      solution_profile: {
        strengthen: ["entire hip complex", "glutes", "adductors", "hip flexors"],
        stretch_mobilize: ["TFL", "quads", "hip flexors"],
        stabilize: ["core to reduce rotational forces"]
      },
      exercise_categories: ["strength", "mobility", "core"],
      key_exercises: [
        "clamshells", "lateral-walk", "single-leg-glute-bridge", 
        "standing-hip-open-and-close", "lateral-leg-lift"
      ]
    },

    "shin-splints": {
      identified_causes: {
        overuse_factor: "Contributing but not root cause",
        biomechanical_faults: ["weak hip flexors", "weak calves", "poor core/hip stability"],
        mechanism: "Excessive motion upon landing and push-off"
      },
      solution_profile: {
        primary_focus: "Calf mobility and strength",
        kinetic_chain: "Strengthen hip flexors, glutes, core, and feet",
        approach: "Address entire kinetic chain above injury site"
      },
      exercise_categories: ["strength", "mobility", "core"],
      key_exercises: [
        "single-leg-calf-raise", "standing-dumbbell-calf-raise", 
        "ankle-rocks", "single-leg-shin-sequence", "high-knees"
      ]
    },

    "foundational-stability": {
      ankle_foot_stability: {
        identified_causes: {
          principle: "Feet are the body's foundation",
          mechanism: "Weakness and instability translate up kinetic chain"
        },
        solution_profile: {
          direct_targets: ["foot stability", "ankle stability", "calf strength"],
          exercises: ["calf strengthening", "shin stability", "ankle mobility drills"]
        },
        key_exercises: [
          "single-leg-calf-raise", "balance-and-change-of-support-drill",
          "ankle-rocks", "pony-drill"
        ]
      },
      
      posture_correction: {
        identified_causes: {
          impact: "Poor posture reduces running efficiency",
          consequence: "Excess stress on joints"
        },
        solution_profile: {
          approach: "Strengthen and stretch opposing muscle groups",
          goals: ["improve torso stabilization", "increase lung capacity"]
        },
        key_exercises: [
          "standing-cat-cow", "shoulder-openers", "bird-dog", 
          "dynamic-side-body-stretch"
        ]
      }
    }
  },

  ai_prescription_guidelines: {
    assessment_framework: {
      step_1: "Identify primary complaint and pain location",
      step_2: "Determine likely muscle imbalances based on injury pattern",
      step_3: "Assess lifestyle factors (sitting, activity level, running volume)",
      step_4: "Select exercises targeting both weakness and tightness patterns"
    },
    
    exercise_selection_principles: {
      dual_approach_required: "Always combine strengthening and mobility work",
      kinetic_chain_thinking: "Address the entire movement chain, not just injury site",
      progression_mindset: "Start with foundational stability, progress to dynamic movements",
      specificity: "Choose exercises that directly address identified imbalances"
    },

    program_structure_guidelines: {
      frequency: "3-4 times per week for injury prevention/treatment",
      duration: "15-30 minutes per session",
      progression: "2-4 week phases with gradual intensity increases",
      balance: "Equal emphasis on strengthening weak areas and mobilizing tight areas"
    },

    contraindications_and_modifications: {
      acute_pain: "Avoid exercises that reproduce sharp pain",
      chronic_conditions: "Focus on gentle mobility and gradual strengthening",
      beginner_considerations: "Start with basic movements, emphasize form over intensity",
      advanced_athletes: "Can handle more complex, sport-specific movements"
    }
  },

  exercise_categorization_for_injuries: {
    strengthening_priorities: {
      "core-stability": ["plank", "side-plank", "dead-bug", "bird-dog", "vacuums"],
      "glute-activation": ["glute-bridge", "clamshells", "lateral-walk", "single-leg-glute-bridge"],
      "hip-stability": ["single-leg-deadlift-to-hop", "balance-and-change-of-support-drill"],
      "calf-strength": ["single-leg-calf-raise", "standing-dumbbell-calf-raise"],
      "foot-ankle": ["ankle-rocks", "single-leg-shin-sequence", "pony-drill"]
    },
    
    mobility_priorities: {
      "hip-flexor-release": ["dynamic-quad-stretch", "standing-fours", "kang-squats"],
      "posterior-chain": ["boot-strappers", "hamstring-bridge-with-chair"],
      "spinal-mobility": ["cat-cow", "standing-cat-cow", "dynamic-side-body-stretch"],
      "hip-mobility": ["standing-hip-open-and-close", "pigeon-pose", "lizard-circles"],
      "calf-ankle": ["standing-calf-stretch", "ankle-rocks"]
    }
  }
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
  'swim-freestyle-drills': {
    id: 'swim-freestyle-drills',
    name: 'Freestyle Drills (Catch-up, Fingertip Drag, Kickboard)',
    category: 'technique',
    equipment: ['Kickboard', 'Pull Buoy', 'Fins (optional)'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 2,
    instructions: [
      '**Catch-up Drill:** Push off and glide. Take one arm stroke, and hold that arm extended in front until the other arm completes its stroke and meets the first hand. Then, both hands push off together, and the next stroke begins. Focus on extension and rotation.',
      '**Fingertip Drag Drill:** Swim freestyle, but on the recovery phase of each arm stroke, drag your fingertips along the surface of the water, keeping your elbow high. This emphasizes a high elbow catch and proper recovery.',
      '**Kickboard Drill:** Hold a kickboard out in front with both hands, keeping your body streamlined. Focus solely on a strong, consistent kick from your hips, with minimal knee bend. Vary kick speed and intensity.',
      'Combine these drills within your swim sets to focus on different aspects of freestyle technique.'
    ],
    safetyNotes: [
      'Ensure proper pool depth and safety regulations. Stop if you feel any pain, especially in the shoulders.',
      'Hydrate well before and after swimming.',
      'Listen to your body; don\'t push through discomfort that could lead to injury.'
    ],
    modifications: {
      beginner: 'Focus on one drill at a time. Use fins for easier propulsion and to focus on upper body technique during drills.',
      advanced: 'Increase drill distance or intensity. Combine multiple drills within one length. Focus on specific aspects like breathing timing or hip rotation.',
      equipment_alternatives: {
        'Kickboard': 'No equipment (focus on body position and kick)',
        'Fins': 'Ankle weights (advanced, for kick strength without propulsion)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 200,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely.',
        'Select appropriate drill and equipment.',
        'Focus on body position and core engagement.'
      ],
      execution: [
        'Execute drill with focus on technique over speed.',
        'Maintain streamlined body position.',
        'Pay attention to catch, pull, and recovery phases.'
      ],
      common_mistakes: [
        'Rushing the drills and losing focus on technique.',
        'Dropping elbows during the catch-up or fingertip drag.',
        'Kicking from the knees instead of the hips during kickboard drill.'
      ],
      breathing: 'Maintain consistent, relaxed breathing throughout all drills.'
    }
  },
  'bike-single-leg-pedaling': {
    id: 'bike-single-leg-pedaling',
    name: 'Single-Leg Pedaling Drills (Stationary Bike)',
    category: 'technique',
    equipment: ['Stationary Bike (indoor trainer or spin bike)'],
    muscleGroups: ['Quads', 'Hamstrings', 'Glutes', 'Calves'],
    difficulty: 3,
    instructions: [
      'Set up your stationary bike comfortably. Begin pedaling at a moderate cadence with both legs to warm up.',
      'Unclip one foot (or remove from the toe cage) and rest it on a stable surface beside the bike, or simply let it hang freely without touching the ground.',
      'Focus on pedaling smoothly and continuously with the single working leg through the entire pedal stroke (360 degrees). Emphasize pulling up through the top of the stroke and pushing through the bottom.',
      'Maintain a consistent cadence and effort. Avoid jerking or choppy movements.',
      'Perform for a set duration (e.g., 30-60 seconds) per leg, then switch. Alternate legs for several intervals.'
    ],
    safetyNotes: [
      'Ensure your bike is stable and properly adjusted.',
      'Start with a light resistance and gradually increase as your technique improves.',
      'If using clipless pedals, ensure you can safely unclip and re-clip your foot quickly.',
      'Stop if you feel any knee pain or excessive muscle strain.'
    ],
    modifications: {
      beginner: 'Perform for shorter durations (e.g., 15-20 seconds per leg). Use very light resistance. Focus only on the downstroke initially.',
      advanced: 'Increase duration and resistance. Vary cadence during the drill. Perform in and out of the saddle (carefully).',
      equipment_alternatives: {
        'Stationary Bike': 'Road bike on an indoor trainer (with proper setup)',
        'Equipment': 'Outdoor riding (caution and skill required, not recommended for beginners)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.10,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: [
        'Bike set up, moderate resistance.',
        'Warm-up with both legs.',
        'Core engaged, upper body relaxed.'
      ],
      execution: [
        'Unclip one foot, pedal smoothly with single leg.',
        'Focus on 360-degree pedal stroke, pulling up and pushing down.',
        'Maintain consistent cadence and smooth power delivery.'
      ],
      common_mistakes: [
        'Jerking or choppy pedal stroke.',
        'Rocking hips excessively to compensate.',
        'Neglecting the upstroke or pull phase of the pedal.'
      ],
      breathing: 'Maintain steady, rhythmic breathing. Avoid holding your breath.'
    }
  },
  'swim-plyometric-box-jumps': {
    id: 'swim-plyometric-box-jumps',
    name: 'Plyometric Box Jumps (for explosive push-off)',
    category: 'plyometric',
    equipment: ['Plyometric Box (sturdy and stable)'],
    muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves', 'Core'],
    difficulty: 3,
    instructions: [
      'Stand facing a sturdy plyometric box, about an arm\'s length away, with feet hip-width apart.',
      'Initiate the jump by swinging your arms back and bending at your knees and hips into a quarter squat, loading your glutes and hamstrings.',
      'Explosively jump upwards and forwards onto the box, landing softly with both feet simultaneously in a athletic stance (knees slightly bent), core braced.',
      'Stand up fully on the box, extending your hips and knees.',
      'Step or jump back down safely (stepping is recommended for beginners/injury prevention) and immediately prepare for the next jump.'
    ],
    safetyNotes: [
      'Ensure the box is stable and appropriate height; start low and gradually increase.',
      'Land softly with bent knees to absorb impact; avoid landing with locked knees.',
      'Perform on a non-slip surface.',
      'Stop immediately if you feel any knee, ankle, or hip pain.'
    ],
    modifications: {
      beginner: 'Use a lower box or stack plates to a low height. Focus on controlled landing. Perform step-ups instead of jumps.',
      advanced: 'Increase box height. Perform continuous jumps (without stepping down between reps, only for experienced athletes). Add a pause at the landing to ensure stability.',
      equipment_alternatives: {
        'Plyometric Box': 'Sturdy bench or low wall (ensure stability)',
        'Equipment': 'Squat Jumps (bodyweight, no box)'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 0.05,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand facing box, arm\'s length away, feet hip-width.',
        'Athletic stance, ready to load and explode.',
        'Core braced, gaze forward.'
      ],
      execution: [
        'Load hips and quads, explode upwards onto box.',
        'Land softly, both feet simultaneously, knees bent.',
        'Stand tall on box, step down safely for next rep.'
      ],
      common_mistakes: [
        'Landing stiff-legged or with knees caving in.',
        'Not fully extending hips at the top of the box.',
        'Using too high a box and sacrificing form for height.'
      ],
      breathing: 'Inhale during the squat, exhale explosively during the jump.'
    }
  },
  'bike-hill-climbs-intervals': {
    id: 'bike-hill-climbs-intervals',
    name: 'Hill Climb Intervals (Outdoor or Indoor)',
    category: 'endurance',
    equipment: ['Bicycle (Road or Mountain)', 'Outdoor Hill or Indoor Trainer with Resistance'],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Calves', 'Core'],
    difficulty: 4,
    instructions: [
      '**Outdoor Hill:** Find a moderate to steep hill that takes 2-5 minutes to climb. Warm up for 10-15 minutes on flat terrain.',
      'Approach the base of the hill and shift into a challenging gear. Begin climbing, maintaining a high effort (e.g., 8/10 on a perceived exertion scale).',
      'Focus on smooth, powerful pedal strokes, staying seated if possible, or standing when necessary for power (e.g., steep sections). Maintain good posture and engage your core.',
      'Once you reach the top, ease off the effort and spin lightly for 3-5 minutes as recovery, then turn around and repeat the climb.',
      '**Indoor Trainer:** Set your trainer to a high resistance or use a virtual climbing simulation. Follow the same interval structure of high-effort climbs followed by low-effort recovery.'
    ],
    safetyNotes: [
      'If outdoors, choose a hill with minimal traffic and a safe shoulder/path. Be aware of your surroundings.',
      'Ensure your bike is in good working order, especially brakes and gears.',
      'Stay hydrated. Stop if you feel dizzy or excessively fatigued.',
      'Indoors, ensure proper ventilation and cool-down protocols.'
    ],
    modifications: {
      beginner: 'Choose shorter, less steep hills. Reduce the intensity or duration of the climb. Increase recovery time.',
      advanced: 'Increase hill steepness, length, or number of repetitions. Decrease recovery time. Incorporate standing efforts more frequently.',
      equipment_alternatives: {
        'Outdoor Hill': 'Indoor trainer with ERG mode (maintains power regardless of cadence)',
        'Equipment': 'Spin class with resistance focus'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 3,
      progressionRate: 0.10,
      unit: 'minutes per climb'
    },
    coaching: {
      setup: [
        'Warm up thoroughly on flat terrain or easy spin.',
        'Select challenging but manageable gear.',
        'Maintain upright posture, core engaged.'
      ],
      execution: [
        'Push consistently with strong pedal strokes.',
        'Manage effort level for sustained climb.',
        'Breathe deeply and rhythmically, avoid shallow breathing.'
      ],
      common_mistakes: [
        'Starting too hard and fading quickly.',
        'Mashing gears instead of smooth pedaling.',
        'Losing form or slumping over the handlebars.'
      ],
      breathing: 'Deep, controlled breathing. Inhale fully, exhale completely to fuel working muscles.'
    }
  },
  'swim-open-water-sighting-drills': {
    id: 'swim-open-water-sighting-drills',
    name: 'Open Water Sighting Drills (Pool Practice)',
    category: 'technique',
    equipment: ['Pool'],
    muscleGroups: ['Neck', 'Shoulders', 'Core'],
    difficulty: 2,
    instructions: [
      'In the pool, swim freestyle normally. Every 6-8 strokes (or a set number of strokes), lift your head just enough to get your eyes out of the water, quickly spot a target at the end of the lane (or a fixed point), and then immediately return your head to the water to breathe and continue swimming.',
      'Avoid lifting your head too high, which causes your hips to sink.',
      'Practice taking quick glances; you don\'t need to hold your head up for a long time.',
      'Vary the frequency of your sighting to simulate different open water conditions.'
    ],
    safetyNotes: [
      'Ensure you are comfortable with basic freestyle technique before attempting sighting drills.',
      'Avoid bumping into other swimmers in the lane.',
      'If you experience neck strain, reduce the frequency or height of your head lift.'
    ],
    modifications: {
      beginner: 'Sight more frequently (every 4-5 strokes). Practice sighting with a kickboard to focus only on head movement.',
      advanced: 'Increase the number of strokes between sightings. Practice bilateral sighting (sighting before breathing to both sides). Incorporate a \'crocodile\' sighting (eyes just above the waterline).',
      equipment_alternatives: {
        'Pool': 'Open water (with a spotter and appropriate safety precautions)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 200,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Swim freestyle normally, establish good rhythm.',
        'Identify a target at the end of the lane.',
        'Core engaged, ready for slight head lift.'
      ],
      execution: [
        'Lift head just enough to sight, eyes out of water.',
        'Quick glance, return head to water immediately.',
        'Breathe to the side after sighting, maintain streamlined body.'
      ],
      common_mistakes: [
        'Lifting head too high, causing hips to sink.',
        'Holding head up for too long, disrupting rhythm.',
        'Looking forward without immediately returning to streamlined position.'
      ],
      breathing: 'Exhale as you lift head for sight, inhale to the side as you return to water.'
    }
  },
  'bike-spin-ups-intervals': {
    id: 'bike-spin-ups-intervals',
    name: 'Spin-Up Intervals (Cadence Drills)',
    category: 'technique',
    equipment: ['Bicycle (Stationary Bike, Indoor Trainer, or Outdoor with safe, flat area)'],
    muscleGroups: ['Legs (Neuromuscular Coordination)'],
    difficulty: 3,
    instructions: [
      'Begin pedaling at a comfortable, moderate cadence (e.g., 80-90 RPM) in an easy to moderate gear.',
      'Over a short period (e.g., 10-15 seconds), gradually increase your cadence as high as possible without bouncing in the saddle or losing control of your pedal stroke. The goal is to reach your maximum smooth cadence.',
      'Hold this high cadence for a few seconds if possible, then return to your starting cadence for a recovery period (e.g., 60-90 seconds).',
      'Focus on staying smooth and relaxed throughout the entire movement. Avoid jerking or mashing the pedals.'
    ],
    safetyNotes: [
      'Perform on a flat, safe surface if outdoors. If indoors, ensure your bike is stable.',
      'Do not push into a cadence where you feel out of control or are bouncing excessively.',
      'Warm up thoroughly before starting spin-ups to prepare your muscles and nervous system.'
    ],
    modifications: {
      beginner: 'Start with shorter spin-up durations (e.g., 5-8 seconds). Focus on smaller increases in cadence. Use a very easy gear.',
      advanced: 'Increase the duration of the high-cadence effort. Incorporate spin-ups into longer rides. Practice single-leg spin-ups (carefully).',
      equipment_alternatives: {
        'Bicycle': 'Spin bike (with cadence display)'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 15,
      progressionRate: 0.05,
      unit: 'seconds per spin-up'
    },
    coaching: {
      setup: [
        'Start with comfortable cadence, easy-moderate gear.',
        'Core engaged, upper body relaxed.',
        'Focus on smooth, circular pedal stroke.'
      ],
      execution: [
        'Gradually increase cadence, staying smooth.',
        'Avoid bouncing in saddle; maintain control.',
        'Return to recovery cadence, relax legs.'
      ],
      common_mistakes: [
        'Bouncing excessively in the saddle.',
        'Losing control of the pedal stroke at high cadences.',
        'Mashing the pedals instead of smooth, circular motion.'
      ],
      breathing: 'Maintain steady breathing; don\'t hold your breath during high-cadence efforts.'
    }
  },

  // ===== NEW MOBILITY & FLEXIBILITY EXERCISES =====
  'dynamic-star': {
    id: 'dynamic-star',
    name: 'Dynamic Star',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['core', 'obliques', 'hamstrings', 'shoulders'],
    difficulty: 2,
    instructions: [
      'Stand with your feet wide apart, arms extended out to the sides at shoulder height, forming a "star" shape.',
      'Keeping your back straight and legs relatively straight, hinge at your hips.',
      'Rotate your torso and reach your right hand towards your left foot.',
      'Return to the starting star position with control.',
      'Repeat on the other side, reaching your left hand towards your right foot.',
      'Continue alternating sides in a fluid, dynamic motion.'
    ],
    safetyNotes: [
      'Maintain a flat back; avoid rounding your spine to reach further.',
      'Keep a slight bend in your knees to protect them.',
      'Control the movement; avoid using jerky momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion; reach for your knee or shin instead of your foot. Widen your stance for more stability.',
      advanced: 'Increase the speed of the movement while maintaining control. Touch the floor outside of your foot.',
      equipment_alternatives: {
        'none': 'Windmill Stretch (static)'
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
        'Stand in a wide star pose, feet wide, arms out.',
        'Core engaged, back straight.'
      ],
      execution: [
        'Hinge at the hips, rotate torso.',
        'Reach opposite hand to opposite foot.',
        'Keep legs straight and back flat.',
        'Return to start and alternate smoothly.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Bending the knees too much.',
        'Losing balance by moving too quickly.'
      ],
      breathing: 'Exhale as you reach down, inhale as you return to the star position.'
    }
  },

  'alternating-step-and-squat': {
    id: 'alternating-step-and-squat',
    name: 'Alternating Step & Squat',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['quadriceps', 'glutes', 'adductors', 'abductors'],
    difficulty: 2,
    instructions: [
      'Start standing with your feet together.',
      'Step your right foot out to the side, wider than shoulder-width.',
      'Immediately lower your hips into a squat position, keeping your chest up and back straight.',
      'Push off your right foot to return to the starting position with feet together.',
      'Repeat the movement, this time stepping out with your left foot.',
      'Continue alternating sides in a fluid motion.'
    ],
    safetyNotes: [
      'Ensure your knee tracks over your toes when you squat.',
      'Keep your chest lifted and avoid rounding your back.',
      'Control the movement; do not just fall into the squat.'
    ],
    modifications: {
      beginner: 'Reduce the depth of the squat. Step out less wide.',
      advanced: 'Increase the speed. Add a pulse at the bottom of the squat. Hold a light weight at your chest.',
      equipment_alternatives: {
        'none': 'Standard bodyweight squats'
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
        'Stand tall, feet together.',
        'Core engaged, chest up.'
      ],
      execution: [
        'Step out to the side.',
        'Sink hips back and down into a squat.',
        'Keep weight in your heels.',
        'Push off to return to center and switch sides.'
      ],
      common_mistakes: [
        'Knees caving inward.',
        'Leaning too far forward.',
        'Not controlling the descent.'
      ],
      breathing: 'Exhale as you step out and squat, inhale as you return to center.'
    }
  },

  'childs-pose': {
    id: 'childs-pose',
    name: 'Child\'s Pose',
    category: 'flexibility',
    equipment: ['mat'],
    muscleGroups: ['lower-back', 'hips', 'thighs', 'ankles'],
    difficulty: 1,
    instructions: [
      'Start on your hands and knees.',
      'Bring your big toes to touch and spread your knees as wide as your mat (or keep them together).',
      'Sit your hips back towards your heels.',
      'Fold your torso forward and down between your thighs.',
      'Rest your forehead on the mat.',
      'Extend your arms out long in front of you, or rest them alongside your body, palms up.',
      'Breathe deeply into your back and hips, and relax.'
    ],
    safetyNotes: [
      'If you have knee issues, place a rolled blanket in the crease of your knees.',
      'If your forehead does not reach the mat, rest it on a block or cushion.',
      'Listen to your body and do not force your hips to your heels.'
    ],
    modifications: {
      beginner: 'Keep knees closer together. Place a cushion between your hips and heels for support.',
      advanced: 'Walk your hands further forward to deepen the stretch in the shoulders and lats. Walk hands to one side for a side-body stretch.',
      equipment_alternatives: {
        'none': 'Seated forward fold'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Kneel on the mat, big toes touching.',
        'Knees together or wide.'
      ],
      execution: [
        'Sit hips back towards heels.',
        'Fold torso down, rest forehead on mat.',
        'Let your body feel heavy and relax.',
        'Breathe into your back.'
      ],
      common_mistakes: [
        'Holding tension in the shoulders and neck.',
        'Forcing the hips down.',
        'Not breathing deeply.'
      ],
      breathing: 'Deep, slow breaths directed into the back of your ribcage.'
    }
  },

  'tricep-and-lat-stretch': {
    id: 'tricep-and-lat-stretch',
    name: 'Tricep & Lat Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: ['triceps', 'lats', 'shoulders'],
    difficulty: 1,
    instructions: [
      'Stand or sit tall.',
      'Reach your right arm straight up to the ceiling.',
      'Bend your right elbow and let your right hand fall behind your head, aiming for the middle of your back.',
      'Grasp your right elbow with your left hand and gently pull it to the left and slightly down to stretch the tricep.',
      'To add the lat stretch, gently side-bend your torso to the left while continuing to pull the elbow.',
      'Hold the stretch, breathing into your right side-body and tricep.',
      'Release and repeat on the other side.'
    ],
    safetyNotes: [
      'Be gentle with the pull on your elbow; do not force it.',
      'Avoid jutting your head forward.',
      'Keep your core engaged to avoid arching your lower back.'
    ],
    modifications: {
      beginner: 'Perform the tricep stretch and a separate side-bend stretch. Use a towel to assist if you cannot reach your elbow.',
      advanced: 'Increase the side-bend for a deeper lat stretch.',
      equipment_alternatives: {
        'none': 'Can use a towel or strap to help grasp the elbow'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit or stand with a long spine.',
        'Raise one arm, bend elbow, hand behind head.'
      ],
      execution: [
        'Gently pull elbow with opposite hand.',
        'Add a side-bend away from the stretched arm.',
        'Breathe into the tricep and lat.',
        'Keep chest open.'
      ],
      common_mistakes: [
        'Pulling too hard on the elbow.',
        'Arching the back.',
        'Sticking the chin out.'
      ],
      breathing: 'Breathe deeply and steadily throughout the stretch.'
    }
  },

  'warrior-ii': {
    id: 'warrior-ii',
    name: 'Warrior II',
    category: 'strength',
    equipment: ['mat'],
    muscleGroups: ['quadriceps', 'glutes', 'adductors', 'shoulders', 'core'],
    difficulty: 2,
    instructions: [
      'Stand with your feet wide apart, about 3-4 feet.',
      'Turn your right foot out 90 degrees to point forward. Turn your left foot in slightly.',
      'Align your front heel with the arch of your back foot.',
      'On an exhale, bend your right knee over your right ankle, so your shin is perpendicular to the floor.',
      'Extend your arms parallel to the floor, reaching actively out to the sides.',
      'Turn your head to look over your right fingertips.',
      'Hold the pose, keeping your torso upright and your core engaged.'
    ],
    safetyNotes: [
      'Ensure your front knee is stacked directly over your ankle, not past it.',
      'Keep the outer edge of your back foot firmly grounded.',
      'Relax your shoulders away from your ears.'
    ],
    modifications: {
      beginner: 'Lessen the bend in the front knee. Shorten your stance.',
      advanced: 'Deepen the bend in the front knee, bringing the thigh parallel to the floor. Hold for a longer duration.',
      equipment_alternatives: {
        'none': 'Can be practiced with a chair for support under the front thigh'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Wide stance, align heels.',
        'Turn front foot out 90 degrees.',
        'Extend arms parallel to the floor.'
      ],
      execution: [
        'Bend front knee over ankle.',
        'Press into the outer edge of the back foot.',
        'Keep torso centered and shoulders relaxed.',
        'Gaze over front fingertips.'
      ],
      common_mistakes: [
        'Front knee going past the ankle.',
        'Leaning the torso forward.',
        'Shoulders creeping up to ears.'
      ],
      breathing: 'Breathe steadily and deeply while holding the pose.'
    }
  },

  'pigeon-pose': {
    id: 'pigeon-pose',
    name: 'Pigeon Pose',
    category: 'flexibility',
    equipment: ['mat'],
    muscleGroups: ['glutes', 'piriformis', 'hips', 'hip-flexors'],
    difficulty: 2,
    instructions: [
      'Start in a downward-facing dog or tabletop position.',
      'Bring your right knee forward and place it behind your right wrist.',
      'Angle your right shin so your right foot is somewhere in front of your left hip. The more parallel your shin is to the front of the mat, the more intense the stretch.',
      'Extend your left leg straight back behind you, with the top of your foot on the floor.',
      'Keep your hips square and level. You can stay upright on your hands or fold forward over your front leg to deepen the stretch.',
      'Breathe deeply into the stretch in your right outer hip. Hold, then switch sides.'
    ],
    safetyNotes: [
      'Protect your front knee. If you feel any pain, ease off or modify.',
      'Do not let all your weight fall onto the hip of the bent leg; keep hips level.',
      'Flexing the front foot can help protect the knee joint.'
    ],
    modifications: {
      beginner: 'Place a yoga block or cushion under the hip of the bent leg for support. Do not fold forward. Perform a "Figure Four" stretch on your back instead.',
      advanced: 'Bring the front shin more parallel to the front of the mat. Fold deeper over the front leg.',
      equipment_alternatives: {
        'none': 'Figure Four stretch on back'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 10,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'From tabletop, bring one knee forward behind the same-side wrist.',
        'Extend the back leg straight.',
        'Square your hips to the front.'
      ],
      execution: [
        'Stay upright or fold forward over the front shin.',
        'Breathe into the outer hip stretch.',
        'Keep the back leg active and straight.'
      ],
      common_mistakes: [
        'Collapsing onto one hip.',
        'Feeling pain in the front knee.',
        'Holding tension in the shoulders.'
      ],
      breathing: 'Inhale to find length in the spine, exhale to sink deeper into the stretch.'
    }
  },

  'pelvic-tilts': {
    id: 'pelvic-tilts',
    name: 'Pelvic Tilts',
    category: 'mobility',
    equipment: ['mat'],
    muscleGroups: ['core', 'lower-abs', 'lower-back'],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent, feet flat on the floor hip-width apart, and your spine in a neutral position.',
      'Place your hands on your hips to feel the movement.',
      'Exhale and gently engage your lower abs to press your lower back flat against the floor (posterior tilt). Imagine bringing your pubic bone towards your navel.',
      'Inhale and release the contraction, allowing your lower back to arch slightly away from the floor, creating a small space (anterior tilt). Imagine tilting your pelvis forward.',
      'Continue rocking your pelvis back and forth in this small, controlled motion.',
      'This is a subtle movement focused on awareness and control.'
    ],
    safetyNotes: [
      'Keep the movement small and controlled; do not use your glutes or legs to force it.',
      'The movement should be comfortable and pain-free.',
      'Avoid lifting your hips off the floor.'
    ],
    modifications: {
      beginner: 'Perform an even smaller range of motion. Focus purely on the sensation.',
      advanced: 'Perform the movement while in a glute bridge position for added stability challenge.',
      equipment_alternatives: {
        'none': 'Can be done standing against a wall'
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
        'Lie on back, knees bent, feet flat.',
        'Find a neutral spine position.',
        'Hands on hips to guide the movement.'
      ],
      execution: [
        'Exhale, flatten your low back to the floor.',
        'Inhale, create a small arch in your low back.',
        'Isolate the movement to the pelvis.',
        'Keep upper body relaxed.'
      ],
      common_mistakes: [
        'Using glutes to lift the hips.',
        'Making the movement too large.',
        'Holding breath.'
      ],
      breathing: 'Exhale to flatten the back (posterior tilt), inhale to arch (anterior tilt).'
    }
  },

  'upper-back-rotations': {
    id: 'upper-back-rotations',
    name: 'Upper Back Rotations',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Thoracic Spine',
      'Obliques',
      'Shoulders'
    ],
    difficulty: 2,
    instructions: [
      'Start on all fours (quadruped position) with your hands under your shoulders and knees under your hips.',
      'Place your right hand behind your head, elbow pointing out to the side.',
      'Keeping your hips stable, rotate your upper back to bring your right elbow down towards your left wrist.',
      'Reverse the motion, rotating your chest open to the right side and pointing your right elbow up towards the ceiling.',
      'Follow your elbow with your gaze to encourage the twist through your upper spine.',
      'Complete all repetitions on one side before switching to the other.'
    ],
    safetyNotes: [
      'Initiate the rotation from your upper/mid-back, not your lower back or hips.',
      'Keep your supporting arm straight and strong.',
      'Move slowly and with control; avoid using momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Do not place hand behind head; instead, just reach the arm up.',
      advanced: 'Hold the open position for 2-3 seconds at the top of each rep. Add a \'thread the needle\' stretch between reps.',
      equipment_alternatives: {
        'None': 'Seated torso twists.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Start in a stable tabletop position.',
        'Place one hand behind your head, elbow out.',
        'Keep hips level and core engaged.'
      ],
      execution: [
        'Rotate elbow down towards opposite wrist.',
        'Rotate up, opening chest and pointing elbow to ceiling.',
        'Follow elbow with your eyes.',
        'Isolate the twist in your upper back.'
      ],
      common_mistakes: [
        'Shifting hips side-to-side.',
        'Bending the supporting arm.',
        'Twisting from the lower back.'
      ],
      breathing: 'Exhale as you rotate down, inhale as you rotate open towards the ceiling.'
    }
  },

  'tick-tocks-with-miniband': {
    id: 'tick-tocks-with-miniband',
    name: 'Tick Tocks with a miniband',
    category: 'core',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Obliques',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet hip-width apart, with a miniband looped around your wrists.',
      'Raise your arms straight overhead, pulling the band apart to create tension.',
      'Keeping your arms straight and core tight, slowly bend your torso directly to the right side, as if you are a clock hand.',
      'Go as far as you can without twisting or bending forward. Feel the stretch on your left side and the contraction on your right.',
      'Return to the center with control.',
      'Repeat on the left side. This completes one repetition.'
    ],
    safetyNotes: [
      'The movement should be a pure side-bend; avoid leaning forward or backward.',
      'Keep tension on the band throughout the exercise.',
      'Do not use momentum; the movement should be slow and controlled.'
    ],
    modifications: {
      beginner: 'Perform without a resistance band. Reduce the range of motion.',
      advanced: 'Use a heavier resistance band. Hold a light dumbbell in each hand.',
      equipment_alternatives: {
        'Resistance Band': 'Can be done without a band, focusing on the oblique contraction.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.',
        'Band around wrists, arms overhead.',
        'Create tension in the band, core braced.'
      ],
      execution: [
        'Slowly bend to one side, keeping arms straight.',
        'Feel the oblique crunch and opposite side stretch.',
        'Return to center with control.',
        'Alternate sides.'
      ],
      common_mistakes: [
        'Leaning forward or backward.',
        'Losing tension in the band.',
        'Using momentum to swing.'
      ],
      breathing: 'Inhale at the top, exhale as you bend to the side.'
    }
  },

  'kneeling-pelvic-tilts': {
    id: 'kneeling-pelvic-tilts',
    name: 'Kneeling Pelvic Tilts',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Core',
      'Lower Abs',
      'Lower Back'
    ],
    difficulty: 1,
    instructions: [
      'Start in a tall kneeling position with your knees hip-width apart and your torso upright.',
      'Place your hands on your hips to feel the movement.',
      'Exhale and perform a posterior tilt by tucking your tailbone under and engaging your glutes and lower abs. Imagine bringing your pubic bone up towards your navel.',
      'Inhale and release, performing an anterior tilt by arching your lower back slightly and sticking your tailbone out.',
      'Focus on isolating the movement to the pelvis, keeping your upper body still.',
      'Repeat the movement in a slow, controlled rhythm.'
    ],
    safetyNotes: [
      'The movement should be small and focused, not a large body sway.',
      'Avoid excessive arching in the anterior tilt.',
      'Use a mat or cushion under your knees for comfort.'
    ],
    modifications: {
      beginner: 'Perform the movement with an even smaller range of motion. Can also be done lying on your back.',
      advanced: 'Perform the tilts while holding a light weight at your chest to challenge core stability.',
      equipment_alternatives: {
        'None': 'Can be done standing or lying on the back.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Kneel tall, knees hip-width.',
        'Hands on hips, spine neutral.'
      ],
      execution: [
        'Exhale, tuck your tailbone under (posterior tilt).',
        'Inhale, untuck and slightly arch (anterior tilt).',
        'Keep shoulders and chest still.',
        'Isolate the movement to the pelvis.'
      ],
      common_mistakes: [
        'Moving the whole torso.',
        'Arching the back too much.',
        'Rushing the movement.'
      ],
      breathing: 'Exhale on the posterior tuck, inhale on the anterior arch.'
    }
  },

  'hip-bridge-lift': {
    id: 'hip-bridge-lift',
    name: 'Hip Bridge Lift',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes',
      'Hamstrings',
      'Core'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent, feet flat on the floor hip-width apart, and heels relatively close to your glutes.',
      'Place your arms by your sides with your palms down.',
      'Engage your core and exhale as you press through your heels to lift your hips off the floor.',
      'Squeeze your glutes and hamstrings at the top. Your body should form a straight line from your shoulders to your knees.',
      'Hold the contraction at the top for a moment.',
      'Inhale and slowly lower your hips back to the starting position with control.'
    ],
    safetyNotes: [
      'Avoid hyperextending your lower back at the top; the work should be in the glutes.',
      'Press through your full foot, especially the heels, not just the toes.',
      'Keep your knees aligned with your hips; don\'t let them splay out or fall in.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Do not lift hips as high.',
      advanced: 'Place a weight plate or dumbbell across your hips. Progress to a single-leg hip bridge.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, knees bent, feet flat.',
        'Heels close to glutes, arms by sides.'
      ],
      execution: [
        'Drive through heels to lift hips.',
        'Squeeze glutes hard at the top.',
        'Create a straight line from shoulders to knees.',
        'Lower down with control.'
      ],
      common_mistakes: [
        'Arching the lower back instead of using glutes.',
        'Lifting hips too high.',
        'Knees caving in or out.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'vacuums': {
    id: 'vacuums',
    name: 'Vacuums',
    category: 'core',
    equipment: [],
    muscleGroups: [
      'Transverse Abdominis'
    ],
    difficulty: 2,
    instructions: [
      'Can be performed standing, kneeling on all fours, or seated.',
      'Start by taking a deep breath in.',
      'Forcefully exhale all the air out of your lungs.',
      'As you exhale, pull your navel in as close to your spine as possible. Imagine your belly button trying to touch your backbone.',
      'Hold this \'sucked in\' position for a set amount of time, continuing to breathe shallowly if needed.',
      'Release the contraction and breathe normally. That is one repetition.'
    ],
    safetyNotes: [
      'This is an activation exercise, not a heavy strength move. Focus on the deep core contraction.',
      'Do not perform if you have uncontrolled high blood pressure or hernias.',
      'Do not hold your breath for too long; learn to breathe shallowly while holding the vacuum.'
    ],
    modifications: {
      beginner: 'Perform lying on your back with knees bent. Hold for a shorter duration (5-10 seconds).',
      advanced: 'Hold for a longer duration (30-60 seconds). Perform from a plank or other more challenging position.',
      equipment_alternatives: {
        'None': 'This is a unique bodyweight control exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'seconds per hold'
    },
    coaching: {
      setup: [
        'Assume a stable position (kneeling, standing, etc.).',
        'Relax your belly.'
      ],
      execution: [
        'Exhale all your air out.',
        'Pull your navel in towards your spine as far as possible.',
        'Hold the deep contraction.',
        'Try to breathe shallowly during the hold.'
      ],
      common_mistakes: [
        'Simply sucking in your gut without exhaling first.',
        'Holding your breath and turning red.',
        'Not engaging the deep transverse abdominis.'
      ],
      breathing: 'Exhale fully to initiate, then take small, shallow breaths as you hold the contraction.'
    }
  },

  'lateral-leg-lift': {
    id: 'lateral-leg-lift',
    name: 'Lateral Leg Lift',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Abductors'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your right side with your legs extended and stacked one on top of the other.',
      'You can support your head with your bottom arm.',
      'Engage your core to keep your torso stable and prevent it from rocking.',
      'Keeping your top (left) leg straight and your foot in a neutral position, slowly lift it towards the ceiling.',
      'Lift as high as you can without rocking your torso back. The movement should come from your hip.',
      'Pause at the top, then slowly lower the leg back down with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Avoid swinging the leg; the movement should be slow and deliberate.',
      'Keep your torso still; do not use momentum from your upper body.',
      'Focus on using your outer hip/glute muscles to lift the leg.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Bend the bottom leg for more stability.',
      advanced: 'Add an ankle weight or a resistance band around your ankles/thighs. Add a pause at the top of the lift.',
      equipment_alternatives: {
        'None': 'Standing hip abductions.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on your side, legs stacked and straight.',
        'Core engaged to stabilize torso.'
      ],
      execution: [
        'Slowly lift the top leg towards the ceiling.',
        'Lead with the heel slightly.',
        'Keep the leg straight and torso still.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Swinging the leg or using momentum.',
        'Rocking the torso back and forth.',
        'Bending the knee of the lifted leg.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower.'
    }
  },

  'hamstring-bridge-with-chair': {
    id: 'hamstring-bridge-with-chair',
    name: 'Hamstring Bridge with a chair',
    category: 'strength',
    equipment: [
      'Chair',
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hamstrings',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your back with your heels placed on the edge of a chair seat.',
      'Your knees should be bent at approximately a 90-degree angle.',
      'Place your arms by your sides on the floor.',
      'Engage your core and drive your heels down into the chair to lift your hips off the floor.',
      'Focus on using your hamstrings and glutes to perform the lift.',
      'Raise your hips until your body forms a straight line from your shoulders to your knees.',
      'Lower your hips back down with control.'
    ],
    safetyNotes: [
      'Ensure the chair is stable and will not slide.',
      'Avoid lifting your hips so high that you feel strain in your lower back.',
      'Control the movement, especially the lowering phase.'
    ],
    modifications: {
      beginner: 'Perform a standard glute bridge on the floor. Don\'t lift hips as high.',
      advanced: 'Progress to a single-leg hamstring bridge with one heel on the chair.',
      equipment_alternatives: {
        'Chair': 'A bench, ottoman, or stability ball.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, heels on the edge of a chair.',
        'Knees at a 90-degree angle.',
        'Core ready.'
      ],
      execution: [
        'Dig heels down into the chair.',
        'Lift hips by contracting hamstrings and glutes.',
        'Form a straight line from shoulders to knees.',
        'Lower down slowly.'
      ],
      common_mistakes: [
        'Hyperextending the lower back.',
        'Chair sliding away.',
        'Not feeling the contraction in the hamstrings.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'frog-pumps': {
    id: 'frog-pumps',
    name: 'Frog Pumps',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Maximus)'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent.',
      'Bring the soles of your feet together and let your knees fall out to the sides, like a butterfly stretch. Pull your heels in close to your body.',
      'Place your arms by your sides.',
      'Keeping the soles of your feet pressed together, drive through the outer edges of your feet to lift your hips off the floor.',
      'Squeeze your glutes powerfully at the top.',
      'Lower your hips back down to the floor.',
      'Perform the repetitions in a quick, pumping motion.'
    ],
    safetyNotes: [
      'The range of motion is smaller than a regular glute bridge.',
      'Focus on a strong glute contraction at the top of each pump.',
      'Keep your upper back on the floor.'
    ],
    modifications: {
      beginner: 'Move more slowly and with a smaller range of motion.',
      advanced: 'Place a dumbbell or weight plate across your hips. Add a resistance band around your thighs.',
      equipment_alternatives: {
        'None': 'Standard glute bridge.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 25,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, soles of feet together, knees out wide.',
        'Heels close to your body.'
      ],
      execution: [
        'Press through the outside of your feet.',
        'Lift hips and squeeze glutes hard.',
        'Perform in a continuous, pumping motion.',
        'Focus on the glute squeeze.'
      ],
      common_mistakes: [
        'Not squeezing the glutes at the top.',
        'Letting feet come apart.',
        'Moving too slowly (it\'s meant to be a pump).'
      ],
      breathing: 'Exhale sharply on each pump up.'
    }
  },

  'supine-abductions-with-miniband': {
    id: 'supine-abductions-with-miniband',
    name: 'Supine Abductions with a miniband',
    category: 'strength',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Abductors'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your knees bent, feet flat on the floor, and hip-width apart.',
      'Place a miniband around your thighs, just above your knees.',
      'Engage your core and keep your back in a neutral position.',
      'Slowly press your knees outwards against the resistance of the band.',
      'Go as far as you can while keeping your feet flat on the floor.',
      'Hold the outward press for a moment, feeling the contraction in your outer hips and glutes.',
      'Slowly return your knees to the starting position with control. Do not let them snap back.'
    ],
    safetyNotes: [
      'The movement should be controlled in both directions.',
      'Keep your feet stationary on the floor.',
      'Ensure the resistance is challenging but allows for good form.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Reduce the range of motion.',
      advanced: 'Use a heavier resistance band. Perform the movement from a glute bridge position (banded bridge abductions).',
      equipment_alternatives: {
        'None': 'Side-lying leg lifts.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie on back, knees bent, feet flat.',
        'Band around thighs, just above knees.'
      ],
      execution: [
        'Press knees out against the band.',
        'Feel the outer glutes fire.',
        'Control the return to the start.',
        'Keep feet glued to the floor.'
      ],
      common_mistakes: [
        'Letting the band snap the knees back together.',
        'Lifting the feet off the floor.',
        'Using a band that is too heavy and compromising form.'
      ],
      breathing: 'Exhale as you press out, inhale as you return.'
    }
  },

  'lateral-wrist-curls-with-dumbbells': {
    id: 'lateral-wrist-curls-with-dumbbells',
    name: 'Lateral Wrist Curls with dumbbells',
    category: 'strength',
    equipment: [
      'Dumbbells'
    ],
    muscleGroups: [
      'Forearms (Extensors, Flexors)'
    ],
    difficulty: 1,
    instructions: [
      'Sit on a bench or chair and hold a light dumbbell in each hand with a neutral (hammer) grip.',
      'Rest your forearms on your thighs, with your wrists and hands extending past your knees.',
      'Keeping your forearms stationary, deviate your wrists by tilting your hands upwards so your thumbs move towards the ceiling (radial deviation).',
      'Slowly lower your hands back down, then tilt them downwards so your pinkies move towards the floor (ulnar deviation).',
      'Repeat this up-and-down tilting motion in a slow and controlled manner.'
    ],
    safetyNotes: [
      'Use a very light weight to avoid straining the wrist joint.',
      'Isolate the movement to the wrist; do not use your arms to lift the weight.',
      'Perform the movement slowly and deliberately.'
    ],
    modifications: {
      beginner: 'Perform without any weight, focusing on the range of motion.',
      advanced: 'Use a slightly heavier dumbbell, maintaining strict form.',
      equipment_alternatives: {
        'Dumbbells': 'A resistance band looped under your foot and held in your hand.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Sit with forearms resting on thighs.',
        'Hold light dumbbells with a neutral grip.',
        'Wrists are free to move.'
      ],
      execution: [
        'Tilt wrists up (thumb towards ceiling).',
        'Tilt wrists down (pinky towards floor).',
        'Keep forearms still.',
        'Movement is slow and controlled.'
      ],
      common_mistakes: [
        'Using too much weight.',
        'Moving the forearm instead of just the wrist.',
        'Performing the movement too quickly.'
      ],
      breathing: 'Breathe naturally throughout the exercise.'
    }
  },

  'flutter-kicks': {
    id: 'flutter-kicks',
    name: 'Flutter Kicks',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Abs',
      'Hip Flexors'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your back with your legs extended straight.',
      'Place your hands under your lower back for support and to keep it pressed into the floor.',
      'Lift your heels a few inches off the floor. Keep your legs straight.',
      'Engage your core and begin making small, quick, alternating up-and-down kicking motions with your legs (like you\'re swimming on your back).',
      'The range of motion for each kick should only be a few inches.',
      'Continue the flutter motion for the desired duration.'
    ],
    safetyNotes: [
      'Keep your lower back pressed into the floor/your hands at all times. If it starts to arch, lift your legs higher.',
      'Avoid letting your head and neck strain; keep them relaxed on the floor.',
      'The smaller and more controlled the kicks, the more effective.'
    ],
    modifications: {
      beginner: 'Lift your legs higher off the floor to make it easier. Perform with bent knees.',
      advanced: 'Lower your legs closer to the floor without letting your back arch. Lift your head and shoulders off the floor.',
      equipment_alternatives: {
        'None': 'Scissor kicks (alternating side-to-side).'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie on back, hands under low back.',
        'Legs straight, lift heels off the floor.',
        'Press low back into hands.'
      ],
      execution: [
        'Small, quick, alternating kicks.',
        'Keep legs straight.',
        'Keep core tight and back flat.',
        'Breathe steadily.'
      ],
      common_mistakes: [
        'Lower back arching off the floor.',
        'Kicks being too large and slow.',
        'Holding your breath.'
      ],
      breathing: 'Breathe steadily and continuously throughout the set.'
    }
  },

  'standing-fire-hydrant': {
    id: 'standing-fire-hydrant',
    name: 'Standing Fire Hydrant',
    category: 'strength',
    equipment: [
      'Chair (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Abductors'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet together, holding onto a chair or wall for balance.',
      'Shift your weight to your left leg.',
      'Keeping your right knee bent at a 90-degree angle, lift your right leg out to the side.',
      'Lift as high as you can without tilting your torso. The movement should be isolated to the hip.',
      'Squeeze your outer glute at the top.',
      'Lower the leg back to the starting position with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Avoid leaning your torso to the opposite side to lift the leg higher.',
      'Keep your core engaged to maintain stability.',
      'The movement should be controlled, not a swing.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Use more support from the chair/wall.',
      advanced: 'Add a resistance band around your thighs, just above the knees. Perform without holding on for a balance challenge.',
      equipment_alternatives: {
        'None': 'Clamshells (lying on side).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, holding support.',
        'Shift weight to one leg, core braced.',
        'Keep torso upright.'
      ],
      execution: [
        'Lift bent knee out to the side.',
        'Isolate the movement to the hip.',
        'Squeeze outer glute.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Leaning the torso to compensate.',
        'Swinging the leg.',
        'Arching the back.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'prone-frog-lifts': {
    id: 'prone-frog-lifts',
    name: 'Prone Frog Lifts',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on a mat. Rest your forehead on your hands.',
      'Bend your knees to a 90-degree angle and bring your heels together, allowing your knees to splay outwards (frog leg position).',
      'Engage your core to keep your lower back stable.',
      'Squeezing your glutes, lift your knees and thighs a few inches off the floor.',
      'Keep your heels pressed together throughout the lift.',
      'Hold the contraction at the top for a moment.',
      'Lower your knees back to the floor with control.'
    ],
    safetyNotes: [
      'The range of motion is very small; focus on the glute contraction, not the height of the lift.',
      'Avoid arching your lower back; keep your pubic bone pressed gently into the mat.',
      'Keep your upper body relaxed.'
    ],
    modifications: {
      beginner: 'Focus on just squeezing the glutes without lifting the knees.',
      advanced: 'Add a light ankle weight to each leg.',
      equipment_alternatives: {
        'None': 'Standard prone leg lifts (one leg at a time).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, forehead on hands.',
        'Bend knees, bring heels together, knees wide.'
      ],
      execution: [
        'Squeeze your glutes to lift your thighs off the floor.',
        'Keep heels touching.',
        'Movement is small, focus on the squeeze.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Lifting too high and arching the back.',
        'Using momentum.',
        'Not keeping heels together.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'froggers': {
    id: 'froggers',
    name: 'Froggers',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Groin',
      'Core',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Start in a high plank position with your hands directly under your shoulders.',
      'Engage your core and keep your back flat.',
      'In one explosive movement, jump both feet forward to the outside of your hands, landing in a deep squat position.',
      'Try to land softly with your heels on the ground.',
      'Pause for a moment in the deep squat.',
      'Jump your feet back to the starting high plank position. This is one repetition.'
    ],
    safetyNotes: [
      'Keep your core engaged throughout to protect your lower back.',
      'Land softly to minimize impact on your joints.',
      'If you cannot get your heels down in the squat, that\'s okay; work within your mobility range.'
    ],
    modifications: {
      beginner: 'Instead of jumping, step one foot forward at a time, then step back one at a time.',
      advanced: 'Increase the speed. Add a small hop or a full jump squat from the deep squat position.',
      equipment_alternatives: {
        'None': 'Deep squat hold.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Start in a strong high plank.',
        'Core tight, back flat.'
      ],
      execution: [
        'Jump feet to the outside of your hands.',
        'Land in a low squat, chest up.',
        'Jump back to plank with control.',
        'Maintain a fluid motion.'
      ],
      common_mistakes: [
        'Letting hips sag in the plank.',
        'Rounding the back in the squat.',
        'Landing heavily.'
      ],
      breathing: 'Exhale as you jump forward, inhale as you jump back.'
    }
  },

  'standing-hamstring-curl': {
    id: 'standing-hamstring-curl',
    name: 'Standing Hamstring Curl',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Hamstrings'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall, holding onto a wall or chair for balance.',
      'Shift your weight to your left leg.',
      'Engage your right hamstring to bend your right knee and pull your heel up towards your glute.',
      'Focus on a strong contraction in the back of your thigh.',
      'Hold the peak contraction for a moment.',
      'Slowly lower your foot back to the starting position with control.',
      'Complete all repetitions on one side before switching.'
    ],
    safetyNotes: [
      'Avoid swinging the leg; the movement should be driven by muscle contraction.',
      'Keep your torso upright and your hips stationary.',
      'Use support for balance to better isolate the hamstring.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion.',
      advanced: 'Add an ankle weight or a resistance band looped under your standing foot and around your working ankle.',
      equipment_alternatives: {
        'None': 'Lying hamstring curls.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, holding support.',
        'Shift weight to standing leg.',
        'Core engaged.'
      ],
      execution: [
        'Flex your knee, bringing your heel to your glute.',
        'Squeeze the hamstring muscle hard.',
        'Keep thighs parallel.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Using momentum to swing the leg.',
        'Arching the back.',
        'Moving the thigh forward.'
      ],
      breathing: 'Exhale as you curl, inhale as you lower.'
    }
  },

  'lateral-walk': {
    id: 'lateral-walk',
    name: 'Lateral Walk',
    category: 'strength',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Place a resistance band around your ankles or just above your knees.',
      'Stand in an athletic, half-squat position with your feet shoulder-width apart to create tension in the band.',
      'Maintain this low stance and take a controlled step to the right with your right foot.',
      'Follow with your left foot, stepping just enough to return to shoulder-width, keeping tension on the band at all times.',
      'Continue taking several steps to the right, then repeat the process stepping to the left.',
      'Stay low throughout the movement.'
    ],
    safetyNotes: [
      'Never let the band lose tension by bringing your feet together.',
      'Keep your toes pointed straight ahead.',
      'Avoid leaning your torso; the movement should come from the hips.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Place the band above the knees instead of ankles.',
      advanced: 'Use a heavier resistance band. Take larger steps while maintaining control.',
      equipment_alternatives: {
        'None': 'Bodyweight side lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'steps per direction'
    },
    coaching: {
      setup: [
        'Band around ankles/knees.',
        'Assume a half-squat athletic stance.',
        'Feet shoulder-width, create tension.'
      ],
      execution: [
        'Stay low.',
        'Take a controlled step sideways.',
        'Trail foot follows, maintaining tension.',
        'Keep chest up and core engaged.'
      ],
      common_mistakes: [
        'Standing up straight.',
        'Bringing feet together.',
        'Waddling or leaning with the torso.'
      ],
      breathing: 'Breathe steadily throughout the movement.'
    }
  },

  'clamshells': {
    id: 'clamshells',
    name: 'Clamshells',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your side with your hips and knees bent at approximately a 45 to 90-degree angle, with your legs stacked.',
      'Rest your head on your bottom arm. Your heels should be in line with your glutes.',
      'Engage your core to keep your hips stacked and prevent your torso from rocking backward.',
      'Keeping your feet together, lift your top knee up towards the ceiling, as if a clam opening its shell.',
      'Lift as high as you can without letting your hips roll back.',
      'Pause at the top to squeeze your glute, then slowly lower the knee back down.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement must be isolated to the hip; do not rock your pelvis or torso.',
      'Keep your feet touching throughout the movement.',
      'The range of motion may be small; focus on the quality of the contraction.'
    ],
    modifications: {
      beginner: 'Perform with a smaller range of motion.',
      advanced: 'Add a resistance band around your thighs, just above the knees. Progress to a \'Clam Shell Hip Lift\'.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on side, knees bent, legs stacked.',
        'Heels in line with glutes.',
        'Core braced, hips stacked vertically.'
      ],
      execution: [
        'Keep feet together.',
        'Lift top knee towards the ceiling.',
        'Squeeze the outer glute.',
        'Don\'t rock your hips back.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Rocking the pelvis backward to get more height.',
        'Letting the feet come apart.',
        'Rushing the movement.'
      ],
      breathing: 'Exhale as you lift the knee, inhale as you lower.'
    }
  },

  'dumbbell-good-morning': {
    id: 'dumbbell-good-morning',
    name: 'Dumbbell Good Morning',
    category: 'strength',
    equipment: [
      'Dumbbells'
    ],
    muscleGroups: [
      'Hamstrings',
      'Glutes',
      'Lower Back'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, holding one dumbbell horizontally against your upper chest, or two dumbbells resting on your shoulders.',
      'Keep a slight bend in your knees throughout the movement.',
      'Engage your core and keep your back perfectly straight.',
      'Hinge at your hips, pushing your glutes straight back, and lower your torso until it is nearly parallel to the floor.',
      'Feel a deep stretch in your hamstrings.',
      'Drive your hips forward and squeeze your glutes to return to the standing position.'
    ],
    safetyNotes: [
      'Maintaining a flat back is crucial to protect your spine. Do not allow it to round.',
      'The movement is a hip hinge, not a squat. Your shins should remain mostly vertical.',
      'Use a light weight until you have mastered the form.'
    ],
    modifications: {
      beginner: 'Perform with just your bodyweight, hands behind your head. Reduce the range of motion.',
      advanced: 'Increase the weight of the dumbbell(s). Slow down the eccentric (lowering) phase.',
      equipment_alternatives: {
        'Dumbbells': 'A barbell across the shoulders, or a resistance band looped under the feet and around the neck.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width.',
        'Hold dumbbell at chest/shoulders.',
        'Soft bend in the knees, flat back.'
      ],
      execution: [
        'Push your hips straight back.',
        'Hinge forward with a flat back.',
        'Feel the stretch in your hamstrings.',
        'Squeeze glutes to return to standing.'
      ],
      common_mistakes: [
        'Rounding the lower back.',
        'Bending the knees too much (turning it into a squat).',
        'Using too much weight.'
      ],
      breathing: 'Inhale as you hinge forward, exhale as you stand up.'
    }
  },

  'squat-to-overhead-press': {
    id: 'squat-to-overhead-press',
    name: 'Squat to Overhead press',
    category: 'strength',
    equipment: [
      'Dumbbells'
    ],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Shoulders',
      'Triceps',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, holding a pair of dumbbells at your shoulders, palms facing forward.',
      'Engage your core and perform a standard squat, lowering your hips back and down.',
      'As you drive up from the bottom of the squat, use the momentum to help press the dumbbells straight overhead.',
      'Fully extend your arms at the top, keeping your core tight to avoid arching your back.',
      'Lower the dumbbells back to the shoulder position with control as you simultaneously descend into the next squat.',
      'Maintain a fluid motion.'
    ],
    safetyNotes: [
      'Keep your core tight, especially at the top of the press, to protect your lower back.',
      'Control the weight; do not let the dumbbells fall back to your shoulders.',
      'Ensure proper squat form, keeping your chest up and knees tracking over toes.'
    ],
    modifications: {
      beginner: 'Use very light dumbbells or no weight. Perform the squat and the press as two separate movements.',
      advanced: 'Increase the weight of the dumbbells. Make the movement more explosive.',
      equipment_alternatives: {
        'Dumbbells': 'Kettlebells, a barbell, or a resistance band.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand with feet shoulder-width.',
        'Hold dumbbells at shoulder height.',
        'Core braced.'
      ],
      execution: [
        'Squat down to parallel or below.',
        'Drive up explosively from the heels.',
        'Use momentum to press weights overhead.',
        'Lower weights with control into the next squat.'
      ],
      common_mistakes: [
        'Arching the lower back during the press.',
        'Poor squat form (knees caving, chest dropping).',
        'Not controlling the weight on the way down.'
      ],
      breathing: 'Inhale on the squat down, exhale forcefully as you drive up and press.'
    }
  },

  'side-plank': {
    id: 'side-plank',
    name: 'Side Plank',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Obliques',
      'Core',
      'Shoulders'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your right side with your legs straight and stacked.',
      'Place your right forearm on the floor with your elbow directly under your shoulder.',
      'Engage your core and lift your hips off the floor until your body forms a straight line from your head to your feet.',
      'Keep your hips stacked and avoid letting them drop.',
      'You can place your top hand on your hip or extend it towards the ceiling.',
      'Hold for the desired duration, then switch sides.'
    ],
    safetyNotes: [
      'Ensure your supporting elbow is directly under your shoulder to protect the joint.',
      'Do not let your hips sag towards the floor.',
      'Keep your body in one straight plane; avoid twisting forward or backward.'
    ],
    modifications: {
      beginner: 'Perform from your knees by bending your bottom leg for support. Hold for a shorter duration.',
      advanced: 'Lift your top leg off your bottom leg. Add \'hip dips\' by lowering and lifting your hips.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie on side, elbow directly under shoulder.',
        'Legs stacked and straight.'
      ],
      execution: [
        'Lift hips to create a straight line.',
        'Engage bottom oblique.',
        'Keep hips stacked and forward.',
        'Hold.'
      ],
      common_mistakes: [
        'Hips sagging.',
        'Shoulder not aligned with elbow.',
        'Rolling the torso forward or back.'
      ],
      breathing: 'Breathe steadily throughout the hold.'
    }
  },

  'speed-skater-lunges': {
    id: 'speed-skater-lunges',
    name: 'Speed Skater Lunges',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Abductors',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Start standing with your feet together.',
      'Leap to your right, landing on your right foot with your right knee bent.',
      'As you land, sweep your left leg behind your right leg, and you can touch the left toes to the ground for balance.',
      'Simultaneously, you can swing your left arm forward and your right arm back, mimicking a speed skater.',
      'From this position, push off your right foot and leap to the left, landing on your left foot.',
      'Continue leaping from side to side in a dynamic, fluid motion.'
    ],
    safetyNotes: [
      'Land softly to protect your joints.',
      'Keep your chest up and your back relatively straight as you land.',
      'Start with small leaps and increase the distance as you get comfortable.'
    ],
    modifications: {
      beginner: 'Instead of leaping, take a large step to the side into a curtsy lunge. Keep the back foot on the ground for balance.',
      advanced: 'Increase the speed and distance of the leap. Keep the back foot off the ground entirely. Touch the floor with your opposite hand.',
      equipment_alternatives: {
        'None': 'Side lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet together.',
        'Prepare to leap sideways.'
      ],
      execution: [
        'Leap to one side, landing softly on one foot.',
        'Sweep the other leg behind.',
        'Push off explosively to leap to the other side.',
        'Stay low and athletic.'
      ],
      common_mistakes: [
        'Landing too heavily.',
        'Staying too upright and not getting low.',
        'Losing balance.'
      ],
      breathing: 'Exhale on the push-off to the side.'
    }
  },

  'single-leg-deadlift-to-hop': {
    id: 'single-leg-deadlift-to-hop',
    name: 'Single Leg Deadlift to Hop',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Hamstrings',
      'Calves',
      'Core'
    ],
    difficulty: 3,
    instructions: [
      'Stand on your left leg with a slight bend in the knee.',
      'Perform a single leg deadlift by hinging at your hips, extending your right leg straight back behind you and lowering your torso.',
      'Go as low as you can while maintaining a flat back and balance.',
      'Drive your hips forward to return to the standing position, but instead of placing your right foot down, drive your right knee up powerfully.',
      'Use the upward momentum to perform a small hop on your standing (left) leg.',
      'Land softly on your left leg and immediately go into the next repetition.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'This is an advanced move; master the single leg deadlift first.',
      'Focus on balance and control above all else.',
      'Land softly from the hop to protect your knee and ankle.'
    ],
    modifications: {
      beginner: 'Perform a single leg deadlift to a high knee drive, without the hop.',
      advanced: 'Increase the height of the hop. Hold a light dumbbell in the opposite hand.',
      equipment_alternatives: {
        'None': 'Single leg deadlift.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand on one leg, find your balance.',
        'Core tight.'
      ],
      execution: [
        'Hinge forward into a controlled single leg deadlift.',
        'Drive up, bringing the back knee forward powerfully.',
        'Explode into a hop on the standing leg.',
        'Land softly and repeat.'
      ],
      common_mistakes: [
        'Losing balance.',
        'Rounding the back during the deadlift.',
        'Landing too hard.'
      ],
      breathing: 'Inhale on the deadlift, exhale forcefully on the drive up and hop.'
    }
  },

  'single-leg-calf-raise': {
    id: 'single-leg-calf-raise',
    name: 'Single Leg Calf Raise',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Calves'
    ],
    difficulty: 2,
    instructions: [
      'Stand on one leg, holding onto a wall or chair for balance.',
      'You can perform this on flat ground or with the ball of your foot on the edge of a step for greater range of motion.',
      'Press through the ball of your standing foot to raise your heel as high as possible.',
      'Squeeze your calf muscle at the top of the movement.',
      'Slowly lower your heel back to the starting position with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Use support for balance to focus on the calf contraction.',
      'Avoid using momentum or bouncing at the bottom of the movement.',
      'Control the lowering (eccentric) phase.'
    ],
    modifications: {
      beginner: 'Perform with two legs. Reduce the range of motion.',
      advanced: 'Hold a dumbbell in the hand on the same side as the working leg. Slow down the lowering phase (3-5 seconds).',
      equipment_alternatives: {
        'None': 'Can be done on a step for more range of motion.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand on one leg, hold support.',
        'Ball of foot firmly planted.'
      ],
      execution: [
        'Drive up through the ball of the foot.',
        'Raise heel as high as possible.',
        'Squeeze calf at the top.',
        'Lower slowly and with control.'
      ],
      common_mistakes: [
        'Bouncing.',
        'Losing balance.',
        'Not controlling the descent.'
      ],
      breathing: 'Exhale as you raise your heel, inhale as you lower.'
    }
  },

  'supermans': {
    id: 'supermans',
    name: 'Supermans',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Back',
      'Glutes',
      'Shoulders',
      'Hamstrings'
    ],
    difficulty: 2,
    instructions: [
      'Lie face down on a mat with your arms extended straight out in front of you and your legs straight behind you (like Superman flying).',
      'Keep your head in a neutral position with your gaze towards the floor.',
      'Engage your core, lower back, and glutes to simultaneously lift both your arms and your legs a few inches off the floor.',
      'Focus on creating length from your fingertips to your toes.',
      'Hold the position for a moment at the top.',
      'Slowly lower your arms and legs back to the floor with control.'
    ],
    safetyNotes: [
      'Avoid looking up, as this can strain your neck.',
      'The lift should be controlled and come from your posterior chain, not by arching into a painful position.',
      'If you have lower back pain, stick to the alternating version.'
    ],
    modifications: {
      beginner: 'Perform the \'Alternating Superman\' by lifting opposite arm and leg. Lift only your upper body or only your lower body.',
      advanced: 'Hold the top position for a longer duration. Add small flutter kicks or arm circles while in the hold.',
      equipment_alternatives: {
        'None': 'Bird Dog.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, arms and legs extended.',
        'Gaze down, neck neutral.'
      ],
      execution: [
        'Lift arms and legs off the floor simultaneously.',
        'Squeeze glutes and back muscles.',
        'Focus on length, not height.',
        'Lower with full control.'
      ],
      common_mistakes: [
        'Lifting too high and straining the back.',
        'Cranking the neck upwards.',
        'Dropping without control.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },

  'alternating-jump-lunges': {
    id: 'alternating-jump-lunges',
    name: 'Alternating Jump Lunges',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Hamstrings'
    ],
    difficulty: 3,
    instructions: [
      'Start in a lunge position with your right foot forward and left foot back, both knees bent at 90 degrees.',
      'Engage your core and keep your chest up.',
      'Lower slightly, then jump explosively into the air.',
      'While in the air, switch the position of your legs, bringing your left foot forward and your right foot back.',
      'Land softly back in a lunge position with your legs switched.',
      'Immediately descend into the next jump. Continue alternating.'
    ],
    safetyNotes: [
      'This is a high-impact exercise; ensure you have a solid foundation of lunge strength first.',
      'Land as softly as possible to protect your knees and ankles.',
      'Maintain control and balance; do not let your front knee collapse inward.'
    ],
    modifications: {
      beginner: 'Perform alternating forward lunges without the jump. Perform a less explosive jump.',
      advanced: 'Increase the height and speed of the jumps. Hold light dumbbells.',
      equipment_alternatives: {
        'None': 'Alternating forward lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Start in a stable lunge position.',
        'Chest up, core braced.'
      ],
      execution: [
        'Jump vertically with power.',
        'Switch legs in mid-air.',
        'Land softly in the opposite lunge.',
        'Absorb the impact and repeat.'
      ],
      common_mistakes: [
        'Landing too hard.',
        'Front knee going past the toes.',
        'Losing balance and control.'
      ],
      breathing: 'Breathe rhythmically, exhaling on the explosive jump.'
    }
  },
  'side-plank-leg-lift': {
    id: 'side-plank-leg-lift',
    name: 'Side Plank Leg Lift',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Obliques',
      'Glutes (Medius)',
      'Core',
      'Abductors'
    ],
    difficulty: 2,
    instructions: [
      'Assume a strong side plank position on your right forearm, with your elbow under your shoulder and your body in a straight line.',
      'Engage your core and keep your hips lifted and stacked.',
      'Keeping your top (left) leg straight, slowly lift it up towards the ceiling without letting your hips drop.',
      'Focus on using your outer glute and hip to perform the lift.',
      'Pause at the top, then slowly lower the leg back down with control.',
      'Complete all repetitions on one side before switching.'
    ],
    safetyNotes: [
      'Do not let your hips sag towards the floor during the movement.',
      'The leg lift should be controlled; avoid swinging the leg.',
      'If you cannot maintain a stable plank, master the static side plank first.'
    ],
    modifications: {
      beginner: 'Perform the side plank from your knees and then lift the top leg.',
      advanced: 'Add a resistance band around your thighs or ankles.',
      equipment_alternatives: {
        'None': 'Side-lying leg lifts (non-plank version).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Establish a solid side plank, elbow under shoulder.',
        'Body in a straight line, hips stacked and lifted.',
        'Core braced.'
      ],
      execution: [
        'Slowly lift the top leg without moving your torso.',
        'Squeeze the outer glute of the lifted leg.',
        'Keep hips high and stable.',
        'Lower the leg with full control.'
      ],
      common_mistakes: [
        'Hips sagging during the leg lift.',
        'Swinging the leg or using momentum.',
        'Torso rotating forward or backward.'
      ],
      breathing: 'Exhale as you lift the leg, inhale as you lower.'
    }
  },
  'ankle-rocks': {
    id: 'ankle-rocks',
    name: 'Ankle Rocks',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Ankles',
      'Calves',
      'Tibialis Anterior'
    ],
    difficulty: 1,
    instructions: [
      'Start in a half-kneeling position with your right foot forward, foot flat on the floor.',
      'Place your hands on your right knee.',
      'Keeping your right heel on the ground, slowly rock your body forward, pushing your knee over your toes to feel a stretch in your ankle and calf.',
      'Hold for a moment at the point of maximum comfortable dorsiflexion.',
      'Rock back to the starting position.',
      'Repeat the rocking motion. Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Keep your front heel glued to the floor throughout the movement.',
      'The movement should be a smooth rock, not a painful jam of the ankle joint.',
      'Do not allow your arch to collapse.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Do not rock as far forward.',
      advanced: 'Hold a light weight or kettlebell on the front knee to increase the stretch. Try to push the knee outside of the foot to mobilize different angles.',
      equipment_alternatives: {
        'None': 'Standing calf stretch against a wall.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Half-kneeling position, front foot flat.',
        'Hands on front knee.'
      ],
      execution: [
        'Rock forward, driving knee over toes.',
        'Keep heel on the ground.',
        'Feel stretch in the ankle.',
        'Rock back and repeat smoothly.'
      ],
      common_mistakes: [
        'Lifting the heel off the ground.',
        'Moving too quickly.',
        'Collapsing the arch of the foot.'
      ],
      breathing: 'Inhale as you rock back, exhale as you rock forward into the stretch.'
    }
  },
  'reverse-lunge-knee-drive': {
    id: 'reverse-lunge-knee-drive',
    name: 'Reverse Lunge Knee Drive',
    category: 'cardio',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Hip Flexors',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand tall with your feet hip-width apart.',
      'Step your right foot back into a reverse lunge, lowering both knees to about 90 degrees.',
      'Push off your back (right) foot and drive your right knee up towards your chest in one fluid motion.',
      'Simultaneously come to balance on your standing (left) leg.',
      'Immediately go from the high knee position back into the next reverse lunge.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Maintain an upright torso and engaged core to aid balance.',
      'Control the descent into the lunge; do not let your back knee slam into the floor.',
      'Focus on a powerful but controlled knee drive.'
    ],
    modifications: {
      beginner: 'Perform the reverse lunge and the knee drive as two separate movements. Use a wall for balance.',
      advanced: 'Add a small hop on the standing leg as you drive the knee up.',
      equipment_alternatives: {
        'None': 'Standard alternating reverse lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.',
        'Core braced, ready to step back.'
      ],
      execution: [
        'Step back into a reverse lunge.',
        'Drive off back foot into a powerful high knee.',
        'Maintain balance on the standing leg.',
        'Flow smoothly between movements.'
      ],
      common_mistakes: [
        'Losing balance.',
        'Leaning too far forward.',
        'Not controlling the lunge.'
      ],
      breathing: 'Inhale on the lunge, exhale forcefully on the knee drive.'
    }
  },
  'squat-to-calf-raise': {
    id: 'squat-to-calf-raise',
    name: 'Squat to Calf Raise',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Calves'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart, toes pointing slightly out.',
      'Lower your hips back and down into a bodyweight squat, keeping your chest up and back straight.',
      'Drive through your heels to return to the standing position.',
      'Once you are fully standing, continue the upward motion by pressing through the balls of your feet to perform a calf raise.',
      'Hold the calf raise for a moment, then lower your heels back to the floor.',
      'That is one repetition. Immediately descend into the next squat.'
    ],
    safetyNotes: [
      'Ensure proper squat form with a straight back and knees tracking over toes.',
      'Control the calf raise; do not rock onto your toes.',
      'Maintain a fluid motion between the two parts of the exercise.'
    ],
    modifications: {
      beginner: 'Perform a squat and a calf raise as two distinct, separate movements.',
      advanced: 'Hold light dumbbells. Add a pause at the bottom of the squat and at the top of the calf raise.',
      equipment_alternatives: {
        'None': 'Bodyweight squats.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand with feet shoulder-width apart.',
        'Core engaged, chest up.'
      ],
      execution: [
        'Perform a full squat.',
        'Drive up to standing.',
        'Seamlessly transition into a calf raise.',
        'Lower heels and repeat.'
      ],
      common_mistakes: [
        'Poor squat form.',
        'Rushing the movement and losing balance on the calf raise.',
        'Not achieving full height in the calf raise.'
      ],
      breathing: 'Inhale as you squat down, exhale as you stand and perform the calf raise.'
    }
  },
  'single-leg-shin-sequence': {
    id: 'single-leg-shin-sequence',
    name: 'Single Leg Shin Sequence',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Tibialis Anterior',
      'Ankles',
      'Calves'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding onto a wall for balance if needed.',
      'Lift your right foot slightly off the floor in front of you.',
      'Part 1 (Flex/Point): Point your toes down towards the floor, then flex them up towards your shin. Repeat this motion.',
      'Part 2 (Circles): Make slow, controlled circles with your ankle in a clockwise direction, then counter-clockwise.',
      'Part 3 (Alphabet): \'Write\' the letters of the alphabet in the air with your big toe.',
      'This entire sequence activates and mobilizes the shin and ankle. Complete on one side before switching.'
    ],
    safetyNotes: [
      'Isolate the movement to your ankle; try not to move your entire leg.',
      'The movements should be deliberate and controlled, not fast or jerky.',
      'Use support for balance to focus on the quality of the ankle movement.'
    ],
    modifications: {
      beginner: 'Perform the sequence while seated in a chair. Make smaller movements.',
      advanced: 'Perform without any support to challenge your balance.',
      equipment_alternatives: {
        'None': 'Standard ankle circles.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: [
        'Stand on one leg, use support for balance.',
        'Lift the other foot off the floor.'
      ],
      execution: [
        'Perform controlled toe points and flexes.',
        'Transition to smooth ankle circles in both directions.',
        'Finish by drawing the alphabet with your toe.',
        'Focus on ankle articulation.'
      ],
      common_mistakes: [
        'Moving the whole leg instead of just the ankle.',
        'Rushing through the movements.',
        'Losing balance.'
      ],
      breathing: 'Breathe naturally and rhythmically.'
    }
  },
  'standing-fours': {
    id: 'standing-fours',
    name: 'Standing Fours',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Glutes (Piriformis)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding onto a wall or chair for balance.',
      'Cross your right ankle over your left thigh, just above the knee, creating a \'figure four\' shape.',
      'Keeping your back straight, hinge at your hips and sit back as if lowering into a chair.',
      'Lower yourself until you feel a deep stretch in your right glute and hip.',
      'Keep your right foot flexed to protect the knee.',
      'Hold the stretch, or for a dynamic version, gently pulse in and out of the stretch.',
      'Complete on one side before switching.'
    ],
    safetyNotes: [
      'Focus on balance; use support as needed.',
      'Keep your back straight as you hinge; do not round your spine.',
      'Do not force the stretch; only go as deep as your hip mobility allows.'
    ],
    modifications: {
      beginner: 'Do not sit as deep into the stretch. Use more support from the wall/chair.',
      advanced: 'Perform without any support for a greater balance challenge. Sit deeper into the stretch.',
      equipment_alternatives: {
        'None': 'Seated or supine figure four stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'pulses per side'
    },
    coaching: {
      setup: [
        'Stand on one leg, hold support.',
        'Cross other ankle over standing thigh.',
        'Flex the lifted foot.'
      ],
      execution: [
        'Hinge hips and sit back.',
        'Keep back straight, chest up.',
        'Feel stretch in the outer hip/glute.',
        'Pulse gently or hold.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Losing balance.',
        'Not flexing the foot, which can strain the knee.'
      ],
      breathing: 'Exhale as you sit back into the stretch.'
    }
  },
  'kang-squats': {
    id: 'kang-squats',
    name: 'Kang Squats',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Hamstrings',
      'Glutes',
      'Lower Back',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, and place your hands behind your head with elbows wide.',
      'Begin by performing a \'Good Morning\': keeping your back straight and a slight bend in your knees, hinge at your hips and lower your torso until it\'s nearly parallel to the floor.',
      'From this hinged position, drop your hips down and back to transition into the bottom of a deep squat. Your torso will become more upright.',
      'From the bottom of the squat, reverse the motion: first, lift your hips back up to the \'Good Morning\' position.',
      'Finally, drive your hips forward to return to a full standing position.',
      'Maintain a slow and controlled tempo throughout.'
    ],
    safetyNotes: [
      'This is a complex movement. Keeping your back flat is the top priority.',
      'Move slowly and deliberately, especially during the transitions.',
      'Master both the Good Morning and the Squat individually before combining them.'
    ],
    modifications: {
      beginner: 'Perform without hands behind your head (hands on hips or at chest). Reduce the range of motion in both the hinge and the squat.',
      advanced: 'Hold a very light dumbbell or plate behind your head. Pause at each position.',
      equipment_alternatives: {
        'None': 'Perform Good Mornings and Squats as separate exercises.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width.',
        'Hands behind head, elbows wide.',
        'Core braced.'
      ],
      execution: [
        'Hinge into a Good Morning (flat back).',
        'Drop hips into a deep squat.',
        'Lift hips back to the Good Morning position.',
        'Stand up by squeezing glutes.'
      ],
      common_mistakes: [
        'Rounding the back at any point.',
        'Rushing the transitions.',
        'Lifting the chest before the hips from the squat.'
      ],
      breathing: 'Inhale as you hinge and squat, exhale as you lift hips and stand.'
    }
  },
  'dynamic-quad-stretch': {
    id: 'dynamic-quad-stretch',
    name: 'Dynamic Quad Stretch',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Hip Flexors'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall, using a wall for light balance support if needed.',
      'Shift your weight to your left foot.',
      'Bend your right knee and grab your right ankle or foot with your right hand.',
      'Gently pull your heel towards your glute for a brief 1-2 second stretch. Keep your knees aligned.',
      'Release your foot and step forward, then repeat the stretch on the left leg.',
      'Continue alternating legs as you walk forward, creating a dynamic \'walk and pull\' motion.'
    ],
    safetyNotes: [
      'Do not pull forcefully or jerk the leg; the stretch should be brief and gentle.',
      'Maintain an upright posture and avoid arching your back.',
      'Focus on balance.'
    ],
    modifications: {
      beginner: 'Perform the stretch while standing in place, holding onto a wall for full support. Hold the stretch for slightly longer.',
      advanced: 'Perform without any support. Increase the pace of the walk.',
      equipment_alternatives: {
        'None': 'Static quad stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall.',
        'Prepare to walk forward.'
      ],
      execution: [
        'Take a step.',
        'Grab the ankle of the back leg.',
        'Pull heel to glute for a quick stretch.',
        'Release, step, and switch sides.',
        'Keep it moving.'
      ],
      common_mistakes: [
        'Holding the stretch for too long (making it static).',
        'Losing balance.',
        'Arching the back when pulling the leg.'
      ],
      breathing: 'Exhale briefly during each pull.'
    }
  },
  'plank-calf-press': {
    id: 'plank-calf-press',
    name: 'Plank Calf Press',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Core',
      'Calves',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Start in a high plank position (top of a push-up) with your hands under your shoulders and your body in a straight line.',
      'Engage your core to keep your hips stable.',
      'Keeping your body rigid, press forward onto your toes, shifting your shoulders slightly past your wrists.',
      'Then, press your heels back, feeling a stretch in your calves. Your body will rock forward and backward.',
      'Continue this controlled rocking motion, pressing through the ankles.',
      'Maintain a strong plank position throughout.'
    ],
    safetyNotes: [
      'Do not let your hips sag or rise during the rocking motion.',
      'The movement should come from the ankles, not from bending at the waist.',
      'Keep your core tight to protect your lower back.'
    ],
    modifications: {
      beginner: 'Perform from a kneeling plank position. Reduce the range of the rock.',
      advanced: 'Perform from a forearm plank. Perform on one foot at a time.',
      equipment_alternatives: {
        'None': 'Downward dog with \'pedaling\' feet.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'rocks'
    },
    coaching: {
      setup: [
        'Assume a strong high plank position.',
        'Body straight, core braced.'
      ],
      execution: [
        'Rock forward onto your toes.',
        'Press back through your heels.',
        'Feel the calf stretch on the backward press.',
        'Keep your plank form perfect.'
      ],
      common_mistakes: [
        'Hips sagging.',
        'Bouncing.',
        'Losing core engagement.'
      ],
      breathing: 'Breathe steadily throughout the movement.'
    }
  },
  'dynamic-side-body-stretch': {
    id: 'dynamic-side-body-stretch',
    name: 'Dynamic Side Body Stretch',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Lats',
      'Obliques',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet hip-width apart.',
      'Reach your right arm straight up to the ceiling, creating length in your right side.',
      'Gently bend your torso to the left, feeling a stretch all along your right side body. Hold for only 1-2 seconds.',
      'Return to the center and lower your right arm.',
      'Repeat on the other side, reaching your left arm up and bending to the right.',
      'Continue alternating sides in a smooth, flowing motion.'
    ],
    safetyNotes: [
      'The movement should be a pure side-bend; avoid leaning forward or backward.',
      'Keep your core engaged to support your spine.',
      'Do not bounce into the stretch.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Perform with hands on hips.',
      advanced: 'Grasp your wrist with your opposite hand and gently pull to deepen the stretch. Increase the pace of the alternating motion.',
      equipment_alternatives: {
        'None': 'Static side bend.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.'
      ],
      execution: [
        'Reach one arm up high.',
        'Bend to the opposite side.',
        'Feel a gentle stretch.',
        'Return to center and switch smoothly.'
      ],
      common_mistakes: [
        'Bending forward.',
        'Holding the stretch for too long (making it static).',
        'Not reaching fully overhead.'
      ],
      breathing: 'Inhale as you reach up, exhale as you bend to the side.'
    }
  },
  'shoulder-openers': {
    id: 'shoulder-openers',
    name: 'Shoulder Openers',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Shoulders',
      'Chest',
      'Upper Back'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet shoulder-width apart.',
      'Interlace your fingers behind your lower back, palms facing in.',
      'Straighten your arms and gently pull your shoulder blades together and down.',
      'Lift your hands away from your glutes as far as is comfortable, opening up your chest and the front of your shoulders.',
      'Hold for 2-3 seconds.',
      'Release the bind and bring your arms in front of you. Cross your arms and give yourself a hug, rounding your upper back to stretch the rhomboids.',
      'Alternate between the chest-opening and back-stretching positions.'
    ],
    safetyNotes: [
      'Avoid arching your lower back when opening the chest; keep your core engaged.',
      'Do not force the lift of the arms if you have tight shoulders.',
      'Keep the movements gentle and controlled.'
    ],
    modifications: {
      beginner: 'If you can\'t interlace your fingers, hold a towel or resistance band between your hands.',
      advanced: 'From the chest-opening position, hinge at your hips and fold forward, letting your arms fall overhead for a deeper stretch.',
      equipment_alternatives: {
        'None': 'Doorway chest stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'cycles'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Clasp hands behind your back, open chest.',
        'Lift arms away from body.',
        'Release, hug yourself, and round upper back.',
        'Flow between the two positions.'
      ],
      common_mistakes: [
        'Arching the lower back.',
        'Forcing the arm lift.',
        'Shrugging the shoulders.'
      ],
      breathing: 'Inhale as you open the chest, exhale as you round the back.'
    }
  },
  'standing-crunch': {
    id: 'standing-crunch',
    name: 'Standing Crunch',
    category: 'core',
    equipment: [],
    muscleGroups: [
      'Abs',
      'Obliques',
      'Hip Flexors'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart and place your hands behind your head, elbows wide.',
      'Engage your core and lift your right knee up towards your chest.',
      'Simultaneously, bring your left elbow towards your right knee, performing a standing crunch motion.',
      'The goal is to touch elbow to knee, but only go as far as you can with control.',
      'Return to the starting position.',
      'Repeat on the other side, lifting your left knee to your right elbow.',
      'Continue alternating sides.'
    ],
    safetyNotes: [
      'Do not pull on your head or neck with your hands.',
      'The movement should be a controlled crunch, not a fast, jerky motion.',
      'Focus on using your abs to bring the knee and elbow together.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion; do not try to touch elbow to knee. Use a wall for balance.',
      advanced: 'Increase the speed while maintaining control. Add a pause at the peak contraction.',
      equipment_alternatives: {
        'None': 'High knees.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet shoulder-width.',
        'Hands behind head, elbows out.'
      ],
      execution: [
        'Lift opposite knee to opposite elbow.',
        'Crunch your core.',
        'Maintain balance.',
        'Alternate sides smoothly.'
      ],
      common_mistakes: [
        'Pulling on the neck.',
        'Losing balance.',
        'Rounding the back too much instead of crunching.'
      ],
      breathing: 'Exhale as you bring your knee and elbow together.'
    }
  },
  'lizard-circles': {
    id: 'lizard-circles',
    name: 'Lizard Circles',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Groin',
      'Hip Flexors'
    ],
    difficulty: 2,
    instructions: [
      'Start in a low lunge or \'Lizard Pose\' with your right foot on the outside of your right hand, and your left knee on the ground.',
      'Keep your hands on the floor for support.',
      'Begin to make slow, controlled circles with your hips.',
      'Circle in one direction, shifting your weight forward, to the side, and back to explore the full range of motion of your hip joint.',
      'After several circles in one direction, reverse the direction.',
      'Complete on one side before switching legs.'
    ],
    safetyNotes: [
      'The movement should be slow and deliberate, not fast or jerky.',
      'Keep the movement pain-free. If you feel any pinching, reduce the size of the circles.',
      'Use yoga blocks under your hands if you cannot comfortably reach the floor.'
    ],
    modifications: {
      beginner: 'Make smaller circles. Keep your hands on yoga blocks for more height and less intensity.',
      advanced: 'Lower down onto your forearms for a deeper stretch. Make larger circles.',
      equipment_alternatives: {
        'None': 'Static Lizard Pose or frog stretch.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'circles per direction, per side'
    },
    coaching: {
      setup: [
        'Assume a Lizard Pose, back knee down.',
        'Hands on the floor inside front foot.'
      ],
      execution: [
        'Initiate slow circles with your hips.',
        'Explore the range of motion: forward, side, back.',
        'Keep it smooth and controlled.',
        'Reverse direction.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Forcing the movement into a painful range.',
        'Holding your breath.'
      ],
      breathing: 'Breathe naturally and rhythmically with the circular motion.'
    }
  },
  'run-in-place': {
    id: 'run-in-place',
    name: 'Run in Place',
    category: 'cardio',
    equipment: [],
    muscleGroups: [
      'Full Body'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet hip-width apart.',
      'Begin by lifting one knee towards your chest, then quickly switching to the other, mimicking a running motion.',
      'Land lightly on the balls of your feet.',
      'Coordinate your arms, swinging them in opposition to your legs (right arm forward with left knee up).',
      'Start at a light jog pace and gradually increase the intensity if desired.',
      'Maintain an upright posture.'
    ],
    safetyNotes: [
      'Land softly to minimize impact.',
      'Keep your core engaged to maintain good posture.',
      'Ensure you have adequate space around you.'
    ],
    modifications: {
      beginner: 'March in place without the impact of running.',
      advanced: 'Increase the intensity to \'High Knees\', driving your knees up towards your chest more explosively.',
      equipment_alternatives: {
        'None': 'Jumping jacks.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet ready.'
      ],
      execution: [
        'Lift knees alternately.',
        'Land lightly on the balls of your feet.',
        'Swing arms in coordination.',
        'Keep posture upright.'
      ],
      common_mistakes: [
        'Landing heavily on the heels.',
        'Slouching or leaning forward.',
        'Holding breath.'
      ],
      breathing: 'Breathe naturally and rhythmically.'
    }
  },
  'diagonal-lunge': {
    id: 'diagonal-lunge',
    name: 'Diagonal Lunge',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Adductors',
      'Abductors'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet hip-width apart.',
      'Take a large step forward and out to the right with your right foot, at about a 45-degree angle.',
      'Lower your hips until your right thigh is parallel to the floor, keeping your left leg relatively straight.',
      'Ensure your right knee tracks in line with your right foot.',
      'Keep your chest up and your core engaged.',
      'Push off your right foot to return to the starting position.',
      'Repeat on the left side, stepping diagonally forward and out with your left foot.',
      'Continue alternating sides.'
    ],
    safetyNotes: [
      'Control the movement and maintain balance.',
      'Keep your front knee aligned with your foot; do not let it collapse inward.',
      'Maintain an upright torso.'
    ],
    modifications: {
      beginner: 'Reduce the depth of the lunge. Take a smaller diagonal step.',
      advanced: 'Hold dumbbells in each hand. Add a hop as you return to the start.',
      equipment_alternatives: {
        'None': 'Forward lunges or side lunges.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width.',
        'Core braced.'
      ],
      execution: [
        'Step forward and out at a 45-degree angle.',
        'Lower into the lunge, keeping chest up.',
        'Push off the front foot to return to start.',
        'Alternate sides.'
      ],
      common_mistakes: [
        'Front knee caving inward.',
        'Leaning too far forward.',
        'Losing balance.'
      ],
      breathing: 'Inhale as you lunge, exhale as you push back to the start.'
    }
  },
  'high-skip': {
    id: 'high-skip',
    name: 'High Skip',
    category: 'plyometric',
    equipment: [],
    muscleGroups: [
      'Hip Flexors',
      'Glutes',
      'Calves',
      'Hamstrings'
    ],
    difficulty: 2,
    instructions: [
      'Begin by skipping forward lightly.',
      'Start to exaggerate the upward motion. On each skip, drive your knee up towards your chest explosively.',
      'Simultaneously, use your opposite arm to drive upward to generate more height.',
      'Focus on getting vertical height with each skip, not just forward distance.',
      'Land softly on the ball of your foot and immediately spring into the next skip.',
      'Maintain a tall, upright posture.'
    ],
    safetyNotes: [
      'Land softly to absorb impact.',
      'This is a high-impact exercise; ensure you are properly warmed up.',
      'Keep your core engaged to maintain stability and posture.'
    ],
    modifications: {
      beginner: 'Perform a high-knee march without the skip to learn the motion. Reduce the height of the skip.',
      advanced: 'Increase the height and explosive power of each skip. Cover more ground with each skip.',
      equipment_alternatives: {
        'None': 'High knees in place.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Stand tall, ready to move forward.'
      ],
      execution: [
        'Drive one knee up powerfully.',
        'Explode off the ground for vertical height.',
        'Use opposite arm drive.',
        'Land softly and immediately transition to the other side.'
      ],
      common_mistakes: [
        'Leaning back.',
        'Landing heavily on heels.',
        'Not using arms to generate power.'
      ],
      breathing: 'Exhale forcefully on each upward knee drive.'
    }
  },
  'boot-strappers': {
    id: 'boot-strappers',
    name: 'Boot Strappers',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Hamstrings',
      'Glutes',
      'Hips',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart.',
      'Squat down and place your fingertips under your toes.',
      'Keeping your fingertips under your toes, lift your hips up towards the ceiling, straightening your legs as much as possible to feel a deep hamstring stretch.',
      'Your back will be rounded at the top of this stretch.',
      'Lower your hips back down into the deep squat position, trying to bring your chest up and flatten your back.',
      'Repeat this fluid motion of lifting and lowering the hips.'
    ],
    safetyNotes: [
      'Move slowly and with control; do not jerk your hips up or down.',
      'Only straighten your legs as much as your hamstring flexibility allows.',
      'Keep your fingertips under your toes throughout the movement.'
    ],
    modifications: {
      beginner: 'Place hands on your shins or ankles instead of under your toes. Do not straighten legs as much.',
      advanced: 'Try to flatten your back more at the bottom of the squat. Hold the hamstring stretch for longer.',
      equipment_alternatives: {
        'None': 'Separate deep squats and standing forward folds.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Squat down, place fingertips under toes.',
        'Keep heels on the ground if possible.'
      ],
      execution: [
        'Lift hips up, straightening legs for hamstring stretch.',
        'Lower hips back down into a deep squat.',
        'Try to lift your chest at the bottom.',
        'Maintain a continuous flow.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Letting go of the toes.',
        'Forcing the stretch.'
      ],
      breathing: 'Inhale as you lower your hips, exhale as you lift your hips.'
    }
  },
  'standing-hip-open-and-close': {
    id: 'standing-hip-open-and-close',
    name: 'Hip Open & Close',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Hips',
      'Glutes',
      'Abductors',
      'Adductors'
    ],
    difficulty: 2,
    instructions: [
      'Stand tall on your left leg, using a wall for balance if needed.',
      'Lift your right knee up in front of you to a 90-degree angle.',
      'Keeping your knee bent, open your hip by moving your right knee out to the right side, as if stepping over a hurdle.',
      'From the open position, circle the knee back and down to the starting position.',
      'This is one \'open\' repetition. For the \'close\', reverse the motion: lift the knee out to the side, then bring it to the front and lower it.',
      'Complete all repetitions on one side before switching.'
    ],
    safetyNotes: [
      'Keep your torso upright and stable; avoid leaning to compensate.',
      'The movement should be controlled and initiated from the hip joint.',
      'Use support for balance to ensure quality of movement.'
    ],
    modifications: {
      beginner: 'Reduce the height of the knee lift. Make smaller circles. Use a wall for full support.',
      advanced: 'Perform without any support to challenge balance. Increase the height and size of the circle.',
      equipment_alternatives: {
        'None': 'Clamshells or fire hydrants on the floor.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per direction, per side'
    },
    coaching: {
      setup: [
        'Stand tall on one leg, hold support.',
        'Lift opposite knee to hip height.'
      ],
      execution: [
        'Circle the knee out to the side (open).',
        'Circle the knee from the side to the front (close).',
        'Keep hips level and torso still.',
        'Focus on smooth hip rotation.'
      ],
      common_mistakes: [
        'Leaning the torso.',
        'Swinging the leg with momentum.',
        'Losing balance.'
      ],
      breathing: 'Breathe naturally and rhythmically with the movement.'
    }
  },
  'standing-cat-cow': {
    id: 'standing-cat-cow',
    name: 'Standing Cat-Cow',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Spine',
      'Back',
      'Core'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart and your knees slightly bent.',
      'Place your hands on your thighs for support.',
      'Cow Pose: Inhale as you arch your back, dropping your belly, and lifting your chest and gaze forward. Pull your shoulders back.',
      'Cat Pose: Exhale as you round your spine, tucking your chin to your chest and pressing your hands into your thighs to deepen the spinal flexion.',
      'Flow smoothly between the two positions, articulating through your entire spine.',
      'Repeat for the desired number of repetitions.'
    ],
    safetyNotes: [
      'The movement should be slow and controlled, guided by your breath.',
      'Keep a soft bend in your knees throughout.',
      'Avoid any movement that causes sharp pain.'
    ],
    modifications: {
      beginner: 'Perform with a smaller range of motion.',
      advanced: 'Deepen the arch and the rounding, exploring the full range of your spinal mobility.',
      equipment_alternatives: {
        'None': 'Standard Cat-Cow on hands and knees.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'cycles'
    },
    coaching: {
      setup: [
        'Stand with knees bent, hands on thighs.'
      ],
      execution: [
        'Inhale, arch your back, look forward (Cow).',
        'Exhale, round your spine, tuck chin (Cat).',
        'Let breath guide the movement.',
        'Feel the articulation of each vertebra.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Only moving the neck or lower back.',
        'Holding breath.'
      ],
      breathing: 'Inhale for Cow, exhale for Cat.'
    }
  },
  'balance-and-change-of-support-drill': {
    id: 'balance-and-change-of-support-drill',
    name: 'Balance & Change of Support - Drill',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Core',
      'Ankles',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Start by balancing on your left leg, with your right knee lifted to hip height.',
      'Hold this single-leg balance for 3-5 seconds, staying as still as possible.',
      'Quickly \'change support\' by hopping from your left foot to your right foot, immediately bringing your left knee up to hip height.',
      'Establish your balance on the right leg and hold for 3-5 seconds.',
      'The goal is to minimize time on the ground during the switch and to find stability instantly on the landing foot.',
      'Continue alternating sides.'
    ],
    safetyNotes: [
      'Focus on a soft landing to absorb impact.',
      'Keep your core tight to maintain balance.',
      'If you are unstable, spend more time on the balance portion and less on the quick switch.'
    ],
    modifications: {
      beginner: 'Instead of hopping, quickly step from one foot to the other. Use a wall for support.',
      advanced: 'Increase the speed of the switch. Perform on a slightly unstable surface.',
      equipment_alternatives: {
        'None': 'Single leg balance holds.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Balance on one leg, opposite knee high.',
        'Find your stability.'
      ],
      execution: [
        'Hold the balance.',
        'Perform a quick hop to switch feet.',
        'Immediately find and hold the balance on the other side.',
        'Be quick in the air, still on the ground.'
      ],
      common_mistakes: [
        'Wobbling excessively after landing.',
        'Landing heavily.',
        'Not holding the balance portion.'
      ],
      breathing: 'Breathe steadily during the hold, exhale on the switch.'
    }
  },
  'pony-drill': {
    id: 'pony-drill',
    name: 'Pony - Drill',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Calves',
      'Ankles',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Stand with your feet together, posture tall.',
      'This drill mimics a prancing horse.',
      'Perform quick, low-to-the-ground hops, alternating feet.',
      'As you hop on your left foot, your right leg should be slightly in front with the knee bent. As you hop on your right foot, the left leg is in front.',
      'The emphasis is on a stiff ankle and a quick, springy bounce off the ground. The knees do not bend much.',
      'Keep your ground contact time as short as possible. Use a slight arm swing for rhythm.'
    ],
    safetyNotes: [
      'Stay on the balls of your feet.',
      'This is a plyometric drill; ensure you are warmed up.',
      'Focus on ankle stiffness, not high jumping.'
    ],
    modifications: {
      beginner: 'Perform the motion slowly without the \'spring\'. Focus on the footwork.',
      advanced: 'Increase the speed and reactivity. Try to cover a small amount of ground moving forward.',
      equipment_alternatives: {
        'None': 'Pogo hops (two feet).'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Quick, alternating hops on the balls of the feet.',
        'Think \'stiff ankles\' and \'springy\'.',
        'Minimize ground contact time.',
        'Keep the hops low.'
      ],
      common_mistakes: [
        'Bending the knees too much.',
        'Spending too much time on the ground.',
        'Landing on the heels.'
      ],
      breathing: 'Maintain a quick, rhythmic breathing pattern.'
    }
  },
  'hopping-drills': {
    id: 'hopping-drills',
    name: 'Hopping - Drills',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Calves',
      'Quads',
      'Glutes',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Balance on your left leg, with your right knee bent and foot off the ground.',
      'Perform a series of continuous, forward-moving hops on your left leg.',
      'Focus on a powerful push-off and a stable, soft landing.',
      'Use your arms to help with balance and momentum.',
      'The goal is to maintain balance while generating forward propulsion.',
      'Hop for a set distance or number of reps, then switch to the right leg.'
    ],
    safetyNotes: [
      'Land softly on the midfoot to absorb impact.',
      'Maintain a slight bend in the knee of your hopping leg upon landing.',
      'If you lose balance, reset before continuing.'
    ],
    modifications: {
      beginner: 'Perform hops in place instead of moving forward. Perform fewer hops in a row.',
      advanced: 'Increase the distance or height of each hop. Try hopping in different directions (side to side, backward).',
      equipment_alternatives: {
        'None': 'Pogo hops (two feet).'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'hops per leg'
    },
    coaching: {
      setup: [
        'Balance on one leg.'
      ],
      execution: [
        'Hop continuously forward.',
        'Push off powerfully.',
        'Land softly and with control.',
        'Use arms for balance.'
      ],
      common_mistakes: [
        'Landing heavily on the heel.',
        'Losing balance between hops.',
        'Hopping with a straight, locked knee.'
      ],
      breathing: 'Exhale on each hop.'
    }
  },
  'advanced-jump-drill': {
    id: 'advanced-jump-drill',
    name: 'Advanced Jump - Drill',
    category: 'technique',
    equipment: [],
    muscleGroups: [
      'Full Body'
    ],
    difficulty: 3,
    instructions: [
      'This drill combines a hop and a bound.',
      'Start by balancing on your left leg.',
      'Perform two forward hops on your left leg.',
      'After the second hop, immediately bound forward, landing on your right leg.',
      'Stick the landing and find your balance on the right leg.',
      'From the right leg, perform two forward hops.',
      'After the second hop, immediately bound forward, landing on your left leg.',
      'Continue this \'hop-hop-bound\' sequence, alternating legs for the bound.'
    ],
    safetyNotes: [
      'This is a high-impact, advanced drill. Ensure you have a strong base of plyometric fitness.',
      'Focus on control and soft landings above all else.',
      'Perform in an area with plenty of clear space.'
    ],
    modifications: {
      beginner: 'Break the drill down. Practice just the single-leg hops. Practice just bounding from one leg to the other.',
      advanced: 'Increase the distance and power of both the hops and the bound.',
      equipment_alternatives: {
        'None': 'Broad jumps.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'sequences per side'
    },
    coaching: {
      setup: [
        'Stand with space in front of you.',
        'Balance on one leg.'
      ],
      execution: [
        'Hop, hop (on same leg).',
        'Bound (land on opposite leg).',
        'Stick the landing, find balance.',
        'Repeat: hop, hop, bound.'
      ],
      common_mistakes: [
        'Losing balance on the landing.',
        'Landing too hard.',
        'Not being explosive enough in the bound.'
      ],
      breathing: 'Exhale on the explosive movements (hops and bound).'
    }
  },
  '90-degree-squats': {
    id: '90-degree-squats',
    name: '90 Degree Squats',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Glutes',
      'Hamstrings'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart, toes pointing slightly out.',
      'Engage your core and keep your chest up and back straight.',
      'Lower your hips back and down as if sitting in a chair, stopping precisely when your thighs are parallel to the floor (a 90-degree angle at the knees).',
      'Hold for a moment at the bottom to ensure control.',
      'Push through your heels to return to the starting position.',
      'Focus on the controlled descent and stopping at the target depth.'
    ],
    safetyNotes: [
      'Maintain a flat back throughout; do not round.',
      'Ensure your knees track in line with your toes and do not collapse inward.',
      'You can place a chair or box behind you to learn the correct depth.'
    ],
    modifications: {
      beginner: 'Use a chair for support and to gauge depth. Reduce the hold time at the bottom.',
      advanced: 'Add a longer pause at the 90-degree position. Hold a light weight.',
      equipment_alternatives: {
        'None': 'Box squats.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet shoulder-width, chest up, core braced.'
      ],
      execution: [
        'Hips go back and down.',
        'Stop when thighs are parallel to the floor.',
        'Pause to demonstrate control.',
        'Drive through heels to stand.'
      ],
      common_mistakes: [
        'Going too deep or not deep enough.',
        'Dropping too quickly.',
        'Leaning too far forward.'
      ],
      breathing: 'Inhale as you lower, exhale as you stand up.'
    }
  },
  'forward-fold': {
    id: 'forward-fold',
    name: 'Forward Fold',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Hamstrings',
      'Calves',
      'Lower Back'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet hip-width apart.',
      'Place your hands on your hips and keep a slight bend in your knees.',
      'Exhale and hinge at your hips, leading with your chest to fold your torso over your legs.',
      'Keep your back as straight as possible during the hinge.',
      'Once folded, let your head and neck relax completely. Your hands can rest on your shins, the floor, or grab opposite elbows.',
      'Hold the stretch, breathing deeply into your hamstrings.'
    ],
    safetyNotes: [
      'Keep a micro-bend in your knees to protect them; do not lock them.',
      'If you have lower back issues, bend your knees more generously.',
      'Lead with your chest, not by rounding your back.'
    ],
    modifications: {
      beginner: 'Bend your knees significantly. Rest your hands on your thighs or on yoga blocks.',
      advanced: 'Straighten your legs more. Wrap your hands around the backs of your ankles to gently deepen the fold.',
      equipment_alternatives: {
        'None': 'Seated forward fold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width.',
        'Slight bend in knees.'
      ],
      execution: [
        'Hinge from your hips with a flat back.',
        'Fold torso over legs.',
        'Let your head and neck hang heavy.',
        'Breathe into the hamstring stretch.'
      ],
      common_mistakes: [
        'Rounding the back to reach the floor.',
        'Locking the knees.',
        'Holding tension in the neck and shoulders.'
      ],
      breathing: 'Inhale to find length, exhale to fold deeper.'
    }
  },
  'chest-stretch': {
    id: 'chest-stretch',
    name: 'Chest Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Chest (Pectorals)',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Stand in a doorway or next to a wall.',
      'Place your right forearm on the doorway or wall with your elbow bent at a 90-degree angle and at shoulder height.',
      'Gently step forward with your right foot until you feel a comfortable stretch across your chest and the front of your shoulder.',
      'Keep your core engaged to avoid arching your back.',
      'Hold the stretch, breathing deeply.',
      'Release and repeat on the other side.'
    ],
    safetyNotes: [
      'The stretch should be gentle; do not force it or you may strain the shoulder joint.',
      'Ensure your elbow is not significantly higher or lower than your shoulder.',
      'Keep your shoulder blade pulled back and down.'
    ],
    modifications: {
      beginner: 'Do not step as far into the stretch. Hold for a shorter duration.',
      advanced: 'Gently rotate your torso away from the wall to deepen the stretch.',
      equipment_alternatives: {
        'None': 'Clasping hands behind your back and lifting arms.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Stand in a doorway or next to a wall.',
        'Place forearm on the surface, elbow at 90 degrees.'
      ],
      execution: [
        'Gently step forward.',
        'Feel a stretch across your chest.',
        'Keep core tight and posture tall.',
        'Breathe and relax into the stretch.'
      ],
      common_mistakes: [
        'Pushing too hard into the stretch.',
        'Shrugging the shoulder up towards the ear.',
        'Arching the lower back.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'sumo-squat': {
    id: 'sumo-squat',
    name: 'Sumo Squat',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Glutes',
      'Quads'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet much wider than shoulder-width apart.',
      'Turn your toes out to about a 45-degree angle.',
      'Keeping your torso upright and core engaged, lower your hips straight down until your thighs are parallel to the floor or as low as you can comfortably go.',
      'Ensure your knees track in line with your toes and do not collapse inward.',
      'Drive through your heels to return to the starting position, squeezing your glutes and inner thighs at the top.',
      'You can hold your hands at your chest for balance.'
    ],
    safetyNotes: [
      'Keep your chest lifted and your torso as upright as possible.',
      'Do not let your knees cave inward.',
      'Focus on dropping your hips straight down, rather than pushing them back like a regular squat.'
    ],
    modifications: {
      beginner: 'Reduce the depth of the squat. Use a wall for balance support.',
      advanced: 'Hold a single heavy dumbbell or kettlebell with both hands (Goblet Sumo Squat). Add a pause at the bottom.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Wide stance, feet turned out at 45 degrees.',
        'Chest up, torso upright.'
      ],
      execution: [
        'Drop hips straight down.',
        'Keep knees tracking over your feet.',
        'Go as low as your mobility allows.',
        'Drive through heels to stand, squeeze glutes.'
      ],
      common_mistakes: [
        'Knees collapsing inward.',
        'Leaning the torso too far forward.',
        'Not keeping feet wide enough.'
      ],
      breathing: 'Inhale as you lower, exhale as you drive up.'
    }
  },
  'chin-tucks': {
    id: 'chin-tucks',
    name: 'Chin Tucks',
    category: 'core',
    equipment: [],
    muscleGroups: [
      'Deep Neck Flexors'
    ],
    difficulty: 1,
    instructions: [
      'Sit or stand tall with your spine straight and your shoulders relaxed.',
      'Without tilting your head up or down, gently pull your chin and head straight back, as if you are trying to make a double chin.',
      'Imagine a string pulling the back of your head straight up and back.',
      'You should feel a stretch at the base of your skull and an engagement in the front of your neck.',
      'Hold the tucked position for a few seconds.',
      'Relax back to the neutral starting position. Repeat.'
    ],
    safetyNotes: [
      'The movement should be gentle and pain-free.',
      'Avoid tilting your chin down to your chest; the movement is a straight backward glide.',
      'Keep your jaw relaxed.'
    ],
    modifications: {
      beginner: 'Perform lying on your back with a small rolled towel under your neck. Gently press your neck into the towel.',
      advanced: 'Perform against a wall, trying to touch the back of your head to the wall without tilting your chin up.',
      equipment_alternatives: {
        'None': 'This is a body-awareness exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Sit or stand tall, shoulders relaxed.',
        'Gaze straight ahead.'
      ],
      execution: [
        'Gently glide your chin straight back.',
        'Create a \'double chin\'.',
        'Feel the back of your neck lengthen.',
        'Hold, then release with control.'
      ],
      common_mistakes: [
        'Tilting the chin down instead of gliding back.',
        'Shrugging the shoulders.',
        'Tensing the jaw.'
      ],
      breathing: 'Breathe naturally throughout the exercise.'
    }
  },
  'seated-twist': {
    id: 'seated-twist',
    name: 'Seated Twist',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Spine',
      'Obliques',
      'Lower Back',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor with your legs extended in front of you.',
      'Bend your right knee and place your right foot on the floor outside of your left thigh.',
      'Place your right hand on the floor behind you for support, fingers pointing away.',
      'Inhale to sit up tall, lengthening your spine.',
      'Exhale and twist your torso to the right, hooking your left elbow on the outside of your right knee to gently deepen the twist.',
      'Keep both sit bones grounded. Gaze over your right shoulder.',
      'Hold the stretch, then release and switch sides.'
    ],
    safetyNotes: [
      'Initiate the twist from your waist, not by cranking your neck.',
      'Always lengthen the spine on the inhale before twisting on the exhale.',
      'Do not force the twist; move within a comfortable range.'
    ],
    modifications: {
      beginner: 'Hug your knee with your arm instead of hooking the elbow. Keep the bottom leg bent.',
      advanced: 'Increase the depth of the twist. Bind your arms by wrapping your left arm through the gap in your bent leg and clasping your right hand behind your back.',
      equipment_alternatives: {
        'None': 'Can be performed sitting in a chair.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit tall, one leg straight, other foot crossed over.',
        'Hand behind you for support.'
      ],
      execution: [
        'Inhale, lengthen your spine.',
        'Exhale, twist towards the bent knee.',
        'Use your arm to gently deepen the twist.',
        'Keep sit bones on the floor.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Lifting one hip off the floor.',
        'Forcing the twist from the neck.'
      ],
      breathing: 'Inhale to lengthen, exhale to twist.'
    }
  },
  'single-leg-hamstring-stretch': {
    id: 'single-leg-hamstring-stretch',
    name: 'Single Leg Hamstring Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)',
      'Yoga Strap'
    ],
    muscleGroups: [
      'Hamstrings',
      'Calves'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with both knees bent and feet flat on the floor.',
      'Extend your right leg up towards the ceiling.',
      'Loop a yoga strap, towel, or resistance band around the ball of your right foot, holding the ends with both hands.',
      'Gently pull on the strap to draw your right leg closer to your torso, keeping the leg as straight as possible.',
      'Stop when you feel a comfortable stretch in your hamstring. Flex your foot to also stretch the calf.',
      'Keep your head and shoulders relaxed on the floor. You can keep your left leg bent or extend it flat on the floor for a deeper stretch.',
      'Hold, then switch sides.'
    ],
    safetyNotes: [
      'Keep the leg as straight as possible, but do not lock the knee.',
      'The stretch should be felt in the belly of the hamstring, not behind the knee.',
      'Avoid lifting your hips off the floor.'
    ],
    modifications: {
      beginner: 'Keep the non-stretching leg bent with the foot on the floor. Do not pull the leg as close.',
      advanced: 'Extend the non-stretching leg flat on the floor. Gently pull the leg closer to your torso.',
      equipment_alternatives: {
        'Yoga Strap': 'A towel, belt, or dog leash.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: [
        'Lie on your back.',
        'Loop strap around one foot and extend that leg up.'
      ],
      execution: [
        'Gently pull on the strap.',
        'Draw the straight leg towards you.',
        'Feel the stretch in the back of your thigh.',
        'Keep hips grounded and shoulders relaxed.'
      ],
      common_mistakes: [
        'Bending the knee too much.',
        'Lifting hips off the floor.',
        'Pulling too aggressively.'
      ],
      breathing: 'Breathe deeply and exhale to relax further into the stretch.'
    }
  },
  'dynamic-baby-cobra': {
    id: 'dynamic-baby-cobra',
    name: 'Dynamic Baby Cobra',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Spine',
      'Back Extensors',
      'Chest'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on your mat with your forehead on the floor.',
      'Place your hands under your shoulders, elbows tucked in close to your body.',
      'Press the tops of your feet into the mat to engage your legs.',
      'Inhale and use your back muscles to lift your head and chest a few inches off the floor. Keep the lift small and your gaze slightly forward and down.',
      'Use minimal pressure from your hands.',
      'Exhale and lower your chest and head back to the floor with control.',
      'Repeat the lift and lower, flowing with your breath.'
    ],
    safetyNotes: [
      'The work should come from your back muscles, not from pushing with your hands.',
      'Keep your neck long; avoid jutting your chin forward.',
      'Keep your glutes engaged to protect your lower back.'
    ],
    modifications: {
      beginner: 'Lift only an inch or two off the floor. Keep more pressure in the hands for support.',
      advanced: 'Hover your hands off the floor to ensure your back muscles are doing all the work.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, hands under shoulders, elbows in.',
        'Tops of feet on the floor.'
      ],
      execution: [
        'Inhale, peel your chest off the floor.',
        'Use your back muscles, not your hands.',
        'Keep neck long, gaze slightly forward.',
        'Exhale, lower with control.'
      ],
      common_mistakes: [
        'Pushing up with the hands.',
        'Cranking the neck back.',
        'Lifting too high and crunching the low back.'
      ],
      breathing: 'Inhale as you lift, exhale as you lower.'
    }
  },
  'frog-stretch': {
    id: 'frog-stretch',
    name: 'Frog Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Groin',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Start on your hands and knees in a tabletop position.',
      'Slowly walk your knees out wide to the sides, as far as is comfortable.',
      'Keep your shins on the floor and your ankles directly behind your knees, creating a 90-degree angle at the knee joint.',
      'Flex your feet so the inner edges of your feet are on the floor.',
      'Lower down onto your forearms and gently press your hips back.',
      'Hold this deep stretch, breathing into your inner thighs and hips.'
    ],
    safetyNotes: [
      'This is an intense stretch; ease into it slowly and do not force it.',
      'Use a mat or blankets under your knees for cushioning.',
      'If you feel any sharp pain in your knees or hips, back off immediately.'
    ],
    modifications: {
      beginner: 'Do not spread your knees as wide. Stay up on your hands instead of lowering to forearms. Place a cushion under your torso for support.',
      advanced: 'Spread your knees wider. Gently rock your hips forward and backward to mobilize the joint.',
      equipment_alternatives: {
        'None': 'Butterfly stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Start on all fours.',
        'Slide knees out wide.',
        'Keep ankles behind knees, feet flexed.'
      ],
      execution: [
        'Lower to your forearms.',
        'Gently press your hips back.',
        'Breathe deeply and try to relax your inner thighs.',
        'Hold the stretch.'
      ],
      common_mistakes: [
        'Going too deep too quickly.',
        'Letting ankles collapse inward.',
        'Holding breath and tensing up.'
      ],
      breathing: 'Deep, slow breaths are crucial to allow the muscles to release in this pose.'
    }
  },
  'upper-back-stretch': {
    id: 'upper-back-stretch',
    name: 'Upper Back Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Upper Back',
      'Rhomboids',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Sit or stand tall.',
      'Extend your arms straight out in front of you at shoulder height and interlace your fingers, palms facing away from you.',
      'Tuck your chin to your chest and round your upper back, actively pushing your hands away from you.',
      'Feel a deep stretch between your shoulder blades.',
      'Hold this position, breathing into the space between your shoulder blades.',
      'To release, return to a tall posture.'
    ],
    safetyNotes: [
      'Focus the stretch on the upper back, not the lower back.',
      'The movement should be a gentle rounding, not a forceful slump.',
      'Keep your shoulders relaxed away from your ears.'
    ],
    modifications: {
      beginner: 'Do not push hands as far away. Hold for a shorter duration.',
      advanced: 'Add a gentle side-to-side motion with your torso to stretch different fibers of the muscles.',
      equipment_alternatives: {
        'None': 'Eagle Arms or Cat Pose.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Sit or stand tall.',
        'Interlace fingers in front of you.'
      ],
      execution: [
        'Push palms away from you.',
        'Round your upper back and tuck your chin.',
        'Breathe into the space between your shoulder blades.',
        'Actively press away to deepen the stretch.'
      ],
      common_mistakes: [
        'Shrugging shoulders up to ears.',
        'Holding breath.',
        'Rounding the low back instead of the upper back.'
      ],
      breathing: 'Breathe deeply throughout the hold.'
    }
  },
  'fire-hydrants': {
    id: 'fire-hydrants',
    name: 'Fire Hydrants',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius)',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Start on all fours in a tabletop position with hands under shoulders and knees under hips.',
      'Engage your core to keep your back flat and prevent your torso from twisting.',
      'Keeping your right knee bent at a 90-degree angle, lift your right leg out to the side.',
      'Lift as high as you can while keeping your hips level and without shifting all your weight to the left.',
      'Pause at the top and squeeze your outer glute.',
      'Lower your knee back to the starting position with control.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement should be isolated to the hip; avoid rotating or tilting your torso.',
      'Keep the 90-degree bend in your knee.',
      'Move with control, not momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion.',
      advanced: 'Add a resistance band around your thighs, just above the knees. Add a pause at the top.',
      equipment_alternatives: {
        'None': 'Standing fire hydrants.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Start in a stable tabletop position.',
        'Core braced, back flat.'
      ],
      execution: [
        'Lift one bent knee out to the side.',
        'Keep hips square to the floor.',
        'Squeeze the outer glute.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Tilting the torso to lift the leg higher.',
        'Arching or rounding the back.',
        'Swinging the leg.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },
  'staff-pose': {
    id: 'staff-pose',
    name: 'Staff Pose',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Core',
      'Back',
      'Hamstrings'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor with your legs extended straight out in front of you.',
      'Sit up as tall as possible, stacking your shoulders directly over your hips.',
      'Place your hands on the floor alongside your hips, with fingers pointing forward, and gently press down to help lift and lengthen your torso.',
      'Flex your feet by pulling your toes back towards you and actively press your thighs into the floor.',
      'Engage your core and imagine a string pulling the crown of your head towards the ceiling.',
      'Hold this active, engaged position.'
    ],
    safetyNotes: [
      'If your hamstrings are tight, sit on the edge of a folded blanket or block to help tilt your pelvis forward.',
      'Avoid rounding your lower back; focus on creating a straight spine.',
      'Keep your shoulders relaxed away from your ears.'
    ],
    modifications: {
      beginner: 'Sit on a cushion or block. Keep a slight bend in your knees.',
      advanced: 'Actively engage every muscle more intensely. Hold for a longer duration.',
      equipment_alternatives: {
        'None': 'This is a fundamental postural exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Sit on floor, legs straight out.',
        'Sit on a block if hamstrings are tight.'
      ],
      execution: [
        'Sit up tall, long spine.',
        'Press hands into floor to help lift.',
        'Flex feet, press thighs down.',
        'Engage your entire body.'
      ],
      common_mistakes: [
        'Slouching or rounding the back.',
        'Not actively engaging the legs.',
        'Shrugging the shoulders.'
      ],
      breathing: 'Breathe steadily and deeply, using the breath to create more length in the spine.'
    }
  },
  'adductor-lifts': {
    id: 'adductor-lifts',
    name: 'Adductor Lifts',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your right side, supporting your head with your right arm.',
      'Bend your top (left) leg and place your left foot on the floor in front of your bottom leg for support.',
      'Keep your bottom (right) leg straight.',
      'Engage your inner thigh to lift your bottom (right) leg off the floor.',
      'Lift as high as you can, focusing on the contraction in your adductor muscle.',
      'Hold for a moment at the top.',
      'Slowly lower the leg back down with control, but try not to let it rest on the floor.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement should be small and controlled.',
      'Avoid using momentum or your hips to lift the leg.',
      'Focus on isolating the inner thigh.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Let the leg rest on the floor between reps.',
      advanced: 'Add a light ankle weight. Add a pause at the top of the lift.',
      equipment_alternatives: {
        'None': 'Sumo squats or plié squats.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Lie on your side, top foot planted in front.',
        'Bottom leg is straight.'
      ],
      execution: [
        'Lift the bottom straight leg off the floor.',
        'Use your inner thigh to initiate the lift.',
        'Movement is small and focused.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Using momentum.',
        'Rocking the torso.',
        'Not feeling the contraction in the inner thigh.'
      ],
      breathing: 'Exhale as you lift, inhale as you lower.'
    }
  },
  'activated-hip-flexor-stretch-with-block': {
    id: 'activated-hip-flexor-stretch-with-block',
    name: 'Hip Flexor Stretch with a block',
    category: 'mobility',
    equipment: [
      'Yoga Block'
    ],
    muscleGroups: [
      'Hip Flexors',
      'Psoas',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Start in a half-kneeling position with your left knee on a yoga block or cushion and your right foot forward.',
      'Ensure your torso is upright and your hips are square.',
      'Perform a posterior pelvic tilt by tucking your tailbone under and engaging your right glute.',
      'You should feel a deep stretch in the front of your left hip (hip flexor).',
      'Hold this activated position, maintaining the pelvic tuck and glute squeeze.',
      'To increase the stretch, you can gently press your hips forward without losing the pelvic tuck.',
      'Hold, then switch sides.'
    ],
    safetyNotes: [
      'The key to this stretch is the posterior pelvic tilt; do not just lean forward with an arched back.',
      'Keep your core engaged to stabilize your spine.',
      'The block under the knee is for comfort and to allow a better angle for the stretch.'
    ],
    modifications: {
      beginner: 'Perform without the block. Focus solely on mastering the pelvic tilt and glute squeeze.',
      advanced: 'Raise the arm on the same side as the back leg overhead to deepen the stretch along the fascial line.',
      equipment_alternatives: {
        'Yoga Block': 'A firm cushion or folded towel.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Half-kneeling, back knee on a block.',
        'Torso upright, hips square.'
      ],
      execution: [
        'Tuck your tailbone under (posterior tilt).',
        'Squeeze the glute of the back leg.',
        'Feel the stretch in the front of the hip.',
        'Maintain the activation.'
      ],
      common_mistakes: [
        'Arching the lower back instead of tucking the pelvis.',
        'Leaning forward without activation.',
        'Not squeezing the glute.'
      ],
      breathing: 'Breathe deeply throughout the hold to help the psoas release.'
    }
  },
  'half-kneeling-rotation-with-block-and-dumbbell': {
    id: 'half-kneeling-rotation-with-block-and-dumbbell',
    name: 'Half Kneeling Rotation with a block & dumbbell',
    category: 'strength',
    equipment: [
      'Yoga Block',
      'Dumbbells'
    ],
    muscleGroups: [
      'Core',
      'Obliques',
      'Hips',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Assume a half-kneeling position with your left knee on a yoga block and your right foot forward.',
      'Hold a single light dumbbell with both hands, arms extended straight out in front of your chest.',
      'Engage your core and keep your hips stable and facing forward.',
      'Slowly rotate your torso and arms to the right (towards your front leg).',
      'The rotation should come from your upper/mid-back, not from twisting your hips.',
      'Return to the center with control.',
      'Rotate your torso and arms to the left.',
      'Return to center. That is one repetition. Complete all reps, then switch legs.'
    ],
    safetyNotes: [
      'Keep your hips and lower body completely still; the movement is a torso rotation.',
      'Use a light weight; control is more important than load.',
      'Maintain a tall, upright posture.'
    ],
    modifications: {
      beginner: 'Perform without the dumbbell. Reduce the range of rotation.',
      advanced: 'Use a slightly heavier dumbbell. Pause at the end range of each rotation.',
      equipment_alternatives: {
        'Dumbbell': 'A medicine ball or weight plate.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Half-kneeling, back knee on block.',
        'Hold dumbbell with straight arms at chest height.',
        'Core braced, hips stable.'
      ],
      execution: [
        'Rotate torso and arms to one side.',
        'Keep hips locked and facing forward.',
        'Return to center with control.',
        'Rotate to the other side.'
      ],
      common_mistakes: [
        'Twisting the hips instead of the torso.',
        'Leaning or losing posture.',
        'Using a weight that is too heavy.'
      ],
      breathing: 'Exhale as you rotate, inhale as you return to center.'
    }
  },
  'skater-squats': {
    id: 'skater-squats',
    name: 'Skater Squats',
    category: 'strength',
    equipment: [],
    muscleGroups: [
      'Glutes',
      'Quads',
      'Hamstrings',
      'Core'
    ],
    difficulty: 3,
    instructions: [
      'Stand on your left leg, with your right leg bent and foot lifted off the floor behind you.',
      'Extend your arms out in front of you for balance.',
      'Initiate the movement by sending your hips back and bending your left knee, as if performing a single-leg squat.',
      'Lower yourself with control, allowing your back (right) knee to travel towards the floor behind your standing heel.',
      'Go as low as you can, ideally until your back knee lightly taps the floor.',
      'Drive through your left heel to return to the starting standing position.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'This is an advanced single-leg exercise. Master single-leg deadlifts and split squats first.',
      'Keep your standing knee tracking over your foot; do not let it collapse inward.',
      'Control the descent; do not drop into the bottom position.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Place cushions on the floor to tap your knee onto. Hold onto a wall or TRX for support.',
      advanced: 'Hold dumbbells in each hand. Add a pause at the bottom.',
      equipment_alternatives: {
        'None': 'Pistol squats (different mechanics but similar challenge) or assisted single-leg squats.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Balance on one leg.',
        'Arms out front for counterbalance.',
        'Core tight.'
      ],
      execution: [
        'Hinge hips back and bend standing knee.',
        'Lower down with control.',
        'Aim to tap back knee to the floor.',
        'Drive through standing heel to rise.'
      ],
      common_mistakes: [
        'Losing balance.',
        'Standing knee caving in.',
        'Dropping down without control.'
      ],
      breathing: 'Inhale as you lower, exhale as you drive up.'
    }
  },
  'monster-walks-with-miniband': {
    id: 'monster-walks-with-miniband',
    name: 'Monster Walks with a miniband',
    category: 'strength',
    equipment: [
      'Resistance Band'
    ],
    muscleGroups: [
      'Glutes (Medius, Maximus)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Place a miniband around your ankles or just above your knees.',
      'Assume an athletic, half-squat stance with your feet wide enough to create tension on the band.',
      'Begin walking forward by taking diagonal steps. Step forward and out with your right foot, then forward and out with your left foot.',
      'Maintain the wide stance and low squat position throughout the walk.',
      'Keep tension on the band at all times.',
      'After walking forward for a set distance, walk backward in the same diagonal pattern to return to the start.'
    ],
    safetyNotes: [
      'Keep your knees pushed out against the band; do not let them collapse inward.',
      'Maintain a relatively upright chest and a flat back.',
      'The movement should be controlled, not a waddle.'
    ],
    modifications: {
      beginner: 'Use a lighter resistance band. Place the band above the knees.',
      advanced: 'Use a heavier band. Place the band around your feet for maximum glute activation. Stay lower in your squat.',
      equipment_alternatives: {
        'None': 'Bodyweight sumo walks.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'steps forward and back'
    },
    coaching: {
      setup: [
        'Band around ankles/knees.',
        'Assume a low, wide athletic stance.',
        'Create tension.'
      ],
      execution: [
        'Take diagonal steps forward.',
        'Stay low and wide.',
        'Keep knees out.',
        'Walk backward to return.'
      ],
      common_mistakes: [
        'Knees caving in.',
        'Standing up too tall.',
        'Losing tension in the band.'
      ],
      breathing: 'Breathe steadily throughout the movement.'
    }
  },
  'superman-sequence': {
    id: 'superman-sequence',
    name: 'Superman Sequence',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Back',
      'Glutes',
      'Shoulders'
    ],
    difficulty: 2,
    instructions: [
      'Lie face down with your arms extended in front of you.',
      'Lift your right arm and left leg simultaneously (Alternating Superman). Lower them.',
      'Lift your left arm and right leg. Lower them.',
      'Lift just your arms, squeezing your upper back. Lower them.',
      'Lift just your legs, squeezing your glutes. Lower them.',
      'Finally, lift both arms and both legs at the same time (Full Superman). Lower them.',
      'This entire sequence constitutes one repetition.'
    ],
    safetyNotes: [
      'Keep your gaze towards the floor to maintain a neutral neck.',
      'The lifts should be small and controlled, focusing on muscle engagement, not height.',
      'Keep your core engaged to protect your lower back.'
    ],
    modifications: {
      beginner: 'Focus on only one part of the sequence, such as the alternating superman, until you feel stronger.',
      advanced: 'Add a pause at the top of each lift.',
      equipment_alternatives: {
        'None': 'Bird dog sequence.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'sequences'
    },
    coaching: {
      setup: [
        'Lie face down, arms and legs extended.',
        'Neutral neck.'
      ],
      execution: [
        'Opposite arm/leg lift.',
        'Other opposite arm/leg lift.',
        'Arms only lift.',
        'Legs only lift.',
        'Full Superman lift.',
        'Move smoothly through the sequence.'
      ],
      common_mistakes: [
        'Cranking the neck up.',
        'Lifting too high and straining the back.',
        'Using momentum.'
      ],
      breathing: 'Exhale on each lift, inhale as you lower.'
    }
  },
  'wide-dynamic-cobra': {
    id: 'wide-dynamic-cobra',
    name: 'Wide Dynamic Cobra',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Spine',
      'Chest',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on your mat.',
      'Place your hands on the floor wider than your mat, tenting your fingertips.',
      'Keep your elbows pointing up towards the ceiling.',
      'Press the tops of your feet into the mat.',
      'Inhale and press into your fingertips to lift your head and chest off the floor, rolling up through your spine.',
      'Look over your right shoulder, then your left.',
      'Exhale and slowly roll back down to the floor.',
      'Repeat the movement, flowing with your breath.'
    ],
    safetyNotes: [
      'Keep your glutes and core engaged to protect your lower back.',
      'The movement should be fluid; avoid any sharp or jerky motions.',
      'Only lift as high as is comfortable for your back.'
    ],
    modifications: {
      beginner: 'Do not lift as high. Keep hands closer to the body for more support.',
      advanced: 'Lift higher and add a longer pause while looking over each shoulder.',
      equipment_alternatives: {
        'None': 'Standard cobra or baby cobra pose.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, hands wide on fingertips.',
        'Elbows pointing up.'
      ],
      execution: [
        'Inhale, roll your chest up.',
        'Look over one shoulder, then the other.',
        'Exhale, roll back down smoothly.',
        'Keep glutes engaged.'
      ],
      common_mistakes: [
        'Pushing up too high and jamming the low back.',
        'Shrugging shoulders up to ears.',
        'Forgetting to breathe with the movement.'
      ],
      breathing: 'Inhale as you roll up, exhale as you roll down.'
    }
  },
  'leaning-quad-stretch': {
    id: 'leaning-quad-stretch',
    name: 'Leaning Quad Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Quads',
      'Hip Flexors'
    ],
    difficulty: 2,
    instructions: [
      'Kneel on the floor with both knees together.',
      'Keep your torso upright and your core engaged.',
      'Slowly and with control, begin to lean your torso straight back.',
      'You can place your hands on the floor behind you for support.',
      'Lean back only as far as you can while feeling a deep stretch in your quads and the front of your hips.',
      'Keep your knees on or close to the floor.',
      'Hold the stretch. To exit, use your hands to press yourself back to the upright kneeling position.'
    ],
    safetyNotes: [
      'This can be an intense stretch on the knees and quads. Do not perform if you have knee injuries.',
      'Avoid arching your lower back; try to maintain a relatively straight line from your knees to your head.',
      'Move into and out of the stretch very slowly.'
    ],
    modifications: {
      beginner: 'Do not lean back as far. Keep hands on heels for support. Perform a standard standing or side-lying quad stretch instead.',
      advanced: 'Lean back further, aiming to rest on your forearms or lie all the way back (Hero Pose).',
      equipment_alternatives: {
        'None': 'Standing quad stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Kneel upright, knees together.',
        'Core engaged.'
      ],
      execution: [
        'Slowly lean your torso straight back.',
        'Use hands for support if needed.',
        'Feel a deep stretch in your quads.',
        'Hold and breathe.'
      ],
      common_mistakes: [
        'Arching the back excessively.',
        'Leaning back too quickly.',
        'Forcing the stretch despite knee pain.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'upper-body-around-the-world': {
    id: 'upper-body-around-the-world',
    name: 'Upper Body Around the World',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Shoulders',
      'Chest',
      'Lats',
      'Spine'
    ],
    difficulty: 1,
    instructions: [
      'Stand with your feet shoulder-width apart and knees slightly bent.',
      'Interlace your fingers and reach your arms straight up overhead.',
      'Begin to make a large, slow circle with your entire upper body.',
      'Bend to the right, then fold forward, then bend to the left, and finally return to the upright position.',
      'Keep your core engaged and your lower body stable.',
      'After completing a circle in one direction, reverse the direction.',
      'The movement should be fluid and controlled.'
    ],
    safetyNotes: [
      'Keep the movement slow to avoid dizziness.',
      'Only move within a range that feels good for your back and shoulders.',
      'Keep your lower body anchored and stable.'
    ],
    modifications: {
      beginner: 'Make smaller circles. Do not fold as far forward.',
      advanced: 'Make larger, slower circles to deepen the stretch in all positions. Hold a light weight or yoga block.',
      equipment_alternatives: {
        'None': 'Cat-cow and standing side bends.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'circles per direction'
    },
    coaching: {
      setup: [
        'Stand with feet wide, knees soft.',
        'Clasp hands and reach overhead.'
      ],
      execution: [
        'Make a large, slow circle with your torso.',
        'Move through side-bend, forward-fold, other side-bend, and back up.',
        'Keep lower body still.',
        'Reverse direction.'
      ],
      common_mistakes: [
        'Moving too quickly.',
        'Bending the knees too much.',
        'Not engaging the core.'
      ],
      breathing: 'Inhale as you come up and to the side, exhale as you fold forward.'
    }
  },
  'single-leg-hip-flexor-extension-with-pole': {
    id: 'single-leg-hip-flexor-extension-with-pole',
    name: 'Single Leg Hip Flexor Extension with Pole',
    category: 'mobility',
    equipment: [
      'Pole'
    ],
    muscleGroups: [
      'Hip Flexors',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding a pole (or wall) with your left hand for balance.',
      'Lift your right knee up towards your chest (hip flexion).',
      'From this position, sweep your right leg back behind you, extending your hip as far as you can.',
      'Squeeze your right glute at the end of the extension.',
      'The movement should be a controlled swing from full flexion to full extension.',
      'Keep your torso upright and your core engaged.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Use the pole for balance so you can focus on the hip movement.',
      'Avoid arching your lower back as you extend the leg back; the movement should come from the hip and glute.',
      'Control the swing; do not use wild momentum.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion of the swing.',
      advanced: 'Perform without support to challenge balance. Add a pause at peak flexion and peak extension.',
      equipment_alternatives: {
        'Pole': 'A wall, chair, or sturdy object.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Stand tall, holding pole for balance.',
        'Balance on one leg.'
      ],
      execution: [
        'Swing other leg from high knee (flexion) to behind you (extension).',
        'Squeeze the glute on the backswing.',
        'Keep torso upright and stable.',
        'Maintain a fluid, controlled swing.'
      ],
      common_mistakes: [
        'Arching the back.',
        'Losing balance.',
        'Swinging with momentum instead of control.'
      ],
      breathing: 'Exhale as you swing back, inhale as you bring the knee forward.'
    }
  },
  'seated-toe-rainbows-with-chair': {
    id: 'seated-toe-rainbows-with-chair',
    name: 'Seated Toe Rainbows with Chair',
    category: 'mobility',
    equipment: [
      'Chair'
    ],
    muscleGroups: [
      'Hips',
      'Core'
    ],
    difficulty: 1,
    instructions: [
      'Sit tall on the edge of a chair with your feet flat on the floor.',
      'Extend your right leg straight out in front of you, with your heel lightly touching the floor.',
      'Keeping your leg straight, lift your right foot a few inches off the floor.',
      'Slowly trace a \'rainbow\' or arc shape with your foot, moving it out to the right side and then back to the center.',
      'The movement should be controlled and initiated from your hip.',
      'Keep your torso and pelvis still.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Sit tall; do not slouch or lean back.',
      'Isolate the movement to the leg and hip; avoid rocking your torso.',
      'Keep the movement small and controlled.'
    ],
    modifications: {
      beginner: 'Make smaller rainbows. Do not lift the leg as high.',
      advanced: 'Make larger rainbows. Add a light ankle weight.',
      equipment_alternatives: {
        'None': 'Supine leg circles.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per leg'
    },
    coaching: {
      setup: [
        'Sit tall on the edge of a chair.',
        'Extend one leg straight, heel on the floor.'
      ],
      execution: [
        'Lift the straight leg slightly.',
        'Draw an arc or rainbow shape on the floor.',
        'Keep your upper body and hips still.',
        'Control the movement from your hip.'
      ],
      common_mistakes: [
        'Slouching.',
        'Rocking the torso to help move the leg.',
        'Bending the knee.'
      ],
      breathing: 'Breathe naturally throughout the movement.'
    }
  },
  'decline-plank-with-chair': {
    id: 'decline-plank-with-chair',
    name: 'Decline Plank with Chair',
    category: 'core',
    equipment: [
      'Chair'
    ],
    muscleGroups: [
      'Core',
      'Shoulders',
      'Chest'
    ],
    difficulty: 2,
    instructions: [
      'Place your feet on the seat of a stable chair.',
      'Position your hands or forearms on the floor, walking them out until your body is in a straight line.',
      'Your hands/elbows should be directly under your shoulders.',
      'Engage your core, glutes, and quads to maintain a rigid, straight line from your head to your heels.',
      'Do not let your hips sag or rise too high.',
      'Hold this position for the desired duration.'
    ],
    safetyNotes: [
      'Ensure the chair is stable and will not slide.',
      'It is critical to keep your core braced to prevent your lower back from sagging, which can cause injury.',
      'If you feel strain in your lower back, stop the exercise.'
    ],
    modifications: {
      beginner: 'Use a lower surface, like a step, instead of a chair. Hold for a shorter duration.',
      advanced: 'Lift one leg off the chair. Perform plank taps or other movements from this position.',
      equipment_alternatives: {
        'Chair': 'A bench, box, or stability ball.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Place feet on a chair.',
        'Hands or forearms on the floor under shoulders.'
      ],
      execution: [
        'Create a straight, rigid line with your body.',
        'Brace your core HARD.',
        'Squeeze glutes and quads.',
        'Hold.'
      ],
      common_mistakes: [
        'Hips sagging.',
        'Hips pushing too high.',
        'Not engaging the core sufficiently.'
      ],
      breathing: 'Breathe steadily throughout the hold.'
    }
  },
  'elevated-pigeon-with-chair': {
    id: 'elevated-pigeon-with-chair',
    name: 'Elevated Pigeon with Chair',
    category: 'flexibility',
    equipment: [
      'Chair'
    ],
    muscleGroups: [
      'Glutes',
      'Piriformis',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Stand in front of a chair or bench.',
      'Lift your right leg and place your shin on the chair seat, with your knee pointing out to the right and your foot towards the left.',
      'Your shin should be as parallel to the front of the chair as is comfortable.',
      'Keep your standing (left) leg straight or slightly bent.',
      'Place your hands on the chair for support.',
      'Keeping your back straight, hinge at your hips and gently lean your torso forward over your shin until you feel a stretch in your right outer hip and glute.',
      'Hold the stretch. Switch sides.'
    ],
    safetyNotes: [
      'Ensure the chair is stable.',
      'Keep your front foot flexed to protect your knee.',
      'Do not force the stretch; ease into it gently.'
    ],
    modifications: {
      beginner: 'Do not lean as far forward. Use a lower surface like a step.',
      advanced: 'Lean further forward. Try to rest your forearms on the chair.',
      equipment_alternatives: {
        'Chair': 'A bench, table, or bed.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Place one shin on a chair in a pigeon-like pose.',
        'Hands on chair for support.'
      ],
      execution: [
        'Keep back straight.',
        'Hinge forward over your shin.',
        'Breathe into the hip stretch.',
        'Keep the front foot flexed.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Forcing the stretch and causing knee pain.',
        'Holding tension in the shoulders.'
      ],
      breathing: 'Breathe deeply to help the hip muscles release.'
    }
  },
  'knee-hug-rock': {
    id: 'knee-hug-rock',
    name: 'Knee Hug Rock',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Lower Back',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back and hug both knees into your chest.',
      'Grasp your shins or the backs of your thighs.',
      'Gently and slowly, begin to rock from side to side.',
      'Use the motion to massage your lower back against the floor.',
      'The movement should be small and controlled.',
      'You can also make small circles with your knees in both directions.'
    ],
    safetyNotes: [
      'Keep the movement gentle; do not rock so far that you lose balance or fall over.',
      'Keep your head and neck relaxed on the floor.',
      'This should feel like a massage, not a strain.'
    ],
    modifications: {
      beginner: 'Make very small rocks and circles.',
      advanced: 'Make larger circles, exploring the full range of motion of your lower back and hips.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight exercise.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Lie on back, hug knees to chest.'
      ],
      execution: [
        'Gently rock side to side.',
        'Massage the lower back.',
        'Try making small circles with the knees.',
        'Relax and breathe.'
      ],
      common_mistakes: [
        'Rocking too aggressively.',
        'Tensing the neck and shoulders.',
        'Holding breath.'
      ],
      breathing: 'Breathe deeply and naturally.'
    }
  },
  'side-plank-hip-dip': {
    id: 'side-plank-hip-dip',
    name: 'Side Plank Hip Dip',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Obliques',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Start in a strong side plank position on your right forearm, with your elbow under your shoulder and body in a straight line.',
      'Engage your core to keep your hips stacked.',
      'Slowly lower your right hip towards the floor, feeling a stretch in your right oblique.',
      'Tap your hip to the floor lightly or come as close as you can.',
      'Engage your right oblique to lift your hip back up, returning to the starting side plank position and even lifting slightly higher.',
      'Repeat the dipping motion with control. Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'The movement should be controlled in both directions; do not just drop your hip.',
      'Keep your shoulder stable and your elbow directly under it.',
      'Maintain a straight line with your body; do not bend at the waist.'
    ],
    modifications: {
      beginner: 'Perform from your knees instead of your feet. Reduce the range of motion of the dip.',
      advanced: 'Hold a light dumbbell on your top hip.',
      equipment_alternatives: {
        'None': 'Standing side bends.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Establish a strong side plank.',
        'Hips high, core braced.'
      ],
      execution: [
        'Slowly dip your bottom hip towards the floor.',
        'Use your obliques to lift the hip back up.',
        'Control the movement both up and down.',
        'Keep your body straight.'
      ],
      common_mistakes: [
        'Dropping the hip without control.',
        'Twisting the torso.',
        'Shoulder not being over the elbow.'
      ],
      breathing: 'Inhale as you lower your hip, exhale as you lift.'
    }
  },
  'fire-hydrants-with-internal-rotation': {
    id: 'fire-hydrants-with-internal-rotation',
    name: 'Fire Hydrants with Internal Rotation',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Glutes (Medius, Minimus)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Start on all fours in a tabletop position with hands under shoulders and knees under hips.',
      'Engage your core to keep your back flat.',
      'Lift your right knee out to the side, as in a standard fire hydrant.',
      'At the top of the movement, internally rotate your hip to lift your right foot up towards the ceiling.',
      'Reverse the motion: lower the foot back down by externally rotating the hip, then lower the knee back to the starting position.',
      'The entire movement should be slow and controlled. Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Avoid tilting your torso or shifting your weight excessively to compensate.',
      'The movement comes from hip rotation, not from arching your back.',
      'Focus on the mind-muscle connection with your glutes.'
    ],
    modifications: {
      beginner: 'Perform standard fire hydrants without the internal rotation. Reduce the range of motion.',
      advanced: 'Add a resistance band around your thighs, just above the knees.',
      equipment_alternatives: {
        'None': 'Standard fire hydrants.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps per side'
    },
    coaching: {
      setup: [
        'Start in a stable tabletop position.',
        'Core braced, back flat.'
      ],
      execution: [
        'Lift knee out to the side (abduction).',
        'At the top, rotate hip to lift foot (internal rotation).',
        'Control the reversal of the movement.',
        'Keep hips level.'
      ],
      common_mistakes: [
        'Rocking the torso side-to-side.',
        'Rushing the rotational component.',
        'Losing the 90-degree bend in the knee.'
      ],
      breathing: 'Exhale as you lift and rotate, inhale as you lower.'
    }
  },
  'prone-y-raises': {
    id: 'prone-y-raises',
    name: 'Prone Y Raises',
    category: 'strength',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Upper Back',
      'Shoulders',
      'Lower Trapezius'
    ],
    difficulty: 1,
    instructions: [
      'Lie face down on a mat with your arms extended overhead in a \'Y\' shape, thumbs pointing towards the ceiling.',
      'Rest your forehead on the mat to keep your neck neutral.',
      'Engage your core and squeeze your shoulder blades together and down.',
      'Keeping your arms straight, lift them off the floor as high as you can without arching your lower back.',
      'Focus on the contraction in your mid and lower traps.',
      'Hold for a moment at the top.',
      'Slowly lower your arms back to the floor with control.'
    ],
    safetyNotes: [
      'Avoid shrugging your shoulders towards your ears; keep them pulled down.',
      'The movement should be initiated by your back and shoulder muscles, not by momentum.',
      'Do not lift your chest off the floor; isolate the movement to your arms.'
    ],
    modifications: {
      beginner: 'Reduce the range of motion. Perform without lifting, focusing only on the scapular squeeze.',
      advanced: 'Hold very light dumbbells or weight plates. Add a pause at the top of the lift.',
      equipment_alternatives: {
        'None': 'Can also be performed on an incline bench.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Lie face down, arms in a \'Y\' shape.',
        'Thumbs pointing up, forehead on mat.'
      ],
      execution: [
        'Squeeze shoulder blades together and down.',
        'Lift straight arms off the floor.',
        'Feel the contraction in your upper back.',
        'Lower with control.'
      ],
      common_mistakes: [
        'Shrugging shoulders.',
        'Bending the elbows.',
        'Lifting the chest and arching the low back.'
      ],
      breathing: 'Exhale as you lift your arms, inhale as you lower.'
    }
  },
  'standing-chest-stretch': {
    id: 'standing-chest-stretch',
    name: 'Standing Chest Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Chest (Pectorals)',
      'Shoulders'
    ],
    difficulty: 1,
    instructions: [
      'Stand tall with your feet hip-width apart.',
      'Interlace your fingers behind your lower back, palms pressing together if possible.',
      'Keeping your arms straight, gently pull your shoulder blades together and down your back.',
      'Lift your hands away from your glutes and lift your chest towards the ceiling.',
      'Feel a stretch across the front of your chest and shoulders.',
      'Hold the stretch, breathing deeply.',
      'To release, unclasp your hands slowly.'
    ],
    safetyNotes: [
      'Avoid arching your lower back; keep your core engaged.',
      'If you cannot interlace your fingers, hold a strap or towel between your hands.',
      'Do not force the arm lift; only go as high as your shoulder mobility comfortably allows.'
    ],
    modifications: {
      beginner: 'Use a strap or towel to allow for a wider grip. Do not lift arms as high.',
      advanced: 'Hinge at the hips and fold forward, allowing your clasped hands to fall overhead for a deeper stretch.',
      equipment_alternatives: {
        'None': 'Doorway chest stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, interlace fingers behind your back.'
      ],
      execution: [
        'Squeeze shoulder blades together and down.',
        'Lift your chest proudly.',
        'Lift hands away from your body.',
        'Breathe into the chest.'
      ],
      common_mistakes: [
        'Arching the lower back.',
        'Shrugging shoulders up to ears.',
        'Forcing the arm lift.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'hand-and-wrist-sequence': {
    id: 'hand-and-wrist-sequence',
    name: 'Hand & Wrist Sequence',
    category: 'mobility',
    equipment: [],
    muscleGroups: [
      'Forearms',
      'Wrists',
      'Hands'
    ],
    difficulty: 1,
    instructions: [
      'Part 1 (Flexion/Extension): Extend one arm forward, palm up. With your other hand, gently bend the wrist down, pulling fingers towards the floor. Hold. Then, gently bend the wrist up. Hold. Repeat with palm down.',
      'Part 2 (Rotations): Clasp your hands together and make slow, controlled circles with your wrists in both directions.',
      'Part 3 (Finger Spreads): Extend your arms and spread your fingers as wide as possible, then make a tight fist. Repeat this opening and closing motion quickly.',
      'Complete the entire sequence.'
    ],
    safetyNotes: [
      'All movements should be gentle and pain-free.',
      'Do not apply excessive pressure when stretching the wrist.',
      'Keep movements slow and controlled.'
    ],
    modifications: {
      beginner: 'Perform each stretch with less intensity and for a shorter duration.',
      advanced: 'Increase the duration of the holds and the number of repetitions.',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight mobility sequence.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds total'
    },
    coaching: {
      setup: [
        'Sit or stand tall.'
      ],
      execution: [
        'Gently perform wrist flexion and extension stretches on both sides.',
        'Perform slow wrist rotations with hands clasped.',
        'Finish with dynamic finger spreads and fists.'
      ],
      common_mistakes: [
        'Pulling too hard on the wrist.',
        'Moving too quickly.',
        'Forgetting to stretch in all directions.'
      ],
      breathing: 'Breathe deeply and continuously throughout the sequence.'
    }
  },
  'cross-body-hamstring-stretch': {
    id: 'cross-body-hamstring-stretch',
    name: 'Cross Body Hamstring Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hamstrings',
      'IT Band',
      'Glutes'
    ],
    difficulty: 2,
    instructions: [
      'Lie on your back.',
      'Extend your right leg up towards the ceiling and your left leg flat on the floor.',
      'Grasp your right leg with your left hand (on the calf or thigh). You can use a strap for assistance.',
      'Keeping your right shoulder on the floor, gently pull your straight right leg across your body to the left.',
      'Stop when you feel a stretch along the outside of your right leg (IT Band) and hamstring.',
      'Hold the stretch, breathing deeply.',
      'Release slowly and switch sides.'
    ],
    safetyNotes: [
      'Keep the opposite shoulder grounded to maintain the twist and focus the stretch.',
      'Do not pull so hard that it causes pain in your hip or lower back.',
      'Keep the stretching leg as straight as is comfortable.'
    ],
    modifications: {
      beginner: 'Use a strap or towel around your foot. Keep a bend in the knee of the stretching leg.',
      advanced: 'Try to bring the leg closer to the floor on the opposite side while keeping the shoulder down.',
      equipment_alternatives: {
        'None': 'Standing crossover forward fold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie on back, extend one leg up.'
      ],
      execution: [
        'Gently pull the straight leg across your body.',
        'Keep the opposite shoulder on the floor.',
        'Feel the stretch along the outer leg and hamstring.',
        'Hold and breathe.'
      ],
      common_mistakes: [
        'Lifting the shoulder off the floor.',
        'Bending the knee too much.',
        'Forcing the stretch.'
      ],
      breathing: 'Breathe deeply to relax into the stretch.'
    }
  },
  'supine-criss-cross': {
    id: 'supine-criss-cross',
    name: 'Supine Criss Cross',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Glutes',
      'IT Band'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back with your legs extended straight.',
      'Cross your right ankle over your left ankle.',
      'Engage your glutes and allow your legs to gently rotate so your right hip slightly lifts and your left hip presses down.',
      'This creates a gentle, passive stretch through the outer hip and IT band.',
      'This is a very subtle movement.',
      'Hold for the desired duration.',
      'Uncross your legs and repeat with the left ankle over the right.'
    ],
    safetyNotes: [
      'This is a gentle, passive stretch. Do not force any movement.',
      'Keep your upper body and shoulders relaxed on the floor.',
      'Listen to your body and stop if there is any sharp pain.'
    ],
    modifications: {
      beginner: 'Focus on just crossing the ankles without adding the rotation.',
      advanced: 'Actively press the top leg down slightly to deepen the stretch.',
      equipment_alternatives: {
        'None': 'Standing crossover stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie on your back, legs straight.',
        'Cross one ankle over the other.'
      ],
      execution: [
        'Relax and let gravity create a gentle stretch.',
        'Feel a subtle stretch in the outer hip.',
        'Breathe and hold.'
      ],
      common_mistakes: [
        'Trying to actively force a stretch.',
        'Tensing the body.',
        'Holding breath.'
      ],
      breathing: 'Breathe deeply and allow your body to relax.'
    }
  },
  'toe-grab-calf-stretch': {
    id: 'toe-grab-calf-stretch',
    name: 'Toe Grab Calf Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Calves',
      'Hamstrings',
      'Plantar Fascia'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor with one leg extended straight and the other bent.',
      'Hinge forward from your hips with a straight back and grasp the toes of your extended leg.',
      'Gently pull your toes back towards your shin.',
      'You should feel a stretch along the entire back of your lower leg (calf) and potentially into your hamstring and the arch of your foot.',
      'Hold the stretch.',
      'Release and switch sides.'
    ],
    safetyNotes: [
      'Hinge from your hips; do not round your back to reach your toes.',
      'The pull should be gentle and sustained.',
      'If you cannot reach your toes, use a yoga strap or towel.'
    ],
    modifications: {
      beginner: 'Use a strap or towel. Keep a bend in the knee.',
      advanced: 'Try to keep the leg perfectly straight and pull the toes back further.',
      equipment_alternatives: {
        'None': 'Standing calf stretch against a wall.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit with one leg extended.',
        'Hinge forward to grab the toes.'
      ],
      execution: [
        'Gently pull toes back towards shin.',
        'Keep back straight.',
        'Feel stretch in calf and bottom of foot.',
        'Hold and breathe.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Pulling too aggressively.',
        'Bouncing.'
      ],
      breathing: 'Inhale to lengthen, exhale to deepen the stretch.'
    }
  },
  'half-camel-pose': {
    id: 'half-camel-pose',
    name: 'Half Camel',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Hip Flexors',
      'Chest',
      'Shoulders',
      'Spine'
    ],
    difficulty: 2,
    instructions: [
      'Start in a tall kneeling position with your knees hip-width apart.',
      'Place your hands on your lower back, fingers pointing down, for support.',
      'Inhale and lift your chest up towards the ceiling, beginning to arch your upper back.',
      'Engage your glutes and press your hips forward.',
      'Reach your right hand back to grasp your right heel.',
      'Extend your left arm up towards the ceiling, creating a long line of energy.',
      'Keep your neck in a comfortable position, either looking forward or slightly up.',
      'Hold the pose, then return to start with control and switch sides.'
    ],
    safetyNotes: [
      'This is a deep backbend. Warm up thoroughly first.',
      'Keep your glutes and core engaged throughout to protect your lower back.',
      'If you cannot reach your heel, keep your hand on your lower back or use a yoga block next to your foot.'
    ],
    modifications: {
      beginner: 'Keep both hands on your lower back and focus on just lifting the chest and arching the upper back.',
      advanced: 'Progress to the full Camel Pose by reaching both hands back to both heels simultaneously.',
      equipment_alternatives: {
        'None': 'Standing backbend with hands on lower back.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Kneel tall, hands on low back for support.'
      ],
      execution: [
        'Lift chest, arch upper back.',
        'Press hips forward, squeeze glutes.',
        'Reach one hand back to same-side heel.',
        'Reach other arm up.',
        'Breathe into the front of your body.'
      ],
      common_mistakes: [
        'Crunching the lower back instead of lifting the chest.',
        'Not engaging the glutes.',
        'Letting the head drop back completely.'
      ],
      breathing: 'Breathe deeply and steadily into the chest.'
    }
  },
  'advanced-gate-pose': {
    id: 'advanced-gate-pose',
    name: 'Advanced Gate Pose',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Side Body (Obliques, Lats)',
      'Hamstrings',
      'Adductors'
    ],
    difficulty: 2,
    instructions: [
      'Start in a kneeling position. Extend your right leg straight out to the side, with the sole of your foot on the floor.',
      'Inhale and reach your left arm up overhead.',
      'Exhale and side bend to the right, sliding your right hand down your right leg.',
      'For the advanced variation, aim to bring your right forearm to rest on your right shin or a block, and wrap your top (left) arm behind your back, trying to grasp your right inner thigh.',
      'Roll your top shoulder open and gaze up towards the ceiling.',
      'This creates a deeper side bend and a chest-opening bind.',
      'Hold the pose. Release and switch sides.'
    ],
    safetyNotes: [
      'Keep your chest open and avoid collapsing forward.',
      'Do not force the bind; a standard Gate Pose is sufficient if the bind is not accessible.',
      'Move into and out of the pose slowly.'
    ],
    modifications: {
      beginner: 'Perform a standard Gate Pose without the bind. Rest bottom hand on a yoga block.',
      advanced: 'Work deeper into the bind and side bend.',
      equipment_alternatives: {
        'None': 'Standing side bend.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Start in Gate Pose, one leg extended.',
        'Side bend over the straight leg.'
      ],
      execution: [
        'Deepen the side bend, potentially resting forearm on shin.',
        'Wrap top arm behind back for a bind.',
        'Roll top shoulder open.',
        'Breathe into the side body.'
      ],
      common_mistakes: [
        'Collapsing the chest forward.',
        'Forcing the bind.',
        'Lifting the bent knee off the floor.'
      ],
      breathing: 'Breathe deeply to create space in your side ribs.'
    }
  },
  'v-sit': {
    id: 'v-sit',
    name: 'V-Sit',
    category: 'core',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Abs',
      'Hip Flexors',
      'Core'
    ],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your knees bent and feet flat.',
      'Place your hands on the floor slightly behind you for support.',
      'Engage your core and lean your torso back slightly.',
      'Lift your feet off the floor, keeping your shins parallel to the ground (tabletop legs).',
      'This is the starting hold. To advance, begin to straighten your legs and lift your chest to create a \'V\' shape with your body.',
      'You can keep your hands on the floor or extend them forward parallel to the ground for a challenge.',
      'Hold the position, keeping your back straight and your core tight.'
    ],
    safetyNotes: [
      'Keep your back straight; do not let it round or slump.',
      'If you feel strain in your lower back, lower your legs or bend your knees more.',
      'The movement should be controlled; avoid shaking excessively.'
    ],
    modifications: {
      beginner: 'Keep hands on the floor for support. Keep knees bent in a tabletop position.',
      advanced: 'Straighten legs fully. Extend arms forward. Hold for a longer duration.',
      equipment_alternatives: {
        'None': 'Hollow body hold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Sit on floor, knees bent.',
        'Lean back, engage core.'
      ],
      execution: [
        'Lift feet off the floor.',
        'Straighten legs as much as possible.',
        'Lift chest to create a \'V\' shape.',
        'Keep back straight and hold.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Holding breath.',
        'Relying on hands too much.'
      ],
      breathing: 'Breathe steadily and deeply throughout the hold.'
    }
  },
  'center-stretch-static': {
    id: 'center-stretch-static',
    name: 'Center Stretch',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Hamstrings',
      'Hips'
    ],
    difficulty: 1,
    instructions: [
      'Sit on the floor in a wide straddle position, with your legs extended out to the sides.',
      'Keep your feet flexed and your spine tall.',
      'Inhale to lengthen your spine.',
      'Exhale and hinge at your hips, walking your hands forward and folding your torso towards the floor between your legs.',
      'Go only as far as your flexibility allows while keeping your back relatively straight.',
      'Rest on your hands, forearms, or a block.',
      'Hold this static stretch, breathing into your inner thighs and hamstrings.'
    ],
    safetyNotes: [
      'Hinge from the hips; do not just round your spine to get lower.',
      'Keep your feet flexed to protect your knees.',
      'If your hamstrings are tight, sit on a cushion to help tilt your pelvis forward.'
    ],
    modifications: {
      beginner: 'Sit on a cushion. Keep knees slightly bent. Do not fold as far forward.',
      advanced: 'Fold deeper, aiming to rest your torso and head on the floor. Hold for a longer duration.',
      equipment_alternatives: {
        'None': 'Standing wide-legged forward fold.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Sit in a wide straddle, feet flexed.',
        'Sit up tall on your sit bones.'
      ],
      execution: [
        'Walk hands forward, hinging at the hips.',
        'Keep spine long.',
        'Fold down between your legs.',
        'Hold and breathe into the stretch.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Letting feet roll in.',
        'Forcing the stretch.'
      ],
      breathing: 'Inhale to find length, exhale to deepen the fold.'
    }
  },
  'standing-glute-stretch': {
    id: 'standing-glute-stretch',
    name: 'Standing Glute Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: [
      'Glutes (Piriformis)',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Stand on your left leg, holding onto a wall or chair for balance.',
      'Cross your right ankle over your left thigh, just above the knee, creating a \'figure four\' shape.',
      'Keeping your back straight, hinge at your hips and sit back as if lowering into a chair.',
      'Lower yourself until you feel a deep stretch in your right glute and hip.',
      'Keep your right foot flexed to protect the knee.',
      'Hold this static stretch, breathing deeply.',
      'Slowly rise to stand and switch sides.'
    ],
    safetyNotes: [
      'Focus on balance; use support as needed.',
      'Keep your back straight as you hinge; do not round your spine.',
      'Do not force the stretch; only go as deep as your hip mobility allows.'
    ],
    modifications: {
      beginner: 'Do not sit as deep into the stretch. Use more support from the wall/chair.',
      advanced: 'Perform without any support for a greater balance challenge. Sit deeper into the stretch.',
      equipment_alternatives: {
        'None': 'Seated or supine figure four stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Stand on one leg, hold support.',
        'Cross other ankle over standing thigh.',
        'Flex the lifted foot.'
      ],
      execution: [
        'Hinge hips and sit back.',
        'Keep back straight, chest up.',
        'Feel stretch in the outer hip/glute.',
        'Hold the pose and breathe.'
      ],
      common_mistakes: [
        'Rounding the back.',
        'Losing balance.',
        'Not flexing the foot, which can strain the knee.'
      ],
      breathing: 'Breathe deeply and steadily throughout the hold.'
    }
  },
  'z-stretch': {
    id: 'z-stretch',
    name: 'Z-Stretch',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Hip Flexors',
      'Quads'
    ],
    difficulty: 2,
    instructions: [
      'Sit on the floor with your right leg bent in front of you (like pigeon pose) and your left leg bent behind you, with both knees at roughly 90-degree angles, creating a \'Z\' shape.',
      'Try to keep both sit bones on the floor.',
      'Place your hands on the floor for support.',
      'Gently press your back (left) hip forward to feel a stretch in the front of that hip.',
      'For a dynamic version, you can lift your hips and rotate to the other side, or hold statically.',
      'Hold the stretch. To switch sides, you can lean back and swing your legs around, or press up and rearrange.'
    ],
    safetyNotes: [
      'This can be challenging for tight hips. Do not force your knees to the floor.',
      'Use your hands for support to control the intensity.',
      'If you feel any sharp knee pain, adjust your position or choose a different stretch.'
    ],
    modifications: {
      beginner: 'Sit on a cushion to elevate your hips. Do not press the back hip forward as much.',
      advanced: 'Try to lift your torso upright without using your hands for support. Fold forward over the front leg.',
      equipment_alternatives: {
        'None': '90/90 Stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit on floor, legs in a \'Z\' shape.',
        'Hands on floor for balance.'
      ],
      execution: [
        'Keep torso upright.',
        'Gently press the back hip forward.',
        'Feel the stretch in the hip flexor.',
        'Breathe and hold.'
      ],
      common_mistakes: [
        'Slouching or leaning heavily to one side.',
        'Forcing the knees to the floor.',
        'Feeling pain in the knees.'
      ],
      breathing: 'Breathe deeply to relax into the hip stretch.'
    }
  },
  'half-frog-stretch': {
    id: 'half-frog-stretch',
    name: 'Half Frog',
    category: 'flexibility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Adductors (Inner Thighs)',
      'Groin',
      'Hips'
    ],
    difficulty: 2,
    instructions: [
      'Start by lying face down on your mat.',
      'Come up onto your forearms.',
      'Slide your right knee out to the side, in line with your right hip, keeping the knee bent at a 90-degree angle.',
      'Your left leg remains extended straight back.',
      'Flex your right foot.',
      'Gently press your hips down and slightly back to feel a stretch in your right inner thigh and groin.',
      'Hold the stretch. To release, slowly slide your right knee back to the starting position. Switch sides.'
    ],
    safetyNotes: [
      'Ease into the stretch slowly.',
      'If you feel any sharp pain in your knee or hip, back off.',
      'Keep your core engaged to prevent your lower back from sagging.'
    ],
    modifications: {
      beginner: 'Do not bring the knee up as high (not fully in line with the hip). Place a cushion under the bent knee.',
      advanced: 'Try to press your hips further back to deepen the stretch. Progress to the full Frog Stretch.',
      equipment_alternatives: {
        'None': 'Butterfly stretch.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Lie face down, propped on forearms.',
        'Slide one knee out to the side, bent at 90 degrees.'
      ],
      execution: [
        'Flex the foot of the bent leg.',
        'Gently press hips down and back.',
        'Feel stretch in the inner thigh.',
        'Breathe and hold.'
      ],
      common_mistakes: [
        'Forcing the stretch.',
        'Letting the lower back sag.',
        'Not keeping the foot flexed.'
      ],
      breathing: 'Breathe deeply and slowly to help the muscles release.'
    }
  },
  'knee-hug-to-happy-baby': {
    id: 'knee-hug-to-happy-baby',
    name: 'Knee Hug to Happy Baby',
    category: 'mobility',
    equipment: [
      'Mat (optional)'
    ],
    muscleGroups: [
      'Hips',
      'Groin',
      'Lower Back'
    ],
    difficulty: 1,
    instructions: [
      'Lie on your back.',
      'Inhale and hug both knees into your chest, wrapping your arms around your shins.',
      'Hold the knee hug for a breath.',
      'Exhale and transition to Happy Baby pose by grasping the outsides of your feet with your hands and drawing your knees towards your armpits.',
      'Hold Happy Baby for a breath.',
      'Inhale and release your feet to return to the knee hug.',
      'Continue flowing between the two poses.'
    ],
    safetyNotes: [
      'Keep the movements slow and controlled, synced with your breath.',
      'In Happy Baby, keep your lower back on the floor as much as possible.',
      'If you cannot reach your feet, grasp your ankles or shins.'
    ],
    modifications: {
      beginner: 'In Happy Baby, grasp behind your thighs instead of your feet.',
      advanced: 'In Happy Baby, add a gentle rock from side to side.',
      equipment_alternatives: {
        'None': 'This is a sequence of fundamental bodyweight movements.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 0.1,
      unit: 'cycles'
    },
    coaching: {
      setup: [
        'Lie on your back.'
      ],
      execution: [
        'Inhale, hug knees to chest.',
        'Exhale, open into Happy Baby.',
        'Flow between the two poses.',
        'Keep upper body relaxed.'
      ],
      common_mistakes: [
        'Rushing the movement.',
        'Lifting the head and neck.',
        'Forcing the knees down in Happy Baby.'
      ],
      breathing: 'Inhale on the knee hug, exhale into Happy Baby.'
    }
  },

  // ===== NEW DRILL EXERCISES =====
  'a-skip': {
    id: 'a-skip',
    name: 'A-Skip',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Hip Flexors', 'Hamstrings', 'Glutes', 'Calves'],
    difficulty: 2,
    instructions: [
      'Start by marching in place.',
      'Begin moving forward. As your right knee drives up, your left arm should drive forward.',
      'The right knee should come up to hip height, forming a 90-degree angle.',
      'Simultaneously, perform a small hop on your supporting (left) leg.',
      'Quickly switch legs, driving the left knee up as you hop on your right leg.',
      'The motion is a rhythmic "up-up-down, up-up-down". Focus on driving the knee up and the foot down directly under your center of mass.',
      'Maintain a tall, proud posture.'
    ],
    safetyNotes: [
      'Land on the ball of your foot.',
      'Keep the ankle of the driving leg flexed (dorsiflexion).',
      'The movement should be quick and cyclical, not a slow, high march.'
    ],
    modifications: {
      beginner: 'Perform as a march without the hop to learn the coordination.',
      advanced: 'Increase the speed and cadence of the skip. Cover more ground.',
      equipment_alternatives: {
        'None': 'High Knees.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Drive knee up to 90 degrees.',
        'Opposite arm drives forward.',
        'Small hop on the stance leg.',
        'Quickly cycle the legs.',
        'Think "punch the knee, stomp the foot".'
      ],
      common_mistakes: [
        'Leaning back.',
        'Swinging the leg forward instead of driving it down (casting).',
        'Not coordinating arms and legs.'
      ],
      breathing: 'Maintain a quick, rhythmic breathing pattern.'
    }
  },

  'b-skip': {
    id: 'b-skip',
    name: 'B-Skip',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Hamstrings', 'Hip Flexors', 'Glutes'],
    difficulty: 3,
    instructions: [
      'Start by performing an A-Skip: drive your right knee up to hip height.',
      'At the peak of the knee drive, extend your lower leg forward, kicking your foot out.',
      'Immediately and forcefully, snap the extended leg down and back, pawing at the ground.',
      'As your right leg is snapping down, your left leg begins its A-Skip motion to drive up.',
      'The rhythm is a continuous, cyclical "whip and claw" motion.',
      'Maintain a tall posture and use your arms for coordination and balance.'
    ],
    safetyNotes: [
      'This is an advanced drill. Master the A-Skip first.',
      'The focus is on the downward "pawing" motion, which actively engages the hamstring.',
      'Keep the ground contact brief and directly under your hips.'
    ],
    modifications: {
      beginner: 'Perform the motion while standing still, one leg at a time, holding onto a wall for balance.',
      advanced: 'Increase the speed and fluidity of the drill.',
      equipment_alternatives: {
        'None': 'Butt kicks with a focus on pulling the leg through.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Stand tall, core engaged.'
      ],
      execution: [
        'Drive knee up (A-Skip).',
        'Kick lower leg forward.',
        'Forcefully snap the leg down and back.',
        'Claw the ground under you.',
        'Cycle immediately to the other leg.'
      ],
      common_mistakes: [
        'Swinging the leg in a passive circle.',
        'Not actively pulling the leg down.',
        'Leaning too far forward or backward.'
      ],
      breathing: 'Exhale sharply on each downward snap.'
    }
  },

  // ===== NEW PLYOMETRIC & POWER EXERCISES =====
  'box-jump': {
    id: 'box-jump',
    name: 'Box Jump',
    category: 'plyometric',
    equipment: ['Plyo Box'],
    muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand in front of a plyo box, feet shoulder-width apart.',
      'Lower into a quarter-squat position, swinging your arms back.',
      'Explosively jump up onto the box, swinging your arms forward to generate momentum.',
      'The jump should be powerful, aiming to land softly on the center of the box.',
      'Land in a partial squat position to absorb the impact.',
      'Stand up tall on the box.',
      'Step down one foot at a time. Do not jump down.',
      'Reset and repeat.'
    ],
    safetyNotes: [
      'Start with a low box and master the landing mechanics before increasing the height.',
      'The goal is to jump high, not just to clear a high box with tucked knees. Focus on hip extension.',
      'Always step down. Jumping down significantly increases injury risk.',
      'Ensure the box is stable and on a non-slip surface.'
    ],
    modifications: {
      beginner: 'Use a very low box or a stack of weight plates. Perform box step-ups.',
      advanced: 'Increase the height of the box. Add a tuck jump or perform from a seated position on a bench.',
      equipment_alternatives: {
        'Plyo Box': 'A stable bench, stack of weight plates, or sturdy ledge.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand facing a stable box.',
        'Feet shoulder-width apart.'
      ],
      execution: [
        'Load by dipping into a quarter-squat, arms back.',
        'Explode up, driving arms forward.',
        'Land softly on the box in a squat.',
        'Stand tall, then step down.'
      ],
      common_mistakes: [
        'Jumping down from the box.',
        'Landing with stiff legs.',
        'Tucking knees excessively instead of extending hips.'
      ],
      breathing: 'Exhale forcefully on the jump.'
    }
  },

  'depth-jump': {
    id: 'depth-jump',
    name: 'Depth Jump',
    category: 'plyometric',
    equipment: ['Plyo Box'],
    muscleGroups: ['Full Body', 'Glutes', 'Quads', 'Calves'],
    difficulty: 3,
    instructions: [
      'Stand on top of a plyo box (start with a low height, 6-12 inches).',
      'Step off the box (do not jump off). Land on both feet simultaneously.',
      'As soon as your feet touch the ground, immediately explode into a maximal vertical jump.',
      'The goal is to minimize ground contact time and convert the landing force into upward power.',
      'Land softly from the vertical jump, absorbing the impact through your legs.',
      'Reset and repeat.'
    ],
    safetyNotes: [
      'This is an advanced plyometric exercise. Ensure you have a strong strength and landing base.',
      'Start with a very low box height.',
      'Focus on a quick, reactive jump. The ground is "hot lava".'
    ],
    modifications: {
      beginner: 'Do not perform this exercise. Instead, focus on box jumps and proper landing mechanics.',
      advanced: 'Increase the height of the box slightly. Jump onto another, higher box after the ground contact.',
      equipment_alternatives: {
        'Plyo Box': 'A sturdy bench or step.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 4,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand on a low box.'
      ],
      execution: [
        'Step off, do not jump off.',
        'Land on both feet.',
        'As soon as you touch, explode straight up.',
        'Minimize ground contact time.',
        'Land softly from the second jump.'
      ],
      common_mistakes: [
        'Spending too long on the ground after landing.',
        'Jumping off the box instead of stepping.',
        'Landing with stiff legs.'
      ],
      breathing: 'Hold breath briefly on landing, exhale forcefully on the upward jump.'
    }
  },

  'standing-broad-jump': {
    id: 'standing-broad-jump',
    name: 'Standing Broad Jump',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['Glutes', 'Quads', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart.',
      'Lower into a quarter-squat position and swing your arms back behind you.',
      'Explode forward, jumping as far as you can.',
      'Use your arms to propel you forward by swinging them powerfully in front of you.',
      'Aim to land on both feet simultaneously.',
      'Absorb the landing by bending your knees and hips, finishing in a squat position.',
      'Hold the landing for a second to demonstrate control. Reset and repeat.'
    ],
    safetyNotes: [
      'Ensure you have plenty of clear space in front of you.',
      'Land softly to absorb impact.',
      'Focus on sticking the landing without taking extra steps.'
    ],
    modifications: {
      beginner: 'Focus on shorter, more controlled jumps.',
      advanced: 'Perform multiple jumps in a row without pausing (serial broad jumps).',
      equipment_alternatives: {
        'None': 'This is a fundamental bodyweight power exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 5,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand with feet shoulder-width apart.'
      ],
      execution: [
        'Load by squatting and swinging arms back.',
        'Explode forward, driving with legs and arms.',
        'Land softly in a squat position.',
        'Stick the landing.'
      ],
      common_mistakes: [
        'Landing with stiff legs.',
        'Losing balance and stumbling forward.',
        'Not using arms effectively.'
      ],
      breathing: 'Exhale forcefully as you jump.'
    }
  },

  'bounding': {
    id: 'bounding',
    name: 'Bounding',
    category: 'plyometric',
    equipment: [],
    muscleGroups: ['Glutes', 'Hamstrings', 'Quads'],
    difficulty: 3,
    instructions: [
      'Start with a light jog to build momentum.',
      'Begin to take exaggerated, powerful strides, aiming for maximum horizontal distance with each step.',
      'Drive off your back leg with force, extending your hip, knee, and ankle (triple extension).',
      'Simultaneously, drive your front knee up and your opposite arm forward.',
      'Spend as much time in the air as possible.',
      'The movement should look like a slow-motion, powerful run.',
      'Continue for a set distance.'
    ],
    safetyNotes: [
      'This is a high-impact, advanced drill. Ensure you are thoroughly warmed up and have a good fitness base.',
      'Focus on good form and power, not just speed.',
      'Perform on a soft surface like grass if possible.'
    ],
    modifications: {
      beginner: 'Perform power skips, focusing on height before trying for distance.',
      advanced: 'Increase the distance of each bound. Perform single-leg bounds for a set distance.',
      equipment_alternatives: {
        'None': 'High skips.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Begin with a few steps of a jog.'
      ],
      execution: [
        'Explode off your back leg.',
        'Drive front knee and opposite arm forward.',
        'Aim for maximum distance on each stride.',
        'Think "running in slow motion through the air".'
      ],
      common_mistakes: [
        'Taking short, choppy steps.',
        'Focusing on speed instead of power and distance.',
        'Poor arm coordination.'
      ],
      breathing: 'Exhale powerfully on each push-off.'
    }
  },

  'hurdle-hops': {
    id: 'hurdle-hops',
    name: 'Hurdle Hops',
    category: 'plyometric',
    equipment: ['Hurdles (low)'],
    muscleGroups: ['Glutes', 'Quads', 'Calves', 'Core'],
    difficulty: 2,
    instructions: [
      'Set up a series of 5-6 low hurdles or cones in a straight line, about 2-3 feet apart.',
      'Stand in front of the first hurdle with your feet together.',
      'Keeping your feet together, perform a two-footed jump over the first hurdle.',
      'As soon as you land, immediately rebound and jump over the next hurdle.',
      'The goal is to be springy and reactive, spending minimal time on the ground.',
      'Use your arms to help generate height.',
      'Continue until you have cleared all the hurdles.'
    ],
    safetyNotes: [
      'Start with very low hurdles or even just lines on the ground.',
      'Focus on a quick ground contact and a springy response.',
      'Land softly to absorb impact.'
    ],
    modifications: {
      beginner: 'Use lines on the ground or very low cones. Pause between each jump to reset.',
      advanced: 'Increase the height of the hurdles. Perform single-leg hops over the hurdles.',
      equipment_alternatives: {
        'Hurdles': 'Low cones, shoes, water bottles, or any small object to jump over.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 3,
      progressionRate: 0.1,
      unit: 'sets of 5-6 hurdles'
    },
    coaching: {
      setup: [
        'Stand facing a line of low hurdles.'
      ],
      execution: [
        'Jump over each hurdle with both feet.',
        'As soon as you land, jump again.',
        'Be quick and springy off the ground.',
        'Use your arms.'
      ],
      common_mistakes: [
        'Pausing too long between hurdles.',
        'Landing heavily.',
        'Not using arms to help.'
      ],
      breathing: 'Exhale on each jump.'
    }
  },

  'medicine-ball-slam': {
    id: 'medicine-ball-slam',
    name: 'Medicine Ball Slam',
    category: 'plyometric',
    equipment: ['Medicine Ball (non-bouncing)'],
    muscleGroups: ['Lats', 'Core', 'Shoulders', 'Glutes'],
    difficulty: 2,
    instructions: [
      'Stand with your feet shoulder-width apart, holding a medicine ball with both hands.',
      'Raise the ball straight overhead, fully extending your body. You can rise up onto your toes for extra height.',
      'Engage your core and powerfully slam the ball down onto the floor directly in front of you.',
      'Use your entire body, hinging at the hips and following through with your arms.',
      'Squat down to pick up the ball and immediately go into the next repetition.',
      'The movement should be explosive and continuous.'
    ],
    safetyNotes: [
      'Use a "slam ball" or non-bouncing medicine ball to prevent it from rebounding into your face.',
      'Use your legs and hips to lower down to pick up the ball; do not round your lower back.',
      'Ensure your surroundings are clear.'
    ],
    modifications: {
      beginner: 'Use a lighter ball. Perform the movement more slowly to master the mechanics.',
      advanced: 'Use a heavier ball. Increase the speed and explosiveness of the slam.',
      equipment_alternatives: {
        'Medicine Ball': 'Can be mimicked with a sandbag, but a slam ball is ideal.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, holding slam ball.'
      ],
      execution: [
        'Raise ball high overhead, extending body.',
        'Slam the ball down with force.',
        'Hinge at the hips as you slam.',
        'Squat to pick it up and repeat.'
      ],
      common_mistakes: [
        'Using only the arms and not the whole body.',
        'Rounding the back to pick up the ball.',
        'Using a bouncy ball.'
      ],
      breathing: 'Inhale as you lift the ball, exhale forcefully as you slam.'
    }
  }

};

// Exercise categories for easy filtering
export const EXERCISE_CATEGORIES = {
  strength: ['push-up', 'diamond-push-up', 'squat', 'lunge', 'lat-pulldown', 'dumbbell-row', 'cable-row', 'dumbbell-bent-over-row', 'bent-over-barbell-row', 'kettlebell-row', 'landmine-row', 'seated-leg-curl', 'dumbbell-romanian-deadlift', 'romanian-deadlift', 'lying-hamstrings-curl', 'single-leg-romanian-deadlift', 'good-morning', 'deadlift', 'kettlebell-swing', 'hip-thrust', 'barbell-hip-thrust', 'glute-bridge', 'single-leg-glute-bridge', 'side-leg-raises', 'barbell-curl', 'dumbbell-curl', 'hammer-curl', 'preacher-curl', 'sled-push', 'sled-pull', 'farmers-carry', 'sandbag-lunges', 'grip-endurance-circuit', 'sled-conditioning', 'machine-row', 'hammerstrength-high-row', 'hammerstrength-iso-row', 'incline-dumbbell-row', 'shotgun-row', 'kettlebell-alternating-row', 'cable-lateral-raise', 'dumbbell-rear-delt-raise', 'dumbbell-lateral-raise', 'dumbbell-shoulder-press', 'dumbbell-front-raise', 'straight-leg-kickback', 'medicine-ball-curtsy-lunge', 'medicine-ball-hip-thrusts', 'single-leg-kickback', 'elevated-hip-bridge', 'dumbbell-hip-thrust', 'glute-kickback-machine', 'walking-lunges', 'box-step-ups', 'calf-press', 'standing-dumbbell-calf-raise', 'seated-machine-calf-press', 'seated-dumbbell-calf-raise', 'standing-barbell-calf-raise', 'standing-kettlebell-calf-raise', 'stiff-legged-barbell-good-morning', 'incline-back-extension', 'warrior-ii', 'hip-bridge-lift', 'lateral-leg-lift', 'hamstring-bridge-with-chair', 'frog-pumps', 'supine-abductions-with-miniband', 'lateral-wrist-curls-with-dumbbells', 'standing-fire-hydrant', 'prone-frog-lifts', 'standing-hamstring-curl', 'lateral-walk', 'clamshells', 'dumbbell-good-morning', 'squat-to-overhead-press', 'speed-skater-lunges', 'single-leg-deadlift-to-hop', 'single-leg-calf-raise', 'alternating-jump-lunges', 'squat-to-calf-raise', 'diagonal-lunge', '90-degree-squats', 'sumo-squat', 'fire-hydrants', 'adductor-lifts', 'half-kneeling-rotation-with-block-and-dumbbell', 'skater-squats', 'monster-walks-with-miniband', 'fire-hydrants-with-internal-rotation', 'prone-y-raises'],
  core: ['plank', 'crunches', 'russian-twist', 'leg-raise', 'bicycle-crunch', 'dead-bug', 'reverse-crunch', 'oblique-crunch', 'bird-dog', 'tick-tocks-with-miniband', 'vacuums', 'flutter-kicks', 'side-plank', 'side-plank-leg-lift', 'standing-crunch', 'supermans', 'chin-tucks', 'staff-pose', 'superman-sequence', 'decline-plank-with-chair', 'side-plank-hip-dip', 'v-sit'],
  cardio: ['jumping-jacks', 'mountain-climber', 'a-skips', 'b-skips', 'a-skip', 'b-skip', 'carioca', 'step-ups', 'marching-in-place', 'skierg', 'rowing-erg', 'compromised-running', 'station-transitions', 'running-sandwich', 'mock-hyrox', 'zone-2-recovery-run', 'hyrox-pace-runs', 'high-knees', 'reverse-lunge-knee-drive', 'run-in-place'],
  plyometric: ['burpee', 'jump-squat', 'burpee-broad-jumps', 'wall-balls', 'swim-plyometric-box-jumps', 'high-skip', 'box-jump', 'depth-jump', 'standing-broad-jump', 'bounding', 'hurdle-hops', 'medicine-ball-slam'],
  mobility: ['arm-circles', 'dynamic-star', 'alternating-step-and-squat', 'pelvic-tilts', 'upper-back-rotations', 'kneeling-pelvic-tilts', 'froggers', 'ankle-rocks', 'single-leg-shin-sequence', 'standing-fours', 'kang-squats', 'dynamic-quad-stretch', 'plank-calf-press', 'dynamic-side-body-stretch', 'shoulder-openers', 'lizard-circles', 'boot-strappers', 'standing-hip-open-and-close', 'standing-cat-cow', 'dynamic-baby-cobra', '90-90-stretch', 'activated-hip-flexor-stretch-with-block', 'wide-dynamic-cobra', 'upper-body-around-the-world', 'single-leg-hip-flexor-extension-with-pole', 'seated-toe-rainbows-with-chair', 'knee-hug-rock', 'hand-and-wrist-sequence', 'z-stretch', 'knee-hug-to-happy-baby'],
  flexibility: ['standing-calf-stretch', 'foam-roll-hip-abductors', 'childs-pose', 'tricep-and-lat-stretch', 'pigeon-pose', 'forward-fold', 'chest-stretch', 'seated-twist', 'single-leg-hamstring-stretch', 'frog-stretch', 'upper-back-stretch', 'release-lats-with-foam-roller', 'leaning-quad-stretch', 'elevated-pigeon-with-chair', 'standing-chest-stretch', 'cross-body-hamstring-stretch', 'supine-criss-cross', 'toe-grab-calf-stretch', 'half-camel-pose', 'advanced-gate-pose', 'center-stretch-static', 'standing-glute-stretch', 'half-frog-stretch'],
  technique: ['swim-freestyle-drills', 'bike-single-leg-pedaling', 'swim-open-water-sighting-drills', 'bike-spin-ups-intervals', 'balance-and-change-of-support-drill', 'pony-drill', 'hopping-drills', 'advanced-jump-drill'],
  endurance: ['bike-hill-climbs-intervals', 'long-run', 'tempo-run', 'fartlek-run', 'hill-repeats'],
  triathlon: ['swim-freestyle-drills', 'bike-single-leg-pedaling', 'swim-plyometric-box-jumps', 'bike-hill-climbs-intervals', 'swim-open-water-sighting-drills', 'bike-spin-ups-intervals'],
  crossfit: ['burpee', 'jump-squat', 'burpee-broad-jumps', 'wall-balls', 'deadlift', 'kettlebell-swing', 'farmers-carry', 'box-step-ups', 'medicine-ball-curtsy-lunge', 'medicine-ball-hip-thrusts', 'barbell-hip-thrust', 'dumbbell-hip-thrust', 'calf-press', 'standing-dumbbell-calf-raise', 'seated-machine-calf-press', 'seated-dumbbell-calf-raise', 'standing-barbell-calf-raise', 'standing-kettlebell-calf-raise', 'stiff-legged-barbell-good-morning', 'incline-back-extension'],
  none: ['push-up', 'diamond-push-up', 'squat', 'jump-squat', 'lunge', 'plank', 'crunches', 'russian-twist', 'leg-raise', 'bicycle-crunch', 'dead-bug', 'reverse-crunch', 'oblique-crunch', 'jumping-jacks', 'burpee', 'mountain-climber', 'lat-pulldown', 'dumbbell-row', 'cable-row', 'dumbbell-bent-over-row', 'bent-over-barbell-row', 'kettlebell-row', 'landmine-row', 'seated-leg-curl', 'dumbbell-romanian-deadlift', 'romanian-deadlift', 'lying-hamstrings-curl', 'single-leg-romanian-deadlift', 'good-morning', 'deadlift', 'kettlebell-swing', 'hip-thrust', 'barbell-hip-thrust', 'glute-bridge', 'single-leg-glute-bridge', 'side-leg-raises', 'barbell-curl', 'dumbbell-curl', 'hammer-curl', 'preacher-curl', 'a-skips', 'b-skips', 'a-skip', 'b-skip', 'carioca', 'step-ups', 'marching-in-place', 'arm-circles', 'skierg', 'sled-push', 'sled-pull', 'burpee-broad-jumps', 'rowing-erg', 'farmers-carry', 'sandbag-lunges', 'wall-balls', 'compromised-running', 'station-transitions', 'running-sandwich', 'mock-hyrox', 'grip-endurance-circuit', 'sled-conditioning', 'zone-2-recovery-run', 'hyrox-pace-runs', 'machine-row', 'hammerstrength-high-row', 'hammerstrength-iso-row', 'incline-dumbbell-row', 'shotgun-row', 'kettlebell-alternating-row', 'cable-lateral-raise', 'dumbbell-rear-delt-raise', 'dumbbell-lateral-raise', 'dumbbell-shoulder-press', 'dumbbell-front-raise', 'straight-leg-kickback', 'medicine-ball-curtsy-lunge', 'medicine-ball-hip-thrusts', 'single-leg-kickback', 'elevated-hip-bridge', 'dumbbell-hip-thrust', 'glute-kickback-machine', 'high-knees', 'walking-lunges', 'bird-dog', 'standing-calf-stretch', 'box-step-ups', 'calf-press', 'standing-dumbbell-calf-raise', 'seated-machine-calf-press', 'seated-dumbbell-calf-raise', 'standing-barbell-calf-raise', 'standing-kettlebell-calf-raise', 'stiff-legged-barbell-good-morning', 'incline-back-extension', 'foam-roll-hip-abductors', 'swim-freestyle-drills', 'bike-single-leg-pedaling', 'swim-plyometric-box-jumps', 'bike-hill-climbs-intervals', 'swim-open-water-sighting-drills', 'bike-spin-ups-intervals', 'dynamic-star', 'alternating-step-and-squat', 'tricep-and-lat-stretch', 'pelvic-tilts', 'upper-back-rotations', 'kneeling-pelvic-tilts', 'hip-bridge-lift', 'vacuums', 'lateral-leg-lift', 'frog-pumps', 'flutter-kicks', 'prone-frog-lifts', 'froggers', 'standing-hamstring-curl', 'clamshells', 'side-plank', 'side-plank-leg-lift', 'speed-skater-lunges', 'single-leg-deadlift-to-hop', 'single-leg-calf-raise', 'supermans', 'alternating-jump-lunges', 'reverse-lunge-knee-drive', 'squat-to-calf-raise', 'single-leg-shin-sequence', 'standing-fours', 'kang-squats', 'dynamic-quad-stretch', 'dynamic-side-body-stretch', 'shoulder-openers', 'standing-crunch', 'run-in-place', 'diagonal-lunge', 'high-skip', 'boot-strappers', 'standing-hip-open-and-close', 'standing-cat-cow', 'balance-and-change-of-support-drill', 'pony-drill', 'hopping-drills', 'advanced-jump-drill', 'standing-broad-jump', 'bounding', 'long-run', 'tempo-run', 'fartlek-run', 'hill-repeats']
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

// ===== SPORT-SPECIFIC FOUNDATIONAL EXERCISES =====
// Adding key exercises from comprehensive sports training report

// Add to EXERCISE_DATABASE
const SPORT_SPECIFIC_EXERCISES = {
  // ENDURANCE SPORTS EXERCISES
  'long-run': {
    id: 'long-run',
    name: 'Long Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Cardiovascular'],
    difficulty: 3,
    instructions: [
      'Start with a 5-10 minute easy warm-up jog.',
      'Gradually build to your target long run distance.',
      'Maintain a conversational pace throughout - you should be able to talk.',
      'Focus on consistent effort rather than speed.',
      'Add approximately 10% to your longest run each week.',
      'Include a cutback week every 4th week for recovery.',
      'Finish with a 5-minute cool-down walk.'
    ],
    safetyNotes: [
      'Never increase distance by more than 10% per week.',
      'Listen to your body - stop if experiencing pain.',
      'Stay hydrated, especially on longer runs.',
      'Plan your route and inform someone of your running plan.',
      'Wear appropriate running shoes and clothing.'
    ],
    modifications: {
      beginner: 'Start with run/walk intervals. Build from 30 minutes total time.',
      advanced: 'Progress to 2-3 hour runs. Practice race nutrition strategies.',
      equipment_alternatives: {
        'None': 'Treadmill for weather protection or precise pacing.'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'km'
    },
    coaching: {
      setup: [
        'Plan your route in advance.',
        'Check weather conditions.',
        'Bring water for runs over 60 minutes.'
      ],
      execution: [
        'Start conservatively - first half should feel easy.',
        'Maintain steady breathing pattern.',
        'Focus on relaxed form and efficient stride.',
        'Practice negative splits occasionally.'
      ],
      common_mistakes: [
        'Starting too fast.',
        'Increasing distance too quickly.',
        'Skipping rest/cutback weeks.',
        'Neglecting hydration and nutrition.'
      ],
      breathing: 'Rhythmic breathing - try 3:2 pattern (3 steps inhale, 2 steps exhale).'
    }
  },

  'tempo-run': {
    id: 'tempo-run',
    name: 'Tempo Run',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Cardiovascular'],
    difficulty: 4,
    instructions: [
      'Warm up with 10-15 minutes of easy running.',
      'Run at a "comfortably hard" pace for 20-40 minutes.',
      'Pace should be sustainable but challenging - about 10K race pace.',
      'You should be able to speak only a few words at a time.',
      'Maintain consistent effort throughout the tempo portion.',
      'Cool down with 10 minutes of easy running.'
    ],
    safetyNotes: [
      'Ensure proper warm-up before tempo effort.',
      'Don\'t exceed prescribed duration.',
      'Stop if experiencing chest pain or dizziness.'
    ],
    modifications: {
      beginner: 'Start with 2 x 10 minutes at tempo pace with 5-minute recovery.',
      advanced: 'Progress to 60+ minutes at tempo pace.',
      equipment_alternatives: {
        'None': 'Treadmill for precise pace control.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'minutes'
    },
    coaching: {
      setup: [
        'Know your target tempo pace.',
        'Choose a relatively flat route.',
        'Use a GPS watch or app for pacing.'
      ],
      execution: [
        'Build into tempo pace gradually.',
        'Focus on controlled, rhythmic breathing.',
        'Maintain relaxed shoulders and efficient form.',
        'Think "controlled discomfort".'
      ],
      common_mistakes: [
        'Starting tempo portion too fast.',
        'Letting pace drift during the run.',
        'Inadequate warm-up.',
        'Running tempo pace too frequently.'
      ],
      breathing: 'Controlled, deeper breathing - focus on full exhales.'
    }
  },

  'fartlek-run': {
    id: 'fartlek-run',
    name: 'Fartlek (Speed Play)',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Cardiovascular'],
    difficulty: 3,
    instructions: [
      'Warm up with 10-15 minutes of easy running.',
      'Begin "speed play" - vary your pace based on how you feel.',
      'Sprint to a landmark, then jog to recover.',
      'Mix short bursts (30 seconds) with longer efforts (2-3 minutes).',
      'Recovery should be easy jogging, not walking.',
      'Total workout time: 30-60 minutes including warm-up.',
      'Cool down with 10 minutes easy running.'
    ],
    safetyNotes: [
      'Listen to your body - this should be playful, not punishing.',
      'Ensure adequate recovery between efforts.',
      'Choose safe landmarks and routes.'
    ],
    modifications: {
      beginner: 'Start with 20-30 second pickups with 2-minute easy recoveries.',
      advanced: 'Include longer tempo efforts mixed with short sprints.',
      equipment_alternatives: {
        'None': 'Track or treadmill with manual speed adjustments.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'minutes'
    },
    coaching: {
      setup: [
        'Choose a varied route with landmarks.',
        'No strict pace targets - run by feel.',
        'Mental preparation for varied efforts.'
      ],
      execution: [
        'Make it playful and spontaneous.',
        'Vary the length and intensity of efforts.',
        'Focus on smooth transitions between paces.',
        'Use landmarks as natural interval markers.'
      ],
      common_mistakes: [
        'Making it too structured.',
        'Not recovering adequately between efforts.',
        'Always choosing the same effort lengths.',
        'Running too hard on recovery portions.'
      ],
      breathing: 'Adapt breathing to effort level - deeper during hard efforts.'
    }
  },

  'hill-repeats': {
    id: 'hill-repeats',
    name: 'Hill Repeats',
    category: 'endurance',
    equipment: [],
    muscleGroups: ['Legs', 'Glutes', 'Cardiovascular'],
    difficulty: 4,
    instructions: [
      'Find a hill approximately 200-400 meters long with 4-8% grade.',
      'Warm up with 15 minutes easy running.',
      'Run hard uphill maintaining good form.',
      'Focus on driving with your arms and lifting your knees.',
      'Jog or walk down for recovery.',
      'Repeat 4-8 times depending on fitness level.',
      'Cool down with 10 minutes easy running.'
    ],
    safetyNotes: [
      'Choose a hill with safe footing.',
      'Don\'t overstride - maintain quick turnover.',
      'Be cautious on the downhill recovery.',
      'Stop if experiencing unusual fatigue.'
    ],
    modifications: {
      beginner: '4 x 30 seconds uphill with full recovery.',
      advanced: '8-12 repeats or longer hill (up to 2 minutes).',
      equipment_alternatives: {
        'Treadmill': 'Set incline to 5-8% for hill simulation.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 6,
      progressionRate: 0.1,
      unit: 'repeats'
    },
    coaching: {
      setup: [
        'Scout your hill in advance.',
        'Ensure adequate warm-up.',
        'Plan your effort level for all repeats.'
      ],
      execution: [
        'Drive with your arms.',
        'Lean slightly into the hill.',
        'Maintain quick, short steps.',
        'Focus on effort, not speed.'
      ],
      common_mistakes: [
        'Overstriding on the uphill.',
        'Starting too fast on first repeat.',
        'Not using arms effectively.',
        'Inadequate recovery between repeats.'
      ],
      breathing: 'Strong, rhythmic breathing - don\'t hold your breath.'
    }
  }
};

// Merge sport-specific exercises into main database
Object.assign(EXERCISE_DATABASE, SPORT_SPECIFIC_EXERCISES); 