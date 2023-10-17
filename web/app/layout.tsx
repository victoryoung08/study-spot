import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Main } from "./Main";

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
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
