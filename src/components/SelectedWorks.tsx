"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { photos } from "@/content/photos";
import { Magnetic } from "@/components/Magnetic";

const ease = [0.22, 1, 0.36, 1] as const;

const preview = photos.slice(0, 4);

export function SelectedWorks() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <motion.div
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease }}
      >
        <div>
          <p className="text-xs font-mono tracking-[0.32em] text-[var(--foreground)]/45">
            SELECTED WORKS
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-normal tracking-[-0.02em] text-[var(--foreground)] md:text-3xl">
            A glimpse of recent frames
          </h2>
        </div>
        <Magnetic strength={0.2}>
          <Link
            href="/portfolio"
            data-cursor="magnetic"
            className="inline-flex w-fit items-center justify-center border-b border-[var(--foreground)]/35 pb-1 text-sm font-medium tracking-wide text-[var(--foreground)]/80 transition hover:border-[var(--foreground)]/60 hover:text-[var(--foreground)]"
          >
            View portfolio
          </Link>
        </Magnetic>
      </motion.div>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {preview.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease, delay: i * 0.06 }}
          >
            <Link
              href="/portfolio"
              data-cursor="view"
              className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-[var(--foreground)]/5"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/40 via-transparent to-transparent opacity-80" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
