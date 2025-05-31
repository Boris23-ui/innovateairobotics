'use client';

import { forwardRef } from 'react';
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
  animation?: 'none' | 'fade' | 'slide' | 'scale';
}

const StyledButton = styled(MuiButton)<{ animation?: string }>(
  ({ theme, animation }) => ({
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
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
        '0%': { transform: 'translateY(-10px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
    }),
    ...(animation === 'scale' && {
      animation: 'scaleIn 0.3s ease-in-out',
      '@keyframes scaleIn': {
        '0%': { transform: 'scale(0.9)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
    }),
  })
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      loading = false,
      disabled,
      animation = 'none',
      variant = 'contained',
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        disabled={disabled || loading}
        animation={animation}
        {...props}
      >
        {loading ? (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        ) : (
          children
        )}
      </StyledButton>
    );
  }
); 