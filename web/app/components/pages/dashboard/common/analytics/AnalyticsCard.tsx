import Image from "next/image";
import Morethan from "@/public/images/morethanusual.svg";
import Lessthan from "@/public/images/lessthanusual.svg";
import Typical from "@/public/images/typical.svg";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import getSession from "@/src/helper/getSession";

// Define the type for the props of the AnalyticsCard component
type AnalyticsCardProps = {
  title: string;
  number: number;
  twoColumn: boolean;
  percentage: number;
};

// Define the AnalyticsCard component
export default function AnalyticsCard({
  title,
  number,
  twoColumn,
  percentage,
}: AnalyticsCardProps) {
  // Fetch session data
  const { session } = getSession();

  // Determine which icon to display based on the percentage
  const iconSrc =
    percentage > 50 ? Morethan : percentage < 50 ? Lessthan : Typical;

  return (
    <div className="bg-grey border-2 border-white rounded-2xl w-full p-4 xs:p-5">
      <div>
        {/* Render the title and number */}
        <div
          className={` ${
            twoColumn
              ? "grid grid-cols-2 items-center justify-center text-center"
              : "space-y-4 md:space-y-5"
          }`}
        >
          <h2 className="text-xs xs:text-base font-medium pr-2">
            {title || ""}
          </h2>
          <div
            className={`text-4xl md:text-5xl font-black flex items-end  gap-1 ${
              twoColumn ? "justify-center border-l pl-2" : ""
            }`}
          >
            <h3>{number || ""}</h3>
            {/* Render the icon */}
            <Image src={iconSrc} alt="Icon" className="w-5 h-5" />
          </div>
        </div>

        {/* Render the "See More" button */}
        <div className="mt-5">
          <Link
            href={
              session?.user?.hasMembership
                ? "/dashboard/analytics"
                : "/dashboard/support"
            }
          >
            <Button className="bg-primary border-2 text-xs xs:text-base py-3 xs:px-4 xs:py-5 w-full font-medium hover:bg-primary border-white rounded-2xl">
              {session?.user?.hasMembership
                ? "See More"
                : "Upgrade to see more"}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
