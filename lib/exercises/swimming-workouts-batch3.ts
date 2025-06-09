// lib/exercises/swimming-workouts-batch3.ts - Final Swimming Workout

import { Exercise } from '@/types/templates';

export const SWIMMING_WORKOUTS_BATCH3: Record<string, Exercise> = {
  'swim-4x-broken-200s': {
    id: 'swim-4x-broken-200s',
    name: '4 x Broken 200s - Progressive Breakdown Training',
    category: 'cardio',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Speed', 'Lactate Tolerance'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 200m at Z2 (RPE 3), rest 15s',
      '**Activation:** 200m alternate drill/swim every 25m at Z2 (RPE 3), rest 15s',
      '200m build RPE 3-8 at Z2-Z4b, rest 15s',
      '**Main Set - 4 different ways to break 200m distance:**',
      '**Set 1 - Whole:** 1x200m at Z3 (RPE 6), rest 30s',
      '**Set 2 - Halves:** 2x100m at Z4a (RPE 7), rest 20s between 100s',
      '**Set 3 - Quarters:** 4x50m at Z4b (RPE 8), rest 15s between 50s',
      '**Set 4 - Eighths:** 8x25m at Z5 (RPE 9), rest 10s between 25s',
      '**Cool-down:** 200m RPE 4 gradually fading to RPE 1 at Z2-Z1'
    ],
    safetyNotes: [
      'Progressive intensity training - ensure proper fitness level',
      'Monitor technique as intensity increases through broken sets',
      'Stop if unable to maintain target times or technique'
    ],
    modifications: {
      beginner: 'Reduce intensities by 1 RPE level, extend rest intervals',
      advanced: 'Add second round or reduce rest intervals between pieces',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 4000,
      progressionRate: 0.06,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan pace targets for each broken set type',
        'Focus on progressive intensity increase',
        'Understand the concept of broken training'
      ],
      execution: [
        'Maintain consistent pace within each broken set',
        'Increase intensity as pieces get shorter',
        'Use rest periods to prepare for next intensity level'
      ],
      common_mistakes: [
        'Going too hard on the whole 200m',
        'Not increasing intensity enough as sets get shorter',
        'Poor technique maintenance at higher intensities'
      ],
      breathing: 'Adapt breathing pattern to match increasing intensity levels'
    }
  }
};

export default SWIMMING_WORKOUTS_BATCH3; 