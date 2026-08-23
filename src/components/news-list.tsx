import { Link } from "@tanstack/react-router";
import type { NewsItem } from "@/lib/content";

export function NewsList({
  items,
  compact = false,
}: {
  items: NewsItem[];
  compact?: boolean;
}) {
  return (
    <ol className="space-y-5">
      {items.map((item) => (
        <li key={`${item.date}-${item.text.slice(0, 24)}`}>
          <p className="font-medium text-primary">{item.date}</p>
          <p className={compact ? "mt-1 text-[0.95rem] leading-relaxed text-fg" : "mt-1 leading-relaxed text-fg"}>
            {item.text}
            {item.href ? (
              <>
                {" "}
                <a href={item.href} className="whitespace-nowrap">
                  [{item.hrefLabel ?? "Link"}]
                </a>
              </>
            ) : null}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function NewsWell({ items }: { items: NewsItem[] }) {
  return (
    <aside className="glass rounded-xl p-5 sm:p-6">
      <h2 className="font-serif text-xl font-semibold text-fg">News</h2>
      <div className="mt-4">
        <NewsList items={items} compact />
      </div>
      <p className="mt-6">
        <Link to="/news" className="font-medium no-underline hover:underline">
          … see all News
        </Link>
      </p>
    </aside>
  );
}
