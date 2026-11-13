import { addLead } from "../../../lib/db";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { name, email } = await req.json();
    if (email) await addLead((name || "").slice(0, 120), String(email).slice(0, 160));
  } catch (e) {
    console.error("checkout lead", e);
  }
  // Nunca bloquea la venta: respondemos ok aunque falle el guardado.
  return Response.json({ ok: true });
}
