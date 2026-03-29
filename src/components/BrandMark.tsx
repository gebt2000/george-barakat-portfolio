import { cn } from "@/lib/utils";

/**
 * Monogram seal — warm paper / ink, pairs with Instrument display wordmark.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-grid size-[2.75rem] shrink-0 place-items-center rounded-2xl",
        "border border-[var(--foreground)]/14 bg-[color-mix(in_oklab,var(--card)_90%,#fff_10%)]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_6px_20px_rgba(20,18,16,0.08)]",
        className,
      )}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute inset-[5px] rounded-[14px] border border-[var(--foreground)]/6"
        aria-hidden
      />
      <span className="font-[family-name:var(--font-brand)] text-[1.05rem] font-semibold leading-none tracking-[-0.18em] text-[var(--foreground)]/88">
        GB
      </span>
    </span>
  );
}
