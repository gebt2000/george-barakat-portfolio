"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function PhilosophySection() {
  return (
    <motion.section
      id="philosophy"
      className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease }}
    >
      <p className="text-xs font-mono tracking-[0.28em] text-[var(--foreground)]/45">
        MY APPROACH
      </p>
      <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-3xl font-normal leading-[1.15] tracking-[-0.02em] text-[var(--foreground)] md:text-4xl lg:text-[2.75rem]">
        Images that breathe—honest light, careful composition, and the small
        gestures that say everything.
      </h2>
      <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-12">
        <p className="md:col-span-5 text-sm leading-7 text-[var(--foreground)]/60">
          Whether it&apos;s a portrait session, a crowded room, or a street
          corner at blue hour, I&apos;m drawn to clarity without coldness:
          editorial restraint with a warm pulse underneath.
        </p>
        <p className="md:col-span-7 text-sm leading-7 text-[var(--foreground)]/60">
          Based in Toronto, available for travel. Deliverables are tuned for
          web, social, and print—so your story looks as intentional online as it
          does on the wall.
        </p>
      </div>
    </motion.section>
  );
}
