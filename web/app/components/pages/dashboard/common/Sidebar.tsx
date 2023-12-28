"use client";

import Link from "next/link";
import {
  ChartBarIcon,
  Cog8ToothIcon,
  CursorArrowRippleIcon,
  UserIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";

import React, { memo } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.webp";
import { usePathname } from "next/navigation";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

const navLinks = [
  {
    href: "/dashboard",
    icon: ChartBarIcon,
    activePath: "/dashboard",
    text: "dashboard",
  },
  {
    href: "/dashboard/pageclicks",
    icon: CursorArrowRippleIcon,
    activePath: "/dashboard/pageclicks",
    text: "Page Clicks",
  },
  {
    href: "/dashboard/pageviews",
    icon: WindowIcon,
    activePath: "/dashboard/pageviews",
    text: "Page Views",
  },
  {
    href: "/dashboard/setting",
    icon: Cog8ToothIcon,
    activePath: "/dashboard/setting",
    text: "Settings",
  },
];

function Sidebar() {
  const path = usePathname();

  return (
    <div>
      <div className="border-r border-gray-600  h-full py-5 px-3 sm:p-5 lg:py-10 xl:p-10 w-full lg:flex flex-col items-center xl:py-10 xl:px-10">
        <Link href="/dashboard">
          <Image src={logo} alt="Study Spot" className="w-40" />
        </Link>
        <div className="mt-16 flex flex-col gap-5 justify-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="flex gap-5 text-base capitalize items-center justify-center lg:justify-start "
            >
              {React.createElement(link.icon, {
                className:
                  path === link.activePath
                    ? "text-primary h-7 w-7"
                    : "text-white h-7 w-7",
              })}
              {link.text}
            </Link>
          ))}
        </div>
        <div className="mt-auto">
          <div
            onClick={() => signOut()}
            className="flex gap-5 justify-center text-base"
          >
            <ArrowRightOnRectangleIcon className="w-7 h-7" />
            Logout
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
