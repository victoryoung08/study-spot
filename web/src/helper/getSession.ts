/* eslint-disable react-hooks/rules-of-hooks */
import { setCookie } from "cookies-next";
import { useSession } from "next-auth/react";

interface User {
  id: string;
  email: string;
  username: string;
  confirmed: boolean;
  hasMembership?: boolean;
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
    const { id, email, username, hasMembership } = user;

    setCookie(
      "user",
      JSON.stringify({ id, email, username, hasMembership, expires })
    );
    return {
      session: {
        user: { id, email, username, hasMembership },
        expires,
      },
    };
  } else {
    return { session: null };
  }
};

export default getSession;
