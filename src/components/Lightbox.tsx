"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Photo } from "@/content/photos";

export function Lightbox(props: {
  open: boolean;
  photo?: Photo;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!props.open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") props.onClose();
      if (e.key === "ArrowLeft") props.onPrev();
      if (e.key === "ArrowRight") props.onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [props.open, props.onClose, props.onPrev, props.onNext]);

  useEffect(() => {
    if (!props.open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [props.open]);

  if (!props.open || !props.photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) props.onClose();
      }}
    >
      <div className="relative w-full max-w-6xl">
        <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-br from-[color:var(--color-accent)]/20 via-transparent to-[color:var(--color-accent2)]/20 blur-2xl" />

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white/90">
                {props.photo.title}
              </p>
              <p className="truncate text-xs text-white/55">
                {props.photo.subtitle ?? `${props.photo.category} photography`}
                {props.photo.year ? `, ${props.photo.year}` : ""}
                {props.photo.location ? `, ${props.photo.location}` : ""}
              </p>
            </div>
            <button
              type="button"
              onClick={props.onClose}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            >
              <X className="size-4" />
              Close
            </button>
          </div>

          <div className="relative aspect-[16/10] w-full bg-black">
            <Image
              src={props.photo.src}
              alt={props.photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain"
              priority
            />

            <button
              type="button"
              onClick={props.onPrev}
              aria-label="Previous image"
              className={cn(
                "absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/5 p-3 text-white/80 transition hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              )}
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={props.onNext}
              aria-label="Next image"
              className={cn(
                "absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-white/5 p-3 text-white/80 transition hover:bg-white/10",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
              )}
            >
              <ChevronRight className="size-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
              {props.index + 1} / {props.total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

