"use client";

import React, { useState } from "react";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import * as UserSchema from "@/src/validation/schemas/UserSchemas";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import lockIcon from "@/public/images/lock.svg";
import personIcon from "@/public/images/person.svg";
import emailIcon from "@/public/images/email.svg";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";

export type SignupFormType = z.infer<typeof UserSchema.SignupFormSchema>;

const resolver = zodResolver(UserSchema.SignupFormSchema);

const SignupForm = () => {
  type FormData = SignupFormType;
  const { handleSubmit, register, formState, reset, watch } = useForm<FormData>(
    {
      resolver,
    }
  );

  const { errors } = formState;
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignupFormType) => {
    // Set loading state to true while processing the request
    setLoading(true);

    // register account
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      );
      const resp = await response.json();

      // if there's an error, display the error message
      if (resp.error) {
        toast.error(`${resp.error.message}`);
        reset();
        setLoading(false);
        return;
      }

      // if there's no error, display success message
      toast.success("Account created successfully");

      // reload page
      setTimeout(() => {
        router.push("signin");
      }, 500);
    } catch (error) {
      // Handle any unexpected errors and display an error message
      console.error(error);
      setLoading(false);
      toast.error("An unexpected error occurred");
    }
  };
  const router = useRouter();

  /* toggle the visibility of the password input field. */
  const [displayPassword, setDisplayPassword] = useState(false);
  const showPassword = () => {
    setDisplayPassword((current) => !current);
  };

  const [isTermsChecked, setIsTermsChecked] = useState(false);

  return (
    <div>
      <div
        onClick={() => router.back()}
        className="absolute top-5 left-5 cursor-pointer"
      >
        <ChevronLeftIcon className="w-10 h-10 text-white" />
      </div>
      <div>
        <h2 className=" text-white text-xl font-bold">Sign Up</h2>
      </div>

      <form
        className="pt-4 pb-5 flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-3 relative">
          <div className="absolute left-3 top-3 ">
            <Image src={personIcon} alt="Person Icon" />
          </div>
          <Input
            {...register("username")}
            id="username"
            type="text"
            placeholder="Username"
            className="px-10 py-5 bg-grey border-2 border-white rounded-xl text-white focus-visible:ring-offset-0 focus-visible:ring-transparent"
          />
          {/* Check if forms has error */}
          {errors.username && (
            <span className="text-red-500 text-sm">
              Please check your username.
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 relative">
          <div className="absolute left-3 top-3 ">
            <Image src={emailIcon} alt="Email Icon" />
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
        <div className="flex flex-col gap-3 text-gray-400">
          <div className="flex items-center gap-2">
            <Checkbox
              id="terms"
              // {...register("terms")}
              checked={isTermsChecked}
              onClick={() => setIsTermsChecked(!isTermsChecked)}
            />
            <Label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </Label>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            disabled={!isTermsChecked}
            type="submit"
            className="w-full sm:w-96 border-2 border-white mx-auto h-12 font-bold text-base text-white hover:border-white bg-primary rounded-xl hover:bg-primary"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </div>

        <div className="text-center text-sm">
          <Link href="signin">
            <p className="cursor-default text-gray-500">
              Have an account?
              <span className="text-secondary cursor-pointer font-bold">
                {" "}
                Log in
              </span>
            </p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;