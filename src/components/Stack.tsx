import { stackGroups } from "@/data/portfolio";

export function Stack() {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {stackGroups.map((g) => (
        <div key={g.group} className="grid gap-3 py-5 sm:grid-cols-[200px_1fr]">
          <dt className="font-medium">{g.group}</dt>
          <dd>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <li key={i} className="rounded-md border border-line px-2.5 py-1 font-mono text-xs text-muted transition-[transform,border-color,color,background-color] duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-gold/5 hover:text-gold motion-reduce:transform-none">
                  {i}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
