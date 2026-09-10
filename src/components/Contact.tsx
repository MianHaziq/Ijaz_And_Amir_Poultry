"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";
import { PhoneIcon, MailIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { site, mapsQuery } from "@/lib/site";

/**
 * Contact.
 *
 * There is no mail service wired up for this build, so rather than fake a
 * "message sent" state the form composes the enquiry and hands it to a
 * channel the farm actually monitors: WhatsApp by default, email as a
 * fallback. Swapping in a real endpoint later means replacing `submit`
 * only - the markup stays as-is.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", topic: "Broiler supply enquiry", message: "" });

  const set = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const composed = () =>
    [
      `Enquiry for ${site.name}`,
      "",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Regarding: ${form.topic}`,
      "",
      form.message || "-",
    ].join("\n");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${site.phones[0].wa}?text=${encodeURIComponent(composed())}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const emailHref = () =>
    `mailto:${site.email}?subject=${encodeURIComponent(
      `${form.topic} - ${form.name || "Website enquiry"}`,
    )}&body=${encodeURIComponent(composed())}`;

  const field =
    "w-full rounded-xl border border-hairline bg-white px-4 py-3 text-sm text-ink transition-all duration-300 outline-none placeholder:text-muted/55 focus:border-green focus:ring-4 focus:ring-green/10";

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
              For supply enquiries, visits or anything else - reach {site.proprietor} and
              the team on the numbers below, or send the details across and we will come
              back to you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* ---------------- details ---------------- */}
          <div className="flex flex-col gap-5">
            <Reveal direction="left">
              <div className="rounded-[1.6rem] bg-deep p-7 text-white shadow-2xl shadow-deep/25 lg:p-8">
                <span className="text-[0.6rem] font-bold tracking-[0.2em] text-lime uppercase">
                  Proprietor
                </span>
                <p className="mt-2 font-display text-2xl font-extrabold">{site.proprietor}</p>
                <div className="mt-6 h-px w-full bg-white/10" />

                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-lime">
                      <PhoneIcon />
                    </span>
                    <div className="flex flex-col gap-1">
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
                    <a
                      href={`mailto:${site.email}`}
                      className="font-semibold break-all text-white transition-colors duration-300 hover:text-lime"
                    >
                      {site.email}
                    </a>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-lime">
                      <PinIcon />
                    </span>
                    <p className="leading-relaxed text-white/85">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </p>
                  </li>
                </ul>

                <a
                  href={`https://wa.me/${site.phones[0].wa}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-deep transition-all duration-500 hover:-translate-y-0.5 hover:bg-white"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <div className="overflow-hidden rounded-[1.6rem] border border-hairline bg-white shadow-lg shadow-deep/5">
                <iframe
                  title={`Map showing ${site.name} in Burnali, Kharian`}
                  src={`https://maps.google.com/maps?q=${mapsQuery}&z=12&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-56 w-full border-0 grayscale-[35%] transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </Reveal>
          </div>

          {/* ---------------- form ---------------- */}
          <Reveal direction="right" delay={90}>
            <form
              onSubmit={submit}
              className="h-full rounded-[1.6rem] border border-hairline bg-white p-7 shadow-lg shadow-deep/5 lg:p-9"
            >
              <h3 className="font-display text-xl font-extrabold text-deep">Send an enquiry</h3>
              <div className="gold-rule mt-4" />

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-bold tracking-wide text-deep uppercase">
                    Your name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Full name"
                    className={field}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-[0.72rem] font-bold tracking-wide text-deep uppercase">
                    Phone
                  </span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="03xx-xxxxxxx"
                    className={field}
                  />
                </label>
              </div>

              <label className="mt-4 block">
                <span className="mb-2 block text-[0.72rem] font-bold tracking-wide text-deep uppercase">
                  Regarding
                </span>
                <select value={form.topic} onChange={set("topic")} className={field}>
                  <option>Broiler supply enquiry</option>
                  <option>Farm visit</option>
                  <option>Supplier or partnership</option>
                  <option>General question</option>
                </select>
              </label>

              <label className="mt-4 block">
                <span className="mb-2 block text-[0.72rem] font-bold tracking-wide text-deep uppercase">
                  Message
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us what you need, and the quantity or timing if relevant."
                  className={`${field} resize-none`}
                />
              </label>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="group inline-flex flex-1 items-center justify-center gap-2.5 rounded-full bg-deep px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-deep/25 transition-all duration-500 hover:-translate-y-0.5 hover:bg-deep-soft"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Send on WhatsApp
                </button>

                <a
                  href={emailHref()}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-deep/20 px-6 py-3.5 text-sm font-semibold text-deep transition-all duration-500 hover:-translate-y-0.5 hover:border-deep/45 hover:bg-white"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  <MailIcon className="h-4 w-4" />
                  Email instead
                </a>
              </div>

              <p className="mt-4 text-[0.72rem] leading-relaxed text-muted">
                Your enquiry opens in WhatsApp or your mail app with the details filled
                in, so it reaches the farm directly.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
