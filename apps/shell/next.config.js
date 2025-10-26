/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14 auto-detects the App Router. Explicit `appDir` is no longer required
  // and may be rejected by some Next versions — remove it to avoid the warning.
  async rewrites() {
    return [
      {
        source: '/student/:path*',
        destination: 'http://localhost:3001/student/:path*',
      },
      {
        source: '/teacher/:path*',
        destination: 'http://localhost:3002/teacher/:path*',
      },
      {
        source: '/admin/:path*',
        destination: 'http://localhost:3003/admin/:path*',
      },
      {
        source: '/courses/:path*',
        destination: 'http://localhost:3004/courses/:path*',
      },
      {
        source: '/assignments/:path*',
        destination: 'http://localhost:3005/assignments/:path*',
      },
      {
        source: '/progress/:path*',
        destination: 'http://localhost:3006/progress/:path*',
      },
    ];
  },
  env: {
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};

module.exports = nextConfig; 