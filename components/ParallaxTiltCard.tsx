"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  useParallaxTilt,
  type UseParallaxTiltOptions,
} from "@/lib/use-parallax-tilt";

export interface ParallaxTiltCardProps
  extends Omit<HTMLMotionProps<"div">, "ref">,
    UseParallaxTiltOptions {}

export function ParallaxTiltCard({
  children,
  className,
  maxTilt,
  duration,
  shadowIntensity,
  stiffness,
  damping,
  ...props
}: ParallaxTiltCardProps) {
  const { tiltProps, ref } = useParallaxTilt({
    maxTilt,
    duration,
    shadowIntensity,
    stiffness,
    damping,
  });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      {...tiltProps}
      className={cn("cursor-pointer", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}