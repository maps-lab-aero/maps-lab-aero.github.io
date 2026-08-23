import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
import { openings, site } from "@/lib/content";

export const Route = createFileRoute("/openings")({
  component: OpeningsPage,
  head: () => ({
    meta: [{ title: `${site.name} — Openings` }],
  }),
});

function OpeningsPage() {
  return (
    <div className="max-w-3xl">
      <PageHeading kicker={site.name} title="Openings">
        {openings.intro}
      </PageHeading>
      <div className="space-y-8">
        {openings.positions.map((pos) => (
          <section key={pos.title}>
            <h2 className="font-serif text-xl font-semibold text-fg">{pos.title}</h2>
            <p className="mt-2 leading-relaxed text-fg">{pos.body}</p>
          </section>
        ))}
      </div>
      <section className="glass mt-10 rounded-xl p-6">
        <h2 className="font-serif text-xl font-semibold text-fg">How to apply</h2>
        <p className="mt-2 leading-relaxed text-fg">{openings.howTo}</p>
      </section>
    </div>
  );
}
