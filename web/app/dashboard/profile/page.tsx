import Profile from "@/app/components/pages/dashboard/profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Profile",
  description: "Study Spot - Profile",
};

export default function Page() {
  return (
    <div>
      <Profile />
    </div>
  );
}
