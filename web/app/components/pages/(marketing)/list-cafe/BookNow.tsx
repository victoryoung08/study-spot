"use client";
import Link from "next/link";
import { Container } from "../../../common/Container";
import Markdown from "markdown-to-jsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import { PaperPlane } from "@/animations/paperplane";
import { pushDataLayer } from "@/src/lib/gtm";
import { usePathname } from "next/navigation";

type bookNowType = {
  title: string;
  description: string;
  book_in_a_call_link: string;
};

type Inputs = {
  first_name: string;
  cafe_name: string;
  email: string;
  phone: string;
  path: string;
};

const schema = z.object({
  first_name: z.string().min(1, { message: "Please input first name" }),
  cafe_name: z.string().min(1, { message: "Please input cafe name" }),
  email: z.string().min(1, { message: "Please input email address" }),
  phone: z.string().min(1, { message: "Please input phone number" }),
  path: z.string(),
});

const resolver = zodResolver(schema);

export default function BookNow({
  title,
  description,
  book_in_a_call_link,
}: bookNowType) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const pathname = usePathname();

  const [error, setError] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setError(false);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/leads`,
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
      pushDataLayer({
        name: "Book Now",
        path: pathname,
        data,
      });
      setLoading(false);
      setFormSubmitted(true);
      reset();
    } else {
      setLoading(false);
      setFormSubmitted(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (formSubmitted && !error) {
      setTimeout(() => {
        window.location.href = book_in_a_call_link || "/";
      }, 500);
    }
  });

  return (
    <Container>
      <div className="text-center lg:py-20" id="book-now">
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
          <div id="formContainer" className="mt-20">
            <div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-3/4 lg:w-2/5 mx-auto flex flex-col gap-4"
              >
                <div>
                  {errors.first_name && (
                    <div className="flex justify-start ml-4 mb-1">
                      <span className="text-xs text-red-400">
                        {errors.first_name.message}
                      </span>
                    </div>
                  )}
                  <input
                    type="text"
                    {...register("first_name")}
                    placeholder="Your First Name"
                    className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
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
                    className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
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
                    placeholder="Your best email"
                    className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
                  />
                </div>

                <div>
                  {errors.phone && (
                    <div className="flex justify-start ml-4 mb-1">
                      <span className="text-xs text-red-400">
                        {errors.phone.message}
                      </span>
                    </div>
                  )}
                  <input
                    type="text"
                    {...register("phone")}
                    placeholder="Your best contact number"
                    className="input input-bordered w-full  rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
                  />
                  <input
                    type="text"
                    {...register("path")}
                    value={pathname || ""}
                    hidden
                  />
                </div>
                {error && (
                  <p className="text-sm text-warning">
                    Error Submitting Form, Please try again
                  </p>
                )}
                <button
                  type="submit"
                  className="mt-10 btn btn-primary capitalize font-normal border-white hover:border-white"
                >
                  {loading ? "Submitting..." : "Get Started"}
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
      </div>
    </Container>
  );
}
