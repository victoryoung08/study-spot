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
import { Toaster } from "react-hot-toast";
import getCafeDetails from "@/src/queries/getCafeDetails";

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
  const cafeData = await getCafeDetails();

  return (
    <html lang="en" className="!bg-[#181818] text-white">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <Provider session={session}>
          <Suspense>
            <Analytics />
          </Suspense>
          <div className="flex">
            <div className="lg:w-64">
              <Sidebar cafeData={cafeData?.cafeDetails} />
            </div>
            <div className="w-auto flex-1 overflow-x-auto relative">
              <div className="p-5 lg:px-10 lg:py-5 flex gap-3 justify-end">
                <Topbar cafeData={cafeData?.cafeDetails} />
              </div>
              <div className="p-5 lg:p-10">{children}</div>
            </div>
          </div>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
