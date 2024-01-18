"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const genderData = [
  { gender: "Male", percent: 30, color: "#F38BB5" },
  { gender: "Female", percent: 60, color: "#8F54EA" },
  { gender: "Other", percent: 10, color: "#FCC950" },
];

export const data = {
  labels: ["Male", "Female", "Other"],
  datasets: [
    {
      label: "Gender",
      data: genderData.map((item) => {
        return item.percent;
      }),
      backgroundColor: genderData.map((item) => {
        return item.color;
      }),

      borderWidth: 0,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function PieChart() {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold">More Insights</h3>
        <div className="w-32 h-1.5 mt-2 bg-primary rounded-lg" />
      </div>
      <div className="w-2/4 mt-10 border-2 border-white rounded-2xl p-5 lg:p-10">
        <h2 className="text-xl font-medium">Gender</h2>
        <div className="h-72 mx-auto">
          <Pie data={data} options={options} />
        </div>
        <div className="flex justify-center gap-10 w-full mt-10">
          {genderData.map((item, index) => {
            return (
              <div
                key={item.percent}
                // className={index != 0 ? "border-l pl-10" : ""}
              >
                <div>
                  <p className="text-lg text-right">{item.percent}%</p>
                  <div
                    className={`flex gap-2 items-center mt-1 ${
                      index != 0 ? "border-l pl-10" : ""
                    }`}
                  >
                    <div
                      className={`h-3 w-3 rounded-full bg-[${item.color}] `}
                    />
                    <p className="text-sm">{item.gender}</p>
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
