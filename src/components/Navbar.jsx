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
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-3 px-4 py-2 sm:grid-cols-[auto_1fr_auto] sm:gap-6 sm:py-0">
        <Link
          to="/"
          className="justify-self-start"
          aria-label="Olongapo City home"
        >
          <img
            src="/assets/brand/left-logo.png"
            alt="Olongapo City left logo"
            className="h-16 w-auto max-w-none sm:h-24 lg:h-[115px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="order-last col-span-2 w-full sm:order-none sm:col-span-1"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:gap-x-10">
            {navLinks.map(({ label, to }) => {
              const isActive =
                active === label ||
                (to === "/" ? pathname === "/" : pathname.startsWith(to));

              return (
                <li key={label}>
                  <Link
                    to={to}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-merienda text-base font-bold tracking-[-0.01em] text-[#000] transition-colors hover:text-[#233726] sm:text-xl lg:text-2xl ${
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
          className="justify-self-end"
          aria-label="Olongapo City home"
        >
          <img
            src="/assets/brand/right-logo.png"
            alt="Olongapo City right logo"
            className="h-16 w-auto max-w-none sm:h-28 lg:h-[148px]"
          />
        </Link>
      </div>
      <div className="h-px w-full bg-[rgba(4,4,4,0.51)]" />
    </header>
  );
}
