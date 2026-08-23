import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">404</p>
      <h1 className="mt-2 font-serif text-3xl font-semibold text-fg">Page not found</h1>
      <p className="mt-3 text-muted">
        Sorry, but the page you were trying to view does not exist.
      </p>
      <p className="mt-6">
        <Link to="/" className="font-medium no-underline hover:underline">
          Back to home
        </Link>
      </p>
    </div>
  );
}
