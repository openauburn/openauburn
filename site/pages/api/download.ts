import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Get the `data_access_url`, `page`, and `page_size` from the query parameters
    const { page = 1, page_size = 100, data_access_url } = req.query;

    // Ensure the `data_access_url` is provided
    if (!data_access_url || typeof data_access_url !== "string") {
      return res
        .status(400)
        .json({ error: "Missing or invalid data_access_url" });
    }

    // Make the request to the external API with the provided `data_access_url`
    const response = await fetch(
      `${data_access_url}?page=${page}&page_size=${page_size}&_incognito`
    );
    const result = await response.json();

    if (response.ok) {
      res.status(200).json(result);
    } else {
      res
        .status(response.status)
        .json({ error: result.error || "Unknown error" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error fetching data from the external API" });
  }
}
