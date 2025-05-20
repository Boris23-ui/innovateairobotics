import { useState, useEffect } from 'react';

interface Course {
  title: string;
  progress: string;
  lastActivity: string;
}

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
}

interface Project {
  title: string;
  status: string;
  score?: string;
  feedback: string | null;
}

interface StudentData {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
  courses: Course[];
  upcomingAssignments: Assignment[];
  submittedProjects: Project[];
}

export default function useStudentData(studentId: string): StudentData {
  const [data, setData] = useState<StudentData>({
    name: "Emily Johnson",
    gradeLevel: "Grades 10–12",
    progress: "78%",
    lastLogin: new Date().toLocaleDateString(),
    courses: [
      { title: "Intro to Robotics", progress: "75%", lastActivity: "Yesterday" },
      { title: "AI Explorers", progress: "85%", lastActivity: "Today" }
    ],
    upcomingAssignments: [
      { title: "Sensor Logic Challenge", course: "Advanced Robotics", dueDate: "April 10, 2025" },
      { title: "Final Robot Build", course: "Intro to Robotics", dueDate: "April 15, 2025" }
    ],
    submittedProjects: [
      { title: "Line Follower Bot", status: "graded", score: "A-", feedback: "Great job!" },
      { title: "Maze Navigation", status: "pending", feedback: null }
    ]
  });

  useEffect(() => {
    // Simulate fetching real data
    if (studentId === 'student-1') {
      setData(prev => ({
        ...prev,
        name: "John Doe",
        gradeLevel: "Grades 4–6"
      }));
    }
  }, [studentId]);

  return data;
} 