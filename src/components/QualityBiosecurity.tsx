import Reveal from "./Reveal";

const steps = [
  {
    label: "Quality Feeding",
    body: "Feed is stored and managed so that what reaches the birds is clean, dry and consistent.",
  },
  {
    label: "Healthy Environment",
    body: "Housing is kept ventilated, dry and comfortable, because the shed condition sets the flock condition.",
  },
  {
    label: "Biosecurity Practices",
    body: "Controlled access and disciplined routines protect the flock from what should never reach it.",
  },
  {
    label: "Responsible Production",
    body: "Healthy birds, raised properly, leaving the farm to a standard we are willing to put our name to.",
  },
];

export default function QualityBiosecurity() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-lime/10 to-transparent blur-3xl"
      />

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up">
            <span className="eyebrow justify-center">How we work</span>
          </Reveal>
          <Reveal direction="up" delay={90}>
            <h2 className="mt-5 font-display text-3xl leading-[1.12] font-extrabold text-deep sm:text-4xl lg:text-[2.9rem]">
              Quality and biosecurity at every step
            </h2>
          </Reveal>
          <Reveal direction="up" delay={160}>
            <p className="text-pretty mt-6 text-base leading-relaxed text-muted lg:text-[1.05rem]">
              Good poultry is the result of an ordered process, not a single moment.
              Each stage protects the one after it.
            </p>
          </Reveal>
        </div>

        {/* ---------------- process ---------------- */}
        <div className="relative mt-16 lg:mt-20">
          {/* connecting rail - horizontal on desktop, vertical on mobile */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[1.45rem] w-px bg-gradient-to-b from-green/25 via-green/25 to-transparent lg:top-[1.45rem] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full lg:bg-gradient-to-r lg:from-transparent lg:via-green/25 lg:to-transparent"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.label} direction="up" delay={i * 130} className="relative">
                <div className="group flex gap-5 lg:block">
                  {/* node */}
                  <span className="relative flex h-[2.9rem] w-[2.9rem] shrink-0 items-center justify-center rounded-full border border-green/25 bg-white font-display text-sm font-extrabold text-green shadow-sm transition-all duration-700 group-hover:border-transparent group-hover:bg-deep group-hover:text-white group-hover:shadow-lg group-hover:shadow-deep/25">
                    {String(i + 1).padStart(2, "0")}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-gold/0 transition-all duration-700 group-hover:scale-125 group-hover:border-gold/50"
                    />
                  </span>

                  <div className="lg:mt-6 lg:pr-6">
                    <h3 className="font-display text-[1.05rem] font-extrabold text-deep">
                      {step.label}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="mt-3 block h-[2px] w-8 origin-left rounded-full bg-gold transition-all duration-700 group-hover:w-14"
                      style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
                    />
                    <p className="text-pretty mt-3.5 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ---------------- registration note ---------------- */}
        <Reveal direction="up" delay={200}>
          <p className="mx-auto mt-16 max-w-3xl rounded-2xl border border-hairline bg-cream/70 px-6 py-5 text-center text-[0.82rem] leading-relaxed text-muted lg:mt-20">
            The farm operates as a registered broiler premises under the Punjab Poultry
            Production Act, 2016. For details of our routine practices on a specific
            requirement, please{" "}
            <a
              href="#contact"
              className="font-semibold text-deep underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-green"
            >
              get in touch
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
