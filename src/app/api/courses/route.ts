import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

// Mock data for demo
const MOCK_COURSES = [
  {
    id: '1',
    name: 'Introduction to Robotics',
    description: 'Learn the basics of robotics and programming',
    category: 'Robotics',
    level: 'Beginner',
    maxStudents: 20,
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-06-30'),
    tags: ['robotics', 'beginner', 'programming'],
    teacherId: 'demo-teacher-id',
    students: []
  },
  {
    id: '2',
    name: 'Advanced Robotics',
    description: 'Advanced concepts in robotics and automation',
    category: 'Robotics',
    level: 'Advanced',
    maxStudents: 15,
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-07-31'),
    tags: ['robotics', 'advanced', 'automation'],
    teacherId: 'demo-teacher-id',
    students: []
  }
];

export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const body = await request.json();
    const newCourse = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      teacherId: userId,
      students: [],
      startDate: new Date(body.startDate),
      endDate: new Date(body.endDate),
    };

    MOCK_COURSES.push(newCourse);
    return NextResponse.json(newCourse);
  } catch (error) {
    console.error('[COURSES_POST]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Filter courses by teacher ID
    const courses = MOCK_COURSES.filter(course => course.teacherId === userId);
    return NextResponse.json(courses);
  } catch (error) {
    console.error('[COURSES_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
} 