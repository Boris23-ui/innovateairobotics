import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/layout/Footer';
import { ClerkProvider } from '@clerk/nextjs';
import { Toaster } from 'react-hot-toast';
import { validateEnv } from '@/utils/env';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'InnovateAI Robotics',
  description: 'Learn robotics and AI with InnovateAI Robotics',
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
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: '#1976d2',
          colorText: '#000000',
          colorBackground: '#ffffff',
          colorInputBackground: '#f5f5f5',
          colorInputText: '#000000',
          colorTextSecondary: '#666666',
          colorTextOnPrimaryBackground: '#ffffff',
          colorDanger: '#dc3545',
          colorSuccess: '#28a745',
          colorWarning: '#ffc107',
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: '#1976d2',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
          },
          card: {
            backgroundColor: '#ffffff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
          headerTitle: {
            color: '#000000',
          },
          headerSubtitle: {
            color: '#666666',
          },
          socialButtonsBlockButton: {
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          },
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
            <Navigation />
            <main style={{ minHeight: 'calc(100vh - 64px - 64px)' }}>{children}</main>
            <Footer />
            <Toaster position="top-right" />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
} 