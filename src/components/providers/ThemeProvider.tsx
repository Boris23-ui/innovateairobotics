"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { alpha } from "@mui/material";

type ThemeContextType = { mode: "light" | "dark"; toggleColorMode: () => void };
const ThemeContext = createContext<ThemeContextType>({ mode: "dark", toggleColorMode: () => {} });
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme-mode");
    if (saved === "light" || saved === "dark") setMode(saved);
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) setMode("light");
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const toggleColorMode = () =>
    setMode((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme-mode", next);
      return next;
    });

  const theme = useMemo(() => {
    const isDark = mode === "dark";

    // Superlist-inspired palette
    const bg = {
      deep: "#0f0f1a",
      surface: "#16162a",
      elevated: "#1e1e38",
      card: isDark ? "#1a1a30" : "#ffffff",
    };

    const text = {
      primary: isDark ? "#f0f0f5" : "#1a1a2e",
      secondary: isDark ? "#8888a0" : "#555570",
      muted: isDark ? "#555570" : "#8888a0",
    };

    return createTheme({
      palette: {
        mode,
        primary: { main: "#2590f1", light: "#60b0ff", dark: "#1a6ec0", contrastText: "#fff" },
        secondary: { main: "#9187ff", light: "#b0a8ff", dark: "#6c60e0", contrastText: "#fff" },
        success: { main: "#22c55e" },
        warning: { main: "#f59e0b" },
        error: { main: "#ef4444" },
        background: {
          default: isDark ? bg.deep : "#f7f7ff",
          paper: isDark ? bg.surface : "#ffffff",
        },
        text: { primary: text.primary, secondary: text.secondary },
        divider: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)",
      },
      typography: {
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        h1: { fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em" },
        h2: { fontSize: "2.75rem", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" },
        h3: { fontSize: "2.1rem", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.015em" },
        h4: { fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" },
        h5: { fontSize: "1.35rem", fontWeight: 600, lineHeight: 1.4 },
        h6: { fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.5 },
        body1: { fontSize: "1rem", lineHeight: 1.7, color: text.secondary },
        body2: { fontSize: "0.875rem", lineHeight: 1.65, color: text.muted },
        button: { fontWeight: 600, textTransform: "none" as const, letterSpacing: "0.01em" },
        overline: { fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" as const, fontSize: "0.75rem" },
      },
      shape: { borderRadius: 16 },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: { transition: "background-color 0.3s ease, color 0.3s ease" },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: 12,
              textTransform: "none",
              fontWeight: 600,
              padding: "10px 24px",
              transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": { transform: "translateY(-1px)" },
            },
            contained: { boxShadow: "none", "&:hover": { boxShadow: "0 4px 16px rgba(37,144,241,0.3)" } },
            outlined: { borderWidth: 2, "&:hover": { borderWidth: 2 } },
          },
          defaultProps: { disableElevation: true },
        },
        MuiPaper: {
          styleOverrides: {
            root: { backgroundImage: "none", transition: "all 0.25s ease" },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              backgroundImage: "none",
              borderRadius: 20,
              border: isDark ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.06)",
              transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
              "&:hover": { transform: "translateY(-4px)", boxShadow: isDark ? "0 20px 60px rgba(0,0,0,0.4)" : "0 20px 60px rgba(0,0,0,0.08)" },
            },
          },
        },
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundImage: "none",
              backgroundColor: isDark ? alpha(bg.deep, 0.85) : alpha("#ffffff", 0.85),
              backdropFilter: "blur(12px)",
              borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            },
          },
        },
        MuiAccordion: {
          styleOverrides: { root: { "&:before": { display: "none" } } },
        },
      },
    });
  }, [mode]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ mode, toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
