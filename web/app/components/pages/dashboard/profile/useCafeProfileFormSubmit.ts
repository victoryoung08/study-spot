import { useState } from "react";
import toast from "react-hot-toast";
import { CafeProfileType } from "./useCafeProfileForm";
import fetchWrapper from "@/src/helper/fetchWrapper";
import getSession from "@/src/helper/getSession";
import getFeaturesArray from "@/src/hooks/getFeatures";
import getStyleArray from "@/src/hooks/getStyles";
import getVibesArray from "@/src/hooks/getVibes";

export default function useCafeProfileFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { session } = getSession();

  async function onSubmit(data: CafeProfileType) {
    try {
      setLoading(true);

      const features = getFeaturesArray(data);
      const styles = getStyleArray(data);
      const vibes = getVibesArray(data);
      const cafeData = {
        data: {
          ...data,
          owner: session?.user?.id,
          slug: data.cafe_name.toLowerCase().replace(/\s+/g, "-"), // Convert to lowercase and replace spaces with dashes
          features: features.length > 0 ? features : null,
          styles: styles.length > 0 ? styles : null,
          vibes: vibes.length > 0 ? vibes : null,
          // images: { data: data.images },
        },
      };
      console.log("cafedata", cafeData.data);

      // const response = await fetchWrapper({
      //   endpoint: "study-spots",
      //   options: {
      //     method: "POST",
      //     data: cafeData,
      //   },
      // });
      // // console.log("response", response);
      // if (response.error) {
      //   toast.error(`${response.error.error}`);
      //   setLoading(false);
      //   return;
      // }

      // // change toast message
      // toast.success("Cafe Details submitted successfully");
      // setIsSubmitted(true);
      // // setTimeout(() => {
      // //   window.location.reload();
      // // }, 500);
    } catch (error) {
      console.error("An error occurred:", error);

      return null;
    }
  }

  return { onSubmit, loading, isSubmitted };
}
