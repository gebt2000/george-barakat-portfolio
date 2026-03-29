import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { GeorgeBarakatWordmark } from "@/components/GeorgeBarakatWordmark";
import { Magnetic } from "@/components/Magnetic";
import { cn } from "@/lib/utils";

export function Header(props: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[var(--foreground)]/8 bg-[color-mix(in_oklab,var(--background)_78%,#fff_22%)] backdrop-blur-md supports-[backdrop-filter]:bg-[color-mix(in_oklab,var(--background)_65%,#fff_35%)]",
        props.className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="/"
          data-cursor="link"
          className="group flex min-w-0 items-center gap-3 rounded-xl outline-none ring-offset-0 focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/25"
        >
          <BrandMark className="transition group-hover:border-[var(--foreground)]/22 group-hover:shadow-[0_10px_28px_rgba(20,18,16,0.1)]" />
          <span className="min-w-0 md:hidden">
            <GeorgeBarakatWordmark size="header" />
          </span>
          <span className="hidden min-w-0 flex-col leading-tight md:flex">
            <span className="font-[family-name:var(--font-display)] text-[1.05rem] font-normal tracking-[-0.03em] text-[var(--foreground)]">
              George Barakat
            </span>
            <span className="text-[10px] font-normal uppercase tracking-[0.22em] text-[var(--foreground)]/45">
              Photography · Toronto
            </span>
          </span>
        </Link>

        <nav className="flex shrink-0 items-center gap-1 text-sm md:gap-2">
          <a
            href="#portfolio"
            data-cursor="link"
            className="rounded-full px-2.5 py-2 text-[var(--foreground)]/55 transition hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/20 md:px-3"
          >
            Portfolio
          </a>
          <a
            href="#philosophy"
            data-cursor="link"
            className="hidden rounded-full px-3 py-2 text-[var(--foreground)]/55 transition hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/20 sm:inline-flex"
          >
            Approach
          </a>
          <a
            href="#about"
            data-cursor="link"
            className="rounded-full px-2.5 py-2 text-[var(--foreground)]/55 transition hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/20 md:px-3"
          >
            About
          </a>
          <Magnetic strength={0.22}>
            <a
              href="#contact"
              data-cursor="magnetic"
              className="rounded-full border border-[var(--foreground)]/12 bg-[var(--card)] px-3 py-2 text-[var(--foreground)]/85 shadow-sm transition hover:border-[var(--foreground)]/18 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/20"
            >
              Contact
            </a>
          </Magnetic>
        </nav>
      </div>
    </header>
  );
}
