import { Exercise } from '../types';

export const LUNGE_EXERCISES: Record<string, Exercise> = {
  'walking-lunges': {
    id: 'walking-lunges',
    name: 'Walking Lunges',
    category: 'lunge',
    equipment: ['Floor space'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings', 'Calves'],
    difficulty: 2,
    instructions: [
      'Start standing with feet hip-width apart.',
      'Step forward into lunge position.',
      'Lower back knee toward ground.',
      'Keep front knee over ankle.',
      'Push off back foot to step forward.',
      'Bring back leg forward into next lunge.',
      'Continue walking forward with lunges.',
      'Maintain upright torso throughout.'
    ],
    safetyNotes: [
      'Control the descent in each lunge.',
      'Don\'t let front knee cave inward.',
      'Ensure adequate space for walking.'
    ],
    modifications: {
      beginner: 'Shorter steps, use wall for balance if needed.',
      advanced: 'Add weight, increase step length.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 12,
      unit: 'repetitions each leg'
    },
    coaching: {
      setup: ['Hip-width stance', 'Upright posture'],
      execution: ['Controlled lunge', 'Knee over ankle', 'Smooth walking motion'],
      common_mistakes: ['Knee caving', 'Forward lean', 'Uncontrolled descent'],
      breathing: 'Inhale during descent, exhale during step forward.'
    }
  },

  'reverse-lunges': {
    id: 'reverse-lunges',
    name: 'Reverse Lunges',
    category: 'lunge',
    equipment: ['Floor space'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Hamstrings', 'Core'],
    difficulty: 2,
    instructions: [
      'Start standing with feet hip-width apart.',
      'Step backward into lunge position.',
      'Lower back knee toward ground.',
      'Keep front knee over ankle.',
      'Push through front heel to return to standing.',
      'Bring back leg back to starting position.',
      'Repeat on same leg or alternate.',
      'Maintain balance and control throughout.'
    ],
    safetyNotes: [
      'Control the backward step.',
      'Focus on front leg stability.',
      'Don\'t let front knee drift forward.'
    ],
    modifications: {
      beginner: 'Hold onto support for balance.',
      advanced: 'Add weight, increase depth.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 10,
      unit: 'repetitions each leg'
    },
    coaching: {
      setup: ['Balanced starting position', 'Core engaged'],
      execution: ['Controlled backward step', 'Stable front leg', 'Return to center'],
      common_mistakes: ['Loss of balance', 'Front knee drift', 'Poor control'],
      breathing: 'Inhale during descent, exhale during return.'
    }
  },

  'lateral-lunges': {
    id: 'lateral-lunges',
    name: 'Lateral Lunges',
    category: 'lunge',
    equipment: ['Floor space'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Adductors', 'Abductors'],
    difficulty: 3,
    instructions: [
      'Start standing with feet hip-width apart.',
      'Step wide to one side.',
      'Sit back into hip of stepping leg.',
      'Keep other leg straight.',
      'Lower until comfortable stretch in groin.',
      'Push off stepping leg to return to center.',
      'Repeat on other side.',
      'Keep chest up and core engaged.'
    ],
    safetyNotes: [
      'Don\'t force the stretch.',
      'Keep knee of lunging leg over ankle.',
      'Start with smaller steps.'
    ],
    modifications: {
      beginner: 'Smaller step, partial depth.',
      advanced: 'Deeper lunge, add weight.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions each side'
    },
    coaching: {
      setup: ['Wide stance available', 'Balanced starting position'],
      execution: ['Wide step', 'Sit into hip', 'Straight opposite leg'],
      common_mistakes: ['Knee caving inward', 'Forward lean', 'Forcing depth'],
      breathing: 'Inhale during lunge, exhale during return.'
    }
  },

  'curtsy-lunges': {
    id: 'curtsy-lunges',
    name: 'Curtsy Lunges',
    category: 'lunge',
    equipment: ['Floor space'],
    muscleGroups: ['Glutes', 'Quadriceps', 'Hip stabilizers', 'Core'],
    difficulty: 3,
    instructions: [
      'Start standing with feet hip-width apart.',
      'Step one leg behind and across the other.',
      'Lower into lunge position.',
      'Keep front knee over ankle.',
      'Push off back leg to return to standing.',
      'Repeat on same side or alternate.',
      'Focus on balance and control.',
      'Keep hips square to front.'
    ],
    safetyNotes: [
      'Start with smaller cross-behind steps.',
      'Focus on balance and stability.',
      'Don\'t force the range of motion.'
    ],
    modifications: {
      beginner: 'Smaller step, hold support for balance.',
      advanced: 'Deeper lunge, add weight.'
    },
    equipment_alternatives: [],
    progressionRate: 0.04,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions each side'
    },
    coaching: {
      setup: ['Balanced starting position', 'Core engaged'],
      execution: ['Cross behind step', 'Controlled descent', 'Stable return'],
      common_mistakes: ['Loss of balance', 'Hip rotation', 'Poor control'],
      breathing: 'Inhale during descent, exhale during return.'
    }
  }
};

export default LUNGE_EXERCISES;
