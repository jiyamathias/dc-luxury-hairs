import { SERVICES_DATA } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="bg-ivory">
      {/* Heading */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-14 pt-24 pb-10">
        <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
          <div>
            <div className="eyebrow mb-3">What We Offer</div>
            <h2 className="font-display font-normal" style={{ fontSize:"clamp(34px,4vw,56px)", color:"#1A0A17" }}>
              Our <em style={{ color:"#7B2D6E", fontStyle:"italic" }}>Services</em>
            </h2>
          </div>
          <p className="font-body font-light text-[13px] leading-[1.9] max-w-[380px]" style={{ color:"#8B7A87" }}>
            From raw bundles to full transformations — every service delivered with the precision of a luxury atelier.
          </p>
        </div>
      </div>

      {/* 2×3 grid (or 3×2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES_DATA.map((s, i) => (
          <div key={s.title} className="group relative overflow-hidden" style={{ aspectRatio:"1/1" }}>
            <img src={s.img} alt={s.title}
              className="w-full h-full object-cover transition-all duration-[600ms] group-hover:scale-[1.07]"
              style={{ filter:"brightness(0.35) saturate(0.5)" }}
              onMouseEnter={e => (e.currentTarget.style.filter = "brightness(0.5) saturate(0.8)")}
              onMouseLeave={e => (e.currentTarget.style.filter = "brightness(0.35) saturate(0.5)")}
              loading="lazy"/>
            {/* Dark gradient */}
            <div className="absolute inset-0" style={{
              background:"linear-gradient(to top, rgba(61,18,56,0.97) 0%, rgba(61,18,56,0.35) 55%, transparent 100%)"
            }}/>
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              {/* Number */}
              <div className="font-display italic font-normal mb-3 leading-none select-none"
                style={{ fontSize:"56px", color:"rgba(196,112,176,0.12)" }}>
                {String(i+1).padStart(2,"0")}
              </div>
              <div className="font-body font-normal text-[18px] mb-0.5 tracking-wide" style={{ color:"#F2D9ED" }}>{s.icon}</div>
              <div className="font-display font-normal text-[21px] mb-2" style={{ color:"#FDF8FC" }}>{s.title}</div>
              <div className="svc-bar mb-3"/>
              <p className="svc-reveal font-body font-light text-[11px] leading-[1.75]" style={{ color:"rgba(253,248,252,0.65)" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
