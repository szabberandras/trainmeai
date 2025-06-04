// lib/templates/beginner/general-fitness-beginner.ts - Beginner general fitness template

import { TrainingTemplate } from '@/types/templates';

export const generalFitnessBeginnerTemplate: TrainingTemplate = {
  id: 'general-fitness-beginner',
  name: 'General Fitness - Beginner',
  description: 'A comprehensive 4-week program for fitness beginners focusing on building strength, endurance, and movement quality',
  category: 'strength',
  subcategory: 'general-fitness',
  
  // User requirements
  fitness_levels: ['beginner', 'some-experience'],
  goals: ['fitness', 'strength', 'wellbeing'],
  equipment_options: [
    [], // bodyweight only
    ['dumbbells'], // dumbbells
    ['resistance-bands'], // bands
    ['dumbbells', 'resistance-bands', 'yoga-mat'] // full equipment
  ],
  time_commitments: [15, 30, 45, 60],
  weekly_frequencies: ['3', '3-4'],
  
  duration_weeks: 4,
  
  weekly_structure: [
    {
      weekNumber: 1,
      theme: 'Movement Foundation',
      workouts: [], // Would be populated with WorkoutTemplate objects
      rest_days: [0, 2, 4, 6], // Sunday, Tuesday, Thursday, Saturday
      volume_adjustment: 0,
      intensity_adjustment: 0
    },
    {
      weekNumber: 2,
      theme: 'Building Endurance',
      workouts: [],
      rest_days: [0, 2, 4, 6],
      volume_adjustment: 10,
      intensity_adjustment: 5
    },
    {
      weekNumber: 3,
      theme: 'Strength Development',
      workouts: [],
      rest_days: [0, 2, 4, 6],
      volume_adjustment: 20,
      intensity_adjustment: 10
    },
    {
      weekNumber: 4,
      theme: 'Integration & Assessment',
      workouts: [],
      rest_days: [0, 2, 4, 6],
      volume_adjustment: 15,
      intensity_adjustment: 15
    }
  ],

  progression_rules: [
    {
      trigger: 'weekly',
      condition: 'week >= 2',
      adjustment: {
        type: 'volume',
        value: 10,
        description: 'Increase reps by 10% each week'
      }
    },
    {
      trigger: 'performance_based',
      condition: 'completion_rate > 90%',
      adjustment: {
        type: 'intensity',
        value: 5,
        description: 'Increase intensity when user completes all exercises'
      }
    }
  ],

  adaptations: {
    age_adjustments: {
      '50+': {
        rest_increase: 30, // 30% more rest
        intensity_reduction: 10, // 10% less intensity
        joint_friendly_exercises: true
      },
      '65+': {
        rest_increase: 50,
        intensity_reduction: 20,
        balance_focus: true
      }
    },
    equipment_substitutions: {
      'dumbbell-chest-press': ['push-up', 'resistance-band-chest-press'],
      'dumbbell-row': ['resistance-band-row', 'reverse-fly-arms'],
      'kettlebell-swing': ['squat-jump', 'dumbbell-swing'],
      'resistance-band-pull-apart': ['reverse-fly-arms', 'wall-angels']
    },
    time_modifications: {
      15: {
        exercises_per_workout: 3,
        sets_per_exercise: 2,
        rest_between_sets: 30
      },
      30: {
        exercises_per_workout: 4,
        sets_per_exercise: 3,
        rest_between_sets: 45
      },
      45: {
        exercises_per_workout: 5,
        sets_per_exercise: 3,
        rest_between_sets: 60
      },
      60: {
        exercises_per_workout: 6,
        sets_per_exercise: 3,
        rest_between_sets: 90
      }
    }
  },

  expected_outcomes: [
    'Improved overall fitness and endurance',
    'Better movement quality and form',
    'Increased strength in major muscle groups',
    'Enhanced body awareness and stability',
    'Established exercise routine and habits'
  ],
  
  key_performance_indicators: [
    'Push-up progression (reps completed)',
    'Squat depth and form quality',
    'Plank hold duration',
    'Workout completion rate',
    'Perceived exertion improvement'
  ]
}; 