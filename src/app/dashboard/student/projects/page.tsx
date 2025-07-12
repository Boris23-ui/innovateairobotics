"use client";

import { Container, Typography, Grid, useTheme } from '@mui/material';
import SubmittedProjects from '@/components/student/SubmittedProjects';

interface Project {
  title: string;
  status: 'graded' | 'in_review';
  score?: string;
  feedback?: string;
}

// Mock data - Replace with actual data from your backend
const mockProjects: Project[] = [
  {
    title: "Maze Solver Robot",
    status: "graded",
    score: "95%",
    feedback: "Excellent implementation! Your robot successfully navigated through all test mazes."
  },
  {
    title: "Sensor Array Project",
    status: "in_review"
  },
  {
    title: "Machine Learning Model",
    status: "graded",
    score: "88%",
    feedback: "Good work on the model implementation. Consider improving the feature selection."
  },
  {
    title: "Computer Vision Application",
    status: "in_review"
  }
];

export default function ProjectsPage() {
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
        My Projects
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SubmittedProjects projects={mockProjects} />
        </Grid>
      </Grid>
    </Container>
  );
} 