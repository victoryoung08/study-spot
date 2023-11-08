import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import Main from "./Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Spot - Find the Best Study Spot",
  description: "Study Spot - Find the Best Study Spot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!bg-[#181818]">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-MPWMKND5`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
