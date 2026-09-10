import Image from "next/image";
import Reveal from "./Reveal";
import Curve from "./Curve";

const highlights = [
  {
    title: "Purpose-built housing",
    body: "Long-span sheds laid out for airflow, light and easy daily management of the flock.",
  },
  {
    title: "On-site feed storage",
    body: "Silo storage that keeps feed dry, clean and ready, so feeding stays consistent.",
  },
  {
    title: "Managed surroundings",
    body: "A maintained, planted site - controlled access, clear movement, tidy working ground.",
  },
];

export default function ModernFarming() {
  return (
    <section id="farm" className="relative isolate bg-deep">
      {/* white section above spills into the deep band through the brand wave */}
      <Curve fill="#ffffff" flip gold={false} height="h-[60px] sm:h-[90px]" />

      {/* deep, quiet background texture */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 h-[28rem] w-[28rem] rounded-full bg-green/15 blur-[110px]" />
        <div className="absolute right-0 bottom-0 h-[24rem] w-[24rem] rounded-full bg-lime/10 blur-[120px]" />
      </div>

      {/* ---------------- heading ---------------- */}
      <div className="shell relative pt-4 lg:pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
          <div>
            <Reveal direction="up">
              <span className="eyebrow eyebrow-light">Our farm</span>
            </Reveal>

            <Reveal direction="up" delay={90}>
              <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-white sm:text-4xl lg:text-[2.9rem]">
                Modern farming.
                <br />
                <span className="text-lime">Responsible care.</span>
              </h2>
            </Reveal>

            <Reveal direction="up" delay={150}>
              <div className="gold-rule mt-7" />
            </Reveal>
          </div>

          <Reveal direction="up" delay={210}>
            <p className="text-pretty text-base leading-relaxed text-white/70 lg:pb-2 lg:text-[1.05rem]">
              The farm is set up the way a modern poultry operation should be:
              purpose-built sheds, feed storage on site, and a clean, well-kept
              environment around them. It is infrastructure that makes good practice
              repeatable rather than occasional.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ---------------- cinematic band ----------------
          Full-bleed and letterboxed. The container is deliberately wider than
          the source (1671x941), so object-cover crops vertically and the
          object-position below pulls the frame down onto the sheds and silos
          rather than the sky. */}
      <Reveal direction="up" delay={120} className="relative mt-12 lg:mt-16">
        <div className="relative h-[300px] w-full overflow-hidden sm:h-[380px] lg:h-[520px]">
          <Image
            src="/banner1.png"
            alt="The sheds, feed silos and planted surroundings of Ijaz &amp; Amir Poultry Farm"
            fill
            sizes="100vw"
            quality={88}
            className="object-cover object-[center_88%]"
          />

          {/* edge vignette so the band sits inside the deep section */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-deep/70 via-transparent to-deep/50"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-deep to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep to-transparent"
          />

          {/* caption chip */}
          <div className="shell absolute inset-x-0 bottom-6 lg:bottom-8">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-deep/60 px-4 py-2 text-[0.68rem] font-semibold tracking-[0.14em] text-white/90 uppercase backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              Village Burnali, Tehsil Kharian
            </span>
          </div>
        </div>
      </Reveal>

      {/* ---------------- highlights ---------------- */}
      <div className="shell relative pt-14 pb-24 lg:pt-16 lg:pb-32">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 110}>
              <div className="group h-full bg-white/[0.04] p-6 transition-colors duration-700 hover:bg-white/[0.09] lg:p-8">
                <span className="font-display text-sm font-extrabold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[1.05rem] font-bold text-white">
                  {item.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-[2px] w-8 origin-left rounded-full bg-gold/70 transition-all duration-700 group-hover:w-14 group-hover:bg-lime"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                />
                <p className="text-pretty mt-3.5 text-sm leading-relaxed text-white/60">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Curve fill="#f6f8f3" gold={false} height="h-[60px] sm:h-[90px]" />
    </section>
  );
}
