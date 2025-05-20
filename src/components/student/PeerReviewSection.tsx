import React from 'react';

interface Review {
  projectTitle: string;
  reviewer: string;
  status: 'pending' | 'completed';
  dueDate?: string;
}

export default function PeerReviewSection() {
  const reviews: Review[] = [
    {
      projectTitle: "Robot Navigation System",
      reviewer: "Alex Chen",
      status: "pending",
      dueDate: "April 12, 2025"
    },
    {
      projectTitle: "Sensor Integration Project",
      reviewer: "Sarah Miller",
      status: "completed"
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Peer Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{review.projectTitle}</h4>
                <p className="text-sm text-gray-600">Reviewer: {review.reviewer}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                review.status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {review.status === 'completed' ? 'Completed' : 'Pending'}
              </span>
            </div>
            {review.dueDate && (
              <p className="mt-2 text-sm text-gray-500">Due: {review.dueDate}</p>
            )}
            {review.status === 'pending' && (
              <button className="mt-3 w-full py-2 bg-[rgb(60,152,251)] text-white rounded hover:bg-[rgb(45,130,220)] transition-colors">
                Start Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 