import React from 'react';

const ClassPerformance: React.FC = () => {
  const classes = [
    {
      name: 'Introduction to Robotics',
      students: 45,
      averageScore: 88,
      completionRate: 92,
    },
    {
      name: 'Advanced AI',
      students: 32,
      averageScore: 85,
      completionRate: 88,
    },
    {
      name: 'Robotics Engineering',
      students: 28,
      averageScore: 90,
      completionRate: 95,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Class Performance</h2>
      <div className="space-y-6">
        {classes.map((classItem, index) => (
          <div
            key={index}
            className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
          >
            <h3 className="text-lg font-medium mb-3">{classItem.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Students</span>
                <span className="font-medium">{classItem.students}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Average Score</span>
                <span className="font-medium">{classItem.averageScore}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Completion Rate</span>
                <span className="font-medium">{classItem.completionRate}%</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${classItem.completionRate}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassPerformance; 