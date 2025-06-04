import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Grid, Typography } from '@mui/material';
import StudentInfoCard from '@/components/student/StudentInfoCard';
import StudentProgressCard from '@/components/student/StudentProgressCard';
import StudentDashboardCard from '@/components/student/StudentDashboardCard';
import BadgesOverview from '@/components/student/BadgesOverview';
import CurrentChallenges from '@/components/student/CurrentChallenges';
import UpcomingAssignments from '@/components/student/UpcomingAssignments';
import PeerReviewSection from '@/components/student/PeerReviewSection';
import SubmittedProjects from '@/components/student/SubmittedProjects';

// Mock data - Replace with actual data from your backend
const mockData = {
  studentInfo: {
    name: "John Doe",
    gradeLevel: "Grade 10",
    progress: "75%",
    lastLogin: "2 hours ago"
  },
  courses: [
    { course: "Introduction to Robotics", progress: "75%", lastActivity: "2 hours ago" },
    { course: "Advanced Programming", progress: "60%", lastActivity: "1 day ago" }
  ],
  assignments: [
    { title: "Robot Navigation Project", course: "Introduction to Robotics", dueDate: "April 15, 2024" },
    { title: "Sensor Integration", course: "Advanced Programming", dueDate: "April 20, 2024" }
  ],
  projects: [
    { title: "Maze Solver Robot", status: "graded", score: "95%", feedback: "Excellent implementation!" },
    { title: "Sensor Array Project", status: "in_review", feedback: null }
  ]
};

export default async function StudentDashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Student Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          {/* Student Info Section */}
          <Grid item xs={12} md={4}>
            <StudentInfoCard {...mockData.studentInfo} />
          </Grid>
          
          {/* Progress Section */}
          <Grid item xs={12} md={8}>
            <StudentProgressCard {...mockData.studentInfo} />
          </Grid>

          {/* Course Progress Section */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {mockData.courses.map((course, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <StudentDashboardCard {...course} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Challenges and Assignments Section */}
          <Grid item xs={12} md={6}>
            <CurrentChallenges />
          </Grid>
          <Grid item xs={12} md={6}>
            <UpcomingAssignments assignments={mockData.assignments} />
          </Grid>

          {/* Badges and Reviews Section */}
          <Grid item xs={12} md={6}>
            <BadgesOverview />
          </Grid>
          <Grid item xs={12} md={6}>
            <PeerReviewSection />
          </Grid>

          {/* Submitted Projects Section */}
          <Grid item xs={12}>
            <SubmittedProjects projects={mockData.projects} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 