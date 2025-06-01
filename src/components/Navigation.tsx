"use client";

import { useState } from 'react';
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
  School,
  Dashboard,
  Person,
  Settings,
  Logout,
  Book,
  Science,
  Code,
  Group,
  Info,
  ContactSupport,
  LocalLibrary,
  Favorite,
  ExpandMore,
  ChildCare,
  EmojiObjects,
  RocketLaunch,
  Psychology,
  ElderlyWoman,
  Brightness4,
  Brightness7,
  Engineering,
  Login,
  AccountCircle,
  Home,
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTheme as useAppTheme } from '@/components/providers/ThemeProvider';
import LoadingSpinner from '@/components/LoadingSpinner';

const programItems = [
  {
    title: 'Tiny Tinkerers',
    ageRange: '5 & Under',
    icon: <ChildCare />,
    description: 'Introduction to robotics through play',
    href: '/programs/tiny-tinkerers'
  },
  {
    title: 'Robot Explorers',
    ageRange: '6-9 years',
    icon: <Code />,
    description: 'Basic programming and robot building',
    href: '/programs/robot-explorers'
  },
  {
    title: 'Tech Titans',
    ageRange: '10-12 years',
    icon: <Science />,
    description: 'Advanced robotics and coding',
    href: '/programs/tech-titans'
  },
  {
    title: 'AI Avengers',
    ageRange: '13-17 years',
    icon: <Psychology />,
    description: 'AI and machine learning focus',
    href: '/programs/ai-avengers'
  },
  {
    title: 'Seniors',
    ageRange: '18+ years',
    icon: <Engineering />,
    description: 'Adult learning and innovation',
    href: '/programs/seniors'
  }
];

const navItems = [
  { name: 'Home', href: '/' },
];

const publicNavItems = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'About', href: '/about', icon: <Info /> },
  { label: 'Donate', href: '/donate', icon: <Favorite /> },
];

export default function Navigation() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useAppTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [programsAnchorEl, setProgramsAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setProgramsAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProgramsClick = (event: React.MouseEvent<HTMLElement>) => {
    setProgramsAnchorEl(event.currentTarget);
    setAnchorEl(null);
  };

  const handleProgramsClose = () => {
    setProgramsAnchorEl(null);
  };

  const handleProfile = () => {
    handleClose();
    router.push('/profile');
  };

  const handleDashboard = () => {
    handleClose();
    router.push('/dashboard/teacher');
  };

  const handleSettings = () => {
    handleClose();
    router.push('/settings');
  };

  const handleSignOut = () => {
    handleClose();
  };

  const handleLogin = () => {
    setAnchorEl(null);
    setProgramsAnchorEl(null);
    router.push('/sign-in');
  };

  const isActive = (path: string) => pathname === path;

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Innovate AI Robotics
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={isActive(item.href)}
              sx={{
                textAlign: 'center',
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
        {programItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              selected={isActive(item.href)}
              sx={{
                textAlign: 'center',
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                },
              }}
            >
              <ListItemText 
                primary={item.title}
                secondary={item.ageRange}
                secondaryTypographyProps={{
                  variant: 'caption',
                  color: 'text.secondary',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <School sx={{ fontSize: 32, color: 'primary.main', mr: 1 }} />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block' } }}
                >
                  InnovateAI
                </Typography>
              </Box>
            </Link>

            {/* Desktop Navigation */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              ml: 'auto',
              gap: 1,
              alignItems: 'center'
            }}>
              {/* Public Navigation Items - Always Visible */}
              {publicNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                >
                  <MuiButton
                    startIcon={item.icon}
                  >
                    {item.label}
                  </MuiButton>
                </Link>
              ))}

              {/* Programs Dropdown */}
              <MuiButton
                startIcon={<LocalLibrary />}
                endIcon={<ExpandMore />}
                onClick={handleProgramsClick}
                sx={{
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                Programs
              </MuiButton>

              {/* Programs Popover */}
              <Popover
                open={Boolean(programsAnchorEl)}
                anchorEl={programsAnchorEl}
                onClose={handleProgramsClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                PaperProps={{
                  sx: {
                    width: 'auto',
                    maxWidth: '90vw',
                    maxHeight: 400,
                    overflow: 'auto',
                    p: 2,
                    mt: 0.5,
                    borderRadius: 2,
                    boxShadow: 3,
                  },
                }}
              >
                <List sx={{ 
                  py: 0.5,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 2,
                  flexWrap: 'wrap',
                  minWidth: 800,
                  justifyContent: 'center',
                }}>
                  {programItems.map((item) => (
                    <ListItem
                      key={item.title}
                      component={Link}
                      href={item.href}
                      onClick={handleProgramsClose}
                      sx={{
                        py: 1.5,
                        px: 2,
                        mb: 0.5,
                        borderRadius: 2,
                        width: 'auto',
                        minWidth: 220,
                        maxWidth: 280,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          backgroundColor: 'action.hover',
                          transform: 'translateY(-2px)',
                          boxShadow: 2,
                          transition: 'all 0.2s ease-in-out',
                        },
                        '&:last-child': {
                          mb: 0,
                        },
                      }}
                    >
                      <ListItemIcon sx={{ 
                        minWidth: 40,
                        color: 'primary.main',
                      }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Box component="span" sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                px: 1,
                                py: 0.25,
                                borderRadius: 1,
                                fontSize: '0.7rem',
                                display: 'inline-block',
                                width: 'fit-content',
                              }}
                            >
                              {item.ageRange}
                            </Typography>
                            <Typography
                              component="span"
                              variant="body2"
                              sx={{ 
                                color: 'text.secondary',
                                display: 'block',
                                lineHeight: 1.4,
                              }}
                            >
                              {item.description}
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Popover>

              {/* Theme Toggle Button */}
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                sx={{
                  ml: 1,
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>

              {isSignedIn ? (
                <>
                  <MuiButton
                    startIcon={<Dashboard />}
                    onClick={() => {
                      setProgramsAnchorEl(null);
                      router.push('/dashboard/teacher');
                    }}
                  >
                    Dashboard
                  </MuiButton>
                  <IconButton
                    onClick={handleMenuOpen}
                    size="small"
                  >
                    <Avatar
                      sx={{ width: 32, height: 32 }}
                      src={user?.imageUrl}
                      alt={user?.firstName || 'User'}
                    />
                  </IconButton>
                </>
              ) : (
                <MuiButton
                  variant="contained"
                  startIcon={<Login />}
                  onClick={handleLogin}
                  sx={{
                    minWidth: '100px',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                    },
                  }}
                >
                  Login
                </MuiButton>
              )}
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            minWidth: 240,
            borderRadius: 2,
            '& .MuiMenuItem-root': {
              py: 1.5,
              px: 2,
              typography: 'body2',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleProfile}>
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleDashboard}>
          <ListItemIcon>
            <Dashboard fontSize="small" />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleSettings}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <SignOutButton>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sign Out</ListItemText>
          </MenuItem>
        </SignOutButton>
      </Menu>
    </Box>
  );
} 