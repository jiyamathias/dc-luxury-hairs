import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-24 px-8 md:px-14" style={{ background:"#FAF2FA" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="eyebrow mb-3">Client Stories</div>
          <h2 className="font-display font-normal" style={{ fontSize:"clamp(32px,3.5vw,50px)", color:"#1A0A17" }}>
            What Our <em style={{ color:"#7B2D6E", fontStyle:"italic" }}>Queens Say</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.author} className="relative p-8"
              style={{ background: i===1 ? "#7B2D6E" : "white" }}>
              {/* Large quote mark */}
              <div className="font-display italic text-[80px] leading-none mb-2 select-none"
                style={{ color: i===1 ? "rgba(253,248,252,0.12)" : "rgba(123,45,110,0.08)", lineHeight:"0.8" }}>
                &ldquo;
              </div>
              <div className="flex mb-4">
                {Array.from({ length:t.stars }).map((_,j) => (
                  <span key={j} className="text-[13px]" style={{ color: i===1 ? "#F2D9ED" : "#7B2D6E" }}>★</span>
                ))}
              </div>
              <p className="font-display italic font-normal text-[17px] leading-[1.6] mb-6"
                style={{ color: i===1 ? "#FDF8FC" : "#1A0A17" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-body font-semibold text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: i===1 ? "#F2D9ED" : "#7B2D6E" }}>
                  {t.author}
                </div>
                <div className="font-body font-light text-[10px] mt-0.5"
                  style={{ color: i===1 ? "rgba(253,248,252,0.45)" : "#C4B0BF" }}>
                  {t.loc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
