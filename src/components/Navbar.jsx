import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "CITY OFFICIALS", to: "/officials" },
  { label: "CITY RULES", to: "/rules" },
  { label: "CONTACT US", to: "/contact" },
];

export default function Navbar({ active }) {
  const { pathname } = useLocation();

  return (
    <header className="w-full bg-[#FFF]">
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
                active === label ||
                (to === "/" ? pathname === "/" : pathname.startsWith(to));

              return (
                <li key={label}>
                  <Link
                    to={to}
                    aria-current={isActive ? "page" : undefined}
                    className={`whitespace-nowrap font-merienda text-[11px] font-bold tracking-[-0.01em] text-[#000] transition-colors hover:text-[#233726] sm:text-sm md:text-lg lg:text-xl xl:text-2xl ${
                      isActive
                        ? "underline decoration-2 underline-offset-4"
                        : ""
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
      <div className="h-px w-full bg-[rgba(4,4,4,0.51)]" />
    </header>
  );
}
