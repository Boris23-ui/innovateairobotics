import { useState, useEffect, useCallback } from 'react';

interface FetchOptions {
  maxRetries?: number;
  retryDelay?: number;
  onError?: (error: Error) => void;
}

export function useDataFetching<T>(
  fetchFn: () => Promise<T>,
  options: FetchOptions = {}
) {
  const {
    maxRetries = 3,
    retryDelay = 1000,
    onError = (error) => console.error('Data fetching error:', error),
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchFn();
      setData(result);
      setRetryCount(0);
    } catch (err) {
      const error = err as Error;
      setError(error);
      onError(error);

      if (retryCount < maxRetries) {
        setTimeout(() => {
          setRetryCount((prev) => prev + 1);
        }, retryDelay);
      }
    } finally {
      setLoading(false);
    }
  }, [fetchFn, maxRetries, retryDelay, onError, retryCount]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const retry = useCallback(() => {
    setRetryCount(0);
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    retry,
    retryCount,
  };
} 