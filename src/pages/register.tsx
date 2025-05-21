import React from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../components/layout/MainLayout';
import RegisterForm from '../components/auth/RegisterForm';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegisterSuccess = () => {
    router.push('/dashboard');
  };

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Create Your Account
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Join RoboEd and start inspiring students today.
          </p>

          <RegisterForm onSuccess={handleRegisterSuccess} />

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Already Have an Account? */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Already have an account?</p>
            <Link href="/login" className="text-[rgb(60,152,251)] hover:text-[rgb(45,130,220)] transition-colors font-medium">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 