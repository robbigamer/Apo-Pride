import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import harborPointImg from "../img/harborpoint.webp";
import meetAndEatImg from "../img/meetandeat.jpg";
import smCityImg from "../img/SMcity.jpeg";

const spots = [
  {
    id: "rizal-triangle",
    title: "RIZAL TRIANGLE PARK",
    description:
      "Rizal Triangle is a park in Olongapo, Rizal Triangle is situated nearby to SM City Olongapo Central",
    image: "/assets/spots/rizal-triangle.jpg",
    alt: "Rizal Triangle Park",
    card: "bg-[#2A4C30]/90 ring-1 ring-[#8FFF53]/20",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#8FFF53] sm:text-5xl lg:text-[64px]",
    body: "font-ibarraRealNova text-xl text-[#8FFF53] sm:text-[32px]",
  },
  {
    id: "sm-city",
    title: "SM CITY OLONGAPO CENTRAL",
    description:
      "It is the second SM Supermall in Zambales and the second SM Supermall in Olongapo after SM City Olongapo Downtown",
    image: smCityImg,
    alt: "SM City Olongapo Central",
    card: "bg-[rgba(107,106,106,0.92)] ring-1 ring-white/20",
    heading:
      "font-iBMPlexSansThaiLooped text-4xl font-bold text-[#F8F8FF] sm:text-[55px]",
    body: "font-iBMPlexSansThaiLooped text-xl font-bold text-[#FFF] sm:text-[32px]",
  },
  {
    id: "harbor-point",
    title: "HARBOR POINT",
    description:
      "Located in Subic Bay Freeport Zone, Ayala Malls Harbor Point Cinemas offer a relaxing movie experience for locals and tourists alike.",
    image: harborPointImg,
    alt: "Harbor Point",
    card: "bg-[rgba(78,55,20,0.9)] ring-1 ring-[#FFBD53]/25",
    heading:
      "font-iMFELLFrenchCanonSC text-4xl text-[#FFBD53] sm:text-[55px]",
    body: "font-iMFELLFrenchCanonSC text-xl text-[#FFF1DB] sm:text-[32px]",
  },
  {
    id: "marikit-park",
    title: "MARIKIT PARK",
    description:
      "Marikit Park is situated at the center of Olongapo City, this park is ideal for the children and young at heart who simply wants to have a relaxation.",
    image: "/assets/spots/marikit-park.jpg",
    alt: "Marikit Park",
    card: "bg-[rgba(36,81,79,0.92)] ring-1 ring-[#DBDCFF]/25",
    heading:
      "font-inclusiveSans text-4xl font-bold text-[#DBDCFF] sm:text-[55px]",
    body: "font-inclusiveSans text-xl text-[#FFF] sm:text-[32px]",
  },
  {
    id: "food-spots",
    title: "WIMPY’S",
    description:
      "Located on Magsaysay Ave and Rizal Avenue in Olongapo City, famous pork chop dinner, Lomi, Clubhouse sandwich, Porkchop. American and Filipino dishes",
    image: "/assets/food/wimpys.jpg",
    alt: "Wimpy's Restaurant Olongapo",
    card: "bg-[rgba(107,54,36,0.92)] ring-1 ring-[#FFBD53]/25",
    heading: "font-lilitaOne text-4xl text-[#FFBD53] sm:text-[64px]",
    body: "font-lilitaOne text-xl text-[#FFBD53] sm:text-[32px]",
  },
  {
    id: "xtremely-xpresso",
    title: "XTREMELY XPRESSO",
    description:
      "Xpresso Café is a casual bistro style restaurant that serves breakfast, lunch and dinner The café is known to serve Italy's no. 1 coffee, Lavazza",
    image: "/assets/food/xtremely-xpresso.jpg",
    alt: "Xtremely Xpresso",
    card: "bg-[rgba(92,91,91,0.92)] ring-1 ring-white/20",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#F8F8FF] sm:text-[55px]",
    body: "font-iMFELLFrenchCanonSC text-xl text-[#FFF] sm:text-4xl",
  },
  {
    id: "sundae-brew",
    title: "SUNDAE BREW",
    description:
      "Located in rizal avenue and near columban, sundae brew offers a cheap alternative to coffee, milk tea and meals.",
    image: "/assets/food/screenshot-224606.png",
    alt: "Sundae Brew",
    card: "bg-[rgba(21,22,56,0.72)] ring-1 ring-white/20",
    heading: "text-4xl text-[#FFF] sm:text-[55px]",
    body: "font-iMFELLFrenchCanonSC text-xl text-[#FFF] sm:text-4xl",
  },
  {
    id: "meet-and-eat",
    title: "MEET AND EAT",
    description:
      "The Meet and Eat buffet in Olongapo offers a diverse selection of unlimited dishes perfect for food lovers.",
    image: meetAndEatImg,
    alt: "Meet and Eat",
    card: "bg-[rgba(221,210,90,0.7)] ring-1 ring-[#4A1A00]/20",
    heading:
      "font-merienda text-4xl font-bold text-[#4A1A00] sm:text-[64px]",
    body: "font-inter text-xl text-[#4A1A00] sm:text-2xl",
  },
];

const jumpLinks = [
  { label: "Rizal Triangle", id: "rizal-triangle" },
  { label: "SM City", id: "sm-city" },
  { label: "Harbor Point", id: "harbor-point" },
  { label: "Marikit Park", id: "marikit-park" },
  { label: "Wimpy’s", id: "food-spots" },
  { label: "Xtremely Xpresso", id: "xtremely-xpresso" },
  { label: "Sundae Brew", id: "sundae-brew" },
  { label: "Meet and Eat", id: "meet-and-eat" },
];

function SpotCard({ spot }) {
  return (
    <article
      id={spot.id}
      className={`group scroll-mt-40 overflow-hidden rounded-[28px] shadow-xl shadow-black/10 transition-transform duration-500 hover:-translate-y-1 ${spot.card}`}
    >
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <h2 className={`${spot.heading} leading-tight`}>{spot.title}</h2>
          <p className={`${spot.body} leading-relaxed`}>{spot.description}</p>
        </div>

        <div className="relative order-first h-56 overflow-hidden sm:h-64 md:order-none md:h-auto md:min-h-[300px]">
          <img
            src={spot.image}
            alt={spot.alt}
            className="img-zoom absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}

export default function OlongapoTouristSpotsDining() {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <div className="flex flex-1 flex-col bg-[#FFF]">
      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          title="TOURIST SPOTS IN OLONGAPO"
          description="From parks and malls to local food favorites — here is where the city comes alive."
          image="/assets/spots/olongapo-landmarks.webp"
        />

        <nav
          aria-label="Tourist spots"
          className="border-b border-[#233726]/10 bg-[#FFF]"
        >
          <div className="no-scrollbar mx-auto flex w-full max-w-7xl gap-2 overflow-x-auto px-4 py-3">
            {jumpLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`#${link.id}`, { replace: true });
                }}
                className="whitespace-nowrap rounded-full border border-[#233726]/10 bg-[#F7F4EA] px-4 py-1.5 font-inter text-xs font-semibold text-[#233726] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#349B43] hover:bg-[#349B43] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-14 sm:py-20">
          {spots.map((spot) => (
            <Reveal key={spot.id}>
              <SpotCard spot={spot} />
            </Reveal>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
