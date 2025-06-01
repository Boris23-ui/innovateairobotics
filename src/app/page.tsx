"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  IconButton,
  Avatar,
  Badge,
} from '@mui/material';
import {
  School,
  Code,
  Science,
  EmojiObjects,
  ArrowForward,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const theme = useTheme();

  if (!isLoaded) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <LoadingSpinner />
      </Box>
    );
  }

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 'auto', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          mb: 8,
          mt: { xs: 2, md: 9 },
          px: { xs: 2, md: 4 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.1) 100%)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* Content */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  background: 'linear-gradient(135deg, #2196f3 0%, #00bcd4 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Empowering the Next Generation of Innovators
              </Typography>

              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: '600px', mx: { xs: 'auto', md: 0 } }}
              >
                Join our robotics and AI education programs designed for all ages. Learn, create, and innovate with cutting-edge technology.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => router.push("/sign-in")}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                >
                  Learn More
                </Button>
              </Box>
            </Box>

            {/* Image */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: '100%',
              }}
            >
              <Box
                component="img"
                src="/images/building_drones.jpg"
                alt="Students building drones"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 4,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Our Programs
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: 'Tiny Tinkerers',
              description: 'Introduction to robotics for young learners (Ages 5-7)',
              icon: <School sx={{ fontSize: 40 }} />,
              href: '/programs/tiny-tinkerers',
            },
            {
              title: 'Robot Explorers',
              description: 'Hands-on robotics projects for elementary students (Ages 8-11)',
              icon: <Code sx={{ fontSize: 40 }} />,
              href: '/programs/robot-explorers',
            },
            {
              title: 'Tech Titans',
              description: 'Advanced robotics and programming for middle schoolers (Ages 12-14)',
              icon: <Science sx={{ fontSize: 40 }} />,
              href: '/programs/tech-titans',
            },
            {
              title: 'AI Avengers',
              description: 'AI and machine learning for high school students (Ages 15-18)',
              icon: <EmojiObjects sx={{ fontSize: 40 }} />,
              href: '/programs/ai-avengers',
            },
          ].map((program, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} component="div">
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {program.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {program.description}
                  </Typography>
                  <Button
                    endIcon={<ArrowForward />}
                    onClick={() => router.push(program.href)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 