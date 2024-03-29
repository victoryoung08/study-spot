/* eslint-disable react-hooks/rules-of-hooks */
import { setCookie } from "cookies-next";
import { useSession } from "next-auth/react";

interface User {
  id: string;
  email: string;
  username: string;
  name: string;
  contact_number: string;
  confirmed: boolean;
  // hasMembership: boolean;
  access: string;
  updatedAt: string;
}

interface SessionData {
  user: User;
  expires: string;
}

const getSession = () => {
  const session = useSession();

  if (session && session.data) {
    const { user, expires } = session.data as SessionData;
    // Extract only the required properties from the user object
    const { id, email, name, username, contact_number, access } = user;

    setCookie(
      "user",
      JSON.stringify({
        id,
        email,
        username,
        name,
        contact_number,
        access,
        expires,
      })
    );
    return {
      session: {
        user: { id, email, name, username, contact_number, access },
        expires,
      },
    };
  } else {
    return { session: null };
  }
};

export default getSession;
