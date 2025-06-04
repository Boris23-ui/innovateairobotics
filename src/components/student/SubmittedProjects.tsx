"use client";

import React from 'react';
import { Card, CardContent, Typography, List, ListItem, Box, Chip, useTheme } from '@mui/material';
import { CheckCircle, Pending } from '@mui/icons-material';

interface Project {
  title: string;
  status: 'graded' | 'in_review';
  score?: string;
  feedback?: string;
}

interface SubmittedProjectsProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    title: "Maze Solver Robot",
    status: "graded",
    score: "95%",
    feedback: "Excellent implementation! Great work on the pathfinding algorithm."
  },
  {
    title: "Sensor Array Project",
    status: "in_review",
    feedback: null
  },
  {
    title: "AI Vision System",
    status: "graded",
    score: "88%",
    feedback: "Good implementation of object detection. Consider optimizing the processing speed."
  }
];

export default function SubmittedProjects({ projects = defaultProjects }: SubmittedProjectsProps) {
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
                p: 2,
                mb: 1,
                borderLeft: '4px solid',
                borderColor: project.status === 'graded' ? 'success.main' : 'warning.main',
                bgcolor: theme.palette.mode === 'dark' 
                  ? project.status === 'graded' 
                    ? 'rgba(76, 175, 80, 0.08)'
                    : 'rgba(255, 152, 0, 0.08)'
                  : project.status === 'graded'
                    ? 'rgba(76, 175, 80, 0.08)'
                    : 'rgba(255, 152, 0, 0.08)',
                borderRadius: '0 8px 8px 0',
                transition: theme.transitions.create(['background-color', 'border-color'], {
                  duration: theme.transitions.duration.standard,
                }),
                '&:hover': {
                  bgcolor: theme.palette.mode === 'dark'
                    ? project.status === 'graded'
                      ? 'rgba(76, 175, 80, 0.12)'
                      : 'rgba(255, 152, 0, 0.12)'
                    : project.status === 'graded'
                      ? 'rgba(76, 175, 80, 0.12)'
                      : 'rgba(255, 152, 0, 0.12)',
                }
              }}
            >
              <Box sx={{ width: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
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
                  <Chip
                    icon={project.status === 'graded' ? <CheckCircle /> : <Pending />}
                    label={project.status === 'graded' ? 'Graded' : 'In Review'}
                    color={project.status === 'graded' ? 'success' : 'warning'}
                    size="small"
                  />
                </Box>
                {project.status === 'graded' && (
                  <>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'success.main',
                        fontWeight: 'medium',
                        mb: 0.5,
                      }}
                    >
                      Score: {project.score}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.secondary',
                      }}
                    >
                      {project.feedback}
                    </Typography>
                  </>
                )}
              </Box>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 