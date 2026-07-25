"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "/#about" },
  { label: "Spaces", href: "/#spaces" },
  { label: "Process", href: "/#process" },
  { label: "Materials", href: "/#materials" },
  { label: "Rooms", href: "/#rooms" },
  { label: "Praise", href: "/#praise" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <header className="fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[min(92%,920px)] transition-all">
      <nav
        className="flex items-center justify-between backdrop-blur-xl bg-[#FAF8F5]/85 border border-[#141210]/10 shadow-[0_8px_30px_rgba(20,18,16,0.06)] transition-all duration-500 ease-out rounded-full px-4 py-2 sm:px-6 sm:py-2.5"
      >
        <Link href="/" className="font-display text-[#141210] text-xl sm:text-2xl tracking-tight font-medium">
          Maison<span className="text-[#8A7664]">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 text-[#141210]/80 text-xs sm:text-sm font-medium">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="px-3.5 py-1.5 rounded-full hover:bg-[#141210]/5 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#141210] text-[#FAF8F5] text-xs uppercase tracking-widest px-4 py-2 hover:bg-[#8A7664] transition-colors"
          >
            Start project <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle Navigation Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full hover:bg-[#141210]/5 text-[#141210] cursor-pointer"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Overlay & Modal */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[70px] z-40 bg-[#FAF8F5]/98 backdrop-blur-2xl p-6 flex flex-col justify-between animate-fade-in border-t border-[#141210]/10 h-[calc(100vh-70px)] overflow-y-auto">
          <div className="space-y-6 pt-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#141210]/50 font-mono block">
              Navigation Menu
            </span>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-display text-3xl text-[#141210] hover:text-[#8A7664] py-2 transition-colors border-b border-[#141210]/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 pb-12 border-t border-[#141210]/10 space-y-4">
            <Link
              href="/inquiry"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-2 rounded-full bg-[#141210] text-[#FAF8F5] text-sm uppercase tracking-widest py-3.5 hover:bg-[#8A7664] transition"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
            <p className="text-center text-xs text-[#141210]/50 font-mono">
              Maison Studio · Architectural Interior Practice
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
