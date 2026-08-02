"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScramble, type UseScrambleOptions } from "@/lib/use-scramble";

export interface TextScrambleProps
  extends Omit<HTMLMotionProps<"span">, "children">,
    UseScrambleOptions {
  children: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "div";
}

export function TextScramble({
  children,
  className,
  as: Component = "span",
  duration,
  delay,
  scrambleChars,
  ...props
}: TextScrambleProps) {
  const displayText = useScramble({
    text: children,
    duration,
    delay,
    scrambleChars,
  });

  return (
    <motion.span
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: delay || 0 }}
      {...props}
    >
      {displayText}
    </motion.span>
  );
}