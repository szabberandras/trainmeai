import { Exercise } from '../types';

export const AGILITY_SPEED_EXERCISES: Record<string, Exercise> = {
  'high-knees': {
    id: 'high-knees',
    name: 'High Knees',
    category: 'agility-speed',
    equipment: ['none'],
    muscleGroups: ['quadriceps', 'hip flexors', 'calves', 'core'],
    difficulty: 2,
    instructions: [
      'Stand tall with feet hip-width apart.',
      'Run in place, bringing your knees up towards your chest as high as possible.',
      'Maintain a quick tempo and pump your arms rhythmically.'
    ],
    safetyNotes: [
      'Ensure adequate space to perform the drill without obstacles.',
      'Focus on controlled landings to minimize impact on knees and ankles.',
      'Maintain an upright posture; avoid leaning back.'
    ],
    modifications: {
      beginner: 'Slower pace, lower knee height, focus on coordination.',
      advanced: 'Faster pace, higher knee height, incorporating into sprints or ladder drills.',
      equipment_alternatives: {
        none: 'Running in place, fast feet drills.'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.',
        'Arms ready to pump rhythmically.'
      ],
      execution: [
        'Drive knees up towards chest.',
        'Land on balls of feet.',
        'Maintain quick tempo.',
        'Pump arms in coordination.'
      ],
      common_mistakes: [
        'Leaning backwards.',
        'Landing heavily on heels.',
        'Not lifting knees high enough.',
        'Lack of arm coordination.'
      ],
      breathing: 'Quick, shallow breaths, matching the intensity of the movement.'
    }
  },

  'butt-kicks': {
    id: 'butt-kicks',
    name: 'Butt Kicks',
    category: 'agility-speed',
    equipment: ['none'],
    muscleGroups: ['hamstrings', 'glutes', 'calves'],
    difficulty: 2,
    instructions: [
      'Stand tall with feet hip-width apart.',
      'Run in place, kicking your heels up towards your glutes.',
      'Focus on conditioning and coordinating the glutes and hamstrings for a strong running stride.',
      'Maintain a quick tempo and pump your arms rhythmically.'
    ],
    safetyNotes: [
      'Ensure adequate space to perform the drill.',
      'Focus on controlled movements to prevent hamstring strain.',
      'Maintain an upright posture; avoid leaning forward excessively.'
    ],
    modifications: {
      beginner: 'Slower pace, smaller range of motion.',
      advanced: 'Faster pace, higher intensity, incorporating into dynamic warm-ups or sprints.',
      equipment_alternatives: {
        none: 'Hamstring curls (strength focus).'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Stand tall, feet hip-width apart.',
        'Arms ready to pump rhythmically.'
      ],
      execution: [
        'Actively pull heels towards glutes.',
        'Keep knees pointing downwards.',
        'Maintain a quick, rhythmic pace.',
        'Pump arms in sync with legs.'
      ],
      common_mistakes: [
        'Kicking backwards instead of pulling heels up.',
        'Leaning too far forward.',
        'Lack of arm drive.',
        'Not engaging hamstrings and glutes.'
      ],
      breathing: 'Quick, shallow breaths, matching the intensity of the movement.'
    }
  }
};

export default AGILITY_SPEED_EXERCISES;
