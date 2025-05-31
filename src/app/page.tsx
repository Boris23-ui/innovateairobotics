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
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            animation: 'pulse 8s ease-in-out infinite',
            zIndex: 0,
          },
          '@keyframes pulse': {
            '0%': { opacity: 0.5 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0.5 },
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}>
            {/* Text Content */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: 'center', md: 'left' },
                color: 'text.primary',
                pr: { md: 4 },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: { xs: '50%', md: 0 },
                  transform: { xs: 'translateX(-50%)', md: 'none' },
                  width: '60px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                  borderRadius: '2px',
                },
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  mb: 2,
                  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.5), transparent)',
                  },
                }}
              >
                Welcome to InnovateAI Robotics
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  maxWidth: '600px',
                  mx: { xs: 'auto', md: 0 },
                }}
              >
                Empowering the next generation of innovators through robotics and AI education
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                  position: 'relative',
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 20px rgba(33, 150, 243, 0.6)',
                      background: 'linear-gradient(45deg, #1976D2 30%, #1E88E5 90%)',
                    },
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    borderRadius: 2,
                    borderWidth: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      borderWidth: 2,
                      boxShadow: '0 4px 14px rgba(33, 150, 243, 0.2)',
                      background: 'rgba(33, 150, 243, 0.04)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>

            {/* Image Card */}
            <Box
              sx={{
                flex: 1,
                position: 'relative',
                height: { xs: '300px', md: '600px' },
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                perspective: '1000px',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  width: '100%',
                  maxWidth: '500px',
                  transform: 'rotateY(-5deg) rotateX(5deg)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'rotateY(0deg) rotateX(0deg)',
                    '& .image-overlay': {
                      opacity: 0,
                    },
                    '& .image-content': {
                      transform: 'translateY(0)',
                      opacity: 1,
                    },
                  },
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
                    border: '4px solid white',
                  }}
                />
                <Box
                  className="image-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 4,
                    background: 'linear-gradient(45deg, rgba(33, 150, 243, 0.2) 30%, rgba(33, 203, 243, 0.2) 90%)',
                    transition: 'opacity 0.3s ease',
                  }}
                />
                <Box
                  className="image-content"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 3,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    borderRadius: '0 0 16px 16px',
                    transform: 'translateY(20px)',
                    opacity: 0,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    Hands-on Learning
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    Students building and programming their own drones
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            align="center"
            color="primary"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Why Choose Us
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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