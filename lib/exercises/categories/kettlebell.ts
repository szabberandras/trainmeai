import { Exercise } from '../types';

export const KETTLEBELL_EXERCISES: Record<string, Exercise> = {
  'kettlebell-swings': {
    id: 'kettlebell-swings',
    name: 'Kettlebell Swings',
    category: 'kettlebell',
    equipment: ['Kettlebell'],
    muscleGroups: ['Glutes', 'Hamstrings', 'Core', 'Shoulders'],
    difficulty: 3,
    instructions: [
      'Stand with feet slightly wider than shoulder-width.',
      'Hold kettlebell with both hands.',
      'Hinge at hips and swing kettlebell between legs.',
      'Drive hips forward explosively.',
      'Swing kettlebell to chest/shoulder height.',
      'Let kettlebell fall naturally.',
      'Catch with hip hinge movement.',
      'Maintain neutral spine throughout.'
    ],
    safetyNotes: [
      'Learn proper hip hinge pattern first.',
      'Start with lighter weight.',
      'Ensure adequate space around you.'
    ],
    modifications: {
      beginner: 'Lighter kettlebell, focus on hip hinge pattern.',
      advanced: 'Heavier weight, single arm variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 15,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Wide stance', 'Kettlebell between legs', 'Neutral spine'],
      execution: ['Hip hinge movement', 'Explosive hip drive', 'Control the swing'],
      common_mistakes: ['Squatting instead of hinging', 'Using arms to lift', 'Poor posture'],
      breathing: 'Exhale during hip drive, inhale during hinge.'
    }
  },

  'kettlebell-goblet-squat': {
    id: 'kettlebell-goblet-squat',
    name: 'Kettlebell Goblet Squat',
    category: 'kettlebell',
    equipment: ['Kettlebell'],
    muscleGroups: ['Quadriceps', 'Glutes', 'Core', 'Upper back'],
    difficulty: 2,
    instructions: [
      'Hold kettlebell at chest level by the horns.',
      'Stand with feet shoulder-width apart.',
      'Keep elbows pointing down.',
      'Squat down keeping chest up.',
      'Go as deep as mobility allows.',
      'Drive through heels to stand up.',
      'Keep kettlebell close to body.',
      'Maintain upright torso throughout.'
    ],
    safetyNotes: [
      'Start with lighter weight to learn movement.',
      'Focus on mobility and depth.',
      'Keep core engaged throughout.'
    ],
    modifications: {
      beginner: 'Lighter weight, partial depth if needed.',
      advanced: 'Heavier weight, pause squats, single leg variations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.05,
    metrics: {
      type: 'reps',
      defaultValue: 12,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Kettlebell at chest', 'Elbows down', 'Feet shoulder-width'],
      execution: ['Deep squat', 'Chest up', 'Drive through heels'],
      common_mistakes: ['Forward lean', 'Shallow depth', 'Elbows flaring'],
      breathing: 'Inhale down, exhale up.'
    }
  },

  'kettlebell-turkish-get-up': {
    id: 'kettlebell-turkish-get-up',
    name: 'Turkish Get-Up',
    category: 'kettlebell',
    equipment: ['Kettlebell'],
    muscleGroups: ['Full body', 'Core', 'Stability', 'Coordination'],
    difficulty: 4,
    instructions: [
      'Lie on back with kettlebell in right hand.',
      'Press kettlebell straight up.',
      'Roll to left elbow, then left hand.',
      'Bridge up and sweep left leg under.',
      'Come to kneeling position.',
      'Stand up while keeping kettlebell overhead.',
      'Reverse the movement to return to lying.',
      'Complete all reps on one side before switching.'
    ],
    safetyNotes: [
      'Learn movement without weight first.',
      'Move slowly and controlled.',
      'Keep eyes on kettlebell throughout.'
    ],
    modifications: {
      beginner: 'Practice without weight, break into segments.',
      advanced: 'Heavier weight, continuous movement.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'reps',
      defaultValue: 3,
      unit: 'repetitions each side'
    },
    coaching: {
      setup: ['Lying position', 'Kettlebell pressed up', 'Eyes on weight'],
      execution: ['Slow controlled movement', 'Stable overhead position', 'Smooth transitions'],
      common_mistakes: ['Rushing movement', 'Looking away from weight', 'Poor transitions'],
      breathing: 'Controlled breathing throughout complex movement.'
    }
  },

  'kettlebell-clean': {
    id: 'kettlebell-clean',
    name: 'Kettlebell Clean',
    category: 'kettlebell',
    equipment: ['Kettlebell'],
    muscleGroups: ['Full body', 'Power', 'Coordination', 'Grip'],
    difficulty: 4,
    instructions: [
      'Start with kettlebell between feet.',
      'Hinge at hips and grab kettlebell.',
      'Drive hips forward explosively.',
      'Pull kettlebell up close to body.',
      'Flip kettlebell around wrist to rack position.',
      'Catch in front rack with elbow down.',
      'Lower kettlebell back to starting position.',
      'Focus on smooth, powerful movement.'
    ],
    safetyNotes: [
      'Learn proper technique before adding weight.',
      'Protect wrists during flip motion.',
      'Start with lighter kettlebell.'
    ],
    modifications: {
      beginner: 'Practice hip hinge and rack position separately.',
      advanced: 'Heavier weight, double kettlebell cleans.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions each side'
    },
    coaching: {
      setup: ['Kettlebell between feet', 'Hip hinge position'],
      execution: ['Explosive hip drive', 'Close to body pull', 'Smooth rack'],
      common_mistakes: ['Poor hip drive', 'Banging wrist', 'Arm pulling'],
      breathing: 'Exhale during explosive clean motion.'
    }
  }
};

export default KETTLEBELL_EXERCISES;
