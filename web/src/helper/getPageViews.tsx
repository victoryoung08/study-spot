import { useCafeData } from "@/app/store/cafeData";
import getPageViewsByCity from "../hooks/getPageViewsByCity";
import getPageViewsByDate from "../hooks/getPageViewsByDate";
import comparePageViews from "../hooks/comparePageViews";

type PageViewsType = {
  cafeName: string;
  startDate?: string;
  endDate?: string;
};

export interface Row {
  dimensionValues: { value: string }[];
  metricValues: { value: string }[];
}

export interface ApiResponse {
  response: {
    rows?: Row[];
  };
}

export default async function getPageViews({
  cafeName,
  startDate,
  endDate,
}: PageViewsType) {
  try {
    // Prepare startDate and endDate based on the condition
    // const yesterday = new Date();
    // yesterday.setDate(yesterday.getDate() - 1); // Get yesterday's date
    // const formattedYesterday = yesterday.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const startDateParam = startDate ? startDate : "5daysAgo";
    const endDateParam = endDate ? endDate : "yesterday";

    // Construct the fetch URL with query parameters
    const apiUrl = `/api/ga?cafe=${cafeName}&startDate=${startDateParam}&endDate=${endDateParam}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch analytics");
    }

    const data: ApiResponse = await response.json();
    if (data.response && data.response.rows) {
      const rows: Row[] = data.response.rows;
      console.log(rows);
      const pageViewsByDate = getPageViewsByDate(rows);
      const pageViewsByCity = getPageViewsByCity(rows);
      return { pageViewsByDate, pageViewsByCity };
    } else {
      console.error("No rows found in the response.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching analytics:", error);
    throw error;
  }
}
