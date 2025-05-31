import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { MockAuthProvider } from '@/modules/auth/components/MockAuthProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InnovateAI Robotics',
  description: 'Learn robotics and AI with InnovateAI Robotics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <MockAuthProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </MockAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 