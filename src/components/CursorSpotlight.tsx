"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

/**
 * Soft aurora that follows the pointer — reads “premium / Framer” without
 * stealing focus from the photography.
 */
export function CursorSpotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 90, damping: 30, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 90, damping: 30, mass: 0.45 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  const background = useMotionTemplate`radial-gradient(640px 540px at ${sx}px ${sy}px, color-mix(in oklab, var(--accent) 10%, transparent) 0%, transparent 58%), radial-gradient(520px 460px at ${sx}px ${sy}px, color-mix(in oklab, var(--accent2) 8%, transparent) 0%, transparent 52%)`;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.65] mix-blend-multiply"
      style={{ background }}
    />
  );
}
