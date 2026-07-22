import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--ivory)] rounded-t-[2.5rem] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight">
              Designing spaces that feel like home.
            </h3>
          </div>
          <div className="text-sm space-y-2 opacity-80">
            <p>Studio Maison</p>
            <p>hello@maison.studio</p>
            <p>+91 98765 43210</p>
            <p>Mumbai · Delhi · Bengaluru</p>
          </div>
          <div className="flex md:justify-end items-start gap-3">
            {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="w-10 h-10 grid place-items-center rounded-full border border-[color:var(--ivory)]/25 hover:bg-[color:var(--ivory)] hover:text-[color:var(--ink)] transition"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[color:var(--ivory)]/15 flex flex-col md:flex-row md:justify-between gap-4 text-xs opacity-70">
          <span>© {new Date().getFullYear()} Maison Studio. All rights reserved.</span>
          <div className="flex gap-5">
            <Link to="/inquiry" className="hover:opacity-100">Inquiry</Link>
            <a href="#" className="hover:opacity-100">Privacy</a>
            <a href="#" className="hover:opacity-100">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
