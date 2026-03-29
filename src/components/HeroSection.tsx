"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { photos } from "@/content/photos";
import { Magnetic } from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

const heroImage = photos[0]?.src;

export function HeroSection() {
  return (
    <section className="relative min-h-dvh">
      <div className="absolute inset-0">
        {heroImage ? (
          <>
            <Image
              src={heroImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)]" />
          </>
        ) : (
          <div className="h-full w-full bg-[#3d3835]" />
        )}
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 pb-24 pt-[calc(var(--site-header-h)+2rem)] text-center text-white md:pt-[calc(var(--site-header-h)+2.5rem)]">
        <motion.h1
          className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.75rem,10vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.03em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.06 }}
        >
          George Barakat
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl font-[family-name:var(--font-display)] text-xl font-normal italic leading-snug text-white/92 md:text-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.14 }}
        >
          Portrait, event, travel &amp; street photography
        </motion.p>
        <motion.p
          className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          Toronto, Ontario
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.28 }}
        >
          <Magnetic strength={0.24}>
            <Link
              href="/portfolio"
              data-cursor="magnetic"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-sm border border-white/35 bg-white/10 px-8 py-3 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View portfolio
            </Link>
          </Magnetic>
          <Magnetic strength={0.24}>
            <Link
              href="/contact"
              data-cursor="magnetic"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-sm border border-white/25 bg-transparent px-8 py-3 text-sm font-medium tracking-wide text-white transition hover:bg-white/10"
            >
              Get in touch
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.35em] text-white/50">
        Scroll
      </div>
    </section>
  );
}
