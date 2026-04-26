import { sendMail } from "@/lib/mailer";

export async function GET() {
  await sendMail(
    "nk298270@gmail.com", 
    "Delhi",
    "Road",
    [
      "Road maintenance update near Connaught Place",
      "Traffic diversion announced in South Delhi"
    ],
    "https://delhi.gov.in"
  );

  return Response.json({ message: "Test email sent" });
}