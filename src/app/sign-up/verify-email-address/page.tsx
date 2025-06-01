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

export default function VerifyEmailPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const handleResendVerification = async () => {
    if (!user) return;
    
    try {
      setIsResending(true);
      await user.emailAddresses[0]?.prepareVerification();
      setVerificationStatus('success');
    } catch (error) {
      console.error('Error resending verification email:', error);
      setVerificationStatus('error');
    } finally {
      setIsResending(false);
    }
  };

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
            <Alert severity="info" sx={{ mb: 2 }}>
              Please check your email for a verification link. If you don't see it, check your spam folder.
            </Alert>
            <Button
              variant="contained"
              onClick={handleResendVerification}
              disabled={isResending}
              fullWidth
            >
              {isResending ? 'Sending...' : 'Resend Verification Email'}
            </Button>
          </Box>

          {verificationStatus === 'success' && (
            <Alert severity="success" sx={{ width: '100%' }}>
              Verification email sent successfully!
            </Alert>
          )}

          {verificationStatus === 'error' && (
            <Alert severity="error" sx={{ width: '100%' }}>
              Failed to send verification email. Please try again.
            </Alert>
          )}

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