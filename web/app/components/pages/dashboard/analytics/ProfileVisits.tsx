"use client";

import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import { pageViewsLocations } from "../common/Data";
import PieChart from "../common/analytics/PieChart";
import { PiechartData1 } from "../common/Data";
import PercentageBar from "../common/analytics/PercentageBar";
import { useEffect, useState } from "react";
import getPageViewsByDate from "@/src/helper/getPageViews";
import { ChartData, PercentageData } from "@/types/chart";

export default function ProfileVisits() {
  const [pageViewsByDate, setPageViewsByDate] = useState<ChartData>();
  const [pageViewsByCity, setPageViewsByCity] = useState<PercentageData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPageViewsByDate({
          cafeName: "August Coffee",
        }); // Fetch data using getPageViews function
        if (response) {
          setPageViewsByDate(response.pageViewsByDate);
          setPageViewsByCity(response.pageViewsByCity);
        } else {
          console.error("No rows found in the response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []);

  if (!pageViewsByDate || !pageViewsByCity) {
    // return loading analytics here
    return;
  }
  return (
    <TabsContent value="Profile Visit" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount />
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
