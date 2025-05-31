"use client";

import { useAuth } from "@/utils/mockAuth";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";
import {
  Box,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  SmartToy as RobotIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';

const features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: 'Expert-Led Courses',
    subtitle: 'Learn from industry professionals and experienced educators',
    description: 'Our courses are designed and taught by experts in robotics and AI, ensuring you receive the highest quality education.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Hands-on Projects',
    subtitle: 'Build real-world applications and gain practical experience',
    description: 'Apply your knowledge through hands-on projects that simulate real-world scenarios and challenges.',
  },
  {
    icon: <RobotIcon sx={{ fontSize: 40 }} />,
    title: 'Cutting-edge Technology',
    subtitle: 'Access the latest tools and technologies in robotics and AI',
    description: 'Stay ahead of the curve with access to state-of-the-art robotics platforms and AI development tools.',
  },
  {
    icon: <ScienceIcon sx={{ fontSize: 40 }} />,
    title: 'Research Opportunities',
    subtitle: 'Contribute to groundbreaking research in robotics and AI',
    description: 'Participate in research projects and collaborate with leading institutions in the field.',
  },
];

export default function Home() {
  const { user, isLoaded } = useAuth();
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
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  animation: 'fadeIn 1s ease-in-out',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                Welcome to InnovateAI Robotics
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{
                  mb: 4,
                  animation: 'fadeIn 1s ease-in-out 0.2s',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                Empowering the next generation through AI and robotics education
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  animation: 'fadeIn 1s ease-in-out 0.4s',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                {user ? (
                  <Button
                    component="a"
                    href={`/dashboard/${user.role}`}
                    variant="contained"
                    size="large"
                    animation="slide"
                  >
                    Go to Dashboard
                  </Button>
                ) : (
                  <>
                    <Button
                      component="a"
                      href="/signin"
                      variant="contained"
                      size="large"
                      animation="slide"
                    >
                      Sign In
                    </Button>
                    <Button
                      component="a"
                      href="/signup"
                      variant="outlined"
                      size="large"
                      animation="slide"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/building_drones.jpg"
                alt="Students building drones"
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '500px',
                  objectFit: 'cover',
                  borderRadius: 2,
                  animation: 'fadeIn 1s ease-in-out 0.6s',
                  '@keyframes fadeIn': {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Card
                  animation="fade"
                  hoverEffect
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {feature.subtitle}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            sx={{ mb: 4, opacity: 0.9 }}
          >
            Join our community of learners and start building the future of robotics and AI
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
            }}
          >
            <Button
              component="a"
              href="/programs"
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'background.paper',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'background.paper',
                  opacity: 0.9,
                },
              }}
              animation="scale"
            >
              Explore Programs
            </Button>
            <Button
              component="a"
              href="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'background.paper',
                color: 'background.paper',
                '&:hover': {
                  borderColor: 'background.paper',
                  bgcolor: 'background.paper',
                  color: 'primary.main',
                },
              }}
              animation="scale"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 