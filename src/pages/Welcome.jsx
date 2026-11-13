import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import birdviewImg from "../img/birdview.jpg";
import cityhallImg from "../img/cityhall.jpg";
import jeepImg from "../img/jeep.jpg";
import rotondaImg from "../img/rotonda.jpg";
import ulongapoImg from "../img/ulongapo.jpg";

const cityImages = [
  {
    src: jeepImg,
    alt: "Olongapo City Jeepney",
    framed: false,
  },
  {
    src: cityhallImg,
    alt: "Olongapo City Hall",
    framed: true,
  },
  {
    src: rotondaImg,
    alt: "Olongapo City Rotonda",
    framed: false,
  },
];

export default function Welcome() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF]">
      <Navbar active="HOME" />

      <main className="flex flex-1 flex-col">
        <section className="relative overflow-hidden">
          <img
            src={birdviewImg}
            alt="Aerial view of Olongapo City"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(35,55,38,0.52)]" />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center sm:py-28">
            <h1 className="font-inter text-4xl font-black text-[#FAFAFA] sm:text-5xl lg:text-[64px]">
              WELCOME TO OLONGAPO CITY
            </h1>
            <Link
              to="/tourist-spots"
              className="inline-block rounded-[20px] border border-[#233726] bg-[#349B43] px-8 py-3 transition-colors hover:bg-[#2b8038] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAFAFA]"
            >
              <span className="font-inter text-xl text-[#FAFAFA] sm:text-2xl">
                EXPLORE NOW
              </span>
            </Link>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#566859]">
          <img
            src={ulongapoImg}
            alt="Ulongapo heritage background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(35,55,38,0.75)]" />

          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-8 sm:py-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <h2 className="font-merienda text-2xl font-extrabold text-[#FFF] sm:text-[32px]">
                A CITY OF BEAUTY AND PRIDE
              </h2>
              <p className="font-merienda text-xl text-[#FFF] sm:text-2xl">
                It is geographically situated and grouped under the province of
                Zambales by the Philippine Statistics Authority but governed
                independently and is also its largest city. Portions of the city
                also form part of the Subic Special Economic and Freeport Zone.
              </p>
              <Link
                to="/about"
                className="inline-block w-fit rounded-[20px] bg-[#349B43] px-8 py-3 transition-colors hover:bg-[#2b8038] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAFAFA]"
              >
                <span className="font-inter text-xl text-[#FAFAFA] sm:text-2xl">
                  LEARN MORE
                </span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {cityImages.map((image) => (
                <div
                  key={image.alt}
                  className={
                    image.framed ? "rounded-[45px] bg-[#D9D9D9] p-3" : ""
                  }
                >
                  <div
                    className={
                      image.framed ? "rounded-[45px] bg-[#C5C5C5] p-3" : ""
                    }
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-72 w-full rounded-[45px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
