// lib/exercises/structured-workouts.ts - Professional Workout Templates

export interface WorkoutStep {
  effort?: string;
  details?: string;
  note?: string;
  sets?: number;
  reps?: number | string;
  rest?: string;
  distance?: string;
  duration?: string;
  interval_distance?: string;
  interval_duration?: string;
  interval_effort?: string;
  recovery?: string;
  recovery_duration?: string;
  rest_between_sets?: string;
  rest_between_reps?: string;
  reps_per_set?: number;
  name?: string; // For exercise names in strength workouts
}

export interface WorkoutPhase {
  phase: string;
  steps: WorkoutStep[];
}

export interface StructuredWorkout {
  id: string;
  title: string;
  type: 'swim' | 'bike' | 'run' | 'brick' | 'strength' | 'recovery';
  source: string;
  sourceUrl?: string;
  duration?: string;
  tss?: number | null;
  intensityFactor?: number | null;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  focus: string;
  description?: string;
  structure: WorkoutPhase[];
  scalingOptions?: {
    duration?: string;
    fatigue?: string;
  };
  metrics?: {
    nm_rating?: number;
    ac_rating?: number;
    map_rating?: number;
    ftp_rating?: number;
  };
}

// The 10 Hour Triathlete Sample Week
export const TEN_HOUR_TRIATHLETE_WORKOUTS: StructuredWorkout[] = [
  {
    id: "10hr-supporting-run-monday",
    title: "Supporting Run - Recovery",
    type: "run",
    source: "The 10 Hour Triathlete",
    duration: "30-50 minutes",
    difficulty: "beginner",
    focus: "This is a very low stress run with the entire focus around maintaining connection between brain and muscle, as well as general resilience.",
    description: "Low stress recovery run for active recovery and movement quality",
    structure: [
      {
        phase: "Main Run",
        steps: [
          {
            duration: "30 to 50 minutes",
            effort: "Very low stress - RPE 2-3",
            details: "Focus on form, posture, and brain-muscle connection",
            note: "No more than Z2 effort, check form every 4 minutes"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Trim as needed, skip if unable to complete",
      fatigue: "If sore muscles from last week, convert to a 30 to 45 minute flush/spin on the bike or 1 to 2 km swim very easy"
    }
  },
  {
    id: "10hr-key-swim-tuesday",
    title: "Key Swim - Progressive Build",
    type: "swim",
    source: "The 10 Hour Triathlete",
    duration: "45-75 minutes",
    difficulty: "intermediate",
    focus: "Progressively building effort swim designed to work on pacing, self-management, and through energy systems.",
    description: "Structured swim session with progressive effort building through energy systems",
    structure: [
      {
        phase: "Warm Up",
        steps: [
          {
            duration: "5-10 minutes",
            effort: "Easy mix of strokes",
            details: "General warm up with stroke variety"
          }
        ]
      },
      {
        phase: "Pre-Main",
        steps: [
          {
            sets: 3,
            details: "Paddles and fins - 50 at 75%, 50 at 85%, 50 at 95% effort",
            rest: "10 seconds between each 50",
            note: "3 to 6 rounds depending on fitness level"
          }
        ]
      },
      {
        phase: "Main Set",
        steps: [
          {
            sets: 9,
            interval_distance: "150 to 250 yards/meters",
            interval_effort: "2@ 65%, 2@ 75%, 2@ 85%, 2@ 95%, then last one best effort",
            rest: "30 seconds between intervals",
            note: "Increase pace/effort progressively - as effort increases, so should pace"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            distance: "200 yards/meters",
            effort: "Easy swimming"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Drop to 6 intervals in main set as: 1 at 65%, 1 at 75%, 1 at 85%, 1 at 95%, 1 at best effort",
      fatigue: "Drop to 6 intervals in main set and only build to 85%"
    }
  },
  {
    id: "10hr-supporting-run-tuesday",
    title: "Supporting Run - Form Focus",
    type: "run",
    source: "The 10 Hour Triathlete",
    duration: "40 minutes",
    difficulty: "beginner",
    focus: "This run is low stress and smooth with focus on running form and technique.",
    description: "Low stress run with regular form checks and technique focus",
    structure: [
      {
        phase: "Warm Up",
        steps: [
          {
            duration: "10 minutes",
            effort: "Easy - RPE 2-3",
            details: "Add dynamic warm up if possible"
          }
        ]
      },
      {
        phase: "Main Run",
        steps: [
          {
            duration: "30-50 minutes",
            effort: "Low stress - No more than Z2 effort",
            details: "Every 4th minute check in on form, posture etc.",
            note: "Focus on smooth, efficient running"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Simple scale of duration as needed",
      fatigue: "Trim duration or skip if needed"
    }
  },
  {
    id: "10hr-key-bike-brick-saturday",
    title: "Key Bike + Brick Run",
    type: "brick",
    source: "The 10 Hour Triathlete",
    duration: "2-3.5 hours",
    difficulty: "advanced",
    focus: "Race specific session with building run off the bike. Key and focused session, with good opportunity to integrate some end of range pedaling and specific race hydration and fueling.",
    description: "Ironman-specific bike session with varied cadence work followed by progressive brick run",
    structure: [
      {
        phase: "Bike Warm Up",
        steps: [
          {
            duration: "30 to 45 minutes",
            effort: "Smooth endurance pace"
          }
        ]
      },
      {
        phase: "Bike Pre-Main",
        steps: [
          {
            duration: "6 minutes",
            effort: "Build by 1.5 min to Z4 to open the engine"
          }
        ]
      },
      {
        phase: "Bike Main Set",
        steps: [
          {
            details: "15 min at Ironman effort",
            effort: "Ironman race pace"
          },
          {
            details: "5 min spin recovery",
            effort: "Easy spinning"
          },
          {
            details: "5 min very strong at 50 RPM",
            effort: "High force, low cadence"
          },
          {
            details: "5 min spin recovery",
            effort: "Easy spinning"
          },
          {
            details: "5 min very strong at 60 RPM",
            effort: "High force, moderate cadence"
          },
          {
            details: "5 min spin recovery",
            effort: "Easy spinning"
          },
          {
            details: "5 min very strong at 70 RPM",
            effort: "High force, higher cadence"
          },
          {
            details: "5 min spin recovery",
            effort: "Easy spinning"
          },
          {
            details: "5 min very strong at 60 RPM",
            effort: "High force, moderate cadence"
          },
          {
            details: "5 min spin recovery",
            effort: "Easy spinning"
          },
          {
            details: "5 min very strong at 50 RPM",
            effort: "High force, low cadence"
          },
          {
            details: "5 min spin recovery",
            effort: "Easy spinning"
          },
          {
            details: "15 min at Ironman effort",
            effort: "Ironman race pace"
          }
        ]
      },
      {
        phase: "Brick Run",
        steps: [
          {
            duration: "40 minutes total",
            details: "10 min ramp to 10-30 sec per mile faster than Ironman, 10 min at above Ironman, 20 minutes at Ironman effort",
            note: "Practice race-specific pacing and nutrition"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Trim warm up and shift the main set to: 3 x 5 min very strong at 50-65-50 RPM. Book-end with 10 min Ironman effort. Run off: 5-10-10 as the same pattern",
      fatigue: "Transition to a feel-good endurance ride. Run off optional - and decided as you finish the bike"
    }
  }
];

// Yoga, Meditation & Breathing Workouts
export const YOGA_MEDITATION_WORKOUTS: StructuredWorkout[] = [
  {
    id: "abs-obliques-yoga",
    title: "Abs & Obliques",
    type: "recovery",
    source: "Yoga Studio",
    duration: "14:31",
    difficulty: "intermediate",
    focus: "This challenging core stability workout is designed to strengthen the abs, obliques, and lower back. It engages all three planes of motion—sagittal (planks), frontal (side planks), and transverse (poses with rotation)—to achieve maximum core strength and stability.",
    description: "Core stability workout engaging all three planes of motion for maximum strength and stability. Excellent for morning practice or standalone session.",
    structure: [
      {
        phase: "Core Stability Session",
        steps: [
          {
            name: "Plank",
            details: "Hold plank position focusing on core engagement"
          },
          {
            name: "Locust",
            details: "Strengthen lower back and posterior chain"
          },
          {
            name: "Spider Planks",
            details: "Dynamic plank variation for oblique activation"
          },
          {
            name: "Child's Pose",
            details: "Recovery and spinal decompression"
          },
          {
            name: "Side Plank Variations",
            details: "Lateral core strengthening in frontal plane"
          },
          {
            name: "Boat Variations",
            details: "Deep abdominal strengthening"
          },
          {
            name: "Leg Raises",
            details: "Lower abdominal focus"
          },
          {
            name: "Reclining Spinal Twist",
            details: "Transverse plane rotation and recovery"
          }
        ]
      }
    ]
  },
  {
    id: "balance-mobility-yoga",
    title: "Balance & Mobility",
    type: "recovery",
    source: "Yoga Studio",
    duration: "14:31",
    difficulty: "intermediate",
    focus: "This balance sequence is excellent for training balance and proprioception, while also improving overall mobility, particularly in the spine and hips. It provides a challenging workout for the quads and glutes.",
    description: "Balance and proprioception training with mobility focus, particularly for spine and hips. Great for morning practice or pre-workout preparation.",
    structure: [
      {
        phase: "Balance & Mobility Flow",
        steps: [
          {
            name: "Mountain",
            details: "Foundational standing pose for alignment"
          },
          {
            name: "Half Sun Salutations",
            details: "Dynamic warm-up sequence"
          },
          {
            name: "High Lunge with Chest Opener",
            details: "Hip flexor stretch with thoracic extension"
          },
          {
            name: "Flying Lunge",
            details: "Dynamic balance challenge"
          },
          {
            name: "Warrior 3 with Chest Opener",
            details: "Single-leg balance with posterior chain strengthening"
          },
          {
            name: "Chair Pose Twists",
            details: "Quad strengthening with spinal rotation"
          },
          {
            name: "Revolved Side Angle",
            details: "Complex balance with deep twist"
          },
          {
            name: "Awkward Pose",
            details: "Challenging quad and glute strengthening"
          },
          {
            name: "Final Resting Pose",
            details: "Integration and relaxation"
          }
        ]
      }
    ]
  },
  {
    id: "body-scan-meditation",
    title: "Body Scan",
    type: "recovery",
    source: "Meditation Studio",
    duration: "14:30",
    difficulty: "beginner",
    focus: "This body scan meditation is designed to transition the body from the sympathetic to the parasympathetic nervous system response. Perfect for post-workout cool-down or pre-sleep relaxation.",
    description: "Body scan meditation to activate parasympathetic nervous system. Ideal for post-workout recovery or sleep preparation.",
    structure: [
      {
        phase: "Meditation Session",
        steps: [
          {
            name: "Final Resting Pose",
            duration: "14:30",
            details: "Systematic body scan from head to toe",
            note: "Focus on releasing tension and activating rest-and-digest response"
          }
        ]
      }
    ]
  },
  {
    id: "diaphragmatic-breathing",
    title: "Breathing More Deeply",
    type: "recovery",
    source: "Breathing Studio",
    duration: "3:05",
    difficulty: "beginner",
    focus: "Diaphragmatic Breathing is a calming exercise that encourages you to breathe deeply into your abdomen. This can help improve your ability to take in oxygen and help you stay calm and focused when the pressure is on.",
    description: "Diaphragmatic breathing technique for improved oxygen uptake and stress management.",
    structure: [
      {
        phase: "Breathing Exercise",
        steps: [
          {
            name: "Diaphragmatic Breathing",
            duration: "3:05",
            details: "Deep abdominal breathing focusing on diaphragm engagement",
            note: "Breathe slowly and deeply, expanding the belly on inhale"
          }
        ]
      }
    ]
  },
  {
    id: "three-part-breath",
    title: "Breathing to Calm Down I",
    type: "recovery",
    source: "Breathing Studio",
    duration: "3:04",
    difficulty: "beginner",
    focus: "3-Part Breath is a therapeutic breathing technique that encourages you to use your full lung capacity. This can help improve your ability to take in oxygen and help you stay calm and focused when the pressure is on.",
    description: "Three-part breathing technique utilizing full lung capacity for enhanced oxygen uptake and stress reduction.",
    structure: [
      {
        phase: "Breathing Exercise",
        steps: [
          {
            name: "3-Part Breath",
            duration: "3:04",
            details: "Sequential breathing: belly, ribs, chest",
            note: "Fill lungs in three stages: abdomen, ribcage, upper chest"
          }
        ]
      }
    ]
  },
  {
    id: "four-seven-eight-breath",
    title: "Breathing to Calm Down II",
    type: "recovery",
    source: "Breathing Studio",
    duration: "3:05",
    difficulty: "beginner",
    focus: "In 4-7-8 Breath your exhalations are twice as long as your inhalations. It's a therapeutic breathing technique that can help to reduce discomfort and calm your nervous system, especially when you're under pressure.",
    description: "4-7-8 breathing pattern for nervous system regulation and stress relief.",
    structure: [
      {
        phase: "Breathing Exercise",
        steps: [
          {
            name: "4-7-8 Breath",
            duration: "3:05",
            details: "Inhale for 4, hold for 7, exhale for 8",
            note: "Extended exhalation activates parasympathetic nervous system"
          }
        ]
      }
    ]
  },
  {
    id: "chest-shoulder-strength-yoga",
    title: "Chest & Shoulder Strength",
    type: "strength",
    source: "Yoga Studio",
    duration: "14:30",
    difficulty: "intermediate",
    focus: "This yoga sequence is designed to strengthen the upper body, targeting the shoulders, chest, triceps, and core. It's an ideal routine to practice in the morning or before a workout to activate muscles throughout the body.",
    description: "Upper body strengthening yoga sequence targeting shoulders, chest, triceps, and core. Perfect for morning activation or pre-workout preparation.",
    structure: [
      {
        phase: "Upper Body Strength Flow",
        steps: [
          {
            name: "Mountain",
            details: "Foundational standing alignment"
          },
          {
            name: "Half Sun Salutations",
            details: "Dynamic warm-up with shoulder activation"
          },
          {
            name: "Triceps Push-Ups",
            details: "Narrow-grip push-ups for tricep focus"
          },
          {
            name: "Plank",
            details: "Core and shoulder stabilization"
          },
          {
            name: "Child",
            details: "Active recovery and shoulder stretch"
          },
          {
            name: "Downward Dog",
            details: "Shoulder strengthening and hamstring stretch"
          },
          {
            name: "Puppy",
            details: "Shoulder and chest opening"
          },
          {
            name: "Chest Stretch",
            details: "Pectoral muscle lengthening"
          },
          {
            name: "Triceps Stretch",
            details: "Tricep muscle lengthening"
          },
          {
            name: "Final Resting Pose",
            details: "Integration and relaxation"
          }
        ]
      }
    ]
  }
];

// Wahoo Fitness Running Workouts
export const WAHOO_RUNNING_WORKOUTS: StructuredWorkout[] = [
  {
    id: "wahoo-easy-2mile",
    title: "Easy 2 Mile",
    type: "run",
    source: "Wahoo Fitness",
    sourceUrl: "https://systm.wahoofitness.com/content-details/s80CmjiovZ",
    duration: "20:00",
    difficulty: "beginner",
    focus: "Steady and consistent easy running for aerobic base building",
    description: "For help understanding your run workout and calculating your pace zones, please see this article. Learn how to perform your Running Drills here.",
    structure: [
      {
        phase: "Run",
        steps: [
          {
            effort: "Intensity: RPE 2-4",
            details: "Use an app or map to create a 2 mile loop or out & back route. Run at a pace that you can maintain for the entire distance.",
            note: "Steady and consistent is the key, no pressure to run fast. Enjoy the relaxed pace."
          }
        ]
      }
    ]
  },
  {
    id: "wahoo-4x1200",
    title: "4 x 1200m Intervals",
    type: "run",
    source: "Wahoo Fitness",
    sourceUrl: "https://systm.wahoofitness.com/content-details/PfeGdoDelx",
    tss: 68,
    intensityFactor: 0.9,
    difficulty: "advanced",
    focus: "High-intensity interval training for VO2 max development",
    description: "This workout can be completed in the Wahoo App. If you prefer, you can write this running workout down to follow it.",
    structure: [
      {
        phase: "Warm up",
        steps: [
          {
            effort: "10 minutes @ RPE 2-4 (Z1-Z2)"
          }
        ]
      },
      {
        phase: "Activation",
        steps: [
          {
            sets: 3,
            rest: "30s between sets",
            details: "10-second accelerations",
            effort: "Build from 145% of RTP to 100% RTP (Z2-Z4b)"
          }
        ]
      },
      {
        phase: "Main Effort",
        steps: [
          {
            sets: 4,
            rest_between_sets: "4 minutes",
            interval_distance: "1200m",
            interval_effort: "RPE 9-10 -- <85% of RTP -- HR NA (Z5)",
            recovery: "RPE 1-2 --> 145% RTP -- HR <70% (Z1)"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            effort: "5-10 minutes @ RPE 2 --> 145% of RTP -- <70% of RTHR (Z1)"
          }
        ]
      }
    ],
    metrics: {
      nm_rating: 2,
      ac_rating: 3,
      map_rating: 5,
      ftp_rating: 4
    }
  },
  {
    id: "wahoo-4x1k-kicking",
    title: "4 x 1K Kicking",
    type: "run",
    source: "Wahoo Fitness",
    sourceUrl: "https://systm.wahoofitness.com/content-details/EyNWnvuizw",
    tss: 68,
    intensityFactor: 0.95,
    difficulty: "advanced",
    focus: "Mixed pace intervals with strong finishing kick",
    description: "This workout can be completed in the Wahoo App. If you prefer, you can write this running workout down to follow it.",
    structure: [
      {
        phase: "Warm Up",
        steps: [
          {
            effort: "10 minutes @ RPE 1-2 -- 145-120% of RTP -- HR <70-87% (Z1-Z2)"
          }
        ]
      },
      {
        phase: "Activation 1",
        steps: [
          {
            sets: 3,
            rest: "30s between sets",
            distance: "75m sprint",
            effort: "RPE 10 -- <85% of RTP -- HR NA (Z6)",
            recovery: "RPE <2 --> 145% of RTP -- HR <70% (Z1)"
          }
        ]
      },
      {
        phase: "Main Effort",
        steps: [
          {
            sets: 4,
            rest_between_sets: "3 minutes",
            interval_distance: "1K",
            interval_effort: "900m @ RPE 5-6 -- 120-110% of RTP -- HR 87-95% (Z3) Final 100m @ RPE 10 -- <85% of RTP -- HR 105% (Z6)",
            recovery: "RPE 1-2 -- <145% of RTP -- HR <70% (Z1)",
            note: "Pace it so that you are increasing your speed for the last 100m and not slowing at the end."
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            effort: "5-10 minutes @ RPE 2 -- 145% of RTP -- HR <70% (Z1)"
          }
        ]
      }
    ],
    metrics: {
      nm_rating: 3,
      ac_rating: 4,
      map_rating: 5,
      ftp_rating: 5
    }
  },
  {
    id: "wahoo-4x5-threshold",
    title: "4 x 5min Threshold",
    type: "run",
    source: "Wahoo Fitness",
    sourceUrl: "https://systm.wahoofitness.com/content-details/MDFEjfEEwJ",
    duration: "52:00",
    difficulty: "intermediate",
    focus: "Threshold pace development and lactate clearance",
    description: "Be very careful when executing this session! Your desire to suffer is strong and the short duration of these intervals will tempt you to push the intensity over your threshold target on this workout.",
    structure: [
      {
        phase: "Warmup",
        steps: [
          {
            effort: "10 minutes @ RPE 2-3 -- 145% of RTP -- HR <70% (Z1-2)"
          }
        ]
      },
      {
        phase: "Activation",
        steps: [
          {
            effort: "2 x 100m accelerations with 1 minute recovery (jog or walk back to start) in between"
          }
        ]
      },
      {
        phase: "Main Effort",
        steps: [
          {
            sets: 4,
            interval_duration: "5 minutes",
            interval_effort: "10k pace (RPE 6.5-7 -- 100-110% of RTP -- HR 95-100%) (Z4a)",
            recovery_duration: "3 minutes @ RPE 2-4 -- 120-145% of RTP -- HR 70-87% (Z2)",
            note: "When you can no longer keep the pace, the workout is over."
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            effort: "3-5 minutes @ RPE 2-3 -- 145% of RTP -- HR <70% (Z1-2)"
          }
        ]
      }
    ]
  },
  {
    id: "wahoo-3x1k-increasing",
    title: "3 x 1K Increasing",
    type: "run",
    source: "Wahoo Fitness",
    sourceUrl: "https://systm.wahoofitness.com/content-details/3vGwHzxGHy",
    duration: "45:00",
    difficulty: "intermediate",
    focus: "Negative split pacing strategy development",
    description: "If you drill into the pacing strategies of any endurance competitor, you quickly learn that the negative split is the fastest way to complete a course. A negative split is where your pace is higher during the second half of the course; we'll work on that pacing strategy today.",
    structure: [
      {
        phase: "Warm-Up",
        steps: [
          {
            effort: "10 minutes @ RPE 2-4 -- 145-120% of RTP -- HR 70-87% (Z2)"
          }
        ]
      },
      {
        phase: "Activation 1: Drills",
        steps: [
          {
            sets: 2,
            rest: "30 sec between sets",
            distance: "25m each",
            details: "Drills of choice: butt kicks, high knees, builds, strides"
          }
        ]
      },
      {
        phase: "Activation 2: 150m Accelerations",
        steps: [
          {
            sets: 3,
            rest: "30 sec between sets",
            effort: "110-100% RTP (Z4a)"
          }
        ]
      },
      {
        phase: "Main Effort",
        steps: [
          {
            sets: 3,
            rest_between_sets: "3 minutes",
            interval_distance: "1K",
            interval_effort: "Begin @ RPE 5-6 -- 120-110% of RTP -- HR 87-95% (Z3). Steadily increase to RPE 7.5 over the entire distance -- 100-92% of RTP -- HR 100-105% (Z4a)",
            note: "Strive to achieve the same pace across all three efforts."
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            effort: "5-10 minutes @ RPE 2 -- 145% of RTP -- HR <70% (Z1)"
          }
        ]
      }
    ]
  }
];

// Additional Yoga, Meditation & Breathing Workouts (continued)
const ADDITIONAL_YOGA_MEDITATION_WORKOUTS: StructuredWorkout[] = [
  {
    id: "abs-obliques-yoga-duplicate",
    title: "Abs & Obliques",
    type: "recovery",
    source: "Yoga Studio",
    duration: "14:31",
    difficulty: "intermediate",
    focus: "This challenging core stability workout is designed to strengthen the abs, obliques, and lower back. It engages all three planes of motion—sagittal (planks), frontal (side planks), and transverse (poses with rotation)—to achieve maximum core strength and stability.",
    description: "Core stability workout engaging all three planes of motion for maximum strength and stability. Excellent for morning practice or standalone session.",
    structure: [
      {
        phase: "Core Stability Session",
        steps: [
          {
            name: "Plank",
            details: "Hold plank position focusing on core engagement"
          },
          {
            name: "Locust",
            details: "Strengthen lower back and posterior chain"
          },
          {
            name: "Spider Planks",
            details: "Dynamic plank variation for oblique activation"
          },
          {
            name: "Child's Pose",
            details: "Recovery and spinal decompression"
          },
          {
            name: "Side Plank Variations",
            details: "Lateral core strengthening in frontal plane"
          },
          {
            name: "Boat Variations",
            details: "Deep abdominal strengthening"
          },
          {
            name: "Leg Raises",
            details: "Lower abdominal focus"
          },
          {
            name: "Reclining Spinal Twist",
            details: "Transverse plane rotation and recovery"
          }
        ]
      }
    ]
  },
  {
    id: "balance-mobility-yoga",
    title: "Balance & Mobility",
    type: "recovery",
    source: "Yoga Studio",
    duration: "14:31",
    difficulty: "intermediate",
    focus: "This balance sequence is excellent for training balance and proprioception, while also improving overall mobility, particularly in the spine and hips. It provides a challenging workout for the quads and glutes.",
    description: "Balance and proprioception training with mobility focus, particularly for spine and hips. Great for morning practice or pre-workout preparation.",
    structure: [
      {
        phase: "Balance & Mobility Flow",
        steps: [
          {
            name: "Mountain",
            details: "Foundational standing pose for alignment"
          },
          {
            name: "Half Sun Salutations",
            details: "Dynamic warm-up sequence"
          },
          {
            name: "High Lunge with Chest Opener",
            details: "Hip flexor stretch with thoracic extension"
          },
          {
            name: "Flying Lunge",
            details: "Dynamic balance challenge"
          },
          {
            name: "Warrior 3 with Chest Opener",
            details: "Single-leg balance with posterior chain strengthening"
          },
          {
            name: "Chair Pose Twists",
            details: "Quad strengthening with spinal rotation"
          },
          {
            name: "Revolved Side Angle",
            details: "Complex balance with deep twist"
          },
          {
            name: "Awkward Pose",
            details: "Challenging quad and glute strengthening"
          },
          {
            name: "Final Resting Pose",
            details: "Integration and relaxation"
          }
        ]
      }
    ]
  },
  {
    id: "body-scan-meditation",
    title: "Body Scan",
    type: "recovery",
    source: "Meditation Studio",
    duration: "14:30",
    difficulty: "beginner",
    focus: "This body scan meditation is designed to transition the body from the sympathetic to the parasympathetic nervous system response. Perfect for post-workout cool-down or pre-sleep relaxation.",
    description: "Body scan meditation to activate parasympathetic nervous system. Ideal for post-workout recovery or sleep preparation.",
    structure: [
      {
        phase: "Meditation Session",
        steps: [
          {
            name: "Final Resting Pose",
            duration: "14:30",
            details: "Systematic body scan from head to toe",
            note: "Focus on releasing tension and activating rest-and-digest response"
          }
        ]
      }
    ]
  },
  {
    id: "diaphragmatic-breathing",
    title: "Breathing More Deeply",
    type: "recovery",
    source: "Breathing Studio",
    duration: "3:05",
    difficulty: "beginner",
    focus: "Diaphragmatic Breathing is a calming exercise that encourages you to breathe deeply into your abdomen. This can help improve your ability to take in oxygen and help you stay calm and focused when the pressure is on.",
    description: "Diaphragmatic breathing technique for improved oxygen uptake and stress management.",
    structure: [
      {
        phase: "Breathing Exercise",
        steps: [
          {
            name: "Diaphragmatic Breathing",
            duration: "3:05",
            details: "Deep abdominal breathing focusing on diaphragm engagement",
            note: "Breathe slowly and deeply, expanding the belly on inhale"
          }
        ]
      }
    ]
  },
  {
    id: "three-part-breath",
    title: "Breathing to Calm Down I",
    type: "recovery",
    source: "Breathing Studio",
    duration: "3:04",
    difficulty: "beginner",
    focus: "3-Part Breath is a therapeutic breathing technique that encourages you to use your full lung capacity. This can help improve your ability to take in oxygen and help you stay calm and focused when the pressure is on.",
    description: "Three-part breathing technique utilizing full lung capacity for enhanced oxygen uptake and stress reduction.",
    structure: [
      {
        phase: "Breathing Exercise",
        steps: [
          {
            name: "3-Part Breath",
            duration: "3:04",
            details: "Sequential breathing: belly, ribs, chest",
            note: "Fill lungs in three stages: abdomen, ribcage, upper chest"
          }
        ]
      }
    ]
  },
  {
    id: "four-seven-eight-breath",
    title: "Breathing to Calm Down II",
    type: "recovery",
    source: "Breathing Studio",
    duration: "3:05",
    difficulty: "beginner",
    focus: "In 4-7-8 Breath your exhalations are twice as long as your inhalations. It's a therapeutic breathing technique that can help to reduce discomfort and calm your nervous system, especially when you're under pressure.",
    description: "4-7-8 breathing pattern for nervous system regulation and stress relief.",
    structure: [
      {
        phase: "Breathing Exercise",
        steps: [
          {
            name: "4-7-8 Breath",
            duration: "3:05",
            details: "Inhale for 4, hold for 7, exhale for 8",
            note: "Extended exhalation activates parasympathetic nervous system"
          }
        ]
      }
    ]
  },
  {
    id: "chest-shoulder-strength-yoga",
    title: "Chest & Shoulder Strength",
    type: "strength",
    source: "Yoga Studio",
    duration: "14:30",
    difficulty: "intermediate",
    focus: "This yoga sequence is designed to strengthen the upper body, targeting the shoulders, chest, triceps, and core. It's an ideal routine to practice in the morning or before a workout to activate muscles throughout the body.",
    description: "Upper body strengthening yoga sequence targeting shoulders, chest, triceps, and core. Perfect for morning activation or pre-workout preparation.",
    structure: [
      {
        phase: "Upper Body Strength Flow",
        steps: [
          {
            name: "Mountain",
            details: "Foundational standing alignment"
          },
          {
            name: "Half Sun Salutations",
            details: "Dynamic warm-up with shoulder activation"
          },
          {
            name: "Triceps Push-Ups",
            details: "Narrow-grip push-ups for tricep focus"
          },
          {
            name: "Plank",
            details: "Core and shoulder stabilization"
          },
          {
            name: "Child",
            details: "Active recovery and shoulder stretch"
          },
          {
            name: "Downward Dog",
            details: "Shoulder strengthening and hamstring stretch"
          },
          {
            name: "Puppy",
            details: "Shoulder and chest opening"
          },
          {
            name: "Chest Stretch",
            details: "Pectoral muscle lengthening"
          },
          {
            name: "Triceps Stretch",
            details: "Tricep muscle lengthening"
          },
          {
            name: "Final Resting Pose",
            details: "Integration and relaxation"
          }
        ]
      }
    ]
  }
];

// Amateur/Beginner Friendly Workouts
export const AMATEUR_FRIENDLY_WORKOUTS: StructuredWorkout[] = [
  // BEGINNER RUNNING WORKOUTS
  {
    id: "amateur-walk-run-progression",
    title: "Walk-Run Progression",
    type: "run",
    source: "Amateur Training Guide",
    duration: "20-30 minutes",
    difficulty: "beginner",
    focus: "Building running endurance gradually with walk breaks to prevent injury and build confidence",
    description: "Perfect for complete beginners or those returning to running after a break",
    structure: [
      {
        phase: "Warm Up",
        steps: [
          {
            duration: "5 minutes",
            effort: "Easy walk",
            details: "Start with gentle walking to warm up muscles and joints"
          }
        ]
      },
      {
        phase: "Main Session",
        steps: [
          {
            sets: 6,
            details: "Run 1 minute, Walk 2 minutes",
            effort: "Run at conversational pace - you should be able to talk",
            rest: "Walk recovery between runs",
            note: "Focus on form, not speed. Land midfoot, keep cadence around 170-180 steps per minute"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            duration: "5 minutes",
            effort: "Easy walk with gentle stretching",
            details: "Walk slowly and do basic stretches for calves, hamstrings, and hip flexors"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Week 1: 1min run/2min walk x6. Week 2: 2min run/2min walk x5. Week 3: 3min run/2min walk x4",
      fatigue: "If tired, extend walk breaks or reduce running intervals. Listen to your body."
    }
  },
  {
    id: "amateur-easy-30min-run",
    title: "Easy 30-Minute Continuous Run",
    type: "run",
    source: "Amateur Training Guide",
    duration: "30 minutes",
    difficulty: "beginner",
    focus: "Building aerobic base with comfortable continuous running",
    description: "For runners who can run continuously for 20+ minutes and want to build endurance",
    structure: [
      {
        phase: "Warm Up",
        steps: [
          {
            duration: "5 minutes",
            effort: "Very easy walk to gentle jog",
            details: "Gradually increase pace from walk to very easy jog"
          }
        ]
      },
      {
        phase: "Main Run",
        steps: [
          {
            duration: "20 minutes",
            effort: "Conversational pace - RPE 3-4",
            details: "Run at a pace where you can hold a conversation. If you can't talk, slow down!",
            note: "Focus on relaxed breathing, good posture, and enjoying the run"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            duration: "5 minutes",
            effort: "Easy walk with stretching",
            details: "Walk slowly and do basic stretches for calves, hamstrings, and hip flexors"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "If 30 minutes feels too long, start with 20 minutes and add 2-3 minutes each week",
      fatigue: "If feeling tired, take walk breaks as needed. Better to finish feeling good than exhausted"
    }
  },

  // BEGINNER SWIMMING WORKOUTS
  {
    id: "amateur-swim-basics",
    title: "Swimming Basics - Technique Focus",
    type: "swim",
    source: "Amateur Training Guide",
    duration: "30-45 minutes",
    difficulty: "beginner",
    focus: "Learning proper swimming technique with plenty of rest between efforts",
    description: "Perfect for new swimmers or those wanting to improve basic technique",
    structure: [
      {
        phase: "Pool Familiarization",
        steps: [
          {
            duration: "5-10 minutes",
            effort: "Easy movement in water",
            details: "Walking in shallow end, gentle floating, basic movements to get comfortable"
          }
        ]
      },
      {
        phase: "Technique Practice",
        steps: [
          {
            sets: 4,
            distance: "25 meters (1 length)",
            effort: "Focus on technique, not speed",
            rest: "30-60 seconds between lengths",
            details: "Freestyle with focus on: reach forward, rotate body, breathe every 3-5 strokes",
            note: "If you can't complete 25m, stop and rest at the wall, then continue"
          }
        ]
      },
      {
        phase: "Easy Swimming",
        steps: [
          {
            sets: 6,
            distance: "25 meters",
            effort: "Comfortable, sustainable pace",
            rest: "30 seconds between lengths",
            details: "Mix of freestyle and backstroke if comfortable"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            duration: "5 minutes",
            effort: "Easy floating and gentle movement",
            details: "Relax in the water, practice floating, gentle arm movements"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Start with 4 lengths total if new to swimming, gradually increase",
      fatigue: "Take longer rests between lengths. Use kickboard or pool noodle if needed for support"
    }
  },

  // BEGINNER CYCLING WORKOUTS
  {
    id: "amateur-easy-bike-ride",
    title: "Easy Neighborhood Bike Ride",
    type: "bike",
    source: "Amateur Training Guide",
    duration: "30-60 minutes",
    difficulty: "beginner",
    focus: "Building cycling endurance and comfort on the bike with low intensity",
    description: "Perfect for recreational cyclists wanting to build fitness safely",
    structure: [
      {
        phase: "Bike Check & Warm Up",
        steps: [
          {
            duration: "5 minutes",
            effort: "Very easy pedaling",
            details: "Check bike is working properly, start with very gentle pedaling to warm up legs",
            note: "Adjust seat height so leg is almost straight at bottom of pedal stroke"
          }
        ]
      },
      {
        phase: "Main Ride",
        steps: [
          {
            duration: "20-50 minutes",
            effort: "Comfortable pace - you should be able to talk easily",
            details: "Ride on safe, familiar routes. Focus on smooth pedaling and enjoying the ride",
            note: "Aim for 60-80 RPM cadence (pedal revolutions per minute). Shift gears to maintain comfortable effort on hills"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            duration: "5 minutes",
            effort: "Very easy pedaling",
            details: "Slow, easy pedaling to gradually bring heart rate down"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Start with 20-30 minutes, add 5-10 minutes each week as fitness improves",
      fatigue: "Choose flatter routes if feeling tired. Stop and rest as needed."
    }
  },

  // BEGINNER STRENGTH WORKOUTS
  {
    id: "amateur-bodyweight-basics",
    title: "Bodyweight Strength Basics",
    type: "strength",
    source: "Amateur Training Guide",
    duration: "20-30 minutes",
    difficulty: "beginner",
    focus: "Building basic strength using bodyweight exercises with proper form emphasis",
    description: "No equipment needed - perfect for home workouts and building foundation strength",
    structure: [
      {
        phase: "Warm Up",
        steps: [
          {
            duration: "5 minutes",
            effort: "Light movement",
            details: "Arm circles, leg swings, gentle marching in place, basic stretches"
          }
        ]
      },
      {
        phase: "Strength Circuit",
        steps: [
          {
            sets: 2,
            details: "Complete all exercises, then rest 2-3 minutes before next round",
            rest: "30 seconds between exercises, 2-3 minutes between rounds"
          },
          {
            name: "Wall Push-ups",
            reps: "8-12 repetitions",
            details: "Stand arm's length from wall, hands flat against wall, push body toward and away from wall",
            note: "Progress to incline push-ups on stairs, then knee push-ups, then full push-ups"
          },
          {
            name: "Chair-Assisted Squats",
            reps: "8-12 repetitions", 
            details: "Use chair for support, lower down as if sitting, stand back up",
            note: "Focus on sitting back with hips, keeping knees behind toes"
          },
          {
            name: "Modified Plank",
            duration: "15-30 seconds",
            details: "Start on knees and forearms, keep straight line from knees to head",
            note: "Progress to full plank on toes when ready"
          },
          {
            name: "Standing Marching",
            reps: "10 each leg",
            details: "March in place, lifting knees toward chest, use wall for balance if needed"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            duration: "5-10 minutes",
            effort: "Gentle stretching",
            details: "Hold stretches for 20-30 seconds: chest, shoulders, legs, back"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Start with 1 round if new to exercise, progress to 2-3 rounds over several weeks",
      fatigue: "Reduce repetitions or hold times. Focus on good form over quantity"
    }
  },

  // BEGINNER MULTI-SPORT/BRICK
  {
    id: "amateur-bike-walk-brick",
    title: "Easy Bike-Walk Brick",
    type: "brick",
    source: "Amateur Training Guide", 
    duration: "45-60 minutes",
    difficulty: "beginner",
    focus: "Introduction to multi-sport training with gentle bike-to-walk transition",
    description: "Perfect introduction to brick training without the intensity of bike-run",
    structure: [
      {
        phase: "Bike Portion",
        steps: [
          {
            duration: "20-30 minutes",
            effort: "Easy, conversational pace",
            details: "Comfortable bike ride on safe, familiar route",
            note: "Focus on smooth pedaling and enjoying the ride"
          }
        ]
      },
      {
        phase: "Transition",
        steps: [
          {
            duration: "2-3 minutes",
            effort: "Easy transition",
            details: "Safely dismount bike, put on walking shoes if needed, drink water",
            note: "Take your time - this is practice for race transitions"
          }
        ]
      },
      {
        phase: "Walk Portion",
        steps: [
          {
            duration: "15-20 minutes",
            effort: "Brisk walk",
            details: "Walk at a pace that feels slightly challenging but comfortable",
            note: "Notice how your legs feel after cycling - this is normal brick sensation"
          }
        ]
      },
      {
        phase: "Cool Down",
        steps: [
          {
            duration: "5 minutes",
            effort: "Easy walk and stretching",
            details: "Slow walk followed by gentle stretching of legs and back"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Start with 15min bike + 10min walk, gradually increase both portions",
      fatigue: "Reduce either portion if feeling tired. The goal is to finish feeling good"
    }
  },

  // RECOVERY/ACTIVE REST WORKOUTS
  {
    id: "amateur-active-recovery",
    title: "Active Recovery Session",
    type: "recovery",
    source: "Amateur Training Guide",
    duration: "20-30 minutes", 
    difficulty: "beginner",
    focus: "Gentle movement to promote recovery while staying active",
    description: "Perfect for rest days when you want to move but not stress the body",
    structure: [
      {
        phase: "Gentle Movement",
        steps: [
          {
            duration: "10-15 minutes",
            effort: "Very easy",
            details: "Choose one: easy walk, gentle bike ride, easy swimming, or yoga",
            note: "Should feel refreshing, not tiring"
          }
        ]
      },
      {
        phase: "Mobility & Stretching",
        steps: [
          {
            duration: "10-15 minutes",
            effort: "Gentle stretching",
            details: "Focus on areas that feel tight: calves, hamstrings, hips, shoulders, back",
            note: "Hold stretches 20-30 seconds, breathe deeply and relax"
          }
        ]
      }
    ],
    scalingOptions: {
      duration: "Can be as short as 10 minutes or as long as feels good",
      fatigue: "If feeling very tired, focus more on stretching and less on movement"
    }
  }
];

// Combined workout database with amateur workouts
export const ALL_STRUCTURED_WORKOUTS = [
  ...TEN_HOUR_TRIATHLETE_WORKOUTS,
  ...WAHOO_RUNNING_WORKOUTS,
  ...AMATEUR_FRIENDLY_WORKOUTS,
  ...YOGA_MEDITATION_WORKOUTS
];

// Helper functions for workout selection
export const getWorkoutsByType = (type: 'swim' | 'bike' | 'run' | 'brick' | 'strength' | 'recovery') => {
  return ALL_STRUCTURED_WORKOUTS.filter(workout => workout.type === type);
};

export const getWorkoutsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
  return ALL_STRUCTURED_WORKOUTS.filter(workout => workout.difficulty === difficulty);
};

export const getWorkoutsBySource = (source: string) => {
  return ALL_STRUCTURED_WORKOUTS.filter(workout => 
    workout.source.toLowerCase().includes(source.toLowerCase())
  );
};

export const getWorkoutsByDuration = (maxMinutes: number) => {
  return ALL_STRUCTURED_WORKOUTS.filter(workout => {
    if (!workout.duration) return true;
    const duration = workout.duration.toLowerCase();
    if (duration.includes('hour')) {
      const hours = parseFloat(duration.match(/(\d+\.?\d*)/)?.[0] || '0');
      return hours * 60 <= maxMinutes;
    }
    if (duration.includes('min')) {
      const minutes = parseFloat(duration.match(/(\d+)/)?.[0] || '0');
      return minutes <= maxMinutes;
    }
    return true;
  });
};

export const getWorkoutsByTSS = (maxTSS: number) => {
  return ALL_STRUCTURED_WORKOUTS.filter(workout => 
    !workout.tss || workout.tss <= maxTSS
  );
};

// Workout recommendation engine
export interface WorkoutRecommendationCriteria {
  type?: 'swim' | 'bike' | 'run' | 'brick' | 'strength' | 'recovery';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  maxDuration?: number; // in minutes
  maxTSS?: number;
  focus?: string; // keyword search in focus/description
  source?: string;
}

export const recommendWorkouts = (criteria: WorkoutRecommendationCriteria): StructuredWorkout[] => {
  let workouts = ALL_STRUCTURED_WORKOUTS;

  if (criteria.type) {
    workouts = workouts.filter(w => w.type === criteria.type);
  }

  if (criteria.difficulty) {
    workouts = workouts.filter(w => w.difficulty === criteria.difficulty);
  }

  if (criteria.maxDuration) {
    workouts = getWorkoutsByDuration(criteria.maxDuration).filter(w => 
      workouts.includes(w)
    );
  }

  if (criteria.maxTSS) {
    workouts = workouts.filter(w => !w.tss || w.tss <= criteria.maxTSS!);
  }

  if (criteria.focus) {
    workouts = workouts.filter(w => 
      w.focus.toLowerCase().includes(criteria.focus!.toLowerCase()) ||
      w.description?.toLowerCase().includes(criteria.focus!.toLowerCase())
    );
  }

  if (criteria.source) {
    workouts = workouts.filter(w => 
      w.source.toLowerCase().includes(criteria.source!.toLowerCase())
    );
  }

  return workouts;
};