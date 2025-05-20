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

  const getAgeGroupStyles = () => {
    const { theme } = studentData;
    return {
      heroSection: {
        backgroundColor: theme.primaryColor,
        color: theme.textColor
      },
      cardStyle: {
        backgroundColor: 'white',
        borderColor: theme.secondaryColor,
        borderWidth: '2px'
      },
      progressBar: {
        backgroundColor: theme.secondaryColor
      }
    };
  };

  const styles = getAgeGroupStyles();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-12" style={styles.heroSection}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{studentData.name}</h1>
          <p className="text-lg opacity-90">
            {studentData.ageGroup === 'elementary' && "Let's have fun learning together!"}
            {studentData.ageGroup === 'middle' && "Here's what's happening in your classes today"}
            {studentData.ageGroup === 'high' && "Track your progress and upcoming challenges"}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Progress & Info */}
          <div className="lg:col-span-1 space-y-6">
            <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
              <StudentInfoCard {...studentData} />
            </div>
            <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
              <BadgesOverview />
            </div>
            <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
              <CourseProgressList courses={studentData.courses} />
            </div>
          </div>

          {/* Right Side - Active Tasks */}
          <div className="lg:col-span-2 space-y-8">
            <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
              <UpcomingAssignments assignments={studentData.upcomingAssignments} />
            </div>
            <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
              <SubmittedProjects projects={studentData.submittedProjects} />
            </div>
            {studentData.ageGroup !== 'elementary' && (
              <>
                <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
                  <CurrentChallenges />
                </div>
                {studentData.ageGroup === 'high' && (
                  <div style={styles.cardStyle} className="rounded-lg shadow-md p-6">
                    <PeerReviewSection />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 