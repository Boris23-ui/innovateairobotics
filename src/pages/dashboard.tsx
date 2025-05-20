import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Analytics from '../components/Analytics';
import ClassPerformance from '../components/ClassPerformance';
import StudentProgress from '../components/StudentProgress';

const DashboardPage: React.FC = () => {
  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Dashboard</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Analytics />
            </div>
            <div>
              <ClassPerformance />
            </div>
          </div>
          <div className="mt-8">
            <StudentProgress />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage; 