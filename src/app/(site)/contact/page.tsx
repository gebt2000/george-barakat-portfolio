import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact George Barakat — Toronto photographer.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
      <p className="text-xs font-mono tracking-[0.35em] text-[var(--foreground)]/45">
        CONTACT
      </p>
      <p className="mt-4 font-[family-name:var(--font-display)] text-lg italic text-[var(--foreground)]/60">
        let&apos;s begin your story together
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
        Contact me
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[var(--foreground)]/58">
        I can&apos;t wait to hear your story. Leave me a message in the form
        below, and let&apos;s create something amazing together.
      </p>
      <p className="mt-6 text-sm text-[var(--foreground)]/45">
        <Link
          href="/portfolio"
          data-cursor="link"
          className="underline decoration-[var(--foreground)]/25 underline-offset-4 hover:text-[var(--foreground)]"
        >
          View portfolio
        </Link>
        <span className="mx-2 text-[var(--foreground)]/25">·</span>
        <Link
          href="/about"
          data-cursor="link"
          className="underline decoration-[var(--foreground)]/25 underline-offset-4 hover:text-[var(--foreground)]"
        >
          About
        </Link>
      </p>

      <div className="mt-12 text-left">
        <ContactForm showCategory={false} compactHeading />
      </div>
    </div>
  );
}
