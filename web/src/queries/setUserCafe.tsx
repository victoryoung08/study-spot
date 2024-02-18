"use server";

import toast from "react-hot-toast";
import fetchWrapper from "../helper/fetchWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export default async function setUserCafe(cafeId: number, userId: string) {
  const session = await getServerSession(authOptions);
  const { access } = session?.user || {};

  try {
    if (!access) {
      throw new Error("Invalid token data");
    }
    const response = await fetchWrapper({
      endpoint: `users/${userId}`,
      options: {
        method: "PUT",
        headers: {
          Authorization: `Bearer  ${access}`,
        },
        data: {
          cafe: cafeId,
        },
      },
    });

    if (response.error) {
      toast.error(`${response.error.error}`);
      return;
    }
  } catch (error) {
    console.error(error);
  }
}
