"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function PhilosophySection() {
  return (
    <motion.section
      id="philosophy"
      className="mx-auto w-full max-w-3xl px-5 py-20 text-center md:px-8 md:py-28"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease }}
    >
      <p className="text-xs font-mono tracking-[0.35em] text-[var(--foreground)]/45">
        MY PHILOSOPHY
      </p>
      <h2 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(1.75rem,5vw,2.75rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[var(--foreground)]">
        Lasting memories through honest, soulful imagery
      </h2>
      <p className="mt-8 text-base leading-8 text-[var(--foreground)]/62">
        Love and life show up in countless ways—the joy of new chapters, the
        strength of commitment, friendship, and quiet support. I&apos;m George
        Barakat, and I&apos;m here to document your story: the glance, the
        handhold, the tearful joy when everything finally feels real.
      </p>
      <Link
        href="/about"
        data-cursor="link"
        className="mt-10 inline-block border-b border-[var(--foreground)]/25 pb-0.5 text-sm font-medium tracking-wide text-[var(--foreground)]/75 transition hover:border-[var(--foreground)]/50 hover:text-[var(--foreground)]"
      >
        Learn more
      </Link>
    </motion.section>
  );
}
