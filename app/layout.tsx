import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["200", "300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DC Luxury Hairs International | Premium Human Hair Extensions & Wigs",
  description:
    "DC Luxury Hairs International — Your premier destination for 100% human hair extensions, custom wigs, closure ventilation and professional installation. Nigeria & United Kingdom.",
  keywords:
    "luxury hair extensions Nigeria, human hair wigs UK, custom wigs Nigeria, raw hair bundles, HD lace closure, wig installation, DC Luxury Hairs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="grain">{children}</body>
    </html>
  );
}
