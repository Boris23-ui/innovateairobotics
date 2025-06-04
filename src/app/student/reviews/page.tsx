import { Container, Typography } from '@mui/material';
import PeerReviewSection from '@/components/student/PeerReviewSection';

export default function ReviewsPage() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Peer Reviews
      </Typography>
      
      <PeerReviewSection />
    </Container>
  );
} 