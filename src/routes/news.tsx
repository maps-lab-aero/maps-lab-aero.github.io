import { createFileRoute } from "@tanstack/react-router";
import { NewsList } from "@/components/news-list";
import { PageHeading } from "@/components/page-heading";
import { news, site } from "@/lib/content";

export const Route = createFileRoute("/news")({
  component: NewsPage,
  head: () => ({
    meta: [{ title: `${site.name} — News` }],
  }),
});

function NewsPage() {
  return (
    <div className="max-w-3xl">
      <PageHeading kicker={site.name} title="News">
        Updates from the group — awards, papers, defenses, and new projects.
      </PageHeading>
      <NewsList items={news} />
    </div>
  );
}
