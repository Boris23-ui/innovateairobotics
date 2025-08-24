"use client";


import Image from 'next/image';
import { Container, Typography, Box, Button, Stack, Paper } from '@mui/material';
import { PlayArrow, School } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const RoboticArm3D = dynamic(() => import('@/components/RoboticArm3D'), { ssr: false });

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 10, minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          {/* ...existing code... */}

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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" role="group" aria-label="Primary actions">
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              sx={{ px: 4, py: 1.5 }}
              onClick={() => router.push('/sign-in')}
              aria-label="Start learning - Sign in"
            >
              Start Learning
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<School />}
              sx={{ px: 4, py: 1.5 }}
              onClick={() => router.push('/courses')}
              aria-label="Explore courses"
            >
              Explore Courses
            </Button>
            <Button
              variant="text"
              size="large"
              sx={{ px: 2, py: 1.5, color: 'text.primary' }}
              onClick={() => router.push('/test-data')}
              aria-label="View demo content"
            >
              View Demo
            </Button>
          </Stack>
        </Box>
        {/* 3D Robotic Arm Animation at the top of hero */}
        <Box sx={{ mb: 4, width: '100%', maxWidth: 900, mx: 'auto', borderRadius: 2, overflow: 'hidden', boxShadow: 3, background: 'linear-gradient(120deg, #e0e7ef 60%, #ede9fe 100%)' }}>
          <RoboticArm3D />
        </Box>
      </Container>
      {/* Testimonials Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
            What Our Students & Teachers Say
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Real stories from our community
          </Typography>
        </Box>
        <Stack spacing={4}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              "This program sparked my love for robotics! I built my first robot and now I want to be an engineer."
            </Typography>
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <Typography variant="subtitle1" fontWeight="bold">Amina K.</Typography>
              <Typography variant="body2" color="text.secondary">Student, Nairobi</Typography>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              "The hands-on approach makes learning fun and effective. My students are more engaged than ever!"
            </Typography>
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <Typography variant="subtitle1" fontWeight="bold">Mr. Lee</Typography>
              <Typography variant="body2" color="text.secondary">Teacher, Palo Alto</Typography>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              "InnovateAI Robotics gave my child the confidence to explore technology. Highly recommended!"
            </Typography>
            <Box sx={{ mt: 2, textAlign: 'right' }}>
              <Typography variant="subtitle1" fontWeight="bold">Sarah W.</Typography>
              <Typography variant="body2" color="text.secondary">Parent</Typography>
            </Box>
          </Paper>
        </Stack>
      </Container>
    </>
  );
} 