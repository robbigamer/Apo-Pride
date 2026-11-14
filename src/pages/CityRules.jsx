import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const rules = [
  {
    src: "/assets/rules/no-littering.svg",
    alt: "No Littering Icon",
    title: "NO LITTERING",
  },
  {
    src: "/assets/rules/no-karaoke.svg",
    alt: "No Karaoke Icon",
    title: "NO KARAOKE AFTER 10 PM",
  },
  {
    src: "/assets/rules/segregate-trash.svg",
    alt: "Segregate Trash Icon",
    title: "SEGREGATE YOUR TRASH",
  },
  {
    src: "/assets/rules/no-smoking.svg",
    alt: "Designated Smoking Icon",
    title: "ONLY SMOKE IN DESIGNATED AREAS",
  },
  {
    src: "/assets/rules/no-drinking.svg",
    alt: "No Public Drinking Icon",
    title: "NO DRINKING LIQUOR IN THE STREETS",
  },
];

export default function CityRules() {
  return (
    <div className="flex flex-1 flex-col bg-[#FFF]">
      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          title="OUR CITY RULES"
          description="Simple ordinances that keep Olongapo clean, safe, and welcoming for everyone."
          align="center"
        />

        <section className="relative flex-1 overflow-hidden bg-[#F7F4EA] py-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[#DEF6AF]/50 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rules.map((rule, index) => (
                <Reveal key={rule.title} delay={(index % 3) * 100}>
                  <article className="group card-lift relative flex h-full flex-col items-center gap-6 overflow-hidden rounded-[28px] border border-[#233726]/10 bg-[#FFF] p-7 text-center shadow-sm hover:border-[#349B43]/40 hover:shadow-2xl hover:shadow-[#233726]/15 sm:p-8">
                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-4 font-inter text-4xl font-black text-[#233726]/5 transition-colors duration-500 group-hover:text-[#349B43]/15 sm:text-5xl"
                    >
                      0{index + 1}
                    </span>

                    <span className="grid h-24 w-24 place-items-center rounded-full bg-[#F7F4EA] ring-1 ring-[#233726]/5 transition-all duration-500 group-hover:-rotate-3 group-hover:bg-[#DEF6AF]/60 sm:h-28 sm:w-28">
                      <img
                        src={rule.src}
                        alt={rule.alt}
                        className="h-16 w-16 object-contain sm:h-20 sm:w-20"
                      />
                    </span>

                    <h2 className="font-merienda text-xl font-bold text-[#233726] sm:text-2xl">
                      {rule.title}
                    </h2>

                    <span
                      aria-hidden="true"
                      className="mt-auto h-1 w-10 rounded-full bg-[#349B43]/30 transition-all duration-500 group-hover:w-16 group-hover:bg-[#349B43]"
                    />
                  </article>
                </Reveal>
              ))}

              <Reveal delay={200}>
                <article className="flex h-full flex-col justify-center gap-4 rounded-[28px] border border-[#349B43]/30 bg-[#233726] p-8 text-center">
                  <p className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-[#DEF6AF]">
                    Remember
                  </p>
                  <p className="font-merienda text-2xl font-extrabold leading-snug text-[#FFF]">
                    Discipline starts with every citizen.
                  </p>
                  <p className="font-inter text-sm leading-relaxed text-[#B9CBB7]">
                    Following these rules keeps our streets, parks, and
                    neighborhoods safe for everyone.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-[#233726] py-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(52,155,67,0.35),transparent_70%)]"
          />
          <Reveal className="relative mx-auto w-full max-w-7xl px-4 text-center">
            <p className="font-merienda text-2xl font-bold text-[#FFF] sm:text-3xl lg:text-4xl">
              BAWAL ANG TAMAD SA OLONGAPO
            </p>
          </Reveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
