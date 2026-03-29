"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function ConnectBand() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#141210] py-16 text-[#f4f1eb] md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xs font-mono tracking-[0.3em] text-white/45">
            LET&apos;S CONNECT
          </p>
          <p className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-2xl font-normal leading-snug tracking-[-0.02em] text-white md:text-3xl">
            Tell me what you&apos;re dreaming up—I&apos;ll help you shape it
            into photographs that last.
          </p>
        </div>
        <Magnetic strength={0.26}>
          <a
            href="#contact"
            data-cursor="magnetic"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Get in touch
          </a>
        </Magnetic>
      </div>
    </motion.section>
  );
}
