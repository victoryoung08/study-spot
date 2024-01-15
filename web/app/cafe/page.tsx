"use client";
import { Container } from "@/app/components/common/Container";
import SigninForm from "@/app/components/common/SigninForm";
import SignupForm from "@/app/components/common/SignupForm";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/public/images/study-spot-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Cafe() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [view, setView] = useState<"signin" | "signup">(
    (searchParams?.get("view") as "signin" | "signup") || "signin"
  );

  const createQueryString = useCallback(
    (name: string, value: string) => {
      // const params = new URLSearchParams(searchParams);
      const params = searchParams
        ? new URLSearchParams(searchParams)
        : undefined;

      params?.set(name, value);

      return params?.toString();
    },
    [searchParams]
  );

  /**
   * The `toggleView` function updates the view state and navigates to a new URL with the updated view
   * query parameter.
   * @param {"signin" | "signup"} query - The `query` parameter is a string that can have two possible
   * values: "signin" or "signup".
   */
  const toggleView = (query: "signin" | "signup") => {
    // Toggle the view state
    const newView = query;
    setView(newView);

    router.push(pathname + "?" + createQueryString("view", newView));
  };

  useEffect(() => {
    // Get the view from the URL
    const view = searchParams?.get("view");

    // Set the view state
    setView(view === "signin" ? "signup" : "signin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center text-center relative h-screen">
      <div className="flex flex-col gap-20 justify-center">
        <div>
          <Link href="/">
            <Image src={Logo} alt="Logo" />
          </Link>
        </div>
        {/* button for signin */}
        <div className="flex flex-col gap-5">
          <button
            onClick={() => toggleView("signup")}
            className="w-56 mx-auto btn border-2 border-white btn-primary hover:bg-transparent hover:border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500 text-white px-10 rounded-2xl"
          >
            Get Started
          </button>

          {/* button for signup */}
          <button
            onClick={() => toggleView("signin")}
            className="w-56 mx-auto btn border-2 border-white bg-transparent hover:btn-primary hover:!bg-primary hover:!border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500  text-white px-10 rounded-2xl"
          >
            Sign In
          </button>

          <SigninForm toggleView={toggleView} />
          <SignupForm toggleView={toggleView} />
        </div>
      </div>
    </div>
  );
}
