import "../../src/styles/globals.css";
import { getServerSession } from "next-auth";
import Provider from "../context/client-provider";
import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "../components/analytics";
import { Inter } from "next/font/google";
import Logo from "@/public/images/study-spot-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cafe - Study Spot",
  description: "Cafe - Study Spot",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en" className="!bg-[#181818]">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={`relative ${inter.className}`}>
        <Provider session={session}>
          <Suspense>
            <Analytics />
          </Suspense>

          <div className="h-screen flex flex-col items-center gap-20 justify-center">
            <div>
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
            <div>{children}</div>
          </div>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
