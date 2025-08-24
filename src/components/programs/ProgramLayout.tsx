import { Box, Container, Typography, Paper } from '@mui/material';
import { ReactNode } from 'react';

interface ProgramLayoutProps {
  title: string;
  ageRange: string;
  description: string;
  children?: ReactNode;
}

export const ProgramLayout = ({ title, ageRange, description, children }: ProgramLayoutProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 1,
              background: 'linear-gradient(45deg, #1976d2, #42a5f5)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {title}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'primary.main',
              mb: 3,
              fontWeight: 500,
            }}
          >
            {ageRange}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
              mb: 4,
            }}
          >
            {description}
          </Typography>
        </Box>
        {children}
      </Paper>
    </Container>
  );
}; 