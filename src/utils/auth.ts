import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

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