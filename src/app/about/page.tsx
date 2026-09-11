import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Curve from "@/components/Curve";
import Reveal from "@/components/Reveal";
import { PhoneIcon, MailIcon, PinIcon } from "@/components/Icons";
import { site } from "@/lib/site";

/**
 * About / leadership page.
 *
 * IMPORTANT: every claim on this page is traceable to something the
 * client actually supplied - the letterhead, the Schedule-VI
 * certificate, or one of the photographs in /public. Nothing about
 * years in business, flock size, founding date or personal history is
 * asserted, because none of that has been provided. If the client sends
 * a biography or a message in their own words, this is where it goes.
 */

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ijaz & Amir Poultry Farm is a registered broiler operation in Village Burnali, Tehsil Kharian, District Gujrat, run by its proprietor Ch. Abdul Ijaz.",
  openGraph: {
    title: `About Us | ${site.name}`,
    description:
      "The registered broiler farm in Village Burnali, and the proprietor who runs it.",
    images: [{ url: "/cliennt-main.jpeg", alt: site.proprietor }],
  },
};

export default function AboutPage() {
  const credentials = [
    { label: "Proprietor", value: site.proprietor },
    { label: "Registration No.", value: site.registration.number },
    { label: "Category", value: `${site.registration.category} Production` },
    { label: "Valid until", value: site.registration.validUntil },
  ];

  return (
    <main>
      {/* ================= intro =================
          The header is a solid bar on this page rather than transparent
          over artwork, so the first section has to clear it itself. */}
      <section className="grain relative overflow-hidden bg-cream pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -right-40 h-[36rem] w-[36rem] rounded-full bg-gradient-to-bl from-lime/15 to-transparent blur-3xl"
        />

        <div className="shell relative">
          <div className="max-w-3xl">
            <Reveal direction="up">
              <span className="eyebrow">About us</span>
            </Reveal>

            <Reveal direction="up" delay={90}>
              <h1 className="mt-5 font-display text-3xl leading-[1.1] font-extrabold text-deep sm:text-4xl lg:text-[3.2rem]">
                The farm, and the{" "}
                <span className="text-green-strong">person accountable for it</span>
              </h1>
            </Reveal>

            <Reveal direction="up" delay={160}>
              <div className="gold-rule mt-7" />
            </Reveal>

            <Reveal direction="up" delay={220}>
              <p className="text-pretty mt-7 text-base leading-relaxed text-muted lg:text-[1.08rem]">
                {site.name} is a registered broiler operation in{" "}
                {site.address.line1}, {site.address.line2}. It is run by its
                proprietor, {site.proprietor}, under registration{" "}
                {site.registration.number} with the {site.registration.authority}.
              </p>
            </Reveal>

            <Reveal direction="up" delay={280}>
              <p className="mt-8 font-script text-2xl text-green sm:text-3xl">
                {site.script}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= proprietor ================= */}
      <section id="proprietor" className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-56 h-[34rem] w-[34rem] rounded-full bg-gradient-to-tr from-green/8 to-transparent blur-3xl"
        />

        <div className="shell relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* ---- portrait ---- */}
            <Reveal direction="scale" className="relative">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                {/* gold offset frame, as on the print material */}
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -left-4 hidden h-full w-full rounded-[2rem] border border-gold/40 sm:block"
                />

                {/* The portrait was shot on a white studio backdrop, so the
                    frame fades white into cream underneath it - on a flat
                    white panel the shoulders would dissolve into the page. */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-white via-white to-cream shadow-2xl shadow-deep/20">
                  <Image
                    src="/cliennt-main.jpeg"
                    alt={`${site.proprietor}, proprietor of ${site.name}`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 90vw"
                    quality={90}
                    className="object-cover object-top"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-deep/70 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-xl font-extrabold text-white">
                      {site.proprietor}
                    </p>
                    <p className="mt-1 text-[0.62rem] font-bold tracking-[0.2em] text-lime uppercase">
                      Proprietor
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ---- copy ---- */}
            <div>
              <Reveal direction="up">
                <span className="eyebrow">Leadership</span>
              </Reveal>

              <Reveal direction="up" delay={90}>
                <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-deep sm:text-4xl lg:text-[2.7rem]">
                  {site.proprietor}
                </h2>
              </Reveal>

              <Reveal direction="up" delay={150}>
                <p className="mt-3 text-[0.72rem] font-bold tracking-[0.22em] text-green uppercase">
                  Proprietor &middot; {site.name}
                </p>
              </Reveal>

              <Reveal direction="up" delay={210}>
                <div className="gold-rule mt-7" />
              </Reveal>

              <Reveal direction="up" delay={260}>
                <p className="text-pretty mt-7 text-base leading-relaxed text-muted lg:text-[1.05rem]">
                  The farm is registered in his name. The licence, the production
                  category and the responsibility that comes with them all sit with
                  one person rather than behind a company name - which is what
                  makes the standards on this site something a visitor can hold
                  someone to.
                </p>
              </Reveal>

              <Reveal direction="up" delay={320}>
                <p className="text-pretty mt-4 text-base leading-relaxed text-muted lg:text-[1.05rem]">
                  Day to day that means the things birds actually notice: how they
                  are housed, how they are fed and watered, who is allowed near
                  them, and how carefully the sheds are kept between flocks.
                </p>
              </Reveal>

              {/* The farm's own line, from the letterhead - presented as the
                  farm's motto rather than as a personal quotation, because a
                  quotation is not something to put in a real person's mouth. */}
              <Reveal direction="up" delay={380}>
                <figure className="mt-10 rounded-[1.6rem] border border-hairline bg-cream p-7 lg:p-8">
                  <blockquote className="font-script text-2xl leading-snug text-deep sm:text-[1.9rem]">
                    {site.motto}
                  </blockquote>
                  <figcaption className="mt-4 text-[0.66rem] font-bold tracking-[0.18em] text-green uppercase">
                    The farm&rsquo;s motto, from its letterhead
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal direction="up" delay={440}>
                <ul className="mt-9 flex flex-wrap gap-x-8 gap-y-4 text-sm">
                  <li className="flex items-center gap-2.5">
                    <PhoneIcon className="h-4 w-4 shrink-0 text-green" />
                    <a
                      href={`tel:${site.phones[0].tel}`}
                      className="font-semibold text-deep transition-colors duration-300 hover:text-green"
                    >
                      {site.phones[0].display}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MailIcon className="h-4 w-4 shrink-0 text-green" />
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold break-all text-deep transition-colors duration-300 hover:text-green"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <PinIcon className="h-4 w-4 shrink-0 text-green" />
                    <span className="font-semibold text-deep">{site.address.line2}</span>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPACE 2025 ================= */}
      <section className="relative isolate overflow-hidden bg-deep text-white">
        <Curve fill="#ffffff" flip height="h-[60px] sm:h-[90px]" />

        <div className="shell relative pt-10 pb-24 lg:pt-16 lg:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Reveal direction="up">
                <span className="eyebrow eyebrow-light">Beyond the farm gate</span>
              </Reveal>

              <Reveal direction="up" delay={90}>
                <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold sm:text-4xl lg:text-[2.7rem]">
                  At SPACE 2025, on an{" "}
                  <span className="text-lime">international pass</span>
                </h2>
              </Reveal>

              <Reveal direction="up" delay={150}>
                <div className="gold-rule mt-7" />
              </Reveal>

              <Reveal direction="up" delay={210}>
                <p className="text-pretty mt-7 text-base leading-relaxed text-white/70 lg:text-[1.05rem]">
                  {site.proprietor} attended SPACE 2025, the international animal
                  production exhibition, carrying the farm&rsquo;s name on an
                  international visitor pass.
                </p>
              </Reveal>

              <Reveal direction="up" delay={270}>
                <p className="text-pretty mt-4 text-base leading-relaxed text-white/70 lg:text-[1.05rem]">
                  Going to see how the industry works elsewhere is how a farm this
                  size finds out what is worth adopting next - in housing, in feed
                  handling, and in the biosecurity routine.
                </p>
              </Reveal>

              <Reveal direction="up" delay={330}>
                <ul className="mt-10 flex flex-wrap gap-3">
                  {site.pillarsLine.map((pillar) => (
                    <li
                      key={pillar}
                      className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[0.7rem] font-bold tracking-[0.2em] text-lime uppercase"
                    >
                      {pillar}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal direction="right" delay={120}>
              <figure className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -right-4 -bottom-4 hidden h-full w-full rounded-[2rem] border border-gold/40 sm:block"
                />
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[2rem] shadow-2xl shadow-black/40">
                  <Image
                    src="/client-space-event.jpeg"
                    alt={`${site.proprietor} (right) at the SPACE 2025 international animal production exhibition`}
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    quality={88}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-[0.75rem] leading-relaxed text-white/45">
                  {site.proprietor} (right) at SPACE 2025.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= album ================= */}
      <section className="grain relative overflow-hidden bg-cream py-24 lg:py-32">
        <div className="shell relative">
          <div className="max-w-2xl">
            <Reveal direction="up">
              <span className="eyebrow">From the album</span>
            </Reveal>
            <Reveal direction="up" delay={90}>
              <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-deep sm:text-4xl">
                Photographs supplied by the farm
              </h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <div className="gold-rule mt-7" />
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
            <Reveal direction="up" delay={120}>
              <figure className="group relative aspect-square w-full overflow-hidden rounded-[1.6rem] shadow-xl shadow-deep/10">
                <Image
                  src="/client-04.jpeg"
                  alt={site.proprietor}
                  fill
                  sizes="(min-width: 640px) 46vw, 92vw"
                  quality={88}
                  className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
              </figure>
            </Reveal>

            <Reveal direction="up" delay={210}>
              <figure className="group relative aspect-square w-full overflow-hidden rounded-[1.6rem] shadow-xl shadow-deep/10">
                <Image
                  src="/client-03.jpeg"
                  alt={`${site.proprietor} (right) with a business associate`}
                  fill
                  sizes="(min-width: 640px) 46vw, 92vw"
                  quality={88}
                  className="object-cover object-[center_28%] transition-transform duration-[1400ms] group-hover:scale-[1.05]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= credentials + CTA ================= */}
      <section className="relative isolate overflow-hidden bg-deep text-white">
        <Curve fill="#f6f8f3" flip height="h-[60px] sm:h-[90px]" />

        <div className="shell relative pt-10 pb-24 lg:pt-16 lg:pb-28">
          <Reveal direction="up">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">
              Registered, and on the record
            </h2>
          </Reveal>

          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((fact, i) => (
              <Reveal key={fact.label} direction="up" delay={90 + i * 80}>
                <dt className="text-[0.62rem] font-bold tracking-[0.2em] text-lime uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display text-lg font-extrabold sm:text-xl">
                  {fact.value}
                </dd>
              </Reveal>
            ))}
          </dl>

          <Reveal direction="up" delay={420}>
            <p className="text-pretty mt-10 max-w-2xl text-sm leading-relaxed text-white/60">
              Issued by the {site.registration.issuedBy} under the{" "}
              {site.registration.act}.
            </p>
          </Reveal>

          <Reveal direction="up" delay={480}>
            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-white"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                Talk to the farm
              </Link>
              <Link
                href="/#farm"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
                style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
              >
                See the farm
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
