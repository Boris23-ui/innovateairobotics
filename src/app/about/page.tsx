'use client';

import { useRef } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import {
  LightbulbFilament,
  UsersThree,
  GlobeHemisphereWest,
  ChartLineUp,
} from '@phosphor-icons/react';
import { useTheme } from '@mui/material';

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return <div ref={ref}>{children}</div>;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const values = [
    {
      icon: <LightbulbFilament weight="duotone" size={32} />,
      title: 'Innovation',
      description: 'We use EV3 LEGO Mindstorms and the Engineering Design Process to inspire students to envision, engineer, and make things work.',
    },
    {
      icon: <UsersThree weight="duotone" size={32} />,
      title: 'Accessibility',
      description: 'We believe every child deserves access to quality STEM robotics education, operating in Kenya and the United States.',
    },
    {
      icon: <GlobeHemisphereWest weight="duotone" size={32} />,
      title: 'Community',
      description: 'We build communities of learners, certified STEM trainers, and innovators united by a passion for robotics and preparing for the 4th Industrial Revolution.',
    },
    {
      icon: <ChartLineUp weight="duotone" size={32} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in curriculum design — from simple machines to data analytics — with structured modules and Show & Tell presentations.',
    },
  ];

  return (
    <Box>
      {/* ── HERO SECTION ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: '50vh', md: '60vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.12), transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <ScrollReveal>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/logo_new.jpg"
                alt="InnovateAI Robotics Logo"
                width={120}
                height={120}
                style={{ objectFit: 'contain', borderRadius: '50%' }}
              />
            </Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.8rem' },
                fontWeight: 900,
                mb: 2,
                background: 'linear-gradient(135deg, #7dd3fc, #06b6d4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
              }}
            >
              About InnovateAI Robotics
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
                fontSize: { xs: '1rem', md: '1.3rem' },
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Envision it. Engineer it. Make It Work. — K-12 STEM robotics education from Mountain View to Nairobi and beyond.
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ── MISSION SECTION ── */}
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
              <Box>
                <Typography
                  sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1 }}
                >
                  Our Mission
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 3, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                  Preparing Students for the 4th Industrial Revolution
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '1rem' }}>
                  Integrating robotics and AI into school curricula is essential for preparing students for the 4th Industrial Revolution. Using EV3 LEGO Mindstorms and a proven K-12 curriculum, we equip the next generation with vital engineering, coding, and problem-solving skills.
                </Typography>
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1rem' }}>
                  InnovateAI Robotics is a donor-supported 501(c)(3) tax-exempt nonprofit (TaxID: 99-2801688) dedicated to advancing K-12 STEM robotics education. Through hands-on classes, teacher training and certification, and preparation for FLL and WRO competitions, we foster innovation, teamwork, and the Engineering Design Process in learners of all ages.
                </Typography>
              </Box>
              <Box sx={{ position: 'relative', height: { xs: 300, md: 400 }, borderRadius: 4, overflow: 'hidden' }}>
                <Image
                  src="/images/kids_designing_simple_machines.jpg"
                  alt="Students designing robots"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Box>
          </ScrollReveal>
        </Container>
      </Box>

      {/* ── VALUES SECTION ── */}
      <Box sx={{ bgcolor: isDark ? '#0a0a0f' : '#fff', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                Our Values
              </Typography>
              <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto', fontSize: '1.05rem' }}>
                The principles that guide everything we do.
              </Typography>
            </Box>
          </ScrollReveal>
          <Grid container spacing={3}>
            {values.map((val, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <ScrollReveal delay={idx * 0.1}>
                  <Box
                    sx={{
                      bgcolor: 'rgba(6, 182, 212, 0.08)',
                      border: '0.8px solid rgba(6, 182, 212, 0.2)',
                      borderRadius: '24px',
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 30px rgba(6, 182, 212, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        bgcolor: 'rgba(6, 182, 212, 0.1)',
                        border: '1px solid rgba(6, 182, 212, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#06b6d4',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {val.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', mb: 1 }}>
                      {val.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {val.description}
                    </Typography>
                  </Box>
                </ScrollReveal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── LEADERSHIP SECTION ── */}
      <Box sx={{ bgcolor: isDark ? '#0d1117' : '#f8fafc', py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <ScrollReveal>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.3em', mb: 1 }}
              >
                Our Team
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, color: 'text.primary', fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                Leadership
              </Typography>
            </Box>
          </ScrollReveal>

          <Grid container spacing={4}>
            {/* John Williams */}
            <Grid item xs={12} md={6}>
              <ScrollReveal delay={0}>
                <Box
                  sx={{
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: '24px',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    transition: 'border-color 0.3s',
                    '&:hover': { borderColor: 'rgba(6, 182, 212, 0.3)', boxShadow: isDark ? '0 8px 30px rgba(6,182,212,0.1)' : '0 8px 30px rgba(0,0,0,0.08)' },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 160,
                        height: 160,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid rgba(6, 182, 212, 0.4)',
                        mb: 2,
                        position: 'relative',
                      }}
                    >
                      <Image
                        src="/images/John_Sr.png"
                        alt="John H. Williams"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      John H. Williams
                    </Typography>
                    <Typography sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.95rem' }}>
                      President / Founder
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '0.9rem' }}>
                    His career showcases a blend of technical expertise and visionary leadership. He began as a programmer at Los Angeles County Healthcare, transitioned to Mattel Toys as a systems analyst, and tackled high-impact research at The Rand Corporation.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '0.9rem' }}>
                    At Atlantic Richfield Company (ARCO), he oversaw user-centric systems for the Products Division. In Silicon Valley, John embraced the startup environment with roles at AGA and Securus, and served as VP of Operations at Tsquared Robotics LLC.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.9rem' }}>
                    This experience led him to found Innovate AI Robotics Inc., a nonprofit dedicated to advancing robotics education. John received his bachelor's degree from California Lutheran University in Business Administration/Information Systems.
                  </Typography>
                </Box>
              </ScrollReveal>
            </Grid>

            {/* Basil Boris */}
            <Grid item xs={12} md={6}>
              <ScrollReveal delay={0.15}>
                <Box
                  sx={{
                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: '24px',
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    transition: 'border-color 0.3s',
                    '&:hover': { borderColor: 'rgba(6, 182, 212, 0.3)', boxShadow: isDark ? '0 8px 30px rgba(6,182,212,0.1)' : '0 8px 30px rgba(0,0,0,0.08)' },
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                    <Box
                      sx={{
                        width: 160,
                        height: 160,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '3px solid rgba(6, 182, 212, 0.4)',
                        mb: 2,
                        position: 'relative',
                      }}
                    >
                      <Image
                        src="/images/BasilBoris-about.png"
                        alt="Basil K. Boris"
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      Basil K. Boris
                    </Typography>
                    <Typography sx={{ color: '#06b6d4', fontWeight: 600, fontSize: '0.95rem' }}>
                      VP Operations / CTO
                    </Typography>
                  </Box>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '0.9rem' }}>
                    His career reflects a blend of technical expertise and a commitment to empowering learners. As CIO at Tsquared Robotics, he designed advanced robotics systems for educational applications while integrating Learning Management Systems to enhance global educational services.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2, fontSize: '0.9rem' }}>
                    His passion for education is evident in the engaging robotics workshops and training sessions he has designed and delivered for students, educators, and industry professionals, both in-person and virtually.
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '0.9rem' }}>
                    He is now building the all-in-one InnovateAI Robotics standalone app that will transform how robotics education is offered to students, teachers, organizations, and leading institutions. Boris is currently pursuing his Bachelor's degree in Computer Science.
                  </Typography>
                </Box>
              </ScrollReveal>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── CAMPUSES CTA ── */}
      <Box
        sx={{
          background: 'linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)',
          py: { xs: 6, md: 8 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <ScrollReveal>
            <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', mb: 2, fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Join Our Growing Community
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 2, fontSize: '1.1rem' }}>
              With campuses in Mountain View, Palo Alto, and Nairobi, we're building a global movement in robotics education.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              InnovateAI Robotics Inc. — 501(c)(3) Tax-Exempt Charity (TaxID: 99-2801688)
            </Typography>
          </ScrollReveal>
        </Container>
      </Box>
    </Box>
  );
}
