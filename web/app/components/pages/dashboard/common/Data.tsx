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
