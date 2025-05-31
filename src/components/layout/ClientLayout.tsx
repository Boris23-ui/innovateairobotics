"use client";

import { AuthProvider } from '@/modules/auth/hooks/useAuth';
import { MockAuthProvider } from '@/modules/auth/components/MockAuthProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <MockAuthProvider>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </MockAuthProvider>
    </AuthProvider>
  );
} 