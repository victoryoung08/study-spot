/* eslint-disable react-hooks/rules-of-hooks */
import { setCookie } from "cookies-next";
import { useSession } from "next-auth/react";

interface UserData {
  id: string;
  email: string;
  username: string;
  confirmed: boolean;
  updatedAt: string;
}

const getSession = () => {
  const session: { user: UserData } = useSession().data as any;

  setCookie("user", JSON.stringify(session));

  return { session };
};

export default getSession;
