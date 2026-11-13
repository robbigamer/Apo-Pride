import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.66383933264!2d120.2635566!3d14.8814412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b9c32216b%3A0xa080c3d36f2963a7!2sOlongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1715651500000!5m2!1sen!2sph";

export default function AboutOlongapoCityMap() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="ABOUT" />

      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Find your way"
          title="OLONGAPO CITY MAP"
          description="Explore the city and plan your next stop around Olongapo, Zambales."
        />

        <section className="relative flex-1 overflow-hidden bg-[#F7F4EA] py-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#DEF6AF]/50 blur-3xl"
          />
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1.6fr_1fr]">
            <Reveal variant="zoom">
              <div className="group overflow-hidden rounded-[28px] border border-[#233726]/10 bg-[#FFF] p-2 shadow-2xl shadow-[#233726]/15">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[22px]">
                  <iframe
                    src={mapEmbedUrl}
                    title="Olongapo City Map"
                    className="h-full w-full border-0 transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>

            <div className="flex flex-col gap-6">
              <Reveal variant="right">
                <p className="font-inter text-xs font-bold uppercase tracking-[0.35em] text-[#349B43]">
                  Location
                </p>
              </Reveal>
              <Reveal variant="right" delay={90}>
                <h2 className="font-merienda text-3xl font-extrabold leading-tight text-[#233726] sm:text-4xl">
                  OLONGAPO, ZAMBALES
                </h2>
              </Reveal>
              <Reveal variant="right" delay={170}>
                <p className="font-inter text-base leading-relaxed text-[#5B6B59] sm:text-lg">
                  A highly urbanized city on the west coast of Luzon, bordering
                  the Subic Bay Freeport Zone. Use the map to find your way
                  around the city.
                </p>
              </Reveal>
              <Reveal variant="right" delay={250}>
                <a
                  href="https://www.google.com/maps/search/Olongapo,+Zambales"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine group inline-flex w-fit items-center gap-3 rounded-full bg-[#233726] px-7 py-3 font-inter text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#349B43] sm:text-base"
                >
                  OPEN IN GOOGLE MAPS
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
