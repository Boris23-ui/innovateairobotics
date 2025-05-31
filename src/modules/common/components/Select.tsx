'use client';

import { forwardRef } from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  SelectProps as MuiSelectProps,
  FormHelperText,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<MuiSelectProps, 'variant'> {
  label?: string;
  options: SelectOption[];
  error?: boolean;
  helperText?: string;
  animation?: 'none' | 'fade' | 'slide';
}

const StyledFormControl = styled(FormControl)(({ theme }) => ({
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

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      animation = 'none',
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <AnimatedBox animation={animation}>
        <StyledFormControl
          ref={ref}
          fullWidth={fullWidth}
          error={error}
          variant="outlined"
        >
          {label && <InputLabel>{label}</InputLabel>}
          <MuiSelect
            label={label}
            {...props}
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </MenuItem>
            ))}
          </MuiSelect>
          {helperText && (
            <FormHelperText error={error}>{helperText}</FormHelperText>
          )}
        </StyledFormControl>
      </AnimatedBox>
    );
  }
); 