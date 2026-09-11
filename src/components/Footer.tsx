import Curve from "./Curve";
import Reveal from "./Reveal";
import { Logo } from "./Logo";
import { PhoneIcon, MailIcon, PinIcon } from "./Icons";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-deep text-white">
      <Curve fill="#f6f8f3" flip height="h-[70px] sm:h-[100px]" />

      {/* leaf watermark, mirroring the corner treatment on the letterhead */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
        <svg viewBox="0 0 300 300" className="absolute -bottom-16 -left-10 h-[26rem] w-[26rem]" fill="none">
          <path d="M30 280C10 170 80 60 250 30c-20 140-110 220-220 250Z" fill="#9cbf5f" />
        </svg>
      </div>

      <div className="shell relative pt-8 pb-10 lg:pt-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* ---- brand ---- */}
          <Reveal direction="up">
            <Logo variant="light" />
            <p className="text-pretty mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              A registered broiler farm in Village Burnali, Tehsil Kharian, District
              Gujrat - raising healthy birds through quality feeding, strong biosecurity
              and responsible, modern practice.
            </p>
            <p className="mt-6 font-script text-3xl text-lime">{site.motto}</p>
          </Reveal>

          {/* ---- nav ---- */}
          <Reveal direction="up" delay={100}>
            <h3 className="text-[0.62rem] font-bold tracking-[0.22em] text-lime uppercase">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-400 hover:text-white"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---- contact ---- */}
          <Reveal direction="up" delay={190}>
            <h3 className="text-[0.62rem] font-bold tracking-[0.22em] text-lime uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                <span className="flex flex-col gap-1">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="text-white/70 transition-colors duration-300 hover:text-white"
                    >
                      {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                <span className="leading-relaxed text-white/70">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* ---- legal bar ---- */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-[0.75rem] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p className="sm:text-right">
            Registered broiler premises &middot; Reg. No. {site.registration.number} &middot;{" "}
            {site.registration.act}
          </p>
        </div>
      </div>
    </footer>
  );
}
