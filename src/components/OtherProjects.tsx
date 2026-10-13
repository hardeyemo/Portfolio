import { otherProjects } from "@/data/portfolio";
import { ArrowUpRight } from "./Icons";

export function OtherProjects() {
  return (
    <ul className="space-y-6">
      {otherProjects.map((p) => (
        <li key={p.name} className="rounded-xl border border-line bg-surface p-6 transition-colors hover:border-gold/60">
          {"image" in p && p.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={p.image} alt={`${p.name} website screenshot`} loading="lazy" className="mb-5 aspect-[16/9] w-full rounded-lg border border-line object-cover object-top" />
          )}
          <h3 className="flex items-center gap-2 text-lg font-semibold">
            {p.url ? (
              <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-gold">
                {p.name} <ArrowUpRight />
              </a>
            ) : (
              p.name
            )}
          </h3>
          <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">{p.description}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <li key={t} className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                {t}
              </li>
            ))}
          </ul>
          {p.repo && (
            <a href={p.repo} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm hover:text-gold">
              View code <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
