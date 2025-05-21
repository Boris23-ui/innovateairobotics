import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../components/layout/MainLayout';

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess("Password reset email sent! Check your inbox.");
    } catch (err: any) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Reset Password</h2>
          <p className="text-gray-600 text-center mb-6">
            Enter your email to receive a password reset link.
          </p>

          <form onSubmit={handlePasswordReset} className="space-y-5">
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="reset-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(60,152,251)]/50 focus:border-[rgb(60,152,251)] outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>

            {success && (
              <div className="bg-green-100 text-green-700 p-3 rounded text-sm">
                {success}
              </div>
            )}

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-2 bg-[rgb(60,152,251)] text-white rounded-lg hover:bg-[rgb(45,130,220)] transition-colors ${
                loading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Reset Email'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-[rgb(60,152,251)] hover:text-[rgb(45,130,220)] text-sm transition-colors">
              Back to Login
            </Link>
          </div>

          <button
            type="button"
            onClick={() => router.push('/student')}
            className="mt-4 w-full px-4 py-2 border border-[rgb(60,152,251)] text-[rgb(60,152,251)] rounded-lg hover:bg-[rgb(60,152,251)]/[0.1] transition-colors"
          >
            Continue as Guest Student
          </button>
        </div>
      </div>
    </MainLayout>
  );
} 