import toast from "react-hot-toast";
import fetchWrapper from "../helper/fetchWrapper";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import getAccessToken from "../helper/getAccessToken";
import getSession from "../helper/getSession";

export default async function updateMembership(
  cafeId: string,
  userId: string,
  data: any
) {
  // const session = await getServerSession(authOptions);
  // const { access } = session?.user || {};
  try {
    // if (!session) {
    //   throw new Error("Invalid token data");
    // }
    // console.log("access", access);

    // should not be able to update data without acces token (Must fix this!)
    const userResponse = await fetchWrapper({
      endpoint: `users/${userId}`,
      options: {
        method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer  ${access}`,
        // },
        data: data,
      },
    });

    // not working because there should be bearer
    const cafeResponse = await fetchWrapper({
      endpoint: `study-spots/${cafeId}`,
      options: {
        method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        //   Authorization: `Bearer  ${access}`,
        // },
        data: {
          hasMembership: true,
        },
      },
    });

    if (userResponse.error) {
      console.log(`${userResponse.error.error}`);
      return;
    }
    if (cafeResponse.error) {
      console.log(`${userResponse.error.error}`);
      return;
    }
  } catch (error) {
    console.error("error", error);
  }
}
