import Image from "next/image";
import Reveal from "./Reveal";
import Curve from "./Curve";
import { site } from "@/lib/site";

/** Decorative leaf, drifting slowly in the background. */
function Leaf({ className, delay }: { className: string; delay: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`anim-drift absolute ${className}`}
      style={{ animationDelay: delay }}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 36C2 22 9 10 22 5c8-3 14-3 14-3s0 8-3 15C28 30 17 37 4 36Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Sustainability() {
  return (
    <section id="sustainability" className="relative isolate overflow-hidden bg-forest">
      <Curve fill="#ffffff" flip gold={false} height="h-[60px] sm:h-[90px]" />

      {/* the green landscape from the banner, held far back */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/banner1.png"
          alt=""
          fill
          sizes="100vw"
          quality={70}
          className="scale-110 object-cover object-[35%_58%] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/92 to-deep" />
      </div>

      {/* drifting leaves */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Leaf className="top-[14%] left-[6%] h-10 w-10 text-lime/15" delay="0s" />
        <Leaf className="top-[62%] left-[14%] h-6 w-6 text-lime/12 rotate-45" delay="2.4s" />
        <Leaf className="top-[26%] right-[10%] h-14 w-14 text-lime/10 -rotate-12" delay="1.2s" />
        <Leaf className="bottom-[16%] right-[22%] h-8 w-8 text-lime/12 rotate-[110deg]" delay="3.6s" />
      </div>

      <div className="shell relative py-20 text-center lg:py-28">
        <Reveal direction="up">
          <span className="eyebrow eyebrow-light justify-center">Sustainability</span>
        </Reveal>

        <Reveal direction="scale" delay={120}>
          <p className="mt-8 font-script text-4xl leading-[1.15] text-lime sm:text-5xl lg:text-6xl">
            {site.script}
          </p>
        </Reveal>

        <Reveal direction="up" delay={240}>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-2xl leading-[1.2] font-extrabold text-white sm:text-3xl lg:text-[2.6rem]">
            What we do responsibly today decides what this land, and this business,
            can still give tomorrow.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={330}>
          <p className="text-pretty mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70">
            Sustainable growth is not a slogan on a banner for us - it is the reason
            we invest in proper housing, careful feeding and strict biosecurity rather
            than shortcuts. A farm run well stays productive for the next generation
            that works it.
          </p>
        </Reveal>

        <Reveal direction="up" delay={420}>
          <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {["Responsible farming", "Long-term thinking", "Care for the flock", site.motto].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-[0.78rem] font-semibold text-white/85 backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-lime/40 hover:bg-white/10"
                >
                  {chip}
                </span>
              ),
            )}
          </div>
        </Reveal>

        <Reveal direction="up" delay={510}>
          <a
            href="#contact"
            className="group mt-12 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-deep shadow-xl shadow-black/25 transition-all duration-500 hover:-translate-y-0.5 hover:bg-lime hover:text-deep"
            style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
          >
            Work with our farm
            <svg
              viewBox="0 0 20 20"
              className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 10h11M11 6l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Reveal>
      </div>

      <Curve fill="#f6f8f3" gold={false} height="h-[60px] sm:h-[90px]" />
    </section>
  );
}
