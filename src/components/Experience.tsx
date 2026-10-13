import { education, experience } from "@/data/portfolio";

export function Experience() {
  return (
    <div className="space-y-12">
      <ol className="space-y-10">
        {experience.map((e) => (
          <li key={e.role} className="grid gap-4 sm:grid-cols-[160px_1fr]">
            <p className="text-sm text-muted">{e.period ?? ""}</p>
            <div>
              <h3 className="text-lg font-semibold">
                {e.role}
                {e.org ? <span className="font-normal text-muted"> at {e.org}</span> : null}
              </h3>
              <ul className="mt-3 max-w-[62ch] space-y-3 text-muted">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 leading-relaxed">
                    <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid gap-4 border-t border-line pt-10 sm:grid-cols-[160px_1fr]">
        <p className="text-sm text-muted">Education</p>
        <div>
          <h3 className="text-lg font-semibold">{education.school}</h3>
          <p className="mt-1 text-muted">
            {education.degree}, {education.detail}
          </p>
        </div>
      </div>
    </div>
  );
}
