"use client";
import { useState } from "react";

// CTA de compra: pide nombre + correo, los graba y manda al checkout (conservando UTMs/perfil).
export default function BuyButton({ url, children, sub, className = "btn", block }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);

  async function go(e) {
    e.preventDefault();
    setBusy(true);
    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
    } catch {}
    const qs = typeof location !== "undefined" ? location.search.slice(1) : "";
    const dest = qs ? url + (url.includes("?") ? "&" : "?") + qs : url;
    if (typeof window !== "undefined" && window.track) window.track("InitiateCheckout");
    window.location.href = dest;
  }

  const cls = className + (block ? " block" : "");
  return (
    <>
      <button type="button" className={cls} onClick={() => setOpen(true)}>
        {children}
        {sub && <span className="btn-sub">{sub}</span>}
      </button>

      {open && (
        <div className="modal" onClick={() => !busy && setOpen(false)}>
          <form className="modal-card" onClick={(e) => e.stopPropagation()} onSubmit={go}>
            <h3>¡Ya casi es tuya!</h3>
            <p>Déjanos tus datos para enviarte el acceso a tu guía.</p>
            <input required placeholder="Tu nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input required type="email" placeholder="Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button className="btn block" disabled={busy}>
              {busy ? "Redirigiendo…" : "Ir al pago seguro →"}
            </button>
            <button type="button" className="modal-close" onClick={() => setOpen(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
