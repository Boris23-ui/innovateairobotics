import { Container, Typography, Box, Tabs, Tab, Paper } from '@mui/material';
import LearningResources from '@/components/student/LearningResources';
import { useState } from 'react';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Learning Resources
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Access all your learning materials, tutorials, and guides in one place
        </Typography>
      </Box>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            '& .MuiTab-root': {
              textTransform: 'none',
              minWidth: 100,
              fontWeight: 'medium',
            },
          }}
        >
          <Tab label="All Resources" />
          <Tab label="Videos" />
          <Tab label="Documents" />
          <Tab label="Code Examples" />
          <Tab label="Labs" />
        </Tabs>
      </Paper>

      <LearningResources />
    </Container>
  );
} 