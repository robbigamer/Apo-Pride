import Reveal from "./Reveal";

/**
 * Shared page header used across interior pages.
 * Keeps the animated forest-gradient look consistent site-wide.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  align = "left",
  children,
}) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section className="relative isolate overflow-hidden bg-[#233726]">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0C170F]/90 via-[#233726]/85 to-[#233726]/95" />
        </>
      ) : null}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 -z-10 h-72 w-72 rounded-full bg-[#349B43]/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/4 -z-10 h-64 w-64 rounded-full bg-[#DEF6AF]/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:py-20">
        <div className={`flex flex-col gap-5 ${alignment}`}>
          {eyebrow ? (
            <Reveal>
              <p className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-inter text-[10px] font-semibold uppercase tracking-[0.35em] text-[#DEF6AF] backdrop-blur-md sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#349B43]" />
                {eyebrow}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={80}>
            <h1 className="font-merienda text-4xl font-extrabold leading-tight text-[#FFF] sm:text-5xl lg:text-6xl">
              <span className="heading-line">{title}</span>
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={160}>
              <p className="max-w-3xl font-merienda text-lg leading-relaxed text-[#CFDDCB] sm:text-xl lg:text-2xl">
                {description}
              </p>
            </Reveal>
          ) : null}

          {children ? <Reveal delay={220}>{children}</Reveal> : null}
        </div>
      </div>
    </section>
  );
}
