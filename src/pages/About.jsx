import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30876.66383933264!2d120.2635566!3d14.8814412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396711b9c32216b%3A0xa080c3d36f2963a7!2sOlongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1715651500000!5m2!1sen!2sph";

const features = [
  {
    title: "TOURIST SPOTS",
    image: "/assets/spots/rizal-triangle.jpg",
    alt: "Rizal Triangle Park",
    bordered: true,
    to: "/tourist-spots",
  },
  {
    title: "OLONGAPO CITY MAP",
    map: true,
    alt: "Olongapo City Map",
    bordered: false,
  },
  {
    title: "FOOD SPOT",
    image: "/assets/food/public-market.jpg",
    alt: "Olongapo public market food spot",
    bordered: false,
    to: "/tourist-spots#food-spots",
  },
  {
    title: "VOLUNTARY WORKS",
    image: "/assets/voluntary/voluntary-works.jpg",
    alt: "Voluntary works in Olongapo City",
    bordered: false,
    to: "/voluntary-works",
  },
];

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="ABOUT" />

      <main
        className="flex flex-1 flex-col bg-[#233726] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(35, 55, 38, 0.8), rgba(35, 55, 38, 0.8)), url('/assets/spots/olongapo-landmarks.webp')",
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:gap-14 sm:py-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="font-inter text-4xl font-bold text-[#FFF] sm:text-5xl">
              ABOUT OLONGAPO CITY
            </h1>
            <p className="max-w-3xl font-iosevkaCharonMono text-2xl font-light text-[#FFE9E9] sm:text-[32px]">
              Discover the beauty, culture, and community that make Olongapo City
              unique.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature) => {
              const cardClass =
                "flex flex-col gap-4 rounded-[20px] bg-[#85B48C]/40 p-4 transition-colors sm:p-6";
              const content = (
                <>
                  <h2 className="font-merienda text-3xl font-bold text-[#FFF] sm:text-5xl">
                    {feature.title}
                  </h2>
                  {feature.map ? (
                    <iframe
                      src={mapEmbedUrl}
                      title="Olongapo City Map"
                      className="h-56 w-full rounded-[20px] border-0 sm:h-72"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <span className="overflow-hidden rounded-[20px]">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className={`h-56 w-full rounded-[20px] object-cover sm:h-72 ${
                          feature.to
                            ? "transition-transform duration-300 group-hover:scale-105"
                            : ""
                        } ${feature.bordered ? "border border-[#000]" : ""}`}
                      />
                    </span>
                  )}
                </>
              );

              if (!feature.to) {
                return (
                  <article key={feature.title} className={cardClass}>
                    {content}
                  </article>
                );
              }

              return (
                <Link
                  key={feature.title}
                  to={feature.to}
                  className={`${cardClass} group hover:bg-[#85B48C]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFF]`}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
