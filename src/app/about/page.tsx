"use client";

import {
  Container, Typography, Box, Grid, Card, CardContent,
  Avatar, Paper, Chip, Stack, Divider, useTheme,
} from "@mui/material";
import {
  Lightbulb, Groups, EmojiEvents, School, Public,
  CheckCircle, Star,
} from "@mui/icons-material";
import Image from "next/image";

const values = [
  { icon: <Lightbulb sx={{ fontSize: 36 }} />, title: "Innovation First", description: "We stay at the cutting edge of robotics and AI, always bringing the latest tools and methods to our students." },
  { icon: <Groups sx={{ fontSize: 36 }} />, title: "Inclusive Access", description: "Quality robotics education for every child, regardless of background, geography, or economic status." },
  { icon: <EmojiEvents sx={{ fontSize: 36 }} />, title: "Excellence in Learning", description: "Hands-on, project-based curriculum designed by industry experts to build real, lasting skills." },
  { icon: <Public sx={{ fontSize: 36 }} />, title: "Global Impact", description: "From Silicon Valley to Nairobi, we are building a global community of young robotics innovators." },
];

const impactStats = [
  { value: "10,000+", label: "Students Taught" },
  { value: "150+", label: "Partner Schools" },
  { value: "3", label: "Countries" },
  { value: "500k+", label: "Robot Simulations Run" },
];

const milestones = [
  { year: "2018", title: "Founded in Silicon Valley", description: "John H. Williams founded the organization after years leading robotics education programs across the US and Kenya." },
  { year: "2019", title: "First Kenya Programs", description: "Expanded to Nairobi, bringing hands-on robotics education to hundreds of students in East Africa." },
  { year: "2021", title: "Platform Development Begins", description: "Basil K. Boris joins as CTO to build the all-in-one InnovateAI Robotics platform." },
  { year: "2023", title: "10,000 Students Milestone", description: "Reached 10,000 active students across Mountain View, Palo Alto, and Nairobi campuses." },
  { year: "2024", title: "App Launch", description: "Launched the browser-based InnovateAI Robotics platform, enabling students worldwide to learn without hardware." },
];

export default function AboutPage() {
  const theme = useTheme();

  return (
    <>
      {/* Hero */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 16 },
          overflow: "hidden",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(37,99,235,0.2) 0%, transparent 60%)" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip label="Nonprofit Organization" sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600 }} />
              <Typography variant="h2" component="h1" sx={{ fontWeight: 900, color: "white", mb: 3, fontSize: { xs: "2.5rem", md: "3.5rem" }, lineHeight: 1.15 }}>
                Empowering the Next Generation of{" "}
                <Box component="span" sx={{ background: "linear-gradient(135deg, #38bdf8, #818cf8)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Robotics Engineers
                </Box>
              </Typography>
              <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7, fontWeight: 400 }}>
                Integrating robotics and AI into school curricula is essential for preparing students for the 4th industrial revolution. We provide access to advanced technologies so every student can lead in innovation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative", height: { xs: 300, md: 450 }, borderRadius: 4, overflow: "hidden", boxShadow: "0 24px 48px rgba(0,0,0,0.4)" }}>
                <Image src="/images/young-robotics-engineers.jpg" alt="Young robotics engineers" fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Impact Stats */}
      <Box sx={{ bgcolor: "#2563eb", py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {impactStats.map((stat) => (
              <Grid item xs={6} sm={3} key={stat.label}>
                <Box textAlign="center">
                  <Typography variant="h3" fontWeight={900} sx={{ color: "white", fontSize: { xs: "2rem", md: "3rem" } }}>{stat.value}</Typography>
                  <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{stat.label}</Typography>
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
            <Box sx={{ position: "relative", height: 420, borderRadius: 4, overflow: "hidden", boxShadow: 6 }}>
              <Image src="/images/Nairobi-classes-7.jpg" alt="Students in Nairobi" fill style={{ objectFit: "cover" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="overline" color="primary" fontWeight={700} sx={{ letterSpacing: 2 }}>OUR MISSION</Typography>
            <Typography variant="h3" fontWeight={800} gutterBottom sx={{ mt: 1 }}>
              Education That Opens Doors
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
              Innovate AI Robotics Inc. is a nonprofit dedicated to advancing robotics education and fostering innovation, teamwork, and problem-solving through hands-on classes for youth of all ages.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
              By 2030, robotics and AI will create over 97 million new jobs globally. We believe every student deserves the opportunity to build the skills that will shape their future — whether they are in Mountain View, Palo Alto, or Nairobi.
            </Typography>
            <Stack spacing={1.5} sx={{ mt: 3 }}>
              {["Browser-based learning — no hardware required", "Age-appropriate programs for ages 5 to adult", "In-person classes and online platform", "Certified instructors with industry experience"].map((item) => (
                <Box key={item} sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <CheckCircle color="primary" />
                  <Typography variant="body1" fontWeight={500}>{item}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* Values */}
      <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight={800} gutterBottom>What We Stand For</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}>Our core values guide everything we do, from curriculum design to community outreach.</Typography>
          </Box>
          <Grid container spacing={4}>
            {values.map((val) => (
              <Grid item xs={12} sm={6} md={3} key={val.title}>
                <Paper elevation={0} sx={{ p: 4, height: "100%", borderRadius: 4, border: "1px solid", borderColor: "divider", textAlign: "center", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-8px)", boxShadow: 6 } }}>
                  <Box sx={{ color: "primary.main", mb: 2 }}>{val.icon}</Box>
                  <Typography variant="h6" fontWeight={700} gutterBottom>{val.title}</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{val.description}</Typography>
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
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>From a vision in Silicon Valley to a global robotics education platform.</Typography>
        </Box>
        <Stack spacing={0}>
          {milestones.map((m, i) => (
            <Box key={m.year} sx={{ display: "flex", gap: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 60 }}>
                <Box sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Star sx={{ color: "white", fontSize: 20 }} />
                </Box>
                {i < milestones.length - 1 && <Box sx={{ width: 2, flex: 1, bgcolor: "divider", my: 1 }} />}
              </Box>
              <Box sx={{ pb: i < milestones.length - 1 ? 4 : 0 }}>
                <Chip label={m.year} size="small" color="primary" sx={{ mb: 1, fontWeight: 700 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>{m.title}</Typography>
                <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{m.description}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* Leadership */}
      <Box sx={{ bgcolor: "grey.50", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight={800} gutterBottom>Our Leadership</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}>Experienced leaders with decades of combined experience in robotics, technology, and education.</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 4, overflow: "hidden" }}>
                <Box sx={{ position: "relative", height: 280 }}>
                  <Image src="/images/John Williams Sr.jpg" alt="John H. Williams" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
                  <Box sx={{ position: "absolute", bottom: 16, left: 24 }}>
                    <Typography variant="h5" fontWeight={800} color="white">John H. Williams</Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)" }}>President &amp; Founder</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="body1" color="text.secondary" paragraph lineHeight={1.8}>
                    His career trajectory showcases a blend of technical expertise and visionary leadership — from programmer at LA County Healthcare to systems analyst at The Rand Corporation, manager at ARCO, and VP of Operations at Tsquared Robotics LLC.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                    This experience led him to found Innovate AI Robotics Inc., a nonprofit dedicated to advancing robotics education through hands-on classes for youth of all ages. He holds a B.S. in Business Administration/Information Systems from California Lutheran University.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: 4, overflow: "hidden" }}>
                <Box sx={{ position: "relative", height: 280 }}>
                  <Image src="/images/basil.jpg" alt="Basil K. Boris" fill style={{ objectFit: "cover", objectPosition: "top" }} />
                  <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)" }} />
                  <Box sx={{ position: "absolute", bottom: 16, left: 24 }}>
                    <Typography variant="h5" fontWeight={800} color="white">Basil K. Boris</Typography>
                    <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.85)" }}>VP Operations &amp; CTO</Typography>
                  </Box>
                </Box>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="body1" color="text.secondary" paragraph lineHeight={1.8}>
                    As CIO at Tsquared Robotics, Basil designed advanced robotics systems for educational applications and integrated Learning Management Systems to enhance global educational services.
                  </Typography>
                  <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                    He is now building the all-in-one InnovateAI Robotics standalone app that will transform how robotics education is delivered to students, teachers, and leading institutions worldwide. Currently pursuing his B.S. in Computer Science.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Gallery */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={800} gutterBottom>Our Classrooms</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}>From Silicon Valley to East Africa, InnovateAI Robotics is making an impact everywhere.</Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            { src: "/images/Mountain-view-classes-4.jpg", label: "Mountain View Campus" },
            { src: "/images/Nairobi-classes-3.jpg", label: "Nairobi Campus" },
            { src: "/images/Palo-alto-classes-5.jpg", label: "Palo Alto Campus" },
          ].map((img) => (
            <Grid item xs={12} sm={4} key={img.src}>
              <Box sx={{ position: "relative", height: 260, borderRadius: 3, overflow: "hidden" }}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <Typography variant="subtitle2" color="white" fontWeight={600}>{img.label}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
