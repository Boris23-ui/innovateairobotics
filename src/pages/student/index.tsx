import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import StudentProgressCard from '../../components/student/StudentProgressCard';
import CourseProgressList from '../../components/student/CourseProgressList';
import UpcomingAssignments from '../../components/student/UpcomingAssignments';
import SubmittedProjects from '../../components/student/SubmittedProjects';
import BadgesOverview from '../../components/student/BadgesOverview';

const StudentDashboard: React.FC = () => {
  const studentData = {
    name: 'Emily Johnson',
    gradeLevel: '10th Grade',
    progress: '75',
    lastLogin: '2024-03-15',
    courses: [
      {
        title: 'Introduction to Robotics',
        progress: '60',
        lastActivity: '2024-03-15',
      },
      {
        title: 'Python Programming',
        progress: '85',
        lastActivity: '2024-03-14',
      },
      {
        title: 'AI Fundamentals',
        progress: '45',
        lastActivity: '2024-03-13',
      },
    ],
    upcomingAssignments: [
      {
        title: 'Robot Navigation Project',
        course: 'Introduction to Robotics',
        dueDate: '2024-03-20',
      },
      {
        title: 'Python Data Structures Quiz',
        course: 'Python Programming',
        dueDate: '2024-03-18',
      },
    ],
    submittedProjects: [
      {
        title: 'Line Following Robot',
        status: 'graded' as const,
        score: '95',
        feedback: 'Excellent implementation of PID control!',
      },
      {
        title: 'Object Detection System',
        status: 'pending' as const,
        feedback: null,
      },
    ],
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <StudentProgressCard
              name={studentData.name}
              gradeLevel={studentData.gradeLevel}
              progress={studentData.progress}
              lastLogin={studentData.lastLogin}
            />
            <CourseProgressList courses={studentData.courses} />
            <UpcomingAssignments assignments={studentData.upcomingAssignments} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <SubmittedProjects projects={studentData.submittedProjects} />
            <BadgesOverview />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard; 