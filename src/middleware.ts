import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getSessionCookie } from './utils/auth';
import { getSession } from './utils/session';

// Add paths that should be protected (require authentication)
const protectedPaths = ['/dashboard', '/profile', '/settings'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Check if the path is protected
  if (protectedPaths.some(protectedPath => path.startsWith(protectedPath))) {
    try {
      // Get session ID from cookie
      const sessionId = getSessionCookie(request);
      
      if (!sessionId) {
        // Redirect to login if no session cookie
        const url = new URL('/login', request.url);
        url.searchParams.set('redirectTo', path);
        return NextResponse.redirect(url);
      }

      // Verify session is valid
      const session = await getSession(sessionId);
      if (!session) {
        // Redirect to login if session is invalid
        const url = new URL('/login', request.url);
        url.searchParams.set('redirectTo', path);
        return NextResponse.redirect(url);
      }
    } catch (error) {
      // Redirect to login if there's an error
      const url = new URL('/login', request.url);
      url.searchParams.set('redirectTo', path);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 