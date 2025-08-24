import React, { ReactNode } from 'react';
import { Paper, useTheme } from '@mui/material';

interface InfoCardProps {
  children?: ReactNode;
}

export const InfoCard = ({ children }: InfoCardProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const paperBackground = isDark
    ? 'linear-gradient(145deg, rgba(17,24,39,0.7), rgba(15,23,42,0.6))'
    : 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))';

  const borderColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.2)';

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 4,
        background: paperBackground,
        border: `1px solid ${borderColor}`,
        color: 'text.primary',
      }}
    >
      {children}
    </Paper>
  );
};

export default InfoCard;
