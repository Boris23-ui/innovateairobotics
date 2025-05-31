'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material';

export default function Footer() {
  const theme = useTheme();

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
      title: 'Resources',
      links: [
        { text: 'Programs', href: '/programs' },
        { text: 'Curriculum', href: '/curriculum' },
        { text: 'Resources', href: '/resources' },
        { text: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
        { text: 'Cookie Policy', href: '/cookies' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com' },
    { icon: <Twitter />, href: 'https://twitter.com' },
    { icon: <LinkedIn />, href: 'https://linkedin.com' },
    { icon: <Instagram />, href: 'https://instagram.com' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              InnovateAI Robotics
            </Typography>
            <Box
              component="img"
              src="/images/InnovateAI Robotics Inc. logo.png"
              alt="InnovateAI Robotics Logo"
              sx={{ height: 80, mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary" paragraph>
              Empowering the next generation through AI and robotics education
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              InnovateAI Robotics is a donor-supported 501(c)(3) tax-exempt charity (TaxID: 99-2801688)
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  info@innovateairobotics.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Phone sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  +1 (650) 619-4676
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOn sx={{ mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  837 Reinert Rd, Mountain View, CA 94043 United States
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={6} md={2} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.text} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      color="text.secondary"
                      underline="hover"
                      sx={{ textDecoration: 'none' }}
                    >
                      {link.text}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Social Links and Copyright */}
        <Box
          sx={{
            mt: 5,
            pt: 3,
            borderTop: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} InnovateAI Robotics. All rights reserved.
          </Typography>
          <Box>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
                size="small"
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