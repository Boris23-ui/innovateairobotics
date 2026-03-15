"use client";

import { Box, Container, Typography, Stack, useTheme } from "@mui/material";
import { PrecisionManufacturing, Memory, SmartToy, Code, Hub, Biotech } from "@mui/icons-material";

const partners = [
  { icon: <PrecisionManufacturing sx={{ fontSize: 28 }} />, name: "LEGO Education" },
  { icon: <Memory sx={{ fontSize: 28 }} />, name: "Arduino" },
  { icon: <SmartToy sx={{ fontSize: 28 }} />, name: "VEX Robotics" },
  { icon: <Code sx={{ fontSize: 28 }} />, name: "Python.org" },
  { icon: <Hub sx={{ fontSize: 28 }} />, name: "ROS" },
  { icon: <Biotech sx={{ fontSize: 28 }} />, name: "OpenCV" },
];

export default function TrustedBy() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box sx={{ py: 5, borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}>
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ display: "block", textAlign: "center", mb: 3, color: "text.secondary", letterSpacing: 3 }}
        >
          Powered by industry-leading platforms
        </Typography>
        <Stack
          direction="row"
          spacing={{ xs: 3, md: 6 }}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ gap: { xs: 2, md: 0 } }}
        >
          {partners.map((p) => (
            <Stack
              key={p.name}
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                color: isDark ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.3)",
                transition: "all 0.3s ease",
                "&:hover": { color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)", transform: "scale(1.05)" },
              }}
            >
              {p.icon}
              <Typography variant="body2" fontWeight={600} sx={{ display: { xs: "none", sm: "block" } }}>{p.name}</Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
