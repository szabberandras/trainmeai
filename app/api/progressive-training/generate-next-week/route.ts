import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { ProgressiveProgramService } from '@/lib/services/progressive-program.service';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { programId } = await request.json();

    if (!programId) {
      return NextResponse.json({ error: 'Program ID is required' }, { status: 400 });
    }

    const service = new ProgressiveProgramService();
    const result = await service.generateNextWeek({
      programId,
      userId: session.user.id
    });

    if (!result.success) {
      return NextResponse.json({ 
        error: result.error,
        canProceed: result.prerequisites?.canProceed || false,
        prerequisites: result.prerequisites 
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      week: result.week,
      coachingInsights: result.coachingInsights
    });

  } catch (error) {
    console.error('Error generating next week:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}