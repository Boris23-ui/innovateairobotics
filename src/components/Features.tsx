"use client";

import { Box, Container, Typography, Grid, Paper, useTheme } from "@mui/material";

const features = [
  { icon: "\u{1F916}", title: "Hands-on Learning", description: "Get practical experience with real robotics projects and AI applications." },
  { icon: "\u{1F468}\u{200D}\u{1F3EB}", title: "Expert Instructors", description: "Learn from industry professionals with years of robotics and AI experience." },
  { icon: "\u{1F4DA}", title: "Modern Curriculum", description: "Stay current with the latest technologies and industry best practices." },
  { icon: "\u{1F4A1}", title: "Project-Based", description: "Build a portfolio with real-world projects and practical applications." },
];

export default function Features() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h3" textAlign="center" gutterBottom fontWeight={800} sx={{ mb: 2 }}>
          Why Choose Us
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 8, maxWidth: 540, mx: "auto" }}>
          Everything you need to launch a career in robotics and AI.
        </Typography>
        <Grid container spacing={3}>
          {features.map((f) => (
            <Grid item xs={12} sm={6} md={3} key={f.title}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 5,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                    boxShadow: isDark ? "0 16px 48px rgba(37,144,241,0.12)" : "0 16px 48px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box sx={{ fontSize: "2.5rem", mb: 2 }}>{f.icon}</Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>{f.title}</Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{f.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
