"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GeorgeBarakatWordmark } from "@/components/GeorgeBarakatWordmark";
import { Magnetic } from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative min-h-[min(100dvh,920px)]">
      <div
        className="pointer-events-none absolute right-[8%] top-[18%] hidden font-[family-name:var(--font-display)] text-[clamp(8rem,22vw,14rem)] font-normal leading-none text-[var(--foreground)]/[0.04] lg:block"
        aria-hidden
      >
        G
      </div>

      <div className="mx-auto flex min-h-[min(100dvh,920px)] max-w-6xl flex-col gap-10 px-5 pb-16 pt-10 md:flex-row md:items-stretch md:gap-12 md:px-8 md:pb-20 md:pt-14">
        <div className="flex flex-1 flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease }}
          >
            <GeorgeBarakatWordmark />
          </motion.div>

          <motion.p
            className="mt-6 max-w-md font-[family-name:var(--font-display)] text-xl font-normal italic leading-snug tracking-[-0.01em] text-[var(--foreground)]/70 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
          >
            Subtle frames. Bold feeling.
          </motion.p>

          <motion.p
            className="mt-4 max-w-lg text-sm leading-7 text-[var(--foreground)]/55"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.2 }}
          >
            Toronto-based photography for people who want work that feels
            editorial—honest, refined, and unmistakably yours.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.28 }}
          >
            <Magnetic>
              <a
                href="#portfolio"
                data-cursor="magnetic"
                className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/15 bg-[var(--foreground)] px-6 py-2.5 text-sm font-medium text-[#f4f1eb] shadow-sm transition hover:bg-[var(--foreground)]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/25"
              >
                View selected work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                data-cursor="magnetic"
                className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)]/12 bg-[var(--card)] px-6 py-2.5 text-sm font-medium text-[var(--foreground)]/85 shadow-sm transition hover:border-[var(--foreground)]/18 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/20"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="relative flex flex-1 items-center md:max-w-md md:flex-none lg:max-w-lg"
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.95, ease, delay: 0.1 }}
        >
          <div className="relative w-full">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[var(--accent)]/12 via-transparent to-[var(--accent2)]/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[26px] border border-[var(--foreground)]/10 bg-white p-2 shadow-[0_28px_80px_rgba(20,18,16,0.12)]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
                <Image
                  src="/george-barakat-portrait.png"
                  alt="George Barakat, photographer in Toronto"
                  fill
                  className="object-cover object-[center_14%]"
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/25 via-transparent to-transparent" />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-[var(--foreground)]/8 px-4 py-3">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--foreground)]/40">
                    Toronto, ON
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-sm italic text-[var(--foreground)]/75">
                    George Barakat
                  </p>
                </div>
                <span className="rounded-full border border-[var(--foreground)]/10 bg-[var(--background)]/80 px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                  Open
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
