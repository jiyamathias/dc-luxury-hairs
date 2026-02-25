"use client";
import { scrollTo } from "@/lib/utils";
import { WA_URL } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="bg-ivory overflow-hidden">
      {/* Large editorial layout */}
      <div className="max-w-[1400px] mx-auto">

        {/* ── Top: asymmetric image + copy ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] min-h-[600px]">
          {/* Photo column */}
          <div className="relative overflow-hidden" style={{ minHeight:"500px" }}>
            <img src="https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=1000&q=88&fit=crop&crop=top"
              alt="DC Luxury Hairs" className="w-full h-full object-cover object-top absolute inset-0"
              style={{ filter:"saturate(0.85)" }} loading="lazy"/>
            {/* Plum color wash overlay bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40" style={{
              background:"linear-gradient(to top, rgba(61,18,56,0.8), transparent)"
            }}/>
            {/* Pull-quote on image */}
            <div className="absolute bottom-10 left-10 right-10 z-10">
              <p className="font-display italic text-white text-[22px] md:text-[28px] leading-snug font-normal opacity-90">
                &ldquo;Every strand tells a story of excellence.&rdquo;
              </p>
            </div>
          </div>

          {/* Copy column */}
          <div className="flex flex-col justify-center px-10 lg:px-16 py-16" style={{ background:"#FDF8FC" }}>
            <div className="eyebrow mb-5">Est. Premium Hair Luxury</div>
            <h2 className="font-display font-normal leading-[1.1] mb-6"
              style={{ fontSize:"clamp(32px,3.5vw,52px)", color:"#1A0A17" }}>
              Where Luxury<br/>
              <span style={{ color:"#7B2D6E", fontStyle:"italic" }}>Meets Hair.</span>
            </h2>
            <p className="font-body font-light text-[13px] leading-[2] mb-4"
              style={{ color:"#8B7A87" }}>
              DC Luxury Hairs International is a premier global hair brand with deep roots in Nigeria
              and a growing presence in the United Kingdom. We source the world&rsquo;s finest raw human
              hair — Vietnamese, Brazilian, Peruvian, Indian — for women who demand nothing but
              perfection.
            </p>
            <p className="font-body font-light text-[13px] leading-[2] mb-8"
              style={{ color:"#8B7A87" }}>
              Serving clients across <span className="font-medium text-ink">Delta State, Lagos, Abuja</span> and
              the <span className="font-medium text-ink">United Kingdom</span>.
            </p>
            <div className="flex gap-3 flex-wrap mb-10">
              <button onClick={() => scrollTo("collections")} className="btn-plum">Shop Now</button>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-px border border-plum-mist">
              {[["500+","Happy Clients"],["2","Countries"],["100%","Human Hair"],["10+","Textures"]].map(([n,l]) => (
                <div key={l} className="p-5 text-center" style={{ background:"white" }}>
                  <div className="font-display text-[34px] leading-none mb-1" style={{ color:"#7B2D6E" }}>{n}</div>
                  <div className="font-body text-[9px] tracking-[0.25em] uppercase" style={{ color:"#C4B0BF" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom: secondary photo strip ── */}
        <div className="grid grid-cols-3 h-[200px]">
          <div className="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=600&q=80&fit=crop"
              alt="Extensions" className="w-full h-full object-cover"
              style={{ filter:"saturate(0.75) brightness(0.7)" }} loading="lazy"/>
            <div className="absolute inset-0 flex items-end p-5">
              <span className="font-body font-medium text-white text-[10px] tracking-[0.3em] uppercase">Extensions</span>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80&fit=crop&crop=top"
              alt="Wigs" className="w-full h-full object-cover"
              style={{ filter:"saturate(0.75) brightness(0.7)" }} loading="lazy"/>
            <div className="absolute inset-0 flex items-end p-5">
              <span className="font-body font-medium text-white text-[10px] tracking-[0.3em] uppercase">Wigs</span>
            </div>
          </div>
          <div className="relative overflow-hidden" style={{ background:"#7B2D6E" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="font-display italic text-white text-[26px] leading-tight mb-3">Crafted for Queens.</div>
              <button onClick={() => scrollTo("collections")}
                className="btn-outline-ivory py-2 px-5 text-[9px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
