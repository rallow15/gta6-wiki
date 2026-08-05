"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between each child in seconds (default: 0.06) */
  staggerDelay?: number;
  /** Base delay before first child animates in seconds (default: 0) */
  baseDelay?: number;
  /** Animation variant (default: "fadeInUp") */
  animation?: "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn";
  /** Whether to animate only once (default: true) */
  once?: boolean;
  /** Margin for intersection observer (default: "-80px") */
  margin?: string;
  /** Duration of each child animation in seconds (default: 0.5) */
  duration?: number;
}

const variantDefs = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.06,
  baseDelay = 0,
  animation = "fadeInUp",
  once = true,
  margin = "-80px",
  duration = 0.5,
}: StaggerContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` | undefined });

  const variant = variantDefs[animation];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={variant}
              transition={{
                duration,
                delay: baseDelay + i * staggerDelay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}