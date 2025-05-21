import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h1>
          <p className="text-center text-gray-600 mb-6">
            Sign in to continue your robotics learning journey.
          </p>

          <LoginForm onLoginSuccess={() => router.push('/dashboard')} />

          {/* Register Prompt */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account yet?
            </p>
            <Link href="/register" className="text-[rgb(60,152,251)] hover:text-[rgb(45,130,220)] font-medium mt-1 transition-colors">
              Sign Up as Teacher
            </Link>
          </div>

          {/* Teacher Note */}
          <div className="mt-8 bg-[rgb(60,152,251)]/[0.05] rounded-lg p-4 text-center">
            <p className="text-sm text-gray-700">
              Are you a teacher? Contact your school admin or use your credentials to access the dashboard.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 