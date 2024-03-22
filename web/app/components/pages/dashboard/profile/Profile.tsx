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
import UserInformation from "./UserInformation";
import getSession from "@/src/helper/getSession";
import { Loader2 } from "lucide-react";

export default function Profile({ cafeData, cafeUser }: CafeFormTypes) {
  const [setupCafe, SetSetupCafe] = useState(false);
  const { form, watchAllFields, errors } = useCafeProfileForm();
  const setCafe = useCafeData((state) => state.setCafe);
  const { onSubmit, ...rest } = useCafeProfileFormSubmit();
  const { session } = getSession();
  console.log(errors);
  useEffect(() => {
    if (cafeData === null || cafeData === undefined) {
      SetSetupCafe(true);
    } else {
      // get the defaultValues when there's data coming from api
      const defaultValues = generateDefaultValues(cafeData);
      form.reset(defaultValues);
      setCafe(cafeData);

      if (cafeData.hasMembership !== undefined) {
        form.setValue("hasMembership", cafeData.hasMembership);
      }

      if (cafeUser) {
        const { name, email, contact_number } = cafeUser;
        form.setValue("ownerName", name);
        form.setValue("email", email);
        form.setValue("contact_number", contact_number);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cafeData]);

  return (
    <div className="text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <div>
            <h2 className="text-4xl font-black mb-10">Profile</h2>
            {/* <UserInformation setUpCafe={setupCafe} {...form} {...rest} /> */}
            <BasicInformation setUpCafe={setupCafe} {...form} {...rest} />
          </div>

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
              {/* {rest.loading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )} */}

              {rest.loading ? "Submitting...." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
