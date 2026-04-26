import { connectDB } from "@/lib/db";
import Sub from "@/models/Subscription";
import { scrapeCity } from "@/lib/scraper";
import { cities } from "@/data/cities";
import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  const { email, city, keyword } = await req.json();
  await connectDB();

  await Sub.create({ userEmail: email, city, keyword });

  const cityObj = cities.find(c => c.name === city);
  const results = await scrapeCity(cityObj!.website, keyword);
await sendMail(
  email,
  city,
  keyword,
  results,
  cityObj!.website
);

  return Response.json({ results });
}