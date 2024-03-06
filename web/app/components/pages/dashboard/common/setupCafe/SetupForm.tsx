"use client";

import { useState } from "react";
import SignupFormWizard from "./setUpCafeWizard";
import useCafeProfileFormSubmit from "../../profile/form/useCafeProfileFormSubmit";
import useCafeProfileForm from "../../profile/form/useCafeProfileForm";
import SetupCafeWizard from "./setUpCafeWizard";
import { Form } from "@/app/components/ui/form";
import { Progress } from "@/app/components/ui/progresscopy";
import { Container } from "@/app/components/common/Container";

export default function SetupForm() {
  const { form, step, setStep } = useCafeProfileForm();
  const { onSubmit, ...rest } = useCafeProfileFormSubmit();
  return (
    <Container>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <div className="w-2/4 mb-16 mx-auto text-left">
              <h2 className="text-5xl font-bold text-center">
                Welcome! We’re <span className="text-primary">Study Spot</span>.
                <br />
                Let’s grab a few details off you
              </h2>
              <div className="mt-5">
                <Progress
                  value={step * 25}
                  max={4}
                  className="w-full h-2 mx-auto"
                />
              </div>
            </div>
            <div className="lg:w-2/4 mx-auto">
              <SetupCafeWizard
                step={step}
                setStep={setStep}
                {...form}
                {...rest}
              />
            </div>
          </div>
        </form>
      </Form>
    </Container>
  );
}
