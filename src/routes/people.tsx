import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
import { PersonCard } from "@/components/person-card";
import { peopleSections, site } from "@/lib/content";

export const Route = createFileRoute("/people")({
  component: PeoplePage,
  head: () => ({
    meta: [{ title: `${site.name} — People` }],
  }),
});

function PeoplePage() {
  return (
    <div>
      <PageHeading kicker={site.name} title="Group Members">
        Faculty, researchers, and students working on analysis, design, and optimization.
      </PageHeading>
      <div className="space-y-12">
        {peopleSections.map((section) => {
          const compact = section.id.startsWith("former");
          return (
            <section key={section.id} aria-labelledby={section.id}>
              <h2
                id={section.id}
                className="mb-5 border-b border-border pb-2 font-serif text-2xl font-semibold text-fg"
              >
                {section.title}
              </h2>
              <div
                className={
                  compact
                    ? "grid gap-6 sm:grid-cols-2"
                    : "grid gap-5 sm:grid-cols-2"
                }
              >
                {section.people.map((person) => (
                  <PersonCard key={person.name + person.role} person={person} compact={compact} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
