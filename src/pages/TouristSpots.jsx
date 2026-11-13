import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function OlongapoTouristSpotsDining() {
  const { hash } = useLocation();

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

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-7xl px-4 py-8">
          <h1 className="font-merienda text-3xl font-bold text-[#000] sm:text-4xl lg:text-[40px]">
            TOURIST SPOTS IN OLONGAPO
          </h1>
        </div>

        <section className="relative overflow-hidden bg-[#233726]">
          <img
            src="/assets/spots/rizal-triangle.jpg"
            alt="Rizal Triangle Park"
            className="absolute inset-0 h-full w-full border-[15px] border-[rgba(255,255,255,0.54)] object-cover"
          />
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-2 lg:items-center">
            <div className="max-w-2xl bg-[#2A4C30] p-6 sm:p-8">
              <div className="mb-4 h-2 w-24 rounded-[30px] bg-[#DEF6AF]" />
              <h2 className="font-ibarraRealNova text-4xl font-bold text-[#8FFF53] sm:text-5xl lg:text-[64px]">
                RIZAL TRIANGLE PARK
              </h2>
              <p className="mt-4 font-ibarraRealNova text-xl text-[#8FFF53] sm:text-[32px]">
                Rizal Triangle is a park in Olongapo, Rizal Triangle is situated
                nearby to SM City Olongapo Central
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ADADAD]">
          <img
            src="/assets/food/screenshot-224606.png"
            alt="SM City Olongapo Central"
            className="absolute inset-0 h-full w-full object-cover opacity-[72%]"
          />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="ml-auto max-w-2xl bg-[rgba(124,123,123,0.86)] p-6 sm:p-8">
              <h2 className="font-iBMPlexSansThaiLooped text-4xl font-bold text-[#F8F8FF] sm:text-[55px]">
                SM CITY OLONGAPO CENTRAL
              </h2>
              <p className="mt-4 font-iBMPlexSansThaiLooped text-xl font-bold text-[#FFF] sm:text-[32px]">
                It is the second SM Supermall in Zambales and the second SM
                Supermall in Olongapo after SM City Olongapo Downtown
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img
            src="/assets/food/unnamed.webp"
            alt="Harbor Point"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-[rgba(145,93,61,0.42)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="max-w-2xl bg-[rgba(99,71,25,0.52)] p-6 sm:p-8">
              <h2 className="font-iMFELLFrenchCanonSC text-4xl text-[#FFBD53] sm:text-[55px]">
                HARBOR POINT
              </h2>
              <p className="mt-4 font-iMFELLFrenchCanonSC text-xl text-[#FFF1DB] sm:text-[32px]">
                Located in Subic Bay Freeport Zone, Ayala Malls Harbor Point
                Cinemas offer a relaxing movie experience for locals and tourists
                alike.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[rgba(124,190,223,0.58)]">
          <img
            src="/assets/spots/marikit-park.jpg"
            alt="Marikit Park"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(124,190,223,0.58)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="ml-auto max-w-2xl bg-[rgba(61,113,110,0.35)] p-6 sm:p-8">
              <h2 className="font-inclusiveSans text-4xl font-bold text-[#DBDCFF] sm:text-[55px]">
                MARIKIT PARK
              </h2>
              <p className="mt-4 font-inclusiveSans text-xl text-[#FFF] sm:text-[32px]">
                Marikit Park is situated at the center of Olongapo City, this park
                is ideal for the children and young at heart who simply wants to
                have a relaxation.
              </p>
            </div>
          </div>
        </section>

        <section
          id="food-spots"
          className="relative overflow-hidden bg-[#695041]/60"
        >
          <img
            src="/assets/food/wimpys.jpg"
            alt="Wimpy's Restaurant Olongapo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#695041]/60" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="max-w-2xl bg-[rgba(135,76,54,0.81)] p-6 sm:p-8">
              <h2 className="font-lilitaOne text-4xl text-[#FFBD53] sm:text-[64px]">
                WIMPY’S
              </h2>
              <p className="mt-4 font-lilitaOne text-xl text-[#FFBD53] sm:text-[32px]">
                Located on Magsaysay Ave and Rizal Avenue in Olongapo City, famous
                pork chop dinner, Lomi, Clubhouse sandwich, Porkchop. American and
                Filipino dishes
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ADADAD]">
          <img
            src="/assets/food/xtremely-xpresso.jpg"
            alt="Xtremely Xpresso"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="ml-auto max-w-2xl bg-[rgba(124,123,123,0.70)] p-6 sm:p-8">
              <h2 className="font-ibarraRealNova text-4xl font-bold text-[#F8F8FF] sm:text-[55px]">
                XTREMELY XPRESSO
              </h2>
              <p className="mt-4 font-iMFELLFrenchCanonSC text-xl text-[#FFF] sm:text-4xl">
                Xpresso Café is a casual bistro style restaurant that serves
                breakfast, lunch and dinner The café is known to serve Italy's no.
                1 coffee, Lavazza
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#D9D9D9]">
          <img
            src="/assets/food/breadtalk.jpg"
            alt="Sundae Brew"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(103,112,150,0.51)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="max-w-2xl bg-[rgba(21,22,56,0.59)] p-6 sm:p-8">
              <h2 className="text-4xl text-[#FFF] sm:text-[55px]">SUNDAE BREW</h2>
              <p className="mt-4 font-iMFELLFrenchCanonSC text-xl text-[#FFF] sm:text-4xl">
                Located in rizal avenue and near columban, sundae brew offers a
                cheap alternative to coffee, milk tea and meals.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[rgba(107,94,59,0.37)]">
          <img
            src="/assets/food/market-food-spot.jpg"
            alt="Meet and Eat"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(107,94,59,0.37)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="ml-auto max-w-2xl bg-[rgba(221,210,90,0.45)] p-6 sm:p-8">
              <h2 className="font-grandstander text-4xl font-bold text-[#4A1A00] sm:text-[64px]">
                MEET AND EAT
              </h2>
              <p className="mt-4 font-grandstander text-xl text-[#4A1A00] sm:text-4xl">
                The Meet and Eat buffet in Olongapo offers a diverse selection of
                unlimited dishes perfect for food lovers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
