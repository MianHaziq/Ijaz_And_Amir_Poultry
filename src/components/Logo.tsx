/* ------------------------------------------------------------------
   Brand lockup.

   NOTE FOR HANDOVER: the wordmark below reproduces the typographic
   lockup from the client's letterhead / business card. The glyph is a
   simplified vector interpretation of the rooster-and-leaf mark.
   When the official logo vector arrives, drop it in as
   /public/logo.svg and replace the <LogoMark /> body with an <img> —
   nothing else in the site needs to change.
   ------------------------------------------------------------------ */

export function LogoMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="presentation" aria-hidden="true">
      {/* deep green badge */}
      <circle cx="32" cy="32" r="30" fill="#013e20" />

      {/* the brand's green wave, traced along the badge edge so it needs
          no clip path (and the mark carries no duplicate ids on the page) */}
      <path d="M4.5 44C16 56 38 58 60.9 40A30 30 0 0 1 4.5 44Z" fill="#2f8f43" opacity="0.5" />
      <path d="M8 50C18 58 38 59 57.4 48A30 30 0 0 1 8 50Z" fill="#9cbf5f" opacity="0.45" />

      {/* rooster head and neck, in profile facing right */}
      <g transform="translate(1.5 1) scale(0.94)">
        <path
          d="M28 50c-5-4-8-11-8-18 0-9 6-16 15-16 8 0 13 6 13 13 0 6-3 10-8 12v9H28Z"
          fill="#ffffff"
        />
        {/* comb */}
        <path
          d="M27 17c-1-4 2-6 4-4 0-4 4-5 6-2 2-3 6-1 6 3 0 3-3 5-7 5-3 0-7-1-9-2Z"
          fill="#e03127"
        />
        {/* beak */}
        <path d="M48 26.5l8.5 3.5-8.5 3.5z" fill="#e0a72e" />
        {/* wattle */}
        <path d="M43 35c3 0 5 3 5 6s-2 5-5 4-4-3-4-5 1-5 4-5Z" fill="#e03127" />
        {/* eye */}
        <circle cx="41" cy="26.5" r="2.3" fill="#013e20" />
      </g>

      <circle cx="32" cy="32" r="30" fill="none" stroke="#c9a227" strokeWidth="1.6" />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  compact = false,
}: {
  variant?: "dark" | "light";
  compact?: boolean;
}) {
  const light = variant === "light";

  return (
    <span className="flex items-center gap-3">
      <LogoMark className={compact ? "h-9 w-9 shrink-0" : "h-11 w-11 shrink-0"} />

      <span className="flex flex-col leading-none">
        <span
          className={[
            "font-display font-extrabold tracking-tight",
            compact ? "text-[1.05rem]" : "text-[1.2rem] sm:text-[1.35rem]",
            light ? "text-white" : "text-deep",
          ].join(" ")}
        >
          IJAZ <span className={light ? "text-lime" : "text-green"}>&amp;</span> AMIR
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
          <span className="mt-[5px] flex items-center gap-1.5" aria-hidden="true">
            <span className="h-[2px] w-7 rounded-full bg-gold" />
            <span className={`h-[2px] w-4 rounded-full ${light ? "bg-lime/70" : "bg-green/60"}`} />
          </span>
        )}
      </span>
    </span>
  );
}
