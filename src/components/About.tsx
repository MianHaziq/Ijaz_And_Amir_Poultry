import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function About() {
  const points = [
    {
      title: "Professional broiler production",
      body: "A dedicated broiler operation run to defined standards, from placement through to a healthy, market-ready flock.",
    },
    {
      title: "Care that starts with the bird",
      body: "Housing, ventilation, water and feed are managed around bird comfort, because healthy birds are the whole point.",
    },
    {
      title: "Registered and accountable",
      body: `Operating under the ${site.registration.act}, registered with the ${site.registration.authority}.`,
    },
  ];

  return (
    <section id="about" className="grain relative overflow-hidden bg-white py-24 lg:py-36">
      {/* organic brand shape, kept very quiet */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-56 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-lime/12 to-transparent blur-3xl"
      />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* ---------------- copy ---------------- */}
          <div>
            <Reveal direction="up">
              <span className="eyebrow">About the farm</span>
            </Reveal>

            <Reveal direction="up" delay={90}>
              <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-deep sm:text-4xl lg:text-[2.9rem]">
                Building a healthier future through{" "}
                <span className="text-green">responsible poultry farming</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={160}>
              <div className="gold-rule mt-7" />
            </Reveal>

            <Reveal direction="up" delay={220}>
              <p className="text-pretty mt-7 text-base leading-relaxed text-muted lg:text-[1.05rem]">
                {site.name} is a modern broiler operation in Village Burnali, Tehsil
                Kharian, District Gujrat. The farm is built around a simple conviction:
                the quality of what leaves the shed is decided long before it leaves -
                by how the birds are housed, fed and protected every single day.
              </p>
            </Reveal>

            <Reveal direction="up" delay={280}>
              <p className="text-pretty mt-4 text-base leading-relaxed text-muted lg:text-[1.05rem]">
                That means quality feeding, clean and controlled housing, disciplined
                biosecurity, and a way of growing the business that stays responsible
                as it scales.
              </p>
            </Reveal>

            <ul className="mt-10 space-y-5">
              {points.map((point, i) => (
                <Reveal as="li" key={point.title} direction="up" delay={340 + i * 90}>
                  <div className="group flex gap-4">
                    <span className="relative mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 transition-colors duration-500 group-hover:bg-green/20">
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-green" fill="none" aria-hidden="true">
                        <path
                          d="M3.5 8.4l3 3 6-6.8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-[1.02rem] font-bold text-deep">{point.title}</h3>
                      <p className="text-pretty mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal direction="up" delay={620}>
              <Link
                href="/about"
                className="group mt-10 inline-flex items-center gap-2.5 text-sm font-semibold text-deep transition-colors duration-300 hover:text-green"
              >
                Meet {site.proprietor}, the proprietor
                <span
                  aria-hidden="true"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            </Reveal>
          </div>

          {/* ---------------- image composition ---------------- */}
          <Reveal direction="scale" className="relative">
            <div className="relative">
              {/* gold offset frame, echoing the print material */}
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-4 hidden h-full w-full rounded-[2rem] border border-gold/40 sm:block"
              />

              {/* The portrait crop (banner2) is used in the portrait frame: it is
                  narrower than the frame, so object-cover trims top and bottom and
                  the object-position below can sit the view on the farm itself
                  rather than on the sky. */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-deep/20">
                <Image
                  src="/banner2.png"
                  alt="Broiler sheds and feed silos at Ijaz &amp; Amir Poultry Farm"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  quality={88}
                  className="scale-[1.02] object-cover object-[center_72%] transition-transform duration-[1600ms] hover:scale-[1.08]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-deep/55 via-transparent to-transparent"
                />

                {/* script tagline, as it appears on the letterhead */}
                <p className="absolute top-6 right-6 left-6 text-right font-script text-2xl leading-tight text-white drop-shadow-[0_2px_10px_rgba(1,62,32,0.55)] sm:text-[1.7rem]">
                  {site.script}
                </p>
              </div>

              {/* floating credential card */}
              <div className="absolute -bottom-8 -left-4 w-[15.5rem] rounded-2xl border border-hairline bg-white/95 p-5 shadow-2xl shadow-deep/15 backdrop-blur-sm sm:-left-8">
                <span className="text-[0.58rem] font-bold tracking-[0.18em] text-green uppercase">
                  Certificate of Registration
                </span>
                <p className="mt-2 font-display text-lg font-extrabold text-deep">
                  {site.registration.number}
                </p>
                <p className="mt-1.5 text-[0.72rem] leading-snug text-muted">
                  {site.registration.issuedBy} &middot; valid to {site.registration.validUntil}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
