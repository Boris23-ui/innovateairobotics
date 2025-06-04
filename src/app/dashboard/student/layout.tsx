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
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const drawerWidth = 280;

const menuItems = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/dashboard/student' },
  { text: 'Courses', icon: <School />, path: '/dashboard/student/all-courses' },
  { text: 'Assignments', icon: <Assignment />, path: '/dashboard/student/assignments' },
  { text: 'Projects', icon: <Code />, path: '/dashboard/student/projects' },
  { text: 'Badges', icon: <EmojiEvents />, path: '/dashboard/student/badges' },
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

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawer = (
    <>
      <Box
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'primary.main',
          color: theme.palette.mode === 'dark' ? 'text.primary' : 'white',
          transition: theme.transitions.create(['background-color', 'color'], {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Avatar
          sx={{
            width: 80,
            height: 80,
            mb: 2,
            border: '3px solid',
            borderColor: theme.palette.mode === 'dark' ? 'primary.main' : 'white',
            bgcolor: theme.palette.mode === 'dark' ? 'primary.main' : 'white',
            color: theme.palette.mode === 'dark' ? 'white' : 'primary.main',
            transition: theme.transitions.create(['border-color', 'background-color', 'color'], {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          JD
        </Avatar>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            color: 'inherit',
          }}
        >
          John Doe
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            opacity: 0.8,
            color: 'inherit',
          }}
        >
          Computer Science
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
              borderRadius: 2,
              mb: 1,
              color: pathname === item.path ? 'primary.main' : 'text.secondary',
              bgcolor: pathname === item.path 
                ? theme.palette.mode === 'dark' 
                  ? 'rgba(25, 118, 210, 0.08)'
                  : 'rgba(25, 118, 210, 0.12)'
                : 'transparent',
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
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
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