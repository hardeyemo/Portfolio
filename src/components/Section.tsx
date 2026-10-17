export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 border-t border-line/70 py-12 first:border-0 first:pt-0 lg:py-[4.5rem]">
      <h2 id={`${id}-h`} className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        <span aria-hidden="true" className="h-px w-6 bg-gold/70" />
        {title}
      </h2>
      {children}
    </section>
  );
}
