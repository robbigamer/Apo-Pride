import Navbar from "../components/Navbar";

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

export default function CityOfficials() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="CITY OFFICIALS" />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-7xl px-4 py-8">
          <h1 className="font-merienda text-4xl font-semibold text-[#000] sm:text-5xl lg:text-[64px]">
            CITY OFFICIALS
          </h1>
        </div>

        <section className="bg-[#566859]">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:py-12 lg:grid-cols-[minmax(0,447px)_1fr]">
            <div className="mx-auto w-full max-w-md rounded-[30px] bg-[#8C8C8C] p-3">
              <img
                src="/assets/officials/mayor-roles-paulino.png"
                alt="Atty. Rolen C. Paulino Jr."
                className="h-auto w-full rounded-[30px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-inter text-3xl font-bold text-[#FFF] sm:text-4xl lg:text-5xl">
                ATTY. ROLEN C. PAULINO JR.
              </h2>
              <p className="font-merienda text-xl text-[#FFF] sm:text-2xl lg:text-3xl">
                A dedicated public servant and the current City Mayor of Olongapo,
                Zambales. He was elected to office on May 1, 2019, and has a strong
                background in law and leadership. He completed his pre-law studies
                at Ateneo de Manila University in 2011 before pursuing his law
                degree. With his legal expertise and leadership experience, Mayor
                Paulino is committed to promoting progress, development, and better
                public service in Olongapo City.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {councilors.map((councilor, index) => (
              <article
                key={`${councilor.src}-${index}`}
                className="flex flex-col"
              >
                <img
                  src={councilor.src}
                  alt={councilor.alt}
                  className="h-56 w-full object-cover sm:h-64"
                />
                <div
                  className={`flex min-h-[66px] items-center justify-center px-4 py-2 ${
                    councilor.barClass ?? "bg-[#D9D9D9]"
                  }`}
                >
                  {councilor.name ? (
                    <p className="text-center font-iosevkaCharonMono text-2xl font-light text-[#000]">
                      {councilor.name}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#566859]">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 py-8 sm:py-12 lg:grid-cols-[minmax(0,368px)_1fr]">
            <div className="mx-auto w-full max-w-md">
              <img
                src="/assets/officials/vice-mayor-placeholder.svg"
                alt="Kaye Ann Sioson Legaspi"
                className="h-auto w-full rounded-[30px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-inter text-3xl font-bold text-[#FFF] sm:text-4xl lg:text-5xl">
                KAYE ANN SIOSON LEGASPI
              </h2>
              <p className="font-merienda text-xl font-light text-[#FFF] sm:text-[32px]">
                Is the current Vice Mayor of Olongapo City, having assumed office
                on June 30, 2025. Before becoming vice mayor, she served as an
                Olongapo City Councilor from 2019 to 2025. She is known for her
                involvement in youth programs, public service, and chess advocacy.
                Her experience in public service continues to support her role in
                serving the people of Olongapo City.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
