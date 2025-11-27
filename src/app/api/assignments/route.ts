import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { assignmentService } from '@/lib/database';

const isDemoMode = () => process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

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
    // Demo mode: return mock assignments
    if (isDemoMode()) {
      return NextResponse.json([
        {
          id: 'demo-assignment-1',
          title: 'Robot Navigation Project',
          description: 'Build a robot that can navigate a maze',
          course_id: 'demo-course-1',
          due_date: '2024-04-15',
          status: 'published',
          total_points: 100
        },
        {
          id: 'demo-assignment-2',
          title: 'Sensor Integration Task',
          description: 'Integrate sensors with your robot',
          course_id: 'demo-course-2',
          due_date: '2024-04-20',
          status: 'published',
          total_points: 100
        }
      ]);
    }

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