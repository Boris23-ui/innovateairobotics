"use client";

import React from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Paper,
} from "@mui/material";
import {
  CheckCircle, Work, Groups, EmojiEvents,
  Computer, Psychology, ArrowForward, Business,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const COLOR = "#0891b2";
const COLOR_LIGHT = "rgba(8,145,178,0.10)";

const skills = [
  { icon: Computer, title: "AI & Robotics Foundations", items: ["Python programming from first principles", "Robot assembly and sensor integration", "Machine learning without prior math background", "Hands-on lab sessions each week"] },
  { icon: Work, title: "Professional Applications", items: ["AI tools for business productivity", "Automation for everyday workflows", "Data analysis with Python and AI", "Building AI-powered personal projects"] },
  { icon: Groups, title: "Community & Mentorship", items: ["Learn alongside motivated peers", "Guest lectures from industry professionals", "Mentorship opportunities — teach younger students", "Access to InnovateAI alumni network"] },
];

const projects = [
  "Personal AI assistant", "Home automation system", "Data dashboard",
  "AI-powered app prototype", "Robot for daily tasks", "Community showcase project",
];

const details = [
  { label: "Age Group", value: "Ages 18+" },
  { label: "Session Length", value: "90-120 minutes" },
  { label: "Class Size", value: "Max 15 students" },
  { label: "Format", value: "In-Person & Online" },
  { label: "Frequency", value: "Weekly sessions" },
  { label: "Prerequisites", value: "No experience needed" },
];

export default function SeniorsPage() {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ background: "linear-gradient(135deg, #0f172a 0%, #0c2340 100%)", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle, ${COLOR}22, transparent 70%)`, pointerEvents: "none" }} />
        <Container maxWidth="lg">
          <Chip label="Ages 18+" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, border: `1px solid ${COLOR}44`, fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, color: "white", mb: 2, lineHeight: 1.1 }}>
            Senior Innovators
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.75)", mb: 4, maxWidth: 580, fontStyle: "italic" }}>
            It is never too late to innovate — join adults building the future with AI and robotics
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "white", fontWeight: 700, px: 4, py: 1.5, borderRadius: 3, "&:hover": { bgcolor: "#0e7490" } }}>
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
                  <Image src="/images/IMG_0535.jpg" alt="Senior Innovators in session" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ position: "relative", height: 180, borderRadius: 3, overflow: "hidden" }}>
                  <Image src="/images/20220810_152306.jpg" alt="Adult robotics class" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ position: "relative", height: 180, borderRadius: 3, overflow: "hidden" }}>
                  <Image src="/images/Kid showcasing to parent how to program a robot.jpg" alt="Sharing robotics knowledge" fill style={{ objectFit: "cover" }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Chip label="Lifelong Learning" size="small" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, fontWeight: 600, mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: "#0f172a" }}>
                AI Skills for Every Stage of Life
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3, fontSize: "1.1rem" }}>
                Senior Innovators is designed for adult learners who want to understand and harness the power of AI and robotics — whether for career advancement, creative projects, business applications, or pure curiosity.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 4, fontSize: "1.1rem" }}>
                Our patient, step-by-step instruction meets you exactly where you are. No prior tech experience required. Our instructors are trained to make complex concepts accessible and immediately applicable to your life.
              </Typography>
              <Stack spacing={1.5}>
                {["Beginner-friendly instruction with no jargon", "Practical AI tools you can use immediately", "Flexible online and in-person schedule", "Community of motivated adult learners"].map((item) => (
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
              Practical, relevant AI and robotics skills taught at a comfortable pace for adult learners.
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
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 3 }}>Personal Projects</Typography>
              <Typography sx={{ color: "text.secondary", mb: 4 }}>
                Build projects that solve real problems in your life, career, or community.
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
                <Business sx={{ color: COLOR, mb: 1 }} />
                <Typography sx={{ fontWeight: 700, color: "#0f172a", mb: 0.5 }}>Corporate & Group Rates</Typography>
                <Typography variant="body2" sx={{ color: "#4b5563" }}>
                  Training teams or groups? We offer customized corporate packages and group enrollment discounts. Contact us to discuss your needs.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: "linear-gradient(135deg, #0f172a, #0c2340)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, color: "white", mb: 2 }}>Innovation Has No Age Limit</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "1.15rem" }}>
            Join a community of lifelong learners shaping the AI-powered future.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "white", fontWeight: 700, px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#0e7490" } }}>
              Enroll Today
            </Button>
            <Button component={Link} href="/contact" variant="outlined" size="large"
              sx={{ borderColor: "rgba(255,255,255,0.4)", color: "white", px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem" }}>
              Request Corporate Training
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
