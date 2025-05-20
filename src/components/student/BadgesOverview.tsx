import React from 'react';

interface Badge {
  title: string;
  description: string;
  earned: boolean;
}

export default function BadgesOverview() {
  const badges: Badge[] = [
    { title: "First Robot Built", description: "Complete your first build using LEGO WeDo.", earned: true },
    { title: "Sensor Master", description: "Use 2+ sensors in one project.", earned: false },
    { title: "Team Player", description: "Participate in a group challenge.", earned: true },
    { title: "Code Champion", description: "Finish all coding exercises.", earned: true }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-bold mb-4">Your Achievements</h3>
      <div className="space-y-4">
        {badges.map((badge, idx) => (
          <div key={idx} className={`flex items-start ${!badge.earned && 'opacity-70'}`}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
              badge.earned ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-500'
            }`}>
              {badge.earned ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21.15 7 14.28 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l2.45 5.02L19.5 7.87 15.97 11.65 17.25 18.13 12 15.36 6.75 18.13 8.03 11.65 4.5 7.87 9.55 7.02 12 2zM12 5.39L10.24 9H5.5l4.04-2.75L12 5.39z" />
                </svg>
              )}
            </div>
            <div className="ml-4">
              <h4 className="font-semibold">{badge.title}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 