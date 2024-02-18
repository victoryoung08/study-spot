import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/analytics/Linechart";
import { data, externalTraffics } from "../common/Data";
import PercentageBar from "../common/analytics/PercentageBar";

export default function Clicks() {
  return (
    <TabsContent value="Clicks" className="space-y-5 lg:space-y-10">
      <div>
        <OverviewCount />
      </div>
      <div>
        <Linechart title={"Discount Clicks"} overview={false} data={data} />
      </div>
      <div>
        <Linechart title={"Direction Clicks"} overview={false} data={data} />
      </div>
      <div>
        <Linechart title={"Link Clicks"} overview={false} data={data} />
      </div>
      <div>
        <Linechart title={"Social Media Clicks"} overview={false} data={data} />
      </div>
      <div className="md:w-2/4">
        <PercentageBar
          data={externalTraffics}
          sectionTitle="Top Social Media Clicks"
        />
      </div>
    </TabsContent>
  );
}
