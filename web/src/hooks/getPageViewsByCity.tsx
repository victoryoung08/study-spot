import { PercentageData } from "@/types/chart";
import { Row } from "../helper/getPageViews";

interface PageViewData {
  city: string;
  value: number;
}

const getPageViewsByCity = (
  rows: Row[]
): { city: string; percentage: number }[] => {
  // Step 1: Merge rows with the same city name
  const aggregatedData: Map<string, number> = new Map();

  rows.forEach((row) => {
    const city = row.dimensionValues[1].value;
    const value = parseInt(row.metricValues[0].value) || 0; // Parse value as integer or default to 0
    if (aggregatedData.has(city)) {
      aggregatedData.set(city, aggregatedData.get(city)! + value); // Add value to existing city
    } else {
      aggregatedData.set(city, value); // Initialize value for new city
    }
  });

  // Step 2: Calculate the total page views
  const totalPageViews = Array.from(aggregatedData.values()).reduce(
    (total, value) => total + value,
    0
  );

  // Step 3: Calculate the percentage of page views for each city and return the result
  return Array.from(aggregatedData.entries()).map(([city, value]) => ({
    city,
    percentage: (value / totalPageViews) * 100,
  }));
};

export default getPageViewsByCity;
