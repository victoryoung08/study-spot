import { PercentageData } from "@/types/chart";
import { Row } from "../helper/getPageViews";

interface PageViewData {
  city: string;
  value: number;
}

const getPageViewsByCity = (
  rows: Row[]
): { city: string; percentage: number }[] => {
  // Step 1: Sum up all the page views for each city
  const pageViewsData: PageViewData[] = rows.map((row) => ({
    city: row.dimensionValues[1].value,
    value: parseInt(row.metricValues[0].value), // Assuming the value is numeric, parse it as integer
  }));

  // Step 2: Calculate the total page views
  const totalPageViews = pageViewsData.reduce(
    (total, data) => total + data.value,
    0
  );

  // Step 3: Calculate the percentage of page views for each city and return the result
  return pageViewsData.map((data) => ({
    city: data.city,
    percentage: (data.value / totalPageViews) * 100,
  }));
};

export default getPageViewsByCity;
