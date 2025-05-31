"use client";

import { SignIn } from "@clerk/nextjs";
import { Container, Box, Paper, Typography, Alert } from '@mui/material';
import { School } from '@mui/icons-material';

export default function SignInPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 8,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <School sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
            <Typography variant="h4" component="h1" fontWeight="bold" color="primary">
              Welcome Back
            </Typography>
          </Box>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Sign in to continue your robotics learning journey
          </Typography>

          <Alert severity="info" sx={{ mb: 4, width: '100%' }}>
            <Typography variant="body2">
              <strong>Test Mode Instructions:</strong>
              <br />
              1. Use test email: john+clerk_test@example.com
              <br />
              2. Use OTP code: 424242
            </Typography>
          </Alert>

          <SignIn />
        </Paper>
      </Box>
    </Container>
  );
} 