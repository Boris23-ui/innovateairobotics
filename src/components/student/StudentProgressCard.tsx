import React from 'react';

interface StudentProgressCardProps {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
}

const StudentProgressCard: React.FC<StudentProgressCardProps> = ({
  name,
  gradeLevel,
  progress,
  lastLogin,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-2xl text-blue-600">{name.charAt(0)}</span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{gradeLevel}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Overall Progress</span>
            <span className="text-blue-600 font-medium">{progress}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: progress }}
            ></div>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          Last login: {lastLogin}
        </div>
      </div>
    </div>
  );
};

export default StudentProgressCard; 