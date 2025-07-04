const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail({ to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ionos.fr',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Formulaire Site" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email envoyé :', info.messageId);
    return { success: true };
  } catch (error) {
    console.error('Erreur SMTP :', error);
    return { success: false, error };
  }
}

module.exports = sendEmail;
