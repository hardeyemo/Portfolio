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
          {"gallery" in p && p.gallery && (
            <div className="mb-6 overflow-hidden rounded-lg border border-line bg-canvas">
              <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line" />
                </div>
                <a href={p.url} target="_blank" rel="noreferrer" className="min-w-0 truncate rounded-md bg-surface px-3 py-1 font-mono text-xs text-muted hover:text-gold">
                  drishop.vercel.app
                </a>
                <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-wider text-muted sm:inline">Storefront catalogue</span>
              </div>
              <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-4">
                {p.gallery.map((item) => (
                  <div key={item.src} className="overflow-hidden rounded-md border border-line bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.src} alt={item.alt} loading="lazy" className="aspect-square w-full object-contain p-2" />
                  </div>
                ))}
              </div>
              <p className="px-4 pb-3 text-xs text-muted">Product imagery from the project catalogue</p>
            </div>
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
          {"highlights" in p && p.highlights && (
            <ul className="mt-4 max-w-[70ch] space-y-2 text-sm leading-relaxed text-muted">
              {p.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          {"statusNote" in p && p.statusNote && (
            <p className="mt-4 max-w-[70ch] border-l-2 border-gold/60 pl-3 text-sm leading-relaxed text-muted">{p.statusNote}</p>
          )}
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <li key={t} className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-4">
            {p.url && <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-gold">Live demo <ArrowUpRight className="h-3.5 w-3.5" /></a>}
            {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:text-gold">View code <ArrowUpRight className="h-3.5 w-3.5" /></a>}
          </div>
        </li>
      ))}
    </ul>
  );
}
