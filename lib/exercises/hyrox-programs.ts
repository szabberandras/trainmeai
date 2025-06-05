// ===== HYROX TRAINING PROGRAMS DATA =====

export const HYROX_TRAINING_PROGRAMS = {
  metadata: {
    sport: "Hyrox",
    description: "World Series of Fitness combining running and 8 different strength/endurance workouts",
    race_format: {
      structure: "8x 1km runs with 8 workout stations between each run",
      stations: [
        "1000m Ski Erg",
        "50m Sled Push", 
        "50m Sled Pull",
        "80m Burpee Broad Jumps",
        "1000m Rowing",
        "200m Farmers Carry",
        "100m Sandbag Lunges",
        "75/100 Wall Balls"
      ]
    },
    divisions: {
      individual: ["Open", "Pro", "Age Groups (16-70+)", "Adaptive"],
      team: ["Doubles", "Relay (4 person)"]
    },
    weights: {
      individual: {
        women: {
          sled_push: "102kg incl. sled",
          sled_pull: "78kg incl. sled", 
          farmers_carry: "2x 16kg",
          lunges: "10kg",
          wall_balls: "75 reps with 4kg"
        },
        men: {
          sled_push: "152kg incl. sled",
          sled_pull: "103kg incl. sled",
          farmers_carry: "2x 24kg", 
          lunges: "20kg",
          wall_balls: "100 reps with 6kg"
        },
        women_pro: {
          sled_push: "152kg incl. sled",
          sled_pull: "103kg incl. sled",
          farmers_carry: "2x 24kg",
          lunges: "20kg", 
          wall_balls: "100 reps with 6kg"
        },
        men_pro: {
          sled_push: "202kg incl. sled",
          sled_pull: "153kg incl. sled",
          farmers_carry: "2x 32kg",
          lunges: "30kg",
          wall_balls: "100 reps with 9kg"
        }
      }
    }
  },
  training_terminology: {
    rpe: {
      definition: "Rate of Perceived Exertion - overall demand of workout",
      scales: {
        "9-10": "Development day - tough session, hardest to recover from",
        "7-8": "Stimulation day - easier to recover than development",
        "6": "HPRT - High Performance Recovery Training"
      }
    },
    tempo: {
      definition: "4-digit figure representing seconds in each movement phase",
      format: "Eccentric-Pause-Concentric-Pause",
      example: "3110 = 3sec down, 1sec pause, 1sec up, no pause"
    },
    training_types: {
      amrap: "As Many Reps/Rounds As Possible",
      emom: "Every Minute on the Minute", 
      compromised_workouts: "HIIT finishers after runs to simulate fatigue",
      active_rest: "Light activity like walking, light jog, light row"
    }
  },
  programs: {
    "8_week_starter": {
      metadata: {
        name: "8-Week Starter Plan",
        duration_weeks: 8,
        difficulty: "Beginner",
        frequency_options: [3, 4],
        session_duration: "~60 minutes",
        author: "Steve McClory",
        target_audience: {
          hyrox_experience: "No experience needed",
          weightlifting_experience: "Minimal or zero",
          running_ability: "10K time >1 hour"
        }
      },
      structure: {
        training_days: {
          stimulation: {
            rpe: "7-8",
            purpose: "Prepare for development days, more comfortable than development"
          },
          development: {
            rpe: "9-10", 
            purpose: "Push hardest, expect fatigue following day"
          }
        },
        weekly_options: {
          "4_days": ["Monday: Stimulation", "Tuesday: Development", "Thursday: Stimulation", "Friday: Development"],
          "3_days": ["Monday: Stimulation", "Tuesday: Development", "Friday: Development"]
        }
      },
      weeks: {
        week_1: {
          focus: "Foundation Building",
          sessions: {
            monday: {
              type: "stimulation",
              rpe: "7-8",
              components: {
                warmup: {
                  mobility_drills: "10 minutes",
                  run: "1km - start slowly, gradually increase speed"
                },
                main_work: {
                  run: {
                    structure: "10 mins, rest 5 mins, 10 mins"
                  },
                  hyrox_workouts: [
                    "1000m rower",
                    "rest 3 mins", 
                    "80m lunges"
                  ]
                },
                strength: {
                  exercises: [
                    {
                      name: "Deadlifts (KB, hex bar or straight bar)",
                      sets: 4,
                      reps: "12-15",
                      tempo: "3010",
                      rest: "60 secs"
                    },
                    {
                      name: "Barbell shoulder press", 
                      sets: 3,
                      reps: "12-15",
                      tempo: "3010",
                      rest: "60 secs"
                    }
                  ]
                },
                cooldown: "2-3 mins recovery posture with controlled breathing"
              }
            },
            tuesday: {
              type: "development",
              rpe: "9-10",
              components: {
                warmup: {
                  mobility_drills: "Standard",
                  run: "1km gradual build"
                },
                main_work: {
                  engine_builder: {
                    rounds: 2,
                    structure: [
                      "1km run",
                      "2000m bike", 
                      "1000m ski erg",
                      "1000m row",
                      "100m sled push (50% comp weight)",
                      "rest 3 mins"
                    ]
                  }
                },
                cooldown: "2-3 mins recovery posture"
              }
            },
            thursday: {
              type: "stimulation", 
              rpe: "7",
              components: {
                warmup: {
                  mobility_drills: "Standard",
                  run: "1km gradual build"
                },
                main_work: {
                  hyrox_workout: [
                    "1km run",
                    "1000m ski erg", 
                    "1km run",
                    "50m sled push",
                    "500m run",
                    "1000m rower"
                  ],
                  notes: "Only rest when needed, keep consistent"
                },
                strength: {
                  exercises: [
                    {
                      name: "Kettlebell goblet squats",
                      sets: 4,
                      reps: "12-15", 
                      tempo: "3010",
                      rest: "60 secs"
                    },
                    {
                      name: "Single arm dumbbell row",
                      sets: 3,
                      reps: "12-15 each arm",
                      tempo: "3010", 
                      rest: "60 secs"
                    }
                  ]
                },
                cooldown: "2-3 mins recovery posture"
              }
            },
            friday: {
              type: "development",
              rpe: "9-10",
              components: {
                warmup: {
                  mobility_drills: "Standard",
                  run: "1km gradual build"
                },
                main_work: {
                  anaerobic_threshold_training: {
                    sets: 4,
                    duration: "6 minutes per set",
                    rest: "5 mins low active",
                    heart_rate: "85-90% MHR (+/- 5bpm anaerobic threshold)",
                    circuit: [
                      "350m ski erg",
                      "350m row", 
                      "350m run",
                      "25 burpees",
                      "25 wall ball throws",
                      "30 bodyweight lunges"
                    ],
                    notes: "Do as much as possible in 6 minutes, start where you finished each time"
                  }
                },
                cooldown: "2-3 mins recovery posture"
              }
            }
          }
        }
      },
      progression: {
        weeks_1_4: "Base building - foundation fitness",
        weeks_5_8: "Progressive overload - increased volume and intensity",
        key_adaptations: [
          "Running endurance from 10 mins to 45 mins",
          "Anaerobic threshold training duration increases from 6 to 8 minutes", 
          "Hyrox workout complexity and length increases",
          "Strength training maintains consistent volume"
        ]
      }
    },
    "12_week_comprehensive": {
      metadata: {
        name: "12-Week Hyrox Training Programme", 
        duration_weeks: 12,
        difficulty: "Intermediate",
        structure: "3 cycles of 4-week blocks",
        target_audience: "Athletes with basic Hyrox knowledge"
      },
      cycles: {
        cycle_1: {
          weeks: "1-4",
          focus: "Base building",
          week_4: "Normal intensity"
        },
        cycle_2: {
          weeks: "5-8", 
          focus: "Pace development",
          week_4: "Normal intensity"
        },
        cycle_3: {
          weeks: "9-12",
          focus: "Peak performance", 
          week_4: "Deload week"
        }
      },
      key_components: [
        "Running endurance and intervals",
        "Compromised workouts (HIIT finishers after runs)",
        "Grip strengthening",
        "Hyrox movement simulations", 
        "Targeted strength training"
      ],
      sample_workouts: {
        week_1_monday: {
          type: "endurance",
          workout: {
            rounds: 4,
            exercises: [
              "400m ski erg",
              "20 barbell thrusters",
              "20 over the bar burpees", 
              "20 Romanian deadlifts"
            ],
            goal: "Complete as fast as possible"
          }
        },
        week_1_tuesday: {
          type: "endurance", 
          workout: {
            duration: "45 minutes AMRAP",
            exercises: [
              "50m sled push",
              "50m sled pull", 
              "50m run",
              "40 wall balls"
            ]
          }
        }
      }
    },
    "12_week_pro": {
      metadata: {
        name: "12-Week PRO Program",
        duration_weeks: 12, 
        difficulty: "Advanced",
        target_audience: {
          hyrox_experience: "Current experienced athlete/hyrox experience",
          training_background: "Currently on strength specific program",
          running_ability: "10K time <45 mins women & <40 mins men"
        }
      },
      methodology: {
        training_blocks: {
          hyrox_complete: {
            duration: "20-40 minutes",
            description: "Basic daily workout with manageable sets and volume"
          },
          hyrox_engine: {
            duration: "40-60+ minutes", 
            description: "High volume, big sets, designed to replicate race intensity"
          },
          hyrox_interval: {
            description: "Includes work:rest ratios, focus on pace/speed, repeating sets for pacing"
          },
          hyrox_strength: {
            description: "Quality over time, lower rep ranges with rest, basic weightlifting movements"
          },
          hyrox_aerobic: {
            duration: "40-60 minutes",
            description: "Conversational effort, minimal change in effort throughout"
          }
        },
        periodization: {
          week_1_4: "BASE",
          week_5_8: "PACE", 
          week_9_10: "ACCELERATE",
          week_11: "PRIME",
          week_12: "RACE"
        }
      },
      equipment: {
        minimum: [
          "Sled + rope",
          "Kettlebells", 
          "Dumbbells",
          "Ski erg and/or row erg",
          "Wall ball"
        ],
        additional: [
          "Sandbags",
          "Air bike or bike erg",
          "Barbell/squat rack", 
          "Pull up bar"
        ]
      },
      sample_week: {
        week_1_1: {
          day_1: {
            type: "HYROX COMPLETE",
            workout: {
              rounds: 4,
              format: "RFT (Rounds For Time)",
              exercises: [
                "500m row",
                "15 KB deadlifts (32/24 KG x 2)",
                "20 wall balls (9/6 KG)", 
                "100m farmer carry (32/24 KG x 2)"
              ],
              notes: [
                "Pay attention to pace on row, stay consistent",
                "KB deadlifts should be heavy but done in 1 set",
                "Wall balls should be unbroken",
                "Go heavier on farmer carry if desired"
              ]
            }
          },
          day_2: {
            type: "HYROX AEROBIC", 
            workout: {
              duration: "45-60 minutes",
              format: "Conversational pace run",
              finish: "6 x 20 second strides",
              notes: [
                "Rest as needed throughout",
                "During strides, start slow and build to sprint effort for last 6-10 steps"
              ]
            }
          }
        }
      }
    }
  },
  exercise_library: {
    hyrox_specific: {
      ski_erg: {
        description: "Upper body focused cardio machine",
        technique_points: ["Full body engagement", "Consistent pace", "Efficient stroke rate"],
        race_distance: "1000m"
      },
      sled_push: {
        description: "Push weighted sled across floor",
        technique_points: ["Low body position", "Drive through legs", "Maintain contact"],
        race_distance: "50m",
        variations: ["AHAP (As Heavy As Possible)", "Speed focused"]
      },
      sled_pull: {
        description: "Pull weighted sled using rope",
        technique_points: ["Arms only vs full body", "Hand over hand", "Walk back method"],
        race_distance: "50m"
      },
      burpee_broad_jump: {
        description: "Burpee immediately into broad jump",
        technique_points: ["Plant hands close to feet", "Explosive jump", "Maintain standard"],
        race_distance: "80m"
      },
      farmers_carry: {
        description: "Carry weights in each hand while walking",
        technique_points: ["Upright posture", "Controlled grip", "Consistent pace"],
        race_distance: "200m"
      },
      sandbag_lunges: {
        description: "Walking lunges while carrying sandbag",
        technique_points: ["Sandbag positioning", "Full range of motion", "Balance"],
        race_distance: "100m"
      },
      wall_balls: {
        description: "Squat and throw ball to wall target",
        technique_points: ["Full squat depth", "Target height", "Catch and control"],
        race_reps: "75 (women) / 100 (men)"
      }
    },
    strength_movements: {
      deadlift: {
        variations: ["Kettlebell", "Hex bar", "Straight bar"],
        rep_ranges: "12-15 (hypertrophy), 8-12 (strength-endurance)"
      },
      goblet_squat: {
        equipment: "Kettlebell or dumbbell",
        focus: "Quad dominant, core stability"
      },
      single_arm_row: {
        equipment: "Dumbbell",
        focus: "Unilateral back strength, anti-rotation"
      }
    }
  },
  training_principles: {
    hybrid_training: {
      definition: "Combination of strength work, endurance exercises, and high intensity challenges",
      benefits: ["Improved strength", "Enhanced stamina", "Increased power", "Better agility"],
      application: "Prepares athletes for various physical challenges"
    },
    compromised_running: {
      concept: "Running in a fatigued state after strength/power exercises", 
      purpose: "Simulate race conditions where runs occur after workout stations",
      implementation: "HIIT finishers after runs, strength exercises before runs"
    },
    periodization: {
      phases: {
        general_prep: "Build work capacity, strength development, structural balance",
        specific_prep: "Hyrox specific capacity and movements", 
        competition: "Peak performance and race simulation"
      }
    },
    athlete_qualities: {
      physiological: [
        "High VO2 max (aiming for 70+)",
        "Big aerobic engine",
        "Anaerobic threshold 85-90% max heart rate",
        "Speed/power output at anaerobic threshold"
      ],
      physical: [
        "Good mobility for efficient movements",
        "Strength endurance",
        "Postural strength", 
        "Grip strength"
      ],
      mental: [
        "Mental toughness",
        "Pacing strategy",
        "Movement efficiency under fatigue"
      ]
    }
  }
};

// ===== HYROX TRAINING PROGRAMS HELPER FUNCTIONS =====

/**
 * Get Hyrox training program by name
 */
export function getHyroxProgram(programName: string) {
  const programs = HYROX_TRAINING_PROGRAMS.programs;
  const programKey = Object.keys(programs).find(key => 
    programs[key as keyof typeof programs].metadata.name.toLowerCase().includes(programName.toLowerCase())
  );
  return programKey ? programs[programKey as keyof typeof programs] : null;
}

/**
 * Get all Hyrox training programs
 */
export function getAllHyroxPrograms() {
  return Object.values(HYROX_TRAINING_PROGRAMS.programs);
}

/**
 * Get Hyrox program recommendation based on experience level
 */
export function getHyroxProgramRecommendation(experienceLevel: 'beginner' | 'intermediate' | 'advanced') {
  const programMap = {
    'beginner': '8-Week Starter Plan',
    'intermediate': '12-Week Hyrox Training Programme',
    'advanced': '12-Week PRO Program'
  };
  
  const programName = programMap[experienceLevel];
  return getHyroxProgram(programName);
}

/**
 * Get Hyrox race format information
 */
export function getHyroxRaceFormat() {
  return HYROX_TRAINING_PROGRAMS.metadata.race_format;
}

/**
 * Get Hyrox competition weights by division
 */
export function getHyroxWeights(division: 'women' | 'men' | 'women_pro' | 'men_pro') {
  return HYROX_TRAINING_PROGRAMS.metadata.weights.individual[division];
}

/**
 * Get Hyrox training terminology
 */
export function getHyroxTerminology() {
  return HYROX_TRAINING_PROGRAMS.training_terminology;
}

/**
 * Get Hyrox exercise library
 */
export function getHyroxExerciseLibrary() {
  return HYROX_TRAINING_PROGRAMS.exercise_library;
}

/**
 * Get Hyrox training principles
 */
export function getHyroxTrainingPrinciples() {
  return HYROX_TRAINING_PROGRAMS.training_principles;
} 