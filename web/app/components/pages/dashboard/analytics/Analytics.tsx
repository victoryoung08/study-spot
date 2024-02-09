"use client";
import { useCafeData } from "@/app/store/cafeData";
import Clicks from "./Clicks";
import Impressions from "./Impressions";
import ProfileVisits from "./ProfileVisits";
import TabsWrapper from "./TabsWrapper";
import { CafeFormTypes } from "@/types/cafe";
import { use, useEffect, useState } from "react";

export default function Analytics({ cafeData }: CafeFormTypes) {
  const [cafeName, setCafeName] = useState<string>();
  // const setCafe = useCafeData((state) => state.setCafe);
  useEffect(() => {
    if (cafeData != null || cafeData != undefined) {
      setCafeName(cafeData.cafe_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cafeData]);
  if (!cafeName) {
    return <div>Fetching data...</div>;
  }
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-4xl font-black">Analytics</h2>
      </div>
      <TabsWrapper>
        <ProfileVisits cafeName={cafeName} />
        <Impressions />
        <Clicks />
      </TabsWrapper>
    </div>
  );
}
