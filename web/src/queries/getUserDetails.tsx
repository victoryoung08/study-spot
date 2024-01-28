"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import fetchWrapper from "../helper/fetchWrapper";

export default async function getUserDetails() {
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
      // console.log(data);
      return { data };
    }
  } catch (error) {
    return { error };
  }
}
