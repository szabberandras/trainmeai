// lib/templates/strength/general-strength-beginner.ts - Sample template

import { TrainingTemplate } from '@/types/templates';

export const generalStrengthBeginnerTemplate: TrainingTemplate = {
  // Template metadata
  id: 'general-strength-beginner',
  name: 'General Strength Foundation',
  description: 'A comprehensive 8-week program designed to build fundamental strength using bodyweight and basic equipment. Perfect for beginners looking to establish a solid fitness foundation.',
  category: 'strength',
  subcategory: 'general-strength',
  
  // User requirements
  fitness_levels: ['beginner', 'some-experience'],
  goals: ['fitness', 'strength'],
  equipment_options: [
    [], // bodyweight only
    ['dumbbells'], // with dumbbells
    ['resistance-bands'], // with bands
    ['dumbbells', 'yoga-mat'], // full basic setup
  ],
  time_commitments: [30, 45], // 30 or 45 minute sessions
  weekly_frequencies: ['3-4'], // 3-4 times per week
  
  // Template structure
  duration_weeks: 8,
  weekly_structure: [
    // Week 1-2: Foundation Phase
    {
      weekNumber: 1,
      theme: 'Movement Foundation',
      workouts: [
        {
          id: 'week1-workout1',
          day: 'Monday',
          type: 'full_body_strength',
          title: 'Full Body Foundation - Day 1',
          description: 'Introduction to basic movement patterns with focus on form and technique.',
          duration: 30,
          intensity: 60,
          
          warmup: [
            { exercise_id: 'jumping-jacks', duration: 60, intensity: 50 },
            { exercise_id: 'cat-cow', reps: 8, intensity: 30 }
          ],
          
          main: [
            { exercise_id: 'squat', sets: 2, reps: 8, rest: 60, intensity: 60 },
            { exercise_id: 'push-up', sets: 2, reps: 5, rest: 60, intensity: 60 },
            { exercise_id: 'plank', sets: 2, duration: 20, rest: 60, intensity: 60 }
          ],
          
          cooldown: [
            { exercise_id: 'cat-cow', reps: 5, intensity: 30 }
          ],
          
          focus: ['full-body', 'movement-quality'],
          equipment_required: [],
          space_required: 'minimal',
          
          time_adaptations: {
            '15': [
              { exercise_id: 'squat', sets: 1, reps: 8 },
              { exercise_id: 'push-up', sets: 1, reps: 5 },
              { exercise_id: 'plank', sets: 1, duration: 20 }
            ],
            '30': [
              { exercise_id: 'squat', sets: 2, reps: 8 },
              { exercise_id: 'push-up', sets: 2, reps: 5 },
              { exercise_id: 'plank', sets: 2, duration: 20 }
            ],
            '45': [
              { exercise_id: 'squat', sets: 3, reps: 10 },
              { exercise_id: 'push-up', sets: 3, reps: 6 },
              { exercise_id: 'plank', sets: 3, duration: 25 },
              { exercise_id: 'jumping-jacks', sets: 2, reps: 20 }
            ],
            '60': [
              { exercise_id: 'squat', sets: 3, reps: 12 },
              { exercise_id: 'push-up', sets: 3, reps: 8 },
              { exercise_id: 'plank', sets: 3, duration: 30 },
              { exercise_id: 'jumping-jacks', sets: 3, reps: 25 },
              { exercise_id: 'mountain-climbers', sets: 2, duration: 30 }
            ]
          }
        },
        
        {
          id: 'week1-workout2',
          day: 'Wednesday',
          type: 'full_body_strength',
          title: 'Full Body Foundation - Day 2',
          description: 'Building on Day 1 with slight variations and progression.',
          duration: 30,
          intensity: 65,
          
          warmup: [
            { exercise_id: 'jumping-jacks', duration: 60, intensity: 50 },
            { exercise_id: 'cat-cow', reps: 8, intensity: 30 }
          ],
          
          main: [
            { exercise_id: 'squat', sets: 2, reps: 10, rest: 60, intensity: 65 },
            { exercise_id: 'push-up', sets: 2, reps: 6, rest: 60, intensity: 65 },
            { exercise_id: 'plank', sets: 2, duration: 25, rest: 60, intensity: 65 },
            { exercise_id: 'mountain-climbers', sets: 2, duration: 20, rest: 60, intensity: 70 }
          ],
          
          cooldown: [
            { exercise_id: 'cat-cow', reps: 5, intensity: 30 }
          ],
          
          focus: ['full-body', 'endurance'],
          equipment_required: [],
          space_required: 'minimal',
          
          time_adaptations: {
            '15': [
              { exercise_id: 'squat', sets: 1, reps: 10 },
              { exercise_id: 'push-up', sets: 1, reps: 6 },
              { exercise_id: 'plank', sets: 1, duration: 25 }
            ],
            '30': [
              { exercise_id: 'squat', sets: 2, reps: 10 },
              { exercise_id: 'push-up', sets: 2, reps: 6 },
              { exercise_id: 'plank', sets: 2, duration: 25 },
              { exercise_id: 'mountain-climbers', sets: 2, duration: 20 }
            ],
            '45': [
              { exercise_id: 'squat', sets: 3, reps: 12 },
              { exercise_id: 'push-up', sets: 3, reps: 8 },
              { exercise_id: 'plank', sets: 3, duration: 30 },
              { exercise_id: 'mountain-climbers', sets: 3, duration: 25 }
            ],
            '60': [
              { exercise_id: 'squat', sets: 3, reps: 15 },
              { exercise_id: 'push-up', sets: 3, reps: 10 },
              { exercise_id: 'plank', sets: 3, duration: 35 },
              { exercise_id: 'mountain-climbers', sets: 3, duration: 30 },
              { exercise_id: 'jumping-jacks', sets: 3, reps: 30 }
            ]
          }
        },
        
        {
          id: 'week1-workout3',
          day: 'Friday',
          type: 'full_body_strength',
          title: 'Full Body Foundation - Day 3',
          description: 'End of week consolidation with focus on quality movement.',
          duration: 30,
          intensity: 60,
          
          warmup: [
            { exercise_id: 'jumping-jacks', duration: 60, intensity: 50 },
            { exercise_id: 'cat-cow', reps: 8, intensity: 30 }
          ],
          
          main: [
            { exercise_id: 'squat', sets: 2, reps: 8, rest: 60, intensity: 60 },
            { exercise_id: 'push-up', sets: 2, reps: 5, rest: 60, intensity: 60 },
            { exercise_id: 'plank', sets: 2, duration: 20, rest: 60, intensity: 60 }
          ],
          
          cooldown: [
            { exercise_id: 'cat-cow', reps: 8, intensity: 30 }
          ],
          
          focus: ['recovery', 'movement-quality'],
          equipment_required: [],
          space_required: 'minimal',
          
          time_adaptations: {
            '15': [
              { exercise_id: 'squat', sets: 1, reps: 8 },
              { exercise_id: 'push-up', sets: 1, reps: 5 },
              { exercise_id: 'plank', sets: 1, duration: 20 }
            ],
            '30': [
              { exercise_id: 'squat', sets: 2, reps: 8 },
              { exercise_id: 'push-up', sets: 2, reps: 5 },
              { exercise_id: 'plank', sets: 2, duration: 20 }
            ],
            '45': [
              { exercise_id: 'squat', sets: 3, reps: 10 },
              { exercise_id: 'push-up', sets: 3, reps: 6 },
              { exercise_id: 'plank', sets: 3, duration: 25 }
            ],
            '60': [
              { exercise_id: 'squat', sets: 3, reps: 12 },
              { exercise_id: 'push-up', sets: 3, reps: 8 },
              { exercise_id: 'plank', sets: 3, duration: 30 },
              { exercise_id: 'cat-cow', sets: 2, reps: 10 }
            ]
          }
        }
      ],
      rest_days: [0, 2, 4, 6], // Sunday, Tuesday, Thursday, Saturday
      volume_adjustment: 0, // baseline week
      intensity_adjustment: 0,
      
      assessments: [
        {
          type: 'performance',
          name: 'Push-up Test',
          description: 'Maximum push-ups in good form',
          metric: 'reps',
          target: 5
        }
      ],
      milestones: ['Complete all workouts', 'Master basic movement patterns']
    }
    
    // Additional weeks would follow similar pattern with progressive overload
  ],
  
  // Progression rules
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
      condition: 'rpe < 6',
      adjustment: {
        type: 'intensity',
        value: 5,
        description: 'Increase intensity when exercise feels too easy'
      }
    },
    {
      trigger: 'user_feedback',
      condition: 'completion_rate > 95%',
      adjustment: {
        type: 'complexity',
        value: 1,
        description: 'Add exercise variations when consistently completing workouts'
      }
    }
  ],
  
  // Customization rules
  adaptations: {
    age_adjustments: {
      '50+': {
        rest_periods: 1.5, // 50% longer rest
        intensity_cap: 80, // max 80% intensity
        recovery_days: 1 // extra recovery day
      },
      '18-30': {
        progression_rate: 1.2, // 20% faster progression
        intensity_cap: 100
      }
    },
    equipment_substitutions: {
      'dumbbells': ['dumbbell-chest-press'], // add when dumbbells available
      'resistance-bands': [], // band alternatives
      'none': [] // bodyweight only
    },
    time_modifications: {
      15: { sets_multiplier: 0.5, exercises_limit: 3 },
      30: { sets_multiplier: 1.0, exercises_limit: 4 },
      45: { sets_multiplier: 1.5, exercises_limit: 5 },
      60: { sets_multiplier: 2.0, exercises_limit: 6 }
    }
  },
  
  // Success metrics
  expected_outcomes: [
    'Improved functional strength',
    'Better movement quality',
    'Increased confidence in exercise',
    'Established exercise habit',
    'Foundation for advanced training'
  ],
  key_performance_indicators: [
    'Push-up progression (5 → 15 reps)',
    'Squat progression (8 → 20 reps)',
    'Plank hold (20 → 60 seconds)',
    'Workout completion rate > 90%',
    'Reduced perceived exertion for same exercises'
  ]
}; 