"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function clamp01(x: number) {
  return Math.min(1, Math.max(0, x));
}

function smoothstep(t: number) {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}

/**
 * Hot-air balloons that drift across the mobile header (over the wordmark) after
 * the home hero scrolls away. Desktop hidden. pointer-events-none everywhere.
 */
const BALLOONS = [
  {
    src: "/images/balloons/b1.png",
    delay: 0,
    dur: 0.55,
    y: "48%",
    scale: 0.52,
    rtl: false,
    flip: 1,
  },
  {
    src: "/images/balloons/b2.png",
    delay: 0.14,
    dur: 0.48,
    y: "36%",
    scale: 0.64,
    rtl: true,
    flip: -1,
  },
  {
    src: "/images/balloons/b3.png",
    delay: 0.28,
    dur: 0.62,
    y: "58%",
    scale: 0.95,
    rtl: false,
    flip: 1,
  },
  {
    src: "/images/balloons/b4.png",
    delay: 0.42,
    dur: 0.52,
    y: "28%",
    scale: 0.52,
    rtl: true,
    flip: -1,
  },
] as const;

export function MobileHeaderBalloons({
  flyProgress,
  visible,
}: {
  flyProgress: number;
  visible: boolean;
}) {
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  if (reduceMotion) return null;

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-11 right-14 top-1/2 z-[58] h-[5.25rem] -translate-y-1/2 overflow-visible md:hidden",
        !visible && "opacity-0",
      )}
      aria-hidden
    >
      {BALLOONS.map((b) => {
        const raw = clamp01((flyProgress - b.delay) / Math.max(0.08, b.dur));
        const e = smoothstep(raw);
        const xPct = b.rtl ? 108 - e * 152 : -44 + e * 152;
        const wobble = Math.sin(e * Math.PI * 2.1) * 5 * b.flip;
        const bob = Math.sin(e * Math.PI * 1.4) * 5;
        const fadeIn = clamp01(raw * 5);
        const fadeOut = clamp01((1 - raw) * 4.5);
        const alpha = 0.88 * fadeIn * fadeOut;

        return (
          // eslint-disable-next-line @next/next/no-img-element -- small decorative PNG/JPEG, no LCP
          <img
            key={b.src}
            src={b.src}
            alt=""
            width={220}
            height={280}
            draggable={false}
            className={cn(
              "absolute max-h-[4.75rem] w-auto object-contain select-none",
              b.src.endsWith(".png") ? "drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)]" : "drop-shadow-[0_6px_14px_rgba(0,0,0,0.18)]",
            )}
            style={{
              left: `${xPct}%`,
              top: b.y,
              opacity: visible ? alpha : 0,
              transform: `translate(-50%, calc(-50% + ${bob}px)) scale(${b.scale}) rotate(${wobble}deg)`,
              willChange: visible && flyProgress > 0 && flyProgress < 1 ? "transform, opacity" : "auto",
            }}
          />
        );
      })}
    </div>
  );
}
