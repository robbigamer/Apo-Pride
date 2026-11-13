import Navbar from "../components/Navbar";

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
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="CITY RULES" />

      <main className="flex flex-1 flex-col">
        {/* Header Section */}
        <section className="bg-[#566859] py-8 sm:py-12">
          <div className="mx-auto w-full max-w-7xl px-4 text-center">
            <h1 className="font-merienda text-4xl font-semibold text-[#FFF] sm:text-5xl lg:text-[64px]">
              OUR CITY RULES
            </h1>
          </div>
        </section>

        {/* Rules Grid */}
        <section className="flex-1 bg-[rgba(1,1,1,0.05)] py-8 sm:py-12">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rules.map((rule) => (
                <article
                  key={rule.title}
                  className="flex flex-col items-center gap-6 rounded-[20px] bg-[#FFF] p-6 text-center shadow-sm sm:p-8"
                >
                  <img
                    src={rule.src}
                    alt={rule.alt}
                    className="h-24 w-24 object-contain sm:h-28 sm:w-28"
                  />
                  <h2 className="font-merienda text-xl font-bold text-[#233726] sm:text-2xl">
                    {rule.title}
                  </h2>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Banner */}
        <section className="bg-[#233726] py-8 sm:py-10">
          <div className="mx-auto w-full max-w-7xl px-4 text-center">
            <p className="font-merienda text-2xl font-bold text-[#FFF] sm:text-3xl lg:text-4xl">
              BAWAL ANG TAMAD SA OLONGAPO
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
