import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    const required = ["company", "name", "email", "location", "service", "details"];
    const missing = required.filter((key) => !data[key]);
    if (missing.length) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const to = process.env.PROJECT_SUPPORT_TO_EMAIL || "projects@aeronational.inc";
      const from = process.env.PROJECT_SUPPORT_FROM_EMAIL || "website@aeronational.inc";
      const html = `
        <h1>New Aero National Project-Support Request</h1>
        ${Object.entries(data).map(([key, value]) => `<p><strong>${key}:</strong> ${String(value)}</p>`).join("")}
      `;

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: data.email,
          subject: `Project Support Request — ${data.company}`,
          html
        })
      });

      if (!emailResponse.ok) {
        throw new Error("Email delivery failed");
      }
    } else {
      console.log("Project-support request:", data);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to submit. Please email projects@aeronational.inc." },
      { status: 500 }
    );
  }
}
