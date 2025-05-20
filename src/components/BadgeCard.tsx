import React from 'react';

interface BadgeCardProps {
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  dateEarned?: string;
}

const BadgeCard: React.FC<BadgeCardProps> = ({
  title,
  description,
  icon,
  earned,
  dateEarned,
}) => {
  return (
    <div className={`rounded-lg p-4 ${earned ? 'bg-blue-50' : 'bg-gray-50'}`}>
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-full ${earned ? 'bg-blue-100' : 'bg-gray-200'}`}>
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex-1">
          <h3 className={`font-semibold ${earned ? 'text-blue-800' : 'text-gray-700'}`}>
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {earned && dateEarned && (
            <p className="text-xs text-blue-600 mt-2">Earned on {dateEarned}</p>
          )}
        </div>
        {earned && (
          <div className="text-blue-500">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeCard; 