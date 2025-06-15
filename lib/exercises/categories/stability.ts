import { Exercise } from '../types';

export const STABILITY_EXERCISES: Record<string, Exercise> = {
  'single-leg-reach': {
    id: 'single-leg-reach',
    name: 'Single-Leg Reach',
    category: 'stability',
    equipment: [],
    muscleGroups: ['Glutes', 'Hamstrings', 'Ankles'],
    difficulty: 2,
    instructions: [
      'Stand on your right leg with a slight bend in the knee.',
      'Keeping your back straight, hinge at your hips and reach your hands forward towards the floor.',
      'As you hinge, your left leg should extend straight back behind you for balance.',
      'Focus on maintaining balance using the small muscles in your standing foot and ankle.',
      'Go as low as you can control without losing your balance or rounding your back.',
      'Return to the starting position with control.',
      'Repeat for the desired reps, then switch legs.'
    ],
    safetyNotes: [
      'Keep the core engaged and the back straight.',
      'The movement should be slow and deliberate.',
      'If you lose balance, tap your other foot down and reset.'
    ],
    modifications: {
      beginner: 'Practice next to a wall or chair for support. Reduce the range of motion.',
      advanced: 'Try to touch the floor with your fingertips. Perform on an unstable surface like a cushion.',
      equipment_alternatives: {
        'None': 'Can be performed anywhere with adequate space.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 1,
      unit: 'repetitions per side'
    },
    coaching: {
      setup: [
        'Stand on one leg, knee slightly bent.',
        'Engage your core.'
      ],
      execution: [
        'Hinge at the hip like a drinking bird.',
        'Reach forward as your other leg extends back.',
        'Keep your standing foot, knee, and hip aligned.',
        'Control the movement up and down.'
      ],
      common_mistakes: [
        'Bending the back.',
        'Letting the standing knee collapse inward.',
        'Rushing the movement.'
      ],
      breathing: 'Inhale as you hinge forward, exhale as you return to standing.'
    }
  }
};

export default STABILITY_EXERCISES;
