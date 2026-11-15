import { navLinks } from "../data/content";
function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          className="font-serif text-3xl italic tracking-tight"
          aria-label="Home"
        >
          YW<span className="text-mint">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm font-semibold md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a
              href="#portfolio"
              className="rounded-full bg-mint px-8 py-3 text-bg transition hover:brightness-110"
            >
              Case Studies
            </a>
          </li>
        </ul>

        <button className="text-2xl md:hidden" aria-label="Open menu">
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
