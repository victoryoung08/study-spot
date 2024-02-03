"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import fetchWrapper from "../helper/fetchWrapper";

interface UserData {
  // Define the structure of your user data here
  cafe?: any; // Replace 'any' with the actual type of 'cafe'
}

export default async function getCafeDetails() {
  const session = await getServerSession(authOptions);
  const { access } = session?.user || {};
  try {
    if (!access) {
      throw new Error("Invalid token data");
    }
    const { data } = await fetchWrapper({
      endpoint: "users/me?populate=deep",
      options: {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${access}`,
        },
      },
    });

    const cafeData = data as UserData;

    if (cafeData) {
      // If data is an array, use data[0]?.cafe; otherwise, use data?.cafe directly
      const cafeDetails = Array.isArray(cafeData)
        ? cafeData[0]?.cafe
        : cafeData?.cafe;

      return { cafeDetails };
    }
  } catch (error) {
    return { error };
  }
}
