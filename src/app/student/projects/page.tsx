import { Container, Typography } from '@mui/material';
import SubmittedProjects from '@/components/student/SubmittedProjects';

// Mock data - Replace with actual data from your backend
const projects = [
  { 
    title: "Maze Solver Robot", 
    status: "graded", 
    score: "95%", 
    feedback: "Excellent implementation! Your robot successfully navigated through all test mazes." 
  },
  { 
    title: "Sensor Array Project", 
    status: "in_review", 
    feedback: null 
  },
  { 
    title: "Autonomous Navigation System", 
    status: "graded", 
    score: "88%", 
    feedback: "Good work on the navigation algorithm. Consider optimizing the path-finding logic." 
  },
  { 
    title: "Robot Arm Control", 
    status: "graded", 
    score: "92%", 
    feedback: "Impressive precision in movement control. The error handling could be improved." 
  }
];

export default function ProjectsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        My Projects
      </Typography>
      
      <SubmittedProjects projects={projects} />
    </Container>
  );
} 