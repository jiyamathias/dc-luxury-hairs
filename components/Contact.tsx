"use client";
import { useState } from "react";
import { WA_URL } from "@/lib/constants";
import { buildEnquiryMsg, waOpen } from "@/lib/utils";

export default function Contact() {
  const [f, setF] = useState({ name:"", email:"", phone:"", message:"" });
  const [status, setStatus] = useState<"idle"|"error"|"success">("idle");
  const [errMsg, setErrMsg] = useState("");

  const up = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setF(p => ({ ...p, [e.target.name]:e.target.value }));
    if(status!=="idle") setStatus("idle");
  };

  const send = () => {
    if(!f.name.trim())    { setErrMsg("Please enter your name.");    setStatus("error"); return; }
    if(!f.message.trim()) { setErrMsg("Please enter your message."); setStatus("error"); return; }
    waOpen(buildEnquiryMsg(f.name, f.email, f.phone, f.message));
    setStatus("success");
    setF({ name:"", email:"", phone:"", message:"" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="bg-ivory">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] min-h-[600px]">

          {/* Left: Locations */}
          <div className="px-8 md:px-14 py-20">
            <div className="eyebrow mb-4">Find Us</div>
            <h2 className="font-display font-normal leading-[1.15] mb-4"
              style={{ fontSize:"clamp(30px,3.5vw,48px)", color:"#1A0A17" }}>
              Two Nations.<br/>
              <em style={{ color:"#7B2D6E", fontStyle:"italic" }}>One Standard.</em>
            </h2>
            <p className="font-body font-light text-[13px] leading-[2] mb-10 max-w-[360px]"
              style={{ color:"#8B7A87" }}>
              Whether you&rsquo;re in Nigeria or the United Kingdom, the same world-class experience
              finds you.
            </p>

            {/* Location cards */}
            {[
              { flag:"🇳🇬", label:"Nigeria Headquarters", addr:"No 155, Agbor-Eku Road\nObiaruku 322114, Delta State\nNigeria" },
              { flag:"🇬🇧", label:"United Kingdom",       addr:"Coventry Business Park\nHolbrooks Lane, Coventry\nWest Midlands, CV6 4BQ" },
            ].map(loc => (
              <div key={loc.label} className="flex gap-4 p-6 mb-3 border transition-colors hover:border-plum-mist"
                style={{ borderColor:"#EBC5E0", background:"white" }}>
                <span className="text-[26px] flex-shrink-0">{loc.flag}</span>
                <div>
                  <div className="font-body font-semibold text-[9px] tracking-[0.35em] uppercase mb-2"
                    style={{ color:"#7B2D6E" }}>{loc.label}</div>
                  <div className="font-body font-light text-[12px] leading-[1.9] mb-2 whitespace-pre-line"
                    style={{ color:"#8B7A87" }}>{loc.addr}</div>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                    className="font-body text-[12px] transition-colors hover:opacity-70"
                    style={{ color:"#7B2D6E" }}>+234 903 526 9607</a>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-plum-mist"/>

          {/* Right: Form */}
          <div className="px-8 md:px-14 py-20" style={{ background:"#FAF2FA" }}>
            <div className="eyebrow mb-4">Get In Touch</div>
            <h3 className="font-display font-normal italic mb-8"
              style={{ fontSize:"clamp(26px,2.5vw,40px)", color:"#1A0A17" }}>
              Begin Your <span style={{ color:"#7B2D6E" }}>Hair Journey</span>
            </h3>

            <div className="flex flex-col gap-3 mb-5">
              {[
                { key:"name",    label:"Full Name *",      type:"text",  ph:"Your full name" },
                { key:"email",   label:"Email Address",    type:"email", ph:"your@email.com" },
                { key:"phone",   label:"Phone / WhatsApp", type:"text",  ph:"+234 or +44..." },
              ].map(({key,label,type,ph}) => (
                <div key={key}>
                  <label className="font-body font-semibold text-[9px] tracking-[0.4em] uppercase block mb-1.5"
                    style={{ color:"#C4B0BF" }}>{label}</label>
                  <input name={key} type={type}
                    value={f[key as keyof typeof f]}
                    onChange={up} placeholder={ph}
                    className="field-input"
                    style={{ borderColor: status==="error"&&key==="name"&&!f.name.trim() ? "rgba(200,60,60,0.5)" : undefined }}/>
                </div>
              ))}
              <div>
                <label className="font-body font-semibold text-[9px] tracking-[0.4em] uppercase block mb-1.5"
                  style={{ color:"#C4B0BF" }}>Your Message *</label>
                <textarea name="message" rows={4} value={f.message} onChange={up}
                  placeholder="Tell us what you're looking for…"
                  className="field-input resize-none"
                  style={{ borderColor: status==="error"&&!f.message.trim() ? "rgba(200,60,60,0.5)" : undefined }}/>
              </div>
            </div>

            {status==="error" && (
              <div className="font-body text-[11px] px-4 py-3 mb-4 border"
                style={{ color:"#cc4444", borderColor:"rgba(200,60,60,0.3)", background:"rgba(200,60,60,0.04)" }}>
                {errMsg}
              </div>
            )}
            {status==="success" && (
              <div className="font-body text-[11px] px-4 py-3 mb-4 border"
                style={{ color:"#7B2D6E", borderColor:"rgba(123,45,110,0.25)", background:"rgba(123,45,110,0.05)" }}>
                ✓ WhatsApp is opening with your message. Thank you!
              </div>
            )}

            <div className="flex gap-3">
              <button onClick={send} className="btn-plum flex-1">
                📲 Send via WhatsApp
              </button>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="btn-outline flex-1 text-center">
                Direct Chat
              </a>
            </div>
            <p className="font-body font-light text-center text-[10px] mt-4" style={{ color:"#C4B0BF" }}>
              Clicking &ldquo;Send via WhatsApp&rdquo; opens WhatsApp with your message pre-filled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
