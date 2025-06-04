"use client";

import React from 'react';
import { Container, Typography, Grid, Box, useTheme } from '@mui/material';
import StudentDashboardCard from '@/components/student/StudentDashboardCard';

// Mock data for courses
const courses = [
  {
    course: "Introduction to Robotics",
    progress: "75%",
    lastActivity: "2 hours ago"
  },
  {
    course: "Python Programming",
    progress: "45%",
    lastActivity: "1 day ago"
  },
  {
    course: "Arduino Basics",
    progress: "90%",
    lastActivity: "3 days ago"
  },
  {
    course: "Sensor Integration",
    progress: "30%",
    lastActivity: "1 week ago"
  },
  {
    course: "Robot Navigation",
    progress: "60%",
    lastActivity: "2 days ago"
  },
  {
    course: "Machine Learning for Robotics",
    progress: "15%",
    lastActivity: "3 days ago"
  }
];

export default function AllCoursesPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{
            color: 'text.primary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          My Courses
        </Typography>
        <Typography 
          variant="body1"
          sx={{
            color: 'text.secondary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          Track your progress and continue learning
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StudentDashboardCard
              course={course.course}
              progress={course.progress}
              lastActivity={course.lastActivity}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
} 