import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { userService } from '@/lib/database';

const isDemoMode = () => process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export async function GET() {
  try {
    // Demo mode: return mock user
    if (isDemoMode()) {
      return NextResponse.json({
        id: 'demo-user-123',
        email: 'demo@innovateai.com',
        name: 'Demo Student',
        role: 'student',
        gradeLevel: 'Grade 10',
        school: 'InnovateAI Academy (Demo)'
      });
    }

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