import AnalyticsCard from "../components/pages/dashboard/common/analytics/AnalyticsCard";
import DashboardCafe from "../components/pages/dashboard/landing/DashboardCafe";
import Linechart from "../components/pages/dashboard/common/analytics/Linechart";
import { data } from "../components/pages/dashboard/common/Data";

export default function Dashboard() {
  return (
    <div className="text-white space-y-5">
      <DashboardCafe />
      <div className="flex flex-col sm:flex-row gap-5 lg:w-3/5">
        <AnalyticsCard
          twoColumn={false}
          title="Profile Visit"
          number="1.2K"
          buttonText="Upgrade to see more"
        />
        <AnalyticsCard
          twoColumn={false}
          title="Impressions"
          number="1.5K"
          buttonText="Upgrade to see more"
        />
      </div>

      <Linechart overview={true} displayButton={true} data={data} />
      <div className="lg:w-2/5 ">
        <AnalyticsCard
          twoColumn={true}
          title="Attempted Clicks"
          number="1.2K"
          buttonText="Upgrade to see more"
        />
      </div>
    </div>
  );
}
