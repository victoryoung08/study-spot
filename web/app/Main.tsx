import "./globals.css";

import type { ReactNode } from "react";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-[#181818] text-gray-700 antialiased">
    <div className="">
      <header className=" bg-[#181818]">
        <Navbar />
      </header>

      <main className="content text-xl text-white">{props.children}</main>

      <header className="">
        <Footer />
      </header>
    </div>
  </div>
);

export { Main };
