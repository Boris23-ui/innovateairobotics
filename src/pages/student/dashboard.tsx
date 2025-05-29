import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import { useDataFetching } from '../../hooks/useDataFetching';
import { mockUser, getMockStudentStats, getMockStudentAssignments, getMockStudentClasses, mockAssignments, mockClasses } from '../../services/mockData';

const StudentDashboard = () => {
  const router = useRouter();
  const [assignments, setAssignments] = useState(mockAssignments);
  const [classes, setClasses] = useState(mockClasses);
  const [loading, setLoading] = useState(false);

  const {
    data: stats,
    loading: statsLoading,
    error: statsError,
    retry: retryStats,
    retryCount: statsRetryCount,
  } = useDataFetching(
    getMockStudentStats,
    {
      maxRetries: 3,
      retryDelay: 1000,
      onError: (error) => {
        console.error('Error fetching student stats:', error);
      },
    }
  );

  useEffect(() => {
    const unsubscribeAssignments = getMockStudentAssignments((newAssignments) => {
      setAssignments(newAssignments);
    });

    const unsubscribeClasses = getMockStudentClasses((newClasses) => {
      setClasses(newClasses);
      setLoading(false);
    });

    return () => {
      unsubscribeAssignments();
      unsubscribeClasses();
    };
  }, []);

  if (loading || statsLoading) {
    return (
      <ProtectedRoute requiredRole="student">
        <DashboardLayout user={mockUser} role="student">
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" />
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  if (statsError) {
    return (
      <ProtectedRoute requiredRole="student">
        <DashboardLayout user={mockUser} role="student">
          <div className="space-y-6">
            <ErrorMessage
              error={statsError}
              onRetry={retryStats}
              retryCount={statsRetryCount}
            />
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requiredRole="student">
      <DashboardLayout user={mockUser} role="student">
        <div className="space-y-6">
          {/* Welcome Section */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome back, {mockUser.displayName}!
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's your academic overview for today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Enrolled Classes', value: stats?.enrolledClasses || 0 },
              { name: 'Pending Assignments', value: stats?.pendingAssignments || 0 },
              { name: 'Average Grade', value: `${stats?.averageGrade || 0}%` },
              { name: 'Attendance', value: `${stats?.attendance || 0}%` },
            ].map((stat) => (
              <div
                key={stat.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.name}
                  </dt>
                  <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                    <div className="flex items-baseline text-2xl font-semibold text-blue-600">
                      {stat.value}
                    </div>
                  </dd>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Assignments */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Upcoming Assignments
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {assignments.map((assignment) => (
                  <li key={assignment.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {assignment.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {assignment.class} • Due {new Date(assignment.dueDate.toDate()).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          assignment.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : assignment.status === 'in-progress'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {assignment.status}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Today's Classes */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Today's Classes
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {classes.map((classItem) => (
                  <li key={classItem.id} className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <svg
                              className="h-5 w-5 text-blue-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {classItem.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {classItem.teacher} • Room {classItem.room}
                          </p>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0">
                        <p className="text-sm text-gray-500">
                          {new Date(classItem.nextSession.toDate()).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default StudentDashboard; 