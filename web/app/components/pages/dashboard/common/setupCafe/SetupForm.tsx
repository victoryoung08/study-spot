"use client";

import useCafeProfileFormSubmit from "../../profile/form/useCafeProfileFormSubmit";
import useCafeProfileForm from "../../profile/form/useCafeProfileForm";
import SetupCafeWizard from "./setUpCafeWizard";
import { Form } from "@/app/components/ui/form";
import { Progress } from "@/app/components/ui/progresscopy";
import { Container } from "@/app/components/common/Container";
import { Button } from "@/app/components/ui/button";

export default function SetupForm() {
  const { form, step, setStep, errors } = useCafeProfileForm();
  const { onSubmit, ...rest } = useCafeProfileFormSubmit();

  function handlePrevStep() {
    setStep(3);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <div className="lg:w-2/4 mb-16 mx-auto text-left">
              <h2 className="text-5xl font-bold text-center">
                Welcome! We’re <span className="text-primary">Study Spot</span>.
                <br />
                Let’s grab a few details off you
              </h2>
              <div className="mt-5">
                <Progress
                  value={step * 25}
                  max={4}
                  className="w-3/4 lg:w-full h-2 mx-auto"
                />
              </div>
            </div>
            <div className=" mx-auto">
              <SetupCafeWizard
                step={step}
                setStep={setStep}
                {...form}
                {...rest}
              />
              {step === 4 && (
                <div className=" mx-5 lg:w-3/4 lg:mx-auto flex justify-between mt-5">
                  <Button
                    onClick={handlePrevStep}
                    className="mx-10 lg:mx-20 w-1/5 my-5 bg-transparent text-white hover:bg-transparent border border-white"
                  >
                    Previous
                  </Button>
                  <Button
                    type="submit"
                    className="mx-10 lg:mx-20 w-1/5 my-5 bg-primary text-white hover:bg-primary border border-white"
                  >
                    {rest.loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              )}
              {/* <Button
                type="submit"
                className="mx-10 lg:mx-20 w-1/5 my-5 bg-primary text-white hover:bg-primary border border-white"
              >
                {rest.loading ? "Submitting..." : "Submit"}
              </Button> */}
            </div>
          </div>
        </form>
      </Form>
    </>
  );
}
