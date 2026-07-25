"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ArrowUpRight, Sparkles } from "lucide-react";

export interface RoomData {
  title: string;
  img: string;
  subtitle?: string;
  description?: string;
  features?: string[];
}

export function RoomModal({
  room,
  onClose,
}: {
  room: RoomData | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (room) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [room, onClose]);

  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/65 backdrop-blur-md transition-opacity animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#141210]/10 max-h-[92vh] flex flex-col md:flex-row overflow-y-auto md:overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white backdrop-blur-md hover:bg-black/80 grid place-items-center transition cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Image column */}
        <div className="relative md:w-1/2 h-[240px] sm:h-[320px] md:h-auto min-h-[220px] bg-[#F2EEE9]">
          <Image
            src={room.img}
            alt={room.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Info column */}
        <div className="p-6 sm:p-10 md:w-1/2 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8A7664] font-mono block mb-2">
              Bespoke Room Architecture
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-[#141210]">
              {room.title}
            </h3>
            <p className="mt-3 sm:mt-4 text-[#141210]/80 text-xs sm:text-base leading-relaxed">
              {room.description ||
                `Our approach to the ${room.title.toLowerCase()} prioritizes spatial breathing room, acoustic warmth, and natural light transition through hand-selected natural finishes.`}
            </p>

            <div className="mt-5 sm:mt-6 pt-5 border-t border-[#141210]/10">
              <span className="text-xs uppercase tracking-widest text-[#8A7664] font-mono block mb-3">
                Key Design Focus
              </span>
              <ul className="space-y-2 text-xs text-[#141210]/85 font-medium">
                {(room.features || [
                  "Concealed architectural lighting strips",
                  "Integrated custom joinery & storage",
                  "Natural acoustics & organic wall plaster",
                ]).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Sparkles size={14} className="text-[#8A7664] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-5 border-t border-[#141210]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <Link
              href={`/inquiry?space=${encodeURIComponent(room.title)}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#141210] text-[#FAF8F5] text-xs uppercase tracking-widest px-6 py-3 hover:bg-[#8A7664] transition"
            >
              Inquire about space <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={onClose}
              className="text-xs uppercase tracking-widest text-[#141210]/60 hover:text-[#141210] py-2 text-center cursor-pointer"
            >
              Close window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
