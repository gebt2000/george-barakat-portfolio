import { cn } from "@/lib/utils";

/**
 * Primary brand lockup — Instrument Serif masthead with a split-line treatment
 * (Pixieset-adjacent editorial, but more asymmetric + memorable).
 */
export function GeorgeBarakatWordmark({
  className,
  size = "hero",
}: {
  className?: string;
  size?: "hero" | "header";
}) {
  const isHero = size === "hero";

  return (
    <div className={cn("relative", className)}>
      {isHero ? (
        <p className="mb-4 max-w-md text-[11px] font-normal uppercase leading-relaxed tracking-[0.38em] text-[var(--foreground)]/50">
          Portraits · Events · Travel · Street
        </p>
      ) : null}

      <div className="relative">
        {isHero ? (
          <span
            className="pointer-events-none absolute -left-0.5 -top-5 font-mono text-[9px] tracking-[0.35em] text-[var(--foreground)]/30 md:-left-1 md:-top-7 md:text-[10px]"
            aria-hidden
          >
            TORONTO
          </span>
        ) : null}

        {isHero ? (
          <h1
            className="font-[family-name:var(--font-display)] font-normal text-[var(--foreground)] text-[clamp(2.65rem,8.5vw,5.85rem)] leading-[0.9] tracking-[-0.035em]"
          >
            <span className="block">George</span>
            <span className="mt-2 block border-t border-[var(--foreground)]/12 pt-3 text-[0.96em] text-[color-mix(in_oklab,var(--foreground)_72%,var(--accent)_28%)] italic md:mt-2.5 md:pt-4">
              Barakat
            </span>
          </h1>
        ) : (
          <p className="font-[family-name:var(--font-display)] text-[1.35rem] font-normal leading-none tracking-[-0.03em] text-[var(--foreground)] md:text-[1.5rem]">
            <span className="block">George</span>
            <span className="mt-1.5 block border-t border-[var(--foreground)]/12 pt-1.5 text-[0.95em] text-[color-mix(in_oklab,var(--foreground)_72%,var(--accent)_28%)] italic">
              Barakat
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
