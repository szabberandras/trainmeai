'use client';

import React from 'react';
import WeeklyPlanExport from '../components/export/WeeklyPlanExport';

// Sample data that matches our exercise database structure
const sampleWeeklyPlan = {
  programName: "OptiTrain Strength Foundation",
  weekNumber: 1,
  totalWeeks: 12,
  userGoal: "Build foundational strength and establish exercise habits",
  chatSummary: "User is a complete beginner with no prior lifting experience. Focusing on form mastery and bodyweight movements before adding external load. Main concerns are safety and building confidence. AI trainer emphasized progressive overload and proper recovery.",
  days: [
    {
      day: "Monday",
      focus: "Upper Body Foundation",
      duration: "30 minutes",
      exercises: [
        {
          name: "Push-ups",
          sets: 3,
          reps: 8,
          weight: "Bodyweight",
          muscleGroups: ["Chest", "Shoulders", "Triceps", "Core"],
          difficulty: 2,
          instructions: [
            "Start in a plank position with hands slightly wider than shoulder-width apart.",
            "Keep your body in a straight line from head to heels.",
            "Lower your chest toward the ground by bending your elbows.",
            "Push back up to the starting position.",
            "Keep your core engaged throughout the movement."
          ],
          safetyNotes: [
            "Don't let your hips sag or pike up",
            "Keep your head in neutral position",
            "Stop if you feel wrist pain"
          ],
          modifications: {
            beginner: "Perform on knees or against a wall",
            advanced: "Add feet elevation or single-arm variations"
          },
          coaching: {
            setup: ["Hands under shoulders", "Straight body line", "Core engaged"],
            execution: ["Control the descent", "Full range of motion", "Drive through palms"],
            common_mistakes: ["Sagging hips", "Partial range of motion", "Head forward"],
            breathing: "Inhale down, exhale up"
          }
        },
        {
          name: "Bodyweight Squats",
          sets: 3,
          reps: 12,
          weight: "Bodyweight",
          muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
          difficulty: 2,
          instructions: [
            "Stand with feet shoulder-width apart, toes slightly pointed out.",
            "Lower down as if sitting back into a chair.",
            "Keep chest up and knees tracking over toes.",
            "Lower until thighs are parallel to ground.",
            "Drive through heels to return to starting position."
          ],
          safetyNotes: [
            "Stop if you feel knee pain",
            "Don't let knees cave inward",
            "Keep weight on heels, not toes"
          ],
          modifications: {
            beginner: "Use a chair for support or reduce depth",
            advanced: "Add pause at bottom or jump squats"
          },
          coaching: {
            setup: ["Feet shoulder-width apart", "Toes slightly out", "Chest up"],
            execution: ["Sit back, not down", "Knees track over toes", "Drive through heels"],
            common_mistakes: ["Knees caving in", "Forward lean", "Rising onto toes"],
            breathing: "Inhale down, exhale up"
          }
        },
        {
          name: "Plank",
          duration: "30 seconds",
          sets: 3,
          muscleGroups: ["Core", "Shoulders", "Back"],
          difficulty: 2,
          instructions: [
            "Start in a push-up position.",
            "Lower down to your forearms.",
            "Keep your body in a straight line.",
            "Hold the position while breathing normally.",
            "Focus on keeping your core tight."
          ],
          safetyNotes: [
            "Don't hold your breath",
            "Stop if you feel lower back pain",
            "Keep hips level"
          ],
          modifications: {
            beginner: "Perform on knees or against an incline",
            advanced: "Add leg lifts or single-arm reaches"
          },
          coaching: {
            setup: ["Forearms parallel", "Straight body line", "Core braced"],
            execution: ["Breathe normally", "Maintain position", "Fight the shake"],
            common_mistakes: ["Sagging hips", "Holding breath", "Looking up"],
            breathing: "Breathe normally throughout"
          }
        }
      ]
    },
    {
      day: "Tuesday",
      focus: "Active Recovery",
      duration: "20 minutes",
      exercises: [
        {
          name: "Light Walking",
          duration: "20 minutes",
          muscleGroups: ["Full Body"],
          difficulty: 1,
          instructions: [
            "Walk at a comfortable, conversational pace.",
            "Focus on good posture and natural arm swing.",
            "Breathe deeply and enjoy the movement."
          ],
          safetyNotes: [
            "Stay hydrated",
            "Wear appropriate footwear"
          ],
          modifications: {
            beginner: "Start with 10 minutes",
            advanced: "Add gentle hills or increase pace slightly"
          }
        }
      ]
    },
    {
      day: "Wednesday",
      focus: "Lower Body Foundation",
      duration: "30 minutes",
      exercises: [
        {
          name: "Glute Bridges",
          sets: 3,
          reps: 12,
          weight: "Bodyweight",
          muscleGroups: ["Glutes", "Hamstrings", "Core"],
          difficulty: 2,
          instructions: [
            "Lie on your back with knees bent and feet flat on the floor.",
            "Squeeze your glutes and lift your hips up.",
            "Create a straight line from knees to shoulders.",
            "Hold for a moment at the top.",
            "Lower back down with control."
          ],
          safetyNotes: [
            "Don't arch your back excessively",
            "Keep feet flat on the ground"
          ],
          modifications: {
            beginner: "Reduce range of motion",
            advanced: "Single-leg or add resistance band"
          },
          coaching: {
            setup: ["Feet hip-width apart", "Arms at sides", "Core engaged"],
            execution: ["Squeeze glutes first", "Drive through heels", "Hold at top"],
            common_mistakes: ["Using back instead of glutes", "Rushing the movement"],
            breathing: "Exhale up, inhale down"
          }
        },
        {
          name: "Lunges",
          sets: 3,
          reps: 8,
          weight: "Bodyweight",
          muscleGroups: ["Quadriceps", "Glutes", "Hamstrings", "Calves"],
          difficulty: 3,
          instructions: [
            "Stand tall with feet hip-width apart.",
            "Step forward with one leg, lowering your hips.",
            "Lower until both knees are bent at 90 degrees.",
            "Push back to the starting position.",
            "Repeat on the other side."
          ],
          safetyNotes: [
            "Don't let front knee go past toes",
            "Keep torso upright",
            "Control the movement"
          ],
          modifications: {
            beginner: "Hold onto a wall for balance or reduce depth",
            advanced: "Add walking lunges or reverse lunges"
          },
          coaching: {
            setup: ["Tall posture", "Core engaged", "Eyes forward"],
            execution: ["Step out, then down", "90-degree angles", "Push through front heel"],
            common_mistakes: ["Knee over toe", "Leaning forward", "Small steps"],
            breathing: "Inhale down, exhale up"
          }
        }
      ]
    }
  ],
  nutrition: {
    preWorkout: "Light snack 30-60 minutes before: banana with almond butter or a small apple",
    postWorkout: "Protein + carbs within 30 minutes: protein shake with berries or Greek yogurt with granola",
    daily: "Focus on whole foods: lean proteins (chicken, fish, beans), vegetables, fruits, whole grains. Aim for 3 balanced meals and 1-2 healthy snacks.",
    hydration: "Aim for 8-10 glasses of water daily, extra during workouts. Monitor urine color - should be light yellow."
  }
};

export default function TestExportPage() {
  return (
    <WeeklyPlanExport 
      weeklyPlan={sampleWeeklyPlan}
      onClose={() => window.history.back()}
    />
  );
} 