import React from 'react';

interface StudentInfoProps {
  name: string;
  gradeLevel: string;
  progress: string;
  lastLogin: string;
}

export default function StudentInfoCard({ name, gradeLevel, progress, lastLogin }: StudentInfoProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-4">Grade Level: {gradeLevel}</p>
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium">Overall Progress</span>
          <span className="text-sm font-medium">{progress}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-[rgb(60,152,251)] h-2 rounded-full"
            style={{ width: progress }}
          ></div>
        </div>
      </div>
      <p className="text-xs text-gray-500">Last login: {lastLogin}</p>
    </div>
  );
} 