import React from 'react';

interface Project {
  title: string;
  status: string;
  score?: string;
  feedback: string | null;
}

interface SubmittedProjectsProps {
  projects: Project[];
}

export default function SubmittedProjects({ projects }: SubmittedProjectsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold mb-4">Submitted Projects</h3>
      <ul className="space-y-4">
        {projects.map((project, idx) => (
          <li key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <div>
              <h4 className="font-medium">{project.title}</h4>
              <p className="text-sm text-gray-500">
                Status: <span className={`${project.status === 'graded' ? 'text-green-600' : 'text-yellow-600'}`}>
                  {project.status === 'graded' ? 'Graded' : 'In Review'}
                </span>
              </p>
              {project.score && (
                <p className="text-sm text-gray-500">Score: {project.score}</p>
              )}
              {project.feedback && (
                <p className="text-sm text-gray-500 mt-1">{project.feedback}</p>
              )}
            </div>
            <button className="px-3 py-1 text-sm text-[rgb(60,152,251)] hover:text-[rgb(45,130,220)] transition-colors">
              View Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 