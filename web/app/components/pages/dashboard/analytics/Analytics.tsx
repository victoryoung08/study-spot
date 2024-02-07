// import getPageViews from "@/src/queries/getPageViews";
"use client";
import getPageViews from "@/src/hooks/getPageViews";
import { useState, useEffect } from "react"; // For managing state and performing side effects in React

import Clicks from "./Clicks";
import Impressions from "./Impressions";
import ProfileVisits from "./ProfileVisits";
import TabsWrapper from "./TabsWrapper";

export default function Analytics() {
  const [pageViewsDate, setPageViewsDate] = useState(null);
  const [pageviewsByCity, setPageViewsByCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { rows } = await getPageViews({ cafeName: "August Coffee" }); // Fetch data using getPageViews function
        if (rows) {
          const pageViewsByDate = rows.map((row: any) => ({
            date: row.dimensionValues[0].value,
            value: parseInt(row.metricValues[0].value), // Assuming the value is numeric, parse it as integer
          }));

          const pageViewsByCity = rows.map((row: any) => ({
            city: row.dimensionValues[1].value,
            value: parseInt(row.metricValues[0].value), // Assuming the value is numeric, parse it as integer
          }));
          setPageViewsByCity(pageViewsByCity);
          setPageViewsDate(pageViewsByDate);
          // setRows(rows); // Set the fetched rows to state
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  console.log("pageViewsDate", pageViewsDate); // This will log the rows once they're fetched and set to state
  console.log("pageviewsByCity", pageviewsByCity); // This will log the rows once they're fetched and set to state
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-4xl font-black">Analytics</h2>
      </div>
      <TabsWrapper>
        <ProfileVisits />
        <Impressions />
        <Clicks />
      </TabsWrapper>
    </div>
  );
}
