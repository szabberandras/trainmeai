// lib/exercises/swimming-workouts-batch2.ts - Second Batch of Professional Swimming Workouts

import { Exercise } from '@/types/templates';

export const SWIMMING_WORKOUTS_BATCH2: Record<string, Exercise> = {
  'swim-8x50-build-8x100-fast': {
    id: 'swim-8x50-build-8x100-fast',
    name: '8 x 50 build, 8 x 100 fast - Speed Development',
    category: 'cardio',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Speed', 'Power'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 600m choice stroke at Z2 (RPE 3)',
      '**Activation:** 4x75m - 25m drill + 50m build at Z2-Z3 (RPE 3-6), rest 20s',
      '**Main Set 1:** 8x50m build pace throughout at Z2-Z4a (RPE 3-7), rest 15s',
      '**Main Set 2:** 8x100m fast pace at Z4a-Z4b (RPE 7-8), rest 30s',
      '**Cool-down:** 200m choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Ensure proper warm-up before speed work',
      'Monitor technique during fast intervals',
      'Adjust pace if unable to maintain target times'
    ],
    modifications: {
      beginner: 'Reduce to 6x50m and 6x100m with longer rest',
      advanced: 'Add third set or reduce rest intervals',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2800,
      progressionRate: 0.06,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan build progression for 50s',
        'Set target times for 100s',
        'Focus on speed development'
      ],
      execution: [
        'Gradual speed increase in 50s',
        'Consistent fast pace in 100s',
        'Maintain technique at speed'
      ],
      common_mistakes: [
        'Building too fast too early',
        'Inconsistent 100m times',
        'Poor technique at high speeds'
      ],
      breathing: 'Adjust breathing frequency for speed work'
    }
  },

  'swim-5x300-threshold': {
    id: 'swim-5x300-threshold',
    name: '5 x 300m Threshold - Lactate Training',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Lactate Threshold', 'Endurance'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 600m progressive build at Z1-Z2 (RPE 2-4)',
      '**Activation:** 6x50m alternating easy/moderate at Z2-Z3 (RPE 3-5), rest 15s',
      '**Main Set:** 5x300m threshold pace (comfortably hard) at Z3-Z4a (RPE 6-7), rest 60s',
      '**Cool-down:** 200m choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Threshold training requires good aerobic base',
      'Monitor lactate accumulation and technique',
      'Adjust pace if unable to complete all 5 sets'
    ],
    modifications: {
      beginner: 'Reduce to 3x300m with longer rest intervals',
      advanced: 'Add 6th set or reduce rest to 45s',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2500,
      progressionRate: 0.05,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Establish threshold pace target',
        'Focus on sustainable hard effort',
        'Plan consistent pacing strategy'
      ],
      execution: [
        'Comfortably hard but sustainable pace',
        'Consistent times across all 5 sets',
        'Maintain stroke efficiency'
      ],
      common_mistakes: [
        'Going too hard on first set',
        'Inconsistent pacing',
        'Poor technique under lactate stress'
      ],
      breathing: 'Controlled breathing every 3-4 strokes'
    }
  },

  'swim-20x50-speed-a': {
    id: 'swim-20x50-speed-a',
    name: '20 x 50 Speed (A) - Sprint Training',
    category: 'cardio',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Speed', 'Power'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 500m choice stroke at Z2 (RPE 3)',
      '**Activation:** 8x25m build to fast at Z2-Z4b (RPE 3-8), rest 20s',
      '**Main Set:** 20x50m sprint speed at Z4b-Z5 (RPE 8-9), rest 30s',
      '**Cool-down:** 300m choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'High-intensity sprint training - ensure proper fitness level',
      'Monitor technique during sprint efforts',
      'Stop if unable to maintain target times'
    ],
    modifications: {
      beginner: 'Reduce to 12x50m with longer rest intervals',
      advanced: 'Reduce rest to 20s or add additional sprint set',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2200,
      progressionRate: 0.04,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan sprint pace targets',
        'Focus on maximum speed development',
        'Ensure adequate rest between sprints'
      ],
      execution: [
        'All-out sprint effort each 50m',
        'Maintain consistent times',
        'Focus on stroke rate and power'
      ],
      common_mistakes: [
        'Not sprinting hard enough',
        'Inconsistent effort levels',
        'Poor technique at maximum speed'
      ],
      breathing: 'Limited breathing during sprints, recover during rest'
    }
  },

  'swim-3x800-race-pace': {
    id: 'swim-3x800-race-pace',
    name: '3 x 800 Race Pace - Distance Training',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Race Pace', 'Endurance'],
    difficulty: 5,
    instructions: [
      '**Warm-up:** 800m progressive from easy to moderate at Z1-Z3 (RPE 2-5)',
      '**Activation:** 4x100m build to race pace feel at Z2-Z4a (RPE 4-7), rest 30s',
      '**Main Set:** 3x800m race pace effort at Z4a (RPE 7), rest 3-4 minutes',
      '**Cool-down:** 400m choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Advanced distance training - ensure excellent swimming fitness',
      'Monitor pacing strategy throughout each 800m',
      'Stop if unable to maintain race pace'
    ],
    modifications: {
      beginner: 'Reduce to 2x800m or substitute 3x600m',
      advanced: 'Add 4th set or reduce rest intervals',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 3600,
      progressionRate: 0.03,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Establish race pace target',
        'Plan pacing strategy for each 800m',
        'Focus on race simulation'
      ],
      execution: [
        'Consistent race pace effort',
        'Even pacing throughout each 800m',
        'Maintain technique under race stress'
      ],
      common_mistakes: [
        'Going out too fast',
        'Inconsistent pacing within sets',
        'Poor technique maintenance'
      ],
      breathing: 'Race-specific breathing pattern'
    }
  },

  'swim-30x75-descending': {
    id: 'swim-30x75-descending',
    name: '30 x 75 descending - Volume Speed Training',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Speed Endurance', 'Volume'],
    difficulty: 5,
    instructions: [
      '**Warm-up:** 600m choice stroke at Z2 (RPE 3)',
      '**Activation:** 4x50m progressive speed at Z2-Z3 (RPE 3-6), rest 15s',
      '**Main Set:** 3 rounds of 10x75m, each round descending 1-10',
      'Round 1: Descend 1-10 at Z2-Z4b (RPE 4-8), rest 15s, then 2 min rest',
      'Round 2: Descend 1-10 at Z2-Z4b (RPE 4-8), rest 15s, then 2 min rest',
      'Round 3: Descend 1-10 at Z2-Z4b (RPE 4-8), rest 15s',
      '**Cool-down:** 250m choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Very high volume workout - ensure excellent fitness base',
      'Monitor technique throughout all 30 intervals',
      'Stop if unable to maintain descending pattern'
    ],
    modifications: {
      beginner: 'Not recommended - use shorter descending sets',
      advanced: 'Reduce rest intervals or add 4th round',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 3250,
      progressionRate: 0.02,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan descending pace targets for each round',
        'Focus on consistent progression',
        'Mental preparation for high volume'
      ],
      execution: [
        'Start conservatively each round',
        'Consistent descending pattern',
        'Maintain technique through fatigue'
      ],
      common_mistakes: [
        'Starting too fast in each round',
        'Inconsistent descending pattern',
        'Technique breakdown in later rounds'
      ],
      breathing: 'Adapt breathing pattern to increasing intensity'
    }
  },

  'swim-5-sets-easy-fast-500s': {
    id: 'swim-5-sets-easy-fast-500s',
    name: '5 sets: Easy/Fast 500s - Pace Contrast Training',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Pace Control', 'Aerobic Capacity'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 400m freestyle gradually building from easy to moderate at Z1-Z2 (RPE 2-3), rest 45s',
      '**Activation 1:** 8x50m drill of choice at Z2 (RPE 3), rest 15s',
      '**Activation 2:** 4x75m - 25m drill + 50m swim building to moderate at Z2-Z3 (RPE 3-5), rest 20s',
      '**Activation 3:** 3x100m starting at Z2 increasing to Z3-Z4a (RPE 4-6.5), rest 30s',
      '**Main Set:** 5x500m alternating easy and fast pace:',
      'Set 1: Easy - Controlled aerobic pace at Z2-Z3 (RPE 4-5), rest 60s',
      'Set 2: Fast - Threshold pace at Z4a (RPE 6.5-7), rest 90s',
      'Set 3: Easy - Return to controlled aerobic pace at Z2-Z3 (RPE 4-5), rest 60s',
      'Set 4: Fast - Threshold pace, aim to match/improve set 2 at Z4a (RPE 6.5-7.5), rest 90s',
      'Set 5: Easy - Controlled finish, focus on technique at Z2-Z3 (RPE 4-5)',
      '**Cool-down:** 300m freestyle or choice at Z1 (RPE 1-2)'
    ],
    safetyNotes: [
      'Advanced aerobic capacity training',
      'Monitor pace control between easy and fast sets',
      'Stop if unable to maintain pace contrast'
    ],
    modifications: {
      beginner: 'Reduce to 3x500m (easy-fast-easy) with longer rest',
      advanced: 'Add 6th set or reduce rest intervals',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 3800,
      progressionRate: 0.04,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Plan easy pace (70-75% of threshold)',
        'Plan fast pace (lactate threshold)',
        'Focus on pace contrast training'
      ],
      execution: [
        'Controlled effort on easy sets',
        'Comfortably hard on fast sets',
        'Smooth transitions between paces'
      ],
      common_mistakes: [
        'Easy sets too fast',
        'Fast sets too slow',
        'Poor pace control'
      ],
      breathing: 'Adjust breathing pattern for each pace zone'
    }
  }
};

export default SWIMMING_WORKOUTS_BATCH2; 