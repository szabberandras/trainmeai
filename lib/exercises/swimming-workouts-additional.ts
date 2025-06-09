// lib/exercises/swimming-workouts-additional.ts - Additional Professional Swimming Workouts

import { Exercise } from '@/types/templates';

export const ADDITIONAL_SWIMMING_WORKOUTS: Record<string, Exercise> = {
  'swim-6x-variable-500s': {
    id: 'swim-6x-variable-500s',
    name: '6 x Variable Speed 500s - Advanced Pace Training',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 5,
    instructions: [
      '**Warm-up:** 400m choice stroke at Z1-Z2 (RPE 2-3)',
      '**Activation 1:** 6x50m drill of choice at Z1 (RPE 2), rest 15s',
      '**Activation 2:** 4x75m starting at Z2 building to Z3 (RPE 3-6), rest 20s',
      '**Main Set:** 6 x 500m with variable speed patterns:',
      'Set 1 - Build Speed: 100m at Z2 (RPE 4), 100m at Z3 (RPE 5), 100m at Z3 (RPE 6), 100m at Z4a (RPE 7), 100m at Z4b (RPE 8), rest 90s',
      'Set 2 - Descend Speed: 100m at Z4b (RPE 8), 100m at Z4a (RPE 7), 100m at Z3 (RPE 6), 100m at Z3 (RPE 5), 100m at Z2 (RPE 4), rest 90s',
      'Set 3 - Negative Split: 250m at Z3 (RPE 5), 250m at Z4a (RPE 7), rest 2 minutes',
      'Repeat pattern for sets 4-6',
      '**Cool-down:** 400m Z2 slowing to Z1 (RPE 3-1)'
    ],
    safetyNotes: [
      'Very advanced workout - ensure excellent swimming fitness',
      'Monitor pace control throughout variable speed changes',
      'Stop if unable to maintain proper technique',
      'Have lifeguard present for high-intensity training'
    ],
    modifications: {
      beginner: 'Not recommended - use shorter interval sets instead',
      advanced: 'Reduce rest intervals or add seventh 500m set',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 4200,
      progressionRate: 0.03,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan pace targets for each speed zone',
        'Use pool clock for precise timing',
        'Focus on smooth transitions between speeds'
      ],
      execution: [
        'Maintain technique through all pace changes',
        'Control breathing pattern for each intensity',
        'Use rest periods to prepare for next pattern'
      ],
      common_mistakes: [
        'Poor pace control during transitions',
        'Starting too fast in build sets',
        'Losing technique at higher intensities'
      ],
      breathing: 'Adapt breathing frequency to match intensity zones'
    }
  },

  'swim-6x300-descending': {
    id: 'swim-6x300-descending',
    name: '6 x 300 Descending - Progressive Speed Set',
    category: 'cardio',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 400m choice stroke at Z2 (RPE 3)',
      '**Activation:** 4x50m drill/swim by 25m at Z2 (RPE 4), rest 15s',
      '**Main Set:** 6x300m descending 1-6 (each faster than previous)',
      'Set 1: Z3 (RPE 5), Set 2: Z3 (RPE 5.5), Set 3: Z3-Z4a (RPE 6)',
      'Set 4: Z4a (RPE 6.5), Set 5: Z4a (RPE 7), Set 6: Z4a-Z4b (RPE 8)',
      'Rest 45s between each 300m',
      '**Cool-down:** 200m choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Ensure proper warm-up before progressive speeds',
      'Monitor technique as pace increases',
      'Stop if unable to maintain descending times'
    ],
    modifications: {
      beginner: 'Reduce to 4x300m with longer rest intervals',
      advanced: 'Reduce rest to 30s or add 7th 300m all-out',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 3000,
      progressionRate: 0.08,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan target times for each 300m',
        'Focus on negative progression',
        'Use pace clock for timing'
      ],
      execution: [
        'Start conservatively on first 300m',
        'Gradually increase pace each set',
        'Maintain stroke efficiency throughout'
      ],
      common_mistakes: [
        'Starting too fast on first set',
        'Not descending enough between sets',
        'Poor pacing within each 300m'
      ],
      breathing: 'Adjust breathing pattern as intensity increases'
    }
  },

  'swim-60min-continuous': {
    id: 'swim-60min-continuous',
    name: '60 min Continuous Swim - Aerobic Base Building',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Cardiovascular', 'Endurance'],
    difficulty: 3,
    instructions: [
      '**Warm-up:** 500m easy build to aerobic pace at Z1-Z2 (RPE 2-4)',
      '**Main Effort:** 50 minutes continuous aerobic swimming at Z2-Z3 (RPE 4-5)',
      'Focus on consistent pace, breathing patterns, and technique',
      'Can vary strokes occasionally for active recovery',
      'Mental focus on rhythm and relaxation',
      '**Cool-down:** 200m easy pace at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Build continuous swimming duration gradually',
      'Monitor stroke technique for efficiency',
      'Take brief rest if experiencing unusual fatigue'
    ],
    modifications: {
      beginner: 'Start with 30-40 minutes continuous, build gradually',
      advanced: 'Include pace changes or stroke variations within the 50 minutes',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 60,
      progressionRate: 0.05,
      unit: 'minutes'
    },
    coaching: {
      setup: [
        'Plan sustainable aerobic pace',
        'Focus on stroke efficiency',
        'Mental preparation for long swim'
      ],
      execution: [
        'Maintain consistent rhythm throughout',
        'Focus on relaxed, efficient technique',
        'Use bilateral breathing for balance'
      ],
      common_mistakes: [
        'Swimming too fast initially',
        'Technique deterioration over time',
        'Mental fatigue affecting pace'
      ],
      breathing: 'Consistent, relaxed breathing pattern throughout'
    }
  },

  'swim-test-50-500': {
    id: 'swim-test-50-500',
    name: '50/500 Swim Test - Performance Assessment',
    category: 'cardio',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Speed', 'Endurance'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 300m freestyle at Z1 (RPE 2), rest 60s',
      '**Activation 1:** 6x50m drill of choice at Z2 (RPE 3), rest 20s',
      '**Activation 2:** 2x100m starting at Z3 increasing to Z4b (RPE 5-7.5), rest 30s',
      '**Activation 3:** 2x25m at Z5 (RPE 9.5), rest 30s',
      '**Test 1:** 50m ALL OUT - track stroke count for each 25m',
      '**Recovery:** 200m easy at Z1 (RPE <2) + 2 minutes rest',
      '**Test 2:** 500m TIME TRIAL - fastest possible, track final 100m stroke count',
      '**Cool-down:** 300m freestyle at Z1 (RPE <2)'
    ],
    safetyNotes: [
      'Ensure thorough warm-up before maximum efforts',
      'Monitor stroke technique during tests',
      'Record times and stroke counts for progress tracking'
    ],
    modifications: {
      beginner: 'Focus on technique over speed, extend recovery periods',
      advanced: 'Add additional test distances or reduce recovery time',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 45,
      progressionRate: 0.02,
      unit: 'minutes total test'
    },
    coaching: {
      setup: [
        'Plan pacing strategy for 500m',
        'Focus on stroke efficiency',
        'Record baseline times'
      ],
      execution: [
        'All-out effort for 50m test',
        'Controlled fast pace for 500m',
        'Monitor stroke count changes'
      ],
      common_mistakes: [
        'Going out too hard on 500m',
        'Poor pacing strategy',
        'Technique breakdown under fatigue'
      ],
      breathing: 'Controlled breathing pattern, adjust for test intensity'
    }
  }
};

export default ADDITIONAL_SWIMMING_WORKOUTS; 