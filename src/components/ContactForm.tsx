"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type FormState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "success" }
  | { status: "error"; message: string };

type ContactFormProps = {
  /** Extra field for routing inquiries (hidden on dedicated contact page) */
  showCategory?: boolean;
  /** Morgan-style: minimal header inside card */
  compactHeading?: boolean;
};

export function ContactForm({
  showCategory = true,
  compactHeading = false,
}: ContactFormProps) {
  const [state, setState] = useState<FormState>({ status: "idle" });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState<
    "Portraits" | "Events" | "Travel" | "Street" | "Other"
  >("Portraits");

  const canSubmit = useMemo(() => {
    return (
      firstName.trim().length >= 1 &&
      lastName.trim().length >= 1 &&
      email.includes("@") &&
      message.trim().length >= 10 &&
      state.status !== "sending"
    );
  }, [email, firstName, lastName, message, state.status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
          ...(showCategory ? { category } : { category: "General" }),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setState({ status: "success" });
      setFirstName("");
      setLastName("");
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
      {!compactHeading ? (
        <div className="flex flex-col gap-1">
          <p className="font-[family-name:var(--font-display)] text-lg font-normal tracking-[-0.02em] text-[var(--foreground)]">
            Send a note
          </p>
          <p className="text-sm text-[var(--foreground)]/55">
            Tell me what you’re planning and I’ll reply quickly.
          </p>
        </div>
      ) : null}

      <div
        className={cn(
          "grid grid-cols-1 gap-3 md:grid-cols-2",
          !compactHeading && "mt-5",
        )}
      >
        <Field label="First name" requiredMark>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={inputClass}
            placeholder="First name"
            autoComplete="given-name"
          />
        </Field>
        <Field label="Last name" requiredMark>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={inputClass}
            placeholder="Last name"
            autoComplete="family-name"
          />
        </Field>
        <Field label="Email" requiredMark className="md:col-span-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            placeholder="you@email.com"
            autoComplete="email"
            inputMode="email"
          />
        </Field>
        {showCategory ? (
          <Field label="Category" className="md:col-span-2">
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
        ) : null}
        <Field label="Message" requiredMark className="md:col-span-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={cn(inputClass, "min-h-[140px] resize-y")}
            placeholder="Tell me about your date, location, and what you’re hoping for…"
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
            "inline-flex items-center justify-center rounded-sm border px-6 py-2.5 text-sm font-medium tracking-wide transition",
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
  requiredMark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn("flex flex-col gap-2", props.className)}>
      <span className="flex items-baseline gap-1 text-xs font-mono tracking-[0.18em] text-[var(--foreground)]/45">
        <span>{props.label.toUpperCase()}</span>
        {props.requiredMark ? (
          <span className="text-[var(--foreground)]/35" aria-hidden>
            *
          </span>
        ) : null}
      </span>
      {props.children}
    </label>
  );
}

const inputClass =
  "w-full rounded-sm border border-[var(--foreground)]/12 bg-white/90 px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground)]/35 outline-none transition focus:border-[var(--foreground)]/25 focus:ring-1 focus:ring-[var(--foreground)]/15";
