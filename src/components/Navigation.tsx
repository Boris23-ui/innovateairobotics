"use client";

import { useState } from 'react';
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
} from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '@/components/providers/ThemeProvider';

export default function Navigation() {
  const { user, isLoaded, signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { mode, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

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
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => router.push('/')}
        >
          InnovateAI Robotics
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            {renderMobileMenu()}
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2, mr: 2 }}>
              {navigationItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  color="inherit"
                  underline="none"
                  sx={{
                    color: pathname === item.href ? 'primary.main' : 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  {item.icon}
                  {item.text}
                </Link>
              ))}
            </Box>
            <IconButton
              color="inherit"
              onClick={toggleTheme}
              aria-label="toggle theme"
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            {!user ? (
              <>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/signin')}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  onClick={() => router.push('/signup')}
                >
                  Sign Up
                </Button>
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
        )}
      </Toolbar>
    </AppBar>
  );
} 