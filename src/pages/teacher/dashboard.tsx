import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../components/auth/ProtectedRoute';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import { useDataFetching } from '../../hooks/useDataFetching';
import { mockUser, getMockTeacherStats, getMockTeacherActivities, mockActivities } from '../../services/mockData';

const TeacherDashboard = () => {
  const router = useRouter();
  const [activities, setActivities] = useState(mockActivities);
  const [loading, setLoading] = useState(false);

  const {
    data: stats,
    loading: statsLoading,
    error: statsError,
    retry: retryStats,
    retryCount: statsRetryCount,
  } = useDataFetching(
    getMockTeacherStats,
    {
      maxRetries: 3,
      retryDelay: 1000,
      onError: (error) => {
        console.error('Error fetching teacher stats:', error);
      },
    }
  );

  useEffect(() => {
    const unsubscribe = getMockTeacherActivities((newActivities) => {
      setActivities(newActivities);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading || statsLoading) {
    return (
      <ProtectedRoute requiredRole="teacher">
        <DashboardLayout user={mockUser} role="teacher">
          <div className="flex items-center justify-center h-64">
            <LoadingSpinner size="lg" />
          </div>
        </DashboardLayout>
      </ProtectedRoute>
    );
  }

  if (statsError) {
    return (
      <ProtectedRoute requiredRole="teacher">
        <DashboardLayout user={mockUser} role="teacher">
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
    <ProtectedRoute requiredRole="teacher">
      <DashboardLayout user={mockUser} role="teacher">
        <div className="space-y-6">
          {/* Welcome Section */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome back, {mockUser.displayName}!
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your classes today.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Total Classes', value: stats?.totalClasses || 0 },
              { name: 'Active Students', value: stats?.activeStudents || 0 },
              { name: 'Pending Assignments', value: stats?.pendingAssignments || 0 },
              { name: 'Average Score', value: `${stats?.averageScore || 0}%` },
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

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Activity
              </h3>
            </div>
            <div className="border-t border-gray-200">
              <ul className="divide-y divide-gray-200">
                {activities.map((activity) => (
                  <li key={activity.id} className="px-4 py-4 sm:px-6">
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
                                d={
                                  activity.type === 'assignment'
                                    ? 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
                                    : activity.type === 'class'
                                    ? 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                                    : 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                                }
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0">
                        <p className="text-sm text-gray-500">
                          {new Date(activity.timestamp.toDate()).toLocaleString()}
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

export default TeacherDashboard; 