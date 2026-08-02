"use client";

import { TextScramble } from "@/components/TextScramble";

interface ScrambleTitleProps {
  text: string;
  className?: string;
}

export function ScrambleTitle({ text, className = "" }: ScrambleTitleProps) {
  return (
    <TextScramble
      duration={1}
      delay={0.2}
      scrambleChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"
      className={className}
    >
      {text}
    </TextScramble>
  );
}