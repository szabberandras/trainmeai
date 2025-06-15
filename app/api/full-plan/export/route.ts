import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/auth';
import { FullPlanGeneratorService } from '@/lib/services/full-plan-generator.service';

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { programId, format } = await request.json();

    if (!programId || !format) {
      return NextResponse.json(
        { error: 'Program ID and format are required' },
        { status: 400 }
      );
    }

    if (!['pdf', 'csv', 'json'].includes(format.toLowerCase())) {
      return NextResponse.json(
        { error: 'Format must be pdf, csv, or json' },
        { status: 400 }
      );
    }

    const service = new FullPlanGeneratorService();
    const result = await service.exportFullPlan(
      programId,
      session.user.id,
      format.toLowerCase()
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // Set appropriate headers for file download
    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${result.filename}"`);
    
    if (format.toLowerCase() === 'json') {
      headers.set('Content-Type', 'application/json');
    } else if (format.toLowerCase() === 'csv') {
      headers.set('Content-Type', 'text/csv');
    } else if (format.toLowerCase() === 'pdf') {
      headers.set('Content-Type', 'application/pdf');
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      filename: result.filename,
      note: 'Progressive features disabled in exported version - this is a static plan'
    }, { headers });

  } catch (error) {
    console.error('Error exporting full plan:', error);
    return NextResponse.json(
      { error: 'Failed to export full plan' },
      { status: 500 }
    );
  }
} 