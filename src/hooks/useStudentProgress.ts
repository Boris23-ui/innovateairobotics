import { useState, useEffect } from 'react';

interface Progress {
  courseId: string;
  progress: number;
  lastActivity: string;
}

export function useStudentProgress(studentId: string) {
  const [progress, setProgress] = useState<Progress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch(`/api/students/${studentId}/progress`);
        if (!response.ok) {
          throw new Error('Failed to fetch student progress');
        }
        const data = await response.json();
        setProgress(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [studentId]);

  return { progress, loading, error };
}

export default useStudentProgress; 