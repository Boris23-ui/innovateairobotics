"use client";

import React from "react";
import {
  Container, Typography, Box, Grid, Card, CardContent,
  Button, Paper, Chip, Stack,
} from "@mui/material";
import {
  ChildCare, Code, Science, Psychology, Engineering,
  CheckCircle, ArrowForward, EmojiEvents, Groups, School,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material";

const programs = [
  {
    title: "Tiny Tinkerers", ageRange: "Ages 5 & Under",
    tagline: "Where curiosity meets creativity",
    description: "An age-appropriate introduction to early engineering through hands-on play with LEGO bricks. Young learners build simple machines, discover how levers, wheels, and ramps work, and explore cause-and-effect concepts in a joyful, safe environment.",
    color: "#f59e0b", bgColor: "rgba(245,158,11,0.08)", borderColor: "rgba(245,158,11,0.3)",
    href: "/programs/tiny-tinkerers",
    highlights: ["LEGO brick building and construction", "Simple machines exploration", "Cause-and-effect discovery", "Show & Tell presentations"],
    image: "/images/Kids sorting kit components.jpg", badge: "Most Popular",
  },
  {
    title: "Robot Explorers", ageRange: "Ages 6-9",
    tagline: "Build, code, and discover",
    description: "Dive into hands-on robotics by building real mechanical systems with LEGO Mindstorms. Students explore gear trains, pistons, pulleys, and CAM systems while following the Engineering Design Process.",
    color: "#10b981", bgColor: "rgba(16,185,129,0.08)", borderColor: "rgba(16,185,129,0.3)",
    href: "/programs/robot-explorers",
    highlights: ["Gear trains and pulley systems", "Pistons and CAM mechanisms", "LEGO Mindstorms building", "Show & Tell presentations"],
    image: "/images/Mountain-view-classes-4.jpg", badge: null,
  },
  {
    title: "Tech Titans", ageRange: "Ages 10-12",
    tagline: "Code with purpose",
    description: "Level up with EV3 Mindstorms programming, sensor integration, and competition-ready robot design. Students master gear ratios, locomotion systems, and programming with Scratch and EV3 software.",
    color: "#3b82f6", bgColor: "rgba(59,130,246,0.08)", borderColor: "rgba(59,130,246,0.3)",
    href: "/programs/tech-titans",
    highlights: ["EV3 Mindstorms programming", "Color, touch, and ultrasonic sensors", "Gear ratios and locomotion", "FLL competition preparation"],
    image: "/images/Mountain-view-classes-8.jpg", badge: null,
  },
  {
    title: "AI Avengers", ageRange: "Ages 13-17",
    tagline: "Master the future of AI",
    description: "The most advanced youth track. Students master Python programming, data logging, sensor fusion, and autonomous systems while preparing for FLL and World Robotics Olympiad (WRO) competitions.",
    color: "#8b5cf6", bgColor: "rgba(139,92,246,0.08)", borderColor: "rgba(139,92,246,0.3)",
    href: "/programs/ai-avengers",
    highlights: ["Python and EV3 programming", "Data logging and analytics", "Advanced sensor fusion", "FLL & WRO competition prep"],
    image: "/images/mobile robot + gripper.jpg", badge: "Advanced",
  },
  {
    title: "Senior Innovators", ageRange: "Ages 18+",
    tagline: "It is never too late to innovate",
    description: "Designed for educators and professionals. Become a certified STEM Robotics Trainer with comprehensive EV3 Mindstorms training, UAV/drone education, and data analytics skills.",
    color: "#0891b2", bgColor: "rgba(8,145,178,0.08)", borderColor: "rgba(8,145,178,0.3)",
    href: "/programs/seniors",
    highlights: ["STEM Trainer certification", "Advanced EV3 and Python", "UAV/drone fundamentals", "Curriculum development"],
    image: "/images/senior_image.png", badge: null,
  },
];

const stats = [
  { value: "500+", label: "Students Taught" },
  { value: "5", label: "Age-Based Tracks" },
  { value: "50+", label: "Hands-On Projects" },
  { value: "2", label: "Countries" },
];

const howItWorks = [
  { step: "01", title: "Choose Your Track", description: "Select the program that matches your age and experience level." },
  { step: "02", title: "Learn and Build", description: "Work through structured modules combining LEGO Mindstorms building, sensor integration, and programming." },
  { step: "03", title: "Present Your Work", description: "Complete Show & Tell presentations at the end of each module, demonstrating your robot builds and solutions." },
  { step: "04", title: "Advance or Compete", description: "Graduate to the next track, prepare for FLL/WRO competitions, or pursue STEM Trainer certification." },
];

const ProgramIcon: React.FC<{ title: string }> = ({ title }) => {
  const map: Record<string, React.ReactElement> = {
    "Tiny Tinkerers": <ChildCare sx={{ fontSize: 48 }} />,
    "Robot Explorers": <Code sx={{ fontSize: 48 }} />,
    "Tech Titans": <Science sx={{ fontSize: 48 }} />,
    "AI Avengers": <Psychology sx={{ fontSize: 48 }} />,
    "Senior Innovators": <Engineering sx={{ fontSize: 48 }} />,
  };
  return map[title] || <School sx={{ fontSize: 48 }} />;
};

export default function ProgramsPage() {
  const router = useRouter();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <>
      {/* Hero */}
      <Box sx={{ background: "linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%)", py: { xs: 8, md: 14 }, position: "relative", overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(59,130,246,0.07) 0%, transparent 50%)" }} />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Chip label="5 Programs | All Ages | In-Person and Online" sx={{ mb: 3, bgcolor: "rgba(255,255,255,0.1)", color: "white", fontWeight: 600 }} />
          <Typography variant="h1" component="h1" sx={{ fontWeight: 900, color: "white", fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" }, lineHeight: 1.1, mb: 3 }}>
            {"Programs for "}
            <Box component="span" sx={{ background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Every Age
            </Box>
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 700, mx: "auto", mb: 6, fontWeight: 400, lineHeight: 1.6, fontSize: { xs: "1.1rem", md: "1.3rem" } }}>
            From toddlers discovering robots for the first time to adults mastering AI, we have a program built specifically for you.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {stats.map((s) => (
              <Grid item xs={6} sm={3} key={s.label}>
                <Paper sx={{ p: { xs: 2, md: 3 }, bgcolor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3 }}>
                  <Typography variant="h4" fontWeight={800} sx={{ color: "white", mb: 0.5, fontSize: { xs: "1.8rem", md: "2.2rem" } }}>{s.value}</Typography>
                  <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{s.label}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" component="h2" fontWeight={800} gutterBottom>Find Your Track</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}>
            Each track is age-appropriate, hands-on, and designed to build real skills that grow with every student.
          </Typography>
        </Box>
        <Stack spacing={6}>
          {programs.map((program, index) => (
            <Card key={program.title} elevation={0} sx={{ border: "2px solid", borderColor: program.borderColor, borderRadius: 4, overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease", "&:hover": { transform: "translateY(-2px)", boxShadow: 8 } }}>
              <Grid container>
                <Grid item xs={12} md={5} sx={{ order: { md: index % 2 === 0 ? 0 : 1 } }}>
                  <Box sx={{ position: "relative", height: { xs: 260, md: "100%" }, minHeight: { md: 360 } }}>
                    <Image src={program.image} alt={program.title} fill style={{ objectFit: "cover" }} />
                    {program.badge && <Chip label={program.badge} sx={{ position: "absolute", top: 16, left: 16, bgcolor: program.color, color: "white", fontWeight: 700 }} />}
                  </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                  <CardContent sx={{ p: { xs: 3, md: 5 }, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2, flexWrap: "wrap" }}>
                      <Box sx={{ color: program.color }}><ProgramIcon title={program.title} /></Box>
                      <Box>
                        <Typography variant="h4" fontWeight={800} sx={{ mb: 0.5 }}>{program.title}</Typography>
                        <Chip label={program.ageRange} size="small" sx={{ bgcolor: program.bgColor, color: program.color, fontWeight: 700 }} />
                      </Box>
                    </Box>
                    <Typography variant="h6" sx={{ color: program.color, fontWeight: 600, mb: 2, fontStyle: "italic" }}>{program.tagline}</Typography>
                    <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>{program.description}</Typography>
                    <Grid container spacing={1.5} sx={{ mb: 3 }}>
                      {program.highlights.map((item) => (
                        <Grid item xs={12} sm={6} key={item}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <CheckCircle sx={{ color: program.color, fontSize: 18, flexShrink: 0 }} />
                            <Typography variant="body2" fontWeight={500}>{item}</Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ mt: "auto" }}>
                      <Button variant="contained" endIcon={<ArrowForward />} onClick={() => router.push(program.href)}
                        sx={{ bgcolor: program.color, "&:hover": { bgcolor: program.color, filter: "brightness(0.9)" }, px: 4, py: 1.5, borderRadius: 2, fontWeight: 700, textTransform: "none", fontSize: "1rem" }}>
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
      <Box sx={{ bgcolor: isDark ? "#0d1117" : "grey.50", py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontWeight={800} gutterBottom>How It Works</Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 550, mx: "auto", fontWeight: 400 }}>Your path from curious beginner to confident innovator.</Typography>
          </Box>
          <Grid container spacing={4}>
            {howItWorks.map((step) => (
              <Grid item xs={12} sm={6} md={3} key={step.step}>
                <Paper elevation={0} sx={{ p: 4, borderRadius: 4, border: "1px solid", borderColor: "divider", height: "100%", textAlign: "center", transition: "transform 0.3s ease, box-shadow 0.3s ease", "&:hover": { transform: "translateY(-2px)", boxShadow: 4 } }}>
                  <Typography variant="h2" sx={{ fontWeight: 900, background: "linear-gradient(135deg, #06b6d4, #3b82f6)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", mb: 2, fontSize: "3.5rem" }}>{step.step}</Typography>
                  <Typography variant="h6" fontWeight={700} gutterBottom>{step.title}</Typography>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{step.description}</Typography>
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
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: "auto", fontWeight: 400 }}>From Mountain View to Nairobi, our students are building the future everywhere.</Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            { src: "/images/Nairobi-classes-7.jpg", label: "Nairobi, Kenya", md: 8 },
            { src: "/images/young-robotics-engineers.jpg", label: "Mountain View, CA", md: 4 },
            { src: "/images/kids getting ready for class.jpg", label: "Palo Alto, CA", md: 4 },
            { src: "/images/Mountain-view-classes-8.jpg", label: "Mountain View, CA", md: 8 },
          ].map((img) => (
            <Grid item xs={12} md={img.md} key={img.src}>
              <Box sx={{ position: "relative", height: 280, borderRadius: 3, overflow: "hidden" }}>
                <Image src={img.src} alt={img.label} fill style={{ objectFit: "cover" }} />
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 2, background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                  <Typography variant="subtitle2" color="white" fontWeight={600}>{img.label}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA */}
      <Box sx={{ background: "linear-gradient(135deg, #2563eb 0%, #8b5cf6 100%)", py: { xs: 8, md: 12 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <EmojiEvents sx={{ fontSize: 60, color: "rgba(255,255,255,0.8)", mb: 2 }} />
          <Typography variant="h3" fontWeight={800} color="white" gutterBottom sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
            Ready to Find Your Program?
          </Typography>
          <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.85)", mb: 5, fontWeight: 400 }}>
            Join thousands of students already building the future with InnovateAI Robotics.
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
            <Button variant="contained" size="large" startIcon={<School />} onClick={() => router.push("/sign-up")}
              sx={{ bgcolor: "white", color: "#2563eb", fontWeight: 700, px: 5, py: 2, fontSize: "1.1rem", borderRadius: 3, "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}>
              Enroll Now
            </Button>
            <Button variant="outlined" size="large" startIcon={<Groups />} onClick={() => router.push("/contact")}
              sx={{ color: "white", borderColor: "rgba(255,255,255,0.6)", borderWidth: 2, fontWeight: 700, px: 5, py: 2, fontSize: "1.1rem", borderRadius: 3, "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" } }}>
              Talk to Our Team
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
