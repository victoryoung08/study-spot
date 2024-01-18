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

export const genderData = [
  { gender: "Male", percent: 30, color: "#F38BB5" },
  { gender: "Female", percent: 60, color: "#8F54EA" },
  { gender: "Other", percent: 10, color: "#FCC950" },
];

export const PiechartData1 = {
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

export type trafficSourcesTypes = {
  gender: string;
  percent: number;
  color: string;
};

export const trafficSources = [
  { gender: "External Sites or App", percent: 50, color: "#FCC950" },
  { gender: "Search Terms", percent: 50, color: "#8F54EA" },
];

export const PiechartData2 = {
  datasets: [
    {
      label: "Traffics",
      data: trafficSources.map((item) => {
        return item.percent;
      }),
      backgroundColor: trafficSources.map((item) => {
        return item.color;
      }),

      borderWidth: 0,
    },
  ],
};
