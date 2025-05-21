import React, { useState, useEffect } from 'react';

interface Student {
  id: string;
  name: string;
  course: string;
  progress: number;
  lastActivity: string;
  status: 'active' | 'inactive';
}

const StudentProgress: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        // Replace with actual API call
        const response = await fetch('/api/students/progress');
        if (!response.ok) {
          throw new Error('Failed to fetch student progress');
        }
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Student Progress</h2>
        <div className="animate-pulse space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Student Progress</h2>
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Student Progress</h2>
        <div className="text-center text-gray-500 py-8">
          No student progress data available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Student Progress</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                Student
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                Course
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                Progress
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                Last Activity
              </th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="border-b border-gray-200 last:border-0"
              >
                <td className="py-4 px-4">
                  <div className="font-medium text-gray-900">{student.name}</div>
                </td>
                <td className="py-4 px-4 text-gray-600">{student.course}</td>
                <td className="py-4 px-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${student.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 mt-1 block">
                    {student.progress}%
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">{student.lastActivity}</td>
                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      student.status === 'active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProgress; 