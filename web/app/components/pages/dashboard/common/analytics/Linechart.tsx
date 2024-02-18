"use client";

import { Button } from "@/app/components/ui/button";
import { Select, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Colors,
  Chart,
} from "chart.js";
import Link from "next/link";
import { Line } from "react-chartjs-2";
import DatePIcker from "./DatePIcker";
import getSession from "@/src/helper/getSession";
Chart.defaults.color = "#fff";

ChartJS.register(
  Colors,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scale: {
    position: "right",
  },
  ticks: {
    color: "#FFFFFF",
  },
  plugins: {
    legend: {
      display: false,
    },
    colors: {
      enabled: false,
      forceOverride: true,
    },
  },
};

type LinechartTypes = {
  overview: boolean;
  displayButton?: boolean;
  data: any;
  title?: string;
};

export default function Linechart({
  overview,
  displayButton,
  data,
  title,
}: LinechartTypes) {
  const session = getSession();
  const hasMembership = session?.session?.user?.hasMembership;
  return (
    <div>
      {title && (
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
        </div>
      )}

      <div className="w-full mt-10 border-2 border-white rounded-2xl p-5 lg:p-10">
        {overview && (
          <div className="flex flex-col items-start sm:flex-row justify-between sm:items-center mb-5 gap-5 sm:gap-0">
            <h2 className="text-xl font-bold">Overview</h2>
            <div className="ml-auto">
              <SelectComponent />
            </div>
          </div>
        )}
        {!overview && <DatePIcker />}

        <div className={`h-[350px] ${hasMembership ? "" : "blur-sm"} `}>
          <Line options={options} data={data} />
        </div>
        {displayButton && (
          <div className="mt-5 sm:w-2/4 mx-auto">
            {/* if paid, display link. If free display button that will direct to subscribe for paid membership */}
            <Link href="/dashboard">
              <Button className="bg-primary border-2 text-xs xs:text-base py-3 xs:px-4 xs:py-5 w-full font-medium hover:bg-primary border-white rounded-2xl">
                Upgrade to see more
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const SelectComponent = () => {
  return (
    <Select>
      <SelectTrigger className="w-[196px] xs:w-[180px] bg-grey border-2 rounded-2xl text-xs xs:text-base ">
        <SelectValue placeholder="Profile Visits" />
      </SelectTrigger>
      {/* <SelectContent>
        <SelectGroup>
          <SelectItem value="Profile Visit">Profile Visits</SelectItem>
        </SelectGroup>
      </SelectContent> */}
    </Select>
  );
};
