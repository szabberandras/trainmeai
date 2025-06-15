import { Exercise } from '../types';

export const FLEXIBILITY_EXERCISES: Record<string, Exercise> = {
  'childs-pose': {
    id: 'childs-pose',
    name: 'Child\'s Pose',
    category: 'flexibility',
    equipment: ['mat'],
    muscleGroups: ['lower-back', 'hips', 'thighs', 'ankles'],
    difficulty: 1,
    instructions: [
      'Start on your hands and knees.',
      'Bring your big toes to touch and spread your knees as wide as your mat (or keep them together).',
      'Sit your hips back towards your heels.',
      'Fold your torso forward and down between your thighs.',
      'Rest your forehead on the mat.',
      'Extend your arms out long in front of you, or rest them alongside your body, palms up.',
      'Breathe deeply into your back and hips, and relax.'
    ],
    safetyNotes: [
      'If you have knee issues, place a rolled blanket in the crease of your knees.',
      'If your forehead does not reach the mat, rest it on a block or cushion.',
      'Listen to your body and do not force your hips to your heels.'
    ],
    modifications: {
      beginner: 'Keep knees closer together. Place a cushion between your hips and heels for support.',
      advanced: 'Walk your hands further forward to deepen the stretch in the shoulders and lats. Walk hands to one side for a side-body stretch.',
      equipment_alternatives: {
        'none': 'Seated forward fold'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 10,
      unit: 'seconds'
    },
    coaching: {
      setup: [
        'Kneel on the mat, big toes touching.',
        'Knees together or wide.'
      ],
      execution: [
        'Sit hips back towards heels.',
        'Fold torso down, rest forehead on mat.',
        'Let your body feel heavy and relax.',
        'Breathe into your back.'
      ],
      common_mistakes: [
        'Holding tension in the shoulders and neck.',
        'Forcing the hips down.',
        'Not breathing deeply.'
      ],
      breathing: 'Deep, slow breaths directed into the back of your ribcage.'
    }
  },

  'tricep-and-lat-stretch': {
    id: 'tricep-and-lat-stretch',
    name: 'Tricep & Lat Stretch',
    category: 'flexibility',
    equipment: [],
    muscleGroups: ['triceps', 'lats', 'shoulders'],
    difficulty: 1,
    instructions: [
      'Stand or sit tall.',
      'Reach your right arm straight up to the ceiling.',
      'Bend your right elbow and let your right hand fall behind your head, aiming for the middle of your back.',
      'Grasp your right elbow with your left hand and gently pull it to the left and slightly down to stretch the tricep.',
      'To add the lat stretch, gently side-bend your torso to the left while continuing to pull the elbow.',
      'Hold the stretch, breathing into your right side-body and tricep.',
      'Release and repeat on the other side.'
    ],
    safetyNotes: [
      'Be gentle with the pull on your elbow; do not force it.',
      'Avoid jutting your head forward.',
      'Keep your core engaged to avoid arching your lower back.'
    ],
    modifications: {
      beginner: 'Perform the tricep stretch and a separate side-bend stretch. Use a towel to assist if you cannot reach your elbow.',
      advanced: 'Increase the side-bend for a deeper lat stretch.',
      equipment_alternatives: {
        'none': 'Can use a towel or strap to help grasp the elbow'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 30,
      progressionRate: 10,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit or stand with a long spine.',
        'Raise one arm, bend elbow, hand behind head.'
      ],
      execution: [
        'Gently pull elbow with opposite hand.',
        'Add a side-bend away from the stretched arm.',
        'Breathe into the tricep and lat.',
        'Keep chest open.'
      ],
      common_mistakes: [
        'Pulling too hard on the elbow.',
        'Arching the back.',
        'Sticking the chin out.'
      ],
      breathing: 'Breathe deeply and steadily throughout the stretch.'
    }
  },

  'pigeon-pose': {
    id: 'pigeon-pose',
    name: 'Pigeon Pose',
    category: 'flexibility',
    equipment: ['mat'],
    muscleGroups: ['glutes', 'piriformis', 'hips', 'hip-flexors'],
    difficulty: 2,
    instructions: [
      'Start in a downward-facing dog or tabletop position.',
      'Bring your right knee forward and place it behind your right wrist.',
      'Angle your right shin so your right foot is somewhere in front of your left hip. The more parallel your shin is to the front of the mat, the more intense the stretch.',
      'Extend your left leg straight back behind you, with the top of your foot on the floor.',
      'Keep your hips square and level. You can stay upright on your hands or fold forward over your front leg to deepen the stretch.',
      'Breathe deeply into the stretch in your right outer hip. Hold, then switch sides.'
    ],
    safetyNotes: [
      'Protect your front knee. If you feel any pain, ease off or modify.',
      'Do not let all your weight fall onto the hip of the bent leg; keep hips level.',
      'Flexing the front foot can help protect the knee joint.'
    ],
    modifications: {
      beginner: 'Place a yoga block or cushion under the hip of the bent leg for support. Do not fold forward. Perform a "Figure Four" stretch on your back instead.',
      advanced: 'Bring the front shin more parallel to the front of the mat. Fold deeper over the front leg.',
      equipment_alternatives: {
        'none': 'Figure Four stretch on back'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 10,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'From tabletop, bring one knee forward behind the same-side wrist.',
        'Extend the back leg straight.',
        'Square your hips to the front.'
      ],
      execution: [
        'Stay upright or fold forward over the front shin.',
        'Breathe into the outer hip stretch.',
        'Keep the back leg active and straight.'
      ],
      common_mistakes: [
        'Collapsing onto one hip.',
        'Feeling pain in the front knee.',
        'Holding tension in the shoulders.'
      ],
      breathing: 'Inhale to find length in the spine, exhale to sink deeper into the stretch.'
    }
  },

  'foam-roll-chest-alternative': {
    id: 'foam-roll-chest-alternative',
    name: 'Foam Roll Chest - Alternative',
    category: 'flexibility',
    equipment: ['Foam Roller'],
    muscleGroups: ['Chest (Pectorals)', 'Shoulders (Anterior Deltoid)'],
    difficulty: 1,
    instructions: [
      'Lie face down on the floor.',
      'Place a foam roller under the right side of your chest, positioned diagonally.',
      'Extend your right arm out to the side.',
      'Support your upper body with your left forearm.',
      'Gently roll your body side-to-side to massage the pectoral muscle.',
      'To increase the stretch, you can slowly raise and lower your extended arm.',
      'Continue for the desired duration, then switch sides.'
    ],
    safetyNotes: ['Avoid rolling directly over the shoulder joint.', 'The pressure should be gentle and tolerable.', 'Breathe deeply to help the muscle relax.'],
    modifications: {
      beginner: 'Apply very light pressure.',
      advanced: 'Use a firmer foam roller or a lacrosse ball for more targeted pressure.',
      equipment_alternatives: {
        'tennis-ball': 'Use a tennis ball for more targeted pressure',
        'lacrosse-ball': 'Use a lacrosse ball for deeper tissue work',
        'massage-stick': 'Use a massage stick for similar benefits'
      }
    },
    metrics: { type: 'time', defaultValue: 60, progressionRate: 0.1, unit: 'seconds per side' },
    coaching: {
      setup: ['Lie face down and place the foam roller under one side of your chest.'],
      execution: ['Gently roll across the muscle fibers of your chest.', 'Pause on tender spots and breathe.', 'Keep the rest of your body relaxed.'],
      common_mistakes: ['Rolling too quickly.', 'Applying too much pressure.', 'Holding your breath.'],
      breathing: 'Breathe deeply and consistently to promote muscle relaxation.'
    }
  },

  'roll-quads-with-stick': {
    id: 'roll-quads-with-stick',
    name: 'Roll Quads with Stick/Rolling Pin',
    category: 'flexibility',
    equipment: ['Massage Stick', 'Rolling Pin', 'Chair'],
    muscleGroups: ['Quadriceps'],
    difficulty: 1,
    instructions: [
      'Sit in a sturdy chair.',
      'Place the massage stick or rolling pin across your thigh.',
      'Using both hands, apply gentle pressure and roll the stick up and down the length of your quad muscle, from the top of your knee to the bottom of your hip.',
      'You can also roll across the inner thigh (adductors) and outer thigh (IT band/vastus lateralis).',
      'When you find a tender spot, you can pause and hold gentle, firm pressure for 20-30 seconds until the tenderness subsides.',
      'Control the pressure based on your tolerance.'
    ],
    safetyNotes: [
      'Avoid rolling directly over your kneecap or the bony prominence of your hip.',
      'Do not apply excessive pressure that causes sharp pain.',
      'Keep the muscle you are rolling relaxed.'
    ],
    modifications: {
      beginner: 'Apply very light pressure.',
      advanced: 'Apply firmer pressure. You can also perform this on the floor with a foam roller for a deeper massage.',
      equipment_alternatives: {
        'Foam Roller': 'Use a foam roller on the floor for a more intense version.'
      }
    },
    metrics: {
      type: 'time',
      defaultValue: 60,
      progressionRate: 0.1,
      unit: 'seconds per side'
    },
    coaching: {
      setup: [
        'Sit comfortably in a chair.',
        'Place the roller on your thigh.'
      ],
      execution: [
        'Roll slowly along the length of the muscle.',
        'Adjust pressure with your hands.',
        'Pause on any tender spots and breathe.',
        'Cover the entire front, inside, and outside of the thigh.'
      ],
      common_mistakes: [
        'Rolling too quickly.',
        'Applying too much pressure.',
        'Holding your breath.',
        'Rolling directly on bone.'
      ],
      breathing: 'Breathe deeply and consistently to help the muscles relax.'
    }
  }
,

  'downward-dog': {
    'id': 'downward-dog',
    'name': 'Downward Dog',
    'category': 'flexibility',
    'equipment': [
        'Mat'
    ],
    'muscleGroups': [
        'Back',
        'hips',
        'hamstrings',
        'calves'
    ],
    'difficulty': 2,
    'instructions': [
        'Start on floor on hands and knees. Set knees directly below your hips and hands slightly in front of shoulders. Palms spread. Turn toes under.',
        'Breathe out and lift knees away from floor. To start keep knees slightly bent and heels lifted.',
        'Lift sitting bones towards the ceiling. Gently pedal your heels towards the ground and straighten your legs.',
        'Hold from 1-3 minutes.'
    ],
    'safetyNotes': [
        'Spread your fingers wide to distribute weight and protect your wrists.',
        'Keep your head between your upper arms to maintain a neutral neck.'
    ],
    'modifications': {
        'beginner': 'Keep your knees generously bent to focus on lengthening the spine.',
        'advanced': 'Work on pressing your heels firmly towards the floor to deepen the calf and hamstring stretch.',
        'equipment_alternatives': {
            'none': 'Can be performed without a mat on any surface'
        }
    },
    'metrics': {
        'type': 'duration',
        'defaultValue': 60,
        'progressionRate': 10,
        'unit': 'seconds'
    },
    'coaching': {
        'setup': [
            'Start on your hands and knees.'
        ],
        'execution': [
            'Tuck your toes, lift your hips up and back to form an inverted V-shape.',
            'Press your chest towards your thighs.',
            'Gently "pedal" your feet by bending one knee at a time.'
        ],
        'common_mistakes': [
            'Rounding the upper back.',
            'Having hands too close to feet.',
            'Letting shoulders creep up to ears.'
        ],
        'breathing': 'Breathe deeply and evenly throughout the pose.'
    }
}
};

export default FLEXIBILITY_EXERCISES;
