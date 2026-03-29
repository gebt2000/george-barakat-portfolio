import Link from "next/link";

export function PortfolioInterest() {
  return (
    <section className="mx-auto max-w-6xl border-t border-[var(--foreground)]/10 px-5 py-16 text-center md:px-8">
      <p className="text-xs font-mono tracking-[0.3em] text-[var(--foreground)]/45">
        YOU MAY BE INTERESTED
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
        <Link
          href="/contact"
          data-cursor="link"
          className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/70 underline decoration-[var(--foreground)]/25 underline-offset-4 transition hover:text-[var(--foreground)]"
        >
          Contact me
        </Link>
        <Link
          href="/about"
          data-cursor="link"
          className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]/70 underline decoration-[var(--foreground)]/25 underline-offset-4 transition hover:text-[var(--foreground)]"
        >
          Read about me
        </Link>
      </div>
    </section>
  );
}
