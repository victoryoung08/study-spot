"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import fetchWrapper from "../helper/fetchWrapper";

export default async function getCafeDetails() {
  const session = await getServerSession(authOptions);
  const { access } = session?.user || {};
  //   console.log("access", access);
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

    if (data) {
      // If data is an array, use data[0]?.cafe; otherwise, use data?.cafe directly
      const cafeDetails = Array.isArray(data) ? data[0]?.cafe : data.cafe;

      console.log("cafeDetails:", cafeDetails);
      return { cafeDetails };
    }
  } catch (error) {
    return { error };
  }
}
