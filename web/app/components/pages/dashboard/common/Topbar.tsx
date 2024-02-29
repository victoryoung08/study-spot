"use client";

import { signOut } from "next-auth/react";
import { LogOut, User } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import DropdownWrapper from "./DropdownWrapper";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/app/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import Link from "next/link";
import getSession from "@/src/helper/getSession";
import { deleteCookie } from "cookies-next";
import { navLinks } from "./Sidebar";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.webp";
import Logout from "@/public/images/logout.svg";
import { CafeFormTypes } from "@/types/cafe";

function Topbar({ cafeData }: CafeFormTypes) {
  const { session } = getSession();
  const path = usePathname();
  return (
    <div className="flex justify-between w-full lg:justify-end ">
      <div className="flex lg:hidden">
        <Sheet>
          <SheetTrigger className="flex cursor-pointer flex-col space-y-1 bg-transparent hover:bg-transparent p-5">
            <div className="h-0.5 w-5 rounded-full bg-white" />
            <div className="h-0.5 w-5 rounded-full bg-white" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="w-4/6 sm:w-72 bg-black border-r-0"
          >
            <SheetHeader className="justify-center">
              <SheetClose asChild>
                <div className="flex justify-between items-center">
                  <Image src={logo} alt="Logo" className="w-44" />
                </div>
              </SheetClose>
            </SheetHeader>
            <div className="mt-10 flex flex-col h-5/6 justify-between ">
              <div className="flex flex-col justify-between gap-5">
                {navLinks
                  .filter(
                    (link) =>
                      cafeData?.hasMembership || link.text !== "Analytics"
                  )
                  .map((item) => {
                    return (
                      <div
                        key={item.href}
                        className="flex flex-col items-center"
                      >
                        <Link legacyBehavior href={item.href}>
                          <Button
                            className={`flex gap-2 w-full justify-start bg-transparent hover:bg-primary border-2 border-transparent px-6 py-5 transition-all ease-in-out delay-50 duration-500 hover:border-white rounded-2xl  
                      ${
                        path === item.activePath
                          ? "bg-primary border-white"
                          : "bg-transparent"
                      }`}
                          >
                            <Image
                              src={item.icon}
                              alt={item.text}
                              width={20}
                              height={20}
                            />
                            {item.text}
                          </Button>
                        </Link>
                      </div>
                    );
                  })}
              </div>

              <div
                className="cursor-pointer "
                onClick={() => {
                  deleteCookie("user");
                  signOut();
                }}
              >
                <Button className="flex text-white gap-4 text-base capitalize items-center justify-start  bg-transparent hover:bg-primary border-2 border-transparent w-full px-6 py-5 transition-all ease-in-out delay-50 duration-500 hover:border-white rounded-2xl">
                  <Image src={Logout} alt="Logout icon" />
                  <span className="">Logout</span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <DropdownWrapper
        ButtonTrigger={
          <div className="w-auto flex gap-3 justify-end bg-transparent outline-none hover:bg-transparent">
            <Avatar className="w-10 h-10">
              {/* <AvatarImage
              src={currentUser?.ticket_holder_data?.avatar || ""}
              alt="John Doe"
              className="rounded-full !bg-gray-500"
            /> */}
              <AvatarFallback className="text-white bg-primary text-sm font-bold">
                {session?.user?.username?.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        }
      >
        <div className="">
          <div className="sm:w-64 m-4">
            <DropdownMenuLabel className="!px-0 !pt-0 !pb-1">
              <div className="flex justify-start items-center gap-2 px-0">
                <Avatar className="w-8 h-8">
                  <AvatarImage
                    src="/public/images/user.jpg"
                    alt="John Doe"
                    className="rounded-full !bg-gray-500"
                  />
                  <AvatarFallback className="text-white bg-primary !px-0">
                    {session?.user?.username?.slice(0, 1).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm text-black">
                    {session?.user?.username}
                  </span>
                  <span className="text-xs text-primary-gray">
                    {session?.user?.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className=" !bg-[#CBD5E1]" />
            <DropdownMenuItem>
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4 text-primary" />
                <span className="">My Account</span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator className=" !bg-[#CBD5E1]" />
            <DropdownMenuItem>
              <div
                onClick={() => {
                  deleteCookie("user");
                  signOut();
                }}
                className="flex items-center w-full cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4 text-primary" />
                <span>Log out</span>
              </div>
            </DropdownMenuItem>
          </div>
        </div>
      </DropdownWrapper>
    </div>
  );
}

export default Topbar;
