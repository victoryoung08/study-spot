"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./BasicInformation";
import CafeDetails from "./CafeDetails";
import Links from "./Links";
import Promotion from "./Promotion";
import { Button } from "@/app/components/ui/button";
import useCafeProfileForm from "./form/useCafeProfileForm";
import useCafeProfileFormSubmit from "./form/useCafeProfileFormSubmit";
import { Form } from "@/app/components/ui/form";
import { CafeFormTypes } from "@/types/cafe";
import generateDefaultValues from "@/src/hooks/generateDefaultValues";
import { useCafeData } from "@/app/store/cafeData";

export default function Profile({ cafeData }: CafeFormTypes) {
  const [setupCafe, SetSetupCafe] = useState(false);
  const { form, watchAllFields, errors } = useCafeProfileForm();
  const setCafe = useCafeData((state) => state.setCafe);

  useEffect(() => {
    if (cafeData === null || cafeData === undefined) {
      SetSetupCafe(true);
    } else {
      // get the defaultValues when there's data coming from api
      const defaultValues = generateDefaultValues(cafeData);
      form.reset(defaultValues);
      setCafe(cafeData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cafeData]);
  const { onSubmit, ...rest } = useCafeProfileFormSubmit();

  return (
    <div className="text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <BasicInformation setUpCafe={setupCafe} {...form} {...rest} />
          <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
            <CafeDetails {...form} {...rest} />
            <div className="space-y-10 md:w-2/4">
              <Links {...form} {...rest} />
              <Promotion setUpCafe={setupCafe} {...form} {...rest} />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="border-2 bg-primary hover:bg-primary rounded-2xl h-8 xs:h-auto w-2/4 sm:w-1/4 mx-auto"
            >
              {rest.loading ? "Submitting...." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
