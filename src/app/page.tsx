import { Sidebar } from "@/components/Sidebar";
import { Section } from "@/components/Section";
import { FeaturedProject } from "@/components/FeaturedProject";
import { StackMap } from "@/components/StackMap";
import { OtherProjects } from "@/components/OtherProjects";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { ContactForm } from "@/components/ContactForm";
import { profile } from "@/data/portfolio";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Ilorin", addressCountry: "NG" },
    sameAs: [profile.github, profile.linkedin],
  };

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-3 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:grid lg:grid-cols-[minmax(300px,380px)_1fr] lg:gap-20">
        <Sidebar />
        <main className="pb-24 pt-6 lg:pt-24">
          <Section id="about" title="About">
            <div className="max-w-[62ch] space-y-4 text-[1.0625rem] leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Section>

          <Section id="featured" title="Featured project">
            <FeaturedProject />
            <StackMap />
          </Section>

          <Section id="projects" title="More work">
            <OtherProjects />
          </Section>

          <Section id="stack" title="Stack">
            <Stack />
          </Section>

          <Section id="experience" title="Experience">
            <Experience />
          </Section>

          <Section id="contact" title="Contact">
            <ContactForm />
          </Section>

          <footer className="mt-16 border-t border-line pt-6 text-sm text-muted">
            Built with Next.js, Tailwind CSS, Framer Motion and GSAP.
          </footer>
        </main>
      </div>
    </>
  );
}
