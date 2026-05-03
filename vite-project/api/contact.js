import { Resend } from "resend";

// eslint-disable-next-line no-undef
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, message } = req.body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "akotcharbadze@gmail.com",

      replyTo: email,

      subject: `New message from ${name} (${email})`,

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
    console.error(error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}