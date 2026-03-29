import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--foreground)]/10 bg-[color-mix(in_oklab,var(--background)_92%,#fff_8%)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg text-[var(--foreground)]/85">
            George Barakat
          </p>
          <p className="mt-1 text-sm text-[var(--foreground)]/50">
            © {new Date().getFullYear()} · Toronto, Ontario · Available for travel
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--foreground)]/55">
          <Link
            href="/portfolio"
            data-cursor="link"
            className="transition hover:text-[var(--foreground)]"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            data-cursor="link"
            className="transition hover:text-[var(--foreground)]"
          >
            About
          </Link>
          <Link
            href="/contact"
            data-cursor="link"
            className="transition hover:text-[var(--foreground)]"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
