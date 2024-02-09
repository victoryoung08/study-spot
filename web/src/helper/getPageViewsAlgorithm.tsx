import comparePageViews from "../hooks/comparePageViews";
import { ApiResponse, Row } from "./getPageViews";

type PageViewsType = {
  cafeName: string;
  startDate?: string;
  endDate?: string;
};

export default async function getPageViewsAlgorithm({
  cafeName,
}: //   startDate,
//   endDate,
PageViewsType) {
  try {
    // fetch all page views starting from 28 days ago to yesterday
    const currentData = await fetch(
      `/api/ga?cafe=${cafeName}&startDate=28daysAgo&endDate=yesterday`
    );
    if (!currentData.ok) {
      throw new Error("Failed to fetch analytics");
    }
    // fetch all page views starting from 2023-01-01 to 28 days ago
    const pastData = await fetch(
      `/api/ga?cafe=${cafeName}&startDate=2023-01-01&endDate=28daysAgo`
    );
    if (!pastData.ok) {
      throw new Error("Failed to fetch analytics");
    }

    const presentData: ApiResponse = await currentData.json();
    const oldData: ApiResponse = await pastData.json();

    if (
      presentData &&
      oldData &&
      presentData.response.rows &&
      oldData.response.rows
    ) {
      const presentDataRow: Row[] = presentData.response.rows;
      const pastDatarow: Row[] = oldData.response.rows;
      //   const oldData: Row[] = data28DaysAgo.response.rows;

      const camparedData = comparePageViews(presentDataRow, pastDatarow);
      return { camparedData };
    } else {
      console.error("No rows found in the response.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching analytics:", error);
    throw error;
  }
}
