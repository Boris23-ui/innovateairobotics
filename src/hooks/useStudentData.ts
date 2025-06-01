import { useState, useEffect } from 'react';

interface Course {
  id: string;
  title: string;
  progress: number;
  lastActivity: string;
}

interface Assignment {
  id: string;
  title: string;
  dueDate: string;
  course: string;
  status: 'pending' | 'submitted' | 'graded';
}

interface Project {
  id: string;
  title: string;
  course: string;
  submittedDate: string;
  grade?: number;
}

interface StudentData {
  id: string;
  name: string;
  email: string;
  ageGroup: 'elementary' | 'middle' | 'high';
  theme: {
    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  };
  courses: Course[];
  upcomingAssignments: Assignment[];
  submittedProjects: Project[];
}

const mockStudentData: StudentData = {
  id: 'student-1',
  name: 'John Doe',
  email: 'john.doe@example.com',
  ageGroup: 'middle',
  theme: {
    primaryColor: '#4F46E5',
    secondaryColor: '#818CF8',
    textColor: '#1F2937',
  },
  courses: [
    {
      id: 'course-1',
      title: 'Introduction to Robotics',
      progress: 75,
      lastActivity: '2 days ago',
    },
    {
      id: 'course-2',
      title: 'Basic Programming',
      progress: 60,
      lastActivity: '1 day ago',
    },
    {
      id: 'course-3',
      title: 'AI Fundamentals',
      progress: 45,
      lastActivity: '3 days ago',
    },
  ],
  upcomingAssignments: [
    {
      id: 'assign-1',
      title: 'Robot Navigation Project',
      dueDate: '2024-03-15',
      course: 'Introduction to Robotics',
      status: 'pending',
    },
    {
      id: 'assign-2',
      title: 'Python Basics Quiz',
      dueDate: '2024-03-12',
      course: 'Basic Programming',
      status: 'pending',
    },
  ],
  submittedProjects: [
    {
      id: 'proj-1',
      title: 'Line Following Robot',
      course: 'Introduction to Robotics',
      submittedDate: '2024-03-01',
      grade: 95,
    },
    {
      id: 'proj-2',
      title: 'Calculator Program',
      course: 'Basic Programming',
      submittedDate: '2024-02-28',
      grade: 88,
    },
  ],
};

export function useStudentData(studentId: string) {
  const [data, setData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch(`/api/students/${studentId}`);
        // const studentData = await response.json();
        
        // For now, use mock data
        setData(mockStudentData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);

  return data || mockStudentData; // Return mock data if data is null
}

export default useStudentData; 