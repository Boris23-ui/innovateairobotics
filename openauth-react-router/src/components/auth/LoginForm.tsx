import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/router';

interface LoginFormProps {
  onLoginSuccess?: () => void;
}

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      setAuthChecking(false);
      if (user) {
        try {
          const role = user.email?.includes('teacher') ? 'teacher' : 'student';
          router.push(role === 'teacher' ? '/dashboard' : '/student');
        } catch (err) {
          console.error('Error determining user role:', err);
          setError('Error determining user role. Please try again.');
        }
      }
    }, (error) => {
      console.error('Auth state change error:', error);
      setError('Authentication error. Please try again.');
      setAuthChecking(false);
    });

    return () => unsubscribe();
  }, [auth, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLoginSuccess?.();
    } catch (err: any) {
      console.error('Login error:', err);
      // Handle specific Firebase error codes
      switch (err.code) {
        case 'auth/invalid-email':
          setError('Invalid email address.');
          break;
        case 'auth/user-disabled':
          setError('This account has been disabled.');
          break;
        case 'auth/user-not-found':
          setError('No account found with this email.');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password.');
          break;
        default:
          setError('Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (authChecking) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[rgb(60,152,251)]"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(60,152,251)]/50 focus:border-[rgb(60,152,251)] outline-none transition-colors"
          placeholder="you@example.com"
        />
      </div>

      {/* Password Input */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[rgb(60,152,251)]/50 focus:border-[rgb(60,152,251)] outline-none transition-colors"
          placeholder="••••••••"
        />
      </div>

      {/* Remember & Forgot Password */}
      <div className="flex justify-between text-sm">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="rounded border-gray-300 text-[rgb(60,152,251)]" />
          <span>Remember Me</span>
        </label>
        <button
          type="button"
          onClick={() => router.push('/reset-password')}
          className="text-[rgb(60,152,251)] hover:text-[rgb(45,130,220)] transition-colors"
        >
          Forgot Password?
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full px-6 py-3 rounded-lg font-medium text-white transition-colors shadow-md ${
          loading
            ? 'bg-[rgb(60,152,251)]/70 cursor-not-allowed'
            : 'bg-[rgb(60,152,251)] hover:bg-[rgb(45,130,220)]'
        }`}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V4a9 9 0 00-9 9H4z" />
            </svg>
            Signing In...
          </span>
        ) : "Sign In"}
      </button>

      {/* Guest Login */}
      <button
        type="button"
        onClick={() => router.push('/student')}
        className="w-full mt-2 px-4 py-2 border border-[rgb(60,152,251)] text-[rgb(60,152,251)] rounded-lg hover:bg-[rgb(60,152,251)]/[0.1] transition-colors"
      >
        Continue as Guest Student
      </button>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded text-sm mt-4">
          {error}
        </div>
      )}
    </form>
  );
} 