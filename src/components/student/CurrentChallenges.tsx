"use client";

import React from 'react';
import { Card, CardContent, Typography, Grid, useTheme } from '@mui/material';
import CodingChallenge from './CodingChallenge';

export default function CurrentChallenges() {
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
          Current Challenges
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CodingChallenge 
              title="Robot Maze Navigation" 
              description="Program your robot to move through a maze."
              type="Block-based" 
              completed={true} 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CodingChallenge 
              title="Sensor Integration" 
              description="Use ultrasonic and touch sensors to avoid walls."
              type="Python" 
              completed={false} 
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
} 