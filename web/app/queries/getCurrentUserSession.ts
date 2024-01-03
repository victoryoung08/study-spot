// import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
// import { User } from "@/types/user";
// import { getCookie, setCookie } from "cookies-next";
// import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";
// import { Dispatch, SetStateAction, useEffect, useState } from "react";

// export default function GetCurrentUserSession() {
//   const [currentUser, setCurrentUser] = useState<User | null>(null);

//   useEffect(() => {
//     const userData = getCookie("user");
//     // console.log(userData);
//     if (userData === "null" || userData === null || userData === undefined) {
//       getCurrentUserFromApi(setCurrentUser);
//     } else {
//       setCurrentUser(JSON.parse(userData));
//       console.log(currentUser);
//     }
//   }, []);
//   //@ts-ignore Todo: fix typing issues here
//   return { currentUser: currentUser?.data };
// }

// async function getCurrentUserFromApi(
//   setCurrentUser: Dispatch<SetStateAction<User | null>>
// ) {
//   // const session = await getServerSession(authOptions);
//   // const { access } = session?.user || {};

//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/users/me`,
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzA0MTkwNzIwLCJleHAiOjE3MDY3ODI3MjB9.jw2RyjWx8suAMfT6-W6K0-hEI6B-MiP5Lt9mM1ZYmgo`,
//         },
//       }
//     );
//     const resp = await response.json();
//     // console.log(resp);
//     if (resp) {
//       setCurrentUser(resp);
//       setCookie("user", JSON.stringify(resp));
//     } else {
//       throw new Error(`Failed to retrieve user data: ${response.status}`);
//     }
//   } catch (error: any) {
//     console.error("Error fetching user data:", error);
//     throw error; // Rethrow the error after logging
//   }
// }
