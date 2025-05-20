import React, { useState } from 'react';

interface CodingChallengeProps {
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  onSubmit: (code: string) => void;
}

const CodingChallenge: React.FC<CodingChallengeProps> = ({
  title,
  description,
  difficulty,
  points,
  onSubmit,
}) => {
  const [code, setCode] = useState('');

  const difficultyColors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center space-x-2 mt-1">
            <span className={`px-2 py-1 rounded-full text-xs ${difficultyColors[difficulty]}`}>
              {difficulty}
            </span>
            <span className="text-sm text-gray-600">{points} points</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600">{description}</p>
      </div>

      <div className="mb-4">
        <textarea
          className="w-full h-64 p-4 bg-gray-50 border border-gray-200 rounded-lg font-mono text-sm"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => onSubmit(code)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Submit Solution
        </button>
      </div>
    </div>
  );
};

export default CodingChallenge; 