"use client";

import Link from "next/link";

import React from "react";
import Image from "next/image";
import logo from "@/public/images/logo.webp";
import x from "@/public/favicon.png";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { deleteCookie } from "cookies-next";
import dashboardIcon from "@/public/images/dashboard-icon.svg";
import analyticsIcon from "@/public/images/analytics-icon.svg";
import profileIcon from "@/public/images/profile-icon.svg";
import supportIcon from "@/public/images/support-icon.svg";
import { Button } from "@/app/components/ui/button";
import Logout from "@/public/images/logout.svg";
import getSession from "@/src/helper/getSession";

export const navLinks = [
  {
    href: "/dashboard",
    icon: dashboardIcon.src,
    activePath: "/dashboard",
    text: "dashboard",
  },
  {
    href: "/dashboard/analytics",
    icon: analyticsIcon.src,
    activePath: "/dashboard/analytics",
    text: "Analytics",
  },
  {
    href: "/dashboard/profile",
    icon: profileIcon.src,
    activePath: "/dashboard/profile",
    text: "Profile",
  },
  {
    href: "/dashboard/support",
    icon: supportIcon.src,
    activePath: "/dashboard/support",
    text: "Support",
  },
];

function Sidebar() {
  const path = usePathname();
  const { session } = getSession();
  return (
    <div className="z-50 fixed h-screen hidden lg:flex">
      <div className="h-full flex p-10 sm:px-5 sm:py-10 xl:p-10 w-full flex-col items-center xl:py-10 xl:px-10">
        <Link href="/dashboard">
          <Image
            src={logo}
            alt="Study Spot"
            className="hidden sm:block sm:w-40"
          />
          {/* <span className="block sm:hidden text-white text-base ">
            Study Spot
          </span> */}
          <Image src={x} alt="Study Spot" className="block sm:hidden w-8" />
        </Link>
        <div className="mt-16 flex flex-col gap-5 justify-center">
          {navLinks
            .filter((link) => session?.user.isPaid || link.text !== "Analytics")
            .map((link, index) => (
              <Link key={index} href={link.href}>
                <Button
                  className={`flex text-white gap-4 text-base capitalize items-center justify-start hover:bg-primary border-2 border-transparent w-full px-6 py-5 transition-all ease-in-out delay-50 duration-500 hover:border-white rounded-2xl
        ${
          path === link.activePath
            ? "bg-primary border-white"
            : "bg-transparent"
        }`}
                >
                  <Image
                    src={link.icon}
                    alt={link.text}
                    width={30}
                    height={30}
                  />
                  <span className="hidden sm:block">{link.text}</span>
                </Button>
              </Link>
            ))}
        </div>
        <div
          className="mt-auto cursor-pointer pt-5"
          onClick={() => {
            deleteCookie("user");
            signOut();
          }}
        >
          <Button className="flex text-white gap-4 text-base capitalize items-center justify-start  bg-transparent hover:bg-primary border-2 border-transparent w-full px-6 py-5 transition-all ease-in-out delay-50 duration-500 hover:border-white rounded-2xl">
            <Image src={Logout} alt="Logout icon" />
            <span className="hidden sm:block">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
