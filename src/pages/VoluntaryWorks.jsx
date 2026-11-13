import Navbar from "../components/Navbar";

export default function VoluntaryWorks() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="ABOUT" />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-7xl px-4 py-8">
          <p className="font-ibarraRealNova text-2xl text-[#000] sm:text-4xl">
            BRIGADA ESKWELA
          </p>
          <h1 className="font-inter text-3xl font-bold text-[#000] sm:text-4xl lg:text-[40px]">
            VOLUNTARY WORKS IN OLONGAPO
          </h1>
        </div>

        <section className="relative overflow-hidden">
          <img
            src="/assets/voluntary/red-cross.png"
            alt="Philippine Red Cross Olongapo City"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(157,64,64,0.71)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="max-w-2xl bg-[rgba(240,200,200,0.58)] p-6 sm:p-8">
              <h2 className="font-ibarraRealNova text-4xl font-bold text-[#590E0C] sm:text-5xl lg:text-[64px]">
                RED CROSS OLONGAPO CITY
              </h2>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <img
            src="/assets/voluntary/brigada-eskwela.png"
            alt="Brigada Eskwela"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(62,71,135,0.69)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="ml-auto max-w-2xl bg-[rgba(48,41,145,0.80)] p-6 sm:p-8">
              <h2 className="font-ibarraRealNova text-4xl font-bold text-[#FFF] sm:text-5xl lg:text-[64px]">
                BRIGADA ESKWELA
              </h2>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#D9D9D9]">
          <img
            src="/assets/voluntary/coastal-cleanup.png"
            alt="Coastal Cleanup"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(157,214,227,0.56)]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 py-12">
            <div className="max-w-2xl bg-[rgba(122,132,154,0.81)] p-6 sm:p-8">
              <h2 className="font-ibarraRealNova text-4xl font-bold text-[#2C363D] sm:text-5xl lg:text-[64px]">
                COASTAL CLEANUP
              </h2>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
