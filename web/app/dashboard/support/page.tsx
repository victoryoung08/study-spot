import Benefits from "@/app/components/pages/dashboard/support/Benefits";
import SupportForm from "@/app/components/pages/dashboard/support/Form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Support",
  description: "Study Spot - Support",
};

export default function Support() {
  return (
    <div className="text-white space-y-10">
      <Benefits />
      <SupportForm />
    </div>
  );
}
