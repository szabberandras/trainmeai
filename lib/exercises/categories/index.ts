import { Exercise, ExerciseCategory, ExerciseDatabase, CategoryExercises } from '../types';

// Import all category exercises
import { AGILITY_SPEED_EXERCISES } from './agility_speed';
import { BALANCE_EXERCISES } from './balance';
import { BODYWEIGHT_EXERCISES } from './bodyweight';
import { CARDIO_EXERCISES } from './cardio';
import { CORE_EXERCISES } from './core';
import { CROSSFIT_EXERCISES } from './crossfit';
import { CYCLING_EXERCISES } from './cycling';
import { ENDURANCE_EXERCISES } from './endurance';
import { FLEXIBILITY_EXERCISES } from './flexibility';
import { KETTLEBELL_EXERCISES } from './kettlebell';
import { LUNGE_EXERCISES } from './lunge';
import { MOBILITY_EXERCISES } from './mobility';
import { PLYOMETRIC_EXERCISES } from './plyometric';
import { RECOVERY_WARM_UP_EXERCISES } from './recovery_warm_up';
import { RUNNING_EXERCISES } from './running';
import { STABILITY_EXERCISES } from './stability';
import { STRENGTH_EXERCISES } from './strength';
import { SWIMMING_EXERCISES } from './swimming';
import { TECHNIQUE_EXERCISES } from './technique';
import { TRIATHLON_EXERCISES } from './triathlon';
import { HYROX_EXERCISES } from './hyrox';

// Combine all category exercises into a single database
export const EXERCISE_DATABASE: ExerciseDatabase = {
  ...AGILITY_SPEED_EXERCISES,
  ...BALANCE_EXERCISES,
  ...BODYWEIGHT_EXERCISES,
  ...CARDIO_EXERCISES,
  ...CORE_EXERCISES,
  ...CROSSFIT_EXERCISES,
  ...CYCLING_EXERCISES,
  ...ENDURANCE_EXERCISES,
  ...FLEXIBILITY_EXERCISES,
  ...KETTLEBELL_EXERCISES,
  ...LUNGE_EXERCISES,
  ...MOBILITY_EXERCISES,
  ...PLYOMETRIC_EXERCISES,
  ...RECOVERY_WARM_UP_EXERCISES,
  ...RUNNING_EXERCISES,
  ...STABILITY_EXERCISES,
  ...STRENGTH_EXERCISES,
  ...SWIMMING_EXERCISES,
  ...TECHNIQUE_EXERCISES,
  ...TRIATHLON_EXERCISES,
  ...HYROX_EXERCISES,
};

// Category mappings
export const EXERCISE_CATEGORIES: CategoryExercises = {
  'agility-speed': Object.keys(AGILITY_SPEED_EXERCISES),
  balance: Object.keys(BALANCE_EXERCISES),
  bodyweight: Object.keys(BODYWEIGHT_EXERCISES),
  cardio: Object.keys(CARDIO_EXERCISES),
  core: Object.keys(CORE_EXERCISES),
  crossfit: Object.keys(CROSSFIT_EXERCISES),
  cycling: Object.keys(CYCLING_EXERCISES),
  endurance: Object.keys(ENDURANCE_EXERCISES),
  flexibility: Object.keys(FLEXIBILITY_EXERCISES),
  kettlebell: Object.keys(KETTLEBELL_EXERCISES),
  lunge: Object.keys(LUNGE_EXERCISES),
  mobility: Object.keys(MOBILITY_EXERCISES),
  plyometric: Object.keys(PLYOMETRIC_EXERCISES),
  'recovery-warm-up': Object.keys(RECOVERY_WARM_UP_EXERCISES),
  running: Object.keys(RUNNING_EXERCISES),
  stability: Object.keys(STABILITY_EXERCISES),
  strength: Object.keys(STRENGTH_EXERCISES),
  swimming: Object.keys(SWIMMING_EXERCISES),
  technique: Object.keys(TECHNIQUE_EXERCISES),
  triathlon: Object.keys(TRIATHLON_EXERCISES),
};

// Helper functions
export function getExercisesByCategory(category: ExerciseCategory): Exercise[] {
  const exerciseIds = EXERCISE_CATEGORIES[category as keyof typeof EXERCISE_CATEGORIES] || [];
  return exerciseIds.map(id => EXERCISE_DATABASE[id]).filter(Boolean);
}

export function getExerciseById(id: string): Exercise | undefined {
  return EXERCISE_DATABASE[id];
}

export function getExercisesByEquipment(equipment: string[]): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => 
    equipment.length === 0 || exercise.equipment.some(eq => equipment.includes(eq))
  );
}

export function getExercisesByDifficulty(difficulty: number): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => exercise.difficulty <= difficulty);
}

export function getExercisesByMuscleGroup(muscleGroup: string): Exercise[] {
  return Object.values(EXERCISE_DATABASE).filter(exercise => 
    exercise.muscleGroups.some(mg => mg.toLowerCase().includes(muscleGroup.toLowerCase()))
  );
}

export function searchExercises(query: string): Exercise[] {
  const lowercaseQuery = query.toLowerCase();
  return Object.values(EXERCISE_DATABASE).filter(exercise =>
    exercise.name.toLowerCase().includes(lowercaseQuery) ||
    exercise.muscleGroups.some(mg => mg.toLowerCase().includes(lowercaseQuery)) ||
    exercise.category.toLowerCase().includes(lowercaseQuery)
  );
}

export function getRandomExercises(count: number, category?: ExerciseCategory): Exercise[] {
  const exercises = category ? getExercisesByCategory(category) : Object.values(EXERCISE_DATABASE);
  const shuffled = exercises.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Statistics
export function getDatabaseStats() {
  const totalExercises = Object.keys(EXERCISE_DATABASE).length;
  const categoryStats = Object.entries(EXERCISE_CATEGORIES).map(([category, exercises]) => ({
    category,
    count: exercises.length,
    percentage: ((exercises.length / totalExercises) * 100).toFixed(1)
  }));

  return {
    totalExercises,
    categories: categoryStats,
    lastUpdated: new Date().toISOString()
  };
}
