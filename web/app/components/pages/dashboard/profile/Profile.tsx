"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./BasicInformation";
import CafeDetails from "./CafeDetails";
import Links from "./Links";
import Promotion from "./Promotion";
import { Button } from "@/app/components/ui/button";

export default function Profile({ cafeData }: any) {
  const [setupCafe, SetSetupCafe] = useState(false);
  useEffect(() => {
    if (cafeData === null || cafeData === undefined) {
      SetSetupCafe(true);
    }
  }, [cafeData]);
  return (
    <div className="text-white space-y-10">
      <BasicInformation cafeData={cafeData} setUpCafe={setupCafe} />
      <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
        <CafeDetails cafeData={cafeData} setUpCafe={setupCafe} />
        <div className="space-y-10 md:w-2/4">
          <Links cafeData={cafeData} setUpCafe={setupCafe} />
          <Promotion cafeData={cafeData} setUpCafe={setupCafe} />
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="border-2 bg-primary hover:bg-primary rounded-2xl h-8 xs:h-auto w-2/4 sm:w-1/4 mx-auto">
          Save
        </Button>
      </div>
    </div>
  );
}
