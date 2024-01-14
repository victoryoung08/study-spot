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
  title: "Dashboard",
  description: "Study Spot - Dashboard",
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
          <div className="flex">
            <Sidebar />
            <div className="w-auto flex-1 overflow-x-auto  relative">
              <div className="p-5 lg:px-10 lg:py-5 flex gap-3 justify-end">
                <Topbar />
              </div>
              <div className="p-5 lg:p-10 h-[90%]">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
