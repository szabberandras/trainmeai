import { Exercise } from '../types';

export const TRIATHLON_EXERCISES: Record<string, Exercise> = {
  'transition-practice-T1': {
    id: 'transition-practice-T1',
    name: 'Swim-to-Bike Transition (T1)',
    category: 'triathlon',
    equipment: ['wetsuit', 'bike', 'helmet', 'shoes', 'transition-setup'],
    muscleGroups: ['full-body', 'transition-skills'],
    difficulty: 3,
    instructions: [
      'Practice complete swim exit and transition sequence.',
      'Remove wetsuit efficiently while moving.',
      'Put on helmet, sunglasses, and bike shoes quickly.',
      'Mount bike smoothly and begin cycling.',
      'Practice various wetsuit removal techniques.',
      'Include nutrition and hydration pickup if needed.',
      'Time transitions and work on efficiency.',
      'Practice in race-day clothing and conditions.'
    ],
    safetyNotes: [
      'Practice in safe, controlled environment.',
      'Ensure helmet is properly secured before mounting bike.',
      'Be aware of other athletes during practice.'
    ],
    modifications: {
      beginner: 'Focus on each step individually, then combine.',
      advanced: 'Race simulation with time pressure and multiple transitions.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 90,
      unit: 'seconds transition time'
    },
    coaching: {
      setup: ['Organized transition area', 'All equipment ready'],
      execution: ['Smooth, efficient movements', 'No wasted motion', 'Safety first'],
      common_mistakes: ['Poor organization', 'Rushing and making errors', 'Forgetting helmet'],
      breathing: 'Stay calm and controlled during transition stress.'
    }
  },

  'transition-practice-T2': {
    id: 'transition-practice-T2',
    name: 'Bike-to-Run Transition (T2)',
    category: 'triathlon',
    equipment: ['bike', 'running-shoes', 'hat', 'transition-setup'],
    muscleGroups: ['legs', 'transition-skills'],
    difficulty: 2,
    instructions: [
      'Practice dismounting bike smoothly and safely.',
      'Rack bike quickly and efficiently.',
      'Change from bike shoes to running shoes rapidly.',
      'Put on running hat/visor and grab nutrition if needed.',
      'Begin running despite initial leg heaviness.',
      'Practice running on legs immediately after cycling.',
      'Include elastic laces or other time-saving devices.',
      'Work on smooth, efficient movements.'
    ],
    safetyNotes: [
      'Practice safe bike dismounting.',
      'Don\'t rush to the point of making errors.',
      'Be aware of other athletes in transition area.'
    ],
    modifications: {
      beginner: 'Focus on smooth, safe transitions over speed.',
      advanced: 'Race simulation with time goals and pressure.'
    },
    equipment_alternatives: [],
    progressionRate: 0.03,
    metrics: {
      type: 'time',
      defaultValue: 60,
      unit: 'seconds transition time'
    },
    coaching: {
      setup: ['Organized transition setup', 'Efficient layout'],
      execution: ['Quick bike racking', 'Fast shoe change', 'Smooth exit to run'],
      common_mistakes: ['Poor bike racking', 'Slow shoe change', 'Forgetting race items'],
      breathing: 'Stay calm and efficient during transition.'
    }
  },

  'open-water-swim-practice': {
    id: 'open-water-swim-practice',
    name: 'Open Water Swimming Practice',
    category: 'triathlon',
    equipment: ['open-water', 'wetsuit', 'safety-equipment'],
    muscleGroups: ['full-body', 'navigation', 'confidence'],
    difficulty: 4,
    instructions: [
      'Practice swimming in race-like open water conditions.',
      'Work on sighting, navigation, and straight-line swimming.',
      'Practice mass start simulations with other swimmers.',
      'Include various weather and water conditions.',
      'Practice wetsuit swimming and removal.',
      'Work on drafting techniques and positioning.',
      'Include race pace efforts in open water.',
      'Build comfort and confidence in open water environment.'
    ],
    safetyNotes: [
      'Never swim alone - use buddy system or guided sessions.',
      'Be aware of water conditions, currents, and hazards.',
      'Use proper safety equipment and protocols.',
      'Check local regulations and conditions.'
    ],
    modifications: {
      beginner: 'Calm conditions, close to shore, guided sessions.',
      advanced: 'Varied conditions, longer distances, race simulations.'
    },
    equipment_alternatives: [],
    progressionRate: 0.02,
    metrics: {
      type: 'time',
      defaultValue: 45,
      unit: 'minutes open water'
    },
    coaching: {
      setup: ['Safety first - proper supervision', 'Check conditions'],
      execution: ['Regular sighting', 'Straight line swimming', 'Build confidence'],
      common_mistakes: ['Poor sighting technique', 'Swimming off course', 'Inadequate safety'],
      breathing: 'Bilateral breathing for navigation, adapt to conditions.'
    }
  },

  'triathlon-simulation': {
    id: 'triathlon-simulation',
    name: 'Full Triathlon Simulation',
    category: 'triathlon',
    equipment: ['full-race-equipment'],
    muscleGroups: ['full-body', 'race-preparation'],
    difficulty: 4,
    instructions: [
      'Complete swim, bike, run in sequence at race intensities.',
      'Practice all transitions and race-day procedures.',
      'Include race-day nutrition and hydration strategies.',
      'Wear race-day clothing and equipment.',
      'Practice pacing strategies for each discipline.',
      'Include mental preparation and race tactics.',
      'Simulate race-day timing and logistics.',
      'Build confidence for race-day execution.'
    ],
    safetyNotes: [
      'Requires excellent fitness base and recovery ability.',
      'Allow adequate recovery after simulation sessions.',
      'Practice in safe, controlled environments.'
    ],
    modifications: {
      beginner: 'Shorter distances, focus on completion over time.',
      advanced: 'Full race distances at race intensities.'
    },
    equipment_alternatives: [],
    progressionRate: 0.01,
    metrics: {
      type: 'time',
      defaultValue: 180,
      unit: 'minutes total race time'
    },
    coaching: {
      setup: ['Complete race day preparation', 'All systems tested'],
      execution: ['Race-day strategies', 'Proper pacing', 'Efficient transitions'],
      common_mistakes: ['Going too hard early', 'Poor transitions', 'Inadequate fueling'],
      breathing: 'Race-specific breathing patterns for each discipline.'
    }
  }
};

export default TRIATHLON_EXERCISES;
