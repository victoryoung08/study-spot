"use client";
import { Container } from "@/app/components/common/Container";
import SigninForm from "@/app/components/common/SigninForm";
import SignupForm from "@/app/components/common/SignupForm";
import darkbg from "@/public/images/dark-bg.png";
import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

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
    <Container backgroundImage={darkbg.src}>
      <div className="bg-gradient-to-t  from-[#181818] absolute top-0 right-0 bottom-0 left-0 z-10"></div>
      <div className="lg:py-20 z-50 text-center relative">
        <h2 className="text-4xl font-bold leading-snug text-white md:text-5xl lg:text-6xl lg:w-3/4 mx-auto">
          Fill up your café with more foot traffic
        </h2>
        <p className="my-5 text-base text-white lg:text-xl">
          Study Spot connects you with students, remote workers and digital
          nomads. <br /> Meaning more coffee and food orders (and a greater word
          of mouth presence!)
        </p>
        <div className="flex gap-8 justify-center">
          {/* button for signin */}
          <button
            onClick={() => toggleView("signin")}
            className="btn btn-primary hover:bg-transparent hover:border-white transition-all delay-50 hover:scale-105 ease-in-out duration-500 text-white px-10 rounded-2xl"
          >
            Sign in
          </button>

          {/* button for signup */}
          <button
            onClick={() => toggleView("signup")}
            className="btn bg-transparent hover:btn-primary hover:!bg-primary transition-all delay-50 hover:scale-105 ease-in-out duration-500 text-white px-10 rounded-2xl text-white px-10 rounded-2xl"
          >
            Sign Up
          </button>

          <SigninForm toggleView={toggleView} />
          <SignupForm toggleView={toggleView} />
        </div>
      </div>
    </Container>
  );
}
