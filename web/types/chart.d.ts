export type ChartData = {
  labels: string[];
  datasets: {
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    pointRadius: number;
  }[];
};

export type PercentageData = {
  city: string;
  percentage: number;
};
