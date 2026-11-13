import { cookies } from "next/headers";
import { getLeads } from "../../../../lib/db";

export const dynamic = "force-dynamic";

function csvCell(v) {
  const s = (v ?? "").toString();
  return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

export async function GET() {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw || cookies().get("admin")?.value !== pw) {
    return new Response("No autorizado", { status: 401 });
  }
  const leads = await getLeads();
  const rows = [["nombre", "email", "fecha"]].concat(
    leads.map((l) => [l.name || "", l.email || "", new Date(l.created_at).toISOString()])
  );
  const csv = "﻿" + rows.map((r) => r.map(csvCell).join(",")).join("\r\n");
  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="clientes-noches-en-calma.csv"`,
    },
  });
}
