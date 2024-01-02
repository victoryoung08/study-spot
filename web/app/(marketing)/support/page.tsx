"use client";
import { Container } from "../../components/common/Container";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Lottie from "lottie-react";
import { PaperPlane } from "@/animations/paperplane";

type Inputs = {
  name: string;
  cafe_name: string;
  email: string;
  inquiry: string;
};

const schema = z.object({
  name: z.string().min(1, { message: "Please input first name" }),
  cafe_name: z.string().min(1, { message: "Please input cafe name" }),
  email: z.string().min(1, { message: "Please input email address" }),
  inquiry: z.string().min(1, { message: "Please input phone number" }),
});

const resolver = zodResolver(schema);

export default function Support() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setError(false);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/supports`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      }
    );

    if (response.ok) {
      setLoading(false);
      setFormSubmitted(true);
      reset();
    } else {
      setLoading(false);
      setFormSubmitted(false);
      setError(true);
    }
  };

  return (
    <Container>
      <div>
        {formSubmitted && !error ? (
          <div className="flex justify-center items-center flex-col">
            <Lottie
              style={{ width: 300, textAlign: "center" }}
              animationData={PaperPlane}
              loop
            />
            <p className="text-sm">
              Thank you for reaching out, your message is on its way.
            </p>
          </div>
        ) : (
          <form
            action=""
            className="text-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-4x; lg:text-5xl font-bold">
              Study Spot Support
            </h2>
            <p className="text-lg lg:text-xl mt-5 mb-10">
              We&apos;re here to help. Let us know if you have any feedback or
              questions
            </p>

            <div className="space-y-3 w-2/4 mx-auto">
              <div>
                {errors.name && (
                  <div className="flex justify-start ml-4 mb-1">
                    <span className="text-xs text-red-400">
                      {errors.name.message}
                    </span>
                  </div>
                )}
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Your First Name"
                  className="input input-bordered w-full rounded-xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
              </div>
              <div>
                {errors.email && (
                  <div className="flex justify-start ml-4 mb-1">
                    <span className="text-xs text-red-400">
                      {errors.email.message}
                    </span>
                  </div>
                )}
                <input
                  type="text"
                  {...register("email")}
                  placeholder="Your Email"
                  className="input input-bordered w-full rounded-xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
              </div>
              <div>
                {errors.cafe_name && (
                  <div className="flex justify-start ml-4 mb-1">
                    <span className="text-xs text-red-400">
                      {errors.cafe_name.message}
                    </span>
                  </div>
                )}
                <input
                  type="text"
                  {...register("cafe_name")}
                  placeholder="Your Cafe Name"
                  className="input input-bordered w-full rounded-xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
              </div>
              <div>
                {errors.inquiry && (
                  <div className="flex justify-start ml-4 mb-1">
                    <span className="text-xs text-red-400">
                      {errors.inquiry.message}
                    </span>
                  </div>
                )}
                <textarea
                  {...register("inquiry")}
                  className="textarea textarea-bordered w-full rounded-xl border-white focus:border-primary bg-[#2e2e2e]"
                  rows={5}
                  placeholder="Your inquiry"
                ></textarea>
              </div>
              <div>
                {error && (
                  <p className="text-sm text-warning">
                    Error Submitting Form, Please try again
                  </p>
                )}
                <button
                  type="submit"
                  className="w-32 btn btn-primary capitalize font-normal border-white hover:border-white"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </Container>
  );
}
