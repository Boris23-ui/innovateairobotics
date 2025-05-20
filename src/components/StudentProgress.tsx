import React from 'react';

const StudentProgress: React.FC = () => {
  const students = [
    {
      name: 'John Smith',
      course: 'Introduction to Robotics',
      progress: 75,
      lastActivity: '2 days ago',
      status: 'active',
    },
    {
      name: 'Emma Wilson',
      course: 'Advanced AI',
      progress: 90,
      lastActivity: '1 day ago',
      status: 'active',
    },
    {
      name: 'Michael Brown',
      course: 'Robotics Engineering',
      progress: 60,
      lastActivity: '5 days ago',
      status: 'inactive',
    },
    {
      name: 'Sarah Davis',
      course: 'Introduction to Robotics',
      progress: 85,
      lastActivity: '3 days ago',
      status: 'active',
    },
  ];

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
            {students.map((student, index) => (
              <tr
                key={index}
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