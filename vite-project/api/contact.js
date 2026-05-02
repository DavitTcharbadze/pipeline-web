/* eslint-disable no-undef */
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const TO_EMAIL = 'tcharbadzedavit@gmail.com';
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, phone, message, consent } = req.body;

    if (!name || !email || !phone || !message || !consent) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const emailMessage = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        replyTo: email,
        subject: 'TEST - New message from Pipeline website',
        text: `
New contact form message

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

Consent given: ${consent ? 'Yes' : 'No'}
    `,
        html: `
      <h2>New contact form message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
      <p><strong>Consent given:</strong> ${consent ? 'Yes' : 'No'}</p>
    `,
    };

    try {
        console.log('KEY EXISTS:', !!process.env.SENDGRID_API_KEY);
        console.log('KEY START:', process.env.SENDGRID_API_KEY?.slice(0, 5));
        await sgMail.send(emailMessage);

        return res.status(200).json({
            success: true,
            message: 'Email sent successfully',
        });
    } catch (error) {
        console.error(error?.response?.body || error);

        return res.status(500).json({
            error: 'Failed to send email',
        });
    }
}