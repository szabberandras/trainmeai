import { Exercise } from '../types';

export const TECHNIQUE_EXERCISES: Record<string, Exercise> = {
  'kickboard-swim-drill': {
    id: 'kickboard-swim-drill',
    name: 'Kickboard Swim Drill',
    category: 'technique',
    equipment: ['kickboard'],
    muscleGroups: ['legs', 'core', 'shoulders'],
    difficulty: 2,
    instructions: [
      'Hold kickboard at arm\'s length in water',
      'Kick from hips, not knees',
      'Keep head neutral and torso flat',
      'Perform continuous flutter kicks for set distance'
    ],
    safetyNotes: ['Use in supervised pool environment'],
    modifications: {
      beginner: 'Use fins for assistance',
      advanced: 'Add snorkel or reduce breathing breaks',
      equipment_alternatives: {
        'no kickboard': 'Hands extended streamline kick'
      }
    },
    metrics: {
      type: 'distance',
      defaultValue: 25,
      progressionRate: 25,
      unit: 'meters'
    },
    coaching: {
      setup: ['Hold board properly', 'Streamlined body position'],
      execution: ['Small, fast kicks', 'Engage core'],
      common_mistakes: ['Kicking from knees', 'Head too high'],
      breathing: 'Bilateral or snorkel-based breathing'
    }
  },

  'underwater-kick': {
    id: 'underwater-kick',
    name: 'Underwater Dolphin Kick',
    category: 'technique',
    equipment: ['swimming pool', 'fins (optional)'],
    muscleGroups: ['core', 'glutes', 'calves'],
    difficulty: 3,
    instructions: [
      'Push off wall, arms overhead',
      'Engage core and initiate dolphin kick from hips',
      'Keep legs extended, minimal knee bend',
      'Use streamlined position'
    ],
    safetyNotes: ['Ensure breath control', 'Use lifeguarded pool'],
    modifications: {
      beginner: 'Short distance (5m)',
      advanced: 'With fins or longer distance'
    },
    metrics: {
      type: 'distance',
      defaultValue: 10,
      progressionRate: 5,
      unit: 'meters'
    },
    coaching: {
      setup: ['Streamline arms', 'Tight core'],
      execution: ['Small, fast kicks', 'Initiate from core'],
      common_mistakes: ['Too much knee', 'Loose upper body'],
      breathing: 'Exhale underwater'
    }
  },

  'stride-outs': {
    id: 'stride-outs',
    name: 'Stride Outs',
    category: 'technique',
    equipment: [],
    muscleGroups: ['glutes', 'hamstrings', 'quads', 'calves'],
    difficulty: 2,
    instructions: [
      'Jog 10–20m, then accelerate to ~90% effort',
      'Hold speed for 20m, then decelerate',
      'Walk back to recover, repeat 4–6 times'
    ],
    safetyNotes: ['Do not sprint from cold', 'Warm-up required'],
    modifications: {
      beginner: '60% effort',
      advanced: 'Add uphill strides'
    },
    metrics: {
      type: 'reps',
      defaultValue: 4,
      progressionRate: 2,
      unit: 'reps'
    },
    coaching: {
      setup: ['Flat soft surface', 'Relaxed arms'],
      execution: ['Smooth acceleration', 'Good posture'],
      common_mistakes: ['Overstriding', 'Tight shoulders'],
      breathing: 'Exhale as speed increases'
    }
  }
};

export default TECHNIQUE_EXERCISES;
