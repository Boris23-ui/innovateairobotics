import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';

// Mock data for demo
const MOCK_COURSES = [
  {
    id: '1',
    name: 'Tiny Tinkerers Robotics',
    description: 'An engaging introduction to robotics for young learners aged 5 and under. Through play-based activities, children explore basic robot movements, sounds, and simple cause-and-effect relationships.',
    category: 'Early Learning',
    level: 'Beginner',
    maxStudents: 12,
    startDate: new Date('2024-03-01'),
    endDate: new Date('2024-06-30'),
    tags: ['robotics', 'early-learning', 'play-based'],
    teacherId: 'user_2YwX9K8LmNpQrS',
    students: Array(8).fill({ id: 'student', name: 'Student' }),
    schedule: 'Mon & Wed, 10:00 AM - 11:00 AM',
    location: 'Room 101',
    modules: [
      {
        id: '1',
        title: 'Introduction to Robotics',
        description: 'Understanding the basics of robotics and its applications',
        lessons: [
          { id: '1', title: 'What is Robotics?', duration: '45 min', type: 'video', completed: true },
          { id: '2', title: 'History of Robotics', duration: '30 min', type: 'reading', completed: true },
          { id: '3', title: 'Basic Components', duration: '60 min', type: 'quiz', completed: false },
        ],
      }
    ]
  },
  {
    id: '2',
    name: 'Robot Explorers Club',
    description: 'Designed for 6-9 year olds, this course introduces basic programming concepts through visual coding and hands-on robot building. Students learn about sensors, motors, and simple automation.',
    category: 'Elementary',
    level: 'Intermediate',
    maxStudents: 15,
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-07-15'),
    tags: ['programming', 'robotics', 'sensors'],
    teacherId: 'user_2YwX9K8LmNpQrS',
    students: Array(12).fill({ id: 'student', name: 'Student' }),
    schedule: 'Tue & Thu, 3:00 PM - 4:30 PM',
    location: 'Lab 203',
    modules: [
      {
        id: '1',
        title: 'Introduction to Programming',
        description: 'Learn the basics of visual programming',
        lessons: [
          { id: '1', title: 'What is Programming?', duration: '45 min', type: 'video', completed: true },
          { id: '2', title: 'Visual Coding Basics', duration: '30 min', type: 'reading', completed: true },
          { id: '3', title: 'First Program', duration: '60 min', type: 'coding', completed: false },
        ],
      }
    ]
  },
  {
    id: '3',
    name: 'Tech Titans Challenge',
    description: 'Advanced robotics and coding for 10-12 year olds. Students tackle complex projects involving autonomous navigation, sensor integration, and problem-solving challenges.',
    category: 'Middle School',
    level: 'Advanced',
    maxStudents: 12,
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-07-31'),
    tags: ['advanced', 'coding', 'challenges'],
    teacherId: 'user_2YwX9K8LmNpQrS',
    students: Array(10).fill({ id: 'student', name: 'Student' }),
    schedule: 'Wed & Fri, 4:00 PM - 5:30 PM',
    location: 'Lab 305',
    modules: [
      {
        id: '1',
        title: 'Advanced Robotics',
        description: 'Complex robotics concepts and applications',
        lessons: [
          { id: '1', title: 'Autonomous Navigation', duration: '60 min', type: 'video', completed: true },
          { id: '2', title: 'Sensor Integration', duration: '45 min', type: 'reading', completed: true },
          { id: '3', title: 'Problem Solving', duration: '90 min', type: 'coding', completed: false },
        ],
      }
    ]
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

    // For demo purposes, return all courses if no courses are found for the user
    let courses = MOCK_COURSES.filter(course => course.teacherId === userId);
    if (courses.length === 0) {
      // If no courses found, return all courses but update their teacherId
      courses = MOCK_COURSES.map(course => ({
        ...course,
        teacherId: userId
      }));
    }
    return NextResponse.json(courses);
  } catch (error) {
    console.error('[COURSES_GET]', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
} 