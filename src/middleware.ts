import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Auth middleware disabled for presentation mode
export default function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
