import { useState, useEffect } from 'react';

export type AgeGroup = 'elementary' | 'middle' | 'high';

interface Course {
  title: string;
  progress: string;
  lastActivity: string;
  ageGroup: AgeGroup;
}

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
  ageGroup: AgeGroup;
}

interface Project {
  title: string;
  status: string;
  score?: string;
  feedback: string | null;
  ageGroup: AgeGroup;
}

interface StudentData {
  name: string;
  gradeLevel: string;
  ageGroup: AgeGroup;
  progress: string;
  lastLogin: string;
  courses: Course[];
  upcomingAssignments: Assignment[];
  submittedProjects: Project[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

const ageGroupThemes = {
  elementary: {
    primaryColor: 'rgb(255, 99, 132)',
    secondaryColor: 'rgb(255, 159, 64)',
    backgroundColor: 'rgb(255, 205, 86)',
    textColor: 'rgb(54, 162, 235)'
  },
  middle: {
    primaryColor: 'rgb(75, 192, 192)',
    secondaryColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgb(153, 102, 255)',
    textColor: 'rgb(255, 99, 132)'
  },
  high: {
    primaryColor: 'rgb(60, 152, 251)',
    secondaryColor: 'rgb(54, 162, 235)',
    backgroundColor: 'rgb(75, 192, 192)',
    textColor: 'rgb(255, 255, 255)'
  }
};

const mockData: Record<AgeGroup, StudentData> = {
  elementary: {
    name: "Alex Johnson",
    gradeLevel: "Grades 3-5",
    ageGroup: 'elementary',
    progress: "85%",
    lastLogin: new Date().toLocaleDateString(),
    courses: [
      { title: "Fun with Robots", progress: "90%", lastActivity: "Today", ageGroup: 'elementary' },
      { title: "Coding Adventures", progress: "75%", lastActivity: "Yesterday", ageGroup: 'elementary' }
    ],
    upcomingAssignments: [
      { title: "Build a Simple Robot", course: "Fun with Robots", dueDate: "April 10, 2025", ageGroup: 'elementary' },
      { title: "Color Coding Challenge", course: "Coding Adventures", dueDate: "April 15, 2025", ageGroup: 'elementary' }
    ],
    submittedProjects: [
      { title: "My First Robot", status: "graded", score: "A", feedback: "Excellent work!", ageGroup: 'elementary' },
      { title: "Coding Story", status: "pending", feedback: null, ageGroup: 'elementary' }
    ],
    theme: ageGroupThemes.elementary
  },
  middle: {
    name: "Sarah Smith",
    gradeLevel: "Grades 6-8",
    ageGroup: 'middle',
    progress: "78%",
    lastLogin: new Date().toLocaleDateString(),
    courses: [
      { title: "Robotics Basics", progress: "80%", lastActivity: "Today", ageGroup: 'middle' },
      { title: "Intro to Programming", progress: "75%", lastActivity: "Yesterday", ageGroup: 'middle' }
    ],
    upcomingAssignments: [
      { title: "Robot Navigation", course: "Robotics Basics", dueDate: "April 10, 2025", ageGroup: 'middle' },
      { title: "Programming Challenge", course: "Intro to Programming", dueDate: "April 15, 2025", ageGroup: 'middle' }
    ],
    submittedProjects: [
      { title: "Line Following Robot", status: "graded", score: "B+", feedback: "Good work!", ageGroup: 'middle' },
      { title: "Simple Game", status: "pending", feedback: null, ageGroup: 'middle' }
    ],
    theme: ageGroupThemes.middle
  },
  high: {
    name: "Michael Brown",
    gradeLevel: "Grades 9-12",
    ageGroup: 'high',
    progress: "92%",
    lastLogin: new Date().toLocaleDateString(),
    courses: [
      { title: "Advanced Robotics", progress: "95%", lastActivity: "Today", ageGroup: 'high' },
      { title: "AI Programming", progress: "90%", lastActivity: "Yesterday", ageGroup: 'high' }
    ],
    upcomingAssignments: [
      { title: "Autonomous Navigation", course: "Advanced Robotics", dueDate: "April 10, 2025", ageGroup: 'high' },
      { title: "Machine Learning Project", course: "AI Programming", dueDate: "April 15, 2025", ageGroup: 'high' }
    ],
    submittedProjects: [
      { title: "AI-Powered Robot", status: "graded", score: "A", feedback: "Outstanding work!", ageGroup: 'high' },
      { title: "Neural Network Implementation", status: "pending", feedback: null, ageGroup: 'high' }
    ],
    theme: ageGroupThemes.high
  }
};

export default function useStudentData(studentId: string): StudentData {
  const [data, setData] = useState<StudentData>(mockData.high);

  useEffect(() => {
    // Simulate fetching real data based on student ID
    if (studentId === 'student-1') {
      setData(mockData.elementary);
    } else if (studentId === 'student-2') {
      setData(mockData.middle);
    } else {
      setData(mockData.high);
    }
  }, [studentId]);

  return data;
} 