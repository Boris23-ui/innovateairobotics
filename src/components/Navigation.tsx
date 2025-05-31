"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/utils/mockAuth';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { Button } from '@/components/common/Button';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  useTheme as useMuiTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Link,
  Container,
  Divider,
  Fade,
  Zoom,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  Menu as MenuIcon,
  AccountCircle,
  Dashboard,
  School,
  ExitToApp,
  Book,
  ContactSupport,
  Info,
  Code,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '@/components/providers/ThemeProvider';

const pages = [
  { name: 'Programs', path: '/programs', icon: <Code /> },
  { name: 'Curriculum', path: '/curriculum', icon: <Book /> },
  { name: 'Resources', path: '/resources', icon: <School /> },
  { name: 'About', path: '/about', icon: <Info /> },
  { name: 'Contact', path: '/contact', icon: <ContactSupport /> },
];

export default function Navigation() {
  const { user, isLoaded, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isLoaded) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="64px">
        <LoadingSpinner />
      </Box>
    );
  }

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await signOut();
    handleClose();
    router.push('/');
  };

  const handleDashboard = () => {
    if (user) {
      router.push(`/dashboard/${user.role}`);
    }
    handleClose();
  };

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          color: 'primary.main',
          fontWeight: 700,
        }}
      >
        <School /> InnovateAI Robotics
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.name}
            component={Link}
            href={page.path}
            selected={isActive(page.path)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'primary.light',
                '&:hover': {
                  backgroundColor: 'primary.light',
                },
              },
            }}
          >
            <ListItemIcon sx={{ color: isActive(page.path) ? 'primary.main' : 'inherit' }}>
              {page.icon}
            </ListItemIcon>
            <ListItemText
              primary={page.name}
              primaryTypographyProps={{
                fontWeight: isActive(page.path) ? 600 : 400,
                color: isActive(page.path) ? 'primary.main' : 'inherit',
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const navigationItems = [
    { text: 'Programs', href: '/programs', icon: <Code /> },
    { text: 'Curriculum', href: '/curriculum', icon: <Book /> },
    { text: 'Resources', href: '/resources', icon: <School /> },
    { text: 'About', href: '/about', icon: <Info /> },
    { text: 'Contact', href: '/contact', icon: <ContactSupport /> },
  ];

  const userMenuItems = [
    {
      text: 'Dashboard',
      icon: <Dashboard />,
      onClick: handleDashboard,
      show: !!user,
    },
    {
      text: 'Sign Out',
      icon: <ExitToApp />,
      onClick: handleSignOut,
      show: !!user,
    },
  ];

  const renderMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {navigationItems.map((item) => (
        <MenuItem
          key={item.href}
          component={Link}
          href={item.href}
          onClick={handleClose}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </MenuItem>
      ))}
      {userMenuItems.map((item) => (
        item.show && (
          <MenuItem key={item.text} onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </MenuItem>
        )
      ))}
    </Menu>
  );

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(item.href);
                  setMobileMenuOpen(false);
                }}
                selected={pathname === item.href}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
          {userMenuItems.map((item) => (
            item.show && (
              <ListItem key={item.text} disablePadding>
                <ListItemButton onClick={item.onClick}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItemButton>
              </ListItem>
            )
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? 'background.paper' : 'transparent',
        boxShadow: scrolled ? 1 : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <School
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              color: 'primary.main',
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            InnovateAI Robotics
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileMenuOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 240,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Logo - Mobile */}
          <School
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              color: 'primary.main',
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
            }}
          >
            InnovateAI Robotics
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {pages.map((page) => (
              <Tooltip key={page.name} title={page.name} arrow>
                <Button
                  component={Link}
                  href={page.path}
                  onClick={handleClose}
                  startIcon={page.icon}
                  sx={{
                    my: 2,
                    color: isActive(page.path) ? 'primary.main' : 'text.primary',
                    display: 'flex',
                    fontWeight: isActive(page.path) ? 600 : 400,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: isActive(page.path) ? '100%' : '0%',
                      height: '2px',
                      bottom: 0,
                      left: 0,
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease-in-out',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Tooltip>
            ))}
          </Box>

          {/* Right Side Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Notifications" arrow>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>

            <Tooltip title={mode === 'dark' ? 'Light Mode' : 'Dark Mode'} arrow>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            {!user ? (
              <>
                <Tooltip title="Sign In" arrow>
                  <Button
                    variant="outlined"
                    startIcon={<PersonIcon />}
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      ml: 1,
                      textTransform: 'none',
                      borderRadius: 2,
                    }}
                  >
                    Sign In
                  </Button>
                </Tooltip>
                <Tooltip title="Sign Up" arrow>
                  <Button
                    variant="contained"
                    sx={{
                      display: { xs: 'none', sm: 'flex' },
                      ml: 1,
                      textTransform: 'none',
                      borderRadius: 2,
                    }}
                  >
                    Sign Up
                  </Button>
                </Tooltip>
              </>
            ) : (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  {user.avatar ? (
                    <Avatar src={user.avatar} alt={user.name} />
                  ) : (
                    <AccountCircle />
                  )}
                </IconButton>
                {renderMenu()}
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 