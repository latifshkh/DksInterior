import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/" as const, hash: "about" },
  { label: "Spaces", to: "/" as const, hash: "spaces" },
  { label: "Rooms", to: "/" as const, hash: "rooms" },
  { label: "Inquiry", to: "/inquiry" as const },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94%,900px)]">
      <nav
        className="flex items-center justify-between backdrop-blur-xl bg-[color:var(--ivory)]/85 border border-[color:var(--ink)]/10 shadow-[0_8px_30px_rgba(26,15,10,0.08)] transition-all duration-500 ease-out rounded-full"
        style={{
          paddingLeft: scrolled ? "1.4rem" : "1.25rem",
          paddingRight: scrolled ? "0.5rem" : "0.4rem",
          paddingTop: scrolled ? "0.6rem" : "0.45rem",
          paddingBottom: scrolled ? "0.6rem" : "0.45rem",
        }}
      >
        <Link to="/" className="font-display text-[color:var(--ink)] text-lg tracking-tight">
          Maison<span className="opacity-60">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-[color:var(--ink)]/85 text-sm">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className="px-3 py-1.5 rounded-full hover:bg-[color:var(--ink)]/6 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/inquiry"
          className="hidden md:inline-flex items-center rounded-full bg-[color:var(--ink)] text-[color:var(--ivory)] text-sm px-4 py-2 hover:opacity-90 transition"
        >
          Start a project
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full hover:bg-[color:var(--ink)]/6"
        >
          {open ? <Menu size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mt-2 rounded-3xl bg-[color:var(--ivory)] border border-[color:var(--ink)]/10 shadow-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-display text-lg">Menu</span>
            <button onClick={() => setOpen(false)} aria-label="Close"><X size={18} /></button>
          </div>
          <ul className="flex flex-col text-[color:var(--ink)]">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="block py-2 px-2 rounded-lg hover:bg-[color:var(--ink)]/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
