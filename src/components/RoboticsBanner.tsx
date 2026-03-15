"use client";

import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { SmartToy, School, EmojiEvents, Public } from "@mui/icons-material";

const stats = [
  { icon: <SmartToy />, value: "50+", label: "Robot Projects", color: "#2590f1" },
  { icon: <School />, value: "10K+", label: "Students Taught", color: "#22c55e" },
  { icon: <EmojiEvents />, value: "15+", label: "Competitions Won", color: "#f59e0b" },
  { icon: <Public />, value: "3", label: "Countries", color: "#9187ff" },
];

export default function RoboticsBanner() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        py: 6,
        background: isDark
          ? "linear-gradient(135deg, #141428 0%, #1a1a35 100%)"
          : "linear-gradient(135deg, #eef0ff 0%, #f7f7ff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle circuit lines in bg */}
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "repeating-linear-gradient(90deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 60px)" }} />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={6} sm={3} key={stat.label}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 3,
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-4px)", borderColor: stat.color },
                }}
              >
                <Box sx={{ color: stat.color, mb: 1, "& .MuiSvgIcon-root": { fontSize: 32 } }}>{stat.icon}</Box>
                <Typography variant="h4" fontWeight={800} sx={{ color: stat.color, mb: 0.5 }}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>{stat.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
