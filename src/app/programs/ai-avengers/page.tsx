"use client";

import React from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Paper,
} from "@mui/material";
import {
  CheckCircle, Psychology, Computer, FlightTakeoff,
  EmojiEvents, Groups, ArrowForward, School,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const COLOR = "#8b5cf6";
const COLOR_LIGHT = "rgba(139,92,246,0.10)";

const skills = [
  { icon: Computer, title: "Python & Advanced Coding", items: ["Advanced Python programming patterns", "Object-oriented design for robotics", "API integration and data processing", "Version control with Git"] },
  { icon: Psychology, title: "Machine Learning & AI", items: ["Supervised and unsupervised learning", "Neural network fundamentals", "Computer vision with OpenCV", "Natural language processing basics"] },
  { icon: FlightTakeoff, title: "Autonomous Systems", items: ["Drone programming and flight control", "Swarm robotics concepts", "ROS (Robot Operating System) intro", "Path planning and SLAM algorithms"] },
];

const projects = [
  "Autonomous drone mission", "AI image classifier", "Self-driving simulation",
  "Gesture-controlled robot", "Multi-robot coordination", "AI competition bot",
];

const details = [
  { label: "Age Group", value: "Ages 13-17" },
  { label: "Session Length", value: "90-120 minutes" },
  { label: "Class Size", value: "Max 12 students" },
  { label: "Format", value: "In-Person & Online" },
  { label: "Frequency", value: "Weekly sessions" },
  { label: "Prerequisites", value: "Basic coding experience" },
];

export default function AIAvengersPage() {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ background: "linear-gradient(135deg, #0f172a 0%, #1e0a3c 100%)", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${COLOR}22, transparent 70%)`, pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "10%", left: "5%", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${COLOR}15, transparent 70%)`, pointerEvents: "none" }} />
        <Container maxWidth="lg">
          <Chip label="Ages 13-17" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, border: `1px solid ${COLOR}44`, fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, color: "white", mb: 2, lineHeight: 1.1 }}>
            AI Avengers
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.75)", mb: 4, maxWidth: 560, fontStyle: "italic" }}>
            Master AI, machine learning, and autonomous systems at a professional level
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "white", fontWeight: 700, px: 4, py: 1.5, borderRadius: 3, "&:hover": { bgcolor: "#7c3aed" } }}>
              Enroll Now
            </Button>
            <Button component={Link} href="/programs" variant="outlined" size="large"
              sx={{ borderColor: "rgba(255,255,255,0.4)", color: "white", px: 4, py: 1.5, borderRadius: 3 }}>
              View All Programs
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ABOUT */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <Box sx={{ position: "relative", height: 260, borderRadius: 3, overflow: "hidden", gridColumn: "1 / -1" }}>
                  <Image src="/images/building_drones.jpg" alt="Students building drones" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ position: "relative", height: 180, borderRadius: 3, overflow: "hidden" }}>
                  <Image src="/images/Palo-alto-classes-5.jpg" alt="Palo Alto campus classes" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ position: "relative", height: 180, borderRadius: 3, overflow: "hidden" }}>
                  <Image src="/images/palo-alto-classes-6.jpg" alt="Advanced robotics session" fill style={{ objectFit: "cover" }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Chip label="College & Career Preparation" size="small" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, fontWeight: 600, mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: "#0f172a" }}>
                Professional-Level AI Education
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3, fontSize: "1.1rem" }}>
                AI Avengers is our most advanced teen program. Participants work on real-world AI projects, learn from industry mentors, and build portfolio projects that genuinely impress college admissions officers and future employers.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 4, fontSize: "1.1rem" }}>
                From drone programming to machine learning model training, AI Avengers prepares students for STEM careers in the AI era. Graduates have gone on to Stanford, MIT, Carnegie Mellon, and leading tech internships.
              </Typography>
              <Stack spacing={1.5}>
                {["Python, OpenCV, TensorFlow fundamentals", "Drone and autonomous vehicle programming", "Mentorship from industry professionals", "Portfolio projects for college applications"].map((item) => (
                  <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                    <CheckCircle sx={{ color: COLOR, fontSize: 20 }} />
                    <Typography sx={{ color: "#374151" }}>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* SKILLS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>What You Will Learn</Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 540, mx: "auto", fontSize: "1.1rem" }}>
              Industry-relevant AI and robotics skills that matter for careers in technology.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {skills.map((skill) => (
              <Grid item xs={12} md={4} key={skill.title}>
                <Card elevation={0} sx={{ border: `1px solid ${COLOR}33`, borderRadius: 4, height: "100%", bgcolor: COLOR_LIGHT, transition: "transform 0.2s", "&:hover": { transform: "translateY(-4px)", boxShadow: `0 16px 40px ${COLOR}22` } }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ width: 52, height: 52, borderRadius: 3, bgcolor: `${COLOR}22`, display: "flex", alignItems: "center", justifyContent: "center", mb: 3 }}>
                      <skill.icon sx={{ color: COLOR, fontSize: 28 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}>{skill.title}</Typography>
                    <Stack spacing={1}>
                      {skill.items.map((item) => (
                        <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                          <CheckCircle sx={{ color: COLOR, fontSize: 16, mt: 0.4 }} />
                          <Typography variant="body2" sx={{ color: "#4b5563" }}>{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PROJECTS + DETAILS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 3 }}>Capstone Projects</Typography>
              <Typography sx={{ color: "text.secondary", mb: 4 }}>
                Build projects that belong in a college portfolio — real AI, real impact.
              </Typography>
              <Grid container spacing={2}>
                {projects.map((p) => (
                  <Grid item xs={6} key={p}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ p: 2, bgcolor: COLOR_LIGHT, borderRadius: 3, border: `1px solid ${COLOR}33` }}>
                      <EmojiEvents sx={{ color: COLOR, fontSize: 20 }} />
                      <Typography sx={{ fontWeight: 600, color: "#374151", fontSize: "0.9rem" }}>{p}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 3 }}>Program Details</Typography>
              <Grid container spacing={2}>
                {details.map((d) => (
                  <Grid item xs={6} key={d.label}>
                    <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: "1px solid #e5e7eb", textAlign: "center" }}>
                      <Typography variant="body2" sx={{ color: "text.secondary", mb: 0.5 }}>{d.label}</Typography>
                      <Typography sx={{ fontWeight: 700, color: "#0f172a", fontSize: "0.95rem" }}>{d.value}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
              <Paper elevation={0} sx={{ mt: 3, p: 3, borderRadius: 3, bgcolor: COLOR_LIGHT, border: `1px solid ${COLOR}33` }}>
                <School sx={{ color: COLOR, mb: 1 }} />
                <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 0.5 }}>College Application Boost</Typography>
                <Typography variant="body2" sx={{ color: "#4b5563" }}>
                  Our graduates have been accepted to top STEM programs across the US. We help students craft AI project write-ups for their applications.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: "linear-gradient(135deg, #0f172a, #1e0a3c)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, color: "white", mb: 2 }}>Ready to Avenge the Future?</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "1.15rem" }}>
            The AI revolution needs leaders. Start building your expertise today.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "white", fontWeight: 700, px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#7c3aed" } }}>
              Enroll Now
            </Button>
            <Button component={Link} href="/contact" variant="outlined" size="large"
              sx={{ borderColor: "rgba(255,255,255,0.4)", color: "white", px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem" }}>
              Talk to a Mentor
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
