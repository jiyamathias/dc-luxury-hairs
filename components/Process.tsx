import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" style={{ background:"#7B2D6E" }} className="py-24 px-8 md:px-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:items-end justify-between mb-16">
          <div>
            <div className="eyebrow mb-3" style={{ color:"rgba(242,217,237,0.6)" }}>Simple Process</div>
            <h2 className="font-display font-normal" style={{ fontSize:"clamp(32px,3.5vw,52px)", color:"#FDF8FC" }}>
              How To <em style={{ color:"#F2D9ED", fontStyle:"italic" }}>Order</em>
            </h2>
          </div>
          <p className="font-body font-light text-[13px] leading-[1.9] max-w-[340px]"
            style={{ color:"rgba(253,248,252,0.5)" }}>
            No complicated checkout. Browse, bag, WhatsApp — we handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background:"rgba(253,248,252,0.06)" }}>
          {PROCESS_STEPS.map(s => (
            <div key={s.n} className="relative p-8 transition-all duration-300 hover:bg-plum-deep"
              style={{ background:"rgba(61,18,56,0.4)" }}>
              {/* Ghost num */}
              <div className="absolute top-4 right-5 font-display italic font-normal leading-none select-none pointer-events-none"
                style={{ fontSize:"70px", color:"rgba(242,217,237,0.06)" }}>{s.n}</div>
              <div className="text-[24px] mb-5">{s.icon}</div>
              <div className="font-display font-normal text-[20px] mb-3 leading-snug" style={{ color:"#FDF8FC" }}>{s.title}</div>
              <p className="font-body font-light text-[11.5px] leading-[1.85]" style={{ color:"rgba(253,248,252,0.5)" }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
