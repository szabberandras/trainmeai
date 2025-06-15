import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { FullPlanGeneratorService } from '@/lib/services/full-plan-generator.service';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { programId, weekNumber } = await request.json();

    if (!programId || !weekNumber) {
      return NextResponse.json(
        { error: 'Program ID and week number are required' },
        { status: 400 }
      );
    }

    const service = new FullPlanGeneratorService();
    const result = await service.generateDetailedWeekFromFramework(
      programId,
      session.user.id,
      weekNumber
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      week: result.week
    });

  } catch (error) {
    console.error('Error generating detailed week:', error);
    return NextResponse.json(
      { error: 'Failed to generate detailed week' },
      { status: 500 }
    );
  }
} 