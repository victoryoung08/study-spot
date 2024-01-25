"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./BasicInformation";
import CafeDetails from "./CafeDetails";
import Links from "./Links";
import Promotion from "./Promotion";
import ErrorPage from "@/app/components/common/ErrorPage";

export default function Profile() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getUserDetails");
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch user details");
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount
  console.log(userData);
  return (
    <div className="text-white space-y-10">
      <BasicInformation cafeDetails={userData} />
      <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
        <CafeDetails cafeDetails={userData} />
        <div className="space-y-10 md:w-2/4">
          <Links cafeDetails={userData} />
          <Promotion cafeDetails={userData} />
        </div>
      </div>
    </div>
  );
}

// async function getCafeData(id: number): Promise<any> {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users?filters[id][$eq]=${id}&populate=deep`,
//     {
//       next: { revalidate: 0 },
//       cache: "no-cache",
//     }
//   );
//   let data = [];
//   if (response.ok) {
//     data = await response.json();
//     console.log(data);

//     return { data };
//   } else {
//     return <ErrorPage />;
//   }
// }
