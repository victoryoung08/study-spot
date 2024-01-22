/* eslint-disable react-hooks/rules-of-hooks */
import { setCookie } from "cookies-next";
import { useSession } from "next-auth/react";

interface User {
  id: string;
  email: string;
  username: string;
  confirmed: boolean;
  isPaid?: boolean;
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
    setCookie("user", JSON.stringify({ user, expires }));
    return { session: { user, expires } };
  } else {
    return { session: null };
  }
};

export default getSession;
