import { Metadata, Viewport } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'InnovateAI Robotics',
  description: 'AI-powered robotics education platform',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ThemeProvider>
          <Navigation />
          <main style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>{children}</main>
          <Footer />
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}