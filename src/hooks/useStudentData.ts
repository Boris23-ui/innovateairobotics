import { useState, useEffect } from 'react';

interface StudentData {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
  grade: string;
  joinDate: string;
}

export function useStudentData(studentId: string) {
  const [data, setData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/students/${studentId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }
        const studentData = await response.json();
        setData(studentData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);

  return { data, loading, error };
}

export default useStudentData; 