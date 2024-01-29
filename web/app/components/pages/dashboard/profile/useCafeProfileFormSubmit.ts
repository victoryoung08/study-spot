import { useState } from "react";
import toast from "react-hot-toast";
import { CafeProfileType } from "./useCafeProfileForm";
import fetchWrapper from "@/src/helper/fetchWrapper";
import getSession from "@/src/helper/getSession";

export default function useCafeProfileFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { session } = getSession();

  async function onSubmit(data: CafeProfileType) {
    try {
      setLoading(true);
      const cafeData = {
        data: {
          ...data,
          owner: session?.user?.id,

          location: "testaddress",
          slug: "cafe-name-test11",
          Longitude: 0,
          suburb: "test-suburb",
          Latitute: 0,
        },
      };
      console.log("cafeData", cafeData);

      const response = await fetchWrapper({
        endpoint: "study-spots",
        options: {
          method: "POST",
          data: cafeData,
        },
      });
      // console.log(response);
      if (response.error) {
        toast.error(`${response.error.error}`);
        setLoading(false);
        return;
      }

      // change toast message
      toast.success("Account created successfully");
      setIsSubmitted(true);
    } catch (error) {
      console.error("An error occurred:", error);

      return null;
    }
  }

  return { onSubmit, loading, isSubmitted };
}
