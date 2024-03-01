import { useState } from "react";
import toast from "react-hot-toast";
import { CafeProfileType } from "./useCafeProfileForm";
import fetchWrapper from "@/src/helper/fetchWrapper";
import getSession from "@/src/helper/getSession";
import getFeaturesArray from "@/src/hooks/getFeatures";
import getStyleArray from "@/src/hooks/getStyles";
import getVibesArray from "@/src/hooks/getVibes";
import { useCreateImage } from "@/app/store/imageUpload";
import uploadImage from "@/src/queries/uploadImages";
import setUserCafe from "@/src/queries/setUserCafe";
import getAccessToken from "@/src/helper/getAccessToken";
import { useCafeData } from "@/app/store/cafeData";
import getAddressCoordinates from "@/src/helper/getAddressCoordinates";

export default function useCafeProfileFormSubmit() {
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { session } = getSession();

  const image = useCreateImage((state) => state.images);
  const cafeDetails = useCafeData((state) => state.cafe);

  async function onSubmit(data: CafeProfileType) {
    try {
      setLoading(true);
      const coordinates = await getAddressCoordinates(data.location);
      const features = getFeaturesArray(data);
      const styles = getStyleArray(data);
      const vibes = getVibesArray(data);
      const cafeData = {
        data: {
          ...data,
          ...(cafeDetails ? { id: cafeDetails.id } : {}),
          // Add slug only if cafeDetails is not present
          ...(cafeDetails
            ? {}
            : { slug: data.cafe_name.toLowerCase().replace(/\s+/g, "-") }),
          features: features.length > 0 ? features : null,
          styles: styles.length > 0 ? styles : null,
          vibes: vibes.length > 0 ? vibes : null,
          Longitude: coordinates?.longitude || 0,
          Latitute: coordinates?.latitude || 0,
        },
      };

      const accessToken = await getAccessToken();
      if (!accessToken) {
        throw new Error("Failed to fetch access token");
      }
      const response: Record<string, any> = await fetchWrapper({
        endpoint: cafeDetails ? `study-spots/${cafeDetails.id}` : "study-spots",
        options: {
          method: cafeDetails ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer  ${accessToken}`,
          },
          data: cafeData,
        },
      });
      if (response.error) {
        toast.error(`${response.error.error}`);
        setLoading(false);
        return;
      }

      const cafeId = response?.data?.data?.id;

      if (cafeId && !cafeDetails) {
        if (image.length > 0) {
          await uploadImage(image, cafeId);
        }
        if (session?.user?.id) {
          await setUserCafe(cafeId, session?.user?.id);
        }
      }

      toast.success("Cafe Details submitted successfully");
      setIsSubmitted(true);

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (error) {
      console.error("An error occurred:", error);

      return null;
    }
  }

  return { onSubmit, loading, isSubmitted };
}
