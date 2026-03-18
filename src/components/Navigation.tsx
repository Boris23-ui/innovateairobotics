"use client";

import { useState, useEffect } from 'react';
import { useAuth, useUser, SignOutButton } from '@clerk/nextjs';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Container,
  Button as MuiButton,
  Popover,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  ListItemButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close,
  Dashboard,
  Person,
  Settings,
  Logout,
  Science,
  Code,
  Info,
  Favorite,
  ExpandMore,
  ChildCare,
  RocketLaunch,
  Psychology,
  Brightness4,
  Brightness7,
  Engineering,
  AccountCircle,
  Home,
  Payments,
  East,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTheme as useAppTheme } from '@/components/providers/ThemeProvider';
import { useUserProfile } from '@/components/providers/UserProvider';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getDashboardPath } from '@/utils/auth';

const programItems = [
  {
    title: 'Tiny Tinkerers',
    ageRange: '5 & Under',
    icon: <ChildCare />,
    description: 'Introduction to robotics through play',
    href: '/programs/tiny-tinkerers',
    color: '#f472b6',
  },
  {
    title: 'Robot Explorers',
    ageRange: '6-9 years',
    icon: <Code />,
    description: 'Basic programming and robot building',
    href: '/programs/robot-explorers',
    color: '#34d399',
  },
  {
    title: 'Tech Titans',
    ageRange: '10-12 years',
    icon: <Science />,
    description: 'Advanced robotics and coding',
    href: '/programs/tech-titans',
    color: '#60a5fa',
  },
  {
    title: 'AI Avengers',
    ageRange: '13-17 years',
    icon: <Psychology />,
    description: 'AI and machine learning focus',
    href: '/programs/ai-avengers',
    color: '#a78bfa',
  },
  {
    title: 'Seniors',
    ageRange: '18+ years',
    icon: <Engineering />,
    description: 'Adult learning and innovation',
    href: '/programs/seniors',
    color: '#fbbf24',
  },
];

const publicNavItems = [
  { label: 'Home', href: '/', icon: <Home sx={{ fontSize: 20 }} /> },
  { label: 'About', href: '/about', icon: <Info sx={{ fontSize: 20 }} /> },
  { label: 'Pricing', href: '/pricing', icon: <Payments sx={{ fontSize: 20 }} /> },
  { label: 'Donate', href: '/donate', icon: <Favorite sx={{ fontSize: 20 }} /> },
];

export default function Navigation() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { userProfile } = useUserProfile();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useAppTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [programsAnchorEl, setProgramsAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setProgramsAnchorEl(null);
  };

  const handleClose = () => setAnchorEl(null);

  const handleProgramsClick = (event: React.MouseEvent<HTMLElement>) => {
    setProgramsAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleProgramsClose = () => setProgramsAnchorEl(null);

  const handleProfile = () => { handleClose(); router.push('/profile'); };
  const handleDashboard = () => {
    handleClose();
    const dashboardPath = userProfile ? getDashboardPath(userProfile.role) : '/dashboard';
    router.push(dashboardPath);
  };
  const handleSettings = () => { handleClose(); router.push('/settings'); };

  const isActive = (path: string) => pathname === path;
  const isActiveProgram = pathname.startsWith('/programs');

  if (!isLoaded) return <LoadingSpinner />;

  // ─── MOBILE DRAWER ──────────────────────────────────────────────
  const drawer = (
    <Box
      sx={{
        height: '100%',
        background: mode === 'dark'
          ? 'linear-gradient(180deg, #0a0a0f 0%, #111827 100%)'
          : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        color: mode === 'dark' ? 'white' : '#0f172a',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Drawer Header */}
      <Box sx={{
        p: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
      }}>
        <Image src="/logo.png" alt="InnovateAI Robotics" width={100} height={36} style={{ objectFit: 'contain' }} />
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: mode === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
            '&:hover': { color: '#06b6d4' },
          }}
        >
          <Close sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      {/* User Profile (if signed in) */}
      {isSignedIn && (
        <Box sx={{
          px: 2.5, py: 2,
          borderBottom: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Avatar
              src={user?.imageUrl}
              alt={user?.firstName || 'User'}
              sx={{ width: 40, height: 40, border: '2px solid rgba(6,182,212,0.4)' }}
            />
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.3 }}>
                {user?.firstName} {user?.lastName}
              </Typography>
              <Typography sx={{
                fontSize: '0.75rem',
                opacity: 0.6,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}>
                {user?.emailAddresses?.[0]?.emailAddress}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Nav Links */}
      <Box sx={{ flex: 1, overflowY: 'auto', py: 1 }}>
        <List disablePadding>
          {publicNavItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                selected={isActive(item.href)}
                sx={{
                  mx: 1, my: 0.25,
                  borderRadius: '10px',
                  py: 1.2,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: mode === 'dark' ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.06)',
                  },
                  '&.Mui-selected': {
                    bgcolor: mode === 'dark' ? 'rgba(6,182,212,0.12)' : 'rgba(6,182,212,0.1)',
                    '&:hover': { bgcolor: mode === 'dark' ? 'rgba(6,182,212,0.15)' : 'rgba(6,182,212,0.12)' },
                  },
                }}
              >
                <ListItemIcon sx={{
                  minWidth: 36,
                  color: isActive(item.href) ? '#06b6d4' : 'inherit',
                  opacity: isActive(item.href) ? 1 : 0.6,
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: isActive(item.href) ? 600 : 500,
                    fontSize: '0.9rem',
                    color: isActive(item.href) ? '#06b6d4' : 'inherit',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Programs */}
          <Box sx={{ px: 2.5, pt: 2, pb: 0.5 }}>
            <Typography sx={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.4,
            }}>
              Programs
            </Typography>
          </Box>
          {programItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                selected={isActive(item.href)}
                sx={{
                  mx: 1, my: 0.25,
                  borderRadius: '10px',
                  py: 1,
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                  },
                  '&.Mui-selected': {
                    bgcolor: `${item.color}18`,
                  },
                }}
              >
                <Box sx={{
                  minWidth: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: item.color,
                  '& .MuiSvgIcon-root': { fontSize: 20 },
                }}>
                  {item.icon}
                </Box>
                <Box sx={{ minWidth: 0 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.85rem', lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', opacity: 0.5, lineHeight: 1.2 }}>
                    {item.ageRange}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          ))}

          {/* Account Section (signed in) */}
          {isSignedIn && (
            <>
              <Box sx={{ px: 2.5, pt: 2, pb: 0.5 }}>
                <Typography sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.4,
                }}>
                  Account
                </Typography>
              </Box>
              {[
                { label: 'Dashboard', icon: <Dashboard sx={{ fontSize: 20 }} />, action: () => { handleDrawerToggle(); const p = userProfile ? getDashboardPath(userProfile.role) : '/dashboard'; router.push(p); } },
                { label: 'Profile', icon: <Person sx={{ fontSize: 20 }} />, action: () => { handleDrawerToggle(); router.push('/profile'); } },
                { label: 'Settings', icon: <Settings sx={{ fontSize: 20 }} />, action: () => { handleDrawerToggle(); router.push('/settings'); } },
              ].map((item) => (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton
                    onClick={item.action}
                    sx={{
                      mx: 1, my: 0.25,
                      borderRadius: '10px',
                      py: 1.2,
                      '&:hover': { bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, opacity: 0.6 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }} />
                  </ListItemButton>
                </ListItem>
              ))}
              <SignOutButton>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleDrawerToggle}
                    sx={{
                      mx: 1, my: 0.25,
                      borderRadius: '10px',
                      py: 1.2,
                      color: '#ef4444',
                      '&:hover': { bgcolor: 'rgba(239,68,68,0.08)' },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: '#ef4444' }}>
                      <Logout sx={{ fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary="Sign Out" primaryTypographyProps={{ fontWeight: 500, fontSize: '0.9rem' }} />
                  </ListItemButton>
                </ListItem>
              </SignOutButton>
            </>
          )}
        </List>
      </Box>

      {/* Drawer Footer */}
      <Box sx={{
        p: 2, textAlign: 'center',
        borderTop: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
      }}>
        <MuiButton
          onClick={toggleColorMode}
          startIcon={mode === 'dark' ? <Brightness7 sx={{ fontSize: 16 }} /> : <Brightness4 sx={{ fontSize: 16 }} />}
          size="small"
          sx={{
            fontSize: '0.75rem',
            color: mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
            textTransform: 'none',
          }}
        >
          {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </MuiButton>
      </Box>
    </Box>
  );

  // ─── DESKTOP NAVBAR ─────────────────────────────────────────────
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          backgroundColor: scrolled
            ? mode === 'dark' ? 'rgba(10, 10, 15, 0.8)' : 'rgba(255, 255, 255, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.2)' : 'none',
          borderBottom: scrolled
            ? `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`
            : '1px solid transparent',
          boxShadow: 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: '60px', md: '64px' }, gap: 1 }}>
            {/* Logo */}
            <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Image src="/logo.png" alt="InnovateAI Robotics" width={44} height={44} style={{ objectFit: 'contain' }} />
            </Link>

            {/* Desktop Nav */}
            <Box sx={{
              display: { xs: 'none', md: 'flex' },
              ml: 4,
              alignItems: 'center',
              gap: 0.5,
            }}>
              {/* Nav pills */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                borderRadius: '12px',
                p: '3px',
                gap: '2px',
              }}>
                {publicNavItems.map((item) => (
                  <Link key={item.label} href={item.href} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        px: 2, py: 0.8,
                        borderRadius: '9px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        color: isActive(item.href)
                          ? (mode === 'dark' ? '#fff' : '#0f172a')
                          : (mode === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'),
                        bgcolor: isActive(item.href)
                          ? (mode === 'dark' ? 'rgba(6,182,212,0.15)' : 'rgba(6,182,212,0.1)')
                          : 'transparent',
                        '&:hover': {
                          color: mode === 'dark' ? '#fff' : '#0f172a',
                          bgcolor: isActive(item.href)
                            ? undefined
                            : (mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'),
                        },
                      }}
                    >
                      {item.label}
                    </Box>
                  </Link>
                ))}
              </Box>

              {/* Programs Dropdown Trigger */}
              <Box
                onClick={handleProgramsClick}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  px: 2, py: 0.8,
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: isActiveProgram
                    ? '#06b6d4'
                    : (mode === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'),
                  '&:hover': {
                    color: mode === 'dark' ? '#fff' : '#0f172a',
                    bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                  },
                }}
              >
                Programs
                <ExpandMore sx={{
                  fontSize: 18,
                  transition: 'transform 0.2s',
                  transform: programsAnchorEl ? 'rotate(180deg)' : 'none',
                }} />
              </Box>
            </Box>

            {/* Right side actions */}
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {/* Theme Toggle */}
              <IconButton
                onClick={toggleColorMode}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  width: 36, height: 36,
                  color: mode === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    color: '#06b6d4',
                    bgcolor: mode === 'dark' ? 'rgba(6,182,212,0.08)' : 'rgba(6,182,212,0.06)',
                  },
                }}
              >
                {mode === 'dark' ? <Brightness7 sx={{ fontSize: 18 }} /> : <Brightness4 sx={{ fontSize: 18 }} />}
              </IconButton>

              {/* Mobile Hamburger */}
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  width: 40, height: 40,
                  borderRadius: '10px',
                  color: mode === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)',
                  bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: 22 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Programs Mega Menu */}
      <Popover
        open={Boolean(programsAnchorEl)}
        anchorEl={programsAnchorEl}
        onClose={handleProgramsClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              borderRadius: '16px',
              border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              bgcolor: mode === 'dark' ? 'rgba(17,24,39,0.95)' : 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(24px)',
              boxShadow: mode === 'dark'
                ? '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)'
                : '0 20px 60px rgba(0,0,0,0.12)',
              overflow: 'hidden',
              p: 1.5,
              minWidth: 520,
            },
          },
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1 }}>
          {programItems.map((item) => (
            <Box
              key={item.title}
              component={Link}
              href={item.href}
              onClick={handleProgramsClose}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                p: 2,
                borderRadius: '12px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                  '& .program-arrow': { opacity: 1, transform: 'translateX(0)' },
                },
              }}
            >
              <Box sx={{
                width: 40, height: 40,
                borderRadius: '10px',
                bgcolor: `${item.color}18`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.color,
                flexShrink: 0,
                '& .MuiSvgIcon-root': { fontSize: 20 },
              }}>
                {item.icon}
              </Box>
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.25 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: item.color,
                    bgcolor: `${item.color}15`,
                    px: 0.75, py: 0.15,
                    borderRadius: '4px',
                    lineHeight: 1.3,
                  }}>
                    {item.ageRange}
                  </Typography>
                  <East
                    className="program-arrow"
                    sx={{
                      fontSize: 14,
                      ml: 'auto',
                      opacity: 0,
                      transform: 'translateX(-4px)',
                      transition: 'all 0.2s ease',
                      color: item.color,
                    }}
                  />
                </Box>
                <Typography sx={{
                  fontSize: '0.78rem',
                  color: mode === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
                  lineHeight: 1.4,
                }}>
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Divider sx={{ my: 1, borderColor: mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }} />
        <Box
          component={Link}
          href="/programs"
          onClick={handleProgramsClose}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            py: 1,
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#06b6d4',
            transition: 'all 0.2s ease',
            '&:hover': {
              bgcolor: 'rgba(6,182,212,0.08)',
            },
          }}
        >
          View All Programs <East sx={{ fontSize: 16 }} />
        </Box>
      </Popover>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            border: 'none',
          },
          '& .MuiBackdrop-root': {
            backdropFilter: 'blur(4px)',
            bgcolor: 'rgba(0,0,0,0.3)',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* User Account Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              mt: 1.5,
              minWidth: 200,
              borderRadius: '12px',
              border: `1px solid ${mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
              bgcolor: mode === 'dark' ? 'rgba(17,24,39,0.95)' : 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(24px)',
              boxShadow: mode === 'dark'
                ? '0 16px 48px rgba(0,0,0,0.4)'
                : '0 16px 48px rgba(0,0,0,0.1)',
              '& .MuiMenuItem-root': {
                py: 1.2, px: 2,
                borderRadius: '8px',
                mx: 0.5,
                fontSize: '0.9rem',
                '&:hover': { bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)' },
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon><AccountCircle sx={{ fontSize: 18 }} /></ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDashboard}>
          <ListItemIcon><Dashboard sx={{ fontSize: 18 }} /></ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleSettings}>
          <ListItemIcon><Settings sx={{ fontSize: 18 }} /></ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider sx={{ my: 0.5, mx: 1 }} />
        <SignOutButton>
          <MenuItem sx={{ color: '#ef4444' }}>
            <ListItemIcon><Logout sx={{ fontSize: 18, color: '#ef4444' }} /></ListItemIcon>
            <ListItemText>Sign Out</ListItemText>
          </MenuItem>
        </SignOutButton>
      </Menu>
    </Box>
  );
}
