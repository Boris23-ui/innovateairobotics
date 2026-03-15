"use client";

import { Box } from "@mui/material";

/** Rotating gear SVG for robotics branding */
export default function GearIcon({ size = 60, color = "#2590f1", speed = 12 }: { size?: number; color?: string; speed?: number }) {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        animation: `spin ${speed}s linear infinite`,
        "@keyframes spin": { "0%": { transform: "rotate(0deg)" }, "100%": { transform: "rotate(360deg)" } },
      }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M50 20c-1.7 0-3.3.1-5 .4l-2-8.4h-6l-2 8.4c-3.2.8-6.2 2.2-8.9 4l-7-5-4.2 4.2 5 7c-1.8 2.7-3.2 5.7-4 8.9L7.5 41.5v6l8.4 2c.8 3.2 2.2 6.2 4 8.9l-5 7 4.2 4.2 7-5c2.7 1.8 5.7 3.2 8.9 4l2 8.4h6l2-8.4c3.2-.8 6.2-2.2 8.9-4l7 5 4.2-4.2-5-7c1.8-2.7 3.2-5.7 4-8.9l8.4-2v-6l-8.4-2c-.8-3.2-2.2-6.2-4-8.9l5-7-4.2-4.2-7 5c-2.7-1.8-5.7-3.2-8.9-4l-2-8.4h-1zM50 35c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z"
          fill={color}
          fillOpacity="0.2"
          stroke={color}
          strokeWidth="2"
        />
        <circle cx="50" cy="50" r="8" fill={color} fillOpacity="0.3" stroke={color} strokeWidth="1.5" />
      </svg>
    </Box>
  );
}
