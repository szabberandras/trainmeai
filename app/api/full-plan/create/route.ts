import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { FullPlanGeneratorService } from '@/lib/services/full-plan-generator.service';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { goal, targetDate, userProfile, includeExport } = await request.json();

    if (!goal || !targetDate) {
      return NextResponse.json(
        { error: 'Goal and target date are required' },
        { status: 400 }
      );
    }

    const service = new FullPlanGeneratorService();
    const result = await service.generateFullPlan({
      userId: session.user.id,
      goal,
      targetDate: new Date(targetDate),
      userProfile: userProfile || {},
      includeExport: includeExport || false
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      program: {
        id: result.program?.id,
        name: result.program?.name,
        goal: result.program?.goal,
        targetDate: result.program?.targetDate,
        generationType: result.program?.generationType,
        totalPlannedWeeks: result.program?.totalPlannedWeeks,
        exportable: result.program?.exportable,
        exportFormats: result.program?.exportFormats
      },
      frameworkWeeks: result.frameworkWeeks,
      exportOptions: result.exportOptions
    });

  } catch (error) {
    console.error('Error creating full plan:', error);
    return NextResponse.json(
      { error: 'Failed to create full plan' },
      { status: 500 }
    );
  }
} 