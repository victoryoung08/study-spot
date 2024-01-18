"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

type PieChartTypes = {
  title?: string;
  sectionTitle: string;
  data: any;
  datasets: any;
};

export default function PieChart({
  datasets,
  title,
  sectionTitle,
  data,
}: PieChartTypes) {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="md:w-2/4 mt-10 border-2 border-white rounded-2xl p-5 lg:p-10">
        {sectionTitle && (
          <h2 className="text-xl font-medium">{sectionTitle}</h2>
        )}
        <div className="h-72 mx-auto">
          <Pie data={datasets} options={options} />
        </div>
        <div className="flex justify-center gap-5 sm:gap-10 w-full mt-10">
          {data.map((item: any, index: number) => {
            return (
              <div
                key={index}
                // className={index != 0 ? "border-l pl-10" : ""}
              >
                <div>
                  <p className="text-base sm:text-lg text-right">
                    {item.percent}%
                  </p>
                  <div
                    className={`flex gap-2 items-center mt-1 ${
                      index != 0 ? "sm:border-l sm:pl-10" : ""
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full bg-[${item.color}] `}
                    />
                    <p className="text-xs xs:text-sm">{item.gender}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
