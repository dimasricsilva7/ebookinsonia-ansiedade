import "./globals.css";

export const metadata = {
  title: "Noches en Calma · Guía de 21 días para dormir mejor y calmar la ansiedad",
  description:
    "Guía práctica con técnicas sencillas para calmar la mente, dormir de un tirón y recuperar tu energía. Acceso inmediato y garantía de 7 días.",
  openGraph: {
    title: "Noches en Calma · Duerme mejor, vive con calma",
    description: "Plan de 21 noches para dejar de dar vueltas en la cama. Acceso inmediato.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f1b3a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700&family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
