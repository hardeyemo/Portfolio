"use client";

import { useState } from "react";
import Image from "next/image";

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

  return (
      <div className="relative aspect-[16/9] w-full bg-surface">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        loading="lazy"
        onError={() => setFailed(true)}
        className="object-cover object-top"
      />
    </div>
  );
}
