"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const quotes = [
  {
    text: "George has a rare eye for both the big moment and the quiet in-between. Our gallery feels cinematic without feeling staged.",
    names: "Rachel + Alex",
  },
  {
    text: "Professional, kind, and absurdly fast on turnaround. The images landed exactly where we needed them for launch.",
    names: "Jordan · Brand lead",
  },
  {
    text: "He made two camera-shy people look like we belonged in a magazine. We’ll hire him again without thinking twice.",
    names: "Caroline + Christopher",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-y border-[var(--foreground)]/8 bg-[color-mix(in_oklab,var(--background)_88%,#fff_12%)] py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          className="text-xs font-mono tracking-[0.28em] text-[var(--foreground)]/45"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          KIND WORDS
        </motion.p>
        <motion.h2
          className="mt-3 font-[family-name:var(--font-display)] text-2xl font-normal tracking-[-0.02em] text-[var(--foreground)] md:text-3xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease, delay: 0.05 }}
        >
          Trusted by people who notice the details.
        </motion.h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.names}
              className="flex flex-col justify-between rounded-2xl border border-[var(--foreground)]/10 bg-[var(--card)] p-6 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            >
              <p className="text-sm leading-7 text-[var(--foreground)]/70">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-6 font-[family-name:var(--font-display)] text-sm italic tracking-wide text-[var(--foreground)]/85">
                {q.names}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
