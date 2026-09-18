"use client";

import { useEffect, useRef } from "react";

interface AdSenseDisplayProps {
  adSlot: string;
  className?: string;
}

export default function AdSenseDisplay({ adSlot, className = "" }: AdSenseDisplayProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current || !adRef.current) return;

    try {
      // AdSense script is already loaded globally via next/script in the root layout.
      ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
        (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch (e) {
      // Fail silently — AdSense availability is not guaranteed in all environments.
      console.error("AdSense push failed:", e);
    }
  }, []);

  return (
    <div className={`my-8 ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-2965679591230669"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
