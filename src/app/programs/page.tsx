"use client";

import React from "react";
import {
  Container, Typography, Box, Grid, Card, CardContent,
  Button, Paper, Chip, Stack, useTheme,
} from "@mui/material";
import {
  ChildCare, Code, Science, Psychology, Engineering,
  CheckCircle, ArrowForward, EmojiEvents, Groups, School,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const programs = [
  { title: "Tiny Tinkerers", ageRange: "Ages 5 & Under", tagline: "Where curiosity meets creativity", description: "An age-appropriate introduction to AI and robotics through interactive play. Young learners meet robot friends, discover how they move, and explore cause-and-effect in a joyful, safe environment.", color: "#f59e0b", href: "/programs/tiny-tinkerers", highlights: ["Visual storytelling with robots", "Drag-and-drop coding intro", "Pattern recognition games", "Collaborative play activities"], image: "/images/Kids sorting kit components.jpg", badge: "Most Popular" },
  { title: "Robot Explorers", ageRange: "Ages 6-9", tagline: "Build, code, and discover", description: "Dive into hands-on robotics by building and programming your first autonomous robots. Students explore sensors, block coding, and simple algorithms while solving fun challenges.", color: "#10b981", href: "/programs/robot-explorers", highlights: ["Block-based visual coding", "Sensor integration basics", "Looping and logic concepts", "Mechanical assembly projects"], image: "/images/Mountain-view-classes-4.jpg", badge: null },
  { title: "Tech Titans", ageRange: "Ages 10-12", tagline: "Code with purpose", description: "Level up with Python programming, circuit design, and advanced robotics control. Students tackle algorithmic thinking, sensor fusion, and complex builds.", color: "#3b82f6", href: "/programs/tech-titans", highlights: ["Python programming", "Circuit design and electronics", "Algorithm thinking", "Multi-sensor systems"], image: "/images/kids_designing_simple_machines.jpg", badge: null },
  { title: "AI Avengers", ageRange: "Ages 13-17", tagline: "Master the future of AI", description: "The most advanced youth track. Students master AI, machine learning, and computer vision through real projects and industry-grade tools.", color: "#8b5cf6", href: "/programs/ai-avengers", highlights: ["Neural networks and ML", "Computer vision with OpenCV", "Autonomous programming", "AI ethics and impact"], image: "/images/Palo-alto-classes-5.jpg", badge: "Advanced" },
  { title: "Senior Innovators", ageRange: "Ages 18+", tagline: "It is never too late to innovate", description: "A comprehensive adult program for professionals and lifelong learners. Explore AI, robotics, and automation with career-relevant skills.", color: "#0891b2", href: "/programs/seniors", highlights: ["Professional robotics dev", "ROS and advanced frameworks", "AI integration for business", "Hands-on capstone projects"], image: "/images/Palo-alto-classes-6.jpg", badge: null },
];

const stats = [
  { value: "10,000+", label: "Active Students" },
  { value: "5", label: "Age-Based Tracks" },
  { value: "50+", label: "Hands-On Projects" },
  { value: "150+", label: "Partner Schools" },
];

const howItWorks = [
  { step: "01", title: "Choose Your Track", description: "Select the program that matches your age and experience level." },
  { step: "02", title: "Learn and Build", description: "Work through structured lessons combining theory with hands-on projects." },
  { step: "03", title: "Earn Badges", description: "Complete milestones and earn digital badges showcasing your skills." },
  { step: "04", title: "Advance", description: "Graduate to the next track or deepen your specialty." },
];

const ProgramIcon: React.FC<{ title: string }> = ({ title }) => {
  const map: Record<string, React.ReactElement> = {
    "Tiny Tinkerers": <ChildCare sx={{ fontSize: 40 }} />,
    "Robot Explorers": <Code sx={{ fontSize: 40 }} />,
    "Tech Titans": <Science sx={{ fontSize: 40 }} />,
    "AI Avengers": <Psychology sx={{ fontSize: 40 }} />,
    "Senior Innovators": <Engineering sx={{ fontSize: 40 }} />,
  };
  return map[title] || <School sx={{ fontSize: 40 }} />;
};

export default function ProgramsPage() {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const sectionBg = isDark ? "#0f0f1a" : "#f7f7ff";

  return (
    <>
      {/* Hero */}
      <Box sx={{ background: isDark ? "linear-gradient(135deg, #0f0f1a 0%, #1a1a35 100%)" : "linear-gradient(135deg, #eef0ff 0%, #f7f7ff 100%)", py: { xs: 8, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(37,144,241,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(145,135,255,0.08) 0%, transparent 50%)" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Chip label="5 Programs | All Ages | In-Person and Online" sx={{ mb: 3, bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(37,144,241,0.1)", color: isDark ? "white" : "primary.main", fontWeight: 600 }} />
          <Typography variant="h1" component="h1" sx={{ fontWeight: 800, fontSize: { xs: "2.5rem", md: "4rem" }, lineHeight: 1.08, mb: 3 }}>
            {"Programs for "}
            <Box component="span" sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Every Age</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 640, mx: "auto", mb: 6, fontSize: "1.15rem", lineHeight: 1.7 }}>
            From toddlers discovering robots for the first time to adults mastering AI, we have a program built specifically for you.
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {stats.map((s) => (
              <Grid item xs={6} sm={3} key={s.label}>
                <Paper sx={{ p: { xs: 2, md: 3 }, bgcolor: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)", border: "1px solid", borderColor: "divider", borderRadius: 4 }}>
                  <Typography variant="h4" fontWeight={800} sx={{ mb: 0.5, fontSize: { xs: "1.6rem", md: "2rem" } }}>{s.value}</Typography>
                  <Typography variant="body2" color="text.secondary">{s.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" fontWeight={800} gutterBottom>Find Your Track</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: "auto" }}>
            Each track is age-appropriate, hands-on, and designed to build real skills.
          </Typography>
        </Box>
        <Stack spacing={4}>
          {programs.map((program, index) => (
            <Card key={program.title} elevation={0} sx={{ borderRadius: 5, overflow: "hidden", border: "1px solid", borderColor: "divider", bgcolor: isDark ? "rgba(255,255,255,0.02)" : "#fff", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-4px)", borderColor: program.color, boxShadow: `0 20px 60px ${program.color}15` } }}>
              <Grid container>
                <Grid item xs={12} md={5} sx={{ order: { md: index % 2 === 0 ? 0 : 1 } }}>
                  <Box sx={{ position: "relative", height: { xs: 240, md: "100%" }, minHeight: { md: 340 } }}>
                    <Image src={program.image} alt={program.title} fill style={{ objectFit: "cover" }} />
                    {program.badge && <Chip label={program.badge} sx={{ position: "absolute", top: 16, left: 16, bgcolor: program.color, color: "white", fontWeight: 700 }} />}
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <CardContent sx={{ p: { xs: 3, md: 5 }, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap" }}>
                      <Box sx={{ color: program.color }}><ProgramIcon title={program.title} /></Box>
                      <Box>
                        <Typography variant="h4" fontWeight={800} sx={{ mb: 0.5, fontSize: { xs: "1.5rem", md: "1.75rem" } }}>{program.title}</Typography>
                        <Chip label={program.ageRange} size="small" sx={{ bgcolor: `${program.color}18`, color: program.color, fontWeight: 600 }} />
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ color: program.color, fontWeight: 600, mb: 2, fontStyle: "italic" }}>{program.tagline}</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.7 }}>{program.description}</Typography>
                    <Grid container spacing={1} sx={{ mb: 3 }}>
                      {program.highlights.map((item) => (
                        <Grid item xs={12} sm={6} key={item}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircle sx={{ color: program.color, fontSize: 16, flexShrink: 0 }} />
                            <Typography variant="body2" fontWeight={500} color="text.primary">{item}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ mt: "auto" }}>
                      <Button variant="contained" endIcon={<ArrowForward />} onClick={() => router.push(program.href)}
                        sx={{ bgcolor: program.color, "&:hover": { bgcolor: program.color, filter: "brightness(0.9)" }, px: 4, py: 1.5, borderRadius: 3, fontWeight: 700 }}>
                        Explore {program.title}
                      </Button>
                    </Box>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Stack>
      </Container>

      {/* How It Works */}
      <Box sx={{ bgcolor: sectionBg, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight={800} gutterBottom>How It Works</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 480, mx: "auto" }}>Your path from curious beginner to confident innovator.</Typography>
          </Box>
          <Grid container spacing={3}>
            {howItWorks.map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.step}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: 5, border: "1px solid", borderColor: "divider", height: "100%", textAlign: "center", bgcolor: isDark ? "rgba(255,255,255,0.03)" : "#fff", transition: "all 0.3s ease", "&:hover": { transform: "translateY(-6px)", borderColor: "primary.main" } }}>
                  <Typography sx={{ fontWeight: 900, background: "linear-gradient(135deg, #2590f1, #9187ff)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", mb: 2, fontSize: "3rem" }}>{step.step}</Typography>
                  <Typography variant="h6" fontWeight={700} gutterBottom>{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{step.description}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Gallery */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" fontWeight={800} gutterBottom>Learning in Action</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, mx: "auto" }}>From Mountain View to Nairobi, our students are building the future.</Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            { src: "/images/Nairobi-classes-7.jpg", label: "Nairobi, Kenya", md: 8 },
            { src: "/images/young-robotics-engineers.jpg", label: "Mountain View, CA", md: 4 },
            { src: "/images/kids getting ready for class.jpg", label: "Palo Alto, CA", md: 4 },
            { src: "/images/Mountain-view-classes-8.jpg", label: "Mountain View, CA", md: 8 },
          ].map((img) => (
            <Grid item xs={12} md={img.md} key={img.src}>
              <Box sx={{ position: "relative", height: 260, borderRadius: 4, overflow: "hidden", border: "1px solid", borderColor: "divider" }}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <Typography variant="caption" sx={{ color: "white", fontWeight: 600 }}>{img.label}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ background: "linear-gradient(135deg, #2590f1, #9187ff)", py: { xs: 8, md: 12 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <EmojiEvents sx={{ fontSize: 56, color: "rgba(255,255,255,0.8)", mb: 2 }} />
          <Typography variant="h3" fontWeight={800} color="white" gutterBottom sx={{ fontSize: { xs: "1.8rem", md: "2.8rem" } }}>
            Ready to Find Your Program?
          </Typography>
          <Typography variant="body1" sx={{ color: "rgba(255,255,255,0.8)", mb: 5, fontSize: "1.1rem" }}>
            Join thousands of students already building the future.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button variant="contained" size="large" startIcon={<School />} onClick={() => router.push("/contact")}
              sx={{ bgcolor: "white", color: "#2590f1", fontWeight: 700, px: 5, py: 2, borderRadius: 3, "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}>
              Enroll Now
            </Button>
            <Button variant="outlined" size="large" startIcon={<Groups />} onClick={() => router.push("/contact")}
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.5)", borderWidth: 2, fontWeight: 700, px: 5, py: 2, borderRadius: 3, "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)", borderWidth: 2 } }}>
              Talk to Our Team
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
