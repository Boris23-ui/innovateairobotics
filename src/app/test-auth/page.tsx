"use client";

import { useAuth, useUser } from '@clerk/nextjs';
import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { SignInButton, SignUpButton, SignOutButton } from '@clerk/nextjs';

export default function TestAuthPage() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isLoaded) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
      <Card sx={{ maxWidth: 600, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Authentication Test Page
          </Typography>
          
          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Authentication Status:
            </Typography>
            <Typography color={isSignedIn ? "success.main" : "error.main"}>
              {isSignedIn ? "Signed In" : "Not Signed In"}
            </Typography>
          </Box>

          {isSignedIn ? (
            <Box>
              <Typography variant="h6" gutterBottom>
                User Information:
              </Typography>
              <Typography>
                Name: {user?.firstName} {user?.lastName}
              </Typography>
              <Typography>
                Email: {user?.primaryEmailAddress?.emailAddress}
              </Typography>
              <Typography>
                Role: {user?.publicMetadata?.role || 'Not set'}
              </Typography>
              
              <Box mt={2}>
                <SignOutButton>
                  <Button variant="contained" color="error">
                    Sign Out
                  </Button>
                </SignOutButton>
              </Box>
            </Box>
          ) : (
            <Box display="flex" gap={2}>
              <SignInButton mode="modal">
                <Button variant="contained" color="primary">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="outlined" color="primary">
                  Sign Up
                </Button>
              </SignUpButton>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
} 