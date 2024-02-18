import { NextApiRequest, NextApiResponse } from "next";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// 👇 Setting PropertyId
const propertyId = process.env.GA_PROPERTY_ID;

const encodedCredentials = process.env.GA_CREDENTIALS;
if (!encodedCredentials) {
  throw new Error("Google Credentials environment variable is not defined");
}
const credential = JSON.parse(
  Buffer.from(encodedCredentials, "base64").toString()
);
const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: credential.client_email,
    private_key: credential.private_key,
  },
});

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
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
