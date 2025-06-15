// lib/exercises/triathlon-strength-conditioning.ts - Phil Mosley's MyProCoach™ Triathlon Guide

export interface TriathlonExercise {
  name: string;
  category: 'strength' | 'flexibility';
  works?: string[];
  stretches?: string[];
  why: string;
  instructions: string[];
  tips?: string[];
  progressions?: string[];
  alternatives?: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  equipment: string[];
  duration?: string;
  reps?: string;
  sets?: string;
}

export const TRIATHLON_STRENGTH_EXERCISES: TriathlonExercise[] = [
  {
    name: "SQUAT",
    category: "strength",
    works: ["Glutes", "hamstrings", "quads"],
    why: "Generates strength, power and stability for pedaling and running.",
    instructions: [
      "Stand with your feet shoulder-width apart and pointing straight ahead, arms at your sides.",
      "Initiating the move with your hips, squat back and down until your thighs are parallel to the floor.",
      "Return to a standing position by pushing through your hips."
    ],
    tips: [
      "Keep your chest up, back flat, and do not let your knees collapse to the inside."
    ],
    progressions: [
      "Add weights",
      "squat jumps"
    ],
    alternatives: [
      "Smith machine",
      "leg press machine",
      "goblet squat"
    ],
    difficulty: "beginner",
    equipment: ["bodyweight"],
    reps: "8-15",
    sets: "2-4"
  },
  {
    name: "SQUAT JUMP",
    category: "strength",
    works: ["Glutes", "hamstrings", "quads"],
    why: "Boosts explosive power, for running and cycling.",
    instructions: [
      "Stand with feet just outside of shoulders.",
      "Sit back and down into squat position, keeping knees behind toes.",
      "Immediately jump vertically by extending through hips and swinging arms for propulsion.",
      "Land softly in squat position with hips back and down. Immediately repeat the same movement."
    ],
    tips: [
      "Keep chest up during the jump.",
      "Extend hips completely during jump."
    ],
    progressions: [
      "Increase reps",
      "reduce rests"
    ],
    alternatives: [
      "Any low impact weighted squat variations",
      "leg press",
      "box jumps"
    ],
    difficulty: "intermediate",
    equipment: ["bodyweight"],
    reps: "6-12",
    sets: "3-4"
  },
  {
    name: "SINGLE LEG SQUAT",
    category: "strength",
    works: ["Glutes", "hips", "hamstrings", "calves", "quads"],
    why: "Strengthen your force producing muscles and improve power for the run and bike.",
    instructions: [
      "Stand on one foot with your other leg bent at the knee.",
      "Once you're balanced on one leg, squat down as low as you can without losing your form (or toppling over).",
      "Don't let your standing knee go past the front of your toes while you squat.",
      "Pause at the bottom of the squat for a second, then push back up through your heel, squeezing your glutes as you go."
    ],
    tips: [
      "Hold both arms out in front of you during the exercise to help keep your balance."
    ],
    progressions: [
      "Hold raised leg straight out in front (pistol squat)",
      "increase reps"
    ],
    alternatives: [
      "Bulgarian squat",
      "alternate lunges"
    ],
    difficulty: "advanced",
    equipment: ["bodyweight"],
    reps: "3-8 per leg",
    sets: "2-3"
  },
  {
    name: "BULGARIAN SQUAT",
    category: "strength",
    works: ["Glutes", "hamstrings", "quads"],
    why: "Strength, balance and core control.",
    instructions: [
      "Find yourself anything stable that you can rest a foot on, it needs to be about knee height.",
      "Get into a forward lunge position with torso upright, core braced and hips square to your body, with your back foot elevated on bench. Your leading leg should be about half a metre in front.",
      "Lower until your front thigh is almost horizontal, keeping your knee in line with your foot.",
      "Drive up through your front heel back to the starting position, keep your movements measured.",
      "Repeat your reps on one leg before switching sides."
    ],
    tips: [
      "Don't let your front knee travel beyond your toes.",
      "Keep your torso upright."
    ],
    progressions: [
      "Add weight",
      "increase reps",
      "reduce rest"
    ],
    alternatives: [
      "Single leg squat",
      "pistol squat",
      "single leg press"
    ],
    difficulty: "intermediate",
    equipment: ["bench", "optional: weights"],
    reps: "8-12 per leg",
    sets: "2-3"
  },
  {
    name: "ALTERNATE LUNGE",
    category: "strength",
    works: ["Glutes", "quads"],
    why: "Increase strength, power and stability for pedaling and running.",
    instructions: [
      "Start with your feet about shoulder width apart, standing tall with your core engaged.",
      "Step forward into lunge and lower until you reach approx. 90 degrees at both knees.",
      "Push your body back up to the starting position through your front heel, switch legs and repeat.",
      "1x right and 1x left is one rep."
    ],
    tips: [
      "Don't extend the front knee past your toes.",
      "Keep your torso upright."
    ],
    progressions: [
      "Add weight",
      "increase reps",
      "reduce rest",
      "make this exercise dynamic by adding jump switch"
    ],
    alternatives: [
      "Squats",
      "leg press",
      "step ups",
      "reverse lunges"
    ],
    difficulty: "beginner",
    equipment: ["bodyweight", "optional: weights"],
    reps: "10-20 total",
    sets: "2-3"
  },
  {
    name: "REVERSE LUNGE",
    category: "strength",
    works: ["Glutes", "hamstrings", "calves", "quads"],
    why: "Driving back to the starting position mimics the running movement.",
    instructions: [
      "Stand upright, core tight.",
      "Take a big step backwards with your left foot and lower until both knees are at 90 degrees.",
      "Push back up and return to starting position.",
      "Repeat with right leg. This is one rep."
    ],
    tips: [
      "Keep your torso upright and focus to stay balanced."
    ],
    progressions: [
      "Add weight",
      "increase reps",
      "reduce rest"
    ],
    alternatives: [
      "Alternate lunges",
      "step ups",
      "squats",
      "leg press"
    ],
    difficulty: "beginner",
    equipment: ["bodyweight", "optional: weights"],
    reps: "10-16 total",
    sets: "2-3"
  },
  {
    name: "DUMBBELL PULLOVER",
    category: "strength",
    works: ["Pectorals", "shoulders", "triceps", "back", "serratus anterior"],
    why: "Works all the muscles involved in the catch phase of freestyle.",
    instructions: [
      "Lay face up on a bench tighten core, hold a dumbbell in both hands with arms extended straight toward the ceiling.",
      "Keep arms straight as you lower the weight in an arc behind your head to the height of the bench.",
      "Slowly raise the dumbbell back to the starting position and repeat."
    ],
    tips: [
      "Don't bend the elbow and stay in control throughout the movement."
    ],
    progressions: [
      "Increase weight."
    ],
    alternatives: [
      "Lateral and frontal raise combo",
      "lat pull down"
    ],
    difficulty: "intermediate",
    equipment: ["dumbbell", "bench"],
    reps: "8-12",
    sets: "2-3"
  },
  {
    name: "GLUTE BRIDGE",
    category: "strength",
    works: ["Glutes", "hamstrings", "erector spinae", "rectus abdominis", "adductors"],
    why: "Increase power for running and riding. Improve flexibility through the hips. Injury prevention.",
    instructions: [
      "Lie face up on the floor, knees bent and feet flat on the ground, shoulder width apart.",
      "Lift your hips off the ground until your knees, hips and shoulders form a straight line. Squeeze your glutes hard and keep abs tight.",
      "Hold the bridge for a couple of seconds before easing back down."
    ],
    tips: [
      "Take care not to over extend and arch the back. Focus on squeezing the glutes, don't rush."
    ],
    progressions: [
      "Advance to single leg bridge with one leg raised and stretched out straight."
    ],
    alternatives: [
      "Squats",
      "donkey kicks",
      "standing glute kicks with band",
      "glute machine",
      "adductor machine"
    ],
    difficulty: "beginner",
    equipment: ["bodyweight"],
    reps: "10-20",
    sets: "2-3"
  }
];

export const TRIATHLON_FLEXIBILITY_EXERCISES: TriathlonExercise[] = [
  {
    name: "DOWNWARD DOG",
    category: "flexibility",
    stretches: ["Back", "hips", "hamstrings", "calves"],
    why: "Uses strength of arms and legs to fully and evenly stretch your spine.",
    instructions: [
      "Start on floor on hands and knees. Set knees directly below your hips and hands slightly in front of shoulders. Palms spread. Turn toes under.",
      "Breathe out and lift knees away from floor. To start keep knees slightly bent and heels lifted.",
      "Lift sitting bones towards the ceiling. Gently pedal your heels towards the ground and straighten your legs.",
      "Hold from 1-3 minutes."
    ],
    difficulty: "beginner",
    equipment: ["yoga mat"],
    duration: "1-3 minutes"
  },
  {
    name: "PIGEON POSE",
    category: "flexibility",
    stretches: ["IT Band", "glutes", "hip flexors"],
    why: "Injury prevention and hip mobility.",
    instructions: [
      "Start on hands and knees, bring your right knee forward and close to your right wrist, ankle near left hip.",
      "Slide your left leg back, straighten knee and point toes, heel to ceiling.",
      "You can stay here with your upper body upright or exhale and fold forwards over the front leg.",
      "Stay relaxed and hold pose for 30-40 seconds. Switch sides. Repeat as required."
    ],
    difficulty: "intermediate",
    equipment: ["yoga mat"],
    duration: "30-40 seconds per side"
  }
];

export const ALL_TRIATHLON_EXERCISES = [
  ...TRIATHLON_STRENGTH_EXERCISES,
  ...TRIATHLON_FLEXIBILITY_EXERCISES
];

// Exercise selection helpers for AI program generation
export const getTriathlonExercisesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
  return ALL_TRIATHLON_EXERCISES.filter(ex => ex.difficulty === difficulty);
};

export const getTriathlonExercisesByMuscleGroup = (muscleGroup: string) => {
  return ALL_TRIATHLON_EXERCISES.filter(ex => 
    ex.works?.some(muscle => muscle.toLowerCase().includes(muscleGroup.toLowerCase())) ||
    ex.stretches?.some(muscle => muscle.toLowerCase().includes(muscleGroup.toLowerCase()))
  );
};

export const getTriathlonExercisesByEquipment = (availableEquipment: string[]) => {
  return ALL_TRIATHLON_EXERCISES.filter(ex => 
    ex.equipment.every(eq => 
      availableEquipment.some(available => 
        available.toLowerCase().includes(eq.toLowerCase()) || 
        eq.toLowerCase().includes('bodyweight')
      )
    )
  );
};

export const getTriathlonAlternatives = (exerciseName: string): TriathlonExercise[] => {
  const exercise = ALL_TRIATHLON_EXERCISES.find(ex => 
    ex.name.toLowerCase() === exerciseName.toLowerCase()
  );
  
  if (!exercise?.alternatives) return [];
  
  return ALL_TRIATHLON_EXERCISES.filter(ex => 
    exercise.alternatives?.some(alt => 
      ex.name.toLowerCase().includes(alt.toLowerCase())
    )
  );
};

// Triathlon-specific workout templates
export const TRIATHLON_STRENGTH_WORKOUTS = {
  beginner: {
    name: "Triathlon Strength Foundation",
    exercises: ["SQUAT", "ALTERNATE LUNGE", "GLUTE BRIDGE", "REVERSE LUNGE"],
    duration: 30,
    focus: "Movement patterns and base strength"
  },
  intermediate: {
    name: "Triathlon Power Development",
    exercises: ["SQUAT JUMP", "BULGARIAN SQUAT", "DUMBBELL PULLOVER", "SINGLE LEG SQUAT"],
    duration: 45,
    focus: "Power and sport-specific strength"
  },
  advanced: {
    name: "Triathlon Performance",
    exercises: ["SINGLE LEG SQUAT", "SQUAT JUMP", "DUMBBELL PULLOVER", "BULGARIAN SQUAT"],
    duration: 60,
    focus: "Peak performance and injury prevention"
  }
};

export const TRIATHLON_FLEXIBILITY_SESSIONS = {
  recovery: {
    name: "Triathlon Recovery Stretch",
    exercises: ["DOWNWARD DOG", "PIGEON POSE"],
    duration: 15,
    focus: "Hip mobility and spine flexibility"
  },
  maintenance: {
    name: "Triathlon Mobility",
    exercises: ["PIGEON POSE", "DOWNWARD DOG"],
    duration: 20,
    focus: "Injury prevention and range of motion"
  }
};