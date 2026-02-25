# DC Luxury Hairs International — Next.js Website

Premium editorial-style website for DC Luxury Hairs International.

## Design System

- **Brand colour**: Plum `#7B2D6E` (from logo) + Plum Dark `#3D1238` + Soft Pink `#C470B0`
- **Backgrounds**: Ivory `#FDF8FC` + Petal `#FAF2FA` (light sections) + Plum Dark (hero/process/footer)
- **Fonts**: Playfair Display (editorial display) + DM Sans (clean body)
- **Aesthetic**: Editorial fashion magazine — asymmetric layouts, photo bleeds, no generic card-box patterns

## Stack

- **Next.js 14** (App Router, Client Components)
- **TypeScript**
- **Tailwind CSS** with custom brand tokens
- **DM Sans + Playfair Display** via `next/font/google`

## Quick Start

```bash
npm install
npm run dev   # → http://localhost:3000
npm run build # production
```

## Update WhatsApp Number

Edit one line in `lib/constants.ts`:
```ts
export const WA_NUMBER = "2349035269607";
```

## Customise

| What | File |
|------|------|
| Products & prices | `lib/constants.ts` → `PRODUCTS` |
| Services | `lib/constants.ts` → `SERVICES_DATA` |
| Brand colours | `tailwind.config.ts` + `app/globals.css` |
| Fonts | `app/layout.tsx` |
| Addresses | `components/Contact.tsx` |

## Deploy

```bash
npx vercel   # instant deploy to Vercel
```
