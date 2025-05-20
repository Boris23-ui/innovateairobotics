import React from 'react';
import BadgeCard from '../BadgeCard';

const BadgesOverview: React.FC = () => {
  const badges = [
    {
      title: 'Code Master',
      description: 'Completed 10 coding challenges',
      icon: '💻',
      earned: true,
      dateEarned: '2024-03-10',
    },
    {
      title: 'Robot Builder',
      description: 'Built and tested 5 robots',
      icon: '🤖',
      earned: true,
      dateEarned: '2024-03-12',
    },
    {
      title: 'AI Explorer',
      description: 'Completed AI fundamentals course',
      icon: '🧠',
      earned: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
      <div className="space-y-4">
        {badges.map((badge, index) => (
          <BadgeCard key={index} {...badge} />
        ))}
      </div>
    </div>
  );
};

export default BadgesOverview; 