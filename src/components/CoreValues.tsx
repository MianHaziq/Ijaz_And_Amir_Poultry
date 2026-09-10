import Reveal from "./Reveal";
import { BroilerIcon, FeedIcon, BiosecurityIcon, GrowthIcon } from "./Icons";

const values = [
  {
    icon: BroilerIcon,
    title: "Broiler Production",
    body: "Professional poultry production focused on healthy, quality birds raised to a consistent standard.",
  },
  {
    icon: FeedIcon,
    title: "Quality Feeding",
    body: "Carefully managed feeding practices that support bird health, condition and steady development.",
  },
  {
    icon: BiosecurityIcon,
    title: "Biosecurity First",
    body: "A strong focus on clean, controlled farming environments and disciplined flock health protection.",
  },
  {
    icon: GrowthIcon,
    title: "Sustainable Growth",
    body: "A forward-looking approach to modern agriculture, built to grow responsibly over the long term.",
  },
];

export default function CoreValues() {
  return (
    <section id="practices" className="relative overflow-hidden bg-cream py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-green/8 to-transparent blur-3xl"
      />

      <div className="shell relative">
        <div className="max-w-2xl">
          <Reveal direction="up">
            <span className="eyebrow">What we stand for</span>
          </Reveal>
          <Reveal direction="up" delay={90}>
            <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-deep sm:text-4xl lg:text-[2.9rem]">
              Four commitments behind every bird we raise
            </h2>
          </Reveal>
          <Reveal direction="up" delay={160}>
            <p className="text-pretty mt-6 text-base leading-relaxed text-muted lg:text-[1.05rem]">
              These are the pillars the farm is organised around - and the standard we
              hold ourselves to at every stage of production.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal key={value.title} direction="up" delay={i * 110}>
                <article
                  className="group relative h-full overflow-hidden rounded-[1.6rem] border border-hairline bg-white p-7 transition-all duration-700 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_32px_70px_-30px_rgba(1,62,32,0.55)] lg:p-8"
                  style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                >
                  {/* deep-green wash that rises on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-bottom scale-y-0 bg-gradient-to-br from-deep to-forest transition-transform duration-700 group-hover:scale-y-100"
                    style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                  />

                  {/* index numeral watermark */}
                  <span
                    aria-hidden="true"
                    className="absolute top-4 right-5 font-display text-5xl font-extrabold text-deep/5 transition-colors duration-700 group-hover:text-white/10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-green/20 bg-green/8 p-3 text-green transition-all duration-700 group-hover:border-lime/40 group-hover:bg-white/10 group-hover:text-lime">
                      <Icon />
                    </span>

                    <h3 className="mt-6 font-display text-lg font-extrabold text-deep transition-colors duration-700 group-hover:text-white">
                      {value.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="mt-3.5 block h-[3px] w-9 origin-left rounded-full bg-gold transition-all duration-700 group-hover:w-16 group-hover:bg-gold-soft"
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    />

                    <p className="text-pretty mt-4 text-sm leading-relaxed text-muted transition-colors duration-700 group-hover:text-white/80">
                      {value.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
