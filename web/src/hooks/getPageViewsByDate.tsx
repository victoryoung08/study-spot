import { ChartData } from "@/types/chart";
import { Row } from "../helper/getPageViews";

const getPageViewsByDate = (rows: Row[]) => {
  // Step 1: Create an object to store values for each date
  const aggregatedData: { [date: string]: number } = {};

  rows.forEach((row) => {
    const date = row.dimensionValues[0].value;
    const value = parseInt(row.metricValues[0].value) || 0; // Parse value as integer or default to 0

    // If the date already exists, skip adding the value
    if (!aggregatedData[date]) {
      aggregatedData[date] = value;
    }
  });

  // Step 2: Transform aggregated data into chart data format
  const labels: string[] = [];
  const values: number[] = [];

  Object.entries(aggregatedData).forEach(([date, value]) => {
    // Parse the date string
    const year = date.slice(0, 4);
    const month = date.slice(4, 6);
    const day = date.slice(6, 8);
    const formattedDate = new Date(`${year}-${month}-${day}`);

    // Add formatted date to labels array
    labels.push(
      formattedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
      })
    );

    // Add value to values array
    values.push(value);
  });

  // Step 3: Create chart data object
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
