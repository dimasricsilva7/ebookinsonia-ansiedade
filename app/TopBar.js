"use client";
import { useEffect, useState } from "react";

const DIAS = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

// Oferta que nombra el día en que la persona entra al sitio (hora local del visitante).
export default function TopBar({ priceNow, priceOld }) {
  const [dia, setDia] = useState("");
  useEffect(() => setDia(DIAS[new Date().getDay()]), []);

  const cap = dia ? dia.charAt(0).toUpperCase() + dia.slice(1) : "";
  return (
    <div className="topbar">
      🌙 <b>Oferta de {cap || "lanzamiento"}:</b> {priceNow} € en lugar de <s>{priceOld}</s> € ·
      {dia ? " solo hoy" : " acceso inmediato"}
    </div>
  );
}
