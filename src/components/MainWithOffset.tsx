"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Fixed header sits out of flow; inner pages need top padding. Home uses full-bleed hero under the bar.
 */
export function MainWithOffset({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <main
      className={cn("flex-1", !isHome && "pt-[var(--site-header-h)]")}
    >
      {children}
    </main>
  );
}
