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
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-16 py-12 first:pt-0 lg:py-16">
      <h2 id={`${id}-h`} className="mb-8 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}
