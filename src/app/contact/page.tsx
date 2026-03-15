"use client";

import React, { useState } from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, TextField, MenuItem, Stack, Chip, Snackbar, Alert, useTheme,
} from "@mui/material";
import { LocationOn, Phone, Email, Send, AccessTime, Public, CheckCircle } from "@mui/icons-material";
import Image from "next/image";

const PROGRAMS = [
  "Tiny Tinkerers (Ages 5 & Under)", "Robot Explorers (Ages 6-9)",
  "Tech Titans (Ages 10-12)", "AI Avengers (Ages 13-17)",
  "Senior Innovators (Ages 18+)", "Corporate / Group Training", "General Inquiry",
];

const CAMPUSES = [
  { name: "Mountain View (HQ)", address: "837 Reinert Rd, Mountain View, CA 94043", phone: "+1 (650) 619-4676", hours: "Mon-Fri 9am-7pm, Sat 9am-5pm", image: "/images/Mountain-view-classes-4.jpg", flag: "🇺🇸" },
  { name: "Palo Alto Campus", address: "Palo Alto, California", phone: "+1 (650) 619-4676", hours: "Tue, Thu, Sat — flexible", image: "/images/palo-alto-classes-6.jpg", flag: "🇺🇸" },
  { name: "Nairobi Campus", address: "Nairobi, Kenya", phone: "Contact via email", hours: "Mon-Sat — flexible", image: "/images/Nairobi-classes-1.JPG", flag: "🇰🇪" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionBg = isDark ? "#0f0f1a" : "#f7f7ff";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setSuccess(true); setForm({ name: "", email: "", phone: "", program: "", message: "" }); }
      else setError(true);
    } catch { setError(true); }
    finally { setLoading(false); }
  };

  return (
    <Box>
      {/* Hero */}
      <Box sx={{ background: isDark ? "linear-gradient(135deg, #0f0f1a 0%, #1a1a35 100%)" : "linear-gradient(135deg, #eef0ff 0%, #f7f7ff 100%)", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "10%", right: "8%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,144,241,0.1), transparent 70%)", pointerEvents: "none" }} />
        <Container maxWidth="lg">
          <Chip label="Get In Touch" sx={{ bgcolor: isDark ? "rgba(37,144,241,0.12)" : "rgba(37,144,241,0.1)", color: "primary.main", fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 800, mb: 2, lineHeight: 1.1 }}>
            Let's{" "}
            <Box component="span" sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Connect</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 500, fontSize: "1.1rem" }}>
            Ready to enroll, have questions, or want to visit a campus? We would love to hear from you.
          </Typography>
        </Container>
      </Box>

      {/* Contact Cards */}
      <Box sx={{ py: 6, bgcolor: sectionBg }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { icon: LocationOn, label: "Visit Us", value: "837 Reinert Rd, Mountain View, CA 94043", color: "#2590f1" },
              { icon: Phone, label: "Call Us", value: "+1 (650) 619-4676", color: "#22c55e" },
              { icon: Email, label: "Email Us", value: "info@innovateairobotics.com", color: "#f59e0b" },
              { icon: AccessTime, label: "Office Hours", value: "Mon-Fri 9am-7pm PST", color: "#9187ff" },
            ].map(({ icon: Icon, label, value, color }) => (
              <Grid item xs={12} sm={6} md={3} key={label}>
                <Card elevation={0} sx={{ borderRadius: 5, height: "100%", textAlign: "center", border: "1px solid", borderColor: "divider", bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", borderColor: color, boxShadow: `0 16px 48px ${color}12` } }}>
                  <CardContent sx={{ py: 4 }}>
                    <Box sx={{ width: 52, height: 52, borderRadius: "50%", bgcolor: `${color}12`, display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
                      <Icon sx={{ color, fontSize: 24 }} />
                    </Box>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>{label}</Typography>
                    <Typography variant="body2" color="text.secondary">{value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Form + Info */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={7}>
              <Typography variant="h3" fontWeight={800} gutterBottom>Send Us a Message</Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 5 }}>
                Fill out the form and our team will get back to you within one business day.
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" name="name" value={form.name} onChange={handleChange} required sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email" name="email" type="email" value={form.email} onChange={handleChange} required sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone (optional)" name="phone" value={form.phone} onChange={handleChange} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth select label="Program Interest" name="program" value={form.program} onChange={handleChange} sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}>
                      {PROGRAMS.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth multiline rows={5} label="Your Message" name="message" value={form.message} onChange={handleChange} required
                      placeholder="Tell us about your child's age, experience level, and any questions..." sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" disabled={loading} endIcon={<Send />}
                      sx={{ bgcolor: "#2590f1", fontWeight: 700, px: 5, py: 1.8, borderRadius: 3, "&:hover": { bgcolor: "#1a6ec0" } }}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 4 }}>Why Reach Out?</Typography>
              <Stack spacing={3} sx={{ mb: 6 }}>
                {[
                  { title: "Free Trial Class", desc: "Experience our program before committing." },
                  { title: "Flexible Scheduling", desc: "Weekday evenings, weekends, and online options." },
                  { title: "Scholarship Programs", desc: "Need-based financial assistance available." },
                  { title: "School Partnerships", desc: "After-school and in-curriculum programs." },
                ].map(({ title, desc }) => (
                  <Stack key={title} direction="row" spacing={2} alignItems="flex-start">
                    <CheckCircle sx={{ color: "primary.main", mt: 0.3, fontSize: 20 }} />
                    <Box>
                      <Typography variant="body1" fontWeight={700}>{title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{desc}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
              <Box sx={{ position: "relative", height: 240, borderRadius: 5, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
                <Image src="/images/Nairobi-classes-7.jpg" alt="Students" fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
                  <Typography sx={{ color: "white", fontWeight: 700 }}>Global Campuses</Typography>
                  <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>Mountain View • Palo Alto • Nairobi • Online</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Campus Cards */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: sectionBg }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" fontWeight={800} gutterBottom>Our Campuses</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: "auto" }}>
              Visit us in person or join online from anywhere.
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {CAMPUSES.map((campus) => (
              <Grid item xs={12} md={4} key={campus.name}>
                <Card elevation={0} sx={{ borderRadius: 5, overflow: "hidden", height: "100%", border: "1px solid", borderColor: "divider", bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", boxShadow: isDark ? "0 20px 60px rgba(0,0,0,0.3)" : "0 20px 60px rgba(0,0,0,0.06)" } }}>
                  <Box sx={{ position: "relative", height: 180 }}>
                    <Image src={campus.image} alt={campus.name} fill style={{ objectFit: "cover" }} />
                    <Box sx={{ position: "absolute", top: 12, right: 12, bgcolor: isDark ? "rgba(255,255,255,0.1)" : "white", borderRadius: 2, px: 1.5, py: 0.5 }}>
                      <Typography sx={{ fontSize: "1.1rem" }}>{campus.flag}</Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>{campus.name}</Typography>
                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <LocationOn sx={{ color: "#2590f1", fontSize: 18, mt: 0.3 }} />
                        <Typography variant="body2" color="text.secondary">{campus.address}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Phone sx={{ color: "#22c55e", fontSize: 18 }} />
                        <Typography variant="body2" color="text.secondary">{campus.phone}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <AccessTime sx={{ color: "#f59e0b", fontSize: 18 }} />
                        <Typography variant="body2" color="text.secondary">{campus.hours}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Online */}
          <Card elevation={0} sx={{ mt: 4, borderRadius: 5, p: { xs: 3, md: 5 }, background: isDark ? "linear-gradient(135deg, #141428, #1a1a35)" : "linear-gradient(135deg, #1a1a2e, #2a2a50)", border: "1px solid", borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.1)" }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Public sx={{ color: "#2590f1", fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "white" }}>Online Programs — Global Access</Typography>
                </Stack>
                <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem" }}>
                  All programs available fully online via our interactive virtual classroom. Students from 30+ countries participate.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { md: "right" } }}>
                <Button variant="contained" size="large" sx={{ bgcolor: "#2590f1", fontWeight: 700, px: 4, py: 1.8, borderRadius: 3, "&:hover": { bgcolor: "#1a6ec0" } }}>
                  Enroll Online
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: "100%" }}>Message sent! We will get back to you within one business day.</Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert severity="error" sx={{ width: "100%" }}>Something went wrong. Please email us at info@innovateairobotics.com</Alert>
      </Snackbar>
    </Box>
  );
}
