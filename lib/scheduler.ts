import cron from "node-cron";
import axios from "axios";
import * as cheerio from "cheerio";
import User from "@/models/User";
import { connectDB } from "./db";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// sample city dataset
const cityWebsites: any = {
  Delhi: "https://delhi.gov.in",
  Mumbai: "https://mumbai.gov.in",
  Ghaziabad: "https://ghaziabad.nic.in",
};

export const startScheduler = () => {
  cron.schedule("*/2 * * * *", async () => {
    console.log("Running scheduler...");

    await connectDB();

    const users = await User.find();

    for (const user of users) {
      const url = cityWebsites[user.city];

      if (!url) continue;

      try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const text = $("body").text().toLowerCase();

        if (
  text.includes(user.keyword.toLowerCase()) &&
  (!user.lastSent || Date.now() - user.lastSent > 1000 * 60 * 60)
) {
  // send email

  user.lastSent = new Date();
  await user.save();
}
      } catch (err) {
        console.log("Error scraping:", err);
      }
    }
  });
};