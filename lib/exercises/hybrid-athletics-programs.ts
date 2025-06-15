import { Program, WeeklyPlan, Workout } from '@/types';

// Hybrid Athletics Training Programs
// Based on "The Modern Hybrid Athlete" scientific methodology
// Integrates Marathon, Triathlon, Hyrox, and CrossFit training

export interface HybridProgram extends Program {
  periodization: {
    macrocycle: 'base' | 'build' | 'peak' | 'recovery';
    mesocycle_focus: string;
    interference_management: string;
  };
  concurrent_training: {
    strength_emphasis: number; // 1-10 scale
    endurance_emphasis: number; // 1-10 scale
    separation_hours: number; // Hours between strength/endurance
  };
}

// 12-Week Hybrid Base Building Program
export const HYBRID_BASE_PROGRAM: HybridProgram = {
  id: 'hybrid-base-12week',
  name: 'Hybrid Athlete Base Building',
  description: 'Scientific 12-week base building program for marathon, triathlon, Hyrox, and CrossFit athletes. Focuses on aerobic development, movement quality, and concurrent training adaptation.',
  duration_weeks: 12,
  difficulty: 'intermediate',
  goals: ['endurance', 'strength', 'movement_quality'],
  equipment_needed: ['barbell', 'dumbbells', 'kettlebells', 'rowing-machine', 'pull-up-bar'],
  periodization: {
    macrocycle: 'base',
    mesocycle_focus: 'Aerobic base development with strength foundation',
    interference_management: 'Separated high-intensity sessions by 6+ hours'
  },
  concurrent_training: {
    strength_emphasis: 6,
    endurance_emphasis: 8,
    separation_hours: 6
  },
  weekly_plans: [] // Will be populated below
};

// Sample Week from Base Phase
export const HYBRID_BASE_WEEK_4: WeeklyPlan = {
  weekNumber: 4,
  startDate: '2024-03-25',
  theme: 'Base Building - Aerobic Development',
  totalVolume: '8.5 hours',
  intensityDistribution: '85% Zone 1-2, 10% Zone 3-4, 5% Zone 5+',
  workouts: [
    {
      id: 1,
      day: 'Monday',
      type: 'strength_training',
      title: 'Foundation Strength - Lower Body Focus',
      summary: 'Compound movements emphasizing the Nine Foundational Movements. Focus on mechanics and consistency before intensity.',
      intensity: 70,
      duration_min: 75,
      rpe_target: '6-7/10',
      completed: false,
      exercises: [
        {
          name: 'Back Squat',
          sets: 4,
          reps: '8-10',
          weight_guidance: '70-75% 1RM',
          rest_sec: 180,
          coaching_cues: ['Hip crease below knee', 'Drive through heels', 'Neutral spine'],
          progression: 'Add 2.5kg when all sets completed at top range'
        },
        {
          name: 'Romanian Deadlift',
          sets: 3,
          reps: '10-12',
          weight_guidance: '65-70% deadlift 1RM',
          rest_sec: 120,
          coaching_cues: ['Hip hinge pattern', 'Hamstring stretch', 'Control eccentric'],
          progression: 'Increase reps before adding weight'
        },
        {
          name: 'Front Squat',
          sets: 3,
          reps: '8-10',
          weight_guidance: '60-65% back squat',
          rest_sec: 150,
          coaching_cues: ['Elbows high', 'Core engagement', 'Upright torso'],
          progression: 'Master technique before increasing load'
        },
        {
          name: 'Single Leg RDL',
          sets: 3,
          reps: '8 each leg',
          weight_guidance: 'Bodyweight or light DB',
          rest_sec: 90,
          coaching_cues: ['Balance and control', 'Hip hinge', 'Straight line'],
          progression: 'Add light weight when balance is perfect'
        }
      ],
      warmup: {
        duration_min: 15,
        activities: [
          'Dynamic warm-up: leg swings, hip circles',
          'Goblet squats x 10',
          'Glute bridges x 15',
          'Build to working weight gradually'
        ]
      },
      cooldown: {
        duration_min: 10,
        activities: [
          'Hip flexor stretch 2x30s each',
          'Pigeon pose 2x30s each',
          'Foam roll quads and glutes'
        ]
      },
      nutrition: {
        pre_workout: 'Balanced meal 2-3 hours prior with adequate carbs and protein',
        post_workout: 'Protein (25-30g) + carbs (30-40g) within 30 minutes',
        daily_focus: 'Support strength adaptations: 1.6-2.2g protein/kg bodyweight',
        hydration: '500ml 2 hours before, 200ml every 15-20min during'
      }
    },
    {
      id: 2,
      day: 'Tuesday',
      type: 'endurance_cardio',
      title: 'Aerobic Base - Zone 2 Development',
      summary: 'Long slow distance work to build aerobic base. Focus on fat utilization and mitochondrial adaptation.',
      intensity: 65,
      duration_min: 60,
      rpe_target: '5-6/10',
      completed: false,
      activities: [
        'Choice of: Running, Cycling, or Rowing',
        'Maintain conversational pace throughout',
        'Heart rate: 65-75% max HR (Zone 2)',
        'Focus on nasal breathing if possible',
        'Build aerobic efficiency, not speed'
      ],
      coaching_notes: [
        'This should feel "easy" - you should be able to hold conversation',
        'If HR drifts above Zone 2, slow down immediately',
        'Quality over quantity - better to go shorter at correct intensity'
      ],
      nutrition: {
        pre_workout: 'Light snack if needed, focus on fat adaptation',
        during_workout: 'Water only for sessions under 90 minutes',
        post_workout: 'Balanced meal within 2 hours',
        daily_focus: 'Support aerobic adaptations with anti-inflammatory foods'
      }
    },
    {
      id: 3,
      day: 'Wednesday',
      type: 'crossfit_metcon',
      title: 'CrossFit MetCon - "Grace"',
      summary: 'Classic CrossFit benchmark: 30 Clean and Jerks for time. Tests power endurance in phosphocreatine and glycolytic pathways.',
      intensity: 85,
      duration_min: 20,
      rpe_target: '8-9/10',
      completed: false,
      workout_structure: {
        format: 'For Time',
        exercises: [
          {
            name: 'Clean and Jerk',
            reps: 30,
            weight: '135lb/95lb (or 70-75% 1RM)',
            coaching_cues: [
              'Full squat clean if needed',
              'Split jerk for stability',
              'Break into manageable sets'
            ],
            scaling: 'Reduce weight to maintain sets of 3-5 reps'
          }
        ],
        time_cap: '10 minutes',
        intended_stimulus: 'High power output, moderate duration, significant strength endurance'
      },
      warmup: {
        duration_min: 20,
        activities: [
          'General warm-up: 5min easy cardio',
          'Dynamic stretching: shoulders, hips, ankles',
          'Clean and jerk progression: empty bar',
          'Build to workout weight: 50%, 70%, 85%'
        ]
      },
      cooldown: {
        duration_min: 10,
        activities: [
          'Walk until heart rate normalizes',
          'Shoulder and hip mobility',
          'Deep breathing exercises'
        ]
      },
      nutrition: {
        pre_workout: 'Carbs 30-60min before for glycolytic energy',
        post_workout: 'Immediate protein + carbs for recovery',
        daily_focus: 'Support high-intensity training with adequate carbohydrates',
        hydration: 'Extra attention due to high sweat rate'
      }
    },
    {
      id: 4,
      day: 'Thursday',
      type: 'active_recovery',
      title: 'Active Recovery - Movement Quality',
      summary: 'Low-intensity movement to promote recovery. Focus on mobility, breathing, and parasympathetic activation.',
      intensity: 30,
      duration_min: 45,
      rpe_target: '3-4/10',
      completed: false,
      activities: [
        'Choice of: Easy walk, gentle yoga, swimming',
        'Mobility work: 15-20 minutes focused routine',
        'Breathing exercises: 5-10 minutes',
        'Foam rolling or self-massage',
        'Meditation or mindfulness practice'
      ],
      mobility_focus: [
        'Hip flexors and glutes',
        'Thoracic spine rotation',
        'Ankle mobility',
        'Shoulder girdle'
      ],
      nutrition: {
        daily_focus: 'Anti-inflammatory foods, adequate hydration, sleep support',
        hydration: '2-3 liters throughout day'
      }
    },
    {
      id: 5,
      day: 'Friday',
      type: 'strength_training',
      title: 'Foundation Strength - Upper Body Focus',
      summary: 'Upper body strength development with emphasis on pressing progression and pulling balance.',
      intensity: 75,
      duration_min: 70,
      rpe_target: '6-7/10',
      completed: false,
      exercises: [
        {
          name: 'Shoulder Press (Strict)',
          sets: 4,
          reps: '6-8',
          weight_guidance: '75-80% 1RM',
          rest_sec: 180,
          coaching_cues: ['No leg drive', 'Core tight', 'Press straight up'],
          progression: 'Master strict before push press'
        },
        {
          name: 'Pull-ups (Strict)',
          sets: 4,
          reps: '5-8',
          weight_guidance: 'Bodyweight or assisted',
          rest_sec: 150,
          coaching_cues: ['Full range', 'Control descent', 'Engage lats'],
          progression: 'Build to 10 strict before kipping'
        },
        {
          name: 'Push Press',
          sets: 3,
          reps: '5-6',
          weight_guidance: '85-90% strict press',
          rest_sec: 180,
          coaching_cues: ['Dip and drive', 'Vertical bar path', 'Lock out overhead'],
          progression: 'Add weight when form is perfect'
        },
        {
          name: 'Ring Rows',
          sets: 3,
          reps: '10-12',
          weight_guidance: 'Adjust body angle',
          rest_sec: 90,
          coaching_cues: ['Squeeze shoulder blades', 'Straight body', 'Control tempo'],
          progression: 'Increase difficulty by lowering body angle'
        }
      ],
      warmup: {
        duration_min: 15,
        activities: [
          'Arm circles and shoulder rolls',
          'Band pull-aparts x 15',
          'Push-ups x 10',
          'Build to working weights'
        ]
      },
      cooldown: {
        duration_min: 10,
        activities: [
          'Shoulder stretches: cross-body, overhead',
          'Chest doorway stretch',
          'Upper trap stretch'
        ]
      }
    },
    {
      id: 6,
      day: 'Saturday',
      type: 'hyrox_training',
      title: 'Compromised Running - Station Practice',
      summary: 'Hyrox-specific training focusing on running under fatigue. Practice station efficiency and transitions.',
      intensity: 80,
      duration_min: 45,
      rpe_target: '7-8/10',
      completed: false,
      workout_structure: {
        format: '4 Rounds For Time',
        exercises: [
          {
            name: '500m Run',
            coaching_cues: ['Controlled pace', 'Save energy for station'],
            target_time: '2:30-3:00'
          },
          {
            name: 'Sled Push',
            distance: '25m',
            weight: '75% of competition weight',
            coaching_cues: ['Low body angle', 'Drive with legs', 'Short steps']
          },
          {
            name: '500m Run',
            coaching_cues: ['Find rhythm quickly', 'Maintain form under fatigue'],
            target_time: '2:45-3:15 (slower due to fatigue)'
          },
          {
            name: 'Farmers Carry',
            distance: '50m',
            weight: '75% of competition weight',
            coaching_cues: ['Upright posture', 'Controlled steps', 'Secure grip']
          }
        ],
        rest_between_rounds: '3-4 minutes',
        intended_stimulus: 'Practice compromised running and station efficiency'
      },
      warmup: {
        duration_min: 15,
        activities: [
          'Easy jog 5 minutes',
          'Dynamic warm-up for running',
          'Practice sled push technique',
          'Farmers carry practice'
        ]
      },
      cooldown: {
        duration_min: 10,
        activities: [
          'Easy walk 5 minutes',
          'Hip flexor and calf stretches',
          'Grip and forearm stretches'
        ]
      }
    },
    {
      id: 7,
      day: 'Sunday',
      type: 'endurance_cardio',
      title: 'Long Slow Distance - Aerobic Base',
      summary: 'Extended aerobic session for base building. Focus on aerobic efficiency and fat utilization.',
      intensity: 60,
      duration_min: 90,
      rpe_target: '5-6/10',
      completed: false,
      activities: [
        'Choice of: Long run, bike ride, or combination',
        'Maintain Zone 1-2 heart rate throughout',
        'Practice race nutrition if session >90 minutes',
        'Focus on form and efficiency',
        'Enjoy the process - this should feel good'
      ],
      coaching_notes: [
        'This is your longest session of the week',
        'Go slower than you think - aerobic base is built at low intensity',
        'If you can\'t maintain conversation, slow down',
        'Practice fueling strategy for longer sessions'
      ],
      nutrition: {
        pre_workout: 'Substantial meal 2-3 hours before',
        during_workout: 'Practice race fueling: 30-60g carbs/hour after 60 minutes',
        post_workout: 'Recovery meal within 30-60 minutes',
        daily_focus: 'Glycogen replenishment and muscle repair'
      }
    }
  ]
};

// 8-Week Hyrox Specific Program
export const HYROX_SPECIFIC_PROGRAM: HybridProgram = {
  id: 'hyrox-specific-8week',
  name: 'Hyrox Race Preparation',
  description: 'Specialized 8-week program for Hyrox competition. Focuses on compromised running, station efficiency, and race simulation.',
  duration_weeks: 8,
  difficulty: 'advanced',
  goals: ['hyrox_performance', 'functional_strength', 'lactate_tolerance'],
  equipment_needed: ['sled', 'kettlebells', 'medicine-ball', 'rowing-machine', 'skierg', 'sandbag'],
  periodization: {
    macrocycle: 'build',
    mesocycle_focus: 'Race-specific preparation with compromised running emphasis',
    interference_management: 'Concurrent training with Hyrox-specific adaptations'
  },
  concurrent_training: {
    strength_emphasis: 7,
    endurance_emphasis: 9,
    separation_hours: 4
  },
  weekly_plans: [] // Would include 8 weeks of progressive Hyrox training
};

// Export all programs
export const HYBRID_ATHLETICS_PROGRAMS = {
  HYBRID_BASE_PROGRAM,
  HYROX_SPECIFIC_PROGRAM
};

export default HYBRID_ATHLETICS_PROGRAMS; 