import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import Script from "next/script";
import ErrorPage from "./components/common/ErrorPage";

type IMainProps = {
  children: ReactNode;
};

export default async function Main(props: IMainProps) {
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
    <>
      <div className="w-full !bg-[#181818] text-gray-700 antialiased h-full">
        <div className="">
          <header className=" bg-[#181818]">
            <Navbar navigationData={navigationData} />
          </header>

          <main className="content text-xl text-white">{props.children}</main>

          <Footer />
        </div>
      </div>
    </>
  );
}
