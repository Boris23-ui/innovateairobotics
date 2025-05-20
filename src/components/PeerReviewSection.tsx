import React, { useState } from 'react';

interface Review {
  id: string;
  reviewer: string;
  rating: number;
  feedback: string;
  date: string;
}

interface PeerReviewSectionProps {
  projectId: string;
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const PeerReviewSection: React.FC<PeerReviewSectionProps> = ({
  projectId,
  reviews,
  onAddReview,
}) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddReview({
      reviewer: 'Current User', // This should come from auth context
      rating,
      feedback,
    });
    setRating(0);
    setFeedback('');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Add Review</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`text-2xl ${
                    star <= rating ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
              Feedback
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Previous Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-gray-800">{review.reviewer}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 text-lg">
                  {'★'.repeat(review.rating)}
                </span>
                <span className="text-gray-400 text-lg">
                  {'★'.repeat(5 - review.rating)}
                </span>
              </div>
            </div>
            <p className="text-gray-600">{review.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeerReviewSection; 