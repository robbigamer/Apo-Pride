import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

const contacts = [
  { title: "City Hall Olongapo", numbers: ["222-2565", "611-4800"] },
  { title: "DRRMO / OLONGAPO Rescue", numbers: ["0998-593-7446"] },
  { title: "Fire & Rescue", numbers: ["223-1415"] },
  { title: "Disaster Management Office", numbers: ["0998-536-7121"] },
  { title: "Philippine RedCross", numbers: ["0917-889-2783", "222-2181"] },
  { title: "OCPO", numbers: ["0919-245-0666"] },
];

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="CONTACT US" />

      <main id="main-content" className="relative flex flex-1 flex-col overflow-hidden">
        <div className="relative isolate overflow-hidden bg-[#3C1515]">
          <img
            src="/assets/spots/olongapo-city.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2A0E0E]/95 via-[#3C1515]/85 to-[#5A2320]/90" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#E7A0A0]/20 blur-3xl"
          />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-14 sm:py-20">
            <Reveal>
              <p className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-inter text-[10px] font-semibold uppercase tracking-[0.35em] text-[#FFE9E9] backdrop-blur-md sm:text-[11px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#FFBD53] opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-[#FFBD53]" />
                </span>
                Always reachable
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-inter text-4xl font-bold leading-tight text-[#FFF] sm:text-5xl lg:text-6xl">
                Emergnecy Contacts
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-3xl font-iosevkaCharonMono text-lg font-light leading-relaxed text-[#FFE9E9] sm:text-2xl lg:text-[32px]">
                Here are the important officess and hotlines in Olongapo City
                that you may contact for assistance and inquiries.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative flex-1 bg-[#3C1515]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-12 sm:py-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact, index) => (
                <Reveal key={contact.title} delay={(index % 3) * 90}>
                  <div className="group card-lift flex h-full min-h-[220px] flex-col gap-5 rounded-[32px] border border-white/10 bg-[rgba(121,72,70,0.82)] p-7 shadow-lg shadow-black/20 backdrop-blur-sm hover:border-[#FFBD53]/40 hover:bg-[rgba(140,84,82,0.92)] sm:p-8">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#FFE9E9]/10 text-[#FFE9E9] transition-colors duration-300 group-hover:bg-[#FFBD53] group-hover:text-[#3C1515]">
                      <PhoneIcon />
                    </span>
                    <h2 className="font-iosevkaCharonMono text-xl font-light leading-snug text-[#FFF] sm:text-2xl lg:text-[28px]">
                      {contact.title}
                    </h2>
                    <div className="mt-auto flex flex-col gap-1.5">
                      {contact.numbers.map((number) => (
                        <a
                          key={number}
                          href={`tel:${number.replace(/[^0-9+]/g, "")}`}
                          className="group/num inline-flex w-fit items-center gap-2 font-iosevkaCharonMono text-lg font-light text-[#FFE9E9] transition-colors hover:text-[#FFBD53] sm:text-xl"
                        >
                          <span className="h-px w-0 bg-[#FFBD53] transition-all duration-300 group-hover/num:w-4" />
                          {number}
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[rgba(50,81,46,0.93)] p-7 sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#DEF6AF]/10 blur-3xl"
                />
                <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                  <div className="flex flex-col gap-2">
                    <h2 className="font-inter text-2xl font-semibold text-[#FFF] sm:text-[32px]">
                      Need Imediate Help?
                    </h2>
                    <p className="max-w-2xl font-iosevkaCharonMono text-lg font-light leading-relaxed text-[#DCE8D8] sm:text-xl">
                      for life threatening emergencies, please call 911 or visit
                      the nearest emergency center.
                    </p>
                  </div>
                  <a
                    href="tel:911"
                    className="btn-shine group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#FFBD53] px-7 py-3.5 font-inter text-base font-bold text-[#3C1515] shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF]"
                  >
                    CALL 911
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
