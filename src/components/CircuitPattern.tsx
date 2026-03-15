"use client";

import { Box } from "@mui/material";

/** Subtle animated circuit-board pattern for hero backgrounds */
export default function CircuitPattern({ opacity = 0.06 }: { opacity?: number }) {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity,
      }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Horizontal lines */}
            <line x1="0" y1="30" x2="50" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="70" y1="30" x2="120" y2="30" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="90" x2="40" y2="90" stroke="currentColor" strokeWidth="1" />
            <line x1="80" y1="90" x2="120" y2="90" stroke="currentColor" strokeWidth="1" />
            {/* Vertical lines */}
            <line x1="30" y1="0" x2="30" y2="20" stroke="currentColor" strokeWidth="1" />
            <line x1="90" y1="40" x2="90" y2="80" stroke="currentColor" strokeWidth="1" />
            <line x1="60" y1="60" x2="60" y2="120" stroke="currentColor" strokeWidth="1" />
            {/* Nodes / connection points */}
            <circle cx="50" cy="30" r="3" fill="currentColor" />
            <circle cx="70" cy="30" r="2" fill="currentColor" />
            <circle cx="30" cy="20" r="2.5" fill="currentColor" />
            <circle cx="90" cy="40" r="3" fill="currentColor" />
            <circle cx="90" cy="80" r="2" fill="currentColor" />
            <circle cx="40" cy="90" r="2.5" fill="currentColor" />
            <circle cx="80" cy="90" r="3" fill="currentColor" />
            <circle cx="60" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
            {/* Right-angle turns */}
            <polyline points="50,30 50,60 60,60" fill="none" stroke="currentColor" strokeWidth="1" />
            <polyline points="90,80 90,90 80,90" fill="none" stroke="currentColor" strokeWidth="1" />
            <polyline points="40,90 40,60 60,60" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </Box>
  );
}
