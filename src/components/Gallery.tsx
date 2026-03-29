"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { categories, photos, type PhotoCategory } from "@/content/photos";
import { cn } from "@/lib/utils";
import { Lightbox } from "@/components/Lightbox";
import { TiltCard } from "@/components/TiltCard";

function slugifyCategory(c: PhotoCategory) {
  return c.toLowerCase();
}

const ease = [0.22, 1, 0.36, 1] as const;

type GalleryProps = {
  /** Morgan-style portfolio page header */
  variant?: "default" | "portfolio";
};

export function Gallery({ variant = "default" }: GalleryProps) {
  const [active, setActive] = useState<PhotoCategory | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return photos;
    return photos.filter((p) => p.category === active);
  }, [active]);

  const openIndex = Math.max(
    0,
    filtered.findIndex((p) => p.id === openId),
  );
  const openPhoto = filtered[openIndex];

  const isPortfolio = variant === "portfolio";

  return (
    <section
      id={isPortfolio ? "gallery" : "portfolio"}
      className="mx-auto w-full max-w-6xl px-5 md:px-8"
    >
      <motion.div
        className={
          isPortfolio
            ? "flex flex-col items-center gap-6 text-center"
            : "flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        }
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease }}
      >
        <div className={isPortfolio ? "max-w-2xl" : ""}>
          {isPortfolio ? (
            <>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.85rem,4vw,2.5rem)] font-normal tracking-[-0.02em] text-[var(--foreground)]">
                My portfolio
              </h2>
              <p className="mt-3 text-xs font-mono tracking-[0.32em] text-[var(--foreground)]/45">
                COLLECTION OF STORIES · SINCE 2018
              </p>
              <p className="mt-6 text-sm leading-7 text-[var(--foreground)]/58">
                My favourite frames are often unstaged and effortless—it&apos;s
                the in-between moments where the real magic happens.
              </p>
            </>
          ) : (
            <>
              <p className="text-xs font-mono tracking-[0.28em] text-[var(--foreground)]/45">
                PORTFOLIO
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-normal tracking-[-0.02em] text-[var(--foreground)] md:text-3xl">
                Selected works
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--foreground)]/55">
                A curated edit—hover for depth, click to view full frame. Filter
                by the kind of story you want to see.
              </p>
            </>
          )}
        </div>

        {!isPortfolio ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              data-cursor="link"
              onClick={() => setActive("All")}
              className={cn(
                "rounded-full border px-3 py-2 text-sm transition",
                active === "All"
                  ? "border-[var(--foreground)]/18 bg-[var(--foreground)] text-[#f4f1eb] shadow-sm"
                  : "border-[var(--foreground)]/10 bg-[var(--card)] text-[var(--foreground)]/65 hover:border-[var(--foreground)]/16 hover:text-[var(--foreground)]",
              )}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                data-cursor="link"
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-3 py-2 text-sm transition",
                  active === c
                    ? "border-[var(--foreground)]/18 bg-[var(--foreground)] text-[#f4f1eb] shadow-sm"
                    : "border-[var(--foreground)]/10 bg-[var(--card)] text-[var(--foreground)]/65 hover:border-[var(--foreground)]/16 hover:text-[var(--foreground)]",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        ) : null}
      </motion.div>

      {isPortfolio ? (
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 border-y border-[var(--foreground)]/10 py-10 font-[family-name:var(--font-display)] text-lg text-[var(--foreground)]/55 md:gap-x-12 md:text-xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <button
            type="button"
            data-cursor="link"
            onClick={() => setActive("All")}
            className={cn(
              "transition hover:text-[var(--foreground)]",
              active === "All" &&
                "text-[var(--foreground)] underline decoration-[var(--foreground)]/35 underline-offset-[10px]",
            )}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              data-cursor="link"
              onClick={() => setActive(c)}
              className={cn(
                "transition hover:text-[var(--foreground)]",
                active === c &&
                  "text-[var(--foreground)] underline decoration-[var(--foreground)]/35 underline-offset-[10px]",
              )}
            >
              {c}
            </button>
          ))}
        </motion.div>
      ) : null}

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.55,
              ease,
              delay: Math.min(idx * 0.05, 0.35),
            }}
          >
            <TiltCard>
              <button
                type="button"
                data-cursor="view"
                onClick={() => setOpenId(p.id)}
                className={cn(
                  "group relative w-full overflow-hidden rounded-3xl border border-[var(--foreground)]/10 bg-[var(--card)] text-left shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] outline-none",
                  "transition hover:border-[var(--foreground)]/16 focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/18",
                )}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    priority={idx < 3}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--foreground)]/55 via-transparent to-transparent opacity-90" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -inset-10 bg-gradient-to-br from-[color:var(--color-accent)]/18 via-transparent to-[color:var(--color-accent2)]/14 blur-2xl" />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-3 px-4 py-4">
                  <div className="min-w-0">
                    <p className="font-[family-name:var(--font-display)] text-base font-normal tracking-[-0.01em] text-[var(--foreground)]">
                      {p.title}
                    </p>
                    <p className="mt-1 text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--foreground)]/45">
                      {p.subtitle ?? `${p.category} photography`}
                      {p.year ? ` · ${p.year}` : ""}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-[var(--foreground)]/10 bg-[var(--background)]/85 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--foreground)]/50">
                    {slugifyCategory(p.category)}
                  </span>
                </div>
              </button>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <Lightbox
        open={openId !== null}
        photo={openPhoto}
        index={openIndex}
        total={filtered.length}
        onClose={() => setOpenId(null)}
        onPrev={() => {
          if (filtered.length === 0) return;
          const next = (openIndex - 1 + filtered.length) % filtered.length;
          setOpenId(filtered[next]?.id ?? null);
        }}
        onNext={() => {
          if (filtered.length === 0) return;
          const next = (openIndex + 1) % filtered.length;
          setOpenId(filtered[next]?.id ?? null);
        }}
      />
    </section>
  );
}
