import { Program, WeeklyPlan, Workout } from '@/types';

// Triathlon Training Programs
// Based on scientific multi-disciplinary approach
// Includes brick workouts, transitions, and sport-specific periodization

export interface TriathlonProgram extends Program {
  distance: 'sprint' | 'olympic' | 'half-ironman' | 'ironman';
  disciplines: {
    swim_focus: number; // 1-10 scale
    bike_focus: number; // 1-10 scale  
    run_focus: number; // 1-10 scale
    transition_focus: number; // 1-10 scale
  };
  brick_frequency: number; // Brick workouts per week
}

// 12-Week Olympic Distance Triathlon Program
export const OLYMPIC_TRIATHLON_PROGRAM: TriathlonProgram = {
  id: 'olympic-triathlon-12week',
  name: 'Olympic Distance Triathlon',
  description: 'Comprehensive 12-week program for Olympic distance triathlon (1.5km swim, 40km bike, 10km run). Includes brick workouts, transitions, and sport-specific strength.',
  duration_weeks: 12,
  difficulty: 'intermediate',
  goals: ['triathlon_performance', 'endurance', 'transition_efficiency'],
  equipment_needed: ['pool_access', 'bike', 'running_gear', 'transition_equipment'],
  distance: 'olympic',
  disciplines: {
    swim_focus: 6,
    bike_focus: 8,
    run_focus: 7,
    transition_focus: 5
  },
  brick_frequency: 2,
  weekly_plans: [] // Will be populated with 12 weeks
};

// Sample Week 8 - Build Phase
export const TRIATHLON_BUILD_WEEK: WeeklyPlan = {
  weekNumber: 8,
  startDate: '2024-05-13',
  theme: 'Build Phase - Race Pace Development',
  totalVolume: '12 hours',
  intensityDistribution: '70% aerobic, 20% threshold, 10% VO2 max',
  workouts: [
    {
      id: 1,
      day: 'Monday',
      type: 'swimming',
      title: 'Swim Technique + Threshold',
      summary: 'Technical swim session with threshold intervals. Focus on stroke efficiency and race pace development.',
      intensity: 75,
      duration_min: 60,
      rpe_target: '6-7/10',
      completed: false,
      swim_structure: {
        warmup: {
          distance: '400m',
          description: '200m easy, 4x50m build pace'
        },
        main_set: {
          distance: '1600m',
          description: '8x200m at threshold pace (race pace + 5-10 seconds per 100m)',
          rest: '30 seconds between intervals',
          coaching_cues: [
            'Maintain stroke count consistency',
            'Focus on catch and pull efficiency',
            'Bilateral breathing every 3-5 strokes'
          ]
        },
        cooldown: {
          distance: '200m',
          description: 'Easy swim with focus on technique'
        },
        total_distance: '2200m'
      },
      technique_focus: [
        'High elbow catch',
        'Body rotation',
        'Streamlined body position',
        'Efficient kick'
      ],
      nutrition: {
        pre_workout: 'Light snack 30-60 minutes before',
        post_workout: 'Protein + carbs within 30 minutes',
        hydration: 'Hydrate well before and after pool session'
      }
    },
    {
      id: 2,
      day: 'Tuesday',
      type: 'cycling',
      title: 'Bike Power Intervals',
      summary: 'Power-based cycling session targeting FTP and VO2 max development. Use power meter for precise pacing.',
      intensity: 85,
      duration_min: 90,
      rpe_target: '7-8/10',
      completed: false,
      cycling_structure: {
        warmup: {
          duration_min: 20,
          description: 'Easy spinning, gradually build to Zone 2'
        },
        main_set: {
          duration_min: 50,
          description: '5x8 minutes at FTP (Functional Threshold Power)',
          rest: '4 minutes easy spinning between intervals',
          power_targets: {
            intervals: '95-105% FTP',
            recovery: '50-60% FTP'
          },
          coaching_cues: [
            'Maintain steady power output',
            'Cadence 85-95 RPM',
            'Stay relaxed in upper body',
            'Focus on smooth pedal stroke'
          ]
        },
        cooldown: {
          duration_min: 20,
          description: 'Easy spinning to normalize heart rate'
        }
      },
      equipment_notes: [
        'Power meter essential for accurate pacing',
        'Indoor trainer or outdoor with power data',
        'Proper bike fit crucial for efficiency'
      ],
      nutrition: {
        pre_workout: 'Carb-rich meal 2-3 hours before',
        during_workout: 'Sports drink for sessions >60 minutes',
        post_workout: 'Recovery drink within 15 minutes'
      }
    },
    {
      id: 3,
      day: 'Wednesday',
      type: 'running',
      title: 'Run Tempo + Strides',
      summary: 'Tempo run to develop lactate threshold with speed strides. Focus on race pace efficiency.',
      intensity: 80,
      duration_min: 50,
      rpe_target: '7-8/10',
      completed: false,
      running_structure: {
        warmup: {
          duration_min: 15,
          description: 'Easy jog with dynamic stretching'
        },
        main_set: {
          duration_min: 25,
          description: '20 minutes at tempo pace (race pace - 10-15 seconds per km)',
          coaching_cues: [
            'Comfortably hard effort',
            'Controlled breathing',
            'Efficient stride',
            'Maintain form throughout'
          ]
        },
        strides: {
          description: '4x100m strides',
          recovery: '100m easy jog between',
          focus: 'Leg turnover and form'
        },
        cooldown: {
          duration_min: 10,
          description: 'Easy jog and stretching'
        }
      },
      pacing_guidance: {
        tempo_pace: '10K race pace + 10-15 seconds per km',
        effort_level: 'Comfortably hard - could maintain for 45-60 minutes'
      }
    },
    {
      id: 4,
      day: 'Thursday',
      type: 'triathlon_strength',
      title: 'Triathlon-Specific Strength',
      summary: 'Strength training targeting triathlon-specific movement patterns and injury prevention.',
      intensity: 70,
      duration_min: 60,
      rpe_target: '6-7/10',
      completed: false,
      exercises: [
        {
          name: 'Single Leg Squat',
          sets: 3,
          reps: '8-10 each leg',
          weight_guidance: 'Bodyweight or light DB',
          rest_sec: 90,
          coaching_cues: ['Control descent', 'Drive through heel', 'Maintain balance'],
          triathlon_benefit: 'Running strength and stability'
        },
        {
          name: 'Lat Pulldown',
          sets: 3,
          reps: '12-15',
          weight_guidance: '70-75% 1RM',
          rest_sec: 90,
          coaching_cues: ['Wide grip', 'Pull to chest', 'Control eccentric'],
          triathlon_benefit: 'Swimming pull strength'
        },
        {
          name: 'Single Leg Deadlift',
          sets: 3,
          reps: '8-10 each leg',
          weight_guidance: 'Light to moderate DB',
          rest_sec: 90,
          coaching_cues: ['Hip hinge', 'Straight line', 'Control balance'],
          triathlon_benefit: 'Running stability and posterior chain'
        },
        {
          name: 'Plank Variations',
          sets: 3,
          reps: '45-60 seconds',
          weight_guidance: 'Bodyweight',
          rest_sec: 60,
          coaching_cues: ['Straight line', 'Engage core', 'Breathe normally'],
          triathlon_benefit: 'Core stability for all three disciplines'
        }
      ],
      injury_prevention_focus: [
        'Shoulder stability for swimming',
        'Hip stability for running',
        'Core strength for bike position',
        'Posterior chain for power transfer'
      ]
    },
    {
      id: 5,
      day: 'Friday',
      type: 'active_recovery',
      title: 'Recovery Swim',
      summary: 'Easy recovery swim focusing on technique and mobility. Low intensity for active recovery.',
      intensity: 40,
      duration_min: 30,
      rpe_target: '3-4/10',
      completed: false,
      activities: [
        '800-1000m easy swimming',
        'Focus on technique drills',
        'Stroke count consistency',
        'Relaxed breathing pattern',
        'Enjoy the water'
      ],
      technique_drills: [
        'Catch-up drill',
        'Single arm swimming',
        'Kick on side',
        'Sculling drills'
      ]
    },
    {
      id: 6,
      day: 'Saturday',
      type: 'brick_workout',
      title: 'Olympic Distance Brick',
      summary: 'Race simulation brick workout. Practice bike-to-run transition and race pacing strategy.',
      intensity: 85,
      duration_min: 120,
      rpe_target: '7-8/10',
      completed: false,
      brick_structure: {
        bike_portion: {
          duration_min: 75,
          distance: '30km',
          intensity: 'Race pace effort (slightly conservative)',
          coaching_cues: [
            'Negative split pacing',
            'Save energy for run',
            'Practice nutrition timing',
            'Maintain aero position'
          ]
        },
        transition: {
          duration_min: 2,
          practice_elements: [
            'Quick dismount',
            'Helmet off, shoes on',
            'Grab run gear',
            'Mental transition to running'
          ]
        },
        run_portion: {
          duration_min: 30,
          distance: '6-7km',
          intensity: 'Race pace after initial adjustment',
          coaching_cues: [
            'Expect "jelly legs" initially',
            'Find rhythm in first 1-2km',
            'Gradually build to race pace',
            'Practice race fueling'
          ]
        }
      },
      race_simulation_elements: [
        'Practice race day nutrition',
        'Wear race day gear',
        'Time transitions',
        'Mental race preparation'
      ],
      nutrition: {
        pre_workout: 'Race day breakfast simulation',
        during_bike: 'Sports drink and/or gels as planned for race',
        during_run: 'Practice race day fueling strategy',
        post_workout: 'Immediate recovery nutrition'
      }
    },
    {
      id: 7,
      day: 'Sunday',
      type: 'long_run',
      title: 'Aerobic Base Run',
      summary: 'Long aerobic run for endurance base. Focus on aerobic efficiency and running economy.',
      intensity: 65,
      duration_min: 75,
      rpe_target: '5-6/10',
      completed: false,
      running_structure: {
        warmup: {
          duration_min: 10,
          description: 'Easy jog with gradual build'
        },
        main_run: {
          duration_min: 60,
          description: 'Steady aerobic pace - conversational effort',
          coaching_cues: [
            'Relaxed and comfortable',
            'Focus on running economy',
            'Maintain consistent effort',
            'Enjoy the process'
          ]
        },
        cooldown: {
          duration_min: 5,
          description: 'Easy jog and walking'
        }
      },
      pacing_guidance: {
        target_pace: 'Marathon pace + 30-60 seconds per km',
        effort_description: 'Should feel comfortable and sustainable',
        heart_rate: 'Zone 2 (65-75% max HR)'
      },
      weekly_volume_note: 'This completes approximately 12 hours of training for the week'
    }
  ]
};

// 16-Week Half Ironman Program Structure
export const HALF_IRONMAN_PROGRAM: TriathlonProgram = {
  id: 'half-ironman-16week',
  name: 'Half Ironman 70.3',
  description: 'Progressive 16-week program for Half Ironman distance (1.9km swim, 90km bike, 21.1km run). Emphasizes endurance development and race simulation.',
  duration_weeks: 16,
  difficulty: 'advanced',
  goals: ['half_ironman_completion', 'endurance', 'pacing_strategy'],
  equipment_needed: ['pool_access', 'bike', 'running_gear', 'nutrition_supplies'],
  distance: 'half-ironman',
  disciplines: {
    swim_focus: 5,
    bike_focus: 9,
    run_focus: 8,
    transition_focus: 4
  },
  brick_frequency: 2,
  weekly_plans: [] // Would include 16 weeks of progressive training
};

// Export all triathlon programs
export const TRIATHLON_PROGRAMS = {
  OLYMPIC_TRIATHLON_PROGRAM,
  HALF_IRONMAN_PROGRAM,
  TRIATHLON_BUILD_WEEK
};

export default TRIATHLON_PROGRAMS; 