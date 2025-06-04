import { Container, Typography, Grid } from '@mui/material';
import StudentDashboardCard from '@/components/student/StudentDashboardCard';

// Mock data - Replace with actual data from your backend
const courses = [
  { course: "Introduction to Robotics", progress: "75%", lastActivity: "2 hours ago" },
  { course: "Advanced Programming", progress: "60%", lastActivity: "1 day ago" },
  { course: "Robot Design Principles", progress: "45%", lastActivity: "3 days ago" },
  { course: "Sensor Integration", progress: "30%", lastActivity: "1 week ago" }
];

export default function CoursesPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        My Courses
      </Typography>
      
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StudentDashboardCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 