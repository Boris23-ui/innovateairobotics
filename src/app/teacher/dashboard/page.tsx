import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Typography } from '@mui/material';

export default async function TeacherDashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Teacher Dashboard
        </Typography>
        <Typography variant="body1">
          Welcome to your teacher dashboard. Here you can manage your courses and students.
        </Typography>
      </Box>
    </Container>
  );
} 