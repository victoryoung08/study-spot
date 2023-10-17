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

export default function BookNow({
  title,
  description,
  cta_text,
  cta_link,
  book_in_a_call_link,
}: bookNowType) {
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
          {/* <h3 className="font-bold text-xl lg:text-2xl">
            As a thank you for being the first 25 Study Spots, you&apos;ll
            receive:
          </h3>
          <div className="mt-3 space-y-3">
            {benefits.map((item) => {
              return (
                <p
                  key={item.id}
                  className="border-b border-gray-500 w-3/4 md:w-4/6 mx-auto"
                >
                  {item.title}
                </p>
              );
            })}
          </div>
          <h4 className="lg:w-3/4 mx-auto mt-10 font-semibold text-lg lg:text-xl">
            Listing Fees will increase once we&apos;ve reached 25 Study Spots.
            Early Study Spots will retain foundational rates.
          </h4> */}
          <div className="mt-20">
            <form action="" className="w-3/4 lg:w-2/5 mx-auto">
              <input
                type="text"
                placeholder="Your First Name"
                className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <input
                type="text"
                placeholder="Your Cafe Name"
                className="input input-bordered w-full my-5 rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <input
                type="text"
                placeholder="Your best Name"
                className="input input-bordered w-full rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <input
                type="text"
                placeholder="Your best contact number"
                className="input input-bordered w-full mt-5 rounded-2xl border-white text-sm bg-[#3a3939] focus:border-primary"
              />
              <Link
                href={cta_link || "/"}
                className="mt-10 btn btn-primary capitalize font-normal border-white hover:border-white"
              >
                {cta_text || ""}
              </Link>
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
