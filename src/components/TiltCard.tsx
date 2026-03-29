"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 260,
    damping: 24,
  });

  const glareX = useTransform(mx, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(my, [-0.5, 0.5], [0, 100]);
  const glare = useMotionTemplate`radial-gradient(420px 280px at ${glareX}% ${glareY}%, rgba(255,255,255,0.16), transparent 65%)`;

  function onMove(e: React.PointerEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className={cn("[perspective:1200px]", className)}>
      <motion.div
        ref={ref}
        className="group relative"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        <div className="relative h-full w-full [transform:translateZ(10px)]">
          {children}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glare }}
          />
        </div>
      </motion.div>
    </div>
  );
}
