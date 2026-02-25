"use client";
import { useState } from "react";
import { CartProvider } from "@/lib/CartContext";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Marquee       from "@/components/Marquee";
import About         from "@/components/About";
import Collections   from "@/components/Collections";
import Services      from "@/components/Services";
import Process       from "@/components/Process";
import CTABanner     from "@/components/CTABanner";
import Testimonials  from "@/components/Testimonials";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import CartPanel     from "@/components/CartPanel";
import CheckoutPanel from "@/components/CheckoutPanel";
import WAFab         from "@/components/WAFab";

export default function Home() {
  const [cartOpen,     setCartOpen]     = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Collections />
        <Services />
        <Process />
        <CTABanner />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WAFab />

      <CartPanel
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => setCheckoutOpen(true)}
      />
      <CheckoutPanel
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onBack={() => { setCheckoutOpen(false); setCartOpen(true); }}
      />
    </CartProvider>
  );
}
