import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/donate",
    "/programs/tiny-tinkerers",
    "/programs/robot-explorers",
    "/programs/tech-titans",
    "/programs/ai-avengers",
    "/programs/seniors",
    "/api/webhook(.*)",
  ],
  ignoredRoutes: [
    "/api/webhook(.*)",
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
