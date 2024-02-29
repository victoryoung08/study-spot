import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import PercentageBar from "../common/analytics/PercentageBar";
import { useEffect, useState } from "react";
import getPageViews from "@/src/helper/getPageViews";
import getPageViewsAlgorithm from "@/src/helper/getPageViewsAlgorithm";
import { ChartData, PercentageData } from "@/types/chart";
import { CafeFormTypes } from "@/types/cafe";

export default function ProfileVisits({ cafeData }: CafeFormTypes) {
  const [pageViewsByDate, setPageViewsByDate] = useState<ChartData>();
  const [pageViewsByCity, setPageViewsByCity] = useState<PercentageData[]>([]);
  const [overviewCount, setOverviewCount] = useState<number>();
  const [overviewPercentage, setOverviewPercentage] = useState<number>();
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cafeData) {
          const pageViewsResponse = await getPageViews({
            cafeName: cafeData.cafe_name,
          });
          const pageViewAlgorithmResponse = await getPageViewsAlgorithm({
            cafeName: cafeData.cafe_name,
          });

          if (pageViewsResponse && pageViewAlgorithmResponse) {
            setPageViewsByDate(pageViewsResponse.pageViewsByDate);
            setPageViewsByCity(pageViewsResponse.pageViewsByCity);
            setOverviewCount(
              pageViewAlgorithmResponse.camparedData.currentTotal
            );
            setOverviewPercentage(
              pageViewAlgorithmResponse.camparedData.percentageDifference
            );
            if (overviewCount != undefined || overviewCount != 0) {
              setIsFetched(true);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [cafeData]);

  if (!isFetched) {
    return (
      <div>
        <h2 className="pt-5 text-3xl md:text-4xl font-black text-center">
          {overviewCount != 0
            ? "Loading data...."
            : "No data available for this cafe yet"}
        </h2>
      </div>
    );
  }

  return (
    <TabsContent value="Profile Visit" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount
          totalCount={overviewCount}
          percentage={overviewPercentage}
        />
      </div>
      <div>
        <Linechart
          overview={false}
          data={pageViewsByDate}
          hasMembership={cafeData?.hasMembership}
        />
      </div>
      <div>
        <PercentageBar
          data={pageViewsByCity}
          sectionTitle="Top Locations (Cities)"
        />
      </div>
    </TabsContent>
  );
}
