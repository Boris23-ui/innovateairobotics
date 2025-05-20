import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import StudentInfoCard from '../../components/student/StudentInfoCard';
import CourseProgressList from '../../components/student/CourseProgressList';
import UpcomingAssignments from '../../components/student/UpcomingAssignments';
import SubmittedProjects from '../../components/student/SubmittedProjects';
import BadgesOverview from '../../components/student/BadgesOverview';
import CurrentChallenges from '../../components/student/CurrentChallenges';
import PeerReviewSection from '../../components/student/PeerReviewSection';
import useStudentData from '../../hooks/useStudentData';

export default function StudentDashboard() {
  const studentData = useStudentData("student-1");

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-[rgb(60,152,251)] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{studentData.name}</h1>
          <p className="text-lg opacity-90">Here's what's happening in your classes today</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Progress & Info */}
          <div className="lg:col-span-1 space-y-6">
            <StudentInfoCard {...studentData} />
            <BadgesOverview />
            <CourseProgressList courses={studentData.courses} />
          </div>

          {/* Right Side - Active Tasks */}
          <div className="lg:col-span-2 space-y-8">
            <UpcomingAssignments assignments={studentData.upcomingAssignments} />
            <SubmittedProjects projects={studentData.submittedProjects} />
            <CurrentChallenges />
            <PeerReviewSection />
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 