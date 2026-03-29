"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CursorVariant = "default" | "link" | "view" | "magnetic";

function readVariant(el: Element | null): CursorVariant {
  if (!el || !(el instanceof HTMLElement)) return "default";
  const tagged = el.closest("[data-cursor]") as HTMLElement | null;
  const v = tagged?.dataset.cursor;
  if (v === "link" || v === "view" || v === "magnetic") return v;
  return "default";
}

const FLASH_IDLE_MS = 140;

/** Compact camera icon; lens centered on pointer. Flash “fires” while the pointer is moving. */
function CameraIcon({
  className,
  flashOn,
}: {
  className?: string;
  flashOn: boolean;
}) {
  return (
    <svg
      className={className}
      width="44"
      height="36"
      viewBox="0 0 44 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="cam-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a1816" />
          <stop offset="100%" stopColor="#2e2a26" />
        </linearGradient>
      </defs>
      {/* Prism / viewfinder hump */}
      <path
        d="M15 10 L17.5 5.5 H26.5 L29 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        className="text-[#141210]"
        fill="url(#cam-body)"
      />
      <rect
        x="3"
        y="10"
        width="38"
        height="22"
        rx="3.5"
        className="fill-[url(#cam-body)] stroke-[#141210]"
        strokeWidth="1.2"
      />
      {/* Lens outer */}
      <circle
        cx="22"
        cy="21"
        r="9"
        className="stroke-white/90"
        strokeWidth="1.35"
        fill="rgba(20,18,16,0.35)"
      />
      <circle
        cx="22"
        cy="21"
        r="6.2"
        className="stroke-[#141210]/40"
        strokeWidth="0.75"
        fill="none"
      />
      {/* Lens glass */}
      <circle cx="22" cy="21" r="3.2" className="fill-white/25" />
      <circle cx="20.5" cy="19.5" r="1" className="fill-white/50" />
      {/* Flash — bright while moving, dim when idle */}
      <motion.rect
        x="30.5"
        y="12.5"
        width="8"
        height="6.5"
        rx="1.5"
        fill="#fff8e8"
        initial={false}
        animate={{ opacity: flashOn ? 0.5 : 0 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
      <motion.rect
        x="32"
        y="14"
        width="5"
        height="3.5"
        rx="0.75"
        initial={false}
        animate={
          flashOn
            ? { fill: "#fffef5", opacity: 1 }
            : { fill: "#5c5855", opacity: 0.4 }
        }
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
      {/* Grip line */}
      <line
        x1="6"
        y1="26"
        x2="6"
        y2="29"
        className="stroke-white/25"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [flashOn, setFlashOn] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);

  const fastX = useSpring(cx, { stiffness: 520, damping: 38, mass: 0.35 });
  const fastY = useSpring(cy, { stiffness: 520, damping: 38, mass: 0.35 });

  useEffect(() => {
    const clearIdleTimer = () => {
      if (idleTimerRef.current !== null) {
        clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    const onMove = (e: PointerEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      setVisible(true);
      setVariant(readVariant(e.target as Element));
      setFlashOn(true);
      clearIdleTimer();
      idleTimerRef.current = setTimeout(() => {
        setFlashOn(false);
        idleTimerRef.current = null;
      }, FLASH_IDLE_MS);
    };

    const onLeave = () => {
      setVisible(false);
      setFlashOn(false);
      clearIdleTimer();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      clearIdleTimer();
    };
  }, [cx, cy]);

  const camScale =
    variant === "default" ? 1 : variant === "magnetic" ? 1.2 : 1.28;
  const showLabel =
    variant === "link" || variant === "view" || variant === "magnetic";

  const labelX = useTransform(fastX, (v) => v + 26);
  const labelY = useTransform(fastY, (v) => v + 22);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200] hidden md:block"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Camera — lens centered on pointer */}
      <motion.div
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_4px_14px_rgba(20,18,16,0.18)]"
        style={{ x: fastX, y: fastY }}
        animate={{ scale: camScale }}
        transition={{ type: "spring", stiffness: 480, damping: 32 }}
      >
        <CameraIcon flashOn={flashOn} />
      </motion.div>

      <AnimatePresence>
        {showLabel ? (
          <motion.div
            key={variant}
            className="fixed left-0 top-0"
            style={{ x: labelX, y: labelY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
          >
            <div className="rounded-full border border-[#141210]/10 bg-white/90 px-4 py-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#141210]/85 shadow-[0_12px_40px_rgba(20,18,16,0.12)] backdrop-blur-md">
              {variant === "view"
                ? "View"
                : variant === "magnetic"
                  ? "Go"
                  : "Open"}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
