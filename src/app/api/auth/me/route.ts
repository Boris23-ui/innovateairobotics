import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { userService } from '@/lib/database';

export async function GET() {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    // Get user from our database
    const user = await userService.getById(userId);
    return NextResponse.json(user);
  } catch (error) {
    console.error('Auth check error:', error);
    if (error instanceof Error && error.message === 'Supabase not configured') {
      return NextResponse.json(
        { message: 'Database not configured' },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 