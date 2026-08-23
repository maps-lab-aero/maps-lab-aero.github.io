import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
import { site, software } from "@/lib/content";

export const Route = createFileRoute("/software")({
  component: SoftwarePage,
  head: () => ({
    meta: [{ title: `${site.name} — Software` }],
  }),
});

function SoftwarePage() {
  return (
    <div className="max-w-3xl">
      <PageHeading kicker={site.name} title="Software">
        Open tools the group develops for high-fidelity analysis and design.
      </PageHeading>
      {software.map((item) => (
        <article
          key={item.name}
          className="glass rounded-xl p-6 sm:p-8"
        >
          <h2 className="font-serif text-2xl font-semibold text-fg">{item.name}</h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-[0.12em] text-primary">
            {item.tagline}
          </p>
          <p className="mt-4 leading-relaxed text-fg">{item.description}</p>
          <p className="mt-5 font-medium text-ink-2">Features</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg">
            {item.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="mt-5 flex flex-wrap gap-3">
            {item.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm font-medium no-underline hover:border-primary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </p>
          {item.note ? <p className="mt-5 text-sm leading-relaxed text-muted">{item.note}</p> : null}
        </article>
      ))}
    </div>
  );
}
