import Image from "next/image";
import Icon from "@/public/images/morethanusual.svg";

export default function OverviewCount() {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl  font-black text-center">1.2k</h2>
      <div className="flex justify-center items-center gap-2 mt-2">
        <Image src={Icon} alt="Icon" className="w-5 h-5" />
        <p className="text-xs md:text-base">95% more than previous 28 days</p>
      </div>
    </div>
  );
}
