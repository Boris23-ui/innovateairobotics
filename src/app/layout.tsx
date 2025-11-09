import { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { UserProvider } from '@/components/providers/UserProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/layout/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import { validateEnv } from '@/utils/env';



export const metadata: Metadata = {
  title: 'InnovateAI Robotics',
  description: 'AI-powered robotics education platform',
  viewport: 'width=device-width, initial-scale=1maximum-scale=1',
};

// Validate environment variables at build time
// Note: validating environment variables during Next.js build can cause
// the build to fail when Vercel (or other hosts) don't expose runtime
// environment variables at build-time. Wrap validation in a try/catch and
// only warn so the build can proceed. Developers should still set the
// required environment variables in the Vercel project settings.
if (process.env.NODE_ENV === 'production') {
  try {
    validateEnv();
  } catch (err) {
    // Do not throw here to avoid failing the entire build during
    // Vercel's build-time when runtime-only env vars are not yet set.
    // Instead, log a helpful warning so deploy logs show what's missing.
    // eslint-disable-next-line no-console
    console.warn(
      'Environment validation failed during build. Ensure required environment variables are set in your hosting provider (e.g. Vercel) project settings. Validation error:',
      err
    );
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
  <body className="font-sans">
          <ThemeProvider>
            <UserProvider>
              <Navigation />
              <main style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>{children}</main>
              <Footer />
              <Toaster position="top-right" />
            </UserProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
} 