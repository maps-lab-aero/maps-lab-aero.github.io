import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
import { projects, site } from "@/lib/content";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
  head: () => ({
    meta: [{ title: `${site.name} — Projects` }],
  }),
});

function ProjectList({
  title,
  items,
}: {
  title: string;
  items: typeof projects;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-serif text-xl font-semibold text-fg">{title}</h2>
      <ul className="space-y-3">
        {items.map((project) => (
          <li key={project.slug} className="leading-relaxed">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="font-medium no-underline hover:underline"
            >
              {project.title}
            </Link>
            <span className="text-muted">
              {" "}
              ({project.sponsor ? `${project.sponsor}. ` : ""}
              {project.dates})
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ProjectsPage() {
  const current = projects.filter((p) => p.status === "current");
  const past = projects.filter((p) => p.status === "past");
  return (
    <div className="max-w-3xl">
      <PageHeading kicker={site.name} title="Projects">
        The following are our ongoing and past projects. Click their titles for more details.
      </PageHeading>
      <ProjectList title="Research projects" items={current} />
      <ProjectList title="Past projects" items={past} />
      <section className="mb-10">
        <h2 className="mb-3 font-serif text-xl font-semibold text-fg">Research interests</h2>
        <ul className="list-disc space-y-1 pl-5 text-fg">
          {site.interests.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-3 font-serif text-xl font-semibold text-fg">
          Research collaborators (in alphabetical order)
        </h2>
        <ul className="list-disc space-y-1 pl-5 text-fg">
          {site.collaborators.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
