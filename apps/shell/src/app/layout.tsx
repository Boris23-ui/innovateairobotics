import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import ThemeProvider from './providers/ThemeProvider';
import SupabaseProvider from './providers/SupabaseProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InnovateAI Robotics - Educational Platform',
  description: 'Empowering the next generation of robotics engineers through hands-on learning and AI education.',
  keywords: 'robotics, AI, education, STEM, coding, programming, kids, learning',
  authors: [{ name: 'InnovateAI Robotics Inc.' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'InnovateAI Robotics - Educational Platform',
    description: 'Empowering the next generation of robotics engineers through hands-on learning and AI education.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
          <SupabaseProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </SupabaseProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}