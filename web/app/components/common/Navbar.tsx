"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "@/public/images/logo.webp";
import { usePathname } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Navbar({ navigationData }: any) {
  const pathname = usePathname();

  const [navHandler, setNavHandler] = useState(false);
  const handleNav = () => {
    setNavHandler((current) => !current);
  };
  const mainNavigation = navigationData.filter((item: any) => {
    if (
      item.path.includes("/creator-program") ||
      item.path.includes("/library") ||
      item.path.includes("/about")
    ) {
      return item;
    }
  });
  const dropDownNavigation = navigationData
    .filter((el: any) => !mainNavigation.includes(el))
    .filter((item: any) => item.path !== "/study-spot-finder");

  return (
    <div className="max-w-screen-lg z-10 mx-auto px-5 lg:px-0">
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-32 h-32" priority />
        </Link>
        <button
          aria-label="Menu"
          type="button"
          className="flex cursor-pointer flex-col space-y-1 bg-transparent hover:bg-transparent lg:hidden"
          onClick={handleNav}
        >
          <div className="h-0.5 w-5 rounded-full bg-white" />
          <div className="h-0.5 w-5 rounded-full bg-white" />
          <div className="h-0.5 w-5 rounded-full bg-white" />
        </button>
        <div className="hidden gap-10 lg:flex items-center">
          <Link href="/" className="text-white hover:border-none">
            Home
          </Link>

          {mainNavigation.map((item: any) => {
            return (
              <Link
                key={item.id}
                href={item.path}
                className={
                  item.path === "/study-spot-finder"
                    ? "capitalize btn btn-primary border-white hover:border-white"
                    : "text-white hover:border-none"
                }
              >
                {item.title}
              </Link>
            );
          })}

          <div className="dropdown">
            <label
              tabIndex={0}
              className="m-1 text-white cursor-pointer flex items-center gap-1"
            >
              <ChevronDownIcon className="h-5 w-5" />
              More
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {dropDownNavigation.map((item: any) => {
                return (
                  <li key={item.id}>
                    <Link
                      key={item.id}
                      href={item.path}
                      className={"text-white hover:border-none z-50"}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <Link
            href="/"
            className="capitalize btn btn-primary border-white hover:border-white"
          >
            Find A Study Spot
          </Link>
        </div>
      </div>
      {navHandler && (
        <div className="lg:hidden flex flex-col items-center gap-5 py-10">
          <Link
            href="/"
            className="w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
          >
            Home
          </Link>
          {navigationData.map((item: any) => {
            return (
              <Link
                key={item.id}
                href={item.path}
                className={
                  item.path === "/study-spot-finder"
                    ? "capitalize btn btn-primary border-white hover:border-white"
                    : "w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
                }

                // className="text-white hover:border-none"
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
