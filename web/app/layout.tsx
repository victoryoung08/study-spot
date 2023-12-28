import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "./components/analytics";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import { authOptions } from "../src/pages/api/auth/[...nextauth]";
import Provider from "./context/client-provider";
import ErrorPage from "./components/common/ErrorPage";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Spot - Find the Best Study Spot",
  description: "Study Spot - Find the Best Study Spot",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const response = await fetch(
    `${process.env.STRAPI_API_ENDPOINT}/pages?populate=deep`,
    {
      next: { revalidate: 0 },
      cache: "no-cache",
    }
  );

  let data = [];
  if (response.ok) {
    data = await response.json();
    if (data.data.length === 0) {
      return <ErrorPage />;
    }
  }

  const navigationData = data?.data?.map((item: any) => {
    const title = item.attributes.title;
    const path = item.attributes.path;
    const id = item.attributes.id;
    return { title, path, id };
  });

  return (
    <html lang="en" className="!bg-[#181818]">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <Provider session={session}>
          <header className=" bg-[#181818]">
            <Navbar navigationData={navigationData} />
          </header>
          <Suspense>
            <Analytics />
          </Suspense>
          <Toaster />

          <main className="text-xl text-white">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
