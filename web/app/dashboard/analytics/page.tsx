import Analytics from "@/app/components/pages/dashboard/analytics/Analytics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Analytics",
  description: "Study Spot - Analytics",
};

export default function Page() {
  return (
    <div>
      <div>
        <Analytics />
      </div>
    </div>
  );
}
