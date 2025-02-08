import { NextApiRequest, NextApiResponse } from "next";
import { JSDOM } from "jsdom";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { url } = req.query;

  if (!url || typeof url !== "string") {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    // Fetch the raw HTML from the URL
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" }, // Mimic a browser request
    });
    const html = await response.text();

    // Parse the HTML using JSDOM
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract OG image from meta tags
    const ogImage =
      document
        .querySelector('meta[property="og:image"]')
        ?.getAttribute("content") ||
      document
        .querySelector('meta[name="twitter:image"]')
        ?.getAttribute("content");

    if (!ogImage) {
      return res.status(404).json({ error: "OG image not found" });
    }

    res.status(200).json({ ogImage });
  } catch (error) {
    console.error("Error fetching OG image:", error);
    res.status(500).json({ error: "Failed to fetch OG image" });
  }
};

export default handler;
