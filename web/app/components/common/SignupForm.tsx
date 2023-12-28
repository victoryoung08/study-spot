import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { DialogClose } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import * as UserSchema from "../../validation/schemas/UserSchemas";

type SignupFormTypes = {
  buttonText: string;
};

export type SignupFormType = z.infer<typeof UserSchema.SignupFormSchema>;

const resolver = zodResolver(UserSchema.SignupFormSchema);

const SignupForm = ({ buttonText }: SignupFormTypes) => {
  const [open, setOpen] = useState(false);
  type FormData = SignupFormType;
  const { handleSubmit, register, formState, reset } = useForm<FormData>({
    resolver,
  });

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
      console.log(resp); // Log the response for debugging

      // if there's an error, display the error message
      if (resp.error) {
        toast.error(`${resp.error.message}`);
        reset();
        setLoading(false);
        return;
      }

      // if there's no error, display success message
      toast.success("Account created successfully");
    } catch (error) {
      // Handle any unexpected errors and display an error message
      console.error(error);
      setLoading(false);
      toast.error("An unexpected error occurred");
    }
  };
  return (
    <ModalWrapper
      ButtonTrigger={
        <div className="flex justify-center items-center">
          <button className="text-white hover:text-primary transition-all delay-50 ease-in-out ">
            <span className="">{buttonText}</span>
          </button>
        </div>
      }
    >
      <div>
        <div className="border-b pb-5 mb-6 border-black">
          <h2 className="text-center text-black text-xl font-bold">Sign Up</h2>
        </div>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Label htmlFor="username" className="font-medium">
              Username
            </Label>
            <Input
              {...register("username")}
              id="username"
              type="text"
              placeholder="Enter your username"
              className="p-5 bg-neutral-white/20"
            />
            {/* Check if forms has error */}
            {errors.username && (
              <span className="text-red-500 text-sm">
                Please check your username.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="email" className="font-medium">
              Email address
            </Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="p-5 bg-neutral-white/20"
            />
            {/* Check if forms has error */}
            {errors.email && (
              <span className="text-red-500 text-sm">
                Please check your email.
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password" className="font-medium">
              Password
            </Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="p-5 bg-neutral-white/20"
            />
            {/* Check if forms has error */}
            {errors.password && (
              <span className="text-red-500 text-sm">
                Password must be at least 8 characters
              </span>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/5 mb-5 mx-auto btn btn-primary text-white "
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>

          <DialogClose asChild>
            {/* <SignupForm
              buttonText="Sign Up"
              displayButton={false}
              displaySignUp={true}
            /> */}
          </DialogClose>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default SignupForm;
