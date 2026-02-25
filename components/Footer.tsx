"use client";
import { scrollTo } from "@/lib/utils";
import { WA_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer style={{ background:"#3D1238" }}>
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <svg viewBox="0 0 40 40" className="w-9 h-9 flex-shrink-0">
                <circle cx="20" cy="20" r="19" fill="none" stroke="rgba(242,217,237,0.4)" strokeWidth="1.5"/>
                <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle"
                  style={{ fontFamily:"var(--font-playfair)", fontSize:"14px", fontStyle:"italic", fill:"#F2D9ED", fontWeight:"600" }}>DC</text>
              </svg>
              <div>
                <div style={{ fontFamily:"var(--font-playfair)", fontSize:"14px", fontWeight:"600", letterSpacing:"0.05em", color:"#FDF8FC" }}>DC Luxury Hairs</div>
                <div style={{ fontFamily:"var(--font-dm-sans)", fontSize:"7.5px", fontWeight:"500", letterSpacing:"0.45em", textTransform:"uppercase", color:"#C470B0" }}>International</div>
              </div>
            </div>
            <p className="font-body font-light text-[11px] leading-[2]" style={{ color:"rgba(253,248,252,0.35)" }}>
              Premium luxury human hair extensions, bespoke wigs, and expert hair services — Nigeria &amp; United Kingdom.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="font-body font-semibold text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color:"#C470B0" }}>Navigate</div>
            {[["about","About Us"],["collections","Collections"],["services","Services"],["process","How It Works"],["contact","Contact"]].map(([id,label]) => (
              <button key={id} onClick={() => scrollTo(id)}
                className="block font-body font-light text-[11.5px] mb-2.5 transition-all hover:pl-1.5"
                style={{ color:"rgba(253,248,252,0.4)", background:"none", border:"none", cursor:"pointer", textAlign:"left", padding:"1px 0" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color="#FDF8FC"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color="rgba(253,248,252,0.4)"; }}>
                {label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="font-body font-semibold text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color:"#C470B0" }}>Services</div>
            {["Hair Extensions","Custom Wigs","Closure Ventilation","Wig Revamping","Import & Export"].map(s => (
              <span key={s} className="block font-body font-light text-[11.5px] mb-2.5" style={{ color:"rgba(253,248,252,0.35)" }}>{s}</span>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div className="font-body font-semibold text-[9px] tracking-[0.4em] uppercase mb-4" style={{ color:"#C470B0" }}>Connect</div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="block font-body font-light text-[11.5px] mb-2.5 transition-colors hover:text-white"
              style={{ color:"rgba(253,248,252,0.4)" }}>WhatsApp: 09035269607</a>
            <span className="block font-body font-light text-[11.5px] mb-2.5" style={{ color:"rgba(253,248,252,0.35)" }}>🇳🇬 Delta State, Nigeria</span>
            <span className="block font-body font-light text-[11.5px] mb-6"  style={{ color:"rgba(253,248,252,0.35)" }}>🇬🇧 Coventry, UK</span>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="block text-center font-body font-semibold text-[10px] tracking-[0.2em] uppercase py-3 transition-all"
              style={{ background:"#7B2D6E", color:"#FDF8FC" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.background="#A84090"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.background="#7B2D6E"; }}>
              Order Now
            </a>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor:"rgba(255,255,255,0.06)" }}>
          <span className="font-body font-light text-[10px]" style={{ color:"rgba(253,248,252,0.2)" }}>
            © {new Date().getFullYear()} DC Luxury Hairs International. All rights reserved.
          </span>
          <span className="font-body text-[9px] tracking-[0.4em] uppercase" style={{ color:"rgba(253,248,252,0.12)" }}>
            Premium · Authentic · International
          </span>
        </div>
      </div>
    </footer>
  );
}
