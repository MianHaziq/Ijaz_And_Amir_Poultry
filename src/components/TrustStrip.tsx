import Reveal from "./Reveal";
import { site } from "@/lib/site";

/**
 * A deep-green credential band sitting directly beneath the hero, so the
 * green wave already painted into the banner artwork flows straight into
 * the page. Every value shown here comes from the client's registration
 * certificate or business card - nothing is invented.
 */
export default function TrustStrip() {
  const facts = [
    { label: "Proprietor", value: site.proprietor },
    { label: "Registration No.", value: site.registration.number },
    { label: "Category", value: `${site.registration.category} Production` },
    { label: "District", value: "Kharian, Gujrat" },
  ];

  return (
    <section className="relative -mt-px bg-deep" aria-label="Farm credentials">
      {/* faint watermark echoing the logo's leaf sweep */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.07]"
      >
        <svg viewBox="0 0 400 200" className="absolute -top-10 right-0 h-[220%] w-auto" fill="none">
          <path d="M40 190C30 110 90 40 200 20c-10 90-70 150-160 170Z" fill="#9cbf5f" />
        </svg>
      </div>

      <div className="shell relative py-8 lg:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal direction="left" className="flex items-center gap-4 lg:gap-5">
            <span className="flex gap-2.5 font-display text-[0.7rem] font-bold tracking-[0.3em] text-white uppercase sm:text-xs">
              {site.pillarsLine.map((word, i) => (
                <span key={word} className="flex items-center gap-2.5">
                  {i > 0 && <span className="h-3 w-px bg-white/25" aria-hidden="true" />}
                  {word}
                </span>
              ))}
            </span>
          </Reveal>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:gap-x-10">
            {facts.map((fact, i) => (
              <Reveal key={fact.label} direction="up" delay={i * 90}>
                <dt className="text-[0.6rem] font-semibold tracking-[0.18em] text-lime/80 uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 font-display text-sm font-bold text-white sm:text-[0.95rem]">
                  {fact.value}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>

      {/* hairline in the brand gold, closing the band */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />
    </section>
  );
}
