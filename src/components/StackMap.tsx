"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featured } from "@/data/portfolio";

// How the RA Homes stack fits together. The connecting line draws as you scroll past it.
export function StackMap() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        line.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: { trigger: wrap.current, start: "top 75%", end: "bottom 60%", scrub: true },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <div className="mt-16">
      <h3 className="text-lg font-semibold">How the stack fits together</h3>
      <p className="mt-1 text-sm text-muted">The layers behind {featured.name}, from the browser to the database.</p>

      <div ref={wrap} className="relative mt-8">
        <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
        <span ref={line} aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-px bg-gold" />
        <ol className="space-y-8">
          {featured.layers.map((l) => (
            <li key={l.name} className="relative pl-10">
              <span aria-hidden="true" className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border border-gold bg-canvas" />
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h4 className="font-semibold">{l.name}</h4>
                <p className="font-mono text-xs text-gold">{l.tech}</p>
              </div>
              <p className="mt-1 max-w-[60ch] text-muted">{l.note}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
