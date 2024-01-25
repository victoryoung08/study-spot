import getSession from "../helper/getSession";

export default async function getUserDetails() {
  const { session } = getSession();

  if (session) {
    const id = session?.user?.id;
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users?filters[id][$eq]=${id}&populate=deep`,
      {
        next: { revalidate: 0 },
        cache: "no-cache",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
