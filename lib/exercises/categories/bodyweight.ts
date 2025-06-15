import { Exercise } from '../types';

export const BODYWEIGHT_EXERCISES: Record<string, Exercise> = {
  'muscle-ups': {
    id: 'muscle-ups',
    name: 'Muscle-ups',
    category: 'bodyweight',
    equipment: ['Pull-up bar or rings'],
    muscleGroups: ['Full Upper Body', 'Core', 'Power'],
    difficulty: 4,
    instructions: [
      'Start in dead hang position.',
      'Perform explosive pull-up bringing chest to bar.',
      'At top of pull, lean forward and transition over bar.',
      'Press down on bar to complete the dip portion.',
      'Finish with arms locked out above the bar.',
      'Lower with control back to dead hang.',
      'Requires significant upper body strength and power.',
      'Practice transition phase extensively.'
    ],
    safetyNotes: [
      'Master pull-ups and dips before attempting.',
      'Start with assisted or banded versions.',
      'High skill movement requiring progression.'
    ],
    modifications: {
      beginner: 'Practice pull-ups, dips, and transition separately.',
      advanced: 'Ring muscle-ups, weighted muscle-ups.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'reps',
      defaultValue: 3,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Strong dead hang', 'Explosive mindset'],
      execution: ['Explosive pull', 'Quick transition', 'Strong dip finish'],
      common_mistakes: ['Insufficient pull-up strength', 'Poor transition', 'Kipping too much'],
      breathing: 'Deep breath before, controlled breathing throughout.'
    }
  },

  'duck-walk': {
    id: 'duck-walk',
    name: 'Duck Walk',
    category: 'bodyweight',
    equipment: ['Floor space'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Calves', 'Balance'],
    difficulty: 3,
    instructions: [
      'Squat down keeping heels on ground.',
      'Keep chest up and core engaged.',
      'Walk forward in squat position.',
      'Take small steps while maintaining squat depth.',
      'Keep knees tracking over toes.',
      'Maintain balance throughout movement.',
      'Keep back straight and chest up.',
      'Can walk forward, backward, or sideways.'
    ],
    safetyNotes: [
      'Requires good ankle and hip mobility.',
      'Start with short distances.',
      'Don\'t force depth if mobility is limited.'
    ],
    modifications: {
      beginner: 'Partial squat depth, use wall for balance.',
      advanced: 'Deeper squat, longer distances, add speed.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'distance',
      defaultValue: 20,
      unit: 'meters'
    },
    coaching: {
      setup: ['Deep squat position', 'Heels down', 'Chest up'],
      execution: ['Small steps', 'Maintain depth', 'Good balance'],
      common_mistakes: ['Heels come up', 'Poor balance', 'Insufficient depth'],
      breathing: 'Controlled breathing while maintaining squat.'
    }
  },

  'dips': {
    id: 'dips',
    name: 'Dips',
    category: 'bodyweight',
    equipment: ['Parallel bars or dip station'],
    muscleGroups: ['Triceps', 'Chest', 'Shoulders', 'Core'],
    difficulty: 3,
    instructions: [
      'Grip parallel bars with arms straight.',
      'Support body weight on straight arms.',
      'Lower body by bending elbows.',
      'Descend until shoulders are below elbows.',
      'Press back up to starting position.',
      'Keep body upright throughout movement.',
      'Control the descent and ascent.',
      'Maintain core engagement.'
    ],
    safetyNotes: [
      'Build up shoulder and tricep strength gradually.',
      'Don\'t descend too deep initially.',
      'Use assistance if needed.'
    ],
    modifications: {
      beginner: 'Assisted dips, partial range of motion.',
      advanced: 'Weighted dips, ring dips.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Secure grip on bars', 'Straight arm support'],
      execution: ['Controlled descent', 'Full range of motion', 'Strong press up'],
      common_mistakes: ['Too deep descent', 'Forward lean', 'Partial range'],
      breathing: 'Inhale during descent, exhale during press up.'
    }
  },

  'handstand-push-ups': {
    id: 'handstand-push-ups',
    name: 'Handstand Push-ups',
    category: 'bodyweight',
    equipment: ['Wall space'],
    muscleGroups: ['Shoulders', 'Triceps', 'Core', 'Balance'],
    difficulty: 5,
    instructions: [
      'Start in handstand position against wall.',
      'Lower head toward ground by bending elbows.',
      'Descend until head lightly touches ground.',
      'Press back up to full handstand.',
      'Keep core tight throughout movement.',
      'Maintain straight body line.',
      'Control both descent and ascent.',
      'Focus on shoulder and tricep strength.'
    ],
    safetyNotes: [
      'Master handstand hold first.',
      'Use wall for support initially.',
      'Very advanced exercise - build up gradually.'
    ],
    modifications: {
      beginner: 'Pike push-ups, feet elevated push-ups.',
      advanced: 'Freestanding handstand push-ups.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'reps',
      defaultValue: 3,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Stable handstand position', 'Wall support'],
      execution: ['Controlled descent', 'Light head touch', 'Strong press up'],
      common_mistakes: ['Poor handstand position', 'Incomplete range', 'Loss of balance'],
      breathing: 'Controlled breathing throughout movement.'
    }
  },

  'pistol-squats': {
    id: 'pistol-squats',
    name: 'Pistol Squats',
    category: 'bodyweight',
    equipment: ['Floor space'],
    muscleGroups: ['Single leg strength', 'Balance', 'Mobility', 'Core'],
    difficulty: 5,
    instructions: [
      'Stand on one leg with other leg extended forward.',
      'Lower into single leg squat.',
      'Keep extended leg straight and off ground.',
      'Descend as low as possible.',
      'Drive through heel to return to standing.',
      'Maintain balance throughout movement.',
      'Keep core engaged for stability.',
      'Complete all reps on one leg before switching.'
    ],
    safetyNotes: [
      'Requires excellent single leg strength and mobility.',
      'Build up gradually with assisted versions.',
      'Focus on control over depth.'
    ],
    modifications: {
      beginner: 'Assisted pistol squats, box pistol squats.',
      advanced: 'Weighted pistol squats, jumping pistol squats.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 3,
      unit: 'repetitions each leg'
    },
    coaching: {
      setup: ['Single leg balance', 'Extended leg position'],
      execution: ['Controlled descent', 'Maintain balance', 'Drive through heel'],
      common_mistakes: ['Loss of balance', 'Incomplete range', 'Poor control'],
      breathing: 'Controlled breathing, exhale during ascent.'
    }
  }
};

export default BODYWEIGHT_EXERCISES;
