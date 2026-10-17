"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowUpRight } from "./Icons";

export function Sidebar() {
  const [active, setActive] = useState(nav[0].id);

  useEffect(() => {
    const els = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Mobile: compact sticky nav */}
      <nav
        aria-label="Sections"
        className="sticky top-0 z-30 -mx-6 overflow-x-auto border-b border-line bg-canvas/90 px-6 backdrop-blur sm:-mx-10 sm:px-10 lg:hidden"
      >
        <ul className="flex gap-6 whitespace-nowrap py-3 text-sm">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={active === n.id ? "text-gold" : "text-muted"}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="pt-14 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="rise text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-5xl xl:text-6xl" style={{ ["--i" as string]: 0 }}>
            {profile.name}
          </h1>
          <p className="rise mt-3 text-xl font-medium text-gold" style={{ ["--i" as string]: 1 }}>
            {profile.title}
          </p>
          <p className="rise mt-4 max-w-[34ch] leading-relaxed text-muted" style={{ ["--i" as string]: 2 }}>
            {profile.tagline}
          </p>

          <nav aria-label="Sections" className="mt-14 hidden lg:block">
            <ul className="space-y-1">
              {nav.map((n) => {
                const on = active === n.id;
                return (
                  <li key={n.id}>
                    <a
                      href={`#${n.id}`}
                      aria-current={on ? "true" : undefined}
                      className={`group flex items-center gap-4 py-2 text-sm transition-colors ${on ? "text-ink" : "text-muted hover:text-ink"}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-px bg-gold transition-all duration-300 ${on ? "w-14" : "w-6 bg-line group-hover:w-10 group-hover:bg-gold"}`}
                      />
                      {n.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="rise mt-10 flex items-center gap-5 text-muted lg:mt-0" style={{ ["--i" as string]: 3 }}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-gold">
            <GithubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-gold">
            <LinkedinIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-gold">
            <MailIcon />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1 rounded-full border border-line px-4 py-1.5 text-sm text-ink transition-colors hover:border-gold hover:text-gold"
          >
            Résumé <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>
    </>
  );
}
