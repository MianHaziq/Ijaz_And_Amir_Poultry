import Image from "next/image";

/* The client's own mark, lifted off the white plate it was supplied on.
   Its counters — the rooster's face, the gaps between the leaves — are
   transparent, exactly as they are in the artwork, so on any dark
   surface the mark is set on a light plate the way the business card
   always presents it. */
import mark from "../../public/logo.png";

import { site } from "@/lib/site";

/**
 * The rooster-and-leaf mark on its own.
 *
 * `plate` seats it on the cream disc used wherever the background is
 * dark; without it the mark is placed bare, for light surfaces.
 */
export function LogoMark({
  className = "h-11 w-11",
  plate = false,
  priority = false,
}: {
  className?: string;
  plate?: boolean;
  priority?: boolean;
}) {
  /* 128px covers every placement on the site at 2x — the header lockup,
     the footer and the preloader — without shipping the full 512. */
  const img = (
    <Image
      src={mark}
      alt=""
      aria-hidden="true"
      width={128}
      height={128}
      priority={priority}
      className={`${plate ? "h-[76%] w-[76%]" : "h-full w-full"} object-contain`}
    />
  );

  if (!plate) return <span className={`${className} block`}>{img}</span>;

  return (
    <span
      className={`${className} grid place-items-center rounded-full bg-cream shadow-lg shadow-black/25 ring-1 ring-gold/35`}
    >
      {img}
    </span>
  );
}

/**
 * The full lockup, set the way it is on the client's letterhead and
 * business card: mark, wordmark, spaced sub-line, the strap, and the
 * green-to-gold rule that closes it.
 *
 * `compact` drops the strap and rule for the condensed header that
 * appears once the visitor scrolls past the hero.
 */
export function Logo({
  variant = "dark",
  compact = false,
  priority = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
  priority?: boolean;
}) {
  const light = variant === "light";

  return (
    <span className="flex items-center gap-3">
      <LogoMark
        className={compact ? "h-10 w-10 shrink-0" : "h-12 w-12 shrink-0"}
        plate={light}
        priority={priority}
      />

      <span className="flex flex-col leading-none">
        <span
          className={[
            "font-display font-extrabold tracking-tight",
            compact ? "text-[1.05rem]" : "text-[1.2rem] sm:text-[1.35rem]",
            light ? "text-white" : "text-deep",
          ].join(" ")}
        >
          IJAZ &amp; AMIR
        </span>

        <span
          className={[
            "font-display font-semibold",
            compact ? "text-[0.5rem]" : "text-[0.58rem]",
            "mt-[3px] tracking-[0.34em]",
            light ? "text-lime/90" : "text-green",
          ].join(" ")}
        >
          POULTRY FARM
        </span>

        {!compact && (
          <>
            <span
              className={[
                "mt-[5px] text-[0.42rem] font-semibold tracking-[0.2em] uppercase sm:text-[0.46rem]",
                light ? "text-white/55" : "text-muted",
              ].join(" ")}
            >
              {site.tagline}
            </span>

            {/* the card closes the lockup with a single green-to-gold bar */}
            <span
              aria-hidden="true"
              className="mt-[5px] h-[2px] w-full rounded-full bg-gradient-to-r from-leaf via-green to-gold"
            />
          </>
        )}
      </span>
    </span>
  );
}
