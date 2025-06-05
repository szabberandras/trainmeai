import { Exercise } from '../types';

export const MOBILITY_EXERCISES: Record<string, Exercise> = {
  'arm-circles': {
    id: 'arm-circles',
    name: 'Arm Circles',
    category: 'mobility',
    equipment: [],
    muscleGroups: ['Shoulders', 'Arms'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart.',
      'Extend arms out to the sides at shoulder height.',
      'Make small circles with your arms, gradually increasing the size.',
      'Perform circles in both directions.'
    ],
    safetyNotes: [
      'Start with small circles and gradually increase size.',
      'Stop if you feel any pain or discomfort.',
      'Keep movements controlled.'
    ],
    modifications: {
      beginner: 'Make smaller circles and reduce duration.',
      advanced: 'Add light weights or increase duration.',
      equipment_alternatives: {
        'None': 'This is a bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'circles each direction'
    },
    coaching: {
      setup: [
        'Stand tall with arms extended.',
        'Shoulders relaxed.',
        'Core engaged.'
      ],
      execution: [
        'Make controlled circles.',
        'Start small, increase size.',
        'Reverse direction.'
      ],
      common_mistakes: [
        'Moving too fast.',
        'Tensing shoulders.',
        'Making jerky movements.'
      ],
      breathing: 'Breathe naturally throughout the movement.'
    }
  }
  // Note: This would contain all 26 mobility exercises in the full implementation
};

export default MOBILITY_EXERCISES; 