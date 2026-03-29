"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Magnetic } from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

const heroImageDesktop = "/images/hero.jpg";
const heroImageMobile = "/images/hero-mobile.jpg";

const heroQuality = 100;

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="site-hero" className="relative min-h-dvh">
      <div className="absolute inset-0">
        {heroImageDesktop ? (
          <>
            <Image
              src={heroImageMobile}
              alt="Portrait in a long dress at sunrise with hot air balloons over a rocky valley"
              fill
              className="object-cover object-[center_25%] md:hidden"
              priority
              sizes="100vw"
              unoptimized
            />
            <Image
              src={heroImageDesktop}
              alt="Black and white photograph of two guests toasting with wine glasses"
              fill
              className="hidden object-cover md:block"
              priority
              quality={heroQuality}
              sizes="100vw"
            />
            {/* Dark treatment: base wash + vertical depth + edge vignette */}
            <div className="absolute inset-0 bg-black/38" aria-hidden />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/28 to-black/58"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-[radial-gradient(ellipse_85%_70%_at_50%_42%,transparent_0%,rgba(0,0,0,0.35)_72%,rgba(0,0,0,0.55)_100%)]"
              aria-hidden
            />
          </>
        ) : (
          <div className="h-full w-full bg-[#3d3835]" />
        )}
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-6 pb-24 pt-[calc(var(--site-header-h)+2rem)] text-center text-white md:pt-[calc(var(--site-header-h)+2.5rem)]">
        <motion.h1
          className="mt-5 font-[family-name:var(--font-wordmark)] text-[clamp(1.85rem,6.5vw,3.35rem)] font-extralight uppercase leading-[1.08] tracking-[0.12em] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.55),0_1px_3px_rgba(0,0,0,0.9)] min-[400px]:tracking-[0.16em] md:text-[clamp(2.15rem,5vw,3.75rem)] md:tracking-[0.18em]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.06 }}
        >
          George Barakat
        </motion.h1>
        <motion.p
          className="mt-6 max-w-xl px-1 font-[family-name:var(--font-wordmark)] text-[10px] font-extralight uppercase leading-relaxed tracking-[0.32em] text-white/95 sm:text-[11px] sm:tracking-[0.38em] [text-shadow:0_2px_18px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.85)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.14 }}
        >
          Portrait, event, travel &amp; street photography
        </motion.p>
        <motion.p
          className="mt-4 font-[family-name:var(--font-wordmark)] text-[10px] font-extralight uppercase tracking-[0.3em] text-white/78 [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]"
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
              className="inline-flex min-w-[10rem] items-center justify-center rounded-sm border border-white/45 bg-black/25 px-8 py-3 text-sm font-medium tracking-wide text-white shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition hover:border-white/55 hover:bg-black/35"
            >
              View portfolio
            </Link>
          </Magnetic>
          <Magnetic strength={0.24}>
            <Link
              href="/contact"
              data-cursor="magnetic"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-sm border border-white/40 bg-black/15 px-8 py-3 text-sm font-medium tracking-wide text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-sm transition hover:border-white/50 hover:bg-black/25"
            >
              Get in touch
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5">
        <span className="font-[family-name:var(--font-wordmark)] text-[10px] font-extralight uppercase tracking-[0.38em] text-white/72 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
          Scroll
        </span>
        <motion.div
          className="flex flex-col items-center text-white/65"
          animate={
            reduceMotion
              ? {}
              : { y: [0, 6, 0], opacity: [0.5, 0.92, 0.5] }
          }
          transition={{
            duration: 2.25,
            repeat: Infinity,
            ease: [0.42, 0, 0.58, 1],
          }}
          aria-hidden
        >
          <span className="h-6 w-px rounded-full bg-gradient-to-b from-white/85 via-white/35 to-transparent" />
          <ChevronDown
            className="-mt-0.5 size-[18px]"
            strokeWidth={1.35}
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
