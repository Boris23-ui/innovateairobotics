"use client";

import React from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Paper,
} from "@mui/material";
import {
  CheckCircle, Build, Code, Science,
  EmojiEvents, Groups, ArrowForward,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const COLOR = "#10b981";
const COLOR_LIGHT = "rgba(16,185,129,0.10)";

const skills = [
  { icon: Code, title: "Block Coding", items: ["Drag-and-drop visual programming", "Sequences, loops, and conditionals", "Event-driven programming concepts", "Debugging and testing your programs"] },
  { icon: Build, title: "Robot Building", items: ["Mechanical assembly with guided kits", "Understanding gears, motors, and sensors", "Designing autonomous robot pathways", "Iterative build-test-improve cycles"] },
  { icon: Science, title: "STEM Foundations", items: ["Physics of motion and forces", "Sensor data and measurement", "Mathematical thinking through coding", "Scientific method in engineering"] },
];

const projects = [
  "Line-following robot", "Obstacle avoider", "Maze solver",
  "Light-sensitive robot", "Sound-reactive toy", "Mini competition bot",
];

const details = [
  { label: "Age Group", value: "Ages 6-9" },
  { label: "Session Length", value: "60-75 minutes" },
  { label: "Class Size", value: "Max 10 students" },
  { label: "Format", value: "In-Person & Online" },
  { label: "Frequency", value: "Weekly sessions" },
  { label: "Prerequisites", value: "None required" },
];

export default function RobotExplorersPage() {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ background: "linear-gradient(135deg, #0f172a 0%, #052e16 100%)", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${COLOR}22, transparent 70%)`, pointerEvents: "none" }} />
        <Container maxWidth="lg">
          <Chip label="Ages 6-9" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, border: `1px solid ${COLOR}44`, fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, color: "white", mb: 2, lineHeight: 1.1 }}>
            Robot Explorers
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.75)", mb: 4, maxWidth: 520, fontStyle: "italic" }}>
            Build, code, and discover — where young engineers come alive
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "white", fontWeight: 700, px: 4, py: 1.5, borderRadius: 3, "&:hover": { bgcolor: "#059669" } }}>
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
              <Box sx={{ position: "relative", height: 440, borderRadius: 4, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.15)" }}>
                <Image src="/images/Mountain-view-classes-4.jpg" alt="Robot Explorers in class" fill style={{ objectFit: "cover" }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Chip label="Hands-On Robotics" size="small" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, fontWeight: 600, mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: "#0f172a" }}>
                Your First Real Robot
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3, fontSize: "1.1rem" }}>
                Dive into the fascinating world of AI Robotics! In this exciting class, 6-9 year olds explore the magical combination of Artificial Intelligence and Robots. Build interactive robots that think, learn, and respond to commands through fun activities and hands-on experiments.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 4, fontSize: "1.1rem" }}>
                Students discover how robots use sensors and algorithms to navigate their surroundings, solve challenges, and compete in friendly mini-competitions. Our internationally recognized curriculum builds genuine coding skills, not just button-pushing.
              </Typography>
              <Stack spacing={1.5}>
                {["LEGO Mindstorms and Scratch-based coding", "Real hardware — build robots from the ground up", "Small class sizes for personalized learning", "Project portfolios showcased to parents"].map((item) => (
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
              From block coding to building working robots — a complete beginner journey.
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
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 3 }}>Sample Projects</Typography>
              <Typography sx={{ color: "text.secondary", mb: 4 }}>
                Students complete multiple hands-on projects each semester, each one building on the last.
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
              <Box sx={{ mt: 4, position: "relative", height: 220, borderRadius: 3, overflow: "hidden" }}>
                <Image src="/images/young-robotics-engineers.jpg" alt="Young robotics engineers at work" fill style={{ objectFit: "cover" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: "linear-gradient(135deg, #0f172a, #052e16)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, color: "white", mb: 2 }}>Start Your Robotics Journey</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "1.15rem" }}>
            Every great engineer started somewhere. This is your child's beginning.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "white", fontWeight: 700, px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#059669" } }}>
              Enroll Now
            </Button>
            <Button component={Link} href="/contact" variant="outlined" size="large"
              sx={{ borderColor: "rgba(255,255,255,0.4)", color: "white", px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem" }}>
              Schedule a Free Trial Class
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
