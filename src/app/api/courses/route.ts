import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { courseService } from '@/lib/database';

const isDemoMode = () => process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

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
    // Demo mode: return mock courses
    if (isDemoMode()) {
      return NextResponse.json([
        {
          id: 'demo-course-1',
          title: 'Introduction to Robotics',
          description: 'Learn the basics of robotics and programming',
          instructor_id: 'demo-instructor-1',
          category: 'robotics',
          level: 'beginner',
          duration: 12,
          enrollment_status: 'open',
          current_enrollment: 15,
          max_students: 20
        },
        {
          id: 'demo-course-2',
          title: 'Advanced Programming',
          description: 'Master advanced programming concepts',
          instructor_id: 'demo-instructor-1',
          category: 'programming',
          level: 'advanced',
          duration: 16,
          enrollment_status: 'open',
          current_enrollment: 10,
          max_students: 15
        }
      ]);
    }

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