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
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data only if cafeData is available
        if (cafeData?.cafe_name) {
          // Fetch page views data
          const pageViewsResponse = await getPageViews({
            cafeName: cafeData.cafe_name,
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
          if (overviewCount != undefined || overviewCount != 0) {
            setIsFetched(true);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cafeData]);

  if (!isFetched) {
    return (
      <div>
        <h2 className="text-base">Hi! 👋🏻</h2>
        <h2 className="pt-4 text-3xl md:text-3xl font-black ">
          {cafeData || overviewCount != 0 || overviewCount == undefined
            ? "Loading data...."
            : "No data available for this cafe yet"}
        </h2>
      </div>
    );
  }

  return (
    <div className="text-white space-y-5">
      {/* Display cafe name */}
      <DashboardCafe cafeName={cafeData?.cafe_name} />
      <div className="flex flex-col sm:flex-row gap-5 lg:w-[30%]">
        {/* Display analytics card if data available */}
        {overviewCount && overviewPercentage && (
          <>
            <AnalyticsCard
              twoColumn={false}
              title="Profile Visit"
              number={overviewCount}
              hasMembership={cafeData?.hasMembership}
              percentage={overviewPercentage}
            />
            {/* <AnalyticsCard
              twoColumn={false}
              title="Profile Visit"
              number={overviewCount}
              percentage={overviewPercentage}
            /> */}
          </>
        )}
      </div>
      {/* Display line chart */}
      <Linechart
        overview={true}
        displayButton={cafeData?.hasMembership === false}
        data={pageViewsByDate}
        hasMembership={cafeData?.hasMembership}
      />
    </div>
  );
}
