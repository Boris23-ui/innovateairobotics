"use client";

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
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
  Code,
  Science,
  Info,
  ContactSupport,
  LocalLibrary,
  ExpandMore,
  ChildCare,
  Psychology,
  Engineering,
  Brightness4,
  Brightness7,
  Home,
  Payments,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme, useMediaQuery } from '@mui/material';
import { useTheme as useAppTheme } from '@/components/providers/ThemeProvider';

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

const publicNavItems = [
  { label: 'Home', href: '/', icon: <Home /> },
  { label: 'About', href: '/about', icon: <Info /> },
  { label: 'Pricing', href: '/pricing', icon: <Payments /> },
  { label: 'Contact', href: '/contact', icon: <ContactSupport /> },
];

export default function Navigation() {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, toggleColorMode } = useAppTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsAnchorEl, setProgramsAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProgramsClick = (event: React.MouseEvent<HTMLElement>) => {
    setProgramsAnchorEl(event.currentTarget);
  };

  const handleProgramsClose = () => {
    setProgramsAnchorEl(null);
  };

  const isActive = (path: string) => pathname === path;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: '100%',
        background: 'linear-gradient(135deg, #667ea0, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header Section */}
      <Box sx={{
        p: 3,
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        zIndex: 1
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2
        }}>
          <School sx={{
            fontSize: 40,
            color: 'white',
            mr: 1,
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
          }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.5px'
            }}
          >
            InnovateAI
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            opacity: 0.9,
            fontWeight: 300,
            letterSpacing: 0.5
          }}
        >
          Robotics Education Platform
        </Typography>
      </Box>

      {/* Navigation Content */}
      <Box sx={{
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        py: 2,
        position: 'relative',
        zIndex: 1
      }}>
        <List sx={{ py: 0 }}>
          <Typography
            variant="overline"
            sx={{
              px: 3,
              py: 1,
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 600,
              letterSpacing: '1px',
              fontSize: '0.75rem'
            }}
          >
            NAVIGATION
          </Typography>
          {publicNavItems.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={isActive(item.href)}
                sx={{
                  mx: 1,
                  borderRadius: 2,
                  color: 'white',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  },
                  '&.Mui-selected': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{
                  minWidth: 45,
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.4rem'
                  }
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: '1rem'
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}

          <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

          {/* Programs Section */}
          <Typography
            variant="overline"
            sx={{
              px: 3,
              py: 1,
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 600,
              letterSpacing: '1px',
              fontSize: '0.75rem'
            }}
          >
            PROGRAMS
          </Typography>
          {programItems.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                selected={isActive(item.href)}
                sx={{
                  mx: 1,
                  borderRadius: 2,
                  color: 'white',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(8px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                  },
                  '&.Mui-selected': {
                    background: 'rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  },
                }}
              >
                <ListItemIcon sx={{
                  minWidth: 45,
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    fontSize: '1.4rem'
                  }
                }}>
                  {item.icon}
                </ListItemIcon>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      color: 'white',
                      mb: 0.5
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      display: 'block',
                      lineHeight: 1.2
                    }}
                  >
                    {item.ageRange} • {item.description}
                  </Typography>
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{
        p: 2,
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.8)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        position: 'relative',
        zIndex: 1
      }}>
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.75rem'
          }}
        >
          © 2025 InnovateAI Robotics
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={1} sx={{ py: 0 }}>
      <Container maxWidth="xl" sx={{ py: 0 }}>
        <Toolbar disableGutters sx={{ minHeight: '56px !important', py: 0 }}>
          <Link href="/" passHref style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <School sx={{ fontSize: 28, color: 'primary.main', mr: 1 }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  fontSize: '1.1rem',
                  lineHeight: 1.2
                }}
              >
                InnovateAI Robotics
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
              {/* Public Navigation Items */}
              {publicNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                >
                  <MuiButton startIcon={item.icon}>
                    {item.label}
                  </MuiButton>
                </Link>
              ))}

              {/* Programs Dropdown */}
              <MuiButton
                startIcon={<LocalLibrary />}
                endIcon={<ExpandMore />}
                onClick={handleProgramsClick}
                sx={{ '&:hover': { bgcolor: 'action.hover' } }}
              >
                Programs
              </MuiButton>

              {/* Programs Popover */}
              <Popover
                open={Boolean(programsAnchorEl)}
                anchorEl={programsAnchorEl}
                onClose={handleProgramsClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                PaperProps={{
                  sx: {
                    width: 'auto',
                    maxWidth: '90vw',
                    maxHeight: 400,
                    overflow: 'auto',
                    p: 1,
                    mt: 0.5,
                    borderRadius: 2,
                    boxShadow: 3,
                  },
                }}
              >
                <List sx={{
                  py: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 1,
                  flexWrap: 'wrap',
                  minWidth: 600,
                  justifyContent: 'center',
                }}>
                  {programItems.map((item) => (
                    <ListItem
                      key={item.title}
                      component={Link}
                      href={item.href}
                      onClick={handleProgramsClose}
                      sx={{
                        py: 1,
                        px: 1.5,
                        mb: 0.5,
                        borderRadius: 1.5,
                        width: 'auto',
                        minWidth: 180,
                        maxWidth: 240,
                        bgcolor: 'background.paper',
                        border: '1px solid',
                        borderColor: 'divider',
                        '&:hover': {
                          backgroundColor: 'action.hover',
                          transform: 'translateY(-2px)',
                          boxShadow: 2,
                          transition: 'all 0.2s ease-in-out',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 32, color: 'primary.main' }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>
                            {item.title}
                          </Typography>
                        }
                        secondary={
                          <Box component="span" sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                px: 0.75,
                                py: 0.25,
                                borderRadius: 0.75,
                                fontSize: '0.65rem',
                                display: 'inline-block',
                                width: 'fit-content',
                              }}
                            >
                              {item.ageRange}
                            </Typography>
                            <Typography
                              component="span"
                              variant="caption"
                              sx={{
                                color: 'text.secondary',
                                display: 'block',
                                lineHeight: 1.3,
                                fontSize: '0.75rem',
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
                sx={{ ml: 1, '&:hover': { bgcolor: 'action.hover' } }}
              >
                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                background: 'linear-gradient(135deg, #667ea0, #764ba2 100%)',
                color: 'white',
                borderRadius: 2,
                width: 48,
                height: 48,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 12px rgba(121, 26, 26, 0.2)',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 16px rgba(121, 26, 26, 0.3)',
                  background: 'linear-gradient(135deg, #5a6fd8, #6a4190 100%)',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: '1.5rem' }} />
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
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
