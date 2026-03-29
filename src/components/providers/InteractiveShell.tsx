"use client";

import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { CursorSpotlight } from "@/components/CursorSpotlight";

export function InteractiveShell({ children }: { children: React.ReactNode }) {
  const [enableMotion, setEnableMotion] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnableMotion(fine && !reduce);

    if (fine && !reduce) {
      document.documentElement.classList.add("has-custom-cursor");
    } else {
      document.documentElement.classList.remove("has-custom-cursor");
    }

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enableMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.85,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [enableMotion]);

  return (
    <>
      {enableMotion ? <CursorSpotlight /> : null}
      {enableMotion ? <CustomCursor /> : null}
      <div className="relative z-10">{children}</div>
    </>
  );
}
