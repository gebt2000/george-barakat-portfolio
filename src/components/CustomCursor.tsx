"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

type CursorVariant = "default" | "link" | "view" | "magnetic";

function readVariant(el: Element | null): CursorVariant {
  if (!el || !(el instanceof HTMLElement)) return "default";
  const tagged = el.closest("[data-cursor]") as HTMLElement | null;
  const v = tagged?.dataset.cursor;
  if (v === "link" || v === "view" || v === "magnetic") return v;
  return "default";
}

/** Your camera artwork; geometric center aligns with the pointer (lens area). */
function CameraCursorImage({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny overlay asset, no layout shift concerns
    <img
      src="/cursor-camera.png"
      alt=""
      width={894}
      height={661}
      draggable={false}
      className={className}
    />
  );
}

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");

  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);

  const fastX = useSpring(cx, { stiffness: 520, damping: 38, mass: 0.35 });
  const fastY = useSpring(cy, { stiffness: 520, damping: 38, mass: 0.35 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
      setVisible(true);
      setVariant(readVariant(e.target as Element));
    };

    const onLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [cx, cy]);

  const camScale =
    variant === "default" ? 1 : variant === "magnetic" ? 1.2 : 1.28;
  const showLabel =
    variant === "link" || variant === "view" || variant === "magnetic";

  const labelX = useTransform(fastX, (v) => v + 52);
  const labelY = useTransform(fastY, (v) => v + 28);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[200] hidden md:block"
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_6px_20px_rgba(20,18,16,0.22)]"
        style={{ x: fastX, y: fastY }}
        animate={{ scale: camScale }}
        transition={{ type: "spring", stiffness: 480, damping: 32 }}
      >
        <CameraCursorImage className="h-[72px] w-auto max-w-[104px] select-none object-contain" />
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
