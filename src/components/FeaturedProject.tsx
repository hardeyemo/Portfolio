import { featured } from "@/data/portfolio";
import { ArrowUpRight, GithubIcon } from "./Icons";
import { ProjectShot } from "./ProjectShot";

export function FeaturedProject() {
  return (
    <article className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_55px_rgba(0,0,0,0.16)] transition-colors hover:border-gold/50">
      <div className="flex justify-center px-5 pt-5 sm:px-7 sm:pt-6">
        <a href={featured.url} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 font-mono text-sm font-medium text-gold underline decoration-gold/35 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink">
          {featured.urlLabel} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
      <ProjectShot src={featured.screenshot.src} alt={featured.screenshot.alt} />

      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold">{featured.name}</h3>
          <p className="text-sm text-muted">{featured.kind}</p>
        </div>

        <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">{featured.summary}</p>

        <ul className="mt-4 max-w-[70ch] space-y-2 text-sm leading-relaxed text-muted">
          {featured.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
              {highlight}
            </li>
          ))}
        </ul>

        <ul className="mt-4 flex flex-wrap gap-2">
          {featured.stack.map((technology) => (
            <li key={technology} className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          <a
            href={featured.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 text-sm font-medium transition-colors hover:border-gold hover:bg-gold/20"
          >
            View Website <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          {featured.repo && (
            <a
              href={featured.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium transition-colors hover:border-gold/60 hover:text-gold"
            >
              <GithubIcon className="h-4 w-4" /> View Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
