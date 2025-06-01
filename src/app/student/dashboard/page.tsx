import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Typography } from '@mui/material';

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
        <Typography variant="body1">
          Welcome to your student dashboard. Here you can view your enrolled courses and track your progress.
        </Typography>
      </Box>
    </Container>
  );
} 