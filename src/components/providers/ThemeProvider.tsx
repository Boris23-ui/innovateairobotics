'use client';

import { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, type Shadows } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import baseTheme, { tokens } from '@/styles/theme';
import { deepmerge } from '@mui/utils';
import { alpha } from '@mui/material';

// Define semantic color meanings
const getSemanticColors = (mode: 'light' | 'dark') => ({
  // Surface colors — dark mode uses SpaceX near-black palette
  surface: {
    default: mode === 'light' ? tokens.grey[50] : '#0a0a0f',
    paper: mode === 'light' ? '#ffffff' : '#111827',
    raised: mode === 'light' ? '#ffffff' : '#1e293b',
    sunken: mode === 'light' ? tokens.grey[100] : '#0d1117',
  },
  // Border colors
  border: {
    light: mode === 'light'
      ? alpha(tokens.grey[200], 0.8)
      : alpha(tokens.grey[700], 0.8),
    main: mode === 'light'
      ? tokens.grey[200]
      : tokens.grey[700],
    strong: mode === 'light'
      ? tokens.grey[300]
      : tokens.grey[600],
  },
  // State colors with proper contrast
  state: {
    hover: mode === 'light'
      ? alpha(tokens.grey[900], 0.04)
      : alpha(tokens.grey[100], 0.08),
    selected: mode === 'light'
      ? alpha(tokens.grey[900], 0.08)
      : alpha(tokens.grey[100], 0.16),
    disabled: mode === 'light'
      ? tokens.grey[300]
      : tokens.grey[700],
    disabledBackground: mode === 'light'
      ? tokens.grey[200]
      : alpha(tokens.grey[700], 0.4),
  },
  // Focus ring colors
  focus: {
    ring: mode === 'light'
      ? alpha(tokens.primary[500], 0.2)
      : alpha(tokens.primary[400], 0.3),
  },
});

type ThemeContextType = {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode');

    let initialMode: 'light' | 'dark' = 'dark';
    if (savedMode === 'dark' || savedMode === 'light') {
      initialMode = savedMode;
    }
    setMode(initialMode);

    if (initialMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', newMode);
      return newMode;
    });
  };

  const theme = useMemo(() => {
    const semanticColors = getSemanticColors(mode);

    // Custom shadows with proper color adaptation
    const shadowColor = mode === 'light'
      ? 'rgba(17, 24, 39, 0.1)'
      : 'rgba(0, 0, 0, 0.3)';

    // MUI requires exactly 25 shadow entries (indices 0-24) typed as Shadows tuple
    const makeShadows = (base: string): Shadows => {
      const s: string[] = ['none'];
      for (let i = 1; i <= 24; i++) {
        const y = Math.round(i * 0.8);
        const blur = i * 2;
        s.push(`0px ${y}px ${blur}px ${base}`);
      }
      return s as unknown as Shadows;
    };
    const shadows = makeShadows(shadowColor);

    // Pass shadows separately to createTheme to avoid deepmerge corrupting the tuple
    const merged = deepmerge(baseTheme, {
      palette: {
        mode,
        primary: {
          light: mode === 'light' ? tokens.primary[400] : '#22d3ee',
          main: mode === 'light' ? tokens.primary[500] : '#06b6d4',
          dark: mode === 'light' ? tokens.primary[600] : '#0891b2',
          contrastText: mode === 'light' ? '#ffffff' : '#0a0a0f',
        },
        secondary: {
          light: mode === 'light' ? tokens.secondary[400] : tokens.secondary[300],
          main: mode === 'light' ? tokens.secondary[500] : tokens.secondary[400],
          dark: mode === 'light' ? tokens.secondary[600] : tokens.secondary[500],
          contrastText: mode === 'light' ? '#ffffff' : tokens.grey[900],
        },
        success: {
          light: mode === 'light' ? tokens.success[400] : tokens.success[300],
          main: mode === 'light' ? tokens.success[500] : tokens.success[400],
          dark: mode === 'light' ? tokens.success[600] : tokens.success[500],
          contrastText: mode === 'light' ? '#ffffff' : tokens.grey[900],
        },
        warning: {
          light: mode === 'light' ? tokens.warning[400] : tokens.warning[300],
          main: mode === 'light' ? tokens.warning[500] : tokens.warning[400],
          dark: mode === 'light' ? tokens.warning[600] : tokens.warning[500],
          contrastText: mode === 'light' ? tokens.grey[900] : tokens.grey[900],
        },
        error: {
          light: mode === 'light' ? tokens.error[400] : tokens.error[300],
          main: mode === 'light' ? tokens.error[500] : tokens.error[400],
          dark: mode === 'light' ? tokens.error[600] : tokens.error[500],
          contrastText: mode === 'light' ? '#ffffff' : tokens.grey[900],
        },
        info: {
          light: mode === 'light' ? tokens.cool[400] : tokens.cool[300],
          main: mode === 'light' ? tokens.cool[500] : tokens.cool[400],
          dark: mode === 'light' ? tokens.cool[600] : tokens.cool[500],
          contrastText: mode === 'light' ? '#ffffff' : tokens.grey[900],
        },
        background: {
          default: semanticColors.surface.default,
          paper: semanticColors.surface.paper,
        },
        text: {
          primary: mode === 'light' ? tokens.grey[900] : tokens.grey[100],
          secondary: mode === 'light' ? tokens.grey[600] : tokens.grey[400],
          disabled: mode === 'light' ? tokens.grey[400] : tokens.grey[600],
        },
        divider: semanticColors.border.main,
        action: {
          active: mode === 'light' ? tokens.grey[600] : tokens.grey[400],
          hover: semanticColors.state.hover,
          selected: semanticColors.state.selected,
          disabled: semanticColors.state.disabled,
          disabledBackground: semanticColors.state.disabledBackground,
          focus: semanticColors.focus.ring,
        },
      },
      typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        // Hero and Primary Headings - Maximum impact with brand colors
        h1: {
          fontSize: '3.815rem',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          background: mode === 'light'
            ? `linear-gradient(135deg, ${tokens.primary[700]}, ${tokens.primary[500]})`
            : `linear-gradient(135deg, ${tokens.primary[300]}, ${tokens.primary[400]})`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: mode === 'light'
            ? '0 2px 4px rgba(0,0,0,0.1)'
            : '0 2px 4px rgba(0,0,0,0.2)',
        },
        // Section Headings - Strong presence with subtle gradient
        h2: {
          fontSize: '3.052rem',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color: mode === 'light'
            ? tokens.grey[800]
            : tokens.grey[50],
          textShadow: mode === 'light'
            ? '0 1px 2px rgba(0,0,0,0.05)'
            : '0 1px 2px rgba(0,0,0,0.1)',
        },
        // Subsection Headings - Clean and focused
        h3: {
          fontSize: '2.441rem',
          fontWeight: 600,
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          color: mode === 'light'
            ? tokens.grey[700]
            : tokens.grey[100],
          textShadow: mode === 'light'
            ? '0 1px 1px rgba(0,0,0,0.03)'
            : '0 1px 1px rgba(0,0,0,0.08)',
        },
        // Component Headings - Clear hierarchy
        h4: {
          fontSize: '1.953rem',
          fontWeight: 600,
          lineHeight: 1.3,
          letterSpacing: '-0.01em',
          color: mode === 'light'
            ? tokens.grey[700]
            : tokens.grey[200],
        },
        // Card Headings - Compact but prominent
        h5: {
          fontSize: '1.563rem',
          fontWeight: 600,
          lineHeight: 1.4,
          color: mode === 'light'
            ? tokens.grey[800]
            : tokens.grey[100],
        },
        // Small Section Headings - Subtle but clear
        h6: {
          fontSize: '1.25rem',
          fontWeight: 600,
          lineHeight: 1.4,
          color: mode === 'light'
            ? tokens.grey[700]
            : tokens.grey[300],
        },
        // Primary Body Text - Optimal readability
        body1: {
          fontSize: '1.125rem',
          lineHeight: 1.7,
          letterSpacing: '0.00938em',
          color: mode === 'light'
            ? tokens.grey[700]
            : tokens.grey[200],
        },
        // Secondary Body Text - Supporting content
        body2: {
          fontSize: '0.875rem',
          lineHeight: 1.6,
          letterSpacing: '0.00714em',
          color: mode === 'light'
            ? tokens.grey[600]
            : tokens.grey[300],
        },
        // Featured Text - Emphasized content
        subtitle1: {
          fontSize: '1.125rem',
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '0.00938em',
          color: mode === 'light'
            ? tokens.primary[700]
            : tokens.primary[300],
        },
        // Supporting Text - Secondary information
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1.5,
          letterSpacing: '0.00714em',
          color: mode === 'light'
            ? tokens.grey[600]
            : tokens.grey[400],
        },
        // Interactive Elements - Clear and actionable
        button: {
          fontSize: '0.9375rem',
          fontWeight: 600,
          lineHeight: 1.75,
          letterSpacing: '0.02em',
          textTransform: 'none',
        },
        // Supporting Elements - Minimal presence
        caption: {
          fontSize: '0.75rem',
          lineHeight: 1.5,
          letterSpacing: '0.01071em',
          color: mode === 'light'
            ? alpha(tokens.grey[600], 0.9)
            : alpha(tokens.grey[400], 0.9),
        },
        // Categorical Labels - Clear differentiation
        overline: {
          fontSize: '0.75rem',
          fontWeight: 600,
          lineHeight: 1.5,
          letterSpacing: '0.08333em',
          textTransform: 'uppercase',
          color: mode === 'light'
            ? tokens.primary[600]
            : tokens.primary[400],
        },
      },
      shape: {
        borderRadius: 12,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': {
                transform: 'translateY(-1px)',
                boxShadow: shadows[2],
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            },
            contained: {
              boxShadow: shadows[1],
              '&:hover': {
                boxShadow: shadows[2],
              },
            },
            outlined: {
              borderWidth: '2px',
              '&:hover': {
                borderWidth: '2px',
              },
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              ...(mode === 'dark' && {
                backgroundImage: 'none',
                backgroundColor: semanticColors.surface.paper,
              }),
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              borderRadius: '16px',
              boxShadow: shadows[1],
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: shadows[3],
              },
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundImage: 'none',
              backgroundColor: mode === 'light'
                ? alpha('#ffffff', 0.9)
                : alpha('#0a0a0f', 0.85),
              backdropFilter: 'blur(20px)',
              borderBottom: mode === 'light'
                ? `1px solid ${semanticColors.border.light}`
                : '1px solid rgba(255,255,255,0.06)',
            },
          },
        },
      },
    });
    return createTheme({ ...merged, shadows });
  }, [mode]);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}