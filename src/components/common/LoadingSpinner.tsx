import { CircularProgress, Box } from '@mui/material';

interface LoadingSpinnerProps {
  size?: number | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export default function LoadingSpinner({ size = 'md', color = 'primary' }: LoadingSpinnerProps) {
  const getSize = () => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'sm': return 24;
      case 'lg': return 48;
      default: return 40; // md
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100px"
    >
      <CircularProgress size={getSize()} color={color} />
    </Box>
  );
}

export { default as LoadingSpinner } from './LoadingSpinner'; 