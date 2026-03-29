"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LEFT_NAV = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
] as const;

const RIGHT_NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      data-cursor="link"
      onClick={onNavigate}
      className={cn(
        "text-[11px] font-normal uppercase tracking-[0.28em] text-[var(--foreground)]/55 transition hover:text-[var(--foreground)]",
        active && "text-[var(--foreground)]",
      )}
    >
      {label}
    </Link>
  );
}

export function Header(props: { className?: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[60] border-b border-[var(--foreground)]/10 bg-[color-mix(in_oklab,var(--background)_92%,#fff_8%)]/95 backdrop-blur-md",
        props.className,
      )}
    >
      <div className="relative mx-auto max-w-6xl px-5 py-5 md:px-8 md:py-6">
        {/* Mobile top bar */}
        <div className="relative flex min-h-[2.75rem] items-center justify-between md:hidden">
          <span className="w-10 shrink-0" aria-hidden />
          <Link
            href="/"
            data-cursor="link"
            className={cn(
              "absolute left-1/2 top-1/2 z-[56] max-w-[70%] -translate-x-1/2 -translate-y-1/2 text-center transition-opacity",
              open && "pointer-events-none opacity-0",
            )}
            onClick={() => setOpen(false)}
          >
            <span className="block font-[family-name:var(--font-display)] text-lg font-normal tracking-[-0.02em] text-[var(--foreground)]">
              George Barakat
            </span>
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            data-cursor="link"
            className="relative z-[60] flex size-10 items-center justify-center rounded-sm border border-[var(--foreground)]/10 text-[var(--foreground)]/70 transition hover:bg-[var(--foreground)]/5"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Desktop: Morgan-style split nav + centered name */}
        <div className="hidden items-center md:grid md:grid-cols-3 md:gap-6">
          <nav className="flex flex-wrap items-center justify-start gap-x-8 gap-y-2">
            {LEFT_NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="flex justify-center text-center">
            <Link href="/" data-cursor="link" className="group block">
              <span className="block font-[family-name:var(--font-display)] text-[1.35rem] font-normal tracking-[-0.02em] text-[var(--foreground)] transition group-hover:opacity-80 md:text-[1.5rem]">
                George Barakat
              </span>
              <span className="mt-1 block text-[10px] font-normal uppercase tracking-[0.32em] text-[var(--foreground)]/45">
                Portrait &amp; event photography
              </span>
            </Link>
          </div>

          <nav className="flex flex-wrap items-center justify-end gap-x-8 gap-y-2">
            {RIGHT_NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
        </div>

        {/* Mobile full-screen menu (Morgan-style overlay) */}
        <div
          className={cn(
            "fixed inset-0 z-[55] flex flex-col bg-[var(--background)] pt-24 transition-opacity duration-300 md:hidden",
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={!open}
        >
          <nav className="flex flex-col items-center gap-8 px-8 py-12">
            {[...LEFT_NAV, ...RIGHT_NAV].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-cursor="link"
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm font-normal uppercase tracking-[0.35em] text-[var(--foreground)]/55 transition hover:text-[var(--foreground)]",
                  (item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)) &&
                    "text-[var(--foreground)]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="mt-auto px-8 pb-10 text-center text-[10px] uppercase tracking-[0.28em] text-[var(--foreground)]/35">
            Toronto, Ontario
          </p>
        </div>
      </div>
    </header>
  );
}
