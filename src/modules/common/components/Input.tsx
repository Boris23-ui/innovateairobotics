'use client';

import { useState, forwardRef } from 'react';
import {
  TextField,
  TextFieldProps,
  InputAdornment,
  IconButton,
  Box,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export interface InputProps extends Omit<TextFieldProps, 'variant'> {
  label?: string;
  error?: boolean;
  helperText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  showPasswordToggle?: boolean;
  animation?: 'none' | 'fade' | 'slide';
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: 2,
      },
    },
  },
  '& .MuiInputLabel-root': {
    transition: 'all 0.2s ease-in-out',
  },
}));

const AnimatedBox = styled(Box)<{ animation?: string }>(({ animation }) => ({
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
}));

export const Input = forwardRef<HTMLDivElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      startIcon,
      endIcon,
      type = 'text',
      showPasswordToggle,
      animation = 'none',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };

    const renderEndAdornment = () => {
      if (type === 'password' && showPasswordToggle) {
        return (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTogglePassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        );
      }
      if (endIcon) {
        return <InputAdornment position="end">{endIcon}</InputAdornment>;
      }
      return null;
    };

    return (
      <AnimatedBox animation={animation}>
        <StyledTextField
          ref={ref}
          fullWidth
          variant="outlined"
          label={label}
          error={error}
          type={type === 'password' && showPassword ? 'text' : type}
          InputProps={{
            startAdornment: startIcon ? (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ) : null,
            endAdornment: renderEndAdornment(),
          }}
          {...props}
        />
        {helperText && (
          <Typography
            variant="caption"
            color={error ? 'error' : 'text.secondary'}
            sx={{ mt: 0.5, display: 'block' }}
          >
            {helperText}
          </Typography>
        )}
      </AnimatedBox>
    );
  }
); 