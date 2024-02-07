type pageViewsType = { cafeName: string; startDate?: string; endDate?: string };

export default async function getPageViews({
  cafeName,
  startDate,
  endDate,
}: pageViewsType) {
  try {
    const response = await fetch(
      `/api/ga?cafe=${cafeName}`
      // `/api/ga?cafe=${cafeName}&startDate=${startDate}&endDate=${endDate}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch analytics");
    }
    const data = await response.json();
    if (data) {
      const rows = data.response.rows;
      return { rows };
    }
  } catch (error) {
    console.error("Error fetching analytics:", error);
    throw error; // Re-throw the error to handle it at a higher level  }
  }
}
