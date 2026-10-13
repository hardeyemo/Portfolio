"use client";

import { useState } from "react";

// Shows a screenshot from /public. If the file isn't there yet, shows a clear placeholder instead of a broken image.
export function ProjectShot({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 bg-surface p-6 text-center">
        <p className="text-sm text-ink">Screenshot not added yet</p>
        <p className="font-mono text-xs text-muted">public{src}</p>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[16/10] w-full object-cover object-top"
    />
  );
}
