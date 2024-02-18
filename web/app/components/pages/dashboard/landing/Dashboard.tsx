"use client";

import getPageViewsAlgorithm from "@/src/helper/getPageViewsAlgorithm";
import DashboardCafe from "./DashboardCafe";
import AnalyticsCard from "../common/analytics/AnalyticsCard";
import Linechart from "../common/analytics/Linechart";
import { data } from "../common/Data";
import { CafeFormTypes } from "@/types/cafe";
import { useEffect, useState } from "react";
import getPageViews from "@/src/helper/getPageViews";
import { ChartData } from "@/types/chart";

export default function DashboardContent({ cafeData }: CafeFormTypes) {
  // State variables to store fetched data
  const [pageViewsByDate, setPageViewsByDate] = useState<ChartData>();
  const [overviewCount, setOverviewCount] = useState<number>(0);
  const [overviewPercentage, setOverviewPercentage] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data only if cafeData is available
        if (cafeData?.cafe_name) {
          // Fetch page views data
          const pageViewsResponse = await getPageViews({
            cafeName: cafeData?.cafe_name,
          });
          const pageViewAlgorithmResponse = await getPageViewsAlgorithm({
            cafeName: cafeData?.cafe_name,
          });

          // Update state with fetched data
          if (pageViewsResponse && pageViewAlgorithmResponse) {
            setPageViewsByDate(pageViewsResponse.pageViewsByDate);
            setOverviewCount(
              pageViewAlgorithmResponse.camparedData.currentTotal
            );
            setOverviewPercentage(
              pageViewAlgorithmResponse.camparedData.percentageDifference
            );
          }
        } else {
          // Reset state if no cafe data available
          setOverviewCount(0);
          setOverviewPercentage(0);
          setPageViewsByDate(undefined);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [cafeData]);

  // If cafeData is not available, render default content
  if (!cafeData) {
    return (
      <div>
        <DashboardCafe cafeName={""} />
        <Linechart overview={true} displayButton={true} data={data} />
      </div>
    );
  }

  // Render dashboard content
  return (
    <div className="text-white space-y-5">
      {/* Display cafe name */}
      <DashboardCafe cafeName={cafeData?.cafe_name} />
      <div className="flex flex-col sm:flex-row gap-5 lg:w-3/5">
        {/* Display analytics card if data available */}
        {overviewCount && overviewPercentage && (
          <AnalyticsCard
            twoColumn={false}
            title="Profile Visit"
            number={overviewCount}
            percentage={overviewPercentage}
          />
        )}
      </div>
      {/* Display line chart */}
      <Linechart overview={true} displayButton={true} data={pageViewsByDate} />
    </div>
  );
}
