"use client";

import React, { useState } from "react";
import { Input } from "../../../ui/input";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import lockIcon from "@/public/images/lock.svg";
import personIcon from "@/public/images/person.svg";
import Image from "next/image";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const resolver = zodResolver(schema);

const SigninForm = () => {
  const router = useRouter();
  type FormData = z.infer<typeof schema>;
  const { handleSubmit, register, formState, reset } = useForm<FormData>({
    resolver,
  });

  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: { email: string; password: string }) => {
    // Step 1: Set loading state to true while processing the request
    setLoading(true);

    // Step 2: Extract email and password from the form data
    const { email, password } = data;
    try {
      // Step 3: Attempt to sign in using the provided credentials
      const signInResponse = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (signInResponse?.status === 401) {
        toast.error("Invalid email or password");
        setLoading(false);
        return;
      }

      // Step 4: Check if the sign-in was successful
      if (signInResponse?.ok) {
        // Step 5: If successful, set loading state to false and redirect to the dashboard
        // Set the user details in the global state
        toast.success("Login Successfully!");
        setLoading(false);
        reset();
        router.push("/dashboard");
      } else {
        // Step 6: If there was an error during sign-in, set loading state to false
        // and display an error message using toast
        setLoading(false);
        toast.error(signInResponse?.error || "An Error Occurred");
      }
    } catch (error) {
      // Step 7: Handle any unexpected errors and display an error message
      console.error(error);
      setLoading(false);
      toast.error("An unexpected error occurred");
    }
  };

  const [displayPassword, setDisplayPassword] = useState(false);
  const showPassword = () => {
    setDisplayPassword((current) => !current);
  };

  return (
    <div className="mx-5 xs:mx-0">
      <div
        onClick={() => router.back()}
        className="absolute top-5 left-5 cursor-pointer"
      >
        <ChevronLeftIcon className="w-10 h-10 text-white" />
      </div>
      <div>
        <h2 className=" text-white text-xl font-bold">Log In</h2>
      </div>

      <form
        className="pt-4 pb-5 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 relative">
          <div className="absolute left-3 top-3 ">
            <Image src={personIcon} alt="Lock Icon" />
          </div>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Email Address"
            className="px-10 py-5 bg-grey border-2 border-white rounded-xl text-white focus-visible:ring-offset-0 focus-visible:ring-transparent"
          />
          {/* Check if forms has error */}
          {errors.email && (
            <span className="text-red-500 text-sm">
              Please check your email.
            </span>
          )}
        </div>
        {/* <div className="flex justify-end my-3">
            <ForgotPassword buttonText="Forgot Password?" />
          </div> */}
        <div className="flex flex-col gap-3 relative">
          <div className="absolute left-3 top-3 ">
            <Image src={lockIcon} alt="Lock Icon" />
          </div>
          <Input
            {...register("password")}
            id="password"
            type={displayPassword ? "text" : "password"}
            placeholder="Password"
            className="px-10 py-5 bg-grey border-2 border-white rounded-xl text-white focus-visible:ring-offset-0 focus-visible:ring-transparent"
          />
          {/* Check if forms has error */}
          {errors.password && (
            <span className="text-red-500 text-sm">
              Password must be at least 8 characters
            </span>
          )}
          <Button
            type="button"
            className="bg-transparent hover:bg-transparent absolute top-0 right-0"
            onClick={showPassword}
          >
            {displayPassword ? (
              <EyeIcon className="w-5 h-5 text-white" />
            ) : (
              <EyeSlashIcon className="w-5 h-5 text-white" />
            )}
          </Button>
        </div>
        <div>
          <p className="text-gray-400 text-sm text-right">Forgot password?</p>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-full sm:w-96 border-2 border-white mx-auto h-12 font-bold text-base text-white hover:border-white bg-primary rounded-xl hover:bg-primary"
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </div>

        <div className="text-center text-sm">
          <Link href="signup">
            <p className="cursor-default text-gray-500">
              Don&apos;t have an account?
              <span className="text-secondary cursor-pointer font-bold">
                {" "}
                Sign Up
              </span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
