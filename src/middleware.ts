import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { AuthObject } from "@clerk/nextjs/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/contact",
    "/sign-in",
    "/sign-up",
    "/donate",
    // All program routes
    "/programs/seniors",
    "/programs/robot-explorers",
    "/programs/robotics-101",
    "/programs/advanced-robotics",
    "/programs/competition-team",
    "/programs/summer-camps",
    "/programs/workshops",
    "/programs/tiny-tinkerers",
    "/programs/tech-titans",
    "/programs/ai-avengers",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
