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
import { motion } from 'framer-motion';

export default function StudentDashboard() {
  const studentData = useStudentData("student-1");

  const getAgeGroupStyles = () => {
    const { theme } = studentData;
    return {
      heroSection: {
        background: `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.secondaryColor} 100%)`,
        color: theme.textColor
      },
      cardStyle: {
        backgroundColor: 'white',
        borderColor: theme.secondaryColor,
        borderWidth: '1px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
      },
      progressBar: {
        backgroundColor: theme.secondaryColor
      }
    };
  };

  const styles = getAgeGroupStyles();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden" style={styles.heroSection}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Welcome back, {studentData.name}!
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {studentData.ageGroup === 'elementary' && "Let's have fun learning together! 🌟"}
            {studentData.ageGroup === 'middle' && "Here's what's happening in your classes today 📚"}
            {studentData.ageGroup === 'high' && "Track your progress and upcoming challenges 🚀"}
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Sidebar - Progress & Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              variants={itemVariants}
              style={styles.cardStyle} 
              className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <StudentInfoCard {...studentData} />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              style={styles.cardStyle} 
              className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <BadgesOverview />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              style={styles.cardStyle} 
              className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <CourseProgressList courses={studentData.courses} />
            </motion.div>
          </div>

          {/* Right Side - Active Tasks */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              variants={itemVariants}
              style={styles.cardStyle} 
              className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <UpcomingAssignments assignments={studentData.upcomingAssignments} />
            </motion.div>
            <motion.div 
              variants={itemVariants}
              style={styles.cardStyle} 
              className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
            >
              <SubmittedProjects projects={studentData.submittedProjects} />
            </motion.div>
            {studentData.ageGroup !== 'elementary' && (
              <>
                <motion.div 
                  variants={itemVariants}
                  style={styles.cardStyle} 
                  className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
                >
                  <CurrentChallenges />
                </motion.div>
                {studentData.ageGroup === 'high' && (
                  <motion.div 
                    variants={itemVariants}
                    style={styles.cardStyle} 
                    className="rounded-xl p-6 hover:transform hover:scale-[1.02] hover:shadow-lg"
                  >
                    <PeerReviewSection />
                  </motion.div>
                )}
              </>
            )}
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
} 