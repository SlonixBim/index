import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

async function getGoogleAccessToken(
  serviceAccountEmail: string,
  privateKeyPem: string
): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: serviceAccountEmail,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encode = (obj: object) =>
    Buffer.from(JSON.stringify(obj))
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

  const signingInput = `${encode(header)}.${encode(payload)}`;

  const { createSign } = await import("crypto");
  const sign = createSign("RSA-SHA256");
  sign.update(signingInput);
  const signature = sign
    .sign(privateKeyPem, "base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const jwt = `${signingInput}.${signature}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });

  const tokenData = (await tokenRes.json()) as { access_token: string };
  return tokenData.access_token;
}

async function appendToSheet(
  sheetId: string,
  serviceAccountEmail: string,
  privateKeyPem: string,
  row: string[]
): Promise<void> {
  const accessToken = await getGoogleAccessToken(serviceAccountEmail, privateKeyPem);
  const range = "Enrollments!A:O";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;

  await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ values: [row] }),
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      dob,
      city,
      education,
      college,
      yearOfPassout,
      currentStatus,
      course,
      batchTiming,
      hearAboutUs,
      message,
    } = req.body;

    if (!name || !email || !phone || !course) {
      return res
        .status(400)
        .json({ error: "Name, email, phone, and course are required." });
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    const statusStr = Array.isArray(currentStatus)
      ? currentStatus.join(", ")
      : currentStatus || "";

    // 1. Save to Google Sheets
    try {
      const sheetId = process.env.GOOGLE_SHEET_ID || "";
      const saEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "";
      const privateKey = (process.env.GOOGLE_PRIVATE_KEY || "").replace(
        /\\n/g,
        "\n"
      );

      if (sheetId && saEmail && privateKey) {
        const row = [
          timestamp,
          name,
          email,
          phone,
          dob || "",
          city || "",
          education || "",
          college || "",
          yearOfPassout || "",
          statusStr,
          course,
          batchTiming || "",
          hearAboutUs || "",
          message || "",
        ];
        await appendToSheet(sheetId, saEmail, privateKey, row);
      }
    } catch (sheetError) {
      console.error("Google Sheets error:", sheetError);
    }

    // 2. Send notification email to team
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Slonix Enrollments <onboarding@resend.dev>",
      to: "slonixbim.team@gmail.com",
      subject: `🎓 New Enrollment: ${name} → ${course}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Enrollment: ${course}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city || "—"}</p>
          <p><strong>Education:</strong> ${education || "—"}</p>
          <p><strong>College:</strong> ${college || "—"}</p>
          <p><strong>Passout Year:</strong> ${yearOfPassout || "—"}</p>
          <p><strong>Status:</strong> ${statusStr || "—"}</p>
          <p><strong>Batch Timing:</strong> ${batchTiming || "—"}</p>
          <p><strong>Heard Via:</strong> ${hearAboutUs || "—"}</p>
          <p><strong>Message:</strong> ${message || "—"}</p>
          <p><strong>Submitted:</strong> ${timestamp}</p>
        </div>
      `,
    });

    // 3. Send confirmation email to student
    await resend.emails.send({
      from: "Slonix Solutions <onboarding@resend.dev>",
      to: email,
      subject: `🎓 Enrollment Confirmed — ${course} | Slonix Solutions`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">You're Enrolled!</h2>
          <p>Hi ${name.split(" ")[0]},</p>
          <p>Thank you for enrolling in <strong>${course}</strong>! Our team will contact you within 24 hours to confirm your batch details.</p>
          <p>Need help? Email us at <a href="mailto:slonixbim.team@gmail.com">slonixbim.team@gmail.com</a></p>
        </div>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Enrollment submitted successfully!" });
  } catch (error) {
    console.error("Enrollment error:", error);
    return res
      .status(500)
      .json({ error: "Failed to submit enrollment. Please try again." });
  }
}
