'use client';

import { Box, Container, Typography, Chip, Button } from '@mui/material';
import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowForward,
  CheckCircle,
  Code,
  Build,
  Person,
  EmojiEvents,
  Science,
  Psychology,
  Devices,
  SmartToy,
} from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material';

// Icon map for curriculum cards
const iconMap: Record<string, ReactNode> = {
  code: <Code sx={{ fontSize: 28 }} />,
  build: <Build sx={{ fontSize: 28 }} />,
  person: <Person sx={{ fontSize: 28 }} />,
  science: <Science sx={{ fontSize: 28 }} />,
  psychology: <Psychology sx={{ fontSize: 28 }} />,
  devices: <Devices sx={{ fontSize: 28 }} />,
  smarttoy: <SmartToy sx={{ fontSize: 28 }} />,
};

interface CurriculumCard {
  icon: string;
  title: string;
  items: string[];
}

interface ProgramDetail {
  label: string;
  value: string;
}

interface ProgramLayoutProps {
  title: string;
  subtitle: string;
  ageRange: string;
  ageBadge: string;
  accentColor: string;
  accentGradient: string;
  heroGradient: string;
  description: string;
  introTitle: string;
  introText: string[];
  introHighlights: string[];
  introImage: string;
  curriculum: CurriculumCard[];
  sampleProjects: string[];
  programDetails: ProgramDetail[];
  detailsImage: string;
  ctaTitle: string;
  ctaSubtitle: string;
  children?: ReactNode;
}

function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
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

export const ProgramLayout = ({
  title,
  subtitle,
  ageRange,
  ageBadge,
  accentColor,
  accentGradient,
  heroGradient,
  description,
  introTitle,
  introText,
  introHighlights,
  introImage,
  curriculum,
  sampleProjects,
  programDetails,
  detailsImage,
  ctaTitle,
  ctaSubtitle,
}: ProgramLayoutProps) => {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box>
      {/* ── HERO SECTION ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '60vh', md: '70vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: heroGradient,
          overflow: 'hidden',
          pt: { xs: 4, md: 0 },
          pb: { xs: 6, md: 0 },
        }}
      >
        {/* Decorative glow */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            height: '60%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accentColor}22, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <Chip
              label={ageBadge}
              sx={{
                bgcolor: accentColor,
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.9rem',
                px: 2,
                py: 0.5,
                mb: 3,
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.8rem', md: '4rem' },
                fontWeight: 900,
                mb: 2,
                background: 'linear-gradient(135deg, #7dd3fc, #38bdf8)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 600,
                fontStyle: 'italic',
                mb: 4,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
              }}
            >
              {subtitle}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => router.push('/contact')}
                sx={{
                  bgcolor: accentColor,
                  color: '#fff',
                  borderRadius: '36px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: accentColor,
                    filter: 'brightness(1.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Enroll Now
              </Button>
              <Button
                variant="outlined"
                onClick={() => router.push('/programs')}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  borderWidth: '1.6px',
                  borderRadius: '36px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: '1.6px',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View All Programs
              </Button>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ── INTRODUCTION SECTION ── */}
      <Box sx={{ bgcolor: isDark ? '#111827' : '#f3f4f6', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 4, md: 6 },
                alignItems: 'center',
              }}
            >
              <Box sx={{ position: 'relative', height: { xs: 300, md: 480 }, borderRadius: 4, overflow: 'hidden' }}>
                <Image src={introImage} alt={title} fill style={{ objectFit: 'cover' }} />
              </Box>
              <Box>
                <Typography
                  sx={{ color: accentColor, fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1 }}
                >
                  Hands-On Robotics
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                  {introTitle}
                </Typography>
                {introText.map((para, i) => (
                  <Typography key={i} sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1rem' }}>
                    {para}
                  </Typography>
                ))}
                <Box sx={{ mt: 3 }}>
                  {introHighlights.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                      <CheckCircle sx={{ color: accentColor, fontSize: 22, mt: 0.2 }} />
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ── CURRICULUM SECTION ── */}
      <Box sx={{ bgcolor: isDark ? '#0a0a0f' : '#fff', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                What You Will Learn
              </Typography>
              <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontSize: '1.05rem' }}>
                {description}
              </Typography>
            </Box>
          </ScrollReveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {curriculum.map((card, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <Box
                  sx={{
                    bgcolor: `${accentColor}1a`,
                    border: `0.8px solid ${accentColor}33`,
                    borderRadius: '24px',
                    p: 4,
                    height: '100%',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 8px 30px ${accentColor}22`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      bgcolor: `${accentColor}22`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: accentColor,
                      mb: 2.5,
                    }}
                  >
                    {iconMap[card.icon] || <Code sx={{ fontSize: 28 }} />}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 2 }}>
                    {card.title}
                  </Typography>
                  {card.items.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.2 }}>
                      <CheckCircle sx={{ color: accentColor, fontSize: 18, mt: 0.3 }} />
                      <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </ScrollReveal>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SAMPLE PROJECTS + PROGRAM DETAILS ── */}
      <Box sx={{ bgcolor: isDark ? '#0d1117' : '#f9fafb', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* Sample Projects */}
            <ScrollReveal>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 1, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                Sample Projects
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 3 }}>
                Students complete multiple hands-on projects each semester, each one building on the last.
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1.5,
                }}
              >
                {sampleProjects.map((project, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      bgcolor: `${accentColor}14`,
                      borderRadius: '36px',
                      px: 2,
                      py: 1.2,
                    }}
                  >
                    <EmojiEvents sx={{ color: accentColor, fontSize: 20 }} />
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.85rem', fontWeight: 500 }}>{project}</Typography>
                  </Box>
                ))}
              </Box>
            </ScrollReveal>

            {/* Program Details */}
            <ScrollReveal delay={0.15}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                Program Details
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 1.5,
                  mb: 3,
                }}
              >
                {programDetails.map((detail, i) => (
                  <Box
                    key={i}
                    sx={{
                      bgcolor: isDark ? '#1f2937' : '#e5e7eb',
                      borderRadius: '36px',
                      px: 2.5,
                      py: 1.5,
                      textAlign: 'center',
                    }}
                  >
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      {detail.label}
                    </Typography>
                    <Typography sx={{ color: 'text.primary', fontSize: '0.9rem', fontWeight: 600 }}>
                      {detail.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ position: 'relative', height: { xs: 200, md: 260 }, borderRadius: 4, overflow: 'hidden' }}>
                <Image src={detailsImage} alt="Students at work" fill style={{ objectFit: 'cover' }} />
              </Box>
            </ScrollReveal>
          </Box>
        </Container>
      </Box>

      {/* ── CTA SECTION ── */}
      <Box
        sx={{
          background: heroGradient,
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <ScrollReveal>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              {ctaTitle}
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, fontSize: '1.1rem' }}>
              {ctaSubtitle}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => router.push('/contact')}
                sx={{
                  bgcolor: accentColor,
                  color: '#fff',
                  borderRadius: '36px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: accentColor,
                    filter: 'brightness(1.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Enroll Now
              </Button>
              <Button
                variant="outlined"
                onClick={() => router.push('/contact')}
                sx={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.4)',
                  borderWidth: '1.6px',
                  borderRadius: '36px',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'rgba(255,255,255,0.7)',
                    borderWidth: '1.6px',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Schedule a Free Trial Class
              </Button>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
};
