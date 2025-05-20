import React from 'react';
import { useRouter } from 'next/router';
import ProjectSubmissionForm from '../../components/ProjectSubmissionForm';
import PeerReviewSection from '../../components/PeerReviewSection';

const ProjectSubmission: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
    files: File[];
  }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/projects/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit project');
      }

      // Redirect to student dashboard on success
      router.push('/student');
    } catch (error) {
      console.error('Error submitting project:', error);
      // TODO: Show error message to user
    }
  };

  const handleAddReview = async (review: {
    reviewer: string;
    rating: number;
    feedback: string;
  }) => {
    try {
      // TODO: Replace with actual API call
      const response = await fetch('/api/projects/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      // TODO: Show error message to user
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Project Submission</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Submit Your Project</h2>
            <ProjectSubmissionForm onSubmit={handleSubmit} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Project Guidelines</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">1</span>
                </div>
                <p>Ensure your code is well-documented and follows best practices.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">2</span>
                </div>
                <p>Include a README file with setup instructions and project overview.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">3</span>
                </div>
                <p>Make sure all tests pass and the code is production-ready.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">4</span>
                </div>
                <p>Provide a live demo URL if applicable.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Peer Reviews</h2>
            <PeerReviewSection
              projectId="current-project-id"
              reviews={[
                {
                  id: '1',
                  reviewer: 'John Doe',
                  rating: 4,
                  feedback: 'Great implementation! The code is clean and well-documented.',
                  date: '2024-03-15',
                },
                {
                  id: '2',
                  reviewer: 'Jane Smith',
                  rating: 5,
                  feedback: 'Excellent work! The project meets all requirements.',
                  date: '2024-03-14',
                },
              ]}
              onAddReview={handleAddReview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSubmission; 