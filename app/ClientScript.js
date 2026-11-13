"use client";
import { useEffect } from "react";

// Mejora progresiva sobre el markup del servidor: banner de perfil, medidor de sueño y barra sticky.
export default function ClientScript() {
  useEffect(() => {
    const perf = { a: "Mente acelerada", m: "Despertar de madrugada", e: "Agotamiento acumulado", c: "Difícil desconectar" };
    const p = new URLSearchParams(location.search).get("perfil");
    const b = document.getElementById("banner");
    if (b && perf[p]) {
      b.textContent = "Tu resultado del test: Perfil «" + perf[p] + "». Esta guía incluye el plan pensado para ti.";
      b.style.display = "block";
    }

    const s = document.getElementById("hs");
    const v = document.getElementById("hv");
    const m = document.getElementById("hm");
    function u() {
      const h = +s.value;
      v.textContent = String(h).replace(".", ",") + " h";
      m.textContent = h < 5
        ? "Menos de 5 horas de forma habitual suele pasar factura: concentración, humor y ansiedad se resienten. No es tu culpa: hay una forma de revertirlo."
        : h < 7
        ? "Estás por debajo de las 7-9 horas que suelen recomendarse a adultos. Si además notas ansiedad o cansancio, merece la pena actuar ya."
        : "Dormir 7 horas o más es un buen punto de partida. Si aun así te levantas sin energía, la calidad del sueño es el siguiente paso.";
    }
    if (s && v && m) { s.addEventListener("input", u); u(); }

    const stk = document.getElementById("stk");
    const hero = document.querySelector(".hero");
    const off = document.getElementById("precio");
    let io;
    if (stk && hero && off && "IntersectionObserver" in window) {
      const vis = { h: true, o: false };
      io = new IntersectionObserver((es) => {
        es.forEach((e) => { vis[e.target === hero ? "h" : "o"] = e.isIntersecting; });
        stk.classList.toggle("on", !vis.h && !vis.o);
      });
      io.observe(hero); io.observe(off);
    }
    return () => { if (s) s.removeEventListener("input", u); if (io) io.disconnect(); };
  }, []);

  return null;
}
