import NextAuth, { NextAuthOptions } from "next-auth";
import { decode, encode } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

interface CustomCredentials {
  email: string;
  password: string;
}

// const endpoint = process.env.DJANGO_ENDPOINT;

/*
 * Function to get user details from the API after successful signin
 */
// const requestUserDetails = async (accessToken: string) => {
//   try {
//     const res = await fetch(endpoint + "/v1/auth/users/me/", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Token ${accessToken}`,
//       },
//     });

//     const user = await res.json();

//     if (!res.ok) {
//       return { error: true, message: user };
//     }

//     return { user };
//   } catch (error) {
//     return { error: true, message: error };
//   }
// };

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // maxAge: 10 * 60, // 10 minutes
  },
  jwt: { encode, decode },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials as CustomCredentials;

        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier: email, password }),
        };

        try {
          /**
           * Authenticate user with the API
           */
          console.log(
            "API Endpoint:",
            process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT
          );

          const resp = await fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/auth/local`,
            requestOptions
          );
          const JWT_TOKEN = await resp.json();
          // incorrect username or password
          if (resp.status === 401) {
            console.log(resp);
            return null;
          }

          // user found in the database
          if (resp.ok) {
            // const { user } = await requestUserDetails(JWT_TOKEN.auth_token);
            // if (user.error) return null;
            const user = { ...JWT_TOKEN.user, jwt: JWT_TOKEN.jwt };

            // user.access = JWT_TOKEN.auth_token;
            return user;
          } else {
            console.log("Authentication failed:", resp.status, resp.statusText);

            return null;
          }
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],

  pages: {
    signIn: "/",
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user, account }: any) {
      // Initial Sign in return current user
      if (user && account) {
        token.user = user;
        return token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
