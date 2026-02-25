"use client";
import { scrollTo } from "@/lib/utils";
import { WA_URL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#3D1238]">
      {/* Full-bleed photo right side */}
      <div className="absolute inset-0 md:left-[42%]">
        <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=90&fit=crop&crop=top"
          alt="Luxury hair" className="w-full h-full object-cover object-top"
          style={{ filter:"brightness(0.55) saturate(0.8)" }} />
        {/* Gradient mask blending photo into left side */}
        <div className="absolute inset-0" style={{
          background:"linear-gradient(90deg, #3D1238 0%, #3D1238 15%, rgba(61,18,56,0.9) 35%, rgba(61,18,56,0.4) 60%, transparent 100%)"
        }}/>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32" style={{
        background:"linear-gradient(to top, #3D1238, transparent)"
      }}/>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-14 pt-28 pb-20">
        <div className="max-w-[580px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-plum-soft opacity-60"/>
            <span className="eyebrow opacity-80" style={{ color:"#C470B0" }}>
              Nigeria &amp; United Kingdom
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-normal italic leading-[1.0] mb-6"
            style={{ fontSize:"clamp(52px,9vw,110px)", color:"#FDF8FC" }}>
            Define<br/>
            <span style={{ color:"#F2D9ED", opacity:0.9 }}>Your</span>{" "}
            <em style={{ color:"#C470B0", fontStyle:"italic" }}>Crown.</em>
          </h1>

          <div className="w-16 h-px mb-8 opacity-40" style={{ background:"#C470B0" }}/>

          <p className="font-body font-light text-[13px] leading-[2] mb-10"
            style={{ color:"rgba(253,248,252,0.65)", maxWidth:"420px", letterSpacing:"0.04em" }}>
            Purveyors of the world&rsquo;s finest human hair extensions, bespoke wigs, and luxury
            hair services — delivered with precision across Nigeria and the United Kingdom.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <button onClick={() => scrollTo("collections")} className="btn-plum"
              style={{ background:"#7B2D6E", boxShadow:"0 8px 32px rgba(123,45,110,0.45)" }}>
              Shop Collection
            </button>
            <button onClick={() => scrollTo("about")} className="btn-outline-ivory">
              Our Story
            </button>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 flex-wrap">
            {[["500+","Clients"],["2","Countries"],["100%","Human Hair"],["10+","Textures"]].map(([n,l]) => (
              <div key={l}>
                <div className="font-display font-normal text-[38px] leading-none" style={{ color:"#C470B0" }}>{n}</div>
                <div className="font-body font-medium text-[9px] tracking-[0.3em] uppercase mt-1.5" style={{ color:"rgba(253,248,252,0.4)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 right-14 hidden md:flex flex-col items-center gap-2">
          <span className="font-body text-[8px] tracking-[0.5em] uppercase" style={{ color:"rgba(253,248,252,0.25)", writingMode:"vertical-rl" }}>Scroll</span>
          <div className="w-px h-10 opacity-20" style={{ background:"#C470B0" }}/>
        </div>
      </div>
    </section>
  );
}
