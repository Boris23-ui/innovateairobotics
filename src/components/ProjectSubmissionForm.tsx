import React, { useState } from 'react';

interface ProjectSubmissionFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    githubUrl: string;
    demoUrl?: string;
    files: File[];
  }) => void;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'application/zip'];

const ProjectSubmissionForm: React.FC<ProjectSubmissionFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateUrl(githubUrl)) {
      setError('Please enter a valid GitHub URL');
      return;
    }

    if (demoUrl && !validateUrl(demoUrl)) {
      setError('Please enter a valid demo URL');
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit({
        title,
        description,
        githubUrl,
        demoUrl,
        files,
      });
    } catch (err) {
      setError('Failed to submit project. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      
      // Validate file types and sizes
      const invalidFiles = selectedFiles.filter(
        file => !ALLOWED_FILE_TYPES.includes(file.type) || file.size > MAX_FILE_SIZE
      );

      if (invalidFiles.length > 0) {
        setError('Some files are invalid. Please ensure all files are PDF, JPEG, PNG, or ZIP and under 10MB.');
        return;
      }

      setFiles(selectedFiles);
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          minLength={3}
          maxLength={100}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Project Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          minLength={10}
          maxLength={1000}
        />
      </div>

      <div>
        <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700">
          GitHub Repository URL
        </label>
        <input
          type="url"
          id="githubUrl"
          value={githubUrl}
          onChange={(e) => setGithubUrl(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
          pattern="https?:\/\/github\.com\/.*"
          title="Please enter a valid GitHub repository URL"
        />
      </div>

      <div>
        <label htmlFor="demoUrl" className="block text-sm font-medium text-gray-700">
          Demo URL (Optional)
        </label>
        <input
          type="url"
          id="demoUrl"
          value={demoUrl}
          onChange={(e) => setDemoUrl(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="files" className="block text-sm font-medium text-gray-700">
          Additional Files (PDF, JPEG, PNG, or ZIP, max 10MB each)
        </label>
        <input
          type="file"
          id="files"
          multiple
          onChange={handleFileChange}
          accept={ALLOWED_FILE_TYPES.join(',')}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Project'}
        </button>
      </div>
    </form>
  );
};

export default ProjectSubmissionForm; 