import React from 'react';
import { useRouter } from 'next/router';
import StudentDashboardCard from '../components/StudentDashboardCard';

interface Student {
  id: string;
  name: string;
  progress: number;
  badges: string[];
  lastActive: string;
  completedProjects: number;
  totalProjects: number;
  averageGrade: number;
}

const TeacherDashboard: React.FC = () => {
  const router = useRouter();

  // TODO: Replace with actual API call
  const students: Student[] = [
    {
      id: '1',
      name: 'John Doe',
      progress: 85,
      badges: ['Code Master', 'Problem Solver'],
      lastActive: '2024-03-15',
      completedProjects: 5,
      totalProjects: 6,
      averageGrade: 92,
    },
    {
      id: '2',
      name: 'Jane Smith',
      progress: 92,
      badges: ['Code Master', 'Team Player'],
      lastActive: '2024-03-15',
      completedProjects: 6,
      totalProjects: 6,
      averageGrade: 95,
    },
    // Add more students as needed
  ];

  const handleStudentClick = (studentId: string) => {
    router.push(`/student/${studentId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Teacher Dashboard</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => router.push('/student/project-submission')}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            New Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            onClick={() => handleStudentClick(student.id)}
            className="cursor-pointer"
          >
            <StudentDashboardCard
              studentName={student.name}
              progress={student.progress}
              badges={student.badges}
              lastActive={student.lastActive}
            />
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Class Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-blue-800">Total Students</h3>
            <p className="text-3xl font-bold text-blue-600">{students.length}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-green-800">Average Progress</h3>
            <p className="text-3xl font-bold text-green-600">
              {Math.round(
                students.reduce((acc, student) => acc + student.progress, 0) / students.length
              )}
              %
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-purple-800">Average Grade</h3>
            <p className="text-3xl font-bold text-purple-600">
              {Math.round(
                students.reduce((acc, student) => acc + student.averageGrade, 0) / students.length
              )}
              %
            </p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-yellow-800">Active Students</h3>
            <p className="text-3xl font-bold text-yellow-600">
              {students.filter((student) => student.lastActive === '2024-03-15').length}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-gray-600">Jane Smith completed Project #6</p>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="text-gray-600">John Doe submitted Project #5</p>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <p className="text-gray-600">New student joined the class</p>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard; 