import { Exercise } from './types';

export const NEW_STRENGTH_EXERCISES: Record<string, Exercise> = {
  'single-leg-squat': {
    id: 'single-leg-squat',
    name: 'Single Leg Squat',
    category: 'strength',
    equipment: ['Bodyweight'],
    muscleGroups: ['Glutes', 'hips', 'hamstrings', 'calves', 'quads'],
    difficulty: 4,
    instructions: [
      'Stand on one foot with your other leg bent at the knee.',
      'Once you are balanced on one leg, squat down as low as you can without losing your form.',
      'Do not let your standing knee go past the front of your toes while you squat.',
      'Pause at the bottom of the squat for a second, then push back up through your heel.'
    ],
    safetyNotes: [
      'Focus on a single point in front of you to maintain balance.',
      'Perform this exercise next to a wall or sturdy object for support if needed.'
    ],
    modifications: {
      beginner: 'Use a TRX or hold onto a wall for support. Limit the range of motion.',
      advanced: 'Hold the raised leg straight out in front (Pistol Squat). Add a light dumbbell for extra resistance.'
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      unit: 'repetitions per leg'
    },
    coaching: {
      setup: ['Balance on one leg, keeping your core tight and torso upright.'],
      execution: ['Lower your hips back and down, keeping the standing knee stable.', 'Push through your heel to return to the starting position.'],
      common_mistakes: ['Wobbling excessively.', 'Letting the knee of the standing leg collapse inward.', 'Using momentum instead of controlled strength.'],
      breathing: 'Inhale as you lower, exhale as you push up.'
    }
  },

  'alternate-lunge': {
    id: 'alternate-lunge',
    name: 'Alternate Lunge',
    category: 'strength',
    equipment: ['Bodyweight', 'Dumbbells'],
    muscleGroups: ['Glutes', 'quads'],
    difficulty: 2,
    instructions: [
      'Start with your feet about shoulder width apart, standing tall with your core engaged.',
      'Step forward into lunge and lower until you reach approx. 90 degrees at both knees.',
      'Push your body back up to the starting position through your front heel, switch legs and repeat.',
      '1x right and 1x left is one rep.'
    ],
    safetyNotes: [
      'Ensure your front knee does not travel past your toes.',
      'Keep your torso upright and avoid leaning forward.',
      'Step wide enough to maintain a stable base.'
    ],
    modifications: {
      beginner: 'Perform static lunges without alternating. Reduce the depth of the lunge.',
      advanced: 'Add weight by holding dumbbells. Make the exercise dynamic by adding a jump to switch legs.',
      equipment_alternatives: {
        'dumbbells': 'Dumbbell alternate lunges',
        'kettlebells': 'Kettlebell alternate lunges'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 15,
      unit: 'repetitions per leg'
    },
    coaching: {
      setup: ['Stand tall with feet hip-width apart, core braced.'],
      execution: ['Take a controlled step forward.', 'Lower your hips until both knees are bent at a 90-degree angle.', 'Push off the front foot to return to the start.', 'Alternate legs.'],
      common_mistakes: ['Front knee extending over the ankle.', 'Pushing off the back foot instead of the front foot.', 'Losing balance.'],
      breathing: 'Inhale as you step and lower, exhale as you push back.'
    }
  },

  'dumbbell-pullover': {
    id: 'dumbbell-pullover',
    name: 'Dumbbell Pullover',
    category: 'strength',
    equipment: ['Dumbbell', 'Bench'],
    muscleGroups: ['Pectorals', 'shoulders', 'triceps', 'back', 'serratus anterior'],
    difficulty: 3,
    instructions: [
      'Lay face up on a bench, tighten core, hold a dumbbell in both hands with arms extended straight toward the ceiling.',
      'Keep arms straight as you lower the weight in an arc behind your head to the height of the bench.',
      'Slowly raise the dumbbell back to the starting position and repeat.'
    ],
    safetyNotes: [
      'Use a light weight to begin with to ensure proper form and avoid shoulder strain.',
      'Keep your core engaged and lower back pressed into the bench.',
      'The movement should be slow and controlled.'
    ],
    modifications: {
      beginner: 'Use a very light dumbbell or a weight plate. Limit the range of motion.',
      advanced: 'Increase the weight of the dumbbell.',
      equipment_alternatives: {
        'barbell': 'Barbell pullover',
        'cable': 'Cable pullover'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 12,
      progressionRate: 10,
      unit: 'repetitions'
    },
    coaching: {
      setup: ['Lie on a bench holding one dumbbell with both hands straight above your chest.'],
      execution: ['Keeping a slight bend in your elbows, lower the dumbbell in an arc behind your head.', 'Feel the stretch in your chest and lats.', 'Pull the dumbbell back over your chest.'],
      common_mistakes: ['Bending the elbows too much, turning it into a triceps extension.', 'Arching the lower back off the bench.'],
      breathing: 'Inhale as you lower the weight, exhale as you pull it back up.'
    }
  },

  'renegade-row': {
    id: 'renegade-row',
    name: 'Renegade Row',
    category: 'strength',
    equipment: ['Dumbbells'],
    muscleGroups: ['Abs', 'Biceps', 'triceps', 'back', 'chest'],
    difficulty: 4,
    instructions: [
      'Place 2 dumbbells or kettlebells shoulder width apart on the floor, assume push up position with hands on weight handles.',
      'Push hard into grounded weight whilst pulling the opposite weight to your armpit.',
      'Lower back to starting position, repeat with opposite arm. This is one rep.'
    ],
    safetyNotes: [
      'Use hexagonal dumbbells for stability.',
      'Keep your feet wide to create a stable base.',
      'Avoid rotating your hips; the goal is to keep your torso parallel to the floor.'
    ],
    modifications: {
      beginner: 'Perform the movement from your knees. Use lighter weights.',
      advanced: 'Increase the weight. Add a push-up between each row.',
      equipment_alternatives: {
        'kettlebells': 'Kettlebell renegade rows',
        'resistance-bands': 'Resistance band plank rows'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 8,
      progressionRate: 10,
      unit: 'repetitions per arm'
    },
    coaching: {
      setup: ['Assume a high plank position with your hands on dumbbells, feet wide.'],
      execution: ['Brace your core and pull one dumbbell up towards your chest.', 'Keep your elbow tight to your body.', 'Lower with control and repeat on the other side.'],
      common_mistakes: ['Twisting the hips and torso.', 'Using momentum to lift the weight.', 'Letting the lower back sag.'],
      breathing: 'Exhale as you row, inhale as you lower the dumbbell.'
    }
  }
};

export const NEW_CORE_EXERCISES: Record<string, Exercise> = {
  'bird-dog': {
    id: 'bird-dog',
    name: 'Bird Dog',
    category: 'core',
    equipment: ['Bodyweight', 'Mat'],
    muscleGroups: ['Core', 'Glutes', 'Hamstrings'],
    difficulty: 1,
    instructions: [
      'Begin on all fours, hands under shoulders and knees under hips. Tighten and hold your core.',
      'Reach opposite arm forward and leg back so that they are straight.',
      'Reach through left heel to engage hamstrings and glutes.',
      'Return to a starting position and repeat on other side. That is one rep.'
    ],
    safetyNotes: [
      'Move slowly and with control to avoid losing balance.',
      'Keep your hips and shoulders square to the floor.',
      'Avoid arching your lower back when extending your leg.'
    ],
    modifications: {
      beginner: 'Practice by extending only one leg at a time, then only one arm at a time, before combining them.',
      advanced: 'Add a crunch by bringing your elbow and knee together under your torso before extending again.',
      equipment_alternatives: {
        'none': 'Can be performed without any equipment'
      }
    },
    metrics: {
      type: 'reps',
      defaultValue: 10,
      progressionRate: 10,
      unit: 'repetitions per side'
    },
    coaching: {
      setup: ['Start on all fours in a tabletop position, with a neutral spine.'],
      execution: ['Simultaneously extend your right arm forward and your left leg backward.', 'Pause briefly, then return to the start.', 'Alternate sides.'],
      common_mistakes: ['Lifting arm or leg too high, causing the back to arch.', 'Shifting weight side-to-side.', 'Moving too quickly.'],
      breathing: 'Exhale as you extend your arm and leg, inhale as you return.'
    }
  }
};

export const NEW_FLEXIBILITY_EXERCISES: Record<string, Exercise> = {
  'downward-dog': {
    id: 'downward-dog',
    name: 'Downward Dog',
    category: 'flexibility',
    equipment: ['Mat'],
    muscleGroups: ['Back', 'hips', 'hamstrings', 'calves'],
    difficulty: 2,
    instructions: [
      'Start on floor on hands and knees. Set knees directly below your hips and hands slightly in front of shoulders. Palms spread. Turn toes under.',
      'Breathe out and lift knees away from floor. To start keep knees slightly bent and heels lifted.',
      'Lift sitting bones towards the ceiling. Gently pedal your heels towards the ground and straighten your legs.',
      'Hold from 1-3 minutes.'
    ],
    safetyNotes: [
      'Spread your fingers wide to distribute weight and protect your wrists.',
      'Keep your head between your upper arms to maintain a neutral neck.'
    ],
    modifications: {
      beginner: 'Keep your knees generously bent to focus on lengthening the spine.',
      advanced: 'Work on pressing your heels firmly towards the floor to deepen the calf and hamstring stretch.',
      equipment_alternatives: {
        'none': 'Can be performed without a mat on any surface'
      }
    },
    metrics: {
      type: 'duration',
      defaultValue: 60,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: ['Start on your hands and knees.'],
      execution: ['Tuck your toes, lift your hips up and back to form an inverted V-shape.', 'Press your chest towards your thighs.', 'Gently \'pedal\' your feet by bending one knee at a time.'],
      common_mistakes: ['Rounding the upper back.', 'Having hands too close to feet.', 'Letting shoulders creep up to ears.'],
      breathing: 'Breathe deeply and evenly throughout the pose.'
    }
  }
}; 