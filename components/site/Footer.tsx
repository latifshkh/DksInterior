import Link from "next/link";
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141210] text-[#FAF8F5] rounded-t-[2.5rem] mt-20 sm:mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl leading-tight">
              Designing spaces that feel like home<span className="text-[#8A7664]">.</span>
            </h3>
          </div>
          <div className="text-xs sm:text-sm space-y-2 text-[#FAF8F5]/80 font-sans">
            <p className="font-medium text-[#FAF8F5]">Maison Studio</p>
            <p>hello@maison.studio</p>
            <p>+91 98765 43210</p>
            <p className="text-[#8A7664] font-mono text-xs">Mumbai · Delhi · Bengaluru</p>
          </div>
          <div className="flex md:justify-end items-start gap-3">
            {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Link"
                className="w-10 h-10 grid place-items-center rounded-full border border-[#FAF8F5]/20 hover:bg-[#8A7664] hover:border-[#8A7664] hover:text-[#FAF8F5] transition"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#FAF8F5]/15 flex flex-col sm:flex-row sm:justify-between gap-4 text-xs text-[#FAF8F5]/60 font-mono">
          <span>© {new Date().getFullYear()} Maison Studio. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/inquiry" className="hover:text-[#FAF8F5] transition">Inquiry</Link>
            <a href="#" className="hover:text-[#FAF8F5] transition">Privacy</a>
            <a href="#" className="hover:text-[#FAF8F5] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
