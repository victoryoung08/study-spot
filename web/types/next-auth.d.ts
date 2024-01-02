import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserData;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id_token?: string;
    provider?: string;
    accessToken?: string;
  }
}

interface UserData {
  access: string;
  id: string;
  email: string;
  username: string;
  confirmed: boolean;
  updatedAt: string;
}

interface JSONData {
  user: UserData;
  expires: string;
}
