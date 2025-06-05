import { Exercise } from '../types';

export const CARDIO_EXERCISES: Record<string, Exercise> = {
  'jumping-jacks': {
    id: 'jumping-jacks',
    name: 'Jumping Jacks',
    category: 'cardio',
    equipment: [],
    muscleGroups: ['Full Body', 'Cardiovascular'],
    difficulty: 1,
    instructions: [
      'Stand with feet together and arms at your sides.',
      'Jump while spreading your legs shoulder-width apart.',
      'Simultaneously raise your arms overhead.',
      'Jump back to the starting position.',
      'Repeat in a continuous, rhythmic motion.'
    ],
    safetyNotes: [
      'Land softly on the balls of your feet.',
      'Keep your core engaged.',
      'Stop if you feel dizzy or overly fatigued.'
    ],
    modifications: {
      beginner: 'Step side to side instead of jumping.',
      advanced: 'Increase speed or add variations like star jumps.',
      equipment_alternatives: {
        'None': 'This is a bodyweight exercise.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 20,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Stand tall, feet together.',
        'Arms at sides.',
        'Core engaged.'
      ],
      execution: [
        'Jump feet apart, arms up.',
        'Jump back to start.',
        'Maintain rhythm.'
      ],
      common_mistakes: [
        'Landing hard on heels.',
        'Not fully extending arms.',
        'Moving too fast without control.'
      ],
      breathing: 'Breathe rhythmically with the movement.'
    }
  }
  // Note: This would contain all 18 cardio exercises in the full implementation
};

export default CARDIO_EXERCISES; 