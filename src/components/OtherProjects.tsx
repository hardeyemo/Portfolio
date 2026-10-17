import { otherProjects } from "@/data/portfolio";
import Image from "next/image";
import { ArrowUpRight, GithubIcon } from "./Icons";

type Project = (typeof otherProjects)[number];

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_14px_45px_rgba(0,0,0,0.12)] transition-colors hover:border-gold/50">
      {"screenshot" in project && project.screenshot && (
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-canvas">
          <Image
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            loading="lazy"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>
      )}
      <div className="p-5 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          {"kind" in project && project.kind && (
            <p className="text-sm text-muted">{project.kind}</p>
          )}
        </div>
        <p className="mt-3 max-w-[62ch] leading-relaxed text-muted">{project.description}</p>
        {"highlights" in project && project.highlights && (
          <ul className="mt-4 max-w-[70ch] space-y-2 text-sm leading-relaxed text-muted">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li key={technology} className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 text-sm font-medium transition-colors hover:border-gold hover:bg-gold/20">
              Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium transition-colors hover:border-gold/60 hover:text-gold">
              <GithubIcon className="h-4 w-4" /> View Source
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export function OtherProjects() {
  return (
    <ul className="space-y-6">
      {otherProjects.map((project) => <ProjectCard key={project.name} project={project} />)}
    </ul>
  );
}
