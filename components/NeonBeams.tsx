"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function NeonBeams({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  const paths = [
    "M-100 200 Q 200 100 500 250 T 1100 200 T 1700 180",
    "M-100 400 Q 300 300 600 450 T 1200 380 T 1800 420",
    "M-100 600 Q 250 500 550 650 T 1150 580 T 1750 620",
    "M-100 100 Q 150 50 400 120 T 1000 80 T 1600 110",
    "M-100 500 Q 350 420 650 550 T 1250 480 T 1850 530",
  ];

  const beamColors = [
    "#FF2E9A",
    "#22D3EE",
    "#FF7A3D",
    "#FF2E9A",
    "#22D3EE",
  ];

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        fill="none"
      >
        {paths.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke={beamColors[i]}
            strokeWidth="1.5"
            strokeOpacity="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.4, 0.2, 0.4, 0.1],
            }}
            transition={{
              pathLength: { duration: 3, delay: i * 0.4, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, delay: i * 0.4 },
            }}
          />
        ))}
        {paths.map((path, i) => (
          <motion.path
            key={`glow-${i}`}
            d={path}
            stroke={beamColors[i]}
            strokeWidth="4"
            strokeOpacity="0.05"
            filter="blur(4px)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.15, 0.05, 0.15, 0],
            }}
            transition={{
              pathLength: { duration: 3, delay: i * 0.4, ease: "easeInOut" },
              opacity: { duration: 6, repeat: Infinity, delay: i * 0.4 },
            }}
          />
        ))}
      </svg>

      {/* Floating neon orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            width: 150 + i * 80,
            height: 150 + i * 80,
            background: `radial-gradient(circle, ${beamColors[i % beamColors.length]}15, transparent 70%)`,
            left: `${15 + i * 22}%`,
            top: `${10 + i * 20}%`,
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -25, 15, -10, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}