"use client";

import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import { usePathname } from "next/navigation";
import Script from "next/script";

type IMainProps = {
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const pathname = usePathname();

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', "GTM-MPWMKND5");
  `,
        }}
      />
      <div className="w-full !bg-[#181818] text-gray-700 antialiased h-full">
        <div className="">
          <header className=" bg-[#181818]">
            <Navbar />
          </header>

          <main className="content text-xl text-white">{props.children}</main>

          {pathname != "/study-spot-finder" && <Footer />}
        </div>
      </div>
    </>
  );
};
export { Main };
