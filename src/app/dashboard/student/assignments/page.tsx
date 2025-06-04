"use client";

import { Container, Typography, Grid, useTheme } from '@mui/material';
import UpcomingAssignments from '@/components/student/UpcomingAssignments';

// Mock data - Replace with actual data from your backend
const mockAssignments = [
  {
    title: "Robot Navigation Project",
    course: "Introduction to Robotics",
    dueDate: "April 15, 2024"
  },
  {
    title: "Sensor Integration",
    course: "Advanced Programming",
    dueDate: "April 20, 2024"
  },
  {
    title: "Machine Learning Model Implementation",
    course: "Machine Learning Basics",
    dueDate: "April 25, 2024"
  },
  {
    title: "Image Processing Project",
    course: "Computer Vision",
    dueDate: "May 1, 2024"
  }
];

export default function AssignmentsPage() {
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
        Pending Assignments
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <UpcomingAssignments assignments={mockAssignments} />
        </Grid>
      </Grid>
    </Container>
  );
} 