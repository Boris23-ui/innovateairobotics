import React, { useState } from 'react';

interface BadgeCardProps {
  title: string;
  description: string;
  icon: string;
  earned: boolean;
  dateEarned?: string;
  onClick?: () => void;
}

const BadgeCard: React.FC<BadgeCardProps> = ({
  title,
  description,
  icon,
  earned,
  dateEarned,
  onClick,
}) => {
  const [isIconError, setIsIconError] = useState(false);

  const handleIconError = () => {
    setIsIconError(true);
  };

  return (
    <div
      className={`rounded-lg p-4 transition-colors duration-200 ${
        earned ? 'bg-blue-50 hover:bg-blue-100' : 'bg-gray-50 hover:bg-gray-100'
      } ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : 'article'}
      tabIndex={onClick ? 0 : undefined}
      aria-label={`${title} badge - ${earned ? 'Earned' : 'Not earned yet'}`}
    >
      <div className="flex items-start space-x-4">
        <div
          className={`p-2 rounded-full ${
            earned ? 'bg-blue-100' : 'bg-gray-200'
          }`}
          aria-hidden="true"
        >
          {isIconError ? (
            <span className="text-2xl">🏆</span>
          ) : (
            <span
              className="text-2xl"
              onError={handleIconError}
              role="img"
              aria-label={`${title} icon`}
            >
              {icon}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3
            className={`font-semibold ${
              earned ? 'text-blue-800' : 'text-gray-700'
            }`}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          {earned && dateEarned && (
            <p className="text-xs text-blue-600 mt-2">
              Earned on {dateEarned}
            </p>
          )}
        </div>
        {earned && (
          <div
            className="text-blue-500"
            aria-hidden="true"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Earned badge"
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