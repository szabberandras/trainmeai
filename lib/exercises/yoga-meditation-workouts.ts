// lib/exercises/yoga-meditation-workouts.ts - Yoga, Meditation & Breathing Workouts

import { StructuredWorkout } from './structured-workouts';

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