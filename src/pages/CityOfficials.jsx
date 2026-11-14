import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import viceMayorImg from "../img/vicemayor.webp";

const councilors = [
  {
    src: "/assets/officials/angelito-baloy.png",
    alt: "Hon. Angelito Baloy",
    name: "Hon. Angelito Baloy",
  },
  {
    src: "/assets/officials/benjamin-cajudo.png",
    alt: "Hon. Benjamin Cajudo",
    name: "Hon. Benjamin Cajudo",
  },
  {
    src: "/assets/officials/cristabelle-paulino.webp",
    alt: "Hon. Cristabelle Paulino",
    name: "Hon. Cristabelle Paulino",
  },
  {
    src: "/assets/officials/ermelando-anonat.png",
    alt: "Hon. Ermelando Anonat",
    name: "Hon. Ermelando Anonat",
  },
  {
    src: "/assets/officials/eyrma-estrella.png",
    alt: "Hon. Eyrma M. Estrella",
    name: "Hon. Eyrma M. Estrella",
  },
  {
    src: "/assets/officials/jacinto-gardon.png",
    alt: "Hon. Jacinto Gardon",
    name: "Hon. Jacinto Gardon",
  },
  {
    src: "/assets/officials/jamiel-escalona.webp",
    alt: "Hon. Jamiel K. Escalona",
    name: "Hon. Jamiel K. Escalona",
  },
  {
    src: "/assets/officials/noel-atienza.jpg",
    alt: "Hon. Noel Y. Atienza",
    name: "Hon. Noel Y. Atienza",
  },
  {
    src: "/assets/officials/rodolfo-catologan.webp",
    alt: "Hon. Rodolfo Catologan",
    name: "Hon. Rodolfo Catologan",
  },
  {
    src: "/assets/officials/vicente-magsaysay.webp",
    alt: "Hon. Vicente Magsaysay",
    name: "Hon. Vicente Magsaysay",
  },
];

function RoleBadge({ children }) {
  return (
    <span className="inline-flex w-fit items-center font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-[#2B8038] sm:text-xs">
      {children}
    </span>
  );
}

function LeaderSection({ reverse = false, badge, name, bio, image, alt, maxWidth }) {
  return (
    <section className="relative overflow-hidden bg-[#233726] py-14 sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#349B43]/20 blur-3xl"
      />
      <div
        className={`relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal variant={reverse ? "left" : "right"} className="mx-auto w-full">
          <div
            className="group relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] bg-[#8C8C8C]/30 p-3 ring-1 ring-white/10"
            style={maxWidth ? { maxWidth } : undefined}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-[#349B43]/20 via-transparent to-[#DEF6AF]/10"
            />
            <img
              src={image}
              alt={alt}
              className="img-zoom relative mx-auto h-auto w-full rounded-[24px] object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <RoleBadge>{badge}</RoleBadge>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="font-inter text-3xl font-bold leading-tight text-[#FFF] sm:text-4xl lg:text-5xl">
              {name}
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="font-merienda text-lg leading-relaxed text-[#D3E0CF] sm:text-xl lg:text-2xl">
              {bio}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function CityOfficials() {
  return (
    <div className="flex flex-1 flex-col bg-[#FFF]">
      <main id="main-content" className="flex flex-1 flex-col">
        <PageHero
          title="CITY OFFICIALS"
          description="The public servants working for the people of Olongapo City."
        />

        <LeaderSection
          badge="City Mayor"
          name="ATTY. ROLEN C. PAULINO JR."
          bio="A dedicated public servant and the current City Mayor of Olongapo, Zambales. He was elected to office on May 1, 2019, and has a strong background in law and leadership. He completed his pre-law studies at Ateneo de Manila University in 2011 before pursuing his law degree. With his legal expertise and leadership experience, Mayor Paulino is committed to promoting progress, development, and better public service in Olongapo City."
          image="/assets/officials/mayor-roles-paulino.png"
          alt="Atty. Rolen C. Paulino Jr."
        />

        <section className="relative overflow-hidden bg-[#F7F4EA] py-14 sm:py-20">
          <div className="mx-auto w-full max-w-7xl px-4">
            <Reveal className="mb-10 flex flex-col gap-3 text-center sm:items-center">
              <p className="font-inter text-xs font-bold uppercase tracking-[0.35em] text-[#349B43]">
                The council
              </p>
              <h2 className="font-merienda text-3xl font-extrabold text-[#233726] sm:text-4xl">
                CITY COUNCILORS
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {councilors.map((councilor, index) => (
                <Reveal key={`${councilor.src}-${index}`} delay={(index % 3) * 90}>
                  <article className="group card-lift flex h-full flex-col overflow-hidden rounded-[24px] border border-[#233726]/10 bg-[#FFF] shadow-sm hover:shadow-xl hover:shadow-[#233726]/15">
                    <div className="relative overflow-hidden">
                      <img
                        src={councilor.src}
                        alt={councilor.alt}
                        className="img-zoom h-56 w-full object-cover sm:h-64"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#142116]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div
                      className={`flex min-h-[74px] flex-1 items-center justify-center px-4 py-3 ${
                        councilor.barClass ?? "bg-[#FFF]"
                      }`}
                    >
                      <p className="text-center font-iosevkaCharonMono text-xl font-light text-[#233726] sm:text-2xl">
                        {councilor.name}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <LeaderSection
          reverse
          badge="Vice Mayor"
          name="KAYE ANN SIOSON LEGASPI"
          bio="Is the current Vice Mayor of Olongapo City, having assumed office on June 30, 2025. Before becoming vice mayor, she served as an Olongapo City Councilor from 2019 to 2025. She is known for her involvement in youth programs, public service, and chess advocacy. Her experience in public service continues to support her role in serving the people of Olongapo City."
          image={viceMayorImg}
          alt="Kaye Ann Sioson Legaspi"
          maxWidth="368px"
        />
      </main>

      <Footer />
    </div>
  );
}
