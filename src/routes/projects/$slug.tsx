import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { projectBySlug, site } from "@/lib/content";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  loader: ({ params }) => {
    const project = projectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.project.title ?? "Project"} — ${site.name}` }],
  }),
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <article className="max-w-3xl">
      <p className="mb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary no-underline hover:underline"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>
      </p>
      <PageHeading title={project.title}>
        {project.sponsor ? `${project.sponsor} · ` : null}
        {project.dates}
      </PageHeading>
      <p className="text-[1.05rem] leading-relaxed text-fg">{project.summary}</p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-fg">
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </article>
  );
}
