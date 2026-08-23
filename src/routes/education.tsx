import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "@/components/page-heading";
import { SlideOpt, SlideGroup } from "@/components/research-slides";
import { courses, educationNotes, site } from "@/lib/content";

export const Route = createFileRoute("/education")({
  component: EducationPage,
  head: () => ({
    meta: [{ title: `${site.name} — Education` }],
  }),
});

function EducationPage() {
  return (
    <div className="max-w-3xl">
      <PageHeading kicker={site.name} title="Teaching">
        Graduate and undergraduate courses, research mentoring, and outreach.
      </PageHeading>

      {courses.map((course) => (
        <section key={course.code} className="mb-12">
          <h2 className="font-serif text-xl font-semibold text-fg">
            {course.code}: {course.title}
          </h2>
          <p className="mt-3 leading-relaxed text-fg">{course.description}</p>
          <p className="mt-4 font-medium text-ink-2">Learning objectives:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-fg">
            {course.objectives.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mb-12 overflow-hidden rounded-xl border border-white/50 shadow-[0_18px_50px_-28px_rgba(10,31,68,0.45)]">
        <div className="aspect-[2/1] bg-ink-2">
          <SlideOpt />
        </div>
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl font-semibold text-fg">
          Supervising undergraduate researchers
        </h2>
        <p className="mt-3 leading-relaxed text-fg">{educationNotes.undergrad}</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-white/50 shadow-[0_18px_50px_-28px_rgba(10,31,68,0.45)]">
          <div className="aspect-[2/1] bg-ink-2">
            <SlideGroup />
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-2xl font-semibold text-fg">Outreach</h2>
        <p className="mt-3 leading-relaxed text-fg">{educationNotes.outreach}</p>
      </section>
    </div>
  );
}
