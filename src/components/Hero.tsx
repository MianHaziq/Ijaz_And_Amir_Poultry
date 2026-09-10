"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Hero.
 *
 * banner1.png (1671x941) and banner2.png (941x1672) are the same
 * commissioned scene in a landscape and a portrait crop, so they are used
 * as desktop / mobile art rather than as two slides. Both render at their
 * native aspect ratio so the sheds, the silos and the hen are never cut
 * off - the brief calls this out explicitly for mobile.
 *
 * Motion: a very slow Ken Burns push on the artwork, a light parallax
 * drift on scroll, and a staggered reveal of the copy.
 */
export default function Hero() {
  const [ready, setReady] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = window.setTimeout(() => setReady(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.2) return;
        el.style.transform = `translate3d(0, ${y * 0.14}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const reveal = (delay: number) => ({
    "data-reveal": "up" as const,
    "data-visible": ready ? "true" : undefined,
    style: { "--reveal-delay": `${delay}ms` } as React.CSSProperties,
  });

  const alt =
    "Ijaz & Amir Poultry Farm - broiler sheds and feed silos at sunrise, with a healthy white broiler hen in the foreground";

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-deep"
    >
      {/* ---------- artwork ---------- */}
      <div ref={parallaxRef} className="relative w-full will-change-transform">
        {/* desktop / landscape crop */}
        <div className="relative hidden aspect-[1671/941] max-h-[min(1000px,94svh)] w-full overflow-hidden md:block">
          <Image
            src="/banner1.png"
            alt={alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="anim-kenburns object-cover object-[center_bottom]"
          />
        </div>

        {/* mobile / portrait crop */}
        <div className="relative block aspect-[941/1672] max-h-[86svh] w-full overflow-hidden md:hidden">
          <Image
            src="/banner2.png"
            alt={alt}
            fill
            priority
            sizes="100vw"
            quality={90}
            className="anim-kenburns object-cover object-[center_bottom]"
          />
        </div>
      </div>

      {/* ---------- legibility scrim ----------
          Deliberately narrow. It sits only under the copy and is masked
          away before it reaches the green wave and the hen, so the
          commissioned artwork keeps its full saturation. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.78) 24%, rgba(255,255,255,0.3) 44%, rgba(255,255,255,0) 60%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 66%, transparent 88%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 66%, transparent 88%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 22%, rgba(255,255,255,0.25) 42%, rgba(255,255,255,0) 56%)",
        }}
      />

      {/* ---------- copy ---------- */}
      <div className="absolute inset-0 flex items-start pt-24 md:items-center md:pt-0">
        <div className="shell w-full">
          <div className="relative max-w-xl lg:max-w-2xl">
            {/* Second wash, anchored to the copy rather than to the
                viewport. The scrim above is a viewport-wide gradient
                while this block is centred inside .shell, so past about
                2000px the two drift apart and the copy slides out of the
                protected zone entirely. This one travels with it.

                No z-index: it is an absolutely positioned first sibling,
                so the relative wrapper after it paints on top. */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-[45%] -inset-y-[70%] hidden md:block"
              style={{
                /* `ellipse 50% 50% at 50% 50%` inscribes the ellipse in
                   its box, so the wash is already at zero alpha when it
                   meets the edges. Sized to the corner instead - the
                   default - it still carries opacity there and draws a
                   visible rectangle over the artwork. */
                background:
                  "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.88) 44%, rgba(255,255,255,0.66) 68%, rgba(255,255,255,0.28) 85%, rgba(255,255,255,0) 100%)",
              }}
            />

            <div className="relative">
              <span
                {...reveal(0)}
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-deep/12 bg-white/80 px-3.5 py-1.5 text-[0.62rem] font-bold tracking-[0.12em] text-deep uppercase backdrop-blur-sm sm:text-[0.68rem] sm:tracking-[0.14em]"
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green" />
                </span>
                {/* the full authority line needs room; shortened on small screens
                  so the chip can never force the page wider than the viewport */}
                <span className="sm:hidden">Registered Broiler Farm</span>
                <span className="hidden sm:inline">
                  Govt. of the Punjab &mdash; Registered Broiler Farm
                </span>
              </span>

              <h1
                {...reveal(140)}
                className="mt-5 font-display text-[2.1rem] leading-[1.03] font-extrabold text-deep sm:text-5xl lg:text-[4.1rem]"
              >
                Healthy Birds.
                <br />
                <span className="relative inline-block">
                  {/* Solid, not a gradient: a gradient across brand greens
                    puts its lightest stop in the middle of the word,
                    which is exactly where the sunset behind it is
                    brightest. The gold rule below carries the accent. */}
                  <span className="text-green-strong">Better Tomorrow.</span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-gold via-gold-soft to-transparent transition-transform duration-[1400ms]"
                    style={{
                      transform: ready ? "scaleX(1)" : "scaleX(0)",
                      transitionDelay: "900ms",
                      transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                </span>
              </h1>

              <p
                {...reveal(280)}
                className="text-pretty mt-6 max-w-lg text-[0.95rem] leading-relaxed text-ink/85 sm:text-lg"
              >
                Modern poultry farming built on quality production, responsible
                care, strong biosecurity, and sustainable growth.
              </p>

              <div
                {...reveal(400)}
                className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a
                  href="#farm"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-deep/25 transition-all duration-500 hover:-translate-y-0.5 hover:bg-deep-soft hover:shadow-2xl hover:shadow-deep/35 sm:px-7"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  Explore Our Farm
                  <svg
                    viewBox="0 0 20 20"
                    className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 10h11M11 6l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-deep/20 bg-white/75 px-6 py-3.5 text-sm font-semibold text-deep backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:border-deep/40 hover:bg-white sm:px-7"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
