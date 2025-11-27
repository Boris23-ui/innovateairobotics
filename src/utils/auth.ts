import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@clerk/nextjs';

export type UserRole = 'student' | 'teacher' | 'admin' | 'parent';

export interface UserProfile {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role: UserRole;
  gradeLevel?: string;
  school?: string;
}

const isDemoMode = () => process.env.NEXT_PUBLIC_DEMO_MODE === 'true';

export function combineHeaders(...headers: Headers[]) {
  const combined = new Headers();
  headers.forEach(header => {
    header.forEach((value, key) => {
      combined.append(key, value);
    });
  });
  return combined;
}

export function getSessionCookie(request: NextRequest) {
  return request.cookies.get('session')?.value;
}

export function setSessionCookie(response: NextResponse, sessionId: string) {
  response.cookies.set('session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

export function clearSessionCookie(response: NextResponse) {
  response.cookies.delete('session');
}

export function getAuthRedirectUrl(request: NextRequest, redirectTo?: string | null) {
  const requestUrl = new URL(request.url);
  const to = redirectTo === null ? null : redirectTo ?? `${requestUrl.pathname}${requestUrl.search}`;
  const params = to ? new URLSearchParams({ redirectTo: to }) : null;
  return ['/login', params?.toString()].filter(Boolean).join('?');
}

// Mock function to get user role - replace with actual database lookup
export async function getUserRole(userId: string): Promise<UserRole> {
  if (isDemoMode()) {
    return 'student';
  }
  // TODO: Replace with actual database query
  return 'student';
}

export async function getUserProfile(): Promise<UserProfile | null> {
  if (isDemoMode()) {
    // Return demo user profile
    return {
      id: 'demo-user-123',
      email: 'demo@innovateai.com',
      firstName: 'Demo',
      lastName: 'Student',
      role: 'student',
      gradeLevel: 'Grade 10',
      school: 'InnovateAI Academy (Demo)'
    };
  }

  const { userId } = auth();

  if (!userId) {
    return null;
  }

  // TODO: Replace with actual database query
  // For now, return mock data
  return {
    id: userId,
    email: 'student@example.com',
    firstName: 'John',
    lastName: 'Doe',
    role: 'student',
    gradeLevel: 'Grade 10',
    school: 'InnovateAI Academy'
  };
}

export function getDashboardPath(role: UserRole): string {
  switch (role) {
    case 'student':
      return '/student/dashboard';
    case 'teacher':
      return '/teacher/dashboard';
    case 'admin':
      return '/admin/dashboard';
    case 'parent':
      return '/parent/dashboard';
    default:
      return '/student/dashboard';
  }
}

export function isAuthorized(role: UserRole, requiredRoles: UserRole[]): boolean {
  return requiredRoles.includes(role);
}