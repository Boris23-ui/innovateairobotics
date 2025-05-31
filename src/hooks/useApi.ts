import { useState, useCallback } from 'react';
import { apiRequest, APIError } from '@/utils/api';

interface UseApiState<T> {
  data: T | null;
  isLoading: boolean;
  error: APIError | null;
}

interface UseApiResult<T> extends UseApiState<T> {
  execute: (options?: RequestInit) => Promise<void>;
  reset: () => void;
}

export function useApi<T>(
  endpoint: string,
  initialOptions: RequestInit = {}
): UseApiResult<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    isLoading: false,
    error: null,
  });

  const execute = useCallback(
    async (options: RequestInit = {}) => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));

      try {
        const data = await apiRequest<T>(endpoint, {
          ...initialOptions,
          ...options,
        });

        setState({
          data,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          isLoading: false,
          error: error instanceof APIError ? error : new APIError(
            'An unexpected error occurred',
            500
          ),
        });
      }
    },
    [endpoint, initialOptions]
  );

  const reset = useCallback(() => {
    setState({
      data: null,
      isLoading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
} 