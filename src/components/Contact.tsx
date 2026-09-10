import Reveal from "./Reveal";
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { site, mapsQuery } from "@/lib/site";

/**
 * Contact.
 *
 * No enquiry form: there is no mail service wired up for this build, and a
 * form that only hands off to WhatsApp is a longer road to the same place.
 * The section puts the farm's own channels in front of the visitor instead
 * - phone, WhatsApp, email, and where the farm actually is.
 *
 * Nothing here holds state, so this stays a server component.
 */
export default function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden bg-cream py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[26rem] w-[26rem] rounded-full bg-gradient-to-bl from-green/10 to-transparent blur-3xl"
      />

      <div className="shell relative">
        <div className="max-w-2xl">
          <Reveal direction="up">
            <span className="eyebrow">Get in touch</span>
          </Reveal>
          <Reveal direction="up" delay={90}>
            <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-deep sm:text-4xl lg:text-[2.9rem]">
              Talk to the farm directly
            </h2>
          </Reveal>
          <Reveal direction="up" delay={160}>
            <p className="text-pretty mt-6 text-base leading-relaxed text-muted lg:text-[1.05rem]">
              For supply enquiries, farm visits or anything else - reach {site.proprietor}{" "}
              and the team on the numbers below, or start a message on WhatsApp and it
              goes straight to the farm.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* ---------------- details ---------------- */}
          <Reveal direction="left" className="h-full">
            <div className="flex h-full flex-col rounded-[1.6rem] bg-deep p-7 text-white shadow-2xl shadow-deep/25 lg:p-9">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] text-lime uppercase">
                Proprietor
              </span>
              <p className="mt-2 font-display text-2xl font-extrabold lg:text-[1.75rem]">
                {site.proprietor}
              </p>
              <div className="mt-6 h-px w-full bg-white/10" />

              <ul className="mt-7 space-y-6 text-sm">
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-lime">
                    <PhoneIcon />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.62rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                      Call
                    </span>
                    {site.phones.map((p) => (
                      <a
                        key={p.tel}
                        href={`tel:${p.tel}`}
                        className="font-semibold text-white transition-colors duration-300 hover:text-lime"
                      >
                        {p.display}
                      </a>
                    ))}
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-lime">
                    <MailIcon />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.62rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold break-all text-white transition-colors duration-300 hover:text-lime"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-lime">
                    <PinIcon />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.62rem] font-bold tracking-[0.18em] text-white/40 uppercase">
                      Visit
                    </span>
                    <p className="leading-relaxed text-white/85">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.region}
                    </p>
                  </div>
                </li>
              </ul>

              {/* mt-auto so the button sits on the floor of the card however
                  tall the map column makes the row */}
              <div className="mt-auto pt-9">
                <a
                  href={`https://wa.me/${site.phones[0].wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-white"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
                <p className="mt-4 text-center text-[0.72rem] leading-relaxed text-white/45">
                  Messages go to {site.phones[0].display}, monitored by the farm.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ---------------- where the farm is ---------------- */}
          <Reveal direction="right" delay={110} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-hairline bg-white shadow-lg shadow-deep/5">
              <div className="px-7 pt-7 pb-5 lg:px-9 lg:pt-9">
                <h3 className="font-display text-xl font-extrabold text-deep">Find the farm</h3>
                <div className="gold-rule mt-4" />
                <p className="text-pretty mt-5 text-sm leading-relaxed text-muted">
                  {site.address.full}
                </p>
                <a
                  href={`https://maps.google.com/maps?q=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-deep transition-colors duration-300 hover:text-green"
                >
                  <PinIcon className="h-4 w-4" />
                  Open in Google Maps
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    &rarr;
                  </span>
                </a>
              </div>

              <iframe
                title={`Map showing ${site.name} in Burnali, Kharian`}
                src={`https://maps.google.com/maps?q=${mapsQuery}&z=12&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[16rem] w-full flex-1 border-0 grayscale-[35%] transition-all duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
