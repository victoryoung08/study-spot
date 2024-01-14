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
    <div className="bg-grey border-2 border-white rounded-2xl w-full p-5">
      <div>
        <div
          className={` ${
            twoColumn
              ? "grid grid-cols-2 items-center justify-center text-center"
              : "space-y-5"
          }`}
        >
          <h2 className="font-medium">{title}</h2>
          <div
            className={`text-5xl font-black flex items-end gap-1 ${
              twoColumn ? "justify-center border-l" : ""
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
            <Button className="bg-primary border-2 px-4 py-5 w-full font-medium hover:bg-primary border-white rounded-2xl">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
