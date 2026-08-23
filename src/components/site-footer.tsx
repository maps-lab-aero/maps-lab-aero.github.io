import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="glass-navy mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-white/75 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>
          © {site.copyrightYear} {site.name}. {site.fullName}.
        </p>
        <p>
          <a href={`mailto:${site.email}`} className="text-white no-underline hover:underline">
            {site.email}
          </a>
          <span className="mx-2 text-white/40">·</span>
          <span>
            {site.affiliation}, {site.university}
          </span>
        </p>
      </div>
    </footer>
  );
}
