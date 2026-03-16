"use client";

import React, { useState } from "react";
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Button, TextField, MenuItem, Stack, Chip, Snackbar, Alert,
} from "@mui/material";
import {
  LocationOn, Phone, Email, Send, AccessTime,
  Public, CheckCircle,
} from "@mui/icons-material";
import Image from "next/image";

const PROGRAMS = [
  "Tiny Tinkerers (Ages 5 & Under)",
  "Robot Explorers (Ages 6-9)",
  "Tech Titans (Ages 10-12)",
  "AI Avengers (Ages 13-17)",
  "Senior Innovators (Ages 18+)",
  "Corporate / Group Training",
  "General Inquiry",
];

const CAMPUSES = [
  {
    name: "Mountain View (HQ)",
    address: "837 Reinert Rd, Mountain View, CA 94043",
    phone: "+1 (650) 619-4676",
    hours: "Mon-Fri 9am-7pm, Sat 9am-5pm",
    image: "/images/Mountain-view-classes-4.jpg",
    flag: "🇺🇸",
  },
  {
    name: "Palo Alto Campus",
    address: "Palo Alto, California",
    phone: "+1 (650) 619-4676",
    hours: "Tue, Thu, Sat — flexible scheduling",
    image: "/images/palo-alto-classes-6.jpg",
    flag: "🇺🇸",
  },
  {
    name: "Nairobi Campus",
    address: "Nairobi, Kenya",
    phone: "Contact via email",
    hours: "Mon-Sat — flexible scheduling",
    image: "/images/Nairobi-classes-1.JPG",
    flag: "🇰🇪",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", program: "", message: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* HERO */}
      <Box sx={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", py: { xs: 10, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", top: "10%", right: "8%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)", pointerEvents: "none" }} />
        <Container maxWidth="lg">
          <Chip label="Get In Touch" sx={{ bgcolor: "rgba(37,99,235,0.15)", color: "#60a5fa", border: "1px solid rgba(37,99,235,0.3)", fontWeight: 700, mb: 3 }} />
          <Typography variant="h1" sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, fontWeight: 900, color: "white", mb: 2, lineHeight: 1.15 }}>
            Let's Connect
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.72)", maxWidth: 540 }}>
            Ready to enroll, have questions, or want to visit a campus? We would love to hear from you.
          </Typography>
        </Container>
      </Box>

      {/* CONTACT CARDS */}
      <Box sx={{ py: 6, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              { icon: LocationOn, label: "Visit Us", value: "837 Reinert Rd, Mountain View, CA 94043", color: "#2563eb" },
              { icon: Phone, label: "Call Us", value: "+1 (650) 619-4676", color: "#10b981" },
              { icon: Email, label: "Email Us", value: "info@innovateairobotics.com", color: "#f59e0b" },
              { icon: AccessTime, label: "Office Hours", value: "Mon-Fri 9am-7pm PST", color: "#8b5cf6" },
            ].map(({ icon: Icon, label, value, color }) => (
              <Grid item xs={12} sm={6} md={3} key={label}>
                <Card elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 4, height: "100%", textAlign: "center", p: 1, transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 12px 32px rgba(0,0,0,0.1)" } }}>
                  <CardContent sx={{ py: 4 }}>
                    <Box sx={{ width: 56, height: 56, borderRadius: "50%", bgcolor: `${color}15`, display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
                      <Icon sx={{ color, fontSize: 28 }} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, color: "#374151", mb: 0.5 }}>{label}</Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>{value}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FORM + INFO */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "white" }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* FORM */}
            <Grid item xs={12} md={7}>
              <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 1 }}>Send Us a Message</Typography>
              <Typography sx={{ color: "text.secondary", mb: 5 }}>
                Fill out the form and our team will get back to you within one business day.
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Full Name" name="name" value={form.name} onChange={handleChange} required
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} required
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Phone (optional)" name="phone" value={form.phone} onChange={handleChange}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth select label="Program Interest" name="program" value={form.program} onChange={handleChange}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }}>
                      {PROGRAMS.map((p) => <MenuItem key={p} value={p}>{p}</MenuItem>)}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth multiline rows={5} label="Your Message" name="message" value={form.message} onChange={handleChange} required
                      placeholder="Tell us about your child's age, experience level, and any questions you have..."
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3 } }} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large" disabled={loading} endIcon={<Send />}
                      sx={{ bgcolor: "#2563eb", color: "white", fontWeight: 700, px: 5, py: 1.8, borderRadius: 3, fontSize: "1.05rem", "&:hover": { bgcolor: "#1d4ed8" } }}>
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* INFO */}
            <Grid item xs={12} md={5}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0f172a", mb: 4 }}>Why Reach Out?</Typography>
              <Stack spacing={3} sx={{ mb: 6 }}>
                {[
                  { title: "Free Trial Class", desc: "We offer a free introductory session so your child can experience our program before committing." },
                  { title: "Flexible Scheduling", desc: "We work around your schedule — weekday evenings, weekends, and online options available." },
                  { title: "Scholarship Programs", desc: "Need-based financial assistance is available. Ask us about our scholarship opportunities." },
                  { title: "School Partnerships", desc: "Bring InnovateAI to your school — we offer after-school and in-curriculum programs." },
                ].map(({ title, desc }) => (
                  <Stack key={title} direction="row" spacing={2} alignItems="flex-start">
                    <CheckCircle sx={{ color: "#2563eb", mt: 0.5 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700, color: "#0f172a" }}>{title}</Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>{desc}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
              <Box sx={{ position: "relative", height: 260, borderRadius: 4, overflow: "hidden" }}>
                <Image src="/images/Nairobi-classes-7.jpg" alt="Students in class" fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                <Box sx={{ position: "absolute", bottom: 16, left: 16 }}>
                  <Typography sx={{ color: "white", fontWeight: 700 }}>Global Campuses</Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>Mountain View • Palo Alto • Nairobi • Online</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CAMPUS CARDS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f8fafc" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#0f172a", mb: 2 }}>Our Campuses</Typography>
            <Typography sx={{ color: "text.secondary", maxWidth: 500, mx: "auto" }}>
              Visit us in person at one of our campuses, or join us online from anywhere in the world.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {CAMPUSES.map((campus) => (
              <Grid item xs={12} md={4} key={campus.name}>
                <Card elevation={0} sx={{ border: "1px solid #e5e7eb", borderRadius: 4, overflow: "hidden", height: "100%", transition: "transform 0.2s, box-shadow 0.2s", "&:hover": { transform: "translateY(-4px)", boxShadow: "0 16px 40px rgba(0,0,0,0.1)" } }}>
                  <Box sx={{ position: "relative", height: 200 }}>
                    <Image src={campus.image} alt={campus.name} fill style={{ objectFit: "cover" }} />
                    <Box sx={{ position: "absolute", top: 12, right: 12, bgcolor: "white", borderRadius: 2, px: 1.5, py: 0.5 }}>
                      <Typography sx={{ fontSize: "1.2rem" }}>{campus.flag}</Typography>
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#0f172a" }}>{campus.name}</Typography>
                    <Stack spacing={1.5}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <LocationOn sx={{ color: "#2563eb", fontSize: 18, mt: 0.3 }} />
                        <Typography variant="body2" sx={{ color: "#4b5563" }}>{campus.address}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Phone sx={{ color: "#10b981", fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: "#4b5563" }}>{campus.phone}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <AccessTime sx={{ color: "#f59e0b", fontSize: 18 }} />
                        <Typography variant="body2" sx={{ color: "#4b5563" }}>{campus.hours}</Typography>
                      </Stack>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* ONLINE */}
          <Card elevation={0} sx={{ mt: 4, border: "1px solid #e5e7eb", borderRadius: 4, p: 4, background: "linear-gradient(135deg, #0f172a, #1e3a5f)" }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                  <Public sx={{ color: "#60a5fa", fontSize: 32 }} />
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "white" }}>Online Programs — Global Access</Typography>
                </Stack>
                <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem" }}>
                  Can't make it to a physical campus? All our programs are available fully online via our interactive virtual classroom. Students from 30+ countries have participated in our online sessions.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ textAlign: { md: "right" } }}>
                <Button variant="contained" size="large" sx={{ bgcolor: "#2563eb", color: "white", fontWeight: 700, px: 4, py: 1.8, borderRadius: 3, "&:hover": { bgcolor: "#1d4ed8" } }}>
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
