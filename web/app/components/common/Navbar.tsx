"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "@/public/images/logo.webp";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { pushDataLayer } from "@/src/lib/gtm";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import { useSession } from "next-auth/react";

export default function Navbar({ navigationData }: any) {
  const searchParams = useSearchParams();
  const { data: session } = useSession();
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
  const view = searchParams?.get("view");

  return (
    <div
      className={`
        ${
          view != "map"
            ? " max-w-screen-lg z-10 mx-auto px-5 lg:px-0 py-5"
            : "absolute md:relative z-40 max-w-screen-lg mx-auto top-0 right-0 left-0"
        }
        ${navHandler ? "bg-black/60 !z-50" : "bg-transparent"}
        ${pathname === "/dashboard" ? "hidden" : ""}
      `}
    >
      <div
        className={
          view != "map"
            ? "flex items-center justify-between px-10 "
            : "flex items-center justify-center md:justify-between"
        }
      >
        <Link
          className="z-40"
          onClick={() =>
            pushDataLayer({
              name: "Home",
              path: "/",
            })
          }
          href="/"
        >
          <Image src={logo} alt="Logo" className="w-40 sm:w-44 " priority />
        </Link>
        <button
          aria-label="Menu"
          type="button"
          className={
            view != "map"
              ? "flex cursor-pointer flex-col space-y-1 bg-transparent hover:bg-transparent lg:hidden"
              : "absolute right-10 flex flex-col space-y-1 lg:hidden"
          }
          onClick={handleNav}
        >
          <div className="h-0.5 w-5 rounded-full bg-white" />
          <div className="h-0.5 w-5 rounded-full bg-white" />
          <div className="h-0.5 w-5 rounded-full bg-white" />
        </button>
        <div className="hidden gap-6 lg:flex items-center ">
          <Link
            onClick={() =>
              pushDataLayer({
                name: "Home",
                path: "/",
              })
            }
            href="/"
            className="text-white hover:border-none"
          >
            Home
          </Link>

          {mainNavigation.map((item: any) => {
            return (
              <Link
                onClick={() =>
                  pushDataLayer({
                    name: item.title,
                    path: item.path,
                  })
                }
                key={item.path}
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
              className="dropdown-content z-[1] menu p-2 shadow bg-[#505050] rounded-box w-52"
            >
              {dropDownNavigation.map((item: any) => {
                return (
                  <>
                    <li key={item.path}>
                      <Link
                        onClick={() =>
                          pushDataLayer({
                            name: item.title,
                            path: item.path,
                          })
                        }
                        key={item.id}
                        href={item.path}
                        className={
                          "text-white hover:text-white hover:border-none z-50 cursor-pointer"
                        }
                      >
                        {item.title}
                      </Link>
                    </li>
                  </>
                );
              })}
              {session && (
                <li>
                  <Link
                    onClick={() =>
                      pushDataLayer({
                        name: "Dashboard",
                        path: "/dashboard",
                      })
                    }
                    href="/dashboard"
                    className="capitalize text-white"
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {!session && (
                <li>
                  <a
                    onClick={() =>
                      pushDataLayer({
                        name: "Cafe",
                        path: "/cafe",
                      })
                    }
                    href="/cafe"
                    target="_blank"
                    className="text-white hover:text-white hover:border-none z-50 cursor-pointer"
                  >
                    Cafes
                  </a>
                </li>
              )}
            </ul>
          </div>

          <Link
            onClick={() =>
              pushDataLayer({
                name: "Find A Study Spot",
                path: "/study-spot-finder",
              })
            }
            href="/study-spot-finder"
            className="capitalize btn btn-primary border-white hover:border-white"
          >
            Find A Study Spot
          </Link>
        </div>
      </div>
      {navHandler && (
        <div className="lg:hidden flex flex-col items-center gap-5 py-10 ">
          <Link
            href="/"
            className="w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
          >
            Home
          </Link>
          {navigationData.map((item: any) => {
            return (
              <Link
                onClick={() =>
                  pushDataLayer({
                    name: item.title,
                    path: item.path,
                  })
                }
                key={item.id}
                href={item.path}
                className={
                  item.path === "/study-spot-finder"
                    ? "capitalize btn btn-primary border-white hover:border-white"
                    : "w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
                }
              >
                {item.title}
              </Link>
            );
          })}
          {session && (
            <Link
              onClick={() =>
                pushDataLayer({
                  name: "Dashboard",
                  path: "/dashboard",
                })
              }
              href="/dashboard"
              className="capitalize text-white"
            >
              Dashboard
            </Link>
          )}
          {!session && (
            <Link
              onClick={() =>
                pushDataLayer({
                  name: "Cafe",
                  path: "/cafe",
                })
              }
              href="/cafe"
              className="text-white hover:text-white hover:border-none z-50 cursor-pointer"
            >
              Cafes
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
