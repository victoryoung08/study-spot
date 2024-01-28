import { useState } from "react";
import toast from "react-hot-toast";
import { CafeProfileType } from "./useCafeProfileForm";
import fetchWrapper from "@/src/helper/fetchWrapper";

export default function useCafeProfileFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function onSubmit(data: CafeProfileType) {
    try {
      setLoading(true);

      const response = await fetchWrapper({
        endpoint: "study-spots",
        options: {
          method: "POST",
          data: {
            ...data,
          },
        },
      });

      if (response.error) {
        toast.error(`${response.error}`);
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
