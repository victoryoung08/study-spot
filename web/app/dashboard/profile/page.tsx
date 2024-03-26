import Profile from "@/app/components/pages/dashboard/profile/Profile";
import getCafeDetails from "@/src/queries/getCafeDetails";
import getUserDetails from "@/src/queries/getUserDetails";
import uploadImages from "@/src/queries/uploadImages";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Dashboard - Profile",
  description: "Study Spot - Profile",
};
export const dynamic = "force-dynamic";

export default async function Page() {
  const cafeData = await getCafeDetails();
  const user = await getUserDetails();
  if (cafeData?.error) {
    return <div>Error: </div>;
  }

  if (!cafeData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Profile cafeData={cafeData.cafeDetails} cafeUser={user?.userData} />
    </div>
  );
}
