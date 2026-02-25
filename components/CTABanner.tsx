"use client";
import { scrollTo } from "@/lib/utils";
import { WA_URL } from "@/lib/constants";

export default function CTABanner() {
  return (
    <div className="relative overflow-hidden flex items-center" style={{ minHeight:"380px" }}>
      <img src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=1600&q=85&fit=crop"
        alt="Luxury" className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition:"center 30%", filter:"brightness(0.22) saturate(0.4)" }} loading="lazy"/>
      <div className="absolute inset-0" style={{
        background:"linear-gradient(105deg, rgba(61,18,56,0.95) 0%, rgba(61,18,56,0.7) 55%, rgba(61,18,56,0.35) 100%)"
      }}/>
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-8 md:px-14 py-20">
        <div className="max-w-[580px]">
          <div className="eyebrow mb-4" style={{ color:"#C470B0" }}>Nationwide & International</div>
          <h2 className="font-display font-normal italic leading-[1.1] mb-6"
            style={{ fontSize:"clamp(30px,4vw,52px)", color:"#FDF8FC" }}>
            Luxury Hair, Delivered<br/>to Your Door.
          </h2>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => scrollTo("collections")} className="btn-plum"
              style={{ background:"#7B2D6E", boxShadow:"0 8px 32px rgba(123,45,110,0.4)" }}>
              Shop Now
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-outline-ivory">
              📲 WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
