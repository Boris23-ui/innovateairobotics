import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { People, School, Assessment, Settings } from '@mui/icons-material';

export default async function AdminDashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <People sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Users</Typography>
                    <Typography variant="h4">1,234</Typography>
                  </Box>
                </Box>
                <Button variant="outlined" fullWidth>
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <School sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Courses</Typography>
                    <Typography variant="h4">56</Typography>
                  </Box>
                </Box>
                <Button variant="outlined" fullWidth>
                  Manage Courses
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Assessment sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Analytics</Typography>
                    <Typography variant="h4">89%</Typography>
                  </Box>
                </Box>
                <Button variant="outlined" fullWidth>
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Settings sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Box>
                    <Typography variant="h6">Settings</Typography>
                    <Typography variant="h4">-</Typography>
                  </Box>
                </Box>
                <Button variant="outlined" fullWidth>
                  System Settings
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 