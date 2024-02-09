import { ChartData } from "@/types/chart";
import { Row } from "../helper/getPageViews";

const getPageViewsByDate = (rows: Row[]) => {
  const pageViews = rows.map((row) => ({
    date: row.dimensionValues[0].value,
    value: parseInt(row.metricValues[0].value), // Assuming the value is numeric, parse it as integer
  }));
  // 20240206 to February 06, 2024
  const labels = pageViews.map((entry) => {
    const dateString = entry.date;
    // Parse the date string into year, month, and day parts
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);

    // Create a new Date object with parsed year, month, and day
    const date = new Date(`${year}-${month}-${day}`);

    // Format the date using toLocaleDateString() with options for month and day formatting
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", // Full month name (e.g., "February")
      day: "2-digit", // Leading zero for single-digit days (e.g., "06")
    });
  });

  const values = pageViews.map((entry) => entry.value);

  const chartData: ChartData = {
    labels,
    datasets: [
      {
        data: values,
        borderColor: "rgb(243, 139, 181)",
        backgroundColor: "rgba(243, 139, 181)",
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };
  return chartData;
};

export default getPageViewsByDate;
