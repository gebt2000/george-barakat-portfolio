"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ConnectBand } from "@/components/ConnectBand";
import { ContactForm } from "@/components/ContactForm";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <PhilosophySection />

        <section className="py-14 md:py-20">
          <Gallery />
        </section>

        <TestimonialsSection />

        <ConnectBand />

        <motion.section
          id="about"
          className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="text-xs font-mono tracking-[0.28em] text-[var(--foreground)]/45">
                ABOUT
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-normal tracking-[-0.02em] text-[var(--foreground)] md:text-3xl">
                Welcome—glad you&apos;re here.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/58">
                I&apos;m George, a Toronto-based photographer working across
                portraits, events, travel, and street. If you like work that
                feels calm, intentional, and a little editorial, we&apos;ll get
                along.
              </p>
              <p className="mt-4 text-xs font-mono tracking-[0.2em] text-[var(--foreground)]/40">
                TORONTO, ONTARIO
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-3xl border border-[var(--foreground)]/10 bg-[var(--card)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset]">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-[var(--foreground)]/10">
                    <Image
                      src="/george-barakat-portrait.png"
                      alt="George Barakat"
                      fill
                      className="object-cover object-[center_20%]"
                      sizes="112px"
                    />
                  </div>
                  <p className="text-sm leading-7 text-[var(--foreground)]/58">
                    This site is built to feel like the Pixieset demos you
                    referenced—clean storytelling, generous images—then pushed
                    further with motion, depth, and a sharper typographic
                    voice.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { k: "Focus", v: "Editorial clarity + real emotion" },
                    { k: "Deliverables", v: "Web, social, and print-ready" },
                    { k: "Process", v: "Calm direction on set" },
                    { k: "Range", v: "Portraits, events, travel, street" },
                  ].map((x) => (
                    <div
                      key={x.k}
                      className="rounded-2xl border border-[var(--foreground)]/8 bg-[var(--background)]/70 p-4"
                    >
                      <p className="text-xs font-mono tracking-[0.2em] text-[var(--foreground)]/45">
                        {x.k.toUpperCase()}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[var(--foreground)]/80">
                        {x.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="mx-auto w-full max-w-6xl px-5 pb-24 md:px-8"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease, delay: 0.05 }}
        >
          <div className="grid gap-8 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-5">
              <p className="text-xs font-mono tracking-[0.28em] text-[var(--foreground)]/45">
                CONTACT
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-normal tracking-[-0.02em] text-[var(--foreground)] md:text-3xl">
                Let&apos;s make something beautiful.
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/58">
                The form uses Resend—add your keys in production and messages
                land in your inbox.
              </p>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="mt-5 inline-flex rounded-full border border-[var(--foreground)]/10 bg-[var(--card)] px-4 py-2 text-sm text-[var(--foreground)]/65 shadow-sm transition hover:border-[var(--foreground)]/16 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/18"
              >
                Instagram →
              </a>
            </div>
            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-[var(--foreground)]/10 bg-[color-mix(in_oklab,var(--background)_92%,#fff_8%)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-[var(--foreground)]/50 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-[family-name:var(--font-display)] text-[var(--foreground)]/70">
            George Barakat
          </p>
          <p>© {new Date().getFullYear()} · Toronto, Ontario · Available for travel</p>
        </div>
      </footer>
    </div>
  );
}
