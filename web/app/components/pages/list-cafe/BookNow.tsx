"use client";
import Link from "next/link";
import { Container } from "../../common/Container";
import Markdown from "markdown-to-jsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Lottie from "lottie-react";
import { PaperPlane } from "@/animations/paperplane";

type bookNowType = {
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
  book_in_a_call_link: string;
};

type Inputs = {
  first_name: string;
  cafe_name: string;
  email: string;
  phone: string;
};

const schema = z.object({
  first_name: z.string().min(1, { message: "Please input first name" }),
  cafe_name: z.string().min(1, { message: "Please input cafe name" }),
  email: z.string().min(1, { message: "Please input email address" }),
  phone: z.string().min(1, { message: "Please input phone number" }),
});

const resolver = zodResolver(schema);

export default function BookNow({
  title,
  description,
  cta_text,
  cta_link,
  book_in_a_call_link,
}: bookNowType) {
  type FormData = z.infer<typeof schema>;
  const { handleSubmit, register, formState, reset } = useForm<FormData>({
    resolver,
  });

  const onSubmit = async (data: Inputs) => {
    console.log(data);
  };

  const { errors } = formState;

  return (
    <Container>
      <div className="text-center lg:py-20">
        <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
          {title || ""}
        </h2>
        {description && (
          <div className="mt-10">
            <Markdown
              options={{
                overrides: {
                  p: {
                    component: "p",
                    props: {
                      className: "font-bold",
                    },
                  },
                  li: {
                    component: "div",
                    props: {
                      className:
                        "underline decoration-white/50 decoration-1 my-4 underline-offset-8",
                    },
                  },
                },
              }}
            >
              {description}
            </Markdown>
          </div>
        )}

        <div className="mt-10">
          <div className="mt-20">
            <form
              action=""
              className="w-3/4 lg:w-2/5 mx-auto"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <input
                  {...register("first_name")}
                  type="text"
                  placeholder="Your First Name"
                  className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
                {errors.first_name && (
                  <span className="text-red-500 text-sm">
                    Please check your name.
                  </span>
                )}
              </div>
              <div className="my-5">
                <input
                  {...register("cafe_name")}
                  type="text"
                  placeholder="Your Cafe Name"
                  className="input input-bordered w-full  rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
                {errors.cafe_name && (
                  <span className="text-red-500 text-sm">
                    Please check your cafe name.
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  type="text"
                  placeholder="Your best Email"
                  className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    Please check your email
                  </span>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  type="number"
                  placeholder="Your best contact number"
                  className="input input-bordered w-full mt-5 rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    Please check your phone number
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="mt-10 btn btn-primary capitalize font-normal border-white hover:border-white"
              >
                {cta_text || ""}
              </button>
              <div className="mt-5">
                <Link
                  target="_blank"
                  href={book_in_a_call_link || "/"}
                  className="text-base underline"
                >
                  Book in a call first
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
