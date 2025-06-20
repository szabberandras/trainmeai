import { Exercise, ExerciseCategory, ExerciseDatabase, CategoryExercises } from '../types';
import { STRENGTH_EXERCISES } from './strength';
import { CORE_EXERCISES } from './core';
import { CARDIO_EXERCISES } from './cardio';
import { MOBILITY_EXERCISES } from './mobility';
import { FLEXIBILITY_EXERCISES } from './flexibility';
import { PLYOMETRIC_EXERCISES } from './plyometric';
import { TECHNIQUE_EXERCISES } from './technique';
import { ENDURANCE_EXERCISES } from './endurance';

// Combine all category exercises into a single database
export const EXERCISE_DATABASE: ExerciseDatabase = {
  ...STRENGTH_EXERCISES,
  ...CORE_EXERCISES,
  ...CARDIO_EXERCISES,
  ...MOBILITY_EXERCISES,
  ...FLEXIBILITY_EXERCISES,
  ...PLYOMETRIC_EXERCISES,
  ...TECHNIQUE_EXERCISES,
  ...ENDURANCE_EXERCISES,
};

// Category mappings
export const EXERCISE_CATEGORIES: CategoryExercises = {
  strength: Object.keys(STRENGTH_EXERCISES),
  core: Object.keys(CORE_EXERCISES),
  cardio: Object.keys(CARDIO_EXERCISES),
  mobility: Object.keys(MOBILITY_EXERCISES),
  flexibility: Object.keys(FLEXIBILITY_EXERCISES),
  plyometric: Object.keys(PLYOMETRIC_EXERCISES),
  technique: Object.keys(TECHNIQUE_EXERCISES),
  endurance: Object.keys(ENDURANCE_EXERCISES),
};

// Helper functions
export function getExercisesByCategory(category: ExerciseCategory): Exercise[] {
  const exerciseIds = EXERCISE_CATEGORIES[category] || [];
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
