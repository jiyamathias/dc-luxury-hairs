"use client";
import { useState } from "react";
import { useCart } from "@/lib/CartContext";
import { buildOrderMsg, waOpen } from "@/lib/utils";

export default function CheckoutPanel({ open, onClose, onBack }:
  { open:boolean; onClose:()=>void; onBack:()=>void }) {
  const [name, setName]   = useState("");
  const [phone, setPhone] = useState("");
  const [loc, setLoc]     = useState("");
  const { cart, totalPrice, clearCart } = useCart();

  const send = () => {
    if(!name.trim()) return;
    waOpen(buildOrderMsg(name, phone, loc, cart, totalPrice));
    clearCart(); onClose();
    setName(""); setPhone(""); setLoc("");
  };

  const inp = "field-input";
  const lbl = "font-body font-semibold text-[9px] tracking-[0.4em] uppercase block mb-1.5";

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-[400] transition-opacity bg-black/50 backdrop-blur-sm ${open?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}/>
      <div className={`fixed top-0 right-0 bottom-0 z-[401] flex flex-col bg-ivory border-l transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open?"translate-x-0":"translate-x-full"}`}
        style={{ width:"min(460px,100vw)", borderColor:"#EBC5E0" }}>

        <div className="flex items-center justify-between px-7 py-6 border-b" style={{ borderColor:"#F0DCF0" }}>
          <div>
            <div className="eyebrow text-[9px] mb-1">Checkout</div>
            <div className="font-display italic font-normal text-[22px]" style={{ color:"#1A0A17" }}>Almost There</div>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 border flex items-center justify-center text-[13px] transition-colors hover:border-plum"
            style={{ borderColor:"#EBC5E0", color:"#8B7A87" }}>✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-5">
          <div className="font-body font-medium text-[9px] tracking-[0.35em] uppercase mb-3" style={{ color:"#C4B0BF" }}>Your Details</div>
          <div className="flex flex-col gap-3 mb-6">
            <div>
              <label className={lbl} style={{ color:"#C4B0BF" }}>Full Name *</label>
              <input type="text" value={name} onChange={e=>setName(e.target.value)}
                placeholder="Enter your full name" className={inp}
                style={{ borderColor:!name.trim()&&name!==""?"rgba(200,60,60,0.4)":undefined }}/>
            </div>
            <div>
              <label className={lbl} style={{ color:"#C4B0BF" }}>Phone / WhatsApp</label>
              <input type="text" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="+234 or +44…" className={inp}/>
            </div>
            <div>
              <label className={lbl} style={{ color:"#C4B0BF" }}>Delivery Location</label>
              <input type="text" value={loc} onChange={e=>setLoc(e.target.value)} placeholder="City, State / Country" className={inp}/>
            </div>
          </div>

          <div className="font-body font-medium text-[9px] tracking-[0.35em] uppercase mb-3" style={{ color:"#C4B0BF" }}>Order Summary</div>
          <div className="flex flex-col gap-1.5 mb-4">
            {cart.map(i => (
              <div key={i.id} className="flex items-center justify-between px-4 py-2.5 border"
                style={{ borderColor:"#F0DCF0", background:"white" }}>
                <div className="font-body text-[11px]" style={{ color:"#8B7A87" }}>
                  {i.name} <span style={{ color:"#C4B0BF" }}>×{i.qty}</span>
                </div>
                <div className="font-display text-[16px]" style={{ color:"#7B2D6E" }}>
                  ₦{(i.price*i.qty).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 mb-4 border" style={{ borderColor:"rgba(123,45,110,0.15)", background:"rgba(123,45,110,0.03)" }}>
            <div className="font-body font-semibold text-[9px] tracking-[0.35em] uppercase mb-2" style={{ color:"#7B2D6E" }}>
              📲 How It Works
            </div>
            <p className="font-body font-light text-[11px] leading-[1.85]" style={{ color:"#8B7A87" }}>
              Your complete order opens in WhatsApp pre-formatted. Our team confirms stock, arranges payment, and delivers to Nigeria or the UK.
            </p>
          </div>

          <div className="flex items-baseline justify-between">
            <span className="font-body text-[9px] tracking-[0.35em] uppercase" style={{ color:"#C4B0BF" }}>Total</span>
            <span className="font-display text-[28px]" style={{ color:"#7B2D6E" }}>₦{totalPrice.toLocaleString()}</span>
          </div>
        </div>

        <div className="px-7 py-5 border-t" style={{ borderColor:"#F0DCF0" }}>
          <button onClick={send} disabled={!name.trim()}
            className="btn-plum w-full mb-2.5 disabled:opacity-40 disabled:cursor-not-allowed text-center">
            📲 Send Order via WhatsApp
          </button>
          <button onClick={onBack}
            className="w-full font-body font-medium text-[10px] tracking-[0.2em] uppercase py-3 border transition-colors hover:border-plum hover:text-plum text-center"
            style={{ borderColor:"#EBC5E0", color:"#C4B0BF", background:"transparent" }}>
            ← Back to Bag
          </button>
        </div>
      </div>
    </>
  );
}
