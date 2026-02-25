"use client";
import { scrollToSection } from "@/lib/utils";

const FEATURES = [
  {
    tag: "Category I",
    title: "Hair Extensions",
    sub: "Vietnamese · Brazilian · Peruvian",
    img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=800&q=80&fit=crop",
    section: "collections",
  },
  {
    tag: "Category II",
    title: "Luxury Wigs",
    sub: "Custom · HD Lace · Ready-to-Wear",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80&fit=crop&crop=top",
    section: "collections",
  },
  {
    tag: "Category III",
    title: "Pro Services",
    sub: "Installation · Revamp · Ventilation",
    img: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80&fit=crop&crop=top",
    section: "services",
  },
];

export default function FeaturedStrip() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {FEATURES.map((f) => (
        <button
          key={f.title}
          onClick={() => scrollToSection(f.section)}
          className="group relative overflow-hidden h-[280px] md:h-[420px] text-left w-full"
        >
          <img
            src={f.img}
            alt={f.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06]"
            style={{ filter: "brightness(0.45) saturate(0.8)", transition: "transform 0.7s ease, filter 0.5s ease" }}
            onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.62) saturate(1)")}
            onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0.45) saturate(0.8)")}
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex flex-col justify-end p-8"
            style={{ background: "linear-gradient(to top, rgba(10,8,4,0.9) 0%, transparent 60%)" }}
          >
            <div className="font-sans font-bold tracking-[0.4em] text-gold uppercase text-[8.5px] mb-2">
              {f.tag}
            </div>
            <div className="font-serif font-normal italic text-lux-cream text-[28px]">{f.title}</div>
            <div className="feat-divider-line my-2.5" />
            <div className="font-sans font-light text-lux-stone tracking-[0.1em] text-[10px]">
              {f.sub}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
