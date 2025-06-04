import { Container, Typography, Grid } from '@mui/material';
import UpcomingAssignments from '@/components/student/UpcomingAssignments';
import CurrentChallenges from '@/components/student/CurrentChallenges';

// Mock data - Replace with actual data from your backend
const assignments = [
  { title: "Robot Navigation Project", course: "Introduction to Robotics", dueDate: "April 15, 2024" },
  { title: "Sensor Integration", course: "Advanced Programming", dueDate: "April 20, 2024" },
  { title: "Design Documentation", course: "Robot Design Principles", dueDate: "April 25, 2024" },
  { title: "Final Project Proposal", course: "Sensor Integration", dueDate: "May 1, 2024" }
];

export default function AssignmentsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Assignments & Challenges
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CurrentChallenges />
        </Grid>
        <Grid item xs={12} md={6}>
          <UpcomingAssignments assignments={assignments} />
        </Grid>
      </Grid>
    </Container>
  );
} 