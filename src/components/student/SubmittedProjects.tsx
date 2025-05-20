import React from 'react';

interface Project {
  title: string;
  status: 'graded' | 'pending';
  score?: string;
  feedback: string | null;
}

interface SubmittedProjectsProps {
  projects: Project[];
}

const SubmittedProjects: React.FC<SubmittedProjectsProps> = ({ projects }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Submitted Projects</h3>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-800">{project.title}</h4>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'graded'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {project.status === 'graded' ? 'Graded' : 'Pending'}
              </span>
            </div>
            {project.status === 'graded' && project.score && (
              <div className="mb-2">
                <span className="text-sm font-medium text-blue-600">Score: {project.score}</span>
              </div>
            )}
            {project.feedback && (
              <p className="text-sm text-gray-600">{project.feedback}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubmittedProjects; 