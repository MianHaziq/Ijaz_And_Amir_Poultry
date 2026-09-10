"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";
import { site } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  /* Transparent over the hero, solid white once the user scrolls past it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Highlight the section currently in view. */
  useEffect(() => {
    const ids = site.nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* Lock body scroll while the mobile sheet is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "border-b border-hairline/80 bg-white/92 py-2.5 shadow-[0_10px_40px_-24px_rgba(1,62,32,0.5)] backdrop-blur-xl"
          : "border-b border-white/10 bg-gradient-to-b from-black/25 to-transparent py-4",
      ].join(" ")}
      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
    >
      <div className="shell flex items-center justify-between gap-6">
        <a
          href="#home"
          aria-label={`${site.name} — home`}
          className="transition-transform duration-500 hover:scale-[1.02]"
        >
          {/* Over the hero the artwork is bright, so the dark lockup still reads;
              a soft plate keeps it crisp against the sky. */}
          <span
            className={[
              "block rounded-xl transition-all duration-700",
              solid ? "" : "bg-white/85 px-3 py-1.5 backdrop-blur-md shadow-lg shadow-deep/10",
            ].join(" ")}
          >
            <Logo compact={solid} priority />
          </span>
        </a>

        {/* ---- desktop nav ---- */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.slice(0, -1).map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "group relative rounded-full px-4 py-2 text-[0.82rem] font-semibold tracking-wide transition-colors duration-500",
                  solid
                    ? isActive
                      ? "text-deep"
                      : "text-muted hover:text-deep"
                    : isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white",
                ].join(" ")}
              >
                {item.label}
                <span
                  className={[
                    "absolute inset-x-4 -bottom-0.5 h-[2px] origin-left rounded-full bg-gradient-to-r from-gold to-leaf transition-transform duration-500",
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  ].join(" ")}
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
              </a>
            );
          })}

          <a
            href="#contact"
            className={[
              "ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.82rem] font-semibold",
              "transition-all duration-500 hover:-translate-y-0.5",
              solid
                ? "bg-deep text-white shadow-lg shadow-deep/25 hover:bg-deep-soft hover:shadow-xl hover:shadow-deep/30"
                : "bg-white/95 text-deep shadow-lg shadow-black/15 hover:bg-white",
            ].join(" ")}
          >
            <PhoneIcon className="h-[0.9rem] w-[0.9rem]" />
            Contact Us
          </a>
        </nav>

        {/* ---- mobile trigger ---- */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={[
            "relative z-50 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-500 lg:hidden",
            solid ? "bg-deep/6 text-deep" : "bg-white/85 text-deep backdrop-blur-md",
          ].join(" ")}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-all duration-500 ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-all duration-300 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-current transition-all duration-500 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {/* ---- mobile sheet ---- */}
      <div
        className={[
          "fixed inset-x-0 top-0 -z-10 origin-top overflow-hidden bg-white transition-[max-height,opacity] duration-700 lg:hidden",
          open ? "max-h-[100svh] opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
      >
        <nav className="shell flex flex-col gap-1 pt-24 pb-8" aria-label="Mobile">
          {site.nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 55}ms` : "0ms" }}
              className={[
                "border-b border-hairline/70 py-4 font-display text-lg font-bold text-deep",
                "transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
              ].join(" ")}
            >
              {item.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col gap-2 text-sm text-muted">
            <span className="font-script text-2xl text-green">{site.script}</span>
            {site.phones.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-2 font-semibold text-deep">
                <PhoneIcon className="h-4 w-4 text-green" />
                {p.display}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
