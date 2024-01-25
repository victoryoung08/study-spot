import instagram from "@/public/images/Instagram.svg";
import facebook from "@/public/images/facebook.svg";
import tiktok from "@/public/images/TikTok.svg";
import Image from "next/image";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const links = [
  { id: 1, social: "Instagram", image: instagram },
  { id: 2, social: "Facebook", image: facebook },
  { id: 3, social: "TikTok", image: tiktok },
];

export default function Links({ cafeDetails }: any) {
  return (
    <div>
      <div>
        <h3 className="text-xl font-bold">Links</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="mt-6 space-y-5">
        {links.map((social) => {
          return (
            <div
              key={social.id}
              className="flex flex-col xs:flex-row gap-2 xs:gap-20 justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-1 cursor-pointer">
                  <div className="h-0.5 w-5 rounded-full bg-white" />
                  <div className="h-0.5 w-5 rounded-full bg-white" />
                </div>
                <div className="flex items-center gap-1 cursor-default">
                  <Image
                    src={social.image}
                    alt={social.social}
                    className="w-7 h-7"
                  />
                  <p>{social.social}</p>
                </div>
              </div>
              <div>
                <div>
                  <Input
                    type="text"
                    //   {...register("cafe_name")}
                    placeholder="Enter Username"
                    className="w-full focus-visible:ring-0 px-5 focus-visible:ring-offset-0  rounded-2xl border-2 border-white text-sm bg-[#3a3939] "
                  />
                </div>
              </div>
            </div>
          );
        })}
        {/* <div>
          <Select>
            <SelectTrigger className="ring-offset-[#181818] focus:ring-0 w-32 bg-transparent border-none text-base">
              <SelectValue placeholder="View More" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div> */}
      </div>
    </div>
  );
}
