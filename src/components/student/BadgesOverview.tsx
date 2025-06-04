"use client";

import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface Badge {
  title: string;
  description: string;
  earned: boolean;
}

export default function BadgesOverview() {
  const theme = useTheme();
  const badges: Badge[] = [
    { title: "First Robot Built", description: "Complete your first build using LEGO WeDo.", earned: true },
    { title: "Sensor Master", description: "Use 2+ sensors in one project.", earned: false },
    { title: "Team Player", description: "Participate in a group challenge.", earned: true },
    { title: "Code Champion", description: "Finish all coding exercises.", earned: true }
  ];

  return (
    <Card sx={{ 
      bgcolor: 'background.paper',
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
      }),
    }}>
      <CardContent>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{
            color: 'text.primary',
            transition: theme.transitions.create('color', {
              duration: theme.transitions.duration.standard,
            }),
          }}
        >
          Your Achievements
        </Typography>
        <List>
          {badges.map((badge, idx) => (
            <ListItem 
              key={idx}
              sx={{ 
                opacity: badge.earned ? 1 : 0.7,
                py: 1,
                transition: theme.transitions.create('opacity', {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              <ListItemIcon>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: badge.earned 
                      ? theme.palette.mode === 'dark' 
                        ? 'rgba(255, 193, 7, 0.12)' 
                        : 'warning.light'
                      : theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'grey.100',
                    color: badge.earned ? 'warning.main' : 'text.secondary',
                    transition: theme.transitions.create(['background-color', 'color'], {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  {badge.earned ? (
                    <StarIcon />
                  ) : (
                    <StarBorderIcon />
                  )}
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography 
                    variant="subtitle1" 
                    fontWeight="medium"
                    sx={{
                      color: 'text.primary',
                      transition: theme.transitions.create('color', {
                        duration: theme.transitions.duration.standard,
                      }),
                    }}
                  >
                    {badge.title}
                  </Typography>
                }
                secondary={
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      transition: theme.transitions.create('color', {
                        duration: theme.transitions.duration.standard,
                      }),
                    }}
                  >
                    {badge.description}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 