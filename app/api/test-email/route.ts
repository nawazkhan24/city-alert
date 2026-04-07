import nodemailer from "nodemailer";

export async function GET() {
  try {
    console.log("EMAIL:", process.env.EMAIL_USER);
    console.log("PASS:", process.env.EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"City Alert" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Test Email ✅",
      text: "Email is working!",
    });

    console.log("Email sent:", info.response);

    return Response.json({ success: true });
  } catch (error: any) {
    console.log("EMAIL ERROR:", error);
    return Response.json({ success: false, error: error.message });
  }
}