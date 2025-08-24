import { Box, Container, Typography, Paper, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface ProgramLayoutProps {
  title: string;
  ageRange: string;
  description: string;
  children?: ReactNode;
}

export const ProgramLayout = ({ title, ageRange, description, children }: ProgramLayoutProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const paperBackground = isDark
    ? 'linear-gradient(145deg, rgba(17,24,39,0.7), rgba(15,23,42,0.6))'
    : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))';

  const borderColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.2)';

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          background: paperBackground,
          backdropFilter: 'blur(8px)',
          border: `1px solid ${borderColor}`,
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
              color: 'text.primary',
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