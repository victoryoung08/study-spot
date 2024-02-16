// "use client";
import AnalyticsCard from "../components/pages/dashboard/common/analytics/AnalyticsCard";
import DashboardCafe from "../components/pages/dashboard/landing/DashboardCafe";
import Linechart from "../components/pages/dashboard/common/analytics/Linechart";
import getPageViewsAlgorithm from "@/src/helper/getPageViewsAlgorithm";
import { useCafeData } from "../store/cafeData";
import getCafeDetails from "@/src/queries/getCafeDetails";
import DashboardContent from "../components/pages/dashboard/landing/Dashboard";

export default async function Dashboard() {
  const cafeData = await getCafeDetails();
  if (cafeData?.error) {
    return <div>Error: </div>;
  }

  if (!cafeData) {
    return <div>Loading...</div>;
  }
  return <DashboardContent cafeData={cafeData.cafeDetails} />;
}
