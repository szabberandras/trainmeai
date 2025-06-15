import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { WorkoutCompletionService } from '@/lib/services/workout-completion.service';

export async function GET(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const programId = searchParams.get('programId');
    const weekNumber = searchParams.get('weekNumber');
    const type = searchParams.get('type') || 'week'; // 'week', 'recent', 'summary', 'patterns'

    if (!programId) {
      return NextResponse.json(
        { error: 'programId is required' },
        { status: 400 }
      );
    }

    let data;

    switch (type) {
      case 'week':
        if (weekNumber === null) {
          return NextResponse.json(
            { error: 'weekNumber is required for week type' },
            { status: 400 }
          );
        }
        data = await WorkoutCompletionService.getWeekCompletions(
          session.user.id,
          programId,
          parseInt(weekNumber)
        );
        break;

      case 'recent':
        const limit = parseInt(searchParams.get('limit') || '20');
        data = await WorkoutCompletionService.getRecentCompletions(
          session.user.id,
          programId,
          limit
        );
        break;

      case 'summary':
        if (weekNumber === null) {
          return NextResponse.json(
            { error: 'weekNumber is required for summary type' },
            { status: 400 }
          );
        }
        data = await WorkoutCompletionService.getWeeklySummary(
          session.user.id,
          programId,
          parseInt(weekNumber)
        );
        break;

      case 'patterns':
        data = await WorkoutCompletionService.getPerformancePatterns(
          session.user.id,
          programId
        );
        break;

      default:
        return NextResponse.json(
          { error: 'Invalid type. Must be: week, recent, summary, or patterns' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      data,
      type
    });

  } catch (error) {
    console.error('Error getting workout completions:', error);
    return NextResponse.json(
      { error: 'Failed to get workout completions' },
      { status: 500 }
    );
  }
} 