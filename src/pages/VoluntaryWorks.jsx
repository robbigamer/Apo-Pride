import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const works = [
  {
    title: "RED CROSS OLONGAPO CITY",
    image: "/assets/voluntary/red-cross.png",
    alt: "Philippine Red Cross Olongapo City",
    overlay: "bg-[rgba(157,64,64,0.71)]",
    card: "bg-[rgba(240,200,200,0.72)] ring-1 ring-[#590E0C]/15",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#590E0C] sm:text-5xl lg:text-[64px]",
    align: "left",
  },
  {
    title: "BRIGADA ESKWELA",
    image: "/assets/voluntary/brigada-eskwela.png",
    alt: "Brigada Eskwela",
    overlay: "bg-[rgba(62,71,135,0.69)]",
    card: "bg-[rgba(48,41,145,0.85)] ring-1 ring-white/20",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#FFF] sm:text-5xl lg:text-[64px]",
    align: "right",
  },
  {
    title: "COASTAL CLEANUP",
    image: "/assets/voluntary/coastal-cleanup.png",
    alt: "Coastal Cleanup",
    overlay: "bg-[rgba(157,214,227,0.56)]",
    card: "bg-[rgba(122,132,154,0.85)] ring-1 ring-[#2C363D]/20",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#2C363D] sm:text-5xl lg:text-[64px]",
    align: "left",
  },
];

export default function VoluntaryWorks() {
  return (
    <div className="flex flex-1 flex-col bg-[#FFF]">
      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          title="VOLUNTARY WORKS IN OLONGAPO"
          description="Community-led programs that bring people together and keep the spirit of bayanihan alive."
          image="/assets/voluntary/voluntary-works.jpg"
        />

        {works.map((work) => (
          <section
            key={work.title}
            className="group relative isolate overflow-hidden"
          >
            <div className="absolute inset-0 -z-20 overflow-hidden">
              <img
                src={work.image}
                alt={work.alt}
                className="img-zoom h-full w-full object-cover"
              />
            </div>
            <div className={`absolute inset-0 -z-10 ${work.overlay}`} />

            <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:py-24">
              <Reveal
                variant={work.align === "right" ? "left" : "right"}
                className={work.align === "right" ? "ml-auto" : ""}
              >
                <div
                  className={`flex max-w-2xl flex-col gap-4 rounded-[28px] p-6 shadow-2xl shadow-black/20 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8 ${work.card}`}
                >
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 font-inter text-[9px] font-bold uppercase tracking-[0.3em] text-white/90">
                    <span className="h-1 w-1 rounded-full bg-current" />
                    Community program
                  </span>
                  <h2 className={`${work.heading} leading-tight`}>
                    {work.title}
                  </h2>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
