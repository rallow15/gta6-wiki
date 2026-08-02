"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const animations: Record<string, Variants> = {
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
  neonReveal: {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

interface AnimatedContainerProps {
  children: React.ReactNode;
  animation?: keyof typeof animations;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
}

export default function AnimatedContainer({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  margin = "-80px",
}: AnimatedContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: margin as `${number}px` | undefined });

  return (
    <motion.div
      ref={ref}
      variants={animations[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}