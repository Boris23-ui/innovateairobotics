"use client";

import { Container, Typography, Box, Button, Stack } from '@mui/material';
import { PlayArrow, School } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ py: 10, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
          Empowering the Next Generation of
          <Typography
            variant="h2"
            component="span"
            sx={{
              background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              ml: 1
            }}
          >
            Robotics Engineers
          </Typography>
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Hands-on learning experiences that combine robotics, AI, and coding to inspire creativity and innovation in young minds.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrow />}
            sx={{ px: 4, py: 1.5 }}
            onClick={() => router.push('/sign-in')}
          >
            Start Learning
          </Button>
          <Button
            variant="outlined"
            size="large"
            startIcon={<School />}
            sx={{ px: 4, py: 1.5 }}
            onClick={() => router.push('/courses')}
          >
            Explore Courses
          </Button>
        </Stack>
      </Box>
    </Container>
  );
} 