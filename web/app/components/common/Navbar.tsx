"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "@/public/images/logo.webp";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [navHandler, setNavHandler] = useState(false);
  const handleNav = () => {
    setNavHandler((current) => !current);
  };
  return (
    <div className="max-w-screen-lg z-10 mx-auto px-5 lg:px-0">
      <div className=" flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Logo" className="w-32 h-32" />
        </Link>
        <button
          type="button"
          className="flex cursor-pointer flex-col space-y-1 bg-transparent hover:bg-transparent lg:hidden"
          onClick={handleNav}
        >
          <div className="h-0.5 w-5 rounded-full bg-white" />
          <div className="h-0.5 w-5 rounded-full bg-white" />
          <div className="h-0.5 w-5 rounded-full bg-white" />
        </button>
        <div className="hidden gap-10 lg:flex items-center">
          {pathname === "/" ? (
            <Link href="/" className="text-white hover:border-none">
              Home
            </Link>
          ) : (
            <Link
              href="/creator-program"
              className="text-white hover:border-none"
            >
              Be a Creator
            </Link>
          )}

          <Link href="/about" className="text-white hover:border-none">
            About
          </Link>
          <Link href="/list-cafe" className="text-white hover:border-none">
            List Your Cafe
          </Link>
          <Link
            href="/study-spot-finder"
            type="button"
            className="capitalize btn btn-primary border-white hover:border-white"
          >
            Find a Study Spot
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
          <Link
            href="/creator-program"
            className="w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
          >
            Be a Creator
          </Link>
          <Link
            href="/about"
            className="w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
          >
            About
          </Link>
          <Link
            href="/list-cafe"
            className="w-full rounded-lg p-2 text-center text-white hover:border-none hover:bg-gray"
          >
            List Your Cafe
          </Link>
          <Link
            href="/study-spot-finder"
            type="button"
            className="capitalize btn btn-primary border border-white hover:border-white"
          >
            Find a Study Spot
          </Link>
        </div>
      )}
    </div>
  );
}
