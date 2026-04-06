'use client';

import { useRef } from 'react';
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Accordion, AccordionSummary, AccordionDetails,
} from '@mui/material';
import {
  ExpandMore, ArrowForward, School, CheckCircle,
  Engineering, Science, Code, Psychology,
  Build, Sensors, Memory, SmartToy,
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

export interface CurriculumModule {
  title: string;
  lessons: { number: string; title: string }[];
}

export interface CurriculumLayoutProps {
  title: string;
  subtitle: string;
  gradeRange: string;
  accentColor: string;
  accentGradient: string;
  heroGradient: string;
  description: string;
  overview: string;
  skillsGained: string[];
  modules: CurriculumModule[];
  programLink: string;
  programName: string;
}

const moduleIcons = [
  <Engineering key="0" sx={{ fontSize: 28 }} />,
  <Build key="1" sx={{ fontSize: 28 }} />,
  <Science key="2" sx={{ fontSize: 28 }} />,
  <Sensors key="3" sx={{ fontSize: 28 }} />,
  <Code key="4" sx={{ fontSize: 28 }} />,
  <Psychology key="5" sx={{ fontSize: 28 }} />,
];

export function CurriculumLayout({
  title,
  subtitle,
  gradeRange,
  accentColor,
  accentGradient,
  heroGradient,
  description,
  overview,
  skillsGained,
  modules,
  programLink,
  programName,
}: CurriculumLayoutProps) {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* HERO */}
      <Box
        sx={{
          background: heroGradient,
          py: { xs: 10, md: 16 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '20%',
            right: '5%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accentColor}25, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="lg">
          <ScrollReveal>
            <Chip
              label={gradeRange}
              sx={{
                bgcolor: `${accentColor}20`,
                color: accentColor,
                fontWeight: 700,
                mb: 3,
                border: `1px solid ${accentColor}40`,
              }}
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
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                maxWidth: 600,
                mb: 3,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                maxWidth: 500,
                fontSize: '1rem',
                fontStyle: 'italic',
              }}
            >
              {description}
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>

      {/* OVERVIEW + SKILLS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? '#0a0a0f' : '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <ScrollReveal>
                <Typography
                  variant="overline"
                  sx={{ color: accentColor, letterSpacing: '0.2em', mb: 1, display: 'block' }}
                >
                  CURRICULUM OVERVIEW
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
                >
                  What Students Will Learn
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.05rem' }}>
                  {overview}
                </Typography>
              </ScrollReveal>
            </Grid>
            <Grid item xs={12} md={5}>
              <ScrollReveal delay={0.15}>
                <Box
                  sx={{
                    bgcolor: `${accentColor}08`,
                    border: `1px solid ${accentColor}25`,
                    borderRadius: 4,
                    p: 4,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: accentColor }}>
                    Skills Gained
                  </Typography>
                  <Stack spacing={2}>
                    {skillsGained.map((skill) => (
                      <Stack key={skill} direction="row" spacing={1.5} alignItems="flex-start">
                        <CheckCircle sx={{ color: accentColor, fontSize: 20, mt: 0.3, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                          {skill}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* MODULES */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? '#0d1117' : '#f8fafc' }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography variant="overline" sx={{ color: accentColor, letterSpacing: '0.2em' }}>
                {modules.length} MODULES · {modules.reduce((sum, m) => sum + m.lessons.length, 0)} LESSONS
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, mt: 1, fontSize: { xs: '1.8rem', md: '2.4rem' } }}
              >
                Complete Curriculum Breakdown
              </Typography>
            </Box>
          </ScrollReveal>

          <Grid container spacing={4}>
            {modules.map((module, idx) => (
              <Grid item xs={12} md={6} key={module.title}>
                <ScrollReveal delay={idx * 0.1}>
                  <Card
                    elevation={0}
                    sx={{
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb'}`,
                      borderRadius: 4,
                      height: '100%',
                      transition: 'all 0.3s',
                      '&:hover': {
                        borderColor: `${accentColor}50`,
                        boxShadow: `0 8px 30px ${accentColor}15`,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Box
                          sx={{
                            width: 52,
                            height: 52,
                            borderRadius: 3,
                            background: accentGradient,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                          }}
                        >
                          {moduleIcons[idx % moduleIcons.length]}
                        </Box>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                            {module.title}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {module.lessons.length} lessons
                          </Typography>
                        </Box>
                      </Box>

                      <Stack spacing={1}>
                        {module.lessons.map((lesson) => (
                          <Box
                            key={lesson.number}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 1.5,
                              py: 1,
                              px: 1.5,
                              borderRadius: 2,
                              transition: 'background 0.2s',
                              '&:hover': { bgcolor: `${accentColor}08` },
                            }}
                          >
                            <Chip
                              label={lesson.number}
                              size="small"
                              sx={{
                                bgcolor: `${accentColor}15`,
                                color: accentColor,
                                fontWeight: 700,
                                fontSize: '0.7rem',
                                height: 24,
                                minWidth: 36,
                                flexShrink: 0,
                                mt: 0.2,
                              }}
                            />
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                              {lesson.title}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          background: accentGradient,
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <ScrollReveal>
            <SmartToy sx={{ fontSize: 56, color: 'rgba(255,255,255,0.8)', mb: 2 }} />
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: 'white', mb: 2, fontSize: { xs: '1.8rem', md: '2.5rem' } }}
            >
              Ready to Start This Journey?
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 5, fontSize: '1.1rem' }}>
              Classes launching Summer 2026 in Palo Alto. Sign up to be notified when enrollment opens.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => router.push('/contact')}
                sx={{
                  bgcolor: 'white',
                  color: accentColor,
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
                onClick={() => router.push(programLink)}
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.5)',
                  borderWidth: 2,
                  fontWeight: 700,
                  px: 5,
                  py: 2,
                  borderRadius: 3,
                  fontSize: '1.05rem',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                    borderWidth: 2,
                  },
                }}
              >
                View {programName}
              </Button>
            </Stack>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
}
