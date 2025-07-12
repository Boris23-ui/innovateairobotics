import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { assignmentService } from '@/lib/database';

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const newAssignment = {
      title: body.title,
      description: body.description,
      course_id: body.courseId,
      due_date: body.dueDate,
      status: 'draft' as const,
      total_points: body.totalPoints || 100,
      instructions: body.instructions,
    };

    const assignment = await assignmentService.create(newAssignment);
    return NextResponse.json(assignment);
  } catch (error) {
    console.error('[ASSIGNMENTS_POST]', error);
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
    const courseId = searchParams.get('courseId');

    if (courseId) {
      const assignments = await assignmentService.getByCourse(courseId);
      return NextResponse.json(assignments);
    } else {
      const assignments = await assignmentService.getAll();
      return NextResponse.json(assignments);
    }
  } catch (error) {
    console.error('[ASSIGNMENTS_GET]', error);
    if (error instanceof Error && error.message === 'Supabase not configured') {
      return new NextResponse('Database not configured', { status: 503 });
    }
    return new NextResponse('Internal Error', { status: 500 });
  }
} 