import { TabsContent } from "@/app/components/ui/tabs";
import OverviewCount from "./OverviewCount";
import Linechart from "../common/Linechart";
import { data } from "../common/Data";
import PieChart from "../common/PieChart";

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
        <PieChart />
      </div>
    </TabsContent>
  );
}
