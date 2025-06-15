// lib/exercises/database.ts - Re-export hub for backward compatibility
// This file now re-exports everything from the category system
// All existing imports continue to work without any changes

export { 
  EXERCISE_DATABASE,
  EXERCISE_CATEGORIES,
  getExercisesByCategory,
  getExerciseById,
  getExercisesByEquipment,
  getExercisesByDifficulty,
  getExercisesByMuscleGroup,
  searchExercises,
  getRandomExercises,
  getDatabaseStats
} from './categories/index';

// Keep all existing exports for backward compatibility
export * from './categories/index';

// Legacy exports (if any services use these specific names)
export { EXERCISE_DATABASE as default } from './categories/index';
