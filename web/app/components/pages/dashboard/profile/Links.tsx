"use client";
import instagram from "@/public/images/Instagram.svg";
import facebook from "@/public/images/facebook.svg";
import tiktok from "@/public/images/TikTok.svg";
import Image from "next/image";
import { Input } from "@/app/components/ui/input";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/app/components/ui/button";

const links = [
  { id: 1, social: "Instagram", image: instagram },
  { id: 2, social: "Facebook", image: facebook },
  { id: 3, social: "TikTok", image: tiktok },
];

export default function Links({ cafeData }: any) {
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
              <Input
                type="text"
                defaultValue={cafeData?.instagram_link || ""}
                //   {...register("cafe_name")}
                placeholder="Instagram Account"
                className="w-full focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
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
              <Input
                type="text"
                defaultValue={cafeData?.facebook_link || ""}
                //   {...register("cafe_name")}
                placeholder="Facebook Account"
                className="w-full focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
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
            {/* {cafeData.tiktok_link ? (
              <div className="flex justify-between items-center gap-20">
                <p>{cafeData.tiktok_link}</p>
                <Button className="bg-transparent hover:bg-transparent ">
                  <XMarkIcon className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <div>
                <Input
                  type="text"
                  //   {...register("cafe_name")}
                  placeholder="Enter Username"
                  className="w-full focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
                />
              </div>
            )} */}
            <div>
              <Input
                type="text"
                defaultValue={cafeData?.tiktok_link || ""}
                //   {...register("cafe_name")}
                placeholder="Tiktok Account"
                className="w-full focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
