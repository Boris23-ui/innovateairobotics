"use client";

import { useAuth } from "@clerk/nextjs";
import { LoadingSpinner } from "@/modules/common/components/LoadingSpinner";
import { Button } from "@/modules/common/components/Button";
import { Card } from "@/modules/common/components/Card";
import {
  Box,
  Container,
  Typography,
  useTheme,
  Grid,
} from '@mui/material';
import {
  School as SchoolIcon,
  Code as CodeIcon,
  SmartToy as RobotIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';
import { useRouter } from "next/navigation";

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
                }}
              >
                Empowering the next generation of innovators through robotics and AI education
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' },
                }}
              >
                {!isSignedIn ? (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => router.push("/sign-in")}
                  >
                    Get Started
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => router.push("/dashboard/teacher")}
                  >
                    Go to Dashboard
                  </Button>
                )}
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
      <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h2" component="h2" textAlign="center" mb={6}>
          Why Choose InnovateAI Robotics?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: 3,
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
              onClick={() => router.push("/programs")}
            >
              Explore Programs
            </Button>
            <Button
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
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 