import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface User {
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me');
      if (response.ok) {
        const user = await response.json();
        setAuthState({ user, isLoading: false, error: null });
      } else {
        setAuthState({ user: null, isLoading: false, error: null });
      }
    } catch (error) {
      setAuthState({
        user: null,
        isLoading: false,
        error: 'Failed to check authentication status',
      });
    }
  };

  const login = async (email: string, password: string) => {
    setAuthState({ ...authState, isLoading: true, error: null });
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login failed');
      }

      await checkAuth();
      const redirectTo = router.query.redirectTo as string;
      router.push(redirectTo || '/dashboard');
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Login failed',
      });
    }
  };

  const logout = async () => {
    setAuthState({ ...authState, isLoading: true, error: null });
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setAuthState({ user: null, isLoading: false, error: null });
      router.push('/login');
    } catch (error) {
      setAuthState({
        ...authState,
        isLoading: false,
        error: 'Failed to logout',
      });
    }
  };

  return {
    user: authState.user,
    isLoading: authState.isLoading,
    error: authState.error,
    login,
    logout,
  };
} 