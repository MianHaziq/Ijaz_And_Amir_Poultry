"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { whenAppReady } from "@/lib/appReady";

type Direction = "up" | "down" | "left" | "right" | "scale";

/**
 * Scroll-reveal primitive.
 *
 * A single shared IntersectionObserver releases elements once, as they
 * enter the viewport. The motion itself lives in globals.css so that
 * `prefers-reduced-motion` can switch all of it off in one place.
 *
 * Observation starts only once the preloader has lifted — otherwise
 * everything inside the first viewport would animate behind the curtain
 * and already be sitting still by the time it was uncovered.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If the browser can't observe, show the content rather than hide it.
    if (typeof IntersectionObserver === "undefined") {
      el.dataset.visible = "true";
      return;
    }

    let observer: IntersectionObserver | undefined;

    const stopWaiting = whenAppReady(() => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            // Also release anything already scrolled past (hash jumps, reloads
            // at an offset), otherwise it would stay hidden on the way back up.
            if (entry.isIntersecting || entry.boundingClientRect.bottom < 0) {
              (entry.target as HTMLElement).dataset.visible = "true";
              observer?.unobserve(entry.target);
            }
          }
        },
        // threshold 0 rather than a ratio: a tall element (a full-height image
        // column, the footer) can never reach a ratio target near the end of the
        // document, and would then never reveal at all.
        { threshold: 0, rootMargin: "0px 0px -6% 0px" },
      );

      observer.observe(el);
    });

    return () => {
      stopWaiting();
      observer?.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={direction}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
