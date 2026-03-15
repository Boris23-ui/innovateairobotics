"use client";

import React, { useState } from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Paper, ToggleButton, ToggleButtonGroup,
  Accordion, AccordionSummary, AccordionDetails, useTheme,
} from "@mui/material";
import { CheckCircle, ExpandMore, ArrowForward, Groups, Favorite, School } from "@mui/icons-material";
import Link from "next/link";

const PROGRAMS = [
  { name: "Tiny Tinkerers", age: "Ages 5 & Under", color: "#f59e0b", perClass: 45, semester: 799, semesterClasses: 20, href: "/programs/tiny-tinkerers", features: ["45-60 min sessions", "Max 8 students per class", "All materials included", "Progress report each session", "Free make-up class"], popular: false },
  { name: "Robot Explorers", age: "Ages 6-9", color: "#10b981", perClass: 55, semester: 979, semesterClasses: 20, href: "/programs/robot-explorers", features: ["60-75 min sessions", "Max 10 students per class", "LEGO Mindstorms access", "Project portfolio", "Online portal access"], popular: false },
  { name: "Tech Titans", age: "Ages 10-12", color: "#3b82f6", perClass: 65, semester: 1149, semesterClasses: 20, href: "/programs/tech-titans", features: ["75-90 min sessions", "Max 12 students per class", "EV3/Spike + Python IDE", "Semester-end demo day", "Competition prep"], popular: true },
  { name: "AI Avengers", age: "Ages 13-17", color: "#8b5cf6", perClass: 75, semester: 1299, semesterClasses: 20, href: "/programs/ai-avengers", features: ["90-120 min sessions", "Max 12 students per class", "Drone + AI hardware", "College portfolio project", "Industry mentor sessions"], popular: false },
  { name: "Senior Innovators", age: "Ages 18+", color: "#0891b2", perClass: 60, semester: 1049, semesterClasses: 20, href: "/programs/seniors", features: ["90-120 min sessions", "Max 15 students per class", "All materials provided", "Flexible scheduling", "Corporate rates available"], popular: false },
];

const FAQS = [
  { q: "Is there a free trial class?", a: "Yes! We offer one free introductory class for all new students. No commitment required — just show up and see if it clicks." },
  { q: "How does per-class pricing work?", a: "You pay for each class session individually. Book as many or as few as you like — there's no lock-in. Perfect for trying out a program or fitting around a busy schedule." },
  { q: "What's included in the class fee?", a: "Every class fee covers the full session, all robotics kits and hardware used during class, software access, and a session activity summary sent home afterward." },
  { q: "Do you offer scholarships?", a: "Yes. Need-based scholarships and sibling discounts are available. Contact info@innovateairobotics.com to learn more." },
  { q: "Can I enroll in a semester bundle mid-way through?", a: "Absolutely. Semester bundles can be started at any time — we'll pro-rate or carry over unused classes to the next block." },
  { q: "Is there a commitment for semester bundles?", a: "Semester bundles are pre-paid for 20 classes at a discounted rate. Per-class booking has zero commitment — cancel or pause any time." },
];

const INCLUDED = ["All robotics kits and hardware", "Software licenses and tools", "Curriculum materials", "Online learning portal", "Monthly progress reports", "Student community access"];

export default function PricingPage() {
  const [billing, setBilling] = useState<"perClass" | "semester">("perClass");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionBg = isDark ? "#0f0f1a" : "#f7f7ff";

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: isDark ? "linear-gradient(135deg, #0f0f1a 0%, #1a1a35 100%)" : "linear-gradient(135deg, #eef0ff 0%, #f7f7ff 100%)", py: { xs: 10, md: 14 }, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "20%", left: "5%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,144,241,0.1), transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "10%", right: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(145,135,255,0.08), transparent 70%)", pointerEvents: "none" }} />
        <Container maxWidth="md">
          <Chip label="Transparent Pricing" sx={{ bgcolor: isDark ? "rgba(37,144,241,0.12)" : "rgba(37,144,241,0.1)", color: "primary.main", fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 800, mb: 2, lineHeight: 1.1 }}>
            Pay Per Class.{" "}
            <Box component="span" sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>No Lock-In.</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 6, maxWidth: 500, mx: "auto", fontSize: "1.1rem" }}>
            Pay per class with zero commitment, or save more with a semester bundle. No hidden fees.
          </Typography>
          <ToggleButtonGroup value={billing} exclusive onChange={(_, v) => v && setBilling(v)}
            sx={{ bgcolor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)", borderRadius: 3, p: 0.5, border: "1px solid", borderColor: "divider" }}>
            <ToggleButton value="perClass" sx={{ px: 4, py: 1.5, color: "text.secondary", fontWeight: 600, borderRadius: "10px !important", border: "none", "&.Mui-selected": { bgcolor: "primary.main", color: "white", fontWeight: 700, "&:hover": { bgcolor: "primary.dark" } } }}>
              Per Class
            </ToggleButton>
            <ToggleButton value="semester" sx={{ px: 4, py: 1.5, color: "text.secondary", fontWeight: 600, borderRadius: "10px !important", border: "none", "&.Mui-selected": { bgcolor: "primary.main", color: "white", fontWeight: 700, "&:hover": { bgcolor: "primary.dark" } } }}>
              Semester Bundle — Save 20%
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Box>

      {/* Included */}
      <Box sx={{ py: 4, background: "linear-gradient(135deg, #2590f1, #9187ff)" }}>
        <Container maxWidth="lg">
          <Typography sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "0.8rem", letterSpacing: 1.5, textTransform: "uppercase", textAlign: "center", mb: 2 }}>
            Everything included in every program
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {INCLUDED.map((text) => (
              <Grid item key={text}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <CheckCircle sx={{ color: "rgba(255,255,255,0.9)", fontSize: 16 }} />
                  <Typography sx={{ color: "white", fontWeight: 500, fontSize: "0.9rem" }}>{text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Cards */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: sectionBg }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center">
            {PROGRAMS.map((prog) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={prog.name}>
                <Card elevation={0} sx={{
                  borderRadius: 5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  border: prog.popular ? `2px solid ${prog.color}` : "1px solid",
                  borderColor: prog.popular ? prog.color : "divider",
                  bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff",
                  transition: "all 0.3s ease",
                  "&:hover": { transform: "translateY(-6px)", boxShadow: `0 20px 60px ${prog.color}18` },
                }}>
                  {prog.popular && (
                    <Box sx={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                      <Chip label="Most Popular" size="small" sx={{ bgcolor: prog.color, color: "white", fontWeight: 700 }} />
                    </Box>
                  )}
                  <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 3, bgcolor: `${prog.color}15`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                      <School sx={{ color: prog.color, fontSize: 22 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>{prog.name}</Typography>
                    <Chip label={prog.age} size="small" sx={{ bgcolor: `${prog.color}12`, color: prog.color, fontWeight: 600, mb: 3, alignSelf: "flex-start", fontSize: "0.75rem" }} />
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1, fontSize: "2.5rem" }}>
                        ${billing === "perClass" ? prog.perClass : prog.semester}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {billing === "perClass" ? "per class session" : `per semester (${prog.semesterClasses} classes)`}
                      </Typography>
                      {billing === "semester" && (
                        <Chip label={`Save $${prog.perClass * prog.semesterClasses - prog.semester} vs pay-as-you-go`} size="small"
                          sx={{ bgcolor: "rgba(34,197,94,0.1)", color: "#22c55e", fontWeight: 600, mt: 1, fontSize: "0.7rem" }} />
                      )}
                    </Box>
                    <Stack spacing={1} sx={{ flexGrow: 1, mb: 3 }}>
                      {prog.features.map((f) => (
                        <Stack key={f} direction="row" spacing={1} alignItems="flex-start">
                          <CheckCircle sx={{ color: prog.color, fontSize: 14, mt: 0.4, flexShrink: 0 }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.82rem" }}>{f}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Button component={Link} href="/contact" variant={prog.popular ? "contained" : "outlined"} fullWidth
                      sx={{ borderRadius: 3, fontWeight: 700, py: 1.4,
                        ...(prog.popular ? { bgcolor: prog.color, color: "white", "&:hover": { bgcolor: prog.color, filter: "brightness(0.9)" } }
                          : { borderColor: prog.color, color: prog.color, borderWidth: 2, "&:hover": { bgcolor: `${prog.color}08`, borderWidth: 2 } })
                      }}>
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Enterprise */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Card elevation={0} sx={{ borderRadius: 5, background: isDark ? "linear-gradient(135deg, #141428, #1a1a35)" : "linear-gradient(135deg, #1a1a2e, #2a2a50)", p: { xs: 4, md: 6 }, border: "1px solid", borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.1)" }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Groups sx={{ color: "#2590f1", fontSize: 36 }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "white" }}>Corporate & School Pricing</Typography>
                </Stack>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", mb: 3 }}>
                  Bringing InnovateAI to your school or organization? We offer customized curriculum, volume discounts, and dedicated support for groups of 20+.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} flexWrap="wrap">
                  {["Group discounts from 20%", "Custom curriculum", "On-site training", "Dedicated account manager"].map((item) => (
                    <Stack key={item} direction="row" spacing={1} alignItems="center">
                      <CheckCircle sx={{ color: "#22c55e", fontSize: 16 }} />
                      <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { md: "right" } }}>
                <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
                  sx={{ bgcolor: "#2590f1", fontWeight: 700, px: 5, py: 2, borderRadius: 3, "&:hover": { bgcolor: "#1a6ec0" } }}>
                  Get Custom Quote
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: sectionBg }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" fontWeight={800} gutterBottom>FAQ</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>Have more questions? Our team is happy to help.</Typography>
              <Button component={Link} href="/contact" variant="contained" size="large"
                sx={{ bgcolor: "#2590f1", fontWeight: 700, px: 4, py: 1.8, borderRadius: 3 }}>
                Contact Us
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              {FAQS.map((faq) => (
                <Accordion key={faq.q} elevation={0} sx={{ border: "1px solid", borderColor: "divider", borderRadius: "16px !important", mb: 2, overflow: "hidden", bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff" }}>
                  <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 3, py: 1 }}>
                    <Typography fontWeight={700}>{faq.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{faq.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Favorite sx={{ color: "#ef4444", fontSize: 44, mb: 3 }} />
          <Typography variant="h3" fontWeight={800} gutterBottom>Try Your First Class Free</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem", mb: 5, maxWidth: 480, mx: "auto" }}>
            Not sure yet? Book a free introductory session — no credit card, no commitment required.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: "#2590f1", fontWeight: 700, px: 5, py: 2, borderRadius: 3, "&:hover": { bgcolor: "#1a6ec0" } }}>
              Book Free Trial
            </Button>
            <Button component={Link} href="/programs" variant="outlined" size="large"
              sx={{ borderColor: "divider", color: "text.primary", px: 5, py: 2, borderRadius: 3, borderWidth: 2, "&:hover": { borderWidth: 2 } }}>
              Explore Programs
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
