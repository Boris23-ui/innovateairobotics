import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// Auth and API routes are disabled for now.
// All pages are public; API routes return 503.
export default authMiddleware({
  publicRoutes: ["(.*)"],
  afterAuth(auth, req) {
    const { pathname } = req.nextUrl;

    // Block all API routes except webhooks
    if (pathname.startsWith('/api') && !pathname.startsWith('/api/webhook')) {
      return NextResponse.json(
        { error: 'API is currently disabled' },
        { status: 503 }
      );
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
