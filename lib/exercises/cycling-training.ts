// Cycling Training Database - Structured workouts for road cycling, indoor training, and performance development

import { Exercise } from '@/types/templates';

// Power Zone Definitions (based on FTP - Functional Threshold Power)
export const POWER_ZONES = {
  zone1: { name: "Active Recovery", percentage: [0, 55], description: "Very easy spinning" },
  zone2: { name: "Endurance", percentage: [56, 75], description: "Aerobic base building" },
  zone3: { name: "Tempo", percentage: [76, 90], description: "Comfortable hard effort" },
  zone4: { name: "Lactate Threshold", percentage: [91, 105], description: "Sustainable hard effort" },
  zone5: { name: "VO2 Max", percentage: [106, 120], description: "Very hard, short intervals" },
  zone6: { name: "Anaerobic", percentage: [121, 150], description: "Neuromuscular power" },
  zone7: { name: "Neuromuscular", percentage: [150, 999], description: "All-out sprints" }
};

// Heart Rate Zones (based on LTHR - Lactate Threshold Heart Rate)
export const HEART_RATE_ZONES = {
  zone1: { name: "Active Recovery", percentage: [0, 68], description: "Very light effort" },
  zone2: { name: "Aerobic", percentage: [69, 83], description: "Light effort" },
  zone3: { name: "Tempo", percentage: [84, 94], description: "Moderate effort" },
  zone4: { name: "Lactate Threshold", percentage: [95, 105], description: "Hard effort" },
  zone5a: { name: "VO2 Max", percentage: [106, 120], description: "Very hard effort" },
  zone5b: { name: "Anaerobic", percentage: [121, 150], description: "Extremely hard effort" }
};

export const CYCLING_EXERCISES: Record<string, Exercise> = {
  // ===== THRESHOLD TRAINING =====
  "threshold-intervals": {
    "id": "threshold-intervals",
    "name": "Threshold Intervals",
    "category": "endurance",
    "equipment": ["road-bike", "indoor-trainer", "power-meter"],
    "muscleGroups": ["legs", "cardiovascular"],
    "difficulty": 4,
    "instructions": [
      "Warm-up: 15 minutes at easy pace (Zone 1-2)",
      "Main Set: 2 x 20 minutes at 95-100% FTP (Zone 4) with 5-minute recovery between sets",
      "Cool-down: 10 minutes at easy pace (Zone 1)"
    ],
    "safetyNotes": [
      "Maintain proper hydration throughout workout",
      "Monitor heart rate to stay within target zone",
      "Ensure proper bike fit to avoid injury",
      "Stop if experiencing chest pain or dizziness"
    ],
    "modifications": {
      "beginner": "2 x 15 minutes at 90-95% FTP with 8-minute recovery",
      "advanced": "2 x 25 minutes at 100-105% FTP with 3-minute recovery",
      "equipment_alternatives": {
        "power-meter": "Use heart rate zones 4-5a, RPE 7-8/10",
        "indoor-trainer": "Stationary bike with resistance adjustment"
      }
    },
    "metrics": {
      "type": "power",
      "defaultValue": 200,
      "progressionRate": 5,
      "unit": "watts"
    },
    "coaching": {
      "setup": ["Calibrate power meter before workout", "Set trainer resistance appropriately", "Have water and towel ready"],
      "execution": ["Maintain steady cadence 85-95 RPM", "Focus on consistent power output", "Relax upper body"],
      "common_mistakes": ["Starting intervals too hard", "Inconsistent pacing", "Gripping handlebars too tightly"],
      "breathing": "Deep, rhythmic breathing - inhale for 2 pedal strokes, exhale for 2"
    }
  },

  // ===== VO2 MAX INTERVALS =====
  "vo2-max-intervals": {
    "id": "vo2-max-intervals",
    "name": "VO2 Max Intervals",
    "category": "endurance",
    "equipment": ["road-bike", "indoor-trainer", "power-meter"],
    "muscleGroups": ["legs", "cardiovascular", "core"],
    "difficulty": 5,
    "instructions": [
      "Warm-up: 20 minutes progressive from Zone 1 to Zone 3",
      "Main Set: 5 x 5 minutes at 106-120% FTP (Zone 5) with 5-minute recovery between intervals",
      "Cool-down: 15 minutes easy spinning (Zone 1)"
    ],
    "safetyNotes": [
      "These are very high intensity - ensure you're well-rested",
      "Stop if unable to maintain target power for more than 30 seconds",
      "Have recovery drink ready for post-workout"
    ],
    "modifications": {
      "beginner": "4 x 4 minutes at 105-110% FTP with 6-minute recovery",
      "advanced": "6 x 6 minutes at 115-125% FTP with 4-minute recovery",
      "equipment_alternatives": {
        "power-meter": "Use heart rate zone 5a-5b, RPE 9/10"
      }
    },
    "metrics": {
      "type": "power",
      "defaultValue": 220,
      "progressionRate": 3,
      "unit": "watts"
    },
    "coaching": {
      "setup": ["Ensure full glycogen stores", "Mental preparation for high intensity"],
      "execution": ["High cadence 95-105 RPM", "Stay relaxed despite high effort", "Focus on smooth pedal stroke"],
      "common_mistakes": ["Going anaerobic too early", "Tensing up during efforts", "Poor pacing strategy"],
      "breathing": "Rapid but controlled breathing - don't hold breath during efforts"
    }
  },

  // ===== ENDURANCE BASE BUILDING =====
  "zone2-endurance": {
    "id": "zone2-endurance",
    "name": "Zone 2 Endurance",
    "category": "endurance",
    "equipment": ["road-bike", "indoor-trainer"],
    "muscleGroups": ["legs", "cardiovascular"],
    "difficulty": 2,
    "instructions": [
      "Warm-up: 10 minutes easy spinning",
      "Main Set: 60-180 minutes at 56-75% FTP (Zone 2)",
      "Cool-down: 5 minutes easy spinning"
    ],
    "safetyNotes": [
      "Should be able to hold conversation throughout",
      "Maintain consistent effort - avoid surges",
      "Fuel appropriately for longer sessions"
    ],
    "modifications": {
      "beginner": "45-60 minutes at 60-70% FTP",
      "advanced": "2-4 hours at 65-75% FTP",
      "equipment_alternatives": {
        "indoor-trainer": "Outdoor ride on flat terrain"
      }
    },
    "metrics": {
      "type": "time",
      "defaultValue": 90,
      "progressionRate": 10,
      "unit": "minutes"
    },
    "coaching": {
      "setup": ["Comfortable position on bike", "Entertainment for indoor sessions", "Nutrition plan for longer rides"],
      "execution": ["Steady, comfortable effort", "Cadence 80-90 RPM", "Stay hydrated"],
      "common_mistakes": ["Going too hard", "Neglecting nutrition", "Poor bike position"],
      "breathing": "Natural, easy breathing throughout"
    }
  },

  // ===== SPRINT INTERVALS =====
  "sprint-intervals": {
    "id": "sprint-intervals",
    "name": "Sprint Intervals",
    "category": "plyometric",
    "equipment": ["road-bike", "indoor-trainer"],
    "muscleGroups": ["legs", "core", "neuromuscular"],
    "difficulty": 4,
    "instructions": [
      "Warm-up: 20 minutes with 3 x 30-second build-ups",
      "Main Set: 8 x 15 seconds all-out sprint with 2:45 recovery between sprints",
      "Cool-down: 15 minutes easy spinning"
    ],
    "safetyNotes": [
      "Ensure proper warm-up before sprinting",
      "Use appropriate gear ratio",
      "Stop if experiencing muscle cramps"
    ],
    "modifications": {
      "beginner": "6 x 10 seconds with 3:30 recovery",
      "advanced": "10 x 20 seconds with 2:00 recovery",
      "equipment_alternatives": {
        "indoor-trainer": "Ensure trainer can handle high power output"
      }
    },
    "metrics": {
      "type": "power",
      "defaultValue": 800,
      "progressionRate": 5,
      "unit": "watts"
    },
    "coaching": {
      "setup": ["Proper gear selection", "Good bike position", "Mental preparation"],
      "execution": ["Maximum effort from start", "High cadence 110+ RPM", "Stay seated if possible"],
      "common_mistakes": ["Poor gear selection", "Not going all-out", "Inadequate recovery"],
      "breathing": "Don't focus on breathing during sprint - recover between efforts"
    }
  },

  // ===== SWEET SPOT TRAINING =====
  "sweet-spot-intervals": {
    "id": "sweet-spot-intervals",
    "name": "Sweet Spot Intervals",
    "category": "endurance",
    "equipment": ["road-bike", "indoor-trainer", "power-meter"],
    "muscleGroups": ["legs", "cardiovascular"],
    "difficulty": 3,
    "instructions": [
      "Warm-up: 15 minutes progressive to Zone 3",
      "Main Set: 3 x 15 minutes at 88-94% FTP (Sweet Spot) with 5-minute recovery",
      "Cool-down: 10 minutes easy spinning"
    ],
    "safetyNotes": [
      "Effort should feel 'comfortably hard'",
      "Maintain consistent power throughout intervals"
    ],
    "modifications": {
      "beginner": "3 x 12 minutes at 85-90% FTP",
      "advanced": "2 x 30 minutes at 90-95% FTP",
      "equipment_alternatives": {
        "power-meter": "Use heart rate zone 3-4, RPE 6-7/10"
      }
    },
    "metrics": {
      "type": "power",
      "defaultValue": 185,
      "progressionRate": 4,
      "unit": "watts"
    },
    "coaching": {
      "setup": ["Find sustainable position", "Set realistic power targets"],
      "execution": ["Smooth, steady effort", "Cadence 85-95 RPM", "Stay relaxed"],
      "common_mistakes": ["Starting too conservatively", "Power spikes", "Poor position"],
      "breathing": "Controlled, rhythmic breathing"
    }
  },

  // ===== CLIMBING INTERVALS =====
  "climbing-intervals": {
    "id": "climbing-intervals",
    "name": "Climbing Intervals",
    "category": "strength",
    "equipment": ["road-bike", "indoor-trainer"],
    "muscleGroups": ["legs", "core", "glutes"],
    "difficulty": 4,
    "instructions": [
      "Warm-up: 15 minutes with some standing efforts",
      "Main Set: 4 x 8 minutes at 95-105% FTP seated/standing mix with 4-minute recovery",
      "Cool-down: 12 minutes easy spinning"
    ],
    "safetyNotes": [
      "Alternate between seated and standing",
      "Use appropriate gear for climbing simulation",
      "Maintain good form when standing"
    ],
    "modifications": {
      "beginner": "4 x 6 minutes at 90-100% FTP mostly seated",
      "advanced": "5 x 10 minutes at 100-110% FTP with more standing",
      "equipment_alternatives": {
        "indoor-trainer": "Increase resistance to simulate climbing"
      }
    },
    "metrics": {
      "type": "power",
      "defaultValue": 210,
      "progressionRate": 4,
      "unit": "watts"
    },
    "coaching": {
      "setup": ["Practice standing technique", "Set higher trainer resistance"],
      "execution": ["Smooth transitions seated/standing", "Lower cadence 70-85 RPM", "Engage core when standing"],
      "common_mistakes": ["Rocking bike excessively", "Poor standing form", "Inconsistent power"],
      "breathing": "Deeper breathing when standing, controlled when seated"
    }
  },

  // ===== RECOVERY RIDES =====
  "active-recovery": {
    "id": "active-recovery",
    "name": "Active Recovery Ride",
    "category": "mobility",
    "equipment": ["road-bike", "indoor-trainer"],
    "muscleGroups": ["legs", "cardiovascular"],
    "difficulty": 1,
    "instructions": [
      "Warm-up: 5 minutes very easy spinning",
      "Main Set: 30-60 minutes at 45-55% FTP (Zone 1)",
      "Cool-down: 5 minutes easy spinning with some stretching"
    ],
    "safetyNotes": [
      "Keep effort very light",
      "Focus on smooth pedaling",
      "Stop if feeling any fatigue"
    ],
    "modifications": {
      "beginner": "20-30 minutes at 40-50% FTP",
      "advanced": "60-90 minutes at 50-60% FTP",
      "equipment_alternatives": {
        "indoor-trainer": "Easy outdoor ride on flat terrain"
      }
    },
    "metrics": {
      "type": "time",
      "defaultValue": 45,
      "progressionRate": 5,
      "unit": "minutes"
    },
    "coaching": {
      "setup": ["Very comfortable position", "Light entertainment", "Hydration available"],
      "execution": ["Effortless pedaling", "Cadence 80-90 RPM", "Relax completely"],
      "common_mistakes": ["Going too hard", "Skipping recovery rides", "Poor hydration"],
      "breathing": "Natural, relaxed breathing"
    }
  },

  // ===== TEMPO INTERVALS =====
  "tempo-intervals": {
    "id": "tempo-intervals",
    "name": "Tempo Intervals",
    "category": "endurance",
    "equipment": ["road-bike", "indoor-trainer", "power-meter"],
    "muscleGroups": ["legs", "cardiovascular"],
    "difficulty": 3,
    "instructions": [
      "Warm-up: 15 minutes progressive to Zone 2",
      "Main Set: 2 x 20 minutes at 76-90% FTP (Zone 3) with 10-minute recovery",
      "Cool-down: 10 minutes easy spinning"
    ],
    "safetyNotes": [
      "Should feel like a 'moderate' effort",
      "Sustainable for the full duration"
    ],
    "modifications": {
      "beginner": "2 x 15 minutes at 75-85% FTP",
      "advanced": "1 x 60 minutes at 80-90% FTP",
      "equipment_alternatives": {
        "power-meter": "Use heart rate zone 3, RPE 5-6/10"
      }
    },
    "metrics": {
      "type": "power",
      "defaultValue": 170,
      "progressionRate": 4,
      "unit": "watts"
    },
    "coaching": {
      "setup": ["Comfortable aerodynamic position", "Steady mindset"],
      "execution": ["Consistent effort", "Cadence 85-95 RPM", "Stay aerodynamic"],
      "common_mistakes": ["Too much variation in power", "Poor position", "Going anaerobic"],
      "breathing": "Steady, controlled breathing pattern"
    }
  }
};

// Training Phase Templates
export const CYCLING_TRAINING_PHASES = {
  base: {
    name: "Base Building Phase",
    duration_weeks: 4,
    focus: ["aerobic_capacity", "endurance", "technique"],
    weekly_structure: {
      zone1_percentage: 20,
      zone2_percentage: 65,
      zone3_percentage: 15,
      zone4_percentage: 0,
      zone5_percentage: 0
    }
  },
  build: {
    name: "Build Phase",
    duration_weeks: 4,
    focus: ["threshold_power", "vo2_max", "climbing"],
    weekly_structure: {
      zone1_percentage: 15,
      zone2_percentage: 45,
      zone3_percentage: 25,
      zone4_percentage: 10,
      zone5_percentage: 5
    }
  },
  peak: {
    name: "Peak Phase",
    duration_weeks: 2,
    focus: ["race_simulation", "sprint_power", "recovery"],
    weekly_structure: {
      zone1_percentage: 25,
      zone2_percentage: 35,
      zone3_percentage: 20,
      zone4_percentage: 15,
      zone5_percentage: 5
    }
  }
};

// Export formats for different platforms
export const EXPORT_FORMATS = {
  zwift: {
    format: ".zwo",
    description: "Zwift workout file format"
  },
  trainingpeaks: {
    format: ".json",
    description: "TrainingPeaks structured workout"
  },
  garmin: {
    format: ".fit",
    description: "Garmin device workout file"
  },
  wahoo: {
    format: ".erg",
    description: "Wahoo trainer workout file"
  }
};

// Multi-Sport Periodized Training Structure
export const MULTI_SPORT_TRAINING_BLOCKS = {
  "hybrid_endurance_block": {
    "week": 3,
    "focus": "hybrid_endurance_load",
    "description": "Building aerobic capacity while maintaining strength and functional fitness",
    "activities": [
      {
        "day": "monday",
        "type": "strength",
        "name": "Upper Body Power",
        "exercises": ["overhead-press", "deadlifts", "split-squats"],
        "intensity": "moderate",
        "duration": "45-50min",
        "coach_reference": "Fergus Crawley - Hybrid Athlete Programming",
        "metrics": {
          "sets": "3-4",
          "reps": "6-8",
          "rest": "2-3min",
          "rpe": "7/10"
        }
      },
      {
        "day": "tuesday", 
        "type": "cycling",
        "name": "Sweet Spot Intervals",
        "goal": "sweet-spot",
        "duration": "60min",
        "intensity": "88–94% FTP",
        "coach_reference": "TrainerRoad - Sweet Spot Base",
        "structure": "3x15min @ 88-94% FTP with 5min recovery",
        "metrics": {
          "power_zone": "Zone 3-4",
          "cadence": "85-95 RPM",
          "heart_rate": "Zone 3"
        }
      },
      {
        "day": "wednesday",
        "type": "cross_training",
        "name": "Active Recovery + Mobility",
        "format": "zone 2 + mobility",
        "duration": "45min",
        "intensity": "low",
        "notes": "low impact: elliptical + rehab drills",
        "activities": ["elliptical_zone2", "hip_mobility", "thoracic_spine_work"]
      },
      {
        "day": "thursday",
        "type": "hyrox_station",
        "name": "Sled + Wall Ball Focus",
        "focus": "sled work + wall balls",
        "intensity": "threshold",
        "duration": "40-45min",
        "coach_reference": "HYROX PFT Week 3",
        "structure": "4 rounds: 50m sled push + 30 wall balls + 2min rest"
      },
      {
        "day": "friday",
        "type": "strength", 
        "name": "Pull Focus + Posterior Chain",
        "exercises": ["chin_ups", "dumbbell_bench_press", "barbell_rdl"],
        "intensity": "higher volume",
        "duration": "50min",
        "coach_reference": "Fergus Crawley - Volume Phase",
        "metrics": {
          "sets": "4-5",
          "reps": "8-12",
          "rest": "90sec-2min"
        }
      },
      {
        "day": "saturday",
        "type": "cycling",
        "name": "Climbing Endurance",
        "goal": "climbing endurance", 
        "duration": "75–90min",
        "intensity": "Zone 2-3",
        "notes": "long climb simulation, seated work",
        "structure": "60min Z2 + 4x5min climbing @ 85% FTP seated"
      },
      {
        "day": "sunday",
        "type": "recovery",
        "name": "Active Recovery",
        "format": "mobility + walk",
        "duration": "30–45min",
        "activities": ["gentle_walk", "full_body_stretch", "breathing_exercises"]
      }
    ]
  },

  "intensity_progression_block": {
    "week": 4,
    "focus": "intensity_progression", 
    "description": "Increasing training intensity across all modalities while maintaining technique",
    "activities": [
      {
        "day": "monday",
        "type": "hyrox_station",
        "name": "Burpee + Sled Combo",
        "focus": "burpee + sled combo",
        "format": "EMOM + intervals",
        "duration": "35-40min",
        "coach_reference": "HYROX Fundamentals",
        "structure": "EMOM 20: 5 burpee broad jumps + 25m sled push"
      },
      {
        "day": "tuesday",
        "type": "cycling", 
        "name": "VO2 Max Intervals",
        "goal": "VO2 max",
        "duration": "45–50min",
        "format": "5x3min @ 110–115% FTP",
        "coach_reference": "Sufferfest - VO2 Max Development",
        "structure": "WU: 15min + 5x3min @ 110-115% FTP (3min recovery) + CD: 10min",
        "metrics": {
          "power_zone": "Zone 5",
          "heart_rate": "Zone 5a",
          "cadence": "95-105 RPM"
        }
      },
      {
        "day": "wednesday",
        "type": "strength",
        "name": "Heavy Compound Focus", 
        "exercises": ["barbell_back_squats", "dumbbell_shoulder_press", "chin_ups"],
        "intensity": "high",
        "sets": "5x5",
        "duration": "55min",
        "metrics": {
          "load": "80-85% 1RM",
          "rest": "3-4min",
          "rpe": "8/10"
        }
      },
      {
        "day": "thursday",
        "type": "cross_training",
        "name": "Swim + Prehab",
        "format": "swim + band rehab", 
        "duration": "45min",
        "notes": "technique + shoulder prehab",
        "structure": "25min swim technique + 20min band work"
      },
      {
        "day": "friday",
        "type": "hyrox_sim",
        "name": "Race Simulation",
        "stations": ["run", "ski", "farmers-carry", "row", "wall balls"],
        "intensity": "race pace",
        "total_time": "45–60min",
        "structure": "5 station circuit with transitions"
      },
      {
        "day": "saturday", 
        "type": "cycling",
        "name": "Sweet Spot Over/Unders",
        "goal": "sweet spot over/unders",
        "format": "4x10min",
        "duration": "65min",
        "coach_reference": "TrainerRoad - Kaweah",
        "structure": "4x10min: 2min @ 95% FTP, 1min @ 105% FTP (repeat pattern)"
      },
      {
        "day": "sunday",
        "type": "rest",
        "name": "Complete Rest + Recovery",
        "notes": "mobility + massage ball work",
        "activities": ["self_massage", "gentle_stretching", "meditation"]
      }
    ]
  },

  "deload_block": {
    "week": 5,
    "focus": "deload_volume_drop",
    "description": "Reduced volume and intensity to promote recovery and adaptation",
    "activities": [
      {
        "day": "monday",
        "type": "mobility_rehab",
        "name": "Movement Restoration", 
        "duration": "30min",
        "intensity": "very_low",
        "notes": "light band circuits",
        "activities": ["band_pull_aparts", "hip_circles", "thoracic_rotation"]
      },
      {
        "day": "tuesday",
        "type": "cycling",
        "name": "Easy Endurance Spin",
        "goal": "easy endurance spin",
        "duration": "45min", 
        "intensity": "zone 1–2",
        "structure": "Continuous easy spinning, focus on pedal technique",
        "metrics": {
          "power": "50-65% FTP",
          "heart_rate": "Zone 1-2",
          "rpe": "3-4/10"
        }
      },
      {
        "day": "wednesday",
        "type": "strength",
        "name": "Light Movement",
        "exercises": ["dumbbell_rdl", "goblet_squat"],
        "intensity": "light",
        "volume": "2 sets",
        "duration": "25min",
        "metrics": {
          "load": "50-60% normal",
          "reps": "8-10",
          "focus": "movement_quality"
        }
      },
      {
        "day": "thursday",
        "type": "hyrox_station", 
        "name": "Skill & Pacing",
        "focus": "skill & pacing",
        "duration": "30min",
        "notes": "technique + light sled pushes",
        "structure": "Movement practice at 60% intensity"
      },
      {
        "day": "friday",
        "type": "rest",
        "name": "Complete Rest",
        "notes": "mobility only",
        "activities": ["gentle_yoga", "breathing_exercises"]
      },
      {
        "day": "saturday",
        "type": "outdoor_activity",
        "name": "Light Run or Hike",
        "duration": "30–40min",
        "intensity": "conversational",
        "notes": "Enjoy nature, no performance pressure"
      },
      {
        "day": "sunday",
        "type": "cycling",
        "name": "Fun Ride",
        "goal": "spinning out",
        "duration": "60min",
        "notes": "fun ride, no power targets",
        "structure": "Explore, enjoy, focus on why you love cycling"
      }
    ]
  },

  "performance_test_block": {
    "week": 6,
    "focus": "performance_test",
    "description": "Testing and assessment week to measure training adaptations",
    "activities": [
      {
        "day": "monday",
        "type": "hyrox_station",
        "name": "Power Assessment",
        "focus": "burpee-broad jump + skierg",
        "format": "4 rounds",
        "duration": "35min",
        "structure": "4 rounds for time: 10 burpee broad jumps + 250m ski erg"
      },
      {
        "day": "tuesday",
        "type": "cycling",
        "name": "FTP Test",
        "goal": "threshold test",
        "format": "20-min FTP test or ramp test",
        "duration": "60min",
        "coach_reference": "TrainerRoad or Zwift",
        "structure": "WU: 20min + 20min all-out test + CD: 15min",
        "notes": "This determines new training zones"
      },
      {
        "day": "wednesday", 
        "type": "strength",
        "name": "Strength Assessment",
        "exercises": ["back_squats", "chin_ups", "overhead_press"],
        "intensity": "moderate-heavy",
        "duration": "50min",
        "coach_reference": "Fergus Crawley - T3 split",
        "structure": "Work up to 3-5RM on main lifts"
      },
      {
        "day": "thursday",
        "type": "rest_mobility",
        "name": "Recovery Day",
        "notes": "light walking/stretching",
        "duration": "20-30min",
        "activities": ["gentle_walk", "full_body_stretch"]
      },
      {
        "day": "friday",
        "type": "hyrox_sim",
        "name": "Full Race Simulation",
        "stations": ["full simulation", "60min cap"],
        "coach_reference": "HYROX Race Prep Plan",
        "structure": "Complete HYROX simulation with all 8 stations",
        "notes": "Race pace effort, practice transitions"
      },
      {
        "day": "saturday",
        "type": "cross_training",
        "name": "Active Recovery",
        "format": "swim or elliptical + mobility",
        "duration": "40min",
        "structure": "20min easy cardio + 20min mobility work"
      },
      {
        "day": "sunday",
        "type": "cycling", 
        "name": "Recovery Ride",
        "goal": "recovery ride",
        "duration": "45min",
        "notes": "zone 1 only",
        "structure": "Easy spinning to flush legs after testing week"
      }
    ]
  }
};

// Coach Reference Database
export const COACH_REFERENCES = {
  "TrainerRoad": {
    "specialty": "Structured cycling training",
    "methodology": "Power-based periodization",
    "famous_workouts": ["Sweet Spot Base", "VO2 Max", "Threshold"],
    "website": "trainerroad.com"
  },
  "Sufferfest": {
    "specialty": "High-intensity cycling training", 
    "methodology": "4DP (Four Dimensional Power)",
    "famous_workouts": ["The Wretched", "Half Monty", "Full Frontal"],
    "website": "thesufferfest.com"
  },
  "Fergus Crawley": {
    "specialty": "Hybrid athlete training",
    "methodology": "Concurrent training for endurance + strength",
    "famous_programs": ["Hybrid Athlete", "Concurrent Training"],
    "website": "ferguscrawley.com"
  },
  "HYROX": {
    "specialty": "Functional fitness racing",
    "methodology": "Sport-specific preparation",
    "famous_workouts": ["PFT", "Race Simulation", "Station Training"],
    "website": "hyrox.com"
  },
  "GCN": {
    "specialty": "Cycling education and training",
    "methodology": "Practical cycling improvement",
    "famous_content": ["Hill Repeats", "Recovery Protocols", "Climbing Techniques"],
    "website": "globalcyclingnetwork.com"
  },
  "FasCat": {
    "specialty": "Cycling coaching and periodization",
    "methodology": "Sweet Spot training and periodization",
    "famous_workouts": ["Foundation Ride + Spice", "Aerobic Base"],
    "website": "fascatcoaching.com"
  }
};

// Training Block Progression Rules
export const BLOCK_PROGRESSION = {
  "base_to_build": {
    "volume_change": "+15%",
    "intensity_change": "+20%", 
    "focus_shift": "endurance → threshold"
  },
  "build_to_peak": {
    "volume_change": "-10%",
    "intensity_change": "+15%",
    "focus_shift": "threshold → race_specific"
  },
  "peak_to_deload": {
    "volume_change": "-40%",
    "intensity_change": "-30%",
    "focus_shift": "performance → recovery"
  },
  "deload_to_test": {
    "volume_change": "+10%",
    "intensity_change": "+25%",
    "focus_shift": "recovery → assessment"
  }
}; 