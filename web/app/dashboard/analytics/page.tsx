import Analytics from "@/app/components/pages/dashboard/analytics/Analytics";
import getCafeDetails from "@/src/queries/getCafeDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Analytics",
  description: "Study Spot - Analytics",
};

export default async function Page() {
  const cafeData = await getCafeDetails();
  if (cafeData?.error) {
    return <div>Error: </div>;
  }

  if (!cafeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Analytics cafeData={cafeData.cafeDetails} />
      </div>
    </div>
  );
}
