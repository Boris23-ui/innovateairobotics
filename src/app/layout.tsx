import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { UserProvider } from '@/components/providers/UserProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/layout/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import { validateEnv } from '@/utils/env';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InnovateAI Robotics',
  description: 'AI-powered robotics education platform',
  viewport: 'width=device-width, initial-scale=1maximum-scale=1',
};

// Validate environment variables at build time
if (process.env.NODE_ENV === 'production') {
  validateEnv();
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
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