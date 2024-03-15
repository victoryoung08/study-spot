"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import fetchWrapper from "../helper/fetchWrapper";
import { User } from "@/types/user";

export default async function getUserDetails() {
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

    const userData = data as User;

    if (userData) {
      // console.log(data);
      return { userData };
    }
  } catch (error) {
    console.error("Error fetching user details:", error);

    return { error };
  }
}
