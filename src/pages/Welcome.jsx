import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import birdviewImg from "../img/birdview.jpg";
import cityhallImg from "../img/cityhall.jpg";
import jeepImg from "../img/jeep.jpg";
import rotondaImg from "../img/rotonda.jpg";
import ulongapoImg from "../img/ulongapo.jpg";

const quickLinks = [
  {
    title: "CITY OFFICIALS",
    text: "Meet the people leading Olongapo City and the team behind its public service.",
    to: "/officials",
  },
  {
    title: "CITY RULES",
    text: "Know the ordinances that keep our streets clean, safe, and orderly.",
    to: "/rules",
  },
  {
    title: "CONTACT US",
    text: "Reach the right office or hotline when you need help, any time of day.",
    to: "/contact",
  },
];

const marqueeWords = [
  "OLONGAPO CITY",
  "APO'S PRIDE",
  "CITY OF BEAUTY AND PRIDE",
  "SUBIC BAY FREEPORT",
];

export default function Welcome() {
  const heroImageRef = useRef(null);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const offset = Math.min(window.scrollY, 900);
        if (heroImageRef.current) {
          heroImageRef.current.style.transform = `translate3d(0, ${offset * 0.16}px, 0) scale(1.08)`;
        }
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-[#FFF]">
      <main id="main-content" className="flex flex-1 flex-col">
        {/* Hero */}
        <section className="relative isolate flex min-h-[calc(88svh/0.85)] items-center overflow-hidden bg-[#142116]">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              ref={heroImageRef}
              src={birdviewImg}
              alt="Aerial view of Olongapo City"
              className="h-[112%] w-full object-cover opacity-80 will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0C170F]/85 via-[#142116]/70 to-[#142116]" />
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[6%] top-[20%] h-24 w-24 animate-float rounded-full border border-[#DEF6AF]/25"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[8%] top-[26%] h-44 w-44 animate-float-slow rounded-full bg-[#349B43]/20 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[18%] left-[16%] h-16 w-16 animate-float-slow rounded-full border border-[#FFBD53]/30"
          />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-24 text-center sm:py-28">
            <h1 className="font-inter font-black text-white">
              <span
                className="hero-word block text-lg tracking-[0.5em] text-[#DEF6AF] sm:text-2xl lg:text-3xl"
                style={{ animationDelay: "180ms" }}
              >
                WELCOME TO
              </span>
              <span className="mt-3 block text-5xl leading-[0.95] sm:text-7xl lg:text-[104px]">
                <span
                  className="hero-word"
                  style={{ animationDelay: "300ms" }}
                >
                  OLONGAPO
                </span>{" "}
                <span
                  className="hero-word text-gradient"
                  style={{ animationDelay: "440ms" }}
                >
                  CITY
                </span>
              </span>
            </h1>

            <p
              className="hero-word max-w-2xl font-merienda text-base text-[#DCE8D8] sm:text-xl lg:text-2xl"
              style={{ animationDelay: "560ms" }}
            >
              A city of beauty and pride — discover its people, its places, and
              the community that keeps it moving.
            </p>

            <div
              className="hero-cta flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5"
              style={{ animationDelay: "680ms" }}
            >
              <Link
                to="/tourist-spots"
                className="btn-shine group inline-flex min-w-[210px] items-center justify-center gap-3 rounded-full border border-transparent bg-[#349B43] px-8 py-3.5 font-inter text-base font-bold text-white shadow-lg shadow-[#349B43]/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#2B8038] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DEF6AF] sm:w-[240px] sm:text-lg"
              >
                EXPLORE NOW
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
              </Link>

              <Link
                to="/about"
                className="group inline-flex min-w-[210px] items-center justify-center gap-3 rounded-full border border-white/30 bg-white/5 px-8 py-3.5 font-inter text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#DEF6AF]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DEF6AF] sm:w-[240px] sm:text-lg"
              >
                LEARN MORE
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
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute bottom-7 left-1/2 -translate-x-1/2 text-[#DEF6AF]"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path
                d="M12 4v15M5 13l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* Marquee ribbon */}
        <div className="marquee overflow-hidden border-y border-[#233726]/10 bg-[#DEF6AF] py-3">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {marqueeWords.map((word) => (
                  <span
                    key={`${copy}-${word}`}
                    className="flex items-center font-inter text-xs font-bold uppercase tracking-[0.3em] text-[#233726] sm:text-sm"
                  >
                    <span className="px-6">{word}</span>
                    <span className="text-[#349B43]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* About the city */}
        <section className="relative overflow-hidden bg-[#F7F4EA]">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <Reveal>
                <p className="font-inter text-xs font-bold uppercase tracking-[0.35em] text-[#349B43]">
                  About the city
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="font-merienda text-3xl font-extrabold leading-tight text-[#233726] sm:text-4xl lg:text-5xl">
                  <span className="heading-line">
                    A CITY OF BEAUTY AND PRIDE
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="max-w-xl font-merienda text-lg leading-relaxed text-[#41503f] sm:text-xl">
                  It is geographically situated and grouped under the province
                  of Zambales by the Philippine Statistics Authority but governed
                  independently and is also its largest city. Portions of the
                  city also form part of the Subic Special Economic and Freeport
                  Zone.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <Link
                  to="/about"
                  className="btn-shine group inline-flex w-fit items-center gap-3 rounded-full bg-[#233726] px-7 py-3 font-inter text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#349B43] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#349B43] sm:text-base"
                >
                  LEARN MORE
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Reveal variant="right" className="col-span-2">
                <div className="group overflow-hidden rounded-[28px] shadow-xl shadow-[#233726]/15">
                  <img
                    src={jeepImg}
                    alt="Olongapo City Jeepney"
                    className="img-zoom h-44 w-full object-cover sm:h-64"
                  />
                </div>
              </Reveal>
              <Reveal variant="right" delay={120}>
                <div className="group overflow-hidden rounded-[28px] shadow-xl shadow-[#233726]/15">
                  <img
                    src={cityhallImg}
                    alt="Olongapo City Hall"
                    className="img-zoom h-40 w-full object-cover sm:h-56"
                  />
                </div>
              </Reveal>
              <Reveal variant="right" delay={220} className="mt-8">
                <div className="group overflow-hidden rounded-[28px] shadow-xl shadow-[#233726]/15">
                  <img
                    src={rotondaImg}
                    alt="Olongapo City Rotonda"
                    className="img-zoom h-40 w-full object-cover sm:h-56"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Quick links */}
        <section className="relative overflow-hidden bg-[#FFF] py-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#DEF6AF]/40 blur-3xl"
          />
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <Reveal className="mb-10 flex flex-col gap-3">
              <p className="font-inter text-xs font-bold uppercase tracking-[0.35em] text-[#349B43]">
                Keep exploring
              </p>
              <h2 className="font-merienda text-3xl font-extrabold text-[#233726] sm:text-4xl">
                MORE TO DISCOVER
              </h2>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {quickLinks.map((link, index) => (
                <Reveal key={link.to} delay={index * 110}>
                  <Link
                    to={link.to}
                    className="group card-lift flex h-full flex-col justify-between gap-8 rounded-[28px] border border-[#233726]/10 bg-[#F7F4EA] p-6 hover:bg-[#233726] hover:shadow-2xl hover:shadow-[#233726]/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#349B43] sm:p-8"
                  >
                    <div className="flex flex-col gap-4">
                      <span className="font-inter text-xs font-bold tracking-[0.3em] text-[#349B43] transition-colors group-hover:text-[#DEF6AF]">
                        0{index + 1}
                      </span>
                      <h3 className="font-merienda text-2xl font-extrabold text-[#233726] transition-colors group-hover:text-[#FFF]">
                        {link.title}
                      </h3>
                      <p className="font-inter text-sm leading-relaxed text-[#5B6B59] transition-colors group-hover:text-[#C9D8C6]">
                        {link.text}
                      </p>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-[#233726] text-[#DEF6AF] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#349B43] group-hover:text-white">
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
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Heritage strip */}
        <section className="relative isolate overflow-hidden bg-[#566859]">
          <img
            src={ulongapoImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-[rgba(35,55,38,0.82)]" />
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 px-4 py-16 text-center sm:py-20">
            <Reveal>
              <p className="font-inter text-xs font-bold uppercase tracking-[0.35em] text-[#DEF6AF]">
                Our home
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="font-merienda text-2xl font-bold text-[#FFF] sm:text-4xl">
                &ldquo;BAWAL ANG TAMAD SA OLONGAPO&rdquo;
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="max-w-2xl font-inter text-sm leading-relaxed text-[#C9D8C6] sm:text-base">
                A reminder of the hard work and community spirit that built this
                city — and the pride that keeps it moving forward.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
