import Image from "next/image";
import Morethan from "@/public/images/morethanusual.svg";
import Lessthan from "@/public/images/lessthanusual.svg";
import Typical from "@/public/images/typical.svg";
export default function OverviewCount({ totalCount, percentage }: any) {
  return (
    <div>
      {totalCount && percentage && (
        <>
          <h2 className="text-4xl md:text-5xl  font-black text-center">
            {totalCount ? totalCount : ""}
          </h2>
          <div className="flex justify-center items-center gap-2 mt-2">
            <Image
              src={
                percentage > 50
                  ? Morethan
                  : "" || percentage < 50
                  ? Lessthan
                  : "" || percentage == 50
                  ? Typical
                  : ""
              }
              alt="Icon"
              className="w-5 h-5"
            />
            <p className="text-xs md:text-base">
              {percentage}% {percentage > 50 ? "more than" : "less than"}{" "}
              previous 28 days
            </p>
          </div>
        </>
      )}
    </div>
  );
}
