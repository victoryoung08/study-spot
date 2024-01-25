// pages/api/userDetails.ts
import { getSession } from "next-auth/react";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (session && session.user) {
    const { user } = session;

    // Extract only the required properties from the user object
    const { id } = user;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users?filters[id][$eq]=${id}&populate=deep`,
      {
        next: { revalidate: 0 },
        cache: "no-cache",
      }
    );

    try {
      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        const errorData = await response.json(); // Read the response body once
        res.status(response.status).json({ error: errorData });
      }
    } catch (error) {
      console.error("Error processing response:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(401).json({ error: "User not authenticated" });
  }
}
