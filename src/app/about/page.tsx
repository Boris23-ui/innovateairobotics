"use client";

import {
  Container, Typography, Box, Grid, Card, CardContent,
  Paper, Chip, Stack, useTheme,
} from "@mui/material";
import { Lightbulb, Groups, EmojiEvents, Public, CheckCircle, Star } from "@mui/icons-material";
import Image from "next/image";

const values = [
  { icon: <Lightbulb sx={{ fontSize: 32 }} />, title: "Innovation First", description: "We stay at the cutting edge of robotics and AI, always bringing the latest tools and methods to our students." },
  { icon: <Groups sx={{ fontSize: 32 }} />, title: "Inclusive Access", description: "Quality robotics education for every child, regardless of background, geography, or economic status." },
  { icon: <EmojiEvents sx={{ fontSize: 32 }} />, title: "Excellence", description: "Hands-on, project-based curriculum designed by industry experts to build real, lasting skills." },
  { icon: <Public sx={{ fontSize: 32 }} />, title: "Global Impact", description: "From Silicon Valley to Nairobi, we are building a global community of young robotics innovators." },
];

const impactStats = [
  { value: "10,000+", label: "Students Taught" },
  { value: "150+", label: "Partner Schools" },
  { value: "3", label: "Countries" },
  { value: "500k+", label: "Simulations Run" },
];

const milestones = [
  { year: "2018", title: "Founded in Silicon Valley", description: "John H. Williams founded the organization after years leading robotics education programs." },
  { year: "2019", title: "First Kenya Programs", description: "Expanded to Nairobi, bringing hands-on robotics education to East Africa." },
  { year: "2021", title: "Platform Development", description: "Basil K. Boris joins as CTO to build the all-in-one InnovateAI platform." },
  { year: "2023", title: "10,000 Students", description: "Reached 10,000 active students across Mountain View, Palo Alto, and Nairobi." },
  { year: "2024", title: "App Launch", description: "Launched the browser-based platform, enabling students worldwide to learn without hardware." },
];

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const sectionBg = isDark ? "#0f0f1a" : "#f7f7ff";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff";

  return (
    <>
      {/* Hero */}
      <Box sx={{ position: "relative", py: { xs: 10, md: 16 }, overflow: "hidden", background: isDark ? "linear-gradient(135deg, #0f0f1a 0%, #1a1a35 100%)" : "linear-gradient(135deg, #eef0ff 0%, #f7f7ff 100%)" }}>
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(37,144,241,0.1) 0%, transparent 60%)" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip label="Nonprofit Organization" sx={{ mb: 2, bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(37,144,241,0.1)", color: isDark ? "white" : "primary.main", fontWeight: 600 }} />
              <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: "2.2rem", md: "3.2rem" }, lineHeight: 1.1 }}>
                Empowering the Next Generation of{" "}
                <Box component="span" sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Robotics Engineers
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.8, fontSize: "1.1rem" }}>
                Integrating robotics and AI into school curricula is essential for preparing students for the 4th industrial revolution. We provide access to advanced technologies so every student can lead in innovation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: { xs: 280, md: 420 }, borderRadius: 5, overflow: "hidden", border: "1px solid", borderColor: "divider", boxShadow: isDark ? "0 32px 80px rgba(0,0,0,0.5)" : "0 32px 80px rgba(0,0,0,0.1)" }}>
                <Image src="/images/young-robotics-engineers.jpg" alt="Young robotics engineers" fill style={{ objectFit: "cover" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Box sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", py: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {impactStats.map((stat) => (
              <Grid item xs={6} sm={3} key={stat.label}>
                <Box textAlign="center">
                  <Typography variant="h3" fontWeight={800} sx={{ color: "white", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>{stat.value}</Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{stat.label}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Mission */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", height: { xs: 300, md: 400 }, borderRadius: 5, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
              <Image src="/images/Nairobi-classes-7.jpg" alt="Students in Nairobi" fill style={{ objectFit: "cover" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="overline" color="primary" fontWeight={700} sx={{ letterSpacing: 2 }}>OUR MISSION</Typography>
            <Typography variant="h3" fontWeight={800} gutterBottom sx={{ mt: 1 }}>Education That Opens Doors</Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
              Innovate AI Robotics Inc. is a nonprofit dedicated to advancing robotics education and fostering innovation, teamwork, and problem-solving through hands-on classes for youth of all ages.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
              By 2030, robotics and AI will create over 97 million new jobs globally. We believe every student deserves the opportunity to build the skills that will shape their future.
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {["Browser-based learning — no hardware required", "Age-appropriate programs for ages 5 to adult", "In-person classes and online platform", "Certified instructors with industry experience"].map((item) => (
                <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <CheckCircle sx={{ color: "primary.main", fontSize: 20 }} />
                  <Typography variant="body2" fontWeight={500} color="text.primary">{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Values */}
      <Box sx={{ bgcolor: sectionBg, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight={800} gutterBottom>What We Stand For</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: "auto" }}>Our core values guide everything we do.</Typography>
          </Box>
          <Grid container spacing={3}>
            {values.map((val) => (
              <Grid item xs={12} sm={6} md={3} key={val.title}>
                <Paper elevation={0} sx={{ p: 4, height: "100%", borderRadius: 5, border: "1px solid", borderColor: "divider", bgcolor: cardBg, textAlign: "center", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-6px)", borderColor: "primary.main", boxShadow: isDark ? "0 16px 48px rgba(37,144,241,0.1)" : "0 16px 48px rgba(0,0,0,0.06)" } }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{val.icon}</Box>
                  <Typography variant="h6" fontWeight={700} gutterBottom>{val.title}</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{val.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight={800} gutterBottom>Our Journey</Typography>
          <Typography variant="body1" color="text.secondary">From a vision in Silicon Valley to a global robotics education platform.</Typography>
        </Box>
        <Stack spacing={0}>
          {milestones.map((m, i) => (
            <Box key={m.year} sx={{ display: "flex", gap: 3 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 50 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #2590f1, #9187ff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Star sx={{ color: "white", fontSize: 18 }} />
                </Box>
                {i < milestones.length - 1 && <Box sx={{ width: 2, flex: 1, bgcolor: "divider", my: 1 }} />}
              </Box>
              <Box sx={{ pb: i < milestones.length - 1 ? 4 : 0 }}>
                <Chip label={m.year} size="small" sx={{ bgcolor: isDark ? "rgba(37,144,241,0.15)" : "rgba(37,144,241,0.1)", color: "primary.main", fontWeight: 700, mb: 1 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>{m.title}</Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{m.description}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* Leadership */}
      <Box sx={{ bgcolor: sectionBg, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight={800} gutterBottom>Our Leadership</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: "auto" }}>Experienced leaders with decades of combined experience in robotics, technology, and education.</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { name: "John H. Williams", role: "President & Founder", img: "/images/John Williams Sr.jpg", bio1: "His career showcases a blend of technical expertise and visionary leadership — from programmer at LA County Healthcare to systems analyst at The Rand Corporation, manager at ARCO, and VP of Operations at Tsquared Robotics LLC.", bio2: "This experience led him to found Innovate AI Robotics Inc., a nonprofit dedicated to advancing robotics education through hands-on classes. He holds a B.S. in Business Administration/Information Systems from California Lutheran University." },
              { name: "Basil K. Boris", role: "VP Operations & CTO", img: "/images/basil.jpg", bio1: "As CIO at Tsquared Robotics, Basil designed advanced robotics systems for educational applications and integrated Learning Management Systems to enhance global educational services.", bio2: "He is now building the all-in-one InnovateAI Robotics standalone app that will transform how robotics education is delivered worldwide. Currently pursuing his B.S. in Computer Science." },
            ].map((leader) => (
              <Grid item xs={12} md={6} key={leader.name}>
                <Card elevation={0} sx={{ borderRadius: 5, overflow: "hidden", border: "1px solid", borderColor: "divider", bgcolor: cardBg, height: "100%" }}>
                  <Box sx={{ position: "relative", height: 260 }}>
                    <Image src={leader.img} alt={leader.name} fill style={{ objectFit: "cover", objectPosition: "top" }} />
                    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
                    <Box sx={{ position: "absolute", bottom: 20, left: 24 }}>
                      <Typography variant="h5" fontWeight={800} color="white">{leader.name}</Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>{leader.role}</Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body2" color="text.secondary" paragraph lineHeight={1.7}>{leader.bio1}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{leader.bio2}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Gallery */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={800} gutterBottom>Our Classrooms</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: "auto" }}>From Silicon Valley to East Africa, InnovateAI Robotics is making an impact everywhere.</Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            { src: "/images/Mountain-view-classes-4.jpg", label: "Mountain View Campus" },
            { src: "/images/Nairobi-classes-3.jpg", label: "Nairobi Campus" },
            { src: "/images/Palo-alto-classes-5.jpg", label: "Palo Alto Campus" },
          ].map((img) => (
            <Grid item xs={12} sm={4} key={img.src}>
              <Box sx={{ position: "relative", height: 240, borderRadius: 4, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <Typography variant="caption" sx={{ color: "white", fontWeight: 600 }}>{img.label}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
