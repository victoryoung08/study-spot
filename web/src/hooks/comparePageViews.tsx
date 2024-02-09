import { Row } from "../helper/getPageViews";

const comparePageViews = (currentData: Row[], oldData: Row[]) => {
  // Extract date and value from the current data
  const presentData = currentData.map((row) => ({
    value: parseInt(row.metricValues[0].value), // Assuming the value is numeric, parse it as integer
  }));

  // Extract date and value from the past data
  const pastData = oldData.map((row) => ({
    value: parseInt(row.metricValues[0].value), // Assuming the value is numeric, parse it as integer
  }));

  // Sum up all the page views from past data
  const pastTotal = pastData.reduce((total, data) => total + data.value, 0);

  // Sum up all the page views from current data
  const currentTotal = presentData.reduce(
    (total, data) => total + data.value,
    0
  );

  console.log(currentTotal, "-", pastTotal);

  // Calculate the percentage difference
  const percentageDifference: string = (
    ((currentTotal - pastTotal) / currentTotal) *
    100
  ).toFixed(0);

  return { percentageDifference, currentTotal };
};

export default comparePageViews;
