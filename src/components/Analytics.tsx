import React from 'react';

const Analytics: React.FC = () => {
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      change: '+12%',
      trend: 'up',
    },
    {
      title: 'Active Courses',
      value: '24',
      change: '+3',
      trend: 'up',
    },
    {
      title: 'Completion Rate',
      value: '89%',
      change: '+5%',
      trend: 'up',
    },
    {
      title: 'Average Score',
      value: '92%',
      change: '-2%',
      trend: 'down',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg p-4"
          >
            <h3 className="text-sm font-medium text-gray-600 mb-1">
              {stat.title}
            </h3>
            <div className="flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <span
                className={`ml-2 text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Chart visualization will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 