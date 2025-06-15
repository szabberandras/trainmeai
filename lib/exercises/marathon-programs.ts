import { Program, WeeklyPlan, Workout } from '@/types';

// Marathon Training Programs
// Based on scientific endurance methodology
// Includes LSD runs, tempo runs, intervals, and strength training

export interface MarathonProgram extends Program {
  target_time?: string;
  weekly_mileage_peak: number;
  cornerstone_workouts: {
    lsd_frequency: number; // Long Slow Distance per week
    tempo_frequency: number; // Tempo runs per week
    interval_frequency: number; // Interval sessions per week
    strength_frequency: number; // Strength sessions per week
  };
  pacing_strategy: 'even_split' | 'negative_split' | 'positive_split';
}

// 18-Week Advanced Marathon Program
export const ADVANCED_MARATHON_PROGRAM: MarathonProgram = {
  id: 'advanced-marathon-18week',
  name: 'Advanced Marathon Training',
  description: 'Comprehensive 18-week marathon program for experienced runners targeting sub-3:30. Includes scientific periodization with base, build, and peak phases.',
  duration_weeks: 18,
  difficulty: 'advanced',
  goals: ['marathon_performance', 'endurance', 'pacing_mastery'],
  equipment_needed: ['running_gear', 'heart_rate_monitor', 'track_access'],
  target_time: '3:15-3:30',
  weekly_mileage_peak: 110,
  cornerstone_workouts: {
    lsd_frequency: 1,
    tempo_frequency: 1,
    interval_frequency: 1,
    strength_frequency: 2
  },
  pacing_strategy: 'negative_split',
  weekly_plans: [] // Will be populated with 18 weeks
};

// Sample Week 12 - Peak Build Phase
export const MARATHON_PEAK_WEEK: WeeklyPlan = {
  weekNumber: 12,
  startDate: '2024-06-10',
  theme: 'Peak Build - Race Pace Integration',
  totalVolume: '18 hours',
  intensityDistribution: '75% easy, 15% tempo/threshold, 10% VO2 max',
  workouts: [
    {
      id: 1,
      day: 'Monday',
      type: 'active_recovery',
      title: 'Recovery Run + Mobility',
      summary: 'Easy recovery run with comprehensive mobility work. Focus on preparation for the week ahead.',
      intensity: 40,
      duration_min: 45,
      rpe_target: '3-4/10',
      completed: false,
      activities: [
        '6km easy run at conversational pace',
        '15 minutes dynamic mobility routine',
        'Focus on hip flexors, calves, IT band',
        'Foam rolling and self-massage'
      ],
      pacing_guidance: {
        pace: 'Marathon pace + 60-90 seconds per km',
        effort: 'Very comfortable, could run much faster'
      }
    },
    {
      id: 2,
      day: 'Tuesday',
      type: 'interval_training',
      title: 'VO2 Max Intervals - Yasso 800s',
      summary: 'Classic Yasso 800s workout. Target time in minutes:seconds equals marathon goal in hours:minutes.',
      intensity: 90,
      duration_min: 75,
      rpe_target: '8-9/10',
      completed: false,
      interval_structure: {
        warmup: {
          duration_min: 20,
          description: '2km easy jog + dynamic warm-up + 4x100m strides'
        },
        main_set: {
          intervals: 8,
          distance: '800m',
          target_time: '3:20-3:25',
          recovery: '3:20-3:25 easy jog',
          coaching_cues: [
            'Start conservatively, build through set',
            'Maintain consistent splits',
            'Focus on form under fatigue',
            'Strong finish on each rep'
          ]
        },
        cooldown: {
          duration_min: 15,
          description: '2km easy jog + stretching'
        }
      },
      pacing_guidance: {
        target_pace: '4:10-4:15 per km (for 3:20 marathon goal)',
        effort_level: '5K race pace effort',
        heart_rate: '90-95% max HR'
      },
      performance_predictor: 'Yasso 800 time (min:sec) = Marathon time (hr:min)',
      nutrition: {
        pre_workout: 'Light carbs 60-90 minutes before',
        post_workout: 'Protein + carbs within 30 minutes',
        hydration: 'Well hydrated before, sip during recovery'
      }
    },
    {
      id: 3,
      day: 'Wednesday',
      type: 'strength_training',
      title: 'Running-Specific Strength',
      summary: 'Strength training focused on running economy and injury prevention. Emphasize single-leg stability and posterior chain.',
      intensity: 75,
      duration_min: 60,
      rpe_target: '6-7/10',
      completed: false,
      exercises: [
        {
          name: 'Single Leg Squat to Box',
          sets: 3,
          reps: '8-10 each leg',
          weight_guidance: 'Bodyweight progression',
          rest_sec: 90,
          coaching_cues: ['Control descent', 'Drive through heel', 'Maintain alignment'],
          running_benefit: 'Single leg strength and stability for running'
        },
        {
          name: 'Romanian Deadlift',
          sets: 3,
          reps: '10-12',
          weight_guidance: '70-75% 1RM',
          rest_sec: 120,
          coaching_cues: ['Hip hinge', 'Hamstring stretch', 'Control eccentric'],
          running_benefit: 'Posterior chain strength for propulsion'
        },
        {
          name: 'Calf Raises (Single Leg)',
          sets: 3,
          reps: '15-20 each leg',
          weight_guidance: 'Bodyweight + DB if needed',
          rest_sec: 60,
          coaching_cues: ['Full range of motion', 'Control descent', 'Strong push-off'],
          running_benefit: 'Calf strength for push-off and injury prevention'
        },
        {
          name: 'Plank to Push-up',
          sets: 3,
          reps: '8-10',
          weight_guidance: 'Bodyweight',
          rest_sec: 60,
          coaching_cues: ['Maintain plank position', 'Controlled movement', 'Core engaged'],
          running_benefit: 'Core stability and upper body endurance'
        },
        {
          name: 'Glute Bridge (Single Leg)',
          sets: 3,
          reps: '12-15 each leg',
          weight_guidance: 'Bodyweight',
          rest_sec: 60,
          coaching_cues: ['Squeeze glutes', 'Straight line', 'Control tempo'],
          running_benefit: 'Glute activation and hip stability'
        }
      ],
      injury_prevention_focus: [
        'Hip stability and strength',
        'Posterior chain development',
        'Core endurance',
        'Single leg balance and control'
      ]
    },
    {
      id: 4,
      day: 'Thursday',
      type: 'tempo_run',
      title: 'Lactate Threshold Tempo',
      summary: 'Sustained tempo run to improve lactate threshold. Comfortably hard effort that could be maintained for 45-60 minutes.',
      intensity: 80,
      duration_min: 65,
      rpe_target: '7-8/10',
      completed: false,
      tempo_structure: {
        warmup: {
          duration_min: 15,
          description: '2km easy jog + dynamic warm-up'
        },
        main_tempo: {
          duration_min: 35,
          distance: '8km',
          target_pace: 'Marathon pace - 15-20 seconds per km',
          coaching_cues: [
            'Comfortably hard effort',
            'Controlled breathing (3:2 or 2:2 pattern)',
            'Maintain consistent pace',
            'Focus on running economy'
          ]
        },
        cooldown: {
          duration_min: 15,
          description: '2km easy jog + stretching'
        }
      },
      pacing_guidance: {
        tempo_pace: '4:30-4:35 per km (for 3:20 marathon)',
        effort_description: 'Comfortably hard - could maintain for 45-60 minutes',
        heart_rate: '85-90% max HR'
      },
      physiological_benefit: 'Improves lactate threshold and marathon pace efficiency'
    },
    {
      id: 5,
      day: 'Friday',
      type: 'easy_run',
      title: 'Easy Aerobic Run',
      summary: 'Comfortable aerobic run for active recovery. Focus on form and preparation for weekend long run.',
      intensity: 50,
      duration_min: 50,
      rpe_target: '4-5/10',
      completed: false,
      activities: [
        '8km easy run at conversational pace',
        'Focus on relaxed form',
        'Nasal breathing if possible',
        'Enjoy the run'
      ],
      pacing_guidance: {
        pace: 'Marathon pace + 45-75 seconds per km',
        effort: 'Comfortable, could easily run faster'
      }
    },
    {
      id: 6,
      day: 'Saturday',
      type: 'strength_training',
      title: 'Core + Stability',
      summary: 'Focused core and stability session. Complement to running training for injury prevention.',
      intensity: 60,
      duration_min: 45,
      rpe_target: '5-6/10',
      completed: false,
      exercises: [
        {
          name: 'Dead Bug',
          sets: 3,
          reps: '10 each side',
          coaching_cues: ['Maintain neutral spine', 'Slow controlled movement'],
          running_benefit: 'Core stability and coordination'
        },
        {
          name: 'Bird Dog',
          sets: 3,
          reps: '10 each side',
          coaching_cues: ['Straight line', 'Engage core', 'Control balance'],
          running_benefit: 'Posterior chain stability'
        },
        {
          name: 'Side Plank',
          sets: 3,
          reps: '30-45 seconds each side',
          coaching_cues: ['Straight line', 'Engage obliques', 'Breathe normally'],
          running_benefit: 'Lateral core stability'
        },
        {
          name: 'Clamshells',
          sets: 3,
          reps: '15 each side',
          coaching_cues: ['Control movement', 'Feel glute activation'],
          running_benefit: 'Hip stability and glute activation'
        }
      ]
    },
    {
      id: 7,
      day: 'Sunday',
      type: 'long_run',
      title: 'Long Slow Distance - Marathon Pace Segments',
      summary: 'Peak long run with marathon pace segments. Practice race pacing and fueling strategy.',
      intensity: 70,
      duration_min: 150,
      rpe_target: '6-7/10',
      completed: false,
      long_run_structure: {
        warmup: {
          duration_min: 15,
          distance: '3km',
          pace: 'Easy, build gradually'
        },
        main_run: {
          duration_min: 120,
          distance: '25km',
          structure: [
            '5km easy pace',
            '3km at marathon pace',
            '2km easy pace', 
            '5km at marathon pace',
            '2km easy pace',
            '3km at marathon pace',
            '5km easy pace'
          ],
          coaching_cues: [
            'Start conservatively',
            'Hit marathon pace segments accurately',
            'Practice race day fueling',
            'Stay relaxed during easy portions'
          ]
        },
        cooldown: {
          duration_min: 15,
          distance: '2km',
          pace: 'Very easy jog and walk'
        }
      },
      pacing_guidance: {
        easy_pace: 'Marathon pace + 30-45 seconds per km',
        marathon_pace: '4:45 per km (for 3:20 marathon)',
        total_distance: '30km'
      },
      race_simulation: [
        'Practice race day breakfast timing',
        'Use race day gear and shoes',
        'Practice fueling every 5km during MP segments',
        'Mental preparation and visualization'
      ],
      nutrition: {
        pre_run: 'Race day breakfast 3 hours before',
        during_run: 'Gel or sports drink every 5km during MP segments',
        post_run: 'Recovery meal within 30-60 minutes',
        hydration: 'Pre-hydrate well, carry fluids for long segments'
      },
      weekly_peak_note: 'This represents peak weekly volume - 110km total for the week'
    }
  ]
};

// 16-Week Beginner Marathon Program
export const BEGINNER_MARATHON_PROGRAM: MarathonProgram = {
  id: 'beginner-marathon-16week',
  name: 'First Marathon Training',
  description: 'Conservative 16-week program for first-time marathoners. Focus on building endurance base and completing the distance safely.',
  duration_weeks: 16,
  difficulty: 'beginner',
  goals: ['marathon_completion', 'endurance_base', 'injury_prevention'],
  equipment_needed: ['running_gear', 'comfortable_shoes'],
  target_time: '4:30-5:30',
  weekly_mileage_peak: 65,
  cornerstone_workouts: {
    lsd_frequency: 1,
    tempo_frequency: 0, // No tempo runs for beginners initially
    interval_frequency: 0, // No intervals for beginners initially  
    strength_frequency: 1
  },
  pacing_strategy: 'even_split',
  weekly_plans: [] // Would include 16 weeks of progressive training
};

// Export all marathon programs
export const MARATHON_PROGRAMS = {
  ADVANCED_MARATHON_PROGRAM,
  BEGINNER_MARATHON_PROGRAM,
  MARATHON_PEAK_WEEK
};

export default MARATHON_PROGRAMS; 