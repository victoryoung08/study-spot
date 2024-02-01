"use client";
import { useState } from "react";
import { CafeFormTypes } from "@/types/cafe";

import CafeImages from "./CafeImage";
import { CafeAddress, CafeSuburb } from "./CafeLocation";
import { LongitudeAndLatitude } from "./CafeLatitudeAndLongitude";
import { CafeName } from "./CafeName";

export default function BasicInformation({
  cafeData,
  setUpCafe,
  control,
}: CafeFormTypes) {
  return (
    <div>
      <h2 className="text-4xl font-black">Profile</h2>
      <div className="mt-10 space-y-6">
        <div>
          <h3 className="text-xl font-bold">Basic Information</h3>
          <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
        </div>
        <CafeImages cafeData={cafeData} setUpCafe={setUpCafe} />
        <div className="grid md:grid-cols-2 gap-5 lg:w-3/4">
          <CafeName
            setUpCafe={setUpCafe}
            control={control}
            cafeData={cafeData}
          />
          <CafeAddress
            setUpCafe={setUpCafe}
            control={control}
            cafeData={cafeData}
          />
          <CafeSuburb
            setUpCafe={setUpCafe}
            control={control}
            cafeData={cafeData}
          />
          <LongitudeAndLatitude
            setUpCafe={setUpCafe}
            control={control}
            cafeData={cafeData}
          />
        </div>
      </div>
    </div>
  );
}
