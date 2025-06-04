// Sample Workout Data Structures - Examples of how AI would generate workouts for each sport type

export const sampleWorkoutData = {
  // HYROX TRAINING EXAMPLE
  hyrox: {
    id: 1,
    day: "Monday",
    type: "hyrox",
    title: "HYROX Simulation Workout",
    summary: "Full 8-station simulation with running intervals",
    intensity: 85,
    completed: false,
    details: {
      workout_type: "Race Simulation",
      time_cap: 75,
      movements: [
        { name: "1km Run", station: 1 },
        { name: "SkiErg", reps: "1000m", station: 2 },
        { name: "1km Run", station: 3 },
        { name: "Sled Push", weight: "Bodyweight + 20kg", distance: "50m", station: 4 },
        { name: "1km Run", station: 5 },
        { name: "Sled Pull", weight: "Bodyweight + 20kg", distance: "50m", station: 6 },
        { name: "1km Run", station: 7 },
        { name: "Burpee Broad Jumps", reps: 80, station: 8 },
        { name: "1km Run", station: 9 },
        { name: "Rowing", distance: "1000m", station: 10 },
        { name: "1km Run", station: 11 },
        { name: "Farmers Carry", weight: "24kg each hand", distance: "200m", station: 12 },
        { name: "1km Run", station: 13 },
        { name: "Sandbag Lunges", weight: "20kg", reps: 100, station: 14 },
        { name: "1km Run", station: 15 },
        { name: "Wall Balls", weight: "9kg", reps: 75, station: 16 }
      ],
      score_type: "Time to complete all 8 stations + running",
      notes: "Focus on steady pacing and efficient transitions. Practice race nutrition strategy."
    }
  },

  // CROSSFIT WOD EXAMPLE
  crossfit: {
    id: 2,
    day: "Tuesday", 
    type: "crossfit",
    title: "Murph (Memorial WOD)",
    summary: "1 mile run, 100 pull-ups, 200 push-ups, 300 squats, 1 mile run",
    intensity: 90,
    completed: false,
    details: {
      workout_type: "Hero WOD",
      time_cap: 45,
      movements: [
        { name: "Run", distance: "1 mile" },
        { name: "Pull-ups", reps: 100 },
        { name: "Push-ups", reps: 200 },
        { name: "Air Squats", reps: 300 },
        { name: "Run", distance: "1 mile" }
      ],
      score_type: "Time to complete",
      scaling: "Partition middle movements as needed (20-5-40-10, etc.)",
      notes: "Wear a weighted vest if you have one. Honor Lt. Michael Murphy."
    }
  },

  // KETTLEBELL TRAINING EXAMPLE
  kettlebell: {
    id: 3,
    day: "Wednesday",
    type: "kettlebell",
    title: "Simple & Sinister Protocol",
    summary: "Classic Pavel Tsatsouline protocol - swings and get-ups",
    intensity: 75,
    completed: false,
    details: {
      weight_kg: 24,
      total_time: 30,
      exercises: [
        { name: "Two-Hand Swings", reps: 100, sets: 10, rest_sec: 60 },
        { name: "Turkish Get-ups", reps: 10, sets: "5 each side", rest_sec: 90 }
      ],
      progression: "Build to 24kg for men, 16kg for women",
      notes: "Focus on hip hinge pattern and breathing. Quality over speed."
    }
  },

  // POWERLIFTING EXAMPLE  
  powerlifting: {
    id: 4,
    day: "Thursday",
    type: "powerlifting", 
    title: "Squat Focus Day",
    summary: "Heavy back squat with accessory work",
    intensity: 85,
    completed: false,
    details: {
      exercises: [
        { 
          id: 1,
          name: "Back Squat", 
          sets: 5, 
          reps: 3, 
          weight_kg: 140, 
          percentage_1rm: 85,
          rest_sec: 180,
          completed: false,
          notes: "Focus on depth and drive through heels"
        },
        { 
          id: 2,
          name: "Front Squat", 
          sets: 4, 
          reps: 6, 
          weight_kg: 80,
          percentage_1rm: 65, 
          rest_sec: 120,
          completed: false,
          notes: "Maintain upright torso"
        },
        { 
          id: 3,
          name: "Bulgarian Split Squats", 
          sets: 3, 
          reps: 12, 
          weight_kg: 20,
          rest_sec: 90,
          completed: false,
          notes: "Each leg, focus on balance"
        },
        { 
          id: 4,
          name: "Leg Press", 
          sets: 3, 
          reps: 15, 
          weight_kg: 200,
          rest_sec: 90,
          completed: false,
          notes: "Full range of motion"
        }
      ],
      program_week: 4,
      program_phase: "Strength Block"
    }
  },

  // MARATHON TRAINING EXAMPLE
  marathon: {
    id: 5,
    day: "Saturday",
    type: "marathon",
    title: "Long Run - Marathon Pace Practice",
    summary: "20km with 10km at marathon pace",
    intensity: 70,
    completed: false,
    details: {
      distance_km: 20,
      duration_min: 105,
      pace_target: "5:15/km average",
      intervals: "5km easy, 10km at marathon pace (4:45/km), 5km easy",
      elevation_gain: 150,
      route_notes: "Start easy for first 5K, settle into MP for middle 10K, cool down easy for final 5K",
      nutrition: "Practice race nutrition - gel at 10K mark",
      hydration: "Water stations every 5K"
    }
  },

  // SWIMMING TECHNIQUE EXAMPLE
  swimming: {
    id: 6,
    day: "Monday",
    type: "swimming",
    title: "Freestyle Technique Session", 
    summary: "2000m focusing on stroke mechanics",
    intensity: 65,
    completed: false,
    details: {
      distance_m: 2000,
      stroke: "freestyle",
      intervals: "4x500m",
      rest_intervals: "1:00 between sets",
      pace_target: "1:45/100m",
      drill_focus: [
        "Catch-up drill - 50m x 4",
        "Single arm freestyle - 25m each arm x 4", 
        "Fist drill - 50m x 2",
        "High elbow sculling - 25m x 4"
      ],
      main_set: "4x500m freestyle @ 80% effort",
      cool_down: "200m easy backstroke"
    }
  },

  // BOXING TRAINING EXAMPLE
  boxing: {
    id: 7,
    day: "Tuesday",
    type: "boxing",
    title: "Heavy Bag & Pad Work",
    summary: "Technical striking with conditioning rounds",
    intensity: 80,
    completed: false,
    details: {
      rounds: 8,
      round_duration: 3,
      rest_duration: 60,
      focus_areas: ["Jab-Cross Combination", "Footwork", "Head Movement", "Body Shots"],
      workout_structure: [
        "Round 1-2: Heavy bag - basic combinations",
        "Round 3-4: Pad work with partner - speed and accuracy", 
        "Round 5-6: Heavy bag - power shots and body work",
        "Round 7-8: Pad work - defense and counter-attacks"
      ],
      conditioning: "100 burpees between rounds 4 and 5",
      notes: "Focus on breathing rhythm and keeping hands up"
    }
  },

  // YOGA FLOW EXAMPLE
  vinyasa_yoga: {
    id: 8,
    day: "Wednesday",
    type: "vinyasa_yoga",
    title: "Power Flow Sequence",
    summary: "Dynamic vinyasa connecting breath and movement",
    intensity: 55,
    completed: false,
    details: {
      duration_min: 60,
      style: "Power Vinyasa",
      focus: "Hip Openers & Core Strength",
      temperature: 25,
      sequence_sections: [
        "Sun Salutation A x 5",
        "Sun Salutation B x 5", 
        "Standing sequence - Warrior flows",
        "Hip opening sequence",
        "Core strengthening flow",
        "Seated poses and twists",
        "Savasana"
      ],
      poses: [
        "Downward Dog", "Chaturanga", "Upward Dog", "Warrior I", "Warrior II", 
        "Triangle Pose", "Pigeon Pose", "Boat Pose", "Crow Pose"
      ],
      breathing: "Ujjayi breath throughout practice"
    }
  },

  // HIIT WORKOUT EXAMPLE
  hiit: {
    id: 9,
    day: "Thursday",
    type: "hiit",
    title: "Full Body HIIT Circuit",
    summary: "High-intensity intervals for max calorie burn",
    intensity: 90,
    completed: false,
    details: {
      work_duration: 45,
      rest_duration: 15, 
      cycles: 8,
      total_time: 20,
      exercises: [
        "Burpees",
        "Mountain Climbers", 
        "Jump Squats",
        "Push-ups",
        "High Knees",
        "Plank Jacks",
        "Jumping Lunges",
        "Russian Twists"
      ],
      circuit_structure: "Complete each exercise for 45s work, 15s rest, repeat circuit 4 times",
      notes: "Give maximum effort during work periods, active rest during break"
    }
  },

  // CALISTHENICS EXAMPLE
  calisthenics: {
    id: 10,
    day: "Friday", 
    type: "calisthenics",
    title: "Upper Body Skill Development",
    summary: "Pull-up progressions and handstand practice",
    intensity: 70,
    completed: false,
    details: {
      exercises: [
        {
          id: 1,
          name: "Pull-ups",
          sets: 5,
          reps: 8,
          progression: "Full range",
          rest_sec: 120,
          completed: false,
          notes: "Dead hang start, chest to bar"
        },
        {
          id: 2, 
          name: "Handstand Hold",
          sets: 5,
          hold_duration: 30,
          progression: "Wall-assisted",
          rest_sec: 90,
          completed: false,
          notes: "Focus on straight line from wrists to heels"
        },
        {
          id: 3,
          name: "Dips",
          sets: 4,
          reps: 12, 
          progression: "Parallel bars",
          rest_sec: 90,
          completed: false,
          notes: "Full range, shoulders below elbows"
        },
        {
          id: 4,
          name: "L-Sit",
          sets: 4,
          hold_duration: 15,
          progression: "Tucked knees", 
          rest_sec: 60,
          completed: false,
          notes: "Shoulders depressed, legs together"
        }
      ],
      skill_practice: "Handstand wall walks x 5",
      conditioning: "Max plank hold to finish"
    }
  }
};

// Sample AI Prompts for generating these workout types
export const sampleAIPrompts = {
  hyrox: "Create a HYROX training session that simulates race conditions with all 8 functional movements and running intervals",
  crossfit: "Design a CrossFit WOD that combines gymnastics, weightlifting, and metabolic conditioning in under 20 minutes",
  kettlebell: "Generate a kettlebell workout focusing on the fundamental movements: swing, clean, press, snatch, and turkish get-up",
  powerlifting: "Create a powerlifting session focused on one of the big three lifts with appropriate accessory work and percentages",
  marathon: "Design a long run session for marathon preparation including pace work and fueling strategy",
  boxing: "Create a boxing training session with technical work, conditioning, and proper round structure",
  yoga: "Generate a vinyasa yoga flow that builds heat, incorporates challenging poses, and includes proper warm-up and cool-down",
  climbing: "Design a rock climbing training session that improves finger strength, technique, and endurance",
  spartan: "Create an obstacle race training session with race-specific obstacles and penalty burpees"
};

// Difficulty progression examples
export const difficultyProgressions = {
  beginner: {
    intensity_range: "40-65%",
    duration_range: "20-45 minutes", 
    frequency: "3-4 times per week",
    focus: "Learning movement patterns, building base fitness"
  },
  intermediate: {
    intensity_range: "65-85%", 
    duration_range: "45-75 minutes",
    frequency: "4-6 times per week", 
    focus: "Progressive overload, skill development, periodization"
  },
  advanced: {
    intensity_range: "85-100%",
    duration_range: "60-120+ minutes",
    frequency: "6-8+ times per week",
    focus: "Competition preparation, peak performance, specialized skills"
  }
}; 