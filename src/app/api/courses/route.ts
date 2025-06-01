import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { prisma } from '@/lib/prisma';

// Mock user for demo
const MOCK_USER = {
  id: 'demo-teacher-id',
  clerkId: 'demo-clerk-id',
  firstName: 'Demo',
  lastName: 'Teacher',
  email: 'demo@teacher.com',
};

export async function POST(request: Request) {
  try {
    let { userId } = auth();
    if (!userId) {
      // For demo, create/find a mock user
      let user = await prisma.user.findUnique({ where: { clerkId: MOCK_USER.clerkId } });
      if (!user) {
        user = await prisma.user.create({ data: MOCK_USER });
      }
      userId = user.id;
    }

    const body = await request.json();
    const {
      name,
      description,
      category,
      level,
      maxStudents,
      startDate,
      endDate,
      tags,
    } = body;

    const course = await prisma.course.create({
      data: {
        name,
        description,
        category,
        level,
        maxStudents,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        tags: Array.isArray(tags) ? tags.join(',') : tags,
        teacherId: userId,
      },
    });

    return NextResponse.json({ ...course, tags: course.tags.split(',') });
  } catch (error) {
    console.error('[COURSES_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    let { userId } = auth();
    if (!userId) {
      // For demo, use mock user
      let user = await prisma.user.findUnique({ where: { clerkId: MOCK_USER.clerkId } });
      if (!user) {
        user = await prisma.user.create({ data: MOCK_USER });
      }
      userId = user.id;
    }

    const courses = await prisma.course.findMany({
      where: {
        teacherId: userId,
      },
      include: {
        students: true,
      },
    });

    // Convert tags string to array for each course
    const result = courses.map((course: any) => ({ ...course, tags: course.tags ? course.tags.split(',') : [] }));
    return NextResponse.json(result);
  } catch (error) {
    console.error('[COURSES_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
} 