"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const press = [
  "Editorial features",
  "Brand campaigns",
  "Event coverage",
  "Portrait studios",
  "Travel journals",
  "Local arts",
];

export function AboutContent() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <motion.div
        className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease }}
      >
        <div>
          <p className="text-xs font-mono tracking-[0.32em] text-[var(--foreground)]/45">
            ABOUT
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.25rem)] font-normal leading-tight tracking-[-0.02em] text-[var(--foreground)]">
            Hi, I am George Barakat
          </h1>
          <p className="mt-3 text-sm italic text-[var(--foreground)]/55">
            Let&apos;s get to know each other
          </p>
          <div className="mt-8 space-y-5 text-base leading-8 text-[var(--foreground)]/62">
            <p>
              I&apos;m a photographer based in Toronto, Ontario, working across
              portraits, events, travel, and street. I care most about the quiet,
              honest frames—the moments when you forget the camera is there.
            </p>
            <p>
              Over the years I&apos;ve been lucky to document celebrations,
              editorial projects, and everyday streets that deserve to be
              remembered. I&apos;d be honoured to capture your story, too.
              Let&apos;s connect and see where the light takes us.
            </p>
          </div>

          <blockquote className="mt-12 border-l-2 border-[var(--foreground)]/15 pl-6">
            <p className="font-[family-name:var(--font-display)] text-lg italic leading-relaxed text-[var(--foreground)]/75 md:text-xl">
              &ldquo;How wonderful to be who I am, made out of earth and water,
              my own thoughts, my own fingerprints—all that glorious, temporary
              stuff.&rdquo;
            </p>
            <footer className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-[var(--foreground)]/45">
              — Mary Oliver
            </footer>
          </blockquote>

          <div className="mt-14">
            <p className="text-xs font-mono tracking-[0.28em] text-[var(--foreground)]/45">
              AS SEEN IN &amp; WITH
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--foreground)]/55 sm:grid-cols-3">
              {press.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-[var(--foreground)]/40">
              Replace this list with your real publications and clients.
            </p>
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm shadow-[0_24px_60px_rgba(20,18,16,0.12)]">
            <Image
              src="/images/about-portrait.jpg"
              alt="Black and white portrait of George Barakat"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </motion.div>

      <motion.section
        className="mt-24 border-t border-[var(--foreground)]/10 pt-16 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-normal text-[var(--foreground)] md:text-3xl">
          Let&apos;s connect
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--foreground)]/58">
          I can&apos;t wait to hear your story. Drop me a message and
          let&apos;s create something meaningful together.
        </p>
        <Link
          href="/contact"
          data-cursor="magnetic"
          className="mt-8 inline-flex rounded-sm border border-[var(--foreground)]/15 bg-[var(--foreground)] px-8 py-3 text-sm font-medium text-[#f4f1eb] transition hover:bg-[var(--foreground)]/90"
        >
          Contact me
        </Link>
      </motion.section>
    </div>
  );
}
