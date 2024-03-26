import fetchWrapper from "../helper/fetchWrapper";

export default async function updateMembership(
  cafeId: string,
  userId: string,
  access: string,
  hasMembership: boolean,
  data: any
) {
  try {
    const userResponse = await fetchWrapper({
      endpoint: `users/${userId}`,
      options: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${access}`,
        },
        data: data,
      },
    });

    const cafeResponse = await fetchWrapper({
      endpoint: `study-spots/${cafeId}`,
      options: {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${access}`,
        },
        data: {
          data: {
            hasMembership: hasMembership,
          },
        },
      },
    });

    if (userResponse.error) {
      console.error(`${userResponse.error.error}`);
      return;
    }
    if (cafeResponse.error) {
      console.error(`${cafeResponse.error.error}`);
      return;
    }
  } catch (error) {
    console.error("error", error);
  }
}
