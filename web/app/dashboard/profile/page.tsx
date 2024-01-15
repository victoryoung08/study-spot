import BasicInformation from "@/app/components/pages/dashboard/profile/BasicInformation";
import CafeDetails from "@/app/components/pages/dashboard/profile/CafeDetails";
import Links from "@/app/components/pages/dashboard/profile/Links";
import Promotion from "@/app/components/pages/dashboard/profile/Promotion";

export default function Support() {
  return (
    <div className="text-white space-y-10">
      <BasicInformation />
      <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
        <CafeDetails />
        <div className="space-y-10 md:w-2/4">
          <Links />
          <Promotion />
        </div>
      </div>
    </div>
  );
}
