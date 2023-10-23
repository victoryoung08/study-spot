"use client";

import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { usePathname } from "next/navigation";

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const pathname = usePathname();

  return (
    <div className="w-full !bg-[#181818] text-gray-700 antialiased h-full">
      <div className="">
        <header className=" bg-[#181818]">
          <Navbar />
        </header>

        <main className="content text-xl text-white">{props.children}</main>

        {pathname != "/study-spot-finder" && <Footer />}
      </div>
    </div>
  );
};
export { Main };
