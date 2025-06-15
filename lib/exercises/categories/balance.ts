import { Exercise } from '../types';

export const BALANCE_EXERCISES: Record<string, Exercise> = {
  'balance-beam-walk': {
    id: 'balance-beam-walk',
    name: 'Balance Beam Walk',
    category: 'balance',
    equipment: [],
    muscleGroups: ['core', 'legs', 'stabilizers'],
    difficulty: 2,
    instructions: [
      'Start by walking along a straight line on ground.',
      'Place one foot directly in front of the other.',
      'Keep arms out to sides for balance.',
      'Look ahead, not down at feet.',
      'Take slow, controlled steps.',
      'Progress to actual balance beam when comfortable.',
      'Practice walking backward when forward is mastered.',
      'Add arm movements or eyes closed for challenge.'
    ],
    safetyNotes: [
      'Start with line on ground before elevated beam.',
      'Have spotter nearby for elevated versions.',
      'Practice falling safely if using elevated beam.'
    ],
    modifications: {
      beginner: 'Use wide tape line on ground. Allow toe-to-heel stepping.',
      advanced: 'Use narrow beam. Add dynamic movements like turns.'
    },
    equipment_alternatives: ['balance_beam', 'tape'],
    progressionRate: 0.02,
    metrics: {
      type: 'distance',
      defaultValue: 10,
      unit: 'meters'
    },
    coaching: {
      setup: ['Clear, straight path', 'Start at easy level'],
      execution: ['Direct foot placement', 'Eyes looking ahead', 'Arms for balance'],
      common_mistakes: ['Looking down at feet', 'Rushing the movement', 'Not using arms for balance'],
      breathing: 'Calm, steady breathing to maintain focus.'
    }
  },

  'single-leg-stance': {
    id: 'single-leg-stance',
    name: 'Single Leg Stance',
    category: 'balance',
    equipment: [],
    muscleGroups: ['core', 'legs', 'ankles', 'stabilizers'],
    difficulty: 2,
    instructions: [
      'Stand with feet hip-width apart.',
      'Lift one knee to 90 degrees in front of body.',
      'Balance on standing leg for target duration.',
      'Keep standing leg slightly bent, not locked.',
      'Engage core muscles for stability.',
      'Arms can move freely for balance.',
      'Switch legs and repeat for equal time.',
      'Progress to eyes closed or unstable surface.'
    ],
    safetyNotes: [
      'Practice near wall or support initially.',
      'Don\'t lock standing knee completely.',
      'Progress difficulty gradually.'
    ],
    modifications: {
      beginner: 'Hold wall or chair for support. Start with shorter durations.',
      advanced: 'Close eyes, stand on foam pad, or add movement challenges.'
    },
    equipment_alternatives: ['foam_pad', 'wall'],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 30,
      unit: 'seconds per leg'
    },
    coaching: {
      setup: ['Stable surface', 'Support available if needed'],
      execution: ['Engage core muscles', 'Slight bend in standing leg', 'Focus point ahead'],
      common_mistakes: ['Locking standing knee', 'Not engaging core', 'Allowing lifted leg to touch down'],
      breathing: 'Steady, calm breathing to maintain focus and stability.'
    }
  }
};

export default BALANCE_EXERCISES;
