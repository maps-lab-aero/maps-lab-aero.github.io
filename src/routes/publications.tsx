import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
import { publicationsByYear, site } from "@/lib/content";

export const Route = createFileRoute("/publications")({
  component: PublicationsPage,
  head: () => ({
    meta: [{ title: `${site.name} — Publications` }],
  }),
});

function PublicationsPage() {
  const groups = publicationsByYear();
  return (
    <div className="max-w-3xl">
      <PageHeading kicker={site.name} title="Publications">
        Journal articles, conference papers, and manuscripts under review.
      </PageHeading>
      <div className="space-y-10">
        {groups.map((group) => (
          <section key={group.label}>
            <h2 className="mb-4 font-serif text-xl font-semibold text-fg">{group.label}</h2>
            <ol className="space-y-4">
              {group.items.map((pub) => (
                <li key={pub.title} className="leading-relaxed text-fg">
                  {pub.authors}. <em>{pub.title}.</em> {pub.venue}.
                  {pub.href ? (
                    <>
                      {" "}
                      <a href={pub.href} className="whitespace-nowrap">
                        [doi]
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
