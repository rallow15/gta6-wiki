"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface CodeCardProps {
  code: {
    id: string;
    name: string;
    description: string;
    category: string;
    codePS5: string;
    codeXbox: string;
    codePC: string;
    effect: string;
  };
}

export default function CodeCard({ code }: CodeCardProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [platform, setPlatform] = useState<"PS5" | "Xbox" | "PC">("PS5");

  const codeValue =
    platform === "PS5"
      ? code.codePS5
      : platform === "Xbox"
        ? code.codeXbox
        : code.codePC;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeValue);
      setCopied(platform);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback for non-HTTPS
      const textArea = document.createElement("textarea");
      textArea.value = codeValue;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(platform);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const platformStyles = {
    PS5: "badge-ps5",
    Xbox: "badge-xbox",
    PC: "badge-pc",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="neon-glow-card-cyan shimmer-line p-4 sm:p-5"
    >
      <div className="flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-semibold text-text-primary">{code.name}</h3>
            <p className="text-xs text-text-muted mt-0.5">{code.description}</p>
          </div>
          <span className="text-xs px-2 py-0.5 rounded-full bg-sunset-orange/10 text-sunset-orange border border-sunset-orange/20 shrink-0">
            {code.effect}
          </span>
        </div>

        {/* Platform selector */}
        <div className="flex gap-1.5">
          {(["PS5", "Xbox", "PC"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPlatform(p)}
              className={`text-xs px-2.5 py-1 rounded font-medium transition-all ${
                platform === p
                  ? platformStyles[p]
                  : "bg-deep-bg-light text-text-muted border border-night-violet/50 hover:text-text-secondary"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Code display */}
        <div className="flex items-center gap-2">
          <code className="cheat-code flex-1 block px-3 py-2 rounded-lg bg-deep-bg border border-lagoon-cyan/20 text-center">
            {codeValue}
          </code>
          <button
            onClick={handleCopy}
            className={`shrink-0 p-2 rounded-lg border transition-all ${
              copied === platform
                ? "bg-lagoon-cyan/20 border-lagoon-cyan/50 text-lagoon-cyan"
                : "bg-deep-bg-light border-night-violet/50 text-text-muted hover:text-neon-pink hover:border-neon-pink/30"
            }`}
            title="Copier le code"
          >
            {copied === platform ? (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}