import { featured } from "@/data/portfolio";
import { ArrowUpRight, GithubIcon } from "./Icons";
import { ProjectShot } from "./ProjectShot";

export function FeaturedProject() {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface transition-colors hover:border-gold/60">
      <ProjectShot src={featured.screenshot.src} alt={featured.screenshot.alt} />

      <div className="p-6">
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
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 text-sm font-medium transition-colors hover:border-gold hover:bg-gold/20"
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
