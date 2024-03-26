import SupportForm from "@/app/components/pages/dashboard/support/Form";
import { Metadata } from "next";
import studyspotverified from "@/public/images/logo.webp";
import Image from "next/image";
import getCafeDetails from "@/src/queries/getCafeDetails";

export const metadata: Metadata = {
  title: "Dashboard - Support",
  description: "Study Spot - Support",
};

export default async function Support() {
  const cafeData = await getCafeDetails();
  if (cafeData?.error) {
    return <div>Error: </div>;
  }

  if (!cafeData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-white space-y-5">
      <Image
        src={studyspotverified}
        alt="Study Spot Verified Logo"
        className="mx-auto"
      />
      <SupportForm hasMembership={cafeData.cafeDetails.hasMembership} />
    </div>
  );
}
