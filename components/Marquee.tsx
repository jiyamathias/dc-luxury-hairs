import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS,...MARQUEE_ITEMS,...MARQUEE_ITEMS,...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden py-3" style={{ background:"#7B2D6E", borderBottom:"1px solid #5A1F50" }}>
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {items.map((item, i) => (
          <span key={i} className="font-body font-medium text-[9px] tracking-[0.4em] uppercase"
            style={{ color: item === "·" ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.7)" }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
