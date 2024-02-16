const labels = ["-", "-", "-"];

export const data = {
  labels,
  datasets: [
    {
      data: [0, 0, 0],
      borderColor: "rgb(243, 139, 181)",
      backgroundColor: "rgba(243, 139, 181)",
      borderWidth: 1,
      pointRadius: 5,
    },
  ],
};

export const genderData = [
  { title: "Male", percent: 30, color: "#F38BB5" },
  { title: "Female", percent: 60, color: "#8F54EA" },
  { title: "Other", percent: 10, color: "#FCC950" },
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
  title: string;
  percent: number;
  color: string;
};

export const trafficSources = [
  { title: "External Sites or App", percent: 50, color: "#FCC950" },
  { title: "Search Terms", percent: 50, color: "#8F54EA" },
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

export const pageViewsLocations = [
  { name: "Sydney", percentage: 60 },
  { name: "Melbourne", percentage: 20 },
  { name: "Canberra", percentage: 20 },
];

export const externalTraffics = [
  { name: "Instagram", percentage: 30 },
  { name: "TikTok", percentage: 30 },
];

export const SearchTerms = [
  { name: "study cafe in sydney", percentage: 30 },
  { name: "study spots near me", percentage: 30 },
];
