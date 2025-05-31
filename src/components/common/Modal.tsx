'use client';

import { forwardRef } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
  DialogProps,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export interface ModalProps extends Omit<DialogProps, 'onClose'> {
  title?: string;
  onClose?: () => void;
  actions?: React.ReactNode;
  showCloseButton?: boolean;
  animation?: 'none' | 'fade' | 'slide';
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius * 2,
    boxShadow: theme.shadows[24],
  },
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(2, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2, 3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const AnimatedDialog = styled(StyledDialog)<{ animation?: string }>(
  ({ animation }) => ({
    ...(animation === 'fade' && {
      '& .MuiDialog-paper': {
        animation: 'fadeIn 0.3s ease-in-out',
        '@keyframes fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    }),
    ...(animation === 'slide' && {
      '& .MuiDialog-paper': {
        animation: 'slideIn 0.3s ease-in-out',
        '@keyframes slideIn': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    }),
  })
);

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      title,
      children,
      onClose,
      actions,
      showCloseButton = true,
      animation = 'none',
      maxWidth = 'sm',
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <AnimatedDialog
        ref={ref}
        onClose={onClose}
        maxWidth={maxWidth}
        fullWidth={fullWidth}
        animation={animation}
        {...props}
      >
        {title && (
          <DialogTitle>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Typography variant="h6" component="div">
                {title}
              </Typography>
              {showCloseButton && onClose && (
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={onClose}
                  aria-label="close"
                >
                  <CloseIcon />
                </IconButton>
              )}
            </Box>
          </DialogTitle>
        )}
        <DialogContent>{children}</DialogContent>
        {actions && <DialogActions>{actions}</DialogActions>}
      </AnimatedDialog>
    );
  }
); 