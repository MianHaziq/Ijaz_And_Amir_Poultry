"use client";

import { useEffect, useRef, useState } from "react";
import Curve from "./Curve";
import { LogoMark } from "./Logo";
import { markAppReady } from "@/lib/appReady";
import { site } from "@/lib/site";

/* Minimum so the entrance reads as intentional on a warm cache rather
   than as a flicker; maximum so a slow connection never holds the site
   hostage behind a curtain. */
const MIN_VISIBLE_MS = 1500;
const MAX_VISIBLE_MS = 5500;

/* A beat on a completed ring before the curtain moves, so the two
   readings don't collide. */
const HOLD_MS = 260;

/* Must match the .pl transition duration in globals.css. */
const EXIT_MS = 1200;

/* Time constant of the glide toward the real figure. Expressed in
   milliseconds rather than as a per-frame fraction so the pace is the
   same on a 60Hz panel and a 120Hz one — a per-frame factor silently
   runs twice as fast on the latter. */
const GLIDE_MS = 200;

/* How slowly the bar drifts up while nothing has reported in yet. */
const CREEP_MS = 1900;

type Phase = "loading" | "exiting" | "done";

/**
 * Brand curtain shown while the fonts and hero artwork arrive.
 *
 * Progress is real: it tracks webfont readiness and the window load
 * event, with an asymptotic creep in between so the bar keeps moving on
 * a slow line without ever pretending to be finished. One rAF loop
 * writes a single `--p` custom property (0-100) straight to the DOM, so
 * the ring, the bar and the readout are driven from the same number and
 * cannot disagree — and React re-renders only when the phase changes,
 * not sixty times a second.
 *
 * The curtain leaves upward on the brand wave, so the site is revealed
 * by the same shape that separates every section below it.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<Phase>("loading");
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    /* Nothing scrolls underneath while the curtain is up. */
    const html = document.documentElement;
    const previousOverflow = html.style.overflow;
    let locked = true;
    html.style.overflow = "hidden";
    const unlock = () => {
      if (!locked) return;
      locked = false;
      html.style.overflow = previousOverflow;
    };

    /* A visitor who asks for less motion gets the information, not the
       performance: no artificial minimum, straight out of the way. */
    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minVisible = reduced ? 0 : MIN_VISIBLE_MS;
    const hold = reduced ? 0 : HOLD_MS;

    const start = performance.now();
    let raf = 0;
    let hardStop = 0;
    let value = 0;
    let last = start;
    let settledAt = 0;
    let finished = false;

    let assetsReady = document.readyState === "complete";
    let fontsReady = false;

    const onLoad = () => {
      assetsReady = true;
    };
    if (!assetsReady) window.addEventListener("load", onLoad, { once: true });

    if (typeof document.fonts !== "undefined") {
      const settle = () => {
        fontsReady = true;
      };
      document.fonts.ready.then(settle, settle);
    } else {
      fontsReady = true;
    }

    const paint = (v: number) => {
      root.style.setProperty("--p", v.toFixed(2));
      if (countRef.current) countRef.current.textContent = String(Math.round(v));
    };

    const finish = () => {
      if (finished) return;
      finished = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(hardStop);
      window.removeEventListener("load", onLoad);
      paint(100);
      unlock();
      setPhase("exiting");
      /* Release the scroll-reveals with the curtain, so the hero plays
         its entrance in front of the visitor. */
      markAppReady();
      window.setTimeout(() => setPhase("done"), EXIT_MS);
    };

    const tick = (now: number) => {
      const elapsed = now - start;
      const dt = Math.min(now - last, 100); // ignore a backgrounded tab
      last = now;

      /* Approaches 88% and never arrives — only a real signal completes
         the bar. */
      const creep = 88 * (1 - Math.exp(-elapsed / CREEP_MS));
      const target =
        assetsReady && fontsReady ? 100 : Math.max(creep, fontsReady ? 64 : 0);

      /* Exponential glide, integrated over the real frame time. A
         visitor who asked for reduced motion gets the figure itself,
         with no glide to sit through. */
      value = reduced
        ? target
        : value + (target - value) * (1 - Math.exp(-dt / GLIDE_MS));
      /* Close the last half percent outright: the readout already rounds
         to 100 there and the ring is a sub-pixel short, so the tail of
         the exponential is dead time the visitor waits through. */
      if (target - value < 0.5) value = target;
      paint(value);

      if (value >= 99.95 && elapsed >= minVisible) {
        if (!settledAt) settledAt = now;
        if (now - settledAt >= hold) {
          finish();
          return;
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    hardStop = window.setTimeout(finish, MAX_VISIBLE_MS);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(hardStop);
      window.removeEventListener("load", onLoad);
      unlock();
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      id="preloader"
      ref={rootRef}
      data-phase={phase}
      aria-busy={phase === "loading"}
      className="pl fixed inset-0 z-[200] flex items-center justify-center bg-deep text-white"
    >
      <p className="sr-only" role="status">
        Loading {site.name}
      </p>

      <div className="pl-field absolute inset-0" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />

      <div
        className="pl-body relative z-10 flex w-full max-w-md flex-col items-center px-6 text-center"
        aria-hidden="true"
      >
        {/* The mark on its cream plate, inside the progress ring */}
        <div className="relative grid h-[9rem] w-[9rem] place-items-center sm:h-[10rem] sm:w-[10rem]">
          <span className="pl-halo" />

          <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="pl-ring-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c9a227" />
                <stop offset="55%" stopColor="#e3c05c" />
                <stop offset="100%" stopColor="#9cbf5f" />
              </linearGradient>
            </defs>
            {/* rotated so the arc starts at twelve o'clock */}
            <g transform="rotate(-90 60 60)">
              <circle className="pl-ring-track" cx="60" cy="60" r="56" />
              <circle
                className="pl-ring-value"
                cx="60"
                cy="60"
                r="56"
                pathLength={100}
                stroke="url(#pl-ring-gradient)"
              />
            </g>
          </svg>

          <LogoMark
            plate
            priority
            className="relative h-[5.8rem] w-[5.8rem] sm:h-[6.4rem] sm:w-[6.4rem]"
          />
        </div>

        {/* Wordmark, stacked the way the business card sets it */}
        <p className="mt-9 font-display text-[1.55rem] font-extrabold tracking-tight sm:text-[1.85rem]">
          IJAZ &amp; AMIR
        </p>
        <p className="mt-2 font-display text-[0.6rem] font-semibold tracking-[0.42em] text-lime/85 sm:text-[0.66rem]">
          POULTRY FARM
        </p>
        <p className="mt-2.5 text-[0.5rem] font-semibold tracking-[0.28em] text-white/50 uppercase sm:text-[0.55rem]">
          {site.tagline}
        </p>

        <span
          aria-hidden="true"
          className="mt-4 h-[2px] w-32 rounded-full bg-gradient-to-r from-leaf via-green to-gold"
        />

        <p className="mt-5 font-script text-xl text-gold-soft sm:text-[1.6rem]">
          {site.script}
        </p>

        {/* Progress */}
        <div className="mt-9 w-full max-w-[17rem]">
          <div className="pl-bar">
            <span className="pl-bar-fill" />
          </div>
          <div className="mt-3 flex items-baseline justify-between text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/45">
            <span>Loading</span>
            <span>
              <span ref={countRef}>0</span>%
            </span>
          </div>
        </div>
      </div>

      {/* The curtain's lower edge: the brand wave trails the page in */}
      <div className="pointer-events-none absolute inset-x-0 top-full" aria-hidden="true">
        <Curve flip fill="#013e20" height="h-[56px] sm:h-[96px]" />
      </div>
    </div>
  );
}
