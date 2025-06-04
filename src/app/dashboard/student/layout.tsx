"use client";

import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Typography, Divider, ListItemButton, IconButton } from '@mui/material';
import { Dashboard, Assignment, School, EmojiEvents, RateReview, Code, MenuBook, ViewList, Brightness4, Brightness7 } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme as useAppTheme } from '@/components/providers/ThemeProvider';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 280;

const menuItems = [
  { 
    text: 'Dashboard', 
    icon: <Dashboard />, 
    path: '/dashboard/student' 
  },
  { 
    text: 'Active Courses', 
    icon: <School />, 
    path: '/dashboard/student/courses' 
  },
  { 
    text: 'Pending Assignments', 
    icon: <Assignment />, 
    path: '/dashboard/student/assignments' 
  },
  { 
    text: 'Projects', 
    icon: <Code />, 
    path: '/dashboard/student/projects' 
  },
  { 
    text: 'Achievements', 
    icon: <EmojiEvents />, 
    path: '/dashboard/student/badges' 
  },
  { 
    text: 'Learning Resources', 
    icon: <MenuBook />, 
    path: '/dashboard/student/resources' 
  },
  { 
    text: 'View All Courses', 
    icon: <ViewList />, 
    path: '/dashboard/student/all-courses' 
  },
  { 
    text: 'Peer Reviews', 
    icon: <RateReview />, 
    path: '/dashboard/student/reviews' 
  },
];

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { mode, toggleColorMode } = useAppTheme();
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: 'bold' }}>
            Student Portal
          </Typography>
          <IconButton onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.paper',
            transition: theme.transitions.create(['background-color', 'border-color'], {
              duration: theme.transitions.duration.standard,
            }),
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.path}
                  selected={pathname === item.path}
                  sx={{
                    mx: 1,
                    borderRadius: 1,
                    '&.Mui-selected': {
                      bgcolor: 'primary.light',
                      '&:hover': {
                        bgcolor: 'primary.light',
                      },
                      '& .MuiListItemIcon-root': {
                        color: 'primary.main',
                      },
                      '& .MuiListItemText-primary': {
                        color: 'primary.main',
                        fontWeight: 'bold',
                      },
                    },
                    transition: theme.transitions.create(['background-color', 'color'], {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      minWidth: 40,
                      color: pathname === item.path ? 'primary.main' : 'text.secondary',
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
                      fontSize: '0.9rem',
                      fontWeight: pathname === item.path ? 'bold' : 'normal',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          bgcolor: 'background.default',
          transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
} 