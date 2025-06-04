"use client";

import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box, Button, useTheme } from '@mui/material';

interface Project {
  title: string;
  status: string;
  score?: string;
  feedback: string | null;
}

interface SubmittedProjectsProps {
  projects: Project[];
}

export default function SubmittedProjects({ projects }: SubmittedProjectsProps) {
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
          Submitted Projects
        </Typography>
        <List>
          {projects.map((project, idx) => (
            <ListItem
              key={idx}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'grey.50',
                borderRadius: 1,
                mb: 1,
                p: 2,
                transition: theme.transitions.create(['background-color'], {
                  duration: theme.transitions.duration.standard,
                }),
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
                  {project.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: project.status === 'graded' 
                      ? theme.palette.mode === 'dark'
                        ? 'success.light'
                        : 'success.main'
                      : theme.palette.mode === 'dark'
                        ? 'warning.light'
                        : 'warning.main',
                    transition: theme.transitions.create('color', {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  Status: {project.status === 'graded' ? 'Graded' : 'In Review'}
                </Typography>
                {project.score && (
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      transition: theme.transitions.create('color', {
                        duration: theme.transitions.duration.standard,
                      }),
                    }}
                  >
                    Score: {project.score}
                  </Typography>
                )}
                {project.feedback && (
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
                    {project.feedback}
                  </Typography>
                )}
              </Box>
              <Button
                variant="text"
                color="primary"
                sx={{ 
                  textTransform: 'none',
                  transition: theme.transitions.create(['color'], {
                    duration: theme.transitions.duration.standard,
                  }),
                }}
              >
                View Details
              </Button>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 