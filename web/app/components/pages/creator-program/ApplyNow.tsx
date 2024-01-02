"use client";
import { Container } from "../../common/Container";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Lottie from "lottie-react";
import { PaperPlane } from "@/animations/paperplane";
import { pushDataLayer } from "@/src/lib/gtm";

type Inputs = {
  name: string;
  email: string;
  phone: string;
  what_makes_great_tiktok: string;
  portfolioVideos?: string;
  hasVehicle: string;
  isCasual: boolean;
  isParttime: boolean;
  isFreelance: boolean;
};

const schema = z
  .object({
    name: z.string().min(1, { message: "Please input name" }),
    email: z.string().min(1, { message: "Please input email address" }),
    phone: z.string().min(1, { message: "Please input phone number" }),
    what_makes_great_tiktok: z
      .string()
      .min(1, { message: "Please input answer" }),
    portfolioVideos: z.string(),
    hasVehicle: z.string(),
    isCasual: z.boolean(),
    isParttime: z.boolean(),
    isFreelance: z.boolean(),
  })
  .superRefine((values, ctx) => {
    if (!values.isCasual && !values.isParttime && !values.isFreelance) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select any.",
        path: ["isCasual"],
      });
      ctx.addIssue({
        message: "Please select any.",
        code: z.ZodIssueCode.custom,
        path: ["isParttime"],
      });
      ctx.addIssue({
        message: "Please select any.",
        code: z.ZodIssueCode.custom,
        path: ["isFreelance"],
      });
    }
  });

export default function ApplyNow() {
  const [step, setStep] = useState(1);

  // const handleNext = async () => {
  //   setStep(step + 1);
  // };

  const handlePrev = async () => {
    setStep(step - 1);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    setError(false);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_ENDPOINT}/creators`,
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
        name: "Become Creator Form Submit",
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

  const handleNext = async (fields: (keyof Inputs)[]) => {
    const name = getValues("name");

    await trigger(fields);

    // check if fields are inside the error array
    if (fields.some((field) => errors[field])) {
      return;
    } else {
      if (name === "") {
        return;
      }
      setStep(step + 1);
    }
  };

  const forms = [
    <div key="1" className="mt-5 form-control w-full">
      <label className="label">
        <span className="label-text text-white font-semibold">
          Enter your name
        </span>
      </label>
      {errors.name && (
        <div className="flex justify-start ml-1  mb-1">
          <span className="text-xs text-red-400">{errors.name.message}</span>
        </div>
      )}
      <input
        {...register("name")}
        required
        type="text"
        placeholder="eg. Sarah Smith"
        className="input input-bordered w-full border-white focus:border-primary bg-[#2e2e2e] h-14"
      />
    </div>,
    <div key="2" className="space-y-10">
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">What&apos;s your best email?</h3>
        {errors.email && (
          <div className="flex justify-start ml-1  mb-1">
            <span className="text-xs text-red-400">{errors.email.message}</span>
          </div>
        )}
        <input
          {...register("email")}
          type="text"
          placeholder="eg. myemail@email.com"
          className="input input-bordered w-full border-white focus:border-primary bg-[#2e2e2e] h-14"
        />
      </div>
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">What&apos;s your best contact number?</h3>
        {errors.phone && (
          <div className="flex justify-start ml-1  mb-1">
            <span className="text-xs text-red-400">{errors.phone.message}</span>
          </div>
        )}
        <input
          {...register("phone")}
          type="text"
          placeholder="eg. 0412345678"
          className="input input-bordered w-full border-white focus:border-primary bg-[#2e2e2e] h-14"
        />
      </div>
    </div>,
    <div key="3" className="space-y-10">
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">
          What makes a great Tiktok or Instagram Reel?
        </h3>
        {errors.what_makes_great_tiktok && (
          <div className="flex justify-start ml-1  mb-1">
            <span className="text-xs text-red-400">
              {errors.what_makes_great_tiktok.message}
            </span>
          </div>
        )}
        <textarea
          {...register("what_makes_great_tiktok")}
          className="textarea textarea-bordered w-full border-white focus:border-primary bg-[#2e2e2e]"
          rows={5}
          placeholder="(no wrong answers)"
        ></textarea>
      </div>
    </div>,
    <div key="4" className="space-y-10">
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">
          Do you have any videos of your portfolio you would like to share?{" "}
          <br /> If not all good!
        </h3>

        <textarea
          {...register("portfolioVideos", { required: false })}
          className="textarea textarea-bordered w-full border-white focus:border-primary bg-[#2e2e2e]"
          rows={5}
          placeholder="(Links here)"
        ></textarea>
      </div>
    </div>,
    <div key="5" className="space-y-10">
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">
          This will require travelling to cafes across Sydney. <br /> Do you
          have your own vehicle?
        </h3>
        {errors.hasVehicle && (
          <div className="flex justify-start ml-1  mb-1">
            <span className="text-xs text-red-400">Please Select</span>
          </div>
        )}
        <div className="w-16">
          <label className="label cursor-pointer">
            <input
              {...register("hasVehicle")}
              type="radio"
              value="Yes"
              className="radio radio-primary checked:bg-primary"
            />
            <span className="label-text">Yes</span>
          </label>
          <label className="label cursor-pointer">
            <input
              {...register("hasVehicle")}
              type="radio"
              value="No"
              className="radio radio-primary checked:bg-primary"
            />
            <span className="label-text">No</span>
          </label>
        </div>
      </div>
    </div>,
    <div key="6" className="space-y-10">
      <div className="mt-5 form-control">
        <h3 className="text-xl mb-5">
          What position best suits you? Select any you&apos;re open to
        </h3>
        {errors.isCasual && errors.isParttime && errors.isFreelance && (
          <div className="flex justify-start ml-1  mb-1">
            <span className="text-xs text-red-400">Please select.</span>
          </div>
        )}
        <div className="w-1/4 text-left space-y-2">
          <label className="flex items-center cursor-pointer gap-5">
            <input
              {...register("isCasual")}
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text">Casual</span>
          </label>

          <label className="flex items-center cursor-pointer gap-5">
            <input
              {...register("isParttime")}
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text">Part Time</span>
          </label>

          <label className="flex items-center cursor-pointer gap-5">
            <input
              {...register("isFreelance")}
              type="checkbox"
              className="checkbox"
            />
            <span className="label-text">Freelance/Contract</span>
          </label>
        </div>
      </div>
    </div>,
  ];
  return (
    <Container>
      <div id="apply-now">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold">Apply Now</h2>
          <p className="text-xl mt-5">
            Help us get to know you and tell us about your experience!
          </p>
        </div>

        <div className="mt-10 md:w-3/4 mx-auto rounded-3xl p-10 md:p-20 bg-[#1f1f1f]">
          {step === 1 && (
            <h3 className="text-3xl font-semibold">
              Let&apos;s start with your name
            </h3>
          )}
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
              <div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                  {forms[step - 1]}
                  <div className="mt-10 flex items-center justify-center h-16 gap-5">
                    {step >= 2 && (
                      <div
                        className="rounded-md w-1/4 p-2 h-full bg-[#2e2e2e] cursor-pointer flex justify-center items-center"
                        onClick={handlePrev}
                      >
                        <ArrowLeftIcon className="w-5 h-5 " />
                      </div>
                    )}
                    {step != 6 && (
                      <button
                        className={`rounded-md h-full btn bg-primary text-white capitalize font-normal btn-primary ${
                          step === 1 ? "w-full" : "w-4/5 "
                        }`}
                        type="button"
                        onClick={() => {
                          if (step === 1) {
                            handleNext(["name"]);
                          } else if (step === 2) {
                            handleNext(["email", "phone"]);
                          } else if (step === 3) {
                            handleNext(["what_makes_great_tiktok"]);
                          } else if (step === 4) {
                            handleNext(["portfolioVideos"]);
                          } else if (step === 5) {
                            handleNext(["hasVehicle"]);
                          } else if (step === 6) {
                            handleNext([
                              "isCasual",
                              "isParttime",
                              "isFreelance",
                            ]);
                          }
                          //
                        }}
                      >
                        {step === 1 ? "Get Started" : "Next"}
                      </button>
                    )}
                    {step === 6 && (
                      <button
                        type="submit"
                        className="rounded-md h-full btn bg-primary text-white capitalize font-normal w-4/5 btn-primary"
                      >
                        {loading ? "Submitting..." : "Submit"}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
