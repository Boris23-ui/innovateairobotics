"use client";

import { useState } from 'react';
import { useAuth, useUser, SignOutButton } from '@clerk/nextjs';
import { LoadingSpinner } from '@/modules/common/components/LoadingSpinner';
import { Button } from '@/modules/common/components/Button';
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
} from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navItems = [
  { label: 'Programs', href: '/programs', icon: <LocalLibrary /> },
  { label: 'Curriculum', href: '/curriculum', icon: <Book /> },
  { label: 'Resources', href: '/resources', icon: <Science /> },
  { label: 'Contact', href: '/contact', icon: <ContactSupport /> },
];

const publicNavItems = [
  { label: 'About', href: '/about', icon: <Info /> },
  { label: 'Donate', href: '/donate', icon: <Favorite /> },
];

export default function Navigation() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <AppBar position="sticky" color="default" elevation={1}>
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
            gap: 1
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

            {/* Main Navigation Items */}
            {navItems.map((item) => (
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

            {isSignedIn ? (
              <>
                <Button
                  startIcon={<Dashboard />}
                  onClick={() => router.push('/dashboard/teacher')}
                >
                  Dashboard
                </Button>
                <IconButton
                  onClick={handleMenuClick}
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
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button
                  variant="outlined"
                  onClick={() => router.push('/sign-in')}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  onClick={() => router.push('/sign-up')}
                >
                  Sign Up
                </Button>
              </Box>
            )}
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuClick}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop User Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => {
              handleMenuClose();
              router.push('/profile');
            }}>
              <Person sx={{ mr: 1 }} /> Profile
            </MenuItem>
            <MenuItem onClick={() => {
              handleMenuClose();
              router.push('/settings');
            }}>
              <Settings sx={{ mr: 1 }} /> Settings
            </MenuItem>
            <MenuItem>
              <SignOutButton>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Logout sx={{ mr: 1 }} /> Sign Out
                </Box>
              </SignOutButton>
            </MenuItem>
          </Menu>

          {/* Mobile Menu */}
          <Menu
            anchorEl={mobileMenuAnchorEl}
            open={Boolean(mobileMenuAnchorEl)}
            onClose={handleMobileMenuClose}
          >
            {/* Public Navigation Items - Always Visible */}
            {publicNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <MenuItem onClick={handleMobileMenuClose}>
                  {item.icon}
                  <Typography sx={{ ml: 1 }}>{item.label}</Typography>
                </MenuItem>
              </Link>
            ))}

            {/* Main Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <MenuItem onClick={handleMobileMenuClose}>
                  {item.icon}
                  <Typography sx={{ ml: 1 }}>{item.label}</Typography>
                </MenuItem>
              </Link>
            ))}

            {isSignedIn && (
              <>
                <MenuItem onClick={() => {
                  handleMobileMenuClose();
                  router.push('/dashboard/teacher');
                }}>
                  <Dashboard sx={{ mr: 1 }} /> Dashboard
                </MenuItem>
                <MenuItem onClick={() => {
                  handleMobileMenuClose();
                  router.push('/profile');
                }}>
                  <Person sx={{ mr: 1 }} /> Profile
                </MenuItem>
                <MenuItem onClick={() => {
                  handleMobileMenuClose();
                  router.push('/settings');
                }}>
                  <Settings sx={{ mr: 1 }} /> Settings
                </MenuItem>
                <MenuItem>
                  <SignOutButton>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Logout sx={{ mr: 1 }} /> Sign Out
                    </Box>
                  </SignOutButton>
                </MenuItem>
              </>
            )}
            {!isSignedIn && (
              <>
                <MenuItem onClick={() => {
                  handleMobileMenuClose();
                  router.push('/sign-in');
                }}>
                  Sign In
                </MenuItem>
                <MenuItem onClick={() => {
                  handleMobileMenuClose();
                  router.push('/sign-up');
                }}>
                  Sign Up
                </MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
} 