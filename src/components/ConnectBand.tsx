"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function ConnectBand() {
  return (
    <motion.section
      className="relative overflow-hidden bg-[#1f1c1a] py-20 text-[#f7f4ef] md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-xs font-mono tracking-[0.38em] text-white/50">
          LET&apos;S CONNECT
        </p>
        <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.85rem,5vw,2.75rem)] font-normal leading-tight tracking-[-0.02em] text-white">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm font-normal uppercase leading-relaxed tracking-[0.2em] text-white/55">
          I look forward to hearing from you and helping you create memories
          that will last a lifetime.
        </p>
        <Magnetic strength={0.26}>
          <Link
            href="/contact"
            data-cursor="magnetic"
            className="mt-10 inline-flex items-center justify-center rounded-sm border border-white/30 bg-white/10 px-10 py-3.5 text-sm font-medium tracking-wide text-white transition hover:bg-white/18"
          >
            Get in touch
          </Link>
        </Magnetic>
      </div>
    </motion.section>
  );
}
