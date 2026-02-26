"use client";
import { useState } from "react";
import { PRODUCTS, CATEGORIES, BADGE_COLORS } from "@/lib/constants";
import type { Product } from "@/lib/constants";
import { useCart } from "@/lib/CartContext";

function ProductCard({ p }: { p: Product }) {
  const [qty, setQty]   = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart }   = useCart();

  const handle = () => {
    addToCart(p, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const bc = p.badge ? BADGE_COLORS[p.badge] : null;

  return (
    <div className="product-card bg-white group flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height:"260px" }}>
        <img src={p.image} alt={p.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
          style={{ filter:"saturate(0.88)" }} loading="lazy"/>
        {/* Overlay on hover */}
        <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{ background:"linear-gradient(to top, rgba(61,18,56,0.5) 0%, transparent 60%)" }}/>
        {bc && (
          <div className="absolute top-3 left-3 font-body font-semibold text-[8px] tracking-[0.2em] uppercase px-2.5 py-1"
            style={{ background:bc.bg, color:bc.text }}>
            {p.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        <div className="font-body font-medium text-[9px] tracking-[0.35em] uppercase mb-1.5"
          style={{ color:"#7B2D6E" }}>{p.category}</div>
        <div className="font-display font-normal text-ink text-[20px] leading-snug mb-1">{p.name}</div>
        <div className="font-body text-[9.5px] tracking-[0.1em] mb-3" style={{ color:"#C4B0BF" }}>{p.length}</div>
        <p className="font-body font-light text-[12px] leading-[1.8] flex-1 mb-5" style={{ color:"#8B7A87" }}>
          {p.description}
        </p>
        <div className="divider-plum mb-4"/>
        <div className="flex items-center justify-between gap-2">
          <div className="font-display text-[24px] leading-none" style={{ color:"#7B2D6E" }}>
            ₦{p.price.toLocaleString()}
          </div>
          <div className="flex items-center gap-2">
            <input type="number" min={1} max={99} value={qty}
              onChange={e => setQty(Math.max(1, parseInt(e.target.value)||1))}
              className="w-11 h-9 text-center font-body text-[13px] border outline-none"
              style={{ background:"#FAF2FA", borderColor:"#E0C8DC", color:"#1A0A17" }}/>
            <button onClick={handle}
              className="font-body font-semibold text-[9px] tracking-[0.18em] uppercase px-3.5 py-2.5 transition-all duration-300"
              style={{
                background: added ? "#2d6e3a" : "#7B2D6E",
                color: added ? "#a8e6b4" : "#FDF8FC",
                boxShadow: added ? "none" : "0 4px 14px rgba(123,45,110,0.25)"
              }}>
              {added ? "✓ Added" : "Add to Bag"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Collections() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);

  return (
    <section id="collections" className="py-24 px-8 md:px-14" style={{ background:"#FAF2FA" }}>
      {/* Heading */}
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-3">Curated Collection</div>
            <h2 className="font-display font-normal" style={{ fontSize:"clamp(34px,4vw,56px)", color:"#1A0A17" }}>
              The Luxury Edit
            </h2>
          </div>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className="font-body font-medium text-[10px] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200"
                style={{
                  borderColor: cat===c ? "#7B2D6E" : "#E0C8DC",
                  background:  cat===c ? "#7B2D6E" : "transparent",
                  color:       cat===c ? "#FDF8FC"  : "#8B7A87",
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(p => <ProductCard key={p.id} p={p}/>)}
        </div>
      </div>
    </section>
  );
}
