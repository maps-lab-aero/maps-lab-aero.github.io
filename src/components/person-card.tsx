import { Mail } from "lucide-react";
import type { Person } from "@/lib/content";
import { cn } from "@/lib/utils";

function hashHue(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return 210 + (h % 18);
}

function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function PersonCard({
  person,
  compact = false,
}: {
  person: Person;
  compact?: boolean;
}) {
  const hue = hashHue(person.name);
  return (
    <article
      className={cn(
        "flex gap-4 rounded-xl glass p-4",
        compact && "border-0 bg-transparent p-0",
      )}
    >
      {compact ? null : (
        <div
          className="flex size-24 shrink-0 items-center justify-center rounded-md font-serif text-2xl font-semibold text-surface sm:size-28"
          style={{
            background: `linear-gradient(160deg, hsl(${hue} 48% 32%), hsl(${hue + 8} 55% 18%))`,
          }}
          aria-hidden="true"
        >
          {initials(person.name)}
        </div>
      )}
      <div className="min-w-0">
        <h4 className="font-serif text-lg font-semibold text-fg">{person.name}</h4>
        <p className="text-sm font-medium text-primary">{person.role}</p>
        <ul className="mt-1 space-y-0.5 text-sm text-muted">
          {person.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        {person.email ? (
          <a
            href={`mailto:${person.email}`}
            className="mt-2 inline-flex items-center gap-1.5 text-sm text-primary no-underline hover:underline"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            {person.email}
          </a>
        ) : null}
      </div>
    </article>
  );
}
