export const WA_NUMBER = "2349035269607";
export const WA_URL    = `https://wa.me/${WA_NUMBER}`;

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  length: string;
  description: string;
  badge?: string | null;
  image: string;
}
export interface CartItem extends Product { qty: number; }

export const PRODUCTS: Product[] = [
  { id:1,  name:"Raw Vietnamese Straight",  category:"Extensions", price:85000,  length:"18–30 in", description:"100% raw unprocessed Vietnamese hair. Silky straight, cuticle-aligned, zero shedding.",   badge:"Bestseller", image:"https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=700&q=82&fit=crop&crop=top" },
  { id:2,  name:"Deep Wave Bundle",          category:"Extensions", price:72000,  length:"14–28 in", description:"Luscious deep wave pattern with natural bounce and full volume. Colour-safe & heat-friendly.", badge:"New Arrival", image:"https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=82&fit=crop&crop=top" },
  { id:3,  name:"Body Wave Brazilian",       category:"Extensions", price:68000,  length:"16–30 in", description:"Premium Brazilian body wave with natural movement and high lustre.",                        badge:null,        image:"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=700&q=82&fit=crop&crop=top" },
  { id:4,  name:"Kinky Curly Bundle",        category:"Extensions", price:75000,  length:"12–24 in", description:"Authentic kinky curly texture. Minimal shedding, maximum volume and definition.",           badge:"Popular",   image:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=700&q=82&fit=crop&crop=top" },
  { id:5,  name:"Loose Wave Peruvian",       category:"Extensions", price:70000,  length:"14–28 in", description:"Soft, flowing loose waves from premium Peruvian donor hair with natural shine.",             badge:null,        image:"https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=700&q=82&fit=crop" },
  { id:6,  name:"613 Blonde Bundle",         category:"Extensions", price:95000,  length:"16–28 in", description:"Luxurious platinum blonde human hair. Pre-lightened to 613, ready to tone.",                badge:"Luxury",    image:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=700&q=82&fit=crop&crop=top" },
  { id:7,  name:"HD Lace Front Wig",         category:"Wigs",       price:120000, length:"18–26 in", description:"13×4 HD lace frontal wig. Pre-plucked hairline, bleached knots, baby hairs.",               badge:"Premium",   image:"https://images.unsplash.com/photo-1522336572468-97b06e8ef143?w=700&q=82&fit=crop&crop=top" },
  { id:8,  name:"Full Lace Wig – Curly",     category:"Wigs",       price:185000, length:"16–22 in", description:"360° full lace construction. Curly, bouncy and indistinguishable from natural hair.",        badge:"Signature", image:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=82&fit=crop&crop=top" },
  { id:9,  name:"Glueless Body Wave Wig",    category:"Wigs",       price:138000, length:"20–28 in", description:"Ready-to-wear glueless wig with adjustable band. On and go — no glue, no fuss.",            badge:"Trending",  image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=700&q=82&fit=crop&crop=top" },
  { id:10, name:"Custom 4×4 Closure",        category:"Closures",   price:45000,  length:"4×4 Lace", description:"Hand-ventilated HD lace closure matched to your natural hair texture and colour.",           badge:null,        image:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=82&fit=crop&crop=top" },
  { id:11, name:"5×5 HD Lace Closure",       category:"Closures",   price:55000,  length:"5×5 Lace", description:"Wider coverage HD closure with ultra-thin lace for seamless blending.",                      badge:"New",       image:"https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=700&q=82&fit=crop&crop=top" },
  { id:12, name:"Wig Revamp Service",         category:"Services",   price:35000,  length:"Service",  description:"Complete wig restoration — deep conditioning, detangling, restyling to like-new condition.", badge:"Service",   image:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=700&q=82&fit=crop&crop=top" },
  { id:13, name:"Professional Installation", category:"Services",   price:25000,  length:"Service",  description:"Expert wig installation by certified stylists. Glue/glueless with baby hair styling.",         badge:"Service",   image:"https://images.unsplash.com/photo-1525450824786-227cbef70703?w=700&q=82&fit=crop&crop=top" },
];

export const CATEGORIES = ["All","Extensions","Wigs","Closures","Services"];

export const BADGE_COLORS: Record<string,{ bg:string; text:string }> = {
  Bestseller: { bg:"#7B2D6E", text:"#FDF8FC" },
  Luxury:     { bg:"#3D1238", text:"#F2D9ED" },
  "New Arrival":{ bg:"#5A1F50", text:"#FDF8FC" },
  Popular:    { bg:"#A84090", text:"#FDF8FC" },
  Premium:    { bg:"#3D1238", text:"#F2D9ED" },
  Signature:  { bg:"#7B2D6E", text:"#FDF8FC" },
  Trending:   { bg:"#A84090", text:"#FDF8FC" },
  Service:    { bg:"#8B7A87", text:"#FDF8FC" },
  New:        { bg:"#5A1F50", text:"#F2D9ED" },
};

export const SERVICES_DATA = [
  { icon:"✦", title:"Premium Extensions",       desc:"All textures. Vietnamese, Brazilian, Peruvian, Indian — only the finest raw donor hair.",         img:"https://images.unsplash.com/photo-1562322140-8baeececf3df?w=700&q=80&fit=crop&crop=top" },
  { icon:"✧", title:"Custom & Ready-Made Wigs", desc:"Bespoke wig construction tailored to your head shape, desired density and style vision.",         img:"https://images.unsplash.com/photo-1525450824786-227cbef70703?w=700&q=80&fit=crop&crop=top" },
  { icon:"◎", title:"Closure Ventilation",       desc:"Expert hand-ventilated HD lace closures that mimic a natural scalp, invisibly.",                   img:"https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=700&q=80&fit=crop&crop=top" },
  { icon:"◐", title:"Wig Revamping",             desc:"Restore, refresh and revitalize your existing wig. Deep conditioning and professional restyling.", img:"https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=700&q=80&fit=crop&crop=top" },
  { icon:"◑", title:"Professional Installation", desc:"Seamless application by certified stylists. Natural baby hair styling and perfect fit guaranteed.", img:"https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=700&q=80&fit=crop&crop=top" },
  { icon:"◈", title:"Import & Export",           desc:"Global luxury hair sourcing and bulk supply for salons, resellers and hair brands worldwide.",      img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&fit=crop" },
];

export const PROCESS_STEPS = [
  { n:"01", icon:"🛍", title:"Browse & Select",      body:"Explore the curated collection. Choose your preferred hair type, texture, and length." },
  { n:"02", icon:"🛒", title:"Build Your Bag",        body:"Add items with quantities. Review selections in the live cart with your total estimate." },
  { n:"03", icon:"📲", title:"WhatsApp Checkout",     body:"Enter your name and location. Your full order is auto-formatted and sent to our team." },
  { n:"04", icon:"🚚", title:"Delivered to You",      body:"We confirm, arrange payment and deliver across Nigeria and the United Kingdom." },
];

export const TESTIMONIALS = [
  { stars:5, quote:"The raw Vietnamese bundles exceeded every expectation — zero shedding, incredibly silky, and delivery to Lagos was so fast!", author:"Adaeze O.",   loc:"Lagos, Nigeria" },
  { stars:5, quote:"I've ordered my full lace wigs from DC Luxury Hairs for a year now. The closure ventilation is undetectable. Absolute perfection.", author:"Blessing A.", loc:"Coventry, UK" },
  { stars:5, quote:"Ordering via WhatsApp was so seamless. Got my deep wave bundles delivered to Abuja in no time. The 613 wig is everything!", author:"Chidinma E.", loc:"Abuja, Nigeria" },
];

export const MARQUEE_ITEMS = [
  "Premium Extensions","·","Custom Wigs","·","HD Lace Closures","·","Raw Bundles","·",
  "Nigeria & UK Delivery","·","Import / Export","·","100% Human Hair","·",
];
