"use client";

import Image from 'next/image';
import { Container, Typography, Box, Button, Stack, Paper, Grid } from '@mui/material';
import { PlayArrow, School } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Features from '@/components/Features';

const RoboticArm3D = dynamic(() => import('@/components/RoboticArm3D'), { ssr: false });

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, minHeight: { xs: 'auto', md: '90vh' } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom 
                fontWeight="bold"
                sx={{ 
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '3.75rem' },
                  lineHeight: { xs: 1.2, md: 1.1 }
                }}
              >
                Empowering the Next Generation of{' '}
                <Typography
                  variant="h2"
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    display: { xs: 'block', md: 'inline' },
                    mt: { xs: 1, md: 0 }
                  }}
                >
                  Robotics Engineers
                </Typography>
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                sx={{ 
                  mb: 4, 
                  maxWidth: 600,
                  mx: { xs: 'auto', md: 0 },
                  fontSize: { xs: '1.1rem', sm: '1.25rem' },
                  lineHeight: 1.5
                }}
              >
                Hands-on learning experiences that combine robotics, AI, and coding to inspire creativity and innovation in young minds.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2} 
                sx={{ 
                  mb: { xs: 6, md: 4 },
                  width: { xs: '100%', sm: 'auto' }
                }} 
                role="group" 
                aria-label="Primary actions"
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  fullWidth={false}
                  sx={{ 
                    px: { xs: 3, sm: 4 }, 
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                  onClick={() => router.push('/sign-in')}
                  aria-label="Start learning - Sign in"
                >
                  Start Learning
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<School />}
                  fullWidth={false}
                  sx={{ 
                    px: { xs: 3, sm: 4 }, 
                    py: { xs: 1.5, sm: 2 },
                    fontSize: { xs: '1rem', sm: '1.1rem' }
                  }}
                  onClick={() => router.push('/courses')}
                  aria-label="Explore courses"
                >
                  Explore Courses
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ 
              position: 'relative', 
              width: '100%', 
              height: { xs: '300px', sm: '400px', md: '500px' }, 
              borderRadius: '16px', 
              overflow: 'hidden',
              boxShadow: { xs: '0 4px 12px rgba(0,0,0,0.1)', md: '0 8px 24px rgba(0,0,0,0.15)' }
            }}>
              <Image
                src="/images/building_drones.jpg"
                alt="Students building drones"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </Box>
          </Grid>
        </Grid>

        {/* 3D Robotic Arm Animation */}
        <Box sx={{ mt: 8, width: '100%', maxWidth: 900, mx: 'auto', borderRadius: 2, overflow: 'hidden', boxShadow: 3, background: 'linear-gradient(120deg, #e0e7ef 60%, #ede9fe 100%)' }}>
          <RoboticArm3D />
        </Box>
      </Container>

      {/* Image Gallery Section */}
      <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            textAlign="center" 
            gutterBottom 
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: { xs: 2, md: 3 }
            }}
          >
            Inspiring Young Minds Worldwide
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            textAlign="center" 
            sx={{ 
              mb: { xs: 4, md: 6 }, 
              maxWidth: 800, 
              mx: 'auto',
              px: { xs: 2, sm: 0 },
              fontSize: { xs: '1rem', sm: '1.25rem' }
            }}
          >
            From Mountain View to Nairobi, we're building the next generation of innovators through hands-on robotics education.
          </Typography>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 0, 
                  height: { xs: '250px', sm: '300px', md: '400px' }, 
                  position: 'relative', 
                  overflow: 'hidden', 
                  borderRadius: 2, 
                  transition: 'all 0.3s ease-in-out', 
                  '&:hover': { 
                    transform: 'scale(1.02)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  } 
                }}
              >
                <Image
                  src="/images/Mountain-view-classes-4.jpg"
                  alt="Mountain view classes"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 0, height: '400px', position: 'relative', overflow: 'hidden', borderRadius: 2, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.02)' } }}>
                <Image
                  src="/images/Nairobi-classes-7.jpg"
                  alt="Nairobi classes"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper elevation={3} sx={{ p: 0, height: '400px', position: 'relative', overflow: 'hidden', borderRadius: 2, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.02)' } }}>
                <Image
                  src="/images/Palo-alto-classes-5.jpg"
                  alt="Palo Alto classes"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10 }}>
        <Features />
      </Box>

      {/* Future Innovation Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', width: '100%', height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
                <Image
                  src="/images/mobile robot + gripper.jpg"
                  alt="Mobile robot with gripper"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3
                  }}
                >
                  Build the Future
                </Typography>
                <Typography variant="h5" paragraph sx={{ mb: 4 }}>
                  By 2030, robotics and AI will create over 97 million new jobs globally. We're preparing the next generation for this exciting future.
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Paper 
                      elevation={0}
                      sx={{ 
                        p: 3, 
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: 'primary.light',
                        height: '100%'
                      }}
                    >
                      <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                        100%
                      </Typography>
                      <Typography variant="body1">
                        of our students complete their first robotics project within 2 weeks
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper 
                      elevation={0}
                      sx={{ 
                        p: 3, 
                        bgcolor: 'background.paper',
                        borderRadius: 2,
                        border: '2px solid',
                        borderColor: 'primary.light',
                        height: '100%'
                      }}
                    >
                      <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                        50+
                      </Typography>
                      <Typography variant="body1">
                        hands-on projects from basic robotics to advanced AI integration
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    mt: 4,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '1.1rem'
                  }}
                  onClick={() => router.push('/courses')}
                >
                  Explore Our Programs
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Learning Path Section */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          Your Journey to Mastery
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-8px)' }
              }}
            >
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.main'
                  }}
                >
                  Beginner
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                Foundation in Robotics
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Basic robot construction
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Introduction to sensors
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Simple programming concepts
              </Typography>
              <Box sx={{ position: 'relative', width: '100%', height: '200px', borderRadius: 2, overflow: 'hidden', mt: 3 }}>
                <Image
                  src="/images/Kids sorting kit components.jpg"
                  alt="Kids learning robotics basics"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-8px)' }
              }}
            >
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.main'
                  }}
                >
                  Intermediate
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                Advanced Mechanisms
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Complex robot design
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Sensor fusion & control
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Applied mathematics
              </Typography>
              <Box sx={{ position: 'relative', width: '100%', height: '200px', borderRadius: 2, overflow: 'hidden', mt: 3 }}>
                <Image
                  src="/images/kids_designing_simple_machines.jpg"
                  alt="Students working on advanced projects"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                borderRadius: 4,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'translateY(-8px)' }
              }}
            >
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: 'primary.main'
                  }}
                >
                  Advanced
                </Typography>
              </Box>
              <Typography variant="h6" gutterBottom>
                AI & Innovation
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • AI integration
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Computer vision
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                • Real-world applications
              </Typography>
              <Box sx={{ position: 'relative', width: '100%', height: '200px', borderRadius: 2, overflow: 'hidden', mt: 3 }}>
                <Image
                  src="/images/building_drones.jpg"
                  alt="Advanced students building drones"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Join the Innovation Section */}
      <Box 
        sx={{ 
          py: 15,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/images/young-robotics-engineers.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.2)',
            zIndex: 0,
            transition: 'transform 20s ease',
            transform: 'scale(1.1)',
            animation: 'slowZoom 20s infinite alternate'
          },
          '@keyframes slowZoom': {
            '0%': {
              transform: 'scale(1)',
            },
            '100%': {
              transform: 'scale(1.1)',
            },
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography 
              variant="h1" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 900,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(135deg, #fff 0%, #e0e7ff 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: { xs: 2, md: 3 },
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                lineHeight: { xs: 1.2, md: 1.1 }
              }}
            >
              Ready to Start Your Journey?
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                mb: { xs: 4, md: 6 },
                maxWidth: 800,
                mx: 'auto',
                opacity: 0.9,
                fontWeight: 'medium',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                px: { xs: 2, sm: 4 }
              }}
            >
              Join thousands of young innovators who are shaping the future of technology
            </Typography>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={{ xs: 2, sm: 3 }} 
              justifyContent="center"
              sx={{ 
                mb: { xs: 6, md: 10 },
                px: { xs: 2, sm: 0 }
              }}
            >
              <Button
                variant="contained"
                size="large"
                fullWidth={false}
                sx={{
                  px: { xs: 4, sm: 6, md: 8 },
                  py: { xs: 2, sm: 2.5, md: 3 },
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                  borderRadius: 3,
                  bgcolor: 'primary.main',
                  boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.4)',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 6px 20px 0 rgba(37, 99, 235, 0.6)',
                    transition: 'all 0.3s ease'
                  }
                }}
                onClick={() => router.push('/sign-up')}
              >
                Start Your Free Trial
              </Button>
              <Button
                variant="outlined"
                size="large"
                fullWidth={false}
                sx={{
                  px: { xs: 4, sm: 6, md: 8 },
                  py: { xs: 2, sm: 2.5, md: 3 },
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' },
                  borderRadius: 3,
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.5)',
                  borderWidth: '2px',
                  backdropFilter: 'blur(10px)',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.2)',
                    transform: 'translateY(-5px)',
                    transition: 'all 0.3s ease'
                  }
                }}
                onClick={() => router.push('/courses')}
              >
                Explore Courses
              </Button>
            </Stack>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Paper 
                  sx={{ 
                    p: 4, 
                    bgcolor: 'rgba(255,255,255,0.98)',
                    borderRadius: 4,
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2, color: 'primary.main', fontSize: '2.5rem' }}>🎯</Box>
                  <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                    Flexible Learning
                  </Typography>
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    Learn at your own pace with personalized learning paths and both online and in-person options
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper 
                  sx={{ 
                    p: 4, 
                    bgcolor: 'rgba(255,255,255,0.98)',
                    borderRadius: 4,
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2, color: 'primary.main', fontSize: '2.5rem' }}>👨‍🏫</Box>
                  <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                    Expert Support
                  </Typography>
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    Get 1-on-1 guidance from experienced robotics engineers and dedicated mentors
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Paper 
                  sx={{ 
                    p: 4, 
                    bgcolor: 'rgba(255,255,255,0.98)',
                    borderRadius: 4,
                    backdropFilter: 'blur(20px)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ mb: 2, color: 'primary.main', fontSize: '2.5rem' }}>🚀</Box>
                  <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                    Project Portfolio
                  </Typography>
                  <Typography variant="body1" color="text.secondary" textAlign="center">
                    Build an impressive portfolio of real-world robotics projects and achievements
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}