import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// 👇 Setting PropertyId
const propertyId = process.env.GA_PROPERTY_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: process.env.GA_CLIENT_EMAIL,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, "\n"), // replacing is necessary
  },
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // const specificPagePath = "August Coffee";

  const { cafe } = _req.query;

  // 👇 Running a simple report
  try {
    // Running a report for page views of the specific page
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          // 5daysAgo, 7daysAgo or 2023-12-24
          startDate: "30daysAgo",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "month",
        },
        {
          name: "pageTitle",
        },
      ],
      metrics: [
        {
          name: "screenPageViews", // Use "pageViews" metric for page views
        },
      ],
    });

    // Extracting page views from the response
    const filteredResponse =
      response.rows
        ?.filter((item) => item?.dimensionValues?.[1]?.value === cafe)
        .map((item) => item) ?? [];

    return res.status(200).json({
      filteredResponse,
      // response,
    });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
