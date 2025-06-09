import { Exercise } from '@/types/templates';
import { SWIMMING_WORKOUT_EXERCISES } from '../swimming-workouts-converted';
import { ADDITIONAL_SWIMMING_WORKOUTS } from '../swimming-workouts-additional';
import { SWIMMING_WORKOUTS_BATCH2 } from '../swimming-workouts-batch2';
import { SWIMMING_WORKOUTS_BATCH3 } from '../swimming-workouts-batch3';

// For now, we'll focus on the new structured swimming workouts
// The existing individual swimming exercises from the database can be accessed directly
// when needed, but they use a different type system

export const SWIMMING_EXERCISES: Record<string, Exercise> = {
  ...SWIMMING_WORKOUT_EXERCISES
};

// Combine all swimming exercises
export const ALL_SWIMMING_EXERCISES = {
  ...SWIMMING_EXERCISES,
  ...SWIMMING_WORKOUT_EXERCISES,
  ...ADDITIONAL_SWIMMING_WORKOUTS,
  ...SWIMMING_WORKOUTS_BATCH2,
  ...SWIMMING_WORKOUTS_BATCH3
};

export default SWIMMING_EXERCISES;
