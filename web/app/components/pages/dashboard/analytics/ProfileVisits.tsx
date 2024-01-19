import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import { data, genderData, pageViewsLocations } from "../common/Data";
import PieChart from "../common/analytics/PieChart";
import { PiechartData1 } from "../common/Data";
import PercentageBar from "../common/analytics/PercentageBar";

export default function ProfileVisits() {
  return (
    <TabsContent value="Profile Visit" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount />
      </div>
      <div>
        <Linechart overview={false} data={data} />
      </div>
      <div>
        <PieChart
          data={genderData}
          title="More Insights"
          sectionTitle="Gender"
          datasets={PiechartData1}
        />
      </div>
      <div>
        <PercentageBar
          data={pageViewsLocations}
          sectionTitle="Top Locations (Cities)"
        />
      </div>
    </TabsContent>
  );
}
