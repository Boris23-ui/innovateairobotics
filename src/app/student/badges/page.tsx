import { Container, Typography } from '@mui/material';
import BadgesOverview from '@/components/student/BadgesOverview';

export default function BadgesPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        My Achievements
      </Typography>
      
      <BadgesOverview />
    </Container>
  );
} 