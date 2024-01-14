"use client";

import { Button } from "@/app/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
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

const labels = ["January 10 2024", "January 12 2024", "January 14 2024"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      borderColor: "rgb(243, 139, 181)",
      backgroundColor: "rgba(243, 139, 181)",
      borderWidth: 1,
      pointRadius: 5,
    },
  ],
};

export default function Overview() {
  return (
    <div className="w-full border-2 border-white rounded-2xl p-10">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-medium">Overview</h2>
        <SelectComponent />
      </div>
      <div className="h-[350px]">
        <Line options={options} data={data} />
      </div>
      <div className="mt-5 w-2/4 mx-auto">
        <Link href="/dashboard">
          <Button className="bg-primary border-2 w-full px-4 py-5 font-medium hover:bg-primary border-white rounded-2xl">
            Upgrade to see more
          </Button>
        </Link>
      </div>
    </div>
  );
}

const SelectComponent = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-grey border-2 rounded-2xl">
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
