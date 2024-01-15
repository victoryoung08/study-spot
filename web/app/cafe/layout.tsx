import "../../src/styles/globals.css";

import { getServerSession } from "next-auth";
import Provider from "../context/client-provider";
import { authOptions } from "@/src/pages/api/auth/[...nextauth]";
import Sidebar from "../components/pages/dashboard/common/Sidebar";
import Topbar from "../components/pages/dashboard/common/Topbar";
import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "../components/analytics";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>
        <Provider session={session}>
          <Suspense>
            <Analytics />
          </Suspense>
          <main className="">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
