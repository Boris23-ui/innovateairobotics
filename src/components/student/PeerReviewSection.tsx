"use client";

import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Button, Stack, useTheme } from '@mui/material';

interface Review {
  projectTitle: string;
  reviewer: string;
  status: 'pending' | 'completed';
  dueDate?: string;
}

export default function PeerReviewSection() {
  const theme = useTheme();
  const reviews: Review[] = [
    {
      projectTitle: "Robot Navigation System",
      reviewer: "Alex Chen",
      status: "pending",
      dueDate: "April 12, 2025"
    },
    {
      projectTitle: "Sensor Integration Project",
      reviewer: "Sarah Miller",
      status: "completed"
    }
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
          Peer Reviews
        </Typography>
        <Stack spacing={2}>
          {reviews.map((review, idx) => (
            <Box
              key={idx}
              sx={{
                p: 2,
                bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'grey.50',
                borderRadius: 1,
                transition: theme.transitions.create(['background-color'], {
                  duration: theme.transitions.duration.standard,
                }),
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
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
                    {review.projectTitle}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: 'text.secondary',
                      transition: theme.transitions.create('color', {
                        duration: theme.transitions.duration.standard,
                      }),
                    }}
                  >
                    Reviewer: {review.reviewer}
                  </Typography>
                </Box>
                <Chip
                  label={review.status === 'completed' ? 'Completed' : 'Pending'}
                  size="small"
                  sx={{
                    bgcolor: review.status === 'completed' 
                      ? theme.palette.mode === 'dark'
                        ? 'rgba(76, 175, 80, 0.2)'
                        : 'success.light'
                      : theme.palette.mode === 'dark'
                        ? 'rgba(255, 152, 0, 0.2)'
                        : 'warning.light',
                    color: review.status === 'completed' 
                      ? theme.palette.mode === 'dark'
                        ? 'success.light'
                        : 'success.dark'
                      : theme.palette.mode === 'dark'
                        ? 'warning.light'
                        : 'warning.dark',
                    transition: theme.transitions.create(['background-color', 'color'], {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                />
              </Box>
              {review.dueDate && (
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 1,
                    color: 'text.secondary',
                    transition: theme.transitions.create('color', {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  Due: {review.dueDate}
                </Typography>
              )}
              {review.status === 'pending' && (
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ 
                    mt: 2, 
                    textTransform: 'none',
                    transition: theme.transitions.create(['background-color', 'color'], {
                      duration: theme.transitions.duration.standard,
                    }),
                  }}
                >
                  Start Review
                </Button>
              )}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
} 