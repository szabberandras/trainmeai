import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { WorkoutCompletionService } from '@/lib/services/workout-completion.service';
import { WorkoutCompletion, QuickWorkoutCompletion } from '@/lib/types/workout-completion';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { type, programId, weekNumber, workoutId, workoutType, completionData } = body;

    // Validate required fields
    if (!programId || !workoutId || !workoutType || weekNumber === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: programId, workoutId, workoutType, weekNumber' },
        { status: 400 }
      );
    }

    let completionId: string;

    if (type === 'quick') {
      // Quick completion with minimal data
      const quickCompletion: QuickWorkoutCompletion = {
        workoutId,
        completed: completionData.completed || false,
        rpe: completionData.rpe || 5,
        rating: completionData.rating || 3,
        duration: completionData.duration,
        notes: completionData.notes,
        completedAt: new Date()
      };

      // Validate quick completion data
      if (quickCompletion.rpe < 1 || quickCompletion.rpe > 10) {
        return NextResponse.json(
          { error: 'RPE must be between 1 and 10' },
          { status: 400 }
        );
      }

      if (quickCompletion.rating < 1 || quickCompletion.rating > 5) {
        return NextResponse.json(
          { error: 'Rating must be between 1 and 5' },
          { status: 400 }
        );
      }

      completionId = await WorkoutCompletionService.saveQuickCompletion(
        session.user.id,
        programId,
        weekNumber,
        workoutId,
        workoutType,
        quickCompletion
      );
    } else {
      // Full completion with detailed exercise data
      const fullCompletion: Omit<WorkoutCompletion, 'id'> = {
        userId: session.user.id,
        programId,
        weekNumber,
        workoutId,
        workoutType,
        completedAt: new Date(),
        duration: completionData.duration || 0,
        plannedDuration: completionData.plannedDuration || 0,
        rpe: completionData.rpe || 5,
        overallRating: completionData.overallRating || 3,
        exercises: completionData.exercises || [],
        notes: completionData.notes,
        energyLevel: completionData.energyLevel || 'moderate',
        motivation: completionData.motivation || 'moderate',
        difficultyRating: completionData.difficultyRating || 'just-right',
        weather: completionData.weather,
        location: completionData.location,
        equipment: completionData.equipment,
        sleepQuality: completionData.sleepQuality,
        stressLevel: completionData.stressLevel,
        musclesSore: completionData.musclesSore,
        isComplete: completionData.isComplete || false,
        completionPercentage: completionData.completionPercentage || 0,
        skippedExercises: completionData.skippedExercises,
        modifiedExercises: completionData.modifiedExercises
      };

      // Validate full completion data
      if (fullCompletion.rpe < 1 || fullCompletion.rpe > 10) {
        return NextResponse.json(
          { error: 'RPE must be between 1 and 10' },
          { status: 400 }
        );
      }

      if (fullCompletion.overallRating < 1 || fullCompletion.overallRating > 5) {
        return NextResponse.json(
          { error: 'Overall rating must be between 1 and 5' },
          { status: 400 }
        );
      }

      if (fullCompletion.completionPercentage < 0 || fullCompletion.completionPercentage > 100) {
        return NextResponse.json(
          { error: 'Completion percentage must be between 0 and 100' },
          { status: 400 }
        );
      }

      completionId = await WorkoutCompletionService.saveWorkoutCompletion(fullCompletion);
    }

    return NextResponse.json({
      success: true,
      completionId,
      message: 'Workout completion saved successfully'
    });

  } catch (error) {
    console.error('Error saving workout completion:', error);
    return NextResponse.json(
      { error: 'Failed to save workout completion' },
      { status: 500 }
    );
  }
} 