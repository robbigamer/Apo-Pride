import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "CITY OFFICIALS", to: "/officials" },
  { label: "CITY RULES", to: "/rules" },
  { label: "CONTACT US", to: "/contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[#233726] focus:px-4 focus:py-2 focus:font-inter focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 px-3 py-2 sm:gap-4 sm:px-4 lg:gap-6">
        <Link
          to="/"
          className="hidden shrink-0 sm:block"
          aria-label="Olongapo City home"
        >
          <img
            src="/assets/brand/left-logo.png"
            alt="Olongapo City left logo"
            className="h-12 w-auto max-w-none sm:h-14 md:h-16 lg:h-20 xl:h-24"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="no-scrollbar min-w-0 flex-1 overflow-x-auto"
        >
          <ul className="flex flex-nowrap items-center justify-center gap-x-1.5 sm:gap-x-3 md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
            {navLinks.map(({ label, to }) => {
              const isActive =
                to === "/" ? pathname === "/" : pathname.startsWith(to);

              return (
                <li key={label}>
                  <Link
                    to={to}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative inline-flex items-center whitespace-nowrap pb-[5px] font-merienda text-[11px] font-bold tracking-[-0.01em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-[#349B43] after:transition-transform after:duration-300 hover:text-[#233726] hover:after:scale-x-100 sm:text-sm md:text-lg lg:text-xl xl:text-2xl ${
                      isActive
                        ? "text-[#233726] after:scale-x-100"
                        : "text-[#000]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          to="/"
          className="hidden shrink-0 sm:block"
          aria-label="Olongapo City home"
        >
          <img
            src="/assets/brand/right-logo.png"
            alt="Olongapo City right logo"
            className="h-12 w-auto max-w-none sm:h-16 md:h-20 lg:h-24 xl:h-28"
          />
        </Link>
      </div>

      <div className="h-[3px] w-full bg-gradient-to-r from-[#233726] via-[#349B43] to-[#DEF6AF]" />
    </header>
  );
}
