import { WA_NUMBER } from "./constants";
import type { CartItem } from "./constants";

export function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
}

export function waOpen(msg: string) {
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
}

export function buildOrderMsg(name: string, phone: string, loc: string, cart: CartItem[], total: number) {
  return [
    "👑 *NEW ORDER — DC LUXURY HAIRS INT'L*", "",
    `*Name:* ${name}`,
    phone ? `*Phone:* ${phone}` : null,
    loc   ? `*Delivery:* ${loc}` : null, "",
    "*─── ORDER DETAILS ───*",
    ...cart.map(i => `  • ${i.name} ×${i.qty}  →  ₦${(i.price*i.qty).toLocaleString()}`), "",
    `*TOTAL: ₦${total.toLocaleString()}*`, "",
    "Please confirm availability & share payment details. Thank you! 🙏",
  ].filter((l): l is string => l !== null).join("\n");
}

export function buildEnquiryMsg(name: string, email: string, phone: string, message: string) {
  return [
    "✨ *ENQUIRY — DC LUXURY HAIRS INT'L*", "",
    `*Name:* ${name}`,
    email   ? `*Email:* ${email}`   : null,
    phone   ? `*Phone:* ${phone}`   : null, "",
    "*Message:*", message, "",
    "_Sent via DC Luxury Hairs website._",
  ].filter((l): l is string => l !== null).join("\n");
}
