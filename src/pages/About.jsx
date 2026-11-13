import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.66383933264!2d120.2635566!3d14.8814412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b9c32216b%3A0xa080c3d36f2963a7!2sOlongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1715651500000!5m2!1sen!2sph";

const features = [
  {
    title: "TOURIST SPOTS",
    image: "/assets/spots/rizal-triangle.jpg",
    alt: "Rizal Triangle Park",
    to: "/tourist-spots",
  },
  {
    title: "OLONGAPO CITY MAP",
    map: true,
    alt: "Olongapo City Map",
  },
  {
    title: "FOOD SPOT",
    image: "/assets/food/public-market.jpg",
    alt: "Olongapo public market food spot",
    to: "/tourist-spots#food-spots",
  },
  {
    title: "VOLUNTARY WORKS",
    image: "/assets/voluntary/voluntary-works.jpg",
    alt: "Voluntary works in Olongapo City",
    to: "/voluntary-works",
  },
];

function handleSpotlight(event) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  el.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="ABOUT" />

      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Get to know us"
          title="ABOUT OLONGAPO CITY"
          description="Discover the beauty, culture, and community that make Olongapo City unique."
          image="/assets/spots/olongapo-landmarks.webp"
        />

        <section className="relative overflow-hidden bg-[#F7F4EA] py-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#DEF6AF]/50 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <Reveal className="mb-10 flex flex-col gap-3">
              <p className="font-inter text-xs font-bold uppercase tracking-[0.35em] text-[#349B43]">
                Explore the city
              </p>
              <h2 className="font-merienda text-3xl font-extrabold text-[#233726] sm:text-4xl">
                PLACES, PEOPLE, AND PRIDE
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              {features.map((feature, index) => {
                const content = (
                  <>
                    <div className="flex items-start justify-between gap-4">
                      <h2
                        className={`font-merienda text-2xl font-extrabold text-[#233726] transition-colors sm:text-3xl ${
                          feature.to ? "group-hover:text-[#FFF]" : ""
                        }`}
                      >
                        {feature.title}
                      </h2>
                      {feature.to ? (
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#233726] text-[#DEF6AF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#349B43] group-hover:text-white">
                          <ArrowIcon />
                        </span>
                      ) : null}
                    </div>

                    {feature.map ? (
                      <div className="overflow-hidden rounded-[20px] ring-1 ring-[#233726]/10">
                        <iframe
                          src={mapEmbedUrl}
                          title="Olongapo City Map"
                          className="h-56 w-full border-0 sm:h-72"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-[20px]">
                        <img
                          src={feature.image}
                          alt={feature.alt}
                          className="img-zoom h-56 w-full object-cover sm:h-72"
                        />
                      </div>
                    )}
                  </>
                );

                const cardClass =
                  "group flex flex-col gap-5 rounded-[28px] border border-[#233726]/10 bg-[#FFF] p-4 shadow-sm transition-colors sm:p-6";

                if (!feature.to) {
                  return (
                    <Reveal key={feature.title} delay={index * 100}>
                      <article className={`${cardClass} h-full`}>{content}</article>
                    </Reveal>
                  );
                }

                return (
                  <Reveal key={feature.title} delay={index * 100}>
                    <Link
                      to={feature.to}
                      onPointerMove={handleSpotlight}
                      className={`${cardClass} spotlight card-lift h-full hover:border-[#233726] hover:bg-[#233726] hover:shadow-2xl hover:shadow-[#233726]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#349B43]`}
                    >
                      {content}
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
