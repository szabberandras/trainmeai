// CrossFit Training Database - Structured programming for CrossFit methodology

import { Exercise } from '@/types/templates';

// CrossFit Movement Categories
export const CROSSFIT_CATEGORIES = {
  weightlifting: ["clean-and-jerk", "snatch", "deadlift", "back-squat", "front-squat", "overhead-press"],
  gymnastics: ["pull-up", "muscle-up", "handstand-push-up", "pistol-squat", "ring-dip"],
  conditioning: ["interval-running", "rowing", "assault-bike", "box-jumps"],
  metcon: ["team-wod", "amrap", "emom", "for-time"],
  recovery: ["active-recovery", "mobility", "stretching"]
};

// CrossFit Training Blocks
export const CROSSFIT_TRAINING_BLOCKS = {
  "strength_skill_development": {
    "week": 3,
    "focus": "Strength & Skill Development",
    "description": "Emphasis on building foundational strength and refining technical skills.",
    "coach_reference": "CrossFit Level 1 Methodology",
    "days": [
      {
        "day": "Monday",
        "theme": "Lower Body Strength + Upper Body Gymnastics",
        "activities": [
          {
            "id": "back-squat",
            "name": "Back Squat",
            "category": "strength",
            "equipment": ["barbell", "squat-rack"],
            "muscleGroups": ["quadriceps", "glutes", "hamstrings", "core"],
            "difficulty": 3,
            "instructions": [
              "Set up under the barbell with feet shoulder-width apart",
              "Brace your core and unrack the barbell",
              "Descend by bending hips and knees until thighs are parallel to the floor",
              "Drive through the heels to return to the starting position"
            ],
            "safetyNotes": [
              "Maintain a neutral spine throughout the movement",
              "Avoid letting knees cave inward",
              "Ensure proper depth without compromising form"
            ],
            "modifications": {
              "beginner": "Goblet squat with dumbbell",
              "advanced": "Pause squats or tempo squats",
              "equipment_alternatives": {
                "barbell": "Dumbbell or kettlebell front squat",
                "squat-rack": "Air squats"
              }
            },
            "metrics": {
              "type": "weight",
              "defaultValue": 60,
              "progressionRate": 5,
              "unit": "kg"
            },
            "coaching": {
              "setup": ["Feet shoulder-width apart", "Barbell resting on upper traps"],
              "execution": ["Descend with control", "Drive up explosively"],
              "common_mistakes": ["Knees caving in", "Heels lifting off the ground"],
              "breathing": "Inhale on the way down, exhale on the way up"
            }
          }
        ]
      },
      {
        "day": "Tuesday",
        "theme": "Conditioning - Interval Training",
        "activities": [
          {
            "id": "interval-running",
            "name": "Interval Running",
            "category": "cardio",
            "equipment": ["track", "treadmill"],
            "muscleGroups": ["legs", "cardiovascular"],
            "difficulty": 2,
            "instructions": [
              "Warm up with 5 minutes of light jogging",
              "Perform 6 rounds of 400m run at 80% effort",
              "Rest for 90 seconds between rounds",
              "Cool down with 5 minutes of walking"
            ],
            "safetyNotes": [
              "Maintain proper running form",
              "Stay hydrated and listen to your body"
            ],
            "modifications": {
              "beginner": "Reduce to 3 rounds or decrease distance",
              "advanced": "Increase to 8 rounds or decrease rest time",
              "equipment_alternatives": {
                "track": "Treadmill or stationary bike intervals"
              }
            },
            "metrics": {
              "type": "time",
              "defaultValue": 90,
              "progressionRate": -5,
              "unit": "seconds"
            },
            "coaching": {
              "setup": ["Proper running shoes", "Dynamic warm-up"],
              "execution": ["Maintain consistent pace", "Focus on breathing"],
              "common_mistakes": ["Starting too fast", "Poor posture"],
              "breathing": "Inhale and exhale rhythmically"
            }
          }
        ]
      },
      {
        "day": "Wednesday",
        "theme": "Posterior Chain Strength",
        "activities": [
          {
            "id": "deadlift",
            "name": "Deadlift",
            "category": "strength",
            "equipment": ["barbell"],
            "muscleGroups": ["hamstrings", "glutes", "lower-back", "core"],
            "difficulty": 3,
            "instructions": [
              "Stand with feet hip-width apart, bar over mid-foot",
              "Grip the bar just outside knees",
              "Keep back flat and chest up",
              "Drive through heels to lift the bar, extending hips and knees",
              "Lower the bar with control to the ground"
            ],
            "safetyNotes": [
              "Avoid rounding the back",
              "Engage core throughout the lift"
            ],
            "modifications": {
              "beginner": "Use lighter weights or kettlebells",
              "advanced": "Deficit or Romanian deadlifts",
              "equipment_alternatives": {
                "barbell": "Dumbbell deadlifts",
                "none": "Hip bridges"
              }
            },
            "metrics": {
              "type": "weight",
              "defaultValue": 70,
              "progressionRate": 5,
              "unit": "kg"
            },
            "coaching": {
              "setup": ["Feet under hips", "Bar close to shins"],
              "execution": ["Drive through heels", "Keep bar close to body"],
              "common_mistakes": ["Jerking the bar", "Locking out knees too early"],
              "breathing": "Inhale before lift, exhale at the top"
            }
          }
        ]
      },
      {
        "day": "Thursday",
        "theme": "Active Recovery & Mobility",
        "activities": [
          {
            "id": "active-recovery",
            "name": "Active Recovery",
            "category": "mobility",
            "equipment": ["foam-roller", "yoga-mat"],
            "muscleGroups": ["full-body"],
            "difficulty": 1,
            "instructions": [
              "Perform 30 minutes of low-intensity activity (walking, cycling)",
              "Follow with full-body stretching and mobility work",
              "Focus on breathing and relaxation"
            ],
            "safetyNotes": [
              "Avoid high-intensity movements",
              "Listen to your body's signals"
            ],
            "modifications": {
              "beginner": "Shorten duration to 15 minutes",
              "advanced": "Include light yoga sequences",
              "equipment_alternatives": {
                "foam-roller": "Massage ball or stretching strap"
              }
            },
            "metrics": {
              "type": "time",
              "defaultValue": 30,
              "progressionRate": 0,
              "unit": "minutes"
            },
            "coaching": {
              "setup": ["Quiet environment", "Comfortable attire"],
              "execution": ["Focus on controlled movements", "Maintain steady breathing"],
              "common_mistakes": ["Skipping recovery sessions", "Overexerting"],
              "breathing": "Deep, diaphragmatic breathing throughout"
            }
          }
        ]
      },
      {
        "day": "Friday",
        "theme": "Olympic Lifting - Technical Focus",
        "activities": [
          {
            "id": "clean-and-jerk",
            "name": "Clean and Jerk",
            "category": "technique",
            "equipment": ["barbell", "bumper-plates"],
            "muscleGroups": ["full-body"],
            "difficulty": 4,
            "instructions": [
              "Start with barbell on the ground, feet hip-width apart",
              "Perform a clean by lifting the bar to shoulders",
              "Dip slightly and drive the bar overhead into a jerk",
              "Stabilize and stand tall before lowering the bar"
            ],
            "safetyNotes": [
              "Ensure proper technique before increasing weight",
              "Use bumper plates and a safe lifting area"
            ],
            "modifications": {
              "beginner": "Practice with PVC pipe or empty barbell",
              "advanced": "Split jerk or complex variations",
              "equipment_alternatives": {
                "barbell": "Dumbbell clean and press"
              }
            },
            "metrics": {
              "type": "weight",
              "defaultValue": 40,
              "progressionRate": 2.5,
              "unit": "kg"
            },
            "coaching": {
              "setup": ["Feet under hips", "Hands just outside shoulders"],
              "execution": ["Explosive hip extension", "Quick turnover"],
              "common_mistakes": ["Early arm pull", "Poor receiving position"],
              "breathing": "Inhale before lift, exhale after lockout"
            }
          }
        ]
      },
      {
        "day": "Saturday",
        "theme": "Team MetCon",
        "activities": [
          {
            "id": "team-wod",
            "name": "Team Workout of the Day",
            "category": "plyometric",
            "equipment": ["varies"],
            "muscleGroups": ["full-body"],
            "difficulty": 3,
            "instructions": [
              "Partner up for a chipper-style workout",
              "Alternate movements with your partner",
              "Complete the prescribed reps and rounds as a team"
            ],
            "safetyNotes": [
              "Communicate with your partner",
              "Scale movements as needed"
            ],
            "modifications": {
              "beginner": "Reduce reps or substitute easier movements",
              "advanced": "Add weight or increase complexity",
              "equipment_alternatives": {
                "varies": "Bodyweight alternatives for all movements"
              }
            },
            "metrics": {
              "type": "time",
              "defaultValue": 20,
              "progressionRate": -2,
              "unit": "minutes"
            },
            "coaching": {
              "setup": ["Clear communication with partner", "Agree on rep splits"],
              "execution": ["Maintain intensity", "Support your partner"],
              "common_mistakes": ["Poor pacing", "Not communicating"],
              "breathing": "Coordinate breathing with partner transitions"
            }
          }
        ]
      },
      {
        "day": "Sunday",
        "theme": "Rest or Light Activity",
        "activities": [
          {
            "id": "rest-day",
            "name": "Complete Rest",
            "category": "mobility",
            "equipment": [],
            "muscleGroups": [],
            "difficulty": 1,
            "instructions": [
              "Complete rest from structured exercise",
              "Optional light walking or gentle stretching",
              "Focus on nutrition and hydration"
            ],
            "safetyNotes": [
              "Avoid intense physical activity",
              "Prioritize sleep and recovery"
            ],
            "modifications": {
              "beginner": "Ensure complete rest",
              "advanced": "Light yoga or meditation",
              "equipment_alternatives": {}
            },
            "metrics": {
              "type": "time",
              "defaultValue": 0,
              "progressionRate": 0,
              "unit": "minutes"
            },
            "coaching": {
              "setup": ["Relaxing environment", "No pressure to exercise"],
              "execution": ["Listen to your body", "Enjoy the rest"],
              "common_mistakes": ["Feeling guilty about rest", "Overcomplicating recovery"],
              "breathing": "Natural, relaxed breathing"
            }
          }
        ]
      }
    ]
  }
};

// CrossFit Workout Templates
export const CROSSFIT_WORKOUT_TEMPLATES = {
  "fran": {
    "name": "Fran",
    "type": "benchmark",
    "description": "21-15-9 reps for time",
    "movements": ["thrusters", "pull-ups"],
    "weights": { "thrusters": "43kg/30kg" },
    "time_cap": "10 minutes",
    "coach_reference": "CrossFit Benchmark WOD"
  },
  "murph": {
    "name": "Murph",
    "type": "hero",
    "description": "For time with 20lb vest",
    "movements": ["1 mile run", "100 pull-ups", "200 push-ups", "300 air squats", "1 mile run"],
    "time_cap": "60 minutes",
    "coach_reference": "CrossFit Hero WOD"
  },
  "cindy": {
    "name": "Cindy",
    "type": "amrap",
    "description": "20 minute AMRAP",
    "movements": ["5 pull-ups", "10 push-ups", "15 air squats"],
    "time_cap": "20 minutes",
    "coach_reference": "CrossFit Benchmark WOD"
  }
};

// CrossFit Progression Schemes
export const CROSSFIT_PROGRESSIONS = {
  "linear": {
    "description": "Add weight each week",
    "increment": "2.5-5kg per week",
    "application": "Strength movements"
  },
  "percentage": {
    "description": "Work off percentage of 1RM",
    "scheme": "Week 1: 70%, Week 2: 75%, Week 3: 80%",
    "application": "Olympic lifts"
  },
  "volume": {
    "description": "Increase reps or rounds",
    "scheme": "Add 1 round or 2-3 reps per week",
    "application": "MetCons and gymnastics"
  }
};

// Energy System Development
export const CROSSFIT_ENERGY_SYSTEMS = {
  "phosphocreatine": {
    "duration": "0-10 seconds",
    "work_rest_ratio": "1:3 to 1:5",
    "examples": ["Max effort lifts", "Short sprints"],
    "recovery": "Full recovery between efforts"
  },
  "glycolytic": {
    "duration": "10 seconds - 2 minutes",
    "work_rest_ratio": "1:1 to 1:3",
    "examples": ["Fran", "Grace", "Most MetCons"],
    "recovery": "Partial recovery"
  },
  "oxidative": {
    "duration": "2+ minutes",
    "work_rest_ratio": "Continuous or 1:1",
    "examples": ["Murph", "Long chippers", "Endurance work"],
    "recovery": "Active recovery"
  }
};

// CrossFit Weekly Programming Structure
export const CROSSFIT_WEEKLY_PROGRAMMING = {
  "foundation_block": {
    "week": 1,
    "focus": "foundation + movement quality",
    "description": "Establishing movement patterns and building aerobic base",
    "coach_reference": "CrossFit Level 1 - Movement and Methodology",
    "days": [
      {
        "day": "monday",
        "focus": "strength + short metcon",
        "session_structure": {
          "warmup": "10min dynamic movement prep",
          "strength": {
            "exercise": "back-squat",
            "sets": 3,
            "reps": 5,
            "percentage": "65-70%",
            "tempo": "30X1",
            "rest": "2-3 minutes",
            "coaching_focus": "depth and knee tracking"
          },
          "metcon": {
            "type": "for_time",
            "time_cap": "12 minutes",
            "exercises": [
              {"exercise": "row", "distance": 500, "calories": "~25"},
              {"exercise": "burpees", "reps": 20, "modification": "step-ups for beginners"},
              {"exercise": "air-squats", "reps": 40, "focus": "full depth"}
            ],
            "target_time": "7-10 minutes",
            "scaling": "reduce reps by 25% for beginners"
          },
          "cooldown": "5min walk + static stretch"
        }
      },
      {
        "day": "tuesday", 
        "focus": "gymnastics skill + aerobic capacity",
        "session_structure": {
          "warmup": "shoulder and hip mobility",
          "skill": {
            "movements": ["hollow-holds", "arch-holds", "kipping-pull-up progression"],
            "duration": "15 minutes",
            "focus": "quality over quantity"
          },
          "conditioning": {
            "type": "EMOM",
            "duration": "20 minutes",
            "blocks": {
              "min_1": {"exercise": "bike", "calories": 10, "effort": "80%"},
              "min_2": {"exercise": "wall-balls", "reps": 10, "weight": "20lb/14lb"},
              "min_3": {"exercise": "push-ups", "reps": 10, "modification": "knee push-ups"},
              "min_4": "active rest - walk or easy movement"
            },
            "coaching_notes": "maintain consistent pace, scale to finish in 40-45 seconds"
          }
        }
      },
      {
        "day": "wednesday",
        "focus": "olympic lifting technique + mobility",
        "session_structure": {
          "warmup": "15min olympic lifting prep",
          "olympic": {
            "exercise": "power-clean",
            "technique_drills": ["hang position", "high pull", "front rack mobility"],
            "sets": 4,
            "reps": 3,
            "weight": "light-moderate (50-60% if known)",
            "focus": "speed under bar and front rack position"
          },
          "accessory": {
            "exercises": ["banded front rack stretch", "glute bridges", "side planks"],
            "sets": "2-3 rounds",
            "focus": "movement quality and mobility"
          },
          "cooldown": "10min mobility flow"
        }
      },
      {
        "day": "thursday",
        "type": "rest_or_active_recovery",
        "options": ["complete rest", "20min walk", "yoga flow", "light swimming"]
      },
      {
        "day": "friday",
        "focus": "full-body strength + medium metcon",
        "session_structure": {
          "strength": {
            "exercise": "deadlift",
            "sets": 4,
            "reps": 5,
            "percentage": "70-75%",
            "tempo": "controlled down, explosive up",
            "coaching_focus": "hip hinge pattern and bar path"
          },
          "metcon": {
            "type": "AMRAP",
            "duration": "12 minutes",
            "exercises": [
              {"exercise": "box-jumps", "reps": 12, "height": "24/20 inches"},
              {"exercise": "kettlebell-swings", "reps": 15, "weight": "53lb/35lb"},
              {"exercise": "push-press", "reps": 10, "weight": "95lb/65lb"}
            ],
            "target_rounds": "4-6 rounds",
            "scaling": "reduce weight and height as needed"
          }
        }
      },
      {
        "day": "saturday",
        "focus": "partner workout / community day",
        "session_structure": {
          "format": "chipper",
          "volume": "high",
          "time_cap": "25 minutes",
          "partner_format": "divide work as desired",
          "exercises": [
            {"exercise": "bike", "calories": 40, "split": "alternate every 10 cals"},
            {"exercise": "row", "calories": 40, "split": "alternate every 10 cals"},
            {"exercise": "lunges", "reps": 100, "split": "alternate every 20 reps"},
            {"exercise": "pull-ups", "reps": 50, "split": "alternate every 10 reps"},
            {"exercise": "wall-balls", "reps": 50, "split": "alternate every 10 reps"}
          ],
          "coaching_notes": "encourage teamwork and communication"
        }
      },
      {
        "day": "sunday",
        "type": "rest",
        "options": ["complete rest", "outdoor activity", "meal prep", "mobility work"]
      }
    ]
  },

  "volume_progression_block": {
    "week": 2,
    "focus": "volume ramp + movement consistency", 
    "description": "Increasing training volume while maintaining movement quality",
    "coach_reference": "CrossFit Level 2 - Program Design",
    "days": [
      {
        "day": "monday",
        "session_structure": {
          "strength": {
            "exercise": "front-squat",
            "sets": 3,
            "reps": 5,
            "percentage": "70%",
            "tempo": "31X1",
            "coaching_focus": "upright torso and elbow position"
          },
          "metcon": {
            "type": "for_time",
            "time_cap": "15 minutes",
            "exercises": [
              {"exercise": "row", "distance": 1000, "pace": "moderate-hard"},
              {"exercise": "toes-to-bar", "reps": 30, "modification": "knee raises"},
              {"exercise": "burpees-over-bar", "reps": 20, "modification": "step over bar"}
            ],
            "target_time": "10-13 minutes"
          }
        }
      },
      {
        "day": "tuesday",
        "focus": "aerobic intervals + midline work",
        "session_structure": {
          "intervals": {
            "format": "4 x 5 minutes",
            "work": [
              {"exercise": "run", "distance": "400m"},
              {"exercise": "box-step-ups", "reps": 15, "height": "20 inches"},
              {"exercise": "sit-ups", "reps": 15}
            ],
            "rest": "5 minutes between rounds (1:1 ratio)",
            "target_pace": "sustainable but challenging"
          },
          "accessory": {
            "exercises": ["ab-wheel rollouts", "deadbugs", "superman holds"],
            "sets": "3 rounds",
            "reps": "8-12 each",
            "focus": "core stability and posterior chain"
          }
        }
      },
      {
        "day": "wednesday",
        "focus": "olympic lifting complex + mobility",
        "session_structure": {
          "olympic": {
            "exercise": "snatch-complex",
            "components": ["snatch pull", "hang snatch", "overhead squat"],
            "sets": 5,
            "reps": "1 of each",
            "weight": "technique-based (40-50%)",
            "rest": "2-3 minutes between sets",
            "coaching_focus": "timing and positions"
          },
          "mobility": {
            "exercises": ["overhead PVC pass-throughs", "ankle mobility drills", "thoracic spine rotation"],
            "duration": "15 minutes",
            "focus": "overhead position and ankle flexibility"
          }
        }
      },
      {
        "day": "thursday",
        "type": "active_recovery",
        "options": ["30min walk", "yoga class", "swimming", "bike ride"]
      },
      {
        "day": "friday",
        "session_structure": {
          "strength": {
            "exercise": "bench-press",
            "sets": 4,
            "reps": 6,
            "percentage": "65-75%",
            "tempo": "21X1",
            "coaching_focus": "bar path and shoulder stability"
          },
          "metcon": {
            "type": "AMRAP",
            "duration": "15 minutes",
            "exercises": [
              {"exercise": "thrusters", "reps": 10, "weight": "95lb/65lb"},
              {"exercise": "pull-ups", "reps": 10, "modification": "banded or jumping"},
              {"exercise": "double-unders", "reps": 30, "modification": "60 singles"}
            ],
            "target_rounds": "5-7 rounds",
            "coaching_notes": "pace for consistency, avoid going out too fast"
          }
        }
      },
      {
        "day": "saturday",
        "focus": "long mixed-modality endurance",
        "session_structure": {
          "format": "interval EMOM",
          "duration": "30 minutes",
          "blocks": {
            "min_1": {"exercise": "row", "calories": 15, "effort": "85%"},
            "min_2": {"exercise": "burpees", "reps": 10, "pace": "steady"},
            "min_3": {"exercise": "kettlebell-swings", "reps": 15, "weight": "53lb/35lb"},
            "min_4": "active rest - walk or easy bike"
          },
          "coaching_notes": "maintain consistent effort, should finish each minute with 15-20 seconds rest"
        }
      },
      {
        "day": "sunday",
        "type": "rest",
        "options": ["complete rest", "nature walk", "meal prep", "social activity"]
      }
    ]
  }
};

// CrossFit Workout Format Definitions
export const CROSSFIT_WORKOUT_FORMATS = {
  "AMRAP": {
    "name": "As Many Rounds As Possible",
    "description": "Complete as many rounds of the prescribed exercises in the given time",
    "coaching_notes": "Pace for consistency, avoid burnout early",
    "typical_duration": "10-20 minutes"
  },
  "EMOM": {
    "name": "Every Minute On the Minute", 
    "description": "Start each exercise at the top of each minute",
    "coaching_notes": "Scale to finish with 15-20 seconds rest each minute",
    "typical_duration": "12-30 minutes"
  },
  "for_time": {
    "name": "For Time",
    "description": "Complete all prescribed work as fast as possible",
    "coaching_notes": "Pace appropriately, maintain form under fatigue",
    "typical_duration": "5-20 minutes"
  },
  "chipper": {
    "name": "Chipper",
    "description": "Work through a long list of exercises, usually once",
    "coaching_notes": "Break up reps strategically, pace for the entire workout",
    "typical_duration": "15-30 minutes"
  },
  "intervals": {
    "name": "Intervals",
    "description": "Work periods followed by rest periods",
    "coaching_notes": "Maintain target intensity during work periods",
    "typical_duration": "20-40 minutes total"
  }
};

// CrossFit Scaling Guidelines
export const CROSSFIT_SCALING = {
  "beginner": {
    "strength_percentage": "50-65% of estimated 1RM",
    "metcon_scaling": "Reduce reps by 25-50%",
    "time_cap_adjustment": "Add 25% more time",
    "movement_modifications": "Always provide regression options"
  },
  "intermediate": {
    "strength_percentage": "65-80% of 1RM", 
    "metcon_scaling": "Reduce reps by 10-25%",
    "time_cap_adjustment": "Standard time caps",
    "movement_modifications": "Some advanced movements with scaling"
  },
  "advanced": {
    "strength_percentage": "80-95% of 1RM",
    "metcon_scaling": "Prescribed or increased reps",
    "time_cap_adjustment": "Standard or reduced time caps",
    "movement_modifications": "Full advanced movements"
  }
};

// Energy System Training Targets
export const CROSSFIT_ENERGY_TRAINING = {
  "strength_focus": {
    "primary_system": "phosphocreatine",
    "work_duration": "5-15 seconds",
    "rest_duration": "2-5 minutes",
    "intensity": "85-100%"
  },
  "power_endurance": {
    "primary_system": "glycolytic",
    "work_duration": "30 seconds - 2 minutes", 
    "rest_duration": "1:1 to 1:3 work:rest",
    "intensity": "80-95%"
  },
  "aerobic_capacity": {
    "primary_system": "oxidative",
    "work_duration": "3+ minutes",
    "rest_duration": "1:1 or continuous",
    "intensity": "70-85%"
  }
}; 