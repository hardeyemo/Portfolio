"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { featured } from "@/data/portfolio";
import { ProjectShot } from "./ProjectShot";
import { ArrowUpRight, GithubIcon } from "./Icons";

export function FeaturedProject() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const shot = featured.shots[index];

  return (
    <article>
      <div className="mb-6">
        <h3 className="text-xl font-semibold">{featured.name}</h3>
        <p className="mt-1 text-sm text-muted">{featured.kind}</p>
      </div>

      {/* Browser frame */}
      <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
          </div>
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="min-w-0 flex-1 truncate rounded-md bg-canvas px-3 py-1 font-mono text-xs text-muted transition-colors hover:text-gold"
          >
            {featured.urlLabel}
          </a>
        </div>

        <div role="tabpanel" id="shot-panel" aria-labelledby={`shot-tab-${index}`} className="relative">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={shot.src}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              <ProjectShot src={shot.src} alt={shot.alt} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div role="tablist" aria-label="Screenshots" className="mt-4 flex flex-wrap gap-2">
        {featured.shots.map((s, i) => (
          <button
            key={s.src}
            role="tab"
            id={`shot-tab-${i}`}
            aria-selected={i === index}
            aria-controls="shot-panel"
            onClick={() => setIndex(i)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              i === index
                ? "border-gold bg-gold/10 text-gold"
                : "border-line text-muted hover:border-muted hover:text-ink"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed">{featured.summary}</p>
          <ul className="mt-5 max-w-[60ch] space-y-3 text-muted">
            {featured.highlights.map((h) => (
              <li key={h} className="flex gap-3 leading-relaxed">
                <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {featured.stack.map((t) => (
              <li key={t} className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={featured.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-canvas transition-opacity hover:opacity-90"
            >
              Visit live site <ArrowUpRight />
            </a>
            {featured.repo && (
              <a
                href={featured.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
              >
                <GithubIcon className="h-4 w-4" /> View code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
