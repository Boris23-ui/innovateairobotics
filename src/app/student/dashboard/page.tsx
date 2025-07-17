"use client";

import { Container, Typography, Box, Grid } from '@mui/material';

export default function StudentDashboard() {
  return (
    <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 3 }, py: { xs: 2, md: 4 } }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Student Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Welcome to InnovateAI Robotics
            </Typography>
            <Typography variant="body1">
              This is your student dashboard where you can track your progress, view assignments, and manage your robotics projects.
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Quick Stats
            </Typography>
            <Typography variant="body2">
              • Courses Enrolled: 3<br/>
              • Active Projects: 2<br/>
              • Assignments Due: 1<br/>
              • Badges Earned: 5
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 