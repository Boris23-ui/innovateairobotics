"use client";

import React, { useState } from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, Chip, Stack, Paper, ToggleButton, ToggleButtonGroup,
  Accordion, AccordionSummary, AccordionDetails,
} from "@mui/material";
import {
  CheckCircle, ExpandMore, ArrowForward, EmojiEvents,
  School, Groups, Computer, Favorite,
} from "@mui/icons-material";
import Link from "next/link";

const PROGRAMS = [
  {
    name: "Tiny Tinkerers",
    age: "Ages 5 & Under",
    color: "#f59e0b",
    colorLight: "rgba(245,158,11,0.10)",
    monthly: 199,
    semester: 899,
    href: "/programs/tiny-tinkerers",
    features: ["Weekly 45-60 min sessions", "Max 8 students per class", "All materials included", "Monthly parent progress report", "Free make-up class per month"],
    popular: false,
  },
  {
    name: "Robot Explorers",
    age: "Ages 6-9",
    color: "#10b981",
    colorLight: "rgba(16,185,129,0.10)",
    monthly: 249,
    semester: 1099,
    href: "/programs/robot-explorers",
    features: ["Weekly 60-75 min sessions", "Max 10 students per class", "LEGO Mindstorms kit access", "Project portfolio per semester", "Online learning portal access"],
    popular: false,
  },
  {
    name: "Tech Titans",
    age: "Ages 10-12",
    color: "#3b82f6",
    colorLight: "rgba(59,130,246,0.10)",
    monthly: 299,
    semester: 1299,
    href: "/programs/tech-titans",
    features: ["Weekly 75-90 min sessions", "Max 12 students per class", "EV3/Spike kit + Python IDE", "Semester-end demo day", "Competition prep included"],
    popular: true,
  },
  {
    name: "AI Avengers",
    age: "Ages 13-17",
    color: "#8b5cf6",
    colorLight: "rgba(139,92,246,0.10)",
    monthly: 349,
    semester: 1499,
    href: "/programs/ai-avengers",
    features: ["Weekly 90-120 min sessions", "Max 12 students per class", "Drone + AI hardware access", "College portfolio project", "Industry mentor sessions"],
    popular: false,
  },
  {
    name: "Senior Innovators",
    age: "Ages 18+",
    color: "#0891b2",
    colorLight: "rgba(8,145,178,0.10)",
    monthly: 279,
    semester: 1199,
    href: "/programs/seniors",
    features: ["Weekly 90-120 min sessions", "Max 15 students per class", "All materials provided", "Flexible scheduling options", "Corporate group rates available"],
    popular: false,
  },
];

const FAQS = [
  { q: "Is there a free trial class?", a: "Yes! We offer one free introductory class for all new students. No commitment required. Contact us to schedule yours." },
  { q: "What happens if my child misses a class?", a: "Each monthly enrollment includes one free make-up class. Additional make-up sessions can be scheduled for a small fee." },
  { q: "Are materials included in the tuition?", a: "Yes — all specialized robotics materials, hardware access, and software licenses are included in the monthly tuition. Students do not need to purchase any additional materials." },
  { q: "Do you offer scholarships or financial aid?", a: "Yes. We believe every child deserves access to AI education. Need-based scholarships are available. Contact info@innovateairobotics.com to learn more." },
  { q: "Can I enroll mid-semester?", a: "Absolutely. We welcome new students throughout the year. We will work with you to catch up on any missed foundational concepts." },
  { q: "Is there a semester commitment?", a: "Monthly enrollment is available with no long-term commitment. Semester packages offer a 25% discount and are paid upfront. You can pause or cancel anytime with 30 days notice." },
];

const INCLUDED = [
  { icon: CheckCircle, text: "All robotics kits and hardware" },
  { icon: CheckCircle, text: "Software licenses and online tools" },
  { icon: CheckCircle, text: "Curriculum materials and workbooks" },
  { icon: CheckCircle, text: "Access to online learning portal" },
  { icon: CheckCircle, text: "Monthly progress reports" },
  { icon: CheckCircle, text: "InnovateAI student community access" },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "semester">("monthly");

  return (
    <Box>
      {/* HERO */}
      <Box sx={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", py: { xs: 10, md: 14 }, textAlign: "center", position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "20%", left: "5%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)", pointerEvents: "none" }} />
        <Box sx={{ position: "absolute", bottom: "10%", right: "5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)", pointerEvents: "none" }} />
        <Container maxWidth="md">
          <Chip label="Transparent Pricing" sx={{ bgcolor: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(37,99,235,0.3)", fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.8rem" }, fontWeight: 900, color: "white", mb: 2 }}>
            Simple, Fair Pricing
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.72)", mb: 6, maxWidth: 560, mx: "auto" }}>
            No hidden fees. No long-term contracts required. Just world-class AI education.
          </Typography>
          <ToggleButtonGroup value={billing} exclusive onChange={(_, v) => v && setBilling(v)}
            sx={{ bgcolor: "rgba(255,255,255,0.1)", borderRadius: 3, p: 0.5, border: "1px solid rgba(255,255,255,0.2)" }}>
            <ToggleButton value="monthly" sx={{ px: 4, py: 1.5, color: "rgba(255,255,255,0.7)", fontWeight: 600, borderRadius: "10px !important", border: "none", "&.Mui-selected": { bgcolor: "white", color: "#0f172a", fontWeight: 700 } }}>
              Monthly
            </ToggleButton>
            <ToggleButton value="semester" sx={{ px: 4, py: 1.5, color: "rgba(255,255,255,0.7)", fontWeight: 600, borderRadius: "10px !important", border: "none", "&.Mui-selected": { bgcolor: "white", color: "#0f172a", fontWeight: 700 } }}>
              Semester — Save 25%
            </ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Box>

      {/* WHAT IS INCLUDED */}
      <Box sx={{ py: 5, bgcolor: "#2563eb" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sx={{ textAlign: "center", mb: 1 }}>
              <Typography sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "0.9rem", letterSpacing: 1.5, textTransform: "uppercase" }}>
                Everything included in every program
              </Typography>
            </Grid>
            {INCLUDED.map(({ icon: Icon, text }) => (
              <Grid item key={text}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Icon sx={{ color: "rgba(255,255,255,0.9)", fontSize: 18 }} />
                  <Typography sx={{ color: "white", fontWeight: 500, fontSize: "0.95rem" }}>{text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PRICING CARDS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} justifyContent="center">
            {PROGRAMS.map((prog) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={prog.name}>
                <Card elevation={0} sx={{ border: prog.popular ? `2px solid ${prog.color}` : "1px solid #e5e7eb", borderRadius: 4, height: "100%", display: "flex", flexDirection: "column", position: "relative", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-6px)", boxShadow: `0 20px 50px ${prog.color}25` } }}>
                  {prog.popular && (
                    <Box sx={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}>
                      <Chip label="Most Popular" size="small" sx={{ bgcolor: prog.color, color: "white", fontWeight: 700 }} />
                    </Box>
                  )}
                  <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ width: 44, height: 44, borderRadius: 3, bgcolor: `${prog.color}20`, display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                      <School sx={{ color: prog.color, fontSize: 22 }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#0f172a", mb: 0.5 }}>{prog.name}</Typography>
                    <Chip label={prog.age} size="small" sx={{ bgcolor: `${prog.color}15`, color: prog.color, fontWeight: 600, mb: 3, alignSelf: "flex-start", fontSize: "0.75rem" }} />

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", lineHeight: 1 }}>
                        ${billing === "monthly" ? prog.monthly : Math.round(prog.semester / 6)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {billing === "monthly" ? "per month" : "per month (billed semesterly)"}
                      </Typography>
                      {billing === "semester" && (
                        <Chip label={`$${prog.semester} total — save $${prog.monthly * 6 - prog.semester}`} size="small"
                          sx={{ bgcolor: "rgba(16,185,129,0.1)", color: "#10b981", fontWeight: 600, mt: 1, fontSize: "0.7rem" }} />
                      )}
                    </Box>

                    <Stack spacing={1} sx={{ flexGrow: 1, mb: 3 }}>
                      {prog.features.map((f) => (
                        <Stack key={f} direction="row" spacing={1} alignItems="flex-start">
                          <CheckCircle sx={{ color: prog.color, fontSize: 15, mt: 0.4, flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: "#4b5563", fontSize: "0.83rem" }}>{f}</Typography>
                        </Stack>
                      ))}
                    </Stack>

                    <Button component={Link} href="/contact" variant={prog.popular ? "contained" : "outlined"} fullWidth
                      sx={{ borderRadius: 3, fontWeight: 700, py: 1.4,
                        ...(prog.popular ? { bgcolor: prog.color, color: prog.color === "#f59e0b" ? "black" : "white", "&:hover": { bgcolor: prog.color, filter: "brightness(0.9)" } }
                          : { borderColor: prog.color, color: prog.color, "&:hover": { bgcolor: `${prog.color}10` } })
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

      {/* ENTERPRISE */}
      <Box sx={{ py: 6, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Card elevation={0} sx={{ borderRadius: 4, background: "linear-gradient(135deg, #0f172a, #1e3a5f)", p: { xs: 4, md: 6 } }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Groups sx={{ color: "#60a5fa", fontSize: 36 }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "white" }}>Corporate & School Pricing</Typography>
                </Stack>
                <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", mb: 3 }}>
                  Bringing InnovateAI to your school, district, or organization? We offer customized curriculum, volume discounts, and dedicated instructor support for groups of 20 or more.
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                  {["Group discounts starting at 20%", "Custom curriculum development", "On-site instructor training", "Dedicated account manager"].map((item) => (
                    <Stack key={item} direction="row" spacing={1} alignItems="center">
                      <CheckCircle sx={{ color: "#10b981", fontSize: 18 }} />
                      <Typography sx={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}>{item}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { md: "right" } }}>
                <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
                  sx={{ bgcolor: "#2563eb", color: "white", fontWeight: 700, px: 5, py: 2, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#1d4ed8" } }}>
                  Get Custom Quote
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* FAQ */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={4}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>Frequently Asked Questions</Typography>
              <Typography sx={{ color: "text.secondary", mb: 4 }}>
                Have more questions? Our team is happy to help.
              </Typography>
              <Button component={Link} href="/contact" variant="contained" size="large"
                sx={{ bgcolor: "#2563eb", color: "white", fontWeight: 700, px: 4, py: 1.8, borderRadius: 3 }}>
                Contact Us
              </Button>
            </Grid>
            <Grid item xs={12} md={8}>
              {FAQS.map((faq) => (
                <Accordion key={faq.q} elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: "12px !important", mb: 2, "&:before": { display: "none" }, overflow: "hidden" }}>
                  <AccordionSummary expandIcon={<ExpandMore />} sx={{ px: 3, py: 1 }}>
                    <Typography sx={{ fontWeight: 700, color: "#0f172a" }}>{faq.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ px: 3, pb: 3 }}>
                    <Typography sx={{ color: "#4b5563", lineHeight: 1.8 }}>{faq.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: "white", textAlign: "center" }}>
        <Container maxWidth="md">
          <Favorite sx={{ color: "#ef4444", fontSize: 48, mb: 3 }} />
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>Start with a Free Class</Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "1.15rem", mb: 5, maxWidth: 500, mx: "auto" }}>
            Not sure yet? Let your child try a free introductory session — no credit card required.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<ArrowForward />}
              sx={{ bgcolor: "#2563eb", color: "white", fontWeight: 700, px: 5, py: 2, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#1d4ed8" } }}>
              Book Free Trial Class
            </Button>
            <Button component={Link} href="/programs" variant="outlined" size="large"
              sx={{ borderColor: "#e5e7eb", color: "#374151", px: 5, py: 2, borderRadius: 3, fontSize: "1.05rem" }}>
              Explore Programs
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
