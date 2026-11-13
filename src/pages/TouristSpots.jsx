import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const spots = [
  {
    id: "rizal-triangle",
    title: "RIZAL TRIANGLE PARK",
    description:
      "Rizal Triangle is a park in Olongapo, Rizal Triangle is situated nearby to SM City Olongapo Central",
    image: "/assets/spots/rizal-triangle.jpg",
    alt: "Rizal Triangle Park",
    overlay: "bg-[#142116]/45",
    card: "bg-[#2A4C30]/90 ring-1 ring-[#8FFF53]/20",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#8FFF53] sm:text-5xl lg:text-[64px]",
    body: "font-ibarraRealNova text-xl text-[#8FFF53] sm:text-[32px]",
    align: "left",
  },
  {
    id: "sm-city",
    title: "SM CITY OLONGAPO CENTRAL",
    description:
      "It is the second SM Supermall in Zambales and the second SM Supermall in Olongapo after SM City Olongapo Downtown",
    image: "/assets/food/screenshot-224606.png",
    alt: "SM City Olongapo Central",
    overlay: "bg-[#ADADAD]/70",
    card: "bg-[rgba(124,123,123,0.86)] ring-1 ring-white/20",
    heading:
      "font-iBMPlexSansThaiLooped text-4xl font-bold text-[#F8F8FF] sm:text-[55px]",
    body: "font-iBMPlexSansThaiLooped text-xl font-bold text-[#FFF] sm:text-[32px]",
    align: "right",
  },
  {
    id: "harbor-point",
    title: "HARBOR POINT",
    description:
      "Located in Subic Bay Freeport Zone, Ayala Malls Harbor Point Cinemas offer a relaxing movie experience for locals and tourists alike.",
    image: "/assets/food/unnamed.webp",
    alt: "Harbor Point",
    overlay: "bg-[rgba(145,93,61,0.42)]",
    card: "bg-[rgba(99,71,25,0.72)] ring-1 ring-[#FFBD53]/25",
    heading:
      "font-iMFELLFrenchCanonSC text-4xl text-[#FFBD53] sm:text-[55px]",
    body: "font-iMFELLFrenchCanonSC text-xl text-[#FFF1DB] sm:text-[32px]",
    align: "left",
  },
  {
    id: "marikit-park",
    title: "MARIKIT PARK",
    description:
      "Marikit Park is situated at the center of Olongapo City, this park is ideal for the children and young at heart who simply wants to have a relaxation.",
    image: "/assets/spots/marikit-park.jpg",
    alt: "Marikit Park",
    overlay: "bg-[rgba(124,190,223,0.5)]",
    card: "bg-[rgba(61,113,110,0.6)] ring-1 ring-[#DBDCFF]/25",
    heading:
      "font-inclusiveSans text-4xl font-bold text-[#DBDCFF] sm:text-[55px]",
    body: "font-inclusiveSans text-xl text-[#FFF] sm:text-[32px]",
    align: "right",
  },
  {
    id: "food-spots",
    title: "WIMPY’S",
    description:
      "Located on Magsaysay Ave and Rizal Avenue in Olongapo City, famous pork chop dinner, Lomi, Clubhouse sandwich, Porkchop. American and Filipino dishes",
    image: "/assets/food/wimpys.jpg",
    alt: "Wimpy's Restaurant Olongapo",
    overlay: "bg-[#695041]/60",
    card: "bg-[rgba(135,76,54,0.85)] ring-1 ring-[#FFBD53]/25",
    heading: "font-lilitaOne text-4xl text-[#FFBD53] sm:text-[64px]",
    body: "font-lilitaOne text-xl text-[#FFBD53] sm:text-[32px]",
    align: "left",
    food: true,
  },
  {
    id: "xtremely-xpresso",
    title: "XTREMELY XPRESSO",
    description:
      "Xpresso Café is a casual bistro style restaurant that serves breakfast, lunch and dinner The café is known to serve Italy's no. 1 coffee, Lavazza",
    image: "/assets/food/xtremely-xpresso.jpg",
    alt: "Xtremely Xpresso",
    overlay: "bg-[#ADADAD]/30",
    card: "bg-[rgba(124,123,123,0.78)] ring-1 ring-white/20",
    heading:
      "font-ibarraRealNova text-4xl font-bold text-[#F8F8FF] sm:text-[55px]",
    body: "font-iMFELLFrenchCanonSC text-xl text-[#FFF] sm:text-4xl",
    align: "right",
    food: true,
  },
  {
    id: "sundae-brew",
    title: "SUNDAE BREW",
    description:
      "Located in rizal avenue and near columban, sundae brew offers a cheap alternative to coffee, milk tea and meals.",
    image: "/assets/food/breadtalk.jpg",
    alt: "Sundae Brew",
    overlay: "bg-[rgba(103,112,150,0.51)]",
    card: "bg-[rgba(21,22,56,0.72)] ring-1 ring-white/20",
    heading: "text-4xl text-[#FFF] sm:text-[55px]",
    body: "font-iMFELLFrenchCanonSC text-xl text-[#FFF] sm:text-4xl",
    align: "left",
    food: true,
  },
  {
    id: "meet-and-eat",
    title: "MEET AND EAT",
    description:
      "The Meet and Eat buffet in Olongapo offers a diverse selection of unlimited dishes perfect for food lovers.",
    image: "/assets/food/market-food-spot.jpg",
    alt: "Meet and Eat",
    overlay: "bg-[rgba(107,94,59,0.37)]",
    card: "bg-[rgba(221,210,90,0.7)] ring-1 ring-[#4A1A00]/20",
    heading:
      "font-grandstander text-4xl font-bold text-[#4A1A00] sm:text-[64px]",
    body: "font-grandstander text-xl text-[#4A1A00] sm:text-4xl",
    align: "right",
    food: true,
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

function SpotSection({ spot }) {
  return (
    <section
      id={spot.id}
      className="group relative isolate scroll-mt-40 overflow-hidden"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={spot.image}
          alt={spot.alt}
          className="img-zoom h-full w-full object-cover"
        />
      </div>
      <div className={`absolute inset-0 -z-10 ${spot.overlay}`} />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:py-24">
        <Reveal
          variant={spot.align === "right" ? "left" : "right"}
          className={spot.align === "right" ? "ml-auto" : ""}
        >
          <div
            className={`flex max-w-2xl flex-col gap-4 rounded-[28px] p-6 shadow-2xl shadow-black/20 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 sm:p-8 ${spot.card}`}
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-inter text-[9px] font-bold uppercase tracking-[0.3em] text-white/80">
              {spot.food ? "Food spot" : "Tourist spot"}
            </span>
            <h2 className={`${spot.heading} leading-tight`}>{spot.title}</h2>
            <p className={`${spot.body} leading-relaxed`}>{spot.description}</p>
          </div>
        </Reveal>
      </div>
    </section>
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
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="ABOUT" />

      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          eyebrow="Discover Olongapo"
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

        {spots.map((spot) => (
          <SpotSection key={spot.id} spot={spot} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
