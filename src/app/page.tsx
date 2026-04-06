"use client";

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Container, Typography, Box, Button, Stack, Grid } from '@mui/material';
import {
  PlayArrow,
  School,
  KeyboardArrowDown,
  LocationOn,
  Sensors,
  Memory,
  Visibility,
  Code,
  RocketLaunch,
} from '@mui/icons-material';
import {
  Planet,
  Plant,
  CarProfile,
  Drone,
  Heartbeat,
  Robot,
  Circuitry,
  UsersThree,
  BookOpen,
  Trophy,
  Wrench,
  HeadCircuit,
  CalendarDots,
  ChalkboardTeacher,
} from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '@mui/material';

// ─── Animation Helpers ─────────────────────────────────────────────────────

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// ─── Main Landing Page ─────────────────────────────────────────────────────

export default function LandingPage() {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const features = [
    {
      title: 'Hands-on Learning',
      description: 'Build real EV3 LEGO Mindstorms robots from day one — gear trains, pulleys, sensors, and programmable systems.',
      icon: <Circuitry weight="duotone" size={32} />,
    },
    {
      title: 'Certified STEM Trainers',
      description: 'Learn from certified STEM Robotics Trainers with hands-on EV3 Mindstorms and programming experience.',
      icon: <UsersThree weight="duotone" size={32} />,
    },
    {
      title: 'K-12 Curriculum',
      description: 'Structured curriculum covering simple machines, sensors, Scratch, Python, and competition preparation.',
      icon: <BookOpen weight="duotone" size={32} />,
    },
    {
      title: 'Competition Ready',
      description: 'Prepare for First Lego League (FLL) and World Robotics Olympiad (WRO) with real engineering challenges.',
      icon: <Trophy weight="duotone" size={32} />,
    },
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Students Taught' },
    { value: 50, suffix: '+', label: 'Hands-on Projects' },
    { value: 2, suffix: '', label: 'Countries' },
    { value: 100, suffix: '%', label: 'Completion Rate' },
  ];

  const campuses = [
    { name: 'Mountain View', image: '/images/Mountain-view-classes-4.jpg', location: 'California, USA' },
    { name: 'Nairobi', image: '/images/Nairobi-classes-7.jpg', location: 'Kenya, East Africa' },
    { name: 'Palo Alto', image: '/images/Palo-alto-classes-5.jpg', location: 'California, USA' },
  ];

  const learningPath = [
    {
      level: '01',
      title: 'Beginner',
      subtitle: 'Simple Machines & Early Engineering',
      points: ['LEGO building and basic construction', 'Introduction to gears, pulleys, and levers', 'Cause-and-effect exploration with sensors'],
      image: '/images/Kids sorting kit components.jpg',
      icon: <Wrench weight="duotone" size={24} />,
    },
    {
      level: '02',
      title: 'Intermediate',
      subtitle: 'Mechanical Systems & Programming',
      points: ['Gear trains, pistons, pulleys, and CAM systems', 'EV3 Mindstorms programming with Scratch', 'Color, touch, and ultrasonic sensors'],
      image: '/images/20220810_152306.jpg',
      icon: <Code sx={{ fontSize: 24 }} />,
    },
    {
      level: '03',
      title: 'Advanced',
      subtitle: 'Programming, Data & Competition',
      points: ['Python programming and data logging', 'Sensor fusion and autonomous navigation', 'FLL & WRO competition preparation'],
      image: '/images/building_drones.jpg',
      icon: <HeadCircuit weight="duotone" size={24} />,
    },
  ];

  return (
    <>
      {/* ═══ HERO SECTION ═══════════════════════════════════════════════════ */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '-56px',
          pt: '56px',
        }}
        className="spx-grid-bg"
      >
        {/* Background Image */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 0,
        }}>
          <Image
            src="/images/building_drones.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', filter: 'brightness(0.08) saturate(0.4)' }}
            priority
          />
        </Box>

        {/* Gradient Overlays */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(6,182,212,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(139,92,246,0.06) 0%, transparent 50%),
            linear-gradient(180deg, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.8) 100%)
          `,
        }} />

        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="overline"
              sx={{
                color: '#06b6d4',
                letterSpacing: '0.3em',
                fontSize: { xs: '0.7rem', md: '0.85rem' },
                mb: 3,
                display: 'block',
              }}
            >
              INNOVATEAI ROBOTICS
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                color: 'white',
                WebkitTextFillColor: 'unset',
                background: 'none',
                textShadow: 'none',
              }}
            >
              Empowering the Next Generation of{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: { xs: 'block', md: 'inline' },
                }}
              >
                Robotics Engineers
              </Box>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#94a3b8',
                mb: 5,
                maxWidth: 700,
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.3rem' },
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Hands-on EV3 LEGO Mindstorms robotics education that teaches kids to
              envision it, engineer it, and make it work.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 6 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<PlayArrow />}
                onClick={() => router.push('/sign-in')}
                sx={{
                  px: 5, py: 1.8,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                  borderRadius: 2,
                  '&:hover': {
                    background: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
                    boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Start Learning Soon
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<School />}
                onClick={() => router.push('/courses')}
                sx={{
                  px: 5, py: 1.8,
                  fontSize: '1.1rem',
                  color: '#06b6d4',
                  borderColor: 'rgba(6, 182, 212, 0.4)',
                  borderWidth: 2,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    borderWidth: 2,
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Explore Courses
              </Button>
            </Stack>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
          >
            <Box sx={{ animation: 'bounce-down 2s infinite', color: 'rgba(6, 182, 212, 0.5)' }}>
              <KeyboardArrowDown sx={{ fontSize: 36 }} />
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* ═══ STATS BAR ══════════════════════════════════════════════════════ */}
      <Box sx={{
        bgcolor: isDark ? '#0d1117' : '#f8fafc',
        py: { xs: 5, md: 6 },
        borderTop: `1px solid ${isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(0,0,0,0.06)'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(0,0,0,0.06)'}`,
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, i) => (
              <Grid item xs={6} md={3} key={stat.label}>
                <ScrollReveal delay={i * 0.1}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1,
                        mb: 1,
                      }}
                    >
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        fontSize: { xs: '0.7rem', md: '0.8rem' },
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ═══ CAMPUS GALLERY ═════════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: isDark ? '#0a0a0f' : '#ffffff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography
              variant="overline"
              sx={{
                color: '#06b6d4',
                letterSpacing: '0.3em',
                textAlign: 'center',
                display: 'block',
                mb: 2,
              }}
            >
              OUR CAMPUSES
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Inspiring Young Minds{' '}
              <Box component="span" className="gradient-text">Worldwide</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: { xs: 5, md: 8 },
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              From Mountain View to Nairobi, we&apos;re building the next generation
              of innovators through hands-on robotics education.
            </Typography>
          </ScrollReveal>

          <Grid container spacing={3}>
            {campuses.map((campus, i) => (
              <Grid item xs={12} sm={6} md={4} key={campus.name}>
                <ScrollReveal delay={i * 0.15}>
                  <Box
                    className="glass-card"
                    sx={{
                      position: 'relative',
                      height: { xs: 280, md: 400 },
                      overflow: 'hidden',
                      cursor: 'pointer',
                      '&:hover img': {
                        transform: 'scale(1.05)',
                        filter: 'brightness(0.5)',
                      },
                      '&:hover .campus-overlay': {
                        opacity: 1,
                      },
                    }}
                  >
                    <Image
                      src={campus.image}
                      alt={campus.name}
                      fill
                      style={{
                        objectFit: 'cover',
                        filter: 'brightness(0.4)',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    {/* Gradient overlay */}
                    <Box sx={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(180deg, transparent 40%, rgba(10,10,15,0.9) 100%)',
                      zIndex: 1,
                    }} />
                    {/* Content */}
                    <Box sx={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      p: 3, zIndex: 2,
                    }}>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'white', mb: 0.5 }}>
                        {campus.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: '#06b6d4' }} />
                        <Typography variant="body2" sx={{ color: 'rgba(148,163,184,1)' }}>
                          {campus.location}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ═══ FEATURES ═══════════════════════════════════════════════════════ */}
      <Box sx={{
        bgcolor: isDark ? '#0d1117' : '#f8fafc',
        py: { xs: 8, md: 12 },
        position: 'relative',
      }}
        className="spx-particle-bg"
      >
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography
              variant="overline"
              sx={{
                color: '#06b6d4',
                letterSpacing: '0.3em',
                textAlign: 'center',
                display: 'block',
                mb: 2,
              }}
            >
              WHY CHOOSE US
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                mb: { xs: 5, md: 8 },
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Built for the{' '}
              <Box component="span" className="gradient-text">Future</Box>
            </Typography>
          </ScrollReveal>

          <Grid container spacing={3}>
            {features.map((feature, i) => (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <ScrollReveal delay={i * 0.1}>
                  <Box
                    className="glass-card"
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{
                      width: 64, height: 64,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(6, 182, 212, 0.08)',
                      border: '1px solid rgba(6, 182, 212, 0.15)',
                      color: '#06b6d4',
                      mb: 3,
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, color: 'text.primary' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ═══ MISSION STATEMENT ══════════════════════════════════════════════ */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: '50vh', md: '60vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background */}
        <Box sx={{ position: 'absolute', inset: 0 }}>
          <Image
            src="/images/mobile robot + gripper.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', filter: 'brightness(0.07) saturate(0.3)' }}
          />
        </Box>
        <Box sx={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse at center, rgba(6,182,212,0.04) 0%, transparent 70%),
            linear-gradient(180deg, #0a0a0f 0%, rgba(10,10,15,0.5) 20%, rgba(10,10,15,0.5) 80%, #0a0a0f 100%)
          `,
        }} />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', py: 8 }}>
          <ScrollReveal>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              By 2030, robotics and AI will create over{' '}
              <Box component="span" className="gradient-text">97 million</Box>
              {' '}new jobs globally
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: '#94a3b8',
                fontWeight: 400,
                mb: 5,
                fontSize: { xs: '1rem', md: '1.3rem' },
              }}
            >
              We&apos;re preparing the next generation through hands-on EV3 LEGO Mindstorms
              robotics, coding, and engineering education in Kenya and the US.
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push('/courses')}
              sx={{
                px: 5, py: 1.8,
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                borderRadius: 2,
                '&:hover': {
                  background: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              Explore Our Programs
            </Button>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ═══ ROBOTICS USE CASES ═════════════════════════════════════════════ */}
      <Box sx={{ bgcolor: isDark ? '#0d1117' : '#f8fafc', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography
              variant="overline"
              sx={{
                color: '#06b6d4',
                letterSpacing: '0.3em',
                textAlign: 'center',
                display: 'block',
                mb: 2,
              }}
            >
              ROBOTICS IN THE REAL WORLD
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Where Robotics Is{' '}
              <Box component="span" className="gradient-text">Changing Everything</Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                mb: { xs: 5, md: 8 },
                maxWidth: 700,
                mx: 'auto',
              }}
            >
              The skills students learn with us today are powering the industries of tomorrow.
              From Mars rovers to self-driving cars, robotics is everywhere.
            </Typography>
          </ScrollReveal>

          <Grid container spacing={3}>
            {[
              {
                icon: <Planet weight="duotone" size={36} />,
                title: 'Space Exploration',
                description: 'NASA\'s Mars rovers use the same sensor logic and autonomous navigation principles our students learn with EV3 robots.',
                color: '#8b5cf6',
              },
              {
                icon: <Plant weight="duotone" size={36} />,
                title: 'Agriculture',
                description: 'Robotic harvesters and autonomous drones monitor crops, optimize irrigation, and increase food production worldwide.',
                color: '#10b981',
              },
              {
                icon: <CarProfile weight="duotone" size={36} />,
                title: 'Self-Driving Vehicles',
                description: 'Autonomous cars from Waymo and Tesla rely on sensor fusion, control loops, and decision logic — concepts taught in our curriculum.',
                color: '#3b82f6',
              },
              {
                icon: <Drone weight="duotone" size={36} />,
                title: 'Drones & UAVs',
                description: 'From package delivery to disaster relief, drones use the programming and navigation skills students build in our advanced modules.',
                color: '#f59e0b',
              },
              {
                icon: <Heartbeat weight="duotone" size={36} />,
                title: 'Healthcare',
                description: 'Surgical robots like da Vinci perform precise operations. Robotic exoskeletons help patients walk again — all powered by engineering.',
                color: '#ef4444',
              },
              {
                icon: <Robot weight="duotone" size={36} />,
                title: 'Manufacturing',
                description: 'Boston Dynamics robots and industrial arms automate factories, warehouses, and supply chains with the engineering design process.',
                color: '#06b6d4',
              },
            ].map((useCase, i) => (
              <Grid item xs={12} sm={6} md={4} key={useCase.title}>
                <ScrollReveal delay={i * 0.1}>
                  <Box
                    className="glass-card"
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: `0 16px 40px ${useCase.color}20`,
                      },
                    }}
                  >
                    <Box sx={{
                      width: 72, height: 72,
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${useCase.color}15`,
                      border: `1px solid ${useCase.color}30`,
                      color: useCase.color,
                      mb: 3,
                    }}>
                      {useCase.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1.5 }}>
                      {useCase.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {useCase.description}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ═══ LEARNING PATH (TIMELINE) ══════════════════════════════════════ */}
      <Box sx={{ bgcolor: isDark ? '#0a0a0f' : '#ffffff', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Typography
              variant="overline"
              sx={{
                color: '#06b6d4',
                letterSpacing: '0.3em',
                textAlign: 'center',
                display: 'block',
                mb: 2,
              }}
            >
              LEARNING PATH
            </Typography>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                mb: { xs: 6, md: 10 },
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Your Journey to{' '}
              <Box component="span" className="gradient-text">Mastery</Box>
            </Typography>
          </ScrollReveal>

          {/* Timeline */}
          <Box sx={{ position: 'relative', maxWidth: 900, mx: 'auto' }}>
            {/* Center Line */}
            <Box sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, transparent, rgba(6,182,212,0.3), rgba(6,182,212,0.3), transparent)',
              transform: 'translateX(-50%)',
            }} />

            {learningPath.map((item, i) => (
              <ScrollReveal key={item.level} delay={i * 0.15}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: i % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: { xs: 'stretch', md: 'center' },
                  mb: { xs: 4, md: 8 },
                  gap: { xs: 0, md: 4 },
                }}>
                  {/* Card */}
                  <Box sx={{ flex: 1 }}>
                    <Box
                      className="glass-card"
                      sx={{ p: { xs: 3, md: 4 }, position: 'relative' }}
                    >
                      {/* Level Badge */}
                      <Box sx={{
                        position: 'absolute',
                        top: -16,
                        [i % 2 === 0 ? 'right' : 'left']: { xs: 16, md: 24 },
                        width: 48, height: 48,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                      }}>
                        <Typography sx={{ fontWeight: 800, color: '#0a0a0f', fontSize: '0.9rem' }}>
                          {item.level}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1, mt: 1 }}>
                        <Box sx={{ color: '#06b6d4' }}>{item.icon}</Box>
                        <Typography variant="h5" sx={{
                          fontWeight: 700,
                          background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}>
                          {item.title}
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: 'text.primary', mb: 2, fontWeight: 500 }}>
                        {item.subtitle}
                      </Typography>

                      {item.points.map((point) => (
                        <Box key={point} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                          <Box sx={{
                            width: 6, height: 6, borderRadius: '50%',
                            bgcolor: '#06b6d4', flexShrink: 0,
                          }} />
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {point}
                          </Typography>
                        </Box>
                      ))}

                      {/* Image */}
                      <Box sx={{
                        position: 'relative',
                        width: '100%',
                        height: 180,
                        borderRadius: 2,
                        overflow: 'hidden',
                        mt: 3,
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}>
                        <Image
                          src={item.image}
                          alt={item.subtitle}
                          fill
                          style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Timeline Dot (desktop only) */}
                  <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Box sx={{
                      width: 16, height: 16,
                      borderRadius: '50%',
                      bgcolor: '#06b6d4',
                      border: `3px solid ${isDark ? '#0a0a0f' : '#ffffff'}`,
                      boxShadow: '0 0 12px rgba(6, 182, 212, 0.4)',
                    }} />
                  </Box>

                  {/* Spacer */}
                  <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                </Box>
              </ScrollReveal>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ═══ FINAL CTA ═════════════════════════════════════════════════════ */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
        className="spx-particle-bg"
      >
        {/* Background */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/young-robotics-engineers.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', filter: 'brightness(0.08) saturate(0.3)' }}
          />
        </Box>
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: `
            radial-gradient(ellipse at 50% 30%, rgba(6,182,212,0.06) 0%, transparent 60%),
            linear-gradient(180deg, #0d1117 0%, transparent 20%, transparent 80%, #0a0a0f 100%)
          `,
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontWeight: 900,
                  mb: 3,
                  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                  lineHeight: 1.1,
                  color: 'white',
                  WebkitTextFillColor: 'unset',
                  background: 'none',
                  textShadow: 'none',
                }}
              >
                Ready to Shape the{' '}
                <Box component="span" className="gradient-text">Future</Box>
                ?
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: '#94a3b8',
                  fontWeight: 400,
                  mb: 5,
                  maxWidth: 700,
                  mx: 'auto',
                  fontSize: { xs: '1rem', md: '1.3rem' },
                }}
              >
                Join young innovators in Kenya and the US who are building, coding, and competing with EV3 LEGO Mindstorms robots
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => router.push('/sign-up')}
                  sx={{
                    px: 6, py: 2,
                    fontSize: '1.2rem',
                    background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                    boxShadow: '0 0 30px rgba(6, 182, 212, 0.3)',
                    borderRadius: 2,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #22d3ee, #60a5fa)',
                      boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Start Your Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => router.push('/courses')}
                  sx={{
                    px: 6, py: 2,
                    fontSize: '1.2rem',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.2)',
                    borderWidth: 2,
                    borderRadius: 2,
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    '&:hover': {
                      borderColor: 'rgba(255,255,255,0.5)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderWidth: 2,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Explore Courses
                </Button>
              </Stack>
            </Box>
          </ScrollReveal>

          {/* Feature Cards */}
          <Grid container spacing={3} justifyContent="center">
            {[
              { icon: <CalendarDots weight="duotone" size={36} />, title: 'Flexible Learning', desc: 'Learn through holiday camps, spring/summer break programs, after-school sessions, and online classes' },
              { icon: <ChalkboardTeacher weight="duotone" size={36} />, title: 'Expert Support', desc: 'Get guidance from certified STEM Robotics Trainers with structured, module-based learning' },
              { icon: <RocketLaunch sx={{ fontSize: 36 }} />, title: 'Show & Tell', desc: 'Present your robot builds at the end of each module, showcasing real engineering solutions to parents and peers' },
            ].map((card, i) => (
              <Grid item xs={12} sm={4} key={card.title}>
                <ScrollReveal delay={i * 0.15}>
                  <Box
                    className="glass-card"
                    sx={{
                      p: 4,
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{
                      color: '#06b6d4',
                      mb: 2,
                      width: 72, height: 72,
                      borderRadius: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(6, 182, 212, 0.08)',
                      border: '1px solid rgba(6, 182, 212, 0.15)',
                    }}>
                      {card.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: '#06b6d4', mb: 1.5 }}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {card.desc}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
