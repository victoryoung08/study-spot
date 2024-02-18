import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// 👇 Setting PropertyId
const propertyId = process.env.GA_PROPERTY_ID;

const encodedEmail = process.env.GA_CLIENT_EMAIL;
if (!encodedEmail) {
  throw new Error("GA_CLIENT_EMAIL environment variable is not defined");
}
const decodedEmail = Buffer.from(encodedEmail, "base64").toString("utf-8");

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: decodedEmail,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, "\n"), // replacing is necessary
  },
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  // const specificPagePath = "August Coffee";
  const { cafe, startDate, endDate } = _req.query;

  // 👇 Running a simple report
  try {
    // Running a report for page views of the specific page
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          // 5daysAgo, 7daysAgo or 2023-12-24
          startDate: `${startDate ? startDate : "5daysAgo"}`,
          endDate: `${endDate ? endDate : "yesterday"}`,
        },
      ],
      dimensions: [
        {
          name: "date",
        },
        {
          name: "city",
        },
        {
          name: "sessionDefaultChannelGroup",
        },
        {
          name: "firstUserSource",
        },
      ],
      dimensionFilter: {
        filter: {
          fieldName: "pageTitle",
          stringFilter: {
            value: `${cafe}`,
          },
        },
      },
      metrics: [
        {
          name: "screenPageViews", // Use "pageViews" metric for page views
        },
      ],
    });

    return res.status(200).json({
      response,
    });
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return res.status(500).json({
      error: error,
    });
  }
}
