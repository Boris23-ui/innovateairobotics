'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  useTheme,
  useMediaQuery,
  Stack
} from '@mui/material';
import {
  Menu as MenuIcon,
  School as SchoolIcon,
  Engineering as EngineeringIcon,
  Science as ScienceIcon,
  Code as CodeIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  ArrowForward as ArrowForwardIcon,
  SmartToy as RobotIcon,
  Psychology as BrainIcon,
  Terminal as TerminalIcon,
  RocketLaunch as RocketIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { user, isSignedIn } = useUser();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navigationItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, href: '/dashboard' },
    { text: 'Courses', icon: <SchoolIcon />, href: '/courses' },
    { text: 'Projects', icon: <EngineeringIcon />, href: '/projects' },
    { text: 'Playground', icon: <CodeIcon />, href: '/playground' },
  ];

  const tracks = [
    {
      title: 'Tiny Tinkerers',
      age: 'Ages 5-7',
      color: 'from-education-tiny to-orange-400',
      description: 'Discover the magic of simple machines and basic logic through play.',
      icon: <RobotIcon sx={{ fontSize: 40 }} />,
      features: ['Visual Storytelling', 'Drag & Drop Coding', 'Pattern Recognition']
    },
    {
      title: 'Robot Explorers',
      age: 'Ages 8-10',
      color: 'from-education-explorers to-emerald-400',
      description: 'Build and program your first autonomous robots using block coding.',
      icon: <RocketIcon sx={{ fontSize: 40 }} />,
      features: ['Sensor Integration', 'Looping & Logic', 'Mechanical Assembly']
    },
    {
      title: 'Tech Titans',
      age: 'Ages 11-13',
      color: 'from-education-titans to-blue-400',
      description: 'Dive deep into Python programming and advanced circuitry.',
      icon: <TerminalIcon sx={{ fontSize: 40 }} />,
      features: ['Python Syntax', 'Circuit Design', 'Algorithm Thinking']
    },
    {
      title: 'AI Avengers',
      age: 'Ages 14+',
      color: 'from-education-avengers to-purple-400',
      description: 'Master artificial intelligence, machine learning, and computer vision.',
      icon: <BrainIcon sx={{ fontSize: 40 }} />,
      features: ['Neural Networks', 'Computer Vision', 'Data Science']
    }
  ];

  const drawer = (
    <Box sx={{ width: 250 }} className="h-full bg-slate-900 text-white">
      <Box sx={{ p: 3, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Typography variant="h6" className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          InnovateAI
        </Typography>
      </Box>
      <List sx={{ p: 2 }}>
        {navigationItems.map((item) => (
          <ListItem button key={item.text} sx={{ mb: 1, borderRadius: 2, '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' } }}>
            <ListItemIcon sx={{ color: 'rgba(255,255,255,0.7)' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }} className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Navbar */}
      <AppBar position="fixed" className="glass z-50" elevation={0} sx={{ bgcolor: 'transparent' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h5" noWrap component="a" href="/" sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 800,
              letterSpacing: '.1rem',
              textDecoration: 'none',
              color: 'white'
            }}>
              INNOVATE<span className="text-blue-500">AI</span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.text}
                  href={item.href}
                  sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: 'white' }, textTransform: 'none', fontSize: '1rem' }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {isSignedIn ? (
                <Button
                  variant="outlined"
                  color="inherit"
                  startIcon={<PersonIcon />}
                  sx={{ borderRadius: 50, borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  {user?.firstName || 'Profile'}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="bg-blue-600 hover:bg-blue-700"
                  sx={{ borderRadius: 50, px: 4 }}
                >
                  Sign In
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

        <Container maxWidth="lg" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Chip
                label="New: AI Avengers Track Available 🚀"
                className="glass mb-6 text-blue-300 border-blue-500/30"
                sx={{ px: 1 }}
              />
              <Typography variant="h1" component="h1" sx={{
                fontWeight: 900,
                fontSize: { xs: '2.5rem', md: '4.5rem' },
                lineHeight: 1.1,
                mb: 3
              }}>
                Master the Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Robotics & AI
                </span>
              </Typography>
              <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.6)', mb: 5, maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
                An immersive, browser-based platform where students build, code, and simulate intelligent robots. No hardware required to start.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  className="bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25"
                  sx={{ py: 2, px: 5, borderRadius: 50, fontSize: '1.1rem', textTransform: 'none' }}
                >
                  Start Learning Free
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className="border-white/20 hover:bg-white/5 text-white"
                  sx={{ py: 2, px: 5, borderRadius: 50, fontSize: '1.1rem', textTransform: 'none', borderColor: 'rgba(255,255,255,0.2)' }}
                >
                  View Curriculum
                </Button>
              </Stack>
            </Box>
          </motion.div>

          {/* Stats / Trust */}
          <Grid container spacing={4} sx={{ mt: 8, borderTop: '1px solid rgba(255,255,255,0.1)', pt: 8 }}>
            {[
              { label: 'Active Students', value: '10,000+' },
              { label: 'Robot Simulations', value: '500k+' },
              { label: 'Lines of Code', value: '2M+' },
              { label: 'Partner Schools', value: '150+' },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" className="font-bold text-white mb-1">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" className="text-slate-400 uppercase tracking-wider font-medium">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Tracks Section */}
      <Box className="py-24 bg-slate-900/50">
        <Container maxWidth="lg">
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="h2" className="font-bold mb-4">
              Choose Your Mission
            </Typography>
            <Typography variant="h6" className="text-slate-400 max-w-2xl mx-auto">
              Tailored learning paths designed to grow with you, from your first block of code to advanced neural networks.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {tracks.map((track, index) => (
              <Grid item xs={12} md={6} lg={3} key={track.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:border-blue-500/50 transition-all duration-300 group">
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-6 shadow-lg`}>
                        {track.icon}
                      </Box>
                      <Typography variant="h5" className="font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {track.title}
                      </Typography>
                      <Chip
                        label={track.age}
                        size="small"
                        className="w-fit bg-white/10 text-white mb-4"
                      />
                      <Typography variant="body2" className="text-slate-400 mb-6 flex-grow">
                        {track.description}
                      </Typography>
                      <Box>
                        {track.features.map((feature) => (
                          <Box key={feature} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Box className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${track.color} mr-2`} />
                            <Typography variant="caption" className="text-slate-300">
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Grid */}
      <Box className="py-24 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" className="font-bold mb-6">
                Why InnovateAI?
              </Typography>
              <Typography variant="h6" className="text-slate-400 mb-8 leading-relaxed">
                We bridge the gap between theoretical knowledge and practical application through our state-of-the-art simulation engine.
              </Typography>

              <List>
                {[
                  { title: 'Browser-Based Simulation', desc: 'No expensive hardware or complex installations needed.' },
                  { title: 'Real-World Physics', desc: 'Test code in environments that mimic real physical constraints.' },
                  { title: 'Instant Feedback', desc: 'AI-powered code analysis provides real-time suggestions.' },
                ].map((item, i) => (
                  <ListItem key={i} sx={{ px: 0, mb: 4, alignItems: 'flex-start' }}>
                    <Box className="mr-4 mt-1 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <CodeIcon />
                    </Box>
                    <ListItemText
                      primary={<Typography variant="h6" className="font-bold text-white mb-1">{item.title}</Typography>}
                      secondary={<Typography variant="body2" className="text-slate-400">{item.desc}</Typography>}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 aspect-video group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity" />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  <Typography variant="h5" className="text-white/50 font-mono">
                    &lt;SimulationPreview /&gt;
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" className="py-12 border-t border-white/10 bg-slate-950">
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" className="font-bold mb-4">
                InnovateAI Robotics
              </Typography>
              <Typography variant="body2" className="text-slate-400 mb-4">
                Empowering the next generation of engineers, one line of code at a time.
              </Typography>
              <Stack direction="row" spacing={2}>
                {/* Social Icons would go here */}
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" className="font-bold text-white mb-4 uppercase tracking-wider">
                Platform
              </Typography>
              <Stack spacing={2}>
                {['Courses', 'Editor', 'Simulation', 'Pricing'].map((item) => (
                  <a key={item} href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {item}
                  </a>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" className="font-bold text-white mb-4 uppercase tracking-wider">
                Resources
              </Typography>
              <Stack spacing={2}>
                {['Documentation', 'API', 'Community', 'Blog'].map((item) => (
                  <a key={item} href="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                    {item}
                  </a>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" className="font-bold text-white mb-4 uppercase tracking-wider">
                Stay Updated
              </Typography>
              <Box className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:outline-none focus:border-blue-500 transition-colors"
                />
                <Button variant="contained" className="bg-blue-600 hover:bg-blue-700">
                  Join
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 8, pt: 8, borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
            <Typography variant="body2" className="text-slate-500">
              © {new Date().getFullYear()} InnovateAI Robotics Inc. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}