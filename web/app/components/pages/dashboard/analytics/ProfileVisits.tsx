"use client";

import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import { pageViewsLocations } from "../common/Data";
import PieChart from "../common/analytics/PieChart";
import { PiechartData1 } from "../common/Data";
import PercentageBar from "../common/analytics/PercentageBar";
import { useEffect, useState } from "react";
import getPageViews from "@/src/helper/getPageViews";
import { ChartData, PercentageData } from "@/types/chart";
import { useCafeData } from "@/app/store/cafeData";
import getPageViewsAlgorithm from "@/src/helper/getPageViewsAlgorithm";

export default function ProfileVisits(cafeName: any) {
  const [pageViewsByDate, setPageViewsByDate] = useState<ChartData>();
  const [pageViewsByCity, setPageViewsByCity] = useState<PercentageData[]>([]);
  const [overviewCount, setOverViewCount] = useState<Number>();
  const [overViewPercentage, setOverviewPercentage] = useState<String>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cafeName) {
          // get page views
          const pageViewsResponse = await getPageViews({
            cafeName: cafeName.cafeName,
          }); // Fetch data using getPageViews function
          if (pageViewsResponse) {
            setPageViewsByDate(pageViewsResponse.pageViewsByDate);
            setPageViewsByCity(pageViewsResponse.pageViewsByCity);
          }

          // fetch page views comparison
          const pageViewAlgorithmResponse = await getPageViewsAlgorithm({
            cafeName: cafeName.cafeName,
          });

          if (pageViewAlgorithmResponse) {
            setOverViewCount(
              pageViewAlgorithmResponse.camparedData.currentTotal
            );
            setOverviewPercentage(
              pageViewAlgorithmResponse.camparedData.percentageDifference
            );
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the fetchData function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pageViewsByDate || !pageViewsByCity) {
    // return loading analytics here
    return;
  }
  return (
    <TabsContent value="Profile Visit" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount
          totalCount={overviewCount}
          percentage={overViewPercentage}
        />
      </div>
      <div>
        <Linechart overview={false} data={pageViewsByDate} />
      </div>

      {/* <div>
        <PieChart
          data={genderData}
          title="More Insights"
          sectionTitle="Gender"
          datasets={PiechartData1}
        />
      </div> */}
      <div>
        <PercentageBar
          data={pageViewsByCity}
          sectionTitle="Top Locations (Cities)"
        />
      </div>
    </TabsContent>
  );
}
