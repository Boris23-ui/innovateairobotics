import { AuthError } from '@/types/auth';

export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export async function handleApiResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new APIError(
      error.message || 'An error occurred',
      response.status,
      error.code
    );
  }

  return response.json();
}

export async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    return handleApiResponse<T>(response);
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(
      'Network error occurred',
      500,
      'NETWORK_ERROR'
    );
  }
}

export function isAuthError(error: unknown): error is AuthError {
  return (
    error instanceof Error &&
    'code' in error &&
    'status' in error
  );
}

export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/api/auth/sign-in',
    SIGN_UP: '/api/auth/sign-up',
    SIGN_OUT: '/api/auth/sign-out',
    UPDATE_PROFILE: '/api/auth/profile',
  },
  PROGRAMS: {
    LIST: '/api/programs',
    DETAIL: (id: string) => `/api/programs/${id}`,
  },
  CURRICULUM: {
    LIST: '/api/curriculum',
    DETAIL: (id: string) => `/api/curriculum/${id}`,
  },
  RESOURCES: {
    LIST: '/api/resources',
    DETAIL: (id: string) => `/api/resources/${id}`,
  },
} as const; 