import React from 'react';

interface CodingChallengeProps {
  title: string;
  description: string;
  type: string;
  completed: boolean;
}

export default function CodingChallenge({ title, description, type, completed }: CodingChallengeProps) {
  return (
    <div className={`p-4 rounded-lg border ${
      completed ? 'border-green-200 bg-green-50' : 'border-blue-200 bg-blue-50'
    }`}>
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className={`px-2 py-1 rounded-full text-xs ${
          completed ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
        }`}>
          {type}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <button className={`w-full py-2 rounded text-sm font-medium ${
        completed 
          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
          : 'bg-[rgb(60,152,251)] text-white hover:bg-[rgb(45,130,220)]'
      } transition-colors`}>
        {completed ? 'View Solution' : 'Start Challenge'}
      </button>
    </div>
  );
} 