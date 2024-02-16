import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import PercentageBar from "../common/analytics/PercentageBar";
import { useEffect, useState } from "react";
import getPageViews from "@/src/helper/getPageViews";
import getPageViewsAlgorithm from "@/src/helper/getPageViewsAlgorithm";
import { ChartData, PercentageData } from "@/types/chart";

export default function ProfileVisits({ cafeName }: { cafeName: any }) {
  const [pageViewsByDate, setPageViewsByDate] = useState<ChartData>();
  const [pageViewsByCity, setPageViewsByCity] = useState<PercentageData[]>([]);
  const [overviewCount, setOverviewCount] = useState<number>();
  const [overviewPercentage, setOverviewPercentage] = useState<number>();
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cafeName) {
          const pageViewsResponse = await getPageViews({
            cafeName: cafeName.cafeName,
          });
          const pageViewAlgorithmResponse = await getPageViewsAlgorithm({
            cafeName: cafeName.cafeName,
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
            setIsFetched(true);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [cafeName]);

  if (!isFetched) {
    return (
      <div>
        <h2 className="pt-5 text-3xl md:text-4xl font-black text-center">
          No Data Available
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
        <Linechart overview={false} data={pageViewsByDate} />
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
