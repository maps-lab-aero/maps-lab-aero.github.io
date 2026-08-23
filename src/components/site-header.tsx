import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/50 bg-white/55 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="font-serif text-[1.35rem] font-semibold tracking-tight text-navy no-underline hover:text-primary"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-md px-2.5 py-2 text-[0.95rem] font-medium no-underline transition-colors duration-150",
                  active
                    ? "text-primary"
                    : "text-ink-2 hover:bg-white/70 hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" strokeWidth={1.75} /> : <Menu className="size-6" strokeWidth={1.75} />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/60 bg-white/80 px-4 py-3 backdrop-blur-xl md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-md px-3 py-3 text-base font-medium text-navy no-underline hover:bg-primary-soft"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
