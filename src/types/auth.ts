export class AuthError extends Error {
  constructor(
    message: string,
    public code?: string,
    public status?: number
  ) {
    super(message);
    this.name = 'AuthError';
  }
}

export interface User {
  id: string;
  displayName: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: AuthError | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  displayName: string;
  role: User['role'];
} 