'use client';

import { forwardRef } from 'react';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface CardProps extends Omit<MuiCardProps, 'content'> {
  title?: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  animation?: 'none' | 'fade' | 'slide' | 'scale';
  hoverEffect?: boolean;
}

const StyledCard = styled(MuiCard)<{ animation?: string; hoverEffect?: boolean }>(
  ({ theme, animation, hoverEffect }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out',
    ...(hoverEffect && {
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: theme.shadows[8],
      },
    }),
    ...(animation === 'fade' && {
      animation: 'fadeIn 0.3s ease-in-out',
      '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    }),
    ...(animation === 'slide' && {
      animation: 'slideIn 0.3s ease-in-out',
      '@keyframes slideIn': {
        '0%': { transform: 'translateY(20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
    }),
    ...(animation === 'scale' && {
      animation: 'scaleIn 0.3s ease-in-out',
      '@keyframes scaleIn': {
        '0%': { transform: 'scale(0.95)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    }),
  })
);

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      image,
      imageAlt,
      actions,
      animation = 'none',
      hoverEffect = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyledCard
        ref={ref}
        animation={animation}
        hoverEffect={hoverEffect}
        {...props}
      >
        {image && (
          <StyledCardMedia
            image={image}
            title={imageAlt || title}
          />
        )}
        <CardContent sx={{ flexGrow: 1 }}>
          {title && (
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ fontWeight: 600 }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              {subtitle}
            </Typography>
          )}
          <Box>{children}</Box>
        </CardContent>
        {actions && <CardActions>{actions}</CardActions>}
      </StyledCard>
    );
  }
); 