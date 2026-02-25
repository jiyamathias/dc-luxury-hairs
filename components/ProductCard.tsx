"use client";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { BADGE_COLORS } from "@/lib/constants";
import type { Product } from "@/lib/constants";

export default function ProductCard({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="product-card-shimmer bg-lux-card border border-lux-border flex flex-col transition-all duration-[350ms] hover:border-lux-border-l hover:-translate-y-[5px] hover:shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
      {/* Image */}
      <div className="overflow-hidden relative h-[240px]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-all duration-500 hover:scale-[1.03]"
          style={{ filter: "brightness(0.88) saturate(0.9)" }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.95) saturate(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0.88) saturate(0.9)")}
          loading="lazy"
        />
        {product.badge && (
          <div
            className="absolute top-3.5 left-3.5 font-sans font-extrabold tracking-[0.2em] uppercase text-white text-[8px] px-2.5 py-1"
            style={{ background: BADGE_COLORS[product.badge] || "#9a7520" }}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="font-sans font-semibold tracking-[0.35em] text-gold uppercase text-[8.5px] mb-2">
          {product.category}
        </div>
        <div className="font-serif font-normal text-lux-cream text-[22px] mb-1">
          {product.name}
        </div>
        <div className="font-sans text-[8.5px] tracking-[0.15em] text-[#555] mb-3">
          {product.length}
        </div>
        <p className="font-sans font-light text-lux-stone-dp text-[11px] leading-[1.85] flex-1 mb-5">
          {product.description}
        </p>

        <div className="divider-gold mb-3.5" />

        <div className="flex items-center justify-between gap-2.5">
          <div className="font-serif font-normal text-gold text-[26px]">
            ₦{product.price.toLocaleString()}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={99}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-[46px] h-[34px] text-center bg-[#1a1a1a] border border-lux-border text-lux-cream font-sans text-[12px] outline-none focus:border-gold transition-colors"
            />
            <button
              onClick={handleAdd}
              className={`font-sans font-extrabold tracking-[0.2em] uppercase text-[8.5px] px-3.5 py-2.5 transition-all duration-300 whitespace-nowrap ${
                added
                  ? "bg-[#1d5c2a] text-[#5cd88a]"
                  : "text-lux-black bg-gold-gradient hover:shadow-[0_4px_16px_rgba(201,169,110,0.3)]"
              }`}
            >
              {added ? "✓ Added" : "Add to Bag"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
