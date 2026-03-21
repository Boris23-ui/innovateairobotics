'use client';

import { useRef } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack,
} from '@mui/material';
import {
  ArrowForward, School, Engineering, Code, Psychology, Build,
} from '@mui/icons-material';
import { motion, useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material';

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

const curricula = [
  {
    title: 'Lower Elementary',
    grades: 'Grades K-3 · Ages 5-8',
    description: 'Hands-on mechanical engineering with LEGO — gear trains, pulleys, pistons, CAM systems, and worm gears. 6 modules with 24 lessons.',
    icon: <Build sx={{ fontSize: 36 }} />,
    color: '#10b981',
    href: '/programs/curriculum/lower-elementary',
    topics: ['Gear Trains', 'Pulleys', 'Pistons', 'CAM Systems', 'Worm Gears', 'Transmission'],
    modules: 6,
    lessons: 24,
  },
  {
    title: 'Upper Elementary',
    grades: 'Grades 4-6 · Ages 9-12',
    description: 'From gear ratios to EV3 programming — locomotion, grippers, sensor integration, and the basics of Scratch programming. 6 modules with 24 lessons.',
    icon: <Engineering sx={{ fontSize: 36 }} />,
    color: '#3b82f6',
    href: '/programs/curriculum/upper-elementary',
    topics: ['Gear Ratios', 'Locomotion', 'Grippers', 'EV3 Programming', 'Sensors', 'Steering vs. Tank'],
    modules: 6,
    lessons: 24,
  },
  {
    title: 'Junior High',
    grades: 'Grades 7-9 · Ages 12-15',
    description: 'Sensor mastery with open/closed-loop control, mathematical modeling, and building autonomous robot cars. 6 modules with 24 lessons.',
    icon: <Code sx={{ fontSize: 36 }} />,
    color: '#8b5cf6',
    href: '/programs/curriculum/junior-high',
    topics: ['Control Systems', 'Color Sensors', 'Ultrasonic Sensors', 'Math Models', 'Anti-Collision', 'Autonomous Cars'],
    modules: 6,
    lessons: 24,
  },
  {
    title: 'Senior High',
    grades: 'Grades 10-12 · Ages 15-18',
    description: 'Data logging, regression analysis, decision logic, and advanced autonomous navigation — preparing for real-world engineering. 6 modules with 24 lessons.',
    icon: <Psychology sx={{ fontSize: 36 }} />,
    color: '#f59e0b',
    href: '/programs/curriculum/senior-high',
    topics: ['Data Logging', 'Regression Analysis', 'OR Gates', 'Trigger Points', 'Cliff Avoidance', 'Mineral Search'],
    modules: 6,
    lessons: 24,
  },
];

export default function CurriculumOverviewPage() {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          py: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(16,185,129,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.1) 0%, transparent 50%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <Chip
              label="4 Levels · 24 Modules · 96 Lessons"
              sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', fontWeight: 600, mb: 3, border: '1px solid rgba(255,255,255,0.2)' }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 900,
                color: 'white',
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              Our{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 33%, #8b5cf6 66%, #f59e0b 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Curriculum
              </Box>
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 600, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
            >
              A comprehensive K-12 STEM robotics curriculum built on EV3 LEGO Mindstorms — from simple machines to data-driven autonomous systems.
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>

      {/* STATS BAR */}
      <Box sx={{ py: 4, bgcolor: isDark ? '#0d1117' : '#f8fafc', borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : '#e5e7eb'}` }}>
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center" textAlign="center">
            {[
              { value: '4', label: 'Grade Levels' },
              { value: '24', label: 'Modules' },
              { value: '96', label: 'Lessons' },
              { value: '24', label: 'Show & Tell Sessions' },
            ].map((stat) => (
              <Grid item xs={6} sm={3} key={stat.label}>
                <Typography variant="h3" sx={{ fontWeight: 900, background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem' }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CURRICULUM CARDS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? '#0a0a0f' : '#ffffff' }}>
        <Container maxWidth="lg">
          <Stack spacing={5}>
            {curricula.map((curr, idx) => (
              <ScrollReveal key={curr.title} delay={idx * 0.1}>
                <Card
                  elevation={0}
                  sx={{
                    border: `2px solid ${curr.color}30`,
                    borderRadius: 4,
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: `0 16px 40px ${curr.color}20`,
                      borderColor: `${curr.color}60`,
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={12} md={8}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: 3,
                              background: `linear-gradient(135deg, ${curr.color}, ${curr.color}cc)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                            }}
                          >
                            {curr.icon}
                          </Box>
                          <Box>
                            <Typography variant="h4" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                              {curr.title}
                            </Typography>
                            <Chip
                              label={curr.grades}
                              size="small"
                              sx={{ bgcolor: `${curr.color}15`, color: curr.color, fontWeight: 600, mt: 0.5 }}
                            />
                          </Box>
                        </Box>

                        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3, fontSize: '1.05rem' }}>
                          {curr.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {curr.topics.map((topic) => (
                            <Chip
                              key={topic}
                              label={topic}
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: `${curr.color}40`,
                                color: curr.color,
                                fontWeight: 600,
                                fontSize: '0.75rem',
                              }}
                            />
                          ))}
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="h5" sx={{ fontWeight: 800, color: curr.color }}>
                            {curr.modules} Modules
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {curr.lessons} lessons with Show & Tell
                          </Typography>
                        </Box>
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          onClick={() => router.push(curr.href)}
                          sx={{
                            bgcolor: curr.color,
                            color: curr.color === '#f59e0b' ? 'black' : 'white',
                            fontWeight: 700,
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            fontSize: '1rem',
                            '&:hover': { bgcolor: curr.color, filter: 'brightness(0.9)' },
                          }}
                        >
                          View Curriculum
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ background: 'linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)', py: { xs: 8, md: 12 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <ScrollReveal>
            <School sx={{ fontSize: 56, color: 'rgba(255,255,255,0.8)', mb: 2 }} />
            <Typography variant="h3" sx={{ fontWeight: 800, color: 'white', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
              Launching Summer 2026 in Palo Alto
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 5, fontSize: '1.1rem', maxWidth: 500, mx: 'auto' }}>
              Be the first to know when enrollment opens. Sign up to get notified about class schedules and pricing.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => router.push('/contact')}
                sx={{
                  bgcolor: 'white',
                  color: '#2563eb',
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  borderRadius: 3,
                  fontSize: '1.05rem',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                }}
              >
                Get Notified
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => router.push('/programs')}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.5)',
                  borderWidth: 2,
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  borderRadius: 3,
                  fontSize: '1.05rem',
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)', borderWidth: 2 },
                }}
              >
                View All Programs
              </Button>
            </Stack>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
}
