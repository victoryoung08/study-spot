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
