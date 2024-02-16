"use client";
import Clicks from "./Clicks";
import Impressions from "./Impressions";
import ProfileVisits from "./ProfileVisits";
import TabsWrapper from "./TabsWrapper";
import { CafeFormTypes } from "@/types/cafe";
import { useEffect, useState } from "react";

export default function Analytics({ cafeData }: CafeFormTypes) {
  const [cafeName, setCafeName] = useState<string>();
  useEffect(() => {
    if (cafeData != null || cafeData != undefined) {
      setCafeName(cafeData.cafe_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cafeData]);

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-4xl font-black">Analytics</h2>
      </div>
      <TabsWrapper>
        <ProfileVisits cafeName={cafeName} />
        {/* <Impressions />
        <Clicks /> */}
      </TabsWrapper>
    </div>
  );
}
