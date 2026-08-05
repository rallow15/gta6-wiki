"use client";

import { useState, useEffect } from "react";

// GTA 6 release date: November 19, 2026
const RELEASE_DATE = new Date("2026-11-19T00:00:00-05:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const PLACEHOLDER: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function calculateTimeLeft(): TimeLeft {
  const diff = RELEASE_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="pulse-glow rounded-lg bg-deep-bg-light border border-neon-pink/20 px-3 py-2 sm:px-5 sm:py-3 min-w-[4rem] sm:min-w-[5.5rem]">
        <span className="font-display text-3xl sm:text-5xl text-text-primary">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-[10px] sm:text-xs uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(PLACEHOLDER);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 sm:gap-4 opacity-50">
        <TimeUnit value={0} label="Jours" />
        <span className="font-display text-2xl text-neon-pink mt-[-1.5rem]">:</span>
        <TimeUnit value={0} label="Heures" />
        <span className="font-display text-2xl text-neon-pink mt-[-1.5rem]">:</span>
        <TimeUnit value={0} label="Min" />
        <span className="font-display text-2xl text-neon-pink mt-[-1.5rem]">:</span>
        <TimeUnit value={0} label="Sec" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <TimeUnit value={timeLeft.days} label="Jours" />
      <span className="font-display text-2xl text-neon-pink mt-[-1.5rem]">:</span>
      <TimeUnit value={timeLeft.hours} label="Heures" />
      <span className="font-display text-2xl text-neon-pink mt-[-1.5rem]">:</span>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <span className="font-display text-2xl text-neon-pink mt-[-1.5rem]">:</span>
      <TimeUnit value={timeLeft.seconds} label="Sec" />
    </div>
  );
}