import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { submissionService } from '@/lib/database';

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const newSubmission = {
      assignment_id: body.assignmentId,
      student_id: userId,
      content: body.content,
      attachments: body.attachments || [],
    };

    const submission = await submissionService.create(newSubmission);
    return NextResponse.json(submission);
  } catch (error) {
    console.error('[SUBMISSIONS_POST]', error);
    if (error instanceof Error && error.message === 'Supabase not configured') {
      return new NextResponse('Database not configured', { status: 503 });
    }
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const assignmentId = searchParams.get('assignmentId');

    if (assignmentId) {
      const submissions = await submissionService.getByAssignment(assignmentId);
      return NextResponse.json(submissions);
    } else {
      const submissions = await submissionService.getByStudent(userId);
      return NextResponse.json(submissions);
    }
  } catch (error) {
    console.error('[SUBMISSIONS_GET]', error);
    if (error instanceof Error && error.message === 'Supabase not configured') {
      return new NextResponse('Database not configured', { status: 503 });
    }
    return new NextResponse('Internal Error', { status: 500 });
  }
} 