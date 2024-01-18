import Image from "next/image";
import Icon from "@/public/images/morethanusual.svg";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

type analyticscardtype = {
  title: string;
  number: string;
  buttonText: string;
  twoColumn: boolean;
};

export default function AnalyticsCard({
  title,
  number,
  buttonText,
  twoColumn,
}: analyticscardtype) {
  return (
    <div className="bg-grey border-2 border-white rounded-2xl w-full p-4 xs:p-5">
      <div>
        <div
          className={` ${
            twoColumn
              ? "grid grid-cols-2 items-center justify-center text-center"
              : "space-y-4 md:space-y-5"
          }`}
        >
          <h2 className="text-xs xs:text-base font-medium pr-2">{title}</h2>
          <div
            className={`text-4xl md:text-5xl font-black flex items-end gap-1 ${
              twoColumn ? "justify-center border-l pl-2" : ""
            }`}
          >
            <h3>{number}</h3>
            <Image
              src={Icon.src}
              alt="Icon"
              width={15}
              height={15}
              className="mb-1"
            />
          </div>
        </div>

        <div className="mt-5">
          <Link href="/dashboard">
            <Button className="bg-primary border-2 text-xs xs:text-base py-3 xs:px-4 xs:py-5 w-full font-medium hover:bg-primary border-white rounded-2xl">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
