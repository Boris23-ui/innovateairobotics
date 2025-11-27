import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { userService } from '@/lib/database';

const isDemoMode = () => process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export async function POST(request: Request) {
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
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get user from Clerk
    const { user } = await auth();
    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Check if user exists in our database
    let dbUser;
    try {
      dbUser = await userService.getById(userId);
    } catch (error) {
      // User doesn't exist in our database, create them
      const newUser = {
        id: userId,
        email: user.emailAddresses[0]?.emailAddress || '',
        name: user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : 'Unknown',
        role: 'student' as const, // Default role
      };

      dbUser = await userService.create(newUser);
    }

    return NextResponse.json(dbUser);
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}