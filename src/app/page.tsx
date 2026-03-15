"use client";

import Image from "next/image";
import { Container, Typography, Box, Button, Stack, Paper, Grid, useTheme } from "@mui/material";
import { ArrowForward, School } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import Features from "@/components/Features";
import CircuitPattern from "@/components/CircuitPattern";
import TrustedBy from "@/components/TrustedBy";
import RoboticsBanner from "@/components/RoboticsBanner";

export default function LandingPage() {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          pt: { xs: 10, md: 16 },
          pb: { xs: 8, md: 14 },
          background: isDark
            ? "linear-gradient(180deg, #0f0f1a 0%, #141428 100%)"
            : "linear-gradient(180deg, #f7f7ff 0%, #eef0ff 100%)",
        }}
      >
        {/* Circuit board pattern overlay */}
        <CircuitPattern opacity={isDark ? 0.06 : 0.04} />
        {/* Ambient glow */}
        <Box sx={{ position: "absolute", top: "-20%", left: "10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,144,241,0.12), transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "-10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(145,135,255,0.1), transparent 70%)", pointerEvents: "none" }} />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.2rem", md: "3.8rem" },
                  fontWeight: 800,
                  lineHeight: 1.08,
                  mb: 3,
                  color: "text.primary",
                }}
              >
                Empowering the Next Generation of{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #2590f1, #9187ff)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Robotics Engineers
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 5, maxWidth: 500, fontSize: "1.15rem", lineHeight: 1.7, color: "text.secondary" }}
              >
                Hands-on learning experiences that combine robotics, AI, and coding to inspire creativity and innovation in young minds.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => router.push("/programs")}
                  sx={{ px: 4, py: 1.8, fontSize: "1.05rem", borderRadius: 3 }}
                >
                  Start Learning
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<School />}
                  onClick={() => router.push("/programs")}
                  sx={{ px: 4, py: 1.8, fontSize: "1.05rem", borderRadius: 3, borderWidth: 2, "&:hover": { borderWidth: 2 } }}
                >
                  Explore Programs
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 320, md: 480 },
                  borderRadius: 5,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  boxShadow: isDark ? "0 32px 80px rgba(0,0,0,0.5)" : "0 32px 80px rgba(0,0,0,0.1)",
                }}
              >
                <Image src="/images/building_drones.jpg" alt="Students building drones" fill style={{ objectFit: "cover" }} priority />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Trusted By / Tech Platforms */}
      <TrustedBy />

      {/* Gallery */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: isDark ? "#0f0f1a" : "#f7f7ff" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight={800} gutterBottom sx={{ mb: 2 }}>
            Inspiring Young Minds Worldwide
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 8, maxWidth: 640, mx: "auto", fontSize: "1.1rem" }}>
            From Mountain View to Nairobi, we are building the next generation of innovators through hands-on robotics education.
          </Typography>
          <Grid container spacing={3}>
            {[
              { src: "/images/Mountain-view-classes-4.jpg", alt: "Mountain View", label: "Mountain View Campus" },
              { src: "/images/Nairobi-classes-7.jpg", alt: "Nairobi", label: "Nairobi Campus" },
              { src: "/images/Palo-alto-classes-5.jpg", alt: "Palo Alto", label: "Palo Alto Campus" },
            ].map((img) => (
              <Grid item xs={12} sm={4} key={img.src}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 240, md: 340 },
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-4px)", boxShadow: isDark ? "0 20px 60px rgba(0,0,0,0.4)" : "0 20px 60px rgba(0,0,0,0.08)" },
                  }}
                >
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: "cover" }} />
                  <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2.5, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <Typography variant="subtitle2" sx={{ color: "white", fontWeight: 600 }}>{img.label}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features */}
      <Features />

      {/* Stats + CTA */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 16 },
          overflow: "hidden",
          background: isDark
            ? "linear-gradient(135deg, #141428 0%, #1a1a35 100%)"
            : "linear-gradient(135deg, #eef0ff 0%, #f7f7ff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: { xs: 300, md: 440 }, borderRadius: 5, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
                <Image src="/images/mobile robot + gripper.jpg" alt="Mobile robot" fill style={{ objectFit: "cover" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={800} gutterBottom>
                <Box component="span" sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Build the Future
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}>
                By 2030, robotics and AI will create over 97 million new jobs globally. We are preparing the next generation for this exciting future.
              </Typography>
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[{ val: "100%", desc: "of students complete their first project within 2 weeks" }, { val: "50+", desc: "hands-on projects from basic robotics to advanced AI" }].map((s) => (
                  <Grid item xs={6} key={s.val}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 4,
                        border: "1px solid",
                        borderColor: "divider",
                        bgcolor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                      }}
                    >
                      <Typography variant="h4" fontWeight={800} color="primary.main" gutterBottom>{s.val}</Typography>
                      <Typography variant="body2" color="text.secondary">{s.desc}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Button variant="contained" size="large" endIcon={<ArrowForward />} onClick={() => router.push("/programs")} sx={{ px: 4, py: 1.5, borderRadius: 3 }}>
                Explore Programs
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Learning Path */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign="center" fontWeight={800} gutterBottom sx={{ mb: 8 }}>
            Your Journey to Mastery
          </Typography>
          <Grid container spacing={3}>
            {[
              { level: "Beginner", title: "Foundation in Robotics", items: ["Basic robot construction", "Introduction to sensors", "Simple programming"], img: "/images/Kids sorting kit components.jpg", color: "#22c55e" },
              { level: "Intermediate", title: "Advanced Mechanisms", items: ["Complex robot design", "Sensor fusion & control", "Applied mathematics"], img: "/images/kids_designing_simple_machines.jpg", color: "#2590f1" },
              { level: "Advanced", title: "AI & Innovation", items: ["AI integration", "Computer vision", "Real-world applications"], img: "/images/building_drones.jpg", color: "#9187ff" },
            ].map((card) => (
              <Grid item xs={12} md={4} key={card.level}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 0,
                    height: "100%",
                    borderRadius: 5,
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "divider",
                    bgcolor: isDark ? "rgba(255,255,255,0.02)" : "#fff",
                    transition: "all 0.3s ease",
                    "&:hover": { transform: "translateY(-6px)", borderColor: card.color, boxShadow: `0 20px 60px ${card.color}15` },
                  }}
                >
                  <Box sx={{ position: "relative", height: 200 }}>
                    <Image src={card.img} alt={card.title} fill style={{ objectFit: "cover" }} />
                    <Box sx={{ position: "absolute", top: 16, left: 16, bgcolor: card.color, color: "white", px: 2, py: 0.5, borderRadius: 2, fontWeight: 700, fontSize: "0.8rem" }}>
                      {card.level}
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>{card.title}</Typography>
                    {card.items.map((item) => (
                      <Typography key={item} variant="body2" color="text.secondary" sx={{ mb: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
                        <Box component="span" sx={{ width: 4, height: 4, borderRadius: "50%", bgcolor: card.color, flexShrink: 0 }} />
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Robotics Stats Banner */}
      <RoboticsBanner />

      {/* Final CTA */}
      <Box
        sx={{
          py: { xs: 10, md: 16 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: 'url("/images/young-robotics-engineers.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.15)",
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "white",
              mb: 3,
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              lineHeight: 1.1,
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.7)", mb: 6, fontSize: "1.15rem", maxWidth: 560, mx: "auto" }}>
            Join thousands of young innovators who are shaping the future of technology.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => router.push("/contact")}
              sx={{ px: 5, py: 2, fontSize: "1.1rem", borderRadius: 3, boxShadow: "0 4px 20px rgba(37,144,241,0.4)" }}
            >
              Start Your Free Trial
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push("/programs")}
              sx={{ px: 5, py: 2, fontSize: "1.1rem", borderRadius: 3, color: "white", borderColor: "rgba(255,255,255,0.3)", borderWidth: 2, "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.08)", borderWidth: 2 } }}
            >
              Explore Programs
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
