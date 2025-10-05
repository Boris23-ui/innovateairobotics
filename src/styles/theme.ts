import { createTheme, ThemeOptions } from '@mui/material/styles';

// Design system tokens
const tokens = {
  // Brand colors - Innovation & Technology focused
  primary: {
    50: '#f0f7ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  // Energy & Enthusiasm
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  // Success & Growth
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  // Warning & Caution
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  // Error & Danger
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  // Neutral & UI
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  // Cool accent colors
  cool: {
    50: '#f5f7ff',
    100: '#ebf0ff',
    200: '#e0e7ff',
    300: '#c7d2fe',
    400: '#a5b4fc',
    500: '#818cf8',
    600: '#6366f1',
    700: '#4f46e5',
    800: '#4338ca',
    900: '#3730a3',
  },
  // Warm accent colors
  warm: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
};

// Custom breakpoints for better responsive design
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// Custom spacing and sizing system
const spacing = 4; // Base spacing unit in pixels

// Animation configurations
const transitions = {
  durations: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easings: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
};

// Typography scale with dynamic line heights and letter spacing
export const getTypographyStyles = (mode: 'light' | 'dark') => ({
  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  h1: {
    fontSize: '3.815rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: mode === 'light' ? tokens.grey[900] : tokens.grey[50],
  },
  h2: {
    fontSize: '3.052rem',
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.02em',
    color: mode === 'light' ? tokens.grey[800] : tokens.grey[100],
  },
  h3: {
    fontSize: '2.441rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: mode === 'light' ? tokens.grey[800] : tokens.grey[100],
  },
  h4: {
    fontSize: '1.953rem',
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: mode === 'light' ? tokens.grey[700] : tokens.grey[200],
  },
  h5: {
    fontSize: '1.563rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: mode === 'light' ? tokens.grey[700] : tokens.grey[200],
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    color: mode === 'light' ? tokens.grey[700] : tokens.grey[200],
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
    letterSpacing: '0.00938em',
    color: mode === 'light' ? tokens.grey[700] : tokens.grey[300],
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    letterSpacing: '0.00714em',
    color: mode === 'light' ? tokens.grey[600] : tokens.grey[400],
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    color: mode === 'light' ? tokens.grey[600] : tokens.grey[400],
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.00714em',
    color: mode === 'light' ? tokens.grey[500] : tokens.grey[500],
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '0.03333em',
    color: mode === 'light' ? tokens.grey[500] : tokens.grey[500],
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 600,
    lineHeight: 1.5,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase',
    color: mode === 'light' ? tokens.grey[500] : tokens.grey[500],
  },
});

const baseTheme: ThemeOptions = {
  breakpoints,
  spacing,
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          transition: 'all 0.3s ease-in-out',
        },
        ':root': {
          colorScheme: 'light dark',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none',
            transform: 'translateY(-1px)',
          },
          ':active': {
            transform: 'translateY(0)',
          },
          transition: `all 200ms ${transitions.easings.easeInOut}`,
        },
        contained: {
          '&.Mui-disabled': {
            backgroundColor: 'action.disabledBackground',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: `all 200ms ${transitions.easings.easeInOut}`,
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: `all 200ms ${transitions.easings.easeInOut}`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          transition: `all 200ms ${transitions.easings.easeInOut}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
        },
        input: {
          padding: '12px 16px',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          transition: `all 200ms ${transitions.easings.easeInOut}`,
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
      styleOverrides: {
        root: {
          transition: `all 200ms ${transitions.easings.easeInOut}`,
          '&:hover': {
            textDecoration: 'none',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: spacing * 2,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: `all 200ms ${transitions.easings.easeInOut}`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid',
          padding: '16px',
        },
      },
    },
  },
};

export { tokens };
export default baseTheme;
