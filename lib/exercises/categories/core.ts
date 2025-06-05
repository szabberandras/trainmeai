import { Exercise } from '../types';

export const CORE_EXERCISES: Record<string, Exercise> = {
  'plank': {
    id: 'plank',
    name: 'Plank',
    category: 'core',
    equipment: [],
    muscleGroups: ['Core', 'Shoulders', 'Glutes'],
    difficulty: 2,
    instructions: [
      'Start in a push-up position with forearms on the ground.',
      'Keep your body in a straight line from head to heels.',
      'Engage your core and hold the position.',
      'Breathe normally while maintaining the position.'
    ],
    safetyNotes: [
      'Do not let your hips sag or pike up.',
      'Keep your head in a neutral position.',
      'Stop if you feel pain in your lower back.'
    ],
    modifications: {
      beginner: 'Perform on knees or against a wall.',
      advanced: 'Add leg lifts or arm reaches.',
      equipment_alternatives: {
        'None': 'Wall plank for beginners.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 0.1,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Forearms on ground, elbows under shoulders.',
        'Body in straight line.',
        'Core engaged.'
      ],
      execution: [
        'Hold position steady.',
        'Breathe normally.',
        'Maintain alignment.'
      ],
      common_mistakes: [
        'Sagging hips.',
        'Holding breath.',
        'Looking up or down.'
      ],
      breathing: 'Breathe normally throughout the hold.'
    }
  }
  // Note: This would contain all 21 core exercises in the full implementation
};

export default CORE_EXERCISES; 