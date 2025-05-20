import React from 'react';

interface StudentDashboardCardProps {
  course: string;
  progress: string;
  lastActivity: string;
}

export default function StudentDashboardCard({ course, progress, lastActivity }: StudentDashboardCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-bold mb-2">{course}</h2>
      <p className="text-sm text-gray-500 mb-4">Last activity: {lastActivity}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className="bg-[rgb(60,152,251)] h-2 rounded-full"
          style={{ width: progress }}
        ></div>
      </div>
      <p className="text-right text-sm text-gray-500">{progress} Complete</p>
    </div>
  );
} 