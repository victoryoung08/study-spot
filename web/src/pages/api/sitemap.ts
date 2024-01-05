import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    "https://study-spot-production.up.railway.app/api/sitemap/index.xml"
  );

  const data = await response.text();

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(data);
}
