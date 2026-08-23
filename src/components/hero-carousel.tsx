import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "@/lib/content";
import { slideArt } from "@/components/research-slides";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 4000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-white/50 shadow-[0_18px_50px_-28px_rgba(10,31,68,0.45)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[2/1] w-full">
        {slides.map((slide, i) => {
          const Art = slideArt[slide.id];
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                i === index ? "opacity-100" : "pointer-events-none opacity-0",
              )}
              aria-hidden={i !== index}
            >
              {Art ? <Art /> : null}
            </div>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {slides[index]?.title}: {slides[index]?.caption}
      </p>

      <button
        type="button"
        className="absolute left-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md hover:bg-white/40"
        aria-label="Previous slide"
        onClick={() => go(-1)}
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        className="absolute right-2 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md hover:bg-white/40"
        aria-label="Next slide"
        onClick={() => go(1)}
      >
        <ChevronRight className="size-6" />
      </button>

      <ol className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <li key={slide.id}>
            <button
              type="button"
              aria-label={`Show ${slide.title}`}
              className={cn(
                "block size-2.5 rounded-full transition-colors",
                i === index ? "bg-surface" : "bg-surface/40 hover:bg-surface/70",
              )}
              onClick={() => setIndex(i)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
