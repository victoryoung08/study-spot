import Profile from "@/app/components/pages/dashboard/profile/Profile";
import getUserDetails from "@/src/queries/getUserDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Profile",
  description: "Study Spot - Profile",
};
export const dynamic = "force-dynamic";

export default async function Page() {
  const userData = await getUserDetails();
  if (userData?.error) {
    return <div>Error: </div>;
  }

  if (!userData?.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Profile userData={userData.data} />
    </div>
  );
}
