import nodemailer from "nodemailer";

export const sendMail = async (to: string, content: string[]) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: "City Updates",
    html: `<ul>${content.map(c => `<li>${c}</li>`).join("")}</ul>`,
  });
};