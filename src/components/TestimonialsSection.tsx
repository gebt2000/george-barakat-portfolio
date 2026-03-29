"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const quotes = [
  {
    text: "George's talent for capturing both the big moments and the small, meaningful details is unmatched. Every photo feels personal and significant.",
    names: "Rachel + Alex",
  },
  {
    text: "We couldn't have asked for a better photographer—comfortable, understanding, and the photos are stunning. They perfectly capture the joy of our day.",
    names: "Caroline + Christopher",
  },
  {
    text: "From the first conversation to delivery, George photographed our wedding with such authenticity. Each image brings back every feeling.",
    names: "Aaron + Tabitha",
  },
  {
    text: "Warm, professional, and genuinely invested in our story. The gallery feels like us—not a template.",
    names: "Lucas + Danielle",
  },
  {
    text: "Engagement through event, George was creative and kind. We're grateful to have had him behind the camera.",
    names: "Cameron + Quinn",
  },
  {
    text: "Editorial and emotional at once. Our families still talk about how beautiful the set turned out.",
    names: "Jordan + Sam",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-y border-[var(--foreground)]/8 bg-[color-mix(in_oklab,var(--background)_90%,#fff_10%)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          className="text-center text-xs font-mono tracking-[0.35em] text-[var(--foreground)]/45"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          TESTIMONIALS
        </motion.p>

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.names}
              className="text-center"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, ease, delay: (i % 3) * 0.05 }}
            >
              <p className="text-sm leading-7 text-[var(--foreground)]/65 md:text-[0.9375rem] md:leading-8">
                &ldquo;{q.text}&rdquo;
              </p>
              <footer className="mt-6 font-[family-name:var(--font-display)] text-sm italic tracking-wide text-[var(--foreground)]/88">
                {q.names}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
