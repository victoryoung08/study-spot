"use client";
import { Container } from "../../common/Container";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function ApplyNow() {
  const [step, setStep] = useState(1);
  const handleNext = async () => {
    setStep(step + 1);
  };
  const handlePrev = async () => {
    setStep(step - 1);
  };

  const forms = [
    <div key="1" className="mt-5 form-control w-full">
      <label className="label">
        <span className="label-text text-white font-semibold">
          Enter your name
        </span>
      </label>
      <input
        type="text"
        placeholder="eg. Sarah Smith"
        className="input input-bordered w-full border-white focus:border-primary bg-[#2e2e2e] h-14"
      />
    </div>,
    <div key="2" className="space-y-10">
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">What&apos;s your best email?</h3>
        <input
          type="text"
          placeholder="eg. myemail@email.com"
          className="input input-bordered w-full border-white focus:border-primary bg-[#2e2e2e] h-14"
        />
      </div>
      <div className="mt-5 form-control w-full">
        <h3 className="text-xl mb-5">What&apos;s your best contact number?</h3>
        <input
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

        <textarea
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
        <div className="w-16">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio radio-primary checked:bg-primary"
            />
            <span className="label-text">Yes</span>
          </label>
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
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
        <div className="w-1/4 text-left space-y-2">
          <label className="flex items-center cursor-pointer gap-5">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Casual</span>
          </label>
          <label className="flex items-center cursor-pointer gap-5">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Part Time</span>
          </label>
          <label className="flex items-center cursor-pointer gap-5">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Freelance/Contract</span>
          </label>
        </div>
      </div>
    </div>,
  ];
  return (
    <Container>
      <div>
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
                  onClick={() => {
                    handleNext();
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
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
