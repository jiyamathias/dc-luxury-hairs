"use client";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/CartContext";
import { scrollTo } from "@/lib/utils";
import { WA_URL } from "@/lib/constants";

const LINKS = [
  { label:"About",        id:"about" },
  { label:"Collections",  id:"collections" },
  { label:"Services",     id:"services" },
  { label:"How It Works", id:"process" },
  { label:"Contact",      id:"contact" },
];

export default function Navbar({ onCartOpen }: { onCartOpen: () => void }) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("scroll-locked", mobileOpen);
    return () => document.body.classList.remove("scroll-locked");
  }, [mobileOpen]);

  const nav = (id: string) => { scrollTo(id); setMobileOpen(false); };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(123,45,110,0.08)]" : "bg-transparent"
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-14 flex items-center justify-between h-16 md:h-[72px]">

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            className="flex items-center gap-3 group flex-shrink-0">
            {/* DC monogram */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="20" r="19" fill="none" stroke="#7B2D6E" strokeWidth="1.5"/>
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                  className="font-display" style={{ fontFamily:"var(--font-playfair)", fontSize:"16px", fontStyle:"italic", fill:"#7B2D6E", fontWeight:"600" }}>DC</text>
              </svg>
            </div>
            <div className="text-left leading-tight">
              <div style={{ fontFamily:"var(--font-playfair)", fontSize:"15px", fontWeight:"600", letterSpacing:"0.06em", color:"#1A0A17" }}>
                DC Luxury Hairs
              </div>
              <div style={{ fontFamily:"var(--font-dm-sans)", fontSize:"8px", fontWeight:"500", letterSpacing:"0.45em", textTransform:"uppercase", color:"#7B2D6E" }}>
                International
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map(l => (
              <button key={l.id} onClick={() => nav(l.id)} className="nav-link">{l.label}</button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button onClick={onCartOpen} className="relative btn-plum py-2.5 px-5 text-[10px]">
              Bag
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-plum-light text-white rounded-full w-4 h-4 text-[8px] font-semibold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            {/* Hamburger */}
            <button onClick={() => setMobileOpen(true)}
              className="md:hidden flex flex-col gap-[5px] p-1" aria-label="Open menu">
              <span className="block w-5 h-[1.5px] bg-ink transition-all"/>
              <span className="block w-5 h-[1.5px] bg-ink transition-all"/>
              <span className="block w-3 h-[1.5px] bg-plum transition-all"/>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Nav ── */}
      <div className={`fixed inset-0 z-[300] flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        mobileOpen ? "translate-x-0" : "translate-x-full"
      }`} style={{ background: "#3D1238" }}>
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-9 h-9 flex-shrink-0">
              <circle cx="20" cy="20" r="19" fill="none" stroke="rgba(242,217,237,0.5)" strokeWidth="1.5"/>
              <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                style={{ fontFamily:"var(--font-playfair)", fontSize:"15px", fontStyle:"italic", fill:"#F2D9ED", fontWeight:"600" }}>DC</text>
            </svg>
            <div>
              <div style={{ fontFamily:"var(--font-playfair)", fontSize:"13px", fontWeight:"600", letterSpacing:"0.05em", color:"#FDF8FC" }}>DC Luxury Hairs</div>
              <div style={{ fontFamily:"var(--font-dm-sans)", fontSize:"7.5px", fontWeight:"500", letterSpacing:"0.4em", textTransform:"uppercase", color:"#C470B0" }}>International</div>
            </div>
          </div>
          <button onClick={() => setMobileOpen(false)}
            className="w-9 h-9 border border-white/20 text-white/60 flex items-center justify-center hover:border-white/50 hover:text-white transition-colors text-[16px]">
            ✕
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-10 gap-0">
          {LINKS.map(l => (
            <button key={l.id} onClick={() => nav(l.id)} className="mob-a">{l.label}</button>
          ))}
        </div>

        <div className="px-10 py-8 border-t border-white/10">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full py-4 bg-[#25D366] text-white text-center font-body font-semibold tracking-[0.2em] uppercase text-[11px] transition-all hover:bg-[#20bd5a]">
            WhatsApp Us
          </a>
          <p className="text-center mt-4 text-[9px] tracking-[0.3em] uppercase text-white/20 font-body">
            Nigeria · United Kingdom
          </p>
        </div>
      </div>
    </>
  );
}
