import React from 'react';
import { useRouter } from 'next/router';
import StudentDashboardCard from '../../components/StudentDashboardCard';
import BadgeCard from '../../components/BadgeCard';
import GradeSelector from '../../components/GradeSelector';
import useStudentProgress from '../../hooks/useStudentProgress';

const StudentView: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { progress, loading, error, updateProgress } = useStudentProgress(id as string);

  const handleGradeChange = async (newGrade: number) => {
    try {
      await updateProgress({ averageGrade: newGrade });
    } catch (err) {
      console.error('Failed to update grade:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!progress) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Student not found</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Student Details</h1>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          ← Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StudentDashboardCard
            studentName={progress.name}
            progress={progress.progress}
            badges={progress.badges}
            lastActive={progress.lastActive}
          />

          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Grade Assignment</h2>
            <GradeSelector
              currentGrade={progress.averageGrade}
              onGradeChange={handleGradeChange}
              maxGrade={100}
              step={0.5}
            />
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-blue-800">Completed Projects</h3>
                <p className="text-3xl font-bold text-blue-600">{progress.completedProjects}</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-green-800">Total Projects</h3>
                <p className="text-3xl font-bold text-green-600">{progress.totalProjects}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h2>
            <div className="space-y-4">
              {progress.badges.map((badge, index) => (
                <BadgeCard
                  key={index}
                  title={badge}
                  description={`Earned for completing ${badge.toLowerCase()} challenge`}
                  icon="🏆"
                  earned={true}
                  dateEarned="2024-03-15"
                />
              ))}
            </div>
          </div>

          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-gray-600">Completed Project #3</p>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-gray-600">Earned "Code Master" badge</p>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <p className="text-gray-600">Submitted Project #2</p>
                <span className="text-sm text-gray-500">2 weeks ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentView; 