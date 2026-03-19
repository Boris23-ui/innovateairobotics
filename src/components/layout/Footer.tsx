'use client';

import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  EmailOutlined,
  PhoneOutlined,
  LocationOnOutlined,
} from '@mui/icons-material';
import Image from 'next/image';
import { useTheme } from '@mui/material';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Contact', href: '/contact' },
      { text: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Programs',
    links: [
      { text: 'Tiny Tinkerers', href: '/programs/tiny-tinkerers' },
      { text: 'Robot Explorers', href: '/programs/robot-explorers' },
      { text: 'Tech Titans', href: '/programs/tech-titans' },
      { text: 'AI Avengers', href: '/programs/ai-avengers' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
      { text: 'Cookie Policy', href: '/cookies' },
      { text: 'FAQ', href: '/faq' },
    ],
  },
];

const socialLinks = [
  { icon: <Facebook sx={{ fontSize: 18 }} />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <Twitter sx={{ fontSize: 18 }} />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <LinkedIn sx={{ fontSize: 18 }} />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Instagram sx={{ fontSize: 18 }} />, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: isDark ? '#04040a' : '#f8fafc',
        borderTop: `1px solid ${isDark ? 'rgba(6,182,212,0.12)' : 'rgba(0,0,0,0.08)'}`,
        pt: { xs: 8, md: 10 },
        pb: { xs: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow accent */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(6,182,212,0.35), transparent)',
        }}
      />

      <Container maxWidth="lg">
        {/* Top section: logo + links */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' },
            gap: { xs: 6, md: 4 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Brand column */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
              <Image
                src="/logo.png"
                alt="InnovateAI Robotics"
                width={48}
                height={48}
                style={{ objectFit: 'contain' }}
              />
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    color: isDark ? '#f1f5f9' : '#0f172a',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  InnovateAI Robotics
                </Typography>
                <Typography sx={{ fontSize: '0.7rem', color: '#06b6d4', fontWeight: 500, letterSpacing: '0.05em' }}>
                  501(c)(3) NONPROFIT
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{ color: isDark ? '#64748b' : '#475569', fontSize: '0.875rem', lineHeight: 1.75, mb: 3, maxWidth: 300 }}
            >
              Empowering the next generation through AI and robotics education — from Mountain View to Nairobi and beyond.
            </Typography>

            {/* Contact */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { icon: <EmailOutlined sx={{ fontSize: 15 }} />, text: 'info@innovateairobotics.com' },
                { icon: <PhoneOutlined sx={{ fontSize: 15 }} />, text: '+1 (650) 619-4676' },
                { icon: <LocationOnOutlined sx={{ fontSize: 15 }} />, text: 'Mountain View, CA 94043' },
              ].map((item) => (
                <Box key={item.text} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ color: '#06b6d4', display: 'flex', flexShrink: 0 }}>{item.icon}</Box>
                  <Typography sx={{ color: isDark ? '#64748b' : '#475569', fontSize: '0.8rem' }}>{item.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Link columns */}
          {footerLinks.map((section) => (
            <Box key={section.title}>
              <Typography
                sx={{
                  color: isDark ? '#f1f5f9' : '#0f172a',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {section.links.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: isDark ? '#64748b' : '#475569',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s',
                      '&:hover': { color: '#06b6d4' },
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Divider */}
        <Box sx={{ height: '1px', bgcolor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)', mb: 4 }} />

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography sx={{ color: isDark ? '#475569' : '#64748b', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} InnovateAI Robotics Inc. All rights reserved.
            </Typography>
            <Typography sx={{ color: isDark ? '#334155' : '#94a3b8', fontSize: '0.72rem' }}>
              TaxID: 99-2801688 · Donor-supported 501(c)(3) tax-exempt charity
            </Typography>
          </Box>

          {/* Social links */}
          <Box sx={{ display: 'flex', gap: 1 }}>
            {socialLinks.map((social) => (
              <IconButton
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                size="small"
                sx={{
                  width: 34,
                  height: 34,
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                  borderRadius: '8px',
                  color: isDark ? '#475569' : '#64748b',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'rgba(6,182,212,0.4)',
                    color: '#06b6d4',
                    bgcolor: 'rgba(6,182,212,0.06)',
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
