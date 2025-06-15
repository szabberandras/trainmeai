import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { ProgressiveProgramService } from '@/lib/services/progressive-program.service';

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { goal, targetDate, userProfile, initialAssessment } = await req.json();

    if (!goal || !targetDate) {
      return NextResponse.json(
        { error: 'Goal and target date are required' },
        { status: 400 }
      );
    }

    // Create progressive program with AI-generated framework
    const service = new ProgressiveProgramService();
    const program = await service.createProgressiveProgram({
      userId: session.user.id,
      goal,
      targetDate: new Date(targetDate),
      userProfile: userProfile || {},
      initialAssessment: initialAssessment || {}
    });

    return NextResponse.json({
      success: true,
      program: {
        id: program.id,
        name: program.name,
        goal: program.goal,
        targetDate: program.targetDate,
        currentWeek: program.currentWeek,
        totalPlannedWeeks: program.totalPlannedWeeks,
        framework: program.programFramework,
        firstWeek: program.generatedWeeks[0]
      }
    });

  } catch (error: any) {
    console.error('Error creating progressive program:', error);
    return NextResponse.json(
      { error: 'Failed to create progressive program' },
      { status: 500 }
    );
  }
} 