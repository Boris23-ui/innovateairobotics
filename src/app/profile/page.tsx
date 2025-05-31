"use client";

import { useUser } from '@clerk/nextjs';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Avatar,
  Grid,
  Button,
  TextField,
  Divider,
  Stack,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>

      <Grid container spacing={4}>
        {/* Profile Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={user.imageUrl}
                  alt={user.firstName || 'User'}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.emailAddresses[0]?.emailAddress}
                </Typography>
              </Box>
              <Button variant="outlined" fullWidth>
                Change Photo
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Settings */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Information
              </Typography>
              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      value={user.firstName || ''}
                      disabled
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      value={user.lastName || ''}
                      disabled
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label="Email"
                  value={user.emailAddresses[0]?.emailAddress || ''}
                  disabled
                />
                <Divider />
                <Typography variant="h6" gutterBottom>
                  Security
                </Typography>
                <Button variant="outlined" color="primary">
                  Change Password
                </Button>
                <Button variant="outlined" color="primary">
                  Enable Two-Factor Authentication
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
} 