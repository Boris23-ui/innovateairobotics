import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { courseService } from '@/lib/database';

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const newCourse = {
      title: body.name,
      description: body.description,
      instructor_id: userId,
      category: body.category,
      level: body.level.toLowerCase(),
      duration: body.duration || 12,
      start_date: body.startDate,
      end_date: body.endDate,
      enrollment_status: 'open' as const,
      max_students: body.maxStudents,
      current_enrollment: 0,
      thumbnail_url: body.thumbnailUrl,
    };

    const course = await courseService.create(newCourse);
    return NextResponse.json(course);
  } catch (error) {
    console.error('[COURSES_POST]', error);
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

    const courses = await courseService.getByInstructor(userId);
    return NextResponse.json(courses);
  } catch (error) {
    console.error('[COURSES_GET]', error);
    if (error instanceof Error && error.message === 'Supabase not configured') {
      return new NextResponse('Database not configured', { status: 503 });
    }
    return new NextResponse('Internal Error', { status: 500 });
  }
} 