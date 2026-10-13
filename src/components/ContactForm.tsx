"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      form.reset();
      setStatus("sent");
      setMessage("Message sent. I'll reply to the email you gave.");
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? `${err.message} You can also email ${profile.email}.`
          : `Message not sent. You can also email ${profile.email}.`,
      );
    }
  }

  const field =
    "mt-2 w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none";

  return (
    <div className="max-w-[560px]">
      <p className="mb-8 leading-relaxed text-muted">
        Have a project or a role in mind? Send a message, or email{" "}
        <a href={`mailto:${profile.email}`} className="text-ink underline decoration-gold underline-offset-4 hover:text-gold">
          {profile.email}
        </a>
        .
      </p>

      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <div>
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input id="name" name="name" required minLength={2} maxLength={80} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input id="email" name="email" type="email" required maxLength={120} autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor="msg" className="text-sm font-medium">Message</label>
          <textarea id="msg" name="message" required minLength={10} maxLength={2000} rows={5} className={field} />
        </div>
        {/* Honeypot: real people never see or fill this */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-canvas transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        <p role="status" aria-live="polite" className={`min-h-6 text-sm ${status === "error" ? "text-red-400" : "text-gold"}`}>
          {status === "sent" || status === "error" ? message : ""}
        </p>
      </form>
    </div>
  );
}
