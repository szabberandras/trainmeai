// lib/exercises/swimming-workouts-converted.ts - Swimming Workouts in Standard Exercise Format

import { Exercise } from '@/types/templates';

export const SWIMMING_WORKOUT_EXERCISES: Record<string, Exercise> = {
  'swim-1k-pyramid-b': {
    id: 'swim-1k-pyramid-b',
    name: '1K Pyramid (B) - Advanced Swimming Workout',
    category: 'cardio',
    equipment: ['Pool', 'Kickboard', 'Pull Buoy'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 4,
    instructions: [
      '**Warm-up (300m):** Easy choice stroke at Z1 intensity (RPE 2)',
      '**Activation (4 sets):** 50m swim + 200m kick, Z2-Z4a intensity (RPE 3-6.5), rest 20s after swim, 30s after kick',
      '**Main Set (2 rounds):** Pyramid - 50m, 100m, 150m, 200m, 200m, 150m, 100m, 50m at Z4a (RPE 7)',
      'Rest intervals: 10s, 20s, 30s, 60s, 60s, 30s, 20s, 10s respectively',
      'Take 60s rest between rounds. Aim for slightly higher pace in second round',
      '**Cool-down (200m):** Easy choice stroke at Z1 (RPE <2)'
    ],
    safetyNotes: [
      'Ensure proper pool depth and safety regulations',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Reduce to single pyramid round, extend rest intervals by 50%, use easier stroke choices',
      advanced: 'Add third round, reduce rest intervals by 25%, focus on negative split timing',
      equipment_alternatives: {
        'Kickboard': 'Pool noodle or no equipment (focus on body position)',
        'Pull Buoy': 'Water bottle between legs or no equipment'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2500,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up gradually',
        'Set up equipment at pool edge for easy access',
        'Plan your lane usage and timing intervals'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent effort levels per zone',
        'Use pool clock for accurate rest intervals'
      ],
      common_mistakes: [
        'Starting too fast in the warm-up',
        'Not taking adequate rest between intervals',
        'Losing technique focus during high-intensity sets'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on intensity'
    }
  },

  'swim-1k-pyramid-a': {
    id: 'swim-1k-pyramid-a',
    name: '1K Pyramid (A) - Intermediate Swimming Workout',
    category: 'cardio',
    equipment: ['Pool', 'Kickboard', 'Pull Buoy'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 3,
    instructions: [
      '**Warm-up (300m):** Easy choice stroke at Z1 intensity (RPE 2)',
      '**Activation (4 sets):** 50m swim + 200m kick, Z2-Z4a intensity (RPE 3-6.5), rest 20s after swim, 30s after kick',
      '**Main Set (1 round):** Pyramid - 50m, 100m, 150m, 200m, 200m, 150m, 100m, 50m at Z4a (RPE 7)',
      'Rest intervals: 10s, 20s, 30s, 60s, 60s, 30s, 20s, 10s respectively',
      'Aim for slightly higher pace in second half of the set',
      '**Cool-down (200m):** Easy choice stroke at Z1 (RPE <2)'
    ],
    safetyNotes: [
      'Ensure proper pool depth and safety regulations',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Reduce pyramid to 50m-100m-150m-150m-100m-50m, extend rest intervals',
      advanced: 'Add second round or increase intensity to Z4b for final 4 intervals',
      equipment_alternatives: {
        'Kickboard': 'Pool noodle or no equipment (focus on body position)',
        'Pull Buoy': 'Water bottle between legs or no equipment'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2000,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up gradually',
        'Set up equipment at pool edge for easy access',
        'Plan your lane usage and timing intervals'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent effort levels per zone',
        'Use pool clock for accurate rest intervals'
      ],
      common_mistakes: [
        'Starting too fast in the warm-up',
        'Not taking adequate rest between intervals',
        'Losing technique focus during high-intensity sets'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on intensity'
    }
  },

  'swim-1800-pyramid': {
    id: 'swim-1800-pyramid',
    name: '1800 Pyramid - Professional Swimming Workout',
    category: 'endurance',
    equipment: ['Pool', 'Kickboard', 'Pull Buoy'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 5,
    instructions: [
      '**Warm-up (200m):** Easy choice stroke at Z1 (RPE 2)',
      '**Activation 1 (200m):** Kick at Z2 (RPE 3-4), rest 30s',
      '**Activation 2 (4x75m):** Build from Z3 to Z4a (RPE 5-7), rest 20s',
      '**Main Set:** Pyramid - 50m, 100m, 150m, 200m, 250m, 300m, 250m, 200m, 150m, 100m, 50m',
      'All at Z4a (RPE 7) with progressive rest: 15s, 20s, 25s, 30s, 40s, 60s, 40s, 30s, 25s, 20s, 15s',
      '**Extra Volume:** 4x25m all-out (Z6, RPE 10), rest 30s + 300m pull at Z3 (RPE 5)',
      '**Cool-down (200m):** Easy choice stroke at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Advanced workout - ensure proper swimming fitness level',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Not recommended - use 1K Pyramid A instead',
      advanced: 'Add second main set or increase all-out sprints to 8x25m',
      equipment_alternatives: {
        'Kickboard': 'Pool noodle or no equipment (focus on body position)',
        'Pull Buoy': 'Water bottle between legs or no equipment'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 3500,
      progressionRate: 0.05,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up gradually',
        'Set up equipment at pool edge for easy access',
        'Plan your lane usage and timing intervals'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent effort levels per zone',
        'Use pool clock for accurate rest intervals'
      ],
      common_mistakes: [
        'Starting too fast in the warm-up',
        'Not taking adequate rest between intervals',
        'Losing technique focus during high-intensity sets'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on intensity'
    }
  },

  'swim-10x75-descending': {
    id: 'swim-10x75-descending',
    name: '10 x 75 Descending - Swimming Intervals',
    category: 'cardio',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 400m at Z2 (RPE 3), rest 15s',
      '100m kick on side (change sides each 25m) at Z2 (RPE 4), rest 15s',
      '4x50m drill/swim (25m each) at Z2 (RPE 3), rest 15s',
      '**Activation:** 4x50m build from Z2 to Z5 (RPE 3-9), rest 20s',
      '**Main Set:** 6x75m at Z3 (RPE 5), rest 10s',
      '3x75m at Z4a (RPE 7), rest 20s',
      '1x75m ALL OUT at Z6 (RPE 10), rest 30s',
      '**Cool-down (100m):** Easy at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Ensure proper pool depth and safety regulations',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Reduce to 6x75m total, extend rest intervals, reduce intensity zones',
      advanced: 'Add second all-out 75m or increase main set to 8x75m at Z3',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 1350,
      progressionRate: 0.10,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up gradually',
        'Plan your lane usage and timing intervals',
        'Focus on descending times through the set'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent effort levels per zone',
        'Use pool clock for accurate rest intervals'
      ],
      common_mistakes: [
        'Starting too fast in the warm-up',
        'Not taking adequate rest between intervals',
        'Losing technique focus during high-intensity sets'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on intensity'
    }
  },

  'swim-broken-400s': {
    id: 'swim-broken-400s',
    name: 'Broken 400s - Swimming Lactate Set',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 4,
    instructions: [
      '**Warm-up (200m):** Easy at Z2 (RPE 3), rest 15s',
      '**Activation:** 200m drill/swim alternating every 25m at Z2 (RPE 3), rest 15s',
      '100m kick/swim changing every 25m at Z2 (RPE 4), rest 15s',
      '100m build from Z2 to Z4b (RPE 3-8), rest 15s',
      '**Main Set:** 1x400m at Z3 (RPE 6), rest 30s',
      '2x200m at Z4a (RPE 7), rest 20s',
      '4x100m at Z4b (RPE 8), rest 15s',
      '8x50m at Z5 (RPE 9), rest 10s',
      '**Cool-down (200m):** Gradual fade from Z3 to Z1 (RPE 4-1)'
    ],
    safetyNotes: [
      'High-intensity workout - ensure proper swimming fitness level',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Reduce main set to 1x200m, 2x100m, 4x50m with extended rest',
      advanced: 'Add second round of main set or increase 50m sprints to 12x50m',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2400,
      progressionRate: 0.08,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up gradually',
        'Plan your lane usage and timing intervals',
        'Focus on maintaining pace through broken sets'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent effort levels per zone',
        'Use pool clock for accurate rest intervals'
      ],
      common_mistakes: [
        'Starting too fast in the warm-up',
        'Not taking adequate rest between intervals',
        'Losing technique focus during high-intensity sets'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on intensity'
    }
  },

  'swim-2x5x50-best-average': {
    id: 'swim-2x5x50-best-average',
    name: '2 x (5 x 50) Best Average - Swimming Speed Set',
    category: 'cardio',
    equipment: ['Pool', 'Pull Buoy', 'Ankle Band'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 4,
    instructions: [
      '**Warm-up:** 400m at Z1 (RPE 2), rest 15s',
      '300m pull at Z2 (RPE 3), rest 15s',
      '200m kick at Z2 (RPE 4), rest 15s',
      '100m swim at Z3 (RPE 5), rest 15s',
      '**Activation:** 4x50m drill/swim (25m each) at Z2 (RPE 3), rest 15s',
      '**Main Set 1:** 5x50m best average with ankle band and buoy, rest 60s',
      '**Main Set 2:** 5x50m best average (no equipment), rest 60s',
      '**Extra Volume:** 200m pull at Z3 (RPE 5) - long smooth strokes, perfect form, rest 30s',
      '**Cool-down:** 100m swim at Z2 (RPE 2)'
    ],
    safetyNotes: [
      'High-intensity workout - ensure proper swimming fitness level',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Reduce to 3x50m per set, extend rest intervals, remove equipment restrictions',
      advanced: 'Add third set or reduce rest intervals to 45s',
      equipment_alternatives: {
        'Ankle Band': 'Pool noodle between ankles or no equipment',
        'Pull Buoy': 'Water bottle between legs or no equipment'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 2200,
      progressionRate: 0.08,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up gradually',
        'Set up equipment at pool edge for easy access',
        'Focus on maintaining best average time across all 50s'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent times across all intervals',
        'Use pool clock for accurate timing'
      ],
      common_mistakes: [
        'Going out too fast on first 50m',
        'Not maintaining consistent times',
        'Poor technique with equipment'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on intensity'
    }
  },

  'swim-2x20x50': {
    id: 'swim-2x20x50',
    name: '2 x (20 x 50m) - Swimming Endurance Speed Set',
    category: 'endurance',
    equipment: ['Pool'],
    muscleGroups: ['Full Body', 'Shoulders', 'Core', 'Legs'],
    difficulty: 5,
    instructions: [
      '**Warm-up:** 6x100m at Z2-Z3 (RPE 4-5) focusing on distance per stroke, rest 20s',
      '**Activation:** 8x50m at Z2 (RPE 3-4) - 25m 3 kick/3 stroke switch drill + 25m swim, rest 15s',
      'Drill: Push off on side, kick 8 times with ear on arm, body straight, knees passing. 3 strokes then pull to roll to other side',
      '**Main Set:** 2 rounds of 20x25m at Z5 (RPE 9) maintaining distance per stroke, rest 15s',
      'Between sets: 100m backstroke or breaststroke at Z1 (RPE 2)',
      '**Cool-down:** 200m choice of strokes at Z1 (RPE 2)'
    ],
    safetyNotes: [
      'Very high-intensity workout - ensure excellent swimming fitness level',
      'Stop if you feel any pain, especially in shoulders or knees',
      'Hydrate well before and after swimming',
      'Have lifeguard present or swim with a buddy'
    ],
    modifications: {
      beginner: 'Not recommended - use shorter interval sets instead',
      advanced: 'Reduce rest intervals to 10s or add third set',
      equipment_alternatives: {
        'Pool': 'Open water (with proper safety measures and supervision)'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 3300,
      progressionRate: 0.05,
      unit: 'meters'
    },
    coaching: {
      setup: [
        'Enter pool safely and warm up thoroughly',
        'Plan your lane usage and timing intervals',
        'Focus on maintaining distance per stroke throughout'
      ],
      execution: [
        'Focus on technique over speed during warm-up',
        'Maintain consistent stroke count per length',
        'Use pool clock for accurate rest intervals'
      ],
      common_mistakes: [
        'Starting too fast and losing stroke efficiency',
        'Not maintaining distance per stroke',
        'Inadequate rest between sets'
      ],
      breathing: 'Maintain bilateral breathing pattern, adjust frequency based on high intensity'
    }
  }
};

// Zone reference for coaches and athletes
export const SWIMMING_ZONE_GUIDE = {
  'Z1': 'Active recovery - Easy swimming, conversational pace',
  'Z2': 'Aerobic base - Comfortable effort, sustainable for long periods',
  'Z3': 'Tempo - Moderately hard, race pace for longer events',
  'Z4a': 'Lactate threshold - Hard effort, sustainable for 20-40 minutes',
  'Z4b': 'VO2 max - Very hard, sustainable for 8-15 minutes',
  'Z5': 'Neuromuscular - Near maximal, 30s-2min efforts',
  'Z6': 'All-out - Maximal effort, under 30 seconds'
};

export default SWIMMING_WORKOUT_EXERCISES; 