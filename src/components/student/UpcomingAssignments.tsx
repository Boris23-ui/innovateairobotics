"use client";

import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box, useTheme } from '@mui/material';

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
}

interface UpcomingAssignmentsProps {
  assignments: Assignment[];
}

export default function UpcomingAssignments({ assignments }: UpcomingAssignmentsProps) {
  const theme = useTheme();

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
          Upcoming Assignments
        </Typography>
        <List>
          {assignments.map((assign, idx) => (
            <ListItem
              key={idx}
              sx={{
                p: 2,
                mb: 1,
                borderLeft: '4px solid',
                borderColor: 'primary.main',
                bgcolor: theme.palette.mode === 'dark' 
                  ? 'rgba(144, 202, 249, 0.08)' 
                  : 'rgba(25, 118, 210, 0.08)',
                borderRadius: '0 8px 8px 0',
                transition: theme.transitions.create(['background-color', 'border-color'], {
                  duration: theme.transitions.duration.standard,
                }),
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark'
                    ? 'rgba(144, 202, 249, 0.12)'
                    : 'rgba(25, 118, 210, 0.12)',
                }
              }}
            >
              <Box>
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
                  {assign.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 0.5,
                    color: 'text.secondary',
                    transition: theme.transitions.create('color', {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  Course: {assign.course}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 0.5,
                    color: 'text.secondary',
                    transition: theme.transitions.create('color', {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  Due: {assign.dueDate}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 