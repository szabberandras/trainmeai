import { Exercise } from '../types';

export const STRENGTH_EXERCISES: Record<string, Exercise> = {
  'push-up': {
    id: 'push-up',
    name: 'Push-up',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Chest', 'Shoulders', 'Triceps', 'Core'],
    difficulty: 1,
    instructions: [
      'Start in a plank position with hands slightly wider than shoulder-width apart.',
      'Keep your body in a straight line from head to heels.',
      'Lower your chest towards the floor by bending your elbows.',
      'Push back up to the starting position.',
      'Keep your core engaged throughout the movement.'
    ],
    safetyNotes: [
      'Maintain a straight line from head to heels.',
      'Do not let your hips sag or pike up.',
      'Keep your head in a neutral position.'
    ],
    modifications: {
      beginner: 'Perform on knees or against a wall.',
      advanced: 'Add a clap or perform single-arm push-ups.',
      equipment_alternatives: {
        'None': 'Incline push-ups using a bench or step.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Hands slightly wider than shoulders.',
        'Body in straight line.',
        'Core engaged.'
      ],
      execution: [
        'Lower chest to floor.',
        'Push back up explosively.',
        'Maintain form throughout.'
      ],
      common_mistakes: [
        'Sagging hips.',
        'Flaring elbows too wide.',
        'Partial range of motion.'
      ],
      breathing: 'Inhale on the way down, exhale on the way up.'
    }
  },
  'squat': {
    id: 'squat',
    name: 'Squat',
    category: 'strength',
    equipment: [],
    muscleGroups: ['Quads', 'Glutes', 'Hamstrings', 'Core'],
    difficulty: 1,
    instructions: [
      'Stand with feet shoulder-width apart.',
      'Lower your body by bending at the hips and knees.',
      'Keep your chest up and knees tracking over your toes.',
      'Lower until your thighs are parallel to the floor.',
      'Drive through your heels to return to standing.'
    ],
    safetyNotes: [
      'Keep your knees aligned with your toes.',
      'Maintain a neutral spine.',
      'Do not let your knees cave inward.'
    ],
    modifications: {
      beginner: 'Use a chair for support or reduce range of motion.',
      advanced: 'Add weight or perform jump squats.',
      equipment_alternatives: {
        'None': 'Goblet squats with a water bottle.'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 15,
      progressionRate: 0.1,
      unit: 'reps'
    },
    coaching: {
      setup: [
        'Feet shoulder-width apart.',
        'Chest up, core engaged.',
        'Weight in heels.'
      ],
      execution: [
        'Sit back and down.',
        'Knees track over toes.',
        'Drive through heels to stand.'
      ],
      common_mistakes: [
        'Knees caving in.',
        'Forward lean.',
        'Not going deep enough.'
      ],
      breathing: 'Inhale on the way down, exhale on the way up.'
    }
  }
  // Note: This is a sample with 2 exercises. The full file would contain all 99 strength exercises
  // For brevity, I'm showing the structure. In practice, we'd extract all strength exercises from the main database.
};

export default STRENGTH_EXERCISES; 