import type { ReactNode } from "react";

export function PageHeading({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      {kicker ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.14em] text-primary">
          {kicker}
        </p>
      ) : null}
      <h1 className="font-serif text-3xl font-semibold text-fg sm:text-4xl">{title}</h1>
      {children ? <div className="mt-3 text-base leading-relaxed text-muted">{children}</div> : null}
    </header>
  );
}
