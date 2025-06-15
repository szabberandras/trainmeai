import { Exercise } from '../types';

export const RECOVERY_WARM_UP_EXERCISES: Record<string, Exercise> = {
  'foam-rolling': {
    id: 'foam-rolling',
    name: 'Foam Rolling / Self-Myofascial Release',
    category: 'recovery-warm-up',
    equipment: ['foam roller'],
    muscleGroups: ['various (depending on area rolled)'],
    difficulty: 1,
    instructions: [
      'Position the foam roller under the target muscle group.',
      'Apply moderate pressure and slowly roll back and forth.',
      'Spend 30-60 seconds on each muscle group.',
      'When you find a tender spot, pause and hold for 20-30 seconds.',
      'Breathe deeply and try to relax the muscle.'
    ],
    safetyNotes: [
      'Avoid rolling directly on bones or joints.',
      'Don\'t roll too aggressively; moderate pressure is sufficient.',
      'Stop if you experience sharp pain.',
      'Avoid rolling the lower back directly.'
    ],
    modifications: {
      beginner: 'Lighter pressure, shorter durations, focus on large muscle groups.',
      advanced: 'Increased pressure, longer durations, using a smaller/denser roller or lacrosse ball for targeted areas.',
      equipment_alternatives: {
        'lacrosse-ball': 'Lacrosse ball (for smaller, more precise areas)',
        'tennis-ball': 'Tennis ball (softer option)'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 30,
      progressionRate: 5,
      unit: 'seconds per muscle group'
    },
    coaching: {
      setup: [
        'Choose appropriate foam roller density.',
        'Find comfortable position.',
        'Target specific muscle groups.'
      ],
      execution: [
        'Apply moderate, consistent pressure.',
        'Roll slowly and controlled.',
        'Pause on tender spots.',
        'Breathe deeply throughout.'
      ],
      common_mistakes: [
        'Rolling too fast.',
        'Applying too much pressure.',
        'Rolling over bones/joints.',
        'Holding breath during rolling.'
      ],
      breathing: 'Deep, slow breaths, especially when holding on tender spots.'
    }
  }
};

export default RECOVERY_WARM_UP_EXERCISES;
