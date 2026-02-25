"use client";
import { useCart } from "@/lib/CartContext";

export default function CartPanel({ open, onClose, onCheckout }:
  { open:boolean; onClose:()=>void; onCheckout:()=>void }) {
  const { cart, removeFromCart, updateQty, totalItems, totalPrice } = useCart();

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-[400] transition-opacity duration-350 bg-black/50 backdrop-blur-sm ${open?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"}`}/>
      <div className={`fixed top-0 right-0 bottom-0 z-[401] flex flex-col bg-ivory border-l transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open?"translate-x-0":"translate-x-full"}`}
        style={{ width:"min(420px,100vw)", borderColor:"#EBC5E0" }}>

        <div className="flex items-center justify-between px-7 py-6 border-b" style={{ borderColor:"#F0DCF0" }}>
          <div>
            <div className="eyebrow text-[9px] mb-1">Your Bag</div>
            <div className="font-display font-normal text-[22px]" style={{ color:"#1A0A17" }}>
              {totalItems} item{totalItems!==1?"s":""}
            </div>
          </div>
          <button onClick={onClose}
            className="w-9 h-9 border flex items-center justify-center text-[13px] transition-colors hover:border-plum"
            style={{ borderColor:"#EBC5E0", color:"#8B7A87" }}>✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-7 py-5">
          {cart.length===0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <div className="font-display italic text-[52px] mb-3" style={{ color:"#EBC5E0" }}>◇</div>
              <div className="font-display italic text-[20px]" style={{ color:"#C4B0BF" }}>Your bag is empty</div>
              <p className="font-body font-light text-[11px] mt-2" style={{ color:"#C4B0BF" }}>
                Browse the collection and add something beautiful.
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="border-b py-4" style={{ borderColor:"#F0DCF0" }}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="font-display text-[17px] text-ink">{item.name}</div>
                    <div className="font-body text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color:"#C4B0BF" }}>
                      {item.category} · {item.length}
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}
                    className="text-[13px] ml-2 transition-colors hover:text-plum" style={{ color:"#C4B0BF" }}>✕</button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {[["−",-1],["+"  ,1]].map(([sym,d]) => (
                      <button key={sym as string} onClick={() => updateQty(item.id, item.qty+(d as number))}
                        className="w-7 h-7 border text-[14px] flex items-center justify-center transition-colors hover:border-plum hover:text-plum"
                        style={{ borderColor:"#EBC5E0", color:"#8B7A87" }}>{sym}</button>
                    ))}
                    <span className="font-body text-[13px] w-6 text-center" style={{ color:"#1A0A17" }}>{item.qty}</span>
                  </div>
                  <div className="font-display text-[20px]" style={{ color:"#7B2D6E" }}>
                    ₦{(item.price*item.qty).toLocaleString()}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length>0 && (
          <div className="px-7 py-5 border-t" style={{ borderColor:"#F0DCF0" }}>
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-body font-medium text-[9px] tracking-[0.35em] uppercase" style={{ color:"#C4B0BF" }}>Estimated Total</span>
              <span className="font-display text-[28px]" style={{ color:"#7B2D6E" }}>₦{totalPrice.toLocaleString()}</span>
            </div>
            <button onClick={() => { onClose(); onCheckout(); }} className="btn-plum w-full text-center">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
