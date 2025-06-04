"use client";

import { Container, Typography, Grid, useTheme } from '@mui/material';
import StudentDashboardCard from '@/components/student/StudentDashboardCard';

// Mock data - Replace with actual data from your backend
const mockCourses = [
  {
    course: "Introduction to Robotics",
    progress: "75%",
    lastActivity: "2 hours ago"
  },
  {
    course: "Advanced Programming",
    progress: "60%",
    lastActivity: "1 day ago"
  },
  {
    course: "Machine Learning Basics",
    progress: "45%",
    lastActivity: "3 days ago"
  },
  {
    course: "Computer Vision",
    progress: "30%",
    lastActivity: "1 week ago"
  }
];

export default function CoursesPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Typography 
        variant="h4" 
        component="h1" 
        gutterBottom 
        sx={{ 
          my: 4,
          color: 'text.primary',
          transition: theme.transitions.create('color', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        Active Courses
      </Typography>
      
      <Grid container spacing={3}>
        {mockCourses.map((course, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StudentDashboardCard {...course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 