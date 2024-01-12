"use client";

import { signOut } from "next-auth/react";
import { LogOut, Settings, User } from "lucide-react";
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
import Link from "next/link";
import getSession from "@/src/helper/getSession";
import { deleteCookie } from "cookies-next";

function Topbar() {
  const { session } = getSession();
  return (
    <DropdownWrapper
      ButtonTrigger={
        <div className="w-auto flex gap-3 justify-end bg-transparent outline-none hover:bg-transparent">
          <Avatar className="w-10 h-10 ">
            {/* <AvatarImage
              src={currentUser?.ticket_holder_data?.avatar || ""}
              alt="John Doe"
              className="rounded-full !bg-gray-500"
            /> */}
            <AvatarFallback className="text-black text-sm font-bold">
              {session?.user?.username?.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden sm:flex items-center gap-2">
            <span className="">
              <span className="text-sm font-bold !px-0 text-white dark:text-white">
                {session?.user?.username}
              </span>
            </span>
            <svg
              className="hidden fill-white sm:block"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                fill=""
              />
            </svg>
          </div>
        </div>
      }
    >
      <div className="">
        <div className=" sm:w-64 m-4">
          <DropdownMenuLabel className="!px-0 !pt-0 !pb-1">
            <div className="flex justify-start items-center gap-2 px-0">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="/public/images/user.jpg"
                  alt="John Doe"
                  className="rounded-full !bg-gray-500"
                />
                <AvatarFallback className="text-black !px-0">
                  {session?.user?.username?.slice(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm text-black">
                  {/* {currentUser?.first_name} {currentUser?.last_name}  */}
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
            <Link href="/dashboard/profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="">My Account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator className=" !bg-[#CBD5E1]" />
          <DropdownMenuItem>
            <div
              onClick={() => {
                deleteCookie("user");
                signOut();
              }}
              className="flex items-center"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </div>
          </DropdownMenuItem>
        </div>
      </div>
    </DropdownWrapper>
  );
}

export default Topbar;
