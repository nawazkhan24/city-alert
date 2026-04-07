import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeCity = async (url: string, keyword: string) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  const results: string[] = [];

  $("a").each((_, el) => {
    const text = $(el).text().toLowerCase();
    if (text.includes(keyword.toLowerCase())) {
      results.push($(el).text());
    }
  });

  return results.slice(0, 5);
};