import Avatar from "./Avatar";

function Hero({ firstName, lastName, role, intro, ctaLabel = "Hire Me" }) {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 md:grid-cols-2"
    >
      <span
        className="float absolute left-[2%] top-[62%] h-10 w-10 bg-emerald-700/80"
        aria-hidden="true"
      />
      <span
        className="float absolute left-[42%] top-[48%] h-10 w-10 bg-yellow-700/70"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />
      <span
        className="float absolute bottom-10 left-[58%] h-7 w-7 rounded-full bg-rose-800/80"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-widest">
          Hi there 👋 I’m
        </p>
        <h1 className="mt-4 text-5xl font-extrabold leading-tight sm:text-6xl">
          {firstName}
          <br />
          {lastName}
        </h1>
        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-mint">
          {role}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/80">
          {intro}
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-full bg-mint px-10 py-3 text-sm font-bold text-bg transition hover:brightness-110"
        >
          {ctaLabel}
        </a>
      </div>

      <div className="relative mx-auto w-full max-w-sm">
        <Avatar />
      </div>
    </section>
  );
}

export default Hero;
