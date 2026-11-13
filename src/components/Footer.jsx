import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "About Olongapo", to: "/about" },
  { label: "City Officials", to: "/officials" },
  { label: "City Rules", to: "/rules" },
  { label: "Contact Us", to: "/contact" },
];

const discoverLinks = [
  { label: "Tourist Spots", to: "/tourist-spots" },
  { label: "Food Spots", to: "/tourist-spots#food-spots" },
  { label: "Voluntary Works", to: "/voluntary-works" },
  { label: "City Map", to: "/map" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#142116] text-[#D8E4D6]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#349B43]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#DEF6AF]/10 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-3" aria-label="Olongapo City home">
            <img
              src="/assets/brand/left-logo.png"
              alt=""
              className="h-14 w-auto transition-transform duration-500 hover:rotate-3"
            />
            <span className="font-merienda text-xl font-bold text-[#FFF]">
              OLONGAPO CITY
            </span>
          </Link>
          <p className="max-w-xs font-merienda text-sm leading-relaxed text-[#B9CBB7]">
            A city of beauty and pride — where community, culture, and progress
            meet.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-[#8FA88C]">
            Apo&apos;s Pride
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#DEF6AF]">
            Explore
          </h2>
          <ul className="flex flex-col gap-2">
            {exploreLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 font-inter text-sm text-[#C9D8C6] transition-colors hover:text-[#FFF]"
                >
                  <span className="h-px w-0 bg-[#DEF6AF] transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#DEF6AF]">
            Discover
          </h2>
          <ul className="flex flex-col gap-2">
            {discoverLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="group inline-flex items-center gap-2 font-inter text-sm text-[#C9D8C6] transition-colors hover:text-[#FFF]"
                >
                  <span className="h-px w-0 bg-[#DEF6AF] transition-all duration-300 group-hover:w-4" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-inter text-xs font-bold uppercase tracking-[0.25em] text-[#DEF6AF]">
            Need help?
          </h2>
          <p className="font-inter text-sm leading-relaxed text-[#B9CBB7]">
            For life-threatening emergencies, call{" "}
            <a
              href="tel:911"
              className="font-semibold text-[#FFF] underline decoration-[#349B43] decoration-2 underline-offset-4"
            >
              911
            </a>
            .
          </p>
          <a
            href="tel:2222565"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#349B43]/60 px-4 py-2 font-inter text-sm font-semibold text-[#DEF6AF] transition-colors hover:bg-[#349B43] hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
              <path
                d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            City Hall · 222-2565
          </a>
          <p className="font-inter text-xs text-[#8FA88C]">
            Olongapo City, Zambales, Philippines
          </p>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-center font-inter text-xs text-[#8FA88C] sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Olongapo City. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#349B43]" />
            Built with pride for Apo&apos;s Pride
          </p>
        </div>
      </div>
    </footer>
  );
}
