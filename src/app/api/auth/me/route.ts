import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Mock user database - replace with your actual database
const users = [
  {
    id: '1',
    email: 'teacher@example.com',
    password: 'password123',
    name: 'John Doe',
    role: 'teacher',
  },
  {
    id: '2',
    email: 'student@example.com',
    password: 'password123',
    name: 'Jane Smith',
    role: 'student',
  },
];

export async function GET() {
  try {
    const sessionCookie = cookies().get('session');
    if (!sessionCookie) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const session = JSON.parse(sessionCookie.value);
    if (new Date(session.expiresAt) < new Date()) {
      cookies().delete('session');
      return NextResponse.json(
        { message: 'Session expired' },
        { status: 401 }
      );
    }

    const user = users.find((u) => u.id === session.userId);
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 401 }
      );
    }

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 