"use client";

import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navigation />
      <main style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>{children}</main>
      <Footer />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
} 