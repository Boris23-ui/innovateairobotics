"use client";

import React from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Paper,
} from "@mui/material";
import {
  CheckCircle, AutoAwesome, Favorite, ColorLens,
  EmojiObjects, Groups, ArrowForward, AccessTime, People,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const COLOR = "#f59e0b";
const COLOR_LIGHT = "rgba(245,158,11,0.10)";

const skills = [
  { icon: AutoAwesome, title: "AI Concepts Through Play", items: ["Meet robot friends and learn how they think", "Explore cause-and-effect with interactive toys", "Pattern recognition through colorful games", "Introduction to sequencing and basic logic"] },
  { icon: ColorLens, title: "Creative Activities", items: ["Build simple structures with guided kits", "Decorate and personalize your robot", "Storytelling with animated robot characters", "Music and movement with programmable toys"] },
  { icon: Favorite, title: "Social & Emotional Skills", items: ["Teamwork and sharing in a safe environment", "Turn-taking and patience-building activities", "Celebrating creativity and curiosity", "Building confidence through exploration"] },
];

const details = [
  { label: "Age Group", value: "5 years and under" },
  { label: "Session Length", value: "45-60 minutes" },
  { label: "Class Size", value: "Max 8 students" },
  { label: "Format", value: "In-Person & Online" },
  { label: "Frequency", value: "Weekly sessions" },
  { label: "Prerequisites", value: "None - all welcome!" },
];

export default function TinyTinkerersPage() {
  return (
    <Box>
      {/* HERO */}
      <Box sx={{ background: "linear-gradient(135deg, #0f172a 0%, #1c1917 60%, #451a03 100%)", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "20%", right: "10%", width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${COLOR}22, transparent 70%)`, pointerEvents: "none" }} />
        <Container maxWidth="lg">
          <Chip label="Ages 5 & Under" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, border: `1px solid ${COLOR}44`, fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: 900, color: "white", mb: 2, lineHeight: 1.1 }}>
            Tiny Tinkerers
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.75)", mb: 4, maxWidth: 520, fontStyle: "italic" }}>
            Where curiosity meets creativity — our youngest inventors begin their journey
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "black", fontWeight: 700, px: 4, py: 1.5, borderRadius: 3, "&:hover": { bgcolor: "#d97706" } }}>
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
                <Image src="/images/Kids sorting kit components.jpg" alt="Tiny Tinkerers sorting and learning with robotics components" fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", bottom: 16, left: 16, bgcolor: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: 2, px: 2, py: 1 }}>
                  <Typography sx={{ color: "white", fontWeight: 700, fontSize: "0.85rem" }}>Mountain View Campus</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Chip label="Our Youngest Learners" size="small" sx={{ bgcolor: COLOR_LIGHT, color: COLOR, fontWeight: 600, mb: 2 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: "#0f172a" }}>
                Learning Through Play
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 3, fontSize: "1.1rem" }}>
                Welcome to the magical world of AI Robotics for our youngest learners! Together, we discover the wonders of robots and how they come to life with Artificial Intelligence. Through interactive play and colorful activities, children explore how robots think, move, and communicate.
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.9, mb: 4, fontSize: "1.1rem" }}>
                Our gentle, play-based curriculum is designed specifically for children aged 5 and under — building foundational STEM thinking while keeping every session full of joy, laughter, and discovery.
              </Typography>
              <Stack spacing={1.5}>
                {["Age-appropriate, sensory-friendly materials", "Certified early childhood education instructors", "Maximum 8 students per class for personal attention", "Monthly progress reports for parents"].map((item) => (
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

      {/* SKILLS GRID */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>What Children Learn</Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 540, mx: "auto", fontSize: "1.1rem" }}>
              Every session is designed to spark curiosity and build foundational skills that last a lifetime.
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

      {/* CLASS DETAILS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>Program Details</Typography>
              <Typography sx={{ color: "text.secondary", mb: 5, fontSize: "1.05rem" }}>
                Our Tiny Tinkerers program offers a nurturing, structured environment where every child feels safe to explore and grow.
              </Typography>
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
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
                <Box sx={{ position: "relative", height: 220, borderRadius: 3, overflow: "hidden", gridColumn: "1 / -1" }}>
                  <Image src="/images/kids getting ready for class.jpg" alt="Kids getting ready for class" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ position: "relative", height: 180, borderRadius: 3, overflow: "hidden" }}>
                  <Image src="/images/kids_designing_simple_machines.jpg" alt="Kids designing simple machines" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box sx={{ borderRadius: 3, bgcolor: COLOR_LIGHT, border: `1px solid ${COLOR}33`, p: 3, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="h2" sx={{ fontWeight: 900, color: COLOR, lineHeight: 1 }}>8</Typography>
                  <Typography sx={{ fontWeight: 600, color: "#374151" }}>Max Students Per Class</Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>Individual attention guaranteed</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, background: "linear-gradient(135deg, #0f172a, #1c1917)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, color: "white", mb: 2 }}>Ready to Start the Adventure?</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 5, fontSize: "1.15rem" }}>
            Give your child the gift of curiosity. Classes fill quickly — secure your spot today.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: COLOR, color: "black", fontWeight: 700, px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#d97706" } }}>
              Enroll Your Child
            </Button>
            <Button component={Link} href="/contact" variant="outlined" size="large"
              sx={{ borderColor: "rgba(255,255,255,0.4)", color: "white", px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem" }}>
              Ask a Question
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
