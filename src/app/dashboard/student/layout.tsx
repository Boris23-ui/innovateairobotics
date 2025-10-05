"use client";

import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, useTheme, useMediaQuery, Avatar, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Dashboard, 
  Assignment, 
  School, 
  EmojiEvents, 
  RateReview, 
  Code,
  Menu as MenuIcon,
  MenuBook,
  ViewList,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard/student' },
  { text: 'Active Courses', icon: <School />, path: '/dashboard/student/courses' },
  { text: 'Pending Assignments', icon: <Assignment />, path: '/dashboard/student/assignments' },
  { text: 'Projects', icon: <Code />, path: '/dashboard/student/projects' },
  { text: 'Achievements', icon: <EmojiEvents />, path: '/dashboard/student/achievements' },
  { text: 'Learning Resources', icon: <MenuBook />, path: '/dashboard/student/resources' },
  { text: 'View All Courses', icon: <ViewList />, path: '/dashboard/student/all-courses' },
  { text: 'Peer Reviews', icon: <RateReview />, path: '/dashboard/student/reviews' },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const pathname = usePathname();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(!isMobile);
  const [isPermanentDrawerOpen, setIsPermanentDrawerOpen] = useState(true);

  const handleDrawerToggle = () => {
    if (isMobile) {
      setIsDrawerOpen(!isDrawerOpen);
    } else {
      setIsPermanentDrawerOpen(!isPermanentDrawerOpen);
    }
  };

  const drawer = (
    <>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.paper',
          color: 'text.primary',
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 500,
          }}
        >
          Student Portal
        </Typography>
      </Box>

      <Divider />

      <List sx={{ px: 2, py: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            href={item.path}
            sx={{
              borderRadius: 1,
              mb: 0.5,
              color: pathname === item.path ? 'primary.main' : 'text.secondary',
              bgcolor: pathname === item.path 
                ? 'rgba(25, 118, 210, 0.08)'
                : 'transparent',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.08)',
                transform: 'translateX(4px)',
              },
              transition: theme.transitions.create(['background-color', 'color', 'transform'], {
                duration: theme.transitions.duration.standard,
              }),
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 40,
                color: 'inherit',
                transition: theme.transitions.create('color', {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontWeight: pathname === item.path ? 'bold' : 'normal',
              }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider />

      <List sx={{ px: 2, py: 1 }}>
        <ListItem
          sx={{
            borderRadius: 2,
            mb: 1,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.04)',
              transform: 'translateX(8px)',
            },
            transition: theme.transitions.create(['background-color', 'color', 'transform'], {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: 'inherit',
            }}
          >
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>

        <ListItem
          sx={{
            borderRadius: 2,
            color: 'text.secondary',
            '&:hover': {
              bgcolor: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.08)'
                : 'rgba(0, 0, 0, 0.04)',
              transform: 'translateX(8px)',
            },
            transition: theme.transitions.create(['background-color', 'color', 'transform'], {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 40,
              color: 'inherit',
            }}
          >
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            bgcolor: 'background.paper',
            borderRight: 1,
            borderColor: 'divider',
            height: '100%',
            position: 'fixed',
            left: isPermanentDrawerOpen ? 0 : -drawerWidth,
            transition: theme.transitions.create('left', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
        open={isPermanentDrawerOpen}
      >
        {drawer}
      </Drawer>

      {/* Toggle Button */}
      <IconButton
        color="inherit"
        aria-label="toggle drawer"
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          left: { xs: 16, sm: isPermanentDrawerOpen ? drawerWidth + 16 : 16 },
          top: 16,
          zIndex: theme.zIndex.drawer + 2,
          bgcolor: 'background.paper',
          boxShadow: 1,
          transition: theme.transitions.create('left', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 1, sm: 3 },
          pt: { xs: 7, sm: 7 }, // Added top padding to account for the toggle button
          width: '100%',
          ml: { sm: isPermanentDrawerOpen ? `${drawerWidth}px` : 0 },
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          height: '100vh',
          overflow: 'auto',
          bgcolor: 'background.default',
        }}
      >
        {children}
      </Box>
    </Box>
  );
} 