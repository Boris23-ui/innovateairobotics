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

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Find user
    const user = users.find((u) => u.email === email);
    if (!user || user.password !== password) {
      return NextResponse.json(
        { message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Create session
    const session = {
      id: Math.random().toString(36).substring(7),
      userId: user.id,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    };

    // Set session cookie
    cookies().set('session', JSON.stringify(session), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60, // 24 hours
    });

    // Return user data (excluding password)
    const { password: _, ...userWithoutPassword } = user;
    return NextResponse.json(userWithoutPassword);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 