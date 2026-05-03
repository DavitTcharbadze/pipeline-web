import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev", // later change to your domain
      to: "akotcharbadze@gmail.com",

      reply_to: email, // 👈 THIS is the key change

      subject: `New message from ${name} (${email})`, // optional but helpful

      html: `
        <h2>Neue Nachricht</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Nachricht:</strong><br/> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent!" });

  } catch (error) {
    console.error(error); // 👈 add this for debugging
    return res.status(500).json({ error: "Failed to send email" });
  }
}