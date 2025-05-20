import React from 'react';

interface GradeSelectorProps {
  currentGrade?: number;
  onGradeChange: (grade: number) => void;
  maxGrade: number;
  step?: number;
}

const GradeSelector: React.FC<GradeSelectorProps> = ({
  currentGrade = 0,
  onGradeChange,
  maxGrade,
  step = 1,
}) => {
  const handleGradeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newGrade = parseFloat(e.target.value);
    onGradeChange(newGrade);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">
          Grade
        </label>
        <span className="text-sm text-gray-500">
          {currentGrade} / {maxGrade}
        </span>
      </div>
      
      <div className="flex items-center space-x-4">
        <input
          type="range"
          id="grade"
          min="0"
          max={maxGrade}
          step={step}
          value={currentGrade}
          onChange={handleGradeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        
        <input
          type="number"
          min="0"
          max={maxGrade}
          step={step}
          value={currentGrade}
          onChange={handleGradeChange}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>0</span>
        <span>{maxGrade}</span>
      </div>
    </div>
  );
};

export default GradeSelector; 