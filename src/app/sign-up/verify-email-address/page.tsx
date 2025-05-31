"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  CircularProgress,
  Alert,
  Stack,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { EmailVerification } from "@clerk/nextjs";

export default function VerifyEmailPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Verify Your Email
          </Typography>
          
          <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 2 }}>
            Please verify your email address to continue. We've sent a verification link to your email.
          </Typography>

          <Box sx={{ width: '100%' }}>
            <EmailVerification />
          </Box>

          <Button
            variant="outlined"
            onClick={() => router.push('/dashboard/student')}
            sx={{ mt: 2 }}
          >
            Return to Dashboard
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
} 