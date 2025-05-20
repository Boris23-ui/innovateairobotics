import React from 'react';

interface StudentDashboardCardProps {
  studentName: string;
  progress: number;
  badges: string[];
  lastActive: string;
}

const StudentDashboardCard: React.FC<StudentDashboardCardProps> = ({
  studentName,
  progress,
  badges,
  lastActive,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{studentName}</h3>
          <p className="text-sm text-gray-500">Last active: {lastActive}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{progress}%</div>
          <div className="text-sm text-gray-500">Progress</div>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Badges</h4>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardCard; 