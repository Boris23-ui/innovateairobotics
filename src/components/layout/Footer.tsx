"use client";

import { Box, Container, Grid, Typography, Link, IconButton, Stack, useTheme } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram, Email, Phone, LocationOn } from "@mui/icons-material";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const footerLinks = [
    { title: "Company", links: [{ text: "About Us", href: "/about" }, { text: "Contact", href: "/contact" }, { text: "Programs", href: "/programs" }] },
    { title: "Resources", links: [{ text: "Pricing", href: "/pricing" }, { text: "Curriculum", href: "/programs" }, { text: "FAQ", href: "/pricing" }] },
    { title: "Legal", links: [{ text: "Privacy Policy", href: "/privacy" }, { text: "Terms of Service", href: "/terms" }] },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: isDark ? "#0a0a16" : "#f7f7ff",
        py: 8,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography variant="h6" fontWeight={800} gutterBottom>InnovateAI Robotics</Typography>
            <Box component="img" src="/images/InnovateAI Robotics Inc. logo.png" alt="Logo" sx={{ height: 64, mb: 2, opacity: 0.9 }} />
            <Typography variant="body2" color="text.secondary" paragraph>
              Empowering the next generation through AI and robotics education.
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
              501(c)(3) tax-exempt charity (TaxID: 99-2801688)
            </Typography>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Email sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">info@innovateairobotics.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <Phone sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">+1 (650) 619-4676</Typography>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOn sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">837 Reinert Rd, Mountain View, CA 94043</Typography>
              </Stack>
            </Stack>
          </Grid>
          {footerLinks.map((section) => (
            <Grid item xs={6} sm={4} md={2} key={section.title}>
              <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, mb: 2, display: "block" }}>{section.title}</Typography>
              {section.links.map((link) => (
                <Link key={link.text} href={link.href} color="text.secondary" underline="hover" sx={{ display: "block", mb: 1, fontSize: "0.875rem", transition: "color 0.2s", "&:hover": { color: "primary.main" } }}>
                  {link.text}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 6, pt: 4, borderTop: "1px solid", borderColor: "divider", display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <Typography variant="caption" color="text.secondary">
            © {2025} InnovateAI Robotics. All rights reserved.
          </Typography>
          <Box>
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, i) => (
              <IconButton key={i} size="small" sx={{ color: "text.secondary", mx: 0.5, "&:hover": { color: "primary.main" } }}>
                <Icon sx={{ fontSize: 18 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
