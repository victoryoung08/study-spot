"use client";
import { useEffect, useState } from "react";
import BasicInformation from "./BasicInformation";
import CafeDetails from "./CafeDetails";
import Links from "./Links";
import Promotion from "./Promotion";
import { Button } from "@/app/components/ui/button";
import useCafeProfileForm from "./useCafeProfileForm";
import useCafeProfileFormSubmit from "./useCafeProfileFormSubmit";
import { Form } from "@/app/components/ui/form";

export default function Profile({ cafeData }: any) {
  const [setupCafe, SetSetupCafe] = useState(false);
  const { form, watchAllFields, errors } = useCafeProfileForm();
  console.log(watchAllFields);
  useEffect(() => {
    if (cafeData === null || cafeData === undefined) {
      SetSetupCafe(true);
    }
  }, [cafeData]);

  const { onSubmit, ...rest } = useCafeProfileFormSubmit();
  // console.log("cafeData", cafeData);
  return (
    <div className="text-white">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="space-y-10"
        >
          <BasicInformation
            cafeData={cafeData}
            setUpCafe={setupCafe}
            {...form}
            {...rest}
          />
          <div className="flex flex-col md:flex-row gap-10 lg:gap-32">
            <CafeDetails cafeData={cafeData} {...form} {...rest} />
            <div className="space-y-10 md:w-2/4">
              <Links cafeData={cafeData} {...form} {...rest} />
              <Promotion
                cafeData={cafeData}
                setUpCafe={setupCafe}
                {...form}
                {...rest}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="border-2 bg-primary hover:bg-primary rounded-2xl h-8 xs:h-auto w-2/4 sm:w-1/4 mx-auto"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
