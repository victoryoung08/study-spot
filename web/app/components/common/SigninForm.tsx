import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import ModalWrapper from "./ModalWrapper";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const resolver = zodResolver(schema);

type SigninFormProps = {
  buttonText: string;
};

const SigninForm = ({ buttonText }: SigninFormProps) => {
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

  const [open, setOpen] = useState(false);

  // check if the params has verified=true
  // const isAuthorize = useSearchParams()?.get("authorized") === "false";
  // useEffect(() => {
  //   if (isAuthorize) {
  //     toast.error("Please login");
  //     setOpen(true);
  //   }
  // }, [isAuthorize]);

  return (
    <ModalWrapper
      open={open}
      setOpen={setOpen}
      ButtonTrigger={
        <div className="">
          <button className="text-white">
            <span>{buttonText}</span>
          </button>
        </div>
      }
    >
      <div>
        <div className="border-b pb-5 border-neutral-gray-dark">
          <h2 className="text-center text-black text-xl font-bold">Sign In</h2>
        </div>

        <form
          className="py-5 flex flex-col gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
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
          {/* <div className="flex justify-end my-3">
            <ForgotPassword buttonText="Forgot Password?" />
          </div> */}
          <div className="flex flex-col gap-3">
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
              className="w-2/5 btn btn-primary mx-auto  text-white hover:bg-secondary-red"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          {/* <DialogClose asChild>
            <SignupForm buttonText="Sign Up" />
          </DialogClose> */}
        </form>
      </div>
    </ModalWrapper>
  );
};

export default SigninForm;
