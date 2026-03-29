"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<
    "Portraits" | "Events" | "Travel" | "Street" | "Other"
  >("Portraits");

  const canSubmit = useMemo(() => {
    return (
      name.trim().length >= 2 &&
      email.includes("@") &&
      message.trim().length >= 10 &&
      state.status !== "sending"
    );
  }, [email, message, name, state.status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email, message, category }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setState({ status: "success" });
      setName("");
      setEmail("");
      setMessage("");
      setCategory("Portraits");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setState({ status: "error", message: msg });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-[var(--foreground)]/10 bg-[var(--card)] p-5 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset,0_20px_50px_rgba(20,18,16,0.06)] md:p-6"
    >
      <div className="flex flex-col gap-1">
        <p className="font-[family-name:var(--font-display)] text-lg font-normal tracking-[-0.02em] text-[var(--foreground)]">
          Send a note
        </p>
        <p className="text-sm text-[var(--foreground)]/55">
          Tell me what you’re planning and I’ll reply quickly.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
        <Field label="Name">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Email">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@email.com"
            autoComplete="email"
            inputMode="email"
          />
        </Field>
        <Field label="Category">
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value as typeof category)
            }
            className={inputClass}
          >
            <option>Portraits</option>
            <option>Events</option>
            <option>Travel</option>
            <option>Street</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Message" className="md:col-span-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={cn(inputClass, "min-h-[120px] resize-y")}
            placeholder="What are you looking for? Dates, location, vibe, deliverables…"
          />
        </Field>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-[var(--foreground)]/50">
          {state.status === "success" ? (
            <span className="text-emerald-800/90">Sent. I’ll be in touch soon.</span>
          ) : state.status === "error" ? (
            <span className="text-rose-700/90">{state.message}</span>
          ) : (
            <span>Usually replies within 24 hours.</span>
          )}
        </div>
        <button
          type="submit"
          data-cursor="link"
          disabled={!canSubmit}
          className={cn(
            "inline-flex items-center justify-center rounded-full border px-5 py-2 text-sm font-medium transition",
            "border-[var(--foreground)]/14 bg-[var(--foreground)] text-[#f4f1eb] hover:bg-[var(--foreground)]/90",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/20",
          )}
        >
          {state.status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field(props: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("flex flex-col gap-2", props.className)}>
      <span className="text-xs font-mono tracking-[0.22em] text-[var(--foreground)]/45">
        {props.label.toUpperCase()}
      </span>
      {props.children}
    </label>
  );
}

const inputClass =
  "w-full rounded-2xl border border-[var(--foreground)]/10 bg-white/80 px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground)]/35 outline-none transition focus:border-[var(--foreground)]/22 focus:ring-2 focus:ring-[var(--foreground)]/10";
