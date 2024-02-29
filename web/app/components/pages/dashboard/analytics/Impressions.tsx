import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import {
  PiechartData1,
  PiechartData2,
  SearchTerms,
  data,
  externalTraffics,
  genderData,
  pageViewsLocations,
  trafficSources,
} from "../common/Data";
import PieChart from "../common/analytics/PieChart";
import PercentageBar from "../common/analytics/PercentageBar";

export default function Impressions() {
  return (
    <TabsContent value="Impressions" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount />
      </div>
      <div>
        <Linechart overview={false} data={data} hasMembership={false} />
      </div>
      <div>
        <PieChart
          data={genderData}
          title="More Insights"
          sectionTitle="Gender"
          datasets={PiechartData1}
        />
      </div>
      <div className="md:w-2/4">
        <PercentageBar
          data={pageViewsLocations}
          sectionTitle="Top Locations (Cities)"
        />
      </div>
      <div>
        <PieChart
          data={trafficSources}
          title="Traffic Sources"
          sectionTitle="Total Traffic Sources"
          datasets={PiechartData2}
        />
      </div>
      <div className="md:grid grid-cols-2 gap-10 w-full">
        <PercentageBar
          data={externalTraffics}
          sectionTitle="External Sites or Apps"
          title="Proportion of total traffics: 50%"
        />
        <PercentageBar
          data={SearchTerms}
          sectionTitle="Search Terms"
          title="Proportion of total traffics: 50%"
        />
      </div>
    </TabsContent>
  );
}
