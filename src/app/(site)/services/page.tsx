import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Photography services — George Barakat, Toronto.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-20 text-center md:py-28">
      <p className="text-xs font-mono tracking-[0.32em] text-[var(--foreground)]/45">
        SERVICES
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,2.75rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
        What I offer
      </h1>
      <p className="mt-6 text-sm leading-7 text-[var(--foreground)]/58">
        Portraits, events, travel, and street commissions—plus editorial and
        brand work. Replace this copy with your packages, starting rates, and
        process.
      </p>
      <ul className="mt-10 space-y-3 text-left text-sm text-[var(--foreground)]/65">
        <li>· Portrait sessions</li>
        <li>· Weddings &amp; celebrations</li>
        <li>· Corporate &amp; brand imagery</li>
        <li>· Travel &amp; documentary projects</li>
      </ul>
      <Link
        href="/contact"
        data-cursor="link"
        className="mt-12 inline-flex border-b border-[var(--foreground)]/30 pb-1 text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/75 transition hover:border-[var(--foreground)]/55 hover:text-[var(--foreground)]"
      >
        Contact me
      </Link>
    </div>
  );
}
