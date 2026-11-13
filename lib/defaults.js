// Valores por defecto del sitio. El admin los sobrescribe en la base (tabla settings).
export const DEFAULTS = {
  heroTitle: "Estás agotado/a… pero en cuanto apoyas la cabeza, tu mente se enciende. Y mañana, otra vez con 4 horas.",
  priceOld: "64,00",
  priceNow: "37,90",
  coverImg: "/mockup.png",
  heroBgImg: "/hero-bg.png",
  authorImg: "",
  authorName: "Equipo Noches en Calma",
  authorDesc:
    "Noches en Calma nace de una idea simple: dormir bien no debería depender de pastillas ni de cambiar toda tu vida.\n\nCada técnica de esta guía está basada en principios de regulación del sistema nervioso —respiración, estimulación del nervio vago e higiene del sueño— y organizada en un plan de 21 noches, paso a paso, para que cualquiera pueda seguirlo aunque trabaje mucho. Sin teoría interminable. Hábitos reales, pensados para tu día a día.",
  checkoutUrl: "https://pago.mundipay.com/TU-LINK-AQUI",
  supportEmail: "suporteebookcontato26@gmail.com",

  // Testimonios editables desde el admin. Reemplázalos por reseñas REALES de tus clientes.
  testi1_text: "Llevaba meses despertándome a las 4. El protocolo de la madrugada me quitó la angustia de mirar el reloj.",
  testi1_name: "Marta R.",
  testi1_place: "Valencia",
  testi2_text: "Trabajo mucho y llegaba hecho polvo. Las pausas del capítulo 5 son lo mejor: pequeñas pero se notan.",
  testi2_name: "Javier L.",
  testi2_place: "Madrid",
  testi3_text: "La respiración de 5 minutos la uso hasta en el coche antes de entrar a una reunión. Muy fácil de seguir.",
  testi3_name: "Laura G.",
  testi3_place: "Sevilla",
};

export const SETTING_KEYS = Object.keys(DEFAULTS);

export function withDefaults(s) {
  return { ...DEFAULTS, ...(s || {}) };
}
