import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/Linechart";
import { PiechartData2, data, trafficSources } from "../common/Data";
import PieChart from "../common/PieChart";

export default function Impressions() {
  return (
    <TabsContent value="Impressions" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount />
      </div>
      <div>
        <Linechart overview={false} data={data} />
      </div>
      <div>
        <PieChart
          data={trafficSources}
          title="Traffic Sources"
          sectionTitle="Total Traffic Sources"
          datasets={PiechartData2}
        />
      </div>
    </TabsContent>
  );
}
