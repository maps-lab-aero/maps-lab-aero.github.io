import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Rocket, Users } from "lucide-react";
import { HeroCarousel } from "@/components/hero-carousel";
import { NewsWell } from "@/components/news-list";
import { news, projects, site } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: site.name + " - Home" }],
  }),
});

function Home() {
  const currentProjects = projects.filter((project) => project.status === "current");
  const featuredProjects = currentProjects.slice(0, 3);
  const pillars = [
    {
      title: "Propulsion systems",
      body: "Integrated analysis for turbomachinery, propellers, heat exchangers, and electric aircraft powerplants.",
      icon: Rocket,
    },
    {
      title: "Design optimization",
      body: "Adjoint methods and multidisciplinary workflows that turn high-fidelity simulation into practical design moves.",
      icon: BookOpen,
    },
    {
      title: "Scientific AI",
      body: "Learning tools that accelerate modeling, uncertainty studies, and human-in-the-loop engineering decisions.",
      icon: Users,
    },
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-8">
        <p className="max-w-2xl text-sm font-medium leading-snug text-primary">
          {site.fullName}
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-navy sm:text-4xl">
          Welcome to {site.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          We develop computational methods, open research tools, and design studies for
          cleaner, quieter, and more capable aerospace propulsion systems.
        </p>
        <div className="mt-6">
          <HeroCarousel />
        </div>
        <section className="glass mt-8 rounded-md p-6 sm:p-7">
          <h2 className="font-serif text-xl font-semibold text-navy">Vision</h2>
          <p className="mt-3 text-[1.08rem] leading-relaxed text-fg">{site.vision}</p>
        </section>
        <section className="mt-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className="border-l-2 border-primary bg-white/45 px-4 py-4 shadow-[0_10px_30px_-28px_rgba(10,31,68,0.45)]"
                >
                  <Icon className="mb-3 size-5 text-primary" strokeWidth={1.8} />
                  <h2 className="text-base font-semibold text-navy">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
                </article>
              );
            })}
          </div>
        </section>
        <div className="mt-8 space-y-4 text-[1.05rem] leading-relaxed text-fg">
          <p>
            {site.name} is part of the{" "}
            <a href={site.affiliationUrl}>
              {site.affiliation} at {site.university}
            </a>
            .
          </p>
          <p>{site.about[1]}</p>
          <p>{site.about[2]}</p>
          <p>
            Our research is supported by the {site.sponsors.slice(0, -1).join(", ")}, and{" "}
            {site.sponsors[site.sponsors.length - 1]}. See details of our{" "}
            <Link to="/projects">research projects</Link>.
          </p>
        </div>
        <ul className="mt-8 flex flex-wrap items-center gap-3">
          {site.sponsors.map((name) => (
            <li
              key={name}
              className="glass rounded-md px-3 py-2 text-sm font-medium tracking-wide text-ink-2"
            >
              {name}
            </li>
          ))}
        </ul>
        <section className="mt-10 border-y border-border py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Current work
              </p>
              <h2 className="mt-1 font-serif text-2xl font-semibold text-navy">
                Active research projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline hover:underline"
            >
              View all projects <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="group block rounded-md border border-border bg-white/55 p-4 no-underline transition-colors hover:border-primary/50 hover:bg-white/80"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-subtle">
                  {project.sponsor ?? "Research"}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-navy group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className="lg:col-span-4">
        <NewsWell items={news.slice(0, 7)} />
        <section className="glass mt-6 rounded-md p-5">
          <h2 className="font-serif text-xl font-semibold text-navy">Join the group</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            We welcome students and researchers interested in CFD, optimization,
            scientific machine learning, and aerospace system design.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to="/openings"
              className="inline-flex items-center justify-between rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white no-underline hover:bg-primary-hover"
            >
              See openings <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              to="/people"
              className="inline-flex items-center justify-between rounded-md border border-border bg-white/55 px-4 py-2.5 text-sm font-semibold text-primary no-underline hover:bg-white"
            >
              Meet the team <Users className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
