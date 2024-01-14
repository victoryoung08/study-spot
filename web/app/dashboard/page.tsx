import AnalyticsCard from "../components/pages/dashboard/common/AnalyticsCard";
import DashboardCafe from "../components/pages/dashboard/landing/DashboardCafe";
import Overview from "../components/pages/dashboard/landing/Overview";

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
      <Overview />
      <div className="lg:w-2/5">
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
