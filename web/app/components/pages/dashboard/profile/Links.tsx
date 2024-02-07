"use client";
import instagram from "@/public/images/Instagram.svg";
import facebook from "@/public/images/facebook.svg";
import tiktok from "@/public/images/TikTok.svg";
import Image from "next/image";
import { CafeFormTypes } from "@/types/cafe";
import UseFormField from "./form/useFormField";

const links = [
  { id: 1, social: "Instagram", image: instagram },
  { id: 2, social: "Facebook", image: facebook },
  { id: 3, social: "TikTok", image: tiktok },
];

export default function Links({
  cafeData,
  control,
}: // control,
CafeFormTypes) {
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Links</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="mt-6 space-y-5">
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-20 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 cursor-pointer">
              <div className="h-0.5 w-5 rounded-full bg-white" />
              <div className="h-0.5 w-5 rounded-full bg-white" />
            </div>
            <div className="flex items-center gap-1 cursor-default">
              <Image src={instagram} alt="Instagram" className="w-7 h-7" />
              <p>Instagram</p>
            </div>
          </div>
          <div>
            <div>
              <UseFormField
                control={control}
                name="instagram"
                placeholder="Instagram Account"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-20 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 cursor-pointer">
              <div className="h-0.5 w-5 rounded-full bg-white" />
              <div className="h-0.5 w-5 rounded-full bg-white" />
            </div>
            <div className="flex items-center gap-1 cursor-default">
              <Image src={facebook} alt="Facebook" className="w-7 h-7" />
              <p>Facebook</p>
            </div>
          </div>
          <div>
            <div>
              <UseFormField
                control={control}
                name="facebook"
                placeholder="Facebook Account"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-5 sm:gap-20 justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1 cursor-pointer">
              <div className="h-0.5 w-5 rounded-full bg-white" />
              <div className="h-0.5 w-5 rounded-full bg-white" />
            </div>
            <div className="flex items-center gap-1 cursor-default">
              <Image src={tiktok} alt="TikTok" className="w-7 h-7" />
              <p>TikTok</p>
            </div>
          </div>
          <div>
            <div>
              <UseFormField
                control={control}
                name="tiktok"
                placeholder="Tiktok Account"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
